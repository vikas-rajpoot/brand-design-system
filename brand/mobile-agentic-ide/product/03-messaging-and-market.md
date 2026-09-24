# Messaging and Market Context

**Status:** Approved messaging framework; market facts dated 2026-09-24  
**Last reviewed:** 2026-09-24  
**Owner:** Product Marketing

## Messaging Hierarchy

### Brand Idea

Direct serious work from your phone.

### Product Definition

A mobile agent workspace that lets people connect to a laptop, VPS, or managed Vercel Sandbox and complete technical or non-technical work with MobileAgenticIDE's own harness or compatible agents.

### Primary Value Proposition

MobileAgenticIDE provides one structured mobile surface for starting, directing, inspecting, and approving supported agent work across supported execution environments.

### Major Benefits

- **Mobility:** Keep a supported agent workflow moving away from the desk.
- **Clarity:** Review actions, files, diffs, tests, and artifacts in a mobile interface.
- **Control:** Approve or deny the consequential actions exposed by the runtime.
- **Choice:** Use a reference harness or a tested compatible adapter.
- **Execution options:** Choose an owned laptop, controlled VPS, or explicitly hosted sandbox when supported.
- **Expansion beyond code:** Apply the same workspace model to verified non-coding workflows as they ship.

## Availability Rule

The product definition states the direction. External feature copy must be generated from the **VERIFIED** rows in [`05-launch-scope-and-capabilities.md`](05-launch-scope-and-capabilities.md). Do not turn a **REPORTED**, **PLANNED**, or **RESEARCH** row into present-tense marketing.

## Approved Claim Patterns

| Topic | Safe message | Required qualifier or evidence |
|---|---|---|
| Owned-host networking | Direct-host modes do not require a MobileAgenticIDE-operated traffic relay. | Name the supported transport and release. Tailscale itself may use encrypted relay infrastructure. |
| Credentials | Supported credentials are stored in the documented device or host security store. | Name each credential, location, lifecycle, and build. |
| Telemetry | The named build sends no MobileAgenticIDE product analytics. | Verify crash reporting, logs, model-provider traffic, and hosted-mode traffic separately. |
| Runtime choice | Connect to listed compatible runtimes. | Link the capability matrix; do not imply parity. |
| Managed sandbox | Run work in an explicitly hosted Vercel Sandbox mode. | Use only after the hosted beta gates pass. Explain identity, retention, networking, secrets, and cost. |
| Battery | Uses event-driven updates rather than continuous application polling. | Validate in supported background states; do not promise that battery will not drain. |
| Human control | Approve or deny actions that the runtime exposes for approval. | Do not imply visibility into every side effect or general rollback. |

## Trust Message

Users may entrust the product with source code, documents, host access, private network access, credentials, and model usage costs. Trust must come from inspectable boundaries, limited permissions, and test evidence—not absolute adjectives.

The trust model has three distinct parties:

1. MobileAgenticIDE software and any services it operates.
2. Infrastructure providers such as Tailscale and Vercel.
3. The selected runtime and model provider, which may receive prompts, files, or tool results under its own terms.

See [`06-trust-and-data-flows.md`](06-trust-and-data-flows.md) for the required disclosures.

## Market Context

The market has direct and adjacent competitors. “No direct competitors” is not an approved claim.

| Product or alternative | Current overlap | Important difference to investigate | Primary source |
|---|---|---|---|
| OpenAI Codex in ChatGPT mobile | Connects to development machines; supports remote prompts, approvals, terminal output, diffs, tests, and files. | Uses the Codex ecosystem and a secure relay layer; compare runtime choice, owned-host networking, and permission semantics. | [OpenAI, 2026-05-14](https://openai.com/index/work-with-codex-from-anywhere/) |
| GitHub Mobile with coding agents | Starts and tracks Copilot and third-party coding-agent sessions associated with GitHub repositories. | Cloud- and repository-centered workflow; compare local host control and artifact depth. | [GitHub Docs, accessed 2026-09-24](https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents) |
| Cursor Web and Mobile | Starts background coding agents from a phone and hands work back to desktop. | Web/PWA and GitHub-centered experience; compare direct hosts, native review, and adapter model. | [Cursor Docs, accessed 2026-09-24](https://docs.cursor.com/en/background-agent/web-and-mobile) |
| Replit mobile | Provides mobile agent-assisted application creation in a hosted workspace. | Integrated hosted platform; compare owned-host support and advanced review controls. | [Replit Docs, accessed 2026-09-24](https://docs.replit.com/power-ups/replitai/replitai-chat) |
| Mobile SSH clients | Provide general remote terminal access. | Broad host access but little agent-specific structure, capability negotiation, or artifact review. | Validate named products before publishing a comparison. |
| Staying at the desk | Preserves full access to the development environment. | No mobile setup, but no physical freedom. This remains the default substitute. | User research required. |

## Differentiation Hypotheses

These points are plausible differentiation, not established market facts:

1. A capability-aware interface across more than one supported runtime.
2. Structured mobile permissions and artifact review instead of a small terminal.
3. A no-MobileAgenticIDE-relay path for owned environments.
4. An explicit choice between owned execution and a managed sandbox.
5. One workspace model that can expand from code to other serious work.

Each hypothesis needs a named competitor comparison, a verified implementation, and user evidence before it becomes a strong external claim.

## Resolved Product and Brand Tensions

- **Broad promise versus technical setup:** Lead launch acquisition with technically capable software builders. Expand the audience only as onboarding and managed workspaces improve.
- **Platform direction versus runtime parity:** Publish capability differences. Never simulate features an adapter cannot provide.
- **Owned-host privacy versus hosted convenience:** Treat these as separate modes with separate disclosures.
- **Coding depth versus non-coding range:** Keep coding as the launch wedge. Describe non-coding workflows as they become verified.
- **Mobile category versus platform support:** State iOS availability directly. Do not imply Android support from the word “mobile.”

## Market Maintenance Rule

Review this section at least quarterly and before a launch, fundraising document, press release, or comparison page. Every competitor statement must include a review date and a primary source. Remove claims that cannot be revalidated.

## Brand System Requirements

- App icon and logo.
- Accessible light and dark color systems.
- UI and monospaced typography.
- Components for permissions, artifacts, diffs, terminal details, runtime state, and workspace state.
- Visible capability and trust-boundary differences.
- App Store and product screenshots that show only verified features.

No design-system implementation is claimed in this checkout.
