# 72 · Andean Textile

> **In one sentence:** 4px adımlı basamak motifinin çözgü şeritleriyle birleştiği ve yalnız birincil yüzeyin 3px ofsetle kabardığı dokuma arayüzü.

| | |
|---|---|
| **Feeling** | yüksek, dokunur, simetrik, sıcak-soğuk dengeli |
| **Best for** | zanaat/tekstil markası, kültür arşivi, ürün koleksiyonu vitrini, sergi kataloğu |
| **Avoid** | sürekli veri paneli, klinik form, oyun arayüzü — simetri ve süs katmanı taramayı yavaşlatır |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="andean-textile"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Andean Textile, And dokumasının (Paracas, Nazca, modern pallay) ekran karşılığıdır: **4px adımlı basamak motifi**, 8px aralıklı **çözgü şeritleri** ve **aynalı simetri**. Kurucu kararları üç tanedir. Birincisi **adım birimi**: basamak motifi daima 4px yüksekliğinde adımlarla çizilir; eğri, döndürme veya yuvarlatma yok. İkincisi **tek kabaran yüzey**: yalnız birincil kart ve birincil buton 3px ofset gölge (`--shadow-hard`) taşır — dokumanın iki katı kalınlığı gibi. Üçüncüsü **aynalı düzen**: bölümler iki eşit yarım + ortada şerit; ekran başına yalnız bir bölüm asimetriye çıkar.

Kazandığı şey: **ağırlık ve ritim** — basamak motifinin tekrarı, ürün vitrinine müze kataloğu ciddiyeti verir. Feda ettiği şey: **hafiflik** — gölge tek yüzeyde, radius 4/12px, bölüm ritmi 64px; yoğun tablo ekranlarında simetri kararı yer israf eder.

### What is not
- **West African Pattern (71) değildir:** 71 koyu zemin + altın **şerit dokuma** ve 8px/24px bant ritmi kullanır; 72 **açık kil zemin + karmin** ve **basamak** motifi; kart 12px radius (71'de 2px), birincil yüzeyde ofset gölge (71'de hiç gölge yok).
- **Nordic Folk (66) değildir:** 66 bitkisel kıvrım ve madder kırmızısı taşır; 72'de kıvrım yok, motif **dik açılı basamak** ve accent **karmin/magenta**.
- **Andalusian Azulejo (69) değildir:** 69 harç ızgarası + kobalt çini + Poiret One ile **döşeme**; 72 basamak şeridi + Fraunces ile **dokuma**.
- **Bohemian (30) değildir:** Bohemian'da organik radius ve serbest doku var; 72'de tüm köşeler 4/12px ve basamak motifi ölçülü.
- **"Krem zemin + kırmızı accent" jeneriği değildir:** accent karmine (`#8d2148`) ve tüm derinlik **ofset gölgeden** gelir; yumuşak gölge hiç kullanılmaz.

### Where it comes from
And dokuması (Peru–Bolivya) dört bin yıllık bir tekniktir: çözgü yüzlü dokuma, pamuk/alpaqa ipliği ve doğal boyar madde (koşineal → karmin). Motif dili **pallay** denilen basamaklı geometridir; her desen bir topluluğun imzasıdır. Dijitalde 2020'lerde kültür arşivleri ve zanaat markalarıyla geri döndü; CSS `repeating-linear-gradient` ile basamak motifi ölçeklenebilir biçimde kurulabildiği için görsel dosyası gerekmez. Klişeye dönüşmemesi için korunacak detay: **4px adım biriminin ve aynalı simetrinin bozulmaması**.

### Recognition test in 3 seconds
1. Bölüm başlıklarında ya da ayırıcılarda 4px adımlarla inen-çıkan bir basamak bandı var.
2. Kartların alt kenarında 4px'lik basamak şeridi, üstünde 8px çözgü çizgileri görünüyor.
3. Yalnız bir kart "kabarmış" duruyor: 3px sağ-alt ofset gölge, blur yok.
4. Düzen aynalı: iki eşit yarım + ortada dar şerit.
5. Accent tek: karmin/magenta; gerisi kil beyazı, kil beji ve sıcak koyu metin.

