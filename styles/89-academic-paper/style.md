# 89 · Academic Paper

> **In one sentence:** Akademik makale formu: EB Garamond 15.5px/1.66 iki kolon, numaralı başlıklar, dipnot çizgisi ve hareketin neredeyse sıfır olduğu (0.33s linear) bir kanıt yüzeyi.

| | |
|---|---|
| **Feeling** | ölçülü · kanıta dönük · nötr · yoğun |
| **Best for** | Araştırma raporu, preprint, metodoloji sayfası, teknik dokümantasyon |
| **Avoid** | Kampanya landing'i, oyun/etkinlik sayfası, e-ticaret vitrini |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="academic-paper"]` |
| **Composition** | `type` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Academic Paper sayfayı hakemli bir makale gibi kurar: EB Garamond 15.5px/1.66, 72ch ana metin (8/12) + 3/12 kenar notu, numaralı başlıklar (1, 1.1, 1.1.1) ve 1px dipnot çizgisi. Kazanılan şey tarafsızlık ve okunabilirlik; feda edilen şey marka kişiliği — süs yok, sadece hiyerarşi.

Izgara klasiktir: 12 kolon, 24px gutter, ana metin 8, kenar notu 3. Ekran başına tek kenar notu; ikincisi dipnota düşer. Yüzey beyaza yakın soğuk gri (`#f8f8f6`), ayrım yalnız 1px hairline.

Hareket bilinçli olarak neredeyse yoktur: 330ms `linear` giriş, 0px kayma (yalnız opacity), 120ms hover. Bu, uzun okuma ve ekran görüntüsü/print akışında titrememeyi garanti eder.

### What is not
- `swiss-design` değildir: swiss sans-serif ve poster hiyerarşisiyle çalışır; burada serif gövde, numaralı başlık ve kenar notu vardır.
- `broadsheet-daily` değildir: gazetede masthead ve manşet vardır; burada başlık 34px, masthead yok, özet bloğu ve dipnot çizgisi vardır.
- `utility` değildir: utility ürün arayüzüdür (60px başlık, buton odaklı); burada okuma ve atıf odaklı, 34px başlık.
- `editorial-design` değildir: editorial görsel ağırlıklı dergi ritmi kurar; burada görsel yalnız diyagram.

### Where it comes from
Kökeni LaTeX article sınıfı ve Chicago/APA dizgi gelenekleridir; ekran karşılığı arXiv preprint sayfalarıdır. Bugün araştırma ürünleri (rapor, metodoloji, model kartı) arttığı için geri döndü. Klişeye düşmemek için korunması gereken detay: numaralı başlık sistemi ve kenar notunun gerçekten kaynak taşıması.

### Recognition test in 3 seconds
1. Gövde EB Garamond 15.5px/1.66, iki kolon (8/12 + 3/12 kenar notu).
2. Numaralı başlıklar (1 · 1.1 · 1.1.1), mono değil aynı serif; numara `--ink-soft`.
3. Ekran başına 1 diyagram (1px çizgi, dolgu yok), fotoğraf yok.
4. Dipnot çizgisi 1px, 64px genişlikte, 12.5px mono numara.
5. Hareket 0.33s `linear` ve 0px kayma — yumuşak yay hiç görünmez.

