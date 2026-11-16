# 32 · Conceptual Sketch

> **In one sentence:** Conceptual Sketch

| | |
|---|---|
| **Feeling** | samimi, süreç odaklı, "henüz bitmemiş", şeffaf |
| **Best for** | prototip/fikir ürünü, ajans süreci, tasarım sistemleri, eğitim |
| **Avoid** | premium lüks, finans güveni, final ürün vitrini |
| **Difficulty** | orta (dağınıklık) · **Accessibility** |  |
| **Family** | Art (28–34) · **Token** | `kit/tokens.css` → `[data-style="conceptual-sketch"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Conceptual sketch, wireframe/sketch dilini son ürün diline taşır: **kesikli çerçeve**, **el yazısı display** (Architects Daughter), **kâğıt çizgileri**, oklar ve açıklama notları. Her öğe "çizilmiş" gibi durur; süreç şeffaflaşır.

Kazandığı şey: samimiyet ve süreç anlatımı. Feda ettiği şey: bitmişlik hissi — bu stil **bilinçli olarak "taslak"** görünür.

### What is not
- **Scrapbook değildir.** Scrapbook polaroid/bant; sketch **çizgi ve wireframe**.
- **Wabi-Sabi değildir.** Wabi-sabi ahşap/kâğıt doku; sketch **teknik çizim**.
- **"El yazısı font" değildir.** Kesikli kutu + çizgi + ok olmadan sadece font değişir.
- **Bitmemiş ürün değildir.** Kasıtlı eskiz, net hiyerarşiyle.

### Where it comes from
Ajans süreç sunumları, whiteboard kültürü, design-system dokümantasyonu.

### Recognition test in 3 seconds
1. Çerçeveler **kesikli** mi (dashed)?
2. Display el yazısı mı (Architects Daughter)?
3. Kâğıt çizgileri / ızgara var mı?
4. Ok, numara veya not etiketi var mı?
5. Blok gölge 2px ofset (blursuz) mi?

## Visual signature
- **Kesikli çerçeve:** `1.5px dashed rgba(42,42,42,.35)`.
- **El yazısı başlık:** Architects Daughter 400, 40px.
- **Kâğıt ızgara:** 32px çizgiler (yatay), %5.
- **Not etiketi:** numara + ok (`→`, `↳`), mono 11px.
- **Blok gölge:** 2px ofset.
- **Grain .02** (hafif kâğıt).
- **Typography:** Architects Daughter (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#2b5fad`; neutral scale `#fcfbf7` → `#2a2a2a`.
- **Radius:** `2px` / `6px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Kesikli çerçeve:** `1.5px dashed` panel; buton/input tam çizgi.
2. **El yazısı yalnız başlık/notta**; gövde Inter (okunurluk).
3. **Kâğıt çizgileri:** 32px aralık, %5 opaklık; metnin arkasında.
4. **Not/ok bütçesi:** ekran başına ≤ 3 açıklama (ok, numara, etiket).
5. **Blok gölge:** `2px 2px 0 rgba(42,42,42,.18)`; blur yok.
6. **Kontrast:** gövde `--ink` (13.86:1); kesikli çizgi dekoratif.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fcfbf7` | page background | as a card background |
| `--bg-2` | `#f2f0e8` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f6f0` | passive chip, hover background | primary button |
| `--ink` | `#2a2a2a` | title, body, icon | large background |
| `--ink-soft` | `#5c5c5c` | secondary text, description | — |
| `--ink-faint` | `#8f8f8f` | decorative label, separator text | interactive text |
| `--accent` | `#2b5fad` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `#2a2a2a` | all borders | text colour |

