# 34 · Skeuomorphism

> **In one sentence:** Skeuomorphism

| | |
|---|---|
| **Feeling** | tanıdık, dokunsal, "cihaz", nostaljik |
| **Best for** | enstrüman/ses uygulaması, saat, tek amaçlı kontrol paneli, eğitim simülasyonu |
| **Avoid** | veri yoğun panel, modern SaaS, mobil öncelikli ürün, erişilebilirlik kritik akış |
| **Difficulty** | yüksek (maliyet + erişilebilirlik) · **Accessibility** |  |
| **Family** | Art (28–34) · **Token** | `kit/tokens.css` → `[data-style="skeuomorphism"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Skeuomorphism, dijital kontrolü **fiziksel nesne** gibi gösterir: ahşap/metal panel, kumaş zemin, içe gömülü (inset) buton, gerçekçi gölge ve ışık yönü. Kullanıcı "düğmeye basıyorum" hissini alır.

Kazandığı şey: anında anlaşılırlık (tanıdık metafor) ve dokunsallık. Feda ettiği şey: ölçeklenebilirlik ve erişilebilirlik — doku ve gölge kontrastı yer, üretim maliyeti yüksektir.

### What is not
- **Neumorphism değildir.** O tek renk + çift gölge; skeuomorphism **malzeme** (ahşap, kumaş, metal) kullanır.
- **Claymorphism değildir.** Clay pastel/oyuncak; skeuomorphism gerçekçi malzeme.
- **"Gradient buton" değildir.** Malzeme dokusu, ışık yönü ve inset/outset tutarlılığı olmadan sadece eski görünür.
- **Flat design değildir.** Derinlik ve doku kasıtlıdır.

### Where it comes from
Erken GUI (Mac OS Classic, Win 95/XP), audio ekipman panelleri; bugün niş ürünlerde (enstrüman, saat, retro oyun) ve "gerçeklik" hissi gereken yerlerde.

### Recognition test in 3 seconds
1. Malzeme dokusu (ahşap/kumaş/metal) var mı?
2. Buton **gömülü** (inset) gölgeyle mi, ışık yönü tutarlı mı?
3. Panel kenarında bevel/highlight var mı?
4. Tipografi nötr (Helvetica) mi, süs yok mu?
5. Gölge gerçekçi (çift katman, kısa mesafe) mi?

## Visual signature
- **Panel:** `linear-gradient(180deg,#fdf8ee,#ece3d2)` + 1px `#b9ad99` kenar + dış gölge.
- **Buton:** `linear-gradient(180deg,#479a74,#2f6b4f)` + koyu metin + inset highlight.
- **Gömülü input:** `inset 0 2px 6px rgba(47,42,36,.45)`.
- **Ahşap/kumaş:** SVG doku (1 kez), opacity .06–.10.
- **Işık:** üst-sol; tüm highlight'lar aynı yönde.
- **Grain .05** (malzeme grenli).
- **Typography:** Helvetica Neue (display) + Helvetica Neue (body) + Menlo (mono label).
- **Colour discipline:** a single accent `#2f6b4f`; neutral scale `#cfc6b8` → `#2f2a24`.
- **Radius:** `6px` / `10px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Tek ışık yönü:** üst-sol açık, alt-sağ koyu; tüm öğelerde tutarlı.
2. **Malzeme katmanı:** en fazla 1 doku (ahşap **veya** kumaş) + grain .05.
3. **Gömülü/kabarık ayrımı:** basılabilir buton inset, panel outset.
4. **6–10px radius**, bevel 1px highlight; sert köşe yok.
5. **Kontrast:** gövde `--ink` (8.41:1); `--ink-soft` (4.34:1) yalnız ≥18px metinde.
6. **Maliyet sınırı:** ekran başına ≤ 3 dokulu yüzey; gerisi düz.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#cfc6b8` | page background | as a card background |
| `--bg-2` | `#bdb2a1` | partition divider floor, table top | button background |
| `--surface` | `#f2ebdd` | kart, input, modal | full-page background |
| `--surface-2` | `#e6ddcb` | passive chip, hover background | primary button |
| `--ink` | `#2f2a24` | title, body, icon | large background |
| `--ink-soft` | `#5a5248` | secondary text, description | — |
| `--ink-faint` | `#776d60` | decorative label, separator text | interactive text |
| `--accent` | `#2f6b4f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f3e8` | text above accent | non-accent background |
| `--line` | `rgba(47,42,36,.35)` | all borders | text colour |

- Measured contrast: `ink/bg` **8.41:1** · `ink-soft/bg` **4.54:1** · `ink-faint/bg` **3:1 (decorative)** · `accent-ink/accent` **5.68:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Helvetica Neue) | 40px (mobile 26px) | 400 | 1.04 | -0.02em |
| H2 | same | 24px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Helvetica Neue) | 16px | 400 | 1.68 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Menlo) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `6px` (buton, input, chip), `10px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- 2+ malzeme dokusu (ahşap + metal + kumaş).
- Rastgele ışık yönü.
- Doku üstünde düşük kontrastlı metin.
- Sınırsız gradient; 3+ gölge tonu.
- Mobilde yoğun doku (performans + okunurluk).
- Ödeme/giriş ekranında tam malzeme (güven + sadelik).
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.31:1 (≥ 3 on background/surface).
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
| Landing/hero | yüksek | Ahşap panel, gömülü butonlar, fiziksel kontrol kümesi | `shots/01-page.png` |
| Dashboard | düşük | Doku azalır; panel + bevel yeter | `shots/01-page.png` |
| Form | düşük | Gömülü inputlar, tek buton | `shots/01-page.png` |
| Liste/tablo | çok düşük | Düz yüzey, bevel ayırıcı | `shots/01-page.png` |
| Boş durum | orta | Panel + tek cümle + buton | `shots/01-page.png` |
| Onboarding | orta | Adım başına 1 fiziksel kontrol | `shots/01-page.png` |
| Pricing | düşük | 2–3 panel, bevel kenar | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Doku kapanır; sade panel | `shots/01-page.png` |
| Modal | orta | Panel + dış gölge | `shots/01-page.png` |
| Toast | orta | Koyu panel + bevel | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + 15px metin | `shots/01-page.png` |
| Profil/ayar | orta | Fiziksel toggle (gömülü ray) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 8.41:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 4.54:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.68:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.31:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 68.6 | ≥ 60 target | thin text |

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
| Eski/ucuz | 3+ gradient tonu, tutarsız ışık | Tek ışık yönü, 2 gölge katmanı |
| Okunmuyor | Doku üstünde metin | Metni düz yüzeye al, doku ≤ .10 |
| Yavaş | Çok doku + büyük görsel | Doku ≤ 3 yüzey, SVG 1 kez |
| Erişilebilirlik şikayeti | `--ink-soft` gövdede | `--ink` kullan (8.41:1) |
| Güven kaybı | Ödeme ekranında malzeme | O ekranda sadeleştir |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `art-deco` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neumorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scrapbook` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `cybercore` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://guidebookgallery.org | GUIdebook — Klasik GUI arşivi |
| https://en.wikipedia.org/wiki/Skeuomorph | Wikipedia · Skeuomorph — Metafor tanımı |
| https://www.nngroup.com/articles/flat-design-long-exposure/ | NN/g · Flat design — Flat vs skeuomorphic tartışması |

