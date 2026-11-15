# Stil üretim kodunu geliştirme araştırması

> **Tarih:** 2026-11-15 · **Kapsam:** `kit/` üretim zinciri + `styles/` kaynakları · **Durum:** araştırma, kod değişmedi
> **Yöntem:** repo ölçümü (aşağıdaki komutlar) + dış kaynak taraması (DTCG, Style Dictionary, Leonardo, OKLCH, Utopia, stylelint, VLM QA)
> **Başlangıç durumu:** `bash kit/gates.sh` → 27 adım, kapılar temiz; kanıtlanan kusurlar kapıların **görmediği** yerlerde.

---

## 1 · Bugünkü üretim zinciri (olduğu gibi)

```
kit/specs/*.json ──add-style.mjs──▶ styles/<nn>/ {tokens.json, token-block.css, style.md, fragment, keywords}
     (yalnız 100 stil)                          │
                                                ├─ apply-fragments ─▶ kit/tokens.css · kit/render/shots.config.mjs
                                                ├─ assign-layouts / imagery / content ─▶ tokens.json alanları
                                                └─ render-shots ─▶ styles/<nn>/shots/01-page.png (1280×2400)
kit/tokens.css ──export-tokens──▶ kit/dist/{tokens.all.css, tailwind.theme.css, figma.variables.json}
```

Üreteç `kit/lib/style-spec.mjs` (604 satır) tek SPEC'ten 5 dosya üretir; `add-style.mjs` (202 satır) sırayı koşar.
Zincirin **güçlü** yanı: tek komut, `--check` drift kapısı, ölçülen kontrast eşikleri, deterministik atamalar,
görsel imza (dHash) regresyonu, npm'siz çalışma.

Zayıf yanı: zincir **kataloğun tamamını kapsamıyor** ve kalite kapıları ölçtükleri şeyin bir kısmını göremiyor.

---

## 2 · Ölçülen bulgular

