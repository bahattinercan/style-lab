# 98 · Generative Grid

> **In one sentence:** 24px çizim ızgarasına hizalanmış yay, düğüm ve tarama izlerinden oluşan, her deseni bir tohum etiketiyle tekrar üretilebilir kılan çizici arayüzü.

| | |
|---|---|
| **Feeling** | hesaplı, serin, üretilmiş, "çizim masası" |
| **Best for** | veri/araştırma ürünü vitrini, tasarım aracı, üretken sanat portfolyosu, teknik dokümantasyon landing'i |
| **Avoid** | duygusal/lüks moda kampanyası, sıcak hikâye anlatımı, çocuk uygulaması — çizici dili mesafeli kalır |
| **Difficulty** | orta-yüksek (desenin gerçekten ızgaraya hizalanması) · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="generative-grid"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Generative Grid, arayüzü bir **çizim masası** gibi kurar: 24px modül ızgara, kesişimlerde 3px **düğüm noktaları**, 45°/2px **tarama** ile doldurulmuş alanlar, eğri yaylar ve her panelde `seed` + koordinat etiketi. Kurucu kararları üç tanedir. Birincisi **ızgara gerçek**: tüm çizim 24px modüle hizalanır; "yaklaşık hizalı" görsel dağınıklık sayılır. İkincisi **tekrar üretilebilirlik**: her desen bir `seed` değeri taşır, aynı tohum aynı deseni verir. Üçüncüsü **ölçülü üretkenlik**: rastgeleliğin yerini seçilmiş varyasyon alır — `nth-child` ile 4'lük ritimde değişen düğüm yoğunluğu.

Kazandığı şey: **teknik güven** — çizici dili, ürünün "hesaplı" olduğunu görsel olarak kanıtlar. Feda ettiği şey: **samimiyet**; bu yüzden Jost gövde ve %8 ızgara opaklığı ile sertlik kırılır.

### What is not
- **Blueprint Drawing (56) değildir:** 56 mavi zeminli teknik **resim** dilidir (kesit, ölçü oku, pafta); burada zemin açık gri ve desen **üretken** (tohumlu) — ölçü oku yok.
- **Swiss Design (02) değildir:** 02'de ızgara **görünmez bir disiplin**dir; burada ızgara **görünür çizim katmanıdır** (düğüm + tarama + koordinat).
- **Bauhaus (35) değildir:** 35 temel geometri + temel renklerle (kırmızı/sarı/mavi) afiş kurar; burada palet nötr + tek yeşil accent.
- **Optical Illusion (97) değildir:** 97 algıyı yanıltmak için frekans/açı kullanır; burada amaç yanıltmak değil **ölçmek** — her çizgi etiketlidir.
- **"Nokta ızgaralı tech landing" değildir:** kimlik `seed` etiketi + düğüm + 24px modül üçlüsüdür; nokta deseni tek başına yeterli sayılmaz.

