# 38 · Organic / Biophilic

> **In one sentence:** Doğal büyüme mantığıyla kurulmuş arayüz: asimetrik yumuşak radius, toprak–yeşil palet, katmanlı yaprak dokusu ve insan ölçeğinde tipografi.

| | |
|---|---|
| **Feeling** | sakin, canlı, toprakî, davetkâr |
| **Best for** | sağlık/iyilik uygulaması, uzun oturumlu çalışma aracı, gıda–tarım ürünü, eğitim platformu, sürdürülebilirlik markası |
| **Avoid** | finans işlemi ve yoğun tablo, güvenlik/kripto paneli, 8+ saat izlenen kontrol odası, agresif kampanya sayfası |
| **Difficulty** | orta (radius asimetrisi + yeşil bütçesi) · **Accessibility** |  |
| **Family** | Organic (38–38) · **Token** | `kit/tokens.css` → `[data-style="organic-bio"]` |
| **Composition** | `centered` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Organik / biyofilik tasarım, formu **büyümeden** türetir: hiçbir köşe 90° değildir, radius bir tarafta büyür (26px) diğer tarafta küçülür (8px), yüzeyler üst üste binen yaprak katmanları gibi okunur. Palet klorofil ve topraktan gelir — zemin sıcak kırık beyaz `#f3f1e7`, mürekkep koyu zeytin `#232a22`, tek aksan orman yeşili `#4f7a45`. Tipografi insan ölçeğindedir: display 54px Fraunces (serif, yumuşak optik), gövde 16px Nunito (yuvarlak uçlu sans).

Kazandığı şey: uzun oturumlarda **bilişsel yorgunluğu düşüren** bir yüzey — sert köşe ve blok gölge olmadığı için göz sürekli "kenar" taramaz. Feda ettiği şey: keskinlik ve operasyonel yoğunluk. 20 satırlık bir tabloda asimetrik radius ritmi okumayı yavaşlatır; bu yüzden stil veri ekranlarında **geri çekilir** (radius 26 → 18, blob ≤1, yeşil ≤%6).

### What is not
- **Wabi-sabi (07) değildir.** Wabi-sabi hizayı bilinçli kırar, kusuru sergiler (grain ≥.10, eğik etiket). Burada hiza 12 kolonda **korunur**; asimetri yalnız radius yönünde ve tek köşede, sapma ≤0.5°.
- **Japandi (06) değildir.** Japandi düşük kontrast ve neredeyse renksiz nötrle çalışır (`ink/bg` ≈ 8:1); burada `ink/bg` **13.01:1**, aksan doygun yeşil ve 4.78:1.
- **Claymorphism (11) değildir.** Clay 28–40px radius + çift iç gölge (inset) kullanır; burada radius ≤26px, **inset gölge yok**, tek dış gölge var.
- **Ethereal (29) değildir.** Ethereal blur/parlama ile derinlik kurar; burada `--blur: 0px`, hiç `backdrop-filter` yok.
- **Bohemian (30) değildir.** Bohemian çoklu desen/kolajla dolar; burada ekran başına **tek doku** (grain .04) + ≤2 blob.

### Where it comes from
1970'ler organik modernizmi (Aalto'nun vazo formları, Jacobsen'in damla sandalyesi), Kellert'in biyofilik tasarım çerçevesi (14 desen: doğal form, materyal bağlantısı, barınak hissi) ve 2020'lerin "soft tech" dalgası. Bugün tekrar kullanılmasının nedeni ölçülebilir: doğal form ve yeşil, ekran başında geçen sürede stres göstergelerini düşürüyor. Klişeye düşmemesi için korunması gereken detay: **asimetrik radius disiplini** — her köşeyi yuvarlamak "yumuşak tema" olur; tek köşeyi küçültmek büyüme yönü verir.

### Recognition test in 3 seconds
1. En küçük radius **18px**; büyük yüzeyde bir köşe **8px**'e düşüyor mu (asimetri)?
2. Zemin saf beyaz değil, sıcak kırık beyaz `#f3f1e7` mi; gölge tek ve yumuşak mı (`0 6px 18px`, blok gölge yok)?
3. Hero arkasında **en fazla 2** yumuşak blob var mı (opaklık .12–.18, blur yok)?
4. Display **serif** ve 54px mi (Fraunces, line-height 1.08), gövde 16px Nunito mu?
5. Yeşil ekranın **≤%14**'ünde mi; ikinci bir aksan rengi yok mu?

