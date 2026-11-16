# 104 · Stepped Mechanism

> **In one sentence:** Her geçişin dört ayrı kademede tamamlandığı, ara değer üretmeyen ve kademe göstergesiyle hareketin nerede olduğunu söyleyen orta gri mekanik kontrol arayüzü.

| | |
|---|---|
| **Feeling** | mekanik, kilitli, ölçülü, denetimli |
| **Best for** | endüstriyel kontrol paneli, ekipman kurulum akışı, makine ayar ekranı, adım adım sihirbaz |
| **Avoid** | akıcılık bekleyen tüketici uygulamaları, marka vitrini, duygusal hikâye anlatımı |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="stepped-mechanism"]` |
| **Composition** | `sticky` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Stepped Mechanism, hareketi **süreklilikten çıkarır**: her geçiş `steps(4, end)` ile dört ayrı kademede tamamlanır, ara değer üretilmez. Ekranda kademe göstergesi (dört çentik) hareketin nerede olduğunu söyler; biten geçişte öğe 2px aşağı iner ve **orada kalır** — mekanik kilit hissi.

Üç kurucu karar: (1) **kademe sayısı sabit** — 4; daha fazlası akıcılığa, daha azı sıçramaya dönüşür; (2) **8px ızgara** — boşluk birimi 8px; tüm ölçüler kademe ızgarasına hizalıdır, bu yüzden ekran "makine gibi" durur; (3) **orta gri metal zemin** — açık beyaz panel endüstriyel değil "web" görünür; orta ton, gerçek operatör panellerine yakındır.

Display **Share Tech Mono**'dur (tek ağırlık): dijital gösterge estetiği, kademe mantığıyla aynı dili konuşur. Gövde Inter, mono etiketler IBM Plex Mono. Radius 8/16px — makine paneli köşeleri hafif kırılmıştır, hap yoktur.

Bedeli: orta gri zemin kontrast rezervini düşürür (ink/bg 7.53:1). Bu yüzden `--ink-faint` etkileşimli metinde kullanılmaz ve panel kenarlıkları ink'tir, hairline değil.

### What is not
- **Telemetry Grid (46) değildir:** 46 açık gri zeminde hairline metrik hücreleri kurar ve akıcı animasyon kullanır; Stepped Mechanism orta ton + 2px ink kural + `steps(4)` kademe ile ayrışır.
- **Machined Metal Panel (57) değildir:** 57 fırçalanmış metal dokusu ve Michroma display ile malzeme taklidi yapar; burada doku yoktur (`--grain: .01`), display Share Tech Mono ve hareket kademelidir.
- **MES Production Line (59) değildir:** 59 açık zeminde üretim hattı nabzını yeşil accent'le verir; Stepped Mechanism orta gri zeminde kademe göstergesi ve yeşil yalnız "kilitli" durum için kullanılır.
- **Calibration Lab (61) değildir:** 61 Jost + teal ile ölçüm bandı estetiğidir; burada ölçüm değil **geçiş mekaniği** tasarlanır.

### Where it comes from
Endüstriyel operatör panelleri (buton kademeleri, seçici anahtarlar), film projektörü ve manyetik bant mekanikleri, dijital saat/ölçer göstergeleri. Ekranda yeniden kullanılmasının nedeni: yumuşak `ease-out` animasyonların her arayüzde aynılaşması — kademeli geçiş, hareketin **mekanik bir olay** olduğunu hatırlatır. Klişeye dönüşmemesi için korunacak detay: kademe sayısının görünür olması (gösterge) ve biten kademede öğenin kilitle kalması.

### Recognition test in 3 seconds
1. Zemin orta gri metal; kenarlıklar 1–2px koyu ink, hairline değil.
2. Başlık Share Tech Mono: dijital gösterge karakteri, geniş harf aralıklı.
3. Panellerde alt tarafta 2px kural ve dört çentikli kademe göstergesi.
4. Hareket sıçramalı: öğe dört adımda konumlanıyor, ara değer yok.
5. Accent koyu yeşil yalnız "kilitli/onaylı" durumda.

## Visual signature
- **8px kademe ızgarası:** arka planda 8px aralıklı 1px çizgi (opaklık ≤ %70).
- **2px kural:** nav altı, tabbar üstü, ayırıcı — 2px `--ink`; kademe sertliğini taşır.
- **Kademe göstergesi:** 96×8px alan, 16px dolu / 8px boşluk; dolu kısım accent.
- **Kilit:** aktif durumda öğe 2px aşağı iner ve orada kalır (`shadow-hard`).
- **Gölge:** `0 8px 18px -14px` tek katman, kısa; ağırlık `0 2px 0 var(--ink)` kilit çizgisinden gelir.
- **Doku:** `--grain: .01` — panel yüzeyi tozu; belirgin doku yok.
- **Typography:** Share Tech Mono (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#1f6b3d`; neutral scale `#adb3b7` → `#0f1417`.
- **Radius:** `8px` / `16px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Her geçiş 4 kademede tamamlanır; `steps(4, end)` zorunlu, ara değer yok
2. Kademe göstergesi (4 çentik) hareketin nerede olduğunu gösterir
3. Tüm ölçüler 8px kademe ızgarasına hizalı
4. Kilitlenme hissi: aktif durumda öğe 2px aşağı iner ve orada kalır
5. Zemin orta gri metal; accent yalnız "kilitli/onaylı" durumu
6. Buton ve input yüksekliği 36px; tablo satırı 32px

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#adb3b7` | page background | as a card background |
| `--bg-2` | `#979da1` | partition divider floor, table top | button background |
| `--surface` | `#abb1b5` | kart, input, modal | full-page background |
| `--surface-2` | `#8b9195` | passive chip, hover background | primary button |
| `--ink` | `#0f1417` | title, body, icon | large background |
| `--ink-soft` | `#2b3238` | secondary text, description | — |
| `--ink-faint` | `#485056` | decorative label, separator text | interactive text |
| `--accent` | `#1f6b3d` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(15,20,23,.22)` | all borders | text colour |

- Measured contrast: `ink/bg` **8.75:1** · `ink-soft/bg` **6.13:1** · `ink-faint/bg` **3.87:1 (decorative)** · `accent-ink/accent` **6.5:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Share Tech Mono) | 24px (mobile 24px) | 500 | 1.06 | -0.02em |
| H2 | same | 24px | 600 | 1.18 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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
- Radius: `8px` (buton, input, chip), `16px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Yumuşak yay / `ease-out` geçiş (kademe hissi kaybolur).
- Sürekli dönen çark, marquee, sürekli gösterge animasyonu.
- 16px üzeri radius, hap buton.
- Gradient, cam blur, glow.
- Kademe atlama (0 → 100).
- Serif display karışımı; ikinci display aile.
- Orta gri zemin üstünde `--ink-faint` ile etkileşimli metin.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 8px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 8px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 8px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 8px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 8px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 8px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.07:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | Kademe paneli 4/8; sağda dört çentik gösterge | `shots/01-page.png` |
| Dashboard | yüksek | Paneller 2px kuralla; göstergeler satır altında | `shots/01-page.png` |
| Form | düşük | 36px alanlar; her alan kademe ızgarasına hizalı | `shots/01-page.png` |
| Liste / tablo | yüksek | 32px satır, zebra, seçili sol 8px şerit | `shots/01-page.png` |
| Boş durum | orta | Boş gösterge (0/4 dolu) + tek eylem | `shots/01-page.png` |
| Onboarding | yüksek | Sihirbaz 4 adım; her adım bir kademe, geri dönüş yok | `shots/01-page.png` |
| Pricing | orta | Plan kartları 2px ink kenar; öne çıkan accent kilit çizgisi | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel, düşük yoğunluk, hata sol şeritle | `shots/01-page.png` |
| Modal | orta | Açılış 4 kademede; ESC kademeyi atlamaz (geri sarar) | `shots/01-page.png` |
| Bildirim / toast | orta | Alt şerit + kademe sayacı | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + "kademe 2'de durdu" bilgisi | `shots/01-page.png` |
| Profil / ayar | orta | Kademe sayısı (sabit 4), ızgara görünürlüğü, sesli geri bildirim | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 8.75:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.13:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.87:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.5:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.07:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 61.5 | ≥ 60 target | thin text |

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
| "Web" gibi duruyor | beyaz panel + hairline | orta gri zemin + 1px ink kenar |
| Kademe hissedilmiyor | ease-out kullanıldı | `steps(4, end)` zorunlu |
| Sıçrama rahatsız ediyor | kademe 4'ten az (2) | 4 kademeye çıkar, göstergeyle eşle |
| Panel yüzüyor | gölge ağır | gölgeyi kısalt, ağırlığı 2px alt kurala ver |
| Okunmuyor | ink-faint etkileşimli metinde | `--ink-soft` kullan |
| Mobilde sıkışık | 36px hedefler | `::before` ile 44px alan |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `machined-metal-panel` | Same level of seriousness; accent sharing is not allowed |
| garnish | `mes-production-line` | Same level of seriousness; accent sharing is not allowed |
| garnish | `calibration-lab` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/steps | MDN · steps() easing — kademeli geçiş tanımı |
| https://m3.material.io/styles/motion/easing-and-duration/tokens-specs | Material 3 · Easing & duration — denetimli geçiş süreleri |
| https://www.isa.org/standards-and-publications/isa-standards/isa-101-standards | ISA-101 · HMI design — operatör paneli durum gösterimi |
| https://www.nngroup.com/articles/progress-indicators/ | NN/g · Progress indicators — kademe göstergesi okunurluğu |

