---
status: approved
version: 1
owner: product
---

# Decisions and Open Questions

**Status:** Active decision register  
**Last reviewed:** 2026-09-24  
**Owner:** Product

## Status Definitions

- **DECIDED:** The product documents must follow this decision.
- **GATED:** Direction is chosen, but public availability depends on named evidence.
- **OPEN:** A decision is still required.
- **SUPERSEDED:** Replaced by a later decision.

## Decision Register

| ID | Decision | Outcome | Status | Owner | Date / review trigger |
|---|---|---|---|---|---|
| D-001 | Product name | Use **MobileAgenticIDE** in product-facing material. | DECIDED | Product | 2026-09-24; review before trademark or store submission. |
| D-002 | Category | Use **Mobile Agent Workspace / Agent Control Plane / Mobile IDE**. Workspace is user-facing, control plane is architectural, and IDE is the flagship mode. | DECIDED | Product | 2026-09-24 |
| D-003 | Definition | Use the canonical one-line definition in `README.md`. | DECIDED | Product | 2026-09-24 |
| D-004 | Launch audience | Focus launch acquisition on technically capable software builders already using coding agents. | DECIDED | Product | Review after onboarding evidence. |
| D-005 | Product range | Build toward technical and non-technical work, with coding as the launch wedge. | DECIDED | Product | Review after the first verified non-code workflow. |
| D-006 | Runtime strategy | Use the first-party harness as the reference runtime. Call an external runtime compatible only after it passes the minimum contract and evidence gate. | DECIDED | Product + Engineering | Review when each adapter enters beta. |
| D-007 | Workspace strategy | Treat laptop, VPS, and managed Vercel Sandbox as distinct targets. Direct-host and hosted-sandbox modes require separate claims and disclosures. | DECIDED | Product + Security | Review before hosted beta. |
| D-008 | Managed sandbox availability | Keep Vercel Sandbox in the product direction, but do not market it as available until the hosted beta gates pass. | GATED | Engineering + Security | Before hosted beta. |
| D-009 | Platform language | The direction is iOS-first. Do not imply Android availability until separately decided and verified. | DECIDED | Product + Engineering | Review during platform planning. |
| D-010 | Privacy claims | Ban absolute privacy, security, and zero-risk claims. Use mode-specific, testable language. | DECIDED | Product + Security | Review before every public launch. |
| D-011 | Compatibility claims | Use “supported” or “compatible,” never universal “any agent” or identical-parity language. | DECIDED | Product | Review when the contract changes. |
| D-012 | Permission recovery | Do not promise general Undo. Recovery depends on version control, snapshots, backups, or runtime-specific compensation. | DECIDED | Product + Engineering | Review if a rollback system is designed. |
| D-013 | Capability evidence | Only **VERIFIED** capabilities may be written as current external features. | DECIDED | Product + Engineering | Every release. |
| D-014 | Non-code sequence | Validate research and writing first, then planning and analysis. Gate operational actions on stronger permissions and auditability. | DECIDED | Product | Review after coding launch evidence. |
| D-015 | Product stage | The product is in concept / pre-development; nothing is built or testable yet. | DECIDED | Product | Review when the first testable build exists. |

## Open Decision Gates

Open questions are kept here because the answer requires implementation evidence, legal review, or commercial input not present in this checkout. They do not change the canonical direction.

| ID | Question | Owner | Required by | Output required |
|---|---|---|---|---|
| Q-001 | Which named build proves each previously reported capability? | Engineering | Before public feature claims | Release/build links, tests, and supported platform versions. |
| Q-002 | Which external adapter follows the first-party harness: Claude CLI, Codex, or another runtime? | Product + Engineering | Before adapter roadmap publication | Feasibility score and capability-contract results. |
| Q-003 | What identity, control-plane, networking, retention, secrets, persistence, deletion, and cost design will hosted Vercel Sandbox use? | Engineering + Security | Before hosted beta | Threat model, data-flow review, cost controls, and operational runbook. |
| Q-004 | Which credentials live on the phone, host, and hosted control plane? | Security + Engineering | Before security claims | Credential inventory and rotation/revocation design. |
| Q-005 | Is Android part of the roadmap? | Product | Before using cross-platform marketing | Platform decision and support plan. |
| Q-006 | What is the monetization model for managed compute, premium adapters, and notifications? | Product + Business | Before paid beta | Pricing, account, quota, and billing policy. |
| Q-007 | Are third-party names and integration descriptions compliant with platform and trademark rules? | Legal / Product | Before public integration marketing | Naming and trademark review. |

## Decision Hygiene

- Add a new row when a decision changes; do not silently rewrite historical outcomes.
- Link implementation evidence from the capability matrix.
- Assign a person to each owner role in the team’s operating system.
- Review open gates monthly and before any external launch material is approved.
