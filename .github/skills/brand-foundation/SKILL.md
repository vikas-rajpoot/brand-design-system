---
name: brand-foundation
description: 'Use when starting a new brand system or when name usage, positioning, audience, personality, values, or tone need to be defined. Always run first, before any other brand subsystem.'
---
# Brand Foundation

## When to Use
- Kicking off a new project/idea with no `00-brand-foundation` yet
- Positioning, audience, personality, or tone need clarifying/updating

## Inputs Required
Ask the user for whatever isn't already known: project/company name, one-line description, target
audience, competitors/alternatives, 3-5 personality adjectives, core values, desired tone of voice,
naming rules (how the brand name may/may not be written).

## Procedure
1. Confirm the project slug (kebab-case).
2. Write `brand/<slug>/00-brand-foundation/brand-foundation.md` with sections: Overview, Positioning
   (category + differentiator), Audience (primary/secondary), Personality (adjectives + what that
   means/doesn't mean in practice), Values, Voice & Tone (short), Name Usage (correct/incorrect
   forms, trademark note if any).
3. Mark `status: draft` in frontmatter until the user says otherwise.

## Output
- `brand/<slug>/00-brand-foundation/brand-foundation.md`

## Consistency Rules
- Every later subsystem must be traceable to a personality adjective, value, or audience need stated
  here. If a later system needs something not covered, come back and extend this doc first.
