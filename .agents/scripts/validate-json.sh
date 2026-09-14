#!/usr/bin/env bash
# Antigravity & Copilot Lifecycle Hook: Validate JSON files under brand/
set -euo pipefail

mode="${1:-auto}"
input="$(cat)"

node -e '
let data = "";
const mode = process.argv[1];
process.stdin.on("data", chunk => data += chunk);
process.stdin.on("end", () => {
  try {
    const payload = data.trim() ? JSON.parse(data) : {};
    const toolCall = payload.toolCall || {};
    const args = toolCall.args || payload.tool_input || {};
    const targetFile = args.TargetFile || args.filePath || args.path || args.file || "";
    const codeContent = args.CodeContent;

    // Detect if this is post-tool-use
    const isPost = mode === "post" || Boolean(payload.toolResult || payload.toolCallResult || payload.error !== undefined || payload.result);

    if (isPost) {
      // PostToolUse must always return {}
      const isBrandJson = targetFile.includes("brand/") && targetFile.endsWith(".json");
      if (isBrandJson && targetFile) {
        const fs = require("fs");
        if (fs.existsSync(targetFile)) {
          try {
            JSON.parse(fs.readFileSync(targetFile, "utf8"));
          } catch (err) {
            console.error(`[validate-json] Warning: Invalid JSON detected in ${targetFile}: ${err.message}`);
          }
        }
      }
      process.stdout.write("{}\n");
      process.exit(0);
    }

    // PreToolUse logic
    const isBrandJson = targetFile.includes("brand/") && targetFile.endsWith(".json");
    if (isBrandJson && codeContent !== undefined) {
      try {
        JSON.parse(codeContent);
        process.stdout.write(JSON.stringify({ decision: "allow" }) + "\n");
        process.exit(0);
      } catch (err) {
        process.stdout.write(JSON.stringify({
          decision: "deny",
          reason: `Invalid JSON in ${targetFile}: ${err.message}`
        }) + "\n");
        process.exit(0);
      }
    }

    // Default PreToolUse response
    process.stdout.write(JSON.stringify({ decision: "allow" }) + "\n");
  } catch (e) {
    if (mode === "post") {
      process.stdout.write("{}\n");
    } else {
      process.stdout.write(JSON.stringify({ decision: "allow" }) + "\n");
    }
  }
});
' "$mode" <<< "$input"

exit 0
