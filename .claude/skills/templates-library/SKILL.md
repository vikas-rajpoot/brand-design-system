---
name: templates-library
description: 'Use when packaging pre-approved starting templates for website sections, app screens, social posts, presentations, and documents so new work starts from an approved base.'
---
# Ready-to-Use Templates

## When to Use
- Enough subsystems exist that reusable starting points would save time on future work

## Inputs Required
- `06-ui-design-system`, `07-website-system`, `08-app-system`, `09-social-media-system`,
  `10-presentation-system`, `11-document-system`

## Procedure
1. Extract the most reusable, generic examples from each subsystem (e.g. a landing-page section, an
   onboarding screen, a social quote card, a slide layout, a proposal doc) and generalize them
   (placeholder copy/images clearly marked as placeholders).
2. Organize by medium: `website/`, `app/`, `social/`, `presentations/`, `documents/`.
3. Each template file should be usable as-is (correct tokens/components wired in) — not just a
   picture of one.

## Output
- `brand/<slug>/19-templates/<medium>/<template-name>.*`
- `brand/<slug>/19-templates/templates.md` (index describing each template and when to use it)

## Consistency Rules
- Templates must use tokens/components already approved — no new one-off styling introduced here.
