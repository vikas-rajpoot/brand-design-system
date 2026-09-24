# MobileAgenticIDE Product Documentation

**Status:** Active product direction  
**Last reviewed:** 2026-09-24  
**Document owner:** Product

## Canonical Direction

**Product:** MobileAgenticIDE  
**Category:** Mobile Agent Workspace / Agent Control Plane / Mobile IDE  
**One-line definition:** A mobile agent workspace that lets people connect to a laptop, VPS, or managed Vercel Sandbox and complete technical or non-technical work with MobileAgenticIDE's own harness or compatible agents.

The three category labels have distinct purposes:

- **Mobile Agent Workspace** is the user-facing category.
- **Agent Control Plane** describes the architecture.
- **Mobile IDE** is the flagship coding mode.

The one-line definition describes the product direction. It does not imply that every runtime, workspace, platform, or work type is available in every release. Availability must come from the capability matrix.

## Document Map

1. [`01-strategy-foundation.md`](01-strategy-foundation.md) — audience, problem, product scope, principles, and differentiation.
2. [`02-brand-positioning.md`](02-brand-positioning.md) — positioning, mission, promise, personality, and voice.
3. [`03-messaging-and-market.md`](03-messaging-and-market.md) — approved messages, claim rules, and dated market context.
4. [`04-decisions-and-questions.md`](04-decisions-and-questions.md) — decision register and remaining decision gates.
5. [`05-launch-scope-and-capabilities.md`](05-launch-scope-and-capabilities.md) — launch boundary, capability contract, evidence status, and success measures.
6. [`06-trust-and-data-flows.md`](06-trust-and-data-flows.md) — security boundaries, data flows, permissions, and hosted-mode gates.
7. [`BRAND-BRIEF.md`](BRAND-BRIEF.md) — short summary of the approved direction.

## Source-of-Truth Order

When documents conflict, use this order:

1. The latest **DECIDED** entry in the decision register.
2. The strategy foundation.
3. The launch/capability and trust documents.
4. Brand positioning and messaging.
5. The brand brief, which is a summary rather than a separate strategy.

## Capability Status Labels

- **VERIFIED:** Supported by a named build or release and linked evidence. May be used in external product claims.
- **REPORTED:** Described as implemented in earlier material, but evidence is not present in this checkout. Internal use only until verified.
- **PLANNED:** Approved direction with no release claim.
- **RESEARCH:** Feasibility or product decision is still open.
- **UNSUPPORTED:** Deliberately outside the stated scope.

This checkout contains product documents but no application, protocol, test, release, or design-system sources. For that reason, no implementation claim in these documents is automatically **VERIFIED**.

## Writing Rules

- Say **supported agents** or **compatible agents**, not “any agent.”
- Say **supported workspaces**, not “any workspace.”
- Distinguish direct laptop/VPS mode from the third-party hosted sandbox mode.
- Do not use absolute claims such as “100% private,” “zero risk,” “completely secure,” or “always know exactly.”
- Do not describe a planned capability as proof or as a current feature.
- Date market claims and link to primary sources.
- State platform availability explicitly. “Mobile” is the category; it is not evidence of both iOS and Android support.
