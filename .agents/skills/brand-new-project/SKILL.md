---
name: brand-new-project
description: Start a full brand design system for a new project or idea from scratch. Triggers the brand director workflow.
---

# Brand New Project Workflow

Use this skill when initiating a brand design system for a new project or idea from scratch.

## Inputs Required
- **Project Name**: The display name of the project or product.
- **Short Description**: A brief summary of what the project does and its core premise.

## Procedure

1. **Establish the Project Slug**:
   - Determine the kebab-case project slug (e.g. `acme-labs`) and confirm it with the user if ambiguous.
   - All generated output will reside strictly within `brand/<slug>/`.

2. **Foundation Interview & Document Creation**:
   - If `brand/<slug>/00-brand-foundation/brand-foundation.md` does not exist, interview the user using the `brand-foundation` skill to gather:
     - Name usage rules and trademark constraints
     - Core positioning and differentiator
     - Target audience (primary and secondary)
     - 3-5 brand personality adjectives
     - Core values and desired tone of voice
   - Write `brand/<slug>/00-brand-foundation/brand-foundation.md` with `status: draft`.

3. **Core Tokens**:
   - Run `color-system` and `typography-system` skills to establish foundational values.
   - Run `design-tokens` skill to generate `brand/<slug>/04-design-tokens/tokens.json` (primitive → semantic → component layers).

4. **Subsystem Generation in Order**:
   - Proceed through the 21-folder map in [AGENTS.md](../../../AGENTS.md) sequentially (01 through 20).
   - Use the matching skill in `.agents/skills/<name>` for each subsystem.
   - Confirm with the user before generating subsystems that may be out of scope for their specific project type (e.g., skip `08-app-system` if building a marketing-only web presence).
   - Delegate visual assets (logos, icons, illustrations) to the `brand-asset-generator` subagent.

5. **AI-Ready Specification**:
   - Generate `brand/<slug>/18-ai-ready-spec/brand-spec.json` using the `ai-ready-spec` skill, aggregating all foundation, token, and subsystem decisions into a single machine-readable manifest.

6. **Quality Review**:
   - Invoke the `brand-qa` subagent or run the `brand-audit` skill to verify completeness, token tracing, and document frontmatter.
   - Provide a final summary of what was generated, what was intentionally skipped, and what remains in draft status.

