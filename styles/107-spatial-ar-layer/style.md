# 107 · Uzamsal AR Katman

> **In one sentence:** Ekranı üç derinlik düzlemine bölen stil: perspektif ızgara zemin, çapa artılı yüzen katmanlar, mono koordinat etiketleri ve kapatılabilir pin-scrub paralaks.

| | |
|---|---|
| **Feeling** | uzamsal, teknik, katmanlı, keşifçi |
| **Best for** | AR/uzamsal ürün paneli, dijital ikiz (digital twin), saha konumlandırma, 3B veri görüntüleyici |
| **Avoid** | yoğun metin okuma ekranı, moda vitrini — perspektif ızgara uzun okumada yorar |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="spatial-ar-layer"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Uzamsal AR Katman, arayüzü **konumlandırılmış düzlemler** olarak kurar: arka (z=0, gölgesiz, ızgara zemin), orta (z=1, `0 8px 20px`), ön (z=2, `0 18px 40px`). Her yüzen katman sol üstte çapa artısı (`+`) ve mono koordinat etiketi taşır. Düz ekran konforunu feda eder; karşılığında **nesnenin nerede olduğunu** okutan bir dil kazanır.

Kurucu kararları üç tanedir. Birincisi **üç düzlem kuralı**: gölge yüksekliği = z değeri; dördüncü gölge seviyesi yok. İkincisi **ızgara referanstır**: 40px zemin ızgarası ve 28px sahne ızgarası konum taşır, süs değildir. Üçüncüsü **paralaks kapatılabilir**: pin+scrub ekran başına 1, `prefers-reduced-motion` ile tamamen kapanır.

Bedeli: bilişsel yük. Uzun metin, form ve ödeme ekranlarında düzlem sayısı bire indirilir (yalnız z=1 kart).

### What is not
- **AI-native Mesh (39) değildir:** 39 gradyan/ışıma ile atmosfer kurar; 107'de gradyan yok, gölge yüksekliği ve çapa artısı imzadır.
- **Atlas Console (51) değildir:** 51 harita zeminini kullanır (coğrafi veri); 107'de harita yok, perspektif ızgara ve z etiketleri var.
- **Glassmorphism (08) değildir:** 08 camı her yüzeye uygular; 107'de cam yalnız nav (%72 + 6px blur), gerisi opak.
- **Blueprint Çizimi (56) değildir:** 56 ölçü paftasıdır ve koyu cyanotype zemin kullanır; 107 açık zemin + katman derinliği.

### Where it comes from
Uzamsal bilişim literatüründen (spatial computing: konum, çapa, derinlik) ve heads-up display (HUD) pratiğinden. Bugün geri dönüyor çünkü AR/VR ürünleri 2B ekranda da "uzam" anlatmak zorunda; klişeye dönmemesi için korunacak detay **gölge yüksekliğinin z ile birebir eşleşmesi** ve çapa işaretinin her yüzen katmanda bulunması.

### Recognition test in 3 seconds
1. Zeminde 40px perspektif ızgara var; kartlar bu ızgaraya hizalı.
2. Her yüzen kartın sol üstünde `+` çapa işareti ve mono koordinat etiketi duruyor.
3. Üç farklı gölge yüksekliği seçilebiliyor (gölgesiz / orta / ön).
4. Nav yarı saydam: altındaki ızgara hafif bulanık görünüyor.
5. Etiketler mono büyük harf, `.14em` tracking; radius 12/20px, hap buton yok.

