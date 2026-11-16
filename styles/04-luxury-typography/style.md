# 04 · Luxury Typography

> **In one sentence:** Seyrek yerleşim + ince serif + geniş harf aralığı; lüks, boşluğun ve yavaşlığın fiyatıdır.

| | |
|---|---|
| **Feeling** | seçkin, sakin, pahalı, "az konuşan marka" |
| **Best for** | premium marka, davet/katalog, otel, mücevher, butik ajans |
| **Avoid** | yoğun panel, çok özellikli SaaS, fiyat karşılaştırma, çocuk ürünü |
| **Difficulty** | orta (boşluk ve tipografi bakımı) · **Accessibility** |  |
| **Family** | Minimal (1–7) · **Token** | `kit/tokens.css` → `[data-style="luxury-typography"]` |
| **Composition** | `fullbleed` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Lüks, bilgi yoğunluğunun **azaltılmasıyla** üretilir: çok boşluk, az öğe, ince serif (Cormorant), geniş tracking'li küçük büyük-harf etiketler ve tek altın hairline. Her ekran tek bir şey söyler; gerisi boşluktur.

Kazandığı şey: algılanan değer. Feda ettiği şey: bilgi taşıma kapasitesi — bu stil, "çok seçenek" satan ürünlerde tıkanır.

### What is not
- **Editorial değildir.** Editorial dolu ve ritmik; lüks **seyrek** ve yavaş.
- **Art Deco değildir.** Art Deco geometrik süs ve altın çerçeve kullanır; burada süs yok, sadece oran var.
- **Minimalism değildir.** Minimalizm işlevsel boşluk; lüks **törensel** boşluk (hero'da tek satır, 120px üst boşluk).
- **"Serif + altın" değildir.** Tracking, punto hiyerarşisi ve nefes alanı yoksa sadece "pahalı taklidi" olur.

### Where it comes from
Moda evi katalogları, Didot/Bodoni geleneği ve İsviçre minimalizminin lüks yorumu. Dijitalde premium D2C markalar ve otel zincirleriyle standartlaştı.

### Recognition test in 3 seconds
1. Ekranda **3'ten az** öğe var mı (hero'da başlık, tek satır, tek bağlantı)?
2. Etiketler küçük ve **geniş tracking'li büyük harf** mi (10px, `.2em+`)?
3. Display **ince** (300–400) ve büyük puntolu mu?
4. Radius ≈ 0, gölge yok, tek altın hairline var mı?
5. Görsel tam genişlik veya tamamen boş bir alan mı?

