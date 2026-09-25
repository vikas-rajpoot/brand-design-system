# Product Packet Schema

Use these sections as the minimum contract. Add product-specific sections when they clarify a real decision. Omit irrelevant topics instead of filling them with generic prose.

## Shared Frontmatter

Every file starts with:

```yaml
---
status: approved
version: 1
owner: product
---
```

Use `approved` only after the user confirms the complete intake summary. Increment `version` for a confirmed revision.

## `BRAND-BRIEF.md`

This is the concise entry point. Include:

1. Product name and confirmed slug
2. Product stage
3. One-sentence definition
4. Category
5. Primary audience
6. Primary problem and desired outcome
7. Core value proposition
8. Primary differentiation and reason to believe
9. Brand promise
10. Mission and vision
11. Product principles
12. Personality and voice
13. Messaging pillars
14. Trust requirements and claims to avoid
15. Approved and avoided terminology
16. Links to the six detailed files
17. Short list of open decisions

## `01-strategy-foundation.md`

Include:

1. Product identity and product stage
2. One-sentence definition
3. Problem hierarchy with current workarounds
4. Primary, secondary, buyer, and excluded audiences where relevant
5. Jobs to be done, each with trigger, motivation, and outcome
6. Core workflow
7. Capability table: capability, user value, status, dependency, evidence
8. Functional, emotional, and economic value
9. Differentiators and non-differentiators
10. Scope boundaries and constraints
11. Success measures or validation signals, if known

Do not describe a planned capability in the present tense.

## `02-brand-positioning.md`

Include:

1. Confirmed category and category explanation
2. Positioning statement: target, need, category, benefit, alternative, differentiation, proof
3. Brand promise and supporting promises
4. Mission and vision with distinct time horizons
5. Product principles with practical consequences
6. Personality traits with "means" and "does not mean"
7. Voice characteristics and tone changes by context
8. Naming and terminology rules
9. Proposed positioning alternatives, only if still unresolved

A positioning statement must name a real alternative. Avoid unsupported superiority words.

## `03-messaging-and-market.md`

Include:

1. Messaging hierarchy: brand idea, value proposition, benefits, proof, features
2. Messaging pillars: idea, audience benefit, proof, usable language, avoided language
3. Claim register: claim, status, evidence, safe wording
4. Competitors, substitutes, and current workarounds in separate groups
5. Competitive dimensions that matter to the primary user
6. Business model, route to market, launch market, and buying motion when known
7. Trust and adoption barriers
8. Product or brand contradictions
9. Brand-system requirements implied by the product

Label user perceptions as such. Do not present them as researched market facts.

## `04-decisions-and-questions.md`

Start with a decision register:

| Decision | Chosen direction | Evidence or rationale | Status | Owner | Revisit trigger |
|---|---|---|---|---|---|

Allowed statuses are `Confirmed`, `Proposed`, and `Open`.

Then include an open-question register:

| Question | Why it matters | Owner | Evidence needed | Next step |
|---|---|---|---|---|

Finish with:

- assumptions that could invalidate the strategy;
- deferred topics that do not block brand work;
- blocking topics that must be decided before a named subsystem.

Never hide open questions by converting them into recommendations.

## `05-launch-scope-and-capabilities.md`

Include:

1. Product stage and the purpose of the capability register
2. Evidence-status definitions, including at least `Live`, `In progress`, `Planned`, and `Not decided`
3. The first complete product slice and explicit launch boundaries
4. A capability table: capability, user value, status, dependency, evidence, and allowed external wording
5. Platform, runtime, workspace, and work-type scope where relevant
6. Minimum compatibility or integration requirements for external systems
7. Success measures or validation signals, clearly separated from marketing claims
8. The evidence required before a capability can be described as available

Do not use a named build, release, test, or implementation as evidence unless the user supplies it or it is present in the inspected project. A planned capability is not a current feature.

## `06-trust-and-data-flows.md`

Include:

1. Protected data, assets, actions, and costs
2. Each distinct execution, storage, network, provider, and account boundary
3. Data-flow descriptions for every materially different product mode
4. Authentication, credentials, permissions, and revocation requirements
5. Material threats, failure modes, and abuse cases
6. Recovery, rollback, backup, and irreversibility limits
7. Logging, analytics, telemetry, retention, deletion, and third-party processing
8. Security, privacy, legal, or operational gates required before launch
9. Safe trust wording and claims that must not be made

Keep requirements separate from verified implementation facts. If a boundary or data flow is undecided, record it as `Open` with an owner and validation step rather than filling it in.
