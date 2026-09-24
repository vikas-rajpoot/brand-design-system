#!/usr/bin/env node
// Agent hook for VS Code, Copilot CLI/cloud agent, Claude Code, Codex, and Antigravity.
//   pre:  blocks edits to existing options/ files, brand writes that skip intake or the run order,
//         hand edits to generated token files, and new brand files that fail their check.
//   post: reports problems in brand files the tool just wrote, so the agent fixes them.
// Reports use exit 2 + stderr (plus each tool's JSON shape). Anything unexpected fails open.
import fs from 'node:fs';
import path from 'node:path';
import {
  rel, kindOf, isOptionsPath, checkFile, packetGaps,
  referenceScreensApproved, hasReferenceScreenOptions,
  runOrder, prereqGaps, hasOptions,
} from './brand-lib.mjs';

const mode = process.argv[2] === 'post' ? 'post' : 'pre';
const GENERATED = /^brand\/[^/]+\/04-design-tokens\/(tokens\.css|tokens\.dtcg\.json|tokens\.dark\.dtcg\.json)$/;
const PATH_KEYS = ['filePath', 'file_path', 'path', 'file', 'TargetFile', 'notebook_path'];
const CONTENT_KEYS = ['content', 'file_text', 'CodeContent'];
const EDIT_KEYS = ['oldString', 'old_string', 'old_str', 'newString', 'new_string', 'new_str', 'edits', 'code', 'new_source', 'insert_text', 'ReplacementContent', 'ReplacementChunks'];
const OPT = String.raw`[^\s'";&|<>]*brand/[^\s'";&|<>/]+/options/[^\s'";&|<>]*`;
const SHELL_REWRITES = [
  new RegExp(String.raw`(^|[\s;&|(])(rm|unlink|shred|truncate)\s[^;&|]*${OPT}`),
  new RegExp(String.raw`(^|[\s;&|(])git\s+(rm|mv)\s[^;&|]*${OPT}`),
  new RegExp(String.raw`(^|[\s;&|(])sed\s+(-[a-zA-Z]*i\S*|--in-place)\s[^;&|]*${OPT}`),
];

function readPayload() {
  try { return JSON.parse(fs.readFileSync(0, 'utf8') || '{}'); } catch { return null; }
}

function collect(payload) {
  let input = payload.tool_input ?? payload.toolArgs ?? payload.toolCall?.args ?? {};
  if (typeof input === 'string') {
    try { input = JSON.parse(input); } catch { input = { command: input }; }
  }
  const cwd = payload.cwd || process.cwd();
  const ops = [];
  const shell = [];

  const fromObject = (obj) => {
    if (!obj || typeof obj !== 'object' || obj.command === 'view') return;
    const key = PATH_KEYS.find((k) => typeof obj[k] === 'string');
    if (key) {
      const content = CONTENT_KEYS.map((k) => obj[k]).find((v) => typeof v === 'string');
      if (content !== undefined) ops.push({ file: path.resolve(cwd, obj[key]), kind: 'write', content });
      else if (EDIT_KEYS.some((k) => k in obj)) ops.push({ file: path.resolve(cwd, obj[key]), kind: 'edit' });
    }
    for (const list of [obj.replacements, obj.edits, obj.files]) if (Array.isArray(list)) list.forEach(fromObject);
  };

  const fromPatch = (text) => {
    let current = null;
    for (const line of text.split(/\r?\n/)) {
      const m = /^\*\*\* (Add|Update|Delete) File: (.+)$/.exec(line);
      const move = /^\*\*\* Move to: (.+)$/.exec(line);
      if (m) {
        current = { file: path.resolve(cwd, m[2].trim()), kind: { Add: 'write', Update: 'edit', Delete: 'delete' }[m[1]] };
        if (current.kind === 'write') current.content = '';
        ops.push(current);
      } else if (move && current) {
        current.kind = 'move';
        ops.push({ file: path.resolve(cwd, move[1].trim()), kind: 'write' });
      } else if (current?.kind === 'write' && current.content !== undefined && line.startsWith('+')) {
        current.content += `${line.slice(1)}\n`;
      } else if (line.startsWith('***')) {
        current = null;
      }
    }
  };

  fromObject(input);
  for (const value of Object.values(input)) {
    if (typeof value !== 'string') continue;
    if (value.includes('*** Begin Patch')) fromPatch(value);
    else if (value === input.command) shell.push(value);
  }
  return { ops, shell, cwd };
}

