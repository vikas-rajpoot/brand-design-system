# Brand OS Kit: Overview

## What is it?
The **Brand OS Kit** is an AI-powered system designed to help you build a complete, production-grade brand and design system for any new app or project (like Kinetiq). 

Instead of generating a messy, disjointed design in one go, it acts as a professional design team that works with you step-by-step.

## How it Works (The Golden Rules)
1. **Interactive Options:** For every design decision (logos, colors, components), the AI gives you 2-4 cohesive options with pros and cons in a beautiful HTML preview file.
2. **You Are the Boss:** The AI **never** writes official design files until you explicitly select an option.
3. **Immutable History:** Every option generated is saved permanently in an `options/` folder so you can always look back.
4. **Strict Safety Rules:** It enforces production standards like minimum touch target sizes (44pt), strict spacing grids, and preventing random hardcoded colors.

## The Agents (Your Team)
- 🧑‍🎨 **`brand-director`**: The lead orchestrator. You talk to this agent to build the system from scratch. It presents options, asks for feedback, and drives the project forward.
- 🖼️ **`brand-asset-generator`**: The graphic designer. It generates SVGs for logos, icons, and marketing assets that perfectly match your approved design tokens.
- 🕵️ **`brand-qa`**: The inspector. It audits the project to ensure no folders are missing, all colors trace back to the official tokens, and all frontmatter is correct.

## The Skills (The Workflow)
The kit comes with 21 "Skills" which map exactly to 21 numbered folders. The system always follows this order:
- **`00-brand-foundation`**: Defines the project name, audience, and personality.
- **`01` to `03`**: Defines logos, colors, and typography.
- **`04-design-tokens`**: Converts the visuals into strict code variables (`tokens.json`).
- **`05` to `08`**: Uses the tokens to build UI components, websites, and app screens.
- **`09` to `20`**: Generates marketing, emails, presentations, and the final AI-ready spec.

## Current Status
- ✅ **Fully Synced**: Works seamlessly on Google Antigravity (`.agents/`), GitHub Copilot (`.github/`), Claude (`.claude/`), and Codex (`.codex/`).
- ✅ **Production-Ready**: Recently upgraded with advanced rules like CI contrast checks, strict Component APIs (no random style overrides), and non-happy-path content states (errors, empty states).

