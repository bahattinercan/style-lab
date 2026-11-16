# 122 · Collectible Card

> **In one sentence:** Collectible Card

| | |
|---|---|
| **Feeling** | toplanabilir, değerli, taktik, "elden ele geçen" |
| **Best for** | koleksiyon kartı ürünü (dijital kart, oyun envanteri), albüm/koleksiyon yönetimi, nadirlik vitrini, turnuva/sezon ödülü |
| **Avoid** | bankacılık işlem onayı, sağlık formu, uzun okuma sayfası, sade kurumsal vitrin |
| **Difficulty** | orta (kart oranı + katman disiplini) · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="collectible-card"]` |
| **Composition** | `split` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Collectible Card, fiziksel kartın **ölçüsünü** korur: kart `aspect-ratio: 5/7` (2.5×3.5 inç), kenardan **6px içeri çekilmiş ikinci 1px çerçeve**, sol üstte **45° holo bant** (`%50` opaklık) ve alt **%20'de üç hücreli stat şeridi** (mono, `tabular-nums`). Tipografi taktik dildir: Chakra Petch 600 başlık, Jost gövde, JetBrains Mono etiket ve sayı. Accent moru (`#5c33e0`) kartın kimliğini taşır; nadirlik **renkle değil** metinle (`Nadir · 0042/1200`) yazılır.

Kazandığı şey: **sahiplik hissi**. Kart, ekranın içinde "başka bir nesne" gibi durur; set numarası ve stat şeridi onu koleksiyonun parçası yapar. Feda ettiği şey: **akışkanlık** — bu ölçü 5:7'ye kilitli olduğu için geniş ekranlarda boşluk bırakır; liste/tablo ekranlarında kart küçültülür, oran asla değişmez.

### What is not
- **Bento Grid (05) değildir.** Bento değişken oranlı kutularla modüler düzen kurar; burada **tek oran** (5:7) ve katmanlı çerçeve var, kutular birbirine benzemez çünkü hepsi karttır.
- **Neo-Brutalism (13) değildir.** Neo-brutalism 2-3px siyah kenar ve sert gölgeyle kaba dil kurar; burada kenar 1px, gölge yumuşak (`0 10px 24px`), radius 10/16px.
- **Skeuomorphism (34) değildir.** Skeuomorphism malzeme dokusunu (deri, metal) taklit eder; burada doku yok, yalnız holo **bant** ve ince grain `.02`.
- **Y2K (19) değildir.** Y2K krom/parlak plastik ve cam efektleriyle dönemsel nostalji kurar; burada mat yüzey ve tek accent.
- **"Kutu + gölge" değildir.** 5:7 oran, 6px iç çerçeve, holo bant ve stat şeridi olmadan bu stil sıradan bir kart bileşenidir.

### Where it comes from
Koleksiyon kartı 19. yy sonunda tütün kartlarıyla başladı, 1990'larda oyun kartlarıyla (TCG) standartlaştı: **2.5×3.5 inç**, ön yüzde görsel + tip + metin, alt şeritte istatistik, köşede set numarası. Dijitalde aynı biçim oyun envanterlerine ve koleksiyon uygulamalarına geçti; nedeni ölçülebilir — sabit oran, farklı üreticilerin kartlarını aynı ızgarada birleştirir.

Klişeye düşmemesi için korunması gereken detay: **oran ve katman**. Kartı kareye çevirmek, holo bandı tüm yüzeye yaymak veya nadirliği renkle kodlamak stili "oyuncak vitrin"e çevirir.

### Recognition test in 3 seconds
1. Kart **5:7 oranında** mı (dikey, ince uzun); kare kart var mı?
2. Kenardan **6px içeride ikinci 1px çerçeve** görünüyor mu?
3. Sol üstte **45° taramalı holo bant** var mı; ekranın başka yerinde yok mu?
4. Alt şeritte **üç hücreli mono stat** (ör. `7 · 4 · 2`) ve set numarası (`0042/1200`) var mı?
5. Nadirlik **metinle** mi yazılı (renkli rozet yok); gölge tek katman mı?

