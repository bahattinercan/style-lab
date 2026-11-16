# 81 · Forest Bark

> **In one sentence:** Orman altının nemli karanlığında, her türün kabuğu ve mevsimiyle kaydedildiği saha defteri arayüzü.

| | |
|---|---|
| **Feeling** | gölgeli, dokulu, sabırlı, canlı |
| **Best for** | botanik/doğa kayıt uygulaması, orman envanteri, tür kataloğu, saha gözlem defteri |
| **Avoid** | fintech, sağlık paneli, yüksek hızlı operasyon ekranı — koyu doku ve yavaş ritim burada "gecikme" olur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="forest-bark"]` |
| **Composition** | `split` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Forest Bark, arayüzü bir **saha defteri** gibi kurar: her kayıt bir tür, her türün Latince adı, Türkçe adı, yükseklik/çap değeri ve mevsim etiketi vardır. Zemin orman altının nemli karanlığıdır (peat), accent ise yeni soyulmuş kabuğun sıcak tan rengidir.

Üç kurucu karar: (1) **iki serif, iki iş** — başlıklar Lora 600 (sağlam, kitap kapağı), gövde EB Garamond 400 (uzun okuma); mono yalnız ölçü ve etiketlerde; (2) **doku zeminin kendisi** — grain `.07` her yüzeyde, düz beyaz panel yok, katman ayrımı iki ton açık `--surface` + 1px çizgi; (3) **yavaş ritim** — giriş 880ms süzülür, hover 320ms; hiçbir şey acele etmez.

Bedeli: ekran koyudur ve uzun süre bakınca yorar; bunu dengeleyen şey **17px gövde ve 1.7 satır aralığı**. Gövde metni 15px'e düşerse stil "karanlık tema" olur, "orman" olmaktan çıkar.

### What is not
- **Organic Bio (38) değildir:** o stil açık krem zemin, sage yeşili ve blob radiuslarla "temiz organik" kurar; Forest Bark koyu peat zemin, kabuk tan accent ve 5/11px ölçülü radius kullanır.
- **Wabi-Sabi (07) değildir:** wabi-sabi kusuru estetikleştirir (yamuk kartlar, kil dokusu); burada hizalama düzgündür, doku yalnız grain ve kabuk çizgisidir.
- **Dark Academia (33) değildir:** o stil kitaplık/parşömen atmosferi ve altın accent ile kurulur; Forest Bark yeşil-siyah zemin ve nemli kabuk paletindedir, mono ölçü tabloları taşır.
- **Nordic Folk (66) değildir:** 66 krem zemin + kırmızı nakış dilidir; 81 koyu ve serif gövdelidir.

### Where it comes from
Herbaryum künyesi ve orman envanter defterinden: tür adı, toplandığı yer, tarih, ölçü, mevsim. Bugün yeniden kullanılmasının nedeni: doğa uygulamaları çoğunlukla "açık hava spor uygulaması" gibi görünüyor ve saha kaydının ciddiyetini taşımıyor; botanikçi ve orman mühendisi kendi defter dilini arıyor. Klişeye dönüşmemesi için korunacak detay: **Latince adın italik künyede kalması** ve mevsim etiketinin her listede görünmesi.

### Recognition test in 3 seconds
1. Zemin koyu yeşil-siyah ve gözle görülür **grain dokusu** var; düz beyaz panel yok.
2. Başlıklar serif (Lora), gövde ikinci bir serif (EB Garamond); mono yalnız etiket/ölçü.
3. Ölçüler sağa hizalı mono: `18.4 m · ⌀ 62 cm` gibi, birim ayrı.
4. Kartlar 5px köşe, modal 11px; yuvarlak hap buton yok.
5. Her kayıtta mevsim etiketi (ilkbahar/yaz/sonbahar/kış) ve tür türü chip'i.

## Visual signature
- **Kabuk dokusu:** `--grain: .07` tüm sayfa zemininde; grain fotoğrafın üstünde kullanılmaz.
- **Tan accent:** `#d7a469` yalnız birincil eylem, seçili öğe ve mevsim vurgusu; ikinci sıcak ton yok.
- **Damar çizgisi:** yalnız ilk kartın sol üstünde 1.5px `--line` çizgi; süs olarak çoğaltılmaz (ekran başına 1).
- **İki serif hiyerarşisi:** H1 52px Lora 600, gövde 17px EB Garamond 400; mono 11px etiket + 14px ölçü.
- **Katman tonu:** `--bg` → `--surface` → `--surface-2` üç kademe; gölge yalnız kart/modal, çok yumuşak.
- **Ölçü çubuğu:** liste satırında türün boy aralığını gösteren 4px yüksekliğinde `--surface-2` çubuk, `--accent` ile dolu kısım.
- **Hap chip:** tür etiketleri 999px radius hap; yumuşak form yalnız chip'te, panelde değil.
- **Typography:** Lora (display) + EB Garamond (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#d7a469`; neutral scale `#1f2620` → `#ecefe3`.
- **Radius:** `5px` / `11px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her tür kaydı: Latince ad (italik) + Türkçe ad + yükseklik/çap + mevsim
2. Zemin kabuk dokulu (grain .07); düz beyaz yüzey yok
3. Katman ayrımı çizgi + iki ton açık surface ile; gölge yalnız kart/modal
4. Etiketler 11px mono büyük harf; gövde 17px serif, satır 1.7
5. Yaprak/damar çizgisi dekoratif olabilir ama metnin altında kalır
6. Mevsim bilgisi her liste ekranında görünür (ilkbahar/yaz/sonbahar/kış)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#1f2620` | page background | as a card background |
| `--bg-2` | `#19201a` | partition divider floor, table top | button background |
| `--surface` | `#283029` | kart, input, modal | full-page background |
| `--surface-2` | `#313b31` | passive chip, hover background | primary button |
| `--ink` | `#ecefe3` | title, body, icon | large background |
| `--ink-soft` | `#b4bfa8` | secondary text, description | — |
| `--ink-faint` | `#85917b` | decorative label, separator text | interactive text |
| `--accent` | `#d7a469` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#201708` | text above accent | non-accent background |
| `--line` | `rgba(236,239,227,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.29:1** · `ink-soft/bg` **8.08:1** · `ink-faint/bg` **4.67:1 (decorative)** · `accent-ink/accent` **7.92:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Lora) | 30px (mobile 30px) | 400 | 1.08 | -0.02em |
| H2 | same | 32px | 600 | 1.2 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (EB Garamond) | 17px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `5px` (buton, input, chip), `11px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Parlak doygun yeşil ve neon accent; ikinci sıcak accent tonu.
- Geometrik/teknik sans display, büyük harf gövde.
- Cam/blur, gradient zemin, parlama (glow).
- 11px üstü panel radiusu, hap panel; yuvarlak dilin panele taşması.
- Sürekli salınan bitki animasyonu, parallax, bounce.
- Süs amaçlı yaprak ikonu çoğaltmak (ekran başına ≤2).
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.93:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 6/6 hero: solda başlık + tek CTA, sağda tür kartı + damar çizgisi | `shots/01-page.png` |
| Dashboard | orta | 3 KPI (tür sayısı, yeni kayıt, mevsim) + son gözlemler listesi | `shots/01-page.png` |
| Form | düşük | tür kaydı: Latince ad, Türkçe ad, ölçü+birim, mevsim, foto | `shots/01-page.png` |
| Liste / tablo | orta | 40px satır, italik Latince ad, sağda mono ölçü, mevsim chip'i | `shots/01-page.png` |
| Boş durum | düşük | "bu mevsimde kayıt yok" + ilk gözlemi ekle | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: bölge seç → tür ekle → mevsim planı | `shots/01-page.png` |
| Pricing | düşük | iki plan; kayıt limiti ve dışa aktarma satırları | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek kart, 44px alanlar, tek eylem | `shots/01-page.png` |
| Modal | orta | tür detayı: foto, künye, bakım notu | `shots/01-page.png` |
| Bildirim | düşük | 40px toast, sol tan şerit, 4.5sn | `shots/01-page.png` |
| Hata | düşük | danger çerçeve + neden + sonraki adım | `shots/01-page.png` |
| Profil / ayar | orta | bölge listesi, ölçü birimi, mevsim hatırlatması | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.29:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.08:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.67:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.92:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.93:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.7 | ≥ 60 target | thin text |

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
| "Karanlık tema" hissi | gövde 15px + düşük kontrast | 17px gövde, 1.7 satır, `--ink` |
| Doku kirli görünüyor | grain fotoğrafın üstünde | grain yalnız zemin katmanı |
| Serif karmaşası | aynı puntoda iki serif | hiyerarşiyi punto + ağırlıkla kur, gövde tek kesim |
| Süs fazlası | her kartta damar çizgisi | ekran başına 1 |
| Mevsim kayboluyor | yalnız renkli nokta | metin etiketi + renk |
| Koyu modda ayrım yok | gölge yetersiz | katman tonu + çizgi güçlendir |
| Mobilde taşıyor | ölçü + birim aynı satırda | birim alt satıra, tablo karta |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `organic-bio` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `acid-graphics` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/ | Woodland Trust · ağaç tanıma — yaprak/kabuk ayırt edici özellikleri ve künye alanları |
| https://www.kew.org/ | Kew · Royal Botanic Gardens — botanik kayıt dili, herbaryum künyesi |
| https://www.fs.usda.gov/research | USDA Forest Service · araştırma — orman ekolojisi verisi ve mevsim etiketleri |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — koyu orman zemininde metin kontrastı |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | www.w3.org — odak halkası görünürlüğü |

## AI brief

```text
Stil: Forest Bark (styles/81-forest-bark/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="forest-bark"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Lora 600) H1/H2/H3; --font-body (EB Garamond 400) gövde 17px/1.7;
  --font-mono (JetBrains Mono) etiket 11px +0.18em ve tüm ölçüler (tabular).
Yüzey: koyu peat zemin + kabuk dokusu (--grain .07). Katman: --bg / --surface / --surface-2;
  radius --radius 5px, --radius-lg 11px (chip 999px hap). Gölge yalnız kart/modal, çok yumuşak.
Renk: tek accent tan (--accent) eylem/seçim/mevsim; accent üstü metin --accent-ink.
Künye: Latince ad italik (--ink-soft) + Türkçe ad + ölçü (birim ayrı, mono tabular) + mevsim etiketi.
Hareket: enter 0.88s cubic-bezier(.32,.72,0,1) 30px stagger 0.12 · scroll top 82% 0.95s 36px once ·
  pin kapalı · hover 320ms scale 1.026; prefers-reduced-motion zorunlu.
Yasak: neon/parlak yeşil, geometrik sans display, cam/blur, gradient, 11px üstü panel radiusu, sürekli salınım, parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Forest Bark (forest-bark) · family: Nature & Organic (76–85)
Token: --bg #1f2620 · --surface #283029 · --ink #ecefe3 · --accent #d7a469 · --line rgba(236,239,227,.15)
Radius: 5px / 11px · Typography: Lora / EB Garamond / JetBrains Mono
Required: Her tür kaydı: Latince ad (italik) + Türkçe ad + yükseklik/çap + mevsim · Zemin kabuk dokulu (grain .07); düz beyaz yüzey yok · Katman ayrımı çizgi + iki ton açık surface ile; gölge yalnız kart/modal
Banned: Parlak doygun yeşil ve neon accent; ikinci sıcak accent tonu. · Geometrik/teknik sans display, büyük harf gövde. · Cam/blur, gradient zemin, parlama (glow).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="forest-bark"] {
  --bg: #1f2620; --bg-2: #19201a;
  --surface: #283029; --surface-2: #313b31;
  --ink: #ecefe3; --ink-soft: #b4bfa8; --ink-faint: #85917b;
  --accent: #d7a469; --accent-ink: #201708;
  --line: rgba(236,239,227,.15);
  --danger: #f74e3d;
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
  --radius: 5px; --radius-lg: 11px;
  --shadow: 0 2px 10px rgba(8,12,9,.45); --shadow-hard: none;
  --font-display: "Lora", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: 0;
}
```
