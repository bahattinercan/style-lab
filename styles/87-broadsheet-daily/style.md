# 87 · Broadsheet Daily

> **In one sentence:** Gazete baskısının mantığı: masthead'te tek kalın sans, gövdede haber serifi, bitişik kolonlar ve 0 radius — hareket neredeyse yok, çünkü haber bekletmez.

| | |
|---|---|
| **Feeling** | acil · ciddi · tipografik · kuru |
| **Best for** | Haber sitesi, günlük bülten, veri gazeteciliği, kurumsal duyuru sayfası |
| **Avoid** | Lüks ürün lansmanı, çocuk/oyun ürünü, uzun onboarding akışı |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="broadsheet-daily"]` |
| **Composition** | `type` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Broadsheet Daily sayfayı bir gazete formu gibi kurar: üstte tek satır masthead (Archivo Black, 46px, uppercase), altında 1px çift kural, gövdede EB Garamond 16.5px/1.56 haber kolonları. Kazanılan şey tarama hızı ve otorite; feda edilen şey yumuşaklık — radius 0, gölge yok, hareket 220ms'in altında.

Bilgi hiyerarşisi yalnız puntodan ve kuraldan gelir: 1px hairline, 3px bölüm kuralı, tek `--accent` kırmızı. Renk asla süs değil, "son dakika" işaretidir ve ekranın %5'ini geçmez.

Hareket "baskı makinesi" gibi kesiklidir: `steps(3, end)` 220ms, 4px kayma, 80ms hover. Bu, gazetenin okunma ritmini bozmaz ve düşük güçlü cihazlarda da aynı görünür.

### What is not
- `swiss-design` değildir: swiss grid ve Helvetica nötrlüğüyle çalışır, hareketi 160ms ease-out'tur; burada masthead kalın sans + gövde serif karışımı, easing `steps(3, end)` ve 94% trigger vardır.
- `editorial-design` değildir: editorial dergi ritmi ve geniş boşluk kullanır; burada bitişik kolonlar ve 12px gutter vardır.
- `minimalism` değildir: minimalism tek sans ve yumuşak ease-out; burada üç kural kalınlığı (1/2/3px) ve kesik hareket var.
- `academic-paper` değildir: makale stilinde kenar boşluğu ve numaralı başlık vardır; burada masthead ve haber kolonları.

### Where it comes from
Kökeni 20. yüzyıl broadsheet gazeteleri (The Guardian, Frankfurter Allgemeine) ve İsviçre gazete tipografisidir. Bugün veri gazeteciliği ve günlük bülten ürünlerinde geri döndü çünkü yoğun bilgiyi tek ekranda taratabilen az sayıda dil kaldı. Klişeye düşmemek için korunması gereken detay: masthead'in tek satır kalması ve gövdenin serif kalması.

### Recognition test in 3 seconds
1. Masthead tek satır, Archivo Black 46px, uppercase, tracking −0.02em.
2. Gövde EB Garamond 16.5px/1.56, kolonlar bitişik (gutter 12px), 3px bölüm kuralı.
3. Radius 0px; hiçbir bileşende yuvarlak köşe yok.
4. Tek kırmızı `#a8241b` "son dakika" etiketinde; başka sıcak renk yok.
5. Hareket `steps(3, end)` 220ms — yumuşak geçiş hiç görünmez.

