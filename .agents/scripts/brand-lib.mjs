// Shared rules for brand-check.mjs, brand-guard.mjs, and tokens-export.mjs.
// Node 18+, no dependencies. Token format: brand/_template/tokens.schema.json.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const ROOT = fs.realpathSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..'));

export const CATEGORIES = ['color', 'space', 'size', 'radius', 'border', 'shadow', 'font', 'motion', 'breakpoint', 'layers', 'opacity'];
const LAYERS = ['primitive', 'semantic', 'component'];
const TOKEN_KEYS = new Set(['id', 'name', 'layer', 'category', 'value', 'reference', 'theme', 'description', 'deprecated']);
const SHADOW_KEYS = ['offsetX', 'offsetY', 'blur', 'spread', 'color', 'inset'];
export const NAME_RE = /^[a-z][a-z0-9-]*(\.[a-z0-9][a-z0-9-]*)+$/;
export const HEX_RE = /^#([0-9a-f]{6}|[0-9a-f]{8})$/i;
export const DIM_RE = /^(-?\d+(?:\.\d+)?)(px|rem)$/;
export const DUR_RE = /^(\d+(?:\.\d+)?)(ms|s)$/;
const PACKET_FILES = [
  'BRAND-BRIEF.md',
  '01-strategy-foundation.md',
  '02-brand-positioning.md',
  '03-messaging-and-market.md',
  '04-decisions-and-questions.md',
  '05-launch-scope-and-capabilities.md',
  '06-trust-and-data-flows.md',
];

// Real path even for a file that does not exist yet, so symlinked paths compare equal to ROOT.
function realish(p) {
  let dir = path.resolve(p);
  const rest = [];
  while (!fs.existsSync(dir)) {
    const up = path.dirname(dir);
    if (up === dir) return path.resolve(p);
    rest.unshift(path.basename(dir));
    dir = up;
  }
  return path.join(fs.realpathSync(dir), ...rest);
}

export const rel = (abs) => path.relative(ROOT, realish(abs)).split(path.sep).join('/');
export const isOptionsPath = (relPath) => /^brand\/[^/]+\/options\//.test(relPath);
const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const isStrList = (v) => Array.isArray(v) && v.every((s) => typeof s === 'string');

// Which rule set applies to a repo-relative path (null = not a checked brand file).
export function kindOf(relPath) {
  if (/^brand\/[^/]+\/04-design-tokens\/tokens\.json$/.test(relPath)) return 'tokens';
  if (/^brand\/[^/]+\/options\/04-design-tokens-v\d+\.tokens\.json$/.test(relPath)) return 'tokens';
  if (/^brand\/[^/]+\/18-ai-ready-spec\/brand-spec\.json$/.test(relPath)) return 'spec';
  if (/^brand\/.+\.json$/.test(relPath)) return 'json';
  if (/^brand\/(?!_template\/)[^/]+\/product\/reference-screens\.md$/.test(relPath)) return 'doc';
  if (/^brand\/(?!_template\/)[^/]+\/.+\.md$/.test(relPath)) return relPath.split('/')[2] === 'product' ? 'packet' : 'doc';
  return null;
}

export function toPx(v) {
  const m = typeof v === 'string' && DIM_RE.exec(v);
  if (!m) return null;
  return m[2] === 'rem' ? Number(m[1]) * 16 : Number(m[1]);
}

function checkShadow(v) {
  const one = (s) => isObj(s)
    && ['offsetX', 'offsetY', 'blur', 'spread'].every((k) => typeof s[k] === 'string' && DIM_RE.test(s[k]))
    && typeof s.color === 'string' && HEX_RE.test(s.color)
    && (s.inset === undefined || typeof s.inset === 'boolean')
    && Object.keys(s).every((k) => SHADOW_KEYS.includes(k));
  const list = Array.isArray(v) ? v : [v];
  return list.length && list.every(one) ? null : 'shadow value must be {offsetX, offsetY, blur, spread (px/rem), color (hex), inset?} or a list of them';
}

