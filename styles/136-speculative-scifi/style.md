# 136 · Spekülatif Bilim-Kurgu

> **In one sentence:** Anlatının içinden çıkmış bir enstrüman plakası: açık kemik zemin, gravür çift çerçeve, radyal kadran tiki ve tek sinyal ambarıyla kurulmuş diegetic arayüz.

| | |
|---|---|
| **Feeling** | meraklı, törensel, ölçülü, yabancı |
| **Best for** | kurgu/oyun arayüzü, marka hikâye sitesi, sergi kurulumu, spekülatif ürün konsepti |
| **Avoid** | ödeme/güvenlik ekranı, kurumsal SaaS, hızlı ticaret — diegetic dil güveni yavaşlatır |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="speculative-scifi"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Spekülatif Bilim-Kurgu, arayüzü **anlatının içindeki bir cihazın plakası** gibi kurar: açık kemik zemin, her yüzeyde 1px dış + 4px iç gravür çerçeve, radyal kadran tikleri ve mono ölçü etiketleri (`7.42 AE`, `SEKTÖR 7`, `Δ 0.03`). Tanıdıklığı feda eder; karşılığında **dünya kurma** gücü kazanır — kullanıcı arayüzü değil, o dünyanın enstrümanını okur.

Kurucu kararları üç tanedir. Birincisi **plaka dili**: gölge yok, ayrım çift çerçeve ve zemin tonu. İkincisi **diegetic ölçü**: her sayı bir birim ve bağlam taşır; süs metin yoktur. Üçüncüsü **tek sinyal rengi**: amber yalnız "ölçüm/aktif" anlamına gelir, dekorasyon değildir.

Bedeli: öğrenme eğrisi. Bu yüzden stilin doğal yeri vitrin ve anlatı; operasyonel ekranlarda yalnız hero/boş durum katmanı olarak kullanılır.

### What is not
- **Cyberpunk (22) değildir:** 22 koyu zemin + neon cyan ile retro-teknoloji satar; 136 **açık kemik** zemin, sıcak amber ve gravür çerçeve kullanır (koyu neon yasak).
- **Synthwave (21) değildir:** 21 mor/pembe gradyan ve ızgara perspektifi taşır; 136'da gradyan yok, 2px radius ve mono ölçü var.
- **Lab Instrument (50) değildir:** 50 ölçüm cihazıdır (kadran yayı, mavi accent, açık gri); 136 diegetic kurgu dilidir (amber accent, yabancı birimler, gravür plaka).
- **Blueprint Çizimi (56) değildir:** 56 koyu cyanotype teknik paftadır; 136 açık plaka + radyal kadran.

### Where it comes from
Anlatı içi (diegetic) arayüz geleneğinden — bilim-kurgu filmlerinde karakterin gerçekten kullandığı ekranlar — ve spekülatif tasarım pratiğinden. Bugün geri dönüyor çünkü ürün siteleri "gelecek" anlatmak için gerçek dünya konvansiyonlarından çıkmak istiyor. Klişeye dönmemesi için korunacak detay: **her ölçünün birimli olması** ve çerçevenin çift kalması (dış 1px + iç 4px).

### Recognition test in 3 seconds
1. Zemin açık kemik; her yüzeyde 1px dış ve 4px iç çerçeve görünüyor, gölge yok.
2. Radyal kadran tikleri (9° aralık) ve iki eşmerkezli halka çizgisi var.
3. Tüm etiketler mono büyük harf, `.16em` tracking; sayılar birimli (`AE`, `Δ`, `SEKTÖR`).
4. Buton 38px, radius 2px; hap köşe yok.
5. Tek sıcak vurgu ambar; ikinci parlak renk yok.

