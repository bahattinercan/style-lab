# 147 · Agency Portfolio

> **In one sentence:** Dijital ajans vitrini: kâğıt beyazı zemin, 72px Archivo Black başlık, elektrik mavi vurgu ve 0.62s harf kademesi — işi tipografi ve indeks numarası anlatır.

| | |
|---|---|
| **Feeling** | keskin · iddialı · editöryel · hızlı |
| **Best for** | Ajans/studio portfolyosu, vaka çalışması indeksi, tasarımcı özgeçmişi, kültür-sanat programı vitrini |
| **Avoid** | Duygusal marka anlatısı, lüks ürün, sağlık iletişimi, dokunmatik self-servis kiosk |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Stage & Prestige (146–151) · **Token** | `kit/tokens.css` → `[data-style="agency-portfolio"]` |
| **Composition** | `index` · `pill` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Agency Portfolio, portfolyoyu bir dergi indeksi gibi kurar: ekranın üst üçte birinde 72px Archivo Black başlık, altında 1px çizgilerle bölünmüş proje listesi ve her satırın başında mono indeks numarası. Görsel (proje kapağı) başlığın rakibi değil, satırın kanıtıdır.

Zemin kâğıt beyazı-na yakın sıcak gri (#f3f1ec), metin neredeyse siyah (#0e0e0d). Tek vurgu elektrik mavi (#1f45d6) ve yalnız üç yerde: aktif indeks numarası, bağlantı alt çizgisi ve birincil eylem bloğu. Başka renk yok; görsellerin kendi renkleri sahneye girer.

Radius 2px (kontrol) ve 6px (kart) — kutu yumuşaması yok. Derinlik gölgeyle değil, 1px çizgi ve negatif boşlukla kurulur. Tipografi hiyerarşisi ağırlıkla değil boyut ve harf aralığıyla yapılır: display `-0.02em`, mono etiket `+0.14em`.

Hareket tipografiden gelir: başlık satırları 0.62s `letter-stagger` ile tek tek açılır (40ms kademe), proje ızgarası `grid-stagger` ile soldan sağa 0.54s’de dolar. Pin yok; sayfa kendi ritmiyle akar. Hover 180ms ve 1.03 — hızlı, tık hissi verir.

### What is not
- Swiss Design (02) değildir: o stil nötr ve ölçülü kalır; burada başlık kasıtlı olarak ekranı taşacak kadar büyük ve mavi vurgu agresif.
- Editorial Design (03) değildir: metin ağırlıklı dergi düzeni yerine indeks/ızgara hâkim.
- Neo-Brutalism (141) değildir: 3px siyah çerçeve, offset gölge ve "kırık" kompozisyon yok; çizgiler 1px ve hizalı.
- Dark SaaS (151) değildir: taban açık kâğıt ve vurgu sıcak-soğuk zıtlığı değil tek mavi blok.
- Minimalism (01) değildir: boşluk değil tipografi ölçeği konuşur; başlık 72px.

### Where it comes from
Kök, 2010'ların stüdyo portfolyoları ve baskı dergilerinin içindekiler sayfasıdır: indeks numarası, 1px ayırıcı, tek renk vurgu. Bugün işe yaramasının nedeni, ağır görsel yerine indekslenebilir metin göstermesi — 12 vaka aynı ekranda taranabilir hâle gelir ve mavi yalnız "şu an buradasın" bilgisini taşır.

### Recognition test in 3 seconds
1. Başlık 72px Archivo Black, `-0.02em` aralık, iki satıra kırılır; büyük harfe çevrilmez.
2. Her proje satırının solunda 3 haneli mono indeks (01, 02, 03) ve 1px alt çizgi.
3. Tek vurgu elektrik mavi; yalnız numara, bağlantı altı ve birincil butonda.
4. Kart radius 6px, gölge yok, görsel kartın üstünde tam kanama.
5. Etiketler mono 10px `+0.14em` büyük harf; gövde 16px Inter.

## Visual signature
- Index hero: sol 7/12 dev başlık, sağ 5/12 dikey indeks listesi; ikisi arasında 1px dikey çizgi.
- İndeks numarası: 10px Space Mono, `+0.14em`, `--ink-faint`; aktif satırda `--accent` ve 2px sol şerit.
- Hover: satırın altına 0→100% genişleyen 1px `--accent` çizgi (180ms), görsel `scale(1.03)`.
- Kart: 6px radius, 1px `--line`, `--surface`; etiket üstte 1 satır mono, başlık 20px Inter 600.
- Birincil buton: 2px radius, `--accent` dolu blok, `--accent-ink` metin, 44px yükseklik, gölge yok.
- Grain `.01` yalnız zemin katmanında; fotoğrafa filtre yok.
- **Typography:** Archivo Black (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#1f45d6`; neutral scale `#f3f1ec` → `#0e0e0d`.
- **Radius:** `2px` / `6px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Başlık Archivo Black 72px (mobil 36px), `-0.02em`; büyük harfe çevrilmez.
2. Her proje satırında 3 haneli mono indeks ve 1px ayırıcı.
3. Mavi yalnız konum/eylem: indeks, alt çizgi, birincil buton.
4. Kart radius 6px, gölge yok, 1px çerçeve.
5. Gövde 16px Inter 1.6; ölçü 68ch.
6. Hover satırında mavi sol şerit + alt çizgi çizilir.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f3f1ec` | page background | as a card background |
| `--bg-2` | `#eae7e0` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#e4e0d7` | passive chip, hover background | primary button |
| `--ink` | `#0e0e0d` | title, body, icon | large background |
| `--ink-soft` | `#55534d` | secondary text, description | — |
| `--ink-faint` | `#8b8880` | decorative label, separator text | interactive text |
| `--accent` | `#1f45d6` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(14,14,13,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.11:1** · `ink-soft/bg` **6.81:1** · `ink-faint/bg` **3.14:1 (decorative)** · `accent-ink/accent` **7.29:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 36px (mobile 36px) | 400 | 1.04 | -0.02em |
| H2 | same | 36px | 600 | 1.16 | -0.015em |
| H3 | same | 24px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Kart gölgesi, blur, 6px üstü radius
- Üçüncü bir vurgu rengi veya gradient blok
- Büyük harf gövde, 11px altı etiket
- İtalik başlık, ikinci display ailesi
- Sonsuz animasyon, bounce, parallax
- Aktif durumu yalnız renkle bildirmek
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.29:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | sol 7/12 dev başlık + tek CTA; sağ 5/12 indeks listesi, aralarında 1px çizgi | `shots/01-page.png` |
| Dashboard (vaka) | orta | 3 KPI (vaka sayısı, ortalama süre, sektör) + 8 satırlık indeks tablo | `shots/01-page.png` |
| Form / brief | düşük | tek sütun 48px alan, mavi odak halkası; hata 1px `--danger` + 12px açıklama | `shots/01-page.png` |
| Liste / indeks | yüksek | 44px satır, mono numara solda, sektör chip sağda | `shots/01-page.png` |
| Boş durum | düşük | "bu filtrede vaka yok" + filtreyi temizle (mavi alt çizgi) | `shots/01-page.png` |
| Onboarding | orta | 2 adım: sektör → bütçe aralığı; her adımda tek karar | `shots/01-page.png` |
| Pricing | orta | üç paket, yalnız ortada mavi 2px üst şerit | `shots/01-page.png` |
| Giriş / ödeme | düşük | kart yok, tek sütun, 1px çizgi bölmeli | `shots/01-page.png` |
| Modal | orta | 6px radius, 1px `--ink` çerçeve, gölge yok | `shots/01-page.png` |
| Bildirim | orta | 36px toast, sol 3px mavi şerit, 3.2s | `shots/01-page.png` |
| Mobil (390px) | orta | başlık 36px, indeks tek satır + ok; dokunma hedefi 44px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.11:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.81:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.14:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.29:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.29:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.3 | ≥ 60 target | thin text |

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
| "Şablon gibi" görünüyor | başlık 44px, indeks yok | başlık 72px + 3 haneli mono indeks |
| Mavi her yerde | accent bağlantı + arka plan + ikon | mavi yalnız numara/alt çizgi/buton |
| Kalabalık | kart gölgesi + radius 12px | gölge yok, radius 6px, 1px çizgi |
| Tipografi yumuşak | display 700 Inter | Archivo Black 400, `-0.02em` |
| Okunmuyor | gövde 13px | 16px Inter 1.6 |
| Mobilde taşıyor | 72px başlık sabit | clamp(36px, 8vw, 72px) |
| Koyu mod "ters çevrilmiş" | invert yaklaşımı | koyu blokta mavi açılır (#7d93ff), çizgi %16 |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `magazine-feature` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dark-dashboard` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Archivo+Black | Google Fonts · Archivo Black — display ağırlığı ve harf aralığı referansı |
| https://practicaltypography.com/ | Butterick · Typography for indexes — indeks numarası, ayırıcı çizgi ve ölçü kararları |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | WCAG 2.2 · Focus Appearance — odak halkası kalınlığı ve offset |
| https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness | MDN · text-decoration-thickness — alt çizgi çizimi (underline-draw) |

## AI brief

```text
Stil: Agency Portfolio (styles/147-agency-portfolio/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="agency-portfolio"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Archivo Black 400) H1 clamp(36px,8vw,72px) 1.02 -0.02em; --font-body (Inter 400/600) gövde 16px/1.6;
  --font-mono (Space Mono 400) indeks numarası ve etiket 10px +.14em büyük harf.
Yüzey: sıcak kâğıt zemin, 1px --line çizgiler, radius 2/6px, GÖLGE YOK. Modal 1px --ink çerçeve.
  Fotoğraf kartın üstünde tam kanama; filtre yok.
Renk: tek accent elektrik mavi (--accent), üstünde beyaz (--accent-ink); başka vurgu rengi yok.
Hareket: enter 0.62s cubic-bezier(.2,.8,.2,1) letter-stagger 20px st.04 · scroll top 80% 0.54s grid-stagger 16px once ·
  pin yok · hover 180ms scale 1.03 + underline-draw; prefers-reduced-motion zorunlu.
Yasak: Kart gölgesi, blur, 6px üstü radius; Üçüncü bir vurgu rengi veya gradient blok; Büyük harf gövde, 11px altı etiket; İtalik başlık, ikinci display ailesi; Sonsuz animasyon, bounce, parallax; Aktif durumu yalnız renkle bildirmek.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Agency Portfolio (agency-portfolio) · family: Stage & Prestige (146–151)
Token: --bg #f3f1ec · --surface #ffffff · --ink #0e0e0d · --accent #1f45d6 · --line rgba(14,14,13,.14)
Radius: 2px / 6px · Typography: Archivo Black / Inter / Space Mono
Required: Başlık Archivo Black 72px (mobil 36px), `-0.02em`; büyük harfe çevrilmez. · Her proje satırında 3 haneli mono indeks ve 1px ayırıcı. · Mavi yalnız konum/eylem: indeks, alt çizgi, birincil buton.
Banned: Kart gölgesi, blur, 6px üstü radius · Üçüncü bir vurgu rengi veya gradient blok · Büyük harf gövde, 11px altı etiket
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="agency-portfolio"] {
  --bg: #f3f1ec; --bg-2: #eae7e0;
  --surface: #ffffff; --surface-2: #e4e0d7;
  --ink: #0e0e0d; --ink-soft: #55534d; --ink-faint: #8b8880;
  --accent: #1f45d6; --accent-ink: #ffffff;
  --line: rgba(14,14,13,.14);
  --danger: #d4271b;
  --danger-ink: #ffffff;
  --ok: #007f36;
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
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 0 0 1px var(--ink); --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -.02em; --blur: 0px; --grain: 0;
}
```
