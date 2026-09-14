---
name: presentation-system
description: 'Use when creating branded slide/PPT templates for pitch decks, sales decks, technical presentations, and company presentations. Presents cohesive deck theme options with pros & cons.'
---
# Presentation System

## When to Use
- Defining reusable slide layouts, templates, and deck structures

## Inputs Required
- `00-brand-foundation`, `01-logo-system`, `02-color-system`, `03-typography-system`, `05-visual-style`

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
- `brand/<slug>/10-presentation-system/presentation-system.md`
- Optional: `brand/<slug>/10-presentation-system/templates/*.svg`

## Consistency Rules
- Slide colors and fonts must match `02-color-system` and `03-typography-system` exactly.
