# 140 · Nanoteknik

> **In one sentence:** Moleküler ölçeğin monokrom arayüzü: karbon kafes noktaları, 3px köşeler, nm ölçü etiketleri ve neredeyse siyah tek accent ile hassas ölçüm dili.

| | |
|---|---|
| **Feeling** | hassas, steril, ölçekli, sakin-otoriter |
| **Best for** | malzeme bilimi paneli, yarı iletken/kaplama üretimi, ölçüm cihazı UI'ı, derin teknoloji markası |
| **Avoid** | tüketici uygulaması, etkinlik vitrini, sıcak hikâye — monokrom dil duygusal anlatım taşımaz |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="nanotech"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Nanoteknik, arayüzü **ölçüm cihazının ölçek penceresi** gibi kurar: neredeyse beyaz zemin, 8px nokta kafesi, altıgen bağ çizgileri, 3px köşe ve **tek "karbon" koyu accent** — renk değil değer vurgusu. Her ölçü nanometre ve tolerans taşır (`Ø 42 nm`, `±1.5 nm`). Sıcaklığı feda eder; karşılığında **ölçek disiplini** ve steril bir otorite kazanır.

Kurucu kararları üç tanedir. Birincisi **monokrom**: accent `#22272c` (karbon) — birincil eylem siyaha yakın, accent-ink açık. İkincisi **kafes imzası**: 8px nokta ızgarası + 60°/−60° altıgen bağ çizgileri; her nokta bir ölçüm düğümüdür. Üçüncüsü **ölçek zorunluluğu**: birimsiz sayı yok, tolerans olmadan ölçüm yok.

Bedeli: sıcaklık yok. Uzun okuma ve duygusal anlatım bu stilde yapılmaz; stil ölçüm, spesifikasyon ve kontrol panelleri içindir.

### What is not
- **Calibration Lab (61) değildir:** 61 teal accent ve `0.42s` girişli laboratuvar panelidir (kadran/eşik); 140 monokromdur, kafes imzası ve `0.61s` girişi vardır.
- **Academic Paper (89) değildir:** 89 serif gövde + mavi accent + dipnot dili kullanır; 140 sans gövde, monokrom ve ölçü etiketlidir (bibliyografya görünümü yasak).
- **Blueprint Çizimi (56) değildir:** 56 koyu cyanotype paftadır; 140 açık steril zemin + altıgen kafes.
- **Utility (44) değildir:** 44 mavi accent ve 8/12px radius ile ürün arayüzüdür; 140'ta accent karbon (renksiz), radius 3/8px, nm ölçü dili.

### Where it comes from
Malzeme bilimi ve yarı iletken ölçüm pratiğinden (nm ölçeği, tolerans, kafes yapısı) ve SEM görüntülerinin görsel dilinden. Bugün önemli çünkü derin teknoloji ürünleri "ölçek" anlatmak zorunda; klişeye dönmemesi için korunacak detay **monokrom accent** ve **her ölçünün tolerans taşıması**.

### Recognition test in 3 seconds
1. Zemin neredeyse beyaz; 8px nokta kafesi ve 60° bağ çizgileri görünüyor.
2. Accent renkli değil: siyaha yakın karbon; birincil buton bu tonda.
3. Köşeler keskin: 3px kontrol, 8px kart; hap yok.
4. Etiketler mono büyük harf `.12em`; ölçüler `nm` ve `±` toleranslı.
5. Gölge neredeyse yok; ayrım 1px çizgi ve nokta kafesiyle.

