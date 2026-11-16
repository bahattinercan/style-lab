# 58 · Güvenlik Tabelası

> **In one sentence:** Sahadaki uyarı levhasının mantığı: koyu zemin, çapraz tehlike bandı, 2px uyarı çerçevesi ve piktogram + büyük harf metinle kurulan üç kademeli hiyerarşi.

| | |
|---|---|
| **Feeling** | acil, kesin, yüksek sesli, tartışmasız |
| **Best for** | saha/güvenlik paneli, kritik uyarı akışı, iş güvenliği eğitimi, tehlike bildirim ürünü |
| **Avoid** | lüks vitrin, sağlık iletişimi (sakinlik gerekir), uzun okuma ekranları — sürekli uyarı yorar |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="safety-signage"]` |
| **Composition** | `split` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Güvenlik Tabelası, arayüzü bir **uyarı levhası** gibi kurar: koyu asfalt zemin, üstte 8px çapraz tehlike bandı, uyarı kutularında 2px accent çerçeve, başlıklar Anton ile tamamı büyük harf, her durum piktogram + metinle. Sükûneti feda eder; karşılığında **hiçbir uyarının gözden kaçmaması** kazanır.

Kurucu kararları üç tanedir. Birincisi **üç kademeli hiyerarşi sabittir**: 2px accent çerçeve = yasak/tehlike, 2px `--ink` çerçeve = talimat, 1px `--line` = bilgi. İkincisi **renk tek başına anlam taşımaz**: her kademe piktogram + metinle tekrar edilir. Üçüncüsü **hareket kesiktir**: `linear` 140ms — uyarı süzülmez, belirir.

Bedeli: uzun süreli kullanımda yorucudur. Bu yüzden yalnız kritik akış ve saha ekranlarında kullanılır; okuma ekranlarında `--bg` düz, bant yok.

### What is not
- **Constructivism (36) değildir:** 36 diyagonal kompozisyon ve siyah-kırmızı baskı dili kullanır, uyarı kademesi tanımlamaz. Tabela'da hiyerarşi kuraldır ve piktogram zorunludur.
- **Neo-Brutalism (13) değildir:** 13 ofset sert gölge ve keyfi çerçeve kalınlığıyla "kaba" görünür; Tabela'da gölge yoktur, çerçeve kalınlığı anlam taşır.
- **Kinetic Type (37) değildir:** 37 dev tipografiyi hareket ettirir; Tabela'da hareket 140ms'de biter, sürekli animasyon yasak.
- **Terminal UI (45) değildir:** 45 eşaralıklı mono ve durum metinleriyle konuşur; Tabela Anton + Rajdhani ile ses yükseltir, mono yalnız ölçü etiketinde.

### Where it comes from
ISO 3864 / ISO 7010 piktogram sistemi ve OSHA 1910.145 uyarı kategorilerinden. Bugün geri dönüyor çünkü operasyonel yazılımda en pahalı hata **gözden kaçan uyarı**; levha dili, uyarıyı estetik tercih olmaktan çıkarıp sözleşmeye bağlar. Klişeye dönmemesi için korunacak detay: üç kademeli çerçeve kuralı ve piktogram zorunluluğu.

### Recognition test in 3 seconds
1. Sayfanın üstünde 8px çapraz sarı-siyah tehlike bandı var.
2. Başlıklar Anton, tamamı büyük harf, satır aralığı 1.0'ın altında.
3. Uyarı kutularında radius 0 ve 2px çerçeve; gölge yok.
4. Her durumun yanında piktogram (üçgen / yuvarlak / kare) duruyor.
5. Buton 48px yüksekliğinde, dolgu sarı, metin siyah.

## Visual signature
- **Tehlike bandı:** `repeating-linear-gradient(45deg, var(--accent) 0 20px, var(--accent-ink) 20px 40px)`, 8px yüksekliğinde üst bant (nav üstü).
- **Üç kademeli çerçeve:** 2px accent (tehlike) · 2px `--ink` (talimat) · 1px `--line` (bilgi) — dördüncü kalınlık yok.
- **Piktogram zorunluluğu:** her uyarı satırında 24px piktogram; renk körlüğünde tek ayırt edici.
- **Dev büyük harf:** H1 72px Anton, `line-height: .94`, en fazla 18ch — levha gibi 2–3 satır.
- **Sol 8px bant:** tehlike kartlarında sol kenar 8px accent (levha kenarı).
- **Radius 0:** her yüzeyde; tek istisna yok.
- **Hareket imzası:** 140ms `linear`, 16px yukarıdan — belirme, süzülme değil.
- **Typography:** Anton (display) + Rajdhani (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#ffd52e`; neutral scale `#12120e` → `#f6f2e4`.
- **Radius:** `0px` / `0px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Uyarı hiyerarşisi sabit: 2px accent çerçeve = yasak/tehlike, 2px ink = talimat, 1px line = bilgi
2. Display daima büyük harf (Anton), line-height ≤ 1.0
3. Renk tek başına anlam taşımaz: her durum piktogram + metinle birlikte
4. Radius 0; çapraz tehlike bandı yalnız accent + accent-ink
5. Dokunma hedefi 48px; birincil eylem accent zemin + accent-ink metin
6. Kritik uyarı ekranın üst 1/3 içinde, asla katlama altında

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#12120e` | page background | as a card background |
| `--bg-2` | `#1a1a14` | partition divider floor, table top | button background |
| `--surface` | `#1f1f18` | kart, input, modal | full-page background |
| `--surface-2` | `#26261d` | passive chip, hover background | primary button |
| `--ink` | `#f6f2e4` | title, body, icon | large background |
| `--ink-soft` | `#c4c0a9` | secondary text, description | — |
| `--ink-faint` | `#8b8874` | decorative label, separator text | interactive text |
| `--accent` | `#ffd52e` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#14140d` | text above accent | non-accent background |
| `--line` | `rgba(246,242,228,.20)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.75:1** · `ink-soft/bg` **10.25:1** · `ink-faint/bg` **5.25:1 (decorative)** · `accent-ink/accent` **13.04:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 72px (mobile 40px) | 400 | 1.08 | -0.02em |
| H2 | same | 40px | 600 | 1.2 | -0.015em |
| H3 | same | 24px | 600 | 1.3 | 0 |
| Body | `--font-body` (Rajdhani) | 17px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Pastel veya düşük kontrast palet.
- İnce ağırlık, italik, serif.
- Yumuşak gölge, blur, cam.
- Saniyede 3 üstü yanıp sönme (fotosensitivite).
- Emoji veya marka illüstrasyonu.
- Küçük harf başlık; ortalanmış levha metni.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 13.24:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 72px Anton H1 + üstte 8px tehlike bandı + tek CTA | `shots/01-page.png` |
| Dashboard | orta | KPI'lar 2px çerçeve; kritik olan accent çerçeve | `shots/01-page.png` |
| Form | düşük | 48px input, 2px çerçeve, focus'ta accent | `shots/01-page.png` |
| Liste / tablo | düşük | 44px satır, kritik satır sol 8px `--danger` | `shots/01-page.png` |
| Boş durum | orta | "KAYIT YOK" 40px Anton + piktogram | `shots/01-page.png` |
| Onboarding | yüksek | her adım tek uyarı kuralı; ilerleme 4 kare blok | `shots/01-page.png` |
| Pricing | orta | plan kartları 2px çerçeve; öne çıkan accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | düşük | bant yok, 2px çerçeve korunur; süs sıfır | `shots/01-page.png` |
| Modal | orta | 3px accent çerçeve + üst 12px bant | `shots/01-page.png` |
| Bildirim / toast | orta | üst-orta, sol uçta 24px piktogram | `shots/01-page.png` |
| Hata | yüksek | `--danger` çerçeve + piktogram + 40px Anton başlık | `shots/01-page.png` |
| Profil / ayar | orta | bant yok; talimat kademesi 2px `--ink` | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.75:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 10.25:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.25:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 13.04:1 | ≥ 4.5 | button text |
| focus ring/ground | 13.24:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.7 | ≥ 60 target | thin text |

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
| Ekran "bağırıyor", hiyerarşi yok | her kutuya accent çerçeve verilmiş | accent yalnız tehlike kademesinde; bilgi 1px `--line` |
| Sarı yoruyor | accent geniş zemin olarak kullanılmış | accent yalnız bant, çerçeve ve CTA dolgusunda |
| Uyarı gözden kaçıyor | renk tek başına kullanılmış | piktogram + metin ekle (renk körlüğü) |
| Başlık taşıyor | Anton + 72px, 18ch üstü | metni 2–3 satıra böl, `max-width: 18ch` |
| Tehlike bandı "dekor" gibi | her bölümde tekrar edilmiş | bant yalnız nav üstü ve modal üstünde |
| Mobilde buton küçük | 48px korunmamış | `min-height: 48px` sabit; padding kısaltılmaz |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `constructivism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `kinetic-type` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.iso.org/standard/68835.html | ISO 3864 · güvenlik işaretleri — ISO 3864 güvenlik işaretleri: renk + biçim |
| https://en.wikipedia.org/wiki/Hazard_symbol | Hazard symbol — çapraz bant ve uyarı renkleri |
| https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.145 | OSHA 1910.145 — uyarı kategorileri ve metin hiyerarşisi |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | WCAG 2.2 · Three Flashes — flash sınırı (saniyede 3 altı) |

