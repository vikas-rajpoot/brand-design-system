---
name: brand-foundation
description: 'Use when starting a new brand system or when name usage, positioning, audience, personality, values, or tone need to be defined. Run before any other brand subsystem, presenting cohesive options with pros & cons.'
---
# Brand Foundation

## When to Use
- Starting brand work for a project whose product packet is confirmed and that has no `00-brand-foundation` yet
- Positioning, audience, personality, or tone need clarifying or updating

## Inputs Required
- The confirmed product packet in `brand/<slug>/product/` (all seven files at `status: approved`). If it is missing or unconfirmed, stop and use `product-intake`.
- Approved `brand/<slug>/product/reference-screens.md`. Read it for real product touchpoints and constraints; do not treat its neutral wireframe styling as a brand decision.
- The slug is the packet's folder name. Do not ask for or propose a new slug.

## Interactive Decision-Gate Procedure
1. **Never write the foundation in one go.**
2. **Read the full packet first.** Build on its **Confirmed** items and never contradict them. Ask the user only about gaps the foundation still needs (e.g. name-usage rules or core values), at most three questions per turn.
3. **Present 2–3 distinct, cohesive strategic directions** that stay inside the confirmed strategy. Directions may differ only where the packet is still **Proposed** or **Open** (e.g. an unresolved positioning territory) and in brand expression (personality emphasis, voice and tone):
   - Compile all directions into a self-contained interactive preview in `brand/<slug>/options/00-brand-foundation-v1.html` (or the next `-vN.html` on revisions).
   - For each direction:
     - **Strategic Focus**: Core narrative, positioning, and differentiator, citing the packet sections it builds on.
     - **Personality & Voice**: 3–5 personality adjectives (what each means and does not mean in practice) and the voice and tone they imply.
     - **Cohesion Impact**: How this choice will guide later colors, typography, and UI style.
     - **Pros**: Market advantages, resonance with the audience.
     - **Cons**: Trade-offs, messaging challenges.
4. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
5. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/00-brand-foundation/` until explicit user selection.
6. **STOP and wait for user selection.**
7. Only when the user explicitly selects a direction (*"Concept 1 selected"*), write `brand/<slug>/00-brand-foundation/brand-foundation.md` with `status: approved` and these sections: Overview, Positioning (category + differentiator), Audience (primary/secondary), Personality (adjectives + what each means/doesn't mean), Values, Voice & Tone (short), Name Usage (correct/incorrect forms, trademark note if any). Link each section to the packet file it derives from.
8. If the selected direction settles a **Proposed** or **Open** packet item, tell the user so they can record it with `product-intake`. Do not edit the packet yourself.

## Output
- `brand/<slug>/options/00-brand-foundation-v<n>.html` (immutable options archive)
- `brand/<slug>/00-brand-foundation/brand-foundation.md` (committed only after selection)

## Consistency Rules
- Every later subsystem must be traceable to an approved personality adjective, value, or audience need stated here. If a later system needs something not covered, come back and extend this doc first.
- The foundation never overrides the confirmed product packet. If they conflict, the packet wins and the conflict is flagged.
