#!/usr/bin/env node
// Generates tokens.css and W3C DTCG 2025.10 files from a checked tokens.json. Never edit the outputs by hand.
// Usage: node .agents/scripts/tokens-export.mjs <project-slug | path/to/tokens.json>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOT, rel, checkTokens, indexTokens, DIM_RE, DUR_RE } from './brand-lib.mjs';

const NOTE = 'Generated from tokens.json by .agents/scripts/tokens-export.mjs. Do not edit by hand.';
const GENERIC_FONTS = new Set(['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui', 'ui-serif', 'ui-sans-serif', 'ui-monospace', 'ui-rounded', 'math', 'emoji', 'fangsong']);

function dtcgType(category, sub) {
  if (category === 'color') return 'color';
  if (['space', 'size', 'radius', 'border', 'breakpoint'].includes(category)) return 'dimension';
  if (category === 'shadow') return 'shadow';
  if (category === 'motion') return sub === 'duration' ? 'duration' : 'cubicBezier';
  if (category === 'font') return { family: 'fontFamily', weight: 'fontWeight', size: 'dimension', 'letter-spacing': 'dimension' }[sub] ?? 'number';
  return 'number';
}

const round = (n) => Math.round(n * 10000) / 10000;
function color(hex) {
  const h = hex.slice(1).toLowerCase();
  const out = { colorSpace: 'srgb', components: [0, 2, 4].map((i) => round(parseInt(h.slice(i, i + 2), 16) / 255)) };
  if (h.length === 8) out.alpha = round(parseInt(h.slice(6), 16) / 255);
  out.hex = `#${h.slice(0, 6)}`;
  return out;
}
const measure = (re) => (s) => {
  const m = re.exec(s);
  return { value: Number(m[1]), unit: m[2] };
};
const dimension = measure(DIM_RE);
const duration = measure(DUR_RE);

function dtcgValue(type, v) {
  if (type === 'color') return color(v);
  if (type === 'dimension') return dimension(v);
  if (type === 'duration') return duration(v);
  if (type === 'shadow') {
    const one = (s) => ({
      color: color(s.color), offsetX: dimension(s.offsetX), offsetY: dimension(s.offsetY),
      blur: dimension(s.blur), spread: dimension(s.spread), ...(s.inset ? { inset: true } : {}),
    });
    return Array.isArray(v) ? v.map(one) : one(v);
  }
  return v;
}

function cssValue(type, v) {
  if (type === 'color') return v.toLowerCase();
  if (type === 'cubicBezier') return `cubic-bezier(${v.join(', ')})`;
  if (type === 'fontFamily') {
    return [].concat(v).map((f) => (GENERIC_FONTS.has(f) || /^[a-z][a-z0-9-]*$/i.test(f) ? f : `"${f.replace(/"/g, '\\"')}"`)).join(', ');
  }
  if (type === 'shadow') {
    return [].concat(v).map((s) => `${s.inset ? 'inset ' : ''}${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread} ${s.color.toLowerCase()}`).join(', ');
  }
  return String(v);
}

const cssVar = (name) => `--${name.replace(/\./g, '-')}`;

function setPath(root, name, node) {
  const parts = name.split('.');
  let at = root;
  for (const p of parts.slice(0, -1)) at = at[p] ??= {};
  at[parts[parts.length - 1]] = node;
}

// Returns { fileName: content } for a tokens object that already passed checkTokens.
export function exportFiles(data) {
  const byName = indexTokens(data.tokens);
  const primitiveOf = (t) => {
    let cur = t;
    for (let i = 0; cur && cur.layer !== 'primitive' && i < 3; i++) cur = byName.get(cur.reference)?.[0];
    return cur;
  };
  const base = { $description: NOTE };
  const dark = { $description: `${NOTE} Dark-theme overrides: load after tokens.dtcg.json.` };
  const css = { root: [], light: [], dark: [], component: [] };

  for (const t of data.tokens) {
    const p = primitiveOf(t);
    const type = dtcgType(p.category, p.name.split('.')[1]);
    const node = {
      $type: type,
      $value: t.layer === 'primitive' ? dtcgValue(type, t.value) : `{${t.reference}}`,
      ...(t.description ? { $description: t.description } : {}),
      ...(t.deprecated !== undefined ? { $deprecated: t.deprecated } : {}),
    };
    const decl = `  ${cssVar(t.name)}: ${t.layer === 'primitive' ? cssValue(type, t.value) : `var(${cssVar(t.reference)})`};`;
    if (t.theme === 'dark') {
      setPath(dark, t.name, node);
      css.dark.push(decl);
      continue;
    }
    setPath(base, t.name, node);
    if (t.layer === 'component') css.component.push(decl);
    else if (t.theme === 'light') css.light.push(decl);
    else css.root.push(decl);
  }

  // Components are re-declared in each theme scope so a nested [data-theme] re-resolves them.
  const block = (selector, lines, indent = '') => `${indent}${selector} {\n${lines.map((l) => indent + l).join('\n')}\n${indent}}\n`;
  let out = `/* ${NOTE} */\n\n${block(':root', css.root)}`;
  if (css.light.length || css.component.length) out += `\n${block(':root,\n[data-theme="light"]', [...css.light, ...css.component])}`;
  if (css.dark.length) {
    const lines = [...css.dark, ...css.component];
    out += `\n${block('[data-theme="dark"]', lines)}`;
    out += `\n@media (prefers-color-scheme: dark) {\n${block(':root:not([data-theme="light"])', lines, '  ')}}\n`;
  }
  const files = { 'tokens.css': out, 'tokens.dtcg.json': `${JSON.stringify(base, null, 2)}\n` };
  if (css.dark.length) files['tokens.dark.dtcg.json'] = `${JSON.stringify(dark, null, 2)}\n`;
  return files;
}

function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error('usage: node .agents/scripts/tokens-export.mjs <project-slug | path/to/tokens.json>');
    process.exit(2);
  }
  const file = arg.endsWith('.json') ? path.resolve(arg) : path.join(ROOT, 'brand', arg, '04-design-tokens', 'tokens.json');
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.error(`tokens-export: cannot read ${rel(file)}: ${e.message}`);
    process.exit(1);
  }
  const problems = checkTokens(data);
  if (problems.length) {
    console.error(`tokens-export: fix ${rel(file)} first:\n- ${problems.join('\n- ')}`);
    process.exit(1);
  }
  const dir = path.dirname(file);
  const files = exportFiles(data);
  for (const [name, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(dir, name), content);
    console.log(`wrote ${rel(path.join(dir, name))}`);
  }
  const staleDark = path.join(dir, 'tokens.dark.dtcg.json');
  if (!files['tokens.dark.dtcg.json'] && fs.existsSync(staleDark)) {
    fs.unlinkSync(staleDark);
    console.log(`removed ${rel(staleDark)} (no dark tokens)`);
  }
}

if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) main();
