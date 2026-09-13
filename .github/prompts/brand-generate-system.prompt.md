---
description: "Generate or regenerate a single brand subsystem (logo, color, typography, tokens, UI, website, etc.) for an existing project"
agent: "brand-director"
argument-hint: "project-slug and subsystem name, e.g. acme-labs color-system"
---
Generate/update one brand subsystem: ${input:target:project-slug and subsystem name}

1. Load `brand/<slug>/00-brand-foundation` and `brand/<slug>/04-design-tokens/tokens.json` (if it
   exists) as source of truth — do not contradict them.
2. Use the skill matching the requested subsystem from the folder map in
   `.github/copilot-instructions.md`.
3. Write output only under `brand/<slug>/<NN-subsystem>/`.
4. If the subsystem already exists, treat this as a revision: show what changed and why.
5. Update `18-ai-ready-spec/brand-spec.json` if it exists, so it stays in sync.
