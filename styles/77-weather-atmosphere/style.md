# 77 · Hava Durumu & Atmosfer

> **In one sentence:** Gökyüzünün katmanlarını taklit eden arayüz: yukarıdan aşağı incelen atmosfer gradyanı, sisli cam nav, bulut kütlesi ve tek gölgeyle kurulan ferah boşluk.

| | |
|---|---|
| **Feeling** | ferah, hafif, açık, öngörülebilir |
| **Best for** | hava/çevre uygulaması, seyahat planlama, enerji tüketimi & iklim paneli, açık hava etkinliği ürünü |
| **Avoid** | ödeme/güvenlik ekranı, yoğun operasyon tablosu — cam katman karar hızını düşürür |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="weather-atmosphere"]` |
| **Composition** | `split` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Hava Durumu & Atmosfer, ekranı **gökyüzü kesiti** gibi kurar: üstte açık mavi, aşağıda koyulaşan tek aile gradyan; nav ve modal sisli cam (blur 8px, opaklık %72); kart üstünde 2px atmosfer bandı; alan dolguları gradyanla söner. Yoğunluğu feda eder; karşılığında derinlik hissi ve "her şey akış halinde" okuması kazanır.

Kurucu kararları üç tanedir. Birincisi **tek renk ailesi**: gradyan yalnız mavi-mavi arasında; rainbow gradyan yok. İkincisi **cam sadece iki yerde** (nav, modal) — her kartı cam yapmak okunurluğu öldürür. Üçüncüsü **boşluk atmosferdir**: bölüm dikey boşluğu 88px; ferahlık süsle değil boşlukla kurulur.

Bedeli: düşük kontrast riski. Bu yüzden cam yüzeyde opaklık %72'nin altına inmez ve cam üstü metin daima `--ink` kullanır.

### What is not
- **Glassmorphism (08) değildir:** 08'in tamamı camdır ve ışık kenarı imzadır; 77'de cam yalnız nav + modal, imza ise **atmosfer gradyanı + bulut kütlesi**.
- **Liquid Glass (09) değildir:** 09 kırılma/sıvı hareketi taklit eder; 77'de blur sabit, hareket 780ms yumuşak ve sıvı efekt yok.
- **Aurora UI (12) değildir:** 12 çok renkli ışıma (mor/yeşil) taşır; 77 tek mavi ailesi, ışıma yerine gradyan.
- **Ethereal (29) değildir:** 29 sis + serif + düşük kontrast ile rüya kurar; 77 Poppins + yüksek kontrast (6.18:1) ile **okunur** hava durumu.

### Where it comes from
Meteoroloji görselleştirme geleneğinden (katmanlı haritalar, izobar eğrileri) ve Apple'ın malzeme dilinden. Bugün tekrar kullanılıyor çünkü çevre/enerji ürünleri "şu an ne oluyor" sorusunu atmosfer metaforuyla hızlı anlatıyor. Klişeye dönmemesi için korunacak detay: **gradyanın tek aile içinde kalması** ve camın iki bileşenle sınırlı olması.

### Recognition test in 3 seconds
1. Zemin yukarıdan aşağı incelen mavi gradyan; renk ailesi tek.
2. Nav sisli cam: altındaki içerik hafifçe bulanık görünüyor (blur 8px).
3. Kart üstünde 2px soldan sağa sönen atmosfer bandı var.
4. Buton 46px, radius 10px; gölge tek katman ve yumuşak.
5. Bölümler arası boşluk belirgin biçimde büyük (88px).

## Visual signature
- **Atmosfer gradyanı:** `linear-gradient(180deg, accent%10 + bg 0%, bg 46%, bg-2 100%)` — gövde zemini, tek aile.
- **Sisli cam:** yalnız nav ve modal: `backdrop-filter: blur(var(--blur))` + `surface %72`; opak fallback zorunlu.
- **Bulut kütlesi:** hero görselinde iki radial elips (surface %92 ve accent %14) + 160° gradyan.
- **Atmosfer bandı:** kart `::before`, 2px, `accent %42 → transparent`.
- **Hava piktogramı:** 2px çizgi, yuvarlak uç, dolgu %15 geçmez.
- **Nefes boşluğu:** bölüm dikey 88px (mobil 52px), kart padding 24px.
- **Hareket imzası:** 780ms `cubic-bezier(.25,.6,.15,1)`, 18px — bulut süzülmesi, sıçrama yok.
- **Typography:** Poppins (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#2b6491`; neutral scale `#eef2f7` → `#1a2430`.
- **Radius:** `10px` / `18px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Zemin atmosfer gradyanı: tek mavi ailesi, en fazla 2 durak (--bg → --bg-2)
2. Cam katman yalnız nav ve modal: blur var(--blur) = 8px, opaklık %72, opak fallback zorunlu
3. Radius 10px kontrol / 18px kart; 28px üstü yok
4. Gölge tek katman yumuşak (0 12px 32px); sert gölge yasak
5. Hava piktogramı 2px çizgi, dolgu %15 geçmez
6. Bölüm dikey boşluğu ≥ 88px (hava hissi boşlukla kurulur)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#eef2f7` | page background | as a card background |
| `--bg-2` | `#e4eaf2` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f6f9fc` | passive chip, hover background | primary button |
| `--ink` | `#1a2430` | title, body, icon | large background |
| `--ink-soft` | `#4d5b6b` | secondary text, description | — |
| `--ink-faint` | `#75828d` | decorative label, separator text | interactive text |
| `--accent` | `#2b6491` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(26,36,48,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.95:1** · `ink-soft/bg` **6.18:1** · `ink-faint/bg` **3.5:1 (decorative)** · `accent-ink/accent` **6.3:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poppins) | 54px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 34px | 600 | 1.2 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `10px` (buton, input, chip), `18px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Sert siyah zemin veya tam ekran saf beyaz.
- Serif display.
- Doygun ikinci-üçüncü renk, gökkuşağı gradyanı.
- Kalın 3px+ çerçeve, 0px keskin radius.
- Ekran başına 1'den fazla sürekli bulut/parıltı animasyonu.
- Opak fallback olmadan cam yüzey.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.3:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | H1 54px + bulut kütlesi görseli + tek CTA; cam nav | `shots/01-page.png` |
| Dashboard | düşük | 4 KPI + tek grafik; gradyan yalnız zeminde | `shots/01-page.png` |
| Form | düşük | 46px input, tek kolon; hata durumu etiketle | `shots/01-page.png` |
| Liste / tablo | düşük | 46px satır, hover `--surface-2` | `shots/01-page.png` |
| Boş durum | orta | bulut illüstrasyonu + "veri bekleniyor" mono etiketi | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım, her adımda tek soru; cam ilerleme çubuğu | `shots/01-page.png` |
| Pricing | orta | üç kart; öne çıkan kart accent üst bant | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | cam kullanılmaz; sade kart + tek CTA | `shots/01-page.png` |
| Modal | orta | cam yüzey + opak fallback + 24/56 gölge | `shots/01-page.png` |
| Bildirim / toast | orta | üst-sağ cam şerit + accent nokta | `shots/01-page.png` |
| Hata | düşük | `--danger` nokta + etiket; zemin değişmez | `shots/01-page.png` |
| Profil / ayar | orta | iki kolon form, cam yok | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.95:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.18:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.5:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.3:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.3:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94.6 | ≥ 60 target | thin text |

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
| Okunmuyor, "sisli" | cam her karta uygulanmış | cam yalnız nav + modal, opaklık %72 |
| Ekran "oyuncak" | gökkuşağı gradyan eklenmiş | tek mavi ailesi, 2 durak |
| Kontrast düşük | cam üstünde `--ink-soft` | cam üstü metin `--ink` |
| Boğucu his | bölüm boşluğu 40px'e inmiş | 88px (mobil 52px) koru |
| Blur mobilde bantlanıyor | blur 8px üstü / düşük güç | 8px sabit, mobilde statik blur |
| Performans | ekran başına 3+ backdrop-filter | cam katman ≤2 |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `aurora-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `safety-signage` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Rayleigh_scattering | Sky gradient / atmosphere optics — gökyüzü gradyanının doğal durakları |
| https://developer.apple.com/design/human-interface-guidelines/materials | Apple HIG · Materials — cam yüzey opaklığı ve blur ölçüsü |
| https://community.wmo.int/en/activity-areas/observations | WMO · weather symbols — hava durumu piktogram sözlüğü |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — cam üstü çizgi ve ikon kontrastı |

