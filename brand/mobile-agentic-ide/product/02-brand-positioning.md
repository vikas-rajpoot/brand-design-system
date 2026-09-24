---
status: approved
version: 1
owner: product
---

# Brand and Positioning

**Status:** Approved direction  
**Last reviewed:** 2026-09-24  
**Owner:** Product and Brand

## Positioning Statement

**Product stage:** Concept / pre-development; all capabilities described below are product direction until implementation evidence exists.

For technically capable people who want to direct serious work away from their desk, MobileAgenticIDE is a mobile agent workspace that connects to supported laptops, VPS instances, and managed sandboxes. It provides a consistent surface for supported agent runtimes, artifacts, and approvals while making capability and trust boundaries visible.

## Positioning Components

- **Launch audience:** Software builders already using coding agents.
- **Expansion audience:** Researchers, writers, analysts, and operators using prepared workspaces and bounded capabilities.
- **User-facing category:** Mobile Agent Workspace.
- **Architectural category:** Agent Control Plane.
- **Flagship mode:** Mobile IDE.
- **Primary problem:** Agent work is tied to machines and fragmented interfaces.
- **Core promise:** Direct supported agent work from a phone with clear context and control.
- **Reason to believe:** Structured permissions and artifacts, a reference harness, capability-aware adapters, resilient sessions, and explicit owned-host versus hosted-sandbox modes.

## Mission

Make agentic work portable by giving people one clear mobile interface for supported agents, workspaces, and execution environments.

## Vision

MobileAgenticIDE becomes the default mobile workspace for human-directed agent work, beginning with software development and expanding to research, writing, planning, analysis, and bounded operations.

## Brand Promise

MobileAgenticIDE will show the context available for important agent actions and keep the user in control of approvals the product can mediate.

This promise does not mean that the product can observe every side effect, guarantee safe output, or reverse an approved action.

## Messaging Pillars

### 1. Serious Work From Your Phone

- **Idea:** Start, steer, inspect, and approve meaningful work away from a desk.
- **Benefit:** Keep work moving without shrinking a desktop terminal onto a phone.
- **Proof requirement:** A verified mobile workflow covering session start, progress, review, decisions, and recovery.

### 2. Supported Agents, One Workspace Model

- **Idea:** Use the same core concepts across compatible runtimes without pretending they are identical.
- **Benefit:** Less relearning and less lock-in to one interface.
- **Proof requirement:** A published capability matrix and tested adapters.

### 3. Private by Design

- **Idea:** Offer an owned-host path that does not require a MobileAgenticIDE-operated traffic relay.
- **Benefit:** Users can keep execution and credentials in environments they control.
- **Proof requirement:** Documented data flows, credential storage, network behavior, and limitations.

### 4. Native Clarity

- **Idea:** Turn agent events, requested actions, files, and results into a structured mobile interface.
- **Benefit:** Faster comprehension and more informed decisions.
- **Proof requirement:** Usability evidence showing that users understand state and permission impact.

### 5. Code and Beyond

- **Idea:** Reuse the same context, artifact, review, and approval model for non-code work.
- **Benefit:** One workspace model can support more than software development.
- **Proof requirement:** At least one verified non-coding workflow before using broad external claims.

## Brand Personality

- **Professional:** The product handles code, files, credentials, and commands.
- **Minimal:** The interface prioritizes work state and decisions.
- **Technical but legible:** Show precise details without assuming every user lives in a terminal.
- **Premium:** Deliberate, reliable, and native to the supported mobile platform.
- **Calm:** Organize complex activity instead of amplifying urgency.

Core traits: confident, transparent, precise, secure-minded, and calm.

## Brand Voice

- Use short, direct sentences.
- Name the action, target, and consequence.
- Explain technical terms when speaking to expansion audiences.
- Use restrained language. Avoid hype, fear, and unsupported superlatives.
- Write errors as actionable diagnoses: “Host unreachable on port 8787. Check the host service and network route.”

We should sound like a senior engineer explaining a reliable system. We should not sound like a generic chatbot, a terminal pasted into a phone, or an autonomy-at-all-costs product.

## Platform Language

The documented client direction is iOS-first. Use “mobile” for the product category, but do not imply Android availability until it is approved and verified. “Native” describes the user experience; technical framework names belong in engineering documentation, not the value proposition.

## Approved Terminology

- Agent
- Agent harness
- Compatible runtime
- Adapter
- Host
- Workspace
- Artifact
- Subagent
- Client
- Managed sandbox
- Allow / Deny
- Direct-host mode
- Hosted-sandbox mode

Use `agent-host` and `protocol-v1` only as technical identifiers after their specifications are linked.

## Claims That Require Qualification

| Avoid | Use instead |
|---|---|
| Any agent | Supported or compatible agents |
| Any workspace | Supported laptops, VPS instances, and managed sandboxes |
| 100% private / absolute privacy | Private by design, with documented mode-specific boundaries |
| Zero risk | Reduces specific risks; limitations are documented |
| Direct over Tailscale | End-to-end encrypted; the path may be peer-to-peer or relayed by Tailscale |
| No servers or accounts required | No MobileAgenticIDE relay is required for verified direct-host modes |
| Always know exactly what the agent is doing | See structured activity and approval requests exposed by the runtime |
| Full control | Control the actions and permissions the runtime exposes |
| Undo an approval | Recover through version control, snapshots, backups, or runtime-specific mechanisms |

## Visual Direction

- Calm, high-density layouts with comfortable spacing.
- Strong hierarchy for requested actions, diffs, errors, and status.
- Monospaced text for commands and paths; readable UI text elsewhere.
- Semantic colors that do not rely on color alone.
- Motion that communicates state without delaying interaction.
- Explicit visual distinction between owned-host and hosted-sandbox modes.
- Accessibility targets for text size, contrast, touch targets, and screen readers.
