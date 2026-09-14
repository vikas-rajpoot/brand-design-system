---
name: presentation-system
description: 'Use when creating branded slide/PPT templates for pitch decks, sales decks, technical presentations, and company presentations.'
description: 'Use when creating branded slide/PPT templates for pitch decks, sales decks, technical presentations, and company presentations. Presents cohesive deck theme options with pros & cons.'
---
# Presentation System

## When to Use
- Defining reusable slide layouts and deck structures
- Defining reusable slide layouts, templates, and deck structures

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `03-typography-system`, `01-logo-system`
- `00-brand-foundation`, `01-logo-system`, `02-color-system`, `03-typography-system`, `05-visual-style`

## Procedure
1. Define a slide master: title slide, section divider, content slide (bullets), 2-up/3-up
   comparison, image-full-bleed, quote/testimonial, chart/data slide, closing/contact slide — each
   with logo placement, margins, and type scale usage.
2. Define deck-specific structures: pitch deck (problem/solution/market/product/team/ask outline),
   sales deck, technical presentation (architecture/diagram-heavy), general company deck.
3. Note color usage per slide type (e.g. dark divider slides vs light content slides) from
   `02-color-system` only.
## Interactive Decision-Gate Procedure
1. Never generate slide templates in one go.
2. Present **2–3 distinct, cohesive slide aesthetic options** (e.g. Dark-Mode Minimalist High-Impact vs. Clean White Enterprise vs. Editorial Storytelling Deck):
   - For each option:
     - **Slide Master Themes**: Title slide, divider slide, 2-column comparison, stat callout, architecture slide.
     - **Color & Type Treatment**: How approved colors (dark dividers vs light body) and typography scales are applied.
     - **Brand Cohesion Rationale**: How this deck style supports the brand's executive positioning and audience expectation.
     - **Pros**: Readability in conference rooms/zoom, visual polish, information hierarchy.
     - **Cons**: Formatting rigidity, slide density limits.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a deck direction (*"this one selected"* or provides refinements), write `brand/<slug>/10-presentation-system/presentation-system.md` with `status: approved`.

## Output
- `brand/<slug>/10-presentation-system/presentation-system.md` (slide master specs + deck outlines)
- Optional: `brand/<slug>/10-presentation-system/templates/*.svg` per slide layout
- `brand/<slug>/10-presentation-system/presentation-system.md`
- Optional: `brand/<slug>/10-presentation-system/templates/*.svg`

## Consistency Rules
- Fonts/colors must match `02-color-system`/`03-typography-system` exactly; no deck-only palette.
- Slide colors and fonts must match `02-color-system` and `03-typography-system` exactly.
