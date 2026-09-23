---
name: brand-new-project
description: Start a full brand design system for a new project or idea from scratch using the interactive decision-gate protocol. Delivers interactive HTML options with pros & cons into an immutable archive.
---

# Brand New Project Workflow

Use this skill when initiating a brand design system for a new project or idea from scratch.

> [!IMPORTANT]
> **Strict Interactive Decision-Gate Protocol**:
> - **Never generate in one go**: Subsystems and brand decisions must be delivered incrementally, one step at a time.
> - **2–4 Cohesive Options**: Present 2–4 distinct, cohesive options for every decision gate, complete with **Brand Cohesion Rationale**, **Pros**, and **Cons**.
> - **Interactive HTML Options Preview**: Deliver each proposal round as a standalone, self-contained interactive HTML file in `brand/<slug>/options/` (e.g. `01-logo-system-v1.html`) featuring live SVG renders, dark/light theme toggles, and cross-device mockups.
> - **Dedicated Immutable Options Archive**: Save all options in `brand/<slug>/options/` with sequential numbering. **NEVER update/overwrite or delete** existing option files. All options history is strictly append-only (use `-v2.html`, `-v3.html` on revisions).
> - **Zero Premature Writes**: Do NOT write or modify files in official subsystem directories (`01-logo-system/`, `02-color-system/`, etc.) until explicit user confirmation.
> - **Explicit User Selection Required**: Stop and wait for the user to evaluate and explicitly confirm (*"Concept 1 selected"*). Only upon explicit confirmation, commit the selected choice to the official subsystem directory, and only then proceed to the next item.

## Inputs Required
- **Product Packet**: User-authored `brand/<project-slug>/product/` containing `BRAND-BRIEF.md`, `01-strategy-foundation.md`, `02-brand-positioning.md`, `03-messaging-and-market.md`, and `04-decisions-and-questions.md`.

## Intake & Project Discovery

Before any brand work, inspect `brand/*/product/` for complete five-file packets. When exactly one is present, use its enclosing slug; when more than one is present, ask the user which slug to work on. When none are complete, stop brand work and identify the missing files for the intended project. If the user supplied only a basic product description or asks for help completing intake, use `product-intake` to interview them. Resume this workflow only after the user confirms the complete packet. Never invent packet contents or create brand artifacts during intake.

## Step-by-Step Procedure

1. **Step 1: Confirm Intake Scope**
   - Use the slug containing the selected complete product packet.
   - Read the full packet before creating an options preview or proposing foundation directions.

2. **Step 2: Brand Foundation (Options & Archive)**
   - Gather essential context (premise, target audience, core problem solved).
   - Formulate 2–3 cohesive strategic foundation angles covering positioning, target audience, personality traits, and voice & tone with Cohesion Rationale, Pros, and Cons.
   - Deliver preview in `brand/<slug>/options/00-brand-foundation-v1.html`.
   - **WAIT for user selection.**
   - Once confirmed, write `brand/<slug>/00-brand-foundation/brand-foundation.md` (`status: approved`).

3. **Step 3: Logo System Options**
   - Present 2–4 cohesive logo concepts in `brand/<slug>/options/01-logo-system-v1.html` with live SVG marks, horizontal/stacked lockups, app icons, favicons, CLI badges, dark/light modes, and mobile/desktop mockups.
   - **WAIT for user selection.**
   - Once confirmed, generate vector assets under `01-logo-system/logos/` and write `01-logo-system/logo-system.md` (`status: approved`).

4. **Step 4: Color System Options**
   - Present 2–3 cohesive color palette options in `brand/<slug>/options/02-color-system-v1.html` derived from approved personality.
   - Include primary, secondary, accent, neutral, semantic roles, light/dark behavior, WCAG contrast notes, **Cohesion Rationale**, **Pros**, and **Cons**.
   - **WAIT for user selection.**
   - Once confirmed, write `brand/<slug>/02-color-system/color-system.md` (`status: approved`).

5. **Step 5: Typography System Options**
   - Present 2–3 cohesive typography pairings in `brand/<slug>/options/03-typography-system-v1.html` (Heading, Body, Monospace) with hierarchy scale, readability assessment, **Cohesion Rationale**, **Pros**, and **Cons**.
   - **WAIT for user selection.**
   - Once confirmed, write `brand/<slug>/03-typography-system/typography-system.md` (`status: approved`).

6. **Step 6: Design Tokens Layering**
   - Compile primitive, semantic, and component tokens into `brand/<slug>/04-design-tokens/tokens.json` based strictly on approved selections.
   - Save preview in `brand/<slug>/options/04-design-tokens-v1.html` for user verification.

7. **Step 7+: Subsystem Generation (One Subsystem at a Time)**
   - For each subsequent subsystem in the 22-folder map (`05-visual-style`, `06-ui-design-system`, `07-website-system`, etc.):
     1. Present 2–4 cohesive options in `brand/<slug>/options/<NN-subsystem>-v1.html` with **Brand Cohesion Rationale**, **Pros**, and **Cons**.
     2. **WAIT for user selection** (*"Concept 1 selected"*).
     3. Commit approved files (`status: approved`) only after user selection.
     4. Keep `brand/<slug>/18-ai-ready-spec/brand-spec.json` synchronized.
     5. Prompt user before moving to the next subsystem.

8. **Step 8: Quality Review & Audit**
   - Use `brand-audit` to verify token completeness, options immutability, and document frontmatter consistency.
