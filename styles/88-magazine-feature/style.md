# 88 · Magazine Feature

> **In one sentence:** Dergi feature açılışı: Fraunces 64px display, 34px kayma, 0.9s reveal ve tek pin'li pull-quote sahnesi — okunan değil "sayfası çevrilen" bir editoryal yüzey.

| | |
|---|---|
| **Feeling** | gösterişli · editoryal · sinematik · sıcak |
| **Best for** | Marka hikâyesi, dergi feature, sezon kampanyası, vaka çalışması |
| **Avoid** | Yoğun dashboard, hızlı form akışı, düşük bant genişliği olan pazar |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="magazine-feature"]` |
| **Composition** | `sticky` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Magazine Feature bir sayfayı dergi açılışı gibi kurgular: 7/12 tam kanama görsel, üstünde Fraunces 64px/1.04 display, altında 58ch ölçü gövde (Jost 17px/1.66). Kazanılan şey anlatı hissi ve marka sıcaklığı; feda edilen şey bilgi yoğunluğu — ekran başına en fazla 2 fikir.

Derinlik yumuşak tek gölgeden (`0 10px 30px` %12) ve 14px radius'lu görsel kartlarından gelir. Vurgu böğürtlen `#8a2f52`; yalnız pull-quote işareti, birincil buton ve etiket çizgisinde, ekranın ≤%7'si.

Hareket sinematiktir ama tek sahnede kalır: 0.9s `power2.out` giriş, 1.0s scroll reveal, **tek pin** (scrub 0.9, +110%) ile pull-quote sabitlenir. Pin mobilde kapalı, reduced-motion'da statik poster kalır.

### What is not
- `editorial-design` değildir: editorial iki aile ve numaralı bölümlerle dergi ızgarası kurar, pin'i yoktur; burada tek display ailesi, 34px kayma ve 1 pin vardır.
- `luxury-typography` değildir: lüks 58px Cormorant ve 320ms hover ile sakin kalır; burada 64px Fraunces, 320ms hover scale 1.03 ve tam kanama görsel vardır.
- `maximalism` değildir: maximalism katman ve desen yığar; burada ekran başına 1 tam kanama görsel ve 1 pull-quote sınırı vardır.
- `magazine-feature` bir "blog şablonu" değildir: pin sahnesi ve 7/5 asimetrisi olmadan uygulanmaz.

### Where it comes from
Kökeni 1960'ların *Esquire*/*Vogue* feature açılışları ve 2010'ların scroll-driven editoryal siteleridir (NYT Snow Fall sonrası). Bugün marka hikâyesi ve vaka çalışması sayfalarında geri döndü çünkü ürün anlatısı aranıyor. Klişeye düşmemek için korunması gereken detay: tek pin sahnesi ve pull-quote'un gerçekten alıntı olması.

### Recognition test in 3 seconds
1. Display Fraunces 600 64px/1.04, tracking −0.02em; gövde Jost 17px/1.66.
2. Ekran başına 1 tam kanama görsel (7/12) + 1 pull-quote; ikinci büyük görsel yok.
3. Görsel kartlarında 14px radius ve tek yumuşak gölge (`0 10px 30px` %12).
4. Tek vurgu böğürtlen `#8a2f52`, yalnız pull-quote işareti ve birincil CTA'da.
5. Bir pin sahnesi: pull-quote sabitlenir, scrub 0.9; mobilde pin kapalı.

