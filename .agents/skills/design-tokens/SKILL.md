---
name: design-tokens
description: 'Use when producing or updating machine-readable design tokens (colors, spacing, radius, shadows, typography, borders, motion, breakpoints) for a brand system.'
---
# Design Tokens

See [.github/instructions/design-tokens.instructions.md](../../instructions/design-tokens.instructions.md)
See [rules/design-tokens.md](../../rules/design-tokens.md) and [AGENTS.md](../../../AGENTS.md)
for the schema and naming rules — this skill covers the generation procedure.

## When to Use
- After `02-color-system` and `03-typography-system` are approved/drafted, before any UI/website/app
  system is built
- Adding a new token category (motion, breakpoints) to an existing system

## Inputs Required
- `02-color-system`, `03-typography-system`, and any spacing/radius/shadow decisions already implied
  by `05-visual-style`

## Procedure
1. Create **primitive** tokens for every raw value already decided (colors, base spacing unit and
   scale, radii, shadow blur/spread/color, font families/sizes/weights, border widths, motion
   durations/easings, breakpoints).
2. Create **semantic** tokens that give primitives a role (`color.bg.brand`, `color.text.danger`,
   `space.gutter`, `radius.card`, `shadow.elevated`), each `reference`-ing exactly one primitive, with
   light/dark variants for color.
3. Create **component** tokens only for widely reused components (`button.*`, `input.*`, `card.*`),
   each referencing exactly one semantic token.
4. Validate: no orphaned/cyclic references, no duplicate names (see instructions file).
5. Optionally export a CSS custom-properties file for direct use in code.

## Output
- `brand/<slug>/04-design-tokens/tokens.json`
- `brand/<slug>/04-design-tokens/tokens.css` (optional generated export)

## Consistency Rules
- Never hardcode a raw value in a semantic/component token — always reference.
- Any change here must be reflected back into `02-color-system`/`03-typography-system` docs.
