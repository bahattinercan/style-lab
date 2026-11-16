# 60 · Enerji Şebekesi

> **In one sentence:** Elektrik şebekesinin tek hat şemasını ekrana taşıyan SCADA arayüzü: koyu grafit zemin, nokta ızgarası, 1.5px şema hattı, düğüm noktaları ve tek volt yeşili akış rengi.

| | |
|---|---|
| **Feeling** | canlı, izlenen, kritik, şebekeli |
| **Best for** | enerji/şebeke izleme, tesis telemetrisi, IoT filo paneli, altyapı durum haritası |
| **Avoid** | e-ticaret vitrini, moda, uzun okuma — koyu şema dili okumayı yorar |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="energy-grid"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Enerji Şebekesi, arayüzü **şebeke şeması** gibi kurar: koyu grafit zemin üzerinde 8px nokta ızgarası, 1.5px şema hatları, 3px düğüm noktaları, tek volt yeşili (`--accent`) akış rengi. Her ölçüm birimlidir (kV, MW, Hz), her düğüm bir durum taşır. Sıcaklığı feda eder; karşılığında **bağlantı ve akış okunurluğu** kazanır.

Kurucu kararları üç tanedir. Birincisi **tek parlak renk**: accent yalnız akış/aktif durum içindir; ikinci bir neon yok. İkincisi **nokta ızgarası zemin**: şema hattının nereye oturduğunu gösterir, dekorasyon değil koordinat sistemi. Üçüncüsü **ölçüm etiketi zorunluluğu**: birimsiz sayı ekrana çıkmaz.

Bedeli: koyu zemin + ince çizgi kombinasyonu düşük parlaklıkta kaybolur. Bu yüzden çizgi kalınlığı 1.5px'in altına inmez ve `--ink-faint` yalnız ızgara/eksende kalır.

### What is not
- **Cybercore (23) değildir:** 23 terminal estetiği (mono her yerde, kutu çizim) ve pembe/mor neon kullanır; Şebeke'de şema düğümleri, birimli ölçüm ve tek renk vardır.
- **Blueprint Çizimi (56) değildir:** 56 cyanotype mavi ve 64px çizgi ağıyla pafta kurar; Şebeke grafit zemin + 8px nokta ızgarası + düğüm/halka kullanır, accent'i volt yeşilidir.
- **Scandinavian Dark (40) değildir:** 40 serif başlık ve sıcak nötr tonla sakinlik satar; Şebeke'de Archivo Black ve teknik mono vardır.
- **Aurora UI (39) değildir:** 39 gradyan/ışıma ile atmosfer kurar; Şebeke'de gradyan yok, parlaklık yalnız accent çizgisinde.

### Where it comes from
SCADA ekranları ve tek hat (single-line) diyagramlarından; enerji kontrol odalarının "her hat bir çizgi, her hat bir durum" okuma biçiminden. Bugün geri dönüyor çünkü altyapı ürünleri (IoT, şarj ağı, mikroşebeke) topoloji anlatmak zorunda; klişeye dönmemesi için korunacak detay **tek parlak renk** ve **her ölçümün birimli olması**.

### Recognition test in 3 seconds
1. Zemin grafit siyahı; üstünde 8px nokta ızgarası seçilebiliyor.
2. Ekranda tek parlak renk var: volt yeşili; ikinci neon yok.
3. Şema hatları 1.5px, düğümler 3px daire; kesişimlerde düğüm var.
4. Her sayının yanında birim (`kV`, `MW`, `Hz`, `%`).
5. Kartların sol üst köşesinde 5px yeşil düğüm noktası duruyor.

