# 99 · Depth Parallax

> **In one sentence:** Üç düzlemin farklı hızda kaydığı ve uzak katmanın 2px pusla geri çekildiği, derinliği gölge hiyerarşisiyle kuran arayüz.

| | |
|---|---|
| **Feeling** | derin, sakin, sinematik, ağırlıklı |
| **Best for** | hikâye anlatan landing, ürün lansmanı, mimari/otel vitrini, ses-medya uygulaması |
| **Avoid** | yoğun okuma, veri tablosu, form ağırlıklı süreç — hareket ve gölge dikkat böler |
| **Difficulty** | orta-yüksek (katman disiplini ve performans) · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="depth-parallax"]` |
| **Composition** | `sticky` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Depth Parallax, derinliği **katman hızı** ile kurar: **uzak** düzlem (`blur 2px`, `%55` opaklık, gölge yok), **orta** düzlem (blur 0, `--shadow`: `0 4px 18px`), **yakın** düzlem (`--shadow-hard`: `0 10px 32px` + `%2` ölçek). Parallax katsayıları sabittir: uzak `0.15`, orta `0.4`, yakın `1.0`. Kurucu kararları üç tanedir. Birincisi **üç katman sınırı**: dördüncü katman eklemek derinlik değil karmaşa üretir. İkincisi **pus = uzaklık**: blur yalnız geri planda, metin asla puslu değil. Üçüncüsü **gölge hiyerarşisi**: iki gölge token'ı iki düzleme karşılık gelir (4px/18px → 10px/32px).

Kazandığı şey: **sinematik hiyerarşi** — hangi öğenin "önde" olduğu tek bakışta okunur. Feda ettiği şey: **performans ve sadelik**; scrub `0.45` ve `once: true` bu bedeli sınırlar.

### What is not
- **Glassmorphism (08) değildir:** 08 yarı saydam cam katmanları ve `backdrop-filter` kullanır; burada yüzeyler opak, pus yalnız geri planda ve blur `filter` ile.
- **Grand Tourer Midnight (43) değildir:** 43 lacivert krem + krom hairline ile lüks otomotiv dilidir; burada katman hızı ve pus imzadır, hairline yok.
- **Scandinavian Dark (40) değildir:** 40 düz nötr koyu zemindir ve hareketi ölçülüdür; burada **üç düzlem** ve scrub'lı pin vardır.
- **Kinetic Marquee (96) değildir:** 96 yatay bant hareketidir; 99 dikey derinlik ve katman farkı.
- **"Parallax eklenmiş koyu tema" değildir:** kimlik üç katsayı + pus ölçüsü + gölge hiyerarşisidir; rastgele `translateY` yığını değil.

### Where it comes from
Parallax, fotoğraf ve animasyonda gerçek derinlik algısının taklidi olarak doğdu; web'de 2010'ların scroll hikâyeciliğiyle yaygınlaştı, sonra aşırı kullanımla gözden düştü. Bugünkü doğru kullanımı ölçülü: **üç katman, sabit katsayı, düşük mesafe**. Klişeye dönüşmemesi için korunacak detay: **blur'un yalnız uzak katmanda kalması** ve dikey mesafenin 40px'i geçmemesi.

### Recognition test in 3 seconds
1. Arka planda bulanık (puslu) bir katman var; metin hiçbir yerde bulanık değil.
2. Kaydırırken üç katman farklı hızda hareket ediyor; sayfa durunca hepsi duruyor.
3. Gölge boyutu katmana göre değişiyor (4px → 10px → 16px).
4. Başlıklar Fraunces, gövde Nunito; renkler gece mavisi-siyaha yakın + tek buz mavisi accent.
5. Kartın arkasında 8px kaydırılmış, bulanık ikinci kopya görünüyor.

## Visual signature
- **Üç düzlem:** uzak `blur(2px)` + `%55` opaklık; orta opak + `--shadow`; yakın `%2` ölçek + `--shadow-hard`.
- **Parallax katsayıları:** uzak `0.15`, orta `0.4`, yakın `1.0`; dikey hareket en fazla 40px.
- **Puslu ikincil kopya:** kartın arkasında `inset: 8px -8px -8px 8px`, `filter: blur(var(--blur))`, `%55` opaklık.
- **Işık huzmesi:** hero görselinin arkasında radial accent `%18`, `blur(--blur × 4)`.
- **Atmosferik degrade:** yalnız dekor katmanında, `var(--accent)`/`var(--ink)` karışımı; metin üstünde gradient yasak.
- **Fraunces 500:** 48px, `0.01em`; gövde Nunito 16px/1.66.
- **Hover dili:** 360ms'de gölge 4px → 6px/22px'a çıkar, öğe 1px yükselir, ölçek `1.035`; renk değişmez.
- **Typography:** Fraunces (display) + Nunito (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#5ac8ff`; neutral scale `#0b1014` → `#eaf0f4`.
- **Radius:** `6px` / `14px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. En fazla 3 derinlik düzlemi: uzak (blur 2px, %55), orta (blur 0), yakın (gölge + %2 ölçek)
2. Parallax katsayıları sabit: uzak 0.15, orta 0.4, yakın 1.0
3. Dikey parallax 40px'i geçmez; pin scrub 0.45 ile sınırlıdır
4. Pus yalnız dekoratif katmanda; metin hiçbir zaman puslu düzlemde değil
5. Gölge yalnız orta ve yakın düzlemde: orta `--shadow` (4px/18px), yakın `--shadow-hard` (10px/32px); uzakta gölge yok
6. Fraunces 500 başlık, Nunito gövde; gövde ölçüsü 60 ch

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0b1014` | page background | as a card background |
| `--bg-2` | `#101820` | partition divider floor, table top | button background |
| `--surface` | `#131d26` | kart, input, modal | full-page background |
| `--surface-2` | `#1a2732` | passive chip, hover background | primary button |
| `--ink` | `#eaf0f4` | title, body, icon | large background |
| `--ink-soft` | `#a8b6c0` | secondary text, description | — |
| `--ink-faint` | `#74828c` | decorative label, separator text | interactive text |
| `--accent` | `#5ac8ff` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#05131a` | text above accent | non-accent background |
| `--line` | `rgba(234,240,244,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.63:1** · `ink-soft/bg` **9.21:1** · `ink-faint/bg` **4.84:1 (decorative)** · `accent-ink/accent` **10:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 48px (mobile 30px) | 500 | 1.06 | -0.02em |
| H2 | same | 30px | 600 | 1.18 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `6px` (buton, input, chip), `14px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- 3'ten fazla katman; ekran dışına taşan düzlem.
- Metni blur'lu katmana koymak; gradient metin.
- Neon/glow, `backdrop-filter` cam yüzey.
- 14px üstü radius; Fraunces 900 / italik başlık.
- Throttle'sız scroll dinleyicisi ile parallax sürmek.
- Sürekli hareket eden arka plan.
- Uydurma marka/otel adı; eksik içerik `{{scene}}` gibi işaretli yer tutucu olur.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.14:1 (≥ 3 on background/surface).
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
| Landing / hero | orta | üç düzlem + 8 kolon orta + 6 kolon yakın kart | `shots/01-page.png` |
| Dashboard | düşük | 3 KPI (yakın düzlem) + puslu arka şerit | `shots/01-page.png` |
| Form | düşük | 46px alanlar + arka puslu kopya ipucu | `shots/01-page.png` |
| Liste / tablo | orta | 48px satır, hover'da yakın düzleme çıkar | `shots/01-page.png` |
| Boş durum | orta | puslu boş düzlem + tek CTA | `shots/01-page.png` |
| Onboarding | orta | 3 adım = 3 düzlem metaforu (uzak→yakın) | `shots/01-page.png` |
| Pricing | orta | 3 kart; orta kart yakın düzlem | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | parallax kapalı, tek düzlem | `shots/01-page.png` |
| Modal | orta | en yakın düzlem, 16px/48px gölge | `shots/01-page.png` |
| Bildirim / toast | orta | puslu kopyalı kutu, 5000ms | `shots/01-page.png` |
| Hata | düşük | düzlemler sabitlenir, `--danger` kenar | `shots/01-page.png` |
| Profil / ayar | orta | "hareketi azalt" + pus yoğunluğu ayarı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.63:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.21:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.84:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 10:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.14:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97 | ≥ 60 target | thin text |

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
| Ekran "yüzen kart yığını" gibi duruyor | 4+ katman ve her kartta gölge | 3 katmana indir, orta düzlemdeki gölgeyi 4px'e düşür |
| Metin zor okunuyor | metin puslu katmanda | metni yakın/orta düzleme taşı, pusu dekorla sınırla |
| Baş dönmesi | dikey parallax 40px üstü, katsayılar büyük | mesafeyi 40px'e, katsayıları 0.15/0.4/1.0'a çek |
| Performans düşüyor | throttle'sız scroll + büyük blur | scrub'ı `0.45`'te tut, blur yalnız küçük alanda |
| Derinlik okunmuyor | tüm gölgeler `--shadow` kullanıyor | orta `--shadow`, yakın `--shadow-hard` iki kademesini kur |
| Koyu modda katman kayboluyor | gölge yayılımı küçük | koyuda 18px → 24px, 32px → 40px |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| garnish | `grand-tourer-midnight` | Same level of seriousness; accent sharing is not allowed |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `optical-illusion` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://developer.mozilla.org/en-US/docs/Web/CSS/perspective | MDN · CSS perspective — düzlem ölçek/derinlik ilişkisi |
| https://www.nngroup.com/articles/parallax-scrolling/ | Nielsen Norman · Parallax scrolling — parallax'ın ne zaman zararlı olduğu |
| https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur | MDN · filter: blur() — atmosferik pus ölçüsü ve performans notu |
| https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | WCAG 2.2 · Animation from Interactions — hareketin kapatılabilir olması |

