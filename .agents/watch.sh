#!/usr/bin/env bash
# Runs .agents/sync.sh automatically whenever any agent config folder changes.
#
#   .agents/watch.sh --install     install + start the launchd agent
#   .agents/watch.sh --uninstall   stop + remove it
#   .agents/watch.sh --status      is it loaded? recent log
#   .agents/watch.sh               run one settle-and-sync pass (launchd calls this)
#
# launchd wakes this up on any change to the watched folders, plus once a
# minute as a safety net for edits nested deeper than WatchPaths can see.

set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
LABEL="com.vikas.brand-design-system.agent-sync"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
LOG="$HOME/Library/Logs/brand-design-system-agent-sync.log"
LOCK="${TMPDIR:-/tmp}/brand-design-system-agent-sync.lock"

WATCHED=(
  ".agents/skills"
  ".claude/skills"
  ".github/skills"
  ".codex/skills"
)

write_plist() {
  mkdir -p "$(dirname "$PLIST")" "$(dirname "$LOG")"
  {
    cat <<XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>$LABEL</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>$ROOT/.agents/watch.sh</string>
  </array>
  <key>WatchPaths</key>
  <array>
XML
    for dir in "${WATCHED[@]}"; do
      printf '    <string>%s/%s</string>\n' "$ROOT" "$dir"
    done
    cat <<XML
  </array>
  <key>StartInterval</key><integer>60</integer>
  <key>RunAtLoad</key><true/>
  <key>StandardOutPath</key><string>$LOG</string>
  <key>StandardErrorPath</key><string>$LOG</string>
</dict>
</plist>
XML
  } > "$PLIST"
}

case "${1:-}" in
  --install)
    for dir in "${WATCHED[@]}"; do mkdir -p "$ROOT/$dir"; done
    write_plist
    launchctl unload "$PLIST" 2>/dev/null
    launchctl load "$PLIST" || { echo "failed to load $PLIST" >&2; exit 1; }
    echo "watcher installed: $LABEL"
    echo "log: $LOG"
    exit 0
    ;;
  --uninstall)
    launchctl unload "$PLIST" 2>/dev/null
    rm -f "$PLIST"
    echo "watcher removed: $LABEL"
    exit 0
    ;;
  --status)
    if launchctl list "$LABEL" >/dev/null 2>&1; then
      echo "watcher running: $LABEL"
    else
      echo "watcher NOT running — run .agents/watch.sh --install"
    fi
    [[ -f "$LOG" ]] && { echo "--- last 20 log lines ---"; tail -20 "$LOG"; }
    exit 0
    ;;
esac

# --- one pass -------------------------------------------------------------
# mkdir is atomic, so this is a race-free lock; a stale lock self-clears via trap.
if ! mkdir "$LOCK" 2>/dev/null; then exit 0; fi
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

# Let a burst of writes from an agent settle before touching anything.
sleep 3

output="$("$ROOT/.agents/sync.sh" 2>&1)"
if [[ "$output" != "agent config in sync" ]]; then
  printf '[%s]\n%s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$output"
fi
