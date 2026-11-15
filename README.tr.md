# Tasarım Stilleri Kütüphanesi (style-lab) · v6

> **Diller:** [English](README.md) · [Türkçe](README.tr.md)
> **Depo:** https://github.com/bahattinercan/style-lab
> **Kapılar:** `bash kit/gates.sh` (31 adım) · **Kanca:** `bash kit/install-hooks.sh`
> **Etkileşimli:** `kit/gallery.html` (arama · filtre · çekmece · karşılaştırma) · `kit/live.html?style=<slug>`
> **Yayın sitesi:** <https://bahattinercan.github.io/style-lab/>
> **Katalog indeksi:** [`docs/katalog.md`](docs/katalog.md) (251 stil, 31 aile) · **Rapor:** `kit/dist/report.md`

Tekdüze tasarıma karşı katalog: **31 aile bandında 251 görsel stil**. Her stil için **tek bir uzun
sayfa mock-up'ı** (1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form + veri, CTA, alt bilgi),
token seti, bileşen reçeteleri, tuzaklar ve **AI brief** bulunur.

**v6 kapsamı (bilinçli sadeleştirme):**

| Kalan | Kaldırılan |
|---|---|
| Stil başına tek uzun sayfa (`01-page.png`) | 37 sahne şablonu (dashboard, mobil, emlak, …) |
| Yalnız açık palet | Koyu mod (`palette.dark`, koyu token bloğu, koyu sahneler) |
| Statik tasarım (animasyon yok) | Hareket sistemi (`motion.*`, motion lab/export/kapıları) |
| CSS · Tailwind · Figma export | Flutter/React token üreticileri |

Gerekçe ve ölçümler: [`docs/v6-sadelestirme-raporu.md`](docs/v6-sadelestirme-raporu.md).

## Durum

- 251/251 stil tek sayfa üretiyor; **251 PNG, 172 MB** (`du -ch styles/*/shots/01-page.png`).
- 251/251 stil şema **v6**'da (`tokens.json` sürüm 6; `palette.dark` ve `motion` yok).
- 31 aile bandı, 1–251 kesintisiz (`kit/families.json`).
- 16 farklı `hero|nav` parmak izi; en kalabalık küme 36 stil (**%14**), tavan %25.
- 0 kontrast hatası (`--strict-soft`), 19 belgelenmiş yumuşak uyarı (dekoratif `--ink-faint`, 3 koyu palette düşük APCA).
- Yayın sitesi: <https://bahattinercan.github.io/style-lab/> (GitHub Pages, `_site/` artifact'ı).
- Doğrulama: `bash kit/gates.sh` → son satır `kapılar: temiz`.

## Yayın sitesi

<https://bahattinercan.github.io/style-lab/> — `node kit/build-site.mjs` derler, `main`'e her push'ta
`.github/workflows/pages.yml` GitHub Pages'e gönderir.

| Sayfa | Ne |
|---|---|
| `/` | landing: sayılar `kit/styles.index.json`'dan, 8 vitrin stili, 31 aile bandı |
| `/kit/gallery.html` | galeri: arama, filtre, sayfalama, çekmece, lightbox, karşılaştırma |
| `/katalog.html` | katalog indeksi (`docs/katalog.md` HTML, stil başına bir bağlantı) |
| `/kit/live.html?style=<slug>` | seçili stilin token'larıyla statik bileşen sayfası |

