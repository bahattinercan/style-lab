# 108 · Komut Paleti

> **In one sentence:** Fare olmadan çalışan stil: koyu grafit zemin, blur ile karartılmış arka plan, 44px komut satırları, keycap chip'ler ve tek açık (chalk) accent.

| | |
|---|---|
| **Feeling** | hızlı, kesin, klavye-öncelikli, sessiz |
| **Best for** | geliştirici aracı, proje yönetimi klavye katmanı, komut satırı eklentisi, güç kullanıcı arayüzü |
| **Avoid** | vitrin/landing, görsel pazarlama, çocuk uygulaması — palet dili duygusal anlatım taşımaz |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="command-palette"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Komut Paleti, arayüzü **tek bir arama kutusu + satır listesi** olarak kurar: 52px arama alanı, 44px komut satırları, sağda keycap chip'ler (⌘K), seçim için açık (chalk) accent dolgu ve arka planda blur ile karartılmış içerik. Görsel zenginliği feda eder; karşılığında **saniyeler içinde eylem** kazandırır.

Kurucu kararları üç tanedir. Birincisi **accent açıktır**: `--accent` neredeyse beyaz (`#e8ecf2`), metin koyu; bu, seçim satırını "vurgu" değil "ışık" gibi gösterir ve karanlık arayüzde en yüksek okunurluğu verir. İkincisi **her eylem kısayollu**: satırda kısayol yoksa eylem palete girmez. Üçüncüsü **tek yüzen katman**: yalnız palet gölge taşır; satırlar gölgesizdir.

Bedeli: keşfedilebilirlik — kullanıcı komutları bilmezse palet boş görünür. Bu yüzden palet açıldığında ilk 5 satır "önerilen" olarak dolu gelir.

### What is not
- **Terminal UI (45) değildir:** 45 tüm ekranı terminale çevirir, monospace her yerdedir ve 0–2px radius kullanır; 108 yalnız **geçici bir katman**dır, gövde Inter, radius 6/12px.
- **Utility (44) değildir:** 44 açık zeminli ürün arayüzüdür ve mavi accent taşır; 108 koyu zemin + chalk accent + keycap dili.
- **Log Stream (49) değildir:** 49 akan olay satırlarıdır (okuma), 108 komut satırlarıdır (eylem) ve seçim dolgusu taşır.
- **Trading Desk (47) değildir:** 47 amber vurgulu finans ekranıdır; 108'de renkli vurgu yok, tek açık accent var.

### Where it comes from
Editör komut paletlerinden (VS Code, Sublime) ve 2020'lerin "launcher" uygulamalarından (Raycast/Spotlight çizgisi). Bugün önemli çünkü ürünlerde eylem sayısı arttı; menü hiyerarşisi yerine tek arama kutusu daha hızlı. Klişeye dönmemesi için korunacak detay: **satır yüksekliği 44px** ve **kısayolsuz eylem olmaması**.

### Recognition test in 3 seconds
1. Zemin koyu grafit; arka plan içerik blur ile karartılmış.
2. Arama alanı 52px, komut satırları 44px ve mono kısayol chip'leri sağda.
3. Seçili satır açık (chalk) dolgu + koyu metin; gölge yok.
4. Tüm etiketler mono, `.06em` tracking; radius 6/12px.
5. Renkli vurgu yok: tek açık accent + nötr gri skala.

