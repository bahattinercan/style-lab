# v6 · tek sayfa vitrin — sadeleştirme raporu

> **Tarih:** 2026-11-14 · **Dal:** `v6-tek-sayfa` · **Kapsam:** tüm depo
> **Karar veren:** kullanıcı (tek sayfa · koyu mod yok · animasyon yok · oyun stilleri dahil 100 yeni stil)
> **Doğrulama:** `bash kit/gates.sh` → `kapılar: temiz` (26 adım)

---

## 1 · Ne istendi, ne yapıldı

| İstek | Uygulama |
|---|---|
| "Her stil için tek sayfa tasarım" | 37 sahne şablonu silindi; **`kit/render/page.html`** tek şablon (1280×2400). Stil başına **1 PNG**. |
| "Stil eklememiz çok uzun sürüyor" | 8 adımlı akış → **tek komut**: `node kit/add-style.mjs kit/specs/<dosya>.json` (SPEC → 5 kaynak → atama → render → indeks). |
| "Animasyona gerek yok" | `motion` alanı, `motion-*` scriptleri, motion lab/strip/measure, `dist/motion.*`, fragment'lardaki `@keyframes`/`animation` bildirimleri kaldırıldı. |
| "Sadece stil görmek istiyorum" | Koyu mod (palette.dark, koyu token bloğu, koyu sahneler, dark-fill) kaldırıldı. Flutter/React token üreticileri kapsam dışı (CSS + Tailwind + Figma kaldı). |
| "100 tane stil araştırması" | **100 yeni stil** (152–251) eklendi: 9 yeni aile bandı, aralarında **Oyun & Etkileşim (152–171, 20 stil)**. |

---

## 2 · Sayılar (ölçüldü)

| Ölçü | v5 | v6 | Kaynak |
|---|---|---|---|
| Stil | 151 | **251** | `kit/dist/report.md` |
| Aile bandı | 22 | **31** | `kit/families.json` |
| Stil başına görsel | 4 (repoda) / 37 (tam) | **1** | `kit/shots.core.json` |
| Repodaki PNG | 604 | **251** | `kit/shots.manifest.json` |
| PNG toplam boyut | 195.2 MiB | **223 MiB** | `du -ch styles/*/shots/01-page.png` |
| Kapı adımı | 38 | **26** | `grep -c '^run_gate' kit/gates.sh` |
| `hero|nav` parmak izi | 16 | **16** (en kalabalık %14) | `node kit/check-layout.mjs` |
| Kontrast hata / borç | 0 / 0 | **0 / 0** (19 yumuşak uyarı) | `node kit/check-contrast.mjs --strict-soft` |
| Görsel imza | 604/604 | **251/251, 0 fark** | `node kit/render/phash.mjs --check` |

Silinen kod: 37 sahne şablonu + estate/section/flow CSS + 9 motion script + dark-fill + 2 exporter
(~6.500 satır). Eklenen: `kit/lib/style-spec.mjs` (üreteç), `kit/add-style.mjs` (tek komut),
`kit/specs/` (31 aile şablonu + 100 SPEC), `kit/build-catalog-doc.mjs`, `kit/migrations/v6-*.mjs`.

---

## 3 · Tek sayfa sözleşmesi

`kit/render/page.html` — 1280×2400, bölümler yukarıdan aşağıya:

1. **Nav** (5 partial: inline · pill · split · rail · utility)
2. **Hero** (8 partial: split · split-reverse · centered · type · fullbleed · product · index · sticky)
3. **Logo şeridi** (per-style copy)
4. **Üç adım** (kart ızgarası)
5. **Medya + metin** (fotoğraf + 3 madde + ölçüm çubuğu)
6. **Ölçü bandı** (4 sayı)
7. **Bileşen ızgarası** (buton/chip · input · kart · tablo)
8. **Form + veri** (2 kolon: form, grafik)
9. **CTA bandı**
10. **Footer** (4 kolon + alt satır)

Sığdırma emniyeti: içerik 2400px'i aşarsa gövde bir kez ölçeklenir (`zoom`), aşmıyorsa hiçbir şey
değişmez. Ölçüm kapısı: `node kit/render/render-shots.mjs --measure` → yatay taşma, kırpılan blok,
8.5px altı metin (251 sahne, 0 sorun).

---

## 4 · Stil ekleme: v5 → v6

**v5 (8 adım, ~15 dk):** style.md yaz → token bloğunu `tokens.css`'e kopyala → `tokens.json` →
fragment → keywords → `apply-fragments` → `assign-*` → render → tablo senkronu → export/rapor.

**v6 (1 komut):**

```bash
node kit/add-style.mjs kit/specs/my-batch.json
```

SPEC alanları (`kit/specs/*.json`): `num slug name band tagline feeling best avoid palette[10]
fonts[3] radius[2] motif signature[] must[] mustNot[] refs[] keywords[] brief neighbors`,
opsiyonel `upper tracking scale essence origin recognition notThis screens traps extraCss`.