## AI brief

```text
Stil: Skeuomorphism (styles/34-skeuomorphism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="skeuomorphism"]; hard-coded renk YASAK.
Işık: tek yön (üst-sol açık, alt-sağ koyu); panel outset, buton/input inset.
Malzeme: 1 doku (ahşap VEYA kumaş) + grain .05; ekran başına ≤ 3 dokulu yüzey, doku metnin arkasında (opacity ≤ .10).
Tipografi: Helvetica Neue (display 40/700, gövde 16/1.55); buton metni text-shadow 0 1px 0 rgba(0,0,0,.35).
Renk: bej #cfc6b8 + yeşil metal #2f6b4f (üstünde krem 5.68:1). KRİTİK: --ink-soft (4.34:1) gövde metni olarak KULLANILMAZ; gövde --ink (8.41:1).
Radius 6/10px, bevel 1px highlight. Hareket: 120–300ms, basılma inset→outset.
Ödeme/giriş: doku kapanır (güven). prefers-contrast: more → doku kapat.
Çıktı: kod + tek paragraf not (ışık yönü ve kontrast önlemi).

Style: Skeuomorphism (skeuomorphism) · family: Art (28–34)
Token: --bg #cfc6b8 · --surface #f2ebdd · --ink #2f2a24 · --accent #2f6b4f · --line rgba(47,42,36,.35)
Radius: 6px / 10px · Typography: Helvetica Neue / Helvetica Neue / Menlo
Required: **Tek ışık yönü:** üst-sol açık, alt-sağ koyu; tüm öğelerde tutarlı. · **Malzeme katmanı:** en fazla 1 doku (ahşap **veya** kumaş) + grain .05. · **Gömülü/kabarık ayrımı:** basılabilir buton inset, panel outset.
Banned: 2+ malzeme dokusu (ahşap + metal + kumaş). · Rastgele ışık yönü. · Doku üstünde düşük kontrastlı metin.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="skeuomorphism"] {
  --bg: #cfc6b8; --bg-2: #bdb2a1;
  --surface: #f2ebdd; --surface-2: #e6ddcb;
  --ink: #2f2a24; --ink-soft: #5a5248; --ink-faint: #776d60;
  --accent: #2f6b4f; --accent-ink: #f7f3e8;
  --line: rgba(47,42,36,.35);
  --danger: #ac0000;
  --danger-ink: #ffffff;
  --ok: #006119;
  --ok-ink: #ffffff;
  --warn: #943400;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 2px 4px rgba(47,42,36,.35), inset 0 1px 0 rgba(255,255,255,.75); --shadow-hard: none;
  --font-display: "Helvetica Neue", system-ui, sans-serif;
  --font-body: "Helvetica Neue", system-ui, sans-serif;
  --font-mono: "Menlo", system-ui, sans-serif;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
