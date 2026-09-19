# Decisions & Open Questions

## QUESTIONS THAT CANNOT BE ANSWERED FROM THE REPOSITORY

### Product & Vision
1. Which runtime adapters should be first-class at launch: the MobileAgenticIDE harness, Claude CLI, Codex, GitHub Copilot, or another order?
2. What is the minimum common capability contract across runtimes: prompts, streaming, files, diffs, commands, permissions, subagents, tests, and deployment?
3. What exact isolation, persistence, networking, secrets, and cost model will the managed Vercel Sandbox provide?
4. The UI currently lacks "Undo" after a permission is granted (noted in `FEATURES.md`). Is building an agent-rollback feature part of the roadmap, or fundamentally out of scope?
5. Which non-coding workflows should be first-class after coding: research, writing, planning, analysis, operations, or another sequence?
6. What artifact, context, and approval primitives are shared across coding and non-coding work?

### Legal & Brand
7. Are there third-party platform guidelines that constrain how supported agent integrations may be named in product and marketing materials?

### Growth & Business Model
8. While currently "free, open source," is there a plan to monetize via a Pro version (e.g., managed sandbox capacity, premium adapters, push notifications, or multi-device sync)?

---

## Decision Register

| Decision | Current Evidence | Confidence | Recommendation | Status |
|---|---|---|---|---|
| Canonical Name | MobileAgenticIDE is the designated product name. | High | Use **MobileAgenticIDE** globally for product-facing naming. | APPROVED |
| Product Category | The product is expanding from remote control into a general mobile agent workspace, with coding as a flagship mode. | Medium | **Mobile Agent Workspace** with a **Mobile IDE** mode and **Agent Control Plane** architecture. | PROPOSED |
| Primary Audience | Requires Node, SSH, Tailscale to set up. | High | **Sophisticated Engineers** (not entry-level devs). | PROPOSED |
| Core Promise | Developers need one mobile workspace across agents and execution environments. | Medium | **Build from anywhere, with any agent, in one mobile IDE.** | PROPOSED |
| Runtime Strategy | The product should support its own harness and external runtimes through adapters. | Medium | First-party harness plus capability-aware adapters for Claude CLI, Codex, GitHub Copilot, and future integrations. | PROPOSED |
| Workspace Strategy | Work may run on a laptop, VPS, or managed sandbox. | Medium | Treat each as an explicit workspace target with shared mobile primitives and clear capability boundaries. | PROPOSED |
| Work Scope | The same product should support coding and non-coding agent work. | Medium | Start with coding as the technical wedge, then add research, writing, planning, analysis, and operations through shared artifacts, context, and approvals. | PROPOSED |
| Brand Personality | Design system implies a highly structured, calm UI. | High | **Native Apple Utility** (Calm, structured, premium). | PROPOSED |
| Design System Handoff | `STATUS.md` shows the system is proven but unimplemented. | High | Complete Phase 1 of the handoff to align visual brand with strategy. | PROPOSED |

