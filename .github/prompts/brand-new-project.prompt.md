---
description: "Start a full brand design system for a new project/idea from scratch"
description: "Start a full brand design system step-by-step with cohesive options and pros & cons"
description: "Start a full brand design system step-by-step with interactive HTML options and an immutable archive"
argument-hint: "Project name and a short description of the idea"
---
Build a complete brand design system for this new project/idea: ${input:project:Project name and short description}

1. Determine the project slug (kebab-case) and confirm it with me if ambiguous.
2. If `brand/<slug>/00-brand-foundation` doesn't exist, interview me for what's needed
   (name usage, positioning, audience, personality, tone, values) and write the foundation doc.
3. Run through the subsystems in `.github/copilot-instructions.md`'s folder map in order (01-20),
   generating each with its matching skill. Ask before generating subsystems I clearly don't need
   yet (e.g. skip app-system for a marketing-only site).
4. Finish by generating `18-ai-ready-spec/brand-spec.json` aggregating everything produced.
5. Summarize what was generated and what's still missing/draft.
Follow the Interactive Decision-Gate Protocol — never generate in one go:
1. Propose 2–3 slug options (kebab-case) with pros/cons and wait for my selection.
2. Interview me for essential premise, then propose 2–3 cohesive strategic angles for foundation (positioning, personality, voice) with pros and cons. Wait for my explicit selection before writing `00-brand-foundation.md`.
3. Propose 2–3 cohesive color palette options with pros and cons. Wait for my selection before committing `02-color-system.md`.
4. Propose 2–3 cohesive typography pairings with pros and cons. Wait for my selection before committing `03-typography-system.md`.
5. Review token compilation for `04-design-tokens/tokens.json`.
6. For each subsequent subsystem, propose 2–4 cohesive options with pros & cons, wait for me to say "this one selected", commit the files, and only then proceed to the next item.
1. Propose 2–3 slug options (kebab-case) with pros/cons and wait for my selection before creating any project files.
2. Interview me for essential premise, then propose 2–3 cohesive strategic angles for foundation (positioning, personality, voice) in `brand/<slug>/options/00-brand-foundation-v1.html` with pros and cons. Wait for my explicit selection before writing `00-brand-foundation.md`.
3. Propose 2–4 cohesive logo concepts in `brand/<slug>/options/01-logo-system-v1.html` with live SVG marks, lockups, app icons, favicons, and cross-device mockups. Wait for my selection before generating official vector assets.
4. Propose 2–3 cohesive color palette options in `brand/<slug>/options/02-color-system-v1.html` with pros and cons. Wait for my selection before committing `02-color-system.md`.
5. Propose 2–3 cohesive typography pairings in `brand/<slug>/options/03-typography-system-v1.html` with pros and cons. Wait for my selection before committing `03-typography-system.md`.
6. Review token compilation in `brand/<slug>/options/04-design-tokens-v1.html` before locking `04-design-tokens/tokens.json`.
7. For each subsequent subsystem, deliver 2–4 cohesive options in `brand/<slug>/options/<NN-subsystem>-v1.html` with pros & cons, wait for me to say "Concept 1 selected", commit the files, and only then proceed to the next item.
8. Enforce strict immutability: NEVER update/overwrite or delete any file in `brand/<slug>/options/` (always append `-v2.html` on revisions).
