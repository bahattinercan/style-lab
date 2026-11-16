# 129 · Porcelain Glaze

> **In one sentence:** Sır gibi pürüzsüz bir zeminde, kobalt çizgilerle ölçülen porselen parçaların sessiz bir koleksiyon arayüzü.

| | |
|---|---|
| **Feeling** | temiz, ince, serin, ölçülü |
| **Best for** | porselen/seramik kataloğu, müzayede vitrini, sofra & dekor markası, sanat galerisi koleksiyonu |
| **Avoid** | yüksek yoğunluklu panel, oyun/etkinlik, endüstriyel izleme — incelik orada "zayıf" okunur |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="porcelain-glaze"]` |
| **Composition** | `index` · `split` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Porcelain Glaze, arayüzü **sırlanmış porselen** gibi kurar: soğuk beyaz-pembe arası temiz zemin, neredeyse yok gölge, 1px ince kontur ve tek bir kobalt çizgisi. Süs yoktur; değer **orantı, ince çizgi ve boşluk** ile anlatılır.

Üç kurucu karar: (1) **sıfır doku** — `--grain: 0`; krakle deseni bilinçli olarak yok, yüzey pürüzsüz kalır (tek istisna: hero görselindeki silüet eğrisi); (2) **kobalt accent** — `#1d4f9c` yalnız eylem/seçim/uyarı; (3) **iki radius** — kontrol 14px, kart 28px, buton/chip hap; keskin köşe yok ama abartılı yuvarlama da yok.

Bedeli: düşük gölge ve ince kontur, zayıf ekranlarda sınırları kaybettirebilir; bu yüzden çizgi `--line` %12'nin altına inmez ve her kartın içinde en az bir mono ölçü satırı bulunur.

### What is not
- **Andalusian Azulejo (69) değildir:** karo deseni, geometrik tekrar ve Poiret One ile dekoratif süs kurar; Porcelain Glaze desensizdir, Cormorant Garamond + 14/28px radius ve `once:false` scroll ile ayrışır; ikisi de seramik ailesinde olsa da biri **desenli karo**, diğeri **sade sır** dilidir.
- **Japanese Ma (67) değildir:** beyaz boşluk ve 0/2px keskin köşe ile mimari sessizlik; burada 14/28px yumuşak radius ve kobalt accent var.
- **Ethereal (29) değildir:** pastel lavanta + cam yüzey; Porcelain Glaze opak, soğuk beyaz ve kobalt.
- **Luxury Typography (04) değildir:** krem zemin + altın accent; burada soğuk beyaz + kobalt, altın yok.

### Where it comes from
Porselen atölyesi ve müzayede kataloğu geleneğinden: parça adı, sır (seladon/kobalt/krakle), çap/yükseklik, ağırlık, koleksiyon. Bugün yeniden kullanılmasının nedeni: sofra/dekor markaları sır farkını fotoğrafla anlatamıyor; sır adı ve ölçü, kataloğun asıl bilgisi. Klişeye dönüşmemesi için korunacak detay: **sıfır doku** ve kobaltın yalnız işlevsel kullanımı.

### Recognition test in 3 seconds
1. Zemin soğuk beyaz-mavi; hiçbir yerde doku/grain yok (pürüzsüz sır).
2. Kobalt accent; altın/turkuaz ikinci renk yok.
3. Kart köşesi 28px, butonlar hap; keskin köşe yok.
4. Başlıklar ince garamond (Cormorant Garamond 500), gövde yuvarlak sans (Nunito 16px).
5. Her kartta sır chip'i + çap (cm) + ağırlık (g) mono satırı var.

