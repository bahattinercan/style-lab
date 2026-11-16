# 07 · Wabi-Sabi

> **In one sentence:** Kusuru saklamayan düzen: kırık hiza, organik form, el yapımı doku ve eksik bırakılmış boşluk.

| | |
|---|---|
| **Feeling** | organik, elle yapılmış, melankolik sıcaklık, "yaşanmış" |
| **Best for** | kişisel/günlük uygulaması, kültür-sanat, sürdürülebilir marka, zanaat ürünü |
| **Avoid** | fintech güven ekranı, kurumsal B2B panel, hızlı e-ticaret |
| **Difficulty** | yüksek (kaosu kontrol etmek zor) · **Accessibility** |  |
| **Family** | Minimal (1–7) · **Token** | `kit/tokens.css` → `[data-style="wabi-sabi"]` |
| **Composition** | `centered` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Wabi-sabi, kusurun estetiği: **hizasız** yerleşim (0.5–1.5° dönüklük), **asimetrik radius** (3px / 18px karışımı), **kâğıt dokusu** (grain .07), soluk toprak paleti ve sıcak serif. Mükemmel ızgara bilinçli olarak "elle" bozulur — ama okunabilirlik bozulmaz.

Kazandığı şey: samimiyet ve hatırlanma. Feda ettiği şey: kesinlik ve kurumsal güven; bu stil "steril" olamaz.

### What is not
- **Japandi değildir.** Japandi düzgün ve ölçülü; wabi-sabi kasten eğik ve dokulu.
- **Scrapbook değildir.** Scrapbook kolaj/bant/polaroid ekler; wabi-sabi aynı kâğıt dili ama **daha az** öğeyle, doku ve hizasızlıkla kurar.
- **Bohemian değildir.** Bohemian renkli desen; wabi-sabi soluk ve tek tonlu.
- **"Sadece eğik kart" değildir.** Doku + asimetrik radius + serif + eksik boşluk birlikte gerekir.

### Where it comes from
Japon çay seremonisi estetiği (侘寂): geçicilik, kusur, tamamlanmamışlık. Dijitalde zanaat ürünleri, kişisel not uygulamaları ve "slow" markalarca kullanılıyor; kalabalık arayüzlere insani bir alternatif.

### Recognition test in 3 seconds
1. Öğeler hafif **eğik** mi (0.5–1.5°), yoksa kusursuz hizalı mı?
2. Radius **asimetrik** mi (3px/18px karışımı)?
3. Kâğıt dokusu (grain) görünür mü — abartısız?
4. Palet soluk toprak (krem, kil, pas) mı?
5. Boşluk "eksik" mi bırakılmış (kart yarım hizada, kolon dar)?

