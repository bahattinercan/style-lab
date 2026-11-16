# 126 · Marble Vein

> **In one sentence:** Damarı kesilmiş bir taş plaka gibi sakin, grafitle çizilmiş lüks bir malzeme kataloğu arayüzü.

| | |
|---|---|
| **Feeling** | sakin, soğuk, ağır, kusursuz |
| **Best for** | malzeme/taş kataloğu, mimarlık stüdyosu portfolyosu, mermer & yüzey seçici, lüks ürün konfigüratörü |
| **Avoid** | hızlı operasyon paneli, oyun/etkinlik, çocuk uygulamaları — burada dinginlik "yavaş" okunur |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="marble-vein"]` |
| **Composition** | `fullbleed` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Marble Vein, arayüzü **kesilmiş bir taş plaka** gibi kurar: soğuk beyaz zemin, tek ince damar çizgisi, grafitle yazılmış künye. Renk neredeyse yoktur — lüks, süsle değil **yüzey kalitesi ve hizalama** ile anlatılır.

Üç kurucu karar: (1) **grafitle accent** — siyaha yakın bir grafit `#242b2e` tek vurgu; altın/parlak metal yok; (2) **plaka fiziği** — radius 5px (kontrol) ve 12px (kart), 1px çizgi, gölge yalnız yüzen katmanda; (3) **serif + nötr sans** — Lora 600 başlık, Inter 400 gövde, mono yalnız ölçü ve etiketlerde.

Bedeli: vurgu yokluğu hızlı tarama zorlaştırır; bu yüzden her ekranda **tek bir damar çizgisi ve tek birincil eylem** bulunur. İkinci bir vurgu rengi eklenirse stil "katalog"dan "dekorasyon"a kayar.

### What is not
- **Luxury Typography (04) değildir:** krem zemin, altın accent ve ince serif ile butik dil kurar; Marble Vein soğuk beyaz + grafit accent ve 5/12px ölçülü plaka köşesi kullanır.
- **Art Deco (26) değildir:** koyu yeşil + altın, simetri ve geometrik süs vardır; burada süs yok, damar tek çizgidir.
- **Editorial Design (03) değildir:** sıcak krem kâğıt ve terracotta accent ile dergi kurar; bu stil taş beyazı ve grafitle çalışır.
- **Machined Metal Panel (57) değildir:** soğuk gri + pas accent ve endüstriyel panel dili; 126 malzeme kataloğu ve lüks vitrin dilidir.

### Where it comes from
Mermer ocağı ve mimarlık malzeme kütüphanesi geleneğinden: plaka adı, yüzey (mat/parlak), kalınlık, damar yönü, parti no. Bugün yeniden kullanılmasının nedeni: malzeme seçimi yapan mimar/iç mimar ekranda **doku ve damarı** görmek istiyor ama arayüzler genelde e-ticaret ızgarasına benziyor. Klişeye dönüşmemesi için korunacak detay: **tek damar çizgisi** ve grafit accent.

### Recognition test in 3 seconds
1. Zemin soğuk beyaz; accent neredeyse siyah (grafit), altın/parlak metal yok.
2. Ekranda tek bir ince damar çizgisi var; süs tekrarı yok.
3. Köşeler 5px (buton/input) ve 12px (kart); hap buton yok.
4. Başlıklar yüksek kontrastlı serif (Lora 600, Didone değil), gövde nötr sans.
5. Her kartta tür + yüzey + kalınlık (mm) + ağırlık (kg) künyesi var.

