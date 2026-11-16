# 101 · Shadow Stage

> **In one sentence:** Tek bir ışık kaynağının sahnedeki her şeyi sırayla aydınlattığı, hiyerarşiyi rengin değil parlaklık ve gölge yönünün kurduğu koyu sahne arayüzü.

| | |
|---|---|
| **Feeling** | dramatik, sakin, tiyatral, derin |
| **Best for** | prodüktör/ajans vitrini, film & etkinlik sayfası, küratörlü portfolyo, gece modu okuma deneyimi |
| **Avoid** | veri yoğun tablo ekranları, form ağırlıklı yönetim panelleri, açık havada kullanılan saha uygulamaları |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="shadow-stage"]` |
| **Composition** | `sticky` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Shadow Stage, arayüzü bir **tiyatro sahnesi** gibi kurar: tek ışık kaynağı üst-soldadır, her yüzey bu kaynağa göre gölge düşürür ve hiyerarşi punto değil **parlaklık** ile kurulur. Başlık en aydınlık öğedir; çevresi kademeli olarak koyulaşır, kenarlarda çok soluk bir vinyet kalır.

Üç kurucu karar vardır. (1) **Tek kaynak kuralı** — bütün gölgeler aynı yöne düşer; ikinci bir ışık (sağdan parlama, renkli drop-shadow) yasaktır, çünkü sahne inandırıcılığı yön birliğinden gelir. (2) **Parlaklık hiyerarşisi** — `--ink` (`#eef1f5`) başlık, `--ink-soft` gövde, `--ink-faint` yalnız dekoratif; opaklıkla oynanmaz, doğru token seçilir. (3) **Vinyet disiplini** — köşe vinyeti en fazla %22 ve daima metnin arkasında; gövde metni hiçbir zaman gölge içinde kalmaz.

Display **Poiret One**'dır (tek ağırlık): ince geometrik çizgiler sahne ışığı altında tel gibi okunur, kalın serif dramatikliği taklit etmez. Gövde Inter, etiketler IBM Plex Mono'dur.

Bedeli: bu stil veri yoğun ekranlarda zayıftır. Tablo gerekli olduğunda gölge bütçesi sıfıra iner ve satır ayrımı yalnız 1px `--line` ile kurulur.

### What is not
- **Dark Academia (33) değildir:** 33 Cormorant Garamond + toprak paletle nostaljik bir okuma dünyası kurar; Shadow Stage ışığı bir *araç* olarak kullanır, dönem taklidi yapmaz (display Poiret One, accent sarı ışık).
- **Glassmorphism (08) değildir:** 08 cam yüzey ve blur ile derinlik kurar, çok renkli ışıma taşır; burada blur yoktur (`--blur: 0px`), derinlik yalnız gölge yönünden gelir.
- **Nordic Folk (66) değildir:** 66 sıcak kağıt zeminli, folklorik motifli açık bir dildir; Shadow Stage koyu zeminde tek ışıkla çalışır.
- **Acid Graphics (15) değildir:** 15 neon sarı ve parlama ile agresif kontrast kurar; burada accent sarı ama **ışık** gibi davranır (geniş, soluk, tek kaynak), asit parlaklığı yoktur.

### Where it comes from
Rönesans chiaroscuro'su (Caravaggio'nun tek kaynak ışığı), tiyatro sahne aydınlatması ve sinema "low-key" ışık düzeni. Ekranda yeniden kullanılmasının nedeni: koyu modun düz siyah ekranlardan sıkıcılaşması — tek kaynak ışık, koyu zemine **derinlik ve sıcaklık** verir. Klişeye dönüşmemesi için korunacak detay: gölge yönünün tek olması ve vinyetin metni örtmemesi.

### Recognition test in 3 seconds
1. Zemin koyu ve soğuk; tek bir yönden (üst-sol) yumuşak ışık lekesi var.
2. Tüm kartlar aynı yöne çok soluk gölge düşürüyor; ikinci ışık yok.
3. Başlık Poiret One: ince, geniş harf aralıklı, tel gibi.
4. Köşelerde hafif vinyet; metin hiçbir yerde gölge içinde değil.
5. Accent sarı yalnız "aydınlanan" öğede (aktif başlık, birincil buton, seçili kart).

