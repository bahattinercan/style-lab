# 105 · Holographic Layer

> **In one sentence:** Her panelin arkasında 12px kaymış iki soluk katman bulunduğu, ışığın cam kenarında kırıldığı koyu mor holografik arayüz.

| | |
|---|---|
| **Feeling** | gelecekçi, katmanlı, ışıltılı, sakin |
| **Best for** | AI/veri ürünü lansmanı, uzamsal arayüz vitrini, teknoloji konferansı, immersive portfolyo |
| **Avoid** | muhasebe/fatura, yazdırma odaklı belge, düşük donanımlı mobil cihazlar (blur maliyeti) |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="holographic-layer"]` |
| **Composition** | `index` · `pill` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Holographic Layer, arayüzü **üst üste duran üç katman** olarak kurar: ana katman opaktır, arkasındaki iki katman 12px ve 24px kaymış, %10 ve %8 opaklıkta soluk kopyalardır. Cam kenarı 1px hairline ile çizilir; blur yalnız dekoratif katmanda (≤ 8px) çalışır.

Üç kurucu karar: (1) **üç katman sınırı** — dördüncü katman okunurluğu bozar; (2) **veri opak** — metin, sayı ve tablo asla cam katmanda durmaz, holografik his yalnız *çerçevede* yaşar; (3) **kayma sabit** — offset 12px'in katları; rastgele dağılım hologramı "dağınık" gösterir.

Display **Michroma**'dır (tek ağırlık, çok geniş): holografik yüzeylerin ince tarama çizgileri gibi harfler. Gövde Inter, etiketler IBM Plex Mono. Radius 20/28px — hologram kenarı yumuşak kırılır.

Bedeli: blur ve katmanlar performans maliyetidir. Bu yüzden mobilde katman sayısı 1'e iner, blur 4px'e düşer ve `prefers-reduced-transparency` benzeri bir geri dönüş olarak opak `--surface` kullanılır.

### What is not
- **Glassmorphism (08) değildir:** 08 çok renkli atmosfer (mavi/mor/pembe radial) + güçlü cam blur ile "buzlu cam" kurar; Holographic Layer tek renk ailesi (mor), katman kayması ve mesh deseni kullanır; veri katmanı opaktır.
- **Liquid Glass (09) değildir:** 09 hap formlar ve sıvı yansıma ile çalışır (radius 20, blob atmosfer); burada katman yığını ve Michroma tipografisi imzadır.
- **AI Native Mesh (39) değildir:** 39 Inter ile mesh atmosfer ve cam kart kullanır, mor-mavi accent'dir; Holographic Layer'da üç katmanlı yığın, 20/28px radius ve Michroma vardır.
- **Minimalism (01) değildir:** 01 katmansız ve nötrdür; burada derinlik tamamen katmanlardan gelir.

### Where it comes from
Holografi fiziği (girişim kaydı, katmanlı film), AR/uzamsal arayüz çalışmaları (visionOS benzeri katmanlı paneller), 2020'lerin "iridescent tech" estetiği. Ekranda yeniden kullanılmasının nedeni: cam efektlerin düz "frosted" tekdüzeliğine karşı **katman hiyerarşisi** önermesi — derinlik blur'dan değil, kayma ve opaklık farkından gelir. Klişeye dönüşmemesi için korunacak detay: katman sayısının üçle sınırlı kalması ve verinin her zaman opak katmanda durması.

### Recognition test in 3 seconds
1. Zemin koyu mor-siyah; panelin arkasında 12px ve 24px kaymış iki soluk kopya var.
2. Panel kenarları 1px hairline ile çiziliyor; içeride ince mesh deseni görünüyor.
3. Başlık Michroma: çok geniş, teknik, tek ağırlık.
4. Veri (metin/tablo) opak; yalnız çerçeve ve dekoratif zemin ışıltılı.
5. Accent açık mor yalnız aktif katman ve birincil eylemde.

## Visual signature
- **Üç katman:** ana katman opak; `translate(12px,12px)` %10, `translate(24px,24px)` %8.
- **Cam kenar:** 1px `--line` + `inset 0 1px 0` ink %8 iç parlaklık.
- **Mesh:** 24px aralıklı iki yönlü çizgi (60° / −60°), opaklık ≤ %80.
- **Blur disiplini:** `--blur: 8px` yalnız nav, tabbar, ghost buton ve dekoratif katmanda.
- **Michroma başlık:** 44px, ağırlık 400, tracking 0.02em, satır aralığı 1.14.
- **Işıma:** tek accent radial, %16 opaklık, sağ üstte; metnin arkasında.
- **Typography:** Michroma (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#8f7bff`; neutral scale `#0e0b16` → `#f0edf7`.
- **Radius:** `20px` / `28px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. En fazla üç katman: ana katman opak, iki dekoratif kopya 12px offset ve %6–%10 opaklık
2. Veri (metin, sayı, tablo) her zaman opak katmanda; blur yalnız dekoratif katmanda
3. Blur ≤ 8px (`--blur`), iridesans yalnız dekoratif katman kenarında
4. Michroma yalnız başlıkta ve 400; gövde Inter, etiket mono
5. Accent yalnız "aktif katman / seçili öğe"; dekoratif renk kullanılmaz
6. Hover'da katman 410ms içinde kayar ve durur; sürekli hareket yok

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0e0b16` | page background | as a card background |
| `--bg-2` | `#141020` | partition divider floor, table top | button background |
| `--surface` | `#181323` | kart, input, modal | full-page background |
| `--surface-2` | `#211a2e` | passive chip, hover background | primary button |
| `--ink` | `#f0edf7` | title, body, icon | large background |
| `--ink-soft` | `#b3aac4` | secondary text, description | — |
| `--ink-faint` | `#827896` | decorative label, separator text | interactive text |
| `--accent` | `#8f7bff` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#0a0713` | text above accent | non-accent background |
| `--line` | `rgba(240,237,247,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.85:1** · `ink-soft/bg` **8.78:1** · `ink-faint/bg` **4.71:1 (decorative)** · `accent-ink/accent` **6.12:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 27px (mobile 27px) | 500 | 1.06 | -0.02em |
| H2 | same | 26px | 600 | 1.18 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Display 54px; technical labels mono and wide tracking. Body 15px, size 62ch.
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

- The grid is slightly visible as an auxiliary line (accent 8%); section spacing 56px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- The surfaces are separated by a thin accent edge; 1px signal line instead of shadow.
- Radius: `20px` (buton, input, chip), `28px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Üçten fazla katman, katman üstüne katman.
- Veri katmanında blur/şeffaflık.
- Sürekli iridesans / hue-rotate döngüsü.
- 28px üzeri radius.
- Neon dış ışıma, renkli gölge.
- Açık zemin (bu stil koyu holografik zeminde çalışır).
- Performans geri dönüşü olmadan mobilde tam blur.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 20px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 20px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 20px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 20px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 20px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 20px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 20px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.98:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-mesh` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Katman paneli 6/6; arkasında iki kaymış kopya | `shots/01-page.png` |
| Dashboard | yüksek | Kartlar opak; yalnız nav ve tabbar cam | `shots/01-page.png` |
| Form | düşük | 46px alanlar, cam yok, opak `--bg-2` | `shots/01-page.png` |
| Liste / tablo | orta | 46px satır, zebra, seçili sol accent çizgi | `shots/01-page.png` |
| Boş durum | orta | Boş katman yığını + tek eylem | `shots/01-page.png` |
| Onboarding | yüksek | Her adımda bir katman açılır (en fazla 3) | `shots/01-page.png` |
| Pricing | orta | Plan kartları opak; öne çıkan kart accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel opak, blur yok | `shots/01-page.png` |
| Modal | orta | Opak modal, yalnız çerçeve katmanlı | `shots/01-page.png` |
| Bildirim / toast | orta | Tek katman opak | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar, katmanlar kapanır (odak) | `shots/01-page.png` |
| Profil / ayar | orta | Katman sayısı (1–3), blur yoğunluğu, iridesans anahtarı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.85:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.78:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.71:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.12:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.98:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.7 | ≥ 60 target | thin text |

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
| Okunmuyor | veri cam katmanda | veriyi opak `--surface`'e taşı |
| "Dağınık" görünüyor | rastgele offset | offset 12px'in katı, en fazla 3 katman |
| Telefon ısınıyor | tam blur + katman | mobilde 1 katman, blur 4px |
| Neon kitsch | iridesans + glow | iridesansı kaldır, accent'i tek tut |
| Kenar kayboluyor | hairline zayıf | `inset 0 1px 0` ink %8 ekle |
| Başlık taşıyor | Michroma çok geniş | `max-width` ch + clamp |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| garnish | `ai-native-mesh` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://developer.apple.com/design/human-interface-guidelines/materials | Apple · Materials (holographic layering) — katman ve blur ölçüsü |
| https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter | MDN · backdrop-filter — cam katman kurulumu |
| https://m3.material.io/styles/elevation/tokens | Material 3 · Elevation & surfaces — katman opaklık kademeleri |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text contrast — cam katman kenarı görünürlüğü |

## AI brief

```text
Stil: Holographic Layer (styles/105-holographic-layer/style.md, tokens.json)
Token: sadece [data-style="holographic-layer"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Michroma 400 (yalnız başlık, tracking .02em), gövde Inter 400/600,
  etiket IBM Plex Mono. Ölçek 10/12/15/19/26/44; gövde ölçü 62ch.
Yüzey: koyu mor-siyah; radius 20/28px; ana katman OPAK, arkasında 12/24px kaymış
  %10/%8 opaklıkta iki kopya; cam kenar 1px var(--line) + inset ink %8.
Imza: üç katman yığını + 24px mesh deseni + tek accent ışıma (%16, sağ üst);
  blur <= 8px yalnız nav/tabbar/dekoratif katmanda.
Renk: tek accent #8f7bff; veri katmanı daima opak, cam katmanda veri yok.
Hareket: enter .97s cubic-bezier(.32,.06,.2,1) y28 stagger .11; scroll top 76% .86s y24 once;
  1 pin scrub 1.25 (+130%, offset 12->28px); hover 410ms scale 1.038; reduced-motion zorunlu.
Yasak: 4. katman, veride blur, sürekli hue-rotate, 28px üstü radius, açık zemin.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Holographic Layer (holographic-layer) · family: Motion & Optics (96–105)
Token: --bg #0e0b16 · --surface #181323 · --ink #f0edf7 · --accent #8f7bff · --line rgba(240,237,247,.16)
Radius: 20px / 28px · Typography: Michroma / Inter / IBM Plex Mono
Required: En fazla üç katman: ana katman opak, iki dekoratif kopya 12px offset ve %6–%10 opaklık · Veri (metin, sayı, tablo) her zaman opak katmanda; blur yalnız dekoratif katmanda · Blur ≤ 8px (`--blur`), iridesans yalnız dekoratif katman kenarında
Banned: Üçten fazla katman, katman üstüne katman. · Veri katmanında blur/şeffaflık. · Sürekli iridesans / hue-rotate döngüsü.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="holographic-layer"] {
  --bg: #0e0b16; --bg-2: #141020;
  --surface: #181323; --surface-2: #211a2e;
  --ink: #f0edf7; --ink-soft: #b3aac4; --ink-faint: #827896;
  --accent: #8f7bff; --accent-ink: #0a0713;
  --line: rgba(240,237,247,.16);
  --danger: #e3382a;
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
  --radius: 20px; --radius-lg: 28px;
  --shadow: 0 28px 64px -44px rgba(4,2,10,.95); --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
