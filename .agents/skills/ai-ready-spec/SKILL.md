---
name: ai-ready-spec
description: 'Use when producing the structured, machine-readable brand-spec.json that aggregates the full brand system so any AI agent (Claude, Codex, Copilot, etc.) can consume it consistently.'
---
# AI-Ready Brand Specification

## When to Use
- After the foundation and at least the core subsystems (color, typography, tokens) exist; update
  whenever any subsystem changes
- Any time an external agent/tool needs one file to understand the whole brand

## Inputs Required
- Approved `00-brand-foundation` and `04-design-tokens`, plus every other approved subsystem file;
  schema at [brand/_template/ai-ready-spec.schema.json](../../../brand/_template/ai-ready-spec.schema.json)

## Procedure
1. Aggregate, using exactly the fields in the schema (doc paths are relative to `brand/<slug>/`):
   - `foundation`: `name`, `positioning`, `audience`, `personality`, `values`, `voice` from `00-brand-foundation`.
   - `tokens`: an exact copy of `04-design-tokens/tokens.json`.
   - `voice`: `traits`, `rules`, and `doc` from `15-brand-voice-and-copy`, if approved.
   - `components`: one entry per `06-ui-design-system` component: `name`, `doc`, and the token names it uses.
   - `subsystems`: folder name -> main doc path for every approved subsystem.
2. If `21-corporate-visual-identity/production-specs.md` exists, project its colour-mapping table
   into the `printColors` array, with each entry pointing at the primitive token it reproduces.
3. Check it with `node .agents/scripts/brand-check.mjs brand/<slug>/18-ai-ready-spec/brand-spec.json`.
   It validates the schema, that `tokens` matches `tokens.json`, that every doc path exists, and that
   every token name and print color points at a real token.
4. Version the spec (`specVersion` field) and bump it on every regeneration; note what changed since
   the previous version in a short changelog array.
5. On first creation, show a short summary (sections, token count, linked docs) and wait for explicit
   approval before writing. Later regenerations after an approved change need no new gate.

## Output
- `brand/<slug>/18-ai-ready-spec/brand-spec.json`

## Consistency Rules
- This file is a projection, never a separate source of truth — if it disagrees with a subsystem
  doc, the subsystem doc wins and this file must be regenerated.
