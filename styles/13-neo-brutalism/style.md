# 13 · Neo-Brutalism

> **In one sentence:** Arayüzün "tasarlanmış" değil "basılmış" görünmesi; kalın siyah kontur, ofset gölge, doygun düz renk ve büyük harf tipografi.

| | |
|---|---|
| **Feeling** | iddialı, dürüst, indie, "poster gibi" |
| **Best for** | indie SaaS, topluluk/etkinlik, kreatif araç, dijital ürün lansmanı |
| **Avoid** | finans, sağlık, resmi kurum, yoğun veri tablosu, yaşlı kitle |
| **Difficulty** | düşük (kural az) · **Accessibility** |  |
| **Family** | Bold (13–18) · **Token** | `kit/tokens.css` → `[data-style="neo-brutalism"]` |
| **Composition** | `split-reverse` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Web brutalisminin evcilleştirilmiş hali: **kalın kontur (2–3px siyah)**, **ofset sert gölge (4–8px, blur yok)**, **doygun düz renkler**, **büyük harf display**. Süs yok ama boşluk da yok — yüzeyler birbirine "yapıştırılmış" hissi verir; her öğe elle kesilip yapıştırılmış gibi durur.

Kazandığı şey karakter ve okunurluk: siyah kontur + yüksek kontrast, ekranı bir bakışta taranabilir yapar. Feda ettiği şey incelik: hiyerarşi gölge derinliğiyle değil, kalınlık ve renk bloklarıyla kurulur.

### What is not
- **Anti-design değildir.** Anti-design kasıtlı olarak ızgarayı bozar; neo-brutalism **sıkı bir ızgaraya** oturur, sadece görsel dili serttir.
- **Memphis değildir.** Memphis desen ve şekil neşesi ekler; neo-brutalism desensizdir, renk bloğu ve konturla konuşur.
- **Skeuomorphism değildir.** Gölge gerçekçi ışık değil, **ofset** — ışık yönü yok, sadece kayma var.
- **"Kalın font + sarı" değildir.** Kontur kalınlığı tutarlı değilse, gölge ofseti her bileşende farklıysa sonuç dağınık olur.
- **Karanlık tema değildir.** Taban genelde kırık beyaz/açık; renk blokları doygun.

### Where it comes from
2010'ların "flat + minimal" tekdüzeliğine tepki olarak 2020'lerde yükseldi; Gumroad gibi ürünlerin arayüzü ve neo-brutalist React kütüphaneleriyle popülerleşti. Bugün küçük ekiplerin "kurumsal görünmeyen" kimlik kurma aracı.

### Recognition test in 3 seconds
1. Kenarlıklar **siyah ve 2px+** mı? (1px gri ise stil bozulmuş.)
2. Gölge **blur'suz ofset** mi (4–8px sağ-alt), yoksa yumuşak mı? (Yumuşaksa yanlış stil.)
3. Display tipografi **büyük harf ve çok kalın** mı (Archivo Black/Anton)?
4. Renkler düz mü, gradient var mı? (Gradient varsa stil bozulmuş.)
5. Köşe yarıçapı 0–4px mı? (12px+ ise neo-brutalism değil, "soft brutalism".)

