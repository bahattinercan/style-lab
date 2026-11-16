# 137 · Hologram & Uzamsal Veri

> **In one sentence:** Uzamsal veriyi hacim olarak okutan arayüz: derin lacivert zemin, nokta bulutu yoğunluk haritası, izdüşüm ızgarası ve tek sıcak amber accent.

| | |
|---|---|
| **Feeling** | hacimli, ölçülü, tarayıcı, sakin-teknik |
| **Best for** | 3B tarama/ölçüm paneli, tıbbi görüntüleme (volumetrik), malzeme analizi, dijital ikiz görüntüleyici |
| **Avoid** | vitrin/landing, moda, duygusal hikâye — hacim dili anlatı taşımaz |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="volumetric-data"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Hologram & Uzamsal Veri, arayüzü **veri hacminin görüntüleyicisi** olarak kurar: nokta bulutu yoğunluk haritası (8px nokta, yoğunluk accent opaklığı), izdüşüm ızgarası, kesit (dilim) barı ve her eksende ölçü etiketi (`x 1.24`, `y 0.86`, `z 0.42`, `±0.03`). Süsü feda eder; karşılığında **uzayda nerede ve ne kadar** sorusunun tek bakışta cevabını verir.

Kurucu kararları üç tanedir. Birincisi **hacim gerçek veridir**: nokta yoğunluğu opaklıkla kodlanır, rastgele dağıtılmaz. İkincisi **tek sıcak accent**: amber yalnız yoğunluk/eşik ve aktif dilim için yanar; ikinci parlak renk yoktur. Üçüncüsü **ghost katman yoktur**: her panel tek yüzeydir, ayrım 1px çizgi ve zemin tonudur — holografik "kopya katman" efekti bilinçli olarak yasaktır.

Bedeli: yoğunluk okuma eğrisi. Bu yüzden kesit barı ve eksen etiketleri zorunludur; dekoratif hologram dili tek başına yeterli sayılmaz.

### What is not
- **Holographic Layer (105) değildir** — adaşlık dışında ölçülebilir dört fark vardır:
- **Depth Parallax (99) değildir:** 99 üç düzlemi farklı hızda kaydırır (parallax imza); 137'de parallax yok, pin kapalı, derinlik veri yoğunluğundan okunur.
- **Atlas Console (51) değildir:** 51 harita zeminlidir (coğrafi); 137'de harita yok, hacim/eksen var.
- **Telemetry Grid (46) değildir:** 46 hücreli ölçüm ızgarasıdır (2B tablo); 137 üç eksenli hacim ve kesit dilimi kullanır.

### Where it comes from
Hacim görüntüleme (volume rendering) ve nokta bulutu pratiğinden; tıbbi BT/MR hacim okuma ve endüstriyel 3B tarama arayüzlerinden. Bugün önemli çünkü sensörler 3B veri üretiyor ama paneller hâlâ 2B tablo gösteriyor; kesit + yoğunluk haritası bu boşluğu kapatır. Klişeye dönmemesi için korunacak detay: **her eksenin etiketli ve birimli olması** ve ghost katman yasağı.

### Recognition test in 3 seconds
1. Zemin derin lacivert; üstünde 8px nokta ızgarası ve hacim bölgesinde yoğunlaşan nokta bulutu var.
2. Kesit barı (0–100%) ve aktif dilim yazılı; altında `x · y · z` etiketleri duruyor.
3. Tek sıcak accent ambar; ikinci parlak renk yok.
4. Hiçbir panelin arkasında ghost/kopya katman yok; gölge yalnız yüzen okuma panelinde.
5. Etiketler mono büyük harf `.14em`; değerler tabular.