function checkValue(t) {
  const v = t.value;
  const sub = t.name.split('.')[1];
  const dim = () => (typeof v === 'string' && DIM_RE.test(v) ? null : `value must be a px or rem string like "16px", got ${JSON.stringify(v)}`);
  switch (t.category) {
    case 'color':
      return typeof v === 'string' && HEX_RE.test(v) ? null : `color value must be hex #rrggbb or #rrggbbaa, got ${JSON.stringify(v)}`;
    case 'space':
      return dim() || (toPx(v) % 4 === 0 ? null : `space values must sit on the 4pt grid (multiples of 4px), got ${v}`);
    case 'size': case 'radius': case 'border': case 'breakpoint':
      return dim();
    case 'layers':
      return Number.isInteger(v) ? null : 'layers value must be an integer z-index';
    case 'opacity':
      return typeof v === 'number' && v >= 0 && v <= 1 ? null : 'opacity value must be a number from 0 to 1';
    case 'shadow':
      return checkShadow(v);
    case 'motion':
      if (sub === 'duration') return typeof v === 'string' && DUR_RE.test(v) ? null : `motion.duration value must be like "200ms" or "0.2s", got ${JSON.stringify(v)}`;
      if (sub === 'easing') {
        const ok = Array.isArray(v) && v.length === 4 && v.every((n) => typeof n === 'number') && v[0] >= 0 && v[0] <= 1 && v[2] >= 0 && v[2] <= 1;
        return ok ? null : 'motion.easing value must be a cubic-bezier list [x1, y1, x2, y2] with x1 and x2 from 0 to 1';
      }
      return 'motion names must be motion.duration.* or motion.easing.*';
    case 'font':
      if (sub === 'family') return (typeof v === 'string' && v) || (Array.isArray(v) && v.length && v.every((s) => typeof s === 'string' && s)) ? null : 'font.family value must be a font name or a list of names';
      if (sub === 'size' || sub === 'letter-spacing') return dim();
      if (sub === 'weight') return typeof v === 'number' && v >= 1 && v <= 1000 ? null : 'font.weight value must be a number from 1 to 1000';
      if (sub === 'line-height' || sub === 'scale') return typeof v === 'number' && v > 0 ? null : `font.${sub} value must be a positive number`;
      return 'font names must be font.family.*, font.size.*, font.weight.*, font.line-height.*, font.letter-spacing.*, or font.scale.*';
    default:
      return null;
  }
}

export function indexTokens(tokens) {
  const byName = new Map();
  for (const t of tokens) {
    if (!byName.has(t.name)) byName.set(t.name, []);
    byName.get(t.name).push(t);
  }
  return byName;
}

