# 61 · Calibration Lab

> **In one sentence:** Her okumanın bir referansa ve bir toleransa bağlandığı, süsün yerini ölçüm bandının aldığı laboratuvar arayüzü.

| | |
|---|---|
| **Feeling** | ölçülü, klinik, güvenilir, sessiz |
| **Best for** | ölçüm cihazı yazılımı, kalibrasyon/doğrulama paneli, sensör & eşik izleme, sertifikalı raporlama |
| **Avoid** | tüketici uygulaması, e-ticaret vitrini, yaratıcı portfolyo — burada "soğuk" değil "davetsiz" olur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="calibration-lab"]` |
| **Composition** | `split` · `split` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Calibration Lab, arayüzü bir **ölçüm tablosu** olarak ele alır: her sayı bir birimle, her birim bir toleransla, her tolerans bir referansla birlikte görünür. Süsün yerini **okuma bandı** alır — mono, tabular, sağa hizalı, birim sütunu ayrı. Kullanıcı ekranda "güzel" değil "doğrulanabilir" arar.

Üç kurucu karar: (1) **iki aile, iki iş** — başlık ve etiketler Jost 600, gövde Inter 400, tüm sayısal okuma IBM Plex Mono 400 tabular; (2) **hairline yüzey** — katman ayrımı 1px `--line` çerçeve, gölge yalnız yüzen katmanda, cam/blur yok; (3) **durum üçlüsü** — her ölçüm geçerli / süresi geçmiş / bekliyor olarak hem renkle hem metinle işaretlenir.

Bedeli: sıcaklık ve kişilik yoktur. Bu stilin ucuz görünmemesini sağlayan tek şey **hizalama ve ondalık disiplini**; bir sütunun 2px kayması okumanın güvenilirliğini bitirir.

### What is not
- **Terminal UI (45) değildir:** terminal tek mono ailede ve koyu zeminde yaşar; bu stilde başlık Jost, gövde Inter'dir, zemin açık ve grid 20px gutter'lıdır.
- **Utility (44) değildir:** Utility genel ürün arayüzüdür, mavi accent ve 680px ölçüyle çalışır; Calibration Lab'de ölçüm bandı, tolerans çubuğu ve birim sütunu vardır.
- **Scandinavian Dark (40) değildir:** o stil koyu ve geniş boşluklu bir sessizlik kurar; burada yoğunluk yüksektir, satır 30px'tir.
- **Glassmorphism (08) değildir:** cam/blur bu stilde yasak; derinlik yalnız 1px çizgi ve 1px gölgeyle kurulur.

### Where it comes from
Laboratuvar enstrümanı panelinden (Fluke, Mettler Toledo, Sartorius) ve metroloji rapor geleneğinden: ölçüm değeri, birim, tolerans, referans, tarih. Bugün yeniden kullanılmasının nedeni: sensör/IoT ürünlerinin çoğu **eşik ve kalibrasyon** anlatmak zorunda ama bunu tüketici arayüzü diliyle yapınca güven kaybediyor. Klişeye dönüşmemesi için korunacak detay: **birim sütununun ve toleransın hiç gizlenmemesi**.

### Recognition test in 3 seconds
1. Sağa hizalı, tabular, sabit ondalıklı sayı sütunu ve ayrı bir **birim** sütunu var.
2. Ekranda en az bir **tolerans çubuğu**: 2px yüksekliğinde, hedef bandı gri, sapma accent.
3. Tüm etiketler 11px mono büyük harf, +0.14em aralıklı.
4. Paneller 3px radius ve 1px çizgi; hiçbir kartta yumuşak gölge yok.
5. Her ölçümün yanında durum metni: `geçerli` / `süresi geçmiş` / `bekliyor`.

## Visual signature
- **Kalibrasyon ızgarası:** hero görselinin zemininde 28px aralıklı 1px çizgi ızgara, `--line` opaklığında; sayfa zemininde tekrar etmez.
- **Okuma bandı:** `--surface-2` zemin + üst/alt 1px `--line`, 30px satır, 11–12px IBM Plex Mono, `font-variant-numeric: tabular-nums`.
- **Birim sütunu:** değerin sağında 44px sabit kolon, 11px mono, `--ink-faint`; birim asla değerin içinde değil.
- **Tolerans çubuğu:** 2px yükseklik, hedef bandı `--surface-2` ile dolu, sapma `--accent` ile işaretli, sınır çizgisi 1px kesikli.
- **Hairline çerçeve:** panel 1px `--line`, radius 3px; odaklı panelde ek olarak `--shadow-hard` (0 0 0 1px) — çift çizgi, gölge değil.
- **Durum üçlüsü:** 6px daire + metin. Daire tek başına anlam taşımaz; metin her zaman yanındadır.
- **İki punto kuralı:** gövde metni yalnız 15px, etiket yalnız 11px; arada üçüncü bir gövde puntosu yok.
- **Typography:** Jost (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#0d5f5c`; neutral scale `#eef1f0` → `#101a1a`.
- **Radius:** `3px` / `6px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her sayısal değer mono, tabular ve sabit ondalıkla; birim ayrı sütunda
2. Katman ayrımı 1px hairline; gölge yalnız yüzen katmanda
3. Etiketler 11px mono büyük harf +0.14em; gövde 15px Inter
4. Ölçüm durumu her zaman metinle de yazılır (geçerli / süresi geçmiş / bekliyor)
5. Tolerans ve referans değeri ekranda görünür; çıplak sayı yok
6. Izgara 20px gutter, hücreler aynı sağ kenarda biter

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#eef1f0` | page background | as a card background |
| `--bg-2` | `#e5eae9` | partition divider floor, table top | button background |
| `--surface` | `#fbfcfc` | kart, input, modal | full-page background |
| `--surface-2` | `#f3f7f6` | passive chip, hover background | primary button |
| `--ink` | `#101a1a` | title, body, icon | large background |
| `--ink-soft` | `#4a5c5b` | secondary text, description | — |
| `--ink-faint` | `#728482` | decorative label, separator text | interactive text |
| `--accent` | `#0d5f5c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f4fbfa` | text above accent | non-accent background |
| `--line` | `rgba(16,26,26,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.6:1** · `ink-soft/bg` **6.21:1** · `ink-faint/bg` **3.46:1 (decorative)** · `accent-ink/accent` **7.13:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Jost) | 28px (mobile 28px) | 400 | 1.08 | -0.02em |
| H2 | same | 26px | 600 | 1.2 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `3px` (buton, input, chip), `6px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- 8px üstü radius, yuvarlak kart, yumuşak/geniş gölge.
- Gradient zemin, cam/blur (`--blur: 0`), grain (`--grain: 0`).
- Animasyonlu sayaç, sürekli nabız, parallax, pin/scrub.
- İkinci accent tonu; accent'i dekorasyon olarak kullanmak.
- Büyük harf gövde metni ve 700+ ağırlık.
- Yalnız renkle durum bildirimi; birimsiz/ondalıksız değer.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.27:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | hero 7/5: solda başlık + tek CTA, sağda kalibrasyon paneli + okuma bandı | `shots/01-page.png` |
| Dashboard | çok yüksek | 3 KPI + tolerans çubukları + son ölçümler tablosu | `shots/01-page.png` |
| Form | orta | tek sütun alanlar, sağda birim etiketi, altta kalibrasyon notu | `shots/01-page.png` |
| Liste / tablo | çok yüksek | 30px satır, tabular sayı, birim sütunu, sağda durum chip'i | `shots/01-page.png` |
| Boş durum | düşük | "ölçüm yok" + ilk ölçümü başlat eylemi + referans hatırlatması | `shots/01-page.png` |
| Onboarding | orta | 3 adım: cihaz bağla → referans gir → tolerans seç | `shots/01-page.png` |
| Pricing | orta | karşılaştırma tablosu; ölçüm limitleri satır bazında | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek panel, tek eylem, doğrulama sonrası `geçerli` durumu | `shots/01-page.png` |
| Modal | orta | ölçüm detayı: değer, birim, tolerans, referans, tarih | `shots/01-page.png` |
| Bildirim | düşük | 36px toast, sol accent şerit, 4sn | `shots/01-page.png` |
| Hata | düşük | `--danger` çerçeve + neden + sonraki adım; sayı gizlenmez | `shots/01-page.png` |
| Profil / ayar | yüksek | anahtar/değer listesi, 30px satır, birim seçimi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.6:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.21:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.46:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.13:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.27:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 95.8 | ≥ 60 target | thin text |

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
| "Excel gibi" görünüyor | her şey eşit ağırlıkta | 3 KPI + 1 tolerans çubuğu öne çıkar, gerisi `--ink-soft` |
| Okuma güven vermiyor | ondalık/birim tutarsız | sabit 3 ondalık + ayrı birim sütunu |
| Sütunlar kayıyor | px genişlik | `ch` + tabular + sağa hizalama |
| Ekran soğuk değil "boş" | gölge yok + eşit boşluk | 56px bölüm ritmi + 1px ayırıcı |
| Kontrast düşük | `--ink-faint` gövdeye kullanılmış | birim/eksen dışında kullanma |
| Mobilde taşıyor | 12 kolon tablo | tablo içi kaydırma + dondurulmuş birim sütunu |
| Durum kayboluyor | yalnız renkli daire | daire + metin chip'i birlikte |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `aurora-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.fluke.com/en-us | Fluke · endüstriyel ölçüm cihazları — cihaz paneli hiyerarşisi, okuma bandı ve birim gösterimi |
| https://www.mt.com/ | Mettler Toledo · laboratuvar enstrümanları — kalibrasyon durumu, sertifika ve tolerans dili |
| https://www.ibm.com/design/language/data-visualization/ | IBM Design Language · data visualization — yoğun tablo, eksen ve seri renk disiplini |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — grafik çizgisi, çerçeve ve odak halkası 3:1 ölçütü |
| https://m3.material.io/foundations/layout/understanding-layout/grids | m3.material.io — 8/4px boşluk ölçeği ve kolon davranışı |