| # | Bulgu | Ölçüm | Kanıt |
|---|---|---|---|
| B1 | **Tek sayfa "zoom" ile sığdırılıyor, tasarımla değil** | **251/251 stil** 2400px'i taşıyor; `body.zoom` p10/p50/p90 = 0.808/0.882/0.931. Zoom öncesi içerik **p50 2721px** (p10 2578, p90 2972, max 3268) ⇒ medyan **−321px**, en kötü **−868px** fazla. Sonuç: **en küçük görsel punto p50 7.9px** (p10 7.2, min 6.6), metin öğelerinin **%53.9'u 10px altı**; **19 stil** 0.78 tavanından sonra da taşıyor (alt içerik kırpık). Zoom öncesi hiçbir stilde computed punto 8,5px altında değil ⇒ kusurun tamamı zoom kaynaklı. | `kit/render/page.html:189-199`; ölçüm: §7 |
| B2 | **Kapı bu kusuru göremiyordu (P0 ile düzeltildi)** | Eski ölçüm aynı sayfalar için `0 sorun · 0 uyarı (küçük metin)` diyordu: `MEASURE_EXPR` yalnız `getComputedStyle().fontSize` okuyordu; zoom sonrası görsel boyutu ve zoom öncesi taşmayı hesaplamıyordu. Yeni ölçüm aynı 251 sayfada **521 sorun** veriyor (zoom<1, sayfa taşması, 9px altı görsel punto). | `kit/render/render-shots.mjs:307-365`, `:390-420` |
| B3 | **Kataloğun %60'ı üretecin dışında** | 251 stilin 100'ü SPEC'li (152–251), 151'i elle yazılmış (01–151). Legacy stillerin 5 kaynağı da var ama üreteci yok ⇒ `add-style --check` bu 151 stil için hiçbir şey doğrulamıyor. | `ls kit/specs` vs `ls styles` |
| B4 | **`shots.config.mjs` içinde 45 yinelenen stil anahtarı** | 297 anahtar / 252 tekil; 45 anahtar iki kez tanımlı: 26'sında içerik **farklı** (JS son tanımı kazanır ⇒ önceki blok sessizce ölü), 19'unda birebir kopya. Ölü blok toplamı **994 satır**. Aynı anahtarı düzenleyen kişi hiçbir şey değiştirmez. | `kit/render/shots.config.mjs` (ör. `cyberpunk` 918 ve 1498) |
| B5 | **Token sözleşmesi ikiye bölünmüş** | `tokens.json`/`css` alanı **20** değişken (boşluk ve durum rengi yok). `tokens.css` bloklarında değişken sayısı {20, 21, 24, 25, 28} — 161 stil `--danger` eziyor, 90 stil global `#b42318`'e düşüyor. Makine kaynağı (JSON) durum rengini bilmiyor; `scene.css` `.field.err` yine de `--danger` kullanıyor. | `styles/*/tokens.json`, `kit/tokens.css:24-30`, `kit/render/scene.css:1096`, `kit/lib/style-spec.mjs:530` |
| B6 | **`extraCss` serbest metin kaçış kapısı** | 100 SPEC'te 18.5 KB CSS, ortalama 185 karakter, **213 farklı satır** (aynı `h1 { font-size: 38px }` 12 kez). 270 imza bloğunun **138'inde kendi kendini ezen bildirim** var (toplam 327): `h1 { font-size: 54px }` sonra `h1 { font-size: 38px }`. Hiçbir kapı bu metni ayrıştırmıyor. | `kit/specs/*.json → extraCss`, `add-style` doğrulaması yok |
| B7 | **Eski bloklarda token dışı renk** | 270 imza bloğunun 18'inde toplam **69 hard-coded hex** var (hepsi legacy: `skeuomorphism` 18, `frutiger-aero` 6, `glassmorphism` 6…). SPEC üretimi temiz (0 hex) ⇒ kaçak yalnız elle yazılan bloklarda. | `kit/render/shots.config.mjs` |
| B8 | **Yakın-kopya stiller** | 251 render'ın dHash çifti: komşu mesafe medyanı 61/256, ama **4 çift ≤ 4/256** (`skill-tree`≈`coding-bootcamp` 2, `marketplace-multi`≈`electronics-spec` 3, `pharmacy-store`≈`marketplace-multi` 4, `university-portal`≈`exam-prep` 4), 9 stil ≤16/256. Hiçbir kapı stiller arası mesafeyi ölçmüyor (phash yalnız "kendi baseline'ına" bakıyor). | `kit/render/phash.mjs`, `kit/render/visual-baseline.json` |
| B9 | **Kompozisyon ekseni neredeyse sabit** | Tek `page.html` (204 satır) ⇒ 251 sayfada **bölüm sırası birebir aynı** (logo, üç adım, medya, ölçü bandı, bileşen, form+veri, CTA, footer). Değişen yalnız hero/nav (8+5 partial, 16 parmak izi, en kalabalık %12) ve `density`. | `kit/render/page.html`, `kit/render/layouts.json` |
| B10 | **Kapı hijyeni** | `node --test` `gates.sh` içinde **0 kez** geçiyor ⇒ `render-shots.test.mjs` ve `cdp-browser.test.mjs` hiç koşmuyor. `kit/render/a11y-check.mjs` (421 satır) hiçbir kapıya bağlı değil. `build-gallery` `kit/render/*.html` tarıyor; `SHOTS_KEEP_TMP=1` ile kalan `.tmp-*.html` dosyaları kapıyı **yanlış** kırıyor. `TESTING.md` silinmiş sayfaları (`motion-lab.html`, `sections.html`, `flows.html`) ve "151 stil"i anlatıyor. | `kit/gates.sh`, `kit/build-gallery.mjs:263-270`, `TESTING.md` |
| B11 | **Export'lar standart dışı** | `figma.variables.json` kendi formatı, `tailwind.theme.css` `@theme`, DTCG (`$value`/`$type`) çıktısı yok. 2025.10'dan beri DTCG **stable v1**; Style Dictionary v5 DTCG'yi doğrudan okuyor. | `kit/export-tokens.mjs`, `kit/dist/*` |
| B12 | **Kontrast borcu elle kapatılıyor** | 0 hata / 19 yumuşak uyarı (`skeuomorphism` ink-soft 4.34, 6 stilde ink-faint <3, 3 stilde APCA Lc <60). Palet 10 hex olarak elle yazılıyor; eşiği geçmeyen değeri **insan düzeltiyor**, üreteç çözmüyor. | `kit/check-contrast.mjs --strict-soft`, `kit/lib/style-spec.mjs:57-80` |