- Measured contrast: `ink/bg` **13.86:1** · `ink-soft/bg` **6.46:1** · `ink-faint/bg` **3.12:1 (decorative)** · `accent-ink/accent` **6.28:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Architects Daughter) | 40px (mobile 26px) | 400 | 1.04 | -0.02em |
| H2 | same | 24px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Gradient, blur, cam, yumuşak gölge.
- El yazısı gövde metninde (uzun paragraf).
- 4+ not/ok (gürültü).
- Doygun renk (tek mavi accent yeter).
- Kesikli çizgiyi ölçü/kenarlık olarak kullanmak (dekoratif).
- Yoğun tabloda kesikli çerçeve.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 2px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 2px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 2px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 2px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 2px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 2px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 2px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.28:1 (≥ 3 on background/surface).
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
| Landing/hero | yüksek | El yazısı başlık, kesikli panel, 2 not etiketi | `shots/01-page.png` |
| Dashboard | düşük | Kesikli çerçeve kapanır; düz tablo | `shots/01-page.png` |
| Form | orta | Kesikli input alt çizgisi, tek buton | `shots/01-page.png` |
| Liste/tablo | düşük | Düz satırlar, ince ayırıcı | `shots/01-page.png` |
| Boş durum | yüksek | Boş kesikli kutu + "buraya sürükle" notu | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 çizim + numara | `shots/01-page.png` |
| Pricing | orta | 3 kesikli kart, orta kart tam çizgi | `shots/01-page.png` |
| Giriş/ödeme | düşük | Tam çizgi, sade | `shots/01-page.png` |
| Modal | orta | Tam çerçeve + ofset | `shots/01-page.png` |
| Toast | düşük | Koyu bar | `shots/01-page.png` |
| Hata | orta | Kırmızı kesikli çerçeve + not | `shots/01-page.png` |
| Profil/ayar | düşük | Düz liste | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.86:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.46:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.12:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.28:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.28:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.7 | ≥ 60 target | thin text |

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
| "Bitmemiş ürün" | Her şey kesikli | Kritik kenarlar tam çizgi |
| Dağınık | 4+ ok/not | Not ≤ 3 |
| Okunmuyor | El yazısı gövdede | Gövde Inter |
| Karakter kaybı | Kâğıt ızgarası yok | 32px ızgara %5 |
| Lüks algısı kaybı | Bu stil lüks için değil | Başka stil seç |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `cybercore` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |
| Mixing | `liquid-glass` | Two different ornamental languages compete on the same screen |
| Mixing | `skeuomorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Architects+Daughter | Architects Daughter — El yazısı display |
| https://excalidraw.com | Excalidraw — Wireframe dili |
| https://mobbin.com | Mobbin — Süreç/onboarding örnekleri |

## AI brief

```text
Stil: Conceptual Sketch (styles/32-conceptual-sketch/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="conceptual-sketch"]; hard-coded renk YASAK.
Çizgi dili: panel/kart 1.5px dashed; buton/input ve kritik kenarlar TAM çizgi.
Tipografi: Architects Daughter başlık/not (≥20px) + Inter gövde 16/1.6; etiket mono 11.
Kâğıt: 32px yatay çizgiler %5 + grain .02; metnin arkasında.
Not bütçesi: ekran başına ≤ 3 (ok, numara, etiket). Blok gölge 2px blur'suz.
Hareket: 100–300ms ease-out; stroke çizilme tek atım.
Yasak: gradient/blur/cam, el yazısı gövde, 4+ not, yoğun tabloda kesikli çerçeve.
Çıktı: kod + tek paragraf not (kesikli/tam çizgi ayrımını nasıl kurdun).

Style: Conceptual Sketch (conceptual-sketch) · family: Art (28–34)
Token: --bg #fcfbf7 · --surface #ffffff · --ink #2a2a2a · --accent #2b5fad · --line #2a2a2a
Radius: 2px / 6px · Typography: Architects Daughter / Inter / IBM Plex Mono
Required: **Kesikli çerçeve:** `1.5px dashed` panel; buton/input tam çizgi. · **El yazısı yalnız başlık/notta**; gövde Inter (okunurluk). · **Kâğıt çizgileri:** 32px aralık, %5 opaklık; metnin arkasında.
Banned: Gradient, blur, cam, yumuşak gölge. · El yazısı gövde metninde (uzun paragraf). · 4+ not/ok (gürültü).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="conceptual-sketch"] {
  --bg: #fcfbf7; --bg-2: #f2f0e8;
  --surface: #ffffff; --surface-2: #f7f6f0;
  --ink: #2a2a2a; --ink-soft: #5c5c5c; --ink-faint: #8f8f8f;
  --accent: #2b5fad; --accent-ink: #ffffff;
  --line: #2a2a2a;
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00863d;
  --ok-ink: #ffffff;
  --warn: #ba5800;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 6px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Architects Daughter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
