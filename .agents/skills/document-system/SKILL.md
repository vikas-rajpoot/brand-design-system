---
name: document-system
description: 'Use when defining branded styles for reports, proposals, whitepapers, letters, invoices, and PDF/Word/Google Docs documents. Presents cohesive document layout options with pros & cons.'
---
# Document System

## When to Use
- Standardizing the look of written business documents (reports, proposals, whitepapers, letterheads, invoices)

## Inputs Required
- Approved `01-logo-system` and `04-design-tokens` (colors, type scale)
- Approved `15-brand-voice-and-copy` (document tone)
- If an input is missing, stop and name the skill to run first (run order in [AGENTS.md](../../../AGENTS.md)).

## Interactive Decision-Gate Procedure
1. **Never generate document templates in one go.** First agree which document types are in scope (e.g. report, proposal, whitepaper, letter, invoice).
2. **Present 2–3 distinct, cohesive document design options** (e.g. Modern Executive vs. Technical Minimalist vs. Classic Formal):
   - Compile all options into a self-contained interactive preview in `brand/<slug>/options/11-document-system-v1.html` (or the next `-vN.html` on revisions).
   - For each option:
     - **Page Anatomy**: Header and footer with logo placement, page margins, heading and body styles from the type scale, table and callout styles, page numbering.
     - **Document Types**: The structure of each in-scope type (e.g. report: cover, executive summary, sections, appendix; proposal: cover, agenda, pricing table, terms; invoice: header, line items, totals, payment terms).
     - **Brand Cohesion Rationale**: How the layout conveys brand credibility and professionalism.
     - **Pros**: Clean printability, reader comprehension, Word/Docs export compatibility.
     - **Cons**: Page length trade-offs, formatting strictness.
3. **Dedicated Immutable Archive**: Save in `brand/<slug>/options/`. **NEVER update/overwrite or delete** existing option files; revisions are append-only.
4. **Zero Premature Writes**: Do NOT write or create any files in `brand/<slug>/11-document-system/` until explicit user selection.
5. **STOP and wait for user selection.**
6. Only when the user explicitly selects a direction (*"Concept 1 selected"*), write `brand/<slug>/11-document-system/document-system.md` with `status: approved`: the document master, the structure of each in-scope type, and export formats (PDF first; Word/Google Docs equivalents only where the font license allows).

## Output
- `brand/<slug>/options/11-document-system-v<n>.html` (immutable options archive)
- `brand/<slug>/11-document-system/document-system.md` (committed only after selection)

## Consistency Rules
- Headings, margins, and colors reuse `04-design-tokens` values; no document-only styles.
- Letterhead and invoice layouts are owned here; `21-corporate-visual-identity` references them.
