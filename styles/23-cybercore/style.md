# 23 · Cybercore

> **In one sentence:** Terminalden taşan arayüz: fosfor yeşili mono tipografi, log satırları, HUD çerçeveleri ve 0 radius.

| | |
|---|---|
| **Feeling** | teknik, gizli, kesin, "sistem konsolu" |
| **Best for** | geliştirici aracı, güvenlik/observability, AI altyapı ürünü, teknik dokümantasyon |
| **Avoid** | tüketici alışverişi, çocuk, wellness, görsel ağırlıklı marka |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="cybercore"]` |
| **Composition** | `split-reverse` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Cybercore, CLI/terminal dilini arayüze taşır: **siyah-yeşil zemin**, **fosfor yeşili mono** (JetBrains Mono her yerde), `>` prompt işaretleri, log satırları, `[ OK ]` / `[ WARN ]` etiketleri, ince HUD çerçeveleri ve **0 radius**. Amaç "sistemin içini görüyorsun" hissi.

Kazandığı şey: teknik otorite ve şeffaflık. Feda ettiği şey: sıcaklık; ayrıca mono gövde uzun okumada yorar.

### What is not
- **Cyberpunk değildir.** Cyberpunk sokak/neon; cybercore konsol/veri.
- **Kod editörü teması değildir.** Prompt işaretleri, log hiyerarşisi ve HUD çerçeve olmadan sadece "koyu tema" olur.
- **"Yeşil yazı" değildir.** Renk kodu (OK yeşil, WARN sarı, ERR kırmızı) ve mono ölçek gerekir.
- **Matrix klişesi değildir.** Yağmur animasyonu yok; statik ve okunur.

### Where it comes from
Terminal estetiği, eski BBS/konsol arayüzleri ve "developer-first" ürün dalgası (observability, AI altyapı).

### Recognition test in 3 seconds
1. Zemin neredeyse siyah ve yeşil fosforlu mu (#05080a / #33ff99)?
2. Tüm metin mono mu (JetBrains Mono)?
3. Prompt/log işaretleri var mı (`>`, `[ OK ]`, `$`)?
4. Radius 0 mı, HUD çerçeveleri ince mi?
5. Yeşil dışında yalnız durum renkleri (WARN/ERR) mi?

## Visual signature
- **Fosfor yeşili:** `#33ff99`; üstünde siyah metin.
- **Prompt:** `> ` öneki başlıklarda, mono, yeşil.
- **Log satırı:** `[ OK ]`, `[ WARN ]`, `[ ERR ]` etiketleri; mono 11px.
- **HUD çerçeve:** 1px yeşil %35, köşe braketleri opsiyonel.
- **Scanline .06** + grain .06 (CRT hissi, abartısız).
- **Radius 0**, keskin grid.
- **Typography:** JetBrains Mono (display) + JetBrains Mono (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#33ff99`; neutral scale `#05080a` → `#d7ffe9`.
- **Radius:** `0px` / `2px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Mono tek aile:** başlık, gövde, etiket — hepsi JetBrains Mono; display'de 700.
2. **Renk kodu:** `--accent` yeşil = normal/OK; `--warn` sarı; `--danger` kırmızı. Renk **anlam** taşır.
3. **Prompt işareti:** bölüm başlıklarında `>` veya `~/` öneki; her başlıkta değil.
4. **Radius 0** (istisna 2px), HUD çerçeve 1px `--line`.
5. **Gövde 15px / 1.65** — mono okunurluğu için satır aralığı ferah.
6. **Glow ölçülü:** `0 0 10px accent %28`, ekran başına ≤ 3 öğe.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#05080a` | page background | as a card background |
| `--bg-2` | `#0a1014` | partition divider floor, table top | button background |
| `--surface` | `#0a1014` | kart, input, modal | full-page background |
| `--surface-2` | `#0f171c` | passive chip, hover background | primary button |
| `--ink` | `#d7ffe9` | title, body, icon | large background |
| `--ink-soft` | `#86c9a6` | secondary text, description | — |
| `--ink-faint` | `#4d7a63` | decorative label, separator text | interactive text |
| `--accent` | `#33ff99` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#05080a` | text above accent | non-accent background |
| `--line` | `rgba(51,255,153,.35)` | all borders | text colour |

- Measured contrast: `ink/bg` **18.53:1** · `ink-soft/bg` **10.44:1** · `ink-faint/bg` **4.09:1 (decorative)** · `accent-ink/accent` **15.21:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (JetBrains Mono) | 40px (mobile 24px) | 700 | 1.1 | 0.01em |
| H2 | same | 22px | 600 | 1.2 | 0.01em |
| H3 | same | 16px | 600 | 1.3 | 0 |
| Body | `--font-body` (JetBrains Mono) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.2em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Numbers are taboos; score/timer areas are mono and right aligned. Title in uppercase, body in sentence order.
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

- The screen grid acts like a visible frame: a 1px accent border is placed between sections, no decorative lines are added.
- Section vertical space 64px desktop, 40px mobile; card padding 18px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are opaque; There is no glass/blur. Thin accent edge is used for status notification.
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Sans-serif gövde (terminal hissi biter).
- Üçüncü neon renk; renk kodunu dekorasyon olarak kullanmak.
- Radius > 2px, yumuşak gölge, cam.
- Matrix yağmuru / sürekli scroll eden log (rahatsız edici).
- Renk tek başına anlam (her durum etiketi metinle).
- 13px altı gövde (mono + küçük = okunmaz).
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 15.21:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing/hero | yüksek | `>` prompt başlık, log şeridi, HUD panel, tek yeşil CTA | `shots/01-page.png` |
| Dashboard | yüksek | Mono metrikler + log listesi + ASCII sparkline | `shots/01-page.png` |
| Form | düşük | Tek sütun, keskin input, durum etiketi | `shots/01-page.png` |
| Liste/tablo | yüksek | Yoğun tablo, mono, 1px ayırıcı; zebra yok | `shots/01-page.png` |
| Boş durum | orta | `[ NO DATA ]` + tek komut önerisi | `shots/01-page.png` |
| Onboarding | orta | Adım başına 1 komut satırı | `shots/01-page.png` |
| Pricing | düşük | Tablo formatında karşılaştırma | `shots/01-page.png` |
| Giriş/ödeme | düşük | Sade form, durum etiketi; süs yok | `shots/01-page.png` |
| Modal | orta | HUD panel + glow | `shots/01-page.png` |
| Toast | orta | Durum renkli mono pill | `shots/01-page.png` |
| Hata | yüksek | `[ ERR ]` + neden + çözüm komutu | `shots/01-page.png` |
| Profil/ayar | orta | Anahtar-değer listesi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 18.53:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 10.44:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.09:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 15.21:1 | ≥ 4.5 | button text |
| focus ring/ground | 15.21:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 101.7 | ≥ 60 target | thin text |

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
| Okunmuyor | Mono 12px + yoğun satır | 15px/1.65, ölçü 68ch |
| "Kod editörü" gibi | Prompt/log hiyerarşisi yok | `>` öneki + durum etiketleri |
| Klişe | Matrix yağmuru / sürekli log | Statik, ölçülü scanline |
| Kimlik kaybı | Sans gövde kullanılmış | Tamamı mono |
| Yorgunluk | Glow her öğede | Glow ≤ 3 öğe |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `cyberpunk` | Same level of seriousness; accent sharing is not allowed |
| garnish | `conceptual-sketch` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/JetBrains+Mono | JetBrains Mono — Mono ölçek ve ağırlıklar |
| https://www.nngroup.com/articles/monospace-fonts/ | NN/g · Monospace — Mono okunurluk sınırları |
| https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric | MDN font-variant-numeric — Tabular sayılar |

## AI brief

```text
Stil: Cybercore (styles/23-cybercore/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="cybercore"]; hard-coded renk YASAK.
Tek aile: JetBrains Mono (başlık 700, gövde 400 15/1.65). Sans gövde YASAK.
Renk kodu: yeşil #33ff99 (OK/CTA, üstünde siyah 15.21:1), sarı = WARN, kırmızı = ERR; renk tek başına anlam taşımaz.
İmza: `>` prompt öneki bölüm başlıklarında, `[ OK ]/[ WARN ]/[ ERR ]` etiketleri, 1px HUD çerçeve, radius 0.
Doku: scanline .06 + grain .06; glow ≤ 3 öğe (0 0 10px accent %28).
Hareket: 90–240ms steps(4); sürekli akan log YASAK; reduced-motion'da scanline durur.
Ödeme/giriş: sade form, durum etiketi; süs yok.
Çıktı: kod + tek paragraf not (mono ölçek ve renk kodu disiplini).

Style: Cybercore (cybercore) · family: Retro (19–27)
Token: --bg #05080a · --surface #0a1014 · --ink #d7ffe9 · --accent #33ff99 · --line rgba(51,255,153,.35)
Radius: 0px / 2px · Typography: JetBrains Mono / JetBrains Mono / JetBrains Mono
Required: **Mono tek aile:** başlık, gövde, etiket — hepsi JetBrains Mono; display'de 700. · **Renk kodu:** `--accent` yeşil = normal/OK; `--warn` sarı; `--danger` kırmızı. Renk **anlam** taşır. · **Prompt işareti:** bölüm başlıklarında `>` veya `~/` öneki; her başlıkta değil.
Banned: Sans-serif gövde (terminal hissi biter). · Üçüncü neon renk; renk kodunu dekorasyon olarak kullanmak. · Radius > 2px, yumuşak gölge, cam.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="cybercore"] {
  --bg: #05080a; --bg-2: #0a1014;
  --surface: #0a1014; --surface-2: #0f171c;
  --ink: #d7ffe9; --ink-soft: #86c9a6; --ink-faint: #4d7a63;
  --accent: #33ff99; --accent-ink: #05080a;
  --line: rgba(51,255,153,.35);
  --danger: #e03527;
  --danger-ink: #000000;
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
  --shadow: 0 0 10px rgba(51,255,153,.28); --shadow-hard: none;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body: "JetBrains Mono", ui-monospace, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: 0;
}
```
