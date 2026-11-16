# 96 · Kinetic Marquee

> **In one sentence:** Tipografiyi sabit bir poster gibi değil, hızla akan bir bant gibi kullanan; eğimi ve ritmi scroll hızından alan hareket stili.

| | |
|---|---|
| **Feeling** | akan, ritmik, gergin, "yayında" |
| **Best for** | etkinlik/lansman landing'i, ajans vitrini, medya/müzik ürünü, ürün lansman duyurusu |
| **Avoid** | yoğun veri paneli, mutabakat/finans tablosu, uzun okuma (rapor, sözleşme) — akan bant dikkati böler |
| **Difficulty** | orta (hareketi durdurulabilir ve erişilebilir tutmak) · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="kinetic-marquee"]` |
| **Composition** | `sticky` · `pill` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Kinetic Marquee, tipografiyi **hız** ile kuran stildir: 32px yüksekliğinde **marquee bandı** (28s / 44s iki hız sınıfı), scroll hızına bağlı en fazla **6° skew**, harf başına 40ms gecikmeli **harf dalgası** ve 620ms'lik **ağırlık geçişi**. Kurucu kararları üç tanedir. Birincisi **hareket eksen**: büyüklük puntodan değil, katmanın akmasından gelir; display 72px'i geçmez. İkincisi **tek yön**: her şey yatay akar; rotasyon ve diagonal yoktur (o, 37'nin imzasıdır). Üçüncüsü **durdurulabilirlik**: her bant hover'da ve reduced-motion'da durur — hareket dekor değil, kontrol edilebilir bir katmandır.

Kazandığı şey: sayfanın "canlı" okunması — tek bir kaynak dosyası (CSS keyframes) ile ekran hareket eder. Feda ettiği şey: **sakinlik ve okuma süresi**; 58 ch ölçü ve tek bant kuralı bu bedeli sınırlar.

### What is not
- **Kinetic Type (37) değildir** — dört ölçülebilir fark: (1) **font**: 37 Anton kullanır, burada Chakra Petch 600; (2) **zemin/accent**: 37 siyah `#0e0e10` + asit `#e8ff47`, burada sıcak kırık beyaz `#f4f1ea` + soğuk indigo `#2d3ad0`; (3) **pin/scrub**: 37'de pin yok, burada pin açık (`scrub 0.25`, `+240%`); (4) **ölçek-kontrast**: 37'de display 96px ve tracking **-0.03em**, burada display 56–72px ve tracking **+0.02em** — büyüme puntodan değil hareketten gelir.
- **Acid Graphics (15) değildir:** 15 parlak/neon ve gradyanla doldurur; burada `--blur: 0`, gradyan yok, tek soğuk accent.
- **Editorial Design (03) değildir:** 03 geniş satır aralığı ve serif ile okutur; burada display sıkı (1.04) ve hareketli.
- **Swiss Design (02) değildir:** 02 tamamen statiktir ve ızgaraya itaat eder; burada ızgara korunur ama bir katman sürekli akar.
- **"Animasyonlu landing şablonu" değildir:** kimlik bandın **hız sınıfı** ve skew sınırıdır; rastgele fade-in yığını değil.

### Where it comes from
Marquee, 20. yüzyıl baskı ve borsa bantlarından (ticker) gazete binası cephelerine, oradan TV alt bantlarına geçen bir okuma biçimidir; dijitalde CSS `translateX` döngüsüyle yeniden doğdu. 2010'lar sonrası "velocity UI" akımı (scroll hızına bağlı skew/scale) bunu etkileşimli hâle getirdi. Klişeye dönüşmemesi için korunacak detay: **tek yön + en fazla iki bant + durdurulabilirlik**.

### Recognition test in 3 seconds
1. Sayfada 32px yüksekliğinde, kendi kendine akan bir yazı bandı var.
2. Hiçbir öğe döndürülmemiş/diagonal değil; her şey yatay akıyor.
3. Display Chakra Petch ve harfler birbirine değmiyor (pozitif tracking).
4. Kaydırırken bloklar hafifçe eğiliyor (≤6°) ve durunca düzeliyor.
5. Bant üzerine gelince hareket duruyor.

