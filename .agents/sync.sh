#!/usr/bin/env bash
# Keep every coding agent's config folder in step with .agents/skills, the
# single source of truth. Runs in three phases and is idempotent:
#
#   1. adopt  — a real file written into a mirror folder (Claude/Codex/Copilot
#               just created a skill there) is moved into .agents/skills
#   2. mirror — .agents/skills is projected back out as relative symlinks
#   3. prune  — mirror symlinks with no source left are deleted
#
#   .agents/skills/<name>/**   <->  .claude/skills/<name>/**
#                              <->  .github/skills/<name>/**
#                              <->  .codex/skills/<name>/**
#
# VS Code Copilot reads .agents/skills natively, so it needs no mirror;
# .github/skills exists for the GitHub Copilot CLI and coding agent.
#
# Skills only — this workspace has no subagents. Bringing them back means
# restoring .agents/rules and the rule handling removed in this script.
#
# Usage:
#   .agents/sync.sh            apply
#   .agents/sync.sh --check    report drift only, exit 1 if out of sync
#
# Normally you never run this by hand — .agents/watch.sh runs it on every
# change, and the git hooks in .agents/githooks run it on commit/checkout.

set -uo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd -P)"
cd "$ROOT"

SRC_SKILLS=".agents/skills"
MIRRORS=(".claude/skills" ".github/skills" ".codex/skills")
RETIRED=(".agents/agents" ".agents/rules" ".claude/agents" ".codex/agents" ".github/agents")

CHECK_ONLY=0
if [[ "${1:-}" == "--check" ]]; then CHECK_ONLY=1; fi

drift=0
declare -a WANTED

note() { printf '%s\n' "$*"; }
change() { drift=$((drift + 1)); note "  $*"; }
die() { printf 'sync.sh: %s\n' "$*" >&2; exit 2; }

# "a/b/c/d.md" -> "../../../" (one ".." per directory component of the link)
up_prefix() {
  local dir up="" comp
  dir="$(dirname "$1")"
  local IFS=/
  for comp in $dir; do
    if [[ -n "$comp" && "$comp" != "." ]]; then up="../$up"; fi
  done
  printf '%s' "$up"
}

# A mirror root must be a real directory. If it is a symlink (an old hand-made
# setup pointed some of these straight at .agents/), writing "into" it would
# corrupt the source — so replace it with a real directory first.
ensure_real_dir() {
  local dir="$1"
  if [[ -L "$dir" ]]; then
    change "unlink $dir (was a symlink to $(readlink "$dir"))"
    if (( CHECK_ONLY )); then return 1; fi
    rm -f "$dir"
  fi
  if [[ ! -d "$dir" ]]; then
    if (( CHECK_ONLY )); then return 1; fi
    mkdir -p "$dir"
  fi
  return 0
}

# Refuse to write anywhere that physically resolves outside the mirror roots.
# This is the guard that stops a symlinked parent directory from redirecting a
# write back into .agents/.
assert_inside_mirror() {
  local path="$1" parent phys
  parent="$(dirname "$path")"
  phys="$(cd "$parent" 2>/dev/null && pwd -P)" || return 0
  case "$phys/" in
    "$ROOT/.claude/"*|"$ROOT/.github/"*|"$ROOT/.codex/"*) return 0 ;;
  esac
  die "refusing to write $path — it resolves to $phys, outside the mirror roots"
}

# link <link-path> <source-path-from-root>
link() {
  local link_path="$1" src="$2" want
  want="$(up_prefix "$link_path")$src"
  WANTED+=("$link_path")

  if [[ -L "$link_path" && "$(readlink "$link_path")" == "$want" ]]; then
    return 0
  fi

  change "link   $link_path -> $want"
  if (( CHECK_ONLY )); then return 0; fi

  mkdir -p "$(dirname "$link_path")"
  assert_inside_mirror "$link_path"
  rm -rf "$link_path"
  ln -s "$want" "$link_path"
}

# Mirror one skill folder, preserving nested files (references/, scripts/, ...).
mirror_tree() {
  local src_dir="$1" dest_dir="$2" rel
  while IFS= read -r rel; do
    link "$dest_dir/$rel" "$src_dir/$rel"
  done < <(cd "$src_dir" && find . -type f ! -name '.DS_Store' | sed 's|^\./||')
}

