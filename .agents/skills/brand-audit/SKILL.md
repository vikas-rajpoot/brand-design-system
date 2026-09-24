---
name: brand-audit
description: Audit an existing generated brand system for completeness, token consistency, and required frontmatter.
argument-hint: "project-slug to audit"
---

# Brand Audit Workflow

Use this skill to audit an existing generated brand project under `brand/<project-slug>/` for quality, completeness, and consistency.

## Inputs Required
- **Project Slug**: The slug of the project to audit (e.g. `acme-labs`).

## Procedure

1. **Verify Project Scope**:
   - Confirm `brand/<slug>/` exists. Restrict all checks strictly to files within this directory.
   - Do NOT edit or approve files during an audit pass.

2. **Run the Automatic Checks First**:
   - Run `node .agents/scripts/brand-check.mjs` and include every error and warning for this project in the report.
   - It already checks: the product packet, approved reference screens, run-order prerequisites, review files in `options/`, token format and invariants, generated exports, frontmatter, the AI spec, and Markdown links. Do not repeat these by hand; spend the audit on the judgment checks below.

3. **Folder Completeness Check**:
   - Verify `product/reference-screens.md` is approved and trace later digital visual previews back to its fixed tasks, states, sample content, and viewports.
   - Compare `brand/<slug>/` against the 22-folder map defined in [AGENTS.md](../../../AGENTS.md).
   - Identify missing, empty, or unstarted folders, and note which were skipped on purpose.

4. **Design Token Consistency Check**:
   - Spot check colors, fonts, spacing, and radii in subsystem docs and assets (e.g. `01-logo-system`, `06-ui-design-system`, SVGs, HTML templates) to verify they trace back to tokens. Flag any hardcoded or foreign hex codes/values.
   - Check the nested radius rule (`inner = outer - padding`) in component specs; the checker cannot test it.
   - Verify `04-design-tokens/enforcement.md` exists and covers raw-value linting and contrast testing.
   - If `21-corporate-visual-identity/` exists, verify every Pantone, CMYK, RAL, vinyl, and thread value in `production-specs.md` is declared as the equivalent of a hex that already exists in `02-color-system`. Flag any physical colour with no palette source.

5. **Approval Status Check**:
   - Flag any subsystem documents still marked `status: draft` that need explicit user selection and approval.

6. **AI Spec Check**:
   - Verify `brand/<slug>/18-ai-ready-spec/brand-spec.json` exists and reflects the latest approved subsystems (its `specVersion` and changelog cover the most recent approvals).

7. **Output Report**:
   - Present findings as a clean checklist grouped by folder number:
     `✅ | ⚠️ | ❌  <folder>  <reason>`
   - Conclude with the top 3 recommended priority actions for the human reviewer.
