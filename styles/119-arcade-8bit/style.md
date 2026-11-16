# 119 · Arcade 8-bit

> **In one sentence:** Modern arcade kabini: Press Start 2P 32px skor başlığı, CRT tarama dokusu, 0.18s steps(4) giriş ve tek neon aksan — nostalji, ama okunur ve klavye erişilebilir.

| | |
|---|---|
| **Feeling** | nostaljik · kesik · neon · rekabetçi |
| **Best for** | Oyun vitrini, skor tablosu, retro lansman, e-spor turnuva sayfası |
| **Avoid** | Kurumsal doküman, uzun okuma, sağlık/finans formu |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="arcade-8bit"]` |
| **Composition** | `split-reverse` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Arcade 8-bit koyu bir kabin ekranı kurar: `#0e1224` zemin, Press Start 2P 32px skor başlığı, Space Grotesk 16px gövde ve VT323 20px sayaç. Kazanılan şey anında tanınan arcade kodu; feda edilen şey uzun metin konforu — Press Start 2P asla 3 satırı geçmez.

Derinlik piksel kenardan gelir: 1px `--line` çerçeve + 4px köşe kırpma (clip-path), gölge yok. Tek neon mint aksan (`#35e08a`) yalnız skor, odak ve aktif öğede; ekranın ≤%6'sı.

