# 08 · Glassmorphism

> **In one sentence:** Medyanın üstünde duran buzlu cam katman; derinlik ışıktan ve bulanıklıktan gelir, süs ne kadar azsa cam o kadar inandırıcı olur.

| | |
|---|---|
| **Feeling** | katmanlı, optik, modern, hafif "premium OS" |
| **Best for** | medya üstü bar/sheet, ses-video oynatıcı, harita/AR katmanı, cam nav |
| **Avoid** | yoğun veri tablosu, form ağırlıklı yönetim paneli, düşük kontrastlı ekranlar |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Surface (8–12) · **Token** | `kit/tokens.css` → `[data-style="glassmorphism"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Cam, bir yüzey değil bir **ilişki**dir: panelin arkasındaki içeriği bulanıklaştırır, kenarında 1px ışık çizgisi bırakır ve zeminden ayrışır. Bu yüzden glassmorphism **boş zeminde çalışmaz** — arkasında renk, görsel veya hareketli medya olmalıdır.

Kazandığı şey katmanlılık: navigasyon, oynatıcı, sheet gibi "içeriğin üstünde ama içeriği saklamayan" yüzeyler için doğal bir çözüm. Feda ettiği şey okunabilirlik payı: her cam katman kontrasttan yer.

### What is not
- **Liquid Glass değildir.** Liquid Glass optik kırılma (refraction), yay fiziği ve dinamik highlight kullanır; glassmorphism statik blur + yarı saydam dolgudur.
- **Neumorphism değildir.** Neumorphism tek renk üzerinde kabartma yapar; glassmorphism arkasındaki içeriği gösterir.
- **Aurora UI değildir.** Aurora zeminde gradient blob taşır; glassmorphism asıl olarak *katman* üretir (zemin nötr bile olabilir).
- **"Her karta blur" değildir.** Ekran başına cam katman sayısı 3'ü geçerse hem performans hem hiyerarşi çöker.
- **Yarı saydam beyaz kutu değildir.** Blur + 1px ışık kenarı + doygunluk artışı olmadan sonuç sadece "soluk kart" olur.

### Where it comes from
Windows Vista/7 Aero ve macOS'un materyal dilinden miras; 2020'de "glassmorphism" adıyla popülerleşti, Apple'ın iOS/macOS materyal sistemi ve Windows 11 Acrylic ile kurumsallaştı. Bugün doğru kullanımı "dekoratif her yerde cam" değil, **medya üstü tek katman** disiplinidir.

### Recognition test in 3 seconds
1. Panelin arkasındaki renk/görsel **bulanık** mı görünüyor (blur ≥ 12px)?
2. Panel kenarında 1px açık renkli "ışık çizgisi" var mı?
3. Zemin düz mü, yoksa renk geçişleri/blob var mı? (Düz ise cam okunmaz.)
4. Aynı ekranda kaç cam yüzey var? (Doğru: ≤ 3, ideal 1–2.)
5. Metin cam üstünde **dolgu rengiyle** mi yazılmış, yoksa şeffaf mı? (Doğru: tam opak `--ink`.)

## Visual signature
- **Blur 16–24px** (`--blur: 18px`), `backdrop-filter: blur(var(--blur)) saturate(140%)`.
- **Yarı saydam yüzey:** beyaz %10–14 (`--surface: rgba(255,255,255,.12)`), ikincil yüzey %6–8.
- **Işık kenarı:** 1px `--line` (beyaz %24) + üst kenarda `inset 0 1px 0 rgba(255,255,255,.28)` highlight.
- **Koyu, doygun zemin:** `#1b1035` → `#2a1a5e` arası mor; camın arkasında 2–3 renk blob.
- **Yumuşak gölge:** `0 8px 32px rgba(0,0,0,.22)` — sert gölge yok.
- **Hafif grain:** `--grain: .02` (banding kırar), görünür doku değil.
- **Tipografi nötr:** Inter, `-0.01em` tracking; camın kendisi süs olduğu için yazı sade kalır.
- **Typography:** Inter (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#7dd3fc`; neutral scale `#1b1035` → `#ffffff`.
- **Radius:** `16px` / `24px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Cam arkasında içerik olmalı.** Düz zeminde cam kullanılmaz; zemin 2–3 renk blob taşır.
2. **Blur + ışık kenarı birlikte.** `blur(var(--blur)) saturate(140%)` + 1px `--line` + inset highlight.
3. **Katman sayısı sınırlı.** Ekran başına ≤ 3 cam yüzey (mobilde ≤ 2); cam üstü cam yasak.
4. **Metin tam opak.** Cam üstünde `--ink`; yarı saydam gövde metni yok.
5. **Opak fallback zorunlu.** `@supports not (backdrop-filter)` → karışım yüzey, blur 0.
6. **Hareket optik değil.** `backdrop-filter` animasyonu yok; geçişler `transform`/`opacity` ile.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#1b1035` | page background | as a card background |
| `--bg-2` | `#2a1a5e` | partition divider floor, table top | button background |
| `--surface` | `rgba(255,255,255,.12)` | kart, input, modal | full-page background |
| `--surface-2` | `rgba(255,255,255,.07)` | passive chip, hover background | primary button |
| `--ink` | `#ffffff` | title, body, icon | large background |
| `--ink-soft` | `rgba(255,255,255,.78)` | secondary text, description | — |
| `--ink-faint` | `rgba(255,255,255,.55)` | decorative label, separator text | interactive text |
| `--accent` | `#7dd3fc` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#06222e` | text above accent | non-accent background |
| `--line` | `rgba(255,255,255,.24)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.92:1** · `ink-soft/bg` **11.1:1** · `ink-faint/bg` **6.04:1 (decorative)** · `accent-ink/accent` **9.87:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 56px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 26px | 600 | 1.2 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `16px` (buton, input, chip), `24px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Yarı saydam gövde metni, cam üstünde 12px altı yazı.
- Düz zemin üstünde cam panel; ışık kenarı olmayan "soluk kart".
- Cam üstünde ikinci blur katmanı (çift cam).
- `backdrop-filter` animasyonu veya sürekli blur değişimi.
- Sert gölge (`--shadow-hard`), 3'ten fazla doygun blob rengi.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 16px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 16px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 16px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 16px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 16px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 16px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 16px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.75:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | Zemin: 3 blob gradient; nav cam; hero'da tek cam kart içinde 3 satır mini UI | `shots/01-page.png` |
| Dashboard | düşük | Cam yalnızca sidebar + topbar; KPI kartları opak `--surface-2` değil, cam ama blur 18px sabit | `shots/01-page.png` |
| Form | çok düşük | Cam panel içinde tek sütun 480px; input cam, odak halkası accent | `shots/01-page.png` |
| Liste / tablo | düşük | Tek cam panel; satır ayrımı 1px beyaz %12; zebra yok | `shots/01-page.png` |
| Boş durum | orta | Cam kart + tek cümle + accent buton; illüstrasyon yerine blob | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına tek cam kart, arkasında değişen blob; 3 adım | `shots/01-page.png` |
| Pricing | orta | 3 cam kolon, orta kolon accent kenar + "önerilen" chip | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Cam kart 420px, arkada sade gradient; 2 alan + 1 buton | `shots/01-page.png` |
| Modal | orta | Cam sheet, üst köşe 24px, backdrop blur 4px | `shots/01-page.png` |
| Bildirim / toast | orta | Sağ üst cam pill, 4sn, ikon + metin | `shots/01-page.png` |
| Hata | düşük | Cam panel içinde `--danger` kenarlı input + 12px açıklama | `shots/01-page.png` |
| Profil / ayar | orta | Cam sidebar + cam içerik; iki cam yüzey sınırı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.92:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 11.1:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 6.04:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.87:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.75:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 106.7 | ≥ 60 target | thin text |

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
| Cam "gri kutu" gibi duruyor | Arkada düz zemin var | Zemine 2–3 renk blob ekle veya camı kaldır |
| Metin okunmuyor | Yarı saydam metin + cam | Metni tam opak yap; `--ink-faint`'i 12px altına indirme |
| Ekran ağır/yavaş | Katman başına blur + sürekli animasyon | Cam yüzey ≤3, animasyonlu blur yok, mobilde blur 12px |
| Kenarlar kayboluyor | Işık kenarı yok | 1px `--line` + `inset 0 1px 0 rgba(255,255,255,.28)` |
| Banding (renk şeritleri) | 8-bit gradient + blur | `--grain: .02` grain ekle (tokens'ta var) |
| Her şey cam, hiyerarşi yok | Katman enflasyonu | Yalnızca "üstte duran" öğeler cam; içerik opak yüzeyde |
| Safari/iOS'ta blur yok | Destek eksik | `@supports` opak fallback zorunlu |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `aurora-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neumorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://developer.apple.com/design/human-interface-guidelines/materials | Apple HIG · Materials — Materyal katmanları, hangi yüzeyde hangi blur |
| https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic | Microsoft Fluent · Acrylic — Acrylic formülü, fallback ve performans notları |
| https://developer.apple.com/design/human-interface-guidelines/color | Apple HIG · Color — Yarı saydam yüzeyde kontrast kuralları |

## AI brief

```text
Stil: Glassmorphism (styles/08-glassmorphism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="glassmorphism"]; hard-coded renk/blur/radius YASAK.
Zemin: --bg üzerine 2–3 renk blob (accent + mor + pembe), opaklık ≤ .22.
Yüzey: --surface (beyaz %12) + backdrop-filter: blur(var(--blur)) saturate(140%) + 1px --line + inset 0 1px 0 rgba(255,255,255,.28).
Cam yüzey sayısı: ekran başına en fazla 3 (mobilde 2). Cam üstü cam yok.
Tipografi: Inter; H1 56/600 -0.02em, gövde 16/1.6 tam opak --ink; 12px altı metin yok.
Radius: buton/input 16px (--radius), kart/modal 24px (--radius-lg).
Hareket: 140–400ms cubic-bezier(.34,1.4,.64,1); backdrop-filter animasyonu yasak.
Fallback: @supports not (backdrop-filter) → opak --surface karışımı, --blur: 0.
Yasak: yarı saydam gövde metni, düz zemin üstünde cam, 3'ten fazla cam katman, sert gölge.
Çıktı: kod + tek paragraf not (kaç cam katman, hangi blur, hangi contrast önlemi).

Style: Glassmorphism (glassmorphism) · family: Surface (8–12)
Token: --bg #1b1035 · --surface rgba(255,255,255,.12) · --ink #ffffff · --accent #7dd3fc · --line rgba(255,255,255,.24)
Radius: 16px / 24px · Typography: Inter / Inter / JetBrains Mono
Required: **Cam arkasında içerik olmalı.** Düz zeminde cam kullanılmaz; zemin 2–3 renk blob taşır. · **Blur + ışık kenarı birlikte.** `blur(var(--blur)) saturate(140%)` + 1px `--line` + inset highlight. · **Katman sayısı sınırlı.** Ekran başına ≤ 3 cam yüzey (mobilde ≤ 2); cam üstü cam yasak.
Banned: Yarı saydam gövde metni, cam üstünde 12px altı yazı. · Düz zemin üstünde cam panel; ışık kenarı olmayan "soluk kart". · Cam üstünde ikinci blur katmanı (çift cam).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="glassmorphism"] {
  --bg: #1b1035; --bg-2: #2a1a5e;
  --surface: rgba(255,255,255,.12); --surface-2: rgba(255,255,255,.07);
  --ink: #ffffff; --ink-soft: rgba(255,255,255,.78); --ink-faint: rgba(255,255,255,.55);
  --accent: #7dd3fc; --accent-ink: #06222e;
  --line: rgba(255,255,255,.24);
  --danger: #ea4031;
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
  --radius: 16px; --radius-lg: 24px;
  --shadow: 0 8px 32px rgba(0,0,0,.22); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
