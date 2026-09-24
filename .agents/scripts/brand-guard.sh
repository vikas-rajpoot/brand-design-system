#!/bin/sh
# Hook entry point for every agent tool. Without git or Node it allows everything.
root=$(git rev-parse --show-toplevel 2>/dev/null) || exit 0
command -v node >/dev/null 2>&1 || exit 0
exec node "$root/.agents/scripts/brand-guard.mjs" "$@"
