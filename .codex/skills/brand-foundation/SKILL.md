---
name: brand-foundation
description: 'Use when starting a new brand system or when name usage, positioning, audience, personality, values, or tone need to be defined. Always run first, presenting cohesive options with pros & cons.'
description: 'Use when starting a new brand system or when name usage, positioning, audience, personality, values, or tone need to be defined. Presents cohesive options in an immutable archive.'
---
# Brand Foundation

## When to Use
- Kicking off a new project/idea with no `00-brand-foundation` yet
- Positioning, audience, personality, or tone need clarifying/updating

## Inputs Required
Gather basic premise: project/company name, one-line problem description, general market category.

## Interactive Decision-Gate Procedure
1. Confirm the project slug with 2–3 options and pros/cons.
2. Formulate **2–3 distinct, cohesive strategic directions** for the brand foundation:
   - **Direction A vs. Direction B vs. Direction C**: Varied positioning angles (e.g., Enterprise Authority vs. Developer-First Simplicity vs. Human-Centric Innovation), corresponding audience focus, personality adjectives, and voice & tone implications.
   - For each direction, explicitly articulate:
   - Deliver options inside `brand/<slug>/options/00-brand-foundation-v1.html` (or `-v2.html` on revisions).
   - **Direction A vs. Direction B vs. Direction C**: Varied positioning angles, corresponding audience focus, personality adjectives, and voice & tone implications.
   - For each direction, articulate:
     - **Strategic Focus**: Core narrative and differentiator.
     - **Cohesion Impact**: How this choice guides future colors, fonts, and UI style.
     - **Pros**: Market advantages, resonance with audience.
     - **Cons**: Trade-offs, messaging challenges.
3. **STOP and wait for user selection.** Never draft or write the foundation in one go without feedback.
4. Only when the user explicitly selects a direction (*"this one selected"* or provides refinements), write `brand/<slug>/00-brand-foundation/brand-foundation.md` with `status: approved`.
3. **Dedicated Immutable Archive**:
   - Save in `brand/<slug>/options/` with sequential numbering.
   - **NEVER update/overwrite or delete** existing option files. All revisions are append-only.
4. **Zero Premature Writes**:
   - Do NOT write or create any files in `brand/<slug>/00-brand-foundation/` until explicit user selection.
5. **STOP and wait for user selection.** Never draft or write the foundation in one go without feedback.
6. Only when the user explicitly selects a direction (*"Concept 1 selected"* or provides refinements), write `brand/<slug>/00-brand-foundation/brand-foundation.md` with `status: approved`.
   - Sections: Overview, Positioning (category + differentiator), Audience (primary/secondary), Personality (adjectives + what that means/doesn't mean in practice), Values, Voice & Tone, Name Usage.

## Output
- `brand/<slug>/00-brand-foundation/brand-foundation.md`
- `brand/<slug>/options/00-brand-foundation-v<n>.html` (Immutable options archive)
- `brand/<slug>/00-brand-foundation/brand-foundation.md` (Committed only after selection)

## Consistency Rules
- Every later subsystem must be traceable to the approved personality adjectives, values, or audience needs established here.
