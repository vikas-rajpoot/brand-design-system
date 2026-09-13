---
description: "Use when creating or editing design tokens (tokens.json) for a brand system. Covers the primitive/semantic/component layering and naming rules."
applyTo: "brand/**/04-design-tokens/**"
---
# Design Token Rules

Tokens are layered — never skip a layer:

1. **primitive** — raw values only (`color.blue.500 = #2563eb`, `space.4 = 16px`). No references.
2. **semantic** — references exactly one primitive (`color.bg.brand -> color.blue.500`).
3. **component** — references exactly one semantic token (`button.primary.bg -> color.bg.brand`).

## Naming

- Lowercase, dot-separated segments: `category.role.variant` (e.g. `color.text.muted`,
  `radius.card`, `shadow.md`, `font.size.heading-lg`).
- Categories to cover: `color`, `space`, `radius`, `shadow`, `font` (family/size/weight/line-height),
  `border`, `motion` (duration/easing), `breakpoint`.
- Provide `light` and `dark` variants for every semantic color token.

## File format

Write `tokens.json` as `{ "schemaVersion": 1, "tokens": [ { "id", "name", "layer", "category",
"value", "reference"?, "theme"? } ] }`. Component/semantic tokens must set `reference` to an
existing token `name`; never duplicate a value that should be a reference.

Validate before finishing: no orphaned references, no cycles, no two tokens with the same `name`.
