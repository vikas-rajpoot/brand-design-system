import os
import shutil

def replace_in_dir(directory, replacements):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if not file.endswith(".md"): continue
            filepath = os.path.join(root, file)
            with open(filepath, "r") as f:
                content = f.read()
            for old, new in replacements.items():
                content = content.replace(old, new)
            with open(filepath, "w") as f:
                f.write(content)

print("Syncing .github to .claude and .codex...")

if os.path.exists(".claude"):
    shutil.rmtree(".claude")
shutil.copytree(".github", ".claude")
if os.path.exists(".claude/copilot-instructions.md"):
    os.rename(".claude/copilot-instructions.md", ".claude/claude-instructions.md")

replace_in_dir(".claude", {
    ".github": ".claude",
    "copilot-instructions.md": "claude-instructions.md",
    "Copilot": "Claude"
})

shutil.copyfile(".claude/claude-instructions.md", "CLAUDE.md")

if os.path.exists(".codex"):
    shutil.rmtree(".codex")
shutil.copytree(".github", ".codex")
if os.path.exists(".codex/copilot-instructions.md"):
    os.rename(".codex/copilot-instructions.md", ".codex/codex-instructions.md")

replace_in_dir(".codex", {
    ".github": ".codex",
    "copilot-instructions.md": "codex-instructions.md",
    "Copilot": "Codex"
})

print("Sync complete. Run 'git diff' to ensure everything is correct.")