## Visual signature
- **Chalk accent:** `--accent: #e8ecf2`, `--accent-ink: #14171c`; seçim satırı ve birincil eylem.
- **Keycap chip:** 20px yükseklik, 4px radius, mono 11px 600, ⌘/⇧/↵ sembolleri.
- **Satır ritmi:** arama 52px, satır 44px, alt kısayol şeridi 32px; görünür alanda en fazla 8 satır.
- **Blur arka plan:** palet dışı içerik `blur var(--blur)` = 12px + `--bg` %60 karartma.
- **Tek gölge:** palet `0 24px 60px rgba(0,0,0,.55)`; başka hiçbir öğe gölge taşımaz.
- **Fuzzy eşleşme vurgusu:** eşleşen harfler `--accent` metin; dolgu değil.
- **Hareket imzası:** 190ms `cubic-bezier(.05,.9,.1,1)`, 5px — palet anlıktır, süzülmez.
- **Landing hero (QA):** 8 satırlık komut paleti: 52px arama şeridi, seçili satır accent %10, sağda keycap sütunu, `esc` altbilgisi.
- **Typography:** JetBrains Mono (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#e8ecf2`; neutral scale `#111318` → `#eef0f3`.
- **Radius:** `6px` / `12px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Klavye öncelikli: her eylem bir kısayolla erişilebilir ve kısayol satırda görünür
2. Palet satırı 44px, arama alanı 52px; satır sayısı görünür alanda en fazla 8
3. Seçim yalnız accent dolgu + sol 2px çizgi ile işaretlenir; gölge kullanılmaz
4. Accent açık (chalk) tondur; metin accent üstünde koyu accent-ink olur
5. Açık palet arka planı blur + karartma ile ayrılır; palet dışı içerik etkileşimsiz
6. Tüm kısayollar mono ve 11px; keycap chip 20px/4px radius

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#111318` | page background | as a card background |
| `--bg-2` | `#16191f` | partition divider floor, table top | button background |
| `--surface` | `#1b1f26` | kart, input, modal | full-page background |
| `--surface-2` | `#222731` | passive chip, hover background | primary button |
| `--ink` | `#eef0f3` | title, body, icon | large background |
| `--ink-soft` | `#a9b1bc` | secondary text, description | — |
| `--ink-faint` | `#767e8a` | decorative label, separator text | interactive text |
| `--accent` | `#e8ecf2` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#14171c` | text above accent | non-accent background |
| `--line` | `rgba(238,240,243,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.28:1** · `ink-soft/bg` **8.58:1** · `ink-faint/bg` **4.53:1 (decorative)** · `accent-ink/accent` **15.15:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (JetBrains Mono) | 30px (mobile 22px) | 600 | 1.12 | -0.02em |
| H2 | same | 22px | 600 | 1.22 | -0.015em |
| H3 | same | 17px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.55 | 0 |
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
- Radius: `6px` (buton, input, chip), `12px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Kısayolsuz eylem (palete giremez).
- Büyük hero görseli ve dekoratif illüstrasyon.
- Geniş hap radius, kalın çerçeve.
- Çoklu parlak renk (tek chalk accent).
- Gölgeli satır / iç gölge.
- Serif display.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 15.67:1 (≥ 3 on background/surface).
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
| Landing / hero | düşük | H1 30px mono + tek "⌘K ile başla" CTA; görsel yok | `shots/01-page.png` |
| Dashboard | düşük | palet katmanı açılır; arka plan blur + %60 karartma | `shots/01-page.png` |
| Form | düşük | 52px arama + 44px satır; klavye ile tam gezinme | `shots/01-page.png` |
| Liste / tablo | düşük | 8 satır sınırı, sağda kısayol kolonu | `shots/01-page.png` |
| Boş durum | orta | "Komut bulunamadı" + önerilen 3 komut | `shots/01-page.png` |
| Onboarding | orta | ⌘K tanıtımı: 3 kısayol kartı | `shots/01-page.png` |
| Pricing | orta | plan tablosu satır bazlı; öne çıkan satır accent dolgu | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | palet yok; sade form, kısayol ipuçları | `shots/01-page.png` |
| Modal | orta | palet modalı: arama + liste + alt kısayol şeridi | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sağ, mono kısa metin | `shots/01-page.png` |
| Hata | düşük | `--danger` metin + nokta; palet kapanmaz | `shots/01-page.png` |
| Profil / ayar | orta | kısayol eşleme tablosu (mono) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.28:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.58:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.53:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 15.15:1 | ≥ 4.5 | button text |
| focus ring/ground | 15.67:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.3 | ≥ 60 target | thin text |

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
| Palet "form" gibi görünüyor | satır yüksekliği 56px+ | 44px satır, 52px arama |
| Kısayollar görünmüyor | chip sağa hizalanmamış | satırda `margin-left: auto` mono chip |
| Seçim okunmuyor | accent renkli (mavi) kullanılmış | chalk accent + koyu metin |
| Arka plan dikkat çalıyor | karartma yok | blur 12px + %60 karartma |
| Fare bağımlılığı | kısayolsuz eylem | eylem eklerken kısayol zorunlu |
| Mobilde sıkışık | 44px satır korunmuş | 768 altı 48px, tam genişlik |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `log-stream` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.nngroup.com/articles/command-palette/ | Command palette (pattern) — satır yoğunluğu ve kısayol gösterimi |
| https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette | VS Code Command Palette docs — eylem adlandırma ve filtreleme |
| https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ | WAI-ARIA · combobox — liste/arama erişilebilirlik modeli |
| https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html | WCAG 2.2 · Keyboard — klavye ile tam erişim |

## AI brief

```text
Stil: Komut Paleti (styles/108-command-palette/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="command-palette"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg grafit; palet açıkken arka plan blur var(--blur)=12px + %60 karartma (opak fallback).
Tipografi: --font-display JetBrains Mono 30/22/17 (600); --font-body Inter 14px/1.5;
  --font-mono JetBrains Mono 11px kısayol chip (.06em).
Yüzey: --bg / palet --surface + tek gölge 0 24px 60px rgba(0,0,0,.55); satırlar gölgesiz.
  Radius 6px kontrol, 12px palet; keycap chip 4px/20px.
Renk: accent AÇIK chalk #e8ecf2, accent-ink #14171c (seçim dolgusu); renkli vurgu yok.
  ink/bg 16.28:1, ink-soft/bg 8.58:1, accent-ink/accent 15.15:1, ink-faint/bg 4.53:1.
Bileşen: arama 52px, satır 44px (mobil 48px), keycap chip 20px; odak 2px accent + 2px offset.
Hareket: enter 190ms cubic-bezier(.05,.9,.1,1) 5px stagger .018; scroll top 97% 170ms 4px once;
  pin yok; hover 65ms görsel 1.000. prefers-reduced-motion zorunlu (anlık açılış).
Yasak: kısayolsuz eylem, hero görseli, hap radius, çoklu parlak renk, gölgeli satır, serif.
Çıktı: bileşen kodu + tek paragraf not (seçim dolgusunu ve kısayol chip'ini nereye koydun).

Style: Komut Paleti (command-palette) · family: Interactive (106–115)
Token: --bg #111318 · --surface #1b1f26 · --ink #eef0f3 · --accent #e8ecf2 · --line rgba(238,240,243,.14)
Radius: 6px / 12px · Typography: JetBrains Mono / Inter / JetBrains Mono
Required: Klavye öncelikli: her eylem bir kısayolla erişilebilir ve kısayol satırda görünür · Palet satırı 44px, arama alanı 52px; satır sayısı görünür alanda en fazla 8 · Seçim yalnız accent dolgu + sol 2px çizgi ile işaretlenir; gölge kullanılmaz
Banned: Kısayolsuz eylem (palete giremez). · Büyük hero görseli ve dekoratif illüstrasyon. · Geniş hap radius, kalın çerçeve.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="command-palette"] {
  --bg: #111318; --bg-2: #16191f;
  --surface: #1b1f26; --surface-2: #222731;
  --ink: #eef0f3; --ink-soft: #a9b1bc; --ink-faint: #767e8a;
  --accent: #e8ecf2; --accent-ink: #14171c;
  --line: rgba(238,240,243,.14);
  --danger: #e73d2d;
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
  --radius: 6px; --radius-lg: 12px;
  --shadow: 0 24px 60px rgba(0,0,0,.55); --shadow-hard: none;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