## Visual signature
- Display Fraunces 600 64px / 1.04 / −0.02em (mobil 36px); gövde Jost 17px / 1.66 / 58ch.
- 7/5 asimetri: görsel 7 kolon, metin 5 kolon; ekran başına 1 tam kanama görsel.
- Pull-quote: 28px Fraunces 500, sol 3px accent çizgi, 32px iç boşluk; ekran başına 1.
- Görsel kartı: 14px radius, tek gölge `0 10px 30px rgba(26,22,20,.12)`, üstünde %2 grain.
- Etiket çizgisi: mono 11px, tracking .16em, 1px alt hairline, başlığın 14px üstünde.
- Tek pin sahnesi: scrub 0.9, +110% mesafe, mobilde statik.
- **Typography:** Fraunces (display) + Jost (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#8a2f52`; neutral scale `#faf6f0` → `#1a1614`.
- **Radius:** `2px` / `14px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. Display Fraunces 600 64px/1.04/−0.02em (mobil 36px); gövde Jost 17px/1.66/58ch
2. 7/5 asimetri ve ekran başına 1 tam kanama görsel; ikinci büyük görsel yok
3. Görsel kartı 14px radius + tek yumuşak gölge `0 10px 30px rgba(26,22,20,.12)`
4. Tek vurgu böğürtlen #8a2f52, ekranın ≤%7'si, accent üstü daima --accent-ink
5. Ekran başına en fazla 1 pull-quote (28px Fraunces 500 + 3px accent çizgi)
6. Bölüm arası 104px (mobil 60px), kart içi 30px, radius 2/14px
7. Tek pin sahnesi: scrub 0.9, +110%, mobilde kapalı
8. Grain .02 yalnız fotoğraf üstünde; sayfa zemini düz

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#faf6f0` | page background | as a card background |
| `--bg-2` | `#f0e9df` | partition divider floor, table top | button background |
| `--surface` | `#fffdf9` | kart, input, modal | full-page background |
| `--surface-2` | `#f4eee4` | passive chip, hover background | primary button |
| `--ink` | `#1a1614` | title, body, icon | large background |
| `--ink-soft` | `#4b423d` | secondary text, description | — |
| `--ink-faint` | `#7b716a` | decorative label, separator text | interactive text |
| `--accent` | `#8a2f52` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf3f0` | text above accent | non-accent background |
| `--line` | `rgba(26,22,20,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.69:1** · `ink-soft/bg` **9.09:1** · `ink-faint/bg` **4.42:1 (decorative)** · `accent-ink/accent` **7.38:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 36px (mobile 36px) | 700 | 0.98 | -0.035em |
| H2 | same | 38px | 600 | 1.08 | -0.015em |
| H3 | same | 24px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 17px | 400 | 1.6 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Display 72px, line spacing 0.98; body 16/1.6. There is no midpoint — the jumping between two extremes is intentional.
- Measure: 62ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 12 columns are not visible; The title spans 8 columns, the body remains in 6 columns.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- No shadows and rounding; The only difference is the hairline and space.
- Radius: `2px` (buton, input, chip), `14px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- İkinci display aile, 700/900 ağırlık, 300 ince ağırlık, italik gövde
- Çoklu tam kanama görsel, otomatik carousel, marquee, sürekli döngü
- İkinci vurgu rengi (turuncu/mercan/neon), gradyan zemin, renkli gölge
- İki scrub veya iki ScrollTrigger; pin'in mobilde açık bırakılması
- Saf siyah (#000) zemin, saf beyaz (#fff) metin, filter: invert()
- 16px altı gövde, 58ch üstü ölçü, gövdede uppercase/mono
- Fotoğraf üstüne renkli overlay (yalnız %12 ink scrim)
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.92:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 7/12 tam kanama görsel + 5/12 metin, h1 64px, etiket çizgisi | `shots/01-page.png` |
| Dashboard | düşük | İçerik takvimi: 3 kart, 14px radius, tek gölge | `shots/01-page.png` |
| Form | düşük | 44px input, 2px radius, etiket mono 11px | `shots/01-page.png` |
| Liste / tablo | düşük | 48px satır, 1px hairline, mono tarih | `shots/01-page.png` |
| Boş durum | orta | 28px Fraunces başlık + tek paragraf 58ch | `shots/01-page.png` |
| Onboarding | yüksek | İki adım, her adımda 1 görsel kartı; pin yok | `shots/01-page.png` |
| Pricing | orta | Üç kart, ortadaki accent çizgili; gölge yalnız hover | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 400px, 2px radius, görsel yok | `shots/01-page.png` |
| Modal | orta | 560px, 14px radius, tek gölge, backdrop %45 | `shots/01-page.png` |
| Bildirim / toast | orta | Sağ alt, 44px, ink zemin + bg metin, 2px radius | `shots/01-page.png` |
| Hata | düşük | Fraunces 38px başlık + tek paragraf + ikincil buton | `shots/01-page.png` |
| Profil / ayar | orta | Form 5/12 + görsel 7/12; hairline ayırıcı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.69:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.09:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.42:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.38:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.92:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.6 | ≥ 60 target | thin text |

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
| Sayfa "sonsuz carousel" gibi | Birden fazla tam kanama görsel + otomatik döngü | Ekran başına 1 görsel, döngü yok |
| Pin titriyor | İki ayrı rAF döngüsü veya ikinci ScrollTrigger | Tek saat: tek ScrollTrigger, tek scrub |
| Uzun metin okunmuyor | Ölçü 58ch üstü veya satır aralığı 1.6 altı | 58ch + 1.66 satır aralığı |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `maximalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Fraunces | Fraunces — Google Fonts — soft display serif, 600 ağırlık, −0.02em |
| https://fonts.google.com/specimen/Jost | Jost — Google Fonts — gövde geometrik sans, 17px/1.66 |
| https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | GSAP — ScrollTrigger pin — tek pin sahnesi, scrub ve mobilde kapatma |
| https://www.nytimes.com/projects/2012/snow-fall/ | NYT — Snow Fall — scroll-driven feature anlatısı, tek sahne |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — 4.5:1 gövde / 3:1 büyük metin eşiği |

## AI brief

```text
Stil: Magazine Feature (styles/88-magazine-feature/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="magazine-feature"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Fraunces 600 başlıkta, --font-body Jost gövdede, --font-mono JetBrains Mono etikette.
Yüzey: --bg / --surface / --surface + tek yumuşak gölge; radius 2px/14px; sert gölge yok.
Izgara: 7/5 asimetri, gutter 24px, bölüm ritmi 104px, ekran başına 1 tam kanama görsel.
Hareket: enter 0.9s power2.out 34px / stagger 0.1; scroll top 77% 1.0s 28px once:true;
         pin scrub 0.9 +110% (mobil kapalı); hover 320ms scale 1.03. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (ikinci scrub, çoklu kanama, gradyan, renkli gölge).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Magazine Feature (magazine-feature) · family: Publication & Typography (86–95)
Token: --bg #faf6f0 · --surface #fffdf9 · --ink #1a1614 · --accent #8a2f52 · --line rgba(26,22,20,.14)
Radius: 2px / 14px · Typography: Fraunces / Jost / JetBrains Mono
Required: Display Fraunces 600 64px/1.04/−0.02em (mobil 36px); gövde Jost 17px/1.66/58ch · 7/5 asimetri ve ekran başına 1 tam kanama görsel; ikinci büyük görsel yok · Görsel kartı 14px radius + tek yumuşak gölge `0 10px 30px rgba(26,22,20,.12)`
Banned: İkinci display aile, 700/900 ağırlık, 300 ince ağırlık, italik gövde · Çoklu tam kanama görsel, otomatik carousel, marquee, sürekli döngü · İkinci vurgu rengi (turuncu/mercan/neon), gradyan zemin, renkli gölge
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="magazine-feature"] {
  --bg: #faf6f0; --bg-2: #f0e9df;
  --surface: #fffdf9; --surface-2: #f4eee4;
  --ink: #1a1614; --ink-soft: #4b423d; --ink-faint: #7b716a;
  --accent: #8a2f52; --accent-ink: #fdf3f0;
  --line: rgba(26,22,20,.14);
  --danger: #d92c20;
  --danger-ink: #ffffff;
  --ok: #00833a;
  --ok-ink: #ffffff;
  --warn: #b75500;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 14px;
  --shadow: 0 10px 30px rgba(26,22,20,.12); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
