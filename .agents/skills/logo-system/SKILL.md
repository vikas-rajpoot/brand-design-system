---
name: logo-system
description: 'Use when designing the primary logo, alternate lockups, icon/mark, light/dark versions, clear space, minimum size, and logo usage/misuse rules.'
description: 'Use when designing the primary logo, alternate lockups, icon/mark, light/dark versions, clear space, minimum size, and logo usage/misuse rules. Presents cohesive concepts with pros & cons.'
---
# Logo System

## When to Use
- Creating or revising the primary logo, wordmark, icon/mark, or lockup variants

## Inputs Required
- `00-brand-foundation` (personality, name usage rules)
- `02-color-system` and `03-typography-system` if they exist (logo must use approved colors/fonts)
- `00-brand-foundation` (personality, values, name rules)
- `02-color-system` and `03-typography-system` (logo must strictly use approved colors and typography)

## Procedure
1. Define the logo family: primary lockup, icon/mark-only, horizontal/stacked variants, light-mode
   and dark-mode versions.
2. Produce each as clean SVG using only approved brand colors (or pure black/white for single-color
   variants) — see `brand-asset-generator` agent for actual SVG production.
3. Define clear space (as a multiple of a fixed unit, e.g. the mark's height), minimum size in px
   for digital and mm for print, and background/contrast rules.
4. Document 6-10 misuse examples (stretching, recoloring, low contrast, adding effects, wrong
   spacing) as explicit "don't" rules.
## Interactive Decision-Gate Procedure
1. Never generate logo assets in one go.
2. Present **2–4 distinct, cohesive logo concepts**:
   - For each concept (e.g. Concept 1: Geometric Symbol + Wordmark; Concept 2: Typographic Monogram; Concept 3: Abstract Glyphic Icon):
     - **Visual Metaphor & Structure**: Description of symbol geometry, lockup layout, stroke weight, and negative space.
     - **Palette & Type Usage**: Which approved brand colors and font families are utilized.
     - **Lockup Variants**: Horizontal, stacked, icon-only, and dark/light modes.
     - **Brand Cohesion Rationale**: How this concept visually embodies the approved brand personality and foundation.
     - **Pros**: Scalability, favicon legibility, emotional resonance, uniqueness.
     - **Cons**: Production complexity, potential misinterpretations, or context constraints.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a concept (*"this one selected"* or gives modification notes):
   - Invoke `brand-asset-generator` to generate clean SVG files under `brand/<slug>/01-logo-system/logos/`.
   - Define clear space, minimum sizes, and 6–10 misuse rules.
   - Write `brand/<slug>/01-logo-system/logo-system.md` with `status: approved`.

## Output
- `brand/<slug>/01-logo-system/logos/*.svg`
- `brand/<slug>/01-logo-system/logo-system.md` (variants table, clear space, min size, usage/misuse)
- `brand/<slug>/01-logo-system/logo-system.md`

## Consistency Rules
- No color in a logo file may be absent from `02-color-system`/tokens once that system exists.
- No color or font in a logo file may deviate from approved `02-color-system` and `03-typography-system` tokens.
