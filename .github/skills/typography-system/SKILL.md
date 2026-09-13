---
name: typography-system
description: 'Use when defining heading/body font families, type scale, weights, line-height, and typographic hierarchy/usage rules for a brand.'
---
# Typography System

## When to Use
- Establishing or revising fonts, type scale, and hierarchy rules

## Inputs Required
- `00-brand-foundation` (personality/tone informs serif vs sans, weight range)

## Procedure
1. Choose a heading font and body font (can be the same family). Prefer widely available/licensable
   fonts (system fonts, Google Fonts, or note the license/source if custom).
2. Define a type scale (e.g. xs/sm/base/lg/xl/2xl/3xl/4xl) with px/rem size, line-height, and weight
   for each step, plus which HTML/UI element each maps to (h1-h6, body, caption, label).
3. Define pairing rules: max fonts per screen (usually 2), when to use each weight, letter-spacing
   for all-caps/labels.
4. Note fallback stacks for web (`font-family: "X", system-ui, sans-serif`).

## Output
- `brand/<slug>/03-typography-system/typography-system.md` (font choices + license/source, type
  scale table, usage/hierarchy rules, do/don't examples)

## Consistency Rules
- The type scale here becomes the `font.size.*` / `font.weight.*` primitives in `04-design-tokens` —
  keep names and values identical once tokens exist.
