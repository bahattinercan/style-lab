# 117 · Carnival Festival

> **In one sentence:** Karnaval afişi mantığı: Anton 72px bant başlık, 30px kayma, 0.28s snap giriş ve hareketli renk şeritleri — müzik, ışık ve kalabalık aynı karede.

| | |
|---|---|
| **Feeling** | coşkulu · yüksek sesli · afiş · kutlama |
| **Best for** | Festival programı, konser bileti, şehir etkinliği, açılış lansmanı |
| **Avoid** | Klinik form, resmi kurum duyurusu, uzun okuma arşivi |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="carnival-festival"]` |
| **Composition** | `split-reverse` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Carnival Festival sayfayı bir karnaval afişi gibi kurar: Anton 72px bant başlık, 1px dış çerçeve, renk şeritleri ve bol ünlem. Kazanılan şey enerji ve "şimdi" hissi; feda edilen şey sakinlik — ekran başına en fazla 2 odak ve 3 renk şeridi.

Renk şeritleri yalnız 8px yüksekliğinde yatay bantlardır (accent, ink, surface-2) ve ekranın %8'ini geçmez. Metin daima `--bg` veya `--accent-ink`; şerit üstüne metin gelmez.

Hareket festival temposundadır: 0.28s `cubic-bezier(.34,1.56,.64,1)` giriş, 30px kayma, 50ms stagger; hover 120ms ve 1.06 ölçek. Snap hissi 1.56 overshoot'ta durur, sürekli ışık patlaması yoktur.

### What is not
- `memphis` değildir: memphis dekoratif şekil ve pastel çizgiyle çalışır; burada şerit bandı, Anton bant başlık ve 0.28s snap var.
- `maximalism` değildir: maximalism katman ve desen yığar; burada ekran başına 2 odak ve 3 şerit sınırı var.
- `dopamine-ui` değildir: dopamine ödül animasyonu ve konfetiyle çalışır; burada ödül tek atım ve şerit bandı.
- `carnival-festival` bir "parti şablonu" değildir: Anton yalnız bant başlıkta, gövde Poppins okunur puntoda kalır.

### Where it comes from
Kökeni Brezilya karnavalı ve Notting Hill afişleridir: kalın tek satır başlık, üst üste binen renk bantları, el yazısı işaretler. Bugün festival ve şehir etkinliği sitelerinde geri döndü çünkü programın "bu hafta" olduğunu anlatması gerekiyor. Klişeye düşmemek için korunması gereken detay: şerit bandının 8px kalması ve başlığın tek satırda durması.

### Recognition test in 3 seconds
1. Anton 72px bant başlık, tek satır, uppercase, tracking −0.01em.
2. 8px yatay renk şeritleri (en fazla 3), metinsiz.
3. 1px dış çerçeve + 2px alt bant; radius 0–4px.
4. Tek vurgu mercan-kırmızı; sarı yalnız şeritte, metin olarak yok.
5. 0.28s snap giriş, 120ms hover — tempo hep yüksek.

## Visual signature
- Anton 72px / 0.94 / −0.01em bant başlık (mobil 40px), uppercase; gövde Poppins 16.5px / 1.6 / 52ch.
- Renk şeridi: 8px yükseklik, 45° kesik uç, ekran başına en fazla 3, metinsiz (mobil 6px).
- Program satırı: 56px, tarih sütunu mono 12px, sahne adı Poppins 700 15px, sağda saat.
- Bilet bloğu: 4px radius, 2px kesikli kenar (bilet perforasyonu), içinde mono kod.
- Dış çerçeve 1px `--ink`, alt bant 2px accent; 2px üstü kalın çerçeve yok.
- Hareketli tek öğe: şerit bandı 0.28s içinde 30px yukarı kayar; sonra durur (döngü yok).
- **Landing hero (QA):** program satırları: 58px saat kolonu (20:30/22:00/23:30), alt bant 2px accent.
- **Typography:** Anton (display) + Poppins (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#b3360f`; neutral scale `#fdf3e3` → `#241a12`.
- **Radius:** `0px` / `4px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. Anton 72px/0.94/−0.01em bant başlık, tek satır (mobil 40px); gövde Poppins 16.5px/1.6/52ch
2. Renk şeridi 8px (mobil 6px), metinsiz, ekran başına en fazla 3 (koyuda 2)
3. Radius 0px (bant) / 4px (bilet, kart); 6px üstü yasak
4. Dış çerçeve 1px --ink, bilet bloğunda 2px kesikli kenar
5. Tek vurgu mercan-kırmızı #b3360f; sarı yalnız şeritte, ekranın ≤%8'i
6. Program satırı 56px, tarih mono 12px; bölüm arası 72px (mobil 44px)
7. Ekran başına en fazla 2 odak bloğu; şerit üstüne metin gelmez

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fdf3e3` | page background | as a card background |
| `--bg-2` | `#f6e7d0` | partition divider floor, table top | button background |
| `--surface` | `#fffaf0` | kart, input, modal | full-page background |
| `--surface-2` | `#f7ead6` | passive chip, hover background | primary button |
| `--ink` | `#241a12` | title, body, icon | large background |
| `--ink-soft` | `#55463a` | secondary text, description | — |
| `--ink-faint` | `#827164` | decorative label, separator text | interactive text |
| `--accent` | `#b3360f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf5ee` | text above accent | non-accent background |
| `--line` | `rgba(36,26,18,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.51:1** · `ink-soft/bg` **8.22:1** · `ink-faint/bg` **4.25:1 (decorative)** · `accent-ink/accent` **5.64:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 40px (mobile 40px) | 700 | 1.1 | 0.01em |
| H2 | same | 40px | 600 | 1.2 | 0.01em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Poppins) | 16.5px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 12px | 400 | 1.2 | 0.2em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Numbers are taboos; score/timer areas are mono and right aligned. Title in uppercase, body in sentence order.
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

- The screen grid acts like a visible frame: a 1px accent border is placed between sections, no decorative lines are added.
- Section vertical space 64px desktop, 40px mobile; card padding 18px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are opaque; There is no glass/blur. Thin accent edge is used for status notification.
- Radius: `0px` (buton, input, chip), `4px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Sürekli kayan şerit (marquee), strobe, flaş, sürekli döngü, parallax, pin/scrub
- Gradyan, neon yeşil/mor, üçüncü sıcak renk, siyah zemin üstü neon
- 72px üstü veya iki satırlı bant başlık; gövdede Anton
- Yumuşak gölge, blur, cam yüzey; 2px üstü düz çerçeve
- Sarı metin, accent üstüne ink metin
- 6px üstü radius, tam yuvarlak buton
- Konfeti patlaması (tek statik kompozisyon hariç), foto üstü renkli overlay
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.85:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 72px bant başlık + 3 şerit + bilet CTA; tek satır başlık | `shots/01-page.png` |
| Dashboard | orta | Program tablosu: 56px satır, mono tarih, sahne adı 700 | `shots/01-page.png` |
| Form | düşük | 48px input, 4px radius, 2px kenar | `shots/01-page.png` |
| Liste / tablo | orta | 56px satır, 1px hairline, sağda saat mono | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + şerit bandı + "program yakında" | `shots/01-page.png` |
| Onboarding | yüksek | Üç adım, her adımda 1 şerit ve tek CTA | `shots/01-page.png` |
| Pricing | orta | Üç bilet tipi: günlük / hafta / VIP; kesikli bilet kenarı | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 400px, 2px kesikli bilet bloğu | `shots/01-page.png` |
| Modal | orta | 560px, 4px radius, 2px çerçeve; backdrop %50 | `shots/01-page.png` |
| Bildirim / toast | orta | Üst orta, 48px, accent zemin + accent-ink metin | `shots/01-page.png` |
| Hata | düşük | Tek satır Anton 22px + tek cümle + tekrar butonu | `shots/01-page.png` |
| Profil / ayar | orta | Bilet geçmişi listesi 56px satır | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.51:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.22:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.25:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.64:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.85:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.4 | ≥ 60 target | thin text |

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
| Sayfa "panayır" gürültüsü | Üçten fazla şerit veya gradyan eklenmiş | Şeridi 3'e (koyuda 2) indir |
| Başlık okunmuyor | Anton iki satıra kırılmış veya 72px altına inmiş | Tek satır + clamp(40px, 7vw, 72px) |
| Bilet bloğu "kart" gibi | Kesikli kenar yerine düz kenar kullanılmış | 2px dashed kenar + mono kod |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `memphis` | Same level of seriousness; accent sharing is not allowed |
| garnish | `maximalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dopamine-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `scandinavian-dark` | Two different ornamental languages compete on the same screen |
| Mixing | `academic-paper` | Two different ornamental languages compete on the same screen |
| Mixing | `utility` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Anton | Anton — Google Fonts — bant başlık kalınlığı ve 0.94 satır aralığı |
| https://fonts.google.com/specimen/Poppins | Poppins — Google Fonts — gövde 16.5px/1.6, 400/700 |
| https://www.nottinghillcarnival.com/ | Notting Hill Carnival — resmi site — afiş dili, program listesi ve şerit bandı |
| https://www.awwwards.com/websites/typography/ | Awwwards — festival typography — tek satır bant başlık örnekleri |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | WCAG 2.2 — Three Flashes — strobe/flaş yasağı gerekçesi |

## AI brief

```text
Stil: Carnival Festival (styles/117-carnival-festival/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="carnival-festival"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Anton yalnız bant başlıkta; --font-body Poppins gövdede; --font-mono tarih/kod.
Yüzey: radius 0/4px, gölge yok; derinlik 1px çerçeve + 8px şerit bandından gelir.
Izgara: 12 kolon, gutter 24px, bölüm ritmi 72px, ekran başına 2 odak ve 3 şerit.
Hareket: enter 0.28s cubic-bezier(.34,1.56,.64,1) 30px / stagger 0.05; scroll top 91% 0.36s 24px once:true;
         hover 120ms scale 1.06; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sürekli kayan şerit, strobe, gradyan, fazla renk).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Carnival Festival (carnival-festival) · family: Playful (116–125)
