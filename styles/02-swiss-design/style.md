# 02 · Swiss Design

> **In one sentence:** Görünmez bir ızgaraya oturan, sola dayalı, tek yazı karakteriyle kurulmuş rasyonel düzen; süsleme yerine hizalama ve tipografik ölçek konuşur.

| | |
|---|---|
| **Feeling** | rasyonel, kurumsal, "eski para", mesafeli güven |
| **Best for** | SaaS/docs, kurumsal site, veri raporu, müze/kültür kurumu |
| **Avoid** | samimi/oyun ürünü, çocuk, sosyal medya, duygu satan kampanya |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Minimal (1–7) · **Token** | `kit/tokens.css` → `[data-style="swiss-design"]` |
| **Composition** | `type` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
1950'ler İsviçre grafik tasarımı (International Typographic Style): **12 kolonlu ızgara**, **sola dayalı ragged-right** dizgi, **tek sans-serif aile**, **dev tipografik ölçek** ve **kırmızı vurgu**. Her öğe ızgaranın bir hattına oturur; hizalama kusursuz olduğunda düzen "kendini açıklar".

Kazandığı şey: otorite ve taranabilirlik. Feda ettiği şey: sıcaklık — her şey doğru ama hiçbir şey "sıcak" değil.

### What is not
- **Minimalism değildir.** Minimalizm gölgeyi ve çizgiyi azaltır, boşlukla konuşur; Swiss ızgarayı ve **kalın kural çizgilerini** görünür kılar.
- **Editorial değildir.** Editorial serif + kolon ritmi + anlatı kullanır; Swiss sans-serif + hizalama kullanır.
- **"Helvetica + kırmızı" değildir.** Izgara görünmüyorsa (metinler kolon hattına oturmuyorsa) stil taklit olur.
- **Simetrik değildir.** Merkezleme yok; asimetrik gerginlik (7/5, 8/4) karakterin parçası.
- **Dekoratif değildir.** Çizgi, kutu ve renk yalnızca hiyerarşi taşıyorsa var.

### Where it comes from
Josef Müller-Brockmann'ın grid sistemleri ve Neue Grafik dergisi; kurumsal kimliğin ilk "sistem" yaklaşımı. Dijitalde docs ve kurumsal ürün sitelerinde yaşıyor: çünkü okunabilirlik ve ölçeklenebilirlik sağlar.

### Recognition test in 3 seconds
1. Tüm metinler aynı sol hatta mı başlıyor, sağ kenar serbest mi?
2. Köşe yarıçapı **0** mı, gölge **yok** mu?
3. Tek bir kırmızı vurgu (≤ %10 alan) var mı?
4. Display ile gövde arasındaki oran ≥ 3× mi?
5. Bölümler kartla değil, **kalın kural çizgisiyle** mi ayrılıyor?