// Returns a list of problems; an empty list means the tokens file is valid.
export function checkTokens(data) {
  const errors = [];
  const err = (m) => errors.push(m);
  if (!isObj(data)) return ['a tokens file must be a JSON object'];
  for (const k of Object.keys(data)) if (!['$schema', 'schemaVersion', 'tokens'].includes(k)) err(`unknown top-level key "${k}"`);
  if (data.schemaVersion !== 1) err('schemaVersion must be 1');
  if (!Array.isArray(data.tokens) || data.tokens.length === 0) {
    err('"tokens" must be a non-empty list');
    return errors;
  }

  const valid = [];
  data.tokens.forEach((t, i) => {
    const at = `tokens[${i}]${isObj(t) && typeof t.name === 'string' ? ` (${t.name})` : ''}`;
    if (!isObj(t)) return err(`${at}: must be an object`);
    for (const k of Object.keys(t)) if (!TOKEN_KEYS.has(k)) err(`${at}: unknown key "${k}"`);
    if (typeof t.name !== 'string' || !NAME_RE.test(t.name)) return err(`${at}: name must be lowercase dot-separated segments, e.g. color.text.muted`);
    if (!LAYERS.includes(t.layer)) return err(`${at}: layer must be primitive, semantic, or component`);
    if (!CATEGORIES.includes(t.category)) return err(`${at}: category must be one of ${CATEGORIES.join(', ')}`);
    if (t.layer !== 'component' && t.name.split('.')[0] !== t.category) err(`${at}: ${t.layer} names must start with their category ("${t.category}.")`);
    if (t.theme !== undefined && !['light', 'dark'].includes(t.theme)) err(`${at}: theme must be light or dark`);
    const wantId = t.theme ? `${t.name}.${t.theme}` : t.name;
    if (t.id !== wantId) err(`${at}: id must be "${wantId}"`);
    if (t.layer === 'primitive') {
      if (t.reference !== undefined) err(`${at}: primitives hold a value, not a reference`);
      if (t.theme !== undefined) err(`${at}: primitives have no theme; put light/dark on semantic tokens`);
      if (t.value === undefined) err(`${at}: primitives need a value`);
      else {
        const m = checkValue(t);
        if (m) err(`${at}: ${m}`);
      }
    } else {
      if (t.value !== undefined) err(`${at}: ${t.layer} tokens hold a reference, not a value`);
      if (typeof t.reference !== 'string') err(`${at}: ${t.layer} tokens need a reference`);
      if (t.layer === 'component' && t.theme !== undefined) err(`${at}: component tokens have no theme; they follow their semantic token`);
    }
    if (t.description !== undefined && typeof t.description !== 'string') err(`${at}: description must be a string`);
    if (t.deprecated !== undefined && !['boolean', 'string'].includes(typeof t.deprecated)) err(`${at}: deprecated must be true, false, or a reason`);
    valid.push(t);
  });

  const byName = indexTokens(valid);
  for (const [name, list] of byName) {
    if (new Set(list.map((t) => t.layer)).size > 1) {
      err(`${name}: the same name is used in more than one layer`);
      continue;
    }
    if (list[0].layer === 'semantic') {
      const themes = list.map((t) => t.theme);
      const themed = themes.some(Boolean);
      if (themed && !(list.length === 2 && themes.includes('light') && themes.includes('dark'))) err(`${name}: a themed semantic token needs exactly one light and one dark entry`);
      if (!themed && list.length > 1) err(`${name}: duplicate name`);
      if (!themed && list[0].category === 'color') err(`${name}: semantic colors need a light and a dark entry`);
    } else if (list.length > 1) {
      err(`${name}: duplicate name`);
    }
    for (const t of list) {
      if (t.layer === 'primitive' || typeof t.reference !== 'string') continue;
      const target = byName.get(t.reference);
      const wantLayer = t.layer === 'semantic' ? 'primitive' : 'semantic';
      if (!target) err(`${t.id}: reference "${t.reference}" does not exist`);
      else if (target[0].layer !== wantLayer) err(`${t.id}: ${t.layer} tokens must reference a ${wantLayer} token, but "${t.reference}" is ${target[0].layer}`);
      else if (target[0].category !== t.category) err(`${t.id}: "${t.reference}" is a ${target[0].category} token, not ${t.category}`);
    }
    const parts = name.split('.');
    for (let i = 2; i < parts.length; i++) {
      const prefix = parts.slice(0, i).join('.');
      if (byName.has(prefix)) err(`${prefix}: cannot be a token and also the start of "${name}"`);
    }
  }

  const primitive = (n) => byName.get(n)?.find((t) => t.layer === 'primitive');
  const cssNames = new Map();
  for (const name of byName.keys()) {
    const css = name.replace(/\./g, '-');
    if (cssNames.has(css)) err(`${name}: becomes the same CSS variable (--${css}) as ${cssNames.get(css)}`);
    else cssNames.set(css, name);
  }
  if (!valid.some((t) => t.category === 'layers')) err('invariant: add a layers.* z-index scale');
  const touch = primitive('size.touch-target.min');
  if (!touch) err('invariant: add a primitive size.touch-target.min of at least 44px');
  else if (toPx(touch.value) !== null && toPx(touch.value) < 44) err('invariant: size.touch-target.min must be at least 44px');
  if (!primitive('font.scale.max')) err('invariant: add a primitive font.scale.max (the largest font-scaling multiplier the UI supports)');
  return [...new Set(errors)];
}

