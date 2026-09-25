---
name: brand-os-maintainer
description: Update the Brand OS operating guide and cross-cutting workflow contract when intake gates, packet requirements, run order, folder maps, enforcement, or skill conventions change. Use for the Brand OS itself, not for a project's brand output.
argument-hint: "the Brand OS rule, workflow, or guide change to make"
---

# Brand OS Maintainer

Use this skill for changes to the workspace protocol itself. Do not use it to create or revise a project's brand strategy, options, tokens, or subsystem artifacts.

## Sources of Truth

- Root `AGENTS.md` is the canonical operating guide.
- `.agents/skills/` is the canonical skill source.
- `.agents/scripts/brand-lib.mjs` holds shared enforcement data and rules.
- `brand/AGENTS.md` holds scoped rules for project output.
- `README.md` and `BRAND_OS_OVERVIEW.md` explain the workflow to people but must not contradict `AGENTS.md`.
- `.claude/skills/` and `.github/skills/` are generated mirrors. Never edit them directly; run `.agents/sync.sh` after canonical skill changes.

## Workflow

1. Translate the request into one explicit contract change. Preserve unrelated policy and project content.
2. Search the repository for every phrase, count, filename, skill prerequisite, schema rule, and enforcement function that encodes the old contract. Use `rg` before editing.
3. Update the smallest coherent set of sources. A guide change is incomplete when a checker, guard, skill, template, or scoped instruction still enforces the old rule.
4. When changing a gate, update both documentation and enforcement:
   - product-packet changes require the root and scoped guides, `product-intake`, its packet schema, workflow prerequisite skills, and `PACKET_FILES` in `brand-lib.mjs`;
   - run-order or prerequisite changes require the guide, shared run-order data, affected skills, and checks;
   - folder-map changes require the guide, templates, compilers, audits, and any schema paths;
   - options-history changes require the guide, guard, checker, and Git/CI checks.
5. Do not modify existing files in any project's `options/` archive. Do not alter project brand decisions while maintaining the OS unless the user separately requests that migration.
6. Keep the workspace skills-only. Do not create `.agents/rules/`, agent folders, a second sync tool, or hand-maintained mirror copies.
7. Run `.agents/sync.sh` after skill edits, then validate with:
   - `.agents/scripts/lint-skills.sh`
   - `.agents/sync.sh --check`
   - `node .agents/scripts/brand-check.mjs`
   - relevant targeted tests or syntax checks for changed scripts
   - `git diff --check`
8. Re-run the original repository search for the retired wording or behavior. Any remaining match must be intentional and explained.

## Decision Rules

- If two guides disagree, stop and resolve the conflict using root `AGENTS.md` plus the user's current instruction.
- Do not convert a documentation-only preference into a blocking guard unless the request makes it a mandatory invariant.
- When a new mandatory file is added, define its content contract and approval semantics; listing a filename alone is insufficient.
- Prefer future-proof diagnostics over hard-coded counts when the exact count does not help the user.
- Preserve append-only histories and user-authored project files during migrations.

## Handoff

Report the changed behavior first, then list the canonical files updated, enforcement added or changed, and validation results. Call out any existing project that no longer satisfies the revised contract.
