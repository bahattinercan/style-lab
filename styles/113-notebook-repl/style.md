# 113 · Notebook / REPL

> **In one sentence:** Ekranı numaralı yürütme hücrelerine bölen, her bloğun altında ayrı çıktı ve kernel durumu gösteren hesaplama-defteri stili.

| | |
|---|---|
| **Feeling** | deneyen, şeffaf, teknik, sıralı |
| **Best for** | veri analizi defteri, eğitim/lab ortamı, API keşfi, rapor üretimi |
| **Avoid** | pazarlama vitrini, tek eylemli mobil akış, e-ticaret ödeme adımı — yürütme numaraları burada anlamsız gürültü |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="notebook-repl"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Notebook / REPL, sayfayı **yürütme sırasına** göre kurar: her blok sol oluğunda `In [7]:` numarası taşır, altında `Out[7]:` etiketli çıktı bloğu durur, navda kernel durumu (`idle` / `busy`) yazar. Metin ve kod aynı sayfada yaşar; kullanıcı sonucu gördüğü yerde düzeltir.

Kurucu kararları üç tanedir. Birincisi **numara görünürlüğü**: yürütme sayacı hiç gizlenmez, atlanan adım `[ ]` olarak boş kalır — böylece "hangi sırayla çalıştı" sorusu ekrandan okunur. İkincisi **çıktı ayrımı**: çıktı kodun içine karışmaz, `--surface-2` zeminli ayrı blok olur ve solunda 2px accent şerit taşır. Üçüncüsü **tek renk kod**: sözdizimi için iki ton (ink + accent) yeter; çok renkli kod teması yok.

Bedeli: dikey uzunluk. Bu yüzden defter görünümünde hücreler katlanabilir; katlanmış hücre yalnız `In [7]: …` satırı gösterir.

### What is not
- **Terminal UI (45) değildir:** 45 tam ekran mono konsoldur ve yeşil-siyah palet kullanır; 113 açık zeminli, sans başlıklı ve çıktıyı blok blok ayıran bir defterdir.
- **Log Stream (49) değildir:** 49 yalnız akan olay satırlarıdır (yürütme yok); 113'te her hücrenin numarası, çıktısı ve düzenlenebilir kodu vardır.
- **Komut Paleti (108) değildir:** 108 koyu bir overlay paletidir; 113 sayfa düzenidir, overlay değildir ve kod içerir.
- **Adım Sihirbazı (111) değildir:** 111 tek soru sorar ve ilerlemeyi dayatır; 113'te kullanıcı sırayı kendisi seçer, hücre atlayabilir.

### Where it comes from
REPL (oku-değerlendir-yaz döngüsü) ve hesaplamalı defter (Jupyter/Mathematica) geleneğinden gelir: hesap ile anlatı aynı belgede. Bugün geri dönüyor çünkü yapay zekâ çıktıları "çalıştırılabilir belge" biçiminde sunuluyor. Klişeye dönmemesi için korunacak detay: **yürütme numarasının ve kernel durumunun görünür kalması**; sadece kod bloğu görünümü taklit edilirse stil kaybolur.

### Recognition test in 3 seconds
1. Blokların solunda `In [` + `]:` biçiminde mono numara oluğu var; altlarında `Out` bloğu.
2. Navda tek kelimelik kernel durumu (`idle` / `busy`) ve yanında 6px durum noktası durur.
3. Kod içerikleri mono 13px, zeminleri `--surface-2`, sol kenarlarında 2px accent şerit.
4. Sayfa zemini soğuk gri (`#e9edf2`), hücreler beyaz — kart gölgesi yok denecek kadar az.
5. Başlıklar Space Mono 700; gövde Inter — serif yok.

