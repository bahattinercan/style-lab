# 14 · Anti-Design

> **In one sentence:** Kuralları bilerek çiğneyen düzen: bozuk ızgara, karışık ölçek, kasıtlı dönüklük ve "hatalı" görünen tipografi.

| | |
|---|---|
| **Feeling** | deneysel, asi, enerjik, "poster" |
| **Best for** | sanat/etkinlik, portfolyo, müzik/kulüp, moda kampanyası, indie lansman |
| **Avoid** | ödeme/giriş, resmi kurum, sağlık, uzun okuma, erişilebilirlik kritik ürün |
| **Difficulty** | yüksek (kaosu ölçmek zor) · **Accessibility** |  |
| **Family** | Bold (13–18) · **Token** | `kit/tokens.css` → `[data-style="anti-design"]` |
| **Composition** | `split-reverse` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Anti-design, modern arayüz kurallarının (hizalama, tutarlı ölçek, sakin palet) **bilinçli ihlali**: döndürülmüş paneller, üst üste binen tipografi, uyumsuz punto atlamaları, ofset sert gölgeler ve "yanlış" renk kombinasyonları. Ama kaos **ölçülür**: her ekranda 2–3 ihlal, gerisi okunur.

Kazandığı şey: hatırlanma ve enerji. Feda ettiği şey: güven ve okunabilirlik payı.

### What is not
- **Neo-brutalism değildir.** Neo-brutalism düzenlidir, sadece dili serttir; anti-design **ızgarayı** bozar.
- **Maximalism değildir.** Maximalism doluluk; anti-design hizasızlık ve ölçek çelişkisi.
- **"Kötü tasarım" değildir.** İhlal kasıtlı ve tekrarlanabilir olmalı; rastgelelik değil.
- **Erişilebilirliği feda etmez.** Kontrast ve hedef boyutu korunur; sadece **kompozisyon** bozulur.

### Where it comes from
2010'ların "perfect UI" estetiğine ve kurumsal tekdüzeliğe tepki; sanat okulları ve bağımsız yayıncılık dili. Dijitalde etkinlik sayfaları, portfolyolar ve indie lansmanlarda kullanılıyor.

### Recognition test in 3 seconds
1. En az bir öğe **döndürülmüş** mü (1–3°)?
2. Izgara bilinçli **kaymış** mı (bloklar farklı hizalarda)?
3. Punto atlamaları abartılı mı (100px başlık + 11px metin)?
4. Sert ofset gölge var mı (blur yok)?
5. Kaos **sayılı** mı — yoksa rastgele mi? (Doğru: 2–3 ihlal.)

