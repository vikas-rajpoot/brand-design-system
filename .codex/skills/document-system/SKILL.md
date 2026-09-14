---
name: document-system
description: 'Use when defining branded styles for reports, proposals, whitepapers, letters, invoices, and PDF/Word/Google Docs documents. Presents cohesive document layout options with pros & cons.'
---
# Document System

## When to Use
- Standardizing look of written business documents (reports, proposals, whitepapers, letterheads, invoices)

## Inputs Required
- `00-brand-foundation`, `01-logo-system`, `02-color-system`, `03-typography-system`

## Interactive Decision-Gate Procedure
1. Never generate document templates in one go.
2. Present **2–3 distinct, cohesive document design options** (e.g. Modern Executive vs. Technical Minimalist vs. Classic Formal):
   - For each option:
     - **Page Anatomy**: Header, footer, logo positioning, margins, table styling, callout box styling.
     - **Document Types**: Report cover, proposal pricing table, whitepaper abstract, invoice format.
     - **Brand Cohesion Rationale**: How the layout conveys brand credibility and professionalism.
     - **Pros**: Clean printability, reader comprehension, Word/Docs export compatibility.
     - **Cons**: Page length trade-offs, formatting strictness.
3. **STOP and wait for user selection.**
4. Only when the user explicitly selects a document style (*"this one selected"* or provides feedback), write `brand/<slug>/11-document-system/document-system.md` with `status: approved`.

## Output
- `brand/<slug>/11-document-system/document-system.md`

## Consistency Rules
- Headings, margins, and colors must reuse `03-typography-system` and `02-color-system` values.
