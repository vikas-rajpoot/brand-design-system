---
name: visual-style
description: 'Use when defining the overall visual language: shapes, gradients, backgrounds, spacing style, image treatment, icon style, and illustration style for a brand.'
description: 'Use when defining the overall visual language: shapes, gradients, backgrounds, spacing style, image treatment, icon style, and illustration style for a brand. Presents cohesive directions with pros & cons.'
---
# Visual Style

## When to Use
- Establishing the "look and feel" beyond color/type: shape language, imagery, iconography
- Establishing the "look and feel" beyond raw color/type: shape language, imagery, iconography, textures

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `03-typography-system`
- `00-brand-foundation`, `02-color-system`, `03-typography-system`, `04-design-tokens`

## Procedure
1. Define shape language: corner radius philosophy (sharp/soft/pill), border usage, elevation
   (flat vs shadowed).
2. Define gradients/backgrounds (if any): allowed gradient pairs (from token colors only), texture
   or pattern use, when solid vs gradient vs image backgrounds apply.
3. Define spacing rhythm at a glance (tight/generous, consistent multiplier) — detailed scale lives
   in tokens, this doc explains the *feel*.
4. Define image treatment: photography style (candid vs staged, color grading, duotone overlay
   using brand colors), cropping/aspect ratios.
5. Define icon style: line vs filled, stroke width, corner style, grid size — pick one consistent
   icon set/approach.
6. Define illustration style if used: flat/isometric/hand-drawn, palette restriction, subject themes
   to use/avoid.
## Interactive Decision-Gate Procedure
1. Never define visual style in one go without user review.
2. Present **2–3 distinct, cohesive visual style directions**:
   - For each direction:
     - **Shape Language & Depth**: Corner radii philosophy, borders, flat vs. layered elevation.
     - **Surfaces & Backgrounds**: Solid vs. subtle gradient vs. mesh patterns, lighting, blurs.
     - **Iconography & Illustration**: Stroke vs. duotone vs. glyph style, corner rounding, grid.
     - **Imagery Treatment**: Photography art direction, framing, saturation, duotone overlays.
     - **Brand Cohesion Rationale**: How this aesthetic expresses the approved foundation personality and pairs with the tokens.
     - **Pros**: Distinctive market differentiation, emotional resonance, implementation ease.
     - **Cons**: Styling constraints, potential complexity in UI implementation.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a visual style direction (*"this one selected"* or provides refinements), write `brand/<slug>/05-visual-style/visual-style.md` with `status: approved`.

## Output
- `brand/<slug>/05-visual-style/visual-style.md`

## Consistency Rules
- Every shape/spacing/gradient decision here must map to a token in `04-design-tokens` once that
  system exists (radius.*, shadow.*, space.*).
- Every shape, shadow, and gradient decision must map directly to tokens in `04-design-tokens`.
