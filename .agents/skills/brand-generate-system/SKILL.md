---
name: brand-generate-system
description: Generate or regenerate a single brand subsystem (logo, color, typography, tokens, UI, website, etc.) for an existing project.
description: Generate or regenerate a single brand subsystem for an existing project using cohesive options with pros & cons and an explicit user approval gate.
---

# Brand Generate System Workflow

Use this skill when generating, expanding, or revising a single brand subsystem for an existing project.

> [!IMPORTANT]
> **Strict Interactive Decision-Gate Protocol**:
> - Never write files or generate a subsystem "in one go".
> - Formulate **2–4 cohesive options** grounded in the project's approved foundation and tokens.
> - Provide a **Brand Cohesion Rationale**, **Pros**, and **Cons** for each option.
> - **STOP and wait** for the user's feedback or explicit selection (*"this one selected"*).
> - Only upon explicit confirmation, commit the files and mark `status: approved`.

## Inputs Required
- **Project Slug**: The kebab-case identifier under `brand/<project-slug>/`.
- **Subsystem Name**: The subsystem to generate (e.g. `color-system`, `ui-design-system`, `website-system`).

## Procedure

1. **Verify Existing Foundations**:
   - Check that `brand/<slug>/00-brand-foundation/brand-foundation.md` exists and load its positioning, audience, and personality.
   - Check `brand/<slug>/04-design-tokens/tokens.json` (if it exists) as an inviolable source of truth.
   - Do not contradict earlier decisions. Flag any potential conflicts with the user before proceeding.
   - Check that `brand/<slug>/00-brand-foundation/brand-foundation.md` exists and load its positioning, audience, personality, and tone.
   - Check `brand/<slug>/04-design-tokens/tokens.json` (if it exists) as the source of truth for visual tokens.
   - Any proposed options must strictly harmonize with these existing foundations.

2. **Locate Target Skill**:
   - Identify the matching skill under `.agents/skills/<subsystem-name>` from the 21-folder map in [AGENTS.md](../../../AGENTS.md).
   - Follow the detailed steps and output specifications in that skill's `SKILL.md`.
2. **Present Cohesive Options with Pros & Cons**:
   - Formulate 2–4 distinct, cohesive design directions or implementation variants for this subsystem.
   - For each option, document:
     - Clear concept details / structure / specs.
     - **Brand Cohesion Rationale**: How this option reinforces existing approved choices.
     - **Pros**: Key advantages and positive brand impact.
     - **Cons**: Trade-offs, risks, or contextual limitations.
   - Present the options to the user and **STOP execution**.

3. **Generate Output**:
   - Write output strictly into `brand/<slug>/<NN-subsystem>/`.
   - If the subsystem already exists, treat this as a revision: highlight differences and rationale.
   - For visual assets or SVGs, coordinate with the `brand-asset-generator` subagent if necessary.
3. **Await User Selection**:
   - Ask for user feedback or selection.
   - If the user suggests tweaks, refine the options and present the updated proposal.
   - Proceed ONLY when the user explicitly confirms (*"Option X"*, *"this one selected"*).

4. **Update AI Spec**:
   - If `brand/<slug>/18-ai-ready-spec/brand-spec.json` exists, update the relevant section so the machine-readable spec remains synchronized.
4. **Commit Approved Output**:
   - Write output strictly into `brand/<slug>/<NN-subsystem>/` with `status: approved`.
   - If the subsystem already existed, document what was revised and the rationale.
   - Coordinate with `brand-asset-generator` for SVGs or visual asset specs if relevant.

5. **Report Status**:
   - Provide a concise summary of generated or updated files without dumping entire file contents into chat.

5. **Update AI Spec & Conclude**:
   - Synchronize `brand/<slug>/18-ai-ready-spec/brand-spec.json` with the approved decisions.
   - Report a concise confirmation of the committed subsystem.
