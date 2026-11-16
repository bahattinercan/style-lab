# 110 · Kanban Akışı

> **In one sentence:** İşin kolonlar arasında aktığı arayüz: soğuk gri tahta zemini, beyaz kartlar, 3px kategori şeridi ve WIP sayaçlı kolon başlıkları.

| | |
|---|---|
| **Feeling** | akışkan, düzenli, ekipçe, öngörülebilir |
| **Best for** | proje/ürün panosu, destek kuyruğu, işe alım akışı, üretim iş emri panosu |
| **Avoid** | vitrin/landing, uzun okuma, ödeme ekranı — kolon dili tek bir işi anlatmak için fazla |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="kanban-flow"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Kanban Akışı, arayüzü **kolon-kart tahtası** olarak kurar: kolon zemini `--bg-2`, kart zemini `--surface` + 1px çizgi + tek küçük gölge; her kartta sol 3px kategori şeridi, kolon başlığında `GELEN 7/10` biçiminde sayaç. Süsü bırakır; karşılığında **işin nerede durduğunu** ve **nerede tıkandığını** tek bakışta gösterir.

Kurucu kararları üç tanedir. Birincisi **WIP sayacı zorunlu**: sayaçsız kolon akış değil liste olur. İkincisi **kart şeridi bilgi taşır**: renk tek başına yetmez, şeridin yanında kategori etiketi yazılıdır. Üçüncüsü **sürükleme geri bildirimi**: kart kalkar (0 12px 28px) ve hedef kolon 2px accent kesikli çerçeve alır — geri bildirimsiz sürükleme yasak.

Bedeli: kart başına bilgi sınırı. Kartta en fazla 2 chip + 1 avatar; fazlası detay modalına taşınır.

### What is not
- **Bento Grid (05) değildir:** 05 değişken boyutlu vitrin kutularıdır; 110 kolon-kart hiyerarşisi ve WIP sayacı taşır, sürükleme durumu vardır.
- **Utility (44) değildir:** 44 tek vurgu mavi ürün arayüzüdür; 110 tahta zemin tonu + kart şeridi ile **akış** anlatır.
- **MES (59) değildir:** 59 üretim hattı KPI panosudur (ölçüm odaklı); 110 iş öğesi akışıdır (durum odaklı), 59'da sürükleme yoktur.
- **Neo-Brutalism (13) değildir:** 13 ofset sert gölge ve kalın çerçeve kullanır; 110'da gölge tek küçük katman, çerçeve 1px.

### Where it comes from
Toyota üretim sistemindeki kanban kartlarından ve yazılım dünyasındaki görselleştirme pratiğinden (WIP limiti, kümülatif akış diyagramı). Bugün tekrar önemli çünkü uzaktan çalışan ekipler işin durumunu tek ekranda görmek istiyor; klişeye dönmemesi için korunacak detay **WIP sayacının görünürlüğü** ve **kart şeridinin etiketle birlikte kullanılması**.

### Recognition test in 3 seconds
1. 3–4 kolon var ve her kolon başlığında `ad / limit` sayacı duruyor.
2. Her kartın solunda 3px renkli şerit ve yanında kategori etiketi var.
3. Kart gölgesi küçük ve tek katman; kolon zemini kartdan bir ton koyu.
4. Chip'ler hap biçimli (999px), kart radius 14px.
5. Sürüklenen kart belirgin biçimde kalkmış (0 12px 28px), hedef kolon kesikli accent çerçeveli.

