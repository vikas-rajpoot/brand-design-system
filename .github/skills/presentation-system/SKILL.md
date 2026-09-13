---
name: presentation-system
description: 'Use when creating branded slide/PPT templates for pitch decks, sales decks, technical presentations, and company presentations.'
---
# Presentation System

## When to Use
- Defining reusable slide layouts and deck structures

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `03-typography-system`, `01-logo-system`

## Procedure
1. Define a slide master: title slide, section divider, content slide (bullets), 2-up/3-up
   comparison, image-full-bleed, quote/testimonial, chart/data slide, closing/contact slide — each
   with logo placement, margins, and type scale usage.
2. Define deck-specific structures: pitch deck (problem/solution/market/product/team/ask outline),
   sales deck, technical presentation (architecture/diagram-heavy), general company deck.
3. Note color usage per slide type (e.g. dark divider slides vs light content slides) from
   `02-color-system` only.

## Output
- `brand/<slug>/10-presentation-system/presentation-system.md` (slide master specs + deck outlines)
- Optional: `brand/<slug>/10-presentation-system/templates/*.svg` per slide layout

## Consistency Rules
- Fonts/colors must match `02-color-system`/`03-typography-system` exactly; no deck-only palette.
