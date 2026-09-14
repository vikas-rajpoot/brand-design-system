---
description: "Generate or regenerate a single brand subsystem (logo, color, typography, tokens, UI, website, etc.) for an existing project"
description: "Generate or regenerate a single brand subsystem with cohesive options and pros & cons"
description: "Generate or regenerate a single brand subsystem with interactive HTML options and an immutable archive"
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
Follow the Interactive Decision-Gate Protocol — never generate in one go:
1. Load `brand/<slug>/00-brand-foundation` and `brand/<slug>/04-design-tokens/tokens.json` as the source of truth.
2. Present 2–4 cohesive options for this subsystem with Brand Cohesion Rationale, Pros, and Cons.
3. Stop and wait for my feedback or explicit selection ("this one selected").
1. Load `brand/<slug>/00-brand-foundation` and `brand/<slug>/04-design-tokens/tokens.json` as the source of truth — do not contradict them.
2. Present 2–4 cohesive options for this subsystem inside `brand/<slug>/options/<NN-subsystem>-v1.html` with live visual renders, Brand Cohesion Rationale, Pros, and Cons.
3. Stop and wait for my feedback or explicit selection (e.g. "Concept 1 selected"). Do NOT write any files to the official subsystem directory before my confirmation.
4. Only upon my selection, write output under `brand/<slug>/<NN-subsystem>/` with `status: approved`.
5. Synchronize `18-ai-ready-spec/brand-spec.json`.
5. Enforce strict immutability: NEVER update/overwrite or delete any file in `brand/<slug>/options/` (always append `-v2.html` on revisions).
6. Synchronize `18-ai-ready-spec/brand-spec.json`.
