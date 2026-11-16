# 17 · Maximalism

> **In one sentence:** Dolu, katmanlı, motifli: her yüzey bir desen, her bölüm bir renk, ama ritim korunur — "kontrollü bolluk".

| | |
|---|---|
| **Feeling** | zengin, kültürel, cesur, koleksiyoncu |
| **Best for** | moda, kültür/sanat, dergi, festival, butik marka, koleksiyon vitrini |
| **Avoid** | veri yoğun panel, ödeme/giriş, düşük bilişsel yük gerektiren ürün |
| **Difficulty** | yüksek (bolluk ≠ kaos) · **Accessibility** |  |
| **Family** | Bold (13–18) · **Token** | `kit/tokens.css` → `[data-style="maximalism"]` |
| **Composition** | `split-reverse` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Maximalism, "az çoktur"un tersi: **katmanlı desen**, **doygun derin renk** (bordo, hardal, krem), **serif display** (Playfair), **kalın ofset gölge** ve **motif tekrarı** (çizgi, dama, çiçek). Bolluk bilinçli: her bölümde tek bir baskın motif, tek bir renk bloğu ve net bir hiyerarşi.

Kazandığı şey: kültürel zenginlik ve hatırlanma. Feda ettiği şey: hız ve sakinlik; ayrıca dikkatsiz uygulanırsa okunurluk.

### What is not
- **Anti-design değildir.** Maximalism hizalıdır ve ritmi vardır; anti-design ızgarayı bozar.
- **Memphis değildir.** Memphis kontur + geometri; maximalism **desen + serif + derin renk**.
- **"Her yeri doldur" değildir.** Motif bütçesi olmadan sonuç görsel gürültü olur.
- **Kitsch değildir.** Renk uyumu (analog bordo-hardal-krem) korunur, neon karışmaz.

### Where it comes from
Viktorya dönemi desen sevgisi, 70'ler iç mekân, Gucci/Alessandro Michele dönemi moda dili. Dijitalde kültür dergileri ve butik markalarda "steril minimalizme" alternatif.

### Recognition test in 3 seconds
1. Arka planda **motif/desen** var mı (çizgi, dama, çiçek)?
2. Renkler derin ve sıcak mı (bordo, hardal, krem)?
3. Serif display + sans gövde mi?
4. Ofset gölge 6px ve blursuz mu?
5. Birden fazla desen var ama **biri baskın** mı?

## Visual signature
- **Baskın motif:** çapraz çizgi (diagonal stripe) veya dama; opacity .08–.12 zemin katmanı.
- **Renk bloğu:** hardal `--surface-2` ikinci bölüm zemini, bordo `--accent` CTA.
- **Serif display:** Playfair 56–72px, `-0.01em`.
- **Ofset gölge:** 6px, koyu kahve; blur yok.
- **Karışık ölçek:** 72px başlık + 18px serif alıntı + 13px etiket.
- **Grain .05:** kâğıt/baskı hissi.
- **Typography:** Playfair Display (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#7a1f3d`; neutral scale `#f6e7d8` → `#221410`.
- **Radius:** `6px` / `14px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Motif bütçesi:** ekran başına 1 baskın desen + en fazla 1 ikincil; ikisi aynı ölçekte kullanılmaz.
2. **Renk uyumu:** analog palet (bordo #7a1f3d, hardal #f2c14e, krem #f6e7d8); 3'ten fazla doygun renk yok.
3. **Serif display (Playfair) + sans gövde (Inter).**
4. **Ofset gölge** `6px 6px 0 rgba(34,20,16,.85)`; radius 6/14px.
5. **Okunurluk tabanı:** metin zemini her zaman düz (desen üstünde metin yok), kontrast ≥ 4.5:1.
6. **Hiyerarşi:** her bölümde tek bir odak (görsel, başlık veya sayı).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f6e7d8` | page background | as a card background |
| `--bg-2` | `#e8cfae` | partition divider floor, table top | button background |
| `--surface` | `#fffaf3` | kart, input, modal | full-page background |
| `--surface-2` | `#f2c14e` | passive chip, hover background | primary button |
| `--ink` | `#221410` | title, body, icon | large background |
| `--ink-soft` | `#57403a` | secondary text, description | — |
| `--ink-faint` | `#8f7a72` | decorative label, separator text | interactive text |
| `--accent` | `#7a1f3d` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6e7d8` | text above accent | non-accent background |
| `--line` | `rgba(34,20,16,.2)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.75:1** · `ink-soft/bg` **7.88:1** · `ink-faint/bg` **3.34:1 (decorative)** · `accent-ink/accent` **8.29:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Playfair Display) | 66px (mobile 36px) | 400 | 1.08 | -0.02em |
| H2 | same | 40px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Title 52px/400 — remains silent next to the texture. Tags mono, wide tracking.
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

