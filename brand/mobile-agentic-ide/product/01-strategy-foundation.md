# Product Strategy Foundation

**Status:** Approved direction  
**Last reviewed:** 2026-09-24  
**Owner:** Product

## Product Definition

**Product:** MobileAgenticIDE  
**Category:** Mobile Agent Workspace / Agent Control Plane / Mobile IDE  
**One-line definition:** A mobile agent workspace that lets people connect to a laptop, VPS, or managed Vercel Sandbox and complete technical or non-technical work with MobileAgenticIDE's own harness or compatible agents.

Category hierarchy:

- **Mobile Agent Workspace:** the category users should remember.
- **Agent Control Plane:** the architecture that normalizes sessions, artifacts, approvals, and workspace state.
- **Mobile IDE:** the first and deepest mode, used for software development.

The definition is the product destination. Release-specific availability is governed by [`05-launch-scope-and-capabilities.md`](05-launch-scope-and-capabilities.md).

## Strategic Choice

MobileAgenticIDE will build a broad agent workspace through a narrow initial wedge:

1. Deliver a strong mobile coding workflow for technically capable users.
2. Establish the first-party harness as the reference runtime.
3. Add capability-aware adapters for compatible external agents.
4. Extend the workspace model from owned laptops and VPS instances to an optional managed Vercel Sandbox.
5. Reuse the same artifact, context, review, and approval primitives for research, writing, planning, analysis, and carefully bounded operations.

This sequence avoids presenting a broad vision as a day-one feature set.

## Product Problem

Agent work remains tied to particular machines, runtimes, and interfaces. A person may need to return to a desk to provide context, inspect a change, approve a command, or recover a disconnected session. Mobile SSH exposes the terminal but does not turn agent activity into a clear review and approval workflow.

The product must address four related problems:

- **Mobility:** work stops or becomes hard to supervise when the user leaves the primary machine.
- **Fragmentation:** runtimes and workspace types expose different interaction models.
- **Clarity:** raw terminal output makes intent, impact, and required action hard to scan on a phone.
- **Trust:** source code, credentials, commands, and hosted execution cross different security boundaries.

## Audience

### Launch Audience

The primary launch audience is technically capable software builders who already use coding agents and can operate a laptop or VPS workspace. This includes individual developers, technical founders, and engineering leads.

Their main job is:

> When an agent is working in my development environment, help me start, steer, inspect, and approve its work from my phone without losing context or control.

This audience matches the current setup reality: host installation, networking, credentials, and permission configuration require technical judgment.

### Expansion Audience

Researchers, writers, analysts, operators, and less-technical users become addressable after prepared workspaces, templates, and safer permission boundaries reduce setup cost. They are part of the product direction, not the initial acquisition promise.

### Not a Current Target

Do not position the product as a zero-configuration consumer assistant. Do not target users who cannot assess command, file, credential, or data-sharing consequences until managed setup and guardrails are proven.

## Jobs To Be Done

### Launch Jobs

1. Start or continue an agent task away from the primary computer.
2. Understand what the agent is doing from structured status, files, diffs, tests, and terminal output.
3. Approve or deny a consequential action with enough context to make an informed choice.
4. Recover cleanly after a mobile network interruption.
5. Move between supported hosts without relearning the core mobile workflow.

### Expansion Jobs

1. Use a compatible runtime while retaining the same core workspace concepts.
2. Create and review non-code artifacts with clear sources, context, and approvals.
3. Run work in an explicitly hosted and isolated sandbox when an owned host is unsuitable.

## Value Proposition

### Functional Value

One mobile-native workspace for starting, directing, inspecting, and approving supported agent work across supported environments.

### Emotional Value

- **Calm:** important state and decisions are visible without constant terminal polling.
- **Control:** permissions show the requested action and its scope.
- **Freedom:** work can continue when the user steps away from a desk.

### Economic Value

- Reduce idle time while an agent waits for input.
- Reduce the cost of switching between runtime-specific interfaces.
- Reuse one workspace model across multiple work types as they become supported.

## Product Principles

1. **The host owns execution truth.** The client projects authoritative host events and must reconcile after disconnection.
2. **Least privilege by default.** High-impact capabilities require explicit enablement. Security is not optional.
3. **Structured over raw.** Convert agent intent and results into inspectable cards and artifacts while retaining access to raw details.
4. **Designed for interruption.** Replay, deduplication, and recovery are product requirements, not edge cases.
5. **Capabilities are explicit.** The interface must show when a runtime or workspace cannot support a feature.
6. **Runtime choice without false parity.** A shared workspace model must not hide meaningful differences between agents.
7. **Hosted mode is visibly different.** A managed sandbox has different data, identity, retention, and cost boundaries from an owned host.
8. **Human approval is not rollback.** Permission prompts reduce risk but do not guarantee reversibility.

## Product Scope

### Flagship Mode

Mobile software development: prompts, streaming activity, permissions, files, diffs, tests, terminal visibility, and session recovery.

### Runtime Model

- The MobileAgenticIDE harness is the reference implementation.
- External agents integrate through a minimum capability contract.
- The UI exposes capability differences instead of simulating unsupported parity.
- An agent is called “compatible” only after it passes the contract and release evidence gate.

### Workspace Model

- **Owned laptop:** direct-host mode.
- **Owned or controlled VPS:** direct-host mode with remote bootstrap and stricter exposure guidance.
- **Managed Vercel Sandbox:** optional hosted mode, gated by the requirements in [`06-trust-and-data-flows.md`](06-trust-and-data-flows.md).

### Work Types

Coding is the launch wedge. Research and writing are the first expansion candidates because their artifacts and review loops map cleanly to the workspace model. Planning and analysis follow. Operational actions require a stricter permission and audit model before they can be first-class.

## Non-Goals

- Universal compatibility with every agent, model, tool, or host.
- A full terminal emulator as the primary experience.
- Fully autonomous execution without meaningful user controls.
- A promise that approval makes an action safe or reversible.
- Identical behavior across direct-host and hosted-sandbox modes.
- Android availability unless it is separately approved and verified.

## Differentiation To Validate

The intended differentiation is the combination of:

- A structured mobile review and approval surface.
- A capability-aware workspace spanning multiple supported runtimes.
- A no-MobileAgenticIDE-relay option for owned laptop and VPS modes.
- An explicit choice between owned execution and a managed hosted environment.
- Shared artifact and approval primitives that can extend beyond coding.

These are hypotheses until supported by release evidence, user research, and dated competitor comparisons. Success measures are defined in [`05-launch-scope-and-capabilities.md`](05-launch-scope-and-capabilities.md).
