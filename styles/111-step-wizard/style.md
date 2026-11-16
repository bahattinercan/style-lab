# 111 · Adım Sihirbazı

> **In one sentence:** Ekran başına tek karar veren, sol dikey numaralı adım rayı ve altta sabit geri/ileri çubuğu olan çok adımlı form stili.

| | |
|---|---|
| **Feeling** | yönlendiren, sakin, sıralı, güvenli |
| **Best for** | onboarding, kredi/sigorta başvurusu, kurulum sihirbazı, çok adımlı ödeme |
| **Avoid** | analitik panel, gerçek zamanlı izleme ekranı, serbest metin editörü — tek-karar ritmi burada veri taramasını yavaşlatır |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="step-wizard"]` |
| **Composition** | `centered` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Adım Sihirbazı, uzun bir formu **tek karara indirger**: her ekranda bir soru, en fazla dört seçenek, solda numaralı dikey ray, altta sabit geri/ileri çubuğu. Kullanıcı "kaç adım kaldı" sorusunun cevabını iki yerde birden görür — üstte ince ilerleme çubuğu, navda `2/5` mono sayaç.

Kurucu kararları üç tanedir. Birincisi **tek soru kuralı**: bir adımda ikinci bir karar (eşleşen alan, opsiyonel kutu) yoktur; gerekiyorsa adım bölünür. İkincisi **ray**: sol tarafta numaralı noktalar, tamamlanan adım accent, aktif adım ink, gelecek adım ink-faint; ray her adımda aynı yerde durur ve sayfa yeniden yerleşmez. Üçüncüsü **özet adımı**: son ekran girilen her değeri tek listede gösterir, her satırda `Düzenle` bağlantısı vardır.

Bedeli: ekran başına düşük bilgi yoğunluğu. Bu yüzden sihirbaz, veri okuma işlerinde (tablo, panel) değil, **sıralı karar** işlerinde kullanılır.

### What is not
- **Kanban Akışı (110) değildir:** 110 paralel kolonlarda çok kart gösterir; 111 tek kart ve tek soru gösterir, kart sayısı ekran başına birdir.
- **Ses-Öncelikli (106) değildir:** 106 merkezî bir halka ve hap kontroller kullanır; 111'de radius 10px, merkez yok, ray sol taraftadır.
- **Utility (44) değildir:** 44 yoğun, çok eylemli bir araç yüzeyidir; 111'de ekran başına tek birincil eylem vardır.
- **Akademik Makale (89) değildir:** 89 uzun serif metin akışıdır; 111 gövdeyi 56ch ile sınırlar ve serif kullanmaz (Jost).

### Where it comes from
Masaüstü kurulum sihirbazlarından (installer) ve kamu hizmeti formlarından gelir: tek seferde tek soru, geri dönüş garantisi, özet ekranı. Bugün geri dönüyor çünkü uzun formların terk oranını düşüren en ucuz müdahale adım bölmektir. Klişeye dönmemesi için korunacak detay: **adım sayacının her zaman görünür olması** ve geri dönüşün veri kaybetmemesi.

### Recognition test in 3 seconds
1. Solda dikey numaralı ray var (2px çizgi + numaralı noktalar), içerik sağda tek kart.
2. Navda `2/5` biçiminde mono sayaç ve üstte ince ilerleme çubuğu birlikte görünür.
3. Ekranda tek soru var; seçenekler satır satır, her satır 44px yüksekliğinde.
4. Altta tam genişlik, iki düğmeli sabit çubuk durur (geri solda, ileri sağda).
5. Başlıklar Jost 600, gövde Inter; serif ve mono başlık yok.

## Visual signature
- **Adım rayı:** panelin solunda `2px` dikey çizgi (`--ink` %12) + `22px` numaralı daire; tamamlanan daire accent dolgu.
- **İlerleme:** üstte `4px` yüksekliğinde çubuk, accent dolu kısım; navda `n/toplam` mono sayaç (tabular).
- **Tek soru tipografisi:** `h1` 40px/1.10 Jost 600, `max-width: 22ch`; altında 16px açıklama, en fazla iki satır.
- **Seçenek satırı:** 44px yükseklik, `--radius` 10px, 1px `--line`; seçili durumda accent 1px çerçeve + accent %10 zemin.
- **Sabit alt çubuk:** `56px` yüksekliğinde, `--surface` + üst hairline; ileri düğmesi 44px.
- **Hareket imzası:** 390ms `cubic-bezier(.25,.8,.3,1)`, 7px yukarıdan; adım geçişi tek yönlü.
- **Landing hero (QA):** adım rayı: %66 dolu ilerleme çubuğu, 3 adım satırı, seçili adım accent çerçeve + `adım 2/5` altbilgisi.
- **Typography:** Jost (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#3346c9`; neutral scale `#f4f6fa` → `#101828`.
- **Radius:** `10px` / `18px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Ekran başına tek karar: bir adımda en fazla 4 seçenek, tek soru (h1)
2. İlerleme her zaman iki yerde yazılı: üstte çubuk, navda `2/5` mono sayaç
3. Seçenek satırı 44px yüksekliğinde ve tıklanabilir alanın tamamı (radio + etiket tek hedef)
4. Geri butonu sol, ileri butonu sağ; ileri butonu adım geçerli olana dek `aria-disabled`
5. Son adım özet: girilen tüm değerler tek listede, her satırda `Düzenle` bağlantısı
6. Adım rayı dikey ve numaralı; tamamlanan adım accent, aktif adım ink, gelecek adım ink-faint

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4f6fa` | page background | as a card background |
| `--bg-2` | `#e9eef7` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f9fd` | passive chip, hover background | primary button |
| `--ink` | `#101828` | title, body, icon | large background |
| `--ink-soft` | `#46536b` | secondary text, description | — |
| `--ink-faint` | `#7b879c` | decorative label, separator text | interactive text |
| `--accent` | `#3346c9` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(16,24,40,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.4:1** · `ink-soft/bg` **7.16:1** · `ink-faint/bg` **3.35:1 (decorative)** · `accent-ink/accent` **7.34:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Jost) | 40px (mobile 26px) | 600 | 1.12 | -0.02em |
| H2 | same | 28px | 600 | 1.22 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.16em |
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
- Radius: `10px` (buton, input, chip), `18px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Aynı ekranda iki soru veya ikinci bir birincil eylem.
- Adım sayısını gizlemek veya "sonsuz" ilerleme göstermek.
- İkinci parlak renk, gradyan zemin, neon, cam/blur.
- Sert/ofset gölge (`--shadow-hard` kullanılmaz).
- Otomatik ilerleme: kullanıcı onaylamadan sonraki adıma geçmek.
- 44px altı dokunma hedefi; yalnız ikonla anlatılan seçenek.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 10px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 10px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 10px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 10px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 10px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 10px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 10px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.34:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | "3 adımda başvuru" + tek başla düğmesi + adım önizlemesi | `shots/01-page.png` |
| Dashboard | çok düşük | sihirbaz durumu: `2/5 tamamlandı` + tek devam düğmesi | `shots/01-page.png` |
| Form | düşük | tek soru + en fazla 4 seçenek; hata alan altında | `shots/01-page.png` |
| Liste / tablo | düşük | başvuru listesi: 44px satır, sağda adım etiketi | `shots/01-page.png` |
| Boş durum | orta | "Henüz başvuru yok" + ilk adım CTA'sı | `shots/01-page.png` |
| Onboarding | yüksek | sihirbazın kendisi: 5 adım, ray + ilerleme | `shots/01-page.png` |
| Pricing | düşük | iki plan kartı; seçim tek radyo satırı | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | sadece kimlik alanı + ileri; süs yok | `shots/01-page.png` |
| Modal | orta | özet onayı: madde listesi + geri/onayla | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sol, "taslak kaydedildi", geri alma | `shots/01-page.png` |
| Hata | düşük | hata yalnız ilgili alanın altında, adım bloke olmaz | `shots/01-page.png` |
| Profil / ayar | orta | hesap ayarları sekmeli, aynı tek-kart ritmi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.4:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.16:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.35:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.34:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.34:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99 | ≥ 60 target | thin text |

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
| Ekran "uzun form" gibi | bir adımda 2+ soru var | adımı böl, tek karar bırak |
| Kullanıcı nerede olduğunu bilmiyor | sayaç yok, yalnız çubuk var | navda `n/toplam` mono yaz |
| Geri dönünce veri kayboluyor | adım durumu saklanmıyor | adım state'ini akış boyunca tut |
| Seçenekler tıklanmıyor | yalnız radio hedef | etiket + satırın tamamını `<label>` yap |
| Kart zemini "kirli" | gölge + ikinci ton | tek yumuşak gölge, `--surface` beyaz |
| Ray sayfayla birlikte kayıyor | ray absolute değil | rayı kart kolonuna sabitle |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `kanban-flow` | Same level of seriousness; accent sharing is not allowed |
| garnish | `product-catalog` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `acid-graphics` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Wizard_(software | en.wikipedia.org — ) — adım kavramı, geri dönüş ve iptal beklentisi |
| https://design-system.service.gov.uk/patterns/question-pages/ | GOV.UK · Question pages — sayfa başına tek soru kuralı |
| https://design-system.service.gov.uk/patterns/check-answers/ | GOV.UK · Check answers — özet adımı ve satır bazlı düzenleme |
| https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html | WCAG 2.2 · Error Identification — hata metninin alanın altında verilmesi |

## AI brief

```text
Stil: Adım Sihirbazı (styles/111-step-wizard/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="step-wizard"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Jost 40/28/20 (600, -.01em); --font-body Inter 15px/1.6;
  --font-mono JetBrains Mono 11px sayaç ve adım numarası (.04em).
Yüzey: --bg / --surface + 1px var(--line) + var(--shadow) 0 2px 6px; modal 0 12px 32px.
  Radius --radius 10px (kontrol), --radius-lg 18px (kart), chip 999px.
Renk: tek accent #3346c9; ink/bg 16.40:1, ink-soft/bg 7.16:1, accent-ink/accent 7.34:1,
  ink-faint/bg 3.35:1 (dekoratif).
İmza: solda 2px dikey ray + 22px numaralı daire; navda "2/5" mono sayaç; üstte 4px ilerleme çubuğu;
  altta 56px sabit geri/ileri çubuğu.
Hareket: enter 390ms cubic-bezier(.25,.8,.3,1) 7px stagger .048; scroll top 87% 410ms 9px once;
  pin yok; hover 145ms görsel 1.008. prefers-reduced-motion zorunlu.
Yasak: aynı ekranda 2 soru, ikinci parlak renk, sert gölge, otomatik ilerleme, 44px altı hedef.
Çıktı: bileşen kodu + tek paragraf not (rayı ve sayacı nereye koydun).

Style: Adım Sihirbazı (step-wizard) · family: Interactive (106–115)
Token: --bg #f4f6fa · --surface #ffffff · --ink #101828 · --accent #3346c9 · --line rgba(16,24,40,.14)
Radius: 10px / 18px · Typography: Jost / Inter / JetBrains Mono
Required: Ekran başına tek karar: bir adımda en fazla 4 seçenek, tek soru (h1) · İlerleme her zaman iki yerde yazılı: üstte çubuk, navda `2/5` mono sayaç · Seçenek satırı 44px yüksekliğinde ve tıklanabilir alanın tamamı (radio + etiket tek hedef)
Banned: Aynı ekranda iki soru veya ikinci bir birincil eylem. · Adım sayısını gizlemek veya "sonsuz" ilerleme göstermek. · İkinci parlak renk, gradyan zemin, neon, cam/blur.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="step-wizard"] {
  --bg: #f4f6fa; --bg-2: #e9eef7;
  --surface: #ffffff; --surface-2: #f7f9fd;
  --ink: #101828; --ink-soft: #46536b; --ink-faint: #7b879c;
  --accent: #3346c9; --accent-ink: #ffffff;
  --line: rgba(16,24,40,.14);
  --danger: #d82c1f;
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
  --radius: 10px; --radius-lg: 18px;
  --shadow: 0 2px 6px rgba(16,24,40,.08); --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: 0;
}
```