## Visual signature
- **Nokta kafesi:** 8px `radial-gradient` (ink %10) tüm gövdede.
- **Altıgen bağ:** `repeating-linear-gradient` 60° ve −60° (ink %12), 18px aralık; hero görselinde accent düğüm noktaları.
- **Kafes düğümü:** kart sol üstte 3px + 3 offsetli çift nokta (2×2 matris), accent %55.
- **Mono ölçü:** `Ø 42 nm`, `±1.5 nm`, `d 0.8 nm` — 10px, `.12em`, uppercase.
- **Radius disiplini:** 3px kontrol, 8px kart; 12px üstü yasak.
- **Karbon accent:** `#22272c`; birincil eylem dolu koyu, ghost buton çizgi.
- **Hareket imzası:** 610ms `cubic-bezier(.62,.06,.28,.98)`, 21px — kafes hizaya oturur.
- **Typography:** Archivo Black (display) + Jost (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#22272c`; neutral scale `#f7f7f5` → `#191b1e`.
- **Radius:** `3px` / `8px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Monokrom taban: zemin neredeyse beyaz, accent "karbon" koyu; tek renk vurgu
2. Kafes (lattice) imza öğedir: 8px nokta ızgarası + altıgen bağ çizimi
3. Tüm ölçüler nanometre ve toleransla: `Ø 42 nm`, `±1.5 nm`
4. Radius 3px kontrol / 8px kart; 12px üstü yuvarlama yok
5. Gölge neredeyse yok (0 1px 2px); ayrım 1px çizgiyle
6. Etiketler mono büyük harf `.12em`; gövde Jost 15px/1.6

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f7f5` | page background | as a card background |
| `--bg-2` | `#edede9` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f4f4f1` | passive chip, hover background | primary button |
| `--ink` | `#191b1e` | title, body, icon | large background |
| `--ink-soft` | `#4d5257` | secondary text, description | — |
| `--ink-faint` | `#7f858a` | decorative label, separator text | interactive text |
| `--accent` | `#22272c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f7f5` | text above accent | non-accent background |
| `--line` | `rgba(25,27,30,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.09:1** · `ink-soft/bg` **7.36:1** · `ink-faint/bg` **3.48:1 (decorative)** · `accent-ink/accent` **14.04:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 42px (mobile 26px) | 500 | 1.06 | -0.02em |
| H2 | same | 27px | 600 | 1.18 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `3px` (buton, input, chip), `8px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Doygun/neon renk ve gradyan.
- Yuvarlak 12px+ radius, hap buton.
- Yumuşak büyük gölge, glow, cam.
- Serif display.
- Bibliyografya/rapor görünümü (academic-paper ile örtüşür).
- Süs kafesi (her nokta bir ölçüm düğümü).
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 15.06:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 8/4: solda H1 + nm etiketleri, sağda kafes sahnesi | `shots/01-page.png` |
| Dashboard | **yüksek** | 4 ölçüm kartı; kafes düğümü ve tolerans etiketi | `shots/01-page.png` |
| Form | düşük | 36px input, mono ölçü alanları (`Ø`, `±`) | `shots/01-page.png` |
| Liste / tablo | **yüksek** | 34px satır, sağa dayalı nm değerleri | `shots/01-page.png` |
| Boş durum | orta | boş kafes + "ölçüm yok" mono etiketi | `shots/01-page.png` |
| Onboarding | orta | 3 adım: örnek yükle → ölçek seç → tolerans | `shots/01-page.png` |
| Pricing | orta | plan tablosu; ölçüm kotası mono | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | kafes yok; sade form + tek CTA | `shots/01-page.png` |
| Modal | orta | ölçüm detayı: `Ø 42 nm · ±1.5 nm` | `shots/01-page.png` |
| Bildirim / toast | orta | sağ-alt, 3px accent çizgi | `shots/01-page.png` |
| Hata | orta | tolerans aşımı: `--danger` çerçeve + etiket | `shots/01-page.png` |
| Profil / ayar | orta | birim/tolerans/kalibrasyon ayarları | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.09:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.36:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.48:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 14.04:1 | ≥ 4.5 | button text |
| focus ring/ground | 15.06:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.3 | ≥ 60 target | thin text |

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
| "Rapor" gibi görünüyor | serif + dipnot dili | sans gövde, ölçü etiketi, kafes |
| Kafes gürültü | nokta %14 üstü / 6px altı | %10 ve 8px sabit |
| Accent renkli olmuş | mavi/teal accent eklenmiş | karbon (monokrom) accent |
| Ölçü anlamsız | tolerans yok | `±` değeri ekle |
| Okunmuyor | `--ink-faint` ölçü metni | ölçü `--ink` |
| Mobilde sıkışık | kafes 8px korunmuş | 768 altı 12px, tek kolon |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `calibration-lab` | Same level of seriousness; accent sharing is not allowed |
| garnish | `topographic-terrain` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `vaporwave` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Nanotechnology | Nanotechnology — nm ölçeği ve terminoloji |
| https://en.wikipedia.org/wiki/Carbon_nanotube | Carbon nanotube — kafes/altıgen yapı |
| https://en.wikipedia.org/wiki/Scanning_electron_microscope | Scanning electron microscope — görüntü kontrastı ve ölçek çubuğu |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast Minimum — monokrom zeminde metin kontrastı |

## AI brief

```text
Stil: Nanoteknik (styles/140-nanotech/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="nanotech"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg steril beyaz + 8px nokta kafesi (ink %10) + 60°/−60° bağ çizgisi (ink %12).
Tipografi: --font-display Archivo Black 42/27/19 (400); --font-body Jost 15px/1.60;
  --font-mono IBM Plex Mono 10px ölçü (.12em, uppercase, `Ø 42 nm` / `±1.5 nm` zorunlu).
Yüzey: --surface + 1px var(--line) + 0 1px 2px; yüzen katman 1px accent + 0 8px 20px. Radius 3px / 8px.
Renk: MONOKROM accent karbon #22272c (accent-ink açık); ink/bg 16.09:1, ink-soft/bg 7.36:1, accent-ink/accent 14.04:1, ink-faint/bg 3.48:1.
İmza: nokta kafesi + altıgen bağ + 2×2 kafes düğümü (kart sol üst).
Hareket: enter 610ms cubic-bezier(.62,.06,.28,.98) 21px stagger .031; scroll top 59% 670ms 23px once;
  pin scrub 0.4 (+88%, ekran başına 1); hover 155ms görsel 1.007. prefers-reduced-motion zorunlu.
Yasak: doygun/neon renk, 12px üstü radius, büyük gölge/glow/cam, serif, bibliyografya görünümü, süs kafesi.
Çıktı: bileşen kodu + tek paragraf not (kafes düğümünü ve nm etiketini nereye koydun).

Style: Nanoteknik (nanotech) · family: Experimental & Future (136–145)
Token: --bg #f7f7f5 · --surface #ffffff · --ink #191b1e · --accent #22272c · --line rgba(25,27,30,.16)
Radius: 3px / 8px · Typography: Archivo Black / Jost / IBM Plex Mono
Required: Monokrom taban: zemin neredeyse beyaz, accent "karbon" koyu; tek renk vurgu · Kafes (lattice) imza öğedir: 8px nokta ızgarası + altıgen bağ çizimi · Tüm ölçüler nanometre ve toleransla: `Ø 42 nm`, `±1.5 nm`
Banned: Doygun/neon renk ve gradyan. · Yuvarlak 12px+ radius, hap buton. · Yumuşak büyük gölge, glow, cam.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="nanotech"] {
  --bg: #f7f7f5; --bg-2: #edede9;
  --surface: #ffffff; --surface-2: #f4f4f1;
  --ink: #191b1e; --ink-soft: #4d5257; --ink-faint: #7f858a;
  --accent: #22272c; --accent-ink: #f7f7f5;
  --line: rgba(25,27,30,.16);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00833a;
  --ok-ink: #ffffff;
  --warn: #b75600;
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
  --shadow: 0 1px 2px rgba(25,27,30,.10); --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .04em; --blur: 0px; --grain: 0;
}
```
