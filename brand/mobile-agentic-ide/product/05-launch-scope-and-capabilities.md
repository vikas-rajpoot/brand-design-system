---
status: approved
version: 1
owner: product
---

# Launch Scope and Capability Contract

**Status:** Product requirement; implementation evidence incomplete  
**Last reviewed:** 2026-09-24  
**Owner:** Product and Engineering

## Purpose

This document separates product direction from release availability. The canonical definition describes where MobileAgenticIDE is going. This matrix determines what may be described as available now.

## Evidence Status

- **VERIFIED:** Linked build/release, automated or manual acceptance evidence, and supported platform versions.
- **REPORTED:** Earlier documents described it as implemented, but this checkout has no supporting source or release evidence.
- **PLANNED:** Approved product direction without an availability claim.
- **RESEARCH:** Feasibility or product choice remains open.
- **UNSUPPORTED:** Outside the intended scope.

No capability below is **VERIFIED** because the current checkout contains no application code, tests, release notes, protocol specification, or build artifacts. This does not prove that the capability is absent. It means external claims require evidence from the implementation repository.

## Launch Boundary

The intended first complete product slice is:

- iOS-first client.
- MobileAgenticIDE first-party harness as the reference runtime.
- Owned laptop and controlled VPS workspaces.
- Session start and resume, streaming activity, contextual permission decisions, files and diffs, read-only terminal visibility, and reliable reconnection.
- Coding as the launch workflow.

The following are outside the initial release claim until separately gated:

- Managed Vercel Sandbox availability.
- External runtime adapters.
- Non-coding templates.
- General rollback or Undo.
- Android support.
- A hosted multi-device sync or notification service.

## Existing-Capability Evidence Queue

| Capability | Documentation status | Allowed external wording now | Evidence needed for VERIFIED |
|---|---|---|---|
| Streaming chat and markdown | REPORTED | None | Supported build, stream/reconnect tests, UI acceptance evidence. |
| Voice dictation for prompt composition | REPORTED | None | Supported OS versions, permission flow, accuracy/failure behavior. |
| Model and permission-mode selection | REPORTED | None | Runtime mapping, persisted state, unsupported-state behavior. |
| Demo mode with mock host | REPORTED | None | Build link and documented limitations. |
| Permission cards | REPORTED | None | Action schema, scope display, allow/deny tests, stale-request handling. |
| Subagent activity cards | REPORTED | None | Runtime source, lifecycle states, disconnect behavior. |
| Terminal visibility | REPORTED | None | Read/write boundary, redaction behavior, truncation and replay tests. |
| Device security-store use | REPORTED | None | Credential inventory, storage API, backup/export behavior, revocation test. |
| SSH bootstrap | REPORTED | None | Supported hosts, authentication methods, host-key verification, failure modes. |
| WebSocket over Tailscale | REPORTED | None | Network diagram, authentication, encryption assumptions, direct/relay test. |
| File viewer and diff viewer | REPORTED | None | Size/encoding limits, binary behavior, diff source, UI acceptance evidence. |
| Git operations | REPORTED | None | Supported commands, branch/worktree semantics, destructive-action gates. |
| Directory allowlist | REPORTED | None | Canonicalization, symlink, traversal, and configuration tests. |
| Event replay and deduplication | REPORTED | None | Protocol specification, sequence rules, soak and fault-injection tests. |
| Zero product analytics | REPORTED | None | Network audit covering analytics, crash reporting, and logs for a named build. |

## Planned Product Matrix

| Area | Target | Status | Availability rule |
|---|---|---|---|
| Reference runtime | MobileAgenticIDE harness | PLANNED | Must pass the required capability contract. |
| External runtime | Claude CLI adapter | RESEARCH | May be named as supported only after feasibility, terms, and contract tests. |
| External runtime | Codex adapter | RESEARCH | May be named as supported only after feasibility, terms, and contract tests. |
| External runtime | GitHub Copilot integration | RESEARCH | Integration surface and product terms must be established first. |
| Workspace | Owned laptop | REPORTED | Requires verified connection, permission, and recovery evidence. |
| Workspace | Controlled VPS | REPORTED | Also requires host-exposure and bootstrap security evidence. |
| Workspace | Managed Vercel Sandbox | PLANNED / GATED | All hosted-mode gates in `06-trust-and-data-flows.md` must pass. |
| Work type | Coding | REPORTED | Launch workflow after evidence verification. |
| Work type | Research | PLANNED | Requires source, artifact, and data-boundary design. |
| Work type | Writing | PLANNED | Requires artifact versioning and review design. |
| Work type | Planning and analysis | PLANNED | Requires structured artifact and provenance design. |
| Work type | Operations | RESEARCH | Requires stronger authorization, audit, idempotency, and recovery controls. |
| Platform | iOS | REPORTED / DIRECTION | Requires supported-version and release evidence. |
| Platform | Android | RESEARCH | Do not imply support. |

## Minimum Runtime Capability Contract

An adapter is **compatible** only if it supplies every required capability or explicitly maps an approved equivalent.

### Required

1. **Runtime identity:** name, version, adapter version, and declared capabilities.
2. **Session identity:** stable session identifier and clear start, active, waiting, completed, failed, and cancelled states.
3. **Ordered events:** sequence or cursor semantics sufficient for replay and deduplication.
4. **Streaming output:** structured text or events with explicit completion and error behavior.
5. **Artifacts:** references to created or changed files and other reviewable outputs.
6. **Permission requests:** action type, target, arguments or summary, risk context, expiry, and allow/deny result.
7. **Interruption:** cancel or stop semantics and an honest description of what can continue remotely.
8. **Recovery:** reconnect and resume behavior without silently losing authoritative state.
9. **Error model:** actionable, typed failures rather than only raw terminal text.
10. **Capability negotiation:** unsupported features are declared and reflected in the UI.

### Optional, Never Implied

- Subagents.
- Editable files.
- Inline diff comments.
- Terminal input.
- Test result parsing.
- Deployment state.
- Runtime-specific rollback.
- Push notifications.

## Initial Success Measures

These are internal validation targets, not marketing claims:

| Outcome | Initial target | Measurement |
|---|---|---|
| Setup clarity | At least 80% of target pilot users connect an owned host within 15 minutes without live help. | Moderated and unmoderated onboarding tests. |
| Reconnection integrity | No unreconciled lost or duplicated authoritative events in the release fault-injection suite. | Network interruption and replay tests. |
| Reconnection speed | 95th percentile return to usable session state within 5 seconds on tested networks. | Instrumented test builds without retaining user content. |
| Permission comprehension | At least 90% of pilot decisions correctly identify the action target and likely effect. | Task-based usability study. |
| Mobile utility | At least 50% of retained pilot users complete one meaningful away-from-desk interaction per active week. | Consent-based pilot research or local counters with documented handling. |
| Reliability | At least 99% of started pilot sessions reach a terminal state or show an actionable recovery state. | Session-state telemetry only if explicitly approved; otherwise controlled trials. |

Targets should be revised after the first pilot, with the change recorded in the decision register.

## Verification Checklist

Before changing a row to **VERIFIED**, link:

- Named release or build.
- Supported OS, host, runtime, and adapter versions.
- Acceptance tests and known limitations.
- Security and privacy review where relevant.
- Product owner and engineering owner sign-off.
- User-facing documentation and recovery guidance.

Before publishing a combined claim, verify every capability and mode included in the sentence.