## AI brief

```text
Stil: Güvenlik Tabelası (styles/58-safety-signage/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="safety-signage"] değişkenleri; hard-coded renk/radius/gölge yasak.
Zemin: --bg asfalt; üst bant 8px çapraz (repeating-linear-gradient 45°, var(--accent) 0 20px, var(--accent-ink) 20px 40px).
Tipografi: --font-display Anton 72/40/24 (400, UPPERCASE, line-height ≤1.0, max 18ch);
  --font-body Rajdhani 17px/1.45 500; --font-mono Space Mono 11px etiket (.10em).
Yüzey: gölge YOK, radius 0. Kademe: 2px accent = tehlike, 2px ink = talimat, 1px line = bilgi.
Renk: accent #ffd52e tek tehlike rengi; durum daima piktogram + metinle. ink/bg 16.75:1, ink-soft/bg 10.25:1, accent-ink/accent 13.04:1.
Bileşen: buton/input 48px, 2px çerçeve; focus 3px accent outline offset 3px.
Hareket: enter 140ms linear 16px stagger .06; scroll top 93% 150ms 22px once; pin yok; hover 80ms görsel 1.012.
  Sinirde: saniyede 3 flash yok, sürekli animasyon ≤1, prefers-reduced-motion hepsini kapatır.
Yasak: pastel, italik, serif, gölge, blur, cam, küçük harf başlık, emoji.
Çıktı: bileşen kodu + tek paragraf not (hangi uyarı kademesini nerede kullandın).

Style: Güvenlik Tabelası (safety-signage) · family: Industrial (56–65)
Token: --bg #12120e · --surface #1f1f18 · --ink #f6f2e4 · --accent #ffd52e · --line rgba(246,242,228,.20)
Radius: 0px / 0px · Typography: Anton / Rajdhani / Space Mono
Required: Uyarı hiyerarşisi sabit: 2px accent çerçeve = yasak/tehlike, 2px ink = talimat, 1px line = bilgi · Display daima büyük harf (Anton), line-height ≤ 1.0 · Renk tek başına anlam taşımaz: her durum piktogram + metinle birlikte
Banned: Pastel veya düşük kontrast palet. · İnce ağırlık, italik, serif. · Yumuşak gölge, blur, cam.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="safety-signage"] {
  --bg: #12120e; --bg-2: #1a1a14;
  --surface: #1f1f18; --surface-2: #26261d;
  --ink: #f6f2e4; --ink-soft: #c4c0a9; --ink-faint: #8b8874;
  --accent: #ffd52e; --accent-ink: #14140d;
  --line: rgba(246,242,228,.20);
  --danger: #e63c2d;
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
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Rajdhani", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
