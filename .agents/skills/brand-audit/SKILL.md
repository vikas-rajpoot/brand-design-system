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

2. **Folder Completeness Check**:
   - Compare `brand/<slug>/` against the 22-folder map defined in [AGENTS.md](../../../AGENTS.md).
   - Identify missing, empty, or unstarted folders.
   - Flag any approved subsystem whose prerequisites (Run Order & Prerequisites in [AGENTS.md](../../../AGENTS.md)) are not approved.

3. **Design Token Consistency Check**:
   - Inspect `brand/<slug>/04-design-tokens/tokens.json`.
   - Spot check colors, fonts, spacing scale, and border-radius in other subsystem docs and assets (e.g., `01-logo-system`, `02-color-system`, `06-ui-design-system`) to verify they trace directly back to defined tokens. Flag any hardcoded or foreign hex codes/values.
   - Verify token invariants: `layers.*` scale, nested radius math, touch targets (44pt), font-scaling, and a strict 4pt/8pt grid.
   - Verify enforcement rules: Ensure `enforcement.md` or CI checks exist for blocking raw values and contrast testing.
   - If `21-corporate-visual-identity/` exists, verify every Pantone, CMYK, RAL, vinyl, and thread value in `production-specs.md` is declared as the equivalent of a hex that already exists in `02-color-system`. Flag any physical colour with no palette source.

4. **Document Frontmatter & Approval Status Check**:
   - Verify every Markdown document in `brand/<slug>/` contains standard YAML frontmatter with `status: draft|approved`, `version`, and `owner`.
   - Flag any subsystem documents still marked `status: draft` that need explicit user selection and approval.


5. **AI Spec Check**:
   - Verify `brand/<slug>/18-ai-ready-spec/brand-spec.json` exists, is valid JSON, and reflects the latest state of all generated subsystems.

6. **Output Report**:
   - Present findings as a clean checklist grouped by folder number:
     `✅ | ⚠️ | ❌  <folder>  <reason>`
   - Conclude with the top 3 recommended priority actions for the human reviewer.
