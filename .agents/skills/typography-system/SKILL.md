---
name: typography-system
description: 'Use when defining heading/body font families, type scale, weights, line-height, and typographic hierarchy/usage rules for a brand.'
description: 'Use when defining heading/body font families, type scale, weights, line-height, and typographic hierarchy/usage rules for a brand. Presents cohesive pairing options with pros & cons.'
---
# Typography System

## When to Use
- Establishing or revising fonts, type scale, and hierarchy rules

## Inputs Required
- `00-brand-foundation` (personality/tone informs serif vs sans, weight range)
- `00-brand-foundation` (personality dictates serif vs. sans, modern vs. classic, geometric vs. humanist)
- `02-color-system` (ensure typography pairs harmoniously with color tone)

## Procedure
1. Choose a heading font and body font (can be the same family). Prefer widely available/licensable
   fonts (system fonts, Google Fonts, or note the license/source if custom).
2. Define a type scale (e.g. xs/sm/base/lg/xl/2xl/3xl/4xl) with px/rem size, line-height, and weight
   for each step, plus which HTML/UI element each maps to (h1-h6, body, caption, label).
3. Define pairing rules: max fonts per screen (usually 2), when to use each weight, letter-spacing
   for all-caps/labels.
4. Note fallback stacks for web (`font-family: "X", system-ui, sans-serif`).
## Interactive Decision-Gate Procedure
1. Never generate typography in one go.
2. Present **2–3 distinct, cohesive typography pairing options**:
   - For each pairing option:
     - **Heading Font & Body Font**: Primary font families (Google Fonts or system stacks), weights, and fallback stacks.
     - **Scale & Line-Height**: xs through 4xl steps with px/rem values and usage mappings (h1–h6, body, caption).
     - **Brand Cohesion Rationale**: How the pairing reflects approved personality traits and pairs with the approved color scheme.
     - **Pros**: Readability, distinct character, cross-platform reliability, loading performance.
     - **Cons**: Pairing friction, character quirks, or licensing nuances.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a pairing (*"this one selected"* or provides refinements), write `brand/<slug>/03-typography-system/typography-system.md` with `status: approved`.

## Output
- `brand/<slug>/03-typography-system/typography-system.md` (font choices + license/source, type
  scale table, usage/hierarchy rules, do/don't examples)
- `brand/<slug>/03-typography-system/typography-system.md` (font pairings, type scale table, hierarchy rules, fallback stacks, do/don't examples)

## Consistency Rules
- The type scale here becomes the `font.size.*` / `font.weight.*` primitives in `04-design-tokens` —
  keep names and values identical once tokens exist.
- The selected type scale directly feeds the `font.size.*` and `font.weight.*` primitives in `04-design-tokens`.