## Visual signature
- **Basamak bandı:** 8px genişlikte iki diş (4px accent + 4px boşluk), 4px yükseklik; ayırıcıda 6px, kart altında 4px.
- **Çözgü şeritleri:** 8px aralıklı 1px çizgiler, %4–6 ink karışımı; yalnız zemin ve üst kenar bandında.
- **Tek ofset gölge:** `--shadow-hard: 3px 3px 0 rgba(26,22,32,.14)`; sadece birincil kart ve birincil butonda; basınca 0'a iner.
- **Aynalı simetri:** 2 eşit yarım + ortada 16–24px şerit; ekran başına 1 bölüm 7/5 asimetrik.
- **Fraunces display:** 38px, 500 ağırlık, `0.01em` tracking; başlıkta italik yok.
- **Tabular sayaç:** fiyat/aded Courier Prime 700, tabular; birim (`EUR`, `adet`) her zaman yazılı.
- **Hover dili:** 240ms'de zemin %90 accent karışımına döner, ölçek `1.014`; gölge büyümez, sadece 2px'e iner (basınç hissi).
- **Typography:** Fraunces (display) + Nunito (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#8d2148`; neutral scale `#f1ece2` → `#1a1620`.
- **Radius:** `4px` / `12px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Basamak (escalera) motifi 4px adım birimiyle çizilir; adım yüksekliği her yerde aynı
2. Çözgü şeritleri 8px aralıkla, %30 opaklıkta; yalnız bant ve zemin katmanında
3. Simetri kuralı: bölüm başlıkları aynalı (2 eşit yarım), ekran başına 1 bölüm asimetrik (7/5)
4. Fiyat/sayaç gibi sayılar Courier Prime + tabular; birimsiz sayı yok
5. Birincil kart ve buton 3px ofset gölge taşır; başka hiçbir yüzey gölge taşımaz
6. Kart padding 20px, bölüm ritmi 64px (mobil 40px)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f1ece2` | page background | as a card background |
| `--bg-2` | `#e7e0d2` | partition divider floor, table top | button background |
| `--surface` | `#fffdf8` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f2e8` | passive chip, hover background | primary button |
| `--ink` | `#1a1620` | title, body, icon | large background |
| `--ink-soft` | `#4e4657` | secondary text, description | — |
| `--ink-faint` | `#857c8f` | decorative label, separator text | interactive text |
| `--accent` | `#8d2148` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf6f7` | text above accent | non-accent background |
| `--line` | `rgba(26,22,32,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.12:1** · `ink-soft/bg` **7.63:1** · `ink-faint/bg` **3.38:1 (decorative)** · `accent-ink/accent` **8.06:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 38px (mobile 26px) | 400 | 1.04 | -0.02em |
| H2 | same | 26px | 600 | 1.16 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `4px` (buton, input, chip), `12px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Yumuşak/blur'lu gölge veya `drop-shadow`.
- Üçüncü süs rengi (accent + kil nötr; durum renkleri hariç).
- Dönen, eğik veya bounce eden animasyon.
- Fraunces 900 / italik başlık.
- Tam kanamalı fotoğraf, gradient, metalik parlaklık.
- Basamak motifini rastgele döndürmek veya adım yüksekliğini değiştirmek.
- Uydurma dokuma/topluluk adı; eksik içerik `{{motif}}` gibi işaretli yer tutucu olur.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 4px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 4px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 4px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 8.45:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | aynalı 2×6 vitrin + basamak bantlı ayırıcı | `shots/01-page.png` |
| Dashboard | düşük | 2×2 aynalı KPI + basamaklı alan grafik | `shots/01-page.png` |
| Form | düşük | 42px alanlar, tek kolon, çözgü zemin | `shots/01-page.png` |
| Liste / tablo | orta | 44px satır, grup sonu çizgisi, basamak işareti | `shots/01-page.png` |
| Boş durum | orta | boş basamak bandı + tek CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: koleksiyon → desen → vitrin | `shots/01-page.png` |
| Pricing | orta | 3 plan, orta plan ofset gölgeli (tek kabaran) | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | dar kart, basamak yalnız üstte | `shots/01-page.png` |
| Modal | orta | üstte basamak bandı, altta accent kural | `shots/01-page.png` |
| Bildirim / toast | orta | sol 4px basamaklı durum şeridi | `shots/01-page.png` |
| Hata | düşük | `--danger` alt kenar + basamak susturulmuş | `shots/01-page.png` |
| Profil / ayar | orta | 44px satır, aynalı iki kolon | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.12:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.63:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.38:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.06:1 | ≥ 4.5 | button text |
| focus ring/ground | 8.45:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.5 | ≥ 60 target | thin text |

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
| Ekran "krem + kırmızı şablon" gibi duruyor | basamak motifi kullanılmamış | en az iki yerde basamak bandı kur (ayırıcı + kart altı) |
| Her kart kabarık görünüyor | ofset gölge birden fazla yüzeye verilmiş | gölgeyi yalnız birincil kart/butona indir |
| Motif "dalgalı" duruyor | radius veya transform ile yumuşatılmış | dik açı, radius yalnız kapsayıcıda |
| Simetri bozuluyor | bölümler farklı kolon sayısıyla kurulmuş | 6/6 sabit, tek bölüm 7/5 |
| Sayı hizası kayıyor | tabular-nums yok | Courier Prime + tabular, birim yazılı |
| Koyu modda gölge görünmüyor | açık tonlu ofset gölge | `rgba(0,0,0,.55)` ofset kullan |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `west-african-pattern` | Same level of seriousness; accent sharing is not allowed |
| garnish | `organic-bio` | Same level of seriousness; accent sharing is not allowed |
| garnish | `nordic-folk` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `liquid-glass` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://museum.gwu.edu/andean-textiles | The Textile Museum · Andean weaving — çözgü şerit oranları ve basamak motifi |
| https://www.metmuseum.org/toah/hd/prcs/hd_prcs.htm | Met Museum · Paracas/Nazca textiles — basamaklı desen ve iki renkli kontrast |
| https://artsandculture.google.com/entity/andean-textiles/m09x1y6 | Google Arts & Culture · Andean textiles — şerit genişliği çeşitliliği, aynalı simetri |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — basamak çizgisi ve ofset gölge eşiği |

## AI brief

```text
Stil: Andean Textile (styles/72-andean-textile/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="andean-textile"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Fraunces 500) başlıkta, --font-body (Nunito) gövdede,
           --font-mono (Courier Prime 700) sayaç/fiyat ve etiketlerde.
Yüzey: --bg / --surface / --surface-2; radius 4px/12px; yumuşak gölge YOK;
        yalnız birincil kart ve butonda --shadow-hard (3px ofset).
Motif: 4px adımlı basamak bandı + 8px çözgü şeritleri; dik açı, döndürme yok.
Düzen: aynalı 2×6 + orta şerit; ekran başına 1 bölüm 7/5; kart padding 20px, bölüm ritmi 64px.
Hareket: enter 0.72s cubic-bezier(.5,0,.5,1) 16px / stagger 0.075; scroll top 80% 0.66s 28px once:false;
         pin açık scrub 1.15 / +95%; hover 240ms scale 1.014. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (çoklu ofset gölge, dönen hareket, üçüncü süs rengi).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Andean Textile (andean-textile) · family: Cultural & Regional (66–75)
Token: --bg #f1ece2 · --surface #fffdf8 · --ink #1a1620 · --accent #8d2148 · --line rgba(26,22,32,.14)
Radius: 4px / 12px · Typography: Fraunces / Nunito / Courier Prime
Required: Basamak (escalera) motifi 4px adım birimiyle çizilir; adım yüksekliği her yerde aynı · Çözgü şeritleri 8px aralıkla, %30 opaklıkta; yalnız bant ve zemin katmanında · Simetri kuralı: bölüm başlıkları aynalı (2 eşit yarım), ekran başına 1 bölüm asimetrik (7/5)
Banned: Yumuşak/blur'lu gölge veya `drop-shadow`. · Üçüncü süs rengi (accent + kil nötr; durum renkleri hariç). · Dönen, eğik veya bounce eden animasyon.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="andean-textile"] {
  --bg: #f1ece2; --bg-2: #e7e0d2;
  --surface: #fffdf8; --surface-2: #f7f2e8;
  --ink: #1a1620; --ink-soft: #4e4657; --ink-faint: #857c8f;
  --accent: #8d2148; --accent-ink: #fdf6f7;
  --line: rgba(26,22,32,.14);
  --danger: #d12217;
  --danger-ink: #ffffff;
  --ok: #007c34;
  --ok-ink: #ffffff;
  --warn: #b04e00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 12px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
