---
status: approved
version: 1
owner: product
---

# Trust, Security Boundaries, and Data Flows

**Status:** Product security requirements  
**Last reviewed:** 2026-09-24  
**Owner:** Security and Engineering

## Purpose

MobileAgenticIDE handles powerful access. This document defines the minimum trust disclosures and release gates. It is not a claim that the current implementation has passed them.

## Protected Assets

- Source code and non-code documents.
- Prompts, responses, artifacts, diffs, terminal output, and logs.
- SSH keys, host tokens, model credentials, and sandbox credentials.
- Private network and filesystem access.
- Git state, deployments, and external service access.
- Model, compute, storage, and network costs.

## Security Boundaries

The product has two distinct execution modes and a separate model-provider boundary.

### Direct-Host Mode: Laptop or VPS

```text
Mobile client
    │
    │ authenticated transport
    ▼
Tailscale route or SSH bootstrap
    │
    ▼
agent-host on an owned or controlled machine
    │
    ├── files / git / terminal / tools
    └── selected agent runtime ──► selected model provider
```

Requirements and limitations:

- A verified direct-host mode must not require a MobileAgenticIDE-operated traffic relay.
- Tailscale may establish a peer-to-peer connection or use its own encrypted relay infrastructure. “Direct connection” must not be used to deny this possibility. See [Tailscale connection types](https://tailscale.com/docs/reference/connection-types).
- SSH host identity must be verified. Bootstrap access and ongoing application transport must be documented separately.
- The host administrator remains responsible for machine, network, and Tailscale/VPS configuration.
- The selected runtime may send user data to its model provider. Local execution does not mean all processing stays local.

### Hosted-Sandbox Mode: Managed Vercel Sandbox

```text
Mobile client
    │
    ▼
identity and control path — architecture must be documented
    │
    ▼
Vercel Sandbox
    │
    ├── isolated workspace / tools / artifacts
    └── selected agent runtime ──► selected model provider
```

Hosted mode is a third-party cloud execution path. It must be visibly labelled and must not inherit direct-host privacy language.

Before beta, document:

- Account and identity provider.
- Which MobileAgenticIDE services exist and what metadata or content they process.
- Sandbox isolation and tenancy.
- Inbound and outbound networking.
- Filesystem persistence, snapshot behavior, retention, deletion, and recovery.
- Secrets injection, storage, redaction, rotation, and revocation.
- Runtime and model-provider data flows.
- Compute, storage, and network pricing; quotas; budgets; and shutdown behavior.
- Region selection and data-location implications.
- Audit logs, incident response, and user-visible status.

### Runtime and Model Provider Boundary

Every runtime integration must disclose:

- Which provider receives prompts, files, tool results, or metadata.
- Which credentials it uses and where they live.
- Provider retention and training settings that the product can verify or configure.
- Whether tools can make network calls outside the workspace.
- Whether the runtime can perform actions that bypass MobileAgenticIDE permission prompts.

“Private by design” is not a statement that third-party agent or model providers receive no data.

## Threat Model Baseline

At minimum, design and testing must consider:

- A stolen or unlocked phone.
- A compromised laptop or VPS.
- A malicious or compromised runtime adapter.
- Prompt injection in repository content, documents, websites, or tool output.
- An agent requesting a destructive or data-exfiltrating command.
- A stale permission card approved after host state changes.
- Symlink and path traversal outside an allowed directory.
- Replayed, reordered, duplicated, or forged events.
- A man-in-the-middle attempt during bootstrap.
- Secret exposure in prompts, logs, diffs, terminal output, screenshots, or crash reports.
- Denial of service and uncontrolled model or compute cost.
- Sandbox escape or cross-tenant exposure in hosted mode.
- An integration that performs side effects outside the observable protocol.

## Authentication and Credentials

Maintain a credential inventory with these fields:

| Field | Required information |
|---|---|
| Credential | SSH key, host token, runtime key, model key, sandbox token, session token, or other secret. |
| Storage | Mobile security store, host secret store, memory only, or hosted secret service. |
| Scope | Host, directory, runtime, project, sandbox, action, and duration. |
| Transmission | Every destination and transport. |
| Rotation | How a replacement is issued and activated. |
| Revocation | How access is stopped from the phone and host. |
| Logging | Whether any identifier or value can enter logs. |
| Backup | Whether operating-system or cloud backup can copy it. |

Do not publish “keys stay on your device” until this inventory identifies which keys and proves the statement for a named build.

## Authorization and Permissions

- Default to the smallest directory, tool, and command scope that supports the task.
- Treat directory allowlists as a security boundary and test canonical paths, symlinks, mounts, and traversal.
- Permission cards must show the requesting runtime, workspace, action, target, important arguments, and relevant risk context.
- Bind approval to the exact request and current host state where possible. Expire stale requests.
- Separate one-time approval from session or persistent policy changes.
- Make denial safe and explain whether the agent can continue.
- Record a local or host-side audit event without storing secrets unnecessarily.
- State which runtime actions cannot be intercepted.

## Recovery and Undo

Approval is authorization, not a transaction boundary. A command may have irreversible effects.

Recovery may use:

- Git branches, commits, or worktrees.
- Filesystem or sandbox snapshots.
- Application-specific backups.
- Compensating actions supplied by a runtime or external service.

The UI must not display a general Undo promise unless the exact operation is known to be reversible and the recovery mechanism has been tested.

## Logging, Telemetry, and Retention

For every release, document separately:

- Product analytics.
- Crash reporting.
- Diagnostic logs on the phone and host.
- Protocol event retention.
- Hosted control-plane logs.
- Sandbox files and snapshots.
- Runtime and model-provider records.

“Zero telemetry” may be used only if a named build sends no product analytics or diagnostics and a network audit verifies it. Even then, it must not imply that Tailscale, Vercel, an app store, the operating system, or a selected model provider collects nothing.

## Hosted Beta Release Gates

Managed Vercel Sandbox may move from **PLANNED / GATED** to **VERIFIED** only when all of these exist:

1. Reviewed architecture and data-flow diagram.
2. Authentication, authorization, and tenant-isolation tests.
3. Documented persistence, retention, deletion, and restore behavior.
4. Secret handling and outbound-network controls.
5. Cost estimate, visible metering, budget limit, and emergency shutdown.
6. User-visible distinction from owned-host mode.
7. Incident, abuse, and support runbooks.
8. User documentation naming infrastructure and model providers.
9. Legal and privacy review.
10. A named release with acceptance evidence.

## Approved Trust Wording

- “Direct-host modes do not require a MobileAgenticIDE-operated traffic relay.”
- “Tailscale traffic is end-to-end encrypted; the network path may be peer-to-peer or relayed by Tailscale.”
- “Hosted sandbox mode uses third-party cloud infrastructure and has separate identity, retention, and cost boundaries.”
- “Permission prompts cover actions exposed through the runtime integration; they do not guarantee that every side effect is visible or reversible.”

Do not use “100% private,” “zero risk,” “completely secure,” “no third parties,” or “guaranteed rollback.”