## Visual signature
- **Nokta bulutu:** 7px nokta + 28px izdüşüm ızgarası (accent %42 nokta, ızgara %18).
- **Kesit barı:** 0–100% tek bar; aktif dilim `%42` mono etiketle yazılır.
- **Eksen etiketi:** `x 1.24 · y 0.86 · z 0.42` + tolerans `±0.03`; 10px mono `.14em`.
- **İzo-eğri:** eşik değerinde 1px accent çizgi; dolgu yok.
- **Zemin katmanları:** `bg → bg-2 → surface → surface-2` arasında 4 puan parlaklık farkı.
- **Ghost yasağı:** ofset kopya, blur ve cam yok.
- **Hareket imzası:** 960ms `cubic-bezier(.24,.02,.18,1)`, 38px — hacim "oturur", süzülmez.
- **Typography:** IBM Plex Mono (display) + Jost (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#ffb347`; neutral scale `#0a1428` → `#e6eef8`.
- **Radius:** `4px` / `10px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Nokta bulutu yoğunluk haritası imza öğedir: 8px nokta ızgarası, yoğunluk accent opaklığıyla okunur
2. Her projeksiyon eksen etiketlidir: `x 1.24`, `y 0.86`, `z 0.42`, tolerans `±0.03`
3. Tek sıcak accent (amber); ikinci parlak renk ve mor holografik ton yok
4. Ghost/offset katman yok: her panel tek yüzey, ayrım 1px line
5. Kesit (dilim) göstergesi zorunlu: 0–100% arası tek bar, aktif dilim yazılı
6. Radius 4px kontrol / 10px panel; hap köşe yok

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0a1428` | page background | as a card background |
| `--bg-2` | `#0e1a32` | partition divider floor, table top | button background |
| `--surface` | `#122240` | kart, input, modal | full-page background |
| `--surface-2` | `#17294a` | passive chip, hover background | primary button |
| `--ink` | `#e6eef8` | title, body, icon | large background |
| `--ink-soft` | `#a6b8cf` | secondary text, description | — |
| `--ink-faint` | `#6f819a` | decorative label, separator text | interactive text |
| `--accent` | `#ffb347` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#2a1500` | text above accent | non-accent background |
| `--line` | `rgba(230,238,248,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.7:1** · `ink-soft/bg` **9.08:1** · `ink-faint/bg` **4.62:1 (decorative)** · `accent-ink/accent` **9.78:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (IBM Plex Mono) | 40px (mobile 26px) | 500 | 1.06 | -0.02em |
| H2 | same | 28px | 600 | 1.18 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

- Display 54px; technical labels mono and wide tracking. Body 15px, size 62ch.
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

- The grid is slightly visible as an auxiliary line (accent 8%); section spacing 56px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- The surfaces are separated by a thin accent edge; 1px signal line instead of shadow.
- Radius: `4px` (buton, input, chip), `10px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Michroma/geniş display ve mor holografik zemin (105 ile örtüşür).
- Ghost kopya katman, 12/24px ofset kopya, cam/blur.
- Parallax ve pin-scrub (bu stilde pin kapalı).
- Süs amaçlı nokta bulutu (her nokta yoğunluk değeri taşır).
- Fotoğraf, 3B render, renkli glow.
- Renk-only eşik bildirimi (etiket yazılır).
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 4px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 4px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 4px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.31:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | solda H1 + eksen etiketleri, sağda hacim görseli | `shots/01-page.png` |
| Dashboard | **yüksek** | 8/4: hacim + okuma paneli; kesit barı üstte | `shots/01-page.png` |
| Form | düşük | 40px mono input; değer + tolerans alanları | `shots/01-page.png` |
| Liste / tablo | orta | 36px satır, tabular ölçü, eksen kolonu | `shots/01-page.png` |
| Boş durum | orta | boş hacim: soluk nokta ızgarası + "tarama yok" mono | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: tara → dilim seç → eşik belirle | `shots/01-page.png` |
| Pricing | orta | plan tablosu; hacim limiti mono | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | hacim yok; tek accent, sade form | `shots/01-page.png` |
| Modal | orta | okuma paneli: x/y/z + tolerans + yoğunluk | `shots/01-page.png` |
| Bildirim / toast | orta | sağ-alt, 6px accent nokta | `shots/01-page.png` |
| Hata | orta | eşik aşımı: `--danger` izo-eğri + etiket | `shots/01-page.png` |
| Profil / ayar | orta | birim/tolerans ayarları, mono | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.7:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.08:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.62:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.78:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.31:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 95.3 | ≥ 60 target | thin text |

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
| "Hologram dekoru" gibi | ghost katman eklenmiş | tek yüzey panel + nokta bulutu verisi |
| 105 ile karışıyor | mor zemin + Michroma | lacivert zemin + IBM Plex Mono |
| Yoğunluk okunmuyor | nokta opaklığı sabit | accent opaklığını yoğunluğa bağla |
| Eksen kayboluyor | 10px altı / `--ink-faint` | 10–11px ve `--ink-soft` |
| Kesit barı belirsiz | aktif dilim yazılmamış | `%42 · KATMAN 3` etiketi |
| Göz yorulması | 6px altı nokta ızgarası | zemin 8px, veri 7px |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `depth-parallax` | Same level of seriousness; accent sharing is not allowed |
| garnish | `atlas-console` | Same level of seriousness; accent sharing is not allowed |
| garnish | `telemetry-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `scrapbook` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Volume_rendering | Volume rendering — yoğunluk haritası ve izo-yüzey |
| https://en.wikipedia.org/wiki/Point_cloud | Point cloud — nokta bulutu ve eksen etiketleri |
| https://en.wikipedia.org/wiki/Isosurface | Isosurface — izo-eğri ve eşik değeri |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — nokta/çizgi kontrastı |

## AI brief

```text
Stil: Hologram & Uzamsal Veri (styles/137-volumetric-data/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="volumetric-data"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg derin lacivert + 8px nokta ızgarası; hacim bölgesinde 7px yoğunluk noktaları (accent opaklık).
Tipografi: --font-display IBM Plex Mono 40/28/20 (600); --font-body Jost 16px/1.60;
  --font-mono Share Tech Mono 10–11px eksen etiketi (.14em, uppercase, birim zorunlu).
Yüzey: --bg / --surface (1px var(--line), gölge yok) / yüzen okuma paneli + 0 10px 30px. Radius 4px / 10px.
Renk: tek sıcak accent amber #ffb347; ink/bg 15.70:1, ink-soft/bg 9.08:1, accent-ink/accent 9.78:1, ink-faint/bg 4.62:1.
İmza: nokta bulutu yoğunluk haritası + izdüşüm ızgarası + kesit barı (0–100%) + `x · y · z ±tol`.
YASAK: ghost/offset katman, cam/blur, Michroma, mor zemin, pin/parallax (105 ile örtüşmemek için).
Hareket: enter 960ms cubic-bezier(.24,.02,.18,1) 38px stagger .098; scroll top 63% 890ms 31px once;
  pin KAPALI; hover 430ms görsel 1.029. prefers-reduced-motion zorunlu.
Çıktı: bileşen kodu + tek paragraf not (nokta bulutunu ve kesit barını nereye koydun).

Style: Hologram & Uzamsal Veri (volumetric-data) · family: Experimental & Future (136–145)
Token: --bg #0a1428 · --surface #122240 · --ink #e6eef8 · --accent #ffb347 · --line rgba(230,238,248,.16)
Radius: 4px / 10px · Typography: IBM Plex Mono / Jost / Share Tech Mono
Required: Nokta bulutu yoğunluk haritası imza öğedir: 8px nokta ızgarası, yoğunluk accent opaklığıyla okunur · Her projeksiyon eksen etiketlidir: `x 1.24`, `y 0.86`, `z 0.42`, tolerans `±0.03` · Tek sıcak accent (amber); ikinci parlak renk ve mor holografik ton yok
Banned: Michroma/geniş display ve mor holografik zemin (105 ile örtüşür). · Ghost kopya katman, 12/24px ofset kopya, cam/blur. · Parallax ve pin-scrub (bu stilde pin kapalı).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="volumetric-data"] {
  --bg: #0a1428; --bg-2: #0e1a32;
  --surface: #122240; --surface-2: #17294a;
  --ink: #e6eef8; --ink-soft: #a6b8cf; --ink-faint: #6f819a;
  --accent: #ffb347; --accent-ink: #2a1500;
  --line: rgba(230,238,248,.16);
  --danger: #e83e2e;
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
  --radius: 4px; --radius-lg: 10px;
  --shadow: 0 10px 30px rgba(3,10,22,.55); --shadow-hard: none;
  --font-display: "IBM Plex Mono", ui-monospace, monospace;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .03em; --blur: 0px; --grain: 0;
}
```
