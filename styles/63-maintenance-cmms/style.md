# 63 · Maintenance CMMS

> **In one sentence:** Bakım işinin bir iş emri kâğıdı gibi okunduğu, turuncunun yalnız "acil müdahale" anlamına geldiği koyu saha arayüzü.

| | |
|---|---|
| **Feeling** | sağlam, acil, teknik, dürüst |
| **Best for** | bakım yönetimi (CMMS), arıza/iş emri takibi, varlık & envanter, saha teknisyeni tableti |
| **Avoid** | tüketici vitrini, açık zemin pazarlama sayfası, çocuk/wellness — koyu mat dil burada "kirli" görünür |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="maintenance-cmms"]` |
| **Composition** | `split` · `split` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Maintenance CMMS, arayüzü bir **iş emri formu** gibi kurar: iş numarası, makine, öncelik, SLA, atanan kişi, adımlar. Koyu mat yüzey sahada parlamayı azaltır; turuncu accent yalnız acil müdahale ve birincil eylemi işaretler — dekorasyon değildir.

Üç kurucu karar: (1) **üç aile, üç iş** — başlık Chakra Petch (kesik köşeli teknik yazı), gövde Space Grotesk, mono Courier Prime (daktilo iş emri hissi); (2) **kart = kâğıt** — iş emri kartının üstünde 4px delikli şerit, solda mono iş no, sağda öncelik çipi; (3) **adım zorunluluğu** — adımlar numaralı ve onay kutulu, sıra atlanamaz; "yapıldı" işareti olmadan ilerleme yok.

Bedeli: geniş ekranda koyu yüzey ağırdır; bunu taşıyan şey **tek yönlü alt gölge** ve kart başlığındaki mono künyedir, süs değil.

### What is not
- **Terminal UI (45) değildir:** terminal tek mono ailedir ve yeşil accent kullanır; bu stilde başlık Chakra Petch, gövde Space Grotesk, accent turuncudur ve radius 6/10px'tir.
- **Scandinavian Dark (40) değildir:** o stil sessiz lüks için geniş boşluk ve ince çizgi kullanır; burada yoğunluk yüksektir, kart 18px padding, satır 44px.
- **Utility (44) değildir:** Utility açık zeminli ürün arayüzüdür; bu stil koyu saha arayüzüdür ve iş emri metaforu taşır.
- **Glassmorphism (08) değildir:** cam/blur yasak; derinlik tek yönlü alt gölgeyle kurulur, yüzey mat.

### Where it comes from
Bakım atölyesi geleneğinden: daktilo/presli iş emri kâğıdı, makine künyesi, güvenlik kilidi etiketi (LOTO), vardiya defteri. Bugün yeniden kullanılmasının nedeni: CMMS'ler hâlâ teknisyen tarafından tek elle, eldivenle, gürültülü ortamda kullanılıyor; parlak beyaz arayüz eldiven ve gres altında okunmuyor. Klişeye dönüşmemesi için korunacak detay: **mono daktilo künyesi + adım onayı** ve turuncunun yalnız aciliyet anlamına gelmesi.

### Recognition test in 3 seconds
1. Zemin koyu mat; yalnız **tek yönlü alt gölge** var, glow/cam yok.
2. Kart başlığında delikli (dots) 4px şerit ve solda mono iş numarası (`WO-2481`).
3. Turuncu yalnız acil/öncelik ve birincil butonda; ikinci bir doygun renk yok.
4. Adımlar numaralı ve onay kutulu; ilerleme çubuğu 8px ve sert köşeli.
5. Öncelik çipi `ACİL` / `YÜKSEK` / `PLANLI` / `TAMAM` olarak büyük harf mono.

## Visual signature
- **Delikli kart şeridi:** iş emri kartının üstünde 4px yüksekliğinde `--accent` 16px nokta deseni (`--surface-2` zemin).
- **Mono künye:** iş no, makine kodu, tarih — 12px Courier Prime, büyük harf, `0.14em` aralık, sol sütunda hizalı.
- **Tek yönlü gölge:** `0 2px 6px rgba(0,0,0,.35)` — yalnız aşağı; ışık yönü tek, gölge asla iki yana dağılmaz.
- **Sert ilerleme çubuğu:** 8px yükseklik, radius 0, `--surface-2` ray + `--accent` dolgu; adım sayısı çubuğun üstünde nokta olarak.
- **Acil halka:** geciken/CRITICAL işte kart `box-shadow: var(--shadow-hard)` = 2px turuncu dış halka; renk dışında metin de yazar.
- **Kesik köşe tipografisi:** Chakra Petch'in kesik köşeleri başlıklarda; gövde Space Grotesk ile yumuşar, mono künye daktilo etkisi verir.
- **Ölçüm birimi disiplini:** sıcaklık/basınç/tork değerleri mono, birim ayrı ve küçük harf (`°C`, `bar`, `Nm`).
- **Typography:** Chakra Petch (display) + Space Grotesk (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#ff8a3d`; neutral scale `#17191a` → `#ece9e3`.
- **Radius:** `6px` / `10px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her iş emri tek kart: iş no + makine + öncelik + SLA + atanan kişi
2. Öncelik hem chip rengiyle hem metinle (ACİL / YÜKSEK / PLANLI / TAMAM)
3. Adımlar numaralı ve onay kutulu; adım atlanamaz, sıra görünür
4. Karanlık mat yüzey: gölge yalnız tek yönlü alt gölge; cam/blur yok
5. Makine kimliği mono (Courier Prime) ve büyük harf; metin gövdesi Space Grotesk 500
6. Her ekranda 'iş emri aç' birincil eylemi görünür

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#17191a` | page background | as a card background |
| `--bg-2` | `#1e2122` | partition divider floor, table top | button background |
| `--surface` | `#222628` | kart, input, modal | full-page background |
| `--surface-2` | `#2b3032` | passive chip, hover background | primary button |
| `--ink` | `#ece9e3` | title, body, icon | large background |
| `--ink-soft` | `#a9a8a2` | secondary text, description | — |
| `--ink-faint` | `#7a7b77` | decorative label, separator text | interactive text |
| `--accent` | `#ff8a3d` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a0f05` | text above accent | non-accent background |
| `--line` | `rgba(236,233,227,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.56:1** · `ink-soft/bg` **7.4:1** · `ink-faint/bg` **4.14:1 (decorative)** · `accent-ink/accent` **8.04:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 26px (mobile 26px) | 400 | 1.08 | -0.02em |
| H2 | same | 24px | 600 | 1.2 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `6px` (buton, input, chip), `10px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Açık/beyaz zemin, 10px üstü radius, hap buton.
- Neon çok renk, gradient, glow, cam/blur, grain.
- Turuncu ile sarıyı yan yana kullanmak; turuncu üstünde `--ink`.
- Onaysız adım geçişi, sadece renkle öncelik bildirimi.
- Sürekli dönen ikon (yükleme göstergesi dışında), parallax, bounce.
- İkinci mono aile, el yazısı, italik.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 6px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 6px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 6px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 6px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 6px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 6px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 6px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.52:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 5/7 hero: solda başlık + tek CTA, sağda açık iş emri kartı | `shots/01-page.png` |
| Dashboard | çok yüksek | 4 KPI (açık iş, geciken, MTTR, uyum) + iş kuyruğu | `shots/01-page.png` |
| Form | orta | iş emri formu: makine, öncelik, adımlar, onay kutuları | `shots/01-page.png` |
| Liste / tablo | yüksek | 44px satır, iş no mono, SLA kalan süre, geciken şerit | `shots/01-page.png` |
| Boş durum | düşük | "açık iş emri yok" + yeni iş emri + son 3 kapanan iş | `shots/01-page.png` |
| Onboarding | orta | 3 adım: varlık ekle → bakım planı → ekip ata | `shots/01-page.png` |
| Pricing | orta | plan karşılaştırma; varlık sayısı sınırları satır bazında | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek kart, koyu zemin, tek eylem, hata net | `shots/01-page.png` |
| Modal | orta | iş adımları, ölçüm girişleri, onay kutuları | `shots/01-page.png` |
| Bildirim | orta | 40px toast + sol turuncu şerit + eylem düğmesi | `shots/01-page.png` |
| Hata | düşük | danger çerçeve + neden + tekrar dene; veri korunur | `shots/01-page.png` |
| Profil / ayar | yüksek | varlık listesi, bakım aralığı, bildirim eşikleri | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.56:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.4:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.14:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.04:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.52:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 92.5 | ≥ 60 target | thin text |

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
| "Oyuncu arayüzü" hissi | glow/neon eklendi | turuncu düz dolgu, glow yasak |
| Kartlar birbirine yapışıyor | gölge iki yana dağılmış | tek yönlü alt gölge + 16px gutter |
| Aciliyet kayboluyor | turuncu + sarı birlikte | sarı yalnız uyarı etiketi, turuncu yalnız acil/eylem |
| Adımlar atlanıyor | onay kutusu görsel | onay opsiyonel değil, ilerleme kilitli |
| Koyu modda okunmuyor | `--ink-faint` gövdeye | künye/ayırıcı dışında kullanma |
| Sahada dokunamıyor | 32px buton | 40px görsel + 44px hedef |
| Daktilo etkisi "eski" görünüyor | her metinde mono | mono yalnız künye/ölçüm, gövde Space Grotesk |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.osha.gov/control-hazardous-energy | OSHA · Control of Hazardous Energy (LOTO) — bakım öncesi enerji kesme (LOTO) adımları ve etiket dili |
| https://www.isa.org/standards-and-publications | ISA · standartlar ve yayınlar — ISA-95/ISA-99 varlık ve bakım terminolojisi |
| https://en.wikipedia.org/wiki/Computerized_maintenance_management_system | CMMS · kavramsal çerçeve — iş emri, önleyici bakım ve SLA kavramları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — koyu zeminde metin kontrastı ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | www.w3.org — odak halkası görünürlüğü |

## AI brief

```text
Stil: Maintenance CMMS (styles/63-maintenance-cmms/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="maintenance-cmms"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Chakra Petch 600) yalnız H1/H2 ve modal başlığı; --font-body (Space Grotesk 500/700) gövde;
  --font-mono (Courier Prime 400) iş no, makine kodu, ölçüm değerleri (büyük harf +0.14em).
  H1 38px/1.08; gövde 15px/1.6; etiket 11px mono +0.16em büyük harf.
Yüzey: koyu mat. --bg / --surface / --surface + --shadow (0 2px 6px rgba(0,0,0,.35), YALNIZ aşağı).
  radius --radius 6px, --radius-lg 10px. Acil/geciken işte gölge yerine --shadow-hard (2px turuncu halka).
Kart = iş emri kâğıdı: üstte 4px delikli accent şerit, solda mono iş no, sağda öncelik çipi.
Öncelik: ACİL (accent dolgu) / YÜKSEK (warn çerçeve) / PLANLI (line) / TAMAM (ok) — renk + metin.
Adımlar numaralı ve onay kutulu; sıra atlanamaz, ilerleme çubuğu 8px sert köşeli.
Hareket: enter 0.55s cubic-bezier(.4,0,.2,1) 26px stagger 0.09 · scroll top 72% 0.62s 20px once ·
  pin kapalı · hover 260ms scale 1.018; prefers-reduced-motion zorunlu.
Yasak: açık zemin, 10px üstü radius, glow/neon, cam/blur, turuncu+sarı yan yana, onaysız adım, bounce.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Maintenance CMMS (maintenance-cmms) · family: Industrial (56–65)
Token: --bg #17191a · --surface #222628 · --ink #ece9e3 · --accent #ff8a3d · --line rgba(236,233,227,.16)
Radius: 6px / 10px · Typography: Chakra Petch / Space Grotesk / Courier Prime
Required: Her iş emri tek kart: iş no + makine + öncelik + SLA + atanan kişi · Öncelik hem chip rengiyle hem metinle (ACİL / YÜKSEK / PLANLI / TAMAM) · Adımlar numaralı ve onay kutulu; adım atlanamaz, sıra görünür
Banned: Açık/beyaz zemin, 10px üstü radius, hap buton. · Neon çok renk, gradient, glow, cam/blur, grain. · Turuncu ile sarıyı yan yana kullanmak; turuncu üstünde `--ink`.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="maintenance-cmms"] {
  --bg: #17191a; --bg-2: #1e2122;
  --surface: #222628; --surface-2: #2b3032;
  --ink: #ece9e3; --ink-soft: #a9a8a2; --ink-faint: #7a7b77;
  --accent: #ff8a3d; --accent-ink: #1a0f05;
  --line: rgba(236,233,227,.16);
  --danger: #eb4232;
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
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 2px 6px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