## Visual signature
- **Dönüklük:** hero görseli `-0.7°`, ikincil kart `+0.4°`; metin blokları 0°.
- **Asimetrik radius:** `18px 4px 18px 4px` (görsel), `3px` (buton/input).
- **Grain .07:** kâğıt hissi; PNG'de hafif gürültü.
- **Soluk kontur:** `rgba(42,39,36,.18)` 1px — keskin değil.
- **Eksik çizgi:** bazı bölümlerde alt çizgi yok, sadece boşluk.
- **Pas rengi accent:** `#a85831` yalnızca damga/ikon noktası.
- **Typography:** Fraunces (display) + Inter (body) + Courier New (mono label).
- **Colour discipline:** a single accent `#a85831`; neutral scale `#ede6da` → `#2a2724`.
- **Radius:** `3px` / `18px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. **Hizasızlık kontrollü:** ekran başına en fazla 3 öğe 0.5–1.5° döner; okunabilir bloklar (paragraf, tablo) asla dönmez.
2. **Asimetrik radius:** küçük öğe 3px, büyük yüzey 18px; aynı bileşende iki radius (ör. `18px 4px 18px 4px`).
3. **Kâğıt dokusu:** `--grain: .07`; doku metnin arkasında, okunurluğu bozmaz.
4. **Toprak paleti:** krem/kil/pas; soğuk renk yok.
5. **Serif display (Fraunces), sans gövde (Inter).**
6. **Eksik boşluk:** bir bölümde bilinçli asimetri (ör. sağda 1 kolon boş).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#ede6da` | page background | as a card background |
| `--bg-2` | `#e3d9c9` | partition divider floor, table top | button background |
| `--surface` | `#f6f1e6` | kart, input, modal | full-page background |
| `--surface-2` | `#eadfce` | passive chip, hover background | primary button |
| `--ink` | `#2a2724` | title, body, icon | large background |
| `--ink-soft` | `#5f574d` | secondary text, description | — |
| `--ink-faint` | `#8b8376` | decorative label, separator text | interactive text |
| `--accent` | `#a85831` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff8ef` | text above accent | non-accent background |
| `--line` | `rgba(42,39,36,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **11.97:1** · `ink-soft/bg` **5.73:1** · `ink-faint/bg` **3.02:1 (decorative)** · `accent-ink/accent` **4.85:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 48px (mobile 30px) | 600 | 1.12 | -0.02em |
| H2 | same | 30px | 600 | 1.22 | -0.015em |
| H3 | same | 17px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.55 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier New) | 11px | 400 | 1.2 | 0.16em |
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
- Radius: `3px` (buton, input, chip), `18px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Mükemmel simetri, eşit kart ızgarası (4×2 gibi kusursuz grid).
- Parlak renk, gradient, cam, sert gölge, neon.
- Dönen **metin** blokları ve dönen tablo satırları.
- 2° üzeri dönüklük (dağınık görünür), rastgele ölçek.
- İnce serif gövde metni; 15px altı gövde.
- Doku yoğunluğu > .09 (metin okunmaz).
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 3px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 3px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 3px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 3px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 3px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 3px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 3px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.54:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 48px serif başlık, daraltılmış metin kolonu, -0.7° görsel, tek pas buton | `shots/01-page.png` |
| Dashboard | düşük | Doku ve dönüklük minimum; hairline + serif başlık; sayılar mono | `shots/01-page.png` |
| Form | düşük | 480px, etiket 12px mono, alt kenar vurgulu input | `shots/01-page.png` |
| Liste / tablo | düşük | 52px satır, kesikli ayırıcı, dönme yok | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + el yazısı not + tek buton | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına 1 fikir; görsel eğik, metin düz | `shots/01-page.png` |
| Pricing | orta | 3 kart farklı yükseklikte (bilinçli), orta kart accent kenar | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Dönme ve doku kapatılır; güven için düz form | `shots/01-page.png` |
| Modal | orta | 18px radius, `--shadow-hard`, kâğıt zemin | `shots/01-page.png` |
| Bildirim / toast | orta | Koyu zemin + krem metin, 4px radius | `shots/01-page.png` |
| Hata | düşük | 13px sıcak dil + `--danger` alt kenar | `shots/01-page.png` |
| Profil / ayar | orta | 7/5 kolon, satır 56px, kesikli ayırıcı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 11.97:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 5.73:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.02:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.85:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.54:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 87.4 | ≥ 60 target | thin text |

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
| "Yarım kalmış" görünüyor | Kusur var, hiyerarşi yok | Serif display + net ölçek ekle, dönüklüğü azalt |
| Dağınık | 3'ten fazla öğe dönük, 2°+ açı | Ekran başına ≤ 3 öğe, ≤ 1.5° |
| Okunmuyor | Doku + dönük metin | Metin bloklarını düz tut, grain ≤ .07 |
| Ucuz | Doygun renk/parlak gölge | Toprak paleti + mat gölge |
| Kurumsal güven kaybı | Ödeme ekranında tam stil | Ödeme/girişte dönme ve dokuyu kapat |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scrapbook` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bohemian` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `bento-grid` | Two different ornamental languages compete on the same screen |
| Mixing | `art-deco` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Fraunces | Fraunces — Yumuşak serif ekseni |
| https://www.are.na | Are.na — Kâğıt/doku referans panoları |
| https://www.etsy.com | Etsy — Zanaat ürünlerinde organik yerleşim |

## AI brief

```text
Stil: Wabi-Sabi (styles/07-wabi-sabi/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="wabi-sabi"]; hard-coded renk/ölçü YASAK.
Doku: grain .07 (kâğıt), 1px kontur rgba(42,39,36,.18).
Hizasızlık: ekran başına ≤ 3 öğe 0.5–1.5° döner; METİN BLOKLARI ASLA DÖNMEZ.
Radius: buton/input 3–4px, kart/görsel asimetrik (18px 4px 18px 4px).
Tipografi: Fraunces display 400 (48/1.1) + Inter gövde 16/1.7; etiket Courier 11 uppercase; el yazısı yalnız 1 notta.
Renk: krem/kil/pas (#ede6da, #f6f1e6, #a85831); accent üstü metin #fff8ef (4.85:1).
Boşluk: bölüm 72px, eksik/asimetrik kolon serbest (bir bölümde 1 kolon boş).
Yasak: simetrik eşit kart ızgarası, parlak renk/gradient/cam, dönen metin, >1.5° açı, grain > .09.
Çıktı: kod + tek paragraf not (hangi öğeyi döndürdün, hangisini düz bıraktın).

Style: Wabi-Sabi (wabi-sabi) · family: Minimal (1–7)
Token: --bg #ede6da · --surface #f6f1e6 · --ink #2a2724 · --accent #a85831 · --line rgba(42,39,36,.18)
Radius: 3px / 18px · Typography: Fraunces / Inter / Courier New
Required: **Hizasızlık kontrollü:** ekran başına en fazla 3 öğe 0.5–1.5° döner; okunabilir bloklar (paragraf, tablo) asla dönmez. · **Asimetrik radius:** küçük öğe 3px, büyük yüzey 18px; aynı bileşende iki radius (ör. `18px 4px 18px 4px`). · **Kâğıt dokusu:** `--grain: .07`; doku metnin arkasında, okunurluğu bozmaz.
Banned: Mükemmel simetri, eşit kart ızgarası (4×2 gibi kusursuz grid). · Parlak renk, gradient, cam, sert gölge, neon. · Dönen **metin** blokları ve dönen tablo satırları.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="wabi-sabi"] {
  --bg: #ede6da; --bg-2: #e3d9c9;
  --surface: #f6f1e6; --surface-2: #eadfce;
  --ink: #2a2724; --ink-soft: #5f574d; --ink-faint: #8b8376;
  --accent: #a85831; --accent-ink: #fff8ef;
  --line: rgba(42,39,36,.18);
  --danger: #cc1c11;
  --danger-ink: #ffffff;
  --ok: #007830;
  --ok-ink: #ffffff;
  --warn: #ac4b00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 3px; --radius-lg: 18px;
  --shadow: 0 1px 0 rgba(42,39,36,.06); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Courier New", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
