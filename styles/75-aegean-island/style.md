# 75 · Aegean Island

> **In one sentence:** Kireç beyazı badana yüzeylerin 22px kemer köşelerle açıldığı, tek Ege mavisiyle kuru ve serin kalan arayüz.

| | |
|---|---|
| **Feeling** | serin, ferah, badanalı, güneşte solmuş |
| **Best for** | konaklama/otel vitrini, ada turizmi, gurme gıda markası, sakin SaaS pazarlama sayfası |
| **Avoid** | yoğun veri paneli, güvenlik/kripto, gece modu ağırlıklı ürün — beyaz badana parlama üretir |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="aegean-island"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Aegean Island, Kiklad badana mimarisinin ekran karşılığıdır: **kireç beyazı** zeminler, **22px kemer köşeler**, **1px dashed badana kenarı** ve tek **Ege mavisi** vurgu. Kurucu kararları üç tanedir. Birincisi **kemer formu**: kart ve modal köşeleri 22px, ama gölge yok — kemer, gölge yerine ışığı taşır. İkincisi **badana kenarı**: ikincil yüzeylerde 1px kesikli çizgi ("elle badanalanmış kenar"), birincil yüzeyde düz çizgi. Üçüncüsü **serin sadelik**: accent dışında doygun renk yok; dekorasyon yalnız 2px dalga çizgisi ve 14px kemer işaretiyle sınırlı.

Kazandığı şey: **ferahlık ve hız** — yüksek kontrastlı koyu mavi metin + beyaz zemin, 3 saniyede okunur; kültürel referans güçlü ama süs yükü sıfıra yakın. Feda ettiği şey: **gece kullanımı** — koyu modda badana etkisi kaybolur, stil koyu modda "soğuk cam" gibi davranır.

