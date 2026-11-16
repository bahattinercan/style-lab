# 139 · Biyo & Sentetik

> **In one sentence:** Laboratuvarda büyütülmüş arayüz: koyu kültür ortamı, zar halkaları, hücre kümeleri ve biyo-lime accent ile yumuşak-sentetik bir yüzey dili.

| | |
|---|---|
| **Feeling** | canlı, deneysel, yumuşak-tekinsiz, kuluçkada |
| **Best for** | biyoteknoloji ürünü, laboratuvar takip paneli, sentetik gıda/malzeme markası, spekülatif sergi |
| **Avoid** | kurumsal finans, güvenlik uyarısı, hızlı ticaret — organik-tekinsiz dil güveni zedeler |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="bio-synthetic"]` |
| **Composition** | `split-reverse` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Biyo & Sentetik, arayüzü **kültür kabı** gibi kurar: koyu yeşil-siyah zemin, yumuşak 20/32px köşeler, her kartın üst kenarında 1px zar (membrane) çizgisi, sağ üstte hücre noktası ve mono `LOT-2291 · P3` parti etiketi. Keskinliği feda eder; karşılığında **büyüyen/canlı** bir yüzey hissi kazanır — ama kontrollü: hareket ve doku ölçülüdür.

Kurucu kararları üç tanedir. Birincisi **yumuşaklık ölçülüdür**: 20px kontrol / 32px kart / 999px hap; hiçbir yerde 0px köşe yok. İkincisi **zar halkası imzadır**: kart üstünde 1px accent %22 çizgi + hücre noktası; ekran başına tekrar eden tek organik form budur. Üçüncüsü **parti numarası zorunludur**: her veri bloğu bir lot/parti taşır (`LOT-2291 · P3`), çünkü biyolojik veri izlenebilir olmak zorundadır.

Bedeli: tekinsizlik (uncanny). Bu yüzden palet pastel-oyuncak değil; koyu kültür zemini + biyo-lime accent, "laboratuvar" tarafında tutulur.

### What is not
- **Claymorphism (11) değildir:** 11 açık pastel + çift gölge + şişkin 3B form kullanır; 139 koyu zemin, tek gölge, zar çizgisi (şişme yok).
- **Organic / Biophilic (38) ve Biyofilik Botanik (76) değildir:** 38/76 bitki/doğa dinginliğidir (açık yeşil, kâğıt); 139 **sentetik** taraftadır: koyu kültür ortamı, biyo-lime, parti etiketi, hücre kümesi.
- **Forest Bark (81) değildir:** 81 orman altı saha defteridir (toprak/kabuk, tan accent); 139 laboratuvar kabı dilidir.
- **Glassmorphism (08) değildir:** 139'da blur/cam yok; yumuşaklık radius ve zardan gelir.

### Where it comes from
Doku kültürü (tissue culture) pratiğinden — petri kabı, parti (lot) etiketi, pasaj numarası — ve sentetik biyoloji terminolojisinden. Bugün geri dönüyor çünkü biyoteknoloji ürünleri laboratuvar dilini arayüze taşıyor (izlenebilirlik + canlılık). Klişeye dönmemesi için korunacak detay: **parti numarasının zorunluluğu** ve zar çizgisinin 1px'te kalması.

### Recognition test in 3 seconds
1. Zemin koyu yeşil-siyah; accent biyo-lime ve yalnız canlı/aktif anlamında.
2. Her kartın üst kenarında 1px açık zar çizgisi, sağ üstte küçük hücre noktası var.
3. Köşeler yumuşak: 20px kontrol, 32px kart; butonlar hap.
4. Mono `LOT-···· · P·` parti etiketi her veri bloğunda görünüyor.
5. Bölüm boşlukları geniş (84px), gövde satır aralığı 1.68.

## Visual signature
- **Zar çizgisi:** kart `::before` üst kenarda 1px `accent %22`.
- **Hücre noktası:** kart sağ üst 16/16'da 8px accent %70 daire (`::after`).
- **Hücre kümesi:** hero görselinde `repeating-radial-gradient` (22px halka) + tek hücre lekesi.
- **Hap kontrol dili:** buton/input 999px, 48px; chip 28px hap.
- **Parti etiketi:** `LOT-2291 · P3` 11px mono `.08em`; her veri bloğunda.
- **Yumuşak radius:** 20px kontrol, 32px kart; 0px köşe yasak.
- **Hareket imzası:** 1080ms `cubic-bezier(.44,.16,.3,1)`, 46px — kültür "büyür", sıçramaz.
- **Typography:** Baloo 2 (display) + Nunito (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#c8f05f`; neutral scale `#0f1412` → `#e9f2ec`.
- **Radius:** `20px` / `32px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Yüzeyler yumuşak: radius 20px kontrol / 32px kart; buton ve input hap (999px)
2. Zar (membrane) halkası imza öğedir: her kartta üst kenarda 1px accent %22 çizgi + sol üstte hücre noktası
3. Zemin koyu kültür ortamı; accent biyo-lime tek parlak renk
4. Gövde satır aralığı ≥ 1.68; bölüm boşluğu ≥ 84px (organik nefes)
5. Parti/lot numarası mono zorunlu: `LOT-2291 · P3` biçiminde
6. Durum daima metinle: KÜLTÜRDE / HASAT / REDDEDİLDİ

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0f1412` | page background | as a card background |
| `--bg-2` | `#141a17` | partition divider floor, table top | button background |
| `--surface` | `#19211d` | kart, input, modal | full-page background |
| `--surface-2` | `#1f2924` | passive chip, hover background | primary button |
| `--ink` | `#e9f2ec` | title, body, icon | large background |
| `--ink-soft` | `#a9bfb2` | secondary text, description | — |
| `--ink-faint` | `#75897e` | decorative label, separator text | interactive text |
| `--accent` | `#c8f05f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#141f07` | text above accent | non-accent background |
| `--line` | `rgba(233,242,236,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.28:1** · `ink-soft/bg` **9.55:1** · `ink-faint/bg` **4.99:1 (decorative)** · `accent-ink/accent` **13.09:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Baloo 2) | 50px (mobile 32px) | 500 | 1.06 | -0.02em |
| H2 | same | 34px | 600 | 1.18 | -0.015em |
| H3 | same | 24px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 17px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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
- Radius: `20px` (buton, input, chip), `32px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Keskin 0px köşe ve kalın 2px+ çerçeve.
- Pastel-oyuncak palet (claymorphism ile örtüşür).
- Gradyan patlaması, neon glow, cam/blur.
- Ekran başına 1'den fazla sürekli nabız atan öğe.
- Serif display, emoji.
- Metinsiz (renk-only) durum bildirimi.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 20px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 20px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 20px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 20px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 20px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 20px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 20px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 14.25:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | H1 50px + hücre kümesi görseli + tek hap CTA | `shots/01-page.png` |
| Dashboard | orta | 3 parti kartı; zar çizgisi ve hücre noktası | `shots/01-page.png` |
| Form | düşük | 48px hap input, tek kolon; parti alanı mono | `shots/01-page.png` |
| Liste / tablo | orta | 48px satır, parti no kolonu mono | `shots/01-page.png` |
| Boş durum | orta | boş petri: zar halkası + "kültür yok" mono | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: örnek al → parti aç → pasaj planla | `shots/01-page.png` |
| Pricing | orta | iki plan kartı; öne çıkan accent zar çizgisi | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | hücre görseli yok; sade kart + tek hap CTA | `shots/01-page.png` |
| Modal | orta | kültür onayı: parti no + iki hap düğme | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sol, 8px hücre noktası | `shots/01-page.png` |
| Hata | orta | "REDDEDİLDİ" + `--danger` nokta + neden notu | `shots/01-page.png` |
| Profil / ayar | orta | parti/pasaj tercihleri, hap seçiciler | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.28:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.55:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.99:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 13.09:1 | ≥ 4.5 | button text |
| focus ring/ground | 14.25:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.2 | ≥ 60 target | thin text |

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
| "Oyuncak" görünüyor | açık pastel + çift gölge | koyu zemin + tek gölge |
| Biyolojik dil kayboluyor | zar çizgisi ve hücre noktası yok | `::before`/`::after` imzayı ekle |
| Tekinsiz/rahatsız edici | doku fazla (grain %6+) | grain %4, halka 22px sabit |
| İzlenebilirlik yok | parti no yazılmamış | her veri bloğuna `LOT-… · P…` |
| Gövde sıkışık | satır aralığı 1.5 | 1.68 koru, ölçü ≤60ch |
| Nabız yorucu | birden fazla sürekli animasyon | ekran başına 1, kapatma düğmesi |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `organic-bio` | Same level of seriousness; accent sharing is not allowed |
| garnish | `biophilic-botanical` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `broadsheet-daily` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Synthetic_biology | Synthetic biology — sentetik biyoloji terminolojisi |
| https://en.wikipedia.org/wiki/Tissue_culture | Tissue culture — kültür/pasaj ve parti (lot) etiketleri |
| https://en.wikipedia.org/wiki/Cell_membrane | Cell membrane — zar halkası metaforu |
| https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | WCAG 2.2 · Animation from Interactions — hareket kapatma zorunluluğu |

