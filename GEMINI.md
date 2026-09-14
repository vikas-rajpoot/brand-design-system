# Antigravity Workspace Configuration: Brand OS Kit

See [AGENTS.md](./AGENTS.md) for full workspace rules, source-of-truth hierarchy, 21-folder mapping, and custom agent orchestration instructions.

## Key Rules

- All project output is constrained to `brand/<project-slug>/`.
- Source of truth: `00-brand-foundation` > `04-design-tokens` > earlier approved subsystems.
- **Never generate in one go**: System strictly operates via an interactive decision-gate loop, never batch-generating multiple subsystems or decisions autonomously.
- **Mandatory Cohesive Options with Pros & Cons**: For each decision or subsystem, present 2–4 cohesive options with clear brand cohesion explanations, pros, and cons.
- **Interactive HTML Options Preview**: Deliver options as a self-contained, interactive HTML preview in `brand/<project-slug>/options/` (e.g. `01-logo-system-v1.html`) with live SVG renders, mobile/desktop mockups, and mode toggles.
- **Dedicated Immutable Options Archive**: Save options under `brand/<project-slug>/options/` with proper numbering and filenames. NEVER overwrite or delete existing option files (append-only history with `-v2.html` on iterations).
- **Zero Premature Writes**: Do NOT write or alter files in official subsystem folders (`01-logo-system/`, etc.) until explicit user confirmation.
- **Explicit User Selection Gate**: Always wait for user feedback/selection (e.g. "Concept 1 selected") before committing to official subsystem files and proceeding to the next item.
- All tokens must follow `primitive -> semantic -> component` layering.
- Never invent colors or typography not defined in `tokens.json`.


