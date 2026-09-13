---
name: social-media-system
description: 'Use when creating reusable post/profile templates for LinkedIn, Instagram, X, Facebook, YouTube, and other social platforms for a brand.'
---
# Social Media System

## When to Use
- Defining reusable, on-brand templates for recurring social content

## Inputs Required
- `00-brand-foundation`, `01-logo-system`, `02-color-system`, `05-visual-style`

## Procedure
1. Per platform (LinkedIn, Instagram feed/story, X, Facebook, YouTube thumbnail/banner), list the
   exact canvas sizes needed and 2-4 reusable post templates (e.g. quote card, announcement,
   stat/data card, thumbnail).
2. Define profile assets: avatar/logo crop, cover/banner image composition using approved colors.
3. Define a consistent caption/hashtag style pointer to `15-brand-voice-and-copy`.
4. Produce each template as an SVG (or a described layout spec if raster/photo-based) sized to spec.

## Output
- `brand/<slug>/09-social-media-system/social-media-system.md` (platform table with sizes + template list)
- `brand/<slug>/09-social-media-system/templates/*.svg`

## Consistency Rules
- Only approved colors/logo variants/fonts; no platform-specific one-off palette.
