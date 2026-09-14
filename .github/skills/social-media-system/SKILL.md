---
name: social-media-system
description: 'Use when creating reusable post/profile templates for LinkedIn, Instagram, X, Facebook, YouTube, and other social platforms for a brand. Presents cohesive template concepts with pros & cons.'
---
# Social Media System

## When to Use
- Defining reusable, on-brand templates for recurring social media content

## Inputs Required
- `00-brand-foundation`, `01-logo-system`, `02-color-system`, `03-typography-system`, `05-visual-style`

## Interactive Decision-Gate Procedure
1. Never generate social templates in one go.
2. Present **2–3 distinct, cohesive social visual layout concepts** (e.g. Bold Typographic Quote/Stat vs. Editorial Photo-Framed vs. Tech-Centric Card Grid):
   - For each concept:
     - **Visual Composition**: Grid layout, logo placement, typography treatment, color distribution.
     - **Platform Adaptations**: LinkedIn announcement, X post card, Instagram carousel/square, YouTube thumbnail.
     - **Brand Cohesion Rationale**: How this visual style connects back to approved tokens and foundation tone.
     - **Pros**: High social feed contrast, clickability, ease of recurring content creation.
     - **Cons**: Text length constraints, image asset requirements.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a social concept (*"this one selected"* or provides feedback):
   - Delegate SVG templates to `brand-asset-generator`.
   - Write `brand/<slug>/09-social-media-system/social-media-system.md` with `status: approved`.

## Output
- `brand/<slug>/09-social-media-system/social-media-system.md`
- `brand/<slug>/09-social-media-system/templates/*.svg`

## Consistency Rules
- Strictly use approved colors, typography, and logo lockups.
