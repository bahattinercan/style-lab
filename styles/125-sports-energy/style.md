# 125 · Sports Energy

> **In one sentence:** Sports Energy

| | |
|---|---|
| **Feeling** | hızlı, iddialı, yüksek sesli, "santra yapıldı" |
| **Best for** | canlı skor/maç takibi, spor kulübü vitrini, antrenman uygulaması, sezon kampanyası, etkinlik geri sayımı |
| **Avoid** | sakin okuma sayfası, sağlık raporu, kurumsal form, uzun dokümantasyon |
| **Difficulty** | orta (yüksek kontrast + kalın kenar dengesi) · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="sports-energy"]` |
| **Composition** | `split` · `split` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Sports Energy, stadyumdaki iki göstergeyi ekrana taşır: **skor tabelası** (mono `tabular-nums`, 40px, sağa dayalı) ve **forma numarası** (132px, 3px mürekkep kontur, içi boş). Zemin nötr beton (`#f1f3f1`), kenarlar **2–3px mürekkep**, alt bantta **78px aralıklı pist şeritleri**, ve tek **volt turuncu** (`#f24a00`) manşet vurgusu, birincil buton ve "canlı" durum için. Tipografi manşet dilidir: Rajdhani 700 (dar, yüksek), Inter gövde, JetBrains Mono skor.

Kazandığı şey: **hız**. Kalın kenar, tabular skor ve turuncu vurgu ilk 200ms'de "burada bir şey oluyor" der; canlı skor/geri sayım ekranlarında bu dil doğal durur. Feda ettiği şey: **sakinlik** — uzun gövde metni bu stilde yorucudur; 4 satırdan fazla paragraf gerekiyorsa o ekran başka stile devredilir (bu stilde yalnız manşet + skor + tablo kalır).

### What is not
- **Safety Signage (58) değildir.** O stil uyarı levhası mantığıyla çalışır: koyu zemin, çapraz tehlike bandı, tehlike sarısı; burada zemin açık nötr, şeritler **pist** çizgileridir (dikey, 78px) ve accent volt turuncudur.
- **Telemetry Grid (46) değildir.** Telemetri yoğun veri ızgarası ve küçük punto ile operasyon kurar; burada ekranın yarısı manşet, skor dışındaki sayılar az ve büyüktür.
- **Dopamine UI (18) değildir.** Dopamine doygun bloklar + mikro ödül + 3px radius kullanır; burada radius 0–2px, gölge sert ve vurgu **tek** turuncudur.
- **Memphis (16) değildir.** Memphis desen ve konfeti ile oyun kurar; burada tekrar eden tek öğe pist şerididir, dekorasyon yoktur.
- **"Kalın kenarlı dashboard" değildir.** Forma numarası konturu, pist şeritleri ve tabular skor olmadan bu stil sadece kaba bir panodur.

