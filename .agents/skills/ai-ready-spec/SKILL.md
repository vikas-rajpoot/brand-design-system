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
- Every existing subsystem file for the project; schema at
  [brand/_template/ai-ready-spec.schema.json](../../../brand/_template/ai-ready-spec.schema.json)

## Procedure
1. Aggregate: foundation summary, full token set (from `04-design-tokens/tokens.json`), color/type
   references, voice rules summary, component list with token bindings, and links back to the
   human-readable doc for each section.
2. If `21-corporate-visual-identity/production-specs.md` exists, project its colour-mapping table
   into the `printColors` array, with each entry pointing at the primitive token it reproduces.
3. Validate against the schema in `brand/_template/ai-ready-spec.schema.json` — every referenced
   token name must exist in `tokens.json`.
4. Version the spec (`specVersion` field) and bump it on every regeneration; note what changed since
   the previous version in a short changelog array.

## Output
- `brand/<slug>/18-ai-ready-spec/brand-spec.json`

## Consistency Rules
- This file is a projection, never a separate source of truth — if it disagrees with a subsystem
  doc, the subsystem doc wins and this file must be regenerated.
