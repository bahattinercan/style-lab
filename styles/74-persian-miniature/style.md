# 74 · Persian Miniature

> **In one sentence:** Gece laciverti bir sayfada çift altın çerçevenin ve madalyon kemerinin içine yerleşen, 58 karakterlik ölçülü metin bloğu.

| | |
|---|---|
| **Feeling** | törensel, sabırlı, değerli, sessizce zengin |
| **Best for** | kültür yayını, müze/sergi kataloğu, el yazması/kitap ürünü, premium davet ve hediye markası |
| **Avoid** | yoğun veri paneli, hızlı e-ticaret listesi, oyun arayüzü — çerçeve ve yavaş ritim taramayı yavaşlatır |
| **Difficulty** | orta-yüksek (çift çerçeveyi disiplinle uygulamak) · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="persian-miniature"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Persian Miniature, el yazması sayfasının ekran karşılığıdır: **gece laciverti zemin**, üstünde **çift altın çerçeve** (dış 1px + 4px aralık + iç 1px), **madalyon kemeri** (yarım daire) ve 58 karakterlik dar metin bloğu. Kurucu kararları üç tanedir. Birincisi **çerçeve = derinlik**: gölge değil, çift çizgi katman kurar. İkincisi **altın yalnız çizgi**: accent hiçbir zaman geniş dolgu olmaz; yalnız çerçeve, madalyon, birincil eylem ve odak halkasında. Üçüncüsü **yavaş ritim**: 76px bölüm boşluğu, 28px kart padding, 1150ms giriş — sayfa açılırken acele etmez.

Kazandığı şey: **değer hissi** — altın çizgi + lacivert zemin, ucuz "lüks" efektleri (gradient, parlaklık) kullanmadan pahalı okunur. Feda ettiği şey: **yoğunluk ve hız**; 3'ten fazla grafik serisi, çerçeve içinde kaybolur.

### What is not
- **Levant Calligraphy (68) değildir:** 68 **açık krem** zemin + navy metin + altın hairline kullanır; 74 **koyu lacivert** zemin + altın çerçeve, ve madalyon kemeri/çift çerçeve imzası vardır.
- **Art Deco (26) değildir:** 26 derin yeşil zemin, altın geometrik merdiven ve simetrik blok kompozisyonla kurulur; 74'te çerçeve **sayfa** metaforu, radius 10/16px (26'da keskin).
- **Victorian (27) değildir:** 27 gravür dokusu ve süslü köşe çiçekleri dolu bir yüzey kurar; 74'te süs **yalnız çizgi**, dolgu yok.
- **Dark Academia (33) değildir:** 33 mum ışığı sıcaklığı ve deri/kâğıt tonlarıdır; 74 soğuk lacivert + metalik altın.
- **"Koyu tema + altın" jeneriği değildir:** kimlik **çift çerçeve + madalyon kemeri**dir; altın dolgu olarak kullanılırsa stil bozulur.

### Where it comes from
Safevi/Timurlu minyatür ve tezhip geleneği: sayfa bir çerçeveyle çevrilir, üstte madalyon (şemse) durur, metin dar bir bloğa yerleşir, altın ve lacivert (lâcverd) kontrastı sayfayı "değerli nesne" yapar. Dijitalde kültür yayıncılığı ve premium hediye markalarıyla geri döndü; nedeni ölçülebilir — çift çizgi çerçeve CSS `border` + `inset` ile kurulabildiği için görsel dosyası gerekmez. Klişeye dönüşmemesi için korunacak detay: **çift çerçevenin 4px aralıkla kalması** ve altının yalnız çizgi olarak kullanılması.

### Recognition test in 3 seconds
1. Her panelin çevresinde iki altın çizgi var; aralarında 4px koyu boşluk.
2. Bir panelin üst kenarında 96×20px yarım daire madalyon kemeri duruyor.
3. Zemin gece laciverti; metin krem-altın tonunda ve geniş satır aralıklı.
4. Köşeler belirgin yuvarlak (10–16px) ama çerçeve keskin.
5. Geçişler yavaş: sayfa açılırken 1 saniyeyi aşan bir yerleşme hissedilir.

