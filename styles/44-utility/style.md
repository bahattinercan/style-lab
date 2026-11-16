# 44 · Utility

> **In one sentence:** Süsün sıfıra çekildiği, hiyerarşiyi yalnız punto, boşluk ve tek vurgu renginin taşıdığı ölçülü ürün arayüzü.

| | |
|---|---|
| **Feeling** | disiplinli, sessiz, öngörülebilir, hızlı |
| **Best for** | SaaS paneli, dokümantasyon, dönüşüm landing'i, B2B kurumsal site |
| **Avoid** | lüks emlak vitrini, oyun/etkinlik, moda kampanyası — burada "boş" değil "yoksun" okunur |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Timeless (41–44) · **Token** | `kit/tokens.css` → `[data-style="utility"]` |
| **Composition** | `sticky` · `pill` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Utility, bir arayüz sisteminin **kural kısmını** görünür kılan stildir: tek typeface, sabit punto basamakları, 4'ün katı boşluk, tek vurgu rengi, düz zemin. Süsü feda eder; karşılığında üç şey kazanır — hızlı okunurluk, düşük bakım maliyeti, öngörülebilir bileşen davranışı.

Kurucu kararları üç tanedir. Birincisi **tek vurgu**: ekranda accent yalnız birincil eylem ve aktif durum için yanar; dekoratif renk yoktur. İkincisi **düz zemin**: derinlik gölgeden değil, 1px hairline ve yüzey tonu farkından gelir. Üçüncüsü **isimli metin stili**: her metin önceden tanımlı bir stilden (Heading 1…Caption 5) seçilir, serbest punto/ağırlık kombinasyonu yazılmaz.

Bunun bedeli kişiliksizleşme riskidir; Utility'yi "jenerik" olmaktan kurtaran tek şey **disiplinin görünürlüğü**: hizalanmış kenarlar, tutarlı ritim, abartısız ama doğru tipografik zıplamalar.

