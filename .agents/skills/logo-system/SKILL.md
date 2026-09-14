---
name: logo-system
description: 'Use when designing the primary logo, alternate lockups, icon/mark, light/dark versions, clear space, minimum size, and logo usage/misuse rules.'
---
# Logo System

## When to Use
- Creating or revising the primary logo, wordmark, icon/mark, or lockup variants

## Inputs Required
- `00-brand-foundation` (personality, name usage rules)
- `02-color-system` and `03-typography-system` if they exist (logo must use approved colors/fonts)

## Procedure
1. Define the logo family: primary lockup, icon/mark-only, horizontal/stacked variants, light-mode
   and dark-mode versions.
2. Produce each as clean SVG using only approved brand colors (or pure black/white for single-color
   variants) — see `brand-asset-generator` agent for actual SVG production.
3. Define clear space (as a multiple of a fixed unit, e.g. the mark's height), minimum size in px
   for digital and mm for print, and background/contrast rules.
4. Document 6-10 misuse examples (stretching, recoloring, low contrast, adding effects, wrong
   spacing) as explicit "don't" rules.

## Output
- `brand/<slug>/01-logo-system/logos/*.svg`
- `brand/<slug>/01-logo-system/logo-system.md` (variants table, clear space, min size, usage/misuse)

## Consistency Rules
- No color in a logo file may be absent from `02-color-system`/tokens once that system exists.
