# 128 · Brass Copper

> **In one sentence:** Gravürlenmiş pirinç plaka gibi kurgulanmış; koyu bronz zemin, üst kenarı iç parlaklıklı paneller, bakır accent ve ağır hareket eden lüks metal kataloğu arayüzü.

| | |
|---|---|
| **Feeling** | ağır, sıcak, törensel, zanaatkâr |
| **Best for** | alaşım/malzeme kataloğu, lüks donanım, saat & mücevher butiği, butik metal atölyesi |
| **Avoid** | yüksek yoğunluklu operasyon paneli, hızlı ticaret, oyun arayüzü — koyu sıcak zemin ve 920ms giriş orada "yavaş" okunur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="brass-copper"]` |
| **Composition** | `fullbleed` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Brass Copper, arayüzü **gravürlenmiş pirinç plaka** gibi kurar: koyu bronz zemin, üst kenarında 1px iç parlaklık taşıyan plaka panelleri, bakır accent ve Cinzel büyük harf künyeler. Değer, metalin kendisi gibi **ağırlık ve oranla** anlatılır: alaşım adı, bileşim yüzdesi, ağırlık, parti no.

Üç kurucu karar: (1) **plaka kenarı** — her panelin üst kenarında 1px iç parlaklık; bu gloss değil, işlenmiş kenardır; (2) **gravür tipografisi** — Cinzel 600 büyük harf `0.12em` başlık, Jost gövde, Courier Prime künye (daktilo parti kaydı); (3) **ağır hareket** — giriş 920ms `cubic-bezier(.52,.04,.3,1)`; metal gibi yavaş kalkar ve sert oturur.

Bedeli: koyu sıcak zemin uzun okumada yorar; gövde 15px Jost ve 1.6 satır aralığı zorunludur. Kırmızı-turuncu accent geniş alanda kullanılırsa stil "bakır" değil "uyarı" okunur.

### What is not
- **Art Deco (26) değildir:** koyu yeşil + altın, geometrik simetri ve süs vardır; Brass Copper'da altın yok, bakır accent ve gravür künye var; simetri değil plaka hizası.
- **Grand Tourer (41–43) değildir:** krem deri, krom hairline ve motor sporları dilidir; burada metal koyu, krom değil pirinç/bakır.
- **West African Pattern (71) değildir:** koyu kahve zemin + altın accent ve desenli yüzey; Brass Copper desensizdir, accent bakır (hue 27° vs 41°), display Cinzel vs Archivo Black, radius 5/12 vs 0/2 — üç eksende birden farklı.
- **Machined Metal Panel (57) değildir:** soğuk gri + pas accent ve endüstriyel panel dili; 128 lüks metal kataloğudur.

### Where it comes from
Metal atölyesi ve gravür plaka geleneğinden: alaşım etiketi, bileşim yüzdesi, parti numarası, yüzey işlemi (fırçalanmış/aynalı/patina). Bugün yeniden kullanılmasının nedeni: lüks donanım ve malzeme satıcıları ürünü fotoğrafla gösteriyor ama **alaşım oranını ve yüzey işlemini** anlatamıyor; bu bilgi gravür plakada yaşar. Klişeye dönüşmemesi için korunacak detay: **üst kenar iç parlaklığı** ve gerçek bileşim verisi.

### Recognition test in 3 seconds
1. Zemin koyu bronz; accent bakır (turuncu-kiremit), altın/parlak metal yok.
2. Panel üst kenarında 1px iç parlaklık çizgisi var; geniş gloss yok.
3. Başlıklar büyük harf gravür serifi (Cinzel), geniş harf aralıklı.
4. Her kartta alaşım chip'i + bileşim (%) + ağırlık (g) + parti no.
5. Köşeler 5px (kontrol) ve 12px (plaka); hap buton yok.

## Visual signature
- **Plaka kenarı:** panel/card `box-shadow: inset 0 1px 0 rgba(240,231,218,.10)` — üst kenarda tek 1px parlaklık.
- **Bakır accent:** `#c9743c` yalnız eylem/seçim/uyarı; accent üstü metin `#1a0d05`.
- **Gravür başlık:** Cinzel 600, H1 44px/1.1, `0.12em`, büyük harf; H2 `0.08em`.
- **Daktilo künye:** Courier Prime 10px `0.20em` etiket, 14px tabular değer; parti no sağ üstte.
- **Fırçalanmış metal:** `--grain: .035` tüm zeminde; yatay ince çizgi hissi.
- **Perçin detayı:** plaka kartının sol üstünde 4px `--ink-faint` daire (tek, dekoratif).
- **Bakır halka:** aktif/seçili plaka `--shadow-hard` = 1px bakır halka (gölge değil).
- **Typography:** Cinzel (display) + Jost (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#c9743c`; neutral scale `#1a1512` → `#f0e7da`.
- **Radius:** `5px` / `12px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her alaşım kaydı: alaşım adı + bileşim (%) + ağırlık (g) + parti no
2. Plaka kenarında 1px iç parlaklık (üst kenar) — parlak yüzey efekti değil
3. Cinzel 600 büyük harf başlık, 0.08–0.12em aralık; ağırlıkla hiyerarşi kurulmaz
4. Bakır accent yalnız eylem/seçim/uyarı; ikinci metal tonu yok
5. Radius 5px (kontrol) ve 12px (plaka); hap buton yok
6. Fırçalanmış metal grain .035 yalnız zemin katmanında

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#1a1512` | page background | as a card background |
| `--bg-2` | `#130f0d` | partition divider floor, table top | button background |
| `--surface` | `#221b16` | kart, input, modal | full-page background |
| `--surface-2` | `#2c231c` | passive chip, hover background | primary button |
| `--ink` | `#f0e7da` | title, body, icon | large background |
| `--ink-soft` | `#bda892` | secondary text, description | — |
| `--ink-faint` | `#8a7862` | decorative label, separator text | interactive text |
| `--accent` | `#c9743c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a0d05` | text above accent | non-accent background |
| `--line` | `rgba(240,231,218,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.78:1** · `ink-soft/bg` **7.91:1** · `ink-faint/bg` **4.26:1 (decorative)** · `accent-ink/accent` **5.48:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 28px (mobile 28px) | 400 | 1.08 | -0.02em |
| H2 | same | 26px | 600 | 1.2 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

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
- Radius: `5px` (buton, input, chip), `12px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Altın parlaklığı, gloss/ayna efekti, gradient metal.
- Cam/blur, 12px üstü radius, hap buton.
- Gümüş/altın ikinci accent; neon renk.
- Büyük harf gövde, 13px altı metin, italik.
- Sürekli parıldayan metal, parallax, bounce.
- Renk körlüğüne dayanan tek başına durum bildirimi.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 5px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 5px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 5px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 5px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 5px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 5px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 5px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.21:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 5/7 hero: solda gravür başlık + tek CTA, sağda pirinç yüzey | `shots/01-page.png` |
| Dashboard | orta | 3 KPI (alaşım, parti, ortalama ağırlık) + alaşım tablosu | `shots/01-page.png` |
| Form | orta | alaşım girişi: ad, bileşim %, ağırlık g, parti no | `shots/01-page.png` |
| Liste / tablo | yüksek | 36px satır, mono yüzde, chip | `shots/01-page.png` |
| Boş durum | düşük | "bu partide plaka yok" + yeni parti ekle | `shots/01-page.png` |
| Onboarding | orta | 3 adım: atölye → alaşım → yüzey işlemi | `shots/01-page.png` |
| Pricing | orta | iki plan, parti/alaşım limitleri | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek plaka, 40px alanlar, tek eylem | `shots/01-page.png` |
| Modal | orta | gravür künye + alaşım tablosu | `shots/01-page.png` |
| Bildirim | orta | 36px toast, sol bakır şerit, 3.6sn | `shots/01-page.png` |
| Hata | düşük | danger çerçeve + neden + yeniden dene | `shots/01-page.png` |
| Profil / ayar | orta | atölye listesi, birim (g/ons), yüzey tercihi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.78:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.91:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.26:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.48:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.21:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 92 | ≥ 60 target | thin text |

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
| "Plastik metal" hissi | gloss/ayna efekti | yalnız üst kenar 1px iç parlaklık |
| Uyarı gibi okunuyor | accent geniş alanda | accent yalnız eylem/seçim |
| Okunmuyor | 13px gövde | 15px Jost, 1.6 satır |
| Altınla karışıyor | pirinç sarısı accent | accent bakır, sarı yalnız warn |
| Plaka sınırı kayboluyor | çizgi + grain zayıf | 1px çizgi + üst parlaklık |
| Koyu modda parlıyor | iç parlaklık sabit | koyu blokta `.06`'ya indir |
| Mobilde taşıyor | 12 kolon tablo | plaka kartı + alt satır |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `art-deco` | Same level of seriousness; accent sharing is not allowed |
| garnish | `grand-tourer` | Same level of seriousness; accent sharing is not allowed |
| garnish | `machined-metal-panel` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `frutiger-aero` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.copper.org/ | Copper Development Association — alaşım bileşimleri, patina ve yüzey işlemleri |
| https://www.britannica.com/technology/brass-alloy | Britannica · pirinç alaşımı — pirinç/bronz tanımı ve kullanım bağlamı |
| https://www.vam.ac.uk/collections/metalwork | V&A · metal işleri koleksiyonu — gravür plaka dili ve künye biçimi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — 1px plaka kenarı ve odak halkası ölçütü |

## AI brief

```text
Stil: Brass Copper (styles/128-brass-copper/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="brass-copper"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cinzel 600) H1/H2 büyük harf +0.08–0.12em; --font-body (Jost 400/600) gövde 15px/1.6;
  --font-mono (Courier Prime) künye 10px +0.20em ve tüm yüzde/ağırlık değerleri (tabular).
Yüzey: koyu bronz + fırçalanmış metal grain (--grain .035). Panel = 1px var(--line) + üst kenarda 1px iç parlaklık
  (inset 0 1px 0); radius --radius 5px, --radius-lg 12px. Geniş gloss/parlama, cam/blur, gradient yasak.
Renk: tek accent bakır (--accent), accent üstü --accent-ink; altın/gümüş ikinci metal yok.
Kayıt: alaşım chip'i + bileşim % + ağırlık g + parti no; yüzdeler mono tabular sağa hizalı.
Hareket: enter 0.92s cubic-bezier(.52,.04,.3,1) 9px st.052 · scroll top 66% 0.79s 7px once ·
  pin açık scrub 1.32 +175% · hover 195ms scale 1.009; prefers-reduced-motion zorunlu.
Yasak: gloss/ayna, gradient metal, cam/blur, 12px üstü radius, hap buton, büyük harf gövde, parıldayan metal animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Brass Copper (brass-copper) · family: Material & Luxury (126–135)
Token: --bg #1a1512 · --surface #221b16 · --ink #f0e7da · --accent #c9743c · --line rgba(240,231,218,.15)
Radius: 5px / 12px · Typography: Cinzel / Jost / Courier Prime
Required: Her alaşım kaydı: alaşım adı + bileşim (%) + ağırlık (g) + parti no · Plaka kenarında 1px iç parlaklık (üst kenar) — parlak yüzey efekti değil · Cinzel 600 büyük harf başlık, 0.08–0.12em aralık; ağırlıkla hiyerarşi kurulmaz
Banned: Altın parlaklığı, gloss/ayna efekti, gradient metal. · Cam/blur, 12px üstü radius, hap buton. · Gümüş/altın ikinci accent; neon renk.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="brass-copper"] {
  --bg: #1a1512; --bg-2: #130f0d;
  --surface: #221b16; --surface-2: #2c231c;
  --ink: #f0e7da; --ink-soft: #bda892; --ink-faint: #8a7862;
  --accent: #c9743c; --accent-ink: #1a0d05;
  --line: rgba(240,231,218,.15);
  --danger: #e94030;
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
  --radius: 5px; --radius-lg: 12px;
  --shadow: 0 8px 24px -16px rgba(0,0,0,.85); --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: .12em; --blur: 0px; --grain: 0;
}
```