Token: --bg #fdf3e3 · --surface #fffaf0 · --ink #241a12 · --accent #b3360f · --line rgba(36,26,18,.18)
Radius: 0px / 4px · Typography: Anton / Poppins / JetBrains Mono
Required: Anton 72px/0.94/−0.01em bant başlık, tek satır (mobil 40px); gövde Poppins 16.5px/1.6/52ch · Renk şeridi 8px (mobil 6px), metinsiz, ekran başına en fazla 3 (koyuda 2) · Radius 0px (bant) / 4px (bilet, kart); 6px üstü yasak
Banned: Sürekli kayan şerit (marquee), strobe, flaş, sürekli döngü, parallax, pin/scrub · Gradyan, neon yeşil/mor, üçüncü sıcak renk, siyah zemin üstü neon · 72px üstü veya iki satırlı bant başlık; gövdede Anton
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="carnival-festival"] {
  --bg: #fdf3e3; --bg-2: #f6e7d0;
  --surface: #fffaf0; --surface-2: #f7ead6;
  --ink: #241a12; --ink-soft: #55463a; --ink-faint: #827164;
  --accent: #b3360f; --accent-ink: #fdf5ee;
  --line: rgba(36,26,18,.18);
  --danger: #d72a1e;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b55400;
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
  --shadow: none; --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
