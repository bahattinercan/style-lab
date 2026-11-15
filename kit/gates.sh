#!/usr/bin/env bash
# style-lab v6 kapıları — tek sayfa vitrin · koyu modsuz · hareket siz.
# Sıra: kaynak paritesi → katalog → ölçüm (kontrast/kompozisyon) → üretim çıktıları → görsel imza.
# Kullanım: bash kit/gates.sh   (repo kökünden)
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

# Görsel regresyon: baseline = kit/render/.baseline/<slug>/<dosya>.png,
# güncel = styles/<slug>/shots/<dosya>.png. Baseline repoda tutulmaz; `baseline.mjs --write` ile kurulur.
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

# --- kaynak paritesi (json ⇄ token-block ⇄ tokens.css) -----------------------
run_gate "fragment senkronu" node kit/apply-fragments.mjs --check
run_gate "şema kapısı" node kit/check-schema.mjs
run_gate "kontrast denetimi" node kit/check-contrast.mjs --strict-soft

# --- katalog (galeri, indeks, doküman tabloları) ----------------------------
run_gate "galeri denetimi" node kit/build-gallery.mjs --check
run_gate "slim indeks" node kit/build-slim-index.mjs --check
run_gate "ekran tabloları senkronu" node kit/sync-shot-tables.mjs --check
run_gate "katalog dokümanı" node kit/build-catalog-doc.mjs --check

# --- kompozisyon ve içerik atamaları ---------------------------------------
run_gate "layout ataması" node kit/assign-layouts.mjs --check
run_gate "görsel ataması" node kit/assign-imagery.mjs --check
run_gate "içerik ataması" node kit/assign-content.mjs --check
run_gate "içerik katmanı" node kit/check-content.mjs
run_gate "görsel katman" node kit/check-imagery.mjs
run_gate "görsel kaynakları" node kit/fetch-images.mjs --check
run_gate "kompozisyon çeşitliliği" node kit/check-layout.mjs
run_gate "kompozisyon self-test" node kit/check-layout.mjs --self-test
run_gate "kompozisyon" node kit/check-composition.mjs --browser
run_gate "kompozisyon raporu güncel" node kit/composition-report.mjs --check

# --- tek sayfa ölçümü -------------------------------------------------------
# Taşma (yatay/blok) ve 8,5px altı metin: sayfa 1280×2400 sözleşmesine sığıyor mu?
# --cache-only: ölçüm turu kareleri kit/.shots-cache altına yazar. Aksi halde render
# styles/*/shots/*.png üzerine yazar; Linux rasterlaşması farklı olduğu için commit edilmiş
# PNG baytları değişir ve `build-thumbs --check` haklı olarak "bayat" der.
run_gate "tek sayfa taşma ölçümü" node kit/render/render-shots.mjs --sample 6 --measure --cache-only

# --- üretilen çıktılar ------------------------------------------------------
run_gate "token export güncel" node kit/export-tokens.mjs --check
run_gate "font TTF" node kit/fetch-fonts.mjs --check
run_gate "rapor güncel" node kit/report.mjs --check

# --- araç doğrulaması -------------------------------------------------------
run_gate "style-lint kuralları" node kit/style-lint.mjs --self-test
run_gate "galeri arayüzü" node kit/check-gallery-ui.mjs
run_gate "brief üretimi" node kit/brief.mjs --self-test
run_gate "mcp sunucusu" node kit/mcp-server.mjs --self-test

# --- yayın sitesi -----------------------------------------------------------
# WebP türevleri kaynakla aynı mı, _site/ bütünlüğü ve gerçek tarayıcıda duman testi.
run_gate "webp türevleri" node kit/build-thumbs.mjs --check
run_gate "site bütünlüğü" node kit/build-site.mjs --check
run_gate "site duman testi" node kit/check-site.mjs

# --- görsel imza ------------------------------------------------------------
run_gate "görsel imza" node kit/render/phash.mjs --check
run_visual_regression || exit 1

echo "kapılar: temiz"