`_site/` bir derleme çıktısıdır (git'e girmez). Kartlar WebP türevini yükler
(`thumbs/<slug>@640.webp`, ~35 KB); lightbox `@1280` türevini açar, orijinal PNG indirilebilir kalır.
Türevler `node kit/build-thumbs.mjs` ile üretilip repoda tutulur — CI tarayıcı çalıştırmaz.

```bash
node kit/build-thumbs.mjs        # PNG → WebP (640 / 1280) · --check bayat türevi yakalar
node kit/build-site.mjs          # _site/ derle · --check varlık bütünlüğü
node kit/check-site.mjs          # kapı: derlenen siteyi HTTP üzerinden başsız tarayıcıda ölçer
```

## Klasör haritası

```
style-lab/
├── README.md / README.tr.md      # bu dosya (iki dilli çift)
├── AGENTS.md                     # bu depoda çalışan ajanlar için bağlayıcı kurallar
├── docs/katalog.md               # 251 stilin üretilmiş indeksi (build-catalog-doc.mjs)
├── docs/v6-sadelestirme-raporu.md# v6 kararları + ölçümler
├── playbook.md                   # tasarım reçeteleri (tipografi, boşluk, renk, erişilebilirlik)
├── kit/
│   ├── specs/bands.json          # aile bandı şablonları (ortak prose/CSS)
│   ├── specs/*.json              # stil SPEC'leri → kaynaklar (100 v6 stili burada)
│   ├── add-style.mjs             # SPEC → 5 kaynak → atama → render → indeks (tek komut)
│   ├── lib/style-spec.mjs        # üreteç: tokens.json · token-block.css · style.md · fragment · keywords
│   ├── apply-fragments.mjs       # kaynaklar → kit/tokens.css + shots.config.mjs + gallery.data.mjs
│   ├── check-schema.mjs          # şema/parite kapısı
│   ├── check-contrast.mjs        # WCAG + APCA + odak halkası
│   ├── check-layout.mjs          # kompozisyon çeşitliliği kapısı
│   ├── build-gallery.mjs         # gallery.html + styles.index.json
│   ├── build-thumbs.mjs          # PNG → WebP türevleri (kit/site/thumbs, repoda)
│   ├── build-site.mjs            # _site/ derleyicisi: landing, katalog.html, galeri kopyası, varlıklar
│   ├── check-site.mjs            # derlenen sitenin başsız duman testi (HTTP)
│   ├── build-catalog-doc.mjs     # docs/katalog.md
│   ├── export-tokens.mjs         # dist/tokens.all.css · tailwind.theme.css · figma.variables.json
│   ├── render/page.html          # TEK sayfa şablonu
│   ├── render/scene.css          # sayfa iskeleti (.pg-*) + bileşen sınıfları
│   ├── render/partials/          # 8 hero × 5 nav parçası
│   ├── render/render-shots.mjs   # sayfa üreteci (CDP, taşma ölçümü, boş kare tekrarı)
│   ├── migrations/v6-*.mjs       # tek seferlik kaynak göçleri (v5 → v6)
│   └── gates.sh                  # 31 adımlı doğrulama kapısı
└── styles/<nn-slug>/
    ├── style.md                  # doküman (≥18 bölüm + AI brief)
    ├── tokens.json               # makine kaynağı (palet, tipografi, şekil, boşluk, bileşen, refs)
    ├── token-block.css           # CSS değişken bloğu (apply-fragments kaynağı)
    ├── shots.config.fragment.mjs # sahne imzası (motif + imza CSS)
    ├── keywords.json             # 3 galeri etiketi
    └── shots/01-page.png         # 1280×2400 tek sayfa (üretilir, elle düzenlenmez)
```

## 10 saniyede seçim

| İhtiyaç | Başlangıç |
|---|---|
| Sakin ürün arayüzü | 01 minimalism · 02 swiss-design · 06 japandi · 168 game-puzzle-light |
| Maksimum karakter | 13 neo-brutalism · 17 maximalism · 166 game-arcade-cabinet · 235 variable-weight |
| Güven / finans / operasyon | 172 incident-response · 173 finops-cost · 176 slo-budget · 181 regulatory-report |
| Ticaret | 182 grocery-delivery · 184 luxury-atelier · 187 wine-cellar · 189 electronics-spec |
| Oyun | 152 game-hud · 155 game-sci-fi-cockpit · 159 game-card-tcg · 165 game-sim-builder |
| Kültür / yayın | 192 museum-exhibition · 194 film-festival · 232 condensed-news · 236 justified-book |
| Materyal / zanaat | 222 terrazzo-stone · 223 linocut-print · 227 cast-concrete · 230 raw-steel |
| Gelecek / araştırma | 242 agent-console · 245 climate-model · 248 quantum-dashboard · 250 neural-canvas |

Tam liste, tek cümlelik kimliklerle: [`docs/katalog.md`](docs/katalog.md).

## Aile bantları (31)

Bantlar tek kaynakta (`kit/families.json`) tanımlıdır; `apply-fragments`, `build-gallery`, `report`
ve `build-catalog-doc` aynı dosyayı okur. 1–151 v5 kataloğu (22 bant), **152–251 v6 ek bandı** (9 bant,
100 stil): Oyun & Etkileşim (152–171, 20 stil) · Operasyon & Veri (172–181) · Ticaret & Vitrin (182–191) ·
Kültür & Yayın (192–201) · Sağlık & Bilim (202–211) · Öğrenme & Oyunlaştırma (212–221) ·
Materyal & Zanaat (222–231) · Tipografi Denemeleri (232–241) · Gelecek & Spekülatif (242–251).

## Nasıl kullanılır

1. `kit/gallery.html` aç (`file://` çalışır; URL durumu/arama testi için sunucu gerekir).
2. Stili bul, `data-style` slug'ını kopyala.
3. Projede: `<html data-style="game-hud">` + `kit/tokens.css` (veya `kit/dist/tokens.all.css`) kopyala.
4. Bileşenleri yalnız sözleşme değişkenleriyle kur: `--bg --bg-2 --surface --surface-2 --ink
   --ink-soft --ink-faint --accent --accent-ink --line --radius --radius-lg --shadow --font-* --space-*`.
5. `node kit/style-lint.mjs src --style <slug>` ile doğrula (renk/font/radius literali yok).

## Kompozisyon ekseni (şema v6)

Her `tokens.json` içinde `layout: { hero, nav, density }` alanı `kit/render/layouts.json`'dan seçilir
(8 hero × 5 nav × 3 yoğunluk). `assign-layouts.mjs` slug + aile + etiketleri deterministik puanlar;
yeni stil eklerken layout elle seçilmez.

Kapılar: `check-layout.mjs` (hiçbir parmak izi %25'i geçmez, her arketip kullanılır, aile başına
en az 3 farklı `hero|nav`) ve `check-composition.mjs` (komşu stillerin DOM izolasyonu).

## Değişken sözleşmesi

20 değişken, her stilde aynı adlar — stil değişince bileşen kodu değişmez:

| Grup | Değişkenler |
|---|---|
| Yüzey | `--bg` `--bg-2` `--surface` `--surface-2` |
| Metin | `--ink` `--ink-soft` `--ink-faint` |
| Vurgu | `--accent` `--accent-ink` |
| Çizgi / şekil | `--line` `--radius` `--radius-lg` |
| Derinlik | `--shadow` `--shadow-hard` |
| Tipografi | `--font-display` `--font-body` `--font-mono` `--tracking` |
| Doku | `--blur` `--grain` |
| Boşluk | `--space-1…8` (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64) |

Üç kopya paritede kalır (`check-schema.mjs`): `tokens.json` ⇄ `token-block.css` ⇄ `kit/tokens.css`.

## Doğrulama (kapılar)

```bash
bash kit/gates.sh        # 31 adım: parite → katalog → atamalar → ölçüm → export → site → görsel imza
```

Hızlı alt kümeler:

```bash
node kit/check-schema.mjs && node kit/apply-fragments.mjs --check     # kaynak paritesi
node kit/check-contrast.mjs --strict-soft                            # WCAG + APCA
node kit/build-gallery.mjs --check && node kit/build-catalog-doc.mjs --check
node kit/render/render-shots.mjs --sample 8 --measure                 # taşma / kırpılan blok
node kit/render/phash.mjs --check                                    # 251 PNG'nin görsel imzası
```

"Bitti" tanımı: `bash kit/gates.sh` son satırı `kapılar: temiz`. Commit kancası aynı kapıyı koşar
(`.git/hooks/pre-commit`); tam koşu 120 s araç zaman aşımını aşabilir, ayrı uzun komutta çalıştır.

## Token export

```bash
node kit/export-tokens.mjs            # kit/dist/*.css · figma.variables.json · index.json
node kit/export-tokens.mjs --check    # kapı: dist güncel mi?
```

| Dosya | Kullanım |
|---|---|
| `kit/dist/tokens.all.css` | 251 `[data-style]` bloğu + `:root` fallback |
| `kit/dist/tailwind.theme.css` | stil başına `@theme` (Tailwind v4) |
| `kit/dist/figma.variables.json` | Figma değişken koleksiyonları (renk / radius / boşluk / tipografi) |
| `kit/dist/index.json`, `index.slim.json` | makine-okur katalog (slim = ajan dostu) |
| `kit/dist/report.md`, `composition.md` | ölçümlü katalog raporu |

## Uygulanmış kodu denetleme (style-lint)

```bash
node kit/style-lint.mjs src --style terminal-ui            # hata + uyarı
node kit/style-lint.mjs src --style terminal-ui --strict   # uyarılar da hata
node kit/style-lint.mjs --list-rules
```

Kurallar: `color-literal`, `font-literal`, `radius-literal`, `dart-color-literal`, `dart-font-literal`,
`dart-radius-literal`, `ink-faint-text`, `root-style-missing`. Üretilen dosyalar
(`tokens.css`, `tokens.all.css`, `tailwind.theme.css`, `node_modules`, `dist`, `.dart_tool`) atlanır.

## Yeni stil ekleme (v6: tek komut)

```bash
# 1) SPEC yaz (bkz. kit/specs/*.json) — palet, fontlar, radius, imza, must/mustNot, refs, brief
# 2) her şeyi üret:
node kit/add-style.mjs kit/specs/my-batch.json
```

Komut SPEC'i doğrular (kontrast, font, komşu, bant), beş kaynağı yazar, `apply-fragments`'ı koşar,
layout/görsel/içerik atamalarını yapar, sayfayı render eder, doküman tablolarını eşitler; galeri,
indeks, export'lar, raporlar ve görsel baseline'ı yeniler. Bayraklar: `--dry` (yalnız doğrula),
`--check` (drift), `--no-render`, `--styles a,b`.

Yeni aile bandı: `kit/families.json`'a kesintisiz aralık, `kit/specs/bands.json`'a şablon, sonra üret.
`apply-fragments` boşluk/çakışma görürse kırmızı verir.

## Ajanlar için

1. `AGENTS.md` (bağlayıcı) → `kit/dist/index.slim.json` (adaylar).
2. `node kit/pick.mjs --intent "..." --limit 3` niyete göre puanlar.
3. `kit/mcp-server.mjs` stdio MCP üzerinden `pick`, `style`, `tokens`, `shots`, `render`, `brief` sunar.
4. `node kit/brief.mjs --intent "..." --style <slug>` kopyalanabilir brief yazar.

## Bilinen sınırlar

- Headless render SwiftShader kullanır: ekran görüntüleri GPU performansı ölçmez.
- `file://` altında `history.replaceState` engellenir; galeri URL durumu testi sunucu ister.
- Ekranlar sabit 1280×2400 tuvalidir — v6'da responsive/mobil kare yok.
- `optimize-shots.mjs` baytı değiştirir, pikseli değiştirmez; `phash --check` imzayı korur.
- Font kapsamı: 29 Google Fonts ailesi yerelleştirilmiş; stiller yalnız bu listeden seçer.

## Lisans

Kod ve token'lar: MIT (`LICENSE`). Yerelleştirilmiş fontlar: OFL (`kit/fonts/LICENSES.md`).
Fotoğraflar: Unsplash License (`kit/images/LICENSES.md`).
