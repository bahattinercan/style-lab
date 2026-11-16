# 90 · Poetry Chapbook

> **In one sentence:** Şiir kitapçığı: 1.1s'lik nefes alan giriş, Cormorant Garamond italik dizeler, 46ch dar ölçü ve sol kenarda tek 1px el dikişi çizgisi.

| | |
|---|---|
| **Feeling** | mahrem · yavaş · el yapımı · boşluklu |
| **Best for** | Şiir kitapçığı, küçük yayınevi, edisyon/atölye sayfası, edebiyat dergisi |
| **Avoid** | Dashboard, e-ticaret listesi, hızlı onboarding akışı |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="poetry-chapbook"]` |
| **Composition** | `type` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Poetry Chapbook bir sayfayı elle dikilmiş kitapçık gibi kurar: 46ch dar ölçü, Cormorant Garamond 44px/1.14 başlık, 16.5px/1.78 gövde, sol kenarda 1px kesikli "dikiş" çizgisi. Kazanılan şey mahremiyet ve nefes; feda edilen şey bilgi yoğunluğu — ekran başına en fazla 1 şiir.

Yüzey kâğıt gibidir: `--bg` sıcak fildişi, ayrım yalnız 1px hairline, gölge yok. Vurgu soluk mor `#4b3f66`; yalnız bölüm numarası, bağlantı ve tek çizgide, ekranın ≤%4'ü.

Hareket en yavaş olanıdır: 1100ms `cubic-bezier(.33,1,.68,1)` giriş, 26px kayma, 120ms stagger; scroll reveal 1.15s. Hızlı hiçbir geçiş yok, hover 380ms.

### What is not
- `ethereal` değildir: ethereal sans gövde ve ışık katmanlarıyla çalışır; burada serif italik, 46ch ölçü ve el dikişi çizgisi vardır.
- `literary-hardcover` değildir: hardcover 64ch ve 17px gövdeyle roman okutur; chapbook 46ch ve 16.5px ile tek şiire odaklanır.
- `dark-academia` değildir: koyu zemin ve gravür yok; fildişi kâğıt ve kesikli dikiş var.
- `minimalism` değildir: minimalism 0.5s giriş ve sans gövdeyle nötr kalır; burada 1.1s ve serif italik.

### Where it comes from
Kökeni 17.–19. yüzyıl chapbook'ları ve modern küçük yayınevi (small press) şiir kitapçıklarıdır: elle dikilmiş sırt, dar ölçü, tek renk baskı. Bugün bağımsız yayınevi ve edebiyat dergisi sitelerinde geri döndü çünkü dijitalde "el yapımı" hissi az kaldı. Klişeye düşmemek için korunması gereken detay: gerçek kesikli dikiş çizgisi ve 46ch ölçü.

### Recognition test in 3 seconds
1. Cormorant Garamond 44px/1.14 başlık; gövde 16.5px/1.78, 46ch.
2. Sol kenarda 1px kesikli dikey çizgi (el dikişi), ekran başına 1.
3. Radius 2px/8px; gölge yok; ayrım yalnız hairline.
4. Vurgu soluk mor `#4b3f66`, yalnız numara/bağlantı/çizgide; ekranın ≤%4'ü.
5. Hareket 1.1s — sayfa neredeyse nefes alır gibi açılır.

