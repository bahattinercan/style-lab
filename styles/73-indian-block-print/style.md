# 73 · Indian Block Print

> **In one sentence:** Her yüzeyin 1–4px kayma iziyle basıldığı, damganın tek renk ve keskin kaldığı blok baskı arayüzü.

| | |
|---|---|
| **Feeling** | zanaatkâr, ölçülü, tekrarlı, sıcak-soğuk karşıt |
| **Best for** | tekstil/zanaat markası, ürün koleksiyonu vitrini, kültür yayını, abonelik kutusu |
| **Avoid** | yoğun veri paneli, klinik form, yüksek hızlı oyun arayüzü — ofset izleri taramayı yavaşlatır |
| **Difficulty** | düşük-orta · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="indian-block-print"]` |
| **Composition** | `type` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Indian Block Print, Bagru/Sanganer blok baskısının ekran karşılığıdır: el oyması ahşap bloğun kâğıda bıraktığı **keskin kenar**, **1–4px kayma izi** ve **tek renk damga tekrarı**. Kurucu kararları üç tanedir. Birincisi **kayma izi**: her kart 1px, birincil yüzey 4px ofset "mürekkep izi" taşır; blur yok, çünkü baskıda mürekkep keskin kenar bırakır. İkincisi **tek renk damga**: çivit (`--accent`) dışında damga rengi yok; damga 24×24px, 2px çizgi. Üçüncüsü **blok tekrarı**: içerik 3'lü blok hâlinde (4/4/4) basılır, aralık 20px — blok baskı ritmi budur.

Kazandığı şey: **dokunulur zanaat hissi** ve düşük görsel maliyet (damga CSS ile kurulur). Feda ettiği şey: **hafiflik ve hız** — ofset izleri küçük metinlerin yanında gürültü üretir, bu yüzden gövde ölçüsü 60 ch ile sınırlıdır.

### What is not
- **Andean Textile (72) değildir:** 72 basamak motifi + aynalı simetri + karmin kullanır, gölge tek yüzeyde 3px ofset; 73'te **her** kart 1px iz taşır, motif **damga/çiçek** ve accent **çivit**.
- **Nordic Folk (66) değildir:** 66 bitkisel kıvrım bandı ve madder kırmızısı; 73'te kıvrım yok, damga **tek renk çivit** ve kart köşesinde.
- **Editorial Design (03) değildir:** 03 kolon ritmi ve drop cap ile metin kurar; 73'te metin 60 ch'de kalır, blok tekrarı ve damga başroldedir.
- **Andalusian Azulejo (69) değildir:** 69 harç ızgarası ve kobalt **döşeme** kurar (bitişik blok, gap 2px); 73 **baskı** kurar (ayrı kartlar, ofset iz).
- **"Krem zemin + mavi accent" jeneriği değildir:** kimlik ofset iz ve damga tekrarından gelir; accent rengi tek başına yeterli sayılmaz.

### Where it comes from
Racastan/Gujarat blok baskısı: ahşap blok elle oyulur, boyaya batırılır, kumaşa **tek tek** basılır; kayma (misregistration) teknik bir kusur değil, üretimin imzasıdır. Çivit, madder ve hardal gibi doğal boyar maddeler paleti belirler. Dijitalde 2010'lar sonrası "craft revival" ile döndü; CSS `box-shadow` ile ofset iz kurulabildiği için görsel dosyası gerekmez. Klişeye dönüşmemesi için korunacak detay: **iz ofsetinin 1px/4px iki kademede kalması** ve damganın daima tek renk olması.

### Recognition test in 3 seconds
1. Kartların sağ-alt kenarında 1px'lik ince "mürekkep izi" var; birincil kart/butonda 4px.
2. Kart köşesinde 20×20px tek renk damga (çiçek/geometrik) duruyor.
3. Gövde Poppins, başlık Playfair Display 600; gövdede serif yok.
4. Nav'daki aktif öğe çift çizgi (1px + 3px altında ikinci iz).
5. Kartlar 3'lü blok hâlinde 20px aralıkla basılmış; köşeler 2–6px.

## Visual signature
- **Kayma izi:** `--shadow: 1px 1px 0 rgba(22,24,29,.10)` her kartta; `--shadow-hard: 4px 4px 0` yalnız birincil yüzeyde; blur 0.
- **Blok damga:** 24×24px, 2px çizgi, tek renk accent; kart sağ-alt köşesinde %25–28 opaklıkla; ekran başına en fazla 2 motif.
- **Çift baskı çizgisi:** aktif nav öğesinde 1px accent + 3px aşağıda ikinci 1px iz.
- **Blok tekrarı:** kartlar 4/4/4 üçlü; 20px gutter; dördüncü satırda 2px kalın ayırıcı.
- **Playfair Display 600:** 36px, `0.015em`; alt başlıklar 24/18px aynı ailede, başlık altında 1px accent kural.
- **Grain .02:** yalnız zemin katmanında; metin üstünde grain yok.
- **Hover dili:** 130ms'de iz 3px'e iner, zemin %92'ye koyulaşır, ölçek `1.030`; gölge büyümez.
- **Typography:** Playfair Display (display) + Poppins (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#26356e`; neutral scale `#f7f1e2` → `#16181d`.
- **Radius:** `2px` / `6px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Her kart 1px ofset 'kayma izi' taşır; birincil yüzey 4px ofset
2. Damga motifi 24×24px, 2px çizgi, tek renk (accent); kart başına en fazla 1 damga
3. Blok tekrarı: içerik 3'lü blok hâlinde basılır (4/4/4); kartların arası 20px
4. Playfair Display başlık 600, Poppins gövde 400; gövdede serif yok
5. Çift baskı izi: aktif nav öğesinde alt çizgi + 2px ofset ikinci çizgi
6. Baskı grain .02 sabit; grain yalnız zemin katmanında, metin üstünde değil

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f1e2` | page background | as a card background |
| `--bg-2` | `#eee6d2` | partition divider floor, table top | button background |
| `--surface` | `#fffcf3` | kart, input, modal | full-page background |
| `--surface-2` | `#f6efdd` | passive chip, hover background | primary button |
| `--ink` | `#16181d` | title, body, icon | large background |
| `--ink-soft` | `#464a55` | secondary text, description | — |
| `--ink-faint` | `#7c8089` | decorative label, separator text | interactive text |
| `--accent` | `#26356e` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f4e9` | text above accent | non-accent background |
| `--line` | `rgba(22,24,29,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.76:1** · `ink-soft/bg` **7.86:1** · `ink-faint/bg` **3.51:1 (decorative)** · `accent-ink/accent` **10.5:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Playfair Display) | 36px (mobile 25px) | 400 | 1.04 | -0.02em |
| H2 | same | 24px | 600 | 1.16 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Poppins) | 15px | 400 | 1.68 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- The title is large-scale and tightly spaced; body 17px, size 68ch. Label mono and uppercase.
- Measure: 68ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Wide margin (56px), asymmetric 7/5 column. Section titles remain in the left column.
- Section vertical space 84px desktop, 48px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- There is no shadow; distinction by hairline and ground tone. Images are in full-edge or 4:3 frame.
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Blur'lu/yumuşak gölge (`box-shadow` yalnız blur 0 ofset iz).
- Çok renkli damga; ikiden fazla motif karışımı.
- Script/el yazısı font, italik başlık.
- 6px üstü radius, gradient, cam yüzey, neon.
- İzi 4px üstüne çıkarmak (kart gürültüsü).
- Damgayı gövde metninin üstüne bindirmek.
- Uydurma baskı atölyesi/motif adı; eksik içerik `{{motif}}` gibi işaretli yer tutucu olur.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 11.27:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 4/4/4 blok tekrarı, 4px izli hero kartı, damga zemini | `shots/01-page.png` |
| Dashboard | düşük | 1 birincil KPI (4px iz) + 3 normal kart (1px iz) | `shots/01-page.png` |
| Form | düşük | 40px alanlar, 1px iz, tek kolon | `shots/01-page.png` |
| Liste / tablo | orta | 40px satır, sol accent kural, 4. satırda kalın ayırıcı | `shots/01-page.png` |
| Boş durum | orta | boş damga + tek CTA, iz korunur | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: koleksiyon → blok motifi → ilk ürün | `shots/01-page.png` |
| Pricing | orta | 3 plan kartı; orta plan 4px iz ile öne çıkar | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | dar kart, 1px iz, damga yalnız üstte | `shots/01-page.png` |
| Modal | orta | 4px iz, sol üst damga, 22px padding | `shots/01-page.png` |
| Bildirim / toast | orta | 1px izli kutu, damga bloğu, 3600ms | `shots/01-page.png` |
| Hata | düşük | danger renkli 1px iz + damga; metin korunur | `shots/01-page.png` |
| Profil / ayar | orta | 40px satır, sol kural, blok aralığı 20px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.76:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.86:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.51:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 10.5:1 | ≥ 4.5 | button text |
| focus ring/ground | 11.27:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.4 | ≥ 60 target | thin text |

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
| Ekran "krem + mavi şablon" gibi duruyor | iz ve damga kullanılmamış | her karta 1px iz, hero kartına 4px iz, bir köşeye damga |
| Gürültülü görünüyor | iz 4px üstüne çıkmış veya birden fazla damga | 1px/4px kademesine dön, damgayı karta indir |
| Baskı hissi kayboluyor | yumuşak gölge eklenmiş | gölgeyi blur 0 ofset ize çevir |
| Tipografi zanaat tonunu bozuyor | gövde serif veya script | gövde Poppins 400, serif yalnız başlıkta |
| Kartlar "döşeme" gibi birleşiyor | gutter 0 veya paylaşılan kenarlık | 20px gutter koru (döşeme stili 69) |
| Koyu modda iz görünmüyor | açık tonlu iz | `rgba(0,0,0,.5)` iz kullan |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `andean-textile` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `maximalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `liquid-glass` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.vam.ac.uk/articles/block-printing | V&A · Block printing — blok damga tekniği ve tekrar aralığı |
| https://www.craftofuse.org/textiles/bagru-block-print | Craft of Use · Bagru/Jaipur block print — kayma izi ve çivit paleti |
| https://artsandculture.google.com/entity/indian-textiles/m09x1y6 | Google Arts & Culture · Indian textiles — çiçek rozeti geometrisi, blok tekrarı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — 1px iz ve damga çizgisi eşiği |

## AI brief

```text
Stil: Indian Block Print (styles/73-indian-block-print/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="indian-block-print"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Playfair Display 600) başlıkta, --font-body (Poppins) gövdede,
           --font-mono (IBM Plex Mono) etiket ve sayılarda.