## AI brief

```text
Stil: Stepped Mechanism (styles/104-stepped-mechanism/style.md, tokens.json)
Token: sadece [data-style="stepped-mechanism"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Share Tech Mono 400 (yalnız başlık), gövde Inter 400/600, etiket IBM Plex Mono.
  Ölçek 11/12/13/14/18/24/38; gövde ölçü 72ch.
Yüzey: orta gri metal (#adb3b7); radius 8/16px; ana kenarlık 1px var(--ink), alt kural 2px.
Imza: 8px kademe ızgarası + 4 çentikli kademe göstergesi + kilit çizgisi (2px aşağı kalır).
Renk: accent #1f6b3d yalnız kilitli/tamamlanan durum; orta ton nedeniyle ink-faint etkileşimde yok.
Hareket: enter .36s steps(4, end) y0 stagger .05; scroll top 73% .31s y12 once;
  1 pin scrub .45 (+65%); hover 85ms steps(2, end); reduced-motion'da kademeler anında atlar.
Yasak: yumuşak ease/spring, sürekli dönen çark, 16px üstü radius, gradient/blur, kademe atlama.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Stepped Mechanism (stepped-mechanism) · family: Motion & Optics (96–105)
Token: --bg #adb3b7 · --surface #abb1b5 · --ink #0f1417 · --accent #1f6b3d · --line rgba(15,20,23,.22)
Radius: 8px / 16px · Typography: Share Tech Mono / Inter / IBM Plex Mono
Required: Her geçiş 4 kademede tamamlanır; `steps(4, end)` zorunlu, ara değer yok · Kademe göstergesi (4 çentik) hareketin nerede olduğunu gösterir · Tüm ölçüler 8px kademe ızgarasına hizalı
Banned: Yumuşak yay / `ease-out` geçiş (kademe hissi kaybolur). · Sürekli dönen çark, marquee, sürekli gösterge animasyonu. · 16px üzeri radius, hap buton.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="stepped-mechanism"] {
  --bg: #adb3b7; --bg-2: #979da1;
  --surface: #abb1b5; --surface-2: #8b9195;
  --ink: #0f1417; --ink-soft: #2b3238; --ink-faint: #485056;
  --accent: #1f6b3d; --accent-ink: #ffffff;
  --line: rgba(15,20,23,.22);
  --danger: #900000;
  --danger-ink: #ffffff;
  --ok: #005105;
  --ok-ink: #ffffff;
  --warn: #832200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 8px; --radius-lg: 16px;
  --shadow: 0 8px 18px -14px rgba(15,20,23,.5); --shadow-hard: none;
  --font-display: "Share Tech Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.03em; --blur: 0px; --grain: 0;
}
```