## Visual signature
- **Marquee bandı:** 32px yükseklik, 12px büyük harf display, `0.28em` tracking, 28s (birincil) / 44s (ikincil, ters yön) döngü.
- **Durdurma:** bantta `animation-play-state: paused` hover'da; `prefers-reduced-motion` açıkken hiç çalışmaz.
- **Hıza bağlı skew:** yalnız `hero-visual` katmanında, en fazla `-6deg`; sayfa dururken 0°.
- **Harf dalgası:** harf başına 40ms gecikme, en çok 24 harf, toplam ≤ 1s.
- **Ağırlık geçişi:** 400 → 600, 620ms; aynı anda yalnız tek öğede.
- **İz çizgisi:** kartın üst kenarında 2px accent çizgi; hover'da 24px'e uzar (hız ipucu).
- **Hover dili:** 180ms `translateX(2px)` + ölçek `1.006`; gölge yok, parlama yok.
- **Typography:** Chakra Petch (display) + Space Grotesk (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#2d3ad0`; neutral scale `#f4f1ea` → `#14161a`.
- **Radius:** `3px` / `8px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Marquee bandı 32px yükseklik, en çok 2 bant; hız sınıfları 28s ve 44s döngü
2. Bant hover'da ve `prefers-reduced-motion`'da durur; durdurma düğmesi her bantta görünür
3. Skew yalnız scroll hızına bağlı ve en fazla 6°; sayfa dururken 0°
4. Harf dalgası: harf başına 40ms gecikme, en çok 24 harf
5. Display tracking pozitif (0.02em) ve display 72px'i geçmez; büyüme hareketle olur
6. Ağırlık geçişi (400 → 600) 620ms'de, yalnız tek öğede aynı anda

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4f1ea` | page background | as a card background |
| `--bg-2` | `#eae5da` | partition divider floor, table top | button background |
| `--surface` | `#fdfbf6` | kart, input, modal | full-page background |
| `--surface-2` | `#f2eee4` | passive chip, hover background | primary button |
| `--ink` | `#14161a` | title, body, icon | large background |
| `--ink-soft` | `#4a4d57` | secondary text, description | — |
| `--ink-faint` | `#82858f` | decorative label, separator text | interactive text |
| `--accent` | `#2d3ad0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f7ff` | text above accent | non-accent background |
| `--line` | `rgba(20,22,26,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.06:1** · `ink-soft/bg` **7.48:1** · `ink-faint/bg` **3.27:1 (decorative)** · `accent-ink/accent` **7.5:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 56px (mobile 32px) | 500 | 1.06 | -0.02em |
| H2 | same | 24px | 600 | 1.18 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `3px` (buton, input, chip), `8px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Rotasyonlu kart, diagonal accent şerit, eğik bölüm başlığı.
- Asit/neon palet; ikinci doygun renk.
- 90px üstü poster tipografisi ve negatif tracking.
- Durdurulamayan sonsuz animasyon; ekran başına 3'ten fazla hareketli katman.
- Gradient metin, parlama, `blur` geçişi.
- Otomatik oynayan video benzeri döngü (bant dışında).
- Uydurma marka/etkinlik adı; eksik içerik `{{headline}}` gibi işaretli yer tutucu olur.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.73:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | hero altında 28s bant, 7/5 içerik, skew'li görsel katman | `shots/01-page.png` |
| Dashboard | orta | 2 satır kart + üstte ince bant (44s) | `shots/01-page.png` |
| Form | düşük | 42px alanlar, tek kolon, bant yalnız üstte | `shots/01-page.png` |
| Liste / tablo | orta | 36px satır, hover'da sağa kayma | `shots/01-page.png` |
| Boş durum | orta | durmuş bant + tek CTA ("başlat") | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım, her adımda bant hızı artar (44s → 28s) | `shots/01-page.png` |
| Pricing | orta | 3 kart, iz çizgisi hover'da uzar | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | dar kart, bant yok (odak dağılmasın) | `shots/01-page.png` |
| Modal | orta | sağdan akan giriş, 2px accent kenar | `shots/01-page.png` |
| Bildirim / toast | orta | tek geçişli metin, hover'da durur | `shots/01-page.png` |
| Hata | düşük | bant durur, `--danger` sol şerit, statik mesaj | `shots/01-page.png` |
| Profil / ayar | orta | 36px satır + "hareketi azalt" anahtarı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.06:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.48:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.27:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.5:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.73:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.6 | ≥ 60 target | thin text |

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
| Sayfa "animasyon şablonu" gibi duruyor | 3'ten fazla hareketli katman | bant sayısını 2'ye, diğer hareketi 1'e indir |
| 37-kinetic-type ile karışıyor | diagonal şerit / rotasyon eklenmiş | rotasyonu kaldır, hareketi velocity'ye taşı |
| Okunmuyor | skew metne uygulanmış | skew yalnız görsel katmanda, metin 0° |
| Göz yoruyor | bant hızı 20s altına inmiş | 28s/44s sınıflarında kal |
| Erişilebilirlik ihlali | bant durdurulamıyor | hover + durdurma düğmesi + reduced-motion |
| Kartlar hareketsiz duruyor | iz çizgisi hover'da uzamıyor | 2px → 24px geçişini 340ms'de kur |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `kinetic-type` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `acid-graphics` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations | MDN · CSS animations — marquee döngüsü, iteration ve paused durumu |
| https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew | MDN · skew() — hıza bağlı eğim sınırı ve eksen seçimi |
| https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | WCAG 2.2 · Pause, Stop, Hide — sonsuz akan bandın durdurulabilir olması |
| https://fonts.google.com/specimen/Chakra+Petch | Google Fonts · Chakra Petch — teknik display ve 600 ağırlık davranışı |

## AI brief

```text
Stil: Kinetic Marquee (styles/96-kinetic-marquee/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="kinetic-marquee"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Chakra Petch 600, pozitif tracking) başlık ve bantta,
           --font-body (Space Grotesk) gövdede, --font-mono (JetBrains Mono) etiket/sayıda.
Yüzey: --bg / --surface / --surface-2; radius 3px/8px; gölge YOK; ayrım 1px --line + kart üstü 2px accent iz.
Hareket: 32px marquee bandı (28s/44s, hover+reduced-motion'da durur), scroll hızına bağlı skew <= 6deg
         (yalnız görsel katman), harf dalgası 40ms/harf <= 24 harf.
Imza: enter 0.62s cubic-bezier(.12,.9,.2,1) 0px / stagger 0.09; scroll top 70% 0.5s 0px once:true;
      pin acik scrub 0.25 / +240%; hover 180ms scale 1.006.
Yasak: rotasyon/diagonal serit (o 37-kinetic-type'in imzasi), asit palet, 90px ustu display, durdurulamayan bant.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Kinetic Marquee (kinetic-marquee) · family: Motion & Optics (96–105)
Token: --bg #f4f1ea · --surface #fdfbf6 · --ink #14161a · --accent #2d3ad0 · --line rgba(20,22,26,.14)
Radius: 3px / 8px · Typography: Chakra Petch / Space Grotesk / JetBrains Mono
Required: Marquee bandı 32px yükseklik, en çok 2 bant; hız sınıfları 28s ve 44s döngü · Bant hover'da ve `prefers-reduced-motion`'da durur; durdurma düğmesi her bantta görünür · Skew yalnız scroll hızına bağlı ve en fazla 6°; sayfa dururken 0°
Banned: Rotasyonlu kart, diagonal accent şerit, eğik bölüm başlığı. · Asit/neon palet; ikinci doygun renk. · 90px üstü poster tipografisi ve negatif tracking.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="kinetic-marquee"] {
  --bg: #f4f1ea; --bg-2: #eae5da;
  --surface: #fdfbf6; --surface-2: #f2eee4;
  --ink: #14161a; --ink-soft: #4a4d57; --ink-faint: #82858f;
  --accent: #2d3ad0; --accent-ink: #f7f7ff;
  --line: rgba(20,22,26,.14);
  --danger: #d5271b;
  --danger-ink: #ffffff;
  --ok: #007f36;
  --ok-ink: #ffffff;
  --warn: #b35200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 3px; --radius-lg: 8px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