Yüzey: --bg / --surface / --surface-2; radius 2px/6px; gölge YALNIZ blur'suz ofset iz
        (kart 1px, birincil yüzey 4px); yumuşak gölge yasak.
Motif: 24×24 blok damga, 2px çizgi, tek renk accent; kart köşesinde %28 opaklık.
Izgara: 4/4/4 üçlü blok, gutter 20px, kart padding 18px, bölüm ritmi 56px.
Hareket: enter 0.3s steps(2,end) 12px / stagger 0.035; scroll top 90% 0.34s 14px once:true;
         hover 130ms scale 1.030; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (blur gölge, çok renkli damga, 6px üstü radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Indian Block Print (indian-block-print) · family: Cultural & Regional (66–75)
Token: --bg #f7f1e2 · --surface #fffcf3 · --ink #16181d · --accent #26356e · --line rgba(22,24,29,.15)
Radius: 2px / 6px · Typography: Playfair Display / Poppins / IBM Plex Mono
Required: Her kart 1px ofset 'kayma izi' taşır; birincil yüzey 4px ofset · Damga motifi 24×24px, 2px çizgi, tek renk (accent); kart başına en fazla 1 damga · Blok tekrarı: içerik 3'lü blok hâlinde basılır (4/4/4); kartların arası 20px
Banned: Blur'lu/yumuşak gölge (`box-shadow` yalnız blur 0 ofset iz). · Çok renkli damga; ikiden fazla motif karışımı. · Script/el yazısı font, italik başlık.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="indian-block-print"] {
  --bg: #f7f1e2; --bg-2: #eee6d2;
  --surface: #fffcf3; --surface-2: #f6efdd;
  --ink: #16181d; --ink-soft: #464a55; --ink-faint: #7c8089;
  --accent: #26356e; --accent-ink: #f7f4e9;
  --line: rgba(22,24,29,.15);
  --danger: #d5271b;
  --danger-ink: #ffffff;
  --ok: #008036;
  --ok-ink: #ffffff;
  --warn: #b35200;
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
  --shadow: 1px 1px 0 rgba(22,24,29,.10); --shadow-hard: none;
  --font-display: "Playfair Display", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.015em; --blur: 0px; --grain: 0;
}
```
