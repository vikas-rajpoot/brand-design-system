---
name: design-tokens
description: 'Use when producing or updating machine-readable design tokens (colors, spacing, radius, shadows, typography, borders, motion, breakpoints) for a brand system.'
---
# Design Tokens

See [.github/instructions/design-tokens.instructions.md](../../instructions/design-tokens.instructions.md)
See [rules/design-tokens.md](../../rules/design-tokens.md) and [AGENTS.md](../../../AGENTS.md)
for the schema and naming rules — this skill covers the generation procedure.
See [rules/design-tokens.md](../../rules/design-tokens.md) and [AGENTS.md](../../../AGENTS.md) for schema and naming rules.

## When to Use
- After `02-color-system` and `03-typography-system` are approved/drafted, before any UI/website/app
  system is built
- Adding a new token category (motion, breakpoints) to an existing system
- After `02-color-system` and `03-typography-system` are explicitly approved by the user
- Establishing or updating spatial scales, corner radii, shadows, and motion tokens

## Inputs Required
- `02-color-system`, `03-typography-system`, and any spacing/radius/shadow decisions already implied
  by `05-visual-style`
- Approved `00-brand-foundation`, `02-color-system`, and `03-typography-system`

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
## Interactive Decision-Gate Procedure
1. Never generate tokens in one go without user review.
2. Present **2–3 options for spatial and elevation systems**:
   - e.g. **Option A: Sharp & Dense** (4px grid, 2-4px radius, crisp subtle shadows)
   - e.g. **Option B: Smooth & Airy** (8px grid, 8-12px radius, diffused soft shadows)
   - e.g. **Option C: Bold & Expressive** (8px grid, large pill/16px radius, pronounced elevation)
   - For each option, include **Brand Cohesion Rationale**, **Pros**, and **Cons**.
3. **STOP and wait for user selection.**
4. Compile the 3-layer architecture into `tokens.json` (`primitive -> semantic -> component`):
   - `primitive`: Raw values derived from selected colors, fonts, and spatial scale.
   - `semantic`: Role-based tokens referencing primitives, with `light` and `dark` variants.
   - `component`: Component tokens referencing semantic tokens.
5. Present the token summary to the user for explicit confirmation before finalizing.
6. Write `brand/<slug>/04-design-tokens/tokens.json` and optional `tokens.css`.

## Output
- `brand/<slug>/04-design-tokens/tokens.json`
- `brand/<slug>/04-design-tokens/tokens.css` (optional generated export)
- `brand/<slug>/04-design-tokens/tokens.css`

## Consistency Rules
- Never hardcode a raw value in a semantic/component token — always reference.
- Any change here must be reflected back into `02-color-system`/`03-typography-system` docs.
- Never hardcode a raw value in semantic/component layers — strictly reference.
