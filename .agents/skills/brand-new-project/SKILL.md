---
name: brand-new-project
description: Start a full brand design system for a new project or idea from scratch. Triggers the brand director workflow.
description: Start a full brand design system for a new project or idea from scratch using the interactive decision-gate protocol. Presents cohesive options with pros & cons at each step.
---

# Brand New Project Workflow

Use this skill when initiating a brand design system for a new project or idea from scratch.

> [!IMPORTANT]
> **Strict Interactive Decision-Gate Protocol**:
> - Never generate brand assets, tokens, or subsystems "in one go".
> - For every decision, present **2–4 cohesive options** with **Brand Cohesion Rationale**, **Pros**, and **Cons**.
> - Stop and wait for the user to evaluate and provide feedback or explicitly confirm (*"this one selected"*).
> - Only upon explicit confirmation, commit the selected choice to the project files, and only then proceed to the next item.

## Inputs Required
- **Project Name**: The display name of the project or product.
- **Short Description**: A brief summary of what the project does and its core premise.

## Procedure
## Step-by-Step Procedure

1. **Establish the Project Slug**:
   - Determine the kebab-case project slug (e.g. `acme-labs`) and confirm it with the user if ambiguous.
   - All generated output will reside strictly within `brand/<slug>/`.
   - Provide 2–3 slug options (e.g. `acme-labs`, `acme-hq`) with pros/cons.
   - Wait for user selection before creating `brand/<slug>/`.

2. **Foundation Interview & Document Creation**:
   - If `brand/<slug>/00-brand-foundation/brand-foundation.md` does not exist, interview the user using the `brand-foundation` skill to gather:
     - Name usage rules and trademark constraints
     - Core positioning and differentiator
     - Target audience (primary and secondary)
     - 3-5 brand personality adjectives
     - Core values and desired tone of voice
   - Write `brand/<slug>/00-brand-foundation/brand-foundation.md` with `status: draft`.
2. **Brand Foundation Options & Selection**:
   - Gather basic context (premise, target audience, core problem).
   - Formulate 2–3 cohesive strategic angles covering:
     - Positioning & differentiator
     - Target audience emphasis
     - Brand personality traits & tone of voice
   - For each angle, include **Cohesion Rationale**, **Pros**, and **Cons**.
   - **WAIT for user selection.**
   - Once the user selects their preferred direction (or provides refinements), write `brand/<slug>/00-brand-foundation/brand-foundation.md` with `status: approved`.

3. **Core Tokens**:
   - Run `color-system` and `typography-system` skills to establish foundational values.
   - Run `design-tokens` skill to generate `brand/<slug>/04-design-tokens/tokens.json` (primitive → semantic → component layers).
3. **Color System Options & Selection**:
   - Present 2–3 cohesive color palette options derived from the approved brand personality.
   - Each option includes primary, secondary, accent, neutral, semantic roles, light/dark behavior, contrast notes, **Cohesion Rationale**, **Pros**, and **Cons**.
   - **WAIT for user selection.**
   - Once selected, write `brand/<slug>/02-color-system/color-system.md` (`status: approved`).

4. **Subsystem Generation in Order**:
   - Proceed through the 21-folder map in [AGENTS.md](../../../AGENTS.md) sequentially (01 through 20).
   - Use the matching skill in `.agents/skills/<name>` for each subsystem.
   - Confirm with the user before generating subsystems that may be out of scope for their specific project type (e.g., skip `08-app-system` if building a marketing-only web presence).
   - Delegate visual assets (logos, icons, illustrations) to the `brand-asset-generator` subagent.
4. **Typography System Options & Selection**:
   - Present 2–3 cohesive typography pairing options (Heading, Body, Monospace) that harmonize with the approved personality and color system.
   - For each pairing, provide typographic hierarchy, readability assessment, **Cohesion Rationale**, **Pros**, and **Cons**.
   - **WAIT for user selection.**
   - Once selected, write `brand/<slug>/03-typography-system/typography-system.md` (`status: approved`).

5. **AI-Ready Specification**:
   - Generate `brand/<slug>/18-ai-ready-spec/brand-spec.json` using the `ai-ready-spec` skill, aggregating all foundation, token, and subsystem decisions into a single machine-readable manifest.
5. **Design Tokens Layering**:
   - Compile primitive, semantic, and component tokens into `brand/<slug>/04-design-tokens/tokens.json` based strictly on approved selections.
   - Present a concise summary for user verification.

6. **Quality Review**:
   - Invoke the `brand-qa` subagent or run the `brand-audit` skill to verify completeness, token tracing, and document frontmatter.
   - Provide a final summary of what was generated, what was intentionally skipped, and what remains in draft status.
6. **Subsystem Generation (One Subsystem at a Time)**:
   - For each subsequent subsystem in the 21-folder map (`01-logo-system`, `05-visual-style`, `06-ui-design-system`, `07-website-system`, etc.):
     - Ask the user if this subsystem is needed for their project scope.
     - Present 2–4 cohesive options tailored to previous choices with **Brand Cohesion Rationale**, **Pros**, and **Cons**.
     - Delegate asset mockups/SVGs to `brand-asset-generator`.
     - **WAIT for user selection** (*"this one selected"*).
     - Commit approved files (`status: approved`) only after user selection.
     - Keep `brand/<slug>/18-ai-ready-spec/brand-spec.json` synchronized.
     - Prompt the user before moving to the next subsystem.

7. **Quality Review**:
   - Hand off to `brand-qa` or run `brand-audit` to verify token completeness and document frontmatter consistency.
