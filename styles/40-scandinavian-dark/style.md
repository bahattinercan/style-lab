# 40 · Scandinavian Dark

> **In one sentence:** Kuzey ışığının mat hâli: düşük doygunluklu koyu yüzeyler, 1px hairline ile ayrılmış geniş boşluk ve süs yerine ışığın kendisiyle kurulan sakin bir arayüz.

| | |
|---|---|
| **Feeling** | sakin, mat, ölçülü, sessiz |
| **Best for** | uzun oturumlu üretkenlik aracı, içerik/okuma uygulaması, sakin e-ticaret (mobilya, kahve, kırtasiye), müze–galeri dijital kataloğu, finans dışı SaaS paneli |
| **Avoid** | yoğun operasyon/kontrol odası (20+ satır tablo, 12 saat izleme), agresif kampanya ve indirim sayfası, oyun/etkinlik vitrini, çocuk uygulaması, kripto/alarm paneli |
| **Difficulty** | orta (düşük kontrastlı koyu zeminde hiyerarşiyi süs olmadan kurmak) · **Accessibility** |  |
| **Family** | New Wave (39–40) · **Token** | `kit/tokens.css` → `[data-style="scandinavian-dark"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Scandinavian Dark, hiyerarşiyi **parlaklık ve boşlukla** kurar; renkle ya da süsle kurmaz. Zemin mat, sıcak nötrlü koyu yeşil-gri `#171a19` — siyah değil: içinde `#1d211f`'e doğru bir sıcaklık taşır, böylece 8 saatlik oturumda gözü "delik" gibi yormaz. Üç yüzey tonu vardır (`--bg` → `--surface` → `--surface-2`) ve aralarındaki fark **%5–%8 parlaklık**; iki yüzeyi ayıran şey gölge değil `1px` hairline'dır. Tek aksan, liken yeşili `#b9c6a9`: doygunluğu düşük olduğu için "vurgu" gibi değil, ışığın bir yüzeye düşmesi gibi okunur.

Kazandığı şey: **süreklilik**. Süs, gradyan ve gölge olmadığı için ekranın hiçbir yeri "dikkat çekmek" için yarışmaz; kullanıcı 20. dakikada da 2. dakikadaki aynı sakinlikte okur. Feda ettiği şey: **ilk 3 saniyedeki çekicilik**. Bu stil hatırlanmak için değil, uzun süre yanında kalınmak için tasarlanır; bu yüzden vitrin/landing işlerinde tek bir büyük fotoğraf veya tek bir soluk ışık lekesi taşır, gerisi boşluktur.

### What is not
- **Dark Academia (33) değildir.** Dark Academia sıcak kahve-mum paleti, gotik serif ve altın accent ile "nostalji" kurar (`--line: rgba(176,134,63,.32)`, çift çerçeve); burada palet **soğuk nötr** (`#171a19` – `#7d8279`), accent **liken** ve çizgi **tek 1px**, süs yok.
- **Kinetic Type (37) değildir.** Kinetic 96px'e kadar atlayan dev ölçek, `-0.03em` negatif tracking ve asit sarı vurguyla çalışır; burada en büyük başlık **44px**, tracking **-0.005em**, accent **düşük doygunluk**.
- **Japandi (06) değildir.** Japandi aynı ölçülülüğü **açık** zeminde ve 8:1 kontrastla kurar; burada zemin koyu ve `ink/bg` **14.16:1** — ölçülülük ortak, ışık yönü ters.
- **Cyberpunk (22) / Cybercore (23) değildir.** Onlar neon, glow ve mono gövde ile "terminal" kurar; burada **glow yok** (`--blur: 0`, parlama yok), mono yalnız etiketlerde ve gövde Inter.
- **Minimalism (01) değildir.** Minimalism açık zeminde **gölgeyle** (`0 1px 2px`) hacim kurar ve 8/12px radius kullanır; burada kart **gölgesiz** (mat), derinlik 1px hairline + ton kademesi, radius **6/10px**.