## AI brief

```text
Stil: Hava Durumu & Atmosfer (styles/77-weather-atmosphere/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="weather-atmosphere"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: dikey gradyan bg → bg-2, üstte accent %10; tek mavi ailesi, 2 durak.
Tipografi: --font-display Poppins 54/34/22 (500, -.01em); --font-body Inter 16px/1.60;
  --font-mono Space Mono 11px etiket (.10em, uppercase).
Yüzey: --bg / --surface + 1px var(--line) + 0 12px 32px / cam (surface %72 + blur var(--blur)) + 0 24px 56px.
  Radius 10px kontrol, 18px kart. Cam yalnız nav + modal, opak fallback zorunlu.
Renk: tek mavi ailesi accent #2b6491. ink/bg 13.95:1, ink-soft/bg 6.18:1, accent-ink/accent 6.30:1, ink-faint/bg 3.50:1.
Bileşen: buton/input 46px (0 24px / 0 16px); chip 28px hap; odak 2px accent + 3px offset.
Hareket: enter 780ms cubic-bezier(.25,.6,.15,1) 18px stagger .065; scroll top 83% 640ms 20px once;
  pin scrub 1.35 (+240%, ekran başına 1); hover 260ms görsel 1.012. prefers-reduced-motion zorunlu.
Yasak: sert siyah, serif display, gökkuşağı gradyan, kalın çerçeve, opak fallback'siz cam, >1 sürekli bulut animasyonu.
Çıktı: bileşen kodu + tek paragraf not (atmosfer gradyanını ve cam katmanı nereye koydun).

Style: Hava Durumu & Atmosfer (weather-atmosphere) · family: Nature & Organic (76–85)
Token: --bg #eef2f7 · --surface #ffffff · --ink #1a2430 · --accent #2b6491 · --line rgba(26,36,48,.14)
Radius: 10px / 18px · Typography: Poppins / Inter / Space Mono
Required: Zemin atmosfer gradyanı: tek mavi ailesi, en fazla 2 durak (--bg → --bg-2) · Cam katman yalnız nav ve modal: blur var(--blur) = 8px, opaklık %72, opak fallback zorunlu · Radius 10px kontrol / 18px kart; 28px üstü yok
Banned: Sert siyah zemin veya tam ekran saf beyaz. · Serif display. · Doygun ikinci-üçüncü renk, gökkuşağı gradyanı.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="weather-atmosphere"] {
  --bg: #eef2f7; --bg-2: #e4eaf2;
  --surface: #ffffff; --surface-2: #f6f9fc;
  --ink: #1a2430; --ink-soft: #4d5b6b; --ink-faint: #75828d;
  --accent: #2b6491; --accent-ink: #ffffff;
  --line: rgba(26,36,48,.14);
  --danger: #d5281c;
  --danger-ink: #ffffff;
  --ok: #008037;
  --ok-ink: #ffffff;
  --warn: #b45200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 10px; --radius-lg: 18px;
  --shadow: 0 12px 32px rgba(26,36,48,.12); --shadow-hard: none;
  --font-display: "Poppins", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
}
```
