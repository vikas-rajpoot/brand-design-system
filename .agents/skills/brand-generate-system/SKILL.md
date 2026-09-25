---
name: brand-generate-system
description: Generate or regenerate a single brand subsystem for an existing project using interactive HTML options with pros & cons, an immutable archive, and an explicit user approval gate.
argument-hint: "project-slug and subsystem, e.g. acme-labs color-system"
---

# Brand Generate System Workflow

Use this skill when generating, expanding, or revising a single brand subsystem for an existing project.

> [!IMPORTANT]
> **Strict Interactive Decision-Gate Protocol**:
> - **Never write files or generate a subsystem in one go**.
> - Check the subsystem's prerequisites first (Run Order & Prerequisites in [AGENTS.md](../../../AGENTS.md)).
> - Decision steps: formulate **2–4 cohesive options** grounded strictly in the approved product packet, foundation (`00-brand-foundation`), and, once compiled, design tokens (`04-design-tokens`). Compile steps (`04`, `16`–`20`): present one preview for approval.
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

1. **Check Prerequisites** (stop on any failure and tell the user exactly what to run first):
   - The product packet in `brand/<slug>/product/` is confirmed: all seven files exist and start with `status: approved`. Otherwise use `product-intake`.
   - `brand/<slug>/product/reference-screens.md` exists at `status: approved`. Otherwise use `reference-screens` before any numbered subsystem.
   - Find the subsystem in the Run Order & Prerequisites table in [AGENTS.md](../../../AGENTS.md). Every folder under "Requires" must have its main doc at `status: approved` (for `04`, `tokens.json` must exist). Otherwise stop with a message such as *"Run `color-system` first."*
   - Load the approved foundation and, once it exists, `tokens.json` as the source of truth. Every proposed option must harmonize with them; flag any conflict immediately.

2. **Follow the Subsystem Skill**:
   - Load the skill for this folder (folder map in [AGENTS.md](../../../AGENTS.md)) and follow its procedure exactly.
   - Decision steps: create a self-contained interactive preview with 2–4 distinct, cohesive options in `brand/<slug>/options/<NN-subsystem>-v1.html` (or the next `-vN.html` when revising). Each option must include:
     - Clear concept details, structure, and visual/code specifications.
     - **Brand Cohesion Rationale**: How this option reinforces existing approved choices.
     - **Pros**: Key advantages and positive brand impact.
     - **Cons**: Trade-offs, risks, or contextual limitations.
   - For a digital visual-system step, apply every option to the same approved reference-screen content and state. Do not improve one option by changing its fixture or sample data.
   - Compile steps (`04`, `16`–`20`): present one preview of the compiled result instead.
   - Present the clickable file link to the user and **STOP execution**.

3. **Await User Selection**:
   - Ask for user feedback or explicit choice (e.g. *"Concept 1 selected"*).
   - If the user requests modifications, create the next version in the options folder (e.g., `-v2.html`) and wait again.
   - Proceed to write official subsystem files ONLY when the user explicitly confirms selection.

4. **Commit Approved Subsystem Output**:
   - Write output strictly into `brand/<slug>/<NN-subsystem>/` with `status: approved`.
   - If the subsystem already existed, bump its `version` and document what was revised and the rationale.
   - Coordinate with `brand-asset-generator` for SVGs or visual asset specs if relevant.

5. **Refresh Projections & Conclude**:
   - Once `04-design-tokens` exists, regenerate `brand/<slug>/18-ai-ready-spec/brand-spec.json` from the approved decisions. If `16-asset-library` exists, add any new approved assets to its index.
   - Report a concise confirmation of the committed subsystem with file links, and name the next step in the run order.
