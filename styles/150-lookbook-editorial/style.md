# 150 · Lookbook Editorial

> **In one sentence:** Kemik kâğıt üzerinde dergi sayfası: Fraunces başlık, 104px dev rakam, kiremit ince çizgi ve 0.7s satır maskesi — ürün değil bakış açısı satılır.

| | |
|---|---|
| **Feeling** | editoryel · mesafeli · zarif · cesur |
| **Best for** | Lookbook/koleksiyon anlatısı, moda ve takı kataloğu, sanat galerisi sergi sayfası, mimari monografi |
| **Avoid** | İşlem odaklı e-ticaret akışı (sepet/ödeme), B2B panel, teknik dokümantasyon |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Stage & Prestige (146–151) · **Token** | `kit/tokens.css` → `[data-style="lookbook-editorial"]` |
| **Composition** | `type` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Lookbook Editorial, ekranı bir dergi sayfası gibi sayfalar: kemik zemin (#efebe4), siyaha yakın mürekkep (#13110f), Fraunces serif başlık ve sayının kendisi kadar büyük rakamlar (104px). Koleksiyon anlatısı metin ve boşlukla kurulur; ürün fotoğrafı ikinci yarıda başlar.

Tek vurgu kiremit (#a8402a) ve neredeyse sadece çizgi olarak: bölüm üstü 1px, bağlantı altı, aktif sekmecik. Dolgu olarak yalnız birincil eylemde ve numaralı etiketlerde görünür. Bu, dergi baskısındaki "kırmızı mürekkep" mantığıdır — az, keskin, işlevli.

Radius neredeyse yok (0px kontrol, 4px kart): kemik kâğıt üzerinde yumuşak kutu yapay durur. Ayrım 1px `--line` çizgilerle ve negatif boşlukla yapılır; gölge hiç kullanılmaz. Tipografi ölçüsü kasıtlı olarak dar tutulur (56ch) — dergi kolonu gibi.

Giriş `letter-stagger`: başlık satırları maskenin altından 0.7s'de çıkar, satırlar arası 90ms. Scroll'da fotoğraf blokları `mask-wipe` ile soldan sağa açılır (0.62s). Pin yok. Hover 160ms ve 1.02 — basılı dergi hissi: dokunma anı kısa, kalıcı efekt yok.

### What is not
- Brass Copper (128) değildir: metal ve gravür dili yok; burada kâğıt, serif ve kiremit mürekkep var.
- Magazine Feature (88) değildir: o stil çok kolonlu uzun okuma düzenidir; burada tek kolon + dev rakam.
- Luxury Typography (04) değildir: 04 altın ve geniş ölçülerle çalışır; burada kiremit ve dar ölçü.
- Minimalism (01) değildir: boşluk değil tipografi ölçeği (104px rakam) konuşur.
- Noir Estate (146) değildir: taban koyu değil, kemik açık; fotoğraf hero değil, metin hero.

### Where it comes from
Kök, moda lookbook'ları ve sanat monografileridir: büyük serif başlık, dev fasikül numarası, tek renk mürekkep, geniş kenar boşluğu. Bugün işe yaramasının nedeni, kaydırma hızını düşürmesi: dev rakam ve dar ölçü kullanıcıyı satır satır okumaya çağırır; bu, ürün ızgarasının yapamadığı bir şeydir.

### Recognition test in 3 seconds
1. Zemin kemik (#efebe4), mürekkep #13110f; vurgu kiremit yalnız çizgi/etiket.
2. Başlık Fraunces 400, 62px, satır aralığı 1.04; dev rakam 104px aynı ailede.
3. Kiremit 1px çizgi bölüm başlığının üstünde 40px; tam genişlik çizgi yok.
4. Radius 0/4px; gölge hiç yok.
5. Ölçü 56ch — dergi kolonu; gövde 17px Inter.

## Visual signature
- Fasikül rakamı: `104px Fraunces`, `--ink-faint` %40 opaklık, bölüm başlığının soluna taşar (negatif margin).
- Kiremit 1px çizgi: bölüm üstünde 40px, etiketin solunda; tam genişlik ayırıcı `--line`.
- Fotoğraf blokları 16:9 ve 4:5 karışık; aralarında 64px boşluk, kenarda 1px `--line` çerçeve.
- Bağlantı: 1px alttan çizilen kiremit çizgi (140ms), hover'da 2px kalınlaşır.
- Kart: 4px radius, 1px `--line`, `--surface` (kemik beyazı), gölge yok.
- Birincil buton: kiremit dolu, kemik metin, 0 radius, 44px — dergideki kutu ilan gibi.
- **Typography:** Fraunces (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#a8402a`; neutral scale `#efebe4` → `#13110f`.
- **Radius:** `0px` / `4px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Başlık Fraunces 400 62px (mobil 32px) `1.04`; 104px fasikül rakamı dekoratif ve aria-hidden.
2. Kiremit yalnız ince çizgi, etiket ve birincil buton.
3. Radius 0/4px, gölge yok, ayrım 1px çizgi.
4. Ölçü 56ch; gövde 17px/1.7.
5. İki fotoğraf oranı (16:9, 4:5), aralarında 64px boşluk.
6. Bağlantı alt çizgisi 1px kiremit, hover'da 2px.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#efebe4` | page background | as a card background |
| `--bg-2` | `#e6e1d8` | partition divider floor, table top | button background |
| `--surface` | `#f7f4ef` | kart, input, modal | full-page background |
| `--surface-2` | `#ffffff` | passive chip, hover background | primary button |
| `--ink` | `#13110f` | title, body, icon | large background |
| `--ink-soft` | `#5a554e` | secondary text, description | — |
| `--ink-faint` | `#857f76` | decorative label, separator text | interactive text |
| `--accent` | `#a8402a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf6f2` | text above accent | non-accent background |
| `--line` | `rgba(19,17,15,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.85:1** · `ink-soft/bg` **6.21:1** · `ink-faint/bg` **3.34:1 (decorative)** · `accent-ink/accent` **5.72:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 32px (mobile 32px) | 400 | 1.04 | -0.02em |
| H2 | same | 38px | 600 | 1.16 | -0.015em |
| H3 | same | 24px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 17px | 400 | 1.68 | 0 |
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
- Radius: `0px` (buton, input, chip), `4px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Kiremit üstüne siyah metin
- Gradient, gölge, blur, 4px üstü radius
- İkinci sıcak renk (hardal, turuncu, altın)
- Büyük harf gövde, 15px altı metin
- Kart mozaiği/bento düzeni
- Sonsuz animasyon, bounce, tilt-3d
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.58:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | salt tipografi: 62px başlık + dev fasikül rakamı, sağda 1 sütun fotoğraf; 2 CTA | `shots/01-page.png` |
| Dashboard (koleksiyon) | orta | 3 sayı (parça, sezon, ortalama fiyat) + 8 satırlık koleksiyon listesi | `shots/01-page.png` |
| Form / randevu | düşük | tek sütun 52px alan, alt çizgi odak; hata 1px `--danger` + 12px açıklama | `shots/01-page.png` |
| Liste / koleksiyon | yüksek | 52px satır: rakam solda, parça adı, sezon etiketi | `shots/01-page.png` |
| Boş durum | düşük | "bu sezonda parça yok" + arşiv bağlantısı | `shots/01-page.png` |
| Onboarding | orta | 2 adım: sezon → ölçü; her adımda tek karar | `shots/01-page.png` |
| Pricing | orta | iki abonelik; öne çıkanda kiremit 1px üst çizgi | `shots/01-page.png` |
| Giriş / ödeme | düşük | kart yok, tek sütun, 1px çizgi bölmeli | `shots/01-page.png` |
| Modal | orta | 4px radius, 1px `--ink` çerçeve, gölge yok | `shots/01-page.png` |
| Bildirim | orta | 36px toast, sol 3px kiremit şerit, 3.6s | `shots/01-page.png` |
| Mobil (390px) | orta | başlık 32px, fasikül rakamı 56px, fotoğraf tam kanama | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.85:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.21:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.34:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.72:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.58:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.7 | ≥ 60 target | thin text |

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
| "Blog" gibi görünüyor | başlık 40px, rakam yok | 62px Fraunces + 104px fasikül rakamı |
| Kiremit her yerde | accent başlık + buton + ikon | kiremit yalnız çizgi/etiket/buton |
| Kolaj kalabalığı | 6 farklı fotoğraf oranı | iki oran (16:9 ve 4:5), aralarında 64px |
| Kâğıt hissi yok | gri zemin + gradient | kemik zemin + grain .015, gradient yok |
| Okunmuyor | gövde 15px, ölçü 80ch | 17px, 56ch |
| Mobilde rakam taşıyor | 104px sabit | clamp(56px, 14vw, 104px), negatif margin kaldırılır |
| Koyu mod "kahverengi" oldu | sıcak siyah yerine kahverengi | koyu blok nötr-sıcak #0c0b0a, kiremit açılır #e0704f |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `magazine-feature` | Same level of seriousness; accent sharing is not allowed |
| garnish | `porcelain-glaze` | Same level of seriousness; accent sharing is not allowed |
| garnish | `boutique-hotel` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `bento-grid` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Fraunces | Google Fonts · Fraunces — serif display ölçeği ve optik boyut ayarı |
| https://practicaltypography.com/choosing-typefaces.html | Butterick · Choosing typefaces — serif/gövde eşleşmesi ve ölçü kararı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast Minimum — kiremit metin eşiği ve küçük punto kuralı |
| https://alistapart.com/article/how-we-read/ | A List Apart · Web typography — satır uzunluğu ve okuma ritmi |

## AI brief

```text
Stil: Lookbook Editorial (styles/150-lookbook-editorial/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="lookbook-editorial"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Fraunces 400 başlık / 700 vurgu) H1 clamp(32px,6vw,62px) 1.04; fasikül rakamı clamp(56px,14vw,104px);
  --font-body (Inter 400) gövde 17px/1.7 ölçü 56ch; --font-mono (JetBrains Mono 400) etiket 11px +.18em büyük harf.
Yüzey: kemik kâğıt zemin, 1px --line çizgiler, radius 0/4px, GÖLGE YOK; iki fotoğraf oranı (16:9 ve 4:5).
  Blur yok; modal 1px --ink çerçeve alır.
Renk: tek mürekkep kiremit (--accent), üstünde kemik (--accent-ink); ikinci sıcak renk ve gradient yok.
Hareket: enter 0.7s cubic-bezier(.4,0,.15,1) letter-stagger 12px st.09 · scroll top 82% 0.62s mask-wipe 14px once ·
  pin yok · hover 160ms scale 1.02 + alt çizgi; prefers-reduced-motion zorunlu.
Yasak: Kiremit üstüne siyah metin; Gradient, gölge, blur, 4px üstü radius; İkinci sıcak renk (hardal, turuncu, altın); Büyük harf gövde, 15px altı metin; Kart mozaiği/bento düzeni; Sonsuz animasyon, bounce, tilt-3d.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Lookbook Editorial (lookbook-editorial) · family: Stage & Prestige (146–151)
Token: --bg #efebe4 · --surface #f7f4ef · --ink #13110f · --accent #a8402a · --line rgba(19,17,15,.14)
Radius: 0px / 4px · Typography: Fraunces / Inter / JetBrains Mono
Required: Başlık Fraunces 400 62px (mobil 32px) `1.04`; 104px fasikül rakamı dekoratif ve aria-hidden. · Kiremit yalnız ince çizgi, etiket ve birincil buton. · Radius 0/4px, gölge yok, ayrım 1px çizgi.
Banned: Kiremit üstüne siyah metin · Gradient, gölge, blur, 4px üstü radius · İkinci sıcak renk (hardal, turuncu, altın)
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="lookbook-editorial"] {
  --bg: #efebe4; --bg-2: #e6e1d8;
  --surface: #f7f4ef; --surface-2: #ffffff;
  --ink: #13110f; --ink-soft: #5a554e; --ink-faint: #857f76;
  --accent: #a8402a; --accent-ink: #fdf6f2;
  --line: rgba(19,17,15,.14);
  --danger: #d02216;
  --danger-ink: #ffffff;
  --ok: #007b33;
  --ok-ink: #ffffff;
  --warn: #af4e00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 4px;
  --shadow: 0 0 0 1px var(--ink); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: 0;
}
```
