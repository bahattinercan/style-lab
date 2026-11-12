#!/usr/bin/env bash
# Styles kapıları: galeri denetimi → kontrast → ekran tabloları senkronu → görsel regresyon.
# Kullanım: bash kit/gates.sh   (repo kökünden: bash Styles/kit/gates.sh)
set -u

KIT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(dirname "$KIT_DIR")"
cd "$ROOT" || exit 1

if ! command -v node >/dev/null 2>&1; then
  echo "uyarı: node bulunamadı, kapılar atlandı"
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

# 4. adım: görsel regresyon. Baseline = kit/render/.baseline/<slug>/<dosya>.png,
# güncel = styles/<slug>/shots/<dosya>.png. Baseline dizini repoya eklenmez;
# elle/`render-shots` sonrası kopyalanır. Karşılaştırma: kit/render/pixel-diff.mjs.
BASELINE_DIR="kit/render/.baseline"

run_visual_regression() {
  echo "▶ görsel regresyon"

  if [ ! -d "$BASELINE_DIR" ]; then
    echo "↷ görsel regresyon (baseline yok, atlandı)"
    return 0
  fi

  local checked=0 failed=0
  while IFS= read -r baseline; do
    local rel="${baseline#"$BASELINE_DIR/"}"
    local slug="${rel%%/*}"
    local rest="${rel#*/}"
    checked=$((checked + 1))

    if [ "$slug" = "$rel" ]; then
      echo "✗ görsel regresyon: $rel"
      echo "  baseline yapısı <slug>/<dosya>.png olmalı"
      failed=$((failed + 1))
      continue
    fi
    local current="styles/$slug/shots/$rest"

    local json code
    json="$(node kit/render/pixel-diff.mjs --a "$baseline" --b "$current" --json 2>&1)"
    code=$?
    if [ "$code" -ne 0 ]; then
      echo "✗ görsel regresyon: $rel"
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
    echo "görsel regresyon: $checked dosya karşılaştırıldı, $failed dosya farklı"
    return 1
  fi

  echo "✓ görsel regresyon ($checked dosya)"
  return 0
}

run_gate "galeri denetimi" node kit/build-gallery.mjs --check
run_gate "slim indeks" node kit/build-slim-index.mjs --check
run_gate "fragment senkronu" node kit/apply-fragments.mjs --check
run_gate "şema kapısı" node kit/check-schema.mjs
run_gate "kontrast denetimi" node kit/check-contrast.mjs --strict-soft
run_gate "ekran tabloları senkronu" node kit/sync-shot-tables.mjs --check
run_gate "koreografi ataması" node kit/assign-motion.mjs --check
run_gate "hareket CSS" node kit/build-motion-css.mjs --check
run_gate "hareket kapısı" node kit/motion-check.mjs
run_gate "hareket ölçümü" node kit/motion-audit.mjs --check
run_gate "hareket lab" node kit/build-motion-lab.mjs --check
run_gate "hareket ölçümü (tarayıcı)" node kit/render/motion-measure.mjs --sample 6
# Hareket storyboard şeritleri kit/.shots-cache/<dir>/27-motion.png altındadır (gitignore).
# --ensure: temiz klonda eksik şerit varsa tarayıcıda üretip doğrular; tarayıcı yoksa ↷ ile atlar.
run_gate "hareket storyboard" node kit/render/motion-strip.mjs --sample 6 --check --ensure
run_gate "motion normalizasyonu" node kit/normalize-motion.mjs --check
run_gate "token export güncel" node kit/export-tokens.mjs --check
run_gate "font TTF" node kit/fetch-fonts.mjs --check
run_gate "flutter export" node kit/export/flutter.mjs --verify
run_gate "react export" node kit/export/react.mjs --verify
run_gate "style-lint kuralları" node kit/style-lint.mjs --self-test
run_gate "görsel kaynakları" node kit/fetch-images.mjs --check
run_gate "görsel ataması" node kit/assign-imagery.mjs --check
run_gate "içerik ataması" node kit/assign-content.mjs --check
run_gate "içerik katmanı" node kit/check-content.mjs
run_gate "bölüm kütüphanesi (ölçüm)" node kit/render/render-sections.mjs --sample 3 --measure
run_gate "akış şeritleri (ölçüm)" node kit/render/render-flows.mjs --sample 3 --measure
run_gate "sahne taşma ölçümü" node kit/render/render-shots.mjs --sample 3 --measure
# Bölüm/akış görüntüleyici görselleri kit/.shots-cache/<dir>/{sections,flows}/*.png altındadır (gitignore).
# --ensure: temiz klonda eksik PNG varsa tarayıcıda üretip doğrular; tarayıcı yoksa ↷ ile atlar.
run_gate "görüntüleyiciler (bölüm + akış)" node kit/check-viewers.mjs --ensure
run_gate "galeri arayüzü" node kit/check-gallery-ui.mjs
run_gate "brief üretimi" node kit/brief.mjs --self-test
run_gate "mcp sunucusu" node kit/mcp-server.mjs --self-test
run_gate "görsel katman" node kit/check-imagery.mjs
run_gate "layout ataması" node kit/assign-layouts.mjs --check
run_gate "kompozisyon çeşitliliği" node kit/check-layout.mjs
run_gate "kompozisyon self-test" node kit/check-layout.mjs --self-test
run_gate "kompozisyon" node kit/check-composition.mjs --browser
run_gate "rapor güncel" node kit/report.mjs --check
run_gate "kompozisyon raporu güncel" node kit/composition-report.mjs --check
run_gate "görsel imza" node kit/render/phash.mjs --check
run_visual_regression || exit 1

echo "kapılar: temiz"
