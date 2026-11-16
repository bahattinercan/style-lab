# 85 · Coral Reef

> **In one sentence:** Su altı ışığının yumuşattığı koyu turkuaz zeminde, her türün bölgesi ve derinliğiyle kaydedildiği resif gözlem arayüzü.

| | |
|---|---|
| **Feeling** | yumuşak, akışkan, canlı, serin |
| **Best for** | deniz/resif gözlem uygulaması, dalış kaydı, sualtı tür kataloğu, akvaryum yönetimi |
| **Avoid** | kurumsal finans paneli, yüksek yoğunluklu tablo ekranı, katı endüstriyel ürünler |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="coral-reef"]` |
| **Composition** | `fullbleed` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Coral Reef, arayüzü bir **resif kesiti** gibi kurar: her tür bir mercan öbeği kartında, kartın içinde bölge chip'i, derinlik ve su sıcaklığı. Zemin koyu turkuaz (su), accent ise mercan pembesi-turuncusudur ve yalnız eylem/seçim/uyarı için kullanılır.

Üç kurucu karar: (1) **yumuşak form** — buton/chip/toast hap (999px), form 22px, kart 36px ve **asimetrik** köşe (36 36 36 12); keskin köşe yok; (2) **su gölgesi** — yalnız aşağı doğru geniş, düşük opaklıkta gölge; cam/blur ve sualtı ışık huzmesi yasak; (3) **yumuşak hareket** — giriş 980ms süzülür, hover 280ms ve görsel 1.058 büyür; su içinde hareket gibi yavaş ve akışkan.

Bedeli: yumuşak form yoğun tablo ekranlarında yer kaybettirir; ekran başına 2 tablo sınırı vardır. Metin 16px'in altına inmez, aksi halde "çocuk uygulaması" gibi okunur.

### What is not
- **Ethereal (29) değildir:** pastel lavanta, cam yüzey ve çok düşük kontrastla hayal-üstü bir dil kurar; Coral Reef koyu turkuaz, opak yüzey ve güçlü mercan accent ile çalışır.
- **Organic Bio (38) değildir:** açık krem zemin, sage yeşili ve blob radiuslarla "temiz organik" kurar; burada su altı koyuluğu ve mercan accent var.
- **Dopamine UI (18) değildir:** çok renkli enerji ve pastel bloklar kullanır; Coral Reef tek accent (mercan) ve su tonlarıyla sınırlıdır.
- **Aurora UI (12) değildir:** atmosferik gradient ve mor accentle çalışır; burada gradient yerine grain ve düz su tonları var.

### Where it comes from
Resif izleme raporlarından ve dalış kayıt defterinden: bölge (lagün, resif düzlüğü, yamaç), derinlik, sıcaklık, tür, gözlem notu. Bugün yeniden kullanılmasının nedeni: doğa/deniz uygulamaları genelde ya fotoğraf galerisi ya da soğuk veri tablosu oluyor; resifin katmanlı yapısını taşıyan bir arayüz ihtiyacı var. Klişeye dönüşmemesi için korunacak detay: **asimetrik mercan köşesi** ve **tek mercan accent**.

### Recognition test in 3 seconds
1. Zemin koyu turkuaz; hiçbir yüzey beyaz değil.
2. Accent mercan pembesi-turuncusu; ikinci doygun renk yok.
3. Buton/chip/toast hap, kart 36px ve **asimetrik** (alt-sol 12px) köşe.
4. Her kartta bölge chip'i + derinlik (m) + sıcaklık (°C) görünüyor.
5. Gölge yalnız aşağı yönde geniş ve yumuşak; parlama/caustic efekti yok.

## Visual signature
- **Mercan köşesi:** kart `border-radius: 36px 36px 36px 12px`; buton/chip/toast 999px; form 22px.
- **Su tonu katmanları:** `--bg` → `--surface` → `--surface-2` üç koyu turkuaz kademe; sınır 1px `--line`.
- **Mercan accent:** `#ff8a73` yalnız eylem/seçim/uyarı; accent üstü metin `#2a0d08`.
- **Kabarcık dizisi:** hero görselinde 5–7 dairesel halka, 1px `--line`, yukarı doğru azalan boyut (statik).
- **Yumuşak gölge:** `0 10px 24px -14px rgba(4,14,16,.6)` — aşağı, geniş, düşük opaklık.
- **Su zerresi grain:** `--grain: .03`; fotoğrafın üstünde kullanılmaz.
- **Bölge chip'i:** hap, 11px `Courier Prime` 0.12em — lagün · resif düzlüğü · yamaç · çukur · gelgit.
- **Typography:** Baloo 2 (display) + Nunito (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#ff8a73`; neutral scale `#0d2b30` → `#e6f4f2`.
- **Radius:** `22px` / `36px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her tür kaydı: tür adı + resif bölgesi (chip) + derinlik (m) + su sıcaklığı (°C)
2. Mercan öbeği kartları asimetrik köşe (36 36 36 12) ve 24px padding
3. Mercan accent yalnız eylem/seçim/uyarı; su tonları accent değil
4. Buton/chip/toast hap (999px); form alanı 22px; kart 36px
5. Gölge aşağı doğru yumuşak; cam/blur, parlama, caustic animasyonu yok
6. Su zerresi grain .03 yalnız zemin katmanında; derinlik ölçüleri mono tabular

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0d2b30` | page background | as a card background |
| `--bg-2` | `#092226` | partition divider floor, table top | button background |
| `--surface` | `#123840` | kart, input, modal | full-page background |
| `--surface-2` | `#174650` | passive chip, hover background | primary button |
| `--ink` | `#e6f4f2` | title, body, icon | large background |
| `--ink-soft` | `#a4c6c4` | secondary text, description | — |
| `--ink-faint` | `#779c9b` | decorative label, separator text | interactive text |
| `--accent` | `#ff8a73` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#2a0d08` | text above accent | non-accent background |
| `--line` | `rgba(230,244,242,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.23:1** · `ink-soft/bg` **8.15:1** · `ink-faint/bg` **4.99:1 (decorative)** · `accent-ink/accent` **7.88:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Baloo 2) | 30px (mobile 30px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `22px` (buton, input, chip), `36px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Cam/blur, sualtı ışık huzmesi, caustic animasyonu.
- 12px altı kart köşesi, keskin köşe; hap olmayan buton.
- İkinci doygun accent (mor/mavi); accent ile `--danger` yan yana.
- Büyük harf gövde, 14px altı gövde metni, italik.
- Sürekli yüzen balık/kabarcık döngüsü, bounce, yatay parallax.
- Beyaz/açık zemin.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 22px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 22px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 22px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 22px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 22px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 22px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 22px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.5:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 5/7 hero: solda başlık + tek hap CTA, sağda mercan öbeği + kabarcıklar | `shots/01-page.png` |
| Dashboard | orta | 3 KPI (tür, ortalama derinlik, sıcaklık) + bölge dağılımı + gözlem listesi | `shots/01-page.png` |
| Form | düşük | dalış kaydı: bölge, derinlik+birim, sıcaklık, tür, not | `shots/01-page.png` |
| Liste / tablo | orta | 44px satır, bölge chip'i, sağda mono derinlik | `shots/01-page.png` |
| Boş durum | düşük | "bu bölgede gözlem yok" + ilk gözlemi ekle | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: resif seç → bölge tanımla → ilk gözlem | `shots/01-page.png` |
| Pricing | orta | iki plan; gözlem/dışa aktarma limitleri hap kartlarda | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek kart, 48px alanlar, tek eylem | `shots/01-page.png` |
| Modal | orta | tür detayı: foto, derinlik, sıcaklık, gözlem notu | `shots/01-page.png` |
| Bildirim | düşük | hap toast, alt ortada, 4.2sn | `shots/01-page.png` |
| Hata | düşük | danger çerçeve + neden + yeniden dene | `shots/01-page.png` |
| Profil / ayar | orta | resif listesi, birim (m/ft, °C/°F), uyarı eşiği | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.23:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.15:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.99:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.88:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.5:1 | ≥ 3 | accent ring |
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
| "Çocuk uygulaması" hissi | 14px altı metin + çok yuvarlak her şey | gövde 16px, asimetrik köşe, tek accent |
| Kontrast düşük | su tonu üstünde `--ink-soft` kullanılmış | gövde `--ink`, ikincil `--ink-soft` |
| "Cam" kayması | blur/parlama eklendi | `--blur: 0`, opak yüzey |
| Mercan fazla | accent dekorasyon olarak | accent yalnız eylem/seçim |
| Bölge karışıyor | yalnız renkli chip | chip metni + bölge adı |
| Mobilde taşıyor | 20px gutter + tablo | tek kolon, tablo karta |
| Koyu modda doku | grain düşük | koyu blokta `.025` + çizgi %18 |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `ocean-current` | Same level of seriousness; accent sharing is not allowed |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| garnish | `organic-bio` | Same level of seriousness; accent sharing is not allowed |
| garnish | `aurora-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://coralreefwatch.noaa.gov/ | NOAA · Coral Reef Watch — resif bölgesi, sıcaklık stresi ve derinlik verisi sunumu |
| https://www.icriforum.org/ | International Coral Reef Initiative — resif koruma statüsü ve izleme terminolojisi |
| https://www.gbif.org/ | GBIF · biyolojik çeşitlilik kaydı — tür kaydı künyesi ve gözlem alanları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — koyu su zemininde metin kontrastı |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | www.w3.org — odak halkası görünürlüğü |

## AI brief

```text
Stil: Coral Reef (styles/85-coral-reef/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="coral-reef"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Baloo 2 600) H1/H2; --font-body (Nunito 400/700) gövde 16px/1.66;
  --font-mono (Courier Prime) etiket 11px +0.14em büyük harf ve tüm derinlik/sıcaklık değerleri (tabular).
Yüzey: koyu turkuaz su zemini + su zerresi grain (--grain .03). radius --radius 22px, --radius-lg 36px,
  kartta asimetrik: 36px 36px 36px 12px; buton/chip/toast 999px hap. Gölge yalnız aşağı yönlü yumuşak.
Renk: tek accent mercan (--accent); accent üstü --accent-ink; ikinci doygun accent yasak.
Kayıt: tür adı + bölge chip'i (lagün / resif düzlüğü / yamaç / çukur / gelgit) + derinlik m + sıcaklık °C.
Hareket: enter 0.98s cubic-bezier(.2,.8,.3,1) 22px stagger 0.08 · scroll top 79% 0.88s 18px once:false ·
  pin açık scrub 1.05 +110% · hover 280ms scale 1.058; prefers-reduced-motion zorunlu.
Yasak: cam/blur, caustic animasyonu, keskin köşe, ikinci accent, büyük harf gövde, sürekli yüzen balık/kabarcık, beyaz zemin.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Coral Reef (coral-reef) · family: Nature & Organic (76–85)
Token: --bg #0d2b30 · --surface #123840 · --ink #e6f4f2 · --accent #ff8a73 · --line rgba(230,244,242,.16)
Radius: 22px / 36px · Typography: Baloo 2 / Nunito / Courier Prime
Required: Her tür kaydı: tür adı + resif bölgesi (chip) + derinlik (m) + su sıcaklığı (°C) · Mercan öbeği kartları asimetrik köşe (36 36 36 12) ve 24px padding · Mercan accent yalnız eylem/seçim/uyarı; su tonları accent değil
Banned: Cam/blur, sualtı ışık huzmesi, caustic animasyonu. · 12px altı kart köşesi, keskin köşe; hap olmayan buton. · İkinci doygun accent (mor/mavi); accent ile `--danger` yan yana.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="coral-reef"] {
  --bg: #0d2b30; --bg-2: #092226;
  --surface: #123840; --surface-2: #174650;
  --ink: #e6f4f2; --ink-soft: #a4c6c4; --ink-faint: #779c9b;
  --accent: #ff8a73; --accent-ink: #2a0d08;
  --line: rgba(230,244,242,.16);
  --danger: #fb513f;
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
  --radius: 22px; --radius-lg: 36px;
  --shadow: 0 10px 24px -14px rgba(4,14,16,.6); --shadow-hard: none;
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
