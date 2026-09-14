---
name: design-tokens
description: 'Use when producing or updating machine-readable design tokens (colors, spacing, radius, shadows, typography, borders, motion, breakpoints) for a brand system.'
---
# Design Tokens

See [rules/design-tokens.md](../../rules/design-tokens.md) and [AGENTS.md](../../../AGENTS.md) for schema and naming rules.

## When to Use
- After `02-color-system` and `03-typography-system` are explicitly approved by the user
- Establishing or updating spatial scales, corner radii, shadows, and motion tokens

## Inputs Required
- Approved `00-brand-foundation`, `02-color-system`, and `03-typography-system`

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
- `brand/<slug>/04-design-tokens/tokens.css`

## Consistency Rules
- Never hardcode a raw value in semantic/component layers — strictly reference.