## Visual signature
- **Nokta ızgarası:** `radial-gradient(ink %14 1px, transparent 1px)` / `background-size: 8px 8px` — tüm sayfada.
- **Şema hattı:** 1.5px `--line` veya accent; 90° kırılma, yuvarlatma yok (radius 2px'e kadar).
- **Düğüm noktası:** 3px dolu daire; durum düğümleri 5px ve `box-shadow: 0 0 0 3px accent %22`.
- **Tek parlak renk:** `--accent` volt yeşili; glow yalnız accent çizgisinde, başka renkte yasak.
- **Kart düğümü:** kart sol üst köşede -3px offset 5px accent daire (şebeke bağlantı noktası).
- **Ölçüm etiketi:** 10px mono, `.12em`, uppercase; değerin yanında birim zorunlu.
- **Hareket imzası:** 580ms `cubic-bezier(.45,0,.15,1)`, 12px, stagger 0.09 — akış "dolan" bir eğriyle gelir.
- **Typography:** Archivo Black (display) + Space Grotesk (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#9be23c`; neutral scale `#0c0f12` → `#e4eef2`.
- **Radius:** `2px` / `6px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Zemin 8px nokta ızgarası; şema çizgileri 1.5px, düğümler 3px dolu
2. Tek accent (volt yeşili); ikinci parlak renk yok
3. Tüm ölçümler birimli mono etiketle (kV, MW, Hz, %)
4. Durum: akış var = accent, kesinti = --danger, rezerv = --warn; metin + düğüm biçimiyle
5. Radius 2px kontrol / 6px kart; gölge yalnız yüzen katmanda
6. Şema sola, açıklama sağa: 7/5 bölünme

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0c0f12` | page background | as a card background |
| `--bg-2` | `#101519` | partition divider floor, table top | button background |
| `--surface` | `#131a1f` | kart, input, modal | full-page background |
| `--surface-2` | `#182127` | passive chip, hover background | primary button |
| `--ink` | `#e4eef2` | title, body, icon | large background |
| `--ink-soft` | `#a7b8c0` | secondary text, description | — |
| `--ink-faint` | `#71858f` | decorative label, separator text | interactive text |
| `--accent` | `#9be23c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#0e1503` | text above accent | non-accent background |
| `--line` | `rgba(228,238,242,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.3:1** · `ink-soft/bg` **9.39:1** · `ink-faint/bg` **4.99:1 (decorative)** · `accent-ink/accent` **11.83:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 52px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 32px | 600 | 1.2 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Title 52px/400 — remains silent next to the texture. Tags mono, wide tracking.
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

- Card spacing 14px; The material photo can extend right to the edge, the text cannot.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Shadow single level; With material feeling grain + edge. No glass/blur.
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Saf siyah `#000` zemin.
- Çoklu neon parlama, renkli glow, gradyan zemin.
- 12px üstü radius, hap buton.
- Serif display.
- Saniyede 3 üstü flash, ekran başına 1'den fazla sürekli döngü.
- Renk tek başına durum göstergesi.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 12.21:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: solda H1 + ölçüm etiketleri, sağda canlı şema | `shots/01-page.png` |
| Dashboard | **yüksek** | şema bölgesi 7 kolon + sağda ölçüm tablosu 5 kolon | `shots/01-page.png` |
| Form | düşük | 42px input, mono etiket sağda; birim seçici chip | `shots/01-page.png` |
| Liste / tablo | orta | 34px satır, tabular sayı, alarm satırı sol 2px `--danger` | `shots/01-page.png` |
| Boş durum | orta | boş şema: soluk nokta ızgarası + "sinyal yok" mono etiketi | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: şebeke seç → düğüm ekle → eşik belirle | `shots/01-page.png` |
| Pricing | orta | plan tablosu; öne çıkan plan 1px accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | şema yok; yalnız odak halkası ve tek accent | `shots/01-page.png` |
| Modal | orta | ölçüm detayı; üst şeritte mono birim etiketi | `shots/01-page.png` |
| Bildirim / toast | orta | sağ alt, sol uçta 6px düğüm + mono metin | `shots/01-page.png` |
| Hata | orta | düğüm `--danger`, hat 1.5px kesikli; ölçüm değeri korunur | `shots/01-page.png` |
| Profil / ayar | orta | eşik ayarları: slider 1.5px hat + düğüm tutamaç | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.3:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.39:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.99:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 11.83:1 | ≥ 4.5 | button text |
| focus ring/ground | 12.21:1 | ≥ 3 | accent ring |
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
| Şema görünmüyor | çizgi 1px veya `--ink-faint` | 1.5px ve `--line`/accent kullan |
| Ekran "oyun arayüzü" gibi | ikinci neon eklenmiş | tek parlak renk; diğer durumlar parlamaz |
| Ölçüm okunmuyor | birim eksik veya 10px altı | 10px mono + birim zorunlu |
| Nokta ızgarası gürültü | 8px altı veya %20 üstü opaklık | 8px, %14 sabit |
| Düğümler kayboluyor | 3px altına inilmiş | 3px düğüm, durum düğümü 5px |
| Pin kaydırırken şema titriyor | iki ayrı rAF döngüsü | tek ScrollTrigger + Lenis'i GSAP ticker'a bağla |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `cybercore` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Single-line_diagram | Single-line diagram — şema sembolleri ve hat dili |
| https://en.wikipedia.org/wiki/SCADA | SCADA — telemetri ekranı yoğunluğu |
| https://en.wikipedia.org/wiki/Electrical_grid | Electrical grid — akış/kesinti terminolojisi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — çizgi ve düğüm kontrastı |

## AI brief

```text
Stil: Enerji Şebekesi (styles/60-energy-grid/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="energy-grid"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg grafit + 8px nokta ızgarası (radial-gradient color-mix var(--ink) %14, size 8px 8px).
Tipografi: --font-display Archivo Black 52/32/21 (400, -.01em); --font-body Space Grotesk 16px/1.60;
  --font-mono Share Tech Mono 10–12px ölçüm etiketi (.12em, uppercase, birim zorunlu).
Yüzey: --bg / --surface (1px var(--line) + sol üst köşe düğümü) / --surface + 0 8px 24px (yüzen).
  Radius 2px kontrol, 6px kart.
Renk: tek parlak accent volt yeşili #9be23c; --danger/--warn parlamaz. ink/bg 16.30:1, ink-soft/bg 9.39:1, accent-ink/accent 11.83:1.
Şema: hat 1.5px, düğüm 3px dolu, kesişimde düğüm zorunlu; 7/5 bölünme (şema sol).
Hareket: enter 580ms cubic-bezier(.45,0,.15,1) 12px stagger .09; scroll top 81% 660ms 16px once;
  pin scrub 1.45 (+210%, ekran başına 1); hover 200ms görsel 1.004. prefers-reduced-motion zorunlu.
Yasak: saf siyah, çoklu neon, gradyan, 12px üstü radius, serif, renk-only durum, saniyede 3 flash.
Çıktı: bileşen kodu + tek paragraf not (şema düğümünü ve ölçüm etiketini nereye koydun).

Style: Enerji Şebekesi (energy-grid) · family: Industrial (56–65)
Token: --bg #0c0f12 · --surface #131a1f · --ink #e4eef2 · --accent #9be23c · --line rgba(228,238,242,.14)
Radius: 2px / 6px · Typography: Archivo Black / Space Grotesk / Share Tech Mono
Required: Zemin 8px nokta ızgarası; şema çizgileri 1.5px, düğümler 3px dolu · Tek accent (volt yeşili); ikinci parlak renk yok · Tüm ölçümler birimli mono etiketle (kV, MW, Hz, %)
Banned: Saf siyah `#000` zemin. · Çoklu neon parlama, renkli glow, gradyan zemin. · 12px üstü radius, hap buton.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="energy-grid"] {
  --bg: #0c0f12; --bg-2: #101519;
  --surface: #131a1f; --surface-2: #182127;
  --ink: #e4eef2; --ink-soft: #a7b8c0; --ink-faint: #71858f;
  --accent: #9be23c; --accent-ink: #0e1503;
  --line: rgba(228,238,242,.14);
  --danger: #e4392b;
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
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 8px 24px rgba(3,6,8,.55); --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .03em; --blur: 0px; --grain: 0;
}
```