## Visual signature
- **Sıfır doku:** `--grain: 0`; sayfada krakle/kum/desen yok. Yüzey pürüzsüzlüğü imzanın kendisidir.
- **Kobalt çizgi:** aktif öğe ve odakta 1–2px kobalt; dekoratif ikinci çizgi yok.
- **İnce kontur:** tüm paneller `1px solid var(--line)` (%12) + 2px gölge; sınırı çizgi taşır.
- **İki radius:** kontrol 14px, kart 28px, buton/chip/toast 999px hap.
- **Silüet eğrisi:** hero görselinde 1px vazo silüeti; sayfanın başka yerinde tekrar etmez.
- **Mono ölçü satırı:** her kartta en az bir `çap 24 cm · 780 g` satırı, tabular, birim `--ink-faint`.
- **Sır chip'i:** hap, 10px Space Mono `0.16em` — seladon · kobalt · sırlı beyaz · krakle · mat.
- **Typography:** Cormorant Garamond (display) + Nunito (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#1d4f9c`; neutral scale `#f2f6f8` → `#141d26`.
- **Radius:** `14px` / `28px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her parça kaydı: tür + sır adı + çap/yükseklik (cm) + ağırlık (g)
2. Yüzey pürüzsüz: grain 0, crackle doku yok; sır yalnız fotoğrafta parlar
3. Kobalt accent yalnız eylem/seçim/uyarı; ikinci doygun renk yok
4. Buton/chip/toast hap (999px); form 14px; kart 28px
5. Başlık Cormorant Garamond 500 (46px), gövde Nunito 16px/1.68; mono yalnız ölçü/etiket
6. Gölge 2px'i geçmez; ayrım 1px çizgi + ton

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2f6f8` | page background | as a card background |
| `--bg-2` | `#e6eef3` | partition divider floor, table top | button background |
| `--surface` | `#fbfdfe` | kart, input, modal | full-page background |
| `--surface-2` | `#eef4f7` | passive chip, hover background | primary button |
| `--ink` | `#141d26` | title, body, icon | large background |
| `--ink-soft` | `#46586a` | secondary text, description | — |
| `--ink-faint` | `#6f8394` | decorative label, separator text | interactive text |
| `--accent` | `#1d4f9c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f4f8fd` | text above accent | non-accent background |
| `--line` | `rgba(20,29,38,.12)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.66:1** · `ink-soft/bg` **6.74:1** · `ink-faint/bg` **3.61:1 (decorative)** · `accent-ink/accent` **7.43:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 30px (mobile 30px) | 400 | 1.08 | -0.02em |
| H2 | same | 26px | 600 | 1.2 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
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
- Radius: `14px` (buton, input, chip), `28px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Krakle/kırık sır dokusu, grain, cam/blur, gloss efekti.
- 28px üstü radius; hap olmayan buton; keskin köşe.
- İkinci doygun accent (turkuaz, altın).
- Büyük harf gövde, 14px altı gövde metni, italik başlık.
- Sürekli akan sır animasyonu, bounce, parallax.
- Koyu lüks zemin (bu stil açık porselen dilidir).
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.77:1 (≥ 3 on background/surface).
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
| Landing / hero | orta | 6/6 hero: solda başlık + tek hap CTA, sağda silüet (2px kaymış) | `shots/01-page.png` |
| Dashboard | düşük | 3 KPI (parça, sır çeşidi, ortalama çap) + koleksiyon | `shots/01-page.png` |
| Form | düşük | parça girişi: tür, sır, çap+cm, ağırlık+g | `shots/01-page.png` |
| Liste / tablo | orta | 42px satır, sır chip'i, sağda mono ölçü | `shots/01-page.png` |
| Boş durum | düşük | "koleksiyonda parça yok" + ilk parçayı ekle | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: koleksiyon → parça → sır seç | `shots/01-page.png` |
| Pricing | orta | iki plan, parça/koleksiyon limitleri | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek kart (28px köşe), 46px alanlar | `shots/01-page.png` |
| Modal | orta | parça detayı: silüet, sır notu, ölçüler | `shots/01-page.png` |
| Bildirim | düşük | hap toast, alt ortada, 4sn | `shots/01-page.png` |
| Hata | düşük | danger çerçeve + neden + sonraki adım | `shots/01-page.png` |
| Profil / ayar | orta | koleksiyon listesi, birim (cm/inç), sır paleti | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.66:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.74:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.61:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.43:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.77:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.1 | ≥ 60 target | thin text |

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
| "Boş sayfa" hissi | gölge + çizgi zayıf | 1px çizgi (%12) + 2px gölge + mono ölçü |
| Porselen "plastik" | gloss/parlama eklendi | parlaklık yalnız fotoğrafta |
| Dekoratif karo kayması | desen/crackle eklendi | `--grain: 0`, desen yok |
| Okunmuyor | `--ink-faint` gövdeye | gövde `--ink`/`--ink-soft` |
| Keskin köşe sırıtıyor | 14px altı radius | 14/28 + hap |
| Koyu modda sınır kayboluyor | çizgi opaklığı düşük | koyu blokta %14 + accent açık |
| Mobilde taşıyor | 3×3 koleksiyon | 2'li + kart |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japanese-ma` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `magazine-feature` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `acid-graphics` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.britannica.com/art/porcelain | Britannica · porselen — porselen türleri, sır ve pişirim terminolojisi |
| https://www.metmuseum.org/toah/hd/porc/hd_porc.htm | The Met · porselen (Heilbrunn Timeline) — kobalt dekor ve tarihsel biçim dili |
| https://www.vam.ac.uk/collections/ceramics | V&A · seramik koleksiyonu — sır adları, ölçü ve künye biçimi |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — açık porselen zemininde metin kontrastı |

## AI brief

```text
Stil: Porcelain Glaze (styles/129-porcelain-glaze/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="porcelain-glaze"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cormorant Garamond 500) H1/H2 (46px/1.1); --font-body (Nunito 400/700) gövde 16px/1.68;
  --font-mono (Space Mono) sır chip'i 11px +0.18em ve tüm çap/ağırlık değerleri (tabular).
Yüzey: soğuk porselen beyazı, DOKU YOK (--grain: 0), gölge en fazla 0 2px 6px.
  radius --radius 14px (form), --radius-lg 28px (kart/modal), buton/chip/toast 999px hap.
Renk: tek accent kobalt (--accent), accent üstü --accent-ink; turkuaz/altın yasak.
Kayıt: tür + sır chip'i (seladon/kobalt/sırlı beyaz/krakle/mat) + çap cm + ağırlık g.
Hareket: enter 0.56s cubic-bezier(.12,.75,.24,1) 33px st.095 · scroll top 98% 0.84s 35px once:false ·
  pin kapalı · hover 360ms scale 1.028; prefers-reduced-motion zorunlu.
Yasak: crackle/grain, cam/blur, gloss, 28px üstü radius, ikinci accent, büyük harf gövde, akan sır animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Porcelain Glaze (porcelain-glaze) · family: Material & Luxury (126–135)
Token: --bg #f2f6f8 · --surface #fbfdfe · --ink #141d26 · --accent #1d4f9c · --line rgba(20,29,38,.12)
Radius: 14px / 28px · Typography: Cormorant Garamond / Nunito / Space Mono
Required: Her parça kaydı: tür + sır adı + çap/yükseklik (cm) + ağırlık (g) · Yüzey pürüzsüz: grain 0, crackle doku yok; sır yalnız fotoğrafta parlar · Kobalt accent yalnız eylem/seçim/uyarı; ikinci doygun renk yok
Banned: Krakle/kırık sır dokusu, grain, cam/blur, gloss efekti. · 28px üstü radius; hap olmayan buton; keskin köşe. · İkinci doygun accent (turkuaz, altın).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="porcelain-glaze"] {
  --bg: #f2f6f8; --bg-2: #e6eef3;
  --surface: #fbfdfe; --surface-2: #eef4f7;
  --ink: #141d26; --ink-soft: #46586a; --ink-faint: #6f8394;
  --accent: #1d4f9c; --accent-ink: #f4f8fd;
  --line: rgba(20,29,38,.12);
  --danger: #d82b1f;
  --danger-ink: #ffffff;
  --ok: #008239;
  --ok-ink: #ffffff;
  --warn: #b65500;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 14px; --radius-lg: 28px;
  --shadow: 0 2px 6px rgba(20,29,38,.06); --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
