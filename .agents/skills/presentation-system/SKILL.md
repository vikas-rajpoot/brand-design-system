---
name: presentation-system
description: 'Use when creating branded slide/PPT templates for pitch decks, sales decks, technical presentations, and company presentations. Presents cohesive deck theme options with pros & cons.'
---
# Presentation System

## When to Use
- Defining reusable slide layouts, templates, and deck structures

## Inputs Required
- Approved `01-logo-system`, `04-design-tokens` (colors, type scale), and `05-visual-style` (imagery, iconography)
- Approved `15-brand-voice-and-copy` (headline and slide copy style)
- If an input is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never generate slide templates in one go.** First agree which decks are in scope (e.g. pitch, sales, technical, company).
2. **Present 2–3 distinct, cohesive slide aesthetic options** (e.g. Dark Minimalist High-Impact vs. Clean White Enterprise vs. Editorial Storytelling):
   - Compile all options into a self-contained interactive preview in `brand/<slug>/options/10-presentation-system-v1.html` (or the next `-vN.html` on revisions).
   - For each option:
     - **Slide Master**: Title, section divider, content, 2-up/3-up comparison, full-bleed image, quote/testimonial, chart/data, and closing slides, each with logo placement, margins, and type scale.
     - **Color & Type Treatment**: How approved colors (e.g. dark dividers vs. light content slides) and the type scale are applied per slide type.
     - **Brand Cohesion Rationale**: How this deck style supports the brand's positioning and audience expectations.
     - **Pros**: Readability in rooms and video calls, visual polish, information hierarchy.
     - **Cons**: Formatting rigidity, slide density limits.
3. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
4. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/10-presentation-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a direction (*"Concept 1 selected"*):
   - Write `brand/<slug>/10-presentation-system/presentation-system.md` with `status: approved`: the slide master spec and an outline for each in-scope deck (e.g. pitch deck: problem, solution, market, product, team, ask).
   - Optionally, use `brand-asset-generator` for `templates/*.svg` per slide layout.

## Output
- `brand/<slug>/options/10-presentation-system-v<n>.html` (immutable options archive)
- `brand/<slug>/10-presentation-system/presentation-system.md` (slide master spec + deck outlines, committed only after selection)
- Optional: `brand/<slug>/10-presentation-system/templates/*.svg`

## Consistency Rules
- Slide colors and fonts come from `04-design-tokens` only; no deck-only palette.
