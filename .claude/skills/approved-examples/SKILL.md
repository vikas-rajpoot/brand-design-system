---
name: approved-examples
description: 'Use when documenting final, approved examples showing exactly how the brand should look across mediums (as opposed to editable templates).'
---
# Approved Examples

## When to Use
- After real, finished deliverables exist (a shipped landing page, a sent campaign email, a
  published deck) and should be preserved as the canonical "look like this" reference

## Inputs Required
- Finished artifacts from any subsystem; `19-templates` for what they started from (if applicable)

## Procedure
1. Capture the finished artifact (screenshot, exported file, or link) exactly as shipped — do not
   idealize or edit it into something never actually used.
2. For each example, note: which subsystem/template it came from, the date/version of brand rules it
   reflects, and why it's a good reference (what it demonstrates well).
3. Optionally capture 1-2 anti-pattern examples (real mistakes that were corrected) to make "don't"
   rules concrete — label these clearly as anti-patterns, never as approved.

## Output
- `brand/<slug>/20-approved-examples/<example-name>/` (artifact + `notes.md`)
- `brand/<slug>/20-approved-examples/approved-examples.md` (index)

## Consistency Rules
- Never mark an example "approved" without explicit user confirmation; default to
  `status: pending-approval`.
