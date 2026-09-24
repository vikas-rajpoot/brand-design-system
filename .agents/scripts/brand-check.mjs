#!/usr/bin/env node
// Checks brand files, project rules (intake, run order, review files, generated exports), and Markdown links.
// Usage:
//   node .agents/scripts/brand-check.mjs                        everything (CI and manual runs)
//   node .agents/scripts/brand-check.mjs <file>...              only these files
//   node .agents/scripts/brand-check.mjs --staged               staged brand files + options rule (pre-commit)
//   node .agents/scripts/brand-check.mjs --range <base> [head]  options rule for a commit range (CI)
// Set BRAND_ALLOW_OPTIONS_REWRITE=1 to allow an intentional change to existing options/ files.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import {
  ROOT, rel, kindOf, checkFile, checkTokens, packetGaps, projects, runOrder,
  referenceScreensApproved, hasReferenceScreenOptions,
  isApproved, prereqGaps, hasOptions, optionsRewrites,
} from './brand-lib.mjs';
import { exportFiles } from './tokens-export.mjs';

const errors = [];
const warnings = [];
const add = (where, msgs) => msgs.forEach((m) => errors.push(`${where}: ${m}`));
const git = (args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

function walk(dir, skip = () => false, out = []) {
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, d.name);
    if (d.name === '.DS_Store' || skip(rel(p))) continue;
    if (d.isDirectory()) walk(p, skip, out);
    else if (d.isFile()) out.push(p);
  }
  return out;
}

function checkProject(slug) {
  const dir = path.join(ROOT, 'brand', slug);
  const started = fs.readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory() && d.name !== 'product').map((d) => d.name);
  const gaps = packetGaps(slug);
  if (gaps.length && started.length) {
    errors.push(`brand/${slug}: brand work exists (${started.join(', ')}) but the product packet is not confirmed (${gaps.join(', ')} need status: approved). Run /product-intake.`);
  } else if (gaps.length) {
    warnings.push(`brand/${slug}: product packet not confirmed yet (${gaps.length} of 5 files need status: approved). Run /product-intake before brand work.`);
  }
  const optionsDir = path.join(dir, 'options');
  const numberedOptions = fs.existsSync(optionsDir) && fs.readdirSync(optionsDir).some((f) => /^\d\d-[a-z-]+-v\d+\.(html|tokens\.json)$/.test(f));
  const numberedFolders = fs.readdirSync(dir, { withFileTypes: true }).some((d) => d.isDirectory() && /^\d\d-[a-z-]+$/.test(d.name));
  const screensApproved = referenceScreensApproved(slug);
  if (screensApproved && !hasReferenceScreenOptions(slug)) {
    errors.push(`brand/${slug}/product/reference-screens.md: approved without a review file options/product-reference-screens-v<n>.html`);
  }
  if (!gaps.length && !screensApproved) {
    if (numberedOptions || numberedFolders) {
      errors.push(`brand/${slug}: numbered brand work exists before product/reference-screens.md is approved. Run /reference-screens first.`);
    } else {
      warnings.push(`brand/${slug}: reference screens are not approved yet. Run /reference-screens before numbered brand work.`);
    }
  }
  for (const [nn, entry] of runOrder()) {
    if (!isApproved(slug, nn)) continue;
    const missing = prereqGaps(slug, nn);
    if (missing.length) errors.push(`brand/${slug}/${entry.folder}: approved before its prerequisites (${missing.map((e) => e.folder).join(', ')})`);
    if (nn !== '18' && !hasOptions(slug, entry.folder)) errors.push(`brand/${slug}/${entry.folder}: approved without a review file options/${entry.folder}-v<n>.html`);
  }
  const tokensFile = path.join(dir, '04-design-tokens', 'tokens.json');
  if (!fs.existsSync(tokensFile)) return;
  let data;
  try { data = JSON.parse(fs.readFileSync(tokensFile, 'utf8')); } catch { return; }
  if (checkTokens(data).length) return;
  for (const [name, content] of Object.entries(exportFiles(data))) {
    const p = path.join(dir, '04-design-tokens', name);
    if (!fs.existsSync(p) || fs.readFileSync(p, 'utf8') !== content) {
      errors.push(`brand/${slug}/04-design-tokens/${name}: missing or out of date. Run: node .agents/scripts/tokens-export.mjs ${slug}`);
    }
  }
}

function checkLinks() {
  const skip = (r) => /^(\.git|node_modules|external|\.claude|\.codex|\.github\/skills)(\/|$)/.test(r);
  for (const f of walk(ROOT, skip).filter((p) => p.endsWith('.md'))) {
    const text = fs.readFileSync(f, 'utf8').replace(/```[\s\S]*?```/g, '');
    for (const m of text.matchAll(/\]\(([^)\s]+)\)/g)) {
      const target = m[1].split('#')[0];
      if (!target || /^(https?:|mailto:)/.test(target) || /[<$]/.test(target)) continue;
      let decoded = target;
      try { decoded = decodeURIComponent(target); } catch { /* keep raw */ }
      if (!fs.existsSync(path.resolve(path.dirname(f), decoded))) errors.push(`${rel(f)}: broken link ${m[1]}`);
    }
  }
}

function optionsRule(diffArgs, label) {
  const bad = optionsRewrites(diffArgs);
  if (!bad.length) return;
  if (process.env.BRAND_ALLOW_OPTIONS_REWRITE === '1') {
    warnings.push(`${label}: options rewrite allowed by BRAND_ALLOW_OPTIONS_REWRITE=1 (${bad.join('; ')})`);
    return;
  }
  for (const b of bad) {
    errors.push(`${label}: options/ is append-only, but this ${b}. Save changes as the next -v<n> file (set BRAND_ALLOW_OPTIONS_REWRITE=1 only for an intentional rewrite).`);
  }
}

const args = process.argv.slice(2);
if (args[0] === '--staged') {
  const staged = git(['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z']).split('\0').filter(Boolean);
  const slugs = new Set();
  for (const r of staged) {
    const slug = /^brand\/([^_/][^/]*)\//.exec(r)?.[1];
    if (slug) slugs.add(slug);
    if (kindOf(r)) add(r, checkFile(path.join(ROOT, r), git(['show', `:${r}`])));
  }
  for (const slug of slugs) if (fs.existsSync(path.join(ROOT, 'brand', slug))) checkProject(slug);
  optionsRule(['--cached'], 'staged changes');
} else if (args[0] === '--range') {
  if (!args[1]) {
    console.error('usage: brand-check.mjs --range <base> [head]');
    process.exit(2);
  }
  optionsRule([args[1], args[2] || 'HEAD'], `commits ${args[1].slice(0, 7)}..${args[2] || 'HEAD'}`);
} else if (args.length) {
  for (const a of args) {
    const abs = path.resolve(a);
    if (!fs.existsSync(abs)) errors.push(`${a}: file not found`);
    else if (!kindOf(rel(abs))) warnings.push(`${a}: not a checked brand file (brand/**/*.json or brand/<slug>/**/*.md)`);
    else add(rel(abs), checkFile(abs));
  }
} else {
  for (const f of walk(path.join(ROOT, 'brand'))) add(rel(f), checkFile(f));
  for (const slug of projects()) checkProject(slug);
  checkLinks();
}

for (const w of warnings) console.log(`warning: ${w}`);
for (const e of errors) console.error(`error: ${e}`);
if (errors.length) {
  console.error(`brand-check: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`brand-check: OK${warnings.length ? ` (${warnings.length} warning${warnings.length > 1 ? 's' : ''})` : ''}`);
