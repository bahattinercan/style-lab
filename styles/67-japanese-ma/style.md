# 67 · Japanese Ma

> **In one sentence:** Japanese Ma

| | |
|---|---|
| **Feeling** | sessiz, kesin, ferah, neredeyse törensel |
| **Best for** | mimari/zanaat stüdyosu, galeri–müze kataloğu, editoryal uzun okuma, premium donanım tanıtımı |
| **Avoid** | yoğun operasyon paneli, indirim kampanyası, çocuk uygulaması, çok serili grafik ekranı |
| **Difficulty** | yüksek (boşluğu "boş bırakılmış" değil "ölçülmüş" göstermek) · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="japanese-ma"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Japanese Ma, ekranı **boşluğun kendisiyle** kurar. 12 kolonun yalnız 8'i doludur; sağdaki 4 kolon kasıtlı olarak boş kalır ve bu boşluk dekorasyon değil **ölçü**dür (masa üstünde bölüm arası 160px, mobilde 88px). Öğe sayısı azdır: bir display başlık (64px, Jost 400), tek bir yatay 1px çizgi, ve tek bir mühür kırmızısı (`#bf3320`) — o da ekranın %2'sini geçmez.

Kazandığı şey: **dikkat ekonomisi**. Ekranda yarışan tek bir öğe olduğu için kullanıcı ilk saniyede nereye bakacağını bilir; sayfa "hızlı" değil "kesin" hisseder. Feda ettiği şey: **bilgi yoğunluğu ve tarama hızı** — bu stilde 20 satırlık tablo, çoklu KPI veya karşılaştırma matrisi çalışmaz; o ekranlarda yalnız tipografi ve çizgi ödünç alınır (süs zaten yok).

### What is not
- **Japandi (06) değildir.** Japandi sıcak bir **hibrit**: krem zemin (`#f4efe7`), serif display (Lora), adaçayı accent ve 10–14px radius. Burada zemin **nötr washi** (`#f6f5f1`), display **geometrik sans** (Jost), accent **mühür kırmızısı** ve radius **0/2px**; üstelik boşluk oranı zorunlu (8/12 kolon, 160px ritim).
- **Wabi-Sabi (07) değildir.** Wabi-sabi kasten eğik ve dokulu çalışır (`--grain: .07`, 0.5–1.5° dönüklük, asimetrik radius); burada hiza **kusursuz**, grain **.015**, radius **0/2px**.
- **Minimalism (01) değildir.** Minimalism gölgeyle (`0 1px 2px`) hacim kurar, 8/12px radius ve mavi accent kullanır; burada `--shadow: none`, radius 0, accent kırmızı ve boşluk katı bir orana bağlı.
- **Editorial Design (03) değildir.** Editorial serif başlık + drop cap + kolon ritmiyle **dolu** bir sayfa kurar; burada display sans, drop cap yok ve metin ölçüsü 56ch'e kısıtlı.
- **"Sadece çok boşluk" değildir.** Boşluk rastgele değil: 160/88px ritim, 12'de 8 kolon, 32px gutter — üçü birlikte stilin ölçüsüdür.

### Where it comes from
`ma` (間), Japon estetiğinde "aralık/boşluk"un kendisinin biçim olmasıdır: çay evi nişi, byōbu paravan kompozisyonu ve sumi-e'nin boş kâğıdı aynı ilkeyi paylaşır — öğe azaltıldıkça kalan öğenin ağırlığı artar. Dijitalde 2010'lardan sonra "slow/quiet" markalar ve Japon mimarlık stüdyolarının siteleriyle yayıldı; nedeni ölçülebilir: az öğe = daha az bant genişliği, daha net odak, daha uzun okuma süresi.

Klişeye düşmemek için korunması gereken detay: **çizgi disiplini ve mühür oranı**. Boşluğu 2–3 bölüme sıkıştırmak, ikinci bir renk eklemek veya mühürü buton+rozet+grafik üçlüsüne çoğaltmak stili "bej minimalizm"e indirger.

