---
name: typography-system
description: 'Use when defining heading/body font families, type scale, weights, line-height, and typographic hierarchy/usage rules for a brand. Presents cohesive pairing options with pros & cons.'
---
# Typography System

## When to Use
- Establishing or revising fonts, type scale, and hierarchy rules

## Inputs Required
- `00-brand-foundation` (personality dictates serif vs. sans, modern vs. classic, geometric vs. humanist)
- `02-color-system` (ensure typography pairs harmoniously with color tone)

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
- `brand/<slug>/03-typography-system/typography-system.md` (font pairings, type scale table, hierarchy rules, fallback stacks, do/don't examples)

## Consistency Rules
- The selected type scale directly feeds the `font.size.*` and `font.weight.*` primitives in `04-design-tokens`.