## AI brief

```text
Stil: Calibration Lab (styles/61-calibration-lab/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="calibration-lab"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Jost 600) başlıkta, --font-body (Inter 400) gövdede, --font-mono (IBM Plex Mono 400) tüm sayı ve etiketlerde.
  Etiket 11px +0.14em büyük harf; gövde 15px/1.62; H1 44px/1.06; sayılar tabular, sabit 3 ondalık.
Yüzey: 3 seviye (--bg / --surface / --surface + --shadow); radius --radius 3px, --radius-lg 6px;
  katman ayrımı 1px var(--line); seçili panelde --shadow-hard (0 0 0 1px).
Okuma bandı: --surface-2 zemin, 30px satır, değer sağa hizalı, birim ayrı 44px sütunda --ink-faint.
Tolerans çubuğu: 2px yükseklik; hedef bandı --surface-2, sapma --accent, sınır 1px kesikli.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; durum stilleri dahil.
Hareket: enter 0.42s cubic-bezier(.16,.84,.44,1) 8px stagger 0.045 · scroll top 88% 0.36s 12px once ·
  pin kapalı · hover 140ms scale 1.006; prefers-reduced-motion zorunlu.
Yasak: gölge (yüzen katman dışında), gradient, blur, cam, sayaç animasyonu, pin, ikinci accent, büyük harf gövde.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Calibration Lab (calibration-lab) · family: Industrial (56–65)
Token: --bg #eef1f0 · --surface #fbfcfc · --ink #101a1a · --accent #0d5f5c · --line rgba(16,26,26,.15)
Radius: 3px / 6px · Typography: Jost / Inter / IBM Plex Mono
Required: Her sayısal değer mono, tabular ve sabit ondalıkla; birim ayrı sütunda · Katman ayrımı 1px hairline; gölge yalnız yüzen katmanda · Etiketler 11px mono büyük harf +0.14em; gövde 15px Inter
Banned: 8px üstü radius, yuvarlak kart, yumuşak/geniş gölge. · Gradient zemin, cam/blur (`--blur: 0`), grain (`--grain: 0`). · Animasyonlu sayaç, sürekli nabız, parallax, pin/scrub.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="calibration-lab"] {
  --bg: #eef1f0; --bg-2: #e5eae9;
  --surface: #fbfcfc; --surface-2: #f3f7f6;
  --ink: #101a1a; --ink-soft: #4a5c5b; --ink-faint: #728482;
  --accent: #0d5f5c; --accent-ink: #f4fbfa;
  --line: rgba(16,26,26,.15);
  --danger: #d4271b;
  --danger-ink: #ffffff;
  --ok: #007f36;
  --ok-ink: #ffffff;
  --warn: #b35100;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 3px; --radius-lg: 6px;
  --shadow: 0 1px 2px rgba(16,26,26,.06); --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: 0;
}
```
