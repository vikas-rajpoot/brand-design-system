---
name: document-system
description: 'Use when defining branded styles for reports, proposals, whitepapers, letters, invoices, and PDF/Word/Google Docs documents.'
description: 'Use when defining branded styles for reports, proposals, whitepapers, letters, invoices, and PDF/Word/Google Docs documents. Presents cohesive document layout options with pros & cons.'
---
# Document System

## When to Use
- Standardizing look of written business documents
- Standardizing look of written business documents (reports, proposals, whitepapers, letterheads, invoices)

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `03-typography-system`, `01-logo-system`
- `00-brand-foundation`, `01-logo-system`, `02-color-system`, `03-typography-system`

## Procedure
1. Define a document master: header/footer with logo placement, page margins, heading styles
   (mapping to `03-typography-system` scale), body text style, table style, page numbering.
2. Define per-document-type structure: report (cover, executive summary, sections, appendix),
   proposal (cover, agenda, pricing table, terms), whitepaper (cover, abstract, sections, references),
   letter (letterhead), invoice (header, line-item table, totals, payment terms).
3. Note allowed export formats (PDF primary; Word/Google Docs equivalents using the same fonts/colors
   where license allows).
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
- Heading styles must reuse `03-typography-system` scale; colors from `02-color-system` only.
- Headings, margins, and colors must reuse `03-typography-system` and `02-color-system` values.
