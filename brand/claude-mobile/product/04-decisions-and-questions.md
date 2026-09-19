# Decisions & Open Questions

## QUESTIONS THAT CANNOT BE ANSWERED FROM THE REPOSITORY

### Product & Vision
1. Is the long-term goal to strictly support Anthropic's `claude-agent-sdk`, or is the architecture meant to eventually abstract other agents (e.g., Aider, local Ollama)?
2. The UI currently lacks "Undo" after a permission is granted (noted in `FEATURES.md`). Is building an agent-rollback feature part of the roadmap, or fundamentally out of scope?

### Legal & Brand
3. Does Anthropic have guidelines for third-party clients that dictate how prominently "Claude" can be used in marketing materials? (This likely forced the "Checkpoint LLM" name).

### Growth & Business Model
4. While currently "free, open source," is there a plan to monetize via a Pro version (e.g., for push notifications, hosted proxy relays, or multi-device sync)?

---

## Decision Register

| Decision | Current Evidence | Confidence | Recommendation | Status |
|---|---|---|---|---|
| Canonical Name | Split between "Checkpoint", "Claude Mobile", "claude-mobile-controller". | High | Adopt **Checkpoint** globally to avoid trademark issues and unify identity. | NEEDS APPROVAL |
| Product Category | Repo describes it as a remote control for Claude Code. | High | **AI Agent Client** / Developer Tool. | PROPOSED |
| Primary Audience | Requires Node, SSH, Tailscale to set up. | High | **Sophisticated Engineers** (not entry-level devs). | PROPOSED |
| Core Promise | Resolves tethering to the laptop. | Medium | **Un-tethered Freedom + Absolute Control**. | PROPOSED |
| Brand Personality | Design system implies a highly structured, calm UI. | High | **Native Apple Utility** (Calm, structured, premium). | PROPOSED |
| Design System Handoff | `STATUS.md` shows the system is proven but unimplemented. | High | Complete Phase 1 of the handoff to align visual brand with strategy. | PROPOSED |

