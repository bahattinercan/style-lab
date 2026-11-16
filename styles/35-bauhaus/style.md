# 35 · Bauhaus

> **In one sentence:** Bauhaus

| | |
|---|---|
| **Feeling** | cesur, akılcı, dönemsel, "afiş" |
| **Best for** | kültür/sanat kurumu, ajans vitrini, etkinlik afişi, eğitim platformu |
| **Avoid** | sağlık verisi, finans işlemi, uzun okuma, kurumsal B2B form |
| **Difficulty** | orta (denge ve renk bütçesi) · **Accessibility** |  |
| **Family** | Geometric (35–36) · **Token** | `kit/tokens.css` → `[data-style="bauhaus"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Bauhaus (1919–1933) tasarım okulunun dili: **temel geometri** (daire, kare, üçgen), **temel renkler** (kırmızı, sarı, mavi + siyah), **kalın çizgi**, **asimetrik denge** ve işlevsel tipografi. Süs yoktur; ritim geometriden gelir.

Kazandığı şey: anında tanınan, yüksek enerjili bir kimlik. Feda ettiği şey: nüans — yoğun veri ekranlarında geometri gürültüye dönüşür.

### What is not
- **Swiss Design değildir.** Swiss ızgara ve tipografik hiyerarşi; Bauhaus **şekil ve renk** kompozisyonu.
- **Neo-brutalism değildir.** Neo-brutalism gölge/offset ve dijital estetik; Bauhaus düz renk ve çizgi.
- **Memphis değildir.** Memphis oyuncu/dağınık; Bauhaus disiplinli ve simetrik olmayan dengede.
- **"Kalın kenarlık" değildir.** Daire/kare/üçgen kompozisyonu olmadan sadece sert bir arayüz kalır.

### Where it comes from
Bauhaus afişleri, Kandinsky/Klee kompozisyon dersleri, 20. yüzyıl grafik tasarımı; bugün kültür kurumları ve tasarım stüdyoları.

### Recognition test in 3 seconds
1. Kalın (≥2px) siyah çizgi/kenarlık var mı?
2. Daire + kare + üçgen aynı kompozisyonda mı?
3. Palet 3 renk + siyah mı (kırmızı başat)?
4. Radius 0 mı, gölge yok mu (ya da tek blok gölge)?
5. Başlıklar büyük harf ve çok kalın mı?

## Visual signature
- **Kalın çerçeve:** `2px solid var(--ink)` panel, `3px` bölüm ayırıcı.
- **Daire:** `border-radius: 50%`, accent dolgu, 90–140px.
- **Kare/döndörtgen:** 0 radius, düz accent veya `--surface-2`.
- **Üçgen:** CSS border ile, yönü kompozisyona göre.
- **Uppercase display:** Archivo Black, 0 tracking, satır 1.02.
- **Blok gölge:** `4px 4px 0 var(--ink)` (yalnız kart/buton, tek katman).
- **Typography:** Archivo Black (display) + Jost (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#d92b2b`; neutral scale `#f2ece1` → `#16161a`.
- **Radius:** `0px` / `0px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. **Geometri bütçesi:** ekran başına 3–5 temel şekil; her şekil bir işlev taşır (vurgu, ayırıcı, arka plan).
2. **Kalın çizgi:** panel/buton kenarı `2px var(--ink)`; ayırıcı `3px`.
3. **Renk bütçesi:** nötr (krem/siyah) + tek kırmızı; sarı/mavi yalnız grafik/illüstrasyonda.
4. **Radius 0**, gölge yok; gerekiyorsa `--shadow-hard` (4px blok).
5. **Tipografi:** Archivo Black başlık (uppercase, 0 tracking), Jost gövde; gövde 15–16px.
6. **Asimetri:** kompozisyon 2:1 veya 3:2 ağırlıkla; her şey ortalanmaz.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2ece1` | page background | as a card background |
| `--bg-2` | `#e6ddcd` | partition divider floor, table top | button background |
| `--surface` | `#fffdf8` | kart, input, modal | full-page background |
| `--surface-2` | `#efe7d8` | passive chip, hover background | primary button |
| `--ink` | `#16161a` | title, body, icon | large background |
| `--ink-soft` | `#55524b` | secondary text, description | — |
| `--ink-faint` | `#7d776b` | decorative label, separator text | interactive text |
| `--accent` | `#d92b2b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fffdf8` | text above accent | non-accent background |
| `--line` | `#16161a` | all borders | text colour |