### What is not
- **Minimalism (01) değildir:** minimalism sıcak nötr (#fafaf9) ve Inter ile "sakinlik" satar; Utility saf beyaz, Poppins ve ölçü disiplini satar. Ayırt edici: Utility'de başlık gradyanı ve tagline reveal sahnesi vardır, minimalism'de yoktur.
- **Swiss Design (02) değildir:** Swiss 0 radius, siyah hairline ve Helvetica ile baskı dilidir; Utility 8/12px radius ve mavi tek vurgu ile **yazılım** dilidir.
- **Bento Grid (05) değildir:** Bento'nun birim kutudur; Utility'nin birimi satırdır — kart sayısı değil, ritim belirler.
- **AI-native mesh (39) değildir:** gradyan zemin ve ışıma Utility'de yasak; zemin daima düz.

### Where it comes from
İsviçre tipografisinin ızgara disiplini ile 2010'lar sonrası ürün arayüzü pratiğinin (design token, isimli text style, 8px grid) kesişimi. Bugün tekrar önemli çünkü ajanlar ürettiği arayüzlerde en sık hata keyfi punto/radius/boşluktur; Utility bu kararları önceden kapatır. Klişeye dönüşmemesi için korunacak detay: **hairline'ın 1px'te kalması** ve vurgunun tek renk olması.

### Recognition test in 3 seconds
1. Tüm kenarlıklar 1px ve aynı opaklıkta; hiçbir kartta tek taraflı kenarlık yok.
2. Başlık ölçeği 60/48/36/30/24/20 dışına çıkmıyor; ara punto (18/22/26) yok.
3. Ekranda tek doygun renk var; gerisi nötr skala.
4. Gölge yalnızca yüzen katmanda; kart ayrımı çizgiyle.
5. Buton yüksekliği 44px, yatay padding 12px, radius 8px.

## Visual signature
- **Tek typeface:** Poppins (`--font-display` = `--font-body`); mono yalnız kod/veri/rakam için JetBrains Mono.
- **Başlık gradyanı:** yalnız hero başlığında, soldan sağa; açık temada `#000000 → #666666`, koyuda `#FFFFFF → #9B9B9B`. Metin üstünde gradient, zemin üstünde asla.
- **Hairline:** `1px solid var(--line)`; kart, panel ve tablo satırı aynı çizgiyi kullanır. Tek taraflı kenarlık yok.
- **Hero ölçüsü:** başlık ve alt başlık `max-width: 680px`; satır kırılmaları anlam sınırında.
- **Buton geometrisi:** 44px yükseklik, 8px dikey / 12px yatay padding, `--radius`.
- **Tagline sahnesi:** hero'dan bağımsız, en az iki satır büyük punto; kelimeler tek tek `--ink` rengine geçer (Hareket bölümü).
- **Hover dili:** renk/ağırlık kayması ve 1px yukarı hareket; parlaklık artışı yok.
- **Typography:** Poppins (display) + Poppins (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#1d4ed8`; neutral scale `#ffffff` → `#111112`.
- **Radius:** `8px` / `12px`; Card 10–14px, button 6–10px; full circle only chip/badge.

## Mandatory rules

1. Tek typeface (Poppins); mono yalnız kod/veri/rakam
2. Her metin isimli stilden: Heading 1–6, Title 1–5, Body 1–6, Button, Caption
3. Boşluk yalnız --space-1…8 + 80/48 bölüm ritmi
4. Kart ayrımı 1px hairline; gölge yalnız yüzen katmanda
5. Tek vurgu rengi; accent yalnız eylem ve aktif durumda
6. Hero başlık ve alt başlık max 680px, anlam sınırında satır kırma
7. Tagline reveal sahnesi: en az 2 satır, kelime kelime renk geçişi
8. 44×44px dokunma hedefi ve görünür odak halkası

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#ffffff` | page background | as a card background |
| `--bg-2` | `#f6f6f7` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#fafafa` | passive chip, hover background | primary button |
| `--ink` | `#111112` | title, body, icon | large background |
| `--ink-soft` | `#5a5f66` | secondary text, description | — |
| `--ink-faint` | `#90959d` | decorative label, separator text | interactive text |
| `--accent` | `#1d4ed8` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(17,17,18,.10)` | all borders | text colour |

- Measured contrast: `ink/bg` **18.87:1** · `ink-soft/bg` **6.43:1** · `ink-faint/bg` **3.01:1 (decorative)** · `accent-ink/accent` **6.7:1**.
- Price and stock information is written with --ink, not accent; accent solo action (cart, buy).
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poppins) | 60px (mobile 36px) | 600 | 1.06 | -0.02em |
| H2 | same | 36px | 600 | 1.18 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Poppins) | 16px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 12px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Price 26–32px display, currency 13px mono; product name 15px/600.
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

- Product grid 3–4 columns; card ratio 4:5. Filter rail 240px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Cards are separated by light shadow; On hover, the shadow grows, the edge does not change.
- Radius: `8px` (buton, input, chip), `12px` (kart, modal). Card 10–14px, button 6–10px; full circle only chip/badge.

## Bans

- Zemin gradienti, ikinci vurgu rengi, dekoratif renk.
- Tek taraflı kart kenarlığı (tablo satırı ayırıcısı hariç).
- Keyfi değer: `text-[19px]`, `padding: 18px`, `radius: 14px`.
- İtalik, 900 ağırlık, ultra bold.
- `ease` / `linear` geçiş, `top`/`width` animasyonu, sürekli döngü.
- Material Icons / Material Symbols.
- Uydurma fiyat, istatistik, müşteri adı; eksik bilgi `{{price}}` gibi işaretli yer tutucu olur.
- Stack of discount labels on price.
- More than four types of rosettes.
- Auto-playing image.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 8px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 8px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 8px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 8px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 8px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 8px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.7:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 20px; basket/favorite full |
| photo | The product is single object, white/neutral backdrop, shadow is soft; 4:5 |
| illustration | Thin line only in category title |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 680px başlık, gradyan metin, tek CTA, altında logo şeridi | `shots/01-page.png` |
| Dashboard | düşük | 12 kolon, 24px gutter, KPI kartları aynı yükseklikte | `shots/01-page.png` |
| Form | düşük | 44px alanlar, etiket üstte, hata alanın altında | `shots/01-page.png` |
| Liste / tablo | düşük | 52px satır, hairline ayırıcı, sağa hizalı sayı | `shots/01-page.png` |
| Boş durum | orta | tek cümle + birincil eylem, illüstrasyon yok | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım, adım göstergesi, tek seçenek grubu | `shots/01-page.png` |
| Pricing | orta | 3 kart, ortadaki 1px accent halka (gölge değil) | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | süs 0; tek kart, tek eylem, risk azaltıcı tek satır | `shots/01-page.png` |
| Modal | orta | 24px padding, başlık + tek karar, kapatma sağ üstte | `shots/01-page.png` |
| Bildirim / toast | orta | alt sağda, 4sn, hover'da durur | `shots/01-page.png` |
| Hata | düşük | ne oldu + ne yapmalı; `window.alert` yasak | `shots/01-page.png` |
| Profil / ayar | orta | bölüm başlıkları Heading 6, satır 52px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 18.87:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.43:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.01:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.7:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.7:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 105.4 | ≥ 60 target | thin text |

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
| Ekran "boş" okunuyor | her şey aynı ağırlıkta, ritim yok | bölüm aralığını 80/48'e çıkar, H2'yi 48'e al |
| Kartlar kutulanmış görünüyor | gölge + kenarlık birlikte | kartta tek hairline, gölge yalnız yüzen katmanda |
| Renk cıvıltısı | accent dekorasyona kaymış | accent yalnız eylem/aktif; gerisi nötr |
| Tipografi "ucuz" | ara punto (18/22/26) sızmış | basamağa **aşağı** yuvarla |
| Metin son satırda tek kelime | `text-wrap` yok | başlıkta `balance`, gövdede `pretty` |
| Mobilde buton taşıyor | sabit genişlik veya uzun etiket | `min-width: 0`, etiketi kısalt, 44px korunur |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `neumorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `aurora-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `ai-native-mesh` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://tailwindcss.com/docs/font-size | Tailwind · font-size — punto basamakları ve eşleşen satır yükseklikleri |
| https://tailwindcss.com/docs/border-radius | Tailwind · border-radius — radius basamakları |
| https://phosphoricons.com | Phosphor Icons — ikon seti ve çizgi kalınlığı |
| https://m3.material.io/foundations/accessible-design | m3.material.io — dokunma hedefi ve durum eşlemesi |
| https://github.com/elayadesign/ai-design-skills | ai-design-skills (MIT) — bu stilin türetildiği kural seti (MIT) — ölçek/mapping mantığı |

## AI brief

```text
Stil: Utility (styles/44-utility/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="utility"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: tek aile Poppins (--font-display = --font-body), mono yalnız kod/veri için.
  Her metin isimli stilden: Heading 1–6, Title 1–5, Body 1–6, Button-lg/md/sm/Xsm, Caption 1–5.
  Ara punto yasak; mevcut değer en yakın alt basamağa yuvarlanır.
Yüzey: --bg / --surface + 1px --line / yüzen katman; zemin gradienti yasak.
Radius: --radius (8) buton-input, --radius-lg (12) kart-modal; iç içe radius = outer - gap (sonuç 2'nin altındaysa kare).
Boşluk: --space-1…8; bölüm dikey 80px masaüstü / 48px mobil; buton 8px 12px.
Hareket: cubic-bezier(0.22,1,0.36,1); basma 200ms, geçiş 500ms, scroll reveal 600-800ms; yalnız transform/opacity.
  Tagline sahnesi zorunlu: en az 2 satır, kelimeler okuma sırasıyla --ink-faint -> --ink.
Erişilebilirlik: gövde >= 4.5:1, büyük metin >= 3:1, dokunma hedefi >= 44px, görünür odak halkası.
Yasak: ikinci vurgu rengi, tek taraflı kenarlık, italik, 900 ağırlık, Material Icons, keyfi değer, uydurma veri.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Utility (utility) · family: Timeless (41–44)
Token: --bg #ffffff · --surface #ffffff · --ink #111112 · --accent #1d4ed8 · --line rgba(17,17,18,.10)
Radius: 8px / 12px · Typography: Poppins / Poppins / JetBrains Mono
Required: Tek typeface (Poppins); mono yalnız kod/veri/rakam · Her metin isimli stilden: Heading 1–6, Title 1–5, Body 1–6, Button, Caption · Boşluk yalnız --space-1…8 + 80/48 bölüm ritmi
Banned: Zemin gradienti, ikinci vurgu rengi, dekoratif renk. · Tek taraflı kart kenarlığı (tablo satırı ayırıcısı hariç). · Keyfi değer: `text-[19px]`, `padding: 18px`, `radius: 14px`.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="utility"] {
  --bg: #ffffff; --bg-2: #f6f6f7;
  --surface: #ffffff; --surface-2: #fafafa;
  --ink: #111112; --ink-soft: #5a5f66; --ink-faint: #90959d;
  --accent: #1d4ed8; --accent-ink: #ffffff;
  --line: rgba(17,17,18,.10);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #008940;
  --ok-ink: #000000;
  --warn: #bd5b00;
  --warn-ink: #000000;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 8px; --radius-lg: 12px;
  --shadow: 0 1px 2px rgba(17,17,18,.06); --shadow-hard: none;
  --font-display: "Poppins", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