Hareket kabin temposundadır: 0.18s `steps(4, end)` giriş, 8px kayma, 20ms stagger; hover 70ms ve ölçek 1.000 (arcade'de ölçek yok). CRT tarama dokusu statiktir, animasyonlu değildir.

### What is not
- `pixel-art` değildir: pixel-art Silkscreen + Inter ile ızgara pixel dilini kurar; burada Press Start 2P + VT323 sayaç ve steps(4) hareket var.
- `cybercore` değildir: cybercore neon çok renkli ve scanline animasyonludur; burada tek mint aksan ve statik tarama var.
- `terminal-ui` değildir: terminal tek mono aile ve 0px offset kullanır; burada 8px kayma, 4px köşe kırpma ve pixel display var.
- `arcade-8bit` bir "neon oyun afişi" değildir: gövde Space Grotesk okunur puntoda kalır, neon yalnız aksanda.

### Where it comes from
Kökeni 1980'lerin arcade kabinleri (Pac-Man, Street Fighter skor panelleri) ve 8-bit ev konsollarıdır. Bugün retro oyun vitrinleri ve e-spor sayfalarında geri döndü çünkü skor hiyerarşisi hâlâ en hızlı okunan rekabet dilidir. Klişeye düşmemek için korunması gereken detay: pixel display'in 3 satır sınırı ve statik tarama.

### Recognition test in 3 seconds
1. Press Start 2P 32px skor başlığı (en fazla 3 satır), gövde Space Grotesk 16px.
2. Koyu lacivert zemin + tek mint neon aksan; ikinci neon yok.
3. Köşe kırpma 4px clip-path; yuvarlak radius yok.
4. Sayaç VT323 20px; "1UP" ve "HI" etiketleri uppercase.
5. 0.18s steps(4, end) giriş — yumuşak ease hiç görünmez.

## Visual signature
- Press Start 2P 32px / 1.4 / 0 bant başlık (mobil 20px); asla 3 satırı geçmez.
- Gövde Space Grotesk 16px / 1.62 / 68ch; sayaç VT323 20px.
- Köşe kırpma: `clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)` tüm kartlarda.
- Statik CRT taraması: 1px yatay çizgi / 3px, %4 opaklık, yalnız bölüm zemininde, animasyonsuz.
- Skor satırı: 40px, sıra numarası VT323, oyuncu adı Space Grotesk 500, skor sağa hizalı tabular.
- Odak halkası 2px mint + 2px offset; klavye ile tüm skor tablosu gezilebilir.
- **Landing hero (QA):** skor tablosu: kırpılmış köşe, 3px accent şerit, `press start` altbilgisi.
- **Typography:** Press Start 2P (display) + Space Grotesk (body) + VT323 (mono label).
- **Colour discipline:** a single accent `#35e08a`; neutral scale `#0e1224` → `#eef4ff`.
- **Radius:** `0px` / `2px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. Press Start 2P 32px/1.4 başlık, en fazla 3 satır (mobil 20px); gövde Space Grotesk 16px/1.62/68ch
2. Koyu lacivert zemin + tek mint aksan #35e08a, ekranın ≤%6'sı
3. Köşe kırpma 4px clip-path tüm kartlarda; yuvarlak radius yok (modal 2px istisna)
4. Statik CRT taraması 1px/3px %4, yalnız bölüm zemininde, animasyonsuz
5. Skor satırı 40px (mobil 56px), skor sağa hizalı tabular-nums
6. Bölüm arası 72px (mobil 44px), kart içi 20px; ölçek 4·8·12·16·24·32·48·64
7. Odak halkası 2px mint + 2px offset; tüm skor tablosu klavyeyle gezilebilir

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0e1224` | page background | as a card background |
| `--bg-2` | `#141a2e` | partition divider floor, table top | button background |
| `--surface` | `#121728` | kart, input, modal | full-page background |
| `--surface-2` | `#1b2136` | passive chip, hover background | primary button |
| `--ink` | `#eef4ff` | title, body, icon | large background |
| `--ink-soft` | `#a7b3cc` | secondary text, description | — |
| `--ink-faint` | `#78849c` | decorative label, separator text | interactive text |
| `--accent` | `#35e08a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#05130c` | text above accent | non-accent background |
| `--line` | `rgba(238,244,255,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.82:1** · `ink-soft/bg` **8.81:1** · `ink-faint/bg` **4.93:1 (decorative)** · `accent-ink/accent` **11.02:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Press Start 2P) | 20px (mobile 20px) | 700 | 1.1 | 0.01em |
| H2 | same | 24px | 600 | 1.2 | 0.01em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (VT323) | 10px | 400 | 1.2 | 0.2em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- İkinci neon renk (magenta/cyan), gradyan, glow/text-shadow, animasyonlu parlaklık
- Animasyonlu scanline, flicker, strobe (3Hz üstü), sürekli döngü
- Yumuşak gölge, blur, cam yüzey, 4px üstü radius
- Press Start 2P gövdede veya 32px üstünde, 3 satırdan uzun pixel başlık
- Ölçek/zoom animasyonu, spring, parallax, pin/scrub
- Saf siyah zemin (#000), RGB split (glitch) — okunurluğu bozar
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.77:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 32px pixel başlık + 1 sprite + "INSERT COIN" CTA | `shots/01-page.png` |
| Dashboard | yüksek | Skor tablosu 40px satır, VT323 sayaç | `shots/01-page.png` |
| Form | düşük | 44px input, 0 radius, 1px kenar, VT323 placeholder | `shots/01-page.png` |
| Liste / tablo | yüksek | 40px satır, sıra no + ad + skor (sağa hizalı) | `shots/01-page.png` |
| Boş durum | orta | "NO CREDITS" + tek satır açıklama + CTA | `shots/01-page.png` |
| Onboarding | yüksek | Üç ekran: 1UP → HI → START; her ekranda 1 tuş | `shots/01-page.png` |
| Pricing | orta | Üç kredi paketi; kart yerine çerçeveli panel | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 360px, "ENTER NAME" akışı | `shots/01-page.png` |
| Modal | orta | 480px, 2px radius, 1px kenar, backdrop %60 | `shots/01-page.png` |
| Bildirim / toast | orta | Üst orta, 36px, mint zemin + accent-ink "BONUS" | `shots/01-page.png` |
| Hata | düşük | "GAME OVER" + tek satır + RETRY butonu | `shots/01-page.png` |
| Profil / ayar | orta | Oyuncu kartı: 3 harf isim + skor geçmişi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.82:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.81:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.93:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 11.02:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.77:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.7 | ≥ 60 target | thin text |

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
| Metin okunmuyor | Press Start 2P gövdeye inmiş | Pixel display yalnız başlıkta, gövde Space Grotesk |
| Ekran "neon çorbası" | İkinci neon veya glow eklenmiş | Tek mint aksan, glow yok |
| Tarama titriyor | Scanline animasyonlu | Statik 1px/3px %4 doku |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `pixel-art` | Same level of seriousness; accent sharing is not allowed |
| garnish | `cybercore` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Press+Start+2P | Press Start 2P — Google Fonts — pixel display, 400 tek ağırlık, 32px sınırı |
| https://fonts.google.com/specimen/VT323 | VT323 — Google Fonts — CRT sayaç rakamı, 20px |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk — Google Fonts — gövde 16px/1.62, okunur sans |
| https://www.arcade-museum.com/ | The Arcade Museum — kabin skor paneli hiyerarşisi (1UP/HI) |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | WCAG 2.2 — Three Flashes — strobe/flicker yasağı gerekçesi |

## AI brief

```text
Stil: Arcade 8-bit (styles/119-arcade-8bit/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="arcade-8bit"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Press Start 2P yalnız başlıkta; --font-body Space Grotesk gövdede; --font-mono VT323 sayaçta.
Yüzey: radius 0/2px, gölge yok; derinlik 1px çerçeve + 4px köşe kırpmadan gelir.
Izgara: 12 kolon, gutter 24px, skor tablosu 8/12, bölüm ritmi 72px.
Hareket: enter 0.18s steps(4, end) 8px / stagger 0.02; scroll top 95% 0.22s 6px once:true;
         hover 70ms scale 1.000; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (ikinci neon, glow, animasyonlu scanline, ölçek).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Arcade 8-bit (arcade-8bit) · family: Playful (116–125)
Token: --bg #0e1224 · --surface #121728 · --ink #eef4ff · --accent #35e08a · --line rgba(238,244,255,.16)
Radius: 0px / 2px · Typography: Press Start 2P / Space Grotesk / VT323
Required: Press Start 2P 32px/1.4 başlık, en fazla 3 satır (mobil 20px); gövde Space Grotesk 16px/1.62/68ch · Koyu lacivert zemin + tek mint aksan #35e08a, ekranın ≤%6'sı · Köşe kırpma 4px clip-path tüm kartlarda; yuvarlak radius yok (modal 2px istisna)
Banned: İkinci neon renk (magenta/cyan), gradyan, glow/text-shadow, animasyonlu parlaklık · Animasyonlu scanline, flicker, strobe (3Hz üstü), sürekli döngü · Yumuşak gölge, blur, cam yüzey, 4px üstü radius
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="arcade-8bit"] {
  --bg: #0e1224; --bg-2: #141a2e;
  --surface: #121728; --surface-2: #1b2136;
  --ink: #eef4ff; --ink-soft: #a7b3cc; --ink-faint: #78849c;
  --accent: #35e08a; --accent-ink: #05130c;
  --line: rgba(238,244,255,.16);
  --danger: #e73d2d;
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
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Press Start 2P", ui-monospace, monospace;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "VT323", ui-monospace, monospace;
  --tracking: 0; --blur: 0px; --grain: 0;
}
```