### Where it comes from
Plotter ve vektör çizim geleneği (1960'lar Benson plotter estetiği), Processing/p5.js ile yaygınlaşan "generative design" pratiği ve `randomSeed()` fikri: **rastgelelik tekrar üretilebilir olmalı**. Dijitalde tasarım aracı vitrinleri ve üretken sanat portfolyoları bu dili kurumsallaştırdı. Klişeye dönüşmemesi için korunacak detay: **24px modülün ve seed etiketinin** her desen panelinde bulunması.

### Recognition test in 3 seconds
1. Zemin ya da bir panel 24px ızgarayla çizilmiş; çizgiler 1px ve eşit aralıklı.
2. Kesişimlerde küçük düğüm noktaları var; sayıları ekran başına 24'ü geçmiyor.
3. Bir alan 45° ince tarama ile doldurulmuş (düz dolgu değil).
4. Panellerin köşesinde `seed 0428` ya da `x:024 y:048` gibi mono etiket duruyor.
5. Display Michroma ile geniş ve büyük harf; gövde Jost, sayılar Share Tech Mono.

## Visual signature
- **24px çizim ızgarası:** iki eksen `1px` çizgi, `%8` opaklık; hero ve desen panelinde görünür.
- **Düğüm noktası:** 3px, accent; yalnız kesişimlerde, ekran başına ≤24; kart köşesinde 2px halka ile.
- **45° tarama:** `repeating-linear-gradient(-45deg, accent %30, 1px / 6px)`; yalnız bir alanda (desen panelinin bir bölgesi).
- **Seed + koordinat etiketi:** mono 9–10px, `seed 0428`, `x:024 y:048`; her desen panelinde zorunlu.
- **Michroma 400:** 34px, `0.03em`, büyük harf; Jost gövde 15px/1.58.
- **Keskin geometri:** radius 1px / 4px; gölge yok.
- **Hover dili:** 150ms'de butonun sağ üst köşesinde 3px düğüm belirir, ölçek `1.012`; gölge eklenmez.
- **Typography:** Michroma (display) + Jost (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#0b7d55`; neutral scale `#e9edf0` → `#0f161a`.
- **Radius:** `1px` / `4px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Izgara modülü 24px; tüm çizim (yay, düğüm, tarama) bu modüle hizalı
2. Her desen panelinde `seed` etiketi ve koordinat etiketi (mono) görünür
3. Düğüm noktası 3px, yalnız kesişimlerde; ekran başına en fazla 24 düğüm
4. Taralı alan 45°, 2px çizgi, %30 opaklık; dolgu olarak kullanılmaz
5. Michroma 400 sabit; gövde Jost; sayı/etiket Share Tech Mono
6. Ekran başına en fazla 1 tam kanama desen paneli

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#e9edf0` | page background | as a card background |
| `--bg-2` | `#dfe5e9` | partition divider floor, table top | button background |
| `--surface` | `#f7f9fa` | kart, input, modal | full-page background |
| `--surface-2` | `#eef2f4` | passive chip, hover background | primary button |
| `--ink` | `#0f161a` | title, body, icon | large background |
| `--ink-soft` | `#414b51` | secondary text, description | — |
| `--ink-faint` | `#79858c` | decorative label, separator text | interactive text |
| `--accent` | `#0b7d55` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(15,22,26,.13)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.51:1** · `ink-soft/bg` **7.59:1** · `ink-faint/bg` **3.22:1 (decorative)** · `accent-ink/accent` **5.15:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 34px (mobile 22px) | 500 | 1.06 | -0.02em |
| H2 | same | 22px | 600 | 1.18 | -0.015em |
| H3 | same | 17px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

- Display 54px; technical labels mono and wide tracking. Body 15px, size 62ch.
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

- The grid is slightly visible as an auxiliary line (accent 8%); section spacing 56px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- The surfaces are separated by a thin accent edge; 1px signal line instead of shadow.
- Radius: `1px` (buton, input, chip), `4px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Hizasız/rastgele görünen çizgiler (ızgara dışı çizim).
- Gradient, gölge, blur, cam yüzey.
- 4px üstü radius; Michroma 700; italik.
- Sonsuz dönen çizim; kaotik hareket.
- Desenü metnin arkasına koymak.
- Seed etiketi olmayan "üretken" desen.
- Uydurma veri/seed değeri; eksik içerik `{{seed}}` gibi işaretli yer tutucu olur.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 1px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 1px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 1px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 1px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 1px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 1px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 1px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.88:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | tam kanama desen paneli (ızgara+düğüm+tarama) + 7/5 içerik | `shots/01-page.png` |
| Dashboard | orta | 4 kart, ikisinde koordinat etiketi + 4 serili grafik | `shots/01-page.png` |
| Form | düşük | 40px alanlar, mono etiket, sağ üst düğüm | `shots/01-page.png` |
| Liste / tablo | orta | 34px satır, `r01…` numara, cetvel tıkları | `shots/01-page.png` |
| Boş durum | orta | boş ızgara + `seed 0000` + tek CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: tohum → modül → çizim | `shots/01-page.png` |
| Pricing | orta | 3 kart, orta kart 1px accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | desen yok, yalnız mono form | `shots/01-page.png` |
| Modal | orta | 1px accent çerçeve + 4px dış kılavuz | `shots/01-page.png` |
| Bildirim / toast | orta | sol 4px düğüm sütunu, mono metin | `shots/01-page.png` |
| Hata | düşük | `E-01` mono kodu + `--danger` çerçeve | `shots/01-page.png` |
| Profil / ayar | orta | 34px satır + modül/ızgara ayarı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.51:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.59:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.22:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.15:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.88:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.9 | ≥ 60 target | thin text |

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
| Desen "dağınık" görünüyor | çizim 24px modüle hizalı değil | tüm koordinatları 24'ün katına yuvarla |
| Ekran "tech şablon" gibi duruyor | seed/koordinat etiketi yok | her desen paneline `seed` + koordinat ekle |
| Göz yoruyor | düğüm sayısı 24'ü geçmiş | düğümleri kesişimlerin dörtte birine indir |
| Tarama kirli görünüyor | opaklık %30 üstü veya aralık 6px altı | %30 ve 6px aralıkta kal |
| Tipografi çizimle yarışıyor | Michroma 700 / büyük punto | 400 ve ≤34px |
| Koyu modda ızgara kayboluyor | opaklık %8'de kalmış | koyuda %10'a çıkar |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `blueprint-drawing` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bauhaus` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `frutiger-aero` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://processing.org/ | Processing Foundation — tohum (seed) mantığı ve çizim döngüsü |
| https://www.generative-gestaltung.de/2/ | Generative Design (Bohnacker/Gross) — ızgara tabanlı üretken kompozisyon kuralları |
| https://p5js.org/reference/p5/randomSeed/ | p5.js · randomSeed() — tekrar üretilebilir desen (seed) semantiği |
| https://fonts.google.com/specimen/Michroma | Google Fonts · Michroma — geniş teknik display ve 400 sınırı |

## AI brief

```text
Stil: Generative Grid (styles/98-generative-grid/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="generative-grid"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Michroma 400, buyuk harf) baslikta, --font-body (Jost) govdede,
           --font-mono (Share Tech Mono) etiket/sayi/koordinatta.
Yuzey: --bg / --surface / --surface-2; radius 1px/4px; golge YOK; ayrim 1px --line + 24px izgara.
Desen: 24px modul izgara, 3px dugum (<=24), 45 derece 2px tarama (%30); her panelde seed + koordinat etiketi.
Imza: enter 0.78s cubic-bezier(.3,0,0,1) 10px / stagger 0.03; scroll top 76% 0.9s 24px once:true;
      pin acik scrub 1.6 / +60%; hover 150ms scale 1.012.
Yasak: hizasiz cizim, golge/blur/gradient, 4px ustu radius, seed etiketsiz desen, sonsuz dongu.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Generative Grid (generative-grid) · family: Motion & Optics (96–105)
Token: --bg #e9edf0 · --surface #f7f9fa · --ink #0f161a · --accent #0b7d55 · --line rgba(15,22,26,.13)
Radius: 1px / 4px · Typography: Michroma / Jost / Share Tech Mono
Required: Izgara modülü 24px; tüm çizim (yay, düğüm, tarama) bu modüle hizalı · Her desen panelinde `seed` etiketi ve koordinat etiketi (mono) görünür · Düğüm noktası 3px, yalnız kesişimlerde; ekran başına en fazla 24 düğüm
Banned: Hizasız/rastgele görünen çizgiler (ızgara dışı çizim). · Gradient, gölge, blur, cam yüzey. · 4px üstü radius; Michroma 700; italik.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="generative-grid"] {
  --bg: #e9edf0; --bg-2: #dfe5e9;
  --surface: #f7f9fa; --surface-2: #eef2f4;
  --ink: #0f161a; --ink-soft: #414b51; --ink-faint: #79858c;
  --accent: #0b7d55; --accent-ink: #ffffff;
  --line: rgba(15,22,26,.13);
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
  --radius: 1px; --radius-lg: 4px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.03em; --blur: 0px; --grain: 0;
}
```
