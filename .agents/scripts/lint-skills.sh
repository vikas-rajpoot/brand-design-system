#!/usr/bin/env bash
# Fail if any .agents/skills/*/SKILL.md has frontmatter that an agent tool could
# reject or misread: missing/unclosed block, duplicate keys, bad or mismatched
# name, missing or over-long description.
#
# Usage: .agents/scripts/lint-skills.sh    (exit 1 when a problem is found)

set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd -P)"
cd "$ROOT"

problems=0
for file in .agents/skills/*/SKILL.md; do
  [[ -f "$file" ]] || continue
  folder="$(basename "$(dirname "$file")")"
  while IFS= read -r msg; do
    printf '%s: %s\n' "$file" "$msg" >&2
    problems=$((problems + 1))
  done < <(awk -v folder="$folder" -v q="'" '
    { sub(/\r$/, "") }
    NR == 1 { if ($0 != "---") { nofm = 1; exit }; next }
    $0 == "---" { closed = 1; exit }
    match($0, /^[A-Za-z0-9_-]+:/) {
      key = substr($0, 1, RLENGTH - 1)
      if (seen[key]++) print "duplicate key: " key
      val = substr($0, RLENGTH + 1)
      sub(/^[ \t]+/, "", val); sub(/[ \t]+$/, "", val)
      gsub("^[\"" q "]|[\"" q "]$", "", val)
      if (key == "name") name = val
      if (key == "description") desc = val
    }
    END {
      if (nofm || NR == 0) { print "no frontmatter (line 1 must be ---)"; exit }
      if (!closed) { print "frontmatter is not closed with ---"; exit }
      if (!("name" in seen)) print "missing name"
      else if (name != folder) print "name \"" name "\" does not match folder \"" folder "\""
      else if (name !~ /^[a-z0-9]+(-[a-z0-9]+)*$/ || length(name) > 64) print "name must be lowercase letters, digits, and single hyphens (max 64)"
      if (!("description" in seen) || desc == "") print "missing description"
      else if (length(desc) > 1024) print "description is over 1024 characters"
    }
  ' "$file")
done

if (( problems > 0 )); then
  printf 'lint-skills: %d problem(s) found\n' "$problems" >&2
  exit 1
fi
echo "skill frontmatter OK"