## Visual signature
- Masthead: Archivo Black 46px uppercase, −0.02em, altında 3px + 1px çift kural (mobil 32px).
- Haber kolonları: EB Garamond 16.5px / 1.56 / 38ch·2 kolon; gutter 12px, kolon arası 1px hairline.
- "Son dakika" şeridi: accent kırmızı zemin + accent-ink metin, 11px mono uppercase, ekran başına 1.
- Radius 0; buton/input/kart keskin köşe. Sadece avatar ve rozet 50%.
- Stats bandı: Share Tech Mono 22px rakamlar, 1px üst kural, üç hücre.
- Kâğıt dokusu: %2 yatay 1px çizgi tekrarı (yalnız section zemininde, 6px aralık).
- **Typography:** Archivo Black (display) + EB Garamond (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#a8241b`; neutral scale `#f3f0e9` → `#12141a`.
- **Radius:** `0px` / `2px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. Masthead tek satır Archivo Black 46px uppercase −0.02em (mobil 32px); altında 3px + 1px çift kural
2. Gövde EB Garamond 16.5px / 1.56 / kolon 38ch; gutter 12px
3. Radius 0px (buton/input/kart); yalnız avatar ve rozet 50%
4. Tek vurgu kırmızı #a8241b, ekranın ≤%5'i, accent üstü daima --accent-ink
5. Kural üçlüsü: 1px hairline (hücre), 3px (bölüm), 0px kenarlıksız blok; 2px yalnız modalda
6. Bölüm arası 72px (mobil 44px), kart içi 18px; boşluk ölçeği 4·8·12·16·24·32·48·64
7. Kâğıt dokusu: %2 opaklıkta 1px yatay çizgi, 6px aralık, yalnız bölüm zemininde
8. "Son dakika" şeridi ekran başına 1; mono 11px uppercase .12em

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f3f0e9` | page background | as a card background |
| `--bg-2` | `#e8e4da` | partition divider floor, table top | button background |
| `--surface` | `#fbf9f4` | kart, input, modal | full-page background |
| `--surface-2` | `#ece8df` | passive chip, hover background | primary button |
| `--ink` | `#12141a` | title, body, icon | large background |
| `--ink-soft` | `#45484f` | secondary text, description | — |
| `--ink-faint` | `#74777e` | decorative label, separator text | interactive text |
| `--accent` | `#a8241b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf7f2` | text above accent | non-accent background |
| `--line` | `rgba(18,20,26,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.18:1** · `ink-soft/bg` **8.05:1** · `ink-faint/bg` **3.94:1 (decorative)** · `accent-ink/accent` **6.74:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 32px (mobile 32px) | 700 | 0.98 | -0.035em |
| H2 | same | 30px | 600 | 1.08 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (EB Garamond) | 16.5px | 400 | 1.6 | 0 |
| Small body | same | 14.5px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Display 72px, line spacing 0.98; body 16/1.6. There is no midpoint — the jumping between two extremes is intentional.
- Measure: 62ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 12 columns are not visible; The title spans 8 columns, the body remains in 6 columns.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- No shadows and rounding; The only difference is the hairline and space.
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- Yuvarlak köşe (4px üstü radius), yumuşak gölge, blur/backdrop-filter
- Gövdede sans-serif veya 16px altı punto; masthead'te serif
- İkinci vurgu rengi, doygun gradyan, renkli ikon
- Uppercase gövde metni, geniş tracking gövde, italik başlık
- Kart gölgesi, 2px+ kenar (modal hariç), çift çerçeve
- Sürekli döngü, marquee, parallax, pin/scrub, yumuşak ease-out geçişler
- Fotoğraf üstüne renkli overlay veya grayscale + neon kombinasyonu
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.8:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Masthead + çift kural, manşet 8/12, sağ künye 4/12, "son dakika" şeridi | `shots/01-page.png` |
| Dashboard | yüksek | Üç kolon haber listesi, 1px hairline, mono tarih | `shots/01-page.png` |
| Form | düşük | Keskin köşe 44px input, 1px kenar, mono etiket | `shots/01-page.png` |
| Liste / tablo | yüksek | 44px satır, 1px alt çizgi, mono rakam hizası | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + 3px kural + ikincil buton | `shots/01-page.png` |
| Onboarding | yüksek | Üç kolon adım, numaralar mono 22px | `shots/01-page.png` |
| Pricing | orta | Üç plan, keskin köşe, aralarında 1px dikey hairline | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 380px, keskin köşe form, masthead küçük | `shots/01-page.png` |
| Modal | orta | 2px radius, 2px kenar, gölge yok; backdrop %45 ink | `shots/01-page.png` |
| Bildirim / toast | orta | Sağ üst, 40px, accent zemin + accent-ink metin | `shots/01-page.png` |
| Hata | düşük | 3px kural + "HATA" mono etiket + tek paragraf | `shots/01-page.png` |
| Profil / ayar | orta | İki kolon form + künye; 1px hairline ayırıcı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.18:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.05:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.94:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.74:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.8:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.2 | ≥ 60 target | thin text |

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
| Sayfa "kurumsal site" gibi duruyor | Masthead iki satıra kırılmış veya gövde sans-serif olmuş | Masthead tek satır + gövde EB Garamond |
| Haber okunmuyor | Kolon genişliği 38ch üstünde veya satır aralığı 1.5 altında | Kolon 38ch, 1.56 satır aralığı |
| Kırmızı her yerde | Accent CTA + etiket + grafikte birlikte kullanılmış | Kırmızıyı tek role indir (son dakika) |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `academic-paper` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `aurora-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.theguardian.com/info/2015/aug/05/the-guardian-and-observer-2015-redesign | The Guardian — design — broadsheet grid, masthead ve kolon ritmi |
| https://fonts.google.com/specimen/Archivo+Black | Archivo Black — Google Fonts — masthead kalınlığı, −0.02em tracking |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond — Google Fonts — haber kolonu serifi, 16.5px/1.56 |
| https://fonts.google.com/specimen/Share+Tech+Mono | Share Tech Mono — Google Fonts — stats bandı ve tarih etiketi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 — Non-text contrast — 1px kural ve odak halkası 3:1 eşiği |

## AI brief

```text
Stil: Broadsheet Daily (styles/87-broadsheet-daily/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="broadsheet-daily"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Archivo Black yalnız masthead'te; --font-body EB Garamond gövdede; --font-mono Share Tech Mono etiket/rakam.
Yüzey: radius 0/2px, gölge yok; derinlik 1px hairline + 3px bölüm kuralından gelir.
Izgara: 12 kolon, gutter 12px, manşet 8/12 + künye 4/12, bölüm ritmi 72px.
Hareket: enter 0.22s steps(3, end) 4px / stagger 0.02; scroll top 94% 0.28s 8px once:true;
         hover 80ms scale 1.000; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (radius, gölge, blur, ikinci renk).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Broadsheet Daily (broadsheet-daily) · family: Publication & Typography (86–95)
Token: --bg #f3f0e9 · --surface #fbf9f4 · --ink #12141a · --accent #a8241b · --line rgba(18,20,26,.18)
Radius: 0px / 2px · Typography: Archivo Black / EB Garamond / Share Tech Mono
Required: Masthead tek satır Archivo Black 46px uppercase −0.02em (mobil 32px); altında 3px + 1px çift kural · Gövde EB Garamond 16.5px / 1.56 / kolon 38ch; gutter 12px · Radius 0px (buton/input/kart); yalnız avatar ve rozet 50%
Banned: Yuvarlak köşe (4px üstü radius), yumuşak gölge, blur/backdrop-filter · Gövdede sans-serif veya 16px altı punto; masthead'te serif · İkinci vurgu rengi, doygun gradyan, renkli ikon
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="broadsheet-daily"] {
  --bg: #f3f0e9; --bg-2: #e8e4da;
  --surface: #fbf9f4; --surface-2: #ece8df;
  --ink: #12141a; --ink-soft: #45484f; --ink-faint: #74777e;
  --accent: #a8241b; --accent-ink: #fdf7f2;
  --line: rgba(18,20,26,.18);
  --danger: #d4261a;
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
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