// Key-order-independent JSON, so a copied tokens file compares equal to its source.
export function canonical(v) {
  if (Array.isArray(v)) return `[${v.map(canonical).join(',')}]`;
  if (isObj(v)) return `{${Object.keys(v).sort().map((k) => `${JSON.stringify(k)}:${canonical(v[k])}`).join(',')}}`;
  return JSON.stringify(v);
}

export function checkSpec(data, relPath) {
  const errors = [];
  const err = (m) => errors.push(m);
  if (!isObj(data)) return ['brand-spec.json must be a JSON object'];
  const slug = relPath.split('/')[1];
  const projectDir = path.join(ROOT, 'brand', slug);
  const docExists = (p) => typeof p === 'string' && p && fs.existsSync(path.join(projectDir, p));
  const allowed = ['$schema', 'specVersion', 'slug', 'changelog', 'foundation', 'tokens', 'voice', 'components', 'printColors', 'subsystems'];
  for (const k of Object.keys(data)) if (!allowed.includes(k)) err(`unknown top-level key "${k}"`);
  for (const k of ['specVersion', 'slug', 'foundation', 'tokens', 'subsystems']) if (data[k] === undefined) err(`missing "${k}"`);
  if (data.specVersion !== undefined && !(Number.isInteger(data.specVersion) && data.specVersion >= 1)) err('specVersion must be a whole number of at least 1');
  if (data.slug !== undefined && data.slug !== slug) err(`slug must be "${slug}" (the project folder name)`);

  if (data.changelog !== undefined) {
    if (!Array.isArray(data.changelog)) err('changelog must be a list');
    else data.changelog.forEach((c, i) => {
      if (!isObj(c) || !Number.isInteger(c.version) || typeof c.summary !== 'string' || Object.keys(c).some((k) => !['version', 'summary'].includes(k))) err(`changelog[${i}] must be {version, summary}`);
    });
  }

  const f = data.foundation;
  if (f !== undefined) {
    if (!isObj(f)) err('foundation must be an object');
    else {
      for (const k of Object.keys(f)) if (!['name', 'positioning', 'audience', 'personality', 'values', 'voice'].includes(k)) err(`foundation: unknown key "${k}"`);
      for (const k of ['name', 'positioning', 'voice']) if (typeof f[k] !== 'string' || !f[k]) err(`foundation.${k} must be a non-empty string`);
      for (const k of ['audience', 'personality']) if (!isStrList(f[k])) err(`foundation.${k} must be a list of strings`);
      if (f.values !== undefined && !isStrList(f.values)) err('foundation.values must be a list of strings');
    }
  }

  let names = new Set();
  let byName = new Map();
  if (data.tokens !== undefined) {
    for (const m of checkTokens(data.tokens)) err(`tokens: ${m}`);
    const list = Array.isArray(data.tokens?.tokens) ? data.tokens.tokens.filter(isObj) : [];
    byName = indexTokens(list);
    names = new Set(byName.keys());
    const source = path.join(projectDir, '04-design-tokens', 'tokens.json');
    if (!fs.existsSync(source)) err('tokens: 04-design-tokens/tokens.json does not exist yet');
    else {
      try {
        if (canonical(JSON.parse(fs.readFileSync(source, 'utf8'))) !== canonical(data.tokens)) err('tokens must be an exact copy of 04-design-tokens/tokens.json; regenerate the spec');
      } catch { /* tokens.json has its own check */ }
    }
  }

  const v = data.voice;
  if (v !== undefined) {
    if (!isObj(v) || !isStrList(v.traits) || (v.rules !== undefined && !isStrList(v.rules)) || Object.keys(v).some((k) => !['traits', 'rules', 'doc'].includes(k))) err('voice must be {traits, rules?, doc}');
    else if (!docExists(v.doc)) err(`voice.doc "${v.doc}" does not exist in brand/${slug}/`);
  }

  if (data.components !== undefined) {
    if (!Array.isArray(data.components)) err('components must be a list');
    else data.components.forEach((c, i) => {
      if (!isObj(c) || typeof c.name !== 'string' || !isStrList(c.tokens) || Object.keys(c).some((k) => !['name', 'doc', 'tokens'].includes(k))) return err(`components[${i}] must be {name, doc, tokens}`);
      if (!docExists(c.doc)) err(`components[${i}] (${c.name}): doc "${c.doc}" does not exist in brand/${slug}/`);
      for (const n of c.tokens) if (!names.has(n)) err(`components[${i}] (${c.name}): token "${n}" is not in tokens`);
    });
  }

  if (data.printColors !== undefined) {
    const keys = ['tokenId', 'hex', 'pantoneCoated', 'pantoneUncoated', 'cmyk', 'ral', 'vinyl', 'thread'];
    if (!Array.isArray(data.printColors)) err('printColors must be a list');
    else data.printColors.forEach((p, i) => {
      if (!isObj(p)) return err(`printColors[${i}] must be an object`);
      for (const k of Object.keys(p)) if (!keys.includes(k)) err(`printColors[${i}]: unknown key "${k}"`);
      const source = byName.get(p.tokenId)?.find((t) => t.layer === 'primitive' && t.category === 'color');
      if (!source) err(`printColors[${i}]: tokenId "${p.tokenId}" must be a primitive color token`);
      else if (typeof p.hex !== 'string' || p.hex.toLowerCase() !== String(source.value).toLowerCase().slice(0, 7)) err(`printColors[${i}]: hex must equal ${String(source.value).slice(0, 7)}, the color of ${p.tokenId}; print colors never add a new color`);
      if (p.cmyk !== undefined && !(Array.isArray(p.cmyk) && p.cmyk.length === 4 && p.cmyk.every((n) => typeof n === 'number' && n >= 0 && n <= 100))) err(`printColors[${i}]: cmyk must be four numbers from 0 to 100`);
    });
  }

  if (data.subsystems !== undefined) {
    if (!isObj(data.subsystems)) err('subsystems must be an object of folder -> doc path');
    else for (const [folder, doc] of Object.entries(data.subsystems)) {
      if (!/^\d\d-[a-z-]+$/.test(folder)) err(`subsystems: "${folder}" is not a subsystem folder name`);
      else if (!docExists(doc)) err(`subsystems.${folder}: "${doc}" does not exist in brand/${slug}/`);
    }
  }
  return [...new Set(errors)];
}

