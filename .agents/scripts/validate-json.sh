#!/usr/bin/env bash
# Antigravity & Copilot Lifecycle Hook: Validate JSON files under brand/
set -euo pipefail

input="$(cat)"

# Process payload using Node.js
node -e '
let data = "";
process.stdin.on("data", chunk => data += chunk);
process.stdin.on("end", () => {
  try {
    const payload = data.trim() ? JSON.parse(data) : {};
    const toolCall = payload.toolCall || {};
    const args = toolCall.args || payload.tool_input || {};
    const targetFile = args.TargetFile || args.filePath || args.path || args.file || "";
    const codeContent = args.CodeContent;

    const isPreToolUse = Boolean(toolCall.name && codeContent !== undefined);
    const isBrandJson = targetFile.includes("brand/") && targetFile.endsWith(".json");

    if (isPreToolUse && isBrandJson) {
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

    // Default response: allow if PreToolUse, empty object if PostToolUse
    if (toolCall.name) {
      process.stdout.write(JSON.stringify({ decision: "allow" }) + "\n");
    } else {
      process.stdout.write("{}\n");
    }
  } catch (e) {
    process.stdout.write("{}\n");
  }
});
' <<< "$input"

exit 0

