# 146 · Noir Estate

> **In one sentence:** Gece çekilmiş bir mimari fotoğraf gibi: sıcak siyah zemin, ince altın çizgi, cam gezinme çubuğu ve 0.88s perde girişi — prestij ışıktan değil, ışığın azlığından gelir.

| | |
|---|---|
| **Feeling** | sinematik · pahalı · sessiz · davetkâr |
| **Best for** | Lüks emlak ve rezidans, butik otel rezervasyonu, özel müşteri portföyü (concierge), premium otomotiv vitrini |
| **Avoid** | Yoğun veri tablosu, klinik/randevu formu, çocuk ürünü, düşük bant genişliğinde video-ağırlıklı sayfa |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Stage & Prestige (146–151) · **Token** | `kit/tokens.css` → `[data-style="noir-estate"]` |
| **Composition** | `fullbleed` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Noir Estate, ekranı bir gece mimari fotoğrafı gibi kurar: zemin neredeyse siyah (#0d0b09, kahve-altı sıcaklıkta), tek aydınlık katman hero fotoğrafı, tek vurgu rengi altın (#d3af62). Arayüzün geri kalanı bu iki kutup arasında çalışır; gri tonlar pantone değil, fotoğrafın kendi gölgelerinden türetilmiş gibi davranır.

Hiyerarşiyi kalınlık değil ölçek ve ışık kurar: 56px Cormorant Garamond başlık, 15px Jost gövde, 10px harf aralıklı mono etiket. Cam gezinme çubuğu (blur 18px, %55 saydam yüzey) sayfayı kapatmaz, fotoğrafın üstünde yüzer; altın yalnız 1px çizgi, ince çerçeve ve birincil eylemde görünür.

Kart yüzeyleri 16px köşeli, 1px var(--line) çerçeveli ve gölgesizdir; derinlik fotoğrafın kendisinden gelir. Bu yüzden sayfa "parlayan kutular" değil, tek bir sahne + üstünde duran etiketler gibi okunur.

Hareket tek bir perde açılışıyla sınırlıdır: 0.88s `blur-in`, 14px yükselme, 60ms kademe. Hero fotoğrafı scroll ile 2 katman parallax yapar (metin 1x, fotoğraf 0.86x); pin yalnız "öne çıkan portföy" bölümünde açıktır (scrub 1.22, +165%). Hover 260ms ve 1.014 ölçek — fark edilir ama sarsmaz.

### What is not
- Glassmorphism (08) değildir: cam yalnız gezinme çubuğunda, tek katman; kartlar mat ve opak.
- Luxury Typography (04) değildir: o stil krem kâğıt üzerinde açık tema ile çalışır, burada taban siyah ve fotoğraf hero.
- Brass Copper (128) değildir: 128 gravür/pirinç plaka dilidir ve gloss yasaktır; burada altın ince çizgi + tek yönlü ışık parlaması serbesttir.
- Art Deco (41) değildir: simetrik süs ve fan motifi yok; asimetri hero fotoğrafının kadrajından gelir.
- Karanlık mod SaaS vitrini (151) değildir: orada vurgu soğuk cyan ve tipografi geniş/teknolojik, burada altın ve serif.

### Where it comes from
Kök, gece mimari fotoğrafçılığı ve gayrimenkul vitrin kataloglarıdır: fotoğrafı kesmeyen cam gezinme, altın ince çizgi, harf aralıklı mono künye. Bugün tekrar kullanılmasının nedeni, koyu zeminde tek bir sıcak vurgunun (altın) hem lüks hem okunabilirlik üretmesi: altın `--accent-ink` ile birlikte 9:1 üstü kontrast verir, yani süs değil işlev üstlenir.

### Recognition test in 3 seconds
1. Zemin siyah ama soğuk değil: `--bg` #0d0b09 (R>G>B), mavi-gri koyu değil.
2. Hero tam kanama fotoğraf + üstünde cam gezinme çubuğu (blur 18px, hap radius).
3. Altın yalnız üç yerde: 1px ayırıcı, ince çerçeve, birincil buton dolgusu. Rölyef/gloss yok.
4. Başlık serif ve cümle düzeninde (Cormorant Garamond 300/500); büyük harf başlık yok.
5. Kart köşesi 16px, gölge yok, fotoğraf kartın içinde tam kanama.

## Visual signature
- Hero: `fullbleed` arketip; fotoğrafın üstünde `linear-gradient(180deg, rgba(8,6,5,.15), rgba(8,6,5,.72))` scrim, metin sol altta 12 kolonun 5'inde.
- Cam gezinme çubuğu: `backdrop-filter: blur(18px) saturate(1.25)`, zemin `color-mix(in srgb, var(--bg) 55%, transparent)`, 1px `--line` alt çizgi, hap radius.
- Altın ince çizgi: bölüm başlıklarının üstünde 32px uzunlukta 1px `--accent`; tam genişlik çizgi yok.
- Künye etiketi: 10px mono, `.22em` aralık, büyük harf, `--accent`; önünde 24px altın çizgi.
- Kart: 16px radius, 1px `--line`, `--surface`, gölge yok; hover'da görsel `scale(1.014)` ve çerçeve `--accent` %45.
- Birincil buton: dikey altın gradient (%100 → %92 açık), `--accent-ink` metin, 6px radius, 48px yükseklik.
- **Typography:** Cormorant Garamond (display) + Jost (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#d3af62`; neutral scale `#0d0b09` → `#f5f0e7`.
- **Radius:** `6px` / `16px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Hero tam kanama gece fotoğrafı + scrim; metin sol altta 5/12 kolonda.
2. Cam (blur) yalnız gezinme çubuğunda; altında opak `--bg-2` katmanı.
3. Altın üç yerle sınırlı: 1px çizgi, ince çerçeve, birincil buton dolgusu.
4. Kart radius 16px, gölge yok, 1px `--line` çerçeve.
5. Cormorant Garamond 300 başlık, cümle düzeni; büyük harf gövde yok.
6. Fiyat ve m² mono tabular, sağa hizalı.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0d0b09` | page background | as a card background |
| `--bg-2` | `#070605` | partition divider floor, table top | button background |
| `--surface` | `#171310` | kart, input, modal | full-page background |
| `--surface-2` | `#211b15` | passive chip, hover background | primary button |
| `--ink` | `#f5f0e7` | title, body, icon | large background |
| `--ink-soft` | `#c7bca9` | secondary text, description | — |
| `--ink-faint` | `#8f8574` | decorative label, separator text | interactive text |
| `--accent` | `#d3af62` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#170f04` | text above accent | non-accent background |
| `--line` | `rgba(245,240,231,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.31:1** · `ink-soft/bg` **10.47:1** · `ink-faint/bg` **5.4:1 (decorative)** · `accent-ink/accent` **9.11:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 32px (mobile 32px) | 400 | 1.04 | -0.02em |
| H2 | same | 26px | 600 | 1.16 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 15px | 400 | 1.68 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

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
- Radius: `6px` (buton, input, chip), `16px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- İkinci sıcak vurgu (turuncu/terracotta) veya neon
- Kartlarda gölge, 16px üstü radius, cam kart
- Büyük harf gövde, 13px altı metin
- Sonsuz Ken Burns / parıldayan altın animasyonu
- Altın üstüne beyaz metin
- Fotoğrafın üstünde scrim olmadan metin
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 6px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 6px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 6px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 6px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 6px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 6px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 6px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.43:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | tam kanama fotoğraf + sol altta 5/12 metin, sağ üstte cam gezinti; tek altın CTA + tek ghost CTA | `shots/01-page.png` |
| Arama / filtre | orta | cam panelde 4 alan + tek altın buton; etiketler 10px mono, değerler 15px | `shots/01-page.png` |
| Dashboard (portföy) | orta | 3 KPI (aktif portföy, ortalama m², görüntülenme) + 6 ilan satırı; satır yüksekliği 56px | `shots/01-page.png` |
| Form / concierge | düşük | tek sütun, 48px alan, altın odak halkası; hata `--danger` 1px + 11px açıklama | `shots/01-page.png` |
| Liste / tablo | yüksek | 56px satır, fiyat sağa hizalı tabular, ilçe chip | `shots/01-page.png` |
| Boş durum | düşük | "bu filtrede portföy yok" + tek altın eylem | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: bölge → bütçe → randevu; her adımda tek karar | `shots/01-page.png` |
| Pricing | orta | iki plan, altın çerçeve yalnız öne çıkanda | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek kart, tek eylem, cam panel yok | `shots/01-page.png` |
| Modal | orta | 16px radius, 1px altın çerçeve, `--shadow`; kapatma 44×44px | `shots/01-page.png` |
| Bildirim | orta | 40px toast, sol 3px altın şerit, 3.6s | `shots/01-page.png` |
| Mobil (390px) | orta | tek sütun, hero 360px yüksek, filtre alttan açılır, dokunma hedefi 44px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.31:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 10.47:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.4:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.11:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.43:1 | ≥ 3 | accent ring |
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
| "Ucuz kumarhane" hissi | altın ikinci kez geniş alanda | altın yalnız 1px çizgi / buton / fiyat; rölyef ve gloss yok |
| Okunmuyor | gövde 13px ve `--ink-faint` | 15px `--ink-soft`, yalnız etiket `--ink-faint` |
| Cam çubuk içeriği bulandırıyor | blur < 12px + opak zemin | blur 18px + %55 saydam yüzey, zemin `--bg-2` |
| Hero metni kayboldu | scrim yok | alttan koyulaşan scrim + metin sol alt köşede |
| Kartlar "yüzüyor" | gölge + radius 24px | gölge yok, radius 16px, 1px çerçeve |
| Mobilde taşıyor | 4 alanlı cam panel yatay | panel dikey yığılır, alan genişliği %100 |
| Koyu mod açık modla aynı | koyu blok kopyalanmış | koyu blokta bg bir ton daha derin, accent bir ton parlak |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| garnish | `boutique-hotel` | Same level of seriousness; accent sharing is not allowed |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Cormorant+Garamond | Google Fonts · Cormorant Garamond — display serif ölçek ve ağırlık seçimi (300/500) |
| https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter | MDN · backdrop-filter — cam gezinme çubuğu ve fallback davranışı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — 1px altın çizgi ve odak halkası ölçütü |
| https://git.apcacontrast.com/documentation/APCAeasyIntro | APCA · Readability contrast — koyu zeminde gövde metni okunabilirliği |

## AI brief

```text
Stil: Noir Estate (styles/146-noir-estate/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="noir-estate"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cormorant Garamond 300 başlık / 500 vurgu) H1 56px 1.06 cümle düzeni +0.01em; --font-body (Jost 400/600) gövde 15px/1.6;
  --font-mono (JetBrains Mono 400) künye 10px +.22em büyük harf, fiyat ve m² tabular.
Yüzey: sıcak siyah zemin + gece mimari fotoğraf (scrim ile). Kart = --surface + 1px --line, radius 16px, GÖLGE YOK;
  cam yalnız gezinme çubuğunda (blur 18px, %55 saydam). Altın 1px ince çizgi dışında dolgu olarak yalnız birincil butonda.
Renk: tek accent altın (--accent), üstünde --accent-ink; ikinci sıcak ton, neon, gradient arka plan yok.
Hareket: enter 0.88s cubic-bezier(.16,.84,.28,1) 14px st.06 · scroll top 72% 0.9s 10px once + parallax ·
  pin açık scrub 1.22 +165% · hover 260ms scale 1.014; prefers-reduced-motion zorunlu.
Yasak: İkinci sıcak vurgu (turuncu/terracotta) veya neon; Kartlarda gölge, 16px üstü radius, cam kart; Büyük harf gövde, 13px altı metin; Sonsuz Ken Burns / parıldayan altın animasyonu; Altın üstüne beyaz metin; Fotoğrafın üstünde scrim olmadan metin.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Noir Estate (noir-estate) · family: Stage & Prestige (146–151)
Token: --bg #0d0b09 · --surface #171310 · --ink #f5f0e7 · --accent #d3af62 · --line rgba(245,240,231,.14)
Radius: 6px / 16px · Typography: Cormorant Garamond / Jost / JetBrains Mono
Required: Hero tam kanama gece fotoğrafı + scrim; metin sol altta 5/12 kolonda. · Cam (blur) yalnız gezinme çubuğunda; altında opak `--bg-2` katmanı. · Altın üç yerle sınırlı: 1px çizgi, ince çerçeve, birincil buton dolgusu.
Banned: İkinci sıcak vurgu (turuncu/terracotta) veya neon · Kartlarda gölge, 16px üstü radius, cam kart · Büyük harf gövde, 13px altı metin
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="noir-estate"] {
  --bg: #0d0b09; --bg-2: #070605;
  --surface: #171310; --surface-2: #211b15;
  --ink: #f5f0e7; --ink-soft: #c7bca9; --ink-faint: #8f8574;
  --accent: #d3af62; --accent-ink: #170f04;
  --line: rgba(245,240,231,.14);
  --danger: #e23729;
  --danger-ink: #000000;
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
  --radius: 6px; --radius-lg: 16px;
  --shadow: 0 18px 48px -28px rgba(0,0,0,.95); --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
