# 112 · Sıfır Arayüz

> **In one sentence:** Görünür kontrolü neredeyse sıfıra indiren, tek niyet satırı ve 1px hairline katmanlarla çalışan monokrom arayüz stili.

| | |
|---|---|
| **Feeling** | sessiz, sakin, güvenen, geri planda |
| **Best for** | bağlam içi öneri, ajanda/notür ürünü, tek görevli asistan, okuma arayüzü |
| **Avoid** | yoğun yönetim paneli, çok eylemli editör, e-ticaret vitrini — görünmez arayüz burada keşfedilebilirliği düşürür |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="zero-ui"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Sıfır Arayüz, ekranı **niyet cümlesine** indirger: sayfada bir soru satırı, bir öneri ve bir geri bağlantısı. Kontroller kaybolmaz, **gizlenir**: katman yalnız odak veya niyet geldiğinde 1px hairline olarak belirir. Buton yoktur — eylem, altı çizili metindir; kart yoktur — bölüm, hairline çerçevedir; gölge yoktur.

Kurucu kararları üç tanedir. Birincisi **monokrom**: `--accent` = `--ink`, yani vurgu rengi diye bir şey yok; durum bilgisi metinle verilir. İkincisi **hairline tekniği**: tüm ayrım `rgba(31,33,29,.12)` 1px çizgi ve zemin tonu farkından gelir. Üçüncüsü **niyet önceliği**: kullanıcı yazmaya/odaklanmaya başlamadan hiçbir katman açılmaz (WCAG 3.2.1 ile uyumlu).

Bedeli: keşfedilebilirlik. Bu yüzden sıfır arayüz, kullanıcının görevi bildiği ürünlerde (ajanda, okuma, tek görevli asistan) kullanılır; ilk kez gören kullanıcı için tek satır ipucu (`/` ile başla) zorunludur.

### What is not
- **Ses-Öncelikli (106) değildir:** 106'nın merkezinde hareketli halka ve dalga vardır, koyu menekşe zeminlidir; 112'de hiçbir dekoratif öğe ve hiçbir accent rengi yoktur.
- **Komut Paleti (108) değildir:** 108 koyu, mono başlıklı bir katman paletidir (⌘K); 112'de katman yoktur, tek satır niyet girişi sayfanın kendisidir.
- **Japon Ma (67) değildir:** 67 boşluğu serif tipografi ve sıcak kırmızı accent ile kurar; 112 monokromdur, serif yalnız display'de ve renk yoktur.
- **Minimalizm (01) değildir:** 01'de mavi accent, gölgeli kartlar ve dolu butonlar vardır; 112'de accent = ink, gölge yok, dolu buton yok (radius 2px).

### Where it comes from
Sakin teknoloji (calm technology) ve ortam bilişimi (ambient computing) araştırmalarından gelir: bilgi dikkat çekmeden, çevrede durur; kullanıcı istediğinde yaklaşır. Bugün geri dönüyor çünkü asistanlar arayüzü konuşma/niyet katmanına taşıdı. Klişeye dönmemesi için korunacak detay: **katmanın kendiliğinden açılmaması** ve monokromun tutarlı uygulanması (ikinci renk girerse stil bozulur).

### Recognition test in 3 seconds
1. Ekranda dolu buton yok; eylemler altı çizili metin bağlantısı.
2. Hiçbir kartta gölge yok; bölümler yalnız 1px hairline ile ayrılıyor.
3. Vurgu rengi yok: en koyu renk `--ink`, accent da aynı ton.
4. Sayfa büyük ölçüde boş; görünür kontrol sayısı üçü geçmiyor.
5. Radius 2px: köşeler neredeyse keskin, hap biçim yalnız yok.

