# 31 · Scrapbook

> **In one sentence:** Scrapbook

| | |
|---|---|
| **Feeling** | kişisel, samimi, nostaljik, "bellek defteri" |
| **Best for** | günlük/anı uygulaması, moodboard, etkinlik daveti, kişisel portfolyo |
| **Avoid** | kurumsal panel, ödeme, sağlık verisi, yoğun tablo |
| **Difficulty** | orta (dağınıklık kontrolü) · **Accessibility** |  |
| **Family** | Art (28–34) · **Token** | `kit/tokens.css` → `[data-style="scrapbook"]` |
| **Composition** | `type` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Scrapbook, fiziksel anı defterinin mantığı: **bant şeritleri**, **polaroid çerçeve**, **el yazısı başlık** (Caveat), **hafif eğik kartlar** (≤1.2°), kâğıt dokusu (grain .08) ve kırmızı damga accent. Kompozisyon bilinçli olarak "elle yapıştırılmış" hissi verir.

Kazandığı şey: samimiyet ve hatırlanma. Feda ettiği şey: kurumsal netlik; eğiklik ve doku artarsa okunurluk düşer.

### What is not
- **Wabi-Sabi değildir.** Wabi-sabi kusur/eksiklik; scrapbook **dolu ve neşeli**.
- **Bohemian değildir.** Bohemian desen/doku; scrapbook **yapıştırma katmanları**.
- **"Eğik kart" değildir.** Bant + polaroid + el yazısı olmadan sadece eğri durur.
- **Kaos tasarımı değildir.** Katmanlar hizalı bir iskelet üstünde.

### Where it comes from
Analog fotoğraf albümleri, bullet journal ve moodboard kültürü; kişisel ürünlerde (günlük, anı) kullanılıyor.

### Recognition test in 3 seconds
1. Bant şeridi (masking tape) var mı?
2. Polaroid/çerçeveli fotoğraf bloğu var mı?
3. El yazısı başlık mı (Caveat)?
4. Kartlar ≤1.2° eğik mi?
5. Kâğıt dokusu (grain .08) görünüyor mu?

