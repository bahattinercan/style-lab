# 66 · Nordic Folk

> **In one sentence:** Nordic Folk

| | |
|---|---|
| **Feeling** | sıcak, el yapımı, neşeli, disiplinli |
| **Best for** | zanaat/yiyecek-içecek markası, kültür etkinliği vitrini, abonelik kutusu, yerel pazar pazaryeri |
| **Avoid** | finans/alarm paneli, 20+ satırlık veri tablosu, klinik sağlık formu, kripto ekranı |
| **Difficulty** | orta (süsü dekoratif katmanda tutmak) · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="nordic-folk"]` |
| **Composition** | `centered` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Nordic Folk, İskandinav halk boyamasının (rosemaling, kurbits, dala) ekran karşılığıdır: **düz boyanmış bir zemin** (keten `#f2ece0`), üstünde **simetrik bitkisel bir bant**, ve onun altında son derece sade bir içerik ızgarası. Süs ile bilgi kesin olarak ayrılır: motif yalnız ayrılmış bantlarda (üst şerit, bölüm ayırıcı, hero köşesi) yaşar; metnin arkasına asla girmez. Bu ayrım stilin hem karakterini hem okunabilirliğini koruyan tek kuraldır.

Kazandığı şey: **sıcaklık + hatırlanma**. Tek bir kırmızı (madder `#9c2b21`) ve iki serif aile, ekranı "el yapımı" hissettirirken hiyerarşiyi boşluk ve punto kurar. Feda ettiği şey: **yoğunluk** — 96px bölüm ritmi ve 24px kart padding'i ile bu stil veri ağır ekranlarda yer israf eder; tablo/dashboard için yalnız tipografi ve radius ödünç alınır.

