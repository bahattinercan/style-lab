# 50 · Lab Instrument

> **In one sentence:** Her ölçümün birimi, toleransı ve kanal numarasıyla birlikte kadran yayı üzerinde okunduğu, köşe artılarıyla çerçevelenmiş enstrüman yüzeyi.

| | |
|---|---|
| **Feeling** | kesin, soğuk, kalibre, "ölçülmüş" |
| **Best for** | bilimsel ölçüm paneli, laboratuvar enstrümantasyonu, endüstriyel sensör izleme, kalibrasyon arayüzü |
| **Avoid** | tüketici uygulaması, moda kampanyası, eğlence/oyun — birim ve tolerans yükü ağır kalır |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="lab-instrument"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Lab Instrument, ekranı bir **ölçüm cihazı** gibi davranmaya zorlar: her kart bir kanaldır (CH-01…), her değer birim ve toleransla yazılır (`24,81 mV ±0,02`), her panelin köşesinde crosshair işareti ve altında 180°'lik kadran yayı vardır. Kurucu kararları üç tanedir. Birincisi **birim zorunluluğu**: birimsiz sayı ekranda duramaz; birim, değerden küçük ve mono yazılır. İkincisi **fiziksel metafor**: birincil ölçüm kartı `--shadow-hard` ile 2px ofset alır, buton basıldığında gölge kaybolur — düğme gerçekten "basılmış" olur. Üçüncüsü **teknik çizim dili**: çizim 1px, dolgu yok; süsleme yerine cetvel tıkları ve kadran yayı.

Bedeli: bu arayüz sıcak değildir ve öğrenme eğrisi vardır (birim/tolerans okuryazarlığı). Kazancı: bir ölçümün **güvenilirliğini** (tolerans, kalibrasyon tarihi, örnekleme hızı) aynı bakışta göstermesi.

### What is not
- **Telemetry Grid (46) değildir:** 46 açık grid üzerinde 12 tile ve eşik durumu gösterir; 50'de 6 kanal, kadran yayı, tolerans ve kalibrasyon tarihi vardır; radius 4/10 yerine 2/8.
- **Executive KPI (48) değildir:** 48 serif ve 0px radius ile kâğıt raporudur; 50 Michroma (geniş, geometrik) ve crosshair ile enstrümandır — 48'de tolerans yoktur.
- **Cybercore (23) değildir:** 23 neon mint + HUD süsü; 50 kobalt mavi + teknik çizim, sıfır parlama.
- **Conceptual Sketch (32) değildir:** 32 el çizimi ve kâğıt dokusudur; 50 cetvel ve kalem disipliniyle **ölçekli** çizimdir (tıklar 4px, çizgi 1px).

### Where it comes from
Analog enstrümantasyondan: osiloskop, spektrum analizörü, sıcaklık kontrolörü ön panelleri. Sayısal arayüze taşınan üç alışkanlık bugün de işlevsel: kanal numaralandırma (hangi sensör), birim/tolerans (ne kadar güvenilir), kalibrasyon damgası (ne zaman doğrulandı). Klişeye dönüşmemesi için korunacak detay: **birim ve toleransın asla atlanmaması** ve 2px ofset gölgenin yalnız birincil ölçüm kartında kalması.

### Recognition test in 3 seconds
1. Kartların sol üst köşesinde 8px crosshair, sağ üstte `CH-01` gibi kanal numarası var.
2. Her değerin yanında birim (`mV`, `°C`, `Hz`) ve altında `±` tolerans yazıyor.
3. Değerlerin altında yarım daire kadran yayı ve 1px eşik tıkları görünüyor.
4. Başlıklar Michroma ile geniş ve büyük harf; gövde Inter, sayılar Share Tech Mono.
5. Nav'da kalibrasyon tarihi (`CAL 2026-02-11`) ve örnekleme hızı yazıyor.

