#!/usr/bin/env bash
# PostToolUse hook: after any brand/**/*.json write, verify it's valid JSON.
set -euo pipefail

input="$(cat)"
path_arg="$(echo "$input" | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{const j=JSON.parse(d);const a=j.tool_input||{};console.log(a.filePath||a.path||a.file||'')}catch{console.log('')}})" 2>/dev/null || true)"

case "$path_arg" in
  */brand/*.json)
    if [ -f "$path_arg" ] && ! node -e "JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'))" "$path_arg" 2>/dev/null; then
      cat <<JSON
{
  "decision": "block",
  "systemMessage": "Invalid JSON written to $path_arg — fix before continuing."
}
JSON
      exit 0
    fi
    ;;
esac

exit 0