## AI brief

```text
Stil: Depth Parallax (styles/99-depth-parallax/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="depth-parallax"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Fraunces 500) başlıkta, --font-body (Nunito) gövdede,
           --font-mono (IBM Plex Mono) etiket ve sayılarda.
Yüzey: 3 düzlem — uzak (blur 2px, %55), orta (--shadow 4px/18px), yakın (--shadow-hard 10px/32px + %2 ölçek); radius 6px/14px.
Parallax: katsayılar 0.15 / 0.4 / 1.0, dikey hareket <= 40px; pus YALNIZ dekor katmanında, metin asla bulanık değil.
Imza: enter 1.0s cubic-bezier(.16,.6,.3,1) 40px / stagger 0.13; scroll top 88% 1.1s 56px once:true;
      pin acik scrub 0.45 / +320%; hover 360ms scale 1.035.
Yasak: 3'ten fazla katman, ekran dışına taşan düzlem, cam yüzey, gradient metin, sürekli arka plan hareketi.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Depth Parallax (depth-parallax) · family: Motion & Optics (96–105)
Token: --bg #0b1014 · --surface #131d26 · --ink #eaf0f4 · --accent #5ac8ff · --line rgba(234,240,244,.15)
Radius: 6px / 14px · Typography: Fraunces / Nunito / IBM Plex Mono
Required: En fazla 3 derinlik düzlemi: uzak (blur 2px, %55), orta (blur 0), yakın (gölge + %2 ölçek) · Parallax katsayıları sabit: uzak 0.15, orta 0.4, yakın 1.0 · Dikey parallax 40px'i geçmez; pin scrub 0.45 ile sınırlıdır
Banned: 3'ten fazla katman; ekran dışına taşan düzlem. · Metni blur'lu katmana koymak; gradient metin. · Neon/glow, `backdrop-filter` cam yüzey.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="depth-parallax"] {
  --bg: #0b1014; --bg-2: #101820;
  --surface: #131d26; --surface-2: #1a2732;
  --ink: #eaf0f4; --ink-soft: #a8b6c0; --ink-faint: #74828c;
  --accent: #5ac8ff; --accent-ink: #05131a;
  --line: rgba(234,240,244,.15);
  --danger: #e53a2b;
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
  --radius: 6px; --radius-lg: 14px;
  --shadow: 0 4px 18px rgba(0,0,0,.45); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