## Visual signature
- **Kontur:** `2px solid #000` (büyük yüzeylerde 3px), tüm bileşenlerde **aynı kalınlık**.
- **Ofset gölge:** `4px 4px 0 #000` (küçük öğe), `8px 8px 0 #000` (hero/kart). Blur **0**.
- **Display:** Archivo Black / Anton, büyük harf, `-0.02em` tracking, satır aralığı 0.95–1.0.
- **Renk bloğu:** accent pembe `#fb5887`, sticker sarısı `#ffd93d` (yüzey-2), zemin kırık beyaz `#fffdf5`.
- **Etkileşim:** hover'da gölge **kaybolur**, öğe 4px sağ-alt'a gider (`translate(4px,4px)`) — "basıldı" hissi. Ters yön (gölge büyür) yanlıştır.
- **Doku:** yok (`--grain: 0`); kağıt hissi istenirse tek katman %3 grain, fazlası konturu kirletir.
- **Typography:** Archivo Black (display) + Space Grotesk (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#fb5887`; neutral scale `#fffdf5` → `#000000`.
- **Radius:** `0px` / `4px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Tek kontur kalınlığı.** Tüm bileşenlerde 2px siyah; büyük yüzeylerde 3px. Karışım yok.
2. **Ofset gölge, blur yok.** 4px (küçük) / 8px (hero-kart) / 12px (modal), hepsi aynı yönde.
3. **Radius 0–4px.** Buton/input/chip 0, kart/modal 4px.
4. **Uppercase sadece display/buton/etiket.** Gövde metni her zaman normal case.
5. **En fazla 3 doygun renk** (pembe, sarı, krem) + siyah; gradient yok.
6. **Hover = basılma.** Gölge küçülür, öğe gölge yönüne kayar; gölge büyümez.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fffdf5` | page background | as a card background |
| `--bg-2` | `#ffe9a8` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#ffd93d` | passive chip, hover background | primary button |
| `--ink` | `#000000` | title, body, icon | large background |
| `--ink-soft` | `#2b2b2b` | secondary text, description | — |
| `--ink-faint` | `#6b6b6b` | decorative label, separator text | interactive text |
| `--accent` | `#fb5887` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#000000` | text above accent | non-accent background |
| `--line` | `#000000` | all borders | text colour |

- Measured contrast: `ink/bg` **20.62:1** · `ink-soft/bg` **13.9:1** · `ink-faint/bg` **5.23:1 (decorative)** · `accent-ink/accent` **6.85:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 64px (mobile 36px) | 400 | 1.08 | -0.02em |
| H2 | same | 32px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 16px | 400 | 1.62 | 0 |
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
- Radius: `0px` (buton, input, chip), `4px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Gradient, blur, cam, yumuşak gölge, iç gölge.
- 4px üzeri radius, karışık kontur kalınlığı.
- Gövdede büyük harf; sahte bold (`font-synthesis`).
- Gri tonlarının çoğaltılması, dördüncü doygun renk.
- Ödeme/giriş ekranında tam yoğunluk; bu ekranlarda stili düşür.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.07:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 64px büyük harf başlık, altında 1 satır gövde, 2 buton (biri accent), sağda sarı çerçeveli görsel bloğu | `shots/01-page.png` |
| Dashboard | düşük | KPI kartları 2px kenar + 4px gölge; grafikte sadece 2 renk; tablo satır ayrımı 2px | `shots/01-page.png` |
| Form | düşük | Tek sütun 520px, input 48px, etiket mono uppercase; hata metni kalın | `shots/01-page.png` |
| Liste / tablo | düşük | 56px satır, 2px ayırıcı; durum chip'i (aktif accent, pasif sarı) | `shots/01-page.png` |
| Boş durum | orta | Kalın konturlu kutu + tek cümle + sticker buton | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım, her adım tam ekran renk bloğu; büyük numara (01/02/03) | `shots/01-page.png` |
| Pricing | yüksek | 3 kart, orta kart sarı zemin + 8px gölge + "en çok seçilen" şerit | `shots/01-page.png` |
| Giriş / ödeme | düşük | 440px kart, 2 alan, 1 buton; sticker dekor yok (güven) | `shots/01-page.png` |
| Modal | orta | 3px kenar, 12px ofset gölge, başlık büyük harf, 2 buton | `shots/01-page.png` |
| Bildirim / toast | orta | Siyah zemin + beyaz metin + 2px beyaz kenar; 4sn | `shots/01-page.png` |
| Hata | düşük | Kalın kırmızı kenar + 13/700 açıklama + "tekrar dene" butonu | `shots/01-page.png` |
| Profil / ayar | orta | Sol nav 2px ayırıcı; ayar satırı 56px, toggle kalın konturlu | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 20.62:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 13.9:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.23:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.85:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.07:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 104.8 | ≥ 60 target | thin text |

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
| Dağınık, ucuz görünüyor | Kontur kalınlığı ve gölge ofseti tutarsız | Tek kalınlık (2px) + tek ofset (4px); büyük yüzeyde 3px/8px |
| "Soft brutalism" olmuş | Radius 12px+, yumuşak gölge | Radius 0–4px, gölge blur 0 |
| Göz yoruyor | Her blok doygun renk | Doygun rengi aksiyona ayır; gövde beyaz zeminde |
| Hover "zıplıyor" | Gölge büyütülmüş | Hover'da gölge **küçülür**, öğe gölge yönüne kayar |
| Mobilde taşma | Ofset gölge kenardan taşıyor | Container'a 8–12px iç boşluk, taşan gölge için `overflow: visible` + padding |
| Okunmuyor | Büyük harf gövde metni | Uppercase yalnızca H1/H2/buton/etiket |
| Güven kaybı (ödeme ekranı) | Stil güven ekranında tam yoğunlukta | Ödeme/giriş ekranlarında stili düşür (sadece kontur + buton) |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `memphis` | Same level of seriousness; accent sharing is not allowed |
| garnish | `anti-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `conceptual-sketch` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://gumroad.com | Gumroad — Gerçek üründe neo-brutalist buton/kart davranışı |
| https://www.neobrutalism.dev | Neobrutalism.dev — Bileşen seti: buton, kart, input durumları |
| https://brutalistwebsites.com | Brutalist Websites — Daha ham örnekler; dozu ayarlamak için |

## AI brief

```text
Stil: Neo-Brutalism (styles/13-neo-brutalism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="neo-brutalism"]; hard-coded renk/gölge/radius YASAK.
Kontur: 2px solid var(--line) tüm bileşenlerde; büyük yüzeylerde 3px. Kalınlık asla karışmaz.
Gölge: var(--shadow) = 4px 4px 0 var(--ink), blur yok. Hero/kart 8px. Hover'da gölge KÜÇÜLÜR, öğe gölge yönüne kayar.
Radius: --radius 0 (buton/input/chip), --radius-lg 4px (kart/modal).
Tipografi: Archivo Black H1/H2 uppercase -0.02em; gövde Space Grotesk 16/1.55 (uppercase YOK); etiket mono 11 uppercase.
Renk: bg #fffdf5, surface #fff, sticker #ffd93d, accent #fb5887; 4. doygun renk ekleme.
Hareket: 90–180ms ease-out, translate + opacity; spring/parallax yasak.
Yasak: gradient, blur, cam, yumuşak gölge, 4px üstü radius, gövdede uppercase.
Çıktı: kod + tek paragraf not (kontur/gölge tutarlılığını nasıl korudun).

Style: Neo-Brutalism (neo-brutalism) · family: Bold (13–18)
Token: --bg #fffdf5 · --surface #ffffff · --ink #000000 · --accent #fb5887 · --line #000000
Radius: 0px / 4px · Typography: Archivo Black / Space Grotesk / JetBrains Mono
Required: **Tek kontur kalınlığı.** Tüm bileşenlerde 2px siyah; büyük yüzeylerde 3px. Karışım yok. · **Ofset gölge, blur yok.** 4px (küçük) / 8px (hero-kart) / 12px (modal), hepsi aynı yönde. · **Radius 0–4px.** Buton/input/chip 0, kart/modal 4px.
Banned: Gradient, blur, cam, yumuşak gölge, iç gölge. · 4px üzeri radius, karışık kontur kalınlığı. · Gövdede büyük harf; sahte bold (`font-synthesis`).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="neo-brutalism"] {
  --bg: #fffdf5; --bg-2: #ffe9a8;
  --surface: #ffffff; --surface-2: #ffd93d;
  --ink: #000000; --ink-soft: #2b2b2b; --ink-faint: #6b6b6b;
  --accent: #fb5887; --accent-ink: #000000;
  --line: #000000;
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00873e;
  --ok-ink: #ffffff;
  --warn: #bc5900;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 4px;
  --shadow: 4px 4px 0 #000000; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