## Visual signature
- **Yürütme oluğu:** hücrenin solunda 46px genişlik; üstte `In [` ve 34px sağda `]:` mono 10px, `--ink-faint`.
- **Çıktı bloğu:** `--surface-2` zemin + sol 2px accent şerit; `Out` etiketi mono 10px.
- **Kernel noktası:** 6px kare (radius 1px), `idle` → `--ok`, `busy` → `--warn`, `ölü` → `--danger`; metin her zaman yanında.
- **Hücre yüzeyi:** beyaz `--surface`, 1px `--line`, `0 1px 2px` gölge, radius 8px.
- **Tipografi karışımı:** başlık Space Mono 700 (36/26/19), gövde Inter 15px/1.58, kod JetBrains Mono 13px/1.6.
- **Hareket imzası:** 230ms `cubic-bezier(.2,.9,.2,1)`, 3px — hücre "basılmış" gibi anında oturur.
- **Landing hero (QA):** REPL hücreleri: `In [` oluğu, accent sol şerit, `Out[3]` çıktı altbilgisi.
- **Typography:** Space Mono (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#b8460f`; neutral scale `#e9edf2` → `#131a22`.
- **Radius:** `4px` / `8px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Her yürütülebilir blok `In [n]:` numarası taşır; numara hücrenin sol oluğunda mono yazılır
2. Çıktı ayrı blokta `Out[n]:` etiketiyle ve `--surface-2` zeminle gösterilir
3. Kernel durumu her zaman yazıyla: `idle` / `busy` / `ölü` + nokta
4. Kod içeriği mono (JetBrains Mono) 13px/1.6; UI metni sans (Inter)
5. Çalıştırma kısayolu görünür ipucu olarak yazılır (`Shift+Enter`)
6. Yeniden çalıştırma sırası numarayla görünür; atlanmış numara `[ ]` olarak boş kalır

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#e9edf2` | page background | as a card background |
| `--bg-2` | `#dfe5ec` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f4f7fa` | passive chip, hover background | primary button |
| `--ink` | `#131a22` | title, body, icon | large background |
| `--ink-soft` | `#47566a` | secondary text, description | — |
| `--ink-faint` | `#7a8798` | decorative label, separator text | interactive text |
| `--accent` | `#b8460f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(19,26,34,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.9:1** · `ink-soft/bg` **6.36:1** · `ink-faint/bg` **3.11:1 (decorative)** · `accent-ink/accent` **5.36:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Mono) | 36px (mobile 24px) | 600 | 1.12 | -0.02em |
| H2 | same | 26px | 600 | 1.22 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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
- Radius: `4px` (buton, input, chip), `8px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Numarasız hücre (yürütme sırası okunamaz).
- Çıktıyı kod bloğunun içine karıştırmak.
- Çok renkli sözdizimi teması; accent dışında ikinci parlak renk.
- Hap radius, kalın gölge, gradyan zemin.
- Kernel durumunu yalnız renkle vermek.
- Serif display; kod satırında 12px altı punto.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 4px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 4px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 4px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.36:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | solda üç hücre önizlemesi, sağda çalıştır CTA | `shots/01-page.png` |
| Dashboard | yüksek | dört KPI hücresi + tek çıktı grafiği | `shots/01-page.png` |
| Form | orta | mono input'lar, her alanın altında doğrulama çıktısı | `shots/01-page.png` |
| Liste / tablo | orta | 34px satır, tabular-nums, sağda `Out` özeti | `shots/01-page.png` |
| Boş durum | orta | `In [ ]:` imleci + tek örnek komut | `shots/01-page.png` |
| Onboarding | yüksek | ilk hücre: `print("merhaba")` çalıştır | `shots/01-page.png` |
| Pricing | düşük | iki plan hücresi, sağda `Out` fiyat bloğu | `shots/01-page.png` |
| Giriş / ödeme | düşük | mono input + `Out` doğrulama satırı | `shots/01-page.png` |
| Modal | orta | kernel yeniden başlatma onayı (mono uyarı) | `shots/01-page.png` |
| Bildirim / toast | düşük | alt-sağ, `Out kopyalandı` tek satır | `shots/01-page.png` |
| Hata | orta | `Traceback` bloğu: sol şerit `--danger`, mono 12px | `shots/01-page.png` |
| Profil / ayar | orta | ayar hücreleri, değişiklik `Out` satırında özetlenir | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.9:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.36:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.11:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.36:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.36:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.4 | ≥ 60 target | thin text |

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
| Sayfa "kod bloğu yığını" gibi | çıktı ve kod ayrılmamış | `Out` bloğu + `--surface-2` zemin ekle |
| Yürütme sırası anlaşılmıyor | numara gizlenmiş | `In [n]` oluğu her hücrede görünür olsun |
| Kernel dondu sanılıyor | yalnız nokta var | `busy` metnini nokta yanına yaz |
| Mobilde yatay kaydırma | kod satırı sarmıyor | `white-space: pre-wrap; overflow-wrap: anywhere` |
| Renk cümbüşü | çok renkli kod teması | 2 renk sınırı: ink + accent |
| Hücreler zıplıyor | gölge + yükseklik animasyonu | yalnız opacity + 3px, gölge 1–2px |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `log-stream` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `editorial-design` | Two different ornamental languages compete on the same screen |
| Mixing | `art-deco` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://jupyter.org/ | Jupyter — hücre + çıktı yapısı ve defter kavramı |
| https://en.wikipedia.org/wiki/REPL | REPL — oku-değerlendir-yaz döngüsü ve istem işareti |
| https://jupyter-notebook.readthedocs.io/en/stable/ | Jupyter Notebook docs — yürütme numarası, kernel durumu |
| https://www.w3.org/WAI/WCAG22/Understanding/reflow.html | WCAG 2.2 · Reflow — 390px'te kod satırının sarması |

## AI brief

```text
Stil: Notebook / REPL (styles/113-notebook-repl/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="notebook-repl"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Space Mono 36/26/19 (700, -.02em); --font-body Inter 15px/1.58;
  --font-mono JetBrains Mono 13px/1.6 kod, 11px etiket (.06em).
Yüzey: --bg soğuk gri / --surface beyaz hücre + 1px var(--line) + var(--shadow) 0 1px 2px;
  çıktı bloğu --surface-2 + sol 2px accent şerit. Radius 4px (kontrol), 8px (hücre).
Renk: tek accent #b8460f; ink/bg 14.90:1, ink-soft/bg 6.36:1, accent-ink/accent 5.36:1,
  ink-faint/bg 3.11:1 (oluk etiketi).
İmza: sol 46px yürütme oluğu (In [n]:), altında Out çıktı bloğu, navda kernel durumu,
  hücrede 2 renk sınırı.
Hareket: enter 230ms cubic-bezier(.2,.9,.2,1) 3px stagger .024; scroll top 90% 190ms 2px once:false;
  pin yok; hover 70ms görsel 1.004. prefers-reduced-motion zorunlu.
Yasak: numarasız hücre, çıktının koda karışması, çok renkli kod teması, hap radius, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (In/Out oluğunu ve kernel durumunu nereye koydun).

Style: Notebook / REPL (notebook-repl) · family: Interactive (106–115)
Token: --bg #e9edf2 · --surface #ffffff · --ink #131a22 · --accent #b8460f · --line rgba(19,26,34,.14)
Radius: 4px / 8px · Typography: Space Mono / Inter / JetBrains Mono
Required: Her yürütülebilir blok `In [n]:` numarası taşır; numara hücrenin sol oluğunda mono yazılır · Çıktı ayrı blokta `Out[n]:` etiketiyle ve `--surface-2` zeminle gösterilir · Kernel durumu her zaman yazıyla: `idle` / `busy` / `ölü` + nokta
Banned: Numarasız hücre (yürütme sırası okunamaz). · Çıktıyı kod bloğunun içine karıştırmak. · Çok renkli sözdizimi teması; accent dışında ikinci parlak renk.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="notebook-repl"] {
  --bg: #e9edf2; --bg-2: #dfe5ec;
  --surface: #ffffff; --surface-2: #f4f7fa;
  --ink: #131a22; --ink-soft: #47566a; --ink-faint: #7a8798;
  --accent: #b8460f; --accent-ink: #ffffff;
  --line: rgba(19,26,34,.14);
  --danger: #d12318;
  --danger-ink: #ffffff;
  --ok: #007c34;
  --ok-ink: #ffffff;
  --warn: #b04f00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 8px;
  --shadow: 0 1px 2px rgba(19,26,34,.08); --shadow-hard: none;
  --font-display: "Space Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0; --blur: 0px; --grain: 0;
}
```
