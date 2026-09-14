---
name: brand-voice-and-copy
description: 'Use when defining writing style rules for headlines, CTAs, UI text, marketing copy, and terminology for a brand. Presents cohesive voice and tone options with pros & cons.'
---
# Brand Voice and Copy

## When to Use
- Establishing or applying tone-of-voice and copywriting rules across surfaces

## Inputs Required
- `00-brand-foundation` (personality, values, audience)

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
- All copy examples across websites, apps, emails, and social media must adhere to this approved voice doc.