### What is not
- **Japandi (06) değildir.** Japandi'de süs yoktur, kontrast yumuşaktır (`ink/bg` ≈ 8:1), accent adaçayı yeşilidir. Burada süs **zorunlu** bir katmandır, kontrast **12.67:1** ve accent **madder kırmızısı**; ayrıca boyalı çift kural (1px accent + 1px line) vardır.
- **Bohemian (30) değildir.** Bohemian kilim desenini **arka plana** yayar ve el yazısı kullanır; burada desen yalnız bantta, gövde **Lora** (el yazısı değil) ve radius 6/10px (bohemian'da organik/asimetrik).
- **Victorian (27) değildir.** Victorian süslü çerçeve + small caps + gravür dokusuyla dolu bir yüzey kurar; burada süs **tek bant**, çerçeve yok, `--grain` yalnız .04.
- **"Kırmızı accent eklenmiş minimalizm" değildir.** Minimalizmde süs kategorik olarak yasak ve radius 8/12px; burada süs katmanı ve boyalı kural imzanın kendisidir.
- **Scrapbook (31) değildir.** Scrapbook katman/bant/polaroid ekler; burada tek düzlem, tek boya katmanı var.

### Where it comes from
Norveç rosemaling'i (18.–19. yy gezici ressamların mobilya ve kilise duvarı boyaması), İsveç kurbits/dala geleneği ve Fin karélien nakışları aynı dili paylaşır: **simetrik bitkisel kıvrım + sınırlı palet + düz zemin**. Dijitalde 2020'lerde "craft revival" ve yerel üretici platformlarıyla geri döndü; nedeni ölçülebilir — düz zemin + tek accent, düşük bant genişliğinde bile kimlik taşır (görsel yerine CSS nokta şeridi yeter).

Klişeye düşmemek için korunması gereken detay: **bandın simetrisi ve ölçüsü**. Motifi büyütmek, metnin arkasına almak veya ikinci bir renk eklemek stili "turistik hediyelik" seviyesine indirir.

### Recognition test in 3 seconds
1. Zemin **keten sarısı** mı (`#f2ece0`), beyaz/gri değil mi?
2. Ekranın üstünde **nokta dizisi** (rosemaling bandı) ve bir köşede **eş merkezli halka** var mı?
3. Bölüm başlıklarının üstünde **1px kırmızı + 1px ince çizgi** ikilisi (boyalı çift kural) görünüyor mu?
4. Başlık **serif ve sıcak** (Fraunces 700, ≤54px), gövde de **serif** (Lora) mi — mono yalnız etiketlerde mi?
5. Kartlarda **gölge yok**, ayrım 1px çizgi mi; accent ekranın ≤ %12'sinde mi?

## Visual signature
- **Boyalı çift kural:** 1px `--accent` + 8px boşluk + 1px `--line`; her bölüm başlığının üstünde, başka yerde yok.
- **Rosemaling nokta şeridi:** 32×20px tekrar, 2px accent nokta + 1.5px %40 opaklık ikinci nokta, opacity .50 — yalnız sayfa üst bandı.
- **Kurbits köşe:** 148×148px, 2px `%34 accent` halka + 10px iç halka; hero sağ üstte, mobilde 84px.
- **Düz boya zemin:** zemin ile kart arasındaki fark yalnız ton (`--bg` → `--surface`); kartta `box-shadow: none`.
- **Simetrik bant, asimetrik içerik:** dekoratif eksen ortada, metin ekseni solda; ekran başına en fazla 1 asimetrik blok.
- **Kırmızı yalnız üç yerde:** birincil buton, aktif nav işareti, ornament çekirdeği. Dördüncü kullanım yasak.
- **Chip = nokta:** pill radius (999px) 24px yükseklik, 1px `%42 accent` kenar — "boyanmış düğme" hissi.
- **Typography:** Fraunces (display) + Lora (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#9c2b21`; neutral scale `#f2ece0` → `#1d2a24`.
- **Radius:** `6px` / `10px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Düz boyanmış zemin:** renk bloğu tek parça; gradient, cam ve blur yok (`--blur: 0`).
2. **Süs yalnız ayrılmış bantta:** üst şerit, bölüm ayırıcı, hero köşesi. Motif metnin arkasına girmez.
3. **Accent ≤ %12:** madder kırmızı yalnız birincil buton, aktif nav işareti ve ornament çekirdeğinde.
4. **Boyalı çift kural:** 1px accent + 8px boşluk + 1px line; her bölüm başlığını bu ayırır.
5. **Serif ikilisi:** display Fraunces 700 (≤ 54px), gövde Lora 400; mono yalnız etiket ve chip'te.
6. **Ritim 96/56px, ölçü 64ch, kart padding 24px** — üçü birlikte boşluğun ölçüsüdür.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2ece0` | page background | as a card background |
| `--bg-2` | `#e9e0cf` | partition divider floor, table top | button background |
| `--surface` | `#fbf7ed` | kart, input, modal | full-page background |
| `--surface-2` | `#e3d9c6` | passive chip, hover background | primary button |
| `--ink` | `#1d2a24` | title, body, icon | large background |
| `--ink-soft` | `#4b5b51` | secondary text, description | — |
| `--ink-faint` | `#6f7d71` | decorative label, separator text | interactive text |
| `--accent` | `#9c2b21` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf6e8` | text above accent | non-accent background |
| `--line` | `rgba(29,42,36,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **12.67:1** · `ink-soft/bg` **6.12:1** · `ink-faint/bg` **3.68:1 (decorative)** · `accent-ink/accent` **7.02:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 34px (mobile 34px) | 400 | 1.04 | -0.02em |
| H2 | same | 30px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- The title is large-scale and tightly spaced; body 17px, size 68ch. Label mono and uppercase.
- Measure: 68ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Wide margin (56px), asymmetric 7/5 column. Section titles remain in the left column.
- Section vertical space 84px desktop, 48px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- There is no shadow; distinction by hairline and ground tone. Images are in full-edge or 4:3 frame.
- Radius: `6px` (buton, input, chip), `10px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Motifi metnin arkasına yerleştirmek; kontrast ve okunabilirlik kırılır.
- Üçten fazla renk ailesi (keten + çam + madder dışında) ve ikinci accent.
- Gradient ile hacim taklidi, blur, cam yüzey, neon parlaklık.
- 900/800 ağırlık, italik display, 10px üstü radius.
- Asimetrik dekoratif bant (folk bandı daima simetrik kalır).
- Gövde metninde uppercase veya 0.05em üstü tracking.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 6px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 6px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 6px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 6px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 6px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 6px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 6px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.06:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Üst nokta bandı + kurbits köşe; boyalı çift kural başlığın üstünde | `shots/01-page.png` |
| Dashboard | düşük | Süs yok; kartlar 1px çizgi, KPI sayıları mono, accent yalnız trend | `shots/01-page.png` |
| Form | düşük | Konvansiyon: 44px alan, 2px odak halkası, açıklama `--ink-soft` | `shots/01-page.png` |
| Liste / tablo | düşük | Zebra yok; 44px satır, satır altı 1px çizgi | `shots/01-page.png` |
| Boş durum | orta | Tek kurbits çizimi (84px) + 1 cümle + 1 buton | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım, her adımda tek ornament; ilerleme = 3 nokta dizisi | `shots/01-page.png` |
| Pricing | orta | 3 kart, orta kartta 2px accent çerçeve; fiyat mono | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Süs sıfır; yalnız logo, alan, buton; tek accent buton | `shots/01-page.png` |
| Modal | orta | 2px accent çerçeve, iç 1px line ikinci kural | `shots/01-page.png` |
| Bildirim / toast | orta | Pill toast, sol uçta accent nokta, 3600ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + metin; ornament kullanılmaz | `shots/01-page.png` |
| Profil / ayar | orta | Bölüm başlıkları boyalı çift kural; form alanları 44px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 12.67:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.12:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.68:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.02:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.06:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 90.8 | ≥ 60 target | thin text |

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
| Metin zor okunuyor | motif hero metninin arkasına taşmış | Motifi `.sig` katmanına al, metnin arkasına `background` koyma |
| "Turistik hediyelik" hissi | motif büyütülmüş + ikinci renk eklenmiş | Nokta şeridi 32×20px'te kalsın, tek accent (madder) korunsun |
| Ekran ağır görünüyor | bölüm ritmi 96px yerine 48px, kart padding 16px | 96/56px ritim ve 24px padding'e dön |
| Başlıklar kimliksiz | Fraunces yerine sans display | Display'i Fraunces 700'e sabitle, italic kullanma |
| Fazla kırmızı | accent buton + nav + chip + grafik hepsinde | Accent'i 3 yere indir (buton, aktif işaret, ornament çekirdeği) |
| Kirli kenarlar | `color-mix` yerine sabit rgba | Yalnız `var(--...)` ve `color-mix(in srgb, var(--accent) …)` kullan |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bohemian` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Rosemaling | Rosemaling — Wikipedia — bitkisel kıvrım, simetri ve üç renk disiplini |
| https://en.wikipedia.org/wiki/Dala_horse | Dala horse — Wikipedia — tek motifli halk ikonu; süsün ölçülü kullanımı |
| https://www.nasjonalmuseet.no/en/ | Nasjonalmuseet — halk sanatı arşivi: zemin/şerit oranları |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — dekoratif motifin etkileşimli öğeden ayrılması |

## AI brief

```text
Stil: Nordic Folk (styles/66-nordic-folk/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="nordic-folk"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Fraunces 700 (H1 <= 54px, tracking -0.015em), gövde Lora 400 16/1.66,
  mono IBM Plex Mono yalnız etiket/chip (11px, .18em, uppercase serbest).
Yüzey: düz boya; kart box-shadow: none, ayrım 1px var(--line). Radius 6px / 10px (chip 999px).
Renk: keten #f2ece0 zemin + cam #1d2a24 metin + tek accent madder #9c2b21 (ekranin <= %12'si).
Imza: boyalı çift kural (1px accent + 8px bosluk + 1px line) her bolum basliginin ustunde;
  ust bantta 32x20px nokta seridi (opacity .5); hero sag ustte 148px es merkezli halka (kurbits);
  nav altinda 2px accent kural. Sus YALNIZ bu bantlarda; metnin arkasina motif koyma.
Hareket: enter 620ms cubic-bezier(.22,.61,.36,1) 18px stagger 45ms; scroll top 86% / 760ms / 22px / once;
  hover 190ms imageScale 1.018; pin kapali. prefers-reduced-motion zorunlu.
Yasak: gradient, blur, cam, ikinci accent, metin arkasinda motif, 900 agirlik, italik display,
  asimetrik dekoratif bant, gövdede uppercase.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Nordic Folk (nordic-folk) · family: Cultural & Regional (66–75)
Token: --bg #f2ece0 · --surface #fbf7ed · --ink #1d2a24 · --accent #9c2b21 · --line rgba(29,42,36,.16)
Radius: 6px / 10px · Typography: Fraunces / Lora / IBM Plex Mono
Required: **Düz boyanmış zemin:** renk bloğu tek parça; gradient, cam ve blur yok (`--blur: 0`). · **Süs yalnız ayrılmış bantta:** üst şerit, bölüm ayırıcı, hero köşesi. Motif metnin arkasına girmez. · **Accent ≤ %12:** madder kırmızı yalnız birincil buton, aktif nav işareti ve ornament çekirdeğinde.
Banned: Motifi metnin arkasına yerleştirmek; kontrast ve okunabilirlik kırılır. · Üçten fazla renk ailesi (keten + çam + madder dışında) ve ikinci accent. · Gradient ile hacim taklidi, blur, cam yüzey, neon parlaklık.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="nordic-folk"] {
  --bg: #f2ece0; --bg-2: #e9e0cf;
  --surface: #fbf7ed; --surface-2: #e3d9c6;
  --ink: #1d2a24; --ink-soft: #4b5b51; --ink-faint: #6f7d71;
  --accent: #9c2b21; --accent-ink: #fdf6e8;
  --line: rgba(29,42,36,.16);
  --danger: #d12318;
  --danger-ink: #ffffff;
  --ok: #007c34;
  --ok-ink: #ffffff;
  --warn: #b04f00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 1px 2px rgba(29,42,36,.10); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.015em; --blur: 0px; --grain: 0;
}
```
