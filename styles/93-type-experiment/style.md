# 93 · Type Experiment

> **In one sentence:** Type Experiment

| | |
|---|---|
| **Feeling** | deneysel, teknik, keskin, "ölçülmüş" |
| **Best for** | tipografi stüdyosu/vitrin sayfası, font lisans ve spesimen sunumu, deneysel kültür dergisi, tasarım konferansı programı |
| **Avoid** | güven/ödeme akışı, sağlık formu, kurumsal yatırımcı sunumu, yaşlı kullanıcı ağırlıklı arayüz |
| **Difficulty** | yüksek (taşan tipografi + okunur gövde dengesi) · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="type-experiment"]` |
| **Composition** | `type` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Type Experiment, bir **spesimen sayfasıdır**: harfi sadece okutmaz, **ölçer**. Üç ölçülebilir karar karakteri kurar: (1) 8px **taban çizgisi ızgarası** zemin katmanında görünür (%6 ink), (2) 76px **Michroma** display `line-height: 0.92` ile kadrajdan taşar (max 14ch), (3) sağ üstte **mono ölçü notları** — `x-h 0.52em / trk -0.02em / wgt 400`. Gövde Space Mono 14px/1.75; yani okunacak metin de teknisyen dilidir.

Kazandığı şey: **ölçülebilir karakter**. Sayfa, "hangi font, hangi ölçü, neden" sorusunu doğrudan yanıtlar; her öğe kendi metriğini taşır. Feda ettiği şey: **konfor** — küçük mono gövde (14px) uzun okuma için yorucudur; bu stil vitrin ve manifestodur, 3000 kelimelik makale gövdesi için değildir (uzun metin başka stile devredilir).

### What is not
- **Kinetic Type (37) değildir.** Kinetic 96px Anton + diagonal şerit + asit sarı ile **hareket** kurar; burada diagonal şerit yok, display **Michroma** (geniş, kare kesimli), accent **ultramarin** ve karakter **taban ızgarası + ölçü notları**.
- **Swiss Design (02) değildir.** Swiss 12 kolonu tek yazı karakteriyle doldurur, accent kırmızı, radius 0 ve gövde Inter'dir; burada gövde **mono**, display kadrajdan taşar ve ölçü notları mono etiketlidir.
- **Editorial Design (03) değildir.** Editorial serif display + drop cap ile okuma kurar; burada serif yok, drop cap yok.
- **Utility (44) değildir.** Utility hairline disiplinini isimli metin stilleriyle kurar (Poppins, mavi accent, 0.06 stagger); burada stagger **0.015**, easing **steps(4)**, accent ultramarin.
- **"Sadece büyük başlık" değildir.** Taban ızgarası, ölçü notları ve taşan glyph katmanı olmadan bu stil sadece dev başlıklı bir sayfadır.

### Where it comes from
Spesimen sayfası 18. yy'dan beri dökümcülerin font tanıtımı için kullandığı biçimdir: harf kadrajı, ölçü cetveli, ağırlık listesi. Dijitalde 2010'lardan sonra tipografi stüdyoları ve deneysel dergiler bu biçimi **arayüz manifestosu** olarak kullandı: taban ızgarasını görünür bırakmak, ölçüleri etiketlemek ve display'i kadrajdan taşırmak bir "şeffaflık" iddiasıdır.

Klişeye düşmemesi için korunması gereken detay: **ızgara görünür kalmalı ve ölçü notları gerçek olmalı**. Izgarayı kapatmak, taşan display'i 3-4 kez tekrarlamak veya sahte kalın kullanmak stili "büyük başlıklı blog"a çevirir.

### Recognition test in 3 seconds
1. Zeminde **8px yatay çizgi ızgarası** görünüyor mu; kart yüzeyleri temiz mi?
2. Display **76px ve geniş/kare kesimli** mi (Michroma), satır aralığı 1'in altında mı (0.92)?
3. Sağ üstte **mono ölçü notları** (`x-h … / trk … / wgt …`) duruyor mu?
4. Gövde **mono** mu (Space Mono 14px), satır uzunluğu 52ch'i geçmiyor mu?
5. Accent **ultramarin** ve yalnız çizgi/rozet/butonda mı; gölge hiç yok mu?

## Visual signature
- **Taban ızgarası:** `repeating-linear-gradient(0deg, … 0 1px, transparent 1px 8px)`, `%6 ink`; yalnız `body` zemininde, kart/panel/formda `background-image: none`.
- **Taşan display:** 76px Michroma, `line-height: .92`, `letter-spacing: -.02em`, `max-width: 14ch`; hero'da sol kenarı kadrajdan taşar.
- **Ölçü notları:** 10px JetBrains Mono, 3 satır (`x-h`, `trk`, `wgt`), accent 1px üst çizgi, sağ üstte.
- **Glyph katmanı:** 34vw `Aa`, opacity **.06**, sol altta, `pointer-events: none`; metnin arkasında değil, kadrajın boş köşesinde.
- **Ağırlık karışımı:** display 400 + mono 400/700; sahte kalın yok — Michroma tek ağırlıktır, kalınlaştırma font sahtelemesi sayılır.
- **Keskin çerçeve:** radius 0, gölge yok; nav ve divider 1px `--ink`, kart 1px `--line`, modal 2px `--ink`.
- **Glif tablosu:** karakter / advance width / unicode üçlüsü, mono 36px satır, `tabular-nums`.
- **Typography:** Michroma (display) + Space Mono (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#2b1de0`; neutral scale `#f4f4f0` → `#0d0d0f`.
- **Radius:** `0px` / `2px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. **Izgara görünür:** 8px taban çizgisi ızgarası yalnız `body` zemininde; kart, panel, form ve modal yüzeyleri temiz.
2. **Taşan display:** 76px Michroma, `line-height: .92`, `max-width: 14ch`; ekran başına en fazla 1 taşan öğe.
3. **Ölçü notları gerçek:** `x-h / trk / wgt` değerleri stilin gerçek değerlerini yazar; uydurma metrik yasak.
4. **Mono gövde:** Space Mono 14px/1.75, 52ch; gövde 15px'i geçmez.
5. **Keskin yüzey:** radius 0 (modal 2px), gölge yok, nav 1px `--ink`.
6. **Accent ≤ %6:** ultramarin yalnız ölçü notu çizgisi, birincil buton ve aktif işarette.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4f4f0` | page background | as a card background |
| `--bg-2` | `#eaeae4` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#efefe9` | passive chip, hover background | primary button |
| `--ink` | `#0d0d0f` | title, body, icon | large background |
| `--ink-soft` | `#47474c` | secondary text, description | — |
| `--ink-faint` | `#74747a` | decorative label, separator text | interactive text |
| `--accent` | `#2b1de0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6f5ff` | text above accent | non-accent background |
| `--line` | `rgba(13,13,15,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.61:1** · `ink-soft/bg` **8.38:1** · `ink-faint/bg` **4.21:1 (decorative)** · `accent-ink/accent` **8.25:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 40px (mobile 40px) | 700 | 0.98 | -0.035em |
| H2 | same | 34px | 600 | 1.08 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Mono) | 14px | 400 | 1.6 | 0 |
| Small body | same | 13.5px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10.5px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- Serif aile, yumuşak ease-out, yay/spring hareket.
- Gradient, blur, cam yüzey, gölge (`--shadow: none`).
- 2px üstü radius, pill buton, yuvarlak avatar.
- İki farklı mono ailesini aynı satırda karıştırmak; gövdede uppercase.
- Birden fazla taşan dev öğe, birden fazla glyph katmanı.
- Sahte kalın (synthetic bold), sahte italik, uydurma ölçü notu.
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 0px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 0px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 0px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 0px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 0px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 0px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 0px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 8.92:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 76px taşan display + ölçü notları + glyph katmanı | `shots/01-page.png` |
| Dashboard | düşük | Düz kartlar, mono sayılar; ızgara yalnız zemin | `shots/01-page.png` |
| Form | düşük | 44px alan, 2px accent halka, mono açıklama | `shots/01-page.png` |
| Liste / tablo | orta | Glif tablosu: karakter / advance / unicode | `shots/01-page.png` |
| Boş durum | orta | Tek satır mono açıklama + dev `∅` işareti (%10 opaklık) | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım, her adımda bir ölçü notu bloğu | `shots/01-page.png` |
| Pricing | orta | 3 sütun; önerilen sütunda 2px accent üst çizgi | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Süs sıfır; mono form + tek accent buton | `shots/01-page.png` |
| Modal | orta | 2px mürekkep çerçeve, gölgesiz | `shots/01-page.png` |
| Bildirim / toast | orta | Koyu zemin, 4px accent kare, 2400ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + mono açıklama; display küçültülür | `shots/01-page.png` |
| Profil / ayar | orta | Glif tablosu + ölçü notları; ızgara korunur | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.61:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.38:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.21:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.25:1 | ≥ 4.5 | button text |
| focus ring/ground | 8.92:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.9 | ≥ 60 target | thin text |

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
| "Büyük başlıklı blog" gibi | ızgara kapatılmış, ölçü notları silinmiş | 8px ızgarayı ve mono notları geri getir |
| Sayfa kaotik | 3-4 taşan öğe + 2 glyph katmanı | Taşan öğe 1, glyph katmanı 1 |
| Gövde okunmuyor | mono 14px + 1.5 satır aralığı | Satır aralığını 1.75'e çıkar, 52ch'i geçirme |
| Display bozuk görünüyor | Michroma'ya sahte kalın/italik uygulanmış | 400'de bırak; hiyerarşiyi boyutla kur |
| Accent fazla | ultramarin başlıklarda kullanılmış | Accent yalnız çizgi/rozet/buton (≤ %6) |
| Koyu modda ızgara parlıyor | açık opaklık kullanılmış | `%6 ink` yerine koyu blokta `%6 açık ink` |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `kinetic-type` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Type_specimen | Type specimen — Wikipedia — spesimen sayfası düzeni ve ölçü notları |
| https://en.wikipedia.org/wiki/Baseline_grid | Baseline grid — Wikipedia — 8px taban ızgarası ve dikey ritim |
| https://www.typewolf.com/ | Typewolf — font eşleştirme ve spesimen sunumu örnekleri |
| https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html | WCAG 2.2 · Text Spacing — satır ve harf aralığı ölçütü |

## AI brief

```text
Stil: Type Experiment (styles/93-type-experiment/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="type-experiment"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Michroma 400 (H1 76px / line-height .92 / -0.02em / max 14ch, mobil 40px),
  govde Space Mono 400 14px/1.75 (<= 52ch), etiket JetBrains Mono 10.5px .16em, olcu notu 10px .1em.
  Serif, sahte kalin ve govdede uppercase yasak.
Yuzey: golge YOK; radius 0 (modal 2px). Nav/divider 1px var(--ink), kart 1px var(--line).
Zemin: 8px taban cizgisi izgarasi SADECE body'de (repeating-linear-gradient, %6 ink); kart/panel/form temiz.
Renk: kagit #f4f4f0 + murekkep #0d0d0f + tek accent ultramarin #2b1de0 (<= %6).
Imza: kadrajdan tasan 76px display (ekran basina 1); sag ustte mono olcu notlari (x-h / trk / wgt) +
  accent 1px ust cizgi; sol altta 34vw "Aa" glyph katmani opacity .06; glif tablosu (karakter/advance/unicode).
Hareket: enter 220ms steps(4,end) 48px stagger 15ms; scroll top 94% / 260ms / 56px / once;
  hover 80ms imageScale 1.06; pin kapali. prefers-reduced-motion zorunlu.
Yasak: serif, yumusak ease-out, gradient/blur/cam, golge, 2px ustu radius, pill buton,
  uydurma olcu notu, ikinci glyph katmani.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Type Experiment (type-experiment) · family: Publication & Typography (86–95)
Token: --bg #f4f4f0 · --surface #ffffff · --ink #0d0d0f · --accent #2b1de0 · --line rgba(13,13,15,.16)
Radius: 0px / 2px · Typography: Michroma / Space Mono / JetBrains Mono
Required: **Izgara görünür:** 8px taban çizgisi ızgarası yalnız `body` zemininde; kart, panel, form ve modal yüzeyleri temiz. · **Taşan display:** 76px Michroma, `line-height: .92`, `max-width: 14ch`; ekran başına en fazla 1 taşan öğe. · **Ölçü notları gerçek:** `x-h / trk / wgt` değerleri stilin gerçek değerlerini yazar; uydurma metrik yasak.
Banned: Serif aile, yumuşak ease-out, yay/spring hareket. · Gradient, blur, cam yüzey, gölge (`--shadow: none`). · 2px üstü radius, pill buton, yuvarlak avatar.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="type-experiment"] {
  --bg: #f4f4f0; --bg-2: #eaeae4;
  --surface: #ffffff; --surface-2: #efefe9;
  --ink: #0d0d0f; --ink-soft: #47474c; --ink-faint: #74747a;
  --accent: #2b1de0; --accent-ink: #f6f5ff;
  --line: rgba(13,13,15,.16);
  --danger: #d62a1d;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b55300;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Space Mono", ui-monospace, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