## Visual signature
- **Bant:** 90×22px, `rgba(255,246,214,.9)`, -3° eğik.
- **Polaroid:** beyaz çerçeve + alt etiket alanı, -1.2°.
- **El yazısı:** Caveat 700, 34–44px.
- **Blok gölge:** `6px 6px 0 rgba(31,43,58,.12)` (yapıştırılmış hissi).
- **Kâğıt grain .08** + hafif çizgili zemin.
- **Damga accent:** kırmızı, 5° eğik küçük etiket.
- **Typography:** Caveat (display) + Inter (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#c63d2f`; neutral scale `#f7f1e4` → `#1f2b3a`.
- **Radius:** `3px` / `8px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Eğiklik sınırı:** en fazla 1.2°; ekran başına ≤ 3 eğik öğe, metin blokları düz.
2. **Bant kuralı:** bant yalnız görsel/kart köşesinde; metnin üstünde yok.
3. **El yazısı 2 yerde:** ana başlık + kısa not; gövde Inter.
4. **Polaroid:** 12px alt boşluk (etiket alanı), 3px beyaz çerçeve.
5. **Accent üstü krem** (5.02:1); damga/kırmızı buton.
6. **Okunurluk:** gövde 16px/1.65, 58ch; doku metnin arkasında.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f1e4` | page background | as a card background |
| `--bg-2` | `#efe6d2` | partition divider floor, table top | button background |
| `--surface` | `#fffdf7` | kart, input, modal | full-page background |
| `--surface-2` | `#fdf3dc` | passive chip, hover background | primary button |
| `--ink` | `#1f2b3a` | title, body, icon | large background |
| `--ink-soft` | `#4e5a68` | secondary text, description | — |
| `--ink-faint` | `#848c97` | decorative label, separator text | interactive text |
| `--accent` | `#c63d2f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fffdf7` | text above accent | non-accent background |
| `--line` | `rgba(31,43,58,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **12.74:1** · `ink-soft/bg` **6.25:1** · `ink-faint/bg` **3.02:1 (decorative)** · `accent-ink/accent` **5.02:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Caveat) | 40px (mobile 28px) | 400 | 1.04 | -0.02em |
| H2 | same | 28px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- The title is large-scale and tightly spaced; body 17px, size 68ch. Label mono and uppercase.
- Measure: 68ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Wide margin (56px), asymmetric 7/5 column. Section titles remain in the left column.
- Section vertical space 84px desktop, 48px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- There is no shadow; distinction by hairline and ground tone. Images are in full-edge or 4:3 frame.
- Radius: `3px` (buton, input, chip), `8px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- 3° üzeri eğiklik, 4+ eğik öğe.
- Dönen metin blokları.
- 3+ farklı renk (kırmızı, krem, lacivert yeter).
- Doku yoğunluğu > .08.
- Modern gölge (blur) tek başına — hafif gölge + blok gölge birlikte.
- Yoğun tabloda bant/polaroid.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 3px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 3px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 3px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 3px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 3px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 3px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 3px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.02:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing/hero | yüksek | El yazısı başlık, polaroid + bant, tek kırmızı buton | `shots/01-page.png` |
| Dashboard | çok düşük | Bant/polaroid kapanır; kart + Inter başlık | `shots/01-page.png` |
| Form | düşük | 460px, kâğıt kenar, düz | `shots/01-page.png` |
| Liste/tablo | çok düşük | Düz tablo, eğiklik yok | `shots/01-page.png` |
| Boş durum | yüksek | Boş polaroid + el yazısı not | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 polaroid | `shots/01-page.png` |
| Pricing | orta | 3 kart, orta kart damga | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Süs kapanır, düz form | `shots/01-page.png` |
| Modal | orta | Blok gölgeli kart | `shots/01-page.png` |
| Toast | orta | Koyu bar + krem | `shots/01-page.png` |
| Hata | düşük | Kırmızı alt çizgi + 15px | `shots/01-page.png` |
| Profil/ayar | orta | Anı kartı listesi, eğiklik ≤1° | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 12.74:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.25:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.02:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.02:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.02:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93 | ≥ 60 target | thin text |

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
| Dağınık | 4+ eğik öğe, 3+ bant | Eğik ≤3, bant 1–2 |
| Okunmuyor | Dönen metin | Metin düz, eğiklik görselde |
| "Kötü tasarım" | İskelet yok | Hizalı grid + sınırlı eğiklik |
| Karakter kaybı | Bant/polaroid yok | 1 bant + 1 polaroid |
| Mobilde taşma | Bant görselden taşıyor | `overflow: visible` + padding |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bohemian` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `cybercore` | Two different ornamental languages compete on the same screen |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.pinterest.com | Pinterest — Scrapbook/moodboard örnekleri |
| https://fonts.google.com/specimen/Caveat | Caveat — El yazısı |
| https://mobbin.com | Mobbin — Günlük/anı uygulamaları |

## AI brief

```text
Stil: Scrapbook (styles/31-scrapbook/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="scrapbook"]; hard-coded renk YASAK.
Katmanlar: bant (90×22px, -3°), polaroid (3px beyaz çerçeve + alt etiket), hafif gölge + 6px blok gölge.
Eğiklik: ≤ 1.2°, ekran başına ≤ 3 eğik öğe; METİN BLOKLARI DÜZ.
Tipografi: Caveat 700 başlık/not (≥24px) + Inter gövde 16/1.65; etiket Courier Prime 10.
Renk: kâğıt #f7f1e4 + kırmızı #c63d2f (üstünde krem, 5.02:1); 3+ renk yok.
Doku: grain .08 + hafif çizgiler; doku metnin arkasında.
Hareket: 120–320ms ease-out; reduced-motion'da eğiklik statik.
Yasak: dönen metin, 3°+ eğiklik, 4+ renk, modern blur gölge tek başına.
Çıktı: kod + tek paragraf not (kaç katman, hangi eğiklik).

Style: Scrapbook (scrapbook) · family: Art (28–34)
Token: --bg #f7f1e4 · --surface #fffdf7 · --ink #1f2b3a · --accent #c63d2f · --line rgba(31,43,58,.18)
Radius: 3px / 8px · Typography: Caveat / Inter / Courier Prime
Required: **Eğiklik sınırı:** en fazla 1.2°; ekran başına ≤ 3 eğik öğe, metin blokları düz. · **Bant kuralı:** bant yalnız görsel/kart köşesinde; metnin üstünde yok. · **El yazısı 2 yerde:** ana başlık + kısa not; gövde Inter.
Banned: 3° üzeri eğiklik, 4+ eğik öğe. · Dönen metin blokları. · 3+ farklı renk (kırmızı, krem, lacivert yeter).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="scrapbook"] {
  --bg: #f7f1e4; --bg-2: #efe6d2;
  --surface: #fffdf7; --surface-2: #fdf3dc;
  --ink: #1f2b3a; --ink-soft: #4e5a68; --ink-faint: #848c97;
  --accent: #c63d2f; --accent-ink: #fffdf7;
  --line: rgba(31,43,58,.18);
  --danger: #d5271b;
  --danger-ink: #ffffff;
  --ok: #008037;
  --ok-ink: #ffffff;
  --warn: #b35200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 3px; --radius-lg: 8px;
  --shadow: 0 2px 6px rgba(31,43,58,.18); --shadow-hard: none;
  --font-display: "Caveat", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