## Visual signature
- **Hairline katman:** tüm kartlar `1px solid var(--line)` (`rgba(31,33,29,.12)`), gölge `none`.
- **Niyet satırı:** 44px yüksekliğinde, alt çizgili tek giriş satırı; placeholder `--ink-faint`, odakta alt çizgi 2px `--ink`.
- **Monokrom accent:** `--accent: #26302a` = `--ink`'e komşu koyu ton; dolgu yalnız seçili durumda.
- **Sessiz tipografi:** H1 44px Fraunces 400, gövde 16px/1.68 — ağırlık farkı yok, hiyerarşi boyutla.
- **Boşluk ritmi:** bölüm arası 80px masaüstü / 40px mobil; satır aralığı geniş (1.68).
- **Hareket imzası:** 1100ms `cubic-bezier(.33,0,.12,1)`, yalnız 3px ve opacity — hareket neredeyse yok.
- **Landing hero (QA):** niyet satırları: yalnız hairline alt çizgiler (dolgu yok), odakta kalın çizgi — hero'da renk bloğu yok.
- **Typography:** Fraunces (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#26302a`; neutral scale `#f4f3ee` → `#1f211d`.
- **Radius:** `2px` / `6px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Görünür kontrol sayısı ekran başına en fazla 3: niyet satırı, tek öneri, tek geri bağlantısı
2. Her katman 1px hairline ile ayrılır; gölge ve dolu buton yok
3. Arayüz yalnız niyet/odak ile belirir; varsayılan durumda neredeyse boş bir sayfa
4. Klavye ile tam kullanım: Tab sırası görünür, `/` niyet satırına odaklanır, Esc kapatır
5. Accent = `--ink`: monokrom; durum bilgisi metinle yazılır
6. Sistem önerisi geldiğinde kaynağı yazılır: `BAĞLAMDAN ÖNERİ` mono etiketi

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4f3ee` | page background | as a card background |
| `--bg-2` | `#ecebe5` | partition divider floor, table top | button background |
| `--surface` | `#fdfcf8` | kart, input, modal | full-page background |
| `--surface-2` | `#f2f1eb` | passive chip, hover background | primary button |
| `--ink` | `#1f211d` | title, body, icon | large background |
| `--ink-soft` | `#4f544a` | secondary text, description | — |
| `--ink-faint` | `#83887c` | decorative label, separator text | interactive text |
| `--accent` | `#26302a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6f5ef` | text above accent | non-accent background |
| `--line` | `rgba(31,33,29,.12)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.61:1** · `ink-soft/bg` **7:1** · `ink-faint/bg` **3.27:1 (decorative)** · `accent-ink/accent` **12.5:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 44px (mobile 28px) | 600 | 1.12 | -0.02em |
| H2 | same | 30px | 600 | 1.22 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.16em |
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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Dolu buton, rozet yığını, ikon şeridi, gölgeli kart.
- İkinci accent rengi, gradyan, neon, renkli grafik paleti.
- İzin olmadan açılan popover/modal; otomatik oynayan medya.
- 1px üstü kalın çerçeve, 6px üstü radius (hap biçim).
- Aynı ekranda 3'ten fazla eylem.
- Kalın display ağırlığı (600+) ve bold başlık.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 13.3:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | çok düşük | tek niyet satırı + tek öneri + tek bağlantı | `shots/01-page.png` |
| Dashboard | çok düşük | üç hairline blok: bugün, sırada, not | `shots/01-page.png` |
| Form | çok düşük | alt çizgili input, etiket mono 11px | `shots/01-page.png` |
| Liste / tablo | düşük | 40px satır, yalnız hairline ayırıcı | `shots/01-page.png` |
| Boş durum | düşük | tek cümle + `/` ipucu | `shots/01-page.png` |
| Onboarding | düşük | üç hairline blok, her biri tek cümle | `shots/01-page.png` |
| Pricing | düşük | iki kolon, dolu buton yerine alt çizili bağlantı | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | iki alt çizgili alan + tek eylem | `shots/01-page.png` |
| Modal | düşük | sayfa yerinde kalır, tek soru satırı öne çıkar | `shots/01-page.png` |
| Bildirim / toast | düşük | kutusuz tek satır, sol altta | `shots/01-page.png` |
| Hata | düşük | alt çizgi `--danger` + mono hata satırı | `shots/01-page.png` |
| Profil / ayar | düşük | hairline bölümler, mono etiket, kaydet düğmesi yok (otomatik) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.61:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.27:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 12.5:1 | ≥ 4.5 | button text |
| focus ring/ground | 13.3:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96 | ≥ 60 target | thin text |

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
| Ekran "boş ve anlaşılmaz" | hiç kalıcı ipucu yok | tek satır `/ ile başla` ipucu ekle |
| Stil minimalizm'e kayıyor | accent rengi geri gelmiş | accent'i `--ink` ailesine sabitle |
| Katmanlar gölge taşıyor | kart bileşeni varsayılanı | `box-shadow: none` + 1px hairline |
| Okuma yoruyor | satır uzunluğu 80ch üzeri | `max-width: 58ch` |
| Buton görünmüyor | alt çizgi `--line` (çok soluk) | eylem alt çizgisi `--ink` 1px |
| Odak kayboluyor | outline kaldırılmış | 2px ink outline + 3px offset |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `academic-paper` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Calm_technology | Calm technology — dikkat çekmeden bilgi verme ilkeleri |
| https://en.wikipedia.org/wiki/Ambient_computing | Ambient computing — gömülü/bağlam temelli arayüz tanımı |
| https://en.wikipedia.org/wiki/Natural_user_interface | Natural user interface — niyet-öncelikli etkileşim modeli |
| https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html | WCAG 2.2 · On Focus — odakla kendiliğinden değişim yasağı |

## AI brief

```text
Stil: Sıfır Arayüz (styles/112-zero-ui/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="zero-ui"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Fraunces 44/30/21 (400, -.005em); --font-body Inter 16px/1.68;
  --font-mono IBM Plex Mono 11px etiket (.08em).
Yüzey: --bg / --surface + 1px var(--line); gölge YOK (--shadow: none). Radius --radius 2px, --radius-lg 6px.
Renk: monokrom — accent = ink ailesi (#26302a); ink/bg 14.61:1, ink-soft/bg 7.00:1,
  accent-ink/accent 12.50:1, ink-faint/bg 3.27:1 (dekoratif).
İmza: tek niyet satırı (alt çizgili input), dolu buton yerine altı çizili eylem, hairline katmanlar,
  ekran başına en fazla 3 görünür kontrol.
Hareket: enter 1100ms cubic-bezier(.33,0,.12,1) 3px stagger .185; scroll top 64% 1150ms 2px once;
  pin yok; hover 560ms görsel 1.000. prefers-reduced-motion zorunlu.
Yasak: dolu buton, gölge, ikinci accent rengi, izinsiz açılan katman, 6px üstü radius.
Çıktı: bileşen kodu + tek paragraf not (niyet satırını ve hairline katmanı nereye koydun).

Style: Sıfır Arayüz (zero-ui) · family: Interactive (106–115)
Token: --bg #f4f3ee · --surface #fdfcf8 · --ink #1f211d · --accent #26302a · --line rgba(31,33,29,.12)
Radius: 2px / 6px · Typography: Fraunces / Inter / IBM Plex Mono
Required: Görünür kontrol sayısı ekran başına en fazla 3: niyet satırı, tek öneri, tek geri bağlantısı · Her katman 1px hairline ile ayrılır; gölge ve dolu buton yok · Arayüz yalnız niyet/odak ile belirir; varsayılan durumda neredeyse boş bir sayfa
Banned: Dolu buton, rozet yığını, ikon şeridi, gölgeli kart. · İkinci accent rengi, gradyan, neon, renkli grafik paleti. · İzin olmadan açılan popover/modal; otomatik oynayan medya.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="zero-ui"] {
  --bg: #f4f3ee; --bg-2: #ecebe5;
  --surface: #fdfcf8; --surface-2: #f2f1eb;
  --ink: #1f211d; --ink-soft: #4f544a; --ink-faint: #83887c;
  --accent: #26302a; --accent-ink: #f6f5ef;
  --line: rgba(31,33,29,.12);
  --danger: #d6291d;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b45300;
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
  --shadow: none; --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0; --blur: 0px; --grain: 0;
}
```