## Visual signature
- **Kalın kural:** bölüm ayırıcı `3px solid var(--ink)`; nav ve logo şeridi de kalın çizgiyle kapanır.
- **Kırmızı blok:** başlığın solunda 6px dikey accent çubuk veya tek bir kırmızı buton.
- **Mono etiket:** `01 — BÖLÜM`, `0.14em` tracking, uppercase, 11px.
- **Dev tipografi:** 56–72px, `-0.03em`, satır aralığı 0.95–1.0.
- **Asimetri:** hero 7/5 veya 8/4; ikinci bölümde tam genişlik kural.
- **Sıfır yuvarlaklık:** buton/input/kart hepsi dikdörtgen.
- **Typography:** Helvetica Neue (display) + Helvetica Neue (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#e4002b`; neutral scale `#ffffff` → `#0a0a0a`.
- **Radius:** `0px` / `0px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. **12 kolonlu ızgara.** Her blok kolon hattına oturur; gutter 24px, container 1200px.
2. **Sola dayalı, sağ kenar serbest.** Metin asla ortalı değil (tek istisna: sayfa numarası/alıntı imzası).
3. **Tek aile.** Display ve gövde aynı sans-serif; mono yalnızca etiket/numara için.
4. **Radius 0, gölge yok.** Ayrım 3px siyah kural çizgisiyle yapılır.
5. **Kırmızı yalnızca vurgu.** `--accent` ekran alanının ≤ %10'u; dekorasyon için kullanılmaz.
6. **Dev ölçek.** H1 ≥ 56px; display/gövde oranı en az 3:1.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#ffffff` | page background | as a card background |
| `--bg-2` | `#f1f1f1` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#fafafa` | passive chip, hover background | primary button |
| `--ink` | `#0a0a0a` | title, body, icon | large background |
| `--ink-soft` | `#4a4a4a` | secondary text, description | — |
| `--ink-faint` | `#8c8c8c` | decorative label, separator text | interactive text |
| `--accent` | `#e4002b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `#0a0a0a` | all borders | text colour |

- Measured contrast: `ink/bg` **19.8:1** · `ink-soft/bg` **8.86:1** · `ink-faint/bg` **3.36:1 (decorative)** · `accent-ink/accent` **4.85:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Helvetica Neue) | 64px (mobile 36px) | 600 | 1.12 | -0.02em |
| H2 | same | 34px | 600 | 1.22 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Helvetica Neue) | 16px | 400 | 1.55 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.16em |
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
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Köşe yarıçapı, yumuşak gölge, gradient, cam efekti.
- Ortalanmış başlık/paragraf; iki yana yaslı (justified) metin.
- İkinci bir vurgu rengi (mavi/yeşil "durum" renkleri hariç).
- İkondan başka illüstrasyon, fotoğraf kolajı, dekoratif şekil.
- Izgarayı gizleyen kart içinde kart kullanımı.
- 14px altı gövde metni (kurumsal okunabilirlik).
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.85:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 64px büyük harf başlık, 6px kırmızı dikey çubuk, 2 buton (kırmızı + çerçeveli), sağda ızgara desenli görsel | `shots/01-page.png` |
| Dashboard | düşük | KPI'lar 3 kolon, kalın kural ayırıcı; grafik tek renk kırmızı | `shots/01-page.png` |
| Form | düşük | Tek sütun 520px, etiket mono uppercase, input 2px çerçeve | `shots/01-page.png` |
| Liste / tablo | düşük | 48px satır, 1px kural, başlık satırı `--bg-2`; zebra yok | `shots/01-page.png` |
| Boş durum | orta | Sola dayalı tek cümle + tek buton; illüstrasyon yok | `shots/01-page.png` |
| Onboarding | yüksek | Adım numarası 01/02/03 dev mono, tek fikir/sayfa | `shots/01-page.png` |
| Pricing | orta | 3 kolon, orta kolon 3px kırmızı kenar + "önerilen" mono etiket | `shots/01-page.png` |
| Giriş / ödeme | düşük | 440px form, 2px çerçeve, tek kırmızı buton; süs yok | `shots/01-page.png` |
| Modal | orta | 3px siyah kenar, gölge yok, başlık büyük harf | `shots/01-page.png` |
| Bildirim / toast | orta | Siyah zemin + beyaz metin, sol kenarda 4px kırmızı çubuk | `shots/01-page.png` |
| Hata | düşük | 2px kırmızı kenar + mono "HATA" etiketi + 14px açıklama | `shots/01-page.png` |
| Profil / ayar | orta | 8/4 kolon; her satır 56px, sağda mono değer | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 19.8:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.86:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.36:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.85:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.85:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 105.8 | ≥ 60 target | thin text |

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
| "Sadece Helvetica" görünüyor | Izgara ve asimetri yok | 12 kolon + 7/5 bölünme + kalın kural ekle |
| Kurumsal ama sıkıcı | Ölçek zıplaması yok | H1 ≥ 56px, gövde 16px; oran ≥ 3:1 |
| Kırmızı her yerde | Vurgu değil dekorasyon | Ekran alanının ≤ %10'u |
| Düzen kayıyor | Metin ortalı / justified | Sola dayalı, sağ kenar serbest |
| Kart enflasyonu | Her bölüm kutu içinde | Bölümleri kural çizgisiyle ayır, kutuyu azalt |
| Mobilde taşma | 64px başlık sabit | `clamp()` ile 36px'e düşür |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `scrapbook` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `vaporwave` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.moma.org | MoMA — Kurumsal tipografi + ızgara disiplini |
| https://www.swissted.com | Swissted — Dönem afişlerinde tipografik ölçek |
| https://helveticaposter.tumblr.com | Helvetica Poster — Izgara ve asimetri örnekleri |

## AI brief

```text
Stil: Swiss Design (styles/02-swiss-design/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="swiss-design"]; hard-coded renk/ölçü YASAK.
Izgara: 12 kolon, gutter 24px, container 1200px; tüm bloklar kolon hattına oturur, sağ kenar serbest.
Tipografi: tek aile (Helvetica Neue/Inter); H1 64/700 -0.035em uppercase; gövde 16/1.55; etiket mono 11 uppercase 0.14em.
Ayrım: radius 0, gölge yok; 1/2/3px siyah kural çizgisi.
Kırmızı: ekran alanının ≤ %10'u; birincil buton + vurgu çubuğu + tek kelime.
Bileşen: "Bileşen reçeteleri" tablosundaki ölçüler birebir; buton 48px, input 48px 2px çerçeve.
Hareket: yalnızca opacity/renk, 90–160ms; scroll animasyonu yok.
Yasak: ortalanmış metin, justified, radius, gölge, gradient, ikinci aksan, dekoratif illüstrasyon.
Çıktı: kod + tek paragraf not (ızgara hizalamasını ve kırmızı oranını nasıl korudun).

Style: Swiss Design (swiss-design) · family: Minimal (1–7)
Token: --bg #ffffff · --surface #ffffff · --ink #0a0a0a · --accent #e4002b · --line #0a0a0a
Radius: 0px / 0px · Typography: Helvetica Neue / Helvetica Neue / IBM Plex Mono
Required: **12 kolonlu ızgara.** Her blok kolon hattına oturur; gutter 24px, container 1200px. · **Sola dayalı, sağ kenar serbest.** Metin asla ortalı değil (tek istisna: sayfa numarası/alıntı imzası). · **Tek aile.** Display ve gövde aynı sans-serif; mono yalnızca etiket/numara için.
Banned: Köşe yarıçapı, yumuşak gölge, gradient, cam efekti. · Ortalanmış başlık/paragraf; iki yana yaslı (justified) metin. · İkinci bir vurgu rengi (mavi/yeşil "durum" renkleri hariç).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="swiss-design"] {
  --bg: #ffffff; --bg-2: #f1f1f1;
  --surface: #ffffff; --surface-2: #fafafa;
  --ink: #0a0a0a; --ink-soft: #4a4a4a; --ink-faint: #8c8c8c;
  --accent: #e4002b; --accent-ink: #ffffff;
  --line: #0a0a0a;
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #008940;
  --ok-ink: #000000;
  --warn: #bd5b00;
  --warn-ink: #000000;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Helvetica Neue", system-ui, sans-serif;
  --font-body: "Helvetica Neue", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.03em; --blur: 0px; --grain: 0;
}
```