export function readFrontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text);
  if (!m) return null;
  const fm = {};
  const dups = [];
  for (const line of m[1].split(/\r?\n/)) {
    const mm = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!mm) continue;
    if (mm[1] in fm) dups.push(mm[1]);
    fm[mm[1]] = mm[2].replace(/\s+#.*$/, '').replace(/^["']|["']$/g, '').trim();
  }
  return { fm, dups };
}

export function checkFrontmatter(text, kind) {
  const parsed = readFrontmatter(text);
  if (!parsed) return kind === 'packet' ? [] : ['missing frontmatter (status, version, owner)'];
  const { fm, dups } = parsed;
  const errors = dups.map((k) => `duplicate frontmatter key "${k}"`);
  if (!['draft', 'approved'].includes(fm.status)) errors.push('frontmatter status must be draft or approved');
  if (!/^[1-9]\d*$/.test(fm.version || '')) errors.push('frontmatter version must be a whole number of at least 1');
  if (!fm.owner) errors.push('frontmatter owner is required');
  return errors;
}

// Checks one file. Pass `content` to check text before it is written.
export function checkFile(absPath, content) {
  const relPath = rel(absPath);
  const kind = kindOf(relPath);
  if (!kind) return [];
  let text = content;
  if (text === undefined) {
    try { text = fs.readFileSync(absPath, 'utf8'); } catch { return []; }
  }
  if (kind === 'doc' || kind === 'packet') return checkFrontmatter(text, kind);
  let data;
  try { data = JSON.parse(text); } catch (e) { return [`invalid JSON: ${e.message}`]; }
  if (kind === 'tokens') return checkTokens(data);
  if (kind === 'spec') return checkSpec(data, relPath);
  return [];
}

