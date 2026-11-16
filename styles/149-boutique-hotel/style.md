# 149 · Boutique Hotel

> **In one sentence:** Butik otel vitrini: kum-koyu zemin, terracotta vurgu, Playfair serif ve 1.02s yumuşak açılma — oda fotoğrafı ile künye aynı sayfada nefes alır.

| | |
|---|---|
| **Feeling** | sıcak · sakin · el yapımı · misafirperver |
| **Best for** | Butik otel/konak, tadilatlı taş villa, restoran ve şarap mahzeni, wellness retreat |
| **Avoid** | Yoğun operasyon paneli, yüksek frekanslı e-ticaret, teknik dokümantasyon |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Stage & Prestige (146–151) · **Token** | `kit/tokens.css` → `[data-style="boutique-hotel"]` |
| **Composition** | `fullbleed` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Boutique Hotel, bir konaklamanın ilk dakikasını ekrana taşır: kum-koyu zemin (#16110c), terracotta vurgu (#d97f4e), Playfair Display başlık ve tek büyük oda fotoğrafı. Sıcaklık gradient ile değil, toprak tonları ve serif tipografiyle kurulur.

Terracotta yalnız üç işlevde görünür: birincil eylem, "müsait" durumu ve bölüm altındaki 1px ince çizgi. Fotoğrafın kendi sıcaklığı yeterlidir; ikinci bir turuncu eklenmez. Gövde metni Nunito 16px/1.65 — harf formu yuvarlak olduğu için koyu zeminde yumuşak okunur.

Radius ölçeği kasıtlı olarak küçük (2px kontrol, 10px kart): taş ve ahşap yüzeyler keskin kenarlıdır, ama tamamen köşesiz de değildir. Gölge yerine 1px çerçeve ve fotoğrafın kendi ışığı kullanılır; yalnız modal ve alt sayfa gölge alır.

Giriş `clip-curtain`: içerik 1.02s içinde 6px bulanıklıktan netleşir (70ms kademe). Bu, bir perdenin aralanması gibi okunur; kesme/sıçrama yok. Scroll `parallax` ile fotoğraf 0.88x hızda kayar. Pin yok. Hover 300ms ve 1.018 — acele etmeyen ama fark edilen bir hız.

### What is not
- Noir Estate (146) değildir: o stil altın + siyah ve cine-tonlu; burada terracotta + kum ve serif daha yuvarlak (Playfair vs Cormorant).
- Wabi-sabi (07) değildir: kusur estetiği ve düşük kontrast yok; kontrast yüksek, düzen hizalı.
- Leather Craft (130) değildir: dikiş çerçevesi ve zanaat dokusu yerine fotoğraf + tipografi.
- Grand Tourer (41) değildir: krom/deri lüksü değil, taş ve keten sıcaklığı.
- Journaling/editorial (150) değildir: orada taban açık kâğıt ve Fraunces; burada koyu kum ve Playfair.

### Where it comes from
Kök, Ege-Akdeniz butik konaklama katalogları ve baskı broşürleridir: geniş fotoğraf, ince çizgiyle ayrılmış künye satırları, harf aralıklı mono etiketler. Bugün işe yaramasının nedeni, rezervasyon kararının görsel olması: oda fotoğrafı ile fiyat aynı bakışta okunmalı, bu yüzden tipografi fotoğrafın önüne geçmez.

### Recognition test in 3 seconds
1. Zemin sıcak kum-koyu (#16110c); accent terracotta (#d97f4e), ikinci turuncu yok.
2. Başlık Playfair Display 400 (cümle düzeni), 46px; gövde Nunito 16px/1.65.
3. Kart radius 10px, 1px çerçeve, gölge yok; fotoğraf kartın üstünde tam kanama.
4. Künye satırı: 10px IBM Plex Mono `+0.20em` büyük harf, aralarda 1px dikey çizgi.
5. Butonlar 2px radius, terracotta dolgu (birincil) veya 1px terracotta çerçeve (ikincil).

## Visual signature
- Hero tam kanama oda/dış mekân fotoğrafı; alttan ısınan scrim `rgba(22,17,12,.72)`, metin sol altta 5/12.
- Künye şeridi: 4 hücre (konum · oda tipi · m² · kahvaltı), aralarında 1px `--line` dikey çizgi, mono 10px.
- Terracotta 1px ince çizgi bölüm başlığının üstünde 28px; tam genişlik çizgi yok.
- Kart: fotoğraf üstte tam kanama (16:10), altta 3 satır (oda adı, m², fiyat/gece).
- Durum chip'i: "müsait" terracotta metin + 1px terracotta çerçeve; dolu değil.
- Grain `.03` yalnız zemin katmanında; fotoğrafa filtre yok (sadece scrim).
- **Typography:** Playfair Display (display) + Nunito (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#d97f4e`; neutral scale `#16110c` → `#f3e9dc`.
- **Radius:** `2px` / `10px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Hero tam kanama oda fotoğrafı + tek scrim; metin sol altta 5/12.
2. Künye şeridi 4 hücre, aralarında 1px dikey çizgi, mono 10px.
3. Terracotta yalnız buton, durum chip'i ve ince çizgi.
4. Kart radius 10px, gölge yok, 1px çerçeve.
5. Playfair 400 başlık; 700 yalnız vurgu kelimede.
6. Fiyat "gecelik" birimiyle, mono tabular, sağa hizalı.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#16110c` | page background | as a card background |
| `--bg-2` | `#100c08` | partition divider floor, table top | button background |
| `--surface` | `#211a13` | kart, input, modal | full-page background |
| `--surface-2` | `#2b2219` | passive chip, hover background | primary button |
| `--ink` | `#f3e9dc` | title, body, icon | large background |
| `--ink-soft` | `#c8b7a3` | secondary text, description | — |
| `--ink-faint` | `#94836f` | decorative label, separator text | interactive text |
| `--accent` | `#d97f4e` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a0b04` | text above accent | non-accent background |
| `--line` | `rgba(243,233,220,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.63:1** · `ink-soft/bg` **9.61:1** · `ink-faint/bg` **5.12:1 (decorative)** · `accent-ink/accent` **6.49:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Playfair Display) | 32px (mobile 32px) | 400 | 1.04 | -0.02em |
| H2 | same | 30px | 600 | 1.16 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
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
- Radius: `2px` (buton, input, chip), `10px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- İkinci turuncu/kiremit tonu veya altın
- Terracotta üstüne beyaz metin
- Kartlarda gölge, 10px üstü radius
- Büyük harf gövde, 13px altı metin
- Sonsuz animasyon, bounce, kesme geçişi
- Gradient arka plan (gün batımı efekti)
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.34:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | tam kanama fotoğraf + sol altta 5/12 metin; altında 4 hücreli künye şeridi ve rezervasyon alanı | `shots/01-page.png` |
| Dashboard ( rezervasyon) | orta | 3 KPI (doluluk, ortalama gece, gelir) + 6 satırlık rezervasyon tablosu | `shots/01-page.png` |
| Form / rezervasyon | düşük | tarih + kişi + oda; 48px alanlar, terracotta odak; hata 1px `--danger` | `shots/01-page.png` |
| Liste / odalar | orta | kart ızgarası 2 sütun; her kartta müsait chip | `shots/01-page.png` |
| Boş durum | düşük | "bu tarihlerde oda yok" + tarih değiştir | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: tarih → oda → misafir bilgisi | `shots/01-page.png` |
| Pricing | orta | oda tipleri; öne çıkanda terracotta 1px çerçeve | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek kart, tek eylem; sosyal giriş yok | `shots/01-page.png` |
| Modal | orta | 10px radius, terracotta %40 çerçeve, `--shadow` | `shots/01-page.png` |
| Bildirim | orta | 40px toast, sol 3px terracotta şerit, 3.8s | `shots/01-page.png` |
| Mobil (390px) | orta | hero 300px, künye şeridi 2×2, rezervasyon alanı sticky alt bar | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.63:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.61:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.12:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.49:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.34:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.8 | ≥ 60 target | thin text |

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
| "Kahve markası" gibi | terracotta her yerde + kahverengi gradient | terracotta yalnız eylem/durum; zemin nötr kum |
| Okunmuyor | terracotta gövde metni | gövde `--ink-soft`; terracotta yalnız 16px üstü başlık |
| Fotoğraf soluk | çift scrim + grain | tek scrim, grain yalnız zemin |
| Kartlar ağır | gölge + radius 16px | gölge yok, radius 10px, 1px çerçeve |
| Serif klişe | Playfair 700 her başlıkta | H1/H2 400, yalnız vurgu 700 |
| Mobilde metin kesiliyor | künye şeridi 4 sütun | 2×2 ızgara, etiket üstte |
| Koyu mod farkı yok | invert | koyu blokta zemin #0e0a07, terracotta #e89567 |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `noir-estate` | Same level of seriousness; accent sharing is not allowed |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `magazine-feature` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `brass-copper` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Playfair+Display | Google Fonts · Playfair Display — serif ölçek ve 400/700 ağırlık kullanımı |
| https://fonts.google.com/specimen/Nunito | Google Fonts · Nunito — gövde harf formu ve satır aralığı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast Minimum — terracotta üstü metin ve gövde eşiği |
| https://www.nngroup.com/articles/photos-as-content/ | Nielsen Norman · Image-heavy landing — fotoğraf–künye dengesi |

## AI brief

```text
Stil: Boutique Hotel (styles/149-boutique-hotel/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="boutique-hotel"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Playfair Display 400 başlık / 700 vurgu) H1 clamp(32px,5vw,46px) 1.12; --font-body (Nunito 400/700) gövde 16px/1.65;
  --font-mono (IBM Plex Mono 400) künye 10px +.20em büyük harf.
Yüzey: kum-koyu zemin + tek scrimli oda fotoğrafı. Kart = --surface + 1px --line, radius 10px, GÖLGE YOK;
  blur yalnız modal/alt sayfada. Terracotta 1px ince çizgi ve birincil butonda.
Renk: tek accent terracotta (--accent), üstünde --accent-ink; ikinci turuncu ve gradient yok.
Hareket: enter 1.02s cubic-bezier(.3,.02,.2,1) clip-curtain 10px st.07 · scroll top 68% 1.0s parallax 8px once ·
  pin yok · hover 300ms scale 1.018; prefers-reduced-motion zorunlu.
Yasak: İkinci turuncu/kiremit tonu veya altın; Terracotta üstüne beyaz metin; Kartlarda gölge, 10px üstü radius; Büyük harf gövde, 13px altı metin; Sonsuz animasyon, bounce, kesme geçişi; Gradient arka plan (gün batımı efekti).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Boutique Hotel (boutique-hotel) · family: Stage & Prestige (146–151)
Token: --bg #16110c · --surface #211a13 · --ink #f3e9dc · --accent #d97f4e · --line rgba(243,233,220,.14)
Radius: 2px / 10px · Typography: Playfair Display / Nunito / IBM Plex Mono
Required: Hero tam kanama oda fotoğrafı + tek scrim; metin sol altta 5/12. · Künye şeridi 4 hücre, aralarında 1px dikey çizgi, mono 10px. · Terracotta yalnız buton, durum chip'i ve ince çizgi.
Banned: İkinci turuncu/kiremit tonu veya altın · Terracotta üstüne beyaz metin · Kartlarda gölge, 10px üstü radius
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="boutique-hotel"] {
  --bg: #16110c; --bg-2: #100c08;
  --surface: #211a13; --surface-2: #2b2219;
  --ink: #f3e9dc; --ink-soft: #c8b7a3; --ink-faint: #94836f;
  --accent: #d97f4e; --accent-ink: #1a0b04;
  --line: rgba(243,233,220,.14);
  --danger: #e63c2d;
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
  --radius: 2px; --radius-lg: 10px;
  --shadow: 0 16px 40px -26px rgba(0,0,0,.9); --shadow-hard: none;
  --font-display: "Playfair Display", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0; --blur: 0px; --grain: 0;
}
```