### Where it comes from
İskandinav iç mekân geleneğinden (mat yüzeyler, doğal ışığı maksimize eden beyaz–gri–ahşap dengesi), Alvar Aalto ve Arne Jacobsen'in ölçülü form dilinden ve 2010'ların "dark mode" dalgasından gelir. Web'e taşınması bir teknik zorunlulukla oldu: koyu zeminde gölge görünmez, bu yüzden koyu temalar **kenarlık ve boşlukla** derinlik kurmak zorundadır — bu da İskandinav mat estetiğiyle birebir örtüşür. Bugün tekrar kullanılmasının nedeni ölçülebilir: düşük doygunluklu koyu palet, uzun oturumda göz yorgunluğunu ve parlaklık dalgalanmasını azaltır. Klişeye düşmemesi için korunması gereken detay: **hairline disiplini ve boşluk cömertliği** — kenarlığı 2px'e çıkarmak veya boşluğu sıkıştırmak stili "koyu kurumsal tema"ya çevirir.

### Recognition test in 3 seconds
1. Kartlarda **gölge yok**, yalnız `1px` hairline var mı (`rgba(233,231,224,.14)`); yüzen katman dışında gölge görünüyor mu?
2. Zemin **siyah değil** sıcak nötr koyu mu (`#171a19`); üç yüzey tonu arasındaki fark %5–%8 mi?
3. Ekranda **tek** aksan (liken `#b9c6a9`) ve ekranın **≤%8**'i mi; ikinci renk yok mu?
4. Başlık **44px** (mobil 30px) ve serif mi (Fraunces 400, `line-height 1.12`); dev/uppercase başlık yok mu?
5. Bölüm arası **96px** (mobil 56px) ve gövde ölçüsü **66ch** mi; süs/illüstrasyon/desen yerine boşluk mu var?

