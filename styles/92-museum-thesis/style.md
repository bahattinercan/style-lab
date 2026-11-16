# 92 · Museum & Thesis

> **In one sentence:** Museum & Thesis

| | |
|---|---|
| **Feeling** | ağırbaşlı, sessiz, kurumsal, "kâğıt üzerinde" |
| **Best for** | müze/sergi dijital kataloğu, akademik yayın ve tez okuma, kültür kurumu arşivi, araştırma raporu |
| **Avoid** | hızlı e-ticaret, oyun ve etkinlik vitrini, çocuk uygulaması, kampanya/indirim sayfası |
| **Difficulty** | düşük–orta (boşluğu korumak kolay; tipografi disiplinini bozmamak zor) · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="museum-thesis"]` |
| **Composition** | `type` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Museum & Thesis iki kurumsal biçimi birleştirir: **tez** (numaralı bölüm, asılı girinti, dipnot kuralı, künye) ve **müze duvar etiketi** (1px sol kural, mono `Fig.` etiketi, kısa künye metni). Tek bir serif ailesi kullanır (EB Garamond 400/500), mono (IBM Plex Mono) yalnız etiket ve numaralarda görünür. Sayfa 96px kenarla çevrilidir; metin 66ch'i geçmez, sağda 3 kolonluk künye/kenar notu şeridi kalır.

Kazandığı şey: **okuma otoritesi**. Numaralı bölümler ve geniş kenar, metni "kaynak" gibi gösterir; künye şeridi her görsele bir referans numarası bağlar. Feda ettiği şey: **hız ve vitrin etkisi** — bu stil hiçbir şeyi "öne çıkarmaz"; kampanya, ürün lansmanı veya oyunlaştırılmış onboarding bu dilde cansız durur.

### What is not
- **Editorial Design (03) değildir.** Editorial drop cap ve iki kolonlu dergi ritmiyle **anlatı** kurar (Fraunces display + Inter gövde); burada drop cap yok, **tek serif aile** (EB Garamond) ve **asılı girinti** var, ayrıca mono `Fig.` künyeleri karakterin parçası.
- **Dark Academia (33) değildir.** O stil koyu kahve-mum paleti ve altın accent ile **nostalji** kurar; burada zemin açık kâğıt (`#f4f2ec`), accent **slate mavi-gri** (`#3c4a63`) ve 1px levha çerçevesi var.
- **Luxury Typography (04) değildir.** O stil geniş tracking + seyrek yerleşimle "boş lüks" kurar (Cormorant + Jost); burada 17px gövde, 1.72 satır aralığı ve **dipnot/künye katmanı** var.
- **Utility (44) değildir.** Utility hairline + isimli metin stilleriyle **operasyonel** çalışır (Poppins, mavi accent); burada serif gövde ve müze künyesi var.
- **"Boş sayfa + serif" değildir.** Numaralı bölüm işareti, asılı girinti, `Fig.` künyesi ve levha çerçevesi olmadan bu stil sadece bej bir blogdur.

### Where it comes from
Tez biçimi yüzyıllardır aynı işi yapar: bir iddiayı **numaralı bölümler** ve **dipnot** ile zincirlemek. Müze duvar etiketi ise nesneyi **en kısa üç satırda** künyelemek zorundadır (eser, dönem, envanter no). Dijitalde ikisi 2015'lerden sonra birleşti: kültür kurumları, araştırma arşivleri ve akademik yayıncılar uzun okumayı ekranda tutmak için bu disiplini kullanıyor; nedeni ölçülebilir — geniş kenar + 1.72 satır aralığı okuma hızını düşürüp anlamayı artırır.

Klişeye düşmemesi için korunması gereken detay: **geniş kenar ve tek serif aile**. Kenarı 40px'e indirmek, ikinci bir accent eklemek veya görsel çerçevesini kalınlaştırmak stili "kurumsal blog"a çevirir.

### Recognition test in 3 seconds
1. Sayfa çevresinde **96px kenar** var mı; metin 66ch'i geçmiyor mu?
2. Bölüm başlıklarının önünde **mono `1.` / `1.1`** numarası duruyor mu?
3. Paragraflar **asılı girintili** mi (ilk satır dışarıda, devamı 2em içeride)?
4. Görseller **1px levha çerçevesi** ve altında `Fig.` etiketli künye taşıyor mu?
5. Tek serif aile mi (EB Garamond), mono yalnız etiketlerde mi; accent slate ve ekranın ≤ %7'sinde mi?

