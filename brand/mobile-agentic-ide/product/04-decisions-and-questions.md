# Decisions & Open Questions

## QUESTIONS THAT CANNOT BE ANSWERED FROM THE REPOSITORY

### Product & Vision
1. Is the long-term goal to support one local agent SDK, or is the architecture meant to abstract multiple agent frameworks?
2. The UI currently lacks "Undo" after a permission is granted (noted in `FEATURES.md`). Is building an agent-rollback feature part of the roadmap, or fundamentally out of scope?

### Legal & Brand
3. Are there third-party platform guidelines that constrain how supported agent integrations may be named in product and marketing materials?

### Growth & Business Model
4. While currently "free, open source," is there a plan to monetize via a Pro version (e.g., for push notifications, hosted proxy relays, or multi-device sync)?

---

## Decision Register

| Decision | Current Evidence | Confidence | Recommendation | Status |
|---|---|---|---|---|
| Canonical Name | MobileAgenticIDE is the designated product name. | High | Use **MobileAgenticIDE** globally for product-facing naming. | APPROVED |
| Product Category | The product is a remote control for local coding agents. | High | **AI Agent Client** / Developer Tool. | PROPOSED |
| Primary Audience | Requires Node, SSH, Tailscale to set up. | High | **Sophisticated Engineers** (not entry-level devs). | PROPOSED |
| Core Promise | Resolves tethering to the laptop. | Medium | **Un-tethered Freedom + Absolute Control**. | PROPOSED |
| Brand Personality | Design system implies a highly structured, calm UI. | High | **Native Apple Utility** (Calm, structured, premium). | PROPOSED |
| Design System Handoff | `STATUS.md` shows the system is proven but unimplemented. | High | Complete Phase 1 of the handoff to align visual brand with strategy. | PROPOSED |