- Measured contrast: `ink/bg` **15.35:1** · `ink-soft/bg` **6.63:1** · `ink-faint/bg` **3.78:1 (decorative)** · `accent-ink/accent` **4.77:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 58px (mobile 28px) | 600 | 1.12 | -0.02em |
| H2 | same | 24px | 600 | 1.22 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 15.5px | 400 | 1.55 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.16em |
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
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Gradient, blur, cam, yumuşak gölge.
- 4+ renk; pastel tonlar.
- Yuvarlak köşe (radius > 0) — neon-brutalism'e kayar.
- Süs ikonu/illüstrasyon yığını (3–5 şekil sınırı).
- İnce (1px) kenarlıkla "minimal" taklidi.
- Yoğun tabloda büyük geometrik blok.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.77:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing/hero | yüksek | 46px uppercase başlık, 7/5 asimetri, 1 daire + 1 kare, tek kırmızı buton | `shots/01-page.png` |
| Dashboard | düşük | Şekiller kapanır; KPI'lar 3px üst çizgi ile ayrılır, kırmızı yalnız pozitif/negatif farkta | `shots/01-page.png` |
| Form | düşük | 2px kenarlı input, tek sütun 460px, etiket uppercase mono | `shots/01-page.png` |
| Liste/tablo | çok düşük | Kalın başlık çizgisi, satır 52px, geometri yok | `shots/01-page.png` |
| Boş durum | orta | Tek daire + tek cümle + tek buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına bir temel şekil (daire→kare→üçgen) | `shots/01-page.png` |
| Pricing | orta | 3 kart, orta kart 3px ink + blok gölge, kırmızı "seç" | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Şekil yok, 2px kenarlı form; güven için sade | `shots/01-page.png` |
| Modal | orta | 3px ink çerçeve, blok gölge, 2 buton sağa | `shots/01-page.png` |
| Toast | düşük | Siyah bar + krem metin, sol kenarda 4px kırmızı | `shots/01-page.png` |
| Hata | düşük | Kırmızı 3px sol çizgi + 14px metin | `shots/01-page.png` |
| Profil/ayar | düşük | Kalın ayırıcılar, geometri yok | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.35:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.63:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.78:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.77:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.77:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.8 | ≥ 60 target | thin text |

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
| "Neo-brutalism" gibi duruyor | Sadece kalın kenar + gölge | Daire/kare/üçgen kompozisyonu ekle |
| Yorgun/dağınık | 6+ şekil, 4+ renk | Şekil 3–5, renk 3+siyah |
| Kurumsal güven kaybı | Ödeme ekranında afiş dili | O ekranda geometriyi kapat |
| Okunmuyor | Uppercase gövde, 22px Archivo | Gövde Jost 15.5, başlık ≥24px |
| Dönemsel taklit | Sarı/mavi her yerde | Renk bütçesi: tek kırmızı |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `memphis` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.bauhaus-dessau.de | Bauhaus Dessau — Dönem afişleri, kompozisyon ilkeleri |
| https://fonts.google.com/specimen/Archivo+Black | Archivo Black — Display |
| https://fonts.google.com/specimen/Jost | Jost — Geometrik gövde |

## AI brief

```text
Stil: Bauhaus (styles/35-bauhaus/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="bauhaus"]; hard-coded renk YASAK.
Geometri: ekran başına 3–5 temel şekil (daire/kare/üçgen); her şekil bir işlev taşır.
Çizgi: panel/buton 2px var(--ink), bölüm ayırıcı 3px. Radius 0; gölge yok (gerekiyorsa 4px blok).
Renk: krem #f2ece1 + siyah #16161a + tek kırmızı #d92b2b (üstünde krem, 4.77:1). Sarı/mavi yalnız illüstrasyon.
Tipografi: Archivo Black uppercase başlık (≥24px, 0 tracking) + Jost gövde 15.5/1.6; etiket Space Mono 10 uppercase.
Düzen: asimetri (7/5 veya 8/4); ortalanmış 6/6 kompozisyon yasak.
Hareket: 100–260ms; reduced-motion'da 0.01ms; sürekli dönen şekil yasak.
Yasak: gradient/blur/cam, 4+ renk, radius>0, ince 1px kenarla minimal taklidi.
Çıktı: kod + tek paragraf not (kaç şekil, hangi ağırlıkta asimetri).

Style: Bauhaus (bauhaus) · family: Geometric (35–36)
Token: --bg #f2ece1 · --surface #fffdf8 · --ink #16161a · --accent #d92b2b · --line #16161a
Radius: 0px / 0px · Typography: Archivo Black / Jost / Space Mono
Required: **Geometri bütçesi:** ekran başına 3–5 temel şekil; her şekil bir işlev taşır (vurgu, ayırıcı, arka plan). · **Kalın çizgi:** panel/buton kenarı `2px var(--ink)`; ayırıcı `3px`. · **Renk bütçesi:** nötr (krem/siyah) + tek kırmızı; sarı/mavi yalnız grafik/illüstrasyonda.
Banned: Gradient, blur, cam, yumuşak gölge. · 4+ renk; pastel tonlar. · Yuvarlak köşe (radius > 0) — neon-brutalism'e kayar.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="bauhaus"] {
  --bg: #f2ece1; --bg-2: #e6ddcd;
  --surface: #fffdf8; --surface-2: #efe7d8;
  --ink: #16161a; --ink-soft: #55524b; --ink-faint: #7d776b;
  --accent: #d92b2b; --accent-ink: #fffdf8;
  --line: #16161a;
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
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