### What is not
- **Minimalism (01) değildir:** 01 sıcak nötr (#fafaf9) + Inter + 8/12px radius + mavi accent ile **nötr** kalır; 75 **kireç beyazı** + 14/22px kemer + kesikli badana kenarı ve dalga çizgisi taşır.
- **Japanese Ma (67) değildir:** 67 tek ince yatay çizgi ve sıfır radius ile boşluğu ölçer; 75'te kemer eğrisi ve dashed kenar imzanın kendisidir.
- **Andalusian Azulejo (69) değildir:** 69 harç ızgarası + kobalt **döşeme** kurar (2px kenar, gap 2px); 75 **badana duvarı** kurar (1px kenar, 22px kemer, döşeme yok).
- **Frutiger Aero (25) değildir:** 25 parlak cam/parlama ve gradient kullanır; 75'te parlama yok, gölge neredeyse sıfır.
- **"Beyaz + mavi kurumsal" jeneriği değildir:** kimlik kemer formu + badana kesik kenarı + dalga çizgisidir; accent rengi tek başına yeterli sayılmaz.

### Where it comes from
Kiklad adaları (Santorini, Mykonos, Sifnos) badana geleneği: kireç taşı duvarlar her yıl badanayla yenilenir, kenarlar elle çekilir (bu yüzden hafif düzensizdir), kapı-pencere çerçeveleri tek maviye boyanır. Dijitalde 2010'lar sonrası "slow travel" ve ada markalarıyla yaygınlaştı; nedeni ölçülebilir — iki değer (beyaz + mavi) ve iki form (düz + kemer) ile kimlik kurulabildiği için görsel dosyası gerekmez. Klişeye dönüşmemesi için korunacak detay: **22px kemer oranının ve dashed kenarın simetrik kullanımı**.

### Recognition test in 3 seconds
1. Kartların köşeleri belirgin yuvarlak (22px) ama gölge neredeyse yok.
2. İkincil buton ve durum kartlarında 1px kesikli (dashed) kenar görünüyor.
3. Tek doygun renk Ege mavisi; metin koyu arduvaz, zemin kireç beyazı.
4. Hero kartının üstünde 2px noktalı dalga çizgisi var.
5. Nav'daki aktif öğe 14px yarım daire kemerle işaretli.

## Visual signature
- **Kemer köşe:** `--radius-lg: 22px`, `--radius: 14px`; kart/modal dört köşesi 22px — gölge yerine yuvarlaklık taşır.
- **Badana kenarı:** ikincil yüzeylerde `border-style: dashed; border-width: 1px`; birincil yüzeyde solid.
- **Dalga çizgisi:** 2px yükseklik, 16px aralıklı nokta dizisi (`radial-gradient`), `%55` opaklık; yalnız hero kartı ve modal başlığı üstünde.
- **Nokta badana dokusu:** 28px aralıklı 1px nokta, %9 mavi; yalnız hero ve alt bant zemininde.
- **Jost display 500:** 40px, `0.02em`; gövde Inter 16px/1.64.
- **Tek mavi:** accent yalnız eylem, kemer işareti, dalga çizgisi, odak halkası ve tablo ilk sütun kuralında.
- **Hover dili:** 280ms'de zemin %92'ye döner, görsel ölçek `1.020`, alt kenarda 2px badana çizgisi belirir; gölge büyümez.
- **Typography:** Jost (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#0e6f92`; neutral scale `#fbfaf6` → `#12181c`.
- **Radius:** `14px` / `22px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Kemer formu: kart ve modal üst köşeleri 22px, alt köşeler de 22px — yarım daire hissi
2. Badana kenarı: ikincil buton ve toast'ta 1px dashed --line; birincil yüzeyde solid
3. Dalga çizgisi 2px accent, yalnız hero kartı ve modal başlığı üstünde
4. Gölge neredeyse yok: yalnız 0 1px 2px; yüzen katmanda en fazla 8px blur
5. Kireç beyazı zemin (#fbfaf6) + tek Ege mavisi accent; ikinci doygun renk yok
6. Fiyat/sayaç JetBrains Mono + tabular, birim yazılı

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fbfaf6` | page background | as a card background |
| `--bg-2` | `#f2f1ea` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f6f6f1` | passive chip, hover background | primary button |
| `--ink` | `#12181c` | title, body, icon | large background |
| `--ink-soft` | `#44545c` | secondary text, description | — |
| `--ink-faint` | `#7d8b92` | decorative label, separator text | interactive text |
| `--accent` | `#0e6f92` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7fbfd` | text above accent | non-accent background |
| `--line` | `rgba(18,24,28,.13)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.14:1** · `ink-soft/bg` **7.54:1** · `ink-faint/bg` **3.36:1 (decorative)** · `accent-ink/accent` **5.44:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Jost) | 40px (mobile 27px) | 400 | 1.04 | -0.02em |
| H2 | same | 27px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `14px` (buton, input, chip), `22px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Gradient, parlaklık/glow, cam yüzey, `backdrop-filter`.
- 22px üstü radius; serif display.
- Sert siyah gölge veya kalın kontur (durum şeridi 3px'i geçmez).
- Tam kanamalı doygun fotoğraf.
- Üçten fazla kemer formunu aynı ekranda tekrarlamak (form, işaret olmaktan çıkar).
- Animasyonlu dalga veya sürekli hareket.
- Uydurma ada/otel adı; eksik içerik `{{room}}` gibi işaretli yer tutucu olur.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.66:1 (≥ 3 on background/surface).
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
| Landing / hero | orta | 5+5 kemer kartı + 1+1 geçit, hero'da dalga çizgisi | `shots/01-page.png` |
| Dashboard | düşük | 2 kemerli KPI + 2 dashed durum kartı | `shots/01-page.png` |
| Form | düşük | 46px alanlar, kemerli form paneli | `shots/01-page.png` |
| Liste / tablo | orta | 46px satır, ilk sütunda 3px mavi kural | `shots/01-page.png` |
| Boş durum | orta | dashed boş kart + kemer işareti + tek CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: tarih → oda → onay; her adım kemerli kart | `shots/01-page.png` |
| Pricing | orta | 3 kemerli plan, orta plan accent kenar | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | dar kemerli kart, 46px alanlar | `shots/01-page.png` |
| Modal | orta | kemer köşe + üstte dalga çizgisi | `shots/01-page.png` |
| Bildirim / toast | orta | dashed kenar, sol 2px mavi, 4200ms | `shots/01-page.png` |
| Hata | düşük | `--danger` sol şerit + koyu metin; mavi susar | `shots/01-page.png` |
| Profil / ayar | orta | 46px satır, iki kemerli panel | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.14:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.54:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.36:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.44:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.66:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 101.6 | ≥ 60 target | thin text |

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
| Ekran "beyaz + mavi kurumsal" gibi duruyor | kemer ve dashed kenar kullanılmamış | 22px kemer + en az bir dashed yüzey kur |
| Yüzeyler "plastik" görünüyor | gölge güçlendirilmiş veya gradient eklenmiş | gölgeyi 2px'e indir, gradient'i sil |
| Kemer her yerde → süs gibi | üçten fazla kemer formu tekrar etmiş | kemer sayısını ekran başına 3'te tut |
| Kontrast zayıf | `--ink-faint` etkileşimli metinde | etkileşimde `--ink`/`--ink-soft` kullan |
| Koyu modda "ada" hissi kayboluyor | dokulu badana koyuda yoğun | dokuyu %6'ya düşür, accent'i açık deniz mavisi yap |
| Buton dokunma hedefi küçük | 46px yerine 36px kullanılmış | 46px'e sabitle (mobilde 48px) |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `vaporwave` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Cyclades | Wikipedia · Cyclades — badana mimarisi, kemer açıklık ve mavi-beyaz oranı |
| https://www.britannica.com/place/Aegean-Sea | Britannica · Aegean Sea — bölgesel bağlam, ışık ve renk referansı |
| https://fonts.google.com/specimen/Jost | Google Fonts · Jost — geometrik display ve ağırlık sınırı |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | WCAG 2.2 · Target Size (Minimum) — 46px buton ve tablo satırı hedefi |

## AI brief

```text
Stil: Aegean Island (styles/75-aegean-island/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="aegean-island"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Jost 500) başlıkta, --font-body (Inter) gövdede,
           --font-mono (JetBrains Mono) etiket ve sayılarda.
Yüzey: kireç beyazı --bg / --surface / --surface-2; radius 14px/22px (kemer);
        gölge neredeyse yok (kart 0 1px 2px, yüzen katman 8px).
Kenar: birincil yüzey 1px solid, ikincil yüzey 1px dashed (badana); dalga çizgisi 2px yalnız hero/modal.
Bileşen: "Bileşen reçeteleri" birebir; buton 46px, tablo satırı 46px, kart padding 24px.
Hareket: enter 0.38s cubic-bezier(.25,.75,.5,1) 8px / stagger 0.08; scroll top 87% 0.44s 12px once:true;
         hover 280ms scale 1.020; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gradient, 22px üstü radius, ikinci doygun renk).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Aegean Island (aegean-island) · family: Cultural & Regional (66–75)
Token: --bg #fbfaf6 · --surface #ffffff · --ink #12181c · --accent #0e6f92 · --line rgba(18,24,28,.13)
Radius: 14px / 22px · Typography: Jost / Inter / JetBrains Mono
Required: Kemer formu: kart ve modal üst köşeleri 22px, alt köşeler de 22px — yarım daire hissi · Badana kenarı: ikincil buton ve toast'ta 1px dashed --line; birincil yüzeyde solid · Dalga çizgisi 2px accent, yalnız hero kartı ve modal başlığı üstünde
Banned: Gradient, parlaklık/glow, cam yüzey, `backdrop-filter`. · 22px üstü radius; serif display. · Sert siyah gölge veya kalın kontur (durum şeridi 3px'i geçmez).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="aegean-island"] {
  --bg: #fbfaf6; --bg-2: #f2f1ea;
  --surface: #ffffff; --surface-2: #f6f6f1;
  --ink: #12181c; --ink-soft: #44545c; --ink-faint: #7d8b92;
  --accent: #0e6f92; --accent-ink: #f7fbfd;
  --line: rgba(18,24,28,.13);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00853c;
  --ok-ink: #ffffff;
  --warn: #b95800;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 1px 2px rgba(18,24,28,.07); --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
