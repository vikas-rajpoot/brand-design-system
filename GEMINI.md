# Antigravity Workspace Configuration: Brand OS Kit

See [AGENTS.md](./AGENTS.md) for full workspace rules, source-of-truth hierarchy, 21-folder mapping, and custom agent orchestration instructions.

## Key Rules

- All project output is constrained to `brand/<project-slug>/`.
- Source of truth: `00-brand-foundation` > `04-design-tokens` > earlier approved subsystems.
- **Never generate in one go**: System strictly operates via an interactive decision-gate loop, never batch-generating multiple subsystems or decisions autonomously.
- **Mandatory Cohesive Options with Pros & Cons**: For each decision or subsystem, present 2–4 cohesive options with clear brand cohesion explanations, pros, and cons.
- **Explicit User Selection Gate**: Always wait for user feedback/selection (e.g. "this one selected") before committing to files and proceeding to the next item.
- All tokens must follow `primitive -> semantic -> component` layering.
- Never invent colors or typography not defined in `tokens.json`.