## Visual signature
- **Çift altın çerçeve:** dış `1px solid var(--accent)` + `inset: 4px` ile iç 1px çizgi (%55 opaklık); radius `16px - 4px`.
- **Madalyon kemeri:** 96×20px, `border-radius: 48px 48px 0 0`, yalnız üst kenarda; en az bir panelde bulunur.
- **Altın yalnız çizgi:** accent dolgu yok; yalnız çerçeve, madalyon, birincil buton, odak halkası, sayı vurgusu.
- **Altın ızgara dokusu:** 24px aralıklı 1px çizgiler, %8–12 opaklık; yalnız hero ve yan panel.
- **EB Garamond display 400:** 42px, `0.02em`; Lora gövde 17px/1.72.
- **Sayfa numarası:** alt çerçeve bandında mono tabular (`— 04 —`), her ekranda görünür.
- **Hover dili:** yavaş — 440ms'de iç çerçeve %70 opaklığa çıkar, ölçek yalnız `1.008`; gölge yok.
- **Typography:** EB Garamond (display) + Lora (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#cfa53a`; neutral scale `#131a2c` → `#f0e6ce`.
- **Radius:** `10px` / `16px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Her panel çift altın çerçeve taşır: dış 1px + 4px aralık + iç 1px (accent)
2. Sayfa üst ve alt çerçeve bandı zorunlu; içerik bu bandın dışına taşmaz
3. Madalyon: yarım daire kemer, en az 24px yükseklik, 1px altın çizgi, dolgu yok
4. Metin ölçüsü 58 ch; gövde Lora 17px/1.72, başlık EB Garamond 400
5. Sayfa numarası mono tabular ve her ekranın alt bandında görünür
6. Altın yalnız çerçeve, madalyon ve birincil eylemde; dolgu zemin olarak kullanılmaz

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#131a2c` | page background | as a card background |
| `--bg-2` | `#182135` | partition divider floor, table top | button background |
| `--surface` | `#1c2640` | kart, input, modal | full-page background |
| `--surface-2` | `#232f4c` | passive chip, hover background | primary button |
| `--ink` | `#f0e6ce` | title, body, icon | large background |
| `--ink-soft` | `#bfb193` | secondary text, description | — |
| `--ink-faint` | `#8b8368` | decorative label, separator text | interactive text |
| `--accent` | `#cfa53a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a1206` | text above accent | non-accent background |
| `--line` | `rgba(240,230,206,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.96:1** · `ink-soft/bg` **8.19:1** · `ink-faint/bg` **4.58:1 (decorative)** · `accent-ink/accent` **8.03:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (EB Garamond) | 42px (mobile 28px) | 400 | 1.04 | -0.02em |
| H2 | same | 28px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 17px | 400 | 1.68 | 0 |
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
- Radius: `10px` (buton, input, chip), `16px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Altını geniş dolgu (kart zemin, buton bloğu) olarak kullanmak.
- Gradient, parlaklık/glow, cam yüzey, neon.
- 16px üstü radius; sans-serif başlık.
- Figüratif fotoğraf veya minyatür taklidi stok illüstrasyon.
- 200ms altı hızlı geçiş, bounce, sürekli döngü.
- Madalyonu köşeye veya alta yerleştirmek (daima üst kemer).
- Uydurma el yazması/sanatçı adı; eksik içerik `{{folio}}` gibi işaretli yer tutucu olur.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.51:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 7/5 metin-süs bölünmesi, altın ızgara zemin, kemerli panel | `shots/01-page.png` |
| Dashboard | düşük | 2 çerçeveli KPI + 1 madalyonlu panel, 3 serili grafik | `shots/01-page.png` |
| Form | düşük | 44px alanlar, çift çerçeveli form paneli | `shots/01-page.png` |
| Liste / tablo | düşük | 46px satır, mono sayfa no, altın ayırıcı | `shots/01-page.png` |
| Boş durum | orta | boş madalyon + tek cümle + tek CTA | `shots/01-page.png` |
| Onboarding | orta | 3 adım: koleksiyon → sayfa düzeni → ilk kayıt | `shots/01-page.png` |
| Pricing | orta | 3 plan, orta plan madalyonlu | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | dar çift çerçeveli kart, 44px alanlar | `shots/01-page.png` |
| Modal | orta | kemerli üst, 32px padding, çift çerçeve | `shots/01-page.png` |
| Bildirim / toast | orta | altın çerçeveli ince kutu, 6000ms | `shots/01-page.png` |
| Hata | düşük | `--danger` çerçeve + krem metin; madalyon susturulur | `shots/01-page.png` |
| Profil / ayar | orta | 46px satır, çift çerçeveli iki panel | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.96:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.19:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.58:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.03:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.51:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 90.6 | ≥ 60 target | thin text |

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
| Ekran "koyu + altın lüks" jeneriğine düşüyor | çift çerçeve yok, altın dolgu var | çerçeveyi 4px aralıkla geri kur, altını çizgiye indir |
| Çerçeve "çift kenarlık" gibi görünüyor | aralık 4px değil, iç çizgi dış çizgiyle bitişik | `inset: 4px` kullan, radius'u `16 - 4` yap |
| Sayfa ağır ve boğucu | bölüm ritmi 48px'e düşmüş, metin ölçüsü geniş | 76px ritim + 58 ch ölçü |
| Altın okunurluğu düşürüyor | altın metin kullanılmış | metin `--ink`, altın yalnız çizgi/vurgu |
| Hareket "ucuz" duruyor | 200ms altı hızlı geçiş | 440ms taban, 1150ms giriş |
| Koyu modda çerçeve kayboluyor | iç çerçeve opaklığı düşük | .62'ye çıkar |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `levant-calligraphy` | Same level of seriousness; accent sharing is not allowed |
| garnish | `art-deco` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `liquid-glass` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.metmuseum.org/toah/hd/khan1/hd_khan1.htm | The Met · Persian miniature painting — sayfa çerçevesi, madalyon ve altın tezhip oranları |
| https://viewer.cbl.ie/viewer/ | Chester Beatty · Islamic manuscript illumination — çift çerçeve, kenar bandı, altın-lacivert kontrast |
| https://agakhanmuseum.org/collection | Aga Khan Museum · Arts of the book — madalyon geometrisi ve sayfa düzeni |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | WCAG 2.2 · Focus Appearance — koyu lacivert zeminde odak halkası ölçütü |

## AI brief

```text
Stil: Persian Miniature (styles/74-persian-miniature/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="persian-miniature"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (EB Garamond 400) başlıkta, --font-body (Lora) gövdede,
           --font-mono (IBM Plex Mono) etiket ve sayfa numarasında.
Yüzey: gece laciverti --bg / --surface / --surface-2; radius 10px/16px;
        çift altın çerçeve (dış 1px + 4px aralık + iç 1px); gölge yalnız yüzen katmanda 6px blur.
Motif: yarım daire madalyon kemeri (96×20) üst kenarda; altın yalnız çizgi, dolgu yok.
Izgara: metin 7 / süs 5, container 1120px, bölüm ritmi 76px, gövde ölçüsü 58ch.
Hareket: enter 1.15s cubic-bezier(.45,.05,.55,.95) 26px / stagger 0.1; scroll top 74% 1.25s 20px once:true;
         pin açık scrub 0.85 / +135%; hover 440ms scale 1.008. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (altın dolgu, hızlı geçiş, 16px üstü radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Persian Miniature (persian-miniature) · family: Cultural & Regional (66–75)
Token: --bg #131a2c · --surface #1c2640 · --ink #f0e6ce · --accent #cfa53a · --line rgba(240,230,206,.16)
Radius: 10px / 16px · Typography: EB Garamond / Lora / IBM Plex Mono
Required: Her panel çift altın çerçeve taşır: dış 1px + 4px aralık + iç 1px (accent) · Sayfa üst ve alt çerçeve bandı zorunlu; içerik bu bandın dışına taşmaz · Madalyon: yarım daire kemer, en az 24px yükseklik, 1px altın çizgi, dolgu yok
Banned: Altını geniş dolgu (kart zemin, buton bloğu) olarak kullanmak. · Gradient, parlaklık/glow, cam yüzey, neon. · 16px üstü radius; sans-serif başlık.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="persian-miniature"] {
  --bg: #131a2c; --bg-2: #182135;
  --surface: #1c2640; --surface-2: #232f4c;
  --ink: #f0e6ce; --ink-soft: #bfb193; --ink-faint: #8b8368;
  --accent: #cfa53a; --accent-ink: #1a1206;
  --line: rgba(240,230,206,.16);
  --danger: #ed4334;
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
  --radius: 10px; --radius-lg: 16px;
  --shadow: 0 2px 6px rgba(0,0,0,.45); --shadow-hard: none;
  --font-display: "EB Garamond", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
