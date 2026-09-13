---
description: "Start a full brand design system for a new project/idea from scratch"
agent: "brand-director"
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