## Visual signature
- **Grafit accent:** `#242b2e` yalnız birincil eylem, seçili öğe ve odak halkası; accent üstü metin beyaz.
- **Tek damar çizgisi:** hero görselinde 1px eğri damar; sayfada tekrar eden ikinci damar yok.
- **Plaka köşesi:** radius 5px (kontrol) / 12px (kart, modal); 12px üstü yok.
- **Künye dili:** 10–11px JetBrains Mono büyük harf `0.16em`; değerler tabular ve sağa hizalı.
- **Yüzey tonu:** `--bg` → `--surface` yalnız 1–2 ton fark; derinlik gölgeyle değil çizgiyle.
- **Taş tozu:** `--grain: .02` tüm zeminde; fotoğrafın üstünde kullanılmaz.
- **Ölçü sütunu:** kalınlık ve ağırlık sabit sütunlarda, birim ayrı ve `--ink-faint`.
- **Typography:** Lora (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#242b2e`; neutral scale `#f3f4f3` → `#14181a`.
- **Radius:** `5px` / `12px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her taş kaydı: tür + yüzey (mat/parlak) + kalınlık (mm) + ağırlık (kg)
2. Damar çizgisi ekran başına 1, 1px ve ince; süs olarak çoğaltılmaz
3. Katman ayrımı 1px çizgi + 1px ton; gölge yalnız modal/menüde
4. Lora 600 başlık, Inter 400 gövde; mono yalnız ölçü/etiket
5. Radius 5px ve 12px dışında değer yok; hap buton yok
6. Taş tozu grain .02 yalnız zemin katmanında

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f3f4f3` | page background | as a card background |
| `--bg-2` | `#e8eae8` | partition divider floor, table top | button background |
| `--surface` | `#fdfdfc` | kart, input, modal | full-page background |
| `--surface-2` | `#f0f2f0` | passive chip, hover background | primary button |
| `--ink` | `#14181a` | title, body, icon | large background |
| `--ink-soft` | `#4c565a` | secondary text, description | — |
| `--ink-faint` | `#748083` | decorative label, separator text | interactive text |
| `--accent` | `#242b2e` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f5f7f6` | text above accent | non-accent background |
| `--line` | `rgba(20,24,26,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.2:1** · `ink-soft/bg` **6.84:1** · `ink-faint/bg` **3.69:1 (decorative)** · `accent-ink/accent` **13.37:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Lora) | 32px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `5px` (buton, input, chip), `12px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Altın/parlak metal accent, glossy yüzey, cam/blur, gradient.
- 12px üstü radius, hap buton, yumuşak gölge.
- İkinci vurgu rengi; accent'i dekorasyon olarak kullanmak.
- Büyük harf gövde, 14px altı metin.
- Sürekli damar animasyonu, parallax, bounce.
- Grain'i fotoğraf üstünde kullanmak.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 5px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 5px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 5px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 5px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 5px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 5px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 5px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 14.13:1 (≥ 3 on background/surface).
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
| Landing / hero | orta | 7/5 hero: solda başlık + tek grafit CTA, sağda plaka + damar | `shots/01-page.png` |
| Dashboard | düşük | 3 KPI (plaka, parti, kalınlık) + malzeme listesi | `shots/01-page.png` |
| Form | düşük | plaka girişi: tür, yüzey, kalınlık+mm, ağırlık+kg | `shots/01-page.png` |
| Liste / tablo | orta | 40px satır, mono ölçü sütunları, chip | `shots/01-page.png` |
| Boş durum | düşük | "bu partide plaka yok" + ilk plakayı ekle | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: koleksiyon aç → plaka ekle → yüzey seç | `shots/01-page.png` |
| Pricing | düşük | iki plan, plaka/parti limitleri | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek plaka, 44px alanlar, tek eylem | `shots/01-page.png` |
| Modal | orta | plaka detayı: damar fotoğrafı + teknik künye | `shots/01-page.png` |
| Bildirim | düşük | 40px toast, sol ink şerit, 4sn | `shots/01-page.png` |
| Hata | düşük | danger çerçeve + neden + sonraki adım | `shots/01-page.png` |
| Profil / ayar | orta | koleksiyon listesi, birim (mm/inç), yüzey tercihi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.2:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.84:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.69:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 13.37:1 | ≥ 4.5 | button text |
| focus ring/ground | 14.13:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.9 | ≥ 60 target | thin text |

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
| "Katalog şablonu" hissi | her kartta aynı damar | damar ekran başına 1 |
| Lüks kayboluyor | altın/parlak accent eklendi | grafit accent, parlaklık yok |
| Okunmuyor | `--ink-faint` gövdeye | gövde `--ink`/`--ink-soft` |
| Taş "ucuz" görünüyor | 12px üstü radius | 5/12px sabit |
| Ölçüler karışıyor | birim yok | sabit birim sütunu + tabular |
| Koyu modda damar kayboluyor | çizgi opaklığı düşük | koyu blokta %16 + accent açık |
| Mobilde taşıyor | 3×4 katalog | 2'li katalog + kart |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `japanese-ma` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.naturalstoneinstitute.org/ | Natural Stone Institute · taş standartları — yüzey sınıfları, kalınlık ve bakım terminolojisi |
| https://www.vam.ac.uk/ | V&A · heykel ve taş koleksiyonu — mermer yüzey/damar dili ve künye biçimi |
| https://www.britannica.com/art/marble | Britannica · mermer — taş türleri ve tarihsel kullanım bağlamı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — açık taş zemininde metin kontrastı |

## AI brief

```text
Stil: Marble Vein (styles/126-marble-vein/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="marble-vein"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Lora 600) H1/H2; --font-body (Inter 400/600) gövde 16px/1.64;
  --font-mono (JetBrains Mono) etiket 11px +0.16em ve tüm ölçüler (tabular).
Yüzey: soğuk taş beyazı + taş tozu grain (--grain .02). radius YALNIZ 5px (buton/input/chip) ve 12px (kart/modal).
  Katman ayrımı 1px var(--line) + 1 ton; gölge yalnız yüzen katmanda 1–2px.
Renk: tek accent grafit (--accent), accent üstü --accent-ink; altın/parlak metal yasak.
Künye: tür + yüzey (mat/parlak) + kalınlık mm + ağırlık kg; değerler mono tabular, birim ayrı.
Hareket: enter 0.64s cubic-bezier(.18,.72,.22,1) 13px st.032 · scroll top 69% 0.87s 17px once ·
  pin kapalı · hover 310ms scale 1.035; prefers-reduced-motion zorunlu.
Yasak: altın accent, glossy/cam, gradient, 12px üstü radius, hap buton, ikinci vurgu, sürekli damar animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Marble Vein (marble-vein) · family: Material & Luxury (126–135)
Token: --bg #f3f4f3 · --surface #fdfdfc · --ink #14181a · --accent #242b2e · --line rgba(20,24,26,.14)
Radius: 5px / 12px · Typography: Lora / Inter / JetBrains Mono
Required: Her taş kaydı: tür + yüzey (mat/parlak) + kalınlık (mm) + ağırlık (kg) · Damar çizgisi ekran başına 1, 1px ve ince; süs olarak çoğaltılmaz · Katman ayrımı 1px çizgi + 1px ton; gölge yalnız modal/menüde
Banned: Altın/parlak metal accent, glossy yüzey, cam/blur, gradient. · 12px üstü radius, hap buton, yumuşak gölge. · İkinci vurgu rengi; accent'i dekorasyon olarak kullanmak.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="marble-vein"] {
  --bg: #f3f4f3; --bg-2: #e8eae8;
  --surface: #fdfdfc; --surface-2: #f0f2f0;
  --ink: #14181a; --ink-soft: #4c565a; --ink-faint: #748083;
  --accent: #242b2e; --accent-ink: #f5f7f6;
  --line: rgba(20,24,26,.14);
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
  --radius: 5px; --radius-lg: 12px;
  --shadow: 0 1px 2px rgba(20,24,26,.07); --shadow-hard: none;
  --font-display: "Lora", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: 0;
}
```
