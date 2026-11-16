#!/usr/bin/env bash
# style-lab v6 doors — single page showcase · dark modeless · motionless.
# Sequence: source parity → catalog → metering (contrast/composition) → production outputs → visual signature.
# Usage: bash kit/gates.sh (from repo root)
set -u

KIT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(dirname "$KIT_DIR")"
cd "$ROOT" || exit 1

if ! command -v node >/dev/null 2>&1; then
  echo "warning: node not found, ports skipped"
  exit 0
fi

run_gate() {
  local step="$1"
  shift
  echo "▶ $step"
  "$@"
  local code=$?
  if [ "$code" -ne 0 ]; then
    echo "✗ $step"
    exit "$code"
  fi
  echo "✓ $step"
}

# Visual regression: baseline = kit/render/.baseline/<slug>/<file>.png,
# current = styles/<slug>/shots/<file>.png. Baseline is not kept in repo; It is installed with `baseline.mjs --write`.
BASELINE_DIR="kit/render/.baseline"

run_visual_regression() {
  echo "▶ visual regression"

  if [ ! -d "$BASELINE_DIR" ]; then
    echo "↷ visual regression (no baseline, omitted)"
    return 0
  fi

  local checked=0 failed=0
  while IFS= read -r baseline; do
    local rel="${baseline#"$BASELINE_DIR/"}"
    local slug="${rel%%/*}"
    local rest="${rel#*/}"
    checked=$((checked + 1))

    if [ "$slug" = "$rel" ]; then
      echo "✗ visual regression: $rel"
      echo "baseline structure should be <slug>/<file>.png"
      failed=$((failed + 1))
      continue
    fi
    local current="styles/$slug/shots/$rest"

    local json code
    json="$(node kit/render/pixel-diff.mjs --a "$baseline" --b "$current" --json 2>&1)"
    code=$?
    if [ "$code" -ne 0 ]; then
      echo "✗ visual regression: $rel"
      local fark
      fark="$(printf '%s' "$json" | sed -n 's/.*"diffPixels":\([0-9]*\).*"diffPercent":\([0-9.]*\).*/\1 piksel (%\2)/p')"
      if [ -n "$fark" ]; then
        echo "  fark: $fark"
      else
        printf '%s\n' "$json" | sed 's/^/  /'
      fi
      failed=$((failed + 1))
    fi
  done < <(find "$BASELINE_DIR" -type f -name '*.png' | LC_ALL=C sort)

  if [ "$failed" -gt 0 ]; then
    echo "visual regression: $checked file compared, $failed file different"
    return 1
  fi

  echo "✓ visual regression ($checked file)"
  return 0
}

# --- resource parity (json ⇄ token-block ⇄ tokens.css) -----------------------
run_gate "fragment sync" node kit/apply-fragments.mjs --check
run_gate "scheme gate" node kit/check-schema.mjs
run_gate "encoding check" node kit/check-encoding.mjs
run_gate "language check" node kit/check-language.mjs
run_gate "visual motif and artwork" node kit/check-visual.mjs
run_gate "live pages" node kit/build-live.mjs --check
run_gate "legacy SPEC parity" node kit/add-style.mjs kit/specs/legacy-01-151.json --check
run_gate "contrast check" node kit/check-contrast.mjs --strict-soft

# --- catalog (gallery, index, document tables) ----------------------------
run_gate "gallery check" node kit/build-gallery.mjs --check
run_gate "slim index" node kit/build-slim-index.mjs --check
run_gate "shot tables synchronization" node kit/sync-shot-tables.mjs --check
run_gate "catalog document" node kit/build-catalog-doc.mjs --check

# --- composition and content assignments ---------------------------------------
run_gate "layout assignment" node kit/assign-layouts.mjs --check
run_gate "image assignment" node kit/assign-imagery.mjs --check
run_gate "content assignment" node kit/assign-content.mjs --check
run_gate "content layer" node kit/check-content.mjs
run_gate "visual layer" node kit/check-imagery.mjs
run_gate "image resources" node kit/fetch-images.mjs --check
run_gate "diversity of composition" node kit/check-layout.mjs
run_gate "composition self-test" node kit/check-layout.mjs --self-test
run_gate "composition" node kit/check-composition.mjs --browser
run_gate "composition report is up to date" node kit/composition-report.mjs --check
run_gate "accessibility" node kit/render/a11y-check.mjs --scene landing

# --- single page measurement -------------------------------------------------------
# Fit level, zoom ban, horizontal/block bleed and under 10px font size: page 1280×2400
# Does it fit into its contract BY DESIGN (old zoom security removed). Example 24: stratified.
# --cache-only: writes measurement round frames to kit/.shots-cache. Otherwise render
# overwrites styles/*/shots/*.png; Committed because Linux rasterization is different
# PNG bytes vary, and `build-thumbs --check` rightly calls it "stale".
run_gate "single page fit measurement" node kit/render/render-shots.mjs --sample 24 --measure --cache-only

# --- produced outputs ------------------------------------------------------
run_gate "token export current" node kit/export-tokens.mjs --check
run_gate "font TTF" node kit/fetch-fonts.mjs --check
run_gate "report is up to date" node kit/report.mjs --check

# --- vehicle verification -------------------------------------------------------
run_gate "unit tests" node --test kit/render/render-shots.test.mjs kit/render/cdp-browser.test.mjs kit/render/object-region.test.mjs kit/lib/css-cascade.test.mjs kit/lib/type-scale.test.mjs kit/lib/section-plan.test.mjs
run_gate "style-lint rules" node kit/style-lint.mjs --self-test
run_gate "signature CSS lint rules" node kit/check-signature.mjs --self-test
run_gate "gallery interface" node kit/check-gallery-ui.mjs
run_gate "brief production" node kit/brief.mjs --self-test
run_gate "mcp server" node kit/mcp-server.mjs --self-test

# --- broadcasting site --------------------------------------------------------------
# Are WebP variants identical to the source, _site/ integrity and smoke tested in the real browser.
run_gate "webp derivatives" node kit/build-thumbs.mjs --check
run_gate "site integrity" node kit/build-site.mjs --check
run_gate "site smoke test" node kit/check-site.mjs

# ---visual signature -------------------------------------------------------------------------------
run_gate "visual signature" node kit/render/phash.mjs --check
run_gate "style distinguishability" node kit/check-distinctness.mjs
run_gate "distinguishability self-test" node kit/check-distinctness.mjs --self-test
run_visual_regression || exit 1

echo "gates: clean"