**Özet:** sorun "üreteç yok" değil; üreteç var ama (a) kataloğun %40'ını kapsıyor, (b) çıktının estetik/ergonomik
doğruluğunu ölçen kapılar zayıf, (c) elle yazılan kaçış kapıları (legacy CSS, `extraCss`) sözleşmeyi deliyor.

---

## 3 · Dış araştırma (ne yapıyorlar)

| Konu | Bugünkü durum | style-lab için anlamı |
|---|---|---|
| **DTCG token formatı** | 28 Ekim 2025'te **stable v1 (2025.10)** yayınlandı; `$value`, `$type`, renk için `colorSpace`+`components` (lerp'li uzay, `oklch` dahil), `$schema` tartışması sürüyor. Tools Studio/Style Dictionary/Figma eklentileri bu biçimi okuyor. | Üçüncü bir export (`dist/tokens.dtcg.json`) katalogu araç ekosistemine açar; mevcut özel formatlar kalabilir. |
| **Style Dictionary v5** | DTCG'yi doğrudan tüketir, `outputReferences` ile `var(--…)` zinciri korunur; "derlenmiş CSS build artefaktıdır, elle düzenlenmez" kuralı. | Bizim `tokens.css` zaten artefakt; DTCG çıktısı verilirse tüketen projeler kendi SD hattını kurabilir. Yeni bağımlılık **gerekmiyor** (elle emitter yazılabilir). |
| **Primitive → semantic katman** | Yaygın mimari: primitive (`blue-600`) → semantic (`color/text/link`) → component. Semantic katman olmadan mod/export ölçeklenmiyor. | `palette.bg/ink/accent` zaten semantic; eksik olan **primitive rampalar** (aynı hue'dan 3–4 ton) ⇒ `bg-2`, `surface-2`, `line` bugün elle uyduruluyor. |
| **Leonardo (Adobe)** | Kontrast **hedefli** palet: her ton, verilen zemine karşı istenen WCAG/APCA oranını **tam** tutturur (binary search + HSLuv/OKLCH algısal açıklık). Spectrum bu yöntemle üretildi. | B12'nin çözümü: SPEC'te 10 hex yerine hedefler (`body ≥4.5`, `soft ≥4.5`, `faint ≥3`, `accentInk ≥4.5`, odak ≥3); üreteç rengi **çözer**. 19 uyarı ve elle düzeltme döngüsü kalkar. |
| **OKLCH / algısal rampa** | sRGB'de açık/koyu türetmek orta tonları şişiriyor; OKLCH'de aynı L adımı her hue'da aynı görünüyor; kontrast için OKLCH L ↔ CIE Y ↔ WCAG luminance köprüsü standart yaklaşım. | `bg-2/surface-2/line` türetimi formülleşir; 31 ailenin "aynı aileden" ton merdiveni garanti olur. |
| **APCA / WCAG 3** | APCA **onaylanmış test değil**: WCAG 3 taslak, kontrast algoritması "belirlenmedi"; uygunluk iddiası hâlâ WCAG 2.2 oranıyla yapılıyor. | Mevcut yaklaşım (WCAG oranı = hata, APCA = bilgi) doğru; APCA'yı eşik yapmaya kalkmamalı. |
| **Utopia / akışkan ölçek** | `clamp()` ile min–max viewport arası akışkan tipografi/boşluk; WCAG 1.4.4 (200% zoom) ihlallerini hesaplayıp raporlar. | B1'in yapısal çözümü: sabit px ölçek + zoom yerine **bütçeye göre akışkan ölçek** (2400px yükseklik = tasarım bütçesi). |
| **stylelint token kuralları** | Firefox/Atlassian/Carbon: "hard-coded renk yok, token kullan", "tanımsız token yok", "deprecated token uyarısı". | Bizde CSS üreten taraf kendi lint'ini yazabilir (npm'siz): `extraCss` + `token-block.css` için aynı kurallar. |
| **Görsel QA (VLM)** | Yaklaşım: tam sayfa değil **bölge kırpması** ile diff verip modeli denetlemek; modelin işaret edemediği bulguyu silmek; ölçüm + VLM'i birleştirmek. | Kataloğa "görsel iddia" kapısı eklenebilir: kırpılmış bölge + ölçüm; ama önce deterministik ölçüm (B1/B8) gerekir. |

