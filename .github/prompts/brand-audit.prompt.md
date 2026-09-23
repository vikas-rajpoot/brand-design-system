---
description: "Audit an existing generated brand system for completeness and internal consistency"
argument-hint: "project-slug to audit"
---
Audit the brand system for: ${input:slug:project-slug}

Check `brand/${input:slug}` against the 22-folder map in `.github/copilot-instructions.md`:
- Which folders/files are missing or empty
- Any subsystem that uses colors/fonts/spacing not present in `04-design-tokens/tokens.json`
- Any Pantone/CMYK/RAL/thread value in `21-corporate-visual-identity` that is not mapped to an existing `02-color-system` hex
- Any doc missing frontmatter (`status`, `version`) per `.github/instructions/brand-docs.instructions.md`
- Whether `18-ai-ready-spec/brand-spec.json` is present and reflects the latest files

Report findings as a checklist grouped by folder, each item marked ✅ / ⚠️ / ❌ with a one-line reason.