## Visual signature
- **Perspektif ızgara:** gövdede iki `linear-gradient` (40px aralık, ink %6); sahne kartında 28px accent %22 ızgara.
- **Çapa artısı:** yüzen katman `::before` = `+` mono, accent, 12px, sol üst 6/8px.
- **Üç gölge yüksekliği:** z=0 gölgesiz, z=1 `0 8px 20px ink %12`, z=2 `0 18px 40px ink %14`.
- **Koordinat etiketi:** `x 1.24 · y 0.86 · z 0.42` biçiminde 10px mono, kart altbilgisinde.
- **Cam yalnız nav:** `surface %72` + blur 6px; opak fallback zorunlu.
- **Radius disiplini:** 12px kontrol / 20px katman; hap buton yok.
- **Hareket imzası:** 860ms `cubic-bezier(.16,.9,.24,1)`, 25px — katman "oturur", sıçramaz.
- **Landing hero (QA):** üç yüzen AR katmanı (`rotateY` perspektif), `+` çapa işareti ve koordinat altbilgisi.
- **Typography:** Chakra Petch (display) + Jost (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#2a4bd7`; neutral scale `#e9edf5` → `#161a24`.
- **Radius:** `12px` / `20px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Üç derinlik düzlemi zorunlu: arka (z=0, gölgesiz), orta (z=1, 0 8px 20px), ön (z=2, 0 18px 40px)
2. Her yüzen katman çapa artısı ve koordinat etiketi taşır (x, y, z)
3. Perspektif ızgara zeminin parçası; süs değil, konumlandırma referansı
4. Radius 12px kontrol / 20px katman; hap buton yok
5. Cam yalnız nav: blur var(--blur)=6px, opaklık %72, opak fallback zorunlu
6. Parallax yalnız pin+scrub ile (ekran başına 1) ve kapatılabilir

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#e9edf5` | page background | as a card background |
| `--bg-2` | `#dfe5f0` | partition divider floor, table top | button background |
| `--surface` | `#f7f9fc` | kart, input, modal | full-page background |
| `--surface-2` | `#eef2f9` | passive chip, hover background | primary button |
| `--ink` | `#161a24` | title, body, icon | large background |
| `--ink-soft` | `#4a5364` | secondary text, description | — |
| `--ink-faint` | `#78818f` | decorative label, separator text | interactive text |
| `--accent` | `#2a4bd7` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(22,26,36,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.82:1** · `ink-soft/bg` **6.6:1** · `ink-faint/bg` **3.35:1 (decorative)** · `accent-ink/accent` **6.8:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 44px (mobile 28px) | 600 | 1.12 | -0.02em |
| H2 | same | 30px | 600 | 1.22 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

- Dense display: 14px body, 13px table, 10.5px mono label. The line height cannot be lower than 1.55.
- Measure: 72ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 columns of content + 4 columns of panels; tables full width. In-card padding 16px, line 40px.
- Section vertical space 44px desktop, 28px mobile; card padding 16px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are smooth; separation with 1px edge and background tone. Reference line in graphs --line.
- Radius: `12px` (buton, input, chip), `20px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Serif display ve dekoratif illüstrasyon.
- Renkli glow / neon kenar.
- Kalın 3px+ çerçeve, hap buton.
- Kullanıcının kapatamadığı sürekli parallax.
- Opak fallback olmadan cam katman.
- Konum taşımayan süs ızgarası.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 12px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 12px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 12px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 12px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 12px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 12px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 12px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.45:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: solda metin (z=0), sağda üç katmanlı sahne | `shots/01-page.png` |
| Dashboard | orta | 4 KPI z=1, tek ön katman (z=2) detay paneli | `shots/01-page.png` |
| Form | düşük | tek z=1 kart; ızgara arka planda %50 opaklık | `shots/01-page.png` |
| Liste / tablo | düşük | 40px satır, seçili satır z=2 gölge | `shots/01-page.png` |
| Boş durum | orta | z=0 ızgara + "çapa bekleniyor" mono etiketi | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: tarama → çapa yerleştir → katman ekle | `shots/01-page.png` |
| Pricing | orta | iki plan kartı z=1; öne çıkan kart z=2 | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek düzlem, ızgara yok; süs sıfır | `shots/01-page.png` |
| Modal | orta | z=2 + koordinat etiketi + accent çerçeve | `shots/01-page.png` |
| Bildirim / toast | orta | sağ üst, z=2, accent çapa noktası | `shots/01-page.png` |
| Hata | düşük | çapa `--danger`, gölge korunur | `shots/01-page.png` |
| Profil / ayar | orta | iki kolon z=1 kart; koordinat etiketleri | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.82:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.6:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.35:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.8:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.45:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.4 | ≥ 60 target | thin text |

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
| "Düz kartlar" hissi | tüm katmanlar aynı gölge | z=0/1/2 gölge yüksekliklerini ayır |
| Izgara gürültü | ızgara %10 üstü veya 20px altı aralık | %6 ve 40px kullan |
| Baş dönmesi | parallax kapatılamıyor | pin+scrub tek, `prefers-reduced-motion` desteği |
| Cam okunmuyor | opaklık %60 altı | %72 + blur 6px, opak fallback |
| Katmanlar üst üste | boşluk 8px altı | katman arası ≥16px |
| Mobilde karmaşa | z=2 korunmuş | 768 altı tek düzlem |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `ai-native-mesh` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| garnish | `atlas-console` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `scrapbook` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Spatial_computing | Spatial computing — katman ve konum modeli |
| https://developer.apple.com/design/human-interface-guidelines/spatial-layout | Apple visionOS · spatial layout — derinlik ve ölçek kuralları |
| https://www.w3.org/TR/webxr/ | WebXR Device API — uzamsal çapa ve oturum durumları |
| https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html | WCAG 2.2 · Motion Actuation — hareketle tetiklenen kontrol sınırı |

## AI brief

```text
Stil: Uzamsal AR Katman (styles/107-spatial-ar-layer/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="spatial-ar-layer"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg + 40px perspektif ızgara (iki linear-gradient, ink %6); sahne kartında 28px accent %22 ızgara.
Tipografi: --font-display Chakra Petch 44/30/21 (600, .01em); --font-body Jost 16px/1.60;
  --font-mono Share Tech Mono 10px koordinat etiketi (.14em, uppercase).
Yüzey: z=0 gölgesiz / z=1 0 8px 20px ink %12 / z=2 var(--shadow) 0 18px 40px ink %14.
  Radius 12px kontrol, 20px katman; hap buton yok. Cam yalnız nav (surface %72 + blur 6px, opak fallback).
Renk: tek accent #2a4bd7 (çapa mavisi). ink/bg 14.82:1, ink-soft/bg 6.60:1, accent-ink/accent 6.80:1, ink-faint/bg 3.35:1.
İmza: çapa artısı (+) sol üstte + `x · y · z` koordinat etiketi altta.
Hareket: enter 860ms cubic-bezier(.16,.9,.24,1) 25px stagger .088; scroll top 73% 810ms 28px once;
  pin scrub 0.42 (+105%, ekran başına 1); hover 285ms görsel 1.008. prefers-reduced-motion zorunlu.
Yasak: serif, renkli glow, kalın çerçeve, hap buton, kapatılamayan parallax, süs ızgarası.
Çıktı: bileşen kodu + tek paragraf not (çapa ve z etiketini nereye koydun).

Style: Uzamsal AR Katman (spatial-ar-layer) · family: Interactive (106–115)
Token: --bg #e9edf5 · --surface #f7f9fc · --ink #161a24 · --accent #2a4bd7 · --line rgba(22,26,36,.16)
Radius: 12px / 20px · Typography: Chakra Petch / Jost / Share Tech Mono
Required: Üç derinlik düzlemi zorunlu: arka (z=0, gölgesiz), orta (z=1, 0 8px 20px), ön (z=2, 0 18px 40px) · Her yüzen katman çapa artısı ve koordinat etiketi taşır (x, y, z) · Perspektif ızgara zeminin parçası; süs değil, konumlandırma referansı
Banned: Serif display ve dekoratif illüstrasyon. · Renkli glow / neon kenar. · Kalın 3px+ çerçeve, hap buton.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="spatial-ar-layer"] {
  --bg: #e9edf5; --bg-2: #dfe5f0;
  --surface: #f7f9fc; --surface-2: #eef2f9;
  --ink: #161a24; --ink-soft: #4a5364; --ink-faint: #78818f;
  --accent: #2a4bd7; --accent-ink: #ffffff;
  --line: rgba(22,26,36,.16);
  --danger: #d12318;
  --danger-ink: #ffffff;
  --ok: #007c34;
  --ok-ink: #ffffff;
  --warn: #b04f00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 12px; --radius-lg: 20px;
  --shadow: 0 18px 40px rgba(22,26,36,.14); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
}
```
