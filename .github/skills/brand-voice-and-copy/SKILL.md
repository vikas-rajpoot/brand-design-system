---
name: brand-voice-and-copy
description: 'Use when defining writing style rules for headlines, CTAs, UI text, marketing copy, and terminology for a brand.'
---
# Brand Voice and Copy

## When to Use
- Establishing or applying tone-of-voice and copywriting rules

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

## Output
- `brand/<slug>/15-brand-voice-and-copy/brand-voice-and-copy.md`

## Consistency Rules
- Every other system's example copy must follow this doc; if a system needs a new microcopy pattern,
  add it here rather than inventing tone ad hoc.