## Visual signature
- **Kadran yayı:** 180°, 1px yay, 40px yükseklik; iğne 2px accent, eşik tıkları 1px `--warn`/`--danger`; yayın altında birim etiketi 10px mono.
- **Crosshair köşe:** ölçüm kartının sol üst ve sağ alt köşesinde 8px uzunluğunda 1px accent çizgi (artı işareti); yalnız ölçüm kartlarında.
- **2px sert gölge:** yalnız birincil ölçüm kartında ve birincil butonda `--shadow-hard: 2px 2px 0 rgba(14,21,23,.13)`; basınca gölge kaybolur, öğe 2px kayar.
- **Cetvel tıkları:** bölüm ayırıcısı 6px yüksekliğinde, 4px aralıklı 1px dikey çizgiler; hero zemininde 64px aralıklı dikey kurallar.
- **Birim/tolerans çifti:** değer 40px mono tabular + birim 12px mono + `±0,02` 10px; üçü aynı satır grubunda, birim asla kesilmez.
- **Michroma başlık:** yalnız 400 ağırlık, büyük harf, `.02em` tracking; 32px H1.
- **Hover dili:** 190ms'de kart zemini `--surface-2`'e kayar, görsel ölçek `1.018`; gölge büyümez (fizik kuralı).
- **Typography:** Michroma (display) + Inter (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#1a5c8a`; neutral scale `#f5f7f7` → `#0e1517`.
- **Radius:** `2px` / `8px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Her ölçüm değeri birim + tolerans ile yazılır (`24,81 mV ±0,02`); birimsiz sayı yok
2. Kanal numarası (CH-01…) her kartta ve tabloda görünür
3. Kadran yayı 180°, eşik tıkları 1px; iğne 2px ve accent renkli
4. Köşe crosshair işareti yalnız ölçüm kartlarında, 8px uzunlukta 1px çizgi
5. Kalibrasyon durumu ve tarihi nav'da sürekli görünür
6. Örnekleme hızı (Hz) ve son güncelleme damgası her panelde yazılır

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f5f7f7` | page background | as a card background |
| `--bg-2` | `#eaeff0` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f2f6f7` | passive chip, hover background | primary button |
| `--ink` | `#0e1517` | title, body, icon | large background |
| `--ink-soft` | `#43565c` | secondary text, description | — |
| `--ink-faint` | `#76898f` | decorative label, separator text | interactive text |
| `--accent` | `#1a5c8a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f4f8fa` | text above accent | non-accent background |
| `--line` | `rgba(14,21,23,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.16:1** · `ink-soft/bg` **7.17:1** · `ink-faint/bg` **3.4:1 (decorative)** · `accent-ink/accent` **6.68:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 32px (mobile 22px) | 600 | 1.12 | -0.02em |
| H2 | same | 21px | 600 | 1.22 | -0.015em |
| H3 | same | 16px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

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
- Radius: `2px` (buton, input, chip), `8px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Birimsiz veya toleranssız ölçüm değeri.
- 8px üstü radius, cam yüzey, blur, neon parlama.
- Süsleme amaçlı fotoğraf/illüstrasyon; 3B kadran.
- Renk-only eşik uyarısı (tık işareti + metin zorunlu).
- Yumuşak yayılan gölge (yalnız blur'suz ofset gölge).
- Birden fazla taşmalı yay animasyonu; sürekli dönen gösterge.
- Uydurma ölçüm/kalibrasyon tarihi; eksik veri `{{value}}` gibi işaretli yer tutucu olur.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.14:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 7/5 kadran + kanal listesi, cetvel kurallı zemin | `shots/01-page.png` |
| Dashboard | yüksek | 6 kanal kartı + kadran + kalibrasyon şeridi | `shots/01-page.png` |
| Form | düşük | kanal ayarı: eşik, birim, örnekleme hızı; 36px alanlar | `shots/01-page.png` |
| Liste / tablo | yüksek | kanal tablosu 36px satır, sapma (±) sütunu | `shots/01-page.png` |
| Boş durum | orta | "kanal bağlı değil" + kalibrasyon CTA'sı | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: kanal ekle → birim seç → kalibre et | `shots/01-page.png` |
| Pricing | orta | kanal sayısı / örnekleme planı tablosu | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | kurum girişi, mono alanlar, dar kart | `shots/01-page.png` |
| Modal | orta | kanal detayı: eşik tıkları sürüklenebilir | `shots/01-page.png` |
| Bildirim / toast | orta | eşik aşımı: kanal + değer + tolerans | `shots/01-page.png` |
| Hata | düşük | "sensör yanıt vermiyor" + son geçerli değer + damga | `shots/01-page.png` |
| Profil / ayar | orta | kalibrasyon takvimi, birim sistemi (SI/imperial) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.16:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.17:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.4:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.68:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.14:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 100 | ≥ 60 target | thin text |

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
| Ekran "dashboard" gibi duruyor | birim/tolerans yok, kanal numarası yok | her değere birim + `±` tolerans + CH no ekle |
| Butonlar "yüzen" görünüyor | yumuşak blur gölge kullanılmış | `--shadow-hard` (blur'suz 2px ofset) kullan |
| Kadran okunmuyor | yay 180° değil veya iğne 1px | yayı 180°'ye sabitle, iğneyi 2px yap |
| Koyu modda gölge kayboluyor | açık renkli ofset gölge | koyuda `rgba(0,0,0,.6)` ofset kullan |
| Hiyerarşi kayboluyor | Michroma 700 eklenmiş | yalnız 400; hiyerarşiyi punto ve boşlukla kur |
| Mobilde taşma | birim etiketi değerden ayrılmış | değer + birim aynı satır grubunda, birim `nowrap` |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `telemetry-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| garnish | `conceptual-sketch` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.nist.gov/pml | NIST · Physical Measurement Laboratory — birim, tolerans ve kalibrasyon gösterimi |
| https://en.wikipedia.org/wiki/Instrumentation | Instrumentation (Wikipedia) — kanal/kadran metaforu ve ölçüm panosu düzeni |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html | WCAG 2.2 · Target Size (Enhanced) — 44px üstü dokunma hedefi (enstrüman düğmeleri) |
| https://fonts.google.com/specimen/Michroma | Google Fonts · Michroma — geniş teknik display ve yalnız 400 ağırlık sınırı |

## AI brief

```text
Stil: Lab Instrument (styles/50-lab-instrument/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="lab-instrument"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Michroma 400, büyük harf) başlıkta, --font-body (Inter) gövdede,
           --font-mono (Share Tech Mono) ölçüm değeri, birim ve etiketlerde; tabular-nums zorunlu.
Yüzey: --bg / --surface / --surface-2 + blur'suz ofset gölge (--shadow, birincil ölçümde --shadow-hard);
        radius 2px/8px; cam/blur yok.
Bileşen: "Bileşen reçeteleri" birebir; kanal kartı 16px padding + kadran yayı + crosshair köşe.
Izgara: gutter 16px, container 1280px, 7/5 asimetri, bölüm ritmi 56px.
Hareket: enter 0.42s cubic-bezier(.34,1.28,.64,1) 14px / stagger 0.045; scroll top 86% 0.5s 18px once:true;
         pin açık scrub 0.75 / +110%; hover 190ms scale 1.018. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (birimsiz ölçüm, yumuşak gölge, 3B kadran).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Lab Instrument (lab-instrument) · family: Data & Indicator (46–55)
Token: --bg #f5f7f7 · --surface #ffffff · --ink #0e1517 · --accent #1a5c8a · --line rgba(14,21,23,.14)
Radius: 2px / 8px · Typography: Michroma / Inter / Share Tech Mono
Required: Her ölçüm değeri birim + tolerans ile yazılır (`24,81 mV ±0,02`); birimsiz sayı yok · Kanal numarası (CH-01…) her kartta ve tabloda görünür · Kadran yayı 180°, eşik tıkları 1px; iğne 2px ve accent renkli
Banned: Birimsiz veya toleranssız ölçüm değeri. · 8px üstü radius, cam yüzey, blur, neon parlama. · Süsleme amaçlı fotoğraf/illüstrasyon; 3B kadran.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="lab-instrument"] {
  --bg: #f5f7f7; --bg-2: #eaeff0;
  --surface: #ffffff; --surface-2: #f2f6f7;
  --ink: #0e1517; --ink-soft: #43565c; --ink-faint: #76898f;
  --accent: #1a5c8a; --accent-ink: #f4f8fa;
  --line: rgba(14,21,23,.14);
  --danger: #d92c20;
  --danger-ink: #ffffff;
  --ok: #00833a;
  --ok-ink: #ffffff;
  --warn: #b75500;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 8px;
  --shadow: 0 1px 2px rgba(14,21,23,.08); --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
