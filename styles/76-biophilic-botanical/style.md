# 76 · Biyofilik Botanik

> **In one sentence:** Doğayı dekor olarak değil ölçü olarak kullanan arayüz: kırık beyaz kâğıt zemin, yaprak biçimli kart, tek yumuşak gölge ve derin yaprak yeşilinin taşıdığı sakin hiyerarşi.

| | |
|---|---|
| **Feeling** | sakin, canlı, davetkâr, soluk alan |
| **Best for** | sağlık/wellness ürünü, eğitim platformu, sürdürülebilirlik raporu, yaşam alanı vitrini |
| **Avoid** | finans trading ekranı, güvenlik uyarı arayüzü, yoğun veri tablosu — burada "yumuşaklık" okunurluğu yer |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="biophilic-botanical"]` |
| **Composition** | `centered` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Biyofilik Botanik, arayüzü bir **kâğıt üzerinde büyüyen form** gibi kurar: kırık beyaz zemin (`--bg`), üstte iki yumuşak radial ışık lekesi, kart köşeleri çapraz biçimde 32/12px kırılmış (yaprak biçimi), gölge tek katman ve daima yumuşak. Sertliği feda eder; karşılığında düşük bilişsel yük ve uzun okuma dayanıklılığı kazanır.

Kurucu kararları üç tanedir. Birincisi **yumuşaklık ölçülüdür**: radius 14px kontrol, 24px kart, `--radius` asla "her yeri yuvarlak" anlamına gelmez — chip hap, kart yaprak, buton 14px. İkincisi **tek organik form**: ekran başına bir yaprak köşesi ailesi ya da bir dal çizgisi; süs çoğalırsa stil "doğal" değil "dağınık" okunur. Üçüncüsü **boşluk cömerttir**: bölüm dikey boşluğu 80px, gövde satır aralığı 1.65.

Bedeli: yoğunluğa dayanmaz. Bu yüzden tablo ve dashboard ekranlarında kart sayısı sınırlanır, veri yoğunluğu gereken yerde bu stil garnitür olarak kalır.

### What is not
- **Organic / Biophilic (38) değildir:** 38 toprak yeşili + Fraunces ile "organik akış" kurar ama kart köşeleri standart ve gölge yok; 76'da yaprak biçimli çapraz köşe (32/12px) ve tek yumuşak gölge imzadır.
- **Japandi (06) değildir:** 06 düşük kontrast ve wabi-sabi dinginliği satar; 76'da `ink-soft/bg` **6.47:1** — okunurluktan ödün verilmez.
- **Claymorphism (11) değildir:** 11 pastel + çift gölge + şişkin 3B form kullanır; 76'da gölge tek, form düz, radius çapraz.
- **Glassmorphism (08) değildir:** 08 blur ve yarı saydamlıkla katman kurar; 76 opak, blur 0.

### Where it comes from
Biyofilik tasarım araştırmalarından (Terrapin'in 14 deseni: görsel doğa bağlantısı, malzeme, ışık) ve 2020'lerin "sakin teknoloji" dalgasından. Bugün tekrar kullanılıyor çünkü uzun oturumlu ürünlerde ekran yorgunluğu ölçülebilir bir sorun; yeşil skala + yumuşak boşluk bunu düşürür. Klişeye dönmemesi için korunacak detay: **boşluğun ölçülü olması** (80px bölüm, 1.65 satır) ve yaprak köşesinin çapraz olması — her kartı yuvarlamak stili jenerik "kart UI"ya çevirir.

### Recognition test in 3 seconds
1. Zemin saf beyaz değil, hafif yeşile çalan kırık beyaz; üstte iki yumuşak ışık lekesi var.
2. Kart köşeleri çapraz: iki köşe geniş, iki köşe dar (32/12px).
3. Tek gölge var, yumuşak ve büyük; hiçbir yerde sert/ofset gölge yok.
4. Buton 44px, radius 14px; chip hap biçiminde (999px).
5. Gövde satır aralığı geniş (1.65), bölümler arası boşluk 80px.

## Visual signature
- **Yaprak köşesi:** `border-radius: 32px 12px 32px 12px` (kart), `20px 10px 20px 10px` (KPI/input kabı).
- **Işık lekeleri:** gövdeye iki `radial-gradient` — sol üst accent %10, sağ alt ok %8; başka gradyan yok.
- **Tek gölge:** `--shadow: 0 8px 24px rgba(27,42,31,.10)`; sert/ofset/iç gölge yasak.
- **Dal çizgisi:** kart alt-solunda 64px × 1px accent %45 çizgi (imza işareti, `::after`).
- **Hap chip:** 26px yükseklik, `999px` radius, 12px 600 gövde yazı.
- **Nefes ölçüsü:** bölüm dikey 80px (mobil 48px), kart padding 24px.
- **Hareket imzası:** 680ms `cubic-bezier(.3,.7,.2,1)`, 24px yukarı — "büyüme" hissi, sıçrama yok.
- **Typography:** Fraunces (display) + Nunito (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#2f6b3f`; neutral scale `#f2f4ea` → `#1b2a1f`.
- **Radius:** `14px` / `24px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Yüzeyler yumuşak: radius 14px (kontrol) / 24px (kart), hap biçimli radius yalnız chip
2. Zemin sıcak kırık beyaz (--bg), saf beyaz #ffffff değil
3. Derinlik tek yumuşak gölge (0 8px 24px); sert/ofset gölge yok
4. Her ekranda tek organik form (yaprak köşesi, blob veya dal çizgisi) görünür
5. Renk paleti bitki skalası: accent derin yaprak yeşili, ikinci doygun renk yok
6. Gövde satır aralığı ≥ 1.6; boşluklar cömert (bölüm dikey 80px)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2f4ea` | page background | as a card background |
| `--bg-2` | `#e9eddd` | partition divider floor, table top | button background |
| `--surface` | `#fbfcf6` | kart, input, modal | full-page background |
| `--surface-2` | `#f5f8ee` | passive chip, hover background | primary button |
| `--ink` | `#1b2a1f` | title, body, icon | large background |
| `--ink-soft` | `#4a5c4a` | secondary text, description | — |
| `--ink-faint` | `#73826f` | decorative label, separator text | interactive text |
| `--accent` | `#2f6b3f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(27,42,31,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.53:1** · `ink-soft/bg` **6.47:1** · `ink-faint/bg` **3.67:1 (decorative)** · `accent-ink/accent` **6.37:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 48px (mobile 30px) | 400 | 1.08 | -0.02em |
| H2 | same | 32px | 600 | 1.2 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `14px` (buton, input, chip), `24px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Saf gri/beton zemin ve nötr kurumsal mavi.
- 0px keskin köşe, 2px ve üstü kalın çerçeve.
- Neon, gradyan patlaması, cam/blur efekti.
- Geometrik sans display, italik display, 700 üstü Fraunces.
- Dolu renkli ikon, emoji.
- Sıkı satır aralığı (1.4 altı) ve 3'ten fazla gölge katmanı.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 14px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 14px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 14px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 14px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 14px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 14px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 14px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.18:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: solda H1 + tek CTA, sağda yaprak köşeli görsel kartı | `shots/01-page.png` |
| Dashboard | düşük | en fazla 3 KPI kartı; grafik tek, süs yok | `shots/01-page.png` |
| Form | düşük | 44px input, etiket üstte 11px mono; tek kolon | `shots/01-page.png` |
| Liste / tablo | düşük | 48px satır (yoğunluk düşük), hover `--surface-2` | `shots/01-page.png` |
| Boş durum | orta | boş kart + dal çizgisi + tek cümle + tek eylem | `shots/01-page.png` |
| Onboarding | yüksek | her adım tek fikir, adım 1/3 mono etiketi | `shots/01-page.png` |
| Pricing | orta | üç kart; öne çıkan kart accent %6 zemin + dal çizgisi | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | kart sadeleşir, gölge kalır; süs yok | `shots/01-page.png` |
| Modal | orta | 24px radius + yumuşak gölge, üstte dal çizgisi | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sol, yaprak noktası + 14px metin | `shots/01-page.png` |
| Hata | düşük | `--danger` nokta + etiket; zemin değişmez | `shots/01-page.png` |
| Profil / ayar | orta | iki kolon form, bölüm başlıkları 22px display | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.53:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.47:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.67:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.37:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.18:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94.7 | ≥ 60 target | thin text |

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
| Ekran "şablon kart UI" gibi | her kart eşit yuvarlanmış | yaprak köşesini çapraz uygula (32/12px) |
| Yeşil okunmuyor | accent metin olarak kullanılmış | accent yalnız dolgu/çizgi; metin `--ink` |
| Sayfa "oyuncak" görünüyor | radius 24px tüm bileşenlerde | kontrol 14px, kart 24px, chip 999px |
| Yorgunluk değil ama dağınıklık | birden fazla organik form | ekran başına tek yaprak/dal formu |
| Gölge kirli | çok katmanlı gölge eklenmiş | tek katman `var(--shadow)` |
| Mobilde taşma | 24px gutter korunmuş | 768 altı 16px gutter, tek kolon |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `organic-bio` | Same level of seriousness; accent sharing is not allowed |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Biophilic_design | Biophilic design — doğa referansının ölçülebilir ilkeleri |
| https://www.terrapinbrightgreen.com/reports/14-patterns/ | Terrapin Bright Green · 14 Patterns — ışık, malzeme ve karmaşıklık desenleri |
| https://www.wellcertified.com/ | WELL Building Standard · Biophilia — mekân ve görsel bağlantı ölçütleri |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast Minimum — yeşil tonlarında metin kontrastı |

