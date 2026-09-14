---
name: brand-voice-and-copy
description: 'Use when defining writing style rules for headlines, CTAs, UI text, marketing copy, and terminology for a brand.'
description: 'Use when defining writing style rules for headlines, CTAs, UI text, marketing copy, and terminology for a brand. Presents cohesive voice and tone options with pros & cons.'
---
# Brand Voice and Copy

## When to Use
- Establishing or applying tone-of-voice and copywriting rules
- Establishing or applying tone-of-voice and copywriting rules across surfaces

## Inputs Required
- `00-brand-foundation` (personality, values, audience)

## Procedure
1. Translate personality adjectives into concrete voice traits (e.g. "confident" → short sentences,
   active voice, no hedging words) with a before/after example per trait.
2. Define copy rules by surface: headlines (length, formula patterns), CTAs (verb-first, allowed/
   banned words), UI microcopy (error messages, empty states, tooltips — tone must stay helpful not
   blaming), marketing copy (long-form tone), terminology list (approved product/feature names,
   words to avoid, capitalization rules).
3. Define grammar/style basics: oxford comma stance, number formatting, capitalization of headings
   (sentence case vs title case), how the brand name itself is written (from `00-brand-foundation`).
## Interactive Decision-Gate Procedure
1. Never generate voice guidelines in one go.
2. Present **2–3 distinct, cohesive voice & tone profile options** (e.g. Crisp & Technical Authority vs. Direct, Energetic & Conversational vs. Warm & Empathetic Expert):
   - For each profile option:
     - **Voice Principles & Traits**: 3–4 defining attributes with before/after copy snippets.
     - **Surface Treatment**: Headline formula, CTA verbs, UI microcopy stance (error handling), long-form narrative.
     - **Glossary & Banned Words**: Approved terms vs. buzzwords to avoid.
     - **Brand Cohesion Rationale**: How this voice directly brings the approved brand personality to life.
     - **Pros**: Clear market resonance, customer trust, distinct copy identity.
     - **Cons**: Tone risks if overdone (e.g. overly formal or overly casual).
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a voice profile (*"this one selected"* or provides adjustments), write `brand/<slug>/15-brand-voice-and-copy/brand-voice-and-copy.md` with `status: approved`.

## Output
- `brand/<slug>/15-brand-voice-and-copy/brand-voice-and-copy.md`

## Consistency Rules
- Every other system's example copy must follow this doc; if a system needs a new microcopy pattern,
  add it here rather than inventing tone ad hoc.
- All copy examples across websites, apps, emails, and social media must adhere to this approved voice doc.