## Visual signature
- Display Cormorant Garamond 500 44px / 1.14 / 0.01em (mobil 30px); gövde 16.5px / 1.78 / 46ch.
- El dikişi: sol kenarda 1px `dashed var(--line)`, 12px boşluk, yalnız 1 kez (mobilde gizlenir).
- Şiir bloğu: 8/8 kolon, sol 5/8 hizası, satır arası 1.78; kıta arası 28px.
- Bölüm numarası: mono 10.5px, tracking .18em, `--accent`, başlığın 14px üstünde.
- Radius 2px/8px, gölge `none`; yüzen katman bile hairline ile ayrılır.
- Kâğıt grain .02; ikinci doku yok.
- **Typography:** Cormorant Garamond (display) + Cormorant Garamond (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#4b3f66`; neutral scale `#f7f2e9` → `#22201d`.
- **Radius:** `2px` / `8px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. Display Cormorant Garamond 500 44px/1.14 (mobil 30px); gövde 16.5px/1.78/46ch
2. Sol kenarda 1px kesikli dikiş çizgisi, ekran başına 1, mobilde gizli
3. Tek vurgu soluk mor #4b3f66, ekranın ≤%4'ü, accent üstü daima --accent-ink
4. Gölge yok; ayrım 1px hairline + ton kademesi; radius 2/8px
5. Bölüm arası 96px (mobil 56px), kıta arası 28px, kart içi 24px
6. Bölüm numarası mono 10.5px .18em uppercase
7. Kâğıt grain .02 tek doku; fotoğraf yalnız %20 opaklıkta 1 kez

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f2e9` | page background | as a card background |
| `--bg-2` | `#ece6da` | partition divider floor, table top | button background |
| `--surface` | `#fdfaf4` | kart, input, modal | full-page background |
| `--surface-2` | `#f0eadd` | passive chip, hover background | primary button |
| `--ink` | `#22201d` | title, body, icon | large background |
| `--ink-soft` | `#55504a` | secondary text, description | — |
| `--ink-faint` | `#837c74` | decorative label, separator text | interactive text |
| `--accent` | `#4b3f66` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f3ee` | text above accent | non-accent background |
| `--line` | `rgba(34,32,29,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.57:1** · `ink-soft/bg` **7.15:1** · `ink-faint/bg` **3.69:1 (decorative)** · `accent-ink/accent` **8.63:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 30px (mobile 30px) | 700 | 0.98 | -0.035em |
| H2 | same | 28px | 600 | 1.08 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Cormorant Garamond) | 16.5px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10.5px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12.5px | 600 | 1 | 0 |

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
- Radius: `2px` (buton, input, chip), `8px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- İkinci aile, 700/900 ağırlık, 300 ince ağırlık, sans başlık
- Gölge, 2px+ kenar, gradyan, renkli zemin, doygun mor (#7c3aed benzeri)
- İkon seti, emoji, illüstrasyon, foto kolaj
- Dashboard yoğunluğu: ekran başına 1'den fazla şiir/odak bloğu
- Parallax, pin/scrub, marquee, sürekli döngü, spring, glitch
- Gövdede uppercase (dize hariç), 17px üstü gövde, 46ch üstü ölçü
- Yuvarlak 12px+ radius, kart gölgesi, çift çerçeve
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.15:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | düşük | Tek şiir: sol 5/8 hizada, dikiş çizgisi, 44px başlık, 46ch gövde | `shots/01-page.png` |
| Dashboard | düşük | Dizin: 3 satır mono numara + başlık, 1px hairline | `shots/01-page.png` |
| Form | çok düşük | 44px input, 2px radius, 1px kenar, geniş etiket aralığı | `shots/01-page.png` |
| Liste / tablo | düşük | 48px satır, mono numara, hairline | `shots/01-page.png` |
| Boş durum | orta | Tek dize + 28px boşluk + ikincil bağlantı | `shots/01-page.png` |
| Onboarding | düşük | İki adım, her adımda tek dize; dikiş çizgisi yok | `shots/01-page.png` |
| Pricing | düşük | İki plan, kart yerine hairline ile ayrılmış sütun | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 340px, 2px radius, süs yok | `shots/01-page.png` |
| Modal | orta | 460px, 8px radius, 1px kenar, gölge yok | `shots/01-page.png` |
| Bildirim / toast | orta | Alt orta, 40px, ink zemin + bg metin | `shots/01-page.png` |
| Hata | düşük | Tek cümle + 1px hairline + ikincil bağlantı | `shots/01-page.png` |
| Profil / ayar | orta | Form 5/8 + boşluk 3/8; dikiş çizgisi sol | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.57:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.15:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.69:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.63:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.15:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 95.7 | ≥ 60 target | thin text |

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
| Sayfa "boş" görünüyor | 46ch ölçü + 96px bölüm ritmi fazla gelmiş | Bölüm ritmini 96px'te tut, en az 1 mono etiket ekle |
| Şiir roman gibi akıyor | Gövde 17px ve 64ch olmuş | 16.5px + 46ch + 1.78 satır aralığı |
| El yapımı hissi kayboldu | Dikiş çizgisi veya grain eklenmemiş | Sol kenara 1px dashed + grain .02 |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| garnish | `literary-hardcover` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Cormorant+Garamond | Cormorant Garamond — Google Fonts — display serif, 500 ağırlık, 44px/1.14 |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — Google Fonts — bölüm numarası ve künye etiketi |
| https://en.wikipedia.org/wiki/Chapbook | Chapbook — Wikipedia — el dikişi, dar ölçü ve tek renk baskı geleneği |
| https://www.poetryfoundation.org/ | Poetry Foundation — şiir dizgisi, kıta aralığı ve okuma ritmi |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — 4.5:1 gövde / 3:1 büyük metin eşiği |

## AI brief

```text
Stil: Poetry Chapbook (styles/90-poetry-chapbook/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="poetry-chapbook"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display = --font-body = Cormorant Garamond (500 başlık, 400 gövde); --font-mono IBM Plex Mono numara.
Yüzey: --bg / --surface / --bg-2; radius 2px/8px; gölge yok; ayrım hairline + ton.
Izgara: 46ch dar ölçü, sol 5/8 hiza, kıta arası 28px, bölüm ritmi 96px, sol kenarda 1px kesikli dikiş.
Hareket: enter 1.1s cubic-bezier(.33,1,.68,1) 26px / stagger 0.12; scroll top 83% 1.15s 22px once:true;
         hover 380ms scale 1.02; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gölge, doygun mor, ikon seti, dashboard yoğunluğu).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Poetry Chapbook (poetry-chapbook) · family: Publication & Typography (86–95)
Token: --bg #f7f2e9 · --surface #fdfaf4 · --ink #22201d · --accent #4b3f66 · --line rgba(34,32,29,.14)
Radius: 2px / 8px · Typography: Cormorant Garamond / Cormorant Garamond / IBM Plex Mono
Required: Display Cormorant Garamond 500 44px/1.14 (mobil 30px); gövde 16.5px/1.78/46ch · Sol kenarda 1px kesikli dikiş çizgisi, ekran başına 1, mobilde gizli · Tek vurgu soluk mor #4b3f66, ekranın ≤%4'ü, accent üstü daima --accent-ink
Banned: İkinci aile, 700/900 ağırlık, 300 ince ağırlık, sans başlık · Gölge, 2px+ kenar, gradyan, renkli zemin, doygun mor (#7c3aed benzeri) · İkon seti, emoji, illüstrasyon, foto kolaj
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="poetry-chapbook"] {
  --bg: #f7f2e9; --bg-2: #ece6da;
  --surface: #fdfaf4; --surface-2: #f0eadd;
  --ink: #22201d; --ink-soft: #55504a; --ink-faint: #837c74;
  --accent: #4b3f66; --accent-ink: #f7f3ee;
  --line: rgba(34,32,29,.14);
  --danger: #d5291c;
  --danger-ink: #ffffff;
  --ok: #008037;
  --ok-ink: #ffffff;
  --warn: #b45300;
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
  --shadow: none; --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Cormorant Garamond", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