Kaynaklar §9'da.

---

## 4 · Hedef mimari (öneri)

```
SPEC (tek gerçek kaynak, 251 stil)
  ├─ palette seed (hue/polarite/accent) + kontrast hedefleri
  │     └─ color solver (OKLCH ⇄ luminance) ─▶ 10 semantic + 4 durum + rampa
  ├─ type/space scale (bütçeye göre akışkan) ─▶ tokens.json (DTCG $value) ─┬▶ token-block.css
  ├─ section plan (hangi bölüm, hangi arketip)                            ├▶ dist/tokens.dtcg.json
  └─ signature CSS (yapısal knob'lar, serbest metin değil)                └▶ dist/{tailwind, figma}
                                                                          │
page.html (bölüm planına göre monte) ─▶ render ─▶ 01-page.png ─▶ kapılar:
   fit (zoom yok) · punto tabanı · stil-stil mesafe · token disiplini · testler
```

Beş eksen: **(1) kapsam** (151 legacy stil SPEC'e taşınır), **(2) doğru renk** (solver), **(3) doğru sayfa**
(bütçe + akışkan ölçek, zoom yok), **(4) çeşitlilik** (bölüm planı + mesafe kapısı), **(5) kapı dürüstlüğü**
(gördüğünü ölç, ölçmediğini söyle).

---

## 5 · Öneri paketleri

Efor: S ≤ yarım gün, M ≤ 2 gün, L > 2 gün (ajan saatı). Her paket kendi kapısını getirir.

### P0 — Ölçüm dürüstlüğü (S, risk düşük) — **UYGULANDI**

`--measure` artık sığdırmayı ölçüm girdisi sayıyor: `fitTier`, `pageOverflow`, `contentHeight`,
`minVisualFont`, `tinyVisual`. Eşikler: zoom yasak (page.html'de zoom kodu kalmadı), taşma > 2px =
hata, punto < 10px = hata. `--fit-json` makine-okur döküm verir. `gates.sh` artık
`node --test kit/render/*.test.mjs` (4 test) koşuyor ve ölçüm örneği 6 → **24**'e çıktı.

`kit/render/a11y-check.mjs` **bağlanmadı**: silinen sahne şablonlarına yazılmış, `page.html`
partial'ları render sırasında eklediği için ham şablonda `<h1>` görmüyor (kanıtlandı: minimalism'de
"0 adet h1" diyor). Başlığına durum notu düşüldü; yeniden bağlamak için partial çözen adım gerekir.
`build-gallery`'nin şablon renk taraması zaten nokta ile başlayan geçici dosyaları atlıyor.
`TESTING.md` v6 durumuna çekilmiş durumda (motion-lab/sections/flows referansı yok).

### P1 — Sığdırma: zoom yerine bütçe (M, risk orta) — **UYGULANDI**
1. `page.html`'deki zoom emniyeti kaldırılır; bölüm yükseklikleri bütçelenir (`--sec-y`, `--card-pad`, `--lede-max`).
2. Tipografi akışkan: `--fs-h1: clamp(...)` bütçeye göre; `extraCss`'teki elle `h1 { font-size: … }` yazımı **kademe tokenına** döner (`--fs-h1`, `--fs-h2`, `--fs-body`).
3. Render iki geçişli: ölç → gerekirse `--fit` değişkenini (yalnız tipografi/boşluk) ayarla → yakala. Görsel ölçek (zoom) yasak.

**Uygulanan (ölçüm):** `page.html`'deki zoom emniyeti silindi. Yerine (a) dikey bütçe: nav 14px,
hero 34/24, `.pg-sec` 30→18px, kart 16→12px, medya 244→196px, band 22→14px, cta 32→22px, footer
30→22px; (b) `data-fit` kademeleri — 1: boşluk sıkışır + logo şeridi kalkar, 2: ölçü bandı da kalkar,
3: üç adım bölümü de kalkar; (c) punto tabanı: 8,5–9,5px olan 65 CSS + 81 fragment + 1 SPEC değeri
10px'e çekildi (hiçbir kademede punto küçültülmez).

Ölçüm sonrası: **taşan 0/251 · en küçük punto 10px · 10px altı metin %0 · içerik 2400–2401px**.
Kademe dağılımı: 0 → 79 stil, 1 → 120, 2 → 17, 3 → 35. PNG toplamı 209 MB → **172 MB**.
Görsel imza baseline'ı yenilendi (`phash --write`), `bash kit/gates.sh` → **kapılar: temiz**.

**Kabul:** 251/251 sayfada `zoom = 1`, içerik ≤ 2400px, görsel punto ≥ 10px; P0 kapısı yeşil; `01-page.png` imzaları yeni baseline'a yazılır.

**Ölçülen bütçe (P1 tasarımı için):** 2400px'in bugünkü dağılımı (örnek: `minimalism` / `grand-tourer-oxblood`):

| Blok | Bugün | Hedef | Not |
|---|---|---|---|
| nav | 62–72 | 56 | `padding: 20px` → 16px |
| hero (split/centered) | 600 | 480 | padding 54/40 → 36/26, copy gap 18 → 12, görsel max-y 40px kısa |
| hero (sticky/type) | 864 | ≤ 560 | sticky hero en büyük taşma kaynağı (8 stilde) |
| pg-logos | 51 | 0–40 | dense planlarda tamamen kalkabilir |
| pg-sec ×3 | 345 / 334 / 531 | 300 / 290 / 440 | `.pg-sec` padding 30 → 22; kart padding 20 → 14; kontrol yüksekliği 44 → 36; gap 18 → 12 |
| pg-band | 102 | 86 | padding 22 → 16 |
| pg-form | 360 | 300 | input 44 → 36, kart padding |
| pg-cta | 236 | 200 | padding |
| pg-foot + base | 169 | 140 | 4 kolon daha sıkı |

Toplam kazanç ≈ **−330px** ⇒ p50 (2721) sığar, p90 (2972) sığmaz. Kuyruk için iki kaldıraç:
(1) `--fit-y` çarpanı (yalnız dikey padding/gap, tipografi değil) stil başına 0.72–1 olarak ölçülüp
yazılır; (2) `density-dense` planında `pg-logos` ve `pg-band` bölümleri kalkar, bileşen ızgarası 2×2 → 1×4 olur.
Her ikisi de `check-layout`/`check-composition` kapılarına bağlanır; 19 kırpılan stil bu iki kaldıraçla kapanır.

### P2 — Token sözleşmesi v7 + palet çözücü (M–L, risk orta)
1. Sözleşme: 20 → **28** değişken (`--space-1…8`, `--danger/--ok/--warn` + `-ink`), `tokens.json` bunları taşır; üç kopya paritesi durur.
2. Palet solver: SPEC `palette` yerine `seeds { bg, accent, polarity }` + hedefler; OKLCH L çözümü ile `ink/ink-soft/ink-faint/accent-ink/line` üretilir (Leonardo mantığı, npm'siz ~120 satır).
3. `dist/tokens.dtcg.json` (DTCG 2025.10 `$value/$type`) — mevcut export'lar korunur.
4. `contrast-baseline.json` boş kalır; 19 uyarı sıfırlanır (ya çözülür ya gerekçeli istisna).

**Kabul:** `check-contrast --strict-soft` 0 uyarı; `tokens.json` 28 değişken; DTCG çıktısı şema doğrulamasından geçer; legacy 151 stilin rengi solver çıktısıyla **birebir veya kabul edilmiş sapma** içinde.

### P3 — Kapsam: 151 legacy stili üretece taşı (L, risk orta)
1. `kit/extract-spec.mjs`: `styles/<nn>/` + `shots.config.mjs` bloğundan SPEC üretir (geriye mühendislik), `--check` ile birebir eşleşme kanıtlanır.
2. Legacy bloklar `shots.config.mjs`'ten **silinir**; dosya yalnız `apply-fragments` bölgesini taşır (994 satır ölü kod + 45 yinelenen anahtar gider).
3. `add-style --check` artık 251/251'i kapsar.

**Kabul:** 251 SPEC; `shots.config.mjs` yinelenen anahtar 0; `phash --check` 251/251 fark 0 (görsel çıktı değişmedi); kapı temiz.

### P4 — Çeşitlilik (M, risk düşük)
1. `layouts.json`'a **bölüm planı** ekseni (`sections: [logos, trio, media, band, comp, form, cta]` varyantları); `page.html` plana göre monte edilir.
2. `check-layout` kapsamı: hero|nav parmak izi %25 tavanı + bölüm planı dağılımı.
3. Yeni kapı: **stil-stil dHash mesafesi ≥ 24/256** (bugün 9 stil ihlal ediyor; 4 çift ≤4).

**Kabul:** 251 stil için ≥ 6 bölüm planı, hiçbiri %35 üstü değil; mesafe kapısı yeşil (yakın 9 stil tasarım olarak ayrıştırılır).

### P5 — Kaçış kapılarını daralt (S–M)
1. `extraCss` ayrıştırılır: hex/`rgb(` yasak, kendi kendini ezen bildirim yasak, izinli selector listesi (`h1,h2,h3,.brand,.chip,…`).
2. Tekrar eden boilerplate (`h1 { font-size: … }`, `.pg-card { border-radius: … }`) SPEC knob'una taşınır (`typeScale`, `radiusPlan`) ⇒ ~18 KB SPEC metni ve 327 ezen bildirim silinir.

**Kabul:** `check-signature` (yeni) 0 ihlal; SPEC başına `extraCss` ≤ 400 karakter; 138 bozuk blok temiz.

---

## 6 · Sıra ve gerekçe

| Sıra | Paket | Neden bu sırada |
|---|---|---|
| 1 | **P0** | Ölçmeden düzeltmek körlemesine; bugünkü "temiz" iddiası B1/B2 ile çürüyor. Hızlı, geri dönüşü yok. |
| 2 | **P1** | Kullanıcıya görünen tek gerçek kusur: 7.7px metin. P0 kapısı bunu kırmızıya çeker, P1 yeşile. |
| 3 | **P2** | Renk doğruluğu + sözleşme; durum renkleri ve boşluk ölçeği olmadan tüketen proje eksik kalıyor. |
| 4 | **P3** | Kapsam: bir kez yapılırsa her sonraki refactor 251 stile birden uygulanır. P2'den sonra yapılmalı (SPEC şeması otursun). |
| 5 | **P4** | Katalog değeri: 251 stilin "aynı iskelet" hissi azalır; kapı maliyeti düşük. |
| 6 | **P5** | Borç temizliği; P3 ile birlikte neredeyse bedava. |

**Toplam:** P0+P1 tek dalda (~1 gün) → "temiz ve dürüst" katalog. P2+P3 ikinci dal (~2–3 gün) → "üreteç her şeyin kaynağı".

---

## 7 · Ölçümü yeniden üretme

```bash
# B1/B2: zoom + görsel punto (tüm katalog; ~6 dk)
node kit/render/render-shots.mjs --measure --jobs 6 --fit-json > fit.json
# Özet satırları: `ölçüm · 251 sahne · 521 sorun` ve `sığdırma · zoom<1: 251/251 · en küçük görsel punto 6.6px`
# Tek stil için hızlı bakış: --sample 6 --measure  (kapı bunu koşar)
# Bölüm bütçesi için: .tmp-*-page.html dosyasını CDP ile yükle, body.zoom=1 yap, main çocuklarının yüksekliğini oku
# B4: yinelenen anahtarlar (297 anahtar / 252 tekil / 45 çift / 26 farklı / 994 ölü satır)
node -e "..."   # bkz. bu raporun üretildiği oturum; kural: ^ {2}'?slug'?: \{$ eşleşmelerini say

# B5: değişken sayısı dağılımı {20,21,24,25,28}, --danger 161 stil
grep -c -- '--danger' kit/tokens.css

# B8: stil-stil dHash mesafesi (medyan 61/256, 4 çift ≤4)
node kit/render/phash.mjs --check --json   # baseline: kit/render/visual-baseline.json

# B10: testler kapıda yok
grep -c 'node --test' kit/gates.sh   # 0
```

---

## 8 · Riskler

- **P1 görsel imzayı bozar:** 251 PNG yeniden üretilir, `phash --write` baseline yenilenir; `docs/katalog.md`,
  `report.md`, `composition.md` ve README sayıları güncellenmeli. Kabul: yeni baseline + tek commit'te "render: fit".
- **P2 legacy renkleri değiştirir:** solver çıktısı bugünkü elle seçilmiş hex'ten sapabilir. Geri dönüş:
  SPEC `palette` alanı korunur, `seeds` opsiyonel; `--legacy-palette` bayrağı ile eski değerler dondurulur.
- **P3 geriye mühendislik hatası:** extract edilen SPEC birebir eşleşmezse görsel değişir. Kabul testi:
  `phash --check` 251/251 fark 0 **ve** `add-style --check` 0 drift; eşleşmeyen alanlar raporlanır, zorlanmaz.
- **Kural çatışması:** `AGENTS.md` "token sözleşmesine değişken ekleme" diyor; P2 bilinçli bir **v7 sözleşme
  bump'ı** öneriyor ⇒ kullanıcı onayı + `AGENTS.md` güncellemesi gerekir.

---

## 9 · Kaynaklar

- Design Tokens Community Group — *Design Tokens specification stable v1 (2025.10)*: https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/
- DTCG — *Color Module 2025.10* (`colorSpace`, `components`, `alpha`, `hex`): https://www.w3.org/community/reports/design-tokens/CG-FINAL-color-20251028/
- Style Dictionary v5 — migration + DTCG tüketimi + `outputReferences`: https://styledictionary.com/versions/v5/migration/
- Token mimarisi (primitive/semantic/component): https://gregsargent.com/articles/token-architecture-decisions · https://www.figma.com/resource-library/design-token-architecture/
- Adobe Leonardo — kontrast hedefli palet üretimi: https://medium.com/@NateBaldwin/leonardo-an-open-source-contrast-based-color-generator-92d61b6521d2 · https://github.com/adobe/leonardo
- OKLCH ↔ WCAG luminance köprüsü (tonal-oklch): https://github.com/SashimiEthan/tonal-oklch
- APCA'nın WCAG 3 statüsü (onaylı test değil): https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html · https://www.w3.org/TR/wcag-3.0/
- Utopia akışkan tipografi/boşluk + WCAG 1.4.4 kontrolü: https://utopia.fyi/type/calculator/ · https://github.com/trys/utopia-core
- stylelint token kuralları (`use-design-tokens`): https://firefox-source-docs.mozilla.org/code-quality/lint/linters/stylelint-plugin-mozilla/rules/use-design-tokens.html
- VLM + ölçüm birleşik görsel QA, "kırpılmış diff" yaklaşımı: https://mizchi.github.io/vlmkit/ · https://uiverify.ai/blog/agent-visual-testing-cropped-diff
