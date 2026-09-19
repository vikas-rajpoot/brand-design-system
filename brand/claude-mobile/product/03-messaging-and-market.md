# Messaging & Market Context

## Messaging Hierarchy

### Level 1 — Brand Idea
Steer your local AI coding agent from anywhere.

### Level 2 — Primary Value Proposition
MobileAgenticIDE gives you a native mobile interface to securely monitor, control, and approve Claude Code tasks running on your own Mac, without breaking your flow.

### Level 3 — Major Benefits
- **Un-tethered Freedom**: Leave your desk while the agent refactors.
- **Absolute Privacy**: Your data travels directly between your phone and your Mac.
- **Clear Control**: Tap-to-approve permission cards replace messy terminal prompts.

### Level 4 — Proof
- Communicates purely over your private Tailscale network or SSH.
- No developer backend, no telemetry, no accounts required.
- Parses Anthropic Agent SDK streams into a deterministic, pure-rendered iOS timeline.

### Level 5 — Features
- SSH bootstrapping to VPS instances.
- Native React Native / Expo UI.
- Voice dictation for prompts.
- Live subagent observability cards.
- In-app file and diff viewer.

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

## Trust Strategy

Users must trust this product with:
- Source code.
- Terminal access (Remote Code Execution on their host).
- Private network access.
- Anthropic API costs.

**Verified Claims to emphasize**:
- "No backend servers" (Provable via open source code and network monitors).
- "Keys stay on your device" (Stored in iOS Keychain).

**Claims to avoid**:
- "Completely secure" (SSH/Network security depends entirely on the user's Tailscale/VPS setup, which is out of our control).

## Competitive Context

* **Direct Competitors**: Currently none. Most mobile AI apps are generic wrappers (e.g., official Claude app, ChatGPT app).
* **Indirect Competitors**: Mobile SSH clients (Termius, Prompt 3) used to manually view the agent running in `tmux`.
* **Substitutes**: Sitting at the desk; using cloud-hosted agent platforms (like GitHub Copilot Workspaces, which don't run locally).
* **Competitive dimensions**: UX clarity (vs SSH), Privacy (vs Cloud agents), Setup complexity (we are harder to set up but vastly superior once running).

## PRODUCT / BRAND CONTRADICTIONS

1. **Historical Name Collision**: Earlier materials refer to "Checkpoint LLM", "claude-mobile-controller", and "Claude Mobile". The canonical product name is now **MobileAgenticIDE**; remaining product-facing references should migrate to it.
2. **Audience Vibe vs Setup Reality**: The marketing copy ("Drive Claude Code... tap to approve") feels very consumer-friendly and easy. But the actual setup requires minting a token via a Node CLI, setting up Tailscale, and potentially configuring an SSH bootstrap. The brand needs to acknowledge this technical barrier rather than hiding it.
3. **Design System Disconnect**: `design-system/README.md` outlines a beautiful, mathematically proven design system with OkLCH color ramps, but explicitly notes: "The app: consuming none of it. 910 raw values across 137 files." The brand foundation exists in a silo from the product implementation.

## Naming Resolution

- **Canonical Product Name**: MobileAgenticIDE
- **Historical App Name**: Checkpoint LLM
- **Historical In-App Name**: Claude Mobile
- **Historical Repo Name**: claude-mobile-controller
- **Daemon Name**: agent-host
- **Protocol version**: protocol-v1

*Recommendation: Unify product-facing naming under "MobileAgenticIDE". The daemon and protocol names may remain technical identifiers unless separately renamed.*

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
- App Store / Marketing screenshots.
*(We do not need presentation templates, social media assets, or billboard guidelines right now).*

