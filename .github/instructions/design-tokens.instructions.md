---
description: "Use when creating or editing design tokens (tokens.json) for a brand system. Covers the exact file format, layering, naming, values, invariants, and generated exports."
applyTo: "brand/**/04-design-tokens/**,brand/**/options/04-design-tokens-*"
---
# Design Token Rules

`tokens.json` must match [tokens.schema.json](../../brand/_template/tokens.schema.json). Check a file with
`node .agents/scripts/brand-check.mjs <file>`; the agent hooks, the pre-commit hook, and CI run the same check.

## File format

`{ "schemaVersion": 1, "tokens": [ ... ] }`. Each token has `id`, `name`, `layer`, `category`, and either
`value` (primitives) or `reference` (semantic and component). Optional: `theme` (semantic only),
`description`, `deprecated`. No other keys.

## Layers — never skip one

1. **primitive** — a raw `value`; no `reference`, no `theme` (`color.blue.500 = "#2563eb"`, `space.4 = "16px"`).
2. **semantic** — a `reference` to one primitive of the same category (`color.bg.brand -> color.blue.500`).
   Semantic colors are a pair with the same `name`: one `theme: "light"` and one `theme: "dark"`.
   Other semantic tokens may be themed the same way, or have no theme.
3. **component** — a `reference` to one semantic token of the same category (`button.primary.bg -> color.bg.brand`).
   No theme: it follows whichever theme is active.

## Names and ids

- `name`: lowercase dot-separated segments, `category.role.variant` (e.g. `color.text.muted`, `radius.card`).
  Primitive and semantic names start with their category; component names start with the component.
- `id`: the name, plus `.light` or `.dark` for themed tokens (`color.bg.brand.light`). A name repeats only as a
  light/dark pair.
- A name must not also be the start of another name (no `color.bg` when `color.bg.brand` exists), and two names
  must not become the same CSS variable (`color.bg-brand` vs `color.bg.brand`).

## Categories and values (primitives)

| Category | Value |
|---|---|
| `color` | hex `#rrggbb` or `#rrggbbaa` |
| `space` | `"16px"` or `"1rem"`, always a multiple of 4px |
| `size`, `radius`, `border`, `breakpoint` | `"8px"` or `"0.5rem"` |
| `font` | `font.family.*`: a name or list of names; `font.size.*`, `font.letter-spacing.*`: px/rem; `font.weight.*`: 1–1000; `font.line-height.*`, `font.scale.*`: a number |
| `motion` | `motion.duration.*`: `"200ms"` or `"0.2s"`; `motion.easing.*`: `[x1, y1, x2, y2]` |
| `shadow` | `{ "offsetX", "offsetY", "blur", "spread", "color", "inset"? }` (px/rem and hex), or a list of them |
| `layers` | an integer z-index |
| `opacity` | a number from 0 to 1 |

## Required invariants

- A `layers.*` z-index scale.
- `size.touch-target.min` of at least `44px`.
- `font.scale.max`: the largest font-scaling multiplier the UI supports.
- All `space.*` values on the 4pt grid.
- Nested radius: `inner = outer - padding`. Record it in `enforcement.md`; the checker cannot test it.

## Generated files — never hand-edit

After `tokens.json` is approved, run `node .agents/scripts/tokens-export.mjs <slug>`. It writes:

- `tokens.css` — CSS variables, with light/dark via `[data-theme]` and `prefers-color-scheme`.
- `tokens.dtcg.json` and `tokens.dark.dtcg.json` — the W3C Design Tokens format (DTCG 2025.10) for Figma,
  Style Dictionary, and Tokens Studio. Load the dark file after the base file for the dark theme.

The checks fail when these files are missing or out of date, and the hooks block editing them by hand.