# Where in .agents/skills does a real file sitting in a mirror folder belong?
source_for_mirror() {
  local path="$1"
  case "$path" in
    .claude/skills/*) printf '%s/%s' "$SRC_SKILLS" "${path#.claude/skills/}" ;;
    .github/skills/*) printf '%s/%s' "$SRC_SKILLS" "${path#.github/skills/}" ;;
    .codex/skills/*)  printf '%s/%s' "$SRC_SKILLS" "${path#.codex/skills/}" ;;
    *) return 1 ;;
  esac
}

# --- invariant: exactly one sync mechanism -------------------------------
# Two tools writing the same mirrors is how this system breaks. A second one
# once generated a copy of every rule into .agents/skills/ and every reviewer
# showed up twice in every tool. Fail loudly rather than fight it.
# Scan the whole repo: a rival once lived in scripts/, outside .agents/.
while IFS= read -r rogue; do
  die "second sync tool found: $rogue — .agents/sync.sh is the only one, remove it"
done < <(find . \( -path ./.git -o -path ./node_modules -o -path ./brand -o -path ./external \) -prune -o \
  -type f -name 'sync[._-]*' \( -name '*.sh' -o -name '*.py' -o -name '*.js' -o -name '*.mjs' -o -name '*.cjs' -o -name '*.ts' \) \
  ! -path ./.agents/sync.sh -print 2>/dev/null)

# --- sanity: the source must be real files, never links ------------------
while IFS= read -r bad; do
  die "source is a symlink, not a real file: $bad — restore it (git checkout -- $bad) before syncing"
done < <(find "$SRC_SKILLS" -type l 2>/dev/null)

# --- mirror roots must be real directories --------------------------------
for target in "${MIRRORS[@]}"; do ensure_real_dir "$target" || true; done

# --- adopt: whatever an agent wrote into a mirror becomes the source ------
# -type f skips symlinks, so only genuinely new/edited files are picked up.
for root in "${MIRRORS[@]}"; do
  [[ -d "$root" && ! -L "$root" ]] || continue
  while IFS= read -r path; do
    [[ "$(basename "$path")" == ".DS_Store" ]] && continue
    src="$(source_for_mirror "$path")" || continue

    if [[ -f "$src" ]] && cmp -s "$path" "$src"; then
      change "dedupe $path (identical to $src)"
      if (( CHECK_ONLY == 0 )); then
        assert_inside_mirror "$path"
        rm -f "$path"
      fi
      continue
    fi

    if [[ -e "$src" ]]; then
      change "adopt  $path -> $src (overwrites, mirror copy is newer)"
    else
      change "adopt  $path -> $src (new)"
    fi
    if (( CHECK_ONLY == 0 )); then
      assert_inside_mirror "$path"
      mkdir -p "$(dirname "$src")"
      mv -f "$path" "$src"
    fi
  done < <(find "$root" -mindepth 1 -type f 2>/dev/null)
done

# --- mirror ---------------------------------------------------------------
for skill_dir in "$SRC_SKILLS"/*/; do
  [[ -d "$skill_dir" ]] || continue
  name="$(basename "$skill_dir")"
  for target in "${MIRRORS[@]}"; do
    mirror_tree "$SRC_SKILLS/$name" "$target/$name"
  done
done

# --- prune stale mirrors --------------------------------------------------
# Only ever removes symlinks inside a mirror root that we no longer want.
# Real files are left alone and reported, because they are not ours to delete.
is_wanted() {
  local p
  for p in "${WANTED[@]}"; do
    if [[ "$p" == "$1" ]]; then return 0; fi
  done
  return 1
}

for target in "${MIRRORS[@]}"; do
  [[ -d "$target" && ! -L "$target" ]] || continue
  while IFS= read -r path; do
    [[ "$(basename "$path")" == ".DS_Store" ]] && continue
    if [[ -L "$path" ]]; then
      is_wanted "$path" && continue
      change "prune  $path"
      if (( CHECK_ONLY == 0 )); then
        assert_inside_mirror "$path"
        rm -f "$path"
      fi
    else
      note "  WARN   real file not from .agents/skills: $path"
    fi
  done < <(find "$target" -mindepth 1 \( -type f -o -type l \))

  if (( CHECK_ONLY == 0 )); then
    find "$target" -mindepth 1 -type d -empty -delete
  fi
done

# --- retired subagent/rule folders: keep them from creeping back -----------
for target in "${RETIRED[@]}"; do
  [[ -e "$target" ]] || continue
  if [[ -n "$(find "$target" -type f ! -name '.DS_Store' 2>/dev/null)" ]]; then
    note "  WARN   $target holds real files — agent/rule folders are retired, move or delete them"
    continue
  fi
  change "retire $target (agent/rule folders are not used in this workspace)"
  if (( CHECK_ONLY == 0 )); then rm -rf "$target"; fi
done

# --- the watcher is part of the contract, so put it back if it went missing
WATCHER_PLIST="$HOME/Library/LaunchAgents/com.vikas.brand-design-system.agent-sync.plist"
if [[ ! -f "$WATCHER_PLIST" ]] && command -v launchctl >/dev/null 2>&1; then
  if (( CHECK_ONLY )); then
    note "  NOTE   watcher not installed (optional): .agents/watch.sh --install"
  else
    change "watcher missing — reinstalling"
    "$ROOT/.agents/watch.sh" --install >/dev/null 2>&1 || note "  WARN   could not reinstall the watcher"
  fi
fi

if (( drift == 0 )); then
  note "agent config in sync"
  exit 0
fi

if (( CHECK_ONLY )); then
  note "agent config OUT OF SYNC ($drift item(s)) — run .agents/sync.sh"
  exit 1
fi

note "agent config synced ($drift item(s) changed)"
