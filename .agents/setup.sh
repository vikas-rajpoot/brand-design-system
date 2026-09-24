#!/usr/bin/env bash
# One-time setup after cloning: turn on the git hooks, check tools, and run every check once.
# Usage: .agents/setup.sh
set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$ROOT"

git config core.hooksPath .agents/githooks
echo "git hooks: on (.agents/githooks)"

if command -v node >/dev/null 2>&1; then
  major="$(node -p 'process.versions.node.split(".")[0]')"
  if (( major < 18 )); then
    echo "node: found v$major, but Node 18+ is needed for the brand checks and agent hooks" >&2
  else
    echo "node: v$major"
  fi
else
  echo "node: not found. Install Node 18+ so the brand checks and agent hooks can run." >&2
fi

.agents/sync.sh --check
.agents/scripts/lint-skills.sh
if command -v node >/dev/null 2>&1; then node .agents/scripts/brand-check.mjs; fi

cat <<'EOF'

Next:
  - Codex: run /hooks once in Codex to trust this repo's hooks (.codex/hooks.json).
  - macOS, optional: .agents/watch.sh --install keeps the skill mirrors in sync while you edit.
EOF