## Visual signature
- **Merkezlenmiş hero** veya tek kolon geniş boşluklu yerleşim; 120px üst boşluk.
- **Tracking'li mikro etiket:** `MAISON · 1924`, 10px, `0.3em`.
- **Altın hairline:** başlık altında 1px, 40–80px uzunlukta, `--accent`.
- **İnce serif display:** Cormorant 300, 56–72px, satır aralığı 1.1.
- **Görsel:** tam genişlik veya 4/5 dikey oranlı tek kare; çerçevesiz.
- **Doku:** grain .03 (kâğıt), görünür gürültü yok.
- **Typography:** Cormorant Garamond (display) + Jost (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#a78746`; neutral scale `#f6f1e7` → `#1a1815`.
- **Radius:** `0px` / `2px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. **Seyrek yerleşim.** Ekran başına en fazla 1 başlık + 1 paragraf + 1 CTA; toplam 3 etkileşim.
2. **İnce serif display** (Cormorant, 300–400), 52–72px; asla 700.
3. **Geniş tracking etiket:** 10px, büyük harf, `0.2–0.34em`.
4. **Radius 0–2px, gölge yok.** Ayrım 1px altın/`--line` hairline ile.
5. **Boşluk baskın:** bölüm dikey boşluk 96–128px; içerik genişliği ≤ 1040px.
6. **Tek aksan (altın):** yalnızca hairline, küçük etiket ve tek bağlantıda.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f6f1e7` | page background | as a card background |
| `--bg-2` | `#efe7d8` | partition divider floor, table top | button background |
| `--surface` | `#fffdf8` | kart, input, modal | full-page background |
| `--surface-2` | `#f3ecdf` | passive chip, hover background | primary button |
| `--ink` | `#1a1815` | title, body, icon | large background |
| `--ink-soft` | `#5c554b` | secondary text, description | — |
| `--ink-faint` | `#938a7e` | decorative label, separator text | interactive text |
| `--accent` | `#a78746` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a1815` | text above accent | non-accent background |
| `--line` | `rgba(26,24,21,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.74:1** · `ink-soft/bg` **6.53:1** · `ink-faint/bg` **3.02:1 (decorative)** · `accent-ink/accent` **5.23:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 64px (mobile 38px) | 600 | 1.12 | -0.02em |
| H2 | same | 34px | 600 | 1.22 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 14px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

- Dense display: 14px body, 13px table, 10.5px mono label. The line height cannot be lower than 1.55.
- Measure: 72ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 columns of content + 4 columns of panels; tables full width. In-card padding 16px, line 40px.
- Section vertical space 44px desktop, 28px mobile; card padding 16px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are smooth; separation with 1px edge and background tone. Reference line in graphs --line.
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Gölge, gradient, cam, doku (grain ≤ .03, görünmez).
- Kalın display (600+), 14px üstü gövde metni (lüks gövde küçük ve seyrek).
- 12px altı gövde metni; 1.7 altı satır aralığı.
- Çoklu CTA, badge/chip enflasyonu, ikon kalabalığı.
- Dolgun buton (dolu accent zemin geniş alanda) — ince çerçeve tercih.
- Ortalanmış olmayan hero: bu stilde **merkezleme serbesttir** (tek istisna).
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.33:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Merkezli 64px serif başlık, altında 46ch tek paragraf, tek çerçeveli CTA, 40px altın hairline | `shots/01-page.png` |
| Dashboard | düşük | Lüks geri çekilir: sans gövde 13px, hairline ayırıcı, serif sadece sayfa başlığında | `shots/01-page.png` |
| Form | düşük | 440px tek sütun, alt çizgili input, tek buton; alan sayısı minimum | `shots/01-page.png` |
| Liste / tablo | düşük | 56px satır, serif sayılar, hairline; zebra yok | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + tek bağlantı, 120px üst boşluk | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına tek görsel + tek cümle; ilerleme hairline | `shots/01-page.png` |
| Pricing | yüksek | 2–3 kolon, orta kolon 1px altın kenar; fiyat serif 44px | `shots/01-page.png` |
| Giriş / ödeme | düşük | 400px merkezli kart, 2 alan, tek CTA; güven metni 11px | `shots/01-page.png` |
| Modal | orta | 2px radius, 1px kenar, 40px padding | `shots/01-page.png` |
| Bildirim / toast | düşük | Koyu zemin + 11px uppercase metin | `shots/01-page.png` |
| Hata | düşük | 13px sakin dil + alt hairline `--danger` | `shots/01-page.png` |
| Profil / ayar | orta | 6 kolon içerik, 56px satırlar, serif bölüm başlığı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.74:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.53:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.02:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.23:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.33:1 | ≥ 3 | accent ring |
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
| Pahalı değil, boş görünüyor | Boşluk var ama ölçek yok | Display 64px + mikro etiket 10px zıplaması |
| Ucuz görünüyor | Gölge/radius/dolu buton | Gölgeyi sil, radius 0, ince çerçeve |
| Okunmuyor | 300 ağırlık + 12px | 400 ağırlık, 14px, 1.75 satır |
| Altın "sarıya" kaçtı | Doygun altın (#FFD700) | `#a78746` gibi soluk metalik ton |
| Bilgi eksik hissi | 3+ CTA, çok bölüm | Tek CTA, ekran başına 2 bölüm |
| Mobilde sıkışma | 112px bölüm boşluğu korunmuş | Mobilde 64px'e indir |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `art-deco` | Same level of seriousness; accent sharing is not allowed |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.aesop.com | Aesop — Seyrek yerleşim + ince serif + geniş boşluk |
| https://www.cos.com | COS — Ürün kartı ve tipografi oranı |
| https://fonts.google.com/specimen/Cormorant+Garamond | Cormorant Garamond — İnce ağırlık kullanımı |

## AI brief

```text
Stil: Luxury Typography (styles/04-luxury-typography/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="luxury-typography"]; hard-coded renk/ölçü YASAK.
Tipografi: Cormorant display 300–400 (52–72px, 1.1, 0.01em) + Jost gövde 14/1.75; mikro etiket 10px uppercase 0.3em.
Yerleşim: ekran başına 1 başlık + 1 paragraf + 1 CTA; hero üst boşluk ≥ 96px; içerik ≤ 1040px.
Yüzey: radius 0–2px, gölge YOK; ayrım 1px --line veya --accent hairline.
Altın (#a78746): yalnızca hairline/ikon/mikro etiket çerçevesi — metin rengi olarak kullanma.
Hareket: 300–400ms ease-out, sadece opacity/transform/renk.
Yasak: gölge, gradient, kalın display, dolu accent buton, çoklu CTA, 12px altı metin, 3+ bölüm.
Çıktı: kod + tek paragraf not (boşluk oranını ve tipografik zıplamayı nasıl kurdun).

Style: Luxury Typography (luxury-typography) · family: Minimal (1–7)
Token: --bg #f6f1e7 · --surface #fffdf8 · --ink #1a1815 · --accent #a78746 · --line rgba(26,24,21,.16)
Radius: 0px / 2px · Typography: Cormorant Garamond / Jost / IBM Plex Mono
Required: **Seyrek yerleşim.** Ekran başına en fazla 1 başlık + 1 paragraf + 1 CTA; toplam 3 etkileşim. · **İnce serif display** (Cormorant, 300–400), 52–72px; asla 700. · **Geniş tracking etiket:** 10px, büyük harf, `0.2–0.34em`.
Banned: Gölge, gradient, cam, doku (grain ≤ .03, görünmez). · Kalın display (600+), 14px üstü gövde metni (lüks gövde küçük ve seyrek). · 12px altı gövde metni; 1.7 altı satır aralığı.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="luxury-typography"] {
  --bg: #f6f1e7; --bg-2: #efe7d8;
  --surface: #fffdf8; --surface-2: #f3ecdf;
  --ink: #1a1815; --ink-soft: #5c554b; --ink-faint: #938a7e;
  --accent: #a78746; --accent-ink: #1a1815;
  --line: rgba(26,24,21,.16);
  --danger: #d5271b;
  --danger-ink: #ffffff;
  --ok: #008037;
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
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
