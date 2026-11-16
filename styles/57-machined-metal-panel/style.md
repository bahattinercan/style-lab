# 57 · İşlenmiş Metal Panel

> **In one sentence:** Frezelenmiş alüminyum panelin dilini ekrana taşıyan arayüz: fırçalanmış yüzey, çift hairline bevel, gravür etiket ve tek amber durum noktası.

| | |
|---|---|
| **Feeling** | sağlam, pahalı, hassas, dokunulabilir |
| **Best for** | donanım kontrol paneli, cihaz yönetimi, ses/görüntü ekipmanı UI'ı, endüstriyel ürün konfigüratörü |
| **Avoid** | moda vitrini, çocuk uygulaması, hızlı tüketim kampanyası — metal dili burada "ağır" okunur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="machined-metal-panel"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
İşlenmiş Metal Panel, arayüzü **fiziksel bir cihaz yüzeyi** gibi kurar: yatay fırçalanmış alüminyum zemin, her kontrolün üstünde 1px açık / altında 1px koyu iç hairline (bevel), etiketler gravür gibi mono büyük harf, durum tek amber nokta. Süsü azaltır, malzemeyi öne çıkarır.

Kurucu kararları üç tanedir. Birincisi **derinlik malzemeden gelir**: dış gölge değil, `inset` açık/koyu çift çizgi kontrolün basılabilir olduğunu söyler. İkincisi **etiket gravür dilindedir**: 9–10px mono, `.14em` tracking, büyük harf — okunurluk değil "kazınmışlık" önceliklidir, bu yüzden etiketler yalnız kısa kelimelerdir. Üçüncüsü **tek durum rengi**: amber (`--accent`) yalnız çalışır/dikkat durumunu bildirir; başka süs rengi yoktur.

Bedeli: uzun gövde metni metal zeminde yorucudur. Panel bu yüzden **kontrol yüzeyi** olarak kullanılır; uzun okuma için `--surface` (daha açık, düz) kart gerekir.

### What is not
- **Skeuomorphism (34) değildir:** 34 gerçek malzeme fotoğrafı, çok katmanlı gölge ve deri/ahşap dokusu kullanır; Panel'de fotoğraf ve dış gölge yoktur, bevel tek formüldür (inset 1px açık + 1px koyu).
- **Blueprint Çizimi (56) değildir:** 56 koyu cyanotype zemin ve görünür çizim ızgarası taşır; Panel açık metal zemin ve yatay fırçalama izi kullanır.
- **Glassmorphism (08) değildir:** 08 ışığı kırar (backdrop-filter, yarı saydamlık); Panel opaktır, ışık yalnız üst kenarda 1px.
- **Neumorphism (10) değildir:** 10 yumuşak çift gölgeyle zeminden "şişirir"; Panel'de blur yok, sadece 1px hairline ve 3–6px radius.

### Where it comes from
1970–90'lar lab ekipmanı ve stüdyo cihaz panellerinden: fırçalanmış alüminyum, gravür etiket, tek amber LED. Bugün geri dönüyor çünkü yazılım ürünleri "fiziksel cihaz" hissi ile güven arıyor; klişeye dönmemesi için korunacak detay **bevel'in 1px'te kalması** ve etiketlerin gerçekten kısa olması (2–3 kelime).

### Recognition test in 3 seconds
1. Zemin açık gri metal; yatay 1px fırçalama izleri görünür.
2. Her panelin üst kenarında 1px açık, alt kenarında 1px koyu çizgi (bevel).
3. Etiketler 9–10px mono, büyük harf, geniş tracking — cümle değil kelime.
4. Kartların üst-sağ köşesinde 5px vida izi halkası var.
5. Ekranda tek doygun renk: amber; ve yalnız 6px nokta olarak.