## Visual signature
- **Asimetrik radius:** `.panel { border-radius: 26px 26px 26px 8px; }`, küçük yüzey `18px 18px 18px 6px`; köşe yönü ekran başına sabit (sol-alt), 2. yön kullanılırsa aynı ekranda karışmaz.
- **Pill buton:** `border-radius: 999px`, yükseklik 44px, `padding: 0 22px`; okunabilirlik için `min-height: 44px`.
- **Yaprak katmanı:** hero arkasında 2 radial maske — `radial-gradient(38% 42% at 24% 26%, var(--accent) 0%, transparent 62%)` opaklık .18 ve ikinci katman .12; `filter: none`, alan ≤%22.
- **Tek yumuşak gölge:** `0 6px 18px rgba(35,42,34,.10)`; yüzen katmanda `0 10px 26px rgba(35,42,34,.14)` — bu iki değer dışında gölge yok.
- **İnce çizgi:** `1px solid var(--line)`; hairline dekoratif serbest, 3px üstü yasak.
- **Serif display:** Fraunces 700, 54px, `line-height: 1.08`, `letter-spacing: -0.01em`, en fazla 3 satır.
- **Grain:** `--grain: .04` → örtü opaklığı `.20`, yalnız zemin katmanında, `mix-blend-mode: overlay`.
- **Typography:** Fraunces (display) + Nunito (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#4f7a45`; neutral scale `#f3f1e7` → `#232a22`.
- **Radius:** `18px` / `26px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Radius çifti:** `--radius: 18px` (input, chip kabı, küçük yüzey), `--radius-lg: 26px` (kart, modal, hero). Büyük yüzeyde asimetrik tek köşe: `26px 26px 26px 8px`; yön ekran başına sabit (sol-alt).
2. **Tek gölge:** yalnız `0 6px 18px rgba(35,42,34,.10)`; `--shadow-hard: none`. İkinci gölge katmanı, inset gölge, blok gölge yok.
3. **Blob bütçesi:** ekran başına ≤2 katman, toplam alan ≤%22, opaklık .12–.18, `filter: none`, `pointer-events: none`; metnin üstünden geçmez.
4. **Yeşil bütçesi:** aksan alanı ≤%14 (veri ekranlarında ≤%6); ikinci aksan rengi yok, durum için `--danger`/`--ok`/`--warn` dışında renk eklenmez.
5. **Tipografi ölçeği:** display 54px (mobil 32px) Fraunces, gövde 16px Nunito, etiket 10.5px IBM Plex Mono. Altı basamak: `10.5 · 13 · 16 · 19 · 30 · 54`.
6. **Çizgi:** `1px solid var(--line)` = `rgba(35,42,34,.16)`. 3px ve üstü kalın kural, çift kenarlık yok.
7. **Boşluk ritmi:** bölüm arası 80px (mobil 52px), kart içi 26px, paragraf arası 16px; gövde ölçüsü ≤62ch.
8. **Asimetri:** hero 7/5 veya 8/4; ortalanmış 6/6 kompozisyon yasak. Ekran başına en az 1, en fazla 2 bölüm simetriden çıkar.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f3f1e7` | page background | as a card background |
| `--bg-2` | `#e7e4d6` | partition divider floor, table top | button background |
| `--surface` | `#fbfaf4` | kart, input, modal | full-page background |
| `--surface-2` | `#eeece0` | passive chip, hover background | primary button |
| `--ink` | `#232a22` | title, body, icon | large background |
| `--ink-soft` | `#55604f` | secondary text, description | — |
| `--ink-faint` | `#848b78` | decorative label, separator text | interactive text |
| `--accent` | `#4f7a45` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fbfaf4` | text above accent | non-accent background |
| `--line` | `rgba(35,42,34,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.01:1** · `ink-soft/bg` **5.85:1** · `ink-faint/bg` **3.12:1 (decorative)** · `accent-ink/accent` **4.78:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 32px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10.5px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

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
- Radius: `18px` (buton, input, chip), `26px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Radius 0 veya keskin 90° köşe (buton, input, kart, chip — istisna yok).
- Blok/sert gölge, çok katmanlı gölge, inset gölge, neon glow.
- İki renk arası gradyan geçişi (mavi→mor, turuncu→pembe); `linear-gradient` renk karışımı yasak — yalnız tek renkten saydama giden radial maske (blob) serbest.
- Blur / cam (`backdrop-filter`), yarı saydam panel.
- Turuncu-terracotta, mavi, mor ikinci aksan; metalik/altın vurgu.
- 3px+ kalın kural, uppercase display başlık, dev tipografi (>72px).
- Ekran başına 2'den fazla doku/desen; foto kolaj.
- Sürekli nefes alan (scale 1→1.06) blob animasyonu, parallax, marquee.
- Gövde metninde uppercase, mono veya 300 ağırlık.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 18px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 18px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 18px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 18px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 18px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 18px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 18px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.78:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 54px Fraunces başlık, 7/5 asimetri, ≤2 blob, tek CTA; hero görseli asimetrik radius | `shots/01-page.png` |
| Dashboard | düşük | blob kapanır (≤1, opaklık .12); KPI'lar 26px radius + mono etiket; yeşil ≤%6 | `shots/01-page.png` |
| Mobil | orta | tek kolon, display 32px, dokunma 44px, blob yalnız üst bölümde | `shots/01-page.png` |
| Bileşenler · temel | orta | palet + ölçek levhası; radius çifti ve tek gölge her bileşende görünür | `shots/01-page.png` |
| Form | çok düşük | blob yok; 14px radius input, tek sütun 460px, etiket mono | `shots/01-page.png` |
| Modal / katman | orta | 28px radius + `0 18px 44px` gölge; başlık 30px; 2 buton sağa | `shots/01-page.png` |
| Veri | düşük | tablo 56px satır, iç çizgi 1px; çubuklar üst 8px yuvarlak | `shots/01-page.png` |
| Gezinme | orta | alt 1px kural; aktif öğe 2px yeşil alt çizgi; logo squircle | `shots/01-page.png` |
| Pricing | orta | 3 kart; orta kart `0 10px 26px` gölge + asimetrik radius; tek yeşil CTA | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | süs ≤.18; yalnız 1px kenar + 26px radius; güven için sade | `shots/01-page.png` |
| Liste | düşük | filtre çubuğu 1px alt kural; satır 56px; seçili satır sol 3px yeşil | `shots/01-page.png` |
| Boş / hata durumu | orta | tek blob (opaklık .18) + tek cümle + tek buton; 404'te display 54px | `shots/01-page.png` |
| Ayarlar | düşük | bölüm başlıkları 1px kural + 26px kart; anahtar 44×26 pill | `shots/01-page.png` |
| Onboarding | yüksek | adım başına bir yaprak katmanı (1 → 2 blob, sonra sabit); ilerleme çubuğu 4px | `shots/01-page.png` |
| Makale | orta | 62ch ölçü, 30px H2, 1px ayırıcı; serif yalnız başlıkta | `shots/01-page.png` |
| Mobil sheet | orta | alt sayfa üst köşe 26px, alt köşe 0, 44px sürükleme tutamacı | `shots/01-page.png` |
| Mobil form | çok düşük | tam genişlik input 46px, klavye üstü CTA 44px pill | `shots/01-page.png` |
| Mobil liste | düşük | 64px satır, avatar yerine squircle baş harf (18px radius) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.01:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 5.85:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.12:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.78:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.78:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.1 | ≥ 60 target | thin text |

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
| "Yuvarlak kurumsal tema" gibi duruyor | Her köşe aynı radius, asimetri yok | Büyük yüzeyde tek köşeyi 8px'e düşür; yön ekran başına sabit |
| Yumuşak ama dağınık | İkiden fazla blob, farklı opaklıklar | Blob ≤2 katman, opaklık .12–.18, blur 0 |
| Okunmuyor | Blob metnin üstünde veya opaklık >.25 | Blob `pointer-events: none`, `z-index` düşük, opaklık ≤.18 |
| Claymorphism'e kaydı | Inset gölge / 32px+ radius eklendi | Radius ≤26px, inset gölge yok, tek dış gölge |
| Çamurumsu palet | Yeşil + toprak + turuncu birlikte | Tek aksan; ikinci sıcak renk yasak |
| Zemin kirli görünüyor | `--bg` ile `--surface` arasındaki fark <4% | Zemin `#f3f1e7`, kart `#fbfaf4` (fark ~%5, 1px çizgiyle ayrılır) |
| Mobilde başlık kırpılıyor | 54px sabit punto | `clamp(32px, 4.4vw, 54px)` |
| Tablo yavaş okunuyor | Asimetrik radius satırlarda | Tablo satırı radius 12px, asimetri yalnız kart/modal düzeyinde |
| Grain leke gibi | `--grain` > .06 veya metin üstünde | `.04`, opaklık .20, yalnız zemin katmanı |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bohemian` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.terrapinbrightgreen.com/reports/14-patterns/ | 14 Patterns of Biophilic Design (Terrapin) — biyofilik tasarımın 14 deseni: doğal form, malzeme, barınak |
| https://fonts.google.com/specimen/Fraunces | Fraunces — display serif, yumuşak optik eksen |
| https://fonts.google.com/specimen/Nunito | Nunito — gövde, yuvarlak uçlu sans |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — etiket / ölçü |
| https://www.moma.org/artists/6 | Organic modernism (Aalto) — Alvar Aalto: asimetrik form, insan ölçeği |

## AI brief

```text
Stil: Organic / Biophilic (styles/38-organic-bio/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="organic-bio"] değişkenleri; hard-coded renk/gölge/radius yasak.
Form: radius çifti 18px / 26px; büyük yüzeyde tek köşe 8px (26px 26px 26px 8px), yön ekran başına sabit; 0 radius yasak.
Renk: zemin #f3f1e7 + mürekkep #232a22 (13.01:1) + tek aksan #4f7a45 (accent-ink/accent 4.78:1); yeşil alan ≤%14, ikinci aksan yok.
Tipografi: --font-display (Fraunces) yalnız başlıkta 54px/1.08, mobil 32px, uppercase yok; --font-body (Nunito) gövdede 16px/1.68; --font-mono (IBM Plex Mono) 10.5px uppercase etiketlerde, tracking 0.14em.
Yüzey: 3 seviye (--bg / --surface + 1px var(--line) / + --shadow 0 6px 18px); tek gölge, --shadow-hard none.
Doku: grain .04 (zemin) + ≤2 blob katmanı (opaklık .12–.18, blur 0, pointer-events none).
Düzen: hero 7/5 veya 8/4; bölüm arası 80px (mobil 52px); gövde ölçüsü ≤62ch.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; butonlar pill (999px), input 14px, focus 2px accent + 3px offset.
Hareket: basma 140ms, geçiş 260ms, ödül 420ms; prefers-reduced-motion zorunlu.
Yasak: blok gölge, inset gölge, blur/cam, ikinci aksan, iki renk arası gradyan, 3px+ kural, uppercase display, sürekli blob animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Organic / Biophilic (organic-bio) · family: Organic (38–38)
Token: --bg #f3f1e7 · --surface #fbfaf4 · --ink #232a22 · --accent #4f7a45 · --line rgba(35,42,34,.16)
Radius: 18px / 26px · Typography: Fraunces / Nunito / IBM Plex Mono
Required: **Radius çifti:** `--radius: 18px` (input, chip kabı, küçük yüzey), `--radius-lg: 26px` (kart, modal, hero). Büyük yüzeyde asimetrik tek köşe: `26px 26px 26px 8px`; yön ekran başına sabit (sol-alt). · **Tek gölge:** yalnız `0 6px 18px rgba(35,42,34,.10)`; `--shadow-hard: none`. İkinci gölge katmanı, inset gölge, blok gölge yok. · **Blob bütçesi:** ekran başına ≤2 katman, toplam alan ≤%22, opaklık .12–.18, `filter: none`, `pointer-events: none`; metnin üstünden geçmez.
Banned: Radius 0 veya keskin 90° köşe (buton, input, kart, chip — istisna yok). · Blok/sert gölge, çok katmanlı gölge, inset gölge, neon glow. · İki renk arası gradyan geçişi (mavi→mor, turuncu→pembe); `linear-gradient` renk karışımı yasak — yalnız tek renkten saydama giden radial maske (blob) serbest.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="organic-bio"] {
  --bg: #f3f1e7; --bg-2: #e7e4d6;
  --surface: #fbfaf4; --surface-2: #eeece0;
  --ink: #232a22; --ink-soft: #55604f; --ink-faint: #848b78;
  --accent: #4f7a45; --accent-ink: #fbfaf4;
  --line: rgba(35,42,34,.16);
  --danger: #d4271b;
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
  --radius: 18px; --radius-lg: 26px;
  --shadow: 0 6px 18px rgba(35,42,34,.10); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