## Visual signature
- Gövde EB Garamond 15.5px / 1.66 / 72ch; ana kolon 8/12, kenar notu 3/12.
- Numaralı başlık: h2 24px "1. " öneki, h3 18px "1.1 " öneki, numara `--ink-soft`.
- Özet bloğu: 15.5px italik olmayan EB Garamond, sol 3px `--line` çizgi, 22px iç boşluk.
- Diyagram: 1px çizgi, dolgu yok, 2 seri (accent + ink-soft), lejant mono 11px.
- Dipnot: 1px üst çizgi (64px), 12.5px metin, mono numara.
- Radius 2px/4px; gölge yok, `--shadow` yalnız açılır menüde 1px.
- **Typography:** EB Garamond (display) + EB Garamond (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#1f4a7a`; neutral scale `#f8f8f6` → `#1b1e23`.
- **Radius:** `2px` / `4px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. Gövde EB Garamond 15.5px/1.66/72ch; ana kolon 8/12, kenar notu 3/12 (ekran başına 1)
2. Numaralı başlık sistemi (1 · 1.1 · 1.1.1); numara --ink-soft, aynı serif aile
3. Başlık h1 34px (mobil 26px); 34px üstü başlık yok
4. Tek vurgu akademik mavi #1f4a7a, ekranın ≤%5'i, accent üstü daima --accent-ink
5. Ayrım yalnız 1px hairline; kart gölgesi yok; radius 2/4px
6. Bölüm arası 64px (mobil 40px), kart içi 20px; ölçek 4·8·12·16·24·32·48·64
7. Görsel yalnız diyagram: 1px çizgi, dolgu yok, 2 seri, lejant mono 11px
8. Dipnot çizgisi 1px / 64px genişlik; metin 12.5px

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f8f8f6` | page background | as a card background |
| `--bg-2` | `#eeeeea` | partition divider floor, table top | button background |
| `--surface` | `#fdfdfb` | kart, input, modal | full-page background |
| `--surface-2` | `#f2f2ee` | passive chip, hover background | primary button |
| `--ink` | `#1b1e23` | title, body, icon | large background |
| `--ink-soft` | `#4a4e55` | secondary text, description | — |
| `--ink-faint` | `#7a7e85` | decorative label, separator text | interactive text |
| `--accent` | `#1f4a7a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6f8fb` | text above accent | non-accent background |
| `--line` | `rgba(27,30,35,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.72:1** · `ink-soft/bg` **7.86:1** · `ink-faint/bg` **3.83:1 (decorative)** · `accent-ink/accent` **8.51:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (EB Garamond) | 26px (mobile 26px) | 700 | 0.98 | -0.035em |
| H2 | same | 24px | 600 | 1.08 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (EB Garamond) | 15.5px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12.5px | 600 | 1 | 0 |

- Display 72px, line spacing 0.98; body 16/1.6. There is no midpoint — the jumping between two extremes is intentional.
- Measure: 62ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 12 columns are not visible; The title spans 8 columns, the body remains in 6 columns.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- No shadows and rounding; The only difference is the hairline and space.
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- İkinci aile, display sans başlık, 700/900 ağırlık, 300 ince ağırlık
- Fotoğraf, illüstrasyon, emoji, renkli ikon
- Kart gölgesi, yuvarlak 8px+ radius, gradyan, renkli zemin
- İkinci vurgu rengi, neon, glow, highlight şeridi
- Gövdede uppercase, gövdede mono, 16px üstü gövde (makale 15.5px)
- Parallax, pin/scrub, marquee, sürekli döngü, spring/overshoot
- Süs başlık (büyük display punto), drop cap, çift çerçeve
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 8.89:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Başlık 34px + özet bloğu (3px sol çizgi) + 2/12 künye (yazar, tarih, DOI) | `shots/01-page.png` |
| Dashboard | yüksek | Tablo ağırlıklı: 44px satır, 1px hairline, mono rakam | `shots/01-page.png` |
| Form | düşük | 44px input, 2px radius, 1px kenar; hata metni ink-soft | `shots/01-page.png` |
| Liste / tablo | yüksek | 44px satır, sağa hizalı rakam, 1px alt çizgi | `shots/01-page.png` |
| Boş durum | orta | Tek paragraf 72ch + "veri yok" mono etiket | `shots/01-page.png` |
| Onboarding | orta | Numaralı üç adım (1 · 2 · 3), kenar notu yok | `shots/01-page.png` |
| Pricing | düşük | Tablo biçiminde karşılaştırma; kart yok, 1px hairline | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 360px, 2px radius, açıklama 12.5px | `shots/01-page.png` |
| Modal | orta | 520px, 4px radius, 1px kenar, gölge yok | `shots/01-page.png` |
| Bildirim / toast | orta | Sol alt, 40px, ink zemin + bg metin, 2px radius | `shots/01-page.png` |
| Hata | düşük | Başlık 24px + tek paragraf + "hata kodu" mono | `shots/01-page.png` |
| Profil / ayar | orta | Form 8/12 + kenar notu 3/12 | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.72:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.86:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.83:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.51:1 | ≥ 4.5 | button text |
| focus ring/ground | 8.89:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.4 | ≥ 60 target | thin text |

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
| Makale "blog" gibi duruyor | Punto 16px üstüne çıkmış veya kenar notu yok | 15.5px + 8/3 kolon + kenar notu |
| Tablo okunmuyor | Rakamlar sola hizalı | Rakamı sağa hizala, `font-variant-numeric: tabular-nums` |
| Başlıklar süslenmiş | Display aile veya renk eklenmiş | Aynı serif + numara `--ink-soft` |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `broadsheet-daily` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond — Google Fonts — gövde serifi, 15.5px/1.66, 400/600 |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime — Google Fonts — dipnot numarası ve kod bloğu |
| https://www.latex-project.org/ | LaTeX Project — numaralı başlık, özet ve dipnot düzeni |
| https://arxiv.org/ | arXiv — preprint sayfa formu ve künye alanı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — 4.5:1 gövde / 3:1 büyük metin eşiği |

## AI brief

```text
Stil: Academic Paper (styles/89-academic-paper/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="academic-paper"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display = --font-body = EB Garamond (600 başlık, 400 gövde); --font-mono Courier Prime dipnot/kod.
Yüzey: --bg / --surface / --bg-2; radius 2px/4px; kart gölgesi yok, derinlik 1px hairline.
Izgara: 8/3 kolon (ana metin + kenar notu), gutter 24px, bölüm ritmi 64px, ölçü 72ch.
Hareket: enter 0.33s linear 0px / stagger 0.04; scroll top 89% 0.42s 10px once:true;
         hover 120ms scale 1.000; pin yok. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (fotoğraf, gölge, ikinci renk, büyük display).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Academic Paper (academic-paper) · family: Publication & Typography (86–95)
Token: --bg #f8f8f6 · --surface #fdfdfb · --ink #1b1e23 · --accent #1f4a7a · --line rgba(27,30,35,.16)
Radius: 2px / 4px · Typography: EB Garamond / EB Garamond / Courier Prime
Required: Gövde EB Garamond 15.5px/1.66/72ch; ana kolon 8/12, kenar notu 3/12 (ekran başına 1) · Numaralı başlık sistemi (1 · 1.1 · 1.1.1); numara --ink-soft, aynı serif aile · Başlık h1 34px (mobil 26px); 34px üstü başlık yok
Banned: İkinci aile, display sans başlık, 700/900 ağırlık, 300 ince ağırlık · Fotoğraf, illüstrasyon, emoji, renkli ikon · Kart gölgesi, yuvarlak 8px+ radius, gradyan, renkli zemin
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="academic-paper"] {
  --bg: #f8f8f6; --bg-2: #eeeeea;
  --surface: #fdfdfb; --surface-2: #f2f2ee;
  --ink: #1b1e23; --ink-soft: #4a4e55; --ink-faint: #7a7e85;
  --accent: #1f4a7a; --accent-ink: #f6f8fb;
  --line: rgba(27,30,35,.16);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00843b;
  --ok-ink: #ffffff;
  --warn: #b85600;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 2px rgba(27,30,35,.08); --shadow-hard: none;
  --font-display: "EB Garamond", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