## Visual signature
- **Gravür çift çerçeve:** dış `1px solid var(--line)` + `::after inset 4px` 1px ink %10.
- **Kadran tiki:** `repeating-conic-gradient` 0.6° tik / 9° aralık, accent %42; iki eşmerkezli halka (34% ve 58%).
- **Mono ölçü etiketi:** 10px, `.16em`, uppercase; değer + birim + bağlam (`7.42 AE · KATMAN 3`).
- **Plaka başlığı:** `◈ SEKTÖR 7 · KAYIT 12` biçiminde mono başlık; eyebrow `◈` öneki.
- **Radius disiplini:** 2px kontrol, 4px plaka; 6px üstü yasak.
- **Gölgesizlik:** `--shadow: none`; yüzen katman accent 1px çerçeveyle ayrılır.
- **Hareket imzası:** 410ms `cubic-bezier(.58,.02,.34,1)`, 11px — plaka "yerine oturur".
- **Typography:** Chakra Petch (display) + Space Grotesk (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#8a5a12`; neutral scale `#e9e8e2` → `#1c1a16`.
- **Radius:** `2px` / `4px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Her yüzey gravür plakadır: dış 1px çerçeve + 4px iç çerçeve, gölge yok
2. Ölçüler diegetic ve birimlidir: `7.42 AE`, `Δ 0.03`, `SEKTÖR 7` — birimsiz sayı yok
3. Tek sinyal rengi accent; kadran tikleri ve aktif durum accent ile yanar
4. Başlık Chakra Petch 600, etiketler mono büyük harf `.16em`
5. Radius 2px (kontrol) / 4px (plaka); hap biçimli köşe yok
6. Kadran/tik motifi en az bir bölümde görünür — süs değil, ölçü göstergesi

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#e9e8e2` | page background | as a card background |
| `--bg-2` | `#dfded6` | partition divider floor, table top | button background |
| `--surface` | `#f4f3ee` | kart, input, modal | full-page background |
| `--surface-2` | `#eeede6` | passive chip, hover background | primary button |
| `--ink` | `#1c1a16` | title, body, icon | large background |
| `--ink-soft` | `#524d42` | secondary text, description | — |
| `--ink-faint` | `#837c6d` | decorative label, separator text | interactive text |
| `--accent` | `#8a5a12` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff6e6` | text above accent | non-accent background |
| `--line` | `rgba(28,26,22,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.15:1** · `ink-soft/bg` **6.84:1** · `ink-faint/bg` **3.37:1 (decorative)** · `accent-ink/accent` **5.51:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 46px (mobile 28px) | 500 | 1.06 | -0.02em |
| H2 | same | 30px | 600 | 1.18 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

- Display 54px; technical labels mono and wide tracking. Body 15px, size 62ch.
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

- The grid is slightly visible as an auxiliary line (accent 8%); section spacing 56px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- The surfaces are separated by a thin accent edge; 1px signal line instead of shadow.
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Koyu neon zemin, cyberpunk/synthwave paleti.
- Yumuşak gölge, blur, cam, gradyan.
- Sürekli dönen iğne veya tarama animasyonu.
- Fotoğraf, 3B render, emoji.
- Hap radius ve 6px üstü radius.
- Anlamsız süs çizgisi (her çizgi bir ölçü taşır).
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.32:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | solda H1 + ölçü etiketleri, sağda kadran; plaka başlığı | `shots/01-page.png` |
| Dashboard | orta | plaka ızgarası; kadran + mono tablo | `shots/01-page.png` |
| Form | düşük | 38px input, mono etiket sağda; birim seçici | `shots/01-page.png` |
| Liste / tablo | düşük | 36px satır, tabular değer + birim | `shots/01-page.png` |
| Boş durum | orta | boş plaka: iç çerçeve + "KAYIT YOK" mono | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: tarama → kalibrasyon → kayıt | `shots/01-page.png` |
| Pricing | orta | iki plaka; öne çıkan accent iç çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | kadran yok; yalnız plaka ve tek CTA | `shots/01-page.png` |
| Modal | orta | plaka başlığı + accent çerçeve | `shots/01-page.png` |
| Bildirim / toast | orta | sağ-alt, 2px accent sinyal çizgisi | `shots/01-page.png` |
| Hata | orta | plaka uyarı satırı: `! SEKTÖR 7 · ÖLÇÜM DIŞI` | `shots/01-page.png` |
| Profil / ayar | orta | birim ve kalibrasyon ayarları | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.15:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.84:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.37:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.51:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.32:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 90.5 | ≥ 60 target | thin text |

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
| "Retro terminal" gibi | koyu zemin + neon eklenmiş | açık kemik zemin + amber |
| Plaka hissi kayboluyor | iç çerçeve unutulmuş | `::after inset 4px` çerçeve ekle |
| Ölçüler anlamsız | birim yok | her sayıya birim + bağlam yaz |
| Kadran gürültü | tik aralığı 4° altı | 9° aralık, 0.6° tik |
| Gölge sızmış | kart hover'ında gölge | gölge yok; accent çerçeve kullan |
| Okunmuyor | `--ink-faint` metin | metin `--ink`/`--ink-soft` |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `blueprint-drawing` | Same level of seriousness; accent sharing is not allowed |
| garnish | `lab-instrument` | Same level of seriousness; accent sharing is not allowed |
| garnish | `calibration-lab` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Diegetic_(narrative | en.wikipedia.org — ) — anlatı içi arayüz mantığı |
| https://en.wikipedia.org/wiki/Speculative_design | Speculative design — gelecek senaryosu ve inandırıcılık |
| https://en.wikipedia.org/wiki/Head-up_display | Instrument panel (HUD) — kadran/tik ölçü dili |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast Minimum — açık plaka üstü metin kontrastı |

## AI brief

```text
Stil: Spekülatif Bilim-Kurgu (styles/136-speculative-scifi/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="speculative-scifi"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg kemik + 32px gravür ızgarası (iki linear-gradient, ink %6).
Tipografi: --font-display Chakra Petch 46/30/21 (600, .02–.04em); --font-body Space Grotesk 16px/1.58;
  --font-mono Share Tech Mono 10–11px ölçü etiketi (.16em, uppercase, BİRİM zorunlu).
Yüzey: gölge YOK; dış 1px var(--line) + ::after inset 4px 1px ink %10 gravür çerçeve.
  Radius 2px kontrol, 4px plaka.
Renk: tek sinyal ambarı #8a5a12; ink/bg 14.15:1, ink-soft/bg 6.84:1, accent-ink/accent 5.51:1, ink-faint/bg 3.37:1 (iç çerçeve).
İmza: radyal kadran tiki (0.6° tik / 9° aralık) + diegetic plaka başlığı `◈ SEKTÖR 7 · KAYIT 12`.
Hareket: enter 410ms cubic-bezier(.58,.02,.34,1) 11px stagger .047; scroll top 99% 430ms 17px once;
  pin scrub 0.58 (+115%, ekran başına 1); hover 185ms görsel 1.011. prefers-reduced-motion zorunlu.
Yasak: koyu neon zemin, gölge/blur/cam, sürekli dönen iğne, fotoğraf/3B render, hap radius, birimsiz sayı.
Çıktı: bileşen kodu + tek paragraf not (kadranı ve ölçü etiketini nereye koydun).

Style: Spekülatif Bilim-Kurgu (speculative-scifi) · family: Experimental & Future (136–145)
Token: --bg #e9e8e2 · --surface #f4f3ee · --ink #1c1a16 · --accent #8a5a12 · --line rgba(28,26,22,.16)
Radius: 2px / 4px · Typography: Chakra Petch / Space Grotesk / Share Tech Mono
Required: Her yüzey gravür plakadır: dış 1px çerçeve + 4px iç çerçeve, gölge yok · Ölçüler diegetic ve birimlidir: `7.42 AE`, `Δ 0.03`, `SEKTÖR 7` — birimsiz sayı yok · Tek sinyal rengi accent; kadran tikleri ve aktif durum accent ile yanar
Banned: Koyu neon zemin, cyberpunk/synthwave paleti. · Yumuşak gölge, blur, cam, gradyan. · Sürekli dönen iğne veya tarama animasyonu.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="speculative-scifi"] {
  --bg: #e9e8e2; --bg-2: #dfded6;
  --surface: #f4f3ee; --surface-2: #eeede6;
  --ink: #1c1a16; --ink-soft: #524d42; --ink-faint: #837c6d;
  --accent: #8a5a12; --accent-ink: #fff6e6;
  --line: rgba(28,26,22,.16);
  --danger: #cd1d12;
  --danger-ink: #ffffff;
  --ok: #007931;
  --ok-ink: #ffffff;
  --warn: #ad4b00;
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
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .06em; --blur: 0px; --grain: 0;
}
```