## AI brief

```text
Stil: Biyofilik Botanik (styles/76-biophilic-botanical/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="biophilic-botanical"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg kırık beyaz + iki radial ışık (accent %10 sol üst, ok %8 sağ alt).
Tipografi: --font-display Fraunces 48/32/22 (500, -.01em); --font-body Nunito 16px/1.65;
  --font-mono IBM Plex Mono 11px etiket (.08em, uppercase).
Yüzey: --bg / --surface + 1px var(--line) + var(--shadow) 0 8px 24px / yüzen 0 16px 48px.
  Radius 14px kontrol, 24px kart, kart köşesi çapraz 32px 12px 32px 12px, chip 999px.
Renk: tek yeşil ailesi accent #2f6b3f; durum renkleri yalnız etiket + ikonla.
  ink/bg 13.53:1, ink-soft/bg 6.47:1, accent-ink/accent 6.37:1, ink-faint/bg 3.67:1 (dekoratif).
Bileşen: buton/input 44px (padding 0 22px / 0 16px); chip 26px hap; odak 2px accent + 3px offset.
Hareket: enter 680ms cubic-bezier(.3,.7,.2,1) 24px stagger .085; scroll top 77% 740ms 26px once;
  pin yok; hover 320ms görsel 1.03. prefers-reduced-motion zorunlu.
Yasak: saf gri/beton zemin, 0px köşe, kalın çerçeve, neon, cam, dolu renkli ikon, sıkı satır aralığı.
Çıktı: bileşen kodu + tek paragraf not (yaprak köşesini ve dal çizgisini nereye koydun).

Style: Biyofilik Botanik (biophilic-botanical) · family: Nature & Organic (76–85)
Token: --bg #f2f4ea · --surface #fbfcf6 · --ink #1b2a1f · --accent #2f6b3f · --line rgba(27,42,31,.14)
Radius: 14px / 24px · Typography: Fraunces / Nunito / IBM Plex Mono
Required: Yüzeyler yumuşak: radius 14px (kontrol) / 24px (kart), hap biçimli radius yalnız chip · Zemin sıcak kırık beyaz (--bg), saf beyaz #ffffff değil · Derinlik tek yumuşak gölge (0 8px 24px); sert/ofset gölge yok
Banned: Saf gri/beton zemin ve nötr kurumsal mavi. · 0px keskin köşe, 2px ve üstü kalın çerçeve. · Neon, gradyan patlaması, cam/blur efekti.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="biophilic-botanical"] {
  --bg: #f2f4ea; --bg-2: #e9eddd;
  --surface: #fbfcf6; --surface-2: #f5f8ee;
  --ink: #1b2a1f; --ink-soft: #4a5c4a; --ink-faint: #73826f;
  --accent: #2f6b3f; --accent-ink: #ffffff;
  --line: rgba(27,42,31,.14);
  --danger: #d6291d;
  --danger-ink: #ffffff;
  --ok: #008138;
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
  --radius: 14px; --radius-lg: 24px;
  --shadow: 0 8px 24px rgba(27,42,31,.10); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
