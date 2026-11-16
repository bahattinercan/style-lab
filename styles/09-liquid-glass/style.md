# 09 · Liquid Glass

> **In one sentence:** Cam sadece bulanıklaştırmakla kalmıyor, büküyor: kenarında ışık kırılan, basınca hafifçe akan, arkasındaki rengi taşıyan optik katman (Apple visionOS/iOS 26 dili).

| | |
|---|---|
| **Feeling** | akışkan, optik, "premium donanım", dokunulabilir |
| **Best for** | nav/araç katmanı, medya üzeri kontrol, oynatıcı, AR/3D ürün vitrini |
| **Avoid** | yoğun veri tablosu, düşük kontrastlı içerik, düşük güçlü cihaz hedefi |
| **Difficulty** | yüksek (performans + fallback) · **Accessibility** |  |
| **Family** | Surface (8–12) · **Token** | `kit/tokens.css` → `[data-style="liquid-glass"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Glassmorphism'in optik olarak iddialı hali: `backdrop-filter: blur(24px) saturate(150%)` + **inset üst highlight** (specular) + **kenarda ışık kırılması** + **pill (999px) kontroller** + **hafif yay (spring) hareketi**. Yüzey arkasındaki rengi alır, kendi kenarında bir ışık çizgisi taşır; kullanıcı "dokunabilir bir malzeme" hissi alır.

Kazandığı şey: kontrollerin içerikle bütünleşmesi (medya üzerinde ağır bar olmadan). Feda ettiği şey: performans ve kontrast payı.

### What is not
- **Glassmorphism değildir.** Aradaki fark: refraction/lensing, specular highlight, yay fiziği ve pill kontroller; glassmorphism statik ve daha düzdür.
- **Neumorphism değildir.** Orada ışık tek renk üzerinde kabartma yapar; burada arka plan görünür ve kırılır.
- **"Blur'lu siyah bar" değildir.** `saturate()` ve inline highlight olmadan sadece "koyu cam" olur.
- **Her yerde kullanılmaz:** opak içerik panelleri cam olmaz; cam yalnızca **içeriğin üstünde duran kontrol katmanıdır**.

### Where it comes from
Apple'ın visionOS ve iOS 26 "Liquid Glass" materyal sistemi; optik kırılma, gerçek zamanlı ışık ve dokunma geri bildirimi. Donanım gücü arttıkça "materyal" metaforu geri döndü.

### Recognition test in 3 seconds
1. Yüzeyde **blur + saturate** birlikte mi (bulanıklık tek başına yetmez)?
2. Üst kenarda **ince ışık çizgisi** (specular) var mı?
3. Kontroller **pill** (999px) mi, köşeli mi?
4. Basınca hafif **yay/ölçek** hareketi var mı (aşırı değil)?
5. Ekranda cam katman sayısı ≤ 2 mi?

## Visual signature
- **Blur 24px + saturate 150%**; `--blur: 24px` token'ı.
- **Specular highlight:** üst kenarda 1px beyaz %35 inset; sol üstte hafif parlama.
- **Pill kontrol:** buton/segment/input 999px; nav bar 28px radius.
- **Kırılma kenarı:** 1px `--line` (beyaz %28) + 6px iç gölge yerine kenar gradient'i.
- **Derin gölge:** `0 10px 40px rgba(0,0,0,.35)` — yumuşak, bulanık.
- **Hareket:** basınca `scale(.98)`, bırakınca hafif yay ile geri dönüş.
- **Typography:** SF Pro Display (display) + SF Pro Text (body) + SF Mono (mono label).
- **Colour discipline:** a single accent `#4cc9f0`; neutral scale `#0a0d12` → `#f5f7fa`.
- **Radius:** `20px` / `28px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Blur + saturate birlikte:** `blur(var(--blur)) saturate(150%)`; tek başına blur cam sayılmaz.
2. **Specular kenar:** `inset 0 1px 0 rgba(255,255,255,.35)` + 1px `--line` (beyaz %28).
3. **Pill kontroller:** buton/input/segment 999px; kart 28px.
4. **Cam katmanı ≤ 2** (nav + tek sheet); gövde içeriği opak.
5. **Yay hareketi:** `cubic-bezier(.34,1.4,.64,1)`, 140–280ms; `scale(.98)` ile basılma.
6. **Fallback:** `@supports not (backdrop-filter)` → opak `--surface` karışımı + `--blur: 0`.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0a0d12` | page background | as a card background |
| `--bg-2` | `#141a24` | partition divider floor, table top | button background |
| `--surface` | `rgba(255,255,255,.10)` | kart, input, modal | full-page background |
| `--surface-2` | `rgba(255,255,255,.06)` | passive chip, hover background | primary button |
| `--ink` | `#f5f7fa` | title, body, icon | large background |
| `--ink-soft` | `rgba(245,247,250,.76)` | secondary text, description | — |
| `--ink-faint` | `rgba(245,247,250,.5)` | decorative label, separator text | interactive text |
| `--accent` | `#4cc9f0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#041018` | text above accent | non-accent background |
| `--line` | `rgba(255,255,255,.28)` | all borders | text colour |

