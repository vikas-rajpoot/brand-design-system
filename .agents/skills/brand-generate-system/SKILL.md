---
name: brand-generate-system
description: Generate or regenerate a single brand subsystem (logo, color, typography, tokens, UI, website, etc.) for an existing project.
---

# Brand Generate System Workflow

Use this skill when generating, expanding, or revising a single brand subsystem for an existing project.

## Inputs Required
- **Project Slug**: The kebab-case identifier under `brand/<project-slug>/`.
- **Subsystem Name**: The subsystem to generate (e.g. `color-system`, `ui-design-system`, `website-system`).

## Procedure

1. **Verify Existing Foundations**:
   - Check that `brand/<slug>/00-brand-foundation/brand-foundation.md` exists and load its positioning, audience, and personality.
   - Check `brand/<slug>/04-design-tokens/tokens.json` (if it exists) as an inviolable source of truth.
   - Do not contradict earlier decisions. Flag any potential conflicts with the user before proceeding.

2. **Locate Target Skill**:
   - Identify the matching skill under `.agents/skills/<subsystem-name>` from the 21-folder map in [AGENTS.md](../../../AGENTS.md).
   - Follow the detailed steps and output specifications in that skill's `SKILL.md`.

3. **Generate Output**:
   - Write output strictly into `brand/<slug>/<NN-subsystem>/`.
   - If the subsystem already exists, treat this as a revision: highlight differences and rationale.
   - For visual assets or SVGs, coordinate with the `brand-asset-generator` subagent if necessary.

4. **Update AI Spec**:
   - If `brand/<slug>/18-ai-ready-spec/brand-spec.json` exists, update the relevant section so the machine-readable spec remains synchronized.

5. **Report Status**:
   - Provide a concise summary of generated or updated files without dumping entire file contents into chat.