## Visual signature
- **Kolon zemini:** `--bg-2` + 1px `--line`; kart zemini `--surface` — ayrım tonla.
- **Kart şeridi:** sol 3px accent şerit (`::before`, 999px radius, 8px inset).
- **WIP sayacı:** `ad / limit` mono 11px, kolon başlığında; limit aşımı `--danger`.
- **Kart gölgesi:** `0 1px 3px rgba(23,26,32,.12)`; sürüklemede `0 12px 28px`.
- **Hap chip:** 22px, 999px; kart başına en fazla 2.
- **Tahta zemini:** 22px nokta ızgarası (ink %6) — kolonlar bu ızgaraya oturur.
- **Hareket imzası:** 730ms `cubic-bezier(.3,.4,.2,1)`, 19px — kart akar, fırlamaz.
- **Landing hero (QA):** üç kanban kolonu (TODO/YAPILIYOR/BİTTİ) kart yığını + WIP sayacı altbilgisi.
- **Typography:** Space Grotesk (display) + Nunito (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#1a62cc`; neutral scale `#f2f4f7` → `#171a20`.
- **Radius:** `8px` / `14px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Kolon başlığı sayaç taşır: `GELEN 7/10` biçiminde adet + WIP limiti (mono)
2. Kart 3px sol etiket şeridi taşır; şerit rengi kategori, üstünde metin etiketi de bulunur
3. Sürükleme durumu görünür: kart 0 12px 28px ile kalkar, hedef kolon 2px accent kesikli çerçeve alır
4. Kolon zemini `--bg-2`, kart zemini `--surface`; ayrım ton + 1px line ile
5. Dokunma hedefi: kart içi eylemler 44px hedefe padding ile genişletilir
6. Kart başına en fazla 2 chip + 1 avatar (24px) — fazlası taşma sayılır

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2f4f7` | page background | as a card background |
| `--bg-2` | `#e8ebf0` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f9fb` | passive chip, hover background | primary button |
| `--ink` | `#171a20` | title, body, icon | large background |
| `--ink-soft` | `#4e5663` | secondary text, description | — |
| `--ink-faint` | `#7d8593` | decorative label, separator text | interactive text |
| `--accent` | `#1a62cc` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(23,26,32,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.82:1** · `ink-soft/bg` **6.72:1** · `ink-faint/bg` **3.37:1 (decorative)** · `accent-ink/accent` **5.73:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 36px (mobile 24px) | 600 | 1.12 | -0.02em |
| H2 | same | 26px | 600 | 1.22 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 15px | 400 | 1.55 | 0 |
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
- Radius: `8px` (buton, input, chip), `14px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Sayaçsız/sınırsız kolon (WIP görünmez).
- Sürükleme geri bildirimi olmayan hareket.
- Gradyan zemin ve cam yüzey.
- Hap radius (chip dışında), kalın çerçeve.
- Renk-only kategori ayrımı.
- Serif display.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 8px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 8px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 8px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 8px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 8px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 8px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.73:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | solda H1 + tek CTA, sağda 3 kolon mini tahta | `shots/01-page.png` |
| Dashboard | **yüksek** | 4 kolon + WIP sayaçları; süs yok | `shots/01-page.png` |
| Form | düşük | 36px input, tek kolon; kart oluşturma formu | `shots/01-page.png` |
| Liste / tablo | orta | 36px satır, kart şeridi aynı mantık | `shots/01-page.png` |
| Boş durum | orta | boş kolon + akış oku + "iş yok" etiketi | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: kolon kur → kart ekle → WIP limiti | `shots/01-page.png` |
| Pricing | orta | plan tablosu; ekip limiti mono sayaç | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tahta yok; sade form + tek CTA | `shots/01-page.png` |
| Modal | orta | kart detayı: içerik + yan bilgi kolonu | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sağ, "kart taşındı" + accent nokta | `shots/01-page.png` |
| Hata | düşük | kolon sayacı `--danger` + "LİMİT" etiketi | `shots/01-page.png` |
| Profil / ayar | orta | kolon/WIP ayarları, iki kolon | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.82:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.72:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.37:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.73:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.73:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.6 | ≥ 60 target | thin text |

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
| "Liste" gibi görünüyor | kolon zemini yok, kartlar aynı tonda | kolon `--bg-2`, kart `--surface` |
| Tıkanma görünmüyor | sayaç yok | `ad / limit` + limit aşımında `--danger` |
| Sürükleme belirsiz | geri bildirim yok | kart gölgesi + hedef kolon kesikli çerçeve |
| Kart gürültülü | 2'den fazla chip | fazlasını detay modalına taşı |
| Renk körlüğünde kategori kayboluyor | yalnız şerit rengi | kategori etiketini yaz |
| Mobilde kolonlar sıkışık | 3 kolon sığdırılmış | 768 altı yatay kaydırma, 280px kolon |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `mes-production-line` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `slavic-late-brutalist` | Two different ornamental languages compete on the same screen |
| Mixing | `vaporwave` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Kanban_(development | en.wikipedia.org — ) — WIP limiti ve akış kuralları |
| https://en.wikipedia.org/wiki/Kanban_board | Kanban board — kolon/kart yapısı |
| https://en.wikipedia.org/wiki/Cumulative_flow_diagram | Cumulative flow diagram — akış grafiği eksenleri |
| https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html | WCAG 2.2 · Dragging Movements — sürüklemenin klavye alternatifi |

## AI brief

```text
Stil: Kanban Akışı (styles/110-kanban-flow/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="kanban-flow"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg soğuk gri + 22px nokta ızgarası (ink %6); kolon zemini --bg-2.
Tipografi: --font-display Space Grotesk 36/26/19 (600); --font-body Nunito 15px/1.55;
  --font-mono JetBrains Mono 11px sayaç (.06em).
Yüzey: tahta --bg / kolon --bg-2 (gölgesiz) / kart --surface + 1px var(--line) + 0 1px 3px;
  sürüklenen kart 0 12px 28px. Radius 8px kontrol, 14px kart, chip 999px.
Renk: tek accent akış mavisi #1a62cc; kategori şeridi + etiket birlikte.
  ink/bg 15.82:1, ink-soft/bg 6.72:1, accent-ink/accent 5.73:1, ink-faint/bg 3.37:1 (ayırıcı).
İmza: sol 3px kart şeridi + `ad / limit` WIP sayacı + hedef kolonda 2px dashed accent.
Hareket: enter 730ms cubic-bezier(.3,.4,.2,1) 19px stagger .068; scroll top 70% 690ms 22px once;
  pin yok; hover 235ms görsel 1.024. prefers-reduced-motion zorunlu (anlık yerleşim).
Yasak: sayaçsız kolon, geri bildirimsiz sürükleme, gradyan/cam, hap radius (chip dışında), renk-only kategori.
Çıktı: bileşen kodu + tek paragraf not (kart şeridini ve WIP sayacını nereye koydun).

Style: Kanban Akışı (kanban-flow) · family: Interactive (106–115)
Token: --bg #f2f4f7 · --surface #ffffff · --ink #171a20 · --accent #1a62cc · --line rgba(23,26,32,.14)
Radius: 8px / 14px · Typography: Space Grotesk / Nunito / JetBrains Mono
Required: Kolon başlığı sayaç taşır: `GELEN 7/10` biçiminde adet + WIP limiti (mono) · Kart 3px sol etiket şeridi taşır; şerit rengi kategori, üstünde metin etiketi de bulunur · Sürükleme durumu görünür: kart 0 12px 28px ile kalkar, hedef kolon 2px accent kesikli çerçeve alır
Banned: Sayaçsız/sınırsız kolon (WIP görünmez). · Sürükleme geri bildirimi olmayan hareket. · Gradyan zemin ve cam yüzey.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="kanban-flow"] {
  --bg: #f2f4f7; --bg-2: #e8ebf0;
  --surface: #ffffff; --surface-2: #f7f9fb;
  --ink: #171a20; --ink-soft: #4e5663; --ink-faint: #7d8593;
  --accent: #1a62cc; --accent-ink: #ffffff;
  --line: rgba(23,26,32,.14);
  --danger: #d62a1d;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b55400;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 8px; --radius-lg: 14px;
  --shadow: 0 1px 3px rgba(23,26,32,.12); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