const stepOf = (sub) => {
  const nn = (/^options\/(\d\d)-/.exec(sub) || /^(\d\d)-[a-z-]+\//.exec(sub))?.[1];
  return nn && runOrder().has(nn) ? nn : null;
};

const isReferenceScreenOption = (sub) => /^options\/product-reference-screens-v\d+\.html$/.test(sub);

function preProblems(op) {
  const r = rel(op.file);
  if (r.startsWith('..')) return [];
  const problems = [];
  if (isOptionsPath(r) && fs.existsSync(op.file) && op.kind !== 'write-new') {
    problems.push(`${r} already exists, and options/ is append-only. Save the change as the next -v<n> file.`);
  }
  if (GENERATED.test(r)) problems.push(`${r} is generated. Edit tokens.json, then run: node .agents/scripts/tokens-export.mjs ${r.split('/')[1]}`);

  const m = /^brand\/([^/]+)\/(.+)$/.exec(r);
  if (m && !m[1].startsWith('_') && m[2] === 'product/reference-screens.md' && op.kind !== 'delete') {
    const [, slug] = m;
    const gaps = packetGaps(slug);
    if (gaps.length) {
      problems.push(`the product packet for "${slug}" is not confirmed (${gaps.join(', ')} need status: approved). Run /product-intake before reference screens.`);
    } else if (!hasReferenceScreenOptions(slug)) {
      problems.push(`show the reference-screen options in options/product-reference-screens-v1.html and get the user's explicit choice before writing ${r}.`);
    }
  } else if (m && !m[1].startsWith('_') && !m[2].startsWith('product/') && op.kind !== 'delete') {
    const [, slug, sub] = m;
    const gaps = packetGaps(slug);
    if (gaps.length) {
      problems.push(`the product packet for "${slug}" is not confirmed (${gaps.join(', ')} need status: approved). Run /product-intake before any brand work.`);
    } else if (!isReferenceScreenOption(sub) && !referenceScreensApproved(slug)) {
      problems.push(`the reference-screen fixture for "${slug}" is not approved. Run /reference-screens and approve product/reference-screens.md before numbered brand work.`);
    } else {
      const nn = stepOf(sub);
      const entry = nn && runOrder().get(nn);
      const missing = nn ? prereqGaps(slug, nn) : [];
      if (missing.length) {
        problems.push(`${entry.folder} needs ${missing.map((e) => e.folder).join(', ')} approved first. Run ${missing.map((e) => `/${e.skill}`).join(', ')}.`);
      } else if (entry && !sub.startsWith('options/') && nn !== '18' && !hasOptions(slug, entry.folder)) {
        problems.push(`show the options in options/${entry.folder}-v1.html and get the user's explicit choice before writing ${r}.`);
      }
    }
  }
  if (op.content !== undefined && kindOf(r)) problems.push(...checkFile(op.file, op.content).map((p) => `${r}: ${p}`));
  return problems;
}

function preShellProblems(command, cwd) {
  const problems = [];
  if (SHELL_REWRITES.some((re) => re.test(command))) problems.push('this command deletes or rewrites files in options/, which is append-only. Save changes as the next -v<n> file.');
  for (const m of command.matchAll(new RegExp(String.raw`>{1,2}\s*['"]?(${OPT})`, 'g'))) {
    if (fs.existsSync(path.resolve(cwd, m[1]))) problems.push(`this command overwrites ${m[1]}, and options/ is append-only.`);
  }
  return problems;
}

function postProblems(op) {
  const r = rel(op.file);
  if (r.startsWith('..') || op.kind === 'delete' || op.kind === 'move' || !fs.existsSync(op.file)) return [];
  return checkFile(op.file).map((p) => `${r}: ${p}`);
}

function respond(payload, problems) {
  const antigravity = Boolean(payload.toolCall);
  const copilotCli = 'toolName' in payload || 'toolArgs' in payload;
  if (!problems.length) {
    if (antigravity) process.stdout.write(`${JSON.stringify(mode === 'pre' ? { decision: 'allow' } : {})}\n`);
    process.exit(0);
  }
  const shown = problems.slice(0, 15);
  if (problems.length > shown.length) shown.push(`...and ${problems.length - shown.length} more. Run: node .agents/scripts/brand-check.mjs`);
  const reason = `Brand OS ${mode === 'pre' ? 'blocked this change' : 'found problems in the file just written'}:\n- ${shown.join('\n- ')}`;
  if (antigravity) {
    process.stdout.write(`${JSON.stringify(mode === 'pre' ? { decision: 'deny', reason } : {})}\n`);
    if (mode === 'post') process.stderr.write(`${reason}\n`);
    process.exit(0);
  }
  if (copilotCli && mode === 'post') {
    process.stdout.write(`${JSON.stringify({ additionalContext: reason })}\n`);
    process.exit(0);
  }
  if (copilotCli) process.stdout.write(`${JSON.stringify({ permissionDecision: 'deny', permissionDecisionReason: reason })}\n`);
  process.stderr.write(`${reason}\n`);
  process.exit(2);
}

try {
  const payload = readPayload();
  if (!payload) process.exit(0);
  const { ops, shell, cwd } = collect(payload);
  for (const op of ops) if (op.kind === 'write' && !fs.existsSync(op.file)) op.kind = 'write-new';
  const problems = mode === 'pre'
    ? [...ops.flatMap(preProblems), ...shell.flatMap((c) => preShellProblems(c, cwd))]
    : ops.flatMap(postProblems);
  respond(payload, [...new Set(problems)]);
} catch (e) {
  if (process.env.BRAND_GUARD_DEBUG) process.stderr.write(`brand-guard: ${e.stack}\n`);
  process.exit(0);
}
