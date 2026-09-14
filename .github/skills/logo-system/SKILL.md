---
name: logo-system
description: 'Use when designing the primary logo, alternate lockups, icon/mark, light/dark versions, clear space, minimum size, and logo usage/misuse rules. Presents cohesive concepts with pros & cons.'
---
# Logo System

## When to Use
- Creating or revising the primary logo, wordmark, icon/mark, or lockup variants

## Inputs Required
- `00-brand-foundation` (personality, values, name rules)
- `02-color-system` and `03-typography-system` (logo must strictly use approved colors and typography)

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
- `brand/<slug>/01-logo-system/logo-system.md`

## Consistency Rules
- No color or font in a logo file may deviate from approved `02-color-system` and `03-typography-system` tokens.