- Measured contrast: `ink/bg` **18.13:1** · `ink-soft/bg` **10.54:1** · `ink-faint/bg` **5.05:1 (decorative)** · `accent-ink/accent` **10:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (SF Pro Display) | 56px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 26px | 600 | 1.2 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (SF Pro Text) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (SF Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `20px` (buton, input, chip), `28px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Siyah/opak bar üstüne sahte blur (arkada içerik yoksa cam çalışmaz).
- Cam üstünde cam (çift blur) ve 3+ katman.
- `backdrop-filter` animasyonu; sürekli blur değişimi.
- Koyu/sert dış gölge (camı "kutu" yapar) — gölge yumuşak ve derin olmalı.
- Cam üstünde yarı saydam gövde metni (kontrast düşer).
- Düşük güçlü cihazda tam blur (statik blur'a düşür).
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 20px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 20px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 20px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 20px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 20px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 20px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 20px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.12:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Arkada medya/gradient, üstte cam nav, hero'da tek cam kontrol kümesi | `shots/01-page.png` |
| Dashboard | düşük | Cam yalnızca nav + tek toolbar; KPI kartları **opak** | `shots/01-page.png` |
| Form | çok düşük | Opak panel içinde pill inputlar; cam yalnızca üst bar | `shots/01-page.png` |
| Liste / tablo | düşük | Opak yüzey; satır ayrımı beyaz %10 | `shots/01-page.png` |
| Boş durum | orta | Cam kart + tek cümle + pill buton | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına cam sheet, arkada değişen medya | `shots/01-page.png` |
| Pricing | orta | 2 cam kolon; orta kolon accent kenar + pill CTA | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Opak kart, pill input, tek accent buton; blur minimum | `shots/01-page.png` |
| Modal | orta | Cam sheet 28px radius, backdrop blur 6px | `shots/01-page.png` |
| Bildirim / toast | orta | Cam pill, 4sn | `shots/01-page.png` |
| Hata | düşük | Opak yüzey + `--danger` kenar (cam üstünde hata okunmaz) | `shots/01-page.png` |
| Profil / ayar | orta | Cam sidebar + opak içerik; iki cam bitişik olmaz | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 18.13:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 10.54:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.05:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 10:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.12:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 102.2 | ≥ 60 target | thin text |

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
| "Koyu şeffaf kutu" | `saturate` ve specular yok | `saturate(150%)` + inset highlight ekle |
| Metin kayboluyor | Yarı saydam metin + parlak arka plan | Metin opak, arka plan %20 karart |
| Kare donuyor | 3+ blur katmanı, animasyonlu blur | Katman ≤2, blur animasyonu yok |
| Safari'de blur yok | Destek eksik | `@supports` opak fallback |
| Ağır/oyuncak görünüm | Sert gölge, kalın kenar | Derin yumuşak gölge + 1px beyaz %28 |
| Hiyerarşi yok | Her şey cam | Yalnızca üstteki kontrol katmanı cam |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `aurora-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neumorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://developer.apple.com/design/human-interface-guidelines/materials | Apple HIG · Materials — Materyal katmanları ve specular mantığı |
| https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic | Fluent · Acrylic — Fallback ve performans notları |
| https://developer.apple.com/design/human-interface-guidelines/motion | Apple HIG · Motion — Yay eğrisi ve süre önerileri |

## AI brief

```text
Stil: Liquid Glass (styles/09-liquid-glass/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="liquid-glass"]; hard-coded renk/blur YASAK.
Cam: backdrop-filter: blur(var(--blur)=24px) saturate(150%) + 1px rgba(255,255,255,.28) + inset 0 1px 0 rgba(255,255,255,.35).
Kontroller pill (999px), kart 20px, sheet 28px. Cam katman ≤ 2; gövde içeriği OPAK.
Cam üstü metin tam opak --ink (#f5f7fa); yarı saydam gövde metni yasak.
Hareket: 140–280ms cubic-bezier(.34,1.4,.64,1); basınca scale(.98); backdrop-filter animasyonu YASAK.
Fallback: @supports not (backdrop-filter) → opak yüzey + --blur: 0; prefers-reduced-transparency aynı.
Gölge: 0 10px 40px rgba(0,0,0,.35) yumuşak; sert gölge yasak.
Yasak: cam üstünde cam, 3+ katman, opak bar üstünde sahte blur, çoklu highlight.
Çıktı: kod + tek paragraf not (kaç cam katman, blur değeri, fallback ve kontrast önlemi).

Style: Liquid Glass (liquid-glass) · family: Surface (8–12)
Token: --bg #0a0d12 · --surface rgba(255,255,255,.10) · --ink #f5f7fa · --accent #4cc9f0 · --line rgba(255,255,255,.28)
Radius: 20px / 28px · Typography: SF Pro Display / SF Pro Text / SF Mono
Required: **Blur + saturate birlikte:** `blur(var(--blur)) saturate(150%)`; tek başına blur cam sayılmaz. · **Specular kenar:** `inset 0 1px 0 rgba(255,255,255,.35)` + 1px `--line` (beyaz %28). · **Pill kontroller:** buton/input/segment 999px; kart 28px.
Banned: Siyah/opak bar üstüne sahte blur (arkada içerik yoksa cam çalışmaz). · Cam üstünde cam (çift blur) ve 3+ katman. · `backdrop-filter` animasyonu; sürekli blur değişimi.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="liquid-glass"] {
  --bg: #0a0d12; --bg-2: #141a24;
  --surface: rgba(255,255,255,.10); --surface-2: rgba(255,255,255,.06);
  --ink: #f5f7fa; --ink-soft: rgba(245,247,250,.76); --ink-faint: rgba(245,247,250,.5);
  --accent: #4cc9f0; --accent-ink: #041018;
  --line: rgba(255,255,255,.28);
  --danger: #e3382a;
  --danger-ink: #0b0d10;
  --ok: #12b76a;
  --ok-ink: #0b0d10;
  --warn: #f79009;
  --warn-ink: #0b0d10;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 20px; --radius-lg: 28px;
  --shadow: 0 10px 40px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "SF Pro Display", system-ui, sans-serif;
  --font-body: "SF Pro Text", system-ui, sans-serif;
  --font-mono: "SF Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