## AI brief

```text
Stil: Biyo & Sentetik (styles/139-bio-synthetic/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="bio-synthetic"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg koyu kültür + iki radial ışık (accent %12 / %7).
Tipografi: --font-display Baloo 2 50/34/24 (600); --font-body Nunito 17px/1.68;
  --font-mono Courier Prime 11–12px parti etiketi (.08em, `LOT-2291 · P3` zorunlu).
Yüzey: --surface + 1px var(--line) + var(--shadow) 0 14px 34px; üst kenarda 1px accent %22 zar çizgisi,
  sağ üstte 8px hücre noktası. Radius 20px kontrol, 32px kart, hap 999px.
Renk: tek biyo-lime accent #c8f05f; ink/bg 16.28:1, ink-soft/bg 9.55:1, accent-ink/accent 13.09:1, ink-faint/bg 4.99:1.
Hareket: enter 1080ms cubic-bezier(.44,.16,.3,1) 46px stagger .146; scroll top 60% 1070ms 33px once;
  pin scrub 1.18 (+155%, ekran başına 1); hover 490ms görsel 1.043. prefers-reduced-motion zorunlu.
Yasak: 0px köşe, kalın çerçeve, pastel-oyuncak palet, gradyan/glow/cam, >1 sürekli nabız, emoji, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (zar çizgisini ve parti etiketini nereye koydun).

Style: Biyo & Sentetik (bio-synthetic) · family: Experimental & Future (136–145)
Token: --bg #0f1412 · --surface #19211d · --ink #e9f2ec · --accent #c8f05f · --line rgba(233,242,236,.16)
Radius: 20px / 32px · Typography: Baloo 2 / Nunito / Courier Prime
Required: Yüzeyler yumuşak: radius 20px kontrol / 32px kart; buton ve input hap (999px) · Zar (membrane) halkası imza öğedir: her kartta üst kenarda 1px accent %22 çizgi + sol üstte hücre noktası · Zemin koyu kültür ortamı; accent biyo-lime tek parlak renk
Banned: Keskin 0px köşe ve kalın 2px+ çerçeve. · Pastel-oyuncak palet (claymorphism ile örtüşür). · Gradyan patlaması, neon glow, cam/blur.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="bio-synthetic"] {
  --bg: #0f1412; --bg-2: #141a17;
  --surface: #19211d; --surface-2: #1f2924;
  --ink: #e9f2ec; --ink-soft: #a9bfb2; --ink-faint: #75897e;
  --accent: #c8f05f; --accent-ink: #141f07;
  --line: rgba(233,242,236,.16);
  --danger: #e73c2d;
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
  --radius: 20px; --radius-lg: 32px;
  --shadow: 0 14px 34px rgba(4,10,7,.55); --shadow-hard: none;
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
