---
name: social-media-system
description: 'Use when creating reusable post/profile templates for LinkedIn, Instagram, X, Facebook, YouTube, and other social platforms for a brand. Presents cohesive template concepts with pros & cons.'
---
# Social Media System

## When to Use
- Defining reusable, on-brand templates for recurring social media content

## Inputs Required
- Approved `01-logo-system` (logo variants, avatar crops), `04-design-tokens` (colors, type), and `05-visual-style` (imagery, iconography)
- Approved `15-brand-voice-and-copy` (caption and hashtag style)
- The product packet, to decide which platforms matter
- If an input is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never generate social templates in one go.** First agree which platforms are in scope (e.g. LinkedIn, Instagram feed/story, X, Facebook, YouTube).
2. **Present 2–3 distinct, cohesive social layout concepts** (e.g. Bold Typographic Quote/Stat vs. Editorial Photo-Framed vs. Card Grid):
   - Compile all concepts into a self-contained interactive preview in `brand/<slug>/options/09-social-media-system-v1.html` (or the next `-vN.html` on revisions).
   - For each concept:
     - **Visual Composition**: Grid layout, logo placement, typography treatment, color distribution.
     - **Platform Adaptations**: The concept at each in-scope platform's exact canvas size (e.g. LinkedIn announcement, X post card, Instagram square/carousel, YouTube thumbnail).
     - **Template Set**: 2–4 reusable post templates per platform (e.g. quote card, announcement, stat/data card, thumbnail) plus profile assets (avatar crop, cover/banner).
     - **Brand Cohesion Rationale**: How this visual style connects back to approved tokens and foundation tone.
     - **Pros**: High social feed contrast, clickability, ease of recurring content creation.
     - **Cons**: Text length constraints, image asset requirements.
3. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
4. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/09-social-media-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a concept (*"Concept 1 selected"*):
   - Use `brand-asset-generator` to produce each template as an SVG sized to spec (or a layout spec when it is photo-based).
   - Write `brand/<slug>/09-social-media-system/social-media-system.md` with `status: approved`: a platform table with sizes, the template list, profile assets, and the caption style (linking to `15-brand-voice-and-copy`).

## Output
- `brand/<slug>/options/09-social-media-system-v<n>.html` (immutable options archive)
- `brand/<slug>/09-social-media-system/social-media-system.md` (committed only after selection)
- `brand/<slug>/09-social-media-system/templates/*.svg`

## Consistency Rules
- Use only approved colors, typography, and logo variants; no platform-only palette.