## Visual signature
- **Rotasyon:** panel `-1.5°`, ikincil kart `+0.6°`; metin 0°.
- **Ofset gölge:** `8px 8px 0 #1b1b1b` (hero), `4px 4px 0` (küçük).
- **Ölçek çelişkisi:** H1 104px Anton + gövde 15px; ara basamak yok.
- **Asit yeşili blok:** `--bg-2` (#d6ff3f) ikinci zemin olarak 1 bölümde.
- **Grain .05:** baskı/rozet hissi.
- **Kenarlık:** 3px ink (nav, buton, kart).
- **Typography:** Anton (display) + Space Grotesk (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#fa3667`; neutral scale `#f2e9da` → `#1b1b1b`.
- **Radius:** `0px` / `0px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **İhlal bütçesi:** ekran başına en fazla 3 ihlal (dönme, ölçek çelişkisi, üst üste binme). Fazlası gürültü.
2. **Okunurluk tabanı:** gövde kontrastı ≥ 4.5:1, gövde ≥ 15px, dokunma hedefi ≥ 44px.
3. **Sert gölge** (`8px 8px 0`) blur'suz; tüm gölgeler aynı yönde.
4. **Display Anton**, düz büyük harf; gövde Space Grotesk.
5. **Radius 0** (buton/input), 2px istisna.
6. **Form/ödeme ekranlarında ihlal 0:** bu ekranlar `plain` gibi davranır.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2e9da` | page background | as a card background |
| `--bg-2` | `#d6ff3f` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#ff3b6b` | passive chip, hover background | primary button |
| `--ink` | `#1b1b1b` | title, body, icon | large background |
| `--ink-soft` | `#4a4a4a` | secondary text, description | — |
| `--ink-faint` | `#7b7b7b` | decorative label, separator text | interactive text |
| `--accent` | `#fa3667` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1b1b1b` | text above accent | non-accent background |
| `--line` | `#1b1b1b` | all borders | text colour |

- Measured contrast: `ink/bg` **14.31:1** · `ink-soft/bg` **7.36:1** · `ink-faint/bg` **3.52:1 (decorative)** · `accent-ink/accent` **4.75:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 104px (mobile 48px) | 400 | 1.08 | -0.02em |
| H2 | same | 56px | 600 | 1.2 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 15px | 400 | 1.62 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Rastgele rotasyon (ekran başına 3'ten fazla, 3°'den fazla).
- Metin bloklarını döndürmek (okunurluk).
- Düşük kontrastlı "sanatsal" metin (4.5:1 altı).
- Gölge + blur + cam birlikte (farklı fizikler).
- Her öğede farklı radius/gölge tonu.
- Ihlali ödeme/giriş ekranına taşımak.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.63:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | çok yüksek | 104px Anton başlık, döndürülmüş panel, asit blok, 2 buton; 3 ihlal sınırı | `shots/01-page.png` |
| Dashboard | düşük | İhlal 0–1: sadece başlık Anton; tablo/grafik düz | `shots/01-page.png` |
| Form | düşük | Rotasyon yok, 3px kenarlık kalır | `shots/01-page.png` |
| Liste / tablo | düşük | Düz ızgara, 2px ayırıcı | `shots/01-page.png` |
| Boş durum | yüksek | Dev tipografi + tek satır + tek buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım numarası 140px, tek fikir/sayfa | `shots/01-page.png` |
| Pricing | yüksek | 3 döndürülmüş kart (≤1.5°), orta kart asit zemin | `shots/01-page.png` |
| Giriş / ödeme | **çok düşük** | İhlal 0; düz form, 3px kenarlık yeter | `shots/01-page.png` |
| Modal | orta | 12px ofset gölge, 32px padding | `shots/01-page.png` |
| Bildirim / toast | orta | Koyu zemin, 3px kenar | `shots/01-page.png` |
| Hata | orta | Dev "!" + 15px açıklama | `shots/01-page.png` |
| Profil / ayar | düşük | Düz liste, Anton yalnız başlıkta | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.31:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.36:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.52:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.75:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.63:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 91.6 | ≥ 60 target | thin text |

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
| Okunamıyor | Her öğe dönük, kontrast düşük | İhlal ≤3, metin düz, kontrast ≥ 4.5:1 |
| "Kötü tasarım" gibi | Rastgele rotasyon/ölçek | İhlali kurala bağla, tekrar eden 2 hamle kullan |
| Güven kaybı | İhlal ödeme/giriş ekranında | O ekranlarda `plain` davranışı |
| Dağınık | 4+ farklı gölge/kenarlık | Tek ofset + tek kenarlık kalınlığı |
| Mobilde taşma | 104px başlık sabit | `clamp()` ile 48px |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `acid-graphics` | Same level of seriousness; accent sharing is not allowed |
| garnish | `memphis` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://brutalistwebsites.com | Brutalist Websites — Ihlalin dozu ve tekrarı |
| https://www.are.na | Are.na — Kolaj/kopya estetiği panoları |
| https://fonts.google.com/specimen/Anton | Anton — Display karakteri |

## AI brief

```text
Stil: Anti-Design (styles/14-anti-design/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="anti-design"]; hard-coded renk/ölçü YASAK.
İhlal bütçesi: ekran başına en fazla 3 ihlal (rotasyon ≤1.5°, üst üste binme ≤24px, ölçek çelişkisi).
Okunurluk tabanı: metin blokları 0°, gövde 15px, kontrast ≥ 4.5:1, hedef 52px.
Tipografi: Anton display (104/0.86 uppercase) + Space Grotesk gövde 15/1.55; etiket mono 11 uppercase.
Yüzey: radius 0, 3px ink kenarlık, blur'suz ofset gölge (8px hero / 4px küçük).
Renk: kâğıt #f2e9da + asit #d6ff3f + pembe #fa3667; asit üstünde SİYAH metin.
Hareket: 90–240ms, steps(3) serbest; reduced-motion'da 0.01ms.
Yasak: metni döndürmek, 3+ ihlal, düşük kontrast, blur/cam, ödeme ekranında ihlal.
Çıktı: kod + tek paragraf not (hangi 3 ihlali seçtin, okunurluğu nasıl korudun).

Style: Anti-Design (anti-design) · family: Bold (13–18)
Token: --bg #f2e9da · --surface #ffffff · --ink #1b1b1b · --accent #fa3667 · --line #1b1b1b
Radius: 0px / 0px · Typography: Anton / Space Grotesk / JetBrains Mono
Required: **İhlal bütçesi:** ekran başına en fazla 3 ihlal (dönme, ölçek çelişkisi, üst üste binme). Fazlası gürültü. · **Okunurluk tabanı:** gövde kontrastı ≥ 4.5:1, gövde ≥ 15px, dokunma hedefi ≥ 44px. · **Sert gölge** (`8px 8px 0`) blur'suz; tüm gölgeler aynı yönde.
Banned: Rastgele rotasyon (ekran başına 3'ten fazla, 3°'den fazla). · Metin bloklarını döndürmek (okunurluk). · Düşük kontrastlı "sanatsal" metin (4.5:1 altı).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="anti-design"] {
  --bg: #f2e9da; --bg-2: #d6ff3f;
  --surface: #ffffff; --surface-2: #ff3b6b;
  --ink: #1b1b1b; --ink-soft: #4a4a4a; --ink-faint: #7b7b7b;
  --accent: #fa3667; --accent-ink: #1b1b1b;
  --line: #1b1b1b;
  --danger: #cf2015;
  --danger-ink: #ffffff;
  --ok: #007a32;
  --ok-ink: #ffffff;
  --warn: #ae4d00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.03em; --blur: 0px; --grain: 0;
}
```
