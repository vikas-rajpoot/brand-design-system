---
name: product-intake
description: Interview a user who has only a basic product description, resolve ambiguity, and create or revise the seven confirmed product-intake files required before brand-system work. Use before brand-new-project when a project's product packet is missing, incomplete, or no longer accurate.
---

# Product Intake

Turn the user's product knowledge into a precise, user-confirmed source-of-truth packet. This is product discovery, not brand design. Do not create brand concepts, option previews, foundations, tokens, or subsystem files while running this skill.

## Required Result

Create exactly these files under one confirmed project boundary:

- `brand/<project-slug>/product/BRAND-BRIEF.md`
- `brand/<project-slug>/product/01-strategy-foundation.md`
- `brand/<project-slug>/product/02-brand-positioning.md`
- `brand/<project-slug>/product/03-messaging-and-market.md`
- `brand/<project-slug>/product/04-decisions-and-questions.md`
- `brand/<project-slug>/product/05-launch-scope-and-capabilities.md`
- `brand/<project-slug>/product/06-trust-and-data-flows.md`

Read [references/product-packet-schema.md](references/product-packet-schema.md) before composing or revising the packet.

## Non-Negotiable Rules

- Confirm the project name and kebab-case slug before writing files. Never infer final slug approval from silence.
- Treat the user as the author. The agent may organize, clarify, and suggest language, but must not turn a suggestion into an approved fact or decision.
- Keep three states distinct throughout the interview: **Confirmed**, **Proposed**, and **Open**. Never use words such as "approved", "validated", "secure", "best", or "unique" without user evidence.
- Ask only questions whose answers change product strategy, positioning, messaging, or brand requirements. Skip questions already answered.
- Ask no more than three focused questions in one turn. Use familiar language, define technical terms when needed, and separate unrelated decisions.
- When the user does not know an answer, record it as an open question with an owner or validation step. Do not force a guess.
- Resolve contradictions with the user. Do not silently choose one answer or average incompatible answers.
- Do not write any of the seven files until the user confirms the final intake summary. Drafting that summary in chat is allowed.
- Do not overwrite an existing confirmed packet unless the user explicitly asks to revise it and confirms the replacement summary. Increment `version` when revising.
- Do not browse for competitors or market claims unless the user asks for research. User-supplied competitor views remain perceptions until verified.

## Workflow

### 1. Discover the Project

Inspect `brand/*/product/`.

- If the user names a project, use that project after confirming its slug.
- If one incomplete packet exists and matches the request, show what exists and continue its intake.
- If more than one project could match, ask which project to use.
- If the slug is new, propose the kebab-case form and wait for explicit confirmation before creating its directory.
- If a complete packet already exists, ask whether the goal is review/revision or a different project. Do not replace it automatically.

### 2. Build a Coverage Ledger

Extract everything already known from the user's description and any existing project files. Maintain an internal ledger with:

| State | Meaning |
|---|---|
| Confirmed | The user stated or explicitly accepted it. |
| Proposed | Agent wording or a strategic option awaiting a decision. |
| Open | Unknown, disputed, unverified, or deferred. |

Do not ask the user to repeat known facts. If their description contains ambiguous terms such as "for everyone", "AI-powered", "secure", or "easy", ask for the concrete meaning that affects the product.

### 3. Interview in Small Rounds

Cover these areas in dependency order. Adapt the questions to the product; do not recite a questionnaire.

1. **Product core**: canonical name, what it does, product stage, and the concrete user outcome.
2. **Audience and problem**: primary user, triggering situation, current workaround, pain, buyer versus user, and who is not currently served.
3. **Experience and scope**: main workflow, must-have capabilities, boundaries, dependencies, and what is live, planned, or only an idea.
4. **Trust and evidence**: sensitive data or actions, permission model, proof for important claims, constraints, risks, and claims that must not be made.
5. **Market and business**: category, alternatives, meaningful differentiation, geography, pricing or business model if known, and launch priorities.
6. **Direction**: promise, mission, long-term ambition, product principles, personality, voice, approved terminology, and disliked associations.
7. **Open decisions**: unresolved choices, decision owner, evidence needed, and next validation step.

For a decision with real alternatives, offer two or three concise options. For each, state the tradeoff. Mark your recommendation as **Proposed**, not as the user's decision.

### 4. Run a Precision Check

Before summarizing, check for:

- audience broader than the actual setup or distribution supports;
- a category that does not match the core workflow;
- features presented as benefits without a user outcome;
- planned capabilities written as current proof;
- absolute privacy, security, performance, or market-leadership claims without evidence;
- the same term used with different meanings;
- competitors, substitutes, and current workarounds being mixed together;
- mission, vision, promise, and positioning saying the same thing;
- unresolved choices hidden inside polished prose.

Ask targeted follow-ups for material gaps only. Minor unknowns belong in the open-question register.

### 5. Obtain Final Confirmation

Present one compact intake summary in chat with:

- project name and exact slug;
- one-sentence product definition;
- primary user, problem, outcome, and current alternative;
- product stage and capability-status summary;
- category, differentiator, and reason to believe;
- promise, mission, vision, personality, and voice;
- verified constraints and claims to avoid;
- every proposed decision and open question.

End by asking the user to confirm that this summary should become the product packet. If the user changes anything, update the summary and ask for confirmation again.

### 6. Write the Packet

Only after explicit confirmation:

1. Create or revise all seven files using the required schema.
2. Use frontmatter with `status: approved`, the correct integer `version`, and `owner: product`.
3. Write in direct, testable language. Prefer one clear definition over several unlabeled candidates.
4. Label every unselected alternative `Proposed` and every unknown `Open`.
5. Mark capabilities as `Live`, `In progress`, `Planned`, or `Not decided`; do not blur these states.
6. Keep the short brief consistent with the six detailed files. Link between files with relative paths rather than duplicating long sections.

### 7. Validate Before Handoff

Check that:

- all seven required filenames exist in the confirmed slug;
- each file has valid frontmatter and no template placeholders;
- product name, audience, category, promise, and capability status agree across files;
- launch boundaries, capability evidence states, trust boundaries, and data flows agree across files;
- every strong claim has evidence or is clearly marked Proposed/Open;
- every unresolved decision appears in `04-decisions-and-questions.md`;
- no brand-system artifact was created during intake.

Report the completed file paths and the most important open decisions. The packet is then ready for `reference-screens`; the numbered brand workflow begins only after that fixture is approved.
