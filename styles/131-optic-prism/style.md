# 131 · Optic Prism

> **In one sentence:** Optik cam mantığı: 1px prizma kenarı, conic kırılma halkası ve 0.58s hassas giriş — blur yok, sadece ışığın kırılması.

| | |
|---|---|
| **Feeling** | keskin · soğuk · hassas · bilimsel |
| **Best for** | Optik/lens ürün sayfası, kamera ekipmanı, ölçüm cihazı vitrini, fotoğraf stüdyosu |
| **Avoid** | Sıcak el yapımı marka, çocuk ürünü, klinik form |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="optic-prism"]` |
| **Composition** | `sticky` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Optic Prism camı taklit etmez, kırar: `conic-gradient` ile 1px kalınlığında prizma kenarı, `color-mix` ile cam tonu ve 0 blur. Michroma 44px display, Inter 16px/1.62 gövde, IBM Plex Mono 11px ölçü etiketleri. Kazanılan şey hassasiyet ve ürün hissi; feda edilen şey sıcaklık.

Yüzey üç kademede kalır: `--bg` soğuk beyaz, `--surface` kırılma halkalı cam panel, `--surface-2` mat cam. Kenar daima 1px, gölge hiç yok; derinlik kırılma halkasından ve ton farkından gelir.

Hareket optik hizalamadır: 0.58s `cubic-bezier(.16,.84,.44,1)` giriş, 14px kayma, 45ms stagger; **tek pin** (scrub 0.85, +105%) ile lens sahnesi sabitlenir, mobilde kapalı. Hover 220ms ve 1.02 — abartı yok.

### What is not
- `glassmorphism` değildir: glassmorphism `backdrop-filter` blur ve cam katman yığar; burada blur 0, kırılma 1px conic halka ile verilir.
- `liquid-glass` değildir: liquid-glass SF Pro ve yay eğrisiyle akışkan davranır; burada Michroma + ölçü etiketi ve 0.58s doğrusal-hassas eğri var.
- `optical-illusion` değildir: optik illüzyon Moiré desen üretir; burada desen yok, tek kırılma halkası var.
- `optic-prism` bir "cam panel şablonu" değildir: kırılma halkası olmadan uygulanmaz.

### Where it comes from
Kökeni optik alet katalogları (Zeiss, Leica objektif çizimleri) ve spektroskop görselleridir. Bugün kamera/optik donanım ürün sayfalarında geri döndü çünkü ürünün asıl değeri ölçülebilir keskinlik. Klişeye düşmemek için korunması gereken detay: blur yasağı ve 1px kırılma halkası.

### Recognition test in 3 seconds
1. Michroma 44px display, ışık harf aralıklı; ölçü etiketleri mono 11px.
2. Kırılma halkası: 1px conic beyaz→cam tonu geçişi, kart kenarında.
3. Blur yok; `backdrop-filter` hiç görünmez.
4. Radius 2px; keskin ama tam köşe değil.
5. Soğuk beyaz zemin + tek turkuaz-çelik accent; ikinci renk yok.

## Visual signature
- Prizma halkası: `conic-gradient(from 210deg, ...)` 1px kenar, kart ve görsel kabında.
- Michroma 44px / 1.3 / 0.02em display (mobil 26px); gövde Inter 16px / 1.62 / 68ch.
- Ölçü bandı: mono 11px uppercase, 3 hücre, 1px üst/alt hairline.
- Radius 2px (kart) / 10px (görsel kabı); 12px üstü yasak.
- Gölge yok; derinlik kırılma + `--surface` ton farkı.
- TEK pin: lens sahnesi scrub 0.85, +105%, mobilde statik.
- **Typography:** Michroma (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#0d5c63`; neutral scale `#f2f6f7` → `#101a1f`.
- **Radius:** `2px` / `10px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Michroma 44px/1.3/0.02em display (mobil 26px); gövde Inter 16px/1.62/68ch
2. Kırılma halkası 1px conic kenar kart ve görsel kabında; blur/backdrop-filter yasak
3. Gölge yok; derinlik halka + ton kademesi; radius 2/10px
4. Tek vurgu çelik-turkuaz #0d5c63, ekranın ≤%6'sı, accent üstü daima --accent-ink
5. Ölçü bandı mono 11px uppercase .14em, 3 hücre, 1px hairline
6. Bölüm arası 88px (mobil 56px), kart içi 24px; ölçek 4·8·12·16·24·32·48·64
7. Tek pin sahnesi: scrub 0.85, +105%, mobilde kapalı

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2f6f7` | page background | as a card background |
| `--bg-2` | `#e7eef0` | partition divider floor, table top | button background |
| `--surface` | `#fdfeff` | kart, input, modal | full-page background |
| `--surface-2` | `#eaf1f3` | passive chip, hover background | primary button |
| `--ink` | `#101a1f` | title, body, icon | large background |
| `--ink-soft` | `#43535a` | secondary text, description | — |
| `--ink-faint` | `#74858c` | decorative label, separator text | interactive text |
| `--accent` | `#0d5c63` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f2fbfc` | text above accent | non-accent background |
| `--line` | `rgba(16,26,31,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.22:1** · `ink-soft/bg` **7.36:1** · `ink-faint/bg` **3.52:1 (decorative)** · `accent-ink/accent` **7.32:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 26px (mobile 26px) | 400 | 1.08 | -0.02em |
| H2 | same | 26px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
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
- Radius: `2px` (buton, input, chip), `10px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Blur, backdrop-filter, cam katman yığma, yarı saydam panel
- Spektrum/çok renkli gradyan, neon mor-pembe, renkli ışık lekesi
- Yumuşak gölge, glow, 2px+ kenar, 12px üstü radius
- İkinci display aile, 700 ağırlık, italik display
- Saf siyah zemin (#000), saf beyaz metin (#fff)
- Parallax, ikinci scrub, marquee, sürekli döngü, blur animasyonu
- Desen/moiré, illüstrasyon kolajı, 3B render
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.62:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 44px Michroma başlık + 7/12 lens kabı (kırılma halkası) + ölçü bandı | `shots/01-page.png` |
| Dashboard | orta | Üç metrik kartı, 1px prizma kenar, mono değer | `shots/01-page.png` |
| Form | düşük | 48px input, 2px radius, 1px kenar | `shots/01-page.png` |
| Liste / tablo | orta | 44px satır, 1px hairline, sağa hizalı mono | `shots/01-page.png` |
| Boş durum | orta | Tek çizgi diyagram + "ölçüm yok" etiketi | `shots/01-page.png` |
| Onboarding | orta | Üç adım: hizala → kalibre → ölç | `shots/01-page.png` |
| Pricing | orta | Üç paket, 2px radius kart, 1px prizma kenar | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 400px, sade form, mono toplam | `shots/01-page.png` |
| Modal | orta | 520px, 10px radius, 1px kenar, gölge yok | `shots/01-page.png` |
| Bildirim / toast | orta | Üst orta, 44px, ink zemin + bg metin | `shots/01-page.png` |
| Hata | düşük | "kırılma hatası" mono etiket + tek cümle | `shots/01-page.png` |
| Profil / ayar | orta | Kalibrasyon paneli: 3 kaydırıcı + mono değer | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.22:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.36:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.52:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.32:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.62:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.6 | ≥ 60 target | thin text |

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
| Sayfa "glassmorphism" gibi | blur/backdrop-filter eklenmiş | Blur 0; kırılma 1px conic halka |
| Display taşıyor | Michroma 44px üstü | clamp(26px, 4vw, 44px) |
| Ölçü okunmuyor | mono etiket 11px altı veya tracking eksik | 11px + 0.14em uppercase |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `marble-vein` | Same level of seriousness; accent sharing is not allowed |
| garnish | `machined-metal-panel` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Michroma | Michroma — Google Fonts — teknik display, 400 ağırlık, 44px |
| https://fonts.google.com/specimen/Inter | Inter — Google Fonts — gövde 16px/1.62 |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — Google Fonts — ölçü bandı 11px .14em |
| https://www.zeiss.com/consumer-products/int/home/lenses.html | Zeiss — lens teknolojisi — optik ürün dili, ölçü etiketleri |
| https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient | MDN — conic-gradient — 1px kırılma halkası formülü |

## AI brief

```text
Stil: Optic Prism (styles/131-optic-prism/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="optic-prism"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Michroma yalnız başlıkta; --font-body Inter gövdede; --font-mono ölçü bandında.
Yüzey: 1px prizma conic kenar + ton kademesi; gölge yok, blur 0; radius 2/10px.
Izgara: 12 kolon, gutter 24px, görsel 7/12, bölüm ritmi 88px.
Hareket: enter 0.58s cubic-bezier(.16,.84,.44,1) 14px / stagger 0.045; scroll top 84% 0.72s 16px;
         pin scrub 0.85 +105% (mobil kapalı); hover 220ms scale 1.02. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (blur, spektrum, glow, 12px+ radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Optic Prism (optic-prism) · family: Material & Luxury (126–135)
Token: --bg #f2f6f7 · --surface #fdfeff · --ink #101a1f · --accent #0d5c63 · --line rgba(16,26,31,.14)
Radius: 2px / 10px · Typography: Michroma / Inter / IBM Plex Mono
Required: Michroma 44px/1.3/0.02em display (mobil 26px); gövde Inter 16px/1.62/68ch · Kırılma halkası 1px conic kenar kart ve görsel kabında; blur/backdrop-filter yasak · Gölge yok; derinlik halka + ton kademesi; radius 2/10px
Banned: Blur, backdrop-filter, cam katman yığma, yarı saydam panel · Spektrum/çok renkli gradyan, neon mor-pembe, renkli ışık lekesi · Yumuşak gölge, glow, 2px+ kenar, 12px üstü radius
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="optic-prism"] {
  --bg: #f2f6f7; --bg-2: #e7eef0;
  --surface: #fdfeff; --surface-2: #eaf1f3;
  --ink: #101a1f; --ink-soft: #43535a; --ink-faint: #74858c;
  --accent: #0d5c63; --accent-ink: #f2fbfc;
  --line: rgba(16,26,31,.14);
  --danger: #d82b1f;
  --danger-ink: #ffffff;
  --ok: #008239;
  --ok-ink: #ffffff;
  --warn: #b65500;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 10px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
