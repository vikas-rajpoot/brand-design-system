---
name: brand-foundation
description: 'Use when starting a new brand system or when name usage, positioning, audience, personality, values, or tone need to be defined. Always run first, before any other brand subsystem.'
description: 'Use when starting a new brand system or when name usage, positioning, audience, personality, values, or tone need to be defined. Always run first, presenting cohesive options with pros & cons.'
---
# Brand Foundation

## When to Use
- Kicking off a new project/idea with no `00-brand-foundation` yet
- Positioning, audience, personality, or tone need clarifying/updating

## Inputs Required
Ask the user for whatever isn't already known: project/company name, one-line description, target
audience, competitors/alternatives, 3-5 personality adjectives, core values, desired tone of voice,
naming rules (how the brand name may/may not be written).
Gather basic premise: project/company name, one-line problem description, general market category.

## Procedure
1. Confirm the project slug (kebab-case).
2. Write `brand/<slug>/00-brand-foundation/brand-foundation.md` with sections: Overview, Positioning
   (category + differentiator), Audience (primary/secondary), Personality (adjectives + what that
   means/doesn't mean in practice), Values, Voice & Tone (short), Name Usage (correct/incorrect
   forms, trademark note if any).
3. Mark `status: draft` in frontmatter until the user says otherwise.
## Interactive Decision-Gate Procedure
1. Confirm the project slug with 2–3 options and pros/cons.
2. Formulate **2–3 distinct, cohesive strategic directions** for the brand foundation:
   - **Direction A vs. Direction B vs. Direction C**: Varied positioning angles (e.g., Enterprise Authority vs. Developer-First Simplicity vs. Human-Centric Innovation), corresponding audience focus, personality adjectives, and voice & tone implications.
   - For each direction, explicitly articulate:
     - **Strategic Focus**: Core narrative and differentiator.
     - **Cohesion Impact**: How this choice guides future colors, fonts, and UI style.
     - **Pros**: Market advantages, resonance with audience.
     - **Cons**: Trade-offs, messaging challenges.
3. **STOP and wait for user selection.** Never draft or write the foundation in one go without feedback.
4. Only when the user explicitly selects a direction (*"this one selected"* or provides refinements), write `brand/<slug>/00-brand-foundation/brand-foundation.md` with `status: approved`.
   - Sections: Overview, Positioning (category + differentiator), Audience (primary/secondary), Personality (adjectives + what that means/doesn't mean in practice), Values, Voice & Tone, Name Usage.

## Output
- `brand/<slug>/00-brand-foundation/brand-foundation.md`

## Consistency Rules
- Every later subsystem must be traceable to a personality adjective, value, or audience need stated
  here. If a later system needs something not covered, come back and extend this doc first.
- Every later subsystem must be traceable to the approved personality adjectives, values, or audience needs established here.
