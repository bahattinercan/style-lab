# 46 · Telemetry Grid

> **In one sentence:** Her metriğin kendi hairline hücresinde, 24px ölçüm ızgarasına oturduğu ve durumun yalnız eşik değeriyle konuştuğu gözlemlenebilirlik yüzeyi.

| | |
|---|---|
| **Feeling** | ölçülü, uyanık, izleyen, soğukkanlı |
| **Best for** | gözlemlenebilirlik paneli, on-call/SRE ekranı, IoT filo izleme, durum sayfası |
| **Avoid** | lüks marka vitrini, editoryal içerik, wellness/çocuk ürünü — sürekli sayı "gürültü" okunur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="telemetry-grid"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Telemetry Grid, bir sistemin **durumunu bir bakışta kanıtlayan** arayüzdür: her metrik kendi hücresinde durur, hücreler 24px ızgaraya oturur, sayılar tabular rakamla hizalanır, renk yalnızca eşik aşımını bildirir. Süsü feda eder; karşılığında üç şey kazanır — taranabilirlik (12 hücre 2 saniyede okunur), karşılaştırılabilirlik (aynı birim ölçü, aynı punto), ve delil (her değerin yanında zaman damgası ve eşik).

Kurucu kararları üç tanedir. Birincisi **tek hücre birimi**: her tile 12px padding, 1 birim yükseklik ve en fazla üç metin satırı taşır; değişken boyut yoktur, yalnız ana grafik 8 kolon alır. İkincisi **sayı önce**: değer 28–30px mono tabular, etiket 11px büyük harf mono; başlık asla değerden büyük değildir. Üçüncüsü **sessiz renk**: accent yalnız eşik aşımında (WARN/CRIT) ve birincil eylemde yanar, geri kalan her şey nötr skaladır.

Bedeli kişiliksizleşmedir; stili jenerik olmaktan kurtaran şey **ölçüm disiplininin görünürlüğü**: hizalı rakam sütunları, ızgaraya oturan grafikler, her panelde zaman aralığı ve son güncelleme damgası.

### What is not
- **Bento Grid (05) değildir:** Bento kutu **boyutuyla** hikâye anlatır (2×1, 1×2 karışımı); Telemetry Grid'de her tile 1 birimdir, ekran başına en fazla 12 tile ve tek istisna 8 kolonluk ana grafiktir.
- **Terminal UI (45) değildir:** 45 tek mono aile + karakter ızgarası + 32px satır kullanır; burada gövde Inter, mono yalnız **sayı ve etiket** içindir, tile yüksekliği 96px.
- **Executive KPI (48) değildir:** 48 vitrin dilidir (4 KPI, serif display, 64px rakam, geniş boşluk); 46 operasyon dilidir (12 tile, sans display, 30px rakam, dar boşluk, sürekli yenilenen veri).
- **Utility (44) değildir:** 44'te accent **eylem** rengidir ve dekoratif kullanım yasaktır; burada accent **eşik** rengidir, ok/warn/danger üçlüsüyle birlikte okunur.
- **Neo-Brutalism (13) değildir:** 13'ün kalın konturu ve sert gölgesi yok; burada 1px hairline ve gölgesiz yüzey var.

### Where it comes from
NASA/Houston telemetri konsolları, uçuş testi veri duvarları ve 2010'lar sonrası Grafana/Prometheus pratiğinin kesişimi: "önce ölç, sonra süsle". Bugün tekrar önemli çünkü ajanların ürettiği panellerde en sık hata keyfi tile boyutu ve süsleme gradyanıdır; Telemetry Grid bu iki kararı önceden kapatır. Klişeye dönüşmemesi için korunacak detay: **ızgaranın 24px'te kalması** ve sayının her zaman etiketinden büyük olması.

### Recognition test in 3 seconds
1. Bütün tile'lar aynı yükseklikte ve sol kenarında 3px accent eşik şeridi var.
2. Sayılar mono ve ondalık hizası bozulmuyor (tabular-nums); birim etiketi (`ms`, `%`, `req/s`) sayının yanında.
3. Başlık hiçbir yerde değerden büyük değil; hero başlığı en fazla 34px.
4. Zemin 24px ızgara deseni taşıyor, grafik ızgarası da aynı ritimde.
5. Ekranda en fazla üç doygun renk var: accent + warn + danger; gerisi nötr skala.