## Visual signature
- **Geniş kenar:** bölüm çevresi 96px (mobil 56px); nav padding `0 96px`; metin sütunu 7/12 kolon.
- **Numaralı bölüm:** `h2::before` mono 11px `data-sec` değeri (`1.`, `1.1`), accent, 12px sağ boşluk.
- **Asılı girinti:** gövde paragrafı `padding-left: 2em; text-indent: -2em`; lede bu kuralın dışında (temiz blok).
- **Dipnot kuralı:** 40×1px `--ink` çizgi; dipnot/kaynakça başlığından önce.
- **Levha çerçevesi:** kart ve görsel `1px solid var(--line)`, radius 0, gölge yok; görselde 4px iç boşluk (`padding: 4px`).
- **Duvar etiketi/künye:** 1px sol kural + 14px boşluk + 14px/1.5 `--ink-soft` metin, mono `Fig.` öneki accent.
- **Kenar notu şeridi:** sağda 1px dikey kural + 96px genişlik; künye notları mono 11px.
- **Typography:** EB Garamond (display) + EB Garamond (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#3c4a63`; neutral scale `#f4f2ec` → `#191b1f`.
- **Radius:** `0px` / `2px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. **Geniş kenar:** bölüm çevresi 96px (mobil 56px); metin 7 kolonda, 66ch'i geçmez.
2. **Numaralı bölüm:** her h2 bir mono numara taşır (`1.`, `1.1`); numarasız bölüm başlığı yok.
3. **Asılı girinti:** gövde paragrafı 2em asılı; dipnot kuralı 40×1px.
4. **Künye zorunlu:** her görsel/kart bir `Fig. N` etiketi ve 1–2 cümlelik künye taşır.
5. **Levha çerçevesi:** 1px `--line`, radius 0, gölge yok; görselde 4px iç boşluk.
6. **Tek serif + mono:** EB Garamond (400/500) ve IBM Plex Mono (yalnız etiket/numara).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4f2ec` | page background | as a card background |
| `--bg-2` | `#ebe8df` | partition divider floor, table top | button background |
| `--surface` | `#fbfaf6` | kart, input, modal | full-page background |
| `--surface-2` | `#e6e2d8` | passive chip, hover background | primary button |
| `--ink` | `#191b1f` | title, body, icon | large background |
| `--ink-soft` | `#4c515a` | secondary text, description | — |
| `--ink-faint` | `#787e88` | decorative label, separator text | interactive text |
| `--accent` | `#3c4a63` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f4f1e8` | text above accent | non-accent background |
| `--line` | `rgba(25,27,31,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.4:1** · `ink-soft/bg` **7.13:1** · `ink-faint/bg` **3.65:1 (decorative)** · `accent-ink/accent` **7.91:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (EB Garamond) | 38px (mobile 28px) | 700 | 0.98 | -0.035em |
| H2 | same | 25px | 600 | 1.08 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (EB Garamond) | 17px | 400 | 1.6 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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

- Sans display, 48px üstü başlık, afiş ölçeği.
- Gradient, blur, cam yüzey, renkli gölge.
- 2px üstü radius, kart gölgesi, çift çerçeve.
- İkinci accent (altın/bordo), renkli dönem rozetleri.
- Ortalanmış gövde metni; tez metni sola dayalıdır.
- Süs illüstrasyonu, emoji, dolu ikon, drop cap.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 8.55:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | düşük | 38px başlık, 96px kenar, sağda künye şeridi | `shots/01-page.png` |
| Dashboard | düşük | Levha kartları + künye alt metni; mono envanter no | `shots/01-page.png` |
| Form | düşük | 46px alanlar, 1px kenar, 1px odak halkası | `shots/01-page.png` |
| Liste / tablo | orta | 40px satır: dönem, eser, envanter no, künye | `shots/01-page.png` |
| Boş durum | düşük | Tek cümle + `Fig.` yer tutucusu + 1 buton | `shots/01-page.png` |
| Onboarding | düşük | 3 numaralı adım (1. / 2. / 3.); ilerleme çizgi değil numara | `shots/01-page.png` |
| Pricing | orta | 3 levha; önerilen sütunda 1px accent üst kural | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Süs sıfır; alan + tek accent buton | `shots/01-page.png` |
| Modal | orta | 32px padding, mono bölüm numarası başlığı | `shots/01-page.png` |
| Bildirim / toast | orta | Koyu zemin + 1px accent kural, 4200ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + açıklama; `Fig.` kullanılmaz | `shots/01-page.png` |
| Profil / ayar | orta | İki kolon: mono etiket + serif değer, 1px cetvel | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.4:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.13:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.65:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.91:1 | ≥ 4.5 | button text |
| focus ring/ground | 8.55:1 | ≥ 3 | accent ring |
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
| "Kurumsal blog" gibi duruyor | kenar 40px'e inmiş, gölge eklenmiş | 96/56px kenar + gölgesiz levha çerçevesi |
| Metin blok hâlinde ağır | asılı girinti ve lede ayrımı yok | Gövdeye `text-indent: -2em`, lede'yi hariç tut |
| Görseller "yüzen kart" olmuş | radius + gölge eklenmiş | Radius 0, 1px çerçeve, 4px iç boşluk |
| Accent her yerde | dönem etiketleri renklenmiş | Etiketi mono metne çevir; accent yalnız numara/`Fig.`/birincil buton |
| Bölümler karışıyor | numaralandırma yok | `data-sec` ile `1.` / `1.1` numarası ver |
| Koyu modda çerçeveler kayboluyor | `--line` çok düşük | Koyu bloğun `rgba(233,231,224,.16)` değerini kullan |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Thesis | Thesis — Wikipedia — bölüm numaralandırma, dipnot ve künye düzeni |
| https://en.wikipedia.org/wiki/Museum_label | Museum label — Wikipedia — duvar etiketi hiyerarşisi (eser, dönem, envanter no) |
| https://www.getty.edu/ | The J. Paul Getty Museum — levha çerçevesi, künye ve kenar boşluğu oranları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — 17px gövde ve künye metni kontrast ölçümü |

## AI brief

```text
Stil: Museum & Thesis (styles/92-museum-thesis/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="museum-thesis"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: tek serif aile EB Garamond (display 500 / govde 400 17px-1.72, <= 66ch), mono IBM Plex Mono 11px .1em
  yalniz etiket ve bolum numarasinda. Sans display ve 48px ustu baslik yasak.
Yuzey: golge YOK (yalniz yuzende var(--shadow)); kart/levha 1px var(--line), radius 0 (modal 2px).
  Gorsel levhasi: 1px cerceve + 4px ic bosluk + altinda "Fig. N" kunyesi (1px sol kural, 14px metin).
Yerlesim: 96px kenar (mobil 56px), metin 7/12 kolon, sagda 3 kolon kunye seridi, asili girinti 2em,
  dipnot kurali 40x1px. Bolum basligi mono numara tasir (1. / 1.1).
Renk: kagit #f4f2ec + murekkep #191b1f + tek accent slate #3c4a63 (ekranin <= %7'si).
Hareket: enter 1100ms cubic-bezier(.35,.02,.28,1) 20px stagger 110ms; scroll top 77% / 1150ms / 18px / once;
  pin acik scrub 0.8 +95%; hover 460ms imageScale 1.004. prefers-reduced-motion zorunlu.
Yasak: sans display, 48px ustu baslik, gradient/blur, 2px ustu radius, kart golgesi, ikinci accent,
  ortalanmis govde, drop cap, emoji.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Museum & Thesis (museum-thesis) · family: Publication & Typography (86–95)
Token: --bg #f4f2ec · --surface #fbfaf6 · --ink #191b1f · --accent #3c4a63 · --line rgba(25,27,31,.16)
Radius: 0px / 2px · Typography: EB Garamond / EB Garamond / IBM Plex Mono
Required: **Geniş kenar:** bölüm çevresi 96px (mobil 56px); metin 7 kolonda, 66ch'i geçmez. · **Numaralı bölüm:** her h2 bir mono numara taşır (`1.`, `1.1`); numarasız bölüm başlığı yok. · **Asılı girinti:** gövde paragrafı 2em asılı; dipnot kuralı 40×1px.
Banned: Sans display, 48px üstü başlık, afiş ölçeği. · Gradient, blur, cam yüzey, renkli gölge. · 2px üstü radius, kart gölgesi, çift çerçeve.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="museum-thesis"] {
  --bg: #f4f2ec; --bg-2: #ebe8df;
  --surface: #fbfaf6; --surface-2: #e6e2d8;
  --ink: #191b1f; --ink-soft: #4c515a; --ink-faint: #787e88;
  --accent: #3c4a63; --accent-ink: #f4f1e8;
  --line: rgba(25,27,31,.16);
  --danger: #d5291c;
  --danger-ink: #ffffff;
  --ok: #008037;
  --ok-ink: #ffffff;
  --warn: #b45200;
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
  --shadow: 0 1px 3px rgba(25,27,31,.07); --shadow-hard: none;
  --font-display: "EB Garamond", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
