# 56 · Blueprint Çizimi

> **In one sentence:** Mühendislik paftasının ekrana taşınmış hâli: cyanotype zemin, 8/64px çizim ızgarası ve hiyerarşiyi yalnız çizgi kalınlığıyla kuran teknik arayüz.

| | |
|---|---|
| **Feeling** | ölçülü, şeffaf, teknik, güvenilir |
| **Best for** | mühendislik SaaS paneli, API/şema dokümantasyonu, donanım ürün sayfası, veri modeli anlatımı |
| **Avoid** | moda kampanyası, çocuk ürünü, duygusal hikâye anlatımı — çizim dili burada "soğuk" okunur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="blueprint-drawing"]` |
| **Composition** | `type` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Blueprint Çizimi, bir arayüzü **pafta** gibi kurar: zemin cyanotype mavisi, üstünde 8px minor / 64px major çizim ızgarası, her yüzey 1px teknik çizgi. Hiyerarşi renkten değil **çizgi kalınlığından** (1px bilgi, 2px accent karar) ve ölçü etiketlerinden gelir. Süsü feda eder; karşılığında ölçülebilirlik, okunabilir veri yoğunluğu ve "bu ekran bir şeyi tanımlıyor" hissi kazanır.

Kurucu kararları üç tanedir. Birincisi **ızgara görünürdür**: çizgi ağı dekorasyon değil, ölçek göstergesidir; her blok ızgaraya hizalanır. İkincisi **gölge yoktur**: katman ayrımı 1px çizgi + 8px kesikli iç çerçeve (pafta çerçevesi) ile kurulur. Üçüncüsü **her sayı birimlidir**: ölçü etiketi olmayan veri ekrana çıkmaz.

Bedeli: fotoğraf ve duygu taşıyamaz. Blueprint'i klişeden koruyan detay, ızgaranın **gerçekten hizalama aracı** olarak kullanılması — rastgele döşenmiş mavi çizgi deseni değil.

### What is not
- **Terminal UI (45) değildir:** 45 tek mono aile ve steps() kesik hareket kullanır, ızgara çizmez. Blueprint iki aile (Chakra Petch + Space Grotesk) ve görünür çizim ızgarası taşır; hareketi `cubic-bezier(.55,.06,.35,1)` ile 360ms.
- **Conceptual Sketch (32) değildir:** 32 el çizimi, kırık hiza ve Architects Daughter kullanır; Blueprint dijital pafta, kesin hiza ve 0–2px radius.
- **Cyberpunk (22) değildir:** 22 neon ve glow ile teknoloji satar; Blueprint'te glow ve doygun ikinci renk yoktur.
- **Swiss Design (02) değildir:** Swiss siyah/beyaz baskı dilidir ve ızgarayı gizler; Blueprint cyanotype zemin ve görünür ölçü ızgarasıyla konuşur.

### Where it comes from
Cyanotype (1842) ile çoğaltılan mühendislik paftalarından; ISO 128 çizgi kalınlığı standardından ve günümüzde "sistem şeması / veri modeli" anlatımının geri dönüşünden. Bugün tekrar kullanılıyor çünkü ajan üretimi arayüzlerde en çok kaybolan şey **ölçek ve hiza**; görünür ızgara bu iki kararı zorunlu kılar. Klişeye dönmemesi için korunacak detay: çizgi kalınlığı hiyerarşisi (1px/2px) ve her ölçünün birim taşıması.

### Recognition test in 3 seconds
1. Zemin koyu cyanotype mavisi; üstünde 64px aralıklı çizgi ağı görünür.
2. Panellerin içinde 8px iç boşluklu **kesikli** ikinci çerçeve var.
3. Buton dolu değil: accent renkli 1px çerçeve + mono büyük harf etiket.
4. Her sayısal bloğun altında birim etiketi (`ms`, `mm`, `%`, `adet`) duruyor.
5. Hiçbir yerde gölge/blur yok; tüm köşeler 0–2px.

## Visual signature
- **Çizim ızgarası:** `background-size: 64px 64px`, iki `linear-gradient` (yatay+dikey) 1px `--line`; 8px'lik alt bölünme yalnız bileşen içinde.
- **Pafta çerçevesi:** kart ve panelde `::after` ile `inset: 8px`, `1px dashed` accent %32 — gölgenin yerini alır.
- **Çizgi hiyerarşisi:** bilgi 1px `--line`, karar/aktif 2px `--accent`; üçüncü kalınlık yok.
- **Ölçü etiketi:** 10px mono, `.08em` tracking, `--ink-soft`; değerin altında veya sağında, asla başlık üstünde.
- **Buton dili:** 40px yükseklik, `1px solid --accent`, şeffaf zemin, mono uppercase etiket.
- **KPI şeridi:** her KPI kartının solunda 2px accent dikey çizgi (ölçü çizgisi).
- **Hareket imzası:** 360ms `cubic-bezier(.55,.06,.35,1)`, 6px yükselme — çizim "oturur", sıçramaz.
- **Typography:** Chakra Petch (display) + Space Grotesk (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#6fd3f2`; neutral scale `#0a1b2b` → `#dceaf5`.
- **Radius:** `0px` / `2px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Zemin cyanotype; 8px minor / 64px major çizim ızgarası her ekranda görünür
2. Hiyerarşi yalnız çizgi kalınlığı (1px / 2px accent) ve punto ile kurulur
3. Her veri bloğu ölçü etiketi taşır (mm, ms, %, adet)
4. Köşe 0–2px; gölge/blur/gradyan yok
5. Teknik diyagram + ölçü çizgisi zorunlu imza; fotoğraf kullanılmaz
6. Metin ve çizgi aynı renk ailesinden: açık zemin üstünde asla ters çevrilmez

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0a1b2b` | page background | as a card background |
| `--bg-2` | `#0d2133` | partition divider floor, table top | button background |
| `--surface` | `#102a40` | kart, input, modal | full-page background |
| `--surface-2` | `#14344e` | passive chip, hover background | primary button |
| `--ink` | `#dceaf5` | title, body, icon | large background |
| `--ink-soft` | `#a6c2d6` | secondary text, description | — |
| `--ink-faint` | `#6f90a6` | decorative label, separator text | interactive text |
| `--accent` | `#6fd3f2` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#04202c` | text above accent | non-accent background |
| `--line` | `rgba(220,234,245,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.22:1** · `ink-soft/bg` **9.39:1** · `ink-faint/bg` **5.16:1 (decorative)** · `accent-ink/accent` **9.84:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 46px (mobile 30px) | 400 | 1.08 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 15px | 400 | 1.62 | 0 |
| Small body | same | 12px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Fotoğraf, 3B render, organik illüstrasyon.
- Yumuşak gölge, cam efekti, gradyan zemin, glow.
- Dolu/renkli ikon, emoji ile durum bildirimi.
- 8px üstü radius, hap biçimli buton.
- Süs amaçlı ızgara (ızgara her zaman ölçü taşır).
- Aynı blokta ikiden fazla çizgi kalınlığı.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.19:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 7/5 bölünme: solda H1 + ölçü etiketli alt başlık, sağda patlatılmış diyagram | `shots/01-page.png` |
| Dashboard | düşük | ızgara zemini korunur, süs sıfır; KPI'larda 2px accent ölçü çizgisi | `shots/01-page.png` |
| Form | düşük | 1px çerçeve, mono etiket sağda; hata metni ölçü notu biçiminde | `shots/01-page.png` |
| Liste / tablo | düşük | 36px satır, dikey hairline sütunlar, sağa dayalı tabular sayılar | `shots/01-page.png` |
| Boş durum | orta | boş pafta: kesikli çerçeve + "ölçü bekleniyor" mono etiketi | `shots/01-page.png` |
| Onboarding | yüksek | her adım bir pafta; adım numarası title block'ta | `shots/01-page.png` |
| Pricing | orta | üç kolon; öne çıkan plan 2px accent çerçeve, dolgu yok | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | yalnız çizgi ve hiza; süs yok, odak halkası belirgin | `shots/01-page.png` |
| Modal | orta | accent 1px çerçeve + pafta numarası başlık | `shots/01-page.png` |
| Bildirim / toast | orta | sağ üst, 2px accent ölçü çizgisi | `shots/01-page.png` |
| Hata | düşük | kırmızı yalnız çizgi ve etikette; zemin değişmez | `shots/01-page.png` |
| Profil / ayar | orta | sol etiket kolonu 4/8 bölünme | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.22:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.39:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.16:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.84:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.19:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 91.5 | ≥ 60 target | thin text |

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
| Ekran "mavi kâğıt" gibi, teknik değil | ızgara dekoratif döşenmiş, bloklar hizasız | tüm blokları 64px ağına otur; ızgarayı hizalama aracı yap |
| Derinlik kayboluyor, her şey aynı düzlemde | tüm çerçeveler 1px `--line` | karar taşıyan öğede 2px accent kullan |
| Ölçü etiketleri okunmuyor | 10px'in altına inilmiş veya `--ink-faint` | 10px sabit, `--ink-soft` kullan |
| Buton tıklanabilir görünmüyor | şeffaf zemin + 1px çizgi zayıf | hover'da accent %14 dolgu; mobilde min 44px |
| Izgara metni kesiyor | gövde metni çizgi üstüne binmiş | metin bloklarına `--bg` arka plan ver veya ızgarayı o alanda kapat |
| Çizgi ağı 1px'te titriyor | `background-position` hizasız | `background-position: -1px -1px` ve tam sayı offset |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `conceptual-sketch` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Blueprint | Blueprint (cyanotype) — cyanotype zemin ve çizgi ağırlığı |
| https://en.wikipedia.org/wiki/Technical_drawing | Technical drawing — ölçü çizgisi, kesit, tarama kuralları |
| https://www.iso.org/standard/70152.html | ISO 128 · çizgi kalınlığı — ISO 128 çizgi kalınlığı hiyerarşisi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — 1px çizgi/ikon kontrast ölçütü |

## AI brief

```text
Stil: Blueprint Çizimi (styles/56-blueprint-drawing/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="blueprint-drawing"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg cyanotype; body'ye 64px çizgi ağı (linear-gradient ×2, 1px var(--line)).
Tipografi: --font-display Chakra Petch başlıkta (46/30/20, 600, tracking .01em),
  --font-body Space Grotesk 15px/1.62 gövdede, --font-mono Share Tech Mono 10px etiket ve ölçüde (.08em).
Yüzey: 3 seviye (--bg / --surface / --surface + 1px accent çerçeve). Gölge/blur/gradyan YOK.
  Kart = 1px var(--line) + ::after inset 8px 1px dashed accent %32.
Renk: tek accent #6fd3f2; durum renkleri yalnız veri hücresinde. ink/bg 14.22:1, ink-soft/bg 9.39:1.
Bileşen: "Bileşen reçeteleri" tablosundaki ölçüler birebir; buton 40px şeffaf + 1px accent, mono uppercase.
Hareket: enter 360ms cubic-bezier(.55,.06,.35,1) 6px stagger .045; scroll top 89% 400ms 9px once;
  pin yok; hover 140ms görsel 1.005. prefers-reduced-motion zorunlu.
Yasak: fotoğraf, gölge, glow, gradyan, 8px üstü radius, dolu renkli ikon, süs ızgarası.
Çıktı: bileşen kodu + tek paragraf not (hangi ölçü çizgisini nereye koydun).

Style: Blueprint Çizimi (blueprint-drawing) · family: Industrial (56–65)
Token: --bg #0a1b2b · --surface #102a40 · --ink #dceaf5 · --accent #6fd3f2 · --line rgba(220,234,245,.16)
Radius: 0px / 2px · Typography: Chakra Petch / Space Grotesk / Share Tech Mono
Required: Zemin cyanotype; 8px minor / 64px major çizim ızgarası her ekranda görünür · Hiyerarşi yalnız çizgi kalınlığı (1px / 2px accent) ve punto ile kurulur · Her veri bloğu ölçü etiketi taşır (mm, ms, %, adet)
Banned: Fotoğraf, 3B render, organik illüstrasyon. · Yumuşak gölge, cam efekti, gradyan zemin, glow. · Dolu/renkli ikon, emoji ile durum bildirimi.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="blueprint-drawing"] {
  --bg: #0a1b2b; --bg-2: #0d2133;
  --surface: #102a40; --surface-2: #14344e;
  --ink: #dceaf5; --ink-soft: #a6c2d6; --ink-faint: #6f90a6;
  --accent: #6fd3f2; --accent-ink: #04202c;
  --line: rgba(220,234,245,.16);
  --danger: #ed4333;
  --danger-ink: #0b0d10;
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
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
}
```