## Visual signature
- **Sabit oran:** `aspect-ratio: 5/7`; kart, küçük listede bile oranını korur (grid içinde de sabit).
- **Katmanlı çerçeve:** `inset: 6px` ikinci `1px` çerçeve, `accent %40`; kart ile içerik arasında 6px nefes.
- **Holo bant:** `repeating-linear-gradient(45deg, accent %55 0 2px, transparent 2px 9px)`, kartın sol üst %60×%160 alanında, opacity `.50`.
- **Stat şeridi:** kartın alt %20'si; 3 hücre, 1px dikey çizgi, mono 13px `tabular-nums`.
- **Nadirlik taşı:** 22px accent kare, `rotate(45deg)`, çevresinde 4px `%22 accent` halka; landing'de 1 adet.
- **Deste:** iki ofset çerçeve (6px ve 12px kaydırma), `rotate(-3deg)`; gölge çoğaltılmaz.
- **Tip ikonu:** 20px tek renk sembol, kartın sağ üstünde; ikinci ikon yok.
- **Typography:** Chakra Petch (display) + Jost (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#5c33e0`; neutral scale `#eef1f7` → `#131521`.
- **Radius:** `10px` / `16px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Oran sabit:** kart `aspect-ratio: 5/7`; hiçbir breakpoint'te kare/geniş karta dönmez.
2. **İkinci çerçeve:** 6px içeride 1px `accent %40`; tek çerçeve, kalınlaştırılmaz.
3. **Holo bant tek:** sol üst köşe, 45°, opacity `.50`; kart dışında kullanılmaz.
4. **Stat şeridi:** 3 hücre, mono tabular, kartın alt %20'si; hücre ayırıcı 1px.
5. **Set numarası:** `0042/1200` biçiminde mono; nadirlik metinle, renkle değil.
6. **Tek gölge:** `0 10px 24px`; deste hissi ofset çerçeveden gelir, gölge çoğaltılmaz.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#eef1f7` | page background | as a card background |
| `--bg-2` | `#e5e9f2` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#e9edf6` | passive chip, hover background | primary button |
| `--ink` | `#131521` | title, body, icon | large background |
| `--ink-soft` | `#474b5c` | secondary text, description | — |
| `--ink-faint` | `#767b8c` | decorative label, separator text | interactive text |
| `--accent` | `#5c33e0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f4ff` | text above accent | non-accent background |
| `--line` | `rgba(19,21,33,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.04:1** · `ink-soft/bg` **7.64:1** · `ink-faint/bg` **3.73:1 (decorative)** · `accent-ink/accent` **6.44:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 32px (mobile 32px) | 700 | 1.1 | 0.01em |
| H2 | same | 28px | 600 | 1.2 | 0.01em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 15.5px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.2em |
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
- Radius: `10px` (buton, input, chip), `16px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- 3B tilt/döndürme, holografik eğim, mouse-follow ışık.
- Gradient holo parlaması, blur, cam yüzey.
- İkinci accent (altın, gökkuşağı) ve renkli nadirlik rozetleri.
- Kare kart, 20px üstü radius, pill buton.
- Kart yüzeyinde 3'ten fazla punto, 4'ten fazla renk.
- Sürekli holo kayması, parlayan/pulse animasyon.
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.99:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 1 büyük kart + holo bant + deste ofseti | `shots/01-page.png` |
| Dashboard | orta | Koleksiyon sayacı + nadirlik dağılımı; kartlar küçük | `shots/01-page.png` |
| Form | düşük | 44px alanlar, 2px radius, mono etiket | `shots/01-page.png` |
| Liste / tablo | yüksek | 40px satır: ad, set (mono), nadirlik (chip), adet | `shots/01-page.png` |
| Boş durum | orta | Boş deste çerçevesi + tek cümle + 1 buton | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: set seç → kart incele → desteye ekle | `shots/01-page.png` |
| Pricing | orta | 3 paket; önerilen pakette accent iç çerçeve | `shots/01-page.png` |
| Giriş / ödeme | düşük | Dekor sıfır; 44px alan + tek accent buton | `shots/01-page.png` |
| Modal | orta | Kart detayı: 5:7 kart + stat şeridi + set no | `shots/01-page.png` |
| Bildirim / toast | orta | Kazanım bildirimi: mono + 6px accent kare | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + mono açıklama; holo bant yok | `shots/01-page.png` |
| Profil / ayar | orta | Koleksiyon özeti: kart sayısı, set ilerlemesi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.04:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.64:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.73:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.44:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.99:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.4 | ≥ 60 target | thin text |

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
| Kart "kare kutu" olmuş | oran serbest bırakılmış | `aspect-ratio: 5/7` zorunlu |
| Holo her yerde | bant tüm yüzeye yayılmış | Yalnız sol üst %60×%160, opacity .50 |
| "Oyuncak vitrin" hissi | altın/gökkuşağı ikinci accent + glow | Tek mor accent; nadirlik metinle |
| Kart yüzeyi kalabalık | 4-5 punto, 3 ikon | 3 punto (19/13/11), 1 tip ikonu |
| Gölge "yüzüyor" | iki katmanlı gölge | Tek gölge; deste için ofset çerçeve |
| Stat sayıları kayıyor | orantılı sayı | `tabular-nums` + sağa dayalı mono |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `kanban-flow` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |
| Mixing | `wabi-sabi` | Two different ornamental languages compete on the same screen |
| Mixing | `poetry-chapbook` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Trading_card | Trading card — Wikipedia — 2.5×3.5 inç standart ölçü ve katmanlı çerçeve |
| https://en.wikipedia.org/wiki/Collectible_card_game | Collectible card game — Wikipedia — nadirlik sistemi, stat şeridi, set numarası |
| https://scryfall.com/ | Scryfall — kart detay hiyerarşisi (görsel, tip, metin, istatistik) |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — kart içi küçük metin kontrastı |

## AI brief

```text
Stil: Collectible Card (styles/122-collectible-card/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="collectible-card"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Chakra Petch 600 (H1 48px / .01em, mobil 32px), govde Jost 400 15.5/1.66 (<= 52ch),
  stat/etiket JetBrains Mono 13px tabular + 11px .12em. Kart yuzeyinde en fazla 3 punto.
Yuzey: kart aspect-ratio 5/7, radius var(--radius-lg), tek golge var(--shadow);
  kenardan 6px icerde ikinci 1px cerceve (accent %40). Panel golgesiz 1px var(--line).
Renk: binder grisi #eef1f7 + murekkep #131521 + tek accent mor #5c33e0 (ekranin <= %10'u).
  Nadirlik RENKLE degil mono metinle yazilir.
Imza: sol ust kose holo bant (45 derece accent tarama, opacity .50); 3 hucreli stat seridi (mono tabular);
  set numarasi 0042/1200; nadirlik tasi 22px 45 derece donuk kare (landing'de 1);
  deste = iki ofset cerceve (6px + 12px, -3 derece).
Hareket: enter 700ms cubic-bezier(.16,.9,.24,1) 26px stagger 80ms; scroll top 81% / 780ms / 22px / once;
  pin acik scrub 1.05 +120%; hover 200ms imageScale 1.038. prefers-reduced-motion zorunlu.
Yasak: 3B tilt/dondurme, gradient holo parlamasi, blur/cam, ikinci accent, kare kart,
  pill buton, 3'ten fazla punt, pulse/parlama dongusu.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Collectible Card (collectible-card) · family: Playful (116–125)
Token: --bg #eef1f7 · --surface #ffffff · --ink #131521 · --accent #5c33e0 · --line rgba(19,21,33,.16)
Radius: 10px / 16px · Typography: Chakra Petch / Jost / JetBrains Mono
Required: **Oran sabit:** kart `aspect-ratio: 5/7`; hiçbir breakpoint'te kare/geniş karta dönmez. · **İkinci çerçeve:** 6px içeride 1px `accent %40`; tek çerçeve, kalınlaştırılmaz. · **Holo bant tek:** sol üst köşe, 45°, opacity `.50`; kart dışında kullanılmaz.
Banned: 3B tilt/döndürme, holografik eğim, mouse-follow ışık. · Gradient holo parlaması, blur, cam yüzey. · İkinci accent (altın, gökkuşağı) ve renkli nadirlik rozetleri.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="collectible-card"] {
  --bg: #eef1f7; --bg-2: #e5e9f2;
  --surface: #ffffff; --surface-2: #e9edf6;
  --ink: #131521; --ink-soft: #474b5c; --ink-faint: #767b8c;
  --accent: #5c33e0; --accent-ink: #f7f4ff;
  --line: rgba(19,21,33,.16);
  --danger: #d4271b;
  --danger-ink: #ffffff;
  --ok: #007f36;
  --ok-ink: #ffffff;
  --warn: #b35200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 10px; --radius-lg: 16px;
  --shadow: 0 10px 24px rgba(19,21,33,.14); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
