# 120 · Craft Handmade

> **In one sentence:** El yapımı zanaat: kraft kâğıt dokusu, Caveat 52px el yazısı başlık, 1px kesikli dikiş çizgisi ve 0.82s ağır giriş — her blok "elle yerleştirilmiş" gibi durur.

| | |
|---|---|
| **Feeling** | sıcak · el emeği · dokunulur · yavaş |
| **Best for** | El yapımı ürün mağazası, atölye/kurs sayfası, butik marka hikâyesi, zanaat arşivi |
| **Avoid** | Yoğun dashboard, hızlı ödeme akışı, kurumsal yönetim paneli |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="craft-handmade"]` |
| **Composition** | `fullbleed` · `pill` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Craft Handmade bir tezgâh gibi kurulur: kraft kâğıt zemini (`#efe6d6`), Caveat 52px el yazısı başlık, Nunito 16.5px/1.72 gövde ve sol kenarda 1px kesikli dikiş çizgisi. Kazanılan şey el emeği hissi ve sıcaklık; feda edilen şey hız — ekran başına 1 ürün ve 1 hikâye.

Malzeme dili dokudan gelir: `--grain .04` kraft dokusu, 2px `--line` kesikli dikiş, 4px radius köşeler (keskin değil ama yuvarlak da değil). Gölge yoktur; derinlik kâğıt katmanı ve dikişten gelir.

Hareket ağır ve elle yapılmış gibidir: 0.82s `cubic-bezier(.4,.1,.3,1)` giriş, 26px kayma, 90ms stagger; scroll reveal 0.95s. **Tek pin** sahnesi: 3 adımlı üretim süreci sabitlenir (scrub 1.1, +120%), mobilde kapalı.

### What is not
- `scrapbook` değildir: scrapbook kolaj ve rastgele rotasyonla çalışır; burada tek dikiş çizgisi ve 0 rotasyon var.
- `bohemian` değildir: bohemian desen ve sıcak renk karışımı kullanır; burada tek accent (taba) ve kraft zemin.
- `nordic-folk` değildir: nordic folk geometrik nakış desenleriyle çalışır; burada desen yok, doku var.
- `craft-handmade` bir "vintage filtre" değildir: grain %4'te durur, sepya fotoğraf overlay'i yok.

### Where it comes from
Kökeni Anadolu ve Avrupa el sanatları tezgâhları, el dikimi defterler ve 2010'ların Etsy atölye estetiğidir. Bugün butik marka ve atölye sayfalarında geri döndü çünkü seri üretim yorgunluğu "kim yaptı" sorusunu doğurdu. Klişeye düşmemek için korunması gereken detay: gerçek 1px kesikli dikiş ve %4'ü geçmeyen grain.

### Recognition test in 3 seconds
1. Caveat 52px el yazısı başlık; gövde Nunito 16.5px/1.72.
2. Sol kenarda 1px kesikli dikiş çizgisi, ekran başına 1.
3. Kraft zemin `#efe6d6` + grain %4; saf beyaz yok.
4. Tek accent taba `#7a4b2a`; ikinci sıcak renk yok.
5. 0.82s ağır giriş, 300ms hover — hız hissi hiç yok.

