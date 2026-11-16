# 109 · Zaman Çizelgesi Editörü

> **In one sentence:** Kurgu masasının dili: 32px kanal şeritleri, tek dikey playhead, mono zaman kodu ve %14 kanal tonlu klip bloklarıyla kurulan sıkı çalışma yüzeyi.

| | |
|---|---|
| **Feeling** | hassas, sıkı, ritmik, çalışkan |
| **Best for** | video/ses kurgu aracı, podcast editörü, animasyon zaman çizelgesi, olay-kronoloji paneli |
| **Avoid** | vitrin/landing, moda kampanyası, çocuk uygulaması — şerit dili duygusal anlatım taşımaz |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="timeline-editor"]` |
| **Composition** | `sticky` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Zaman Çizelgesi Editörü, arayüzü **kurgu zaman çizgisi** gibi kurar: solda kanal adları (32px şerit), sağda zaman ekseni; tek dikey playhead (2px accent), klip blokları %14 kanal tonu, tüm zaman kodları mono ve tabular (`00:00:12:04`). Süsü sıfıra indirir; karşılığında **zamanın nerede olduğunu** bir bakışta okutur.

Kurucu kararları üç tanedir. Birincisi **tek playhead**: ekranda bir dikey imleç; ikinci imleç yok. İkincisi **ızgara iki kademeli**: 64px ana kare çizgisi, 16px ara çizgi (%50 opak) — ölçek okunur. Üçüncüsü **gölge neredeyse yok**: yalnız sürüklenen klip gölge taşır, diğer yüzeyler 1px çizgiyle ayrılır.

Bedeli: yoğunluk yorgunluğu. Bu yüzden ekran 1360px genişlikte çalışır, 1360 altında denetçi paneli alta iner.

### What is not
- **Utility (44) değildir:** 44 genel ürün arayüzüdür ve mavi accent taşır; 109 kurgu masasıdır, playhead + kanal şeridi imzadır.
- **Kinetic Type (37) değildir:** 37 tipografiyi hareket ettirir; 109'da hareket araca aittir, tipografi sabit ve mono zaman kodudur.
- **Log Stream (49) değildir:** 49 dikey akan olay satırlarıdır; 109 yatay zaman ekseni ve kanal katmanlarıdır.
- **Blueprint Çizimi (56) değildir:** 56 ölçü paftasıdır (koyu cyanotype); 109 açık sıcak gri çalışma yüzeyi ve yatay zaman ekseni.

### Where it comes from
Doğrusal olmayan kurgu (NLE) pratiğinden: kanal/klip/playhead modeli, J-K-L tuş refleksi, SMPTE zaman kodu. Bugün web'de geri dönüyor çünkü tarayıcı tabanlı ses/video editörleri yaygınlaştı; klişeye dönmemesi için korunacak detay **zaman kodunun tabular ve mono olması** ve **tek playhead kuralı**.

### Recognition test in 3 seconds
1. Yatay zaman ekseni ve 32px kanal şeritleri görünüyor; şeritler 1px çizgiyle ayrılıyor.
2. Tek dikey playhead var (2px accent, plum) ve cetvelde zaman kodu duruyor.
3. Tüm zaman kodları mono ve tabular: `00:01:07:12`.
4. Klipler 1px çerçeve + %14 kanal tonu; gölge yok (yalnız sürüklenen klipte).
5. Ana kare çizgisi 64px, ara çizgi 16px — ızgara iki kademeli.

## Visual signature
- **Playhead:** 2px accent dikey çizgi, sahne görselinde ve `.sig` üzerinde; tek adet.
- **Kanal şeridi:** 32px yükseklik, 1px yatay çizgi, kanal adı solda mono.
- **İki kademeli ızgara:** 64px ana çizgi (ink %12), 16px ara çizgi (ink %5).
- **Klip bloğu:** 1px çerçeve + `color-mix(accent 8%, surface)` zemin; seçili klip accent %20.
- **Zaman kodu:** IBM Plex Mono 10–12px, `tabular-nums`, `.02em` tracking.
- **Sıfır gölge kuralı:** yalnız sürüklenen klip `0 8px 20px`; diğer yüzeyler düz.
- **Hareket imzası:** 510ms `cubic-bezier(.45,.08,.25,1)`, 15px — playhead hizaya oturur.
- **Landing hero (QA):** zaman çizelgesi: playhead gradyanı, kanal satırları, aktif klip accent %8 + sol accent şerit.
- **Typography:** Archivo Black (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#a12a6e`; neutral scale `#f1efec` → `#1e1a17`.
- **Radius:** `4px` / `8px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Kanallar 32px şerit yüksekliğinde; zaman kodu mono ve tabular (00:00:12:04)
2. Playhead tek dikey çizgi (2px accent) ve sürüklenebilir; ikinci imleç yok
3. Klip blokları 1px çerçeve + %14 kanal tonu; seçili klip accent %24 dolgu
4. Izgara ve cetvel 1px; ana kare (sn) çizgileri daha koyu, ara çizgiler %50 opak
5. Gölge yalnız sürüklenen klipte; diğer yüzeyler düz
6. Klavye kısayolları zorunlu: boşluk oynat/durdur, J/K/L trim, I/O işaretle

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f1efec` | page background | as a card background |
| `--bg-2` | `#e7e3de` | partition divider floor, table top | button background |
| `--surface` | `#fbfaf8` | kart, input, modal | full-page background |
| `--surface-2` | `#f5f2ee` | passive chip, hover background | primary button |
| `--ink` | `#1e1a17` | title, body, icon | large background |
| `--ink-soft` | `#554d46` | secondary text, description | — |
| `--ink-faint` | `#857b71` | decorative label, separator text | interactive text |
| `--accent` | `#a12a6e` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff4f8` | text above accent | non-accent background |
| `--line` | `rgba(30,26,23,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.06:1** · `ink-soft/bg` **7.21:1** · `ink-faint/bg` **3.61:1 (decorative)** · `accent-ink/accent` **6.36:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 38px (mobile 24px) | 600 | 1.12 | -0.02em |
| H2 | same | 26px | 600 | 1.22 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.55 | 0 |
| Small body | same | 12px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.16em |
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
- Radius: `4px` (buton, input, chip), `8px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Serif display ve dekoratif illüstrasyon.
- Hap radius, yumuşak büyük gölge.
- Orantılı sayı / hizasız zaman kodu.
- Kayıt dışında akan playhead.
- Renk-only kanal ayrımı (kanal adı yazılır).
- Blur ve cam yüzey.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.55:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | solda H1 + zaman kodu etiketi, sağda zaman çizgisi görseli | `shots/01-page.png` |
| Dashboard | **yüksek** | kanal şeritleri + denetçi paneli; süs sıfır | `shots/01-page.png` |
| Form | düşük | 32px mono input, tek kolon; zaman kodu doğrulaması | `shots/01-page.png` |
| Liste / tablo | **yüksek** | 32px kanal satırı, mono süre kolonu | `shots/01-page.png` |
| Boş durum | orta | boş zaman çizgisi + "medya sürükle" mono etiketi | `shots/01-page.png` |
| Onboarding | orta | 3 adım: medya ekle → klip kes → dışa aktar | `shots/01-page.png` |
| Pricing | orta | plan tablosu satır bazlı; süre limiti mono | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | zaman çizgisi yok; sade form + tek CTA | `shots/01-page.png` |
| Modal | orta | dışa aktarma: codec + süre mono | `shots/01-page.png` |
| Bildirim / toast | orta | sağ-alt, playhead çizgisi + mono metin | `shots/01-page.png` |
| Hata | orta | kırmızı klip çerçevesi + mono hata kodu | `shots/01-page.png` |
| Profil / ayar | orta | kısayol ve ızgara yoğunluğu ayarları | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.06:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.21:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.61:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.36:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.55:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94.8 | ≥ 60 target | thin text |

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
| "Tablo" gibi görünüyor | şerit yüksekliği 48px+ | 32px şerit, 16px ara çizgi |
| Zaman kodu kayıyor | orantılı font | `font-variant-numeric: tabular-nums` + mono |
| İki imleç | playhead + hover çizgisi birlikte | hover çizgisi 1px ve %40 opak; playhead tek |
| Gölge kirliliği | tüm kliplere gölge | gölge yalnız sürüklenen klipte |
| Izgara okunmuyor | tek kademe çizgi | 64px ana + 16px ara kademe |
| Mobilde sıkışma | 32px şerit korunmuş | 768 altı 40px, yatay kaydırma kalıbı |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `kinetic-type` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `log-stream` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/SMPTE_timecode | SMPTE timecode — zaman kodu biçimi ve kare hızı |
| https://en.wikipedia.org/wiki/Non-linear_editing | Non-linear editing — kanal/klip/playhead modeli |
| https://helpx.adobe.com/premiere-pro/using/default-keyboard-shortcuts.html | Premiere Pro · keyboard shortcuts — J/K/L ve işaretleme refleksi |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | WCAG 2.2 · Focus Appearance — yoğun ızgarada odak halkası |

## AI brief

```text
Stil: Zaman Çizelgesi Editörü (styles/109-timeline-editor/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="timeline-editor"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg sıcak gri + 32px yatay şerit deseni (repeating-linear-gradient, ink %4).
Tipografi: --font-display Archivo Black 38/26/18 (400); --font-body Inter 14px/1.55;
  --font-mono IBM Plex Mono 10–12px zaman kodu (.02–.08em, tabular-nums).
Yüzey: gölge YOK (yalnız sürüklenen klip 0 8px 20px); kart 1px var(--line).
  Radius 4px kontrol, 8px panel/klip.
Renk: tek accent plum #a12a6e (playhead + seçili klip); ok/warn/danger metinle.
  ink/bg 15.06:1, ink-soft/bg 7.21:1, accent-ink/accent 5.36:1, ink-faint/bg 3.61:1 (ara ızgara).
İmza: tek playhead (2px dikey accent) + iki kademeli ızgara (64px ana / 16px ara) + mono zaman kodu.
Hareket: enter 510ms cubic-bezier(.45,.08,.25,1) 15px stagger .042; scroll top 67% 530ms 18px once;
  pin scrub 1.3 (+190%, ekran başına 1); hover 165ms görsel 1.004. prefers-reduced-motion zorunlu.
Yasak: serif, hap radius, orantılı sayı, kayıt dışı akan playhead, blur/cam, renk-only kanal ayrımı.
Çıktı: bileşen kodu + tek paragraf not (playhead'i ve zaman kodunu nereye koydun).

Style: Zaman Çizelgesi Editörü (timeline-editor) · family: Interactive (106–115)
Token: --bg #f1efec · --surface #fbfaf8 · --ink #1e1a17 · --accent #a12a6e · --line rgba(30,26,23,.16)
Radius: 4px / 8px · Typography: Archivo Black / Inter / IBM Plex Mono
Required: Kanallar 32px şerit yüksekliğinde; zaman kodu mono ve tabular (00:00:12:04) · Playhead tek dikey çizgi (2px accent) ve sürüklenebilir; ikinci imleç yok · Klip blokları 1px çerçeve + %14 kanal tonu; seçili klip accent %24 dolgu
Banned: Serif display ve dekoratif illüstrasyon. · Hap radius, yumuşak büyük gölge. · Orantılı sayı / hizasız zaman kodu.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="timeline-editor"] {
  --bg: #f1efec; --bg-2: #e7e3de;
  --surface: #fbfaf8; --surface-2: #f5f2ee;
  --ink: #1e1a17; --ink-soft: #554d46; --ink-faint: #857b71;
  --accent: #a12a6e; --accent-ink: #fff4f8;
  --line: rgba(30,26,23,.16);
  --danger: #d3261a;
  --danger-ink: #ffffff;
  --ok: #007e35;
  --ok-ink: #ffffff;
  --warn: #b25000;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 8px;
  --shadow: 0 2px 8px rgba(30,26,23,.12); --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