## Visual signature
- **24px ölçüm ızgarası:** hero, yan panel ve grafik zeminine `background-size: 24px 24px` hairline ızgara; grafik genişliği daima 24'ün katı (312/624/936px).
- **Hairline tile:** `1px solid var(--line)`, `--radius-lg` 10px, gölge yok; sol kenarda `linear-gradient(90deg, var(--accent) 0 3px, transparent 3px)` eşik şeridi.
- **Tabular rakam:** tüm sayılar `font-variant-numeric: tabular-nums` + `--font-mono`; değer 28–30px, etiket 11px.
- **Durum LED'i:** 7×7px, `border-radius: 1px` (yuvarlak değil), ok/warn/danger üç rengi; yanında daima metin etiketi.
- **Zaman şeridi:** nav altında 32px ikinci satır — aralık seçici (`5m 15m 1h 24h`) + canlı/pause; aktif aralık accent zemin + `--accent-ink`.
- **Sparkline eşiği:** çizgi 2px accent, eşik çizgisi 1px kesikli `--warn`; alan dolgusu `color-mix(in srgb, var(--accent) 8%, transparent)`.
- **Hover dili:** yalnız 110ms süreyle `transform: translateY(-1px)` ve kenarlık `--ink-soft` %40 karışımı; parlaklık ve gölge artışı yok.
- **Typography:** Chakra Petch (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#0b6e75`; neutral scale `#eef1f4` → `#10171c`.
- **Radius:** `4px` / `10px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Her tile aynı birim ölçüyü kullanır: 12px padding, 1 birim yükseklik, tile başına en fazla 3 metin satırı
2. Tüm sayısal değerler tabular-nums + mono aile; birim etiketi (ms, %, req/s) her zaman görünür
3. Durum yalnız renkle bildirilmez: LED + etiket (OK/WARN/CRIT) + eşik değeri birlikte yazılır
4. Izgara 24px; grafik ızgarası da bu ritmi izler (grafik genişliği 24'ün katı)
5. Her panelde zaman aralığı ve son güncelleme damgası görünür
6. Ekran başına en fazla 12 tile; fazlası ikinci sekmeye taşınır

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#eef1f4` | page background | as a card background |
| `--bg-2` | `#e5eaee` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f6f8fa` | passive chip, hover background | primary button |
| `--ink` | `#10171c` | title, body, icon | large background |
| `--ink-soft` | `#46585f` | secondary text, description | — |
| `--ink-faint` | `#7b8a91` | decorative label, separator text | interactive text |
| `--accent` | `#0b6e75` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(16,23,28,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.95:1** · `ink-soft/bg` **6.57:1** · `ink-faint/bg` **3.15:1 (decorative)** · `accent-ink/accent` **6:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 34px (mobile 24px) | 600 | 1.12 | -0.02em |
| H2 | same | 22px | 600 | 1.22 | -0.015em |
| H3 | same | 17px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Dense display: 14px body, 13px table, 10.5px mono label. The line height cannot be lower than 1.55.
- Measure: 72ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 columns of content + 4 columns of panels; tables full width. In-card padding 16px, line 40px.
- Section vertical space 44px desktop, 28px mobile; card padding 16px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are smooth; separation with 1px edge and background tone. Reference line in graphs --line.
- Radius: `4px` (buton, input, chip), `10px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Animasyonlu sayaç veya rakam yuvarlama.
- Dekoratif gradyan, büyük fotoğraf, illüstrasyon, emoji ikon.
- 10px üstü radius, yumuşak yayılan gölge, `backdrop-filter` blur.
- Ölçüsüz (proportional) rakam, hizasız sayı sütunu, birimi olmayan değer.
- Renk kodunu legend olmadan bırakmak; OK'u accent rengiyle göstermek.
- Sürekli hareket eden arka plan, nabız atan tile, parallax.
- Uydurma metrik adı/sayı; eksik veri `{{metric}}` gibi işaretli yer tutucu olur.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 8 kolon canlı grafik + 4 kolon son olaylar; ızgara zemin | `shots/01-page.png` |
| Dashboard | yüksek | 12 tile (3 satır × 4), üstte zaman aralığı şeridi | `shots/01-page.png` |
| Form | düşük | aralık/eşik formu, iki kolon, mono yardım metni | `shots/01-page.png` |
| Liste / tablo | yüksek | servis tablosu 32px satır, durum LED'i + eşik sütunu | `shots/01-page.png` |
| Boş durum | orta | boş ızgara + "veri kaynağı bağla" tek CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: kaynak → panel seç → eşik; her adımda örnek tile | `shots/01-page.png` |
| Pricing | orta | plan tablosu, metrik satırı olarak fiyat | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | SSO odaklı dar kart, 34px alanlar | `shots/01-page.png` |
| Modal | orta | tek grafik + eşik düzenleme, dipnot 11px mono | `shots/01-page.png` |
| Bildirim / toast | orta | sağ üst, 3px durum şeridi, 5000ms | `shots/01-page.png` |
| Hata | düşük | "veri yok" ile "hata" ayrı: hata tile'ı kesikli kenar + CRIT LED | `shots/01-page.png` |
| Profil / ayar | orta | bildirim eşikleri, iki kolon, mono özet | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.95:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.57:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.15:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6:1 | ≥ 4.5 | button text |
| focus ring/ground | 6:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.2 | ≥ 60 target | thin text |

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
| Panel "süslenmiş" görünüyor, sayılar kayboluyor | accent dekoratif dolgu olarak kullanılmış | accent'i yalnız eşik + birincil eyleme indir |
| Rakamlar sütun hizasında kayıyor | `tabular-nums` yok, mono kullanılmamış | tüm sayılara `font-variant-numeric: tabular-nums` + mono aile |
| 12 tile'lık panelde tarama duruyor | tile yükseklikleri farklı, göz hiza arıyor | tüm tile'ları 96px'e sabitle, tek istisna ana grafik |
| Renk körlüğünde durum okunmuyor | yalnız renk kodu | LED + etiket + eşik metni üçlüsünü zorunlu kıl |
| Koyu modda ızgara kayboluyor | `--line` alfası düşük | koyuda .16'ya çıkar, hücre 24px kalsın |
| Grafik genişliği ızgaraya oturmuyor | genişlik keyfi (ör. 300px) | genişliği 24'ün katına yuvarla (312/624/936) |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/ | Grafana · Dashboard best practices — panel yoğunluğu, zaman aralığı seçici, eşik işaretleme |
| https://prometheus.io/docs/practices/instrumentation/ | Prometheus · Instrumentation — metrik adlandırma + birim standardı |
| https://sre.google/sre-book/monitoring-distributed-systems/ | Google SRE Book · Monitoring — hangi metriğin uyarı ürettiği (semptom vs neden) |
| https://www.nngroup.com/articles/dashboard-design/ | Nielsen Norman · Dashboards — tile sayısı, tarama sırası, göz hareketi |
| https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html | WCAG 2.2 · Use of Color — durumun renk dışında da kodlanması |

## AI brief

```text
Stil: Telemetry Grid (styles/46-telemetry-grid/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="telemetry-grid"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Chakra Petch) başlıkta (tracking --tracking), --font-body (Inter) gövdede,
           --font-mono (IBM Plex Mono) sayı ve etiketlerde — sayılar daima tabular-nums.
Yüzey: 3 seviye (--bg / --surface / --surface + --shadow); radius --radius 4px, --radius-lg 10px; gölge yalnız yüzen katmanda.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; durum stilleri dahil.
Izgara: 24px ölçüm ızgarası; grafik genişliği 24'ün katı; tile 96px, 12px padding, sol 3px eşik şeridi.
Hareket: enter 0.28s cubic-bezier(.16,.84,.44,1) 6px / stagger 0.02; scroll top 88% 0.32s 10px once:false;
         hover 110ms scale 1.010; pin yok. prefers-reduced-motion desteği zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sayaç animasyonu, dekoratif gradyan, proportional rakam).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Telemetry Grid (telemetry-grid) · family: Data & Indicator (46–55)
Token: --bg #eef1f4 · --surface #ffffff · --ink #10171c · --accent #0b6e75 · --line rgba(16,23,28,.14)
Radius: 4px / 10px · Typography: Chakra Petch / Inter / IBM Plex Mono
Required: Her tile aynı birim ölçüyü kullanır: 12px padding, 1 birim yükseklik, tile başına en fazla 3 metin satırı · Tüm sayısal değerler tabular-nums + mono aile; birim etiketi (ms, %, req/s) her zaman görünür · Durum yalnız renkle bildirilmez: LED + etiket (OK/WARN/CRIT) + eşik değeri birlikte yazılır
Banned: Animasyonlu sayaç veya rakam yuvarlama. · Dekoratif gradyan, büyük fotoğraf, illüstrasyon, emoji ikon. · 10px üstü radius, yumuşak yayılan gölge, `backdrop-filter` blur.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="telemetry-grid"] {
  --bg: #eef1f4; --bg-2: #e5eaee;
  --surface: #ffffff; --surface-2: #f6f8fa;
  --ink: #10171c; --ink-soft: #46585f; --ink-faint: #7b8a91;
  --accent: #0b6e75; --accent-ink: #ffffff;
  --line: rgba(16,23,28,.14);
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
  --radius: 4px; --radius-lg: 10px;
  --shadow: 0 1px 2px rgba(16,23,28,.07); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