## Visual signature
- **Hairline kart:** `.panel { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; padding: 30px; }` — kart ekranda yalnız çizgiyle vardır.
- **Ton kademesi:** `--bg #171a19` → `--surface #1f2422` → `--surface-2 #262c29`; her adım ~%5 parlaklık, `--line` bu adımların arasını çizer.
- **Liken accent:** `#b9c6a9` dolgu + `#141715` metin (10.07:1); accent **dolu buton** olarak ekran başına 1 kez, geri kalan yerde yalnız 2px aktif işareti veya odak halkası.
- **Sakin başlık:** Fraunces 400, 44px, `line-height: 1.12`, `letter-spacing: -0.005em`, en fazla 3 satır, 21ch; uppercase yok.
- **Geniş boşluk:** bölüm arası 96px, kart içi 30px, kart başlığı ile gövde arası 12px; iki kart arası 24px.
- **Kuzey ışığı:** landing'de tek radial leke — `radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%)`, opaklık `.07`, 62vw çap, `pointer-events: none`; ikinci leke yok.
- **Grain:** `--grain: .05` → örtü opaklığı `.16`, `soft-light`, zemin katmanında sabit (kaymaz, animasyonsuz).
- **Typography:** Fraunces (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#b9c6a9`; neutral scale `#171a19` → `#e9e7e0`.
- **Radius:** `6px` / `10px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. **Mat kural:** kart ve panel `box-shadow: none`; derinlik yalnız `1px solid var(--line)` + ton kademesi ile kurulur. `--shadow` **yalnız** yüzen katmanda (modal, dropdown, hero görseli) kullanılır.
2. **Hairline:** bütün kenarlıklar ve ayırıcılar `1px solid var(--line)` = `rgba(233,231,224,.14)`. 2px yalnız odak halkasında; 3px ve üstü kalın çerçeve yok. Çift kenarlık (çerçeve + gölge) yasak.
3. **Yüzey kademesi:** `--bg` → `--surface` → `--surface-2` arası fark **%5–%8 parlaklık**; iki komşu yüzey arasındaki fark %12'yi geçerse "blok" gibi okunur ve hairline gereksizleşir.
4. **Tek aksan:** `--accent` yalnız 4 yerde — birincil buton, aktif durum işareti, veri serisi 1, odak halkası. Ekranın **≤%8**'i (veri ekranlarında ≤%4). İkinci aksan rengi yok; durum renkleri (`--danger`/`--ok`/`--warn`) yalnız durum bildirir.
5. **Süs bütçesi:** dekoratif şekil, illüstrasyon, ikon kolajı **yok**. Ekran başına en fazla **1** soluk ışık lekesi (radial, opaklık ≤.07) ve yalnız landing'de.
6. **Tipografi:** display Fraunces **400** 44px (mobil 30px) `/1.12`, gövde Inter 16px `/1.7`, etiket IBM Plex Mono 10.5px uppercase. Toplam **6** punto basamağı: `10.5 · 13 · 16 · 20 · 28 · 44`.
7. **Boşluk ritmi:** bölüm arası **96px** (mobil 56px), kart içi **30px** (mobil 20px), gövde ölçüsü **66ch**, paragraf arası 16px.
8. **Grain:** `--grain: .05` tek doku; örtü opaklığı `.16`, `mix-blend-mode: soft-light`, yalnız zemin katmanında, `pointer-events: none`.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#171a19` | page background | as a card background |
| `--bg-2` | `#1d211f` | partition divider floor, table top | button background |
| `--surface` | `#1f2422` | kart, input, modal | full-page background |
| `--surface-2` | `#262c29` | passive chip, hover background | primary button |
| `--ink` | `#e9e7e0` | title, body, icon | large background |
| `--ink-soft` | `#a6aaa2` | secondary text, description | — |
| `--ink-faint` | `#7d8279` | decorative label, separator text | interactive text |
| `--accent` | `#b9c6a9` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#141715` | text above accent | non-accent background |
| `--line` | `rgba(233,231,224,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.16:1** · `ink-soft/bg` **7.42:1** · `ink-faint/bg` **4.46:1 (decorative)** · `accent-ink/accent` **10.07:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 30px (mobile 30px) | 500 | 1.06 | -0.02em |
| H2 | same | 28px | 600 | 1.18 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10.5px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

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
- Radius: `6px` (buton, input, chip), `10px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Gölge: yumuşak gölge (kartlarda), blok gölge, inset gölge, `drop-shadow`, neon glow — `--shadow-hard` hiç kullanılmaz.
- Cam / `backdrop-filter` / yarı saydam panel (`--blur: 0`); saydamlık yalnız modal backdrop'ında.
- 2px ve üstü kalın çerçeve, çift çerçeve, çerçeve + gölge kombinasyonu.
- İki renk arası gradyan geçişi, mesh gradient, parlak "aurora" lekeleri; parlaklık animasyonu.
- İkinci aksan rengi (turuncu, mavi, mor); doygun accent (doygunluk >%40).
- Saf siyah zemin (`#000`) ve saf beyaz metin (`#fff`) — sıcak nötr kullanılır.
- Uppercase display, 60px üstü başlık, 3 satırdan uzun başlık, negatif tracking < `-0.02em`.
- İllüstrasyon, emoji süs, desen/motif tekrarı, ikon dolu şerit, foto kolaj.
- Sürekli animasyon (nefes alan katman, marquee, parallax), yay/spring sıçraması.
- Gövde metninde mono veya uppercase; 300 ağırlık (koyu zeminde incelir, okunmaz).
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.78:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta-yüksek | 44px Fraunces, 7/5 asimetri, tek dolu CTA, tek ışık lekesi (≤.07); gerisi boşluk | `shots/01-page.png` |
| Dashboard | düşük | süs 0; KPI 20px Inter 500 + mono etiket; tablo hairline; accent ≤%4 | `shots/01-page.png` |
| Mobil | orta | tek kolon, 30px başlık, 44px dokunma hedefi, bölüm arası 56px | `shots/01-page.png` |
| Bileşenler · temel | orta | palet + ölçek levhası; radius 6/10 ve hairline her bileşende görünür | `shots/01-page.png` |
| Form | çok düşük | tek sütun 460px, 46px input, odak 2px accent + 2px offset; süs 0 | `shots/01-page.png` |
| Modal / katman | orta | 10px radius + `--shadow`; backdrop 62%; başlık 28px; 2 buton sağa | `shots/01-page.png` |
| Veri | düşük | 52px satır, 1px alt çizgi, çubuk üst 3px; eksen mono 10.5px | `shots/01-page.png` |
| Gezinme | orta | alt 1px kural, aktif 2px accent alt çizgi, nav yüksekliği 72px | `shots/01-page.png` |
| Pricing | orta | 3 kart (eşit), orta kart `--surface-2` + üst 2px accent; tek dolu CTA | `shots/01-page.png` |
| Giriş | çok düşük | süs 0, tek kart 10px radius, hata durumu `--danger` 1px kenar | `shots/01-page.png` |
| Liste | düşük | filtre çubuğu 1px alt kural, 52px satır, seçili satır sol 2px accent | `shots/01-page.png` |
| Boş / hata durumu | orta | tek 1.5px ikon + tek cümle + tek buton; 404'te Fraunces 64px | `shots/01-page.png` |
| Ayarlar | düşük | bölüm başlıkları mono etiket + 1px kural; anahtar 44×24, tehlike bölgesi `--danger` | `shots/01-page.png` |
| Ödeme | çok düşük | özet sütunu sağda, 46px input, hairline tablo; accent yalnız ödeme butonunda | `shots/01-page.png` |
| Onboarding | orta | adım göstergesi 2px çizgi, seçenek kartı 10px + hairline, tek ileri CTA | `shots/01-page.png` |
| Makale | orta | 66ch ölçü, 28px H2, 1px ayırıcı; serif yalnız başlıkta | `shots/01-page.png` |
| Mobil · alt sayfa | orta | üst köşe 10px, alt köşe 0, 44px sürükleme tutamacı (1px çizgi) | `shots/01-page.png` |
| Mobil · form | çok düşük | tam genişlik 46px input, klavye üstü 44px CTA, etiket mono | `shots/01-page.png` |
| Mobil · liste | düşük | 64px satır, 1px ayırıcı, avatar yerine 6px radius baş harf kutusu | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.16:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.42:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.46:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 10.07:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.78:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 91 | ≥ 60 target | thin text |

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
| "Koyu kurumsal tema" gibi duruyor | Kenarlık 2px'e çıkmış, boşluk sıkışmış | Hairline 1px, bölüm arası 96px, kart içi 30px |
| Kartlar havada yüzüyor | Karta `--shadow` verilmiş | Kart `box-shadow: none`; gölge yalnız yüzen katmanda |
| Palet çamurumsu | Zemin ve yüzey arasındaki fark <%4 veya accent doygun | Ton adımı %5–%8; accent doygunluk ≤%40 (`#b9c6a9`) |
| Göz yoruyor | Saf siyah zemin + saf beyaz metin, 300 ağırlık | `#171a19` + `#e9e7e0`, en ince ağırlık 400 |
| Hiyerarşi kayboldu | Her şey `--ink`, her buton dolu | Tek dolu buton; ikincil `ghost`; açıklama `--ink-soft` |
| Dark Academia'ya kaydı | Sıcak kahve ton + altın accent + çift çerçeve | Soğuk nötr palet, liken accent, tek 1px çizgi |
| Grain leke gibi | `--grain` > .06 veya metin üstünde | `.05`, örtü `.16`, `soft-light`, yalnız zemin katmanı |
| Mobilde başlık kırpılıyor | 44px sabit punto | `clamp(30px, 3.6vw, 44px)` + `text-wrap: balance` |
| Tablo gürültülü | Satır arası çift çizgi, zebra + hover birlikte | Tek alt çizgi; hover `--surface-2`, zebra yok |
| Form "ölü" görünüyor | Input zemini `--surface` ile aynı | Input zemini `--bg-2`, kenar 1px, odak 2px accent |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `kinetic-type` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.nngroup.com/articles/dark-mode/ | NN/g — Dark Mode vs. Light Mode — koyu temada kontrast, parlaklık ve uzun oturum kuralları |
| https://m3.material.io/styles/color/roles | Material 3 — Color roles — yüzey ton kademesi (surface/container) mantığı |
| https://fonts.google.com/specimen/Fraunces | Fraunces — display serif, 400 ağırlık, düşük kontrastlı optik |
| https://fonts.google.com/specimen/Inter | Inter — gövde; 16px/1.7 ölçüsü ve nötr harf ritmi |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — etiket / ölçü, 10.5px uppercase 0.12em |
| https://www.alvaraalto.fi/ | Alvar Aalto Foundation — mat yüzey, doğal ışık, ölçülü boşluk |

## AI brief

```text
Stil: Scandinavian Dark (styles/40-scandinavian-dark/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="scandinavian-dark"] değişkenleri; hard-coded renk/gölge/radius yasak.
Yüzey: mat — kart box-shadow: none, derinlik 1px var(--line) + ton kademesi (--bg #171a19 → --surface #1f2422 → --surface-2 #262c29); --shadow yalnız modal/dropdown/hero görselinde (0 2px 10px rgba(0,0,0,.35)).
Renk: tek aksan liken #b9c6a9 (accent-ink/accent 10.07:1), ink/bg 14.16:1, ink-soft/bg 7.42:1; accent ekranın ≤%8'i, ikinci aksan yok.
Tipografi: --font-display (Fraunces 400) başlıkta 44px/1.12 (mobil 30px), tracking --tracking (-0.005em); --font-body (Inter) gövde 16px/1.7, ölçü ≤66ch; --font-mono (IBM Plex Mono) 10.5px uppercase 0.12em etiket.
Boşluk: bölüm arası 96px (mobil 56px), kart içi 30px (mobil 20px), gutter 32px, container 1160px; hero 7/5 veya 8/4.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; buton 44px/radius 6px, input 46px, kart radius 10px, odak 2px accent + 2px offset.
Doku: grain .05 (örtü .16, soft-light, zemin katmanı) + landing'de tek ışık lekesi (opaklık ≤.07); ikinci süs yok.
Hareket: basma 120ms, geçiş 240ms, vurgu 380ms; prefers-reduced-motion zorunlu.
Yasak: kart gölgesi, blok/inset gölge, glow, blur/cam, 2px+ çerçeve, gradyan geçişi, ikinci aksan, saf siyah/beyaz, uppercase display, 60px üstü başlık, illüstrasyon, parallax/marquee.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Scandinavian Dark (scandinavian-dark) · family: New Wave (39–40)
Token: --bg #171a19 · --surface #1f2422 · --ink #e9e7e0 · --accent #b9c6a9 · --line rgba(233,231,224,.14)
Radius: 6px / 10px · Typography: Fraunces / Inter / IBM Plex Mono
Required: **Mat kural:** kart ve panel `box-shadow: none`; derinlik yalnız `1px solid var(--line)` + ton kademesi ile kurulur. `--shadow` **yalnız** yüzen katmanda (modal, dropdown, hero görseli) kullanılır. · **Hairline:** bütün kenarlıklar ve ayırıcılar `1px solid var(--line)` = `rgba(233,231,224,.14)`. 2px yalnız odak halkasında; 3px ve üstü kalın çerçeve yok. Çift kenarlık (çerçeve + gölge) yasak. · **Yüzey kademesi:** `--bg` → `--surface` → `--surface-2` arası fark **%5–%8 parlaklık**; iki komşu yüzey arasındaki fark %12'yi geçerse "blok" gibi okunur ve hairline gereksizleşir.
Banned: Gölge: yumuşak gölge (kartlarda), blok gölge, inset gölge, `drop-shadow`, neon glow — `--shadow-hard` hiç kullanılmaz. · Cam / `backdrop-filter` / yarı saydam panel (`--blur: 0`); saydamlık yalnız modal backdrop'ında. · 2px ve üstü kalın çerçeve, çift çerçeve, çerçeve + gölge kombinasyonu.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="scandinavian-dark"] {
  --bg: #171a19; --bg-2: #1d211f;
  --surface: #1f2422; --surface-2: #262c29;
  --ink: #e9e7e0; --ink-soft: #a6aaa2; --ink-faint: #7d8279;
  --accent: #b9c6a9; --accent-ink: #141715;
  --line: rgba(233,231,224,.14);
  --danger: #ec4233;
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
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 2px 10px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