## Visual signature
- **Fırçalanmış zemin:** `repeating-linear-gradient(180deg, ink %5 0 1px, transparent 1px 3px)` — yalnız yatay, dikey grain yasak.
- **Bevel formülü:** `--shadow: inset 0 1px 0 rgba(255,255,255,.55), inset 0 -1px 0 rgba(20,24,26,.18)`; dış gölge yok.
- **Panel kenarı:** nav ve büyük panelde üst 2px açık + alt 1px koyu çift hairline.
- **Vida izi:** kartın üst-sağ köşesinde 5px halka (`border: 1px ink %26`), tek adet.
- **Gravür etiket:** 9px mono, `.14em`, uppercase, `--ink-soft`; 12 karakteri geçmez.
- **Amber durum noktası:** 6px daire, `--accent`, etiketin solunda 6px boşlukla.
- **Hareket imzası:** 260ms `cubic-bezier(.28,1.46,.58,1)` (hafif overshoot) — kontrol "yerine oturur".
- **Typography:** Michroma (display) + Jost (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#9c4a0c`; neutral scale `#d5d8da` → `#1b1f22`.
- **Radius:** `3px` / `6px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Yüzey bevel formülü: inset üst 1px açık + inset alt 1px koyu; dış gölge yalnız yüzen katmanda
2. Etiketler gravür dilinde: mono, büyük harf, .14em tracking, 9–10px
3. Radius 3px (kontrol) / 6px (kart); hap biçimli köşe yok
4. Malzeme dokusu yatay fırçalama; dikey grain yasak
5. Durum LED renkleri metinle birlikte (renk tek başına anlam taşımaz)
6. Panel kenarında 2px açık / 1px koyu çift hairline

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#d5d8da` | page background | as a card background |
| `--bg-2` | `#c9cdd0` | partition divider floor, table top | button background |
| `--surface` | `#e2e5e7` | kart, input, modal | full-page background |
| `--surface-2` | `#eceef0` | passive chip, hover background | primary button |
| `--ink` | `#1b1f22` | title, body, icon | large background |
| `--ink-soft` | `#4e565c` | secondary text, description | — |
| `--ink-faint` | `#6b7379` | decorative label, separator text | interactive text |
| `--accent` | `#9c4a0c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(27,31,34,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **11.59:1** · `ink-soft/bg` **5.22:1** · `ink-faint/bg` **3.37:1 (decorative)** · `accent-ink/accent` **6.18:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 38px (mobile 24px) | 400 | 1.08 | -0.02em |
| H2 | same | 26px | 600 | 1.2 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.62 | 0 |
| Small body | same | 12px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 9px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 10px | 600 | 1 | 0 |

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
- Radius: `3px` (buton, input, chip), `6px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Saf beyaz `#ffffff` zemin.
- Neon glow, cam yüzey, çok renkli gradyan parlama.
- 12px üstü radius, hap buton.
- Serif, el yazısı, 700+ ağırlık.
- Emoji ve dolu renkli ikon.
- Metal üstünde büyük yumuşak gölge (ağırlık hissi bozulur).
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 3px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 3px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 3px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 3px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 3px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 3px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 3px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.88:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | ortalanmış cihaz görseli + iki yanında gravür ölçü bloğu | `shots/01-page.png` |
| Dashboard | düşük | panel ızgarası 3×2; her KPI'da amber nokta + etiket | `shots/01-page.png` |
| Form | düşük | gömük input, etiket üstte 9px mono | `shots/01-page.png` |
| Liste / tablo | düşük | 34px satır, sağa dayalı tabular sayı | `shots/01-page.png` |
| Boş durum | orta | gömük oluk + "SİNYAL YOK" gravür etiketi | `shots/01-page.png` |
| Onboarding | yüksek | her adım bir kontrol paneli; amber nokta ilerlemeyi gösterir | `shots/01-page.png` |
| Pricing | orta | üç panel; öne çıkan panelde amber üst şerit (2px) | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | bevel korunur, amber yalnız birincil eylemde | `shots/01-page.png` |
| Modal | orta | yüzen panel + tek dış gölge 6px | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sağ, amber nokta + mono metin | `shots/01-page.png` |
| Hata | düşük | nokta `--danger`, çerçeve 1px danger; zemin değişmez | `shots/01-page.png` |
| Profil / ayar | orta | sol etiket kolonu 4/8; her satır gömük oluk | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 11.59:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 5.22:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.37:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.18:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.88:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 80.5 | ≥ 60 target | thin text |

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
| Panel "plastik" görünüyor | bevel yerine dış gölge kullanılmış | `var(--shadow)` inset çift çizgi; dış gölge yalnız modal |
| Metin okunmuyor, gri üstü gri | `--ink-soft` küçük puntoda | gövde `--ink`; `--ink-soft` ≥14px |
| Metal dokusu gürültü yapıyor | grain %3 üstü veya dikey iz | grain %3 sabit, iz yatay |
| Etiketler cümle olmuş | gravür dilinde uzun metin | 2–3 kelimeye kısalt, açıklamayı gövdeye taşı |
| Buton basılabilir hissettirmiyor | bevel eksik / aynı yüzey tonu | `--surface-2` + bevel + active'te inset |
| Koyu modda kenarlar parlıyor | aynı bevel opaklığı | bevel açık kenarını %55 → %28'e düşür |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `skeuomorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Brushed_metal | Brushed metal — fırçalama iz yönü ve aralığı |
| https://en.wikipedia.org/wiki/Anodizing | Anodizing — mat yüzey, renk doygunluğu |
| https://teenage.engineering/ | Teenage Engineering — gravür etiket + kontrol paneli tipografisi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — bevel ve hairline kontrastı |

## AI brief

```text
Stil: İşlenmiş Metal Panel (styles/57-machined-metal-panel/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="machined-metal-panel"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg açık metal + yatay fırçalama (repeating-linear-gradient 1px/3px, color-mix var(--ink) 5%).
Tipografi: --font-display Michroma 38/26/19 (400, uppercase, .04–.06em);
  --font-body Jost 16px/1.58; --font-mono IBM Plex Mono 9–10px gravür etiket (.14em, uppercase, ≤12 karakter).
Yüzey: --bg (şasi) / --surface (kart, var(--shadow) bevel) / --surface-2 + 0 2px 6px (yüzen).
  Bevel = inset 0 1px 0 açık + inset 0 -1px 0 koyu; dış gölge sadece modal.
Renk: tek vurgu amber #9c4a0c, yalnız 6px durum noktası ve birincil eylem. ink/bg 11.59:1, ink-soft/bg 5.22:1.
Bileşen: "Bileşen reçeteleri" birebir; buton 38px, 3px radius, bevel, mono uppercase.
Hareket: enter 260ms cubic-bezier(.28,1.46,.58,1) 4px stagger .02; scroll top 87% 280ms 11px once;
  pin scrub 0.62 (+84%); hover 110ms görsel 1.008. prefers-reduced-motion zorunlu.
Yasak: saf beyaz zemin, neon glow, cam, 12px üstü radius, serif, 700+ ağırlık, dolu renkli ikon.
Çıktı: bileşen kodu + tek paragraf not (bevel ve gravür etiketi nereye koydun).

Style: İşlenmiş Metal Panel (machined-metal-panel) · family: Industrial (56–65)
Token: --bg #d5d8da · --surface #e2e5e7 · --ink #1b1f22 · --accent #9c4a0c · --line rgba(27,31,34,.18)
Radius: 3px / 6px · Typography: Michroma / Jost / IBM Plex Mono
Required: Yüzey bevel formülü: inset üst 1px açık + inset alt 1px koyu; dış gölge yalnız yüzen katmanda · Etiketler gravür dilinde: mono, büyük harf, .14em tracking, 9–10px · Radius 3px (kontrol) / 6px (kart); hap biçimli köşe yok
Banned: Saf beyaz `#ffffff` zemin. · Neon glow, cam yüzey, çok renkli gradyan parlama. · 12px üstü radius, hap buton.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="machined-metal-panel"] {
  --bg: #d5d8da; --bg-2: #c9cdd0;
  --surface: #e2e5e7; --surface-2: #eceef0;
  --ink: #1b1f22; --ink-soft: #4e565c; --ink-faint: #6b7379;
  --accent: #9c4a0c; --accent-ink: #ffffff;
  --line: rgba(27,31,34,.18);
  --danger: #c00000;
  --danger-ink: #ffffff;
  --ok: #006e26;
  --ok-ink: #ffffff;
  --warn: #a14000;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 3px; --radius-lg: 6px;
  --shadow: var(--shadow) = inset üst 1px açık + inset alt 1px koyu (bevel); --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .04em; --blur: 0px; --grain: 0;
}
```