### Where it comes from
Spor ekranının iki kökü var: **skor tabelası** (1960'lardan itibaren LED/blok rakamlar — uzaktan okunur, orantısız rakam kabul etmez) ve **forma tipografisi** (göğüs numarası, konturla ayrışır). Dijitalde bu dil canlı skor uygulamaları, kulüp vitrinleri ve antrenman uygulamalarıyla yayıldı; nedeni ölçülebilir — yüksek kontrast + iri tabular rakam, hareket halinde (koşarken, tribünde) okunur.

Klişeye düşmemesi için korunması gereken detay: **tabular skor ve tek vurgu**. Sayıları orantılı yazmak, ikinci bir kulüp rengi eklemek veya animasyonlu sayaç koymak stili "kumar uygulaması"na çevirir.

### Recognition test in 3 seconds
1. Skor/rakamlar **mono ve tabular** mı (hizalı, eşit genişlik); 40px skor bloğu var mı?
2. Bir yerde **132px kontur forma numarası** (içi boş, 3px stroke) var mı; ekran başına 1 mi?
3. Alt bantta **78px aralıklı pist şeritleri** var mı; şeritler dikey ve ince mi?
4. Kenarlar **2–3px mürekkep** mi; bir öğede **6px sert ofset gölge** var mı?
5. Accent **volt turuncu** ve ekranın ≤ %12'sinde mi; yumuşak gölge/gradient hiç yok mu?

## Visual signature
- **Skor tabelası:** `.kpi .v` mono 40px `tabular-nums`, `letter-spacing: -.02em`, sağa dayalı; kart 2px mürekkep kenar.
- **Forma numarası konturu:** 132px Rajdhani 700, `-webkit-text-stroke: 3px var(--ink)`, `color: transparent`; sağ üstte tek adet (mobil 76px / 2px).
- **Pist şeritleri:** alt bantta 56px yükseklik, `repeating-linear-gradient(90deg, transparent 0 78px, var(--line) 78px 80px)` + 2px üst çizgi.
- **Hız kırığı:** manşet içinde accent zeminli kelime, `skewX(-9deg)`; tek kelime, tek kullanım.
- **Kalın kenar:** nav altı ve divider 3px; panel 2px; input/buton 2px. 1px kenar yok.
- **Sert gölge:** `6px 6px 0 var(--ink)`; yalnız hero görseli, modal ve buton hover (translate -2px).
- **İlerleme bandı:** 8px yükseklik, `--surface-2` zemin + accent dolgu, 1px kenar; sayısal eşlik (mono süre).
- **Typography:** Rajdhani (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#f24a00`; neutral scale `#f1f3f1` → `#0f1412`.
- **Radius:** `2px` / `6px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Tabular skor:** tüm skor/istatistik sayıları mono + `tabular-nums` + sağa dayalı; orantılı sayı yasak.
2. **Forma numarası:** ekran başına 1 kontur (132px / mobil 76px, 3px stroke, içi boş).
3. **Pist şeritleri:** yalnız alt bantta, 78px aralık, 2px çizgi, 56px (mobil 36px) yükseklik.
4. **Kalın kenar:** panel 2px, nav/divider 3px; 1px kenar hiçbir yerde yok.
5. **Sert gölge:** `6px 6px 0` yalnız hero, modal ve buton hover; yumuşak gölge yok.
6. **Accent ≤ %12:** volt turuncu; accent üstü metin **koyu** (`--accent-ink`), beyaz değil.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f1f3f1` | page background | as a card background |
| `--bg-2` | `#e7eae7` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#eceee9` | passive chip, hover background | primary button |
| `--ink` | `#0f1412` | title, body, icon | large background |
| `--ink-soft` | `#444d47` | secondary text, description | — |
| `--ink-faint` | `#6f7a73` | decorative label, separator text | interactive text |
| `--accent` | `#f24a00` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#17100c` | text above accent | non-accent background |
| `--line` | `rgba(15,20,18,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.68:1** · `ink-soft/bg` **7.85:1** · `ink-faint/bg` **4:1 (decorative)** · `accent-ink/accent` **5.16:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Rajdhani) | 36px (mobile 36px) | 700 | 1.1 | 0.01em |
| H2 | same | 32px | 600 | 1.2 | 0.01em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15.5px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.2em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Numbers are taboos; score/timer areas are mono and right aligned. Title in uppercase, body in sentence order.
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

- The screen grid acts like a visible frame: a 1px accent border is placed between sections, no decorative lines are added.
- Section vertical space 64px desktop, 40px mobile; card padding 18px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are opaque; There is no glass/blur. Thin accent edge is used for status notification.
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Yumuşak gölge, gradient, blur, cam yüzey.
- Serif aile, 1px ince kenar, pill buton, yuvarlak avatar.
- İkinci accent (takım mavisi/turkuaz) ve renkli kulüp rozetleri.
- Sayaç/skor döngü animasyonu, sürekli döngü.
- 4 satırdan uzun gövde paragrafı (bu stil manşet + tablo dilidir).
- Accent zemin üstünde beyaz metin (3.4:1) ve 12px altı accent üstü yazı.
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.65:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 62px manşet + skor tabelası + forma numarası konturu + pist şeritleri | `shots/01-page.png` |
| Dashboard | yüksek | Skor kartları + puan tablosu, mono tabular | `shots/01-page.png` |
| Form | düşük | 46px alanlar, 2px kenar, 3px odak halkası | `shots/01-page.png` |
| Liste / tablo | yüksek | Puan tablosu: sıra, takım, O/G/M, puan | `shots/01-page.png` |
| Boş durum | orta | Boş skor tabelası (`– : –`) + tek cümle + 1 buton | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: takım seç → bildirim → ilk maç | `shots/01-page.png` |
| Pricing | orta | 3 paket; önerilen paket 3px accent üst çizgi | `shots/01-page.png` |
| Giriş / ödeme | düşük | Kontur/pist yok; 2px kenar + tek accent buton | `shots/01-page.png` |
| Modal | orta | Skor tabelası + olay listesi, 3px çerçeve + sert gölge | `shots/01-page.png` |
| Bildirim / toast | orta | Canlı bildirim: mono + 8px accent blok, 2400ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + mono açıklama; pist şeridi yok | `shots/01-page.png` |
| Profil / ayar | orta | Takım/lig ayarları, mono etiketler, tabular tercihler | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.68:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.85:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.16:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.65:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.7 | ≥ 60 target | thin text |

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
| "Kumar uygulaması" hissi | ikinci accent + gradient + canlı sayaç | Tek volt accent; döngü/sayaç yok |
| Skorlar hizasız | orantılı rakam, ortalama | `tabular-nums` + sağa dayalı mono |
| Ekran gürültülü | 3 forma numarası + 5 şerit bandı | Kontur 1, şerit 1 bant |
| Panel "yumuşak" | 1px kenar + yumuşak gölge | 2–3px kenar + sert ofset gölge |
| Turuncu üstü metin okunmuyor | beyaz metin kullanılmış (3.4:1) | `--accent-ink` koyu metin (5.16:1) |
| Koyu modda gölge kayboluyor | siyah sert gölge | Koyu blokta `--shadow-hard: 6px 6px 0 #3f4a43` |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `safety-signage` | Same level of seriousness; accent sharing is not allowed |
| garnish | `telemetry-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `wabi-sabi` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Scoreboard | Scoreboard — Wikipedia — tabular rakam düzeni ve uzaktan okunurluk |
| https://en.wikipedia.org/wiki/Jersey_(sports | en.wikipedia.org — ) — forma numarası tipografisi ve kontur |
| https://en.wikipedia.org/wiki/Running_track | Running track — Wikipedia — pist şeritleri ve kulvar aralığı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — pist çizgisi ve skor çerçevesi ölçütü |

## AI brief

```text
Stil: Sports Energy (styles/125-sports-energy/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="sports-energy"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Rajdhani 700 (H1 62px / .9, mobil 36px), govde Inter 400 15.5/1.6 (<= 48ch),
  skor/etiket JetBrains Mono (40px tabular -0.02em / 11px .14em). Serif ve govdede 16px ustu punto yasak.
Yuzey: yumusak golge YOK; panel 2px var(--line), nav/divider 3px var(--ink), radius 2px (modal 6px),
  buton/chip 0px. Sert golge var(--shadow-hard) yalniz hero, modal ve buton hover'da.
Renk: beton #f1f3f1 + murekkep #0f1412 + TEK volt turuncu #f24a00 (ekranin <= %12'si).
  ACCENT USTU METIN KOYU (#17100c) — beyaz turuncu uzerinde 3.4:1'de kalir, kullanma.
Imza: skor tabelasi (mono tabular, saga dayali, 40px); 132px forma numarasi konturu (3px stroke,
  ici bos, ekran basina 1); alt bantta pist seritleri (78px aralik, 2px cizgi, 56px yukseklik);
  mansette skewX(-9deg) accent kelime; 8px ilerleme bandi.
Hareket: enter 240ms cubic-bezier(.9,0,.1,1) 36px stagger 20ms; scroll top 93% / 280ms / 40px / once:false;
  hover 80ms imageScale 1.05; pin kapali. prefers-reduced-motion zorunlu.
Yasak: yumusak golge/gradient/blur, serif, 1px kenar, pill buton, ikinci accent,
  sayac/dongu animasyonu, 4 satirdan uzun govde, accent ustu beyaz metin.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Sports Energy (sports-energy) · family: Playful (116–125)
Token: --bg #f1f3f1 · --surface #ffffff · --ink #0f1412 · --accent #f24a00 · --line rgba(15,20,18,.18)
Radius: 2px / 6px · Typography: Rajdhani / Inter / JetBrains Mono
Required: **Tabular skor:** tüm skor/istatistik sayıları mono + `tabular-nums` + sağa dayalı; orantılı sayı yasak. · **Forma numarası:** ekran başına 1 kontur (132px / mobil 76px, 3px stroke, içi boş). · **Pist şeritleri:** yalnız alt bantta, 78px aralık, 2px çizgi, 56px (mobil 36px) yükseklik.
Banned: Yumuşak gölge, gradient, blur, cam yüzey. · Serif aile, 1px ince kenar, pill buton, yuvarlak avatar. · İkinci accent (takım mavisi/turkuaz) ve renkli kulüp rozetleri.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="sports-energy"] {
  --bg: #f1f3f1; --bg-2: #e7eae7;
  --surface: #ffffff; --surface-2: #eceee9;
  --ink: #0f1412; --ink-soft: #444d47; --ink-faint: #6f7a73;
  --accent: #f24a00; --accent-ink: #17100c;
  --line: rgba(15,20,18,.18);
  --danger: #d5291c;
  --danger-ink: #ffffff;
  --ok: #008037;
  --ok-ink: #ffffff;
  --warn: #b45300;
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
  --font-display: "Rajdhani", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.005em; --blur: 0px; --grain: 0;
}
```
