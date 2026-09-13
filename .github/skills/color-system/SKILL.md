---
name: color-system
description: 'Use when defining primary/secondary/accent/neutral/semantic colors and light/dark theme values for a brand.'
---
# Color System

## When to Use
- Establishing or revising the brand's color palette and theme behavior

## Inputs Required
- `00-brand-foundation` (personality informs color temperature/saturation choices)

## Procedure
1. Define palettes: primary (1-2 hues with a tint/shade ramp, e.g. 50-900), secondary, accent,
   neutral/gray ramp, and semantic (success/warning/danger/info).
2. For each semantic role define light-theme and dark-theme values (background, foreground,
   border) — don't just invert; verify contrast.
3. Check WCAG contrast: body text ≥ 4.5:1, large text/UI ≥ 3:1. Note any pairs that fail and the
   accessible alternative.
4. Write this out as primitive tokens ready for `design-tokens` to layer (don't skip straight to
   component-level colors here).

## Output
- `brand/<slug>/02-color-system/color-system.md` (palette tables, light/dark theme table, contrast
  notes, do/don't usage examples)

## Consistency Rules
- Once `04-design-tokens/tokens.json` exists, this doc must match its `color.*` primitives exactly —
  update both together, never let them drift.
