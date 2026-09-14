---
name: visual-style
description: 'Use when defining the overall visual language: shapes, gradients, backgrounds, spacing style, image treatment, icon style, and illustration style for a brand. Presents cohesive directions with pros & cons.'
---
# Visual Style

## When to Use
- Establishing the "look and feel" beyond raw color/type: shape language, imagery, iconography, textures

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `03-typography-system`, `04-design-tokens`

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
- Every shape, shadow, and gradient decision must map directly to tokens in `04-design-tokens`.