// Missing or unconfirmed packet files for one project (empty = confirmed).
export function packetGaps(slug) {
  const dir = path.join(ROOT, 'brand', slug, 'product');
  return PACKET_FILES.filter((f) => {
    const p = path.join(dir, f);
    return !fs.existsSync(p) || readFrontmatter(fs.readFileSync(p, 'utf8'))?.fm.status !== 'approved';
  });
}

// The approved neutral product fixture required before any numbered subsystem.
export function referenceScreensApproved(slug) {
  const p = path.join(ROOT, 'brand', slug, 'product', 'reference-screens.md');
  return fs.existsSync(p) && readFrontmatter(fs.readFileSync(p, 'utf8'))?.fm.status === 'approved';
}

export function referenceScreenGaps(slug) {
  return referenceScreensApproved(slug) ? [] : ['product/reference-screens.md'];
}

export function hasReferenceScreenOptions(slug) {
  const dir = path.join(ROOT, 'brand', slug, 'options');
  return fs.existsSync(dir) && fs.readdirSync(dir).some((f) => /^product-reference-screens-v\d+\.html$/.test(f));
}

export function projects() {
  const dir = path.join(ROOT, 'brand');
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
    .map((d) => d.name);
}

// The run order and folder map, parsed from AGENTS.md so they live in one place only.
let order;
export function runOrder() {
  if (order) return order;
  const text = fs.readFileSync(path.join(ROOT, 'AGENTS.md'), 'utf8');
  const skills = new Map([...text.matchAll(/^\| \d\d \| `(\d\d-[a-z-]+)` \| `([a-z-]+)` \|/gm)].map((m) => [m[1], m[2]]));
  order = new Map();
  for (const [, step, folder, type, req] of text.matchAll(/^\| (\d+) \| `(\d\d-[a-z-]+)` \| (Decision|Compile) \| (.+?) \|$/gm)) {
    order.set(folder.slice(0, 2), {
      step: Number(step), folder, type, skill: skills.get(folder),
      requires: [...req.matchAll(/\b(\d\d)\b/g)].map((m) => m[1]),
    });
  }
  if (order.size !== 22) throw new Error(`AGENTS.md run order table has ${order.size} rows, expected 22`);
  return order;
}

// Approved = main doc at status: approved; for 04, tokens.json exists.
export function isApproved(slug, nn) {
  const entry = runOrder().get(nn);
  if (!entry) return false;
  const dir = path.join(ROOT, 'brand', slug, entry.folder);
  if (nn === '04') return fs.existsSync(path.join(dir, 'tokens.json'));
  const doc = path.join(dir, `${entry.folder.slice(3)}.md`);
  return fs.existsSync(doc) && readFrontmatter(fs.readFileSync(doc, 'utf8'))?.fm.status === 'approved';
}

export function prereqGaps(slug, nn) {
  const entry = runOrder().get(nn);
  return entry ? entry.requires.filter((r) => !isApproved(slug, r)).map((r) => runOrder().get(r)) : [];
}

export function hasOptions(slug, folder) {
  const dir = path.join(ROOT, 'brand', slug, 'options');
  return fs.existsSync(dir) && fs.readdirSync(dir).some((f) => f.startsWith(folder) && /-v\d+\.html$/.test(f));
}

// Option files that a git diff changes, deletes, or moves. diffArgs: ['--cached'] or [base, 'HEAD'].
export function optionsRewrites(diffArgs) {
  const out = execFileSync('git', ['diff', '--name-status', '-M', ...diffArgs], { cwd: ROOT, encoding: 'utf8' });
  const bad = [];
  for (const line of out.split('\n').filter(Boolean)) {
    const [status, from, to] = line.split('\t');
    if (!isOptionsPath(from)) continue;
    if (status[0] === 'M' || status[0] === 'T') bad.push(`changed ${from}`);
    else if (status[0] === 'D') bad.push(`deleted ${from}`);
    else if (status[0] === 'R') bad.push(`moved ${from} -> ${to}`);
  }
  return bad;
}
