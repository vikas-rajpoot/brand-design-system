---
name: brand-voice-and-copy
description: 'Use when defining writing style rules for headlines, CTAs, UI text, marketing copy, and terminology for a brand. Presents cohesive voice and tone options with pros & cons.'
---
# Brand Voice and Copy

## When to Use
- Establishing or applying tone-of-voice and copywriting rules across surfaces

## Inputs Required
- Approved `00-brand-foundation` (personality, values, audience, name usage)
- The product packet's voice, terminology, and claims-to-avoid sections in `brand/<slug>/product/`
- If the foundation is missing, stop and run `brand-foundation` first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never generate voice guidelines in one go.**
2. **Present 2–3 distinct, cohesive voice & tone profiles** (e.g. Crisp & Technical Authority vs. Direct, Energetic & Conversational vs. Warm & Empathetic Expert):
   - Compile all profiles into a self-contained interactive preview in `brand/<slug>/options/15-brand-voice-and-copy-v1.html` (or the next `-vN.html` on revisions).
   - For each profile:
     - **Voice Traits**: 3–4 traits, each turned into concrete writing rules (e.g. "confident" → short sentences, active voice, no hedging words) with a before/after example.
     - **Surface Treatment**: Headline formula and length, CTA verbs (allowed and banned), UI microcopy stance for errors, empty states, and tooltips (helpful, never blaming), long-form marketing tone.
     - **Glossary & Banned Words**: Approved product and feature terms, words to avoid, capitalization rules.
     - **Brand Cohesion Rationale**: How this voice brings the approved brand personality to life.
     - **Pros**: Clear market resonance, customer trust, distinct copy identity.
     - **Cons**: Tone risks if overdone (e.g. overly formal or overly casual).
3. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
4. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/15-brand-voice-and-copy/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a profile (*"Concept 1 selected"*), write `brand/<slug>/15-brand-voice-and-copy/brand-voice-and-copy.md` with `status: approved`, covering: voice traits with before/after examples, copy rules per surface, the terminology list, and grammar and style basics (Oxford comma stance, number formatting, heading capitalization, and how the brand name is written, from `00-brand-foundation`).

## Output
- `brand/<slug>/options/15-brand-voice-and-copy-v<n>.html` (immutable options archive)
- `brand/<slug>/15-brand-voice-and-copy/brand-voice-and-copy.md` (committed only after selection)

## Consistency Rules
- All example copy in websites, apps, emails, social media, and marketing must follow this doc. If a system needs a new microcopy pattern, add it here rather than inventing tone ad hoc.