- Card spacing 14px; The material photo can extend right to the edge, the text cannot.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Shadow single level; With material feeling grain + edge. No glass/blur.
- Radius: `6px` (buton, input, chip), `14px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Desen üstünde metin (kontrast düşer).
- 3'ten fazla desen/renk; her bölümde farklı stil.
- Neon renk + pastel karışımı.
- Gölge çeşitliliği (tek ofset).
- Yoğun veri ekranında motif (tablo/grafik okunmaz).
- 8 adet eşit kart (bolluk ≠ eşit ızgara).
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.67:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | çok yüksek | 68px serif başlık, desenli sağ panel, hardal blok, bordo CTA | `shots/01-page.png` |
| Dashboard | düşük | Desen kapanır; kart gölgeleri kalır, KPI'lar sade | `shots/01-page.png` |
| Form | düşük | Düz yüzey, 2px kenar, bordo buton | `shots/01-page.png` |
| Liste / tablo | düşük | Desen yok, 2px ayırıcı, serif sayı | `shots/01-page.png` |
| Boş durum | orta | Motifli illüstrasyon + tek cümle + buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 büyük görsel + 2 satır | `shots/01-page.png` |
| Pricing | yüksek | 3 kart, orta kart hardal + bordo çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Desen ve ofset kapanır; düz form | `shots/01-page.png` |
| Modal | orta | 10px ofset, serif başlık | `shots/01-page.png` |
| Bildirim / toast | orta | Bordo zemin + krem metin | `shots/01-page.png` |
| Hata | düşük | `--danger` çerçeve + 14px metin | `shots/01-page.png` |
| Profil / ayar | orta | Kart listesi, motif yalnız başlık bandında | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.75:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.88:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.34:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.29:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.67:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 91.7 | ≥ 60 target | thin text |

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
| Görsel gürültü | 3+ desen, her bölüm farklı renk | Motif ≤ 2, tek palet |
| Okunmuyor | Desen metin altında | Metni `--surface` üstüne al |
| "Ucuz" görünüm | Neon/pastel karışımı | Analog palet (bordo-hardal-krem) |
| Hiyerarşi yok | Her şey eşit doygunlukta | Bölüm başına 1 odak, accent alanı ≤ %15 |
| Yorgunluk | 4+ punto seviyesi | En fazla 3 seviye |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `victorian` | Same level of seriousness; accent sharing is not allowed |
| garnish | `art-deco` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bohemian` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `neumorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.gucci.com | Gucci — Katmanlı desen + serif lüks dili |
| https://www.itsnicethat.com | It's Nice That — Editöryel maximalism örnekleri |
| https://fonts.google.com/specimen/Playfair+Display | Playfair Display — Serif display |

## AI brief

```text
Stil: Maximalism (styles/17-maximalism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="maximalism"]; hard-coded renk YASAK.
Motif: ekran başına 1 baskın + en fazla 1 ikincil desen; opacity .08–.12; METİN ASLA desen üstünde.
Renk: bordo #7a1f3d (üstünde krem #f6e7d8, 8.29:1) + hardal #f2c14e + krem #f6e7d8; 4. doygun renk yok.
Tipografi: Playfair display 700 (68/1.0 -0.01em) + Inter gövde 16/1.6 + Space Mono etiket 10 uppercase; en fazla 3 punto seviyesi.
Yüzey: radius 6/14px, 2px ink kenarlık, 6px blur'suz ofset gölge.
Bölüm ritmi: tam genişlik desenli bant → dar içerik → hardal blok (eşit genişlikte üst üste olmaz).
Hareket: 120–360ms ease-out; reduced-motion'da motif animasyonu kapalı.
Yasak: desen üstünde metin, 3+ desen, neon/pastel karışım, eşit 8 kart ızgarası, yoğun tabloda motif.
Çıktı: kod + tek paragraf not (motif bütçesi ve okunurluk önlemi).

Style: Maximalism (maximalism) · family: Bold (13–18)
Token: --bg #f6e7d8 · --surface #fffaf3 · --ink #221410 · --accent #7a1f3d · --line rgba(34,20,16,.2)
Radius: 6px / 14px · Typography: Playfair Display / Inter / Space Mono
Required: **Motif bütçesi:** ekran başına 1 baskın desen + en fazla 1 ikincil; ikisi aynı ölçekte kullanılmaz. · **Renk uyumu:** analog palet (bordo #7a1f3d, hardal #f2c14e, krem #f6e7d8); 3'ten fazla doygun renk yok. · **Serif display (Playfair) + sans gövde (Inter).**
Banned: Desen üstünde metin (kontrast düşer). · 3'ten fazla desen/renk; her bölümde farklı stil. · Neon renk + pastel karışımı.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="maximalism"] {
  --bg: #f6e7d8; --bg-2: #e8cfae;
  --surface: #fffaf3; --surface-2: #f2c14e;
  --ink: #221410; --ink-soft: #57403a; --ink-faint: #8f7a72;
  --accent: #7a1f3d; --accent-ink: #f6e7d8;
  --line: rgba(34,20,16,.2);
  --danger: #ce1f14;
  --danger-ink: #ffffff;
  --ok: #007a32;
  --ok-ink: #ffffff;
  --warn: #ae4c00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 6px; --radius-lg: 14px;
  --shadow: 6px 6px 0 rgba(34,20,16,.85); --shadow-hard: none;
  --font-display: "Playfair Display", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