Komut sırası: **doğrula** (kontrast eşikleri, font kütüphanesi, komşu slug'ları, aile bandı) →
**üret** (5 kaynak, üç kopya paritesi korunur) → `apply-fragments` → `assign-layouts` →
`assign-imagery` → `assign-content` → `render-shots` → `optimize-shots` → `sync-shot-tables` →
`build-gallery` → `export-tokens` → `build-slim-index` → `report` → `composition-report` → `phash --write`.

Story sayısı: 100 yeni stil 8 parti hâlinde üretildi; her partiden sonra `check-schema` +
`check-contrast` + `check-layout` temiz olana kadar düzeltildi.

---

## 5 · Aile bantları (v6 ekleri)

| Bant | Aralık | Stil | Örnek |
|---|---|---|---|
| Oyun & Etkileşim | 152–171 | 20 | game-hud · game-racing · game-fantasy-rpg · game-sci-fi-cockpit · game-retro-console · game-esports-league · game-indie-pixel · game-card-tcg · game-survival-craft · game-mobile-casual · game-horror-occult · game-racing-neon · game-strategy-map · game-sim-builder · game-arcade-cabinet · game-stealth-tactical · game-puzzle-light · game-mmo-guild · game-franchise-sports · game-pinball-neon |
| Operasyon & Veri | 172–181 | 10 | incident-response · finops-cost · fleet-dispatch · fraud-review · slo-budget · data-lineage · access-audit · release-train · support-inbox · regulatory-report |
| Ticaret & Vitrin | 182–191 | 10 | grocery-delivery · marketplace-multi · luxury-atelier · subscription-box · sneaker-drop · wine-cellar · furniture-studio · electronics-spec · pharmacy-store · farmers-market |
| Kültür & Yayın | 192–201 | 10 | museum-exhibition · theatre-season · film-festival · public-radio · podcast-network · indie-cinema · library-archive · comic-bookstore · opera-house · street-festival |
| Sağlık & Bilim | 202–211 | 10 | clinical-trial · lab-protocol · pharmacy-labels · physiotherapy · mental-wellness · nutrition-plan · dental-clinic · public-health · genomics-lab · veterinary-care |
| Öğrenme & Oyunlaştırma | 212–221 | 10 | language-app · skill-tree · university-portal · coding-bootcamp · kids-classroom · exam-prep · music-lesson · lab-simulation · peer-study · certificate-wallet |
| Materyal & Zanaat | 222–231 | 10 | terrazzo-stone · linocut-print · risograph-print · denim-textile · cork-oak · cast-concrete · enamel-jewel · hand-thrown-ceramic · raw-steel · recycled-paper |
| Tipografi Denemeleri | 232–241 | 10 | condensed-news · monospace-editorial · blackletter-modern · variable-weight · justified-book · stencil-display · uppercase-only · italic-accent · numerals-display · small-caps-ledger |
| Gelecek & Spekülatif | 242–251 | 10 | agent-console · spatial-workspace · bio-lab-interface · climate-model · orbital-logistics · synthetic-media · quantum-dashboard · digital-twin · neural-canvas · post-screen-voice |

Her SPEC gerçek tasarım referanslarına dayanır (Wikipedia/Google Fonts/MDN/W3C gibi kararlı kaynaklar
`refs` alanında); paletler ölçülerek eşiklere oturtuldu, hiçbiri baseline borcuna yazılmadı.

---

## 6 · Göç (v5 kaynakları)

| Script | Ne yapar | Kapsam |
|---|---|---|
| `kit/migrations/v6-strip.mjs` | `palette.dark` ve `motion` siler, `version: 6`, koyu token bloğunu kaldırır, style.md'den "## Hareket"/"## Koyu mod" bölümlerini çıkarır, fragment'lardan `@keyframes`/`animation` temizler | 151 stil · 460 dosya |
| `kit/migrations/v6-shots.mjs` | style.md'deki eski sahne atıflarını `shots/01-page.png`'e çevirir, "Örnek görseller" tablosunu tek satıra indirir | 151 style.md |
| `kit/render/render-shots.mjs` | SCENES = tek `page` (1280×2400); `--measure`, boş kare tekrarı, viewport doğrulaması | 251 PNG |

---

## 7 · Kapılar (26 adım)

Parite: `apply-fragments --check` · `check-schema` · `check-contrast --strict-soft` ·
Katalog: `build-gallery --check` · `build-slim-index --check` · `sync-shot-tables --check` ·
Atamalar: `assign-layouts/imagery/content --check` · `check-content` · `check-imagery` ·
`fetch-images --check` · `check-layout` (+ self-test) · `check-composition --browser` · `composition-report --check` ·
Ölçüm: `render-shots --sample 6 --measure` ·
Çıktı: `export-tokens --check` · `fetch-fonts --check` · `report --check` ·
Araç: `style-lint --self-test` · `check-gallery-ui` · `brief --self-test` · `mcp-server --self-test` ·
Görsel: `phash --check` · piksel regresyonu (baseline varsa).

Çıkarılan kapılar (karşılıkları yok): `motion-check`, `assign-motion`, `build-motion-css`,
`motion-audit`, `build-motion-lab`, `render/motion-measure`, `render/motion-strip`,
`normalize-motion`, `check-viewers`, `render-sections`, `render-flows`, `export/flutter --verify`,
`export/react --verify`, `build-catalog` (yerine `build-catalog-doc`).

---

## 8 · Bilinen sınırlar

- Tek sayfa sabit 1280×2400: responsive/mobil kare yok.
- Koyu mod ve animasyon kapsam dışı; bunları isteyen tüketici proje kendi temasını kurar.
- Flutter/React token üreticileri silindi; CSS/Tailwind/Figma export yeterli kabul edildi.
- `--measure` yalnız taşma/kırpılma/ küçük metni ölçer; renk uyumu ve hiyerarşi gözle denetlenir
  (`kit/qa/landing.png` levhası).
- Kapı sayısı 26; yeni özellik eklendiğinde kapı da eklenmeli (yoksa doğrulanmamış iddia olur).
