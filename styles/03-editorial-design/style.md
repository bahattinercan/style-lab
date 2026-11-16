# 03 · Editorial Design

> **In one sentence:** Dergi sayfası mantığı: serif display, kolon ritmi, drop cap, dipnot ve hairline — içerik anlatı gibi akar.

| | |
|---|---|
| **Feeling** | edebi, sakin otorite, "yavaş okuma" |
| **Best for** | blog/dergi, haber, uzun okuma ürünü, kültür kurumu, landing'de hikâye bölümü |
| **Avoid** | yoğun dashboard, anlık veri, oyun, e-ticaret listesi |
| **Difficulty** | orta-yüksek (tipografi ve ritim bakımı) · **Accessibility** |  |
| **Family** | Minimal (1–7) · **Token** | `kit/tokens.css` → `[data-style="editorial-design"]` |
| **Composition** | `type` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Basılı dergi/gazete dilinin ekrana taşınması: **serif display** (Fraunces/Playfair), **gövde sans** (Inter), **ölçülü satır uzunluğu (66–72ch)**, **drop cap**, **hairline kurallar**, **dipnot/etiket numaraları**. Hiyerarşi punto ve ağırlıkla kurulur; renk neredeyse yoktur, tek sıcak accent (terracotta) vardır.

Kazandığı şey: anlatı ve güven — metin okunur, taranır, hatırlanır. Feda ettiği şey: hız — bu stil yoğun veri ekranında nefes alamaz.

### What is not
- **Luxury Typography değildir.** Lüks seyrek ve geniş tracking'li; editorial **dolu** ve ritmik, dipnotlu.
- **Swiss Design değildir.** Swiss sans-serif + ızgara gösterisi; editorial serif + kolon ritmi.
- **Minimalism değildir.** Burada süs değil ama **doku** (grain), kural çizgisi ve drop cap bilinçli olarak var.
- **"Serif başlık" değildir.** Serif başlık + sans gövde + kolon ritmi + hairline olmadan sadece "şık blog" olur.
- **Dark Academia değildir.** O koyu ve arşiv; editorial açık kâğıt zemininde çalışır.

### Where it comes from
Gazete/dergi tipografisi ve Jan Tschichold'in kolon sistemleri; dijitalde Medium sonrası "okuma ürünü" dalgası. Haber siteleri ve uzun okuma odaklı ürünlerde (Substack, Ghost temaları) standart hale geldi.

### Recognition test in 3 seconds
1. Başlık **serif**, gövde **sans** mı?
2. Metin **kolonlu** (veya 66–72ch ölçülü) mi?
3. Hairline kural ve **drop cap** var mı?
4. Renk neredeyse yok, tek sıcak accent mi?
5. Gölge yok, kenarlıklar **1px** mi?

