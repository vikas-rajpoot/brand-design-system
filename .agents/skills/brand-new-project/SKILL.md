---
name: brand-new-project
description: Start a full brand design system for a new project or idea from scratch using the interactive decision-gate protocol. Delivers interactive HTML options with pros & cons into an immutable archive.
argument-hint: "project slug, or a short product description to start intake"
---

# Brand New Project Workflow

Use this skill when initiating a brand design system for a new project or idea from scratch.

> [!IMPORTANT]
> **Strict Interactive Decision-Gate Protocol**:
> - **Never generate in one go**: Subsystems and brand decisions must be delivered incrementally, one step at a time.
> - **Run Order**: Follow the run order and prerequisites in [AGENTS.md](../../../AGENTS.md). Folder numbers are IDs, not the order.
> - **2–4 Cohesive Options**: Present 2–4 distinct, cohesive options for every decision step, complete with **Brand Cohesion Rationale**, **Pros**, and **Cons**. Compile steps (`04`, `16`–`20`) present one preview for approval.
> - **Interactive HTML Options Preview**: Deliver each proposal round as a standalone, self-contained interactive HTML file in `brand/<slug>/options/` (e.g. `01-logo-system-v1.html`) featuring live SVG renders, dark/light theme toggles, and cross-device mockups.
> - **Dedicated Immutable Options Archive**: Save all options in `brand/<slug>/options/` with sequential numbering. **NEVER update/overwrite or delete** existing option files. All options history is strictly append-only (use `-v2.html`, `-v3.html` on revisions).
> - **Zero Premature Writes**: Do NOT write or modify files in official subsystem directories (`01-logo-system/`, `02-color-system/`, etc.) until explicit user confirmation.
> - **Explicit User Selection Required**: Stop and wait for the user to evaluate and explicitly confirm (*"Concept 1 selected"*). Only upon explicit confirmation, commit the selected choice to the official subsystem directory, and only then proceed to the next item.

## Inputs Required
- **Product Packet**: The confirmed, user-authored `brand/<project-slug>/product/` packet: `BRAND-BRIEF.md`, `01-strategy-foundation.md`, `02-brand-positioning.md`, `03-messaging-and-market.md`, and `04-decisions-and-questions.md`, each starting with `status: approved` frontmatter.

## Intake & Project Discovery

Before any brand work, inspect `brand/*/product/`. A packet is confirmed only when all five files exist and each starts with `status: approved`. When exactly one project has a confirmed packet, use its enclosing slug; when several do, ask the user which slug to work on. When none does, stop brand work and tell the user which files are missing or unconfirmed for the intended project. If the user supplied only a basic product description, or wants help completing or confirming the packet, use `product-intake`. Resume this workflow only after the packet is confirmed. Never invent packet contents or create brand artifacts during intake.

## Step-by-Step Procedure

1. **Confirm Intake Scope**
   - Use the slug of the confirmed packet; do not propose a new slug.
   - Read the full packet before creating any options preview.

2. **Approve Reference Screens**
   - If `product/reference-screens.md` is missing or not approved, load `reference-screens`, present its 2–3 neutral screen-set options, and stop for explicit selection.
   - Do not create `00-brand-foundation` or another numbered preview until the screen fixture is approved.

3. **Agree on Scope**
   - Show the user the run order (Run Order & Prerequisites in [AGENTS.md](../../../AGENTS.md)) and ask which steps the product clearly does not need yet (e.g. `08-app-system` for a marketing-only site, or `21-corporate-visual-identity` for a digital-only product). Skip a step only with the user's agreement.

4. **Run Each Step in Order (One at a Time)**
   For each in-scope step, in run order:
   1. Check that its prerequisites are approved. If one is missing, stop and resolve it first.
   2. Load the step's skill and follow it exactly. Decision steps present 2–4 cohesive options in `brand/<slug>/options/<NN-subsystem>-v1.html`; compile steps present one preview. Digital visual-system previews apply every alternative to the approved reference-screen fixture with identical content and state.
   3. **WAIT for the user's explicit selection or approval** (*"Concept 1 selected"*). On feedback, create the next `-vN.html` and wait again.
   4. Commit the approved files (`status: approved`) only after that confirmation.
   5. Once `04-design-tokens` exists, keep `brand/<slug>/18-ai-ready-spec/brand-spec.json` in sync after every approval.
   6. Summarize what was approved and ask before moving to the next step.

5. **Quality Review & Audit**
   - Use `brand-audit` to verify token completeness, options immutability, and document frontmatter consistency.
