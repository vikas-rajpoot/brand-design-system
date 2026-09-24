---
name: asset-library
description: 'Use when compiling the approved logos, icons, images, illustrations, screenshots, templates, and downloadable brand files into one indexed library.'
---
# Asset Library

## When to Use
- After several subsystems exist and their approved assets need one indexed, downloadable location

## Inputs Required
- All previously generated subsystems with binary/asset outputs (logos, social templates, deck
  templates, icons, illustrations)

## Procedure
1. Create an index grouping assets by type: Logos, Icons, Illustrations, Photography/Treatment
   examples, Screenshots, Templates (deck/doc/social/email), each with a thumbnail reference and
   source subsystem link.
2. Copy or symlink-reference (via relative link, not duplication) each approved asset from its
   originating subsystem folder — the asset library is an index, not a second copy of truth.
3. Note licensing/usage restrictions per asset if any (e.g. stock photo license).
4. Show the index for review in `brand/<slug>/options/16-asset-library-v1.html` and wait for explicit approval before the first write to `brand/<slug>/16-asset-library/`. After that, add newly approved assets to the index without a new gate.

## Output
- `brand/<slug>/16-asset-library/asset-library.md` (indexed table with links)

## Consistency Rules
- Only list assets that already exist in their subsystem folder; don't fabricate placeholder assets.
