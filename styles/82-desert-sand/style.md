# 82 · Desert Sand

> **In one sentence:** Kumul eğrileriyle yumuşayan, sıcak kum zemininde mor alacakaranlık vurgusuyla ölçüm gösteren çöl atlası arayüzü.

| | |
|---|---|
| **Feeling** | sıcak, geniş, sakin, yalın |
| **Best for** | iklim/çöl verisi, seyahat & rota atlası, vaha tesis yönetimi, sıcak iklim tarım paneli |
| **Avoid** | yüksek yoğunluklu operasyon ekranı, koyu mod zorunlu ürünler, neon/oyun arayüzleri |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="desert-sand"]` |
| **Composition** | `split` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Desert Sand, arayüzü bir **çöl atlası** gibi kurar: geniş boşluk, alçak ufuk, kumul eğrisi. Köşeler ya tam yuvarlak (buton, chip, toast) ya da çok büyük (kart 44px) — arada keskin köşe yoktur. Accent, gün batımında kumun üstüne düşen **mor gölge**dir; turuncu/kiremit kullanılmaz.

Üç kurucu karar: (1) **punto hiyerarşisi** — Cormorant Garamond 300 başlıklar ağırlıkla değil boyutla konuşur (58px), gövde Jost 16px; (2) **tek yön gölge** — yalnız aşağı doğru uzun yumuşak gölge (kum üstünde güneş), yukarı ışık ve iç gölge yok; (3) **hap kontrol** — buton/chip/toast 999px; form alanı 24px; hiçbir kontrol 16px altı köşe almaz.

Bedeli: yoğun tablo ve panel ekranlarında bu dil ağır kalır; ekran başına en fazla 2 kart satırı ve 1 tablo önerilir.

### What is not
- **Japandi (06) değildir:** japandi düşük kontrastlı, yeşilimsi sakinlik ve Lora/Inter ile kurulur; Desert Sand'de sıcak kum + mor accent, Cormorant 300 ve 44px kumul radiusu var.
- **Bohemian (30) değildir:** bohemian terracotta + dokuma desenle süsler; burada desen yok, tek accent mor ve gölge tek yönlü.
- **Ethereal (29) değildir:** ethereal pastel lavanta ve cam yüzeylerle çalışır; Desert Sand opak, sıcak ve gölge temellidir.
- **Editorial (03) değildir:** editorial serif + sıkı ızgara ve 4px radiusla dergi kurar; burada radius 24/44 ve hap butonlar var.

### Where it comes from
Çöl haritacılığı ve seyahat atlası geleneğinden: kumul konturu, yükseklik profili, vaha işareti, rüzgâr yönü; alçak ufuk ve geniş boşluk. Bugün yeniden kullanılmasının nedeni: iklim verisi uygulamaları çoğunlukla gri kurumsal panel görünüyor ve sıcak iklim bağlamını taşımıyor. Klişeye dönüşmemesi için korunacak detay: **mor accent** (turuncu değil) ve **tek yön gölge**.

### Recognition test in 3 seconds
1. Köşeler ya tam hap (999px) ya çok büyük (44px); arada keskin köşe yok.
2. Accent mordur; turuncu/kiremit hiçbir yerde yok.
3. Gölge yalnız alta doğru uzun ve yumuşak; hiçbir yüzeyde iç gölge/parlama yok.
4. Başlıklar ince serif (Cormorant 300), 58px'e kadar çıkar; gövde geometrik Jost 16px.
5. Ekranda bir kumul konturu (eğri çizgi) ve bir ölçüm satırı (sıcaklık °C / rüzgâr km/s) var.

## Visual signature
- **Kumul eğrisi:** kart/görsel üst köşe 44px, alt köşe 24px; hero görselinde 2 eşmerkezli eğri kontur (`--line`).
- **Hap kontrol:** buton, chip, toast 999px radius; yükseklik 48px (dokunma güvenli).
- **Tek yön gölge:** `0 14px 30px -18px rgba(76,58,34,.45)`; yalnız aşağı, negatif yayılım ile yumuşak.
- **İnce serif başlık:** Cormorant Garamond 300, 58px/1.0, `0.01em`; ağırlık yok, hiyerarşi punto.
- **Mor accent:** `#5f4a8a` yalnız eylem/seçim; accent üstü metin `#f7f1e4`.
- **Bölge chip'i:** çerçeve-only hap, 10px mono büyük harf `0.18em` — erg · reg · hamada · vaha · tuzla.
- **Kum grain:** `--grain: .05`, sayfa zemininde ince doku; fotoğrafın üstünde kullanılmaz.
- **Typography:** Cormorant Garamond (display) + Jost (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#5f4a8a`; neutral scale `#f0e5cf` → `#241f18`.
- **Radius:** `24px` / `44px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Kumul eğrisi dili: kart ve görsel köşeleri 24/44px, buton ve chip hap (999px)
2. Gölge yalnız alta doğru uzun ve yumuşak; yukarı ışık, iç gölge yok
3. Her ölçüm birimle ve mono: sıcaklık °C, rüzgâr km/s, yağış mm
4. Bölge chip'i her listede: erg · reg · hamada · vaha · tuzla
5. Gövde Jost 16px/1.66, başlık Cormorant Garamond 300 — ağırlıkla değil puntoyla hiyerarşi
6. Sıcak kum zemini + mor accent: accent yalnız eylem/seçim, ikinci sıcak vurgu yok

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f0e5cf` | page background | as a card background |
| `--bg-2` | `#e6d9be` | partition divider floor, table top | button background |
| `--surface` | `#faf4e6` | kart, input, modal | full-page background |
| `--surface-2` | `#efe4cc` | passive chip, hover background | primary button |
| `--ink` | `#241f18` | title, body, icon | large background |
| `--ink-soft` | `#5a4f3e` | secondary text, description | — |
| `--ink-faint` | `#857a62` | decorative label, separator text | interactive text |
| `--accent` | `#5f4a8a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f1e4` | text above accent | non-accent background |
| `--line` | `rgba(36,31,24,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.09:1** · `ink-soft/bg` **6.41:1** · `ink-faint/bg` **3.39:1 (decorative)** · `accent-ink/accent` **6.59:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 32px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Title 52px/400 — remains silent next to the texture. Tags mono, wide tracking.
- Measure: 66ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Card spacing 14px; The material photo can extend right to the edge, the text cannot.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Shadow single level; With material feeling grain + edge. No glass/blur.
- Radius: `24px` (buton, input, chip), `44px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- 16px altı kart/buton radiusu, keskin köşe.
- Yukarı gölge, iç gölge, cam/blur, gradient zemin.
- Turuncu/kiremit accent veya ikinci doygun renk.
- 700+ ağırlık, büyük harf gövde, mono gövde metni.
- Sürekli esen kum animasyonu, bounce, yatay parallax.
- Fotoğraf üstünde grain.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 24px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 24px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 24px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 24px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 24px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 24px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 24px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.76:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 5/7 hero: solda ince serif başlık + tek hap CTA, sağda kumul profili | `shots/01-page.png` |
| Dashboard | orta | 3 KPI (sıcaklık, rüzgâr, nem) + bölge dağılımı + ölçüm tablosu | `shots/01-page.png` |
| Form | düşük | tek sütun, 48px alanlar, birim üst etiket | `shots/01-page.png` |
| Liste / tablo | orta | 44px satır, bölge chip'i, sağda mono ölçüm | `shots/01-page.png` |
| Boş durum | düşük | "bu bölgede ölçüm yok" + vaha önerisi | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: bölge seç → ölçüm ekle → uyarı eşiği | `shots/01-page.png` |
| Pricing | orta | iki plan, hap butonlar, alan limitleri | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek kart (44px köşe), 48px alanlar | `shots/01-page.png` |
| Modal | orta | bölge detayı: profil, ölçüm geçmişi, not | `shots/01-page.png` |
| Bildirim | düşük | hap toast, alt ortada, 4sn | `shots/01-page.png` |
| Hata | düşük | danger çerçeve + neden + sonraki adım | `shots/01-page.png` |
| Profil / ayar | orta | birim sistemi (°C/°F), dil, uyarı eşikleri | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.09:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.41:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.39:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.59:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.76:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 88.5 | ≥ 60 target | thin text |

- `--ink-faint` is decorative only; never body text.
- Colour never carries meaning alone: state always comes with text or an icon.
- Keyboard order follows visual order; no focus traps. prefers-reduced-motion and prefers-contrast are supported.

## Sample images

Identical content is rendered with the same text in every style; only the design differs.

| Image | What to look at |
|---|---|
| `shots/01-page.png` | Single page — 1280×2400: navigation, hero, three sections, component grid, form/data, CTA and footer in one frame. |

## Traps

| Symptom | Cause | Fix |
| --- | --- | --- |
| "Kremsi şablon" hissi | her yüzey aynı kum tonu | `--surface` iki ton açık + tek yön gölge |
| Kontrast düşük | `--ink-faint` gövdeye kullanılmış | gövde `--ink`/`--ink-soft` |
| Mor "yapıştırma" görünüyor | accent dekorasyon olarak | accent yalnız eylem/seçim |
| Gölge kirli | iki yönlü gölge | yalnız aşağı, negatif yayılım |
| Yoğun ekran okunmuyor | 3+ tablo | ekran başına 2 kart satırı + 1 tablo |
| Mobilde taşıyor | 32px gutter | 16px'e iner, tablo karta döner |
| Keskin köşe sırıtıyor | 16px altı radius | hap veya 24/44 kullan |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `neumorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.unccd.int/ | UNCCD · çölleşme sözleşmesi — kuraklık/çölleşme metrikleri ve bölge terminolojisi |
| https://www.nps.gov/deva/index.htm | NPS · Death Valley — kumul, tuzla ve sıcaklık verisi sunumu |
| https://whc.unesco.org/en/list/ | UNESCO World Heritage · liste — çöl peyzajı künyesi ve koruma statüsü etiketleri |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — sıcak kum zemininde metin kontrastı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | www.w3.org — 1px çerçeve ve grafik çizgisi kontrastı |

## AI brief

```text
Stil: Desert Sand (styles/82-desert-sand/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="desert-sand"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cormorant Garamond 300) yalnız H1/H2 (58px/1.0); --font-body (Jost 400/600) gövde 16px/1.66;
  --font-mono (IBM Plex Mono) etiket 10px +0.22em ve tüm ölçüm değerleri (tabular, birim üst etiket).
Yüzey: sıcak kum zemini + ince grain (--grain .05). radius --radius 24px, --radius-lg 44px; buton/chip/toast 999px hap.
  Gölge YALNIZ aşağı yönlü uzun ve yumuşak: 0 14px 30px -18px rgba(76,58,34,.45). İç gölge/parlama yasak.
Renk: tek accent mor (--accent), accent üstü --accent-ink; turuncu/kiremit kullanılmaz.
Bölge chip'i: erg / reg / hamada / vaha / tuzla — çerçeve-only hap, 10px mono.
Hareket: enter 1.15s cubic-bezier(.16,.62,.24,1) 40px stagger 0.16 · scroll top 68% 1.15s 48px once ·
  pin açık scrub 1.35 +180% · hover 420ms scale 1.038; prefers-reduced-motion zorunlu.
Yasak: keskin köşe, yukarı/iç gölge, cam/blur, gradient, turuncu accent, bounce, yatay parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Desert Sand (desert-sand) · family: Nature & Organic (76–85)
Token: --bg #f0e5cf · --surface #faf4e6 · --ink #241f18 · --accent #5f4a8a · --line rgba(36,31,24,.16)
Radius: 24px / 44px · Typography: Cormorant Garamond / Jost / IBM Plex Mono
Required: Kumul eğrisi dili: kart ve görsel köşeleri 24/44px, buton ve chip hap (999px) · Gölge yalnız alta doğru uzun ve yumuşak; yukarı ışık, iç gölge yok · Her ölçüm birimle ve mono: sıcaklık °C, rüzgâr km/s, yağış mm
Banned: 16px altı kart/buton radiusu, keskin köşe. · Yukarı gölge, iç gölge, cam/blur, gradient zemin. · Turuncu/kiremit accent veya ikinci doygun renk.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="desert-sand"] {
  --bg: #f0e5cf; --bg-2: #e6d9be;
  --surface: #faf4e6; --surface-2: #efe4cc;
  --ink: #241f18; --ink-soft: #5a4f3e; --ink-faint: #857a62;
  --accent: #5f4a8a; --accent-ink: #f7f1e4;
  --line: rgba(36,31,24,.16);
  --danger: #cc1b11;
  --danger-ink: #ffffff;
  --ok: #007830;
  --ok-ink: #ffffff;
  --warn: #ab4a00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 24px; --radius-lg: 44px;
  --shadow: 0 14px 30px -18px rgba(76,58,34,.45); --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
