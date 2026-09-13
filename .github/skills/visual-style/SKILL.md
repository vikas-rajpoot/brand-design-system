---
name: visual-style
description: 'Use when defining the overall visual language: shapes, gradients, backgrounds, spacing style, image treatment, icon style, and illustration style for a brand.'
---
# Visual Style

## When to Use
- Establishing the "look and feel" beyond color/type: shape language, imagery, iconography

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `03-typography-system`

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

## Output
- `brand/<slug>/05-visual-style/visual-style.md`

## Consistency Rules
- Every shape/spacing/gradient decision here must map to a token in `04-design-tokens` once that
  system exists (radius.*, shadow.*, space.*).