## Visual signature
- **Drop cap:** ilk harf 42px serif, 3 satır yüksekliğinde, `float: left`.
- **Hairline kural:** bölüm üstü 1px; başlık altı 2px accent kısa çubuk.
- **Kolon:** iki kolon + aralarında 1px dikey kural (32px gutter).
- **Numaralı etiket:** `01 / GİRİŞ`, mono, 10px, `0.2em`.
- **Grain:** `--grain: .04` — kâğıt hissi, görünür gürültü değil.
- **Görsel altı caption:** 12px, `--ink-faint`, italik serif.
- **Typography:** Fraunces (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#b4472f`; neutral scale `#fdfcf9` → `#141414`.
- **Radius:** `2px` / `4px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. **Serif display + sans gövde.** Fraunces (display) / Inter (gövde) ayrımı her ekranda korunur.
2. **Ölçülü satır:** gövde 66–72ch, iki kolonda 46ch; satır aralığı 1.65.
3. **Kolon ritmi:** geniş ekranda 2 kolon; kolon arası 32px + 1px dikey kural.
4. **Hairline:** tüm ayırıcılar 1px `--line` (0.14 opaklık); gölge yok.
5. **Drop cap** yalnızca açılış paragrafında, 3 satır derinliğinde.
6. **Tek sıcak accent** (terracotta) ≤ %8 alan; bağlantı ve tek vurgu.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fdfcf9` | page background | as a card background |
| `--bg-2` | `#f4f1ea` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#faf8f3` | passive chip, hover background | primary button |
| `--ink` | `#141414` | title, body, icon | large background |
| `--ink-soft` | `#56504a` | secondary text, description | — |
| `--ink-faint` | `#8e8880` | decorative label, separator text | interactive text |
| `--accent` | `#b4472f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(20,20,20,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.96:1** · `ink-soft/bg` **7.75:1** · `ink-faint/bg` **3.42:1 (decorative)** · `accent-ink/accent` **5.41:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 60px (mobile 34px) | 600 | 1.12 | -0.02em |
| H2 | same | 32px | 600 | 1.22 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 17px | 400 | 1.55 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.16em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Gölge, gradient, cam, radius > 4px.
- 12px altı gövde metni; 1.4 altı satır aralığı.
- İkiden fazla font ailesi (serif + sans + mono etiket sınırı).
- Ortalanmış uzun metin; 90ch üzeri satır.
- Dekoratif illüstrasyon, 3B ikon, emoji başlık.
- Tam genişlik ekran görselini metinsiz kullanmak (caption zorunlu).
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.41:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 60px serif başlık, altında 66ch lede, sol 3px accent çubuk, sağda kolonlu görsel + caption | `shots/01-page.png` |
| Dashboard | düşük | Dergi dili geri çekilir: sans gövde, hairline kural, mono sayılar; serif sadece başlıkta | `shots/01-page.png` |
| Form | düşük | 520px tek sütun, etiket 12px mono, input alt kenar vurgulu | `shots/01-page.png` |
| Liste / tablo | düşük | 44px satır, hairline; başlık satırı mono uppercase | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + tek bağlantı; illüstrasyon yerine hairline kutu | `shots/01-page.png` |
| Onboarding / makale | yüksek | Drop cap, iki kolon, dipnot numaraları, alıntı bloğu | `shots/01-page.png` |
| Pricing | orta | 3 kolon, orta kolon 1px accent kenar; fiyat serif 40px | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | 420px kart, hairline, tek accent buton | `shots/01-page.png` |
| Modal | orta | 4px radius, 1px kenar, serif başlık | `shots/01-page.png` |
| Bildirim / toast | düşük | Koyu zemin + serif olmayan 13px metin | `shots/01-page.png` |
| Hata | düşük | 1px `--danger` kenar + 13px açıklama, utanç vermeyen dil | `shots/01-page.png` |
| Profil / ayar | orta | 8/4 kolon, bölüm başlıkları serif, ayar satırı 52px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.96:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.75:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.42:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.41:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.41:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 103.3 | ≥ 60 target | thin text |

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
| "Şık blog" görünüyor | Kolon ritmi ve hairline yok | 2 kolon + 1px dikey kural + drop cap ekle |
| Okuma yorucu | 90ch satır, 1.4 satır aralığı | 66–72ch, 1.65 |
| Serif her yerde | Serif gövdeye taşmış | Serif yalnızca display/alıntı; gövde sans |
| Dağınık | 3+ font, 4 renk | Serif + sans + mono; tek accent |
| Yavaş | Her paragrafta fade-in | Animasyonu bölüm başlıklarıyla sınırla |
| Mobilde taşma | 60px sabit başlık | `clamp()` ile 34px |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `synthwave` | Two different ornamental languages compete on the same screen |
| Mixing | `bento-grid` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.nytimes.com | NYTimes — Kolon ritmi, caption ve dipnot dili |
| https://ghost.org | Ghost — Editorial landing ve tipografi ölçeği |
| https://fonts.google.com/specimen/Fraunces | Fraunces — Display ekseni (SOFT/WONK) kullanımı |

## AI brief

```text
Stil: Editorial Design (styles/03-editorial-design/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="editorial-design"]; hard-coded renk/ölçü YASAK.
Tipografi: Fraunces display (400, -0.02em, 1.04) + Inter gövde (17/1.65, 0); etiket mono 10–12 uppercase 0.2em.
Ölçü: gövde 66–72ch (bölüm 2 kolonda 46ch); bölüm dikey 64px; kart padding 24px.
Yüzey: radius 2/4px, gölge yok; ayırıcı 1px --line hairline.
İmza: açılış paragrafında drop cap (42px, 3 satır), sol 3px accent çubuk, görsel altı caption zorunlu.
Renk: tek accent #b4472f ≤ %8 alan; link rengi mavi DEĞİL accent.
Hareket: 120–300ms ease-out, sadece opacity/translate; okuma akışında parallax yasak.
Yasak: gölge, gradient, radius > 4px, 12px altı gövde, 3+ font, ortalanmış uzun metin.
Çıktı: kod + tek paragraf not (kolon ölçüsü ve tipografi rollerini nasıl korudun).

Style: Editorial Design (editorial-design) · family: Minimal (1–7)
Token: --bg #fdfcf9 · --surface #ffffff · --ink #141414 · --accent #b4472f · --line rgba(20,20,20,.14)
Radius: 2px / 4px · Typography: Fraunces / Inter / IBM Plex Mono
Required: **Serif display + sans gövde.** Fraunces (display) / Inter (gövde) ayrımı her ekranda korunur. · **Ölçülü satır:** gövde 66–72ch, iki kolonda 46ch; satır aralığı 1.65. · **Kolon ritmi:** geniş ekranda 2 kolon; kolon arası 32px + 1px dikey kural.
Banned: Gölge, gradient, cam, radius > 4px. · 12px altı gövde metni; 1.4 altı satır aralığı. · İkiden fazla font ailesi (serif + sans + mono etiket sınırı).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="editorial-design"] {
  --bg: #fdfcf9; --bg-2: #f4f1ea;
  --surface: #ffffff; --surface-2: #faf8f3;
  --ink: #141414; --ink-soft: #56504a; --ink-faint: #8e8880;
  --accent: #b4472f; --accent-ink: #ffffff;
  --line: rgba(20,20,20,.14);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00873e;
  --ok-ink: #ffffff;
  --warn: #bb5900;
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
  --shadow: none; --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
