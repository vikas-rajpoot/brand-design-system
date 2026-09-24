# Contributing

Thank you for improving Brand OS Kit.

## Before You Change Files

Read [AGENTS.md](AGENTS.md). Keep generated brand output inside `brand/<project-slug>/`. Do not overwrite or delete files in a project's `options/` archive.

For skill changes, edit `.agents/skills/` and run:

```sh
.agents/sync.sh
.agents/scripts/lint-skills.sh
node .agents/scripts/brand-check.mjs
```

For brand-system changes, keep the product packet, run order, approval gate, and token layering rules intact. Add a new option version instead of changing an existing option.

## Pull Requests

Explain the user-facing or reliability improvement, include the checks you ran, and call out any change to hooks, schemas, or generated files. CI must pass before merge.
