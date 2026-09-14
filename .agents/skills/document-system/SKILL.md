---
name: document-system
description: 'Use when defining branded styles for reports, proposals, whitepapers, letters, invoices, and PDF/Word/Google Docs documents.'
---
# Document System

## When to Use
- Standardizing look of written business documents

## Inputs Required
- `00-brand-foundation`, `02-color-system`, `03-typography-system`, `01-logo-system`

## Procedure
1. Define a document master: header/footer with logo placement, page margins, heading styles
   (mapping to `03-typography-system` scale), body text style, table style, page numbering.
2. Define per-document-type structure: report (cover, executive summary, sections, appendix),
   proposal (cover, agenda, pricing table, terms), whitepaper (cover, abstract, sections, references),
   letter (letterhead), invoice (header, line-item table, totals, payment terms).
3. Note allowed export formats (PDF primary; Word/Google Docs equivalents using the same fonts/colors
   where license allows).

## Output
- `brand/<slug>/11-document-system/document-system.md`

## Consistency Rules
- Heading styles must reuse `03-typography-system` scale; colors from `02-color-system` only.