### Recognition test in 3 seconds
1. Sağ tarafta **boş bir kolon şeridi** var mı (içerik solda 8/12, sağda 4/12 boş)?
2. Ekranda **tek çizgi** mi var — bölüm başlığının üstünde 1px yatay çizgi, başka çerçeve yok mu?
3. Accent **mühür kırmızısı** ve **tek bir kare/etiket** mi (ekranın ≤ %2'si)?
4. Başlık **64px geometrik sans**, ağırlık 400 (kalın değil), tracking **-0.03em** mi?
5. Kartlar **gölgesiz ve radius 0–2px** mi; modal bile yalnız 1px çizgiyle mi ayrılıyor?

## Visual signature
- **8/12 kolon kuralı:** içerik solda 8 kolonda; sağdaki 4 kolon (12 kolonun %33'ü) hiçbir öğe almaz. Boşluk ekranın ~1/3'ü.
- **Tek yatay çizgi:** 1px `--line`, bölüm başlığının üstünde, 28px padding-top; ekranda ikinci bir yatay çizgi yok.
- **Mühür:** 26×26px düz accent kare (mobilde 20×20), radius 0, gölge yok; hero metninin sağında tek adet.
- **Boşluk çizgisi:** hero'da 12. kolon sınırına denk gelen 1px dikey kural (%66.6 hizada), yalnız landing'de.
- **Ölçü ritmi:** bölüm dikey 160px (mobil 88px), kart padding 28px, gutter 32px — her üçü boşluğun ölçüsüdür.
- **Alt çizgi form dili:** input ve chip kutulu değil, yalnız 1px alt çizgi; odak 4px offset halkayla.
- **Mono etiket:** 11px IBM Plex Mono, uppercase, .22em tracking — ekrandaki tek "küçük" ses.
- **Typography:** Jost (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#bf3320`; neutral scale `#f6f5f1` → `#16181a`.
- **Radius:** `0px` / `2px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Boşluk baskın:** bölüm dikey 160px (mobil 88px); içerik 12 kolonun 8'inde, sağdaki 4 kolon boş.
2. **Tek çizgi:** 1px `--line` bölüm başlığını içerikten ayırır; ekranda ikinci yatay çizgi yok.
3. **Mühür oranı:** accent yalnız birincil buton, aktif işaret ve mühür karesi; ekranın ≤ %2'si.
4. **Gölge ve radius yok:** kart/modal/hero yalnız 1px çizgiyle; radius 0px, en fazla 2px.
5. **İki punto ucu:** 11px mono etiket + 64px display; ara basamak uydurulmaz.
6. **Form dili:** input kutulu değil — yalnız alt çizgi + 4px offset odak halkası.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f6f5f1` | page background | as a card background |
| `--bg-2` | `#ecebe5` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f1f0ea` | passive chip, hover background | primary button |
| `--ink` | `#16181a` | title, body, icon | large background |
| `--ink-soft` | `#4a4f52` | secondary text, description | — |
| `--ink-faint` | `#7b8084` | decorative label, separator text | interactive text |
| `--accent` | `#bf3320` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf7f2` | text above accent | non-accent background |
| `--line` | `rgba(22,24,26,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.32:1** · `ink-soft/bg` **7.6:1** · `ink-faint/bg` **3.66:1 (decorative)** · `accent-ink/accent` **5.33:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Jost) | 40px (mobile 40px) | 400 | 1.04 | -0.02em |
| H2 | same | 26px | 600 | 1.16 | -0.015em |
| H3 | same | 17px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Gölge, blur, gradient, cam yüzey (`--shadow: none`, `--blur: 0`).
- İkinci accent rengi veya dekoratif renk lekesi.
- 2px üstü radius, dolgu ikon, illüstrasyon.
- 700+ ağırlık ve 18/22/30 gibi ara punto basamakları.
- Ortalanmış blok düzen; metin ekseni her zaman solda.
- Süs olarak eklenen çizgi, çerçeve veya desen.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 0px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 0px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 0px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 0px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 0px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 0px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 0px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

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
| Landing / hero | yüksek | 8/4 bölünme, 64px başlık, mühür karesi, tek çizgi | `shots/01-page.png` |
| Dashboard | düşük | KPI kartları gölgesiz 1px; metrik sayısı ≤ 4; sağda 32px boş şerit | `shots/01-page.png` |
| Form | düşük | Alt çizgi alanlar, 48px yükseklik, 4px offset odak | `shots/01-page.png` |
| Liste / tablo | düşük | 56px satır, dikey çizgi yok, sütun ayrımı boşlukla | `shots/01-page.png` |
| Boş durum | orta | Tek satır metin + tek buton; illüstrasyon yerine 64px boşluk | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına tek cümle; ilerleme = 3 çizgi (1px) | `shots/01-page.png` |
| Pricing | orta | 3 kart, radius 2px, öne çıkan kart yalnız accent 1px üst çizgi | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Süs sıfır; alt çizgi alanlar + tek accent buton | `shots/01-page.png` |
| Modal | orta | 40px padding, gölgesiz, perde düz `--bg` | `shots/01-page.png` |
| Bildirim / toast | orta | Üst 1px accent çizgi + metin; kutu yok, 4000ms | `shots/01-page.png` |
| Hata | düşük | `--danger` alt çizgi + 12px açıklama; ikon yok | `shots/01-page.png` |
| Profil / ayar | orta | Bölüm başlıkları tek çizgiyle; alanlar 48px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.32:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.6:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.66:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.33:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.66:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.6 | ≥ 60 target | thin text |

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
| Sayfa "boş kalmış" hissi veriyor | boşluk ölçüsüz: 160px yerine 64px, kolon bölünmesi yok | 8/4 kolon bölünmesi + 160/88px ritmi geri getir |
| Bej minimalizme benziyor | sıcak zemin + serif display eklenmiş | Zemini `#f6f5f1` nötre sabitle, display'i Jost 400'de tut |
| Kırmızı her yerde | accent buton + rozet + grafik + link | Accent'i mühür + birincil buton + aktif işaretle sınırla (≤ %2) |
| Modal "havada durmuyor" | gölge eklendi | Gölgeyi kaldır; perde `--bg` %92 + 1px çizgi kullan |
| Odak halkası görünmüyor | 1px halka accent zeminde | `outline-color: var(--accent-ink)`, offset -4px |
| Başlık ağır görünüyor | 600/700 ağırlığa çıkılmış | Display 400; hiyerarşiyi puntoyla kur |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `nordic-folk` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Ma_(negative_space | en.wikipedia.org — ) — boşluğun yapısal görevi ve aralık ölçüsü |
| https://en.wikipedia.org/wiki/Japanese_typography | Japanese typography — Wikipedia — dikey ritim, harf aralığı, etiket geleneği |
| https://www.metmuseum.org/ | The Met — mühür (hanko) ve tek nokta kırmızısı kullanımı |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | WCAG 2.2 · Target Size (Minimum) — 46–48px dokunma hedefi ölçüsü |

## AI brief

```text
Stil: Japanese Ma (styles/67-japanese-ma/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="japanese-ma"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Jost 400 (H1 64px / -0.03em, mobil 40px), gövde Inter 400 16/1.78 (<= 56ch),
  etiket IBM Plex Mono 11px uppercase .22em. 600+ agirlik ve serif yok.
Yuzey: golge YOK (--shadow: none); radius 0px / 2px. Katman ayrimi tek yatay 1px var(--line).
Yerlesim: 12 kolonun 8'i icerik, sagdaki 4 kolon BOS (ekranin ~1/3'u). Bolum dikey 160px (mobil 88px),
  kart padding 28px, gutter 32px.
Renk: washi #f6f5f1 zemin + sumi #16181a metin + tek accent muhur kirmizisi #bf3320 (ekranin <= %2'si).
Imza: bolum basligi ustunde TEK 1px yatay cizgi; hero'da 26px accent kare (muhur);
  12. kolon sinirinda 1px dikey kural yalniz landing'de; form alanlari yalniz alt cizgi.
Hareket: enter 1050ms cubic-bezier(.25,.1,.25,1) 12px stagger 140ms; scroll top 76% / 1150ms / 14px / once;
  pin acik scrub .6 +85%; hover 520ms imageScale 1.006. prefers-reduced-motion zorunlu.
Yasak: golge, blur, gradient, ikinci accent, 2px ustu radius, dolgu ikon, illüstrasyon,
  ortalama duzen, 600+ agirlik, sus amacli cizgi.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Japanese Ma (japanese-ma) · family: Cultural & Regional (66–75)
Token: --bg #f6f5f1 · --surface #ffffff · --ink #16181a · --accent #bf3320 · --line rgba(22,24,26,.14)
Radius: 0px / 2px · Typography: Jost / Inter / IBM Plex Mono
Required: **Boşluk baskın:** bölüm dikey 160px (mobil 88px); içerik 12 kolonun 8'inde, sağdaki 4 kolon boş. · **Tek çizgi:** 1px `--line` bölüm başlığını içerikten ayırır; ekranda ikinci yatay çizgi yok. · **Mühür oranı:** accent yalnız birincil buton, aktif işaret ve mühür karesi; ekranın ≤ %2'si.
Banned: Gölge, blur, gradient, cam yüzey (`--shadow: none`, `--blur: 0`). · İkinci accent rengi veya dekoratif renk lekesi. · 2px üstü radius, dolgu ikon, illüstrasyon.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="japanese-ma"] {
  --bg: #f6f5f1; --bg-2: #ecebe5;
  --surface: #ffffff; --surface-2: #f1f0ea;
  --ink: #16181a; --ink-soft: #4a4f52; --ink-faint: #7b8084;
  --accent: #bf3320; --accent-ink: #fdf7f2;
  --line: rgba(22,24,26,.14);
  --danger: #d72b1e;
  --danger-ink: #ffffff;
  --ok: #008239;
  --ok-ink: #ffffff;
  --warn: #b65400;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.03em; --blur: 0px; --grain: 0;
}
```
