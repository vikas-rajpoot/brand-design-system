---
description: "Audit an existing generated brand system for completeness and internal consistency"
agent: "brand-qa"
argument-hint: "project-slug to audit"
---
Audit the brand system for: ${input:slug:project-slug}

Check `brand/${input:slug}` against the 21-folder map in `.codex/codex-instructions.md`:
- Which folders/files are missing or empty
- Any subsystem that uses colors/fonts/spacing not present in `04-design-tokens/tokens.json`
- Any doc missing frontmatter (`status`, `version`) per `.codex/instructions/brand-docs.instructions.md`
- Whether `18-ai-ready-spec/brand-spec.json` is present and reflects the latest files

Report findings as a checklist grouped by folder, each item marked ✅ / ⚠️ / ❌ with a one-line reason.