## Visual signature
- **Tek ışık lekesi:** hero görselde üst-sol %12 opaklıkta radial accent; sayfada %22 vinyet.
- **Gölge yönü:** tüm `--shadow` değerleri aynı yöne (aşağı-sağa) düşer; `0 24px 60px -42px rgba(0,0,0,.92)`.
- **Parlaklık basamakları:** başlık `--ink`, gövde `--ink-soft`, mikro etiket `--ink-faint` — opaklık yerine token.
- **Poiret One başlık:** 50px, ağırlık 400, tracking 0.04em; 600/700 denemesi yasak (sentetik bold).
- **Vinyet:** `radial-gradient(120% 90% at 22% 10%, transparent 30%, var(--bg) 78%)`, opaklık ≤ .22.
- **Doku:** `--grain: .02` — film greni hissi; tarama çizgisi ve neon yok.
- **Typography:** Poiret One (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#e3b341`; neutral scale `#12151a` → `#eef1f5`.
- **Radius:** `10px` / `16px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Ekran başına tek ışık kaynağı; tüm gölgeler aynı yöne (üst-sol) düşer
2. Hiyerarşi parlaklıkla kurulur: başlık en aydınlık, çevre metin kademeli söner
3. Köşe vinyeti ≤ %22; metnin üstüne binmez
4. Accent yalnız "aydınlanan" öğe (aktif sekme, seçili kart, birincil eylem)
5. Gövde metni %100 opak; yalnız dekoratif katman yarı saydam olabilir
6. Sahne zemini ile kart arasındaki fark en az bir ton basamağı (ΔL ≥ 4)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#12151a` | page background | as a card background |
| `--bg-2` | `#171b21` | partition divider floor, table top | button background |
| `--surface` | `#1b2028` | kart, input, modal | full-page background |
| `--surface-2` | `#232a33` | passive chip, hover background | primary button |
| `--ink` | `#eef1f5` | title, body, icon | large background |
| `--ink-soft` | `#adb6c2` | secondary text, description | — |
| `--ink-faint` | `#7e8896` | decorative label, separator text | interactive text |
| `--accent` | `#e3b341` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a1405` | text above accent | non-accent background |
| `--line` | `rgba(238,241,245,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.15:1** · `ink-soft/bg` **8.93:1** · `ink-faint/bg` **5.1:1 (decorative)** · `accent-ink/accent` **9.41:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poiret One) | 30px (mobile 30px) | 500 | 1.06 | -0.02em |
| H2 | same | 27px | 600 | 1.18 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `10px` (buton, input, chip), `16px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Çok kaynaklı gölge, renkli drop-shadow, neon glow.
- Gradient mesh/blob arka plan ve cam blur (`--blur: 0px`).
- Poiret One üzerinde 600/700 (sentetik bold).
- 16px üzeri radius, hap buton.
- Metni gölge içinde bırakmak.
- Sürekli yanıp sönen ışık efekti, parallax.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 10px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 10px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 10px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 10px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 10px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 10px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 10px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.4:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Işık huzmesi 5/7; başlık en aydınlık öğe, tek CTA accent | `shots/01-page.png` |
| Dashboard | düşük | Kartlar tek ışıkla; KPI'lar soluk gölge, tablo gölgesiz | `shots/01-page.png` |
| Form | düşük | Alanlar `--bg-2`; odak halkası 2px accent | `shots/01-page.png` |
| Liste / tablo | düşük | 40px satır, gölge yok, hover zemin aydınlanır | `shots/01-page.png` |
| Boş durum | orta | Boş sahne + tek ışık lekesi + birincil eylem | `shots/01-page.png` |
| Onboarding | yüksek | Adımlar perde gibi: her adımda tek ışık odağı | `shots/01-page.png` |
| Pricing | orta | Kartlar aynı gölge yönünde; öne çıkan kart accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel, ışık üstte; hata satırı `--danger` | `shots/01-page.png` |
| Modal | orta | %55 örtü, modal tek ışıkla aydınlanır | `shots/01-page.png` |
| Bildirim / toast | orta | Tek satır mono + soluk gölge | `shots/01-page.png` |
| Hata | düşük | Başlık `--danger`; gölge azaltılır (hata "sahnede" kalır) | `shots/01-page.png` |
| Profil / ayar | orta | Işık kaynağı ve tema tercihleri; kontrast önizlemesi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.15:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.93:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.1:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.41:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.4:1 | ≥ 3 | accent ring |
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
| Sahne "kirli" görünüyor | iki farklı gölge yönü | tüm `--shadow` değerlerini tek yöne sabitle |
| Okunmuyor | metin vinyet içinde | vinyet ≤ %22 + metni opak katmana al |
| "Neon" hissi | accent glow eklendi | glow'u sil, accent'i yalnız zemin/metin olarak kullan |
| Başlık bulanık | Poiret One'a 600 denendi | yalnız 400; hiyerarşiyi punto kurar |
| Koyu modda siyah düz | gölge ve yüzey aynı tonda | `--surface` ile `--bg` arasında ΔL ≥ 4 |
| Mobilde ağır | vinyet + gölge birlikte tam güçte | mobilde vinyet %14, gölge tek katman |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `museum-thesis` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `acid-graphics` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Rembrandt_lighting | Rembrandt lighting · Wikipedia — tek kaynak ışık ve gölge yönü |
| https://m3.material.io/styles/elevation/overview | Material 3 · Elevation — tek katman gölge ölçüsü |
| https://www.awwwards.com/websites/black/ | Awwwards · chiaroscuro collections — koyu zemin + tek ışık kompozisyonları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast minimum — gölge içinde kalan metin eşiği |

## AI brief

```text
Stil: Shadow Stage (styles/101-shadow-stage/style.md, tokens.json)
Token: sadece [data-style="shadow-stage"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Poiret One 400 (tracking .04em, yalnız başlık), gövde Inter 400/600,
  etiket IBM Plex Mono. Ölçek 10/12/15/19/27/50; gövde ölçü 64ch.
Yüzey: koyu sahne (#12151a); tek kaynak ışık (üst-sol), tek katman gölge, köşe vinyeti <= %22.
  Radius 10/16px. Blur/glow yok.
Imza: hero'da üst-sol accent ışık lekesi (%12); tüm gölgeler aynı yöne; başlık en aydınlık öğe.
Renk: tek accent #e3b341 (ışık vurgusu); alarm --danger, uyarı --warn, onay --ok.
Hareket: enter .43s cubic-bezier(.4,.05,.25,1) y18 stagger .075; scroll top 79% .61s y20 once;
  pin yok; hover 250ms scale 1.030; prefers-reduced-motion zorunlu.
Yasak: çok kaynaklı/renkli gölge, gradient mesh, neon glow, Poiret One 600, 16px üstü radius.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Shadow Stage (shadow-stage) · family: Motion & Optics (96–105)
Token: --bg #12151a · --surface #1b2028 · --ink #eef1f5 · --accent #e3b341 · --line rgba(238,241,245,.15)
Radius: 10px / 16px · Typography: Poiret One / Inter / IBM Plex Mono
Required: Ekran başına tek ışık kaynağı; tüm gölgeler aynı yöne (üst-sol) düşer · Hiyerarşi parlaklıkla kurulur: başlık en aydınlık, çevre metin kademeli söner · Köşe vinyeti ≤ %22; metnin üstüne binmez
Banned: Çok kaynaklı gölge, renkli drop-shadow, neon glow. · Gradient mesh/blob arka plan ve cam blur (`--blur: 0px`). · Poiret One üzerinde 600/700 (sentetik bold).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="shadow-stage"] {
  --bg: #12151a; --bg-2: #171b21;
  --surface: #1b2028; --surface-2: #232a33;
  --ink: #eef1f5; --ink-soft: #adb6c2; --ink-faint: #7e8896;
  --accent: #e3b341; --accent-ink: #1a1405;
  --line: rgba(238,241,245,.15);
  --danger: #e93e2f;
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
  --radius: 10px; --radius-lg: 16px;
  --shadow: 0 24px 60px -42px rgba(0,0,0,.92); --shadow-hard: none;
  --font-display: "Poiret One", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: 0;
}
```
