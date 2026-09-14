---
name: brand-generate-system
description: Generate or regenerate a single brand subsystem for an existing project using interactive HTML options with pros & cons, an immutable archive, and an explicit user approval gate.
---

# Brand Generate System Workflow

Use this skill when generating, expanding, or revising a single brand subsystem for an existing project.

> [!IMPORTANT]
> **Strict Interactive Decision-Gate Protocol**:
> - **Never write files or generate a subsystem in one go**.
> - Formulate **2–4 cohesive options** grounded strictly in the project's approved foundation (`00-brand-foundation`) and design tokens (`04-design-tokens`).
> - Deliver options as a self-contained, interactive HTML preview file in `brand/<slug>/options/<NN-subsystem>-v1.html` featuring live renders, mockups, dark/light toggles, and side-by-side matrices.
> - **Dedicated Immutable Options Archive**: Save options in `brand/<slug>/options/` with sequential numbering. **NEVER update/overwrite or delete** existing option files. If revisions are requested, generate `-v2.html`, `-v3.html` as append-only history.
> - **Zero Premature System Writes**: Do NOT write or modify files in the official subsystem directory until explicit user confirmation.
> - Provide a **Brand Cohesion Rationale**, **Pros**, and **Cons** for each option.
> - **STOP and wait** for the user's feedback or explicit selection (*"Concept 1 selected"*).
> - Only upon explicit confirmation, commit the files to `brand/<slug>/<NN-subsystem>/` and mark `status: approved`.

## Inputs Required
- **Project Slug**: The kebab-case identifier under `brand/<project-slug>/`.
- **Subsystem Name**: The subsystem to generate (e.g. `color-system`, `ui-design-system`, `website-system`).

## Procedure

1. **Verify Existing Foundations & Tokens**:
   - Check that `brand/<slug>/00-brand-foundation/brand-foundation.md` exists and load its positioning, audience, personality, and tone.
   - Check `brand/<slug>/04-design-tokens/tokens.json` (if it exists) as the source of truth for visual tokens.
   - Any proposed options must strictly harmonize with these existing foundations. Flag any conflicts immediately.

2. **Generate Interactive HTML Options Preview**:
   - Formulate 2–4 distinct, cohesive design directions or implementation variants for this subsystem.
   - Create a self-contained interactive preview in `brand/<slug>/options/<NN-subsystem>-v1.html` (or `-v2.html` if revising).
   - Each option must include:
     - Clear concept details, structure, and visual/code specifications.
     - **Brand Cohesion Rationale**: How this option reinforces existing approved choices.
     - **Pros**: Key advantages and positive brand impact.
     - **Cons**: Trade-offs, risks, or contextual limitations.
   - Present the clickable file link to the user and **STOP execution**.

3. **Await User Selection**:
   - Ask for user feedback or explicit choice (e.g. *"Concept 1 selected"*).
   - If the user requests modifications, create the next version in the options folder (e.g., `-v2.html`) and wait again.
   - Proceed to write official subsystem files ONLY when the user explicitly confirms selection.

4. **Commit Approved Subsystem Output**:
   - Write output strictly into `brand/<slug>/<NN-subsystem>/` with `status: approved`.
   - If the subsystem already existed, document what was revised and the rationale.
   - Coordinate with `brand-asset-generator` for SVGs or visual asset specs if relevant.

5. **Update AI Spec & Conclude**:
   - Synchronize `brand/<slug>/18-ai-ready-spec/brand-spec.json` with the approved decisions.
   - Report a concise confirmation of the committed subsystem with file links.
