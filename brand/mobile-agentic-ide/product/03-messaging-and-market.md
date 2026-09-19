# Messaging & Market Context

## Messaging Hierarchy

### Level 1 — Brand Idea
Build from anywhere, with any agent, in one mobile IDE.

### Level 2 — Primary Value Proposition
MobileAgenticIDE gives developers one native mobile workspace to prompt, edit, run, review, and ship code across a laptop, VPS, or managed Vercel Sandbox, using its own agent harness or compatible runtimes such as Claude CLI, Codex, and GitHub Copilot.

### Level 3 — Major Benefits
- **Un-tethered Freedom**: Leave your desk while the agent refactors.
- **Absolute Privacy**: Your data travels directly between your phone and your Mac.
- **Clear Control**: Tap-to-approve permission cards replace messy terminal prompts.
- **Runtime Choice**: Keep the same mobile workflow while choosing the agent harness or CLI that fits the task.

### Level 4 — Proof
- Communicates purely over your private Tailscale network or SSH.
- No developer backend, no telemetry, no accounts required.
- Parses agent event streams into a deterministic, pure-rendered iOS timeline.
- Provides a runtime adapter boundary for the first-party harness and future agent integrations.
- Presents laptop, VPS, and managed Vercel Sandbox as explicit workspace targets.

### Level 5 — Features
- SSH bootstrapping to VPS instances.
- Native React Native / Expo UI.
- Voice dictation for prompts.
- Live subagent observability cards.
- In-app file and diff viewer.
- First-party MobileAgenticIDE agent harness.
- Adapters for Claude CLI, Codex, GitHub Copilot, and future runtimes.
- Workspace switcher for laptop, VPS, and managed Vercel Sandbox.

## Messaging Pillars

### Pillar 1: Total Control, Zero Desk
* **Core idea**: You don't have to watch the terminal to manage your agent.
* **User benefit**: Reclaim time and physical freedom while maintaining oversight.
* **Supporting capabilities**: Tap-to-approve permission cards, push notifications (planned).
* **Language we can use**: "Steer", "Un-tether", "Monitor remotely", "Approve with a tap".
* **Language we should avoid**: "Fully autonomous", "Replaces you", "Set and forget" (because we emphasize human-in-the-loop approval).

### Pillar 2: Private by Design
* **Core idea**: A tool that respects your proprietary codebase.
* **User benefit**: Zero risk of leaking source code to third-party app developers.
* **Supporting capabilities**: Direct WebSocket/SSH connections, device-local keychain, no telemetry.
* **Language we can use**: "Direct connection", "Your own network", "BYO-Mac", "No middleman".
* **Language we should avoid**: "Cloud sync", "Accounts", "Our servers".

### Pillar 3: Native Clarity
* **Core idea**: Abstracting terminal chaos into structured iOS UI.
* **User benefit**: Faster comprehension of what the agent is doing, reducing cognitive load.
* **Supporting capabilities**: Pure timeline reducer, grouped step cards, syntax highlighting.
* **Language we can use**: "Native UI", "Structured cards", "Clear diffs", "Calm chat".
* **Language we should avoid**: "Terminal emulator" (it's more than that).

### Pillar 4: Any Agent, Any Workspace
* **Core idea**: The mobile workspace should not force the developer into one agent runtime or one machine.
* **User benefit**: Move between the first-party harness, Claude CLI, Codex, GitHub Copilot, and future integrations without relearning the product.
* **Supporting capabilities**: Runtime adapters, workspace switching, shared permissions, files, diffs, tests, and deployment state.
* **Language we can use**: "Use the agent you choose", "One mobile workspace", "Laptop, VPS, or sandbox", "Bring your runtime".
* **Language we should avoid**: "Every agent works exactly the same", "Universal compatibility".

## Trust Strategy

Users must trust this product with:
- Source code.
- Terminal access (Remote Code Execution on their host).
- Private network access.
- Agent API costs.

**Verified Claims to emphasize**:
- "No intermediary server for direct laptop and VPS connections" (Provable via open source code and network monitors).
- "Keys stay on your device" (Stored in iOS Keychain).
- "Managed sandbox is an explicit hosted execution option" (Only claim after isolation and data-flow behavior are documented).

**Claims to avoid**:
- "Completely secure" (SSH/Network security depends entirely on the user's Tailscale/VPS setup, which is out of our control).

## Competitive Context

* **Direct Competitors**: Currently none. Most mobile AI apps are generic wrappers (e.g., official Claude app, ChatGPT app) or single-runtime clients.
* **Indirect Competitors**: Mobile SSH clients (Termius, Prompt 3) used to manually view the agent running in `tmux`.
* **Substitutes**: Sitting at the desk; using cloud-hosted agent platforms (like GitHub Copilot Workspaces, which don't run locally).
* **Competitive dimensions**: UX clarity (vs SSH), Privacy (vs Cloud agents), Setup complexity (we are harder to set up but vastly superior once running).

## PRODUCT / BRAND CONTRADICTIONS

1. **Audience Vibe vs Setup Reality**: The mobile-control promise may feel consumer-friendly and easy. But the actual setup requires minting a token via a Node CLI, setting up Tailscale, and potentially configuring an SSH bootstrap. The brand needs to acknowledge this technical barrier rather than hiding it.
2. **Design System Disconnect**: `design-system/README.md` outlines a beautiful, mathematically proven design system with OkLCH color ramps, but explicitly notes: "The app: consuming none of it. 910 raw values across 137 files." The brand foundation exists in a silo from the product implementation.
3. **Platform Promise vs Integration Reality**: Supporting a first-party harness plus Claude CLI, Codex, GitHub Copilot, and future runtimes requires adapters, capability negotiation, and honest feature parity language.

## Naming

- **Canonical Product Name**: MobileAgenticIDE
- **Daemon Name**: agent-host
- **Protocol version**: protocol-v1
- **Runtime model**: first-party harness plus adapter-based integrations
- **Workspace targets**: laptop, VPS, managed Vercel Sandbox

*Use MobileAgenticIDE consistently in all product-facing naming. The daemon and protocol names may remain technical identifiers unless separately renamed.*

## Existing Visual Brand Audit

*Based on `design-system/` inspection:*
- **Logos/Icons**: Unclear/Missing in current view.
- **Colors**: Defined mathematically via OkLCH scripts in `design-system/scripts/spec/`. (Very consistent theoretically, inconsistent in actual app).
- **Typography**: Heavily systematized in `theory/` docs, not yet applied.
- **Spacing/Radius**: Exists in `tokens/`, governed strictly.
- **Overall**: The visual brand is currently in a state of mid-migration ("in handoff").

## Brand Design Implications

- **Visual Personality**: Should reflect the "Calm" and "Structured" personality.
- **Density**: Because it displays code and terminal output, the UI needs comfortable padding but high information density (monospaced fonts for paths, distinct visual boundaries for permission cards).
- **Color Personality**: Muted, dark-mode first (terminal aesthetic), with strict, highly visible semantic colors for destructive actions (e.g., Red for Deny, Green/Blue for Allow).
- **Motion**: Instantaneous. The pure timeline reducer is fast; UI animations should not slow down the developer.

## Brand System Requirements

The eventual design system (which is already partly built in `design-system/`) requires:
- App Icon / Logo.
- Typography (UI sans-serif + high legibility monospace).
- Color system (Support for dark/light mode, semantic alerts for permissions).
- UI Component Tokens (Cards, Buttons, Terminal blocks).
- Runtime and workspace switching states, including capability differences between adapters.
- App Store / Marketing screenshots.
*(We do not need presentation templates, social media assets, or billboard guidelines right now).*