## Visual signature
- Caveat 700 52px / 1.08 başlık (mobil 32px); gövde Nunito 16.5px / 1.72 / 48ch.
- Dikiş çizgisi: sol kenarda 2px `dashed var(--line)`, 16px içeride, ekran başına 1 (mobilde 1px).
- Kraft dokusu: `--grain .04` overlay + 1px/7px yatay kâğıt çizgisi %3.
- Ürün kartı: 4px radius, 1px `--line` kenar, üstte 2px taba şerit (etiket), gölge yok.
- Fiyat/ölçü: IBM Plex Mono 12.5px, etiketler uppercase .14em.
- Tek pin sahnesi: 3 adım (kes → dik → paketle), scrub 1.1, +120%, mobilde statik.
- **Landing hero (QA):** el işi defter: kesikli dikiş kenarı, dashed satırlar, `no. 014` parti altbilgisi.
- **Typography:** Caveat (display) + Nunito (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#7a4b2a`; neutral scale `#efe6d6` → `#2a231a`.
- **Radius:** `4px` / `10px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. Caveat 700 52px/1.08 başlık (mobil 32px); gövde Nunito 16.5px/1.72/48ch
2. Sol kenarda 2px dashed dikiş çizgisi, ekran başına 1 (mobilde 1px)
3. Kraft grain %4 + 1px/7px yatay kâğıt çizgisi %3; ikinci doku yok
4. Tek accent taba #7a4b2a, ekranın ≤%7'si, accent üstü daima --accent-ink
5. Gölge yok; radius 4/10px; ayrım 1px hairline + doku
6. Bölüm arası 96px (mobil 56px), kart içi 24px; ölçek 4·8·12·16·24·32·48·64
7. Tek pin sahnesi: üretim adımları, scrub 1.1, +120%, mobilde statik
8. Fiyat/ölçü IBM Plex Mono 12.5px; etiketler uppercase .14em

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#efe6d6` | page background | as a card background |
| `--bg-2` | `#e5dac6` | partition divider floor, table top | button background |
| `--surface` | `#f9f3e7` | kart, input, modal | full-page background |
| `--surface-2` | `#e9dfcb` | passive chip, hover background | primary button |
| `--ink` | `#2a231a` | title, body, icon | large background |
| `--ink-soft` | `#574c3d` | secondary text, description | — |
| `--ink-faint` | `#857a68` | decorative label, separator text | interactive text |
| `--accent` | `#7a4b2a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fbf5ea` | text above accent | non-accent background |
| `--line` | `rgba(42,35,26,.20)` | all borders | text colour |

- Measured contrast: `ink/bg` **12.53:1** · `ink-soft/bg` **6.77:1** · `ink-faint/bg` **3.4:1 (decorative)** · `accent-ink/accent` **6.75:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Caveat) | 32px (mobile 32px) | 700 | 1.1 | 0.01em |
| H2 | same | 32px | 600 | 1.2 | 0.01em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16.5px | 400 | 1.62 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 12.5px | 400 | 1.2 | 0.2em |
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
- Radius: `4px` (buton, input, chip), `10px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Sepya/vintage fotoğraf filtreleri, gradyan, parlak metalik, iki sıcak renk
- Gölge, blur, cam yüzey; 12px üstü radius
- Kolaj, rastgele rotasyon, sticker patlaması, emoji süs
- İkinci scrub, pin'in mobilde açık bırakılması, marquee, sürekli döngü
- Gövdede el yazısı font (Caveat yalnız başlıkta), 16.5px altı gövde
- Saf beyaz zemin, saf siyah metin, filter: invert()
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 4px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 4px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 4px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.63:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 52px el yazısı başlık + 1 ürün fotoğrafı + dikiş çizgisi | `shots/01-page.png` |
| Dashboard | düşük | Ürün listesi: 3 kart, 1px kenar, gölge yok | `shots/01-page.png` |
| Form | düşük | 48px input, 4px radius, 1px kenar | `shots/01-page.png` |
| Liste / tablo | düşük | 52px satır, mono fiyat, 1px hairline | `shots/01-page.png` |
| Boş durum | orta | "tezgâh boş" + tek cümle + ikincil buton | `shots/01-page.png` |
| Onboarding | orta | Üç adım: kes → dik → paketle (pin sahnesi mobilde statik) | `shots/01-page.png` |
| Pricing | orta | İki atölye paketi: birebir / grup; 10px radius kart | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 400px, sade form, mono özet | `shots/01-page.png` |
| Modal | orta | 480px, 10px radius, 1px kenar, gölge yok | `shots/01-page.png` |
| Bildirim / toast | orta | Alt sol, 44px, ink zemin + bg metin | `shots/01-page.png` |
| Hata | düşük | Tek cümle + dikiş çizgisi + tekrar butonu | `shots/01-page.png` |
| Profil / ayar | orta | Atölye profili: 2 kolon, mono ölçüler | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 12.53:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.77:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.4:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.75:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.63:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 88.2 | ≥ 60 target | thin text |

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
| Sayfa "vintage filtre" gibi | Grain %6 üstüne çıkmış veya sepya overlay var | Grain %4, filtre yok |
| El yapımı hissi kayboldu | Dikiş çizgisi yok, başlık sans olmuş | Sol kenar 2px dashed + Caveat başlık |
| Pin sırasında metin zıplıyor | İki ScrollTrigger veya scrub 1.4 üstü | Tek pin, scrub 1.1, mobilde kapalı |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `scrapbook` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bohemian` | Same level of seriousness; accent sharing is not allowed |
| garnish | `nordic-folk` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Caveat | Caveat — Google Fonts — el yazısı başlık, 700 ağırlık, 52px |
| https://fonts.google.com/specimen/Nunito | Nunito — Google Fonts — gövde okunurluğu, 16.5px/1.72 |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — Google Fonts — fiyat/ölçü etiketi 12.5px |
| https://www.etsy.com/seller-handbook | Etsy — seller handbook — el yapımı ürün sunumu, malzeme anlatısı |
| https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | GSAP — ScrollTrigger pin — tek pin sahnesi ve mobilde kapatma |

## AI brief

```text
Stil: Craft Handmade (styles/120-craft-handmade/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="craft-handmade"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Caveat 700 yalnız başlıkta; --font-body Nunito gövdede; --font-mono fiyat/ölçüde.
Yüzey: --bg / --surface / --surface-2; radius 4/10px; gölge yok; ayırım 1px hairline + %4 grain.
Izgara: 7/4 asimetri, gutter 24px, bölüm ritmi 96px, sol kenarda 1 dikiş çizgisi.
Hareket: enter 0.82s cubic-bezier(.4,.1,.3,1) 26px / stagger 0.09; scroll top 79% 0.95s 22px once:true;
         pin scrub 1.1 +120% (mobil kapalı); hover 300ms scale 1.02. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sepya filtre, gölge, kolaj, ikinci scrub).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Craft Handmade (craft-handmade) · family: Playful (116–125)
Token: --bg #efe6d6 · --surface #f9f3e7 · --ink #2a231a · --accent #7a4b2a · --line rgba(42,35,26,.20)
Radius: 4px / 10px · Typography: Caveat / Nunito / IBM Plex Mono
Required: Caveat 700 52px/1.08 başlık (mobil 32px); gövde Nunito 16.5px/1.72/48ch · Sol kenarda 2px dashed dikiş çizgisi, ekran başına 1 (mobilde 1px) · Kraft grain %4 + 1px/7px yatay kâğıt çizgisi %3; ikinci doku yok
Banned: Sepya/vintage fotoğraf filtreleri, gradyan, parlak metalik, iki sıcak renk · Gölge, blur, cam yüzey; 12px üstü radius · Kolaj, rastgele rotasyon, sticker patlaması, emoji süs
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="craft-handmade"] {
  --bg: #efe6d6; --bg-2: #e5dac6;
  --surface: #f9f3e7; --surface-2: #e9dfcb;
  --ink: #2a231a; --ink-soft: #574c3d; --ink-faint: #857a68;
  --accent: #7a4b2a; --accent-ink: #fbf5ea;
  --line: rgba(42,35,26,.20);
  --danger: #cc1c11;
  --danger-ink: #ffffff;
  --ok: #007830;
  --ok-ink: #ffffff;
  --warn: #ac4b00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 10px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Caveat", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
