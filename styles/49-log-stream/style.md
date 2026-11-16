# 49 · Log Stream

> **In one sentence:** Olayların 28px satırlarda zebra akıp önem düzeyinin çip + renk + nokta üçlüsüyle kodlandığı, kullanıcının akışı her an durdurabildiği kayıt yüzeyi.

| | |
|---|---|
| **Feeling** | akışkan, gergin ama kontrollü, teknik, izlenebilir |
| **Best for** | log & olay akışı, incident timeline, audit trail, CI/deploy olay geçmişi |
| **Avoid** | pazarlama landing'i, lüks vitrin, form ağırlıklı akış (sürekli hareket dikkat dağıtır) |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="log-stream"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Log Stream, zamanı **dikey bir ray** olarak kullanan tek katmanlı bir olay yüzeyidir: solda 88px sabit zaman sütunu, yanında 8px önem noktası, sonra kaynak ve mesaj. Kurucu kararları üç tanedir. Birincisi **sabit sütun geometrisi**: zaman, önem ve kaynak sütunları hiç zıplamaz; göz yalnız dikey kayar. İkincisi **zebra, çizgi değil**: satırlar `--surface` / `--surface-2` ile ayrılır; 28px satırda 1px çizgi gürültü olur. Üçüncüsü **kullanıcı egemenliği**: akış otomatik kayar, ama kullanıcı yukarı kaydırdığı an durur ve `akışı izle` düğmesi belirir.

Bedeli: bu ekran sakin değildir ve dekoratif hiçbir şey taşımaz. Kazancı: bir olayın ne zaman, hangi serviste, hangi önemde olduğunu **tek satırda** okutabilmesi ve 500 satırın üstünde bile hizanın bozulmaması.

### What is not
- **Terminal UI (45) değildir:** 45 tek renk (yeşil) mono konsoldur ve önem kodunu metin önekiyle verir (`[ok]`, `!`); 49 çok tonlu (mor accent + dört önem rengi) bir **olay** yüzeyidir, çip ve nokta taşır, zebra kullanır.
- **Telemetry Grid (46) değildir:** 46 ölçüm kartlarıdır (12 tile, eşik); 49 satır akışıdır (28px, sınırsız satır), grafik yok.
- **Trading Desk (47) değildir:** 47 amber tek vurgu ve sayı odaklıdır; 49 mor accent ve metin odaklıdır, 24px yerine 28px satır kullanır.
- **Cybercore (23) değildir:** 23 neon mint ve HUD süsleri taşır; 49'da süs yok, hareket `steps(4)` ile kesik ve tek amaçlı.

### Where it comes from
Unix `tail -f`, syslog ve 12-factor "log bir olay akışıdır" ilkesinden; bugün OpenTelemetry'nin `severity + trace id` standardı ve Kibana Discover tarzı keşif ekranlarıyla kurumsallaştı. Klişeye dönüşmemesi için korunacak detay: **zaman sütununun sabit genişliği** ve önem kodunun metinsiz bırakılmaması.

### Recognition test in 3 seconds
1. Solda sabit genişlikte zaman sütunu (`HH:MM:SS.mmm`) ve satır başında 8px önem noktası var.
2. Satırlar 28px ve zebra; hiçbir satırda yatay ayırıcı çizgi yok.
3. Önem her satırda büyük harf çip olarak yazılı: DEBUG / INFO / WARN / ERROR.
4. Üstte yapışkan filtre barı; sağ altta `akışı izle` / `duraklat` düğmesi.
5. Accent mor; kırmızı-sarı-yeşil yalnız önem anlamında kullanılıyor.

## Visual signature
- **28px satır + zebra:** satır yüksekliği 28px, zemin `--surface` / `--surface-2` dönüşümlü; satır arası çizgi yok.
- **88px zaman rayı:** `HH:MM:SS.mmm` mono, `tabular-nums`, sola dayalı; sütun genişliği hiç değişmez, taşarsa `…` ile kesilir.
- **8px önem noktası:** DEBUG `--ink-faint`, INFO `--ok`, WARN `--warn`, ERROR `--danger`; yuvarlak, satırın optik ortasında.
- **Önem çipi:** 20px yükseklik, 6px radius, büyük harf 11px mono, %12 renkli zemin + 1px aynı renk kenar.
- **Yapışkan filtre barı:** 40px, `position: sticky; top: 0`, gölge yerine alt 1px `--line`; aktif filtre sayısı çipte.
- **Nokta dokusu:** 16px aralıklı `radial-gradient` yalnız başlık ve boş durum zemininde (veri satırlarında asla).
- **Hover dili:** 60ms'de satır zemini `--surface-2`'e koyulaşır, ölçek değişmez (`1.000`); hareket neredeyse yok.
- **Typography:** Space Mono (display) + IBM Plex Mono (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#a78bfa`; neutral scale `#12141a` → `#e7e9f0`.
- **Radius:** `6px` / `12px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Zaman damgası sabit 88px sütunda, `HH:MM:SS.mmm` biçiminde ve mono; saniye altı her zaman görünür
2. Önem düzeyi dört kanaldan: çip metni (DEBUG/INFO/WARN/ERROR) + renk + nokta + solukluk
3. Satır yüksekliği 28px; zebra zemin (surface / surface-2) ile ayrılır, çizgi kullanılmaz
4. Otomatik kaydırma varsayılan açık; kullanıcı yukarı kaydırdığında durur ve `akışı izle` düğmesi çıkar
5. Her olay kaynak (servis + host) ve trace/request id taşır
6. Filtre barı yapışkan; aktif filtre sayısı çipte görünür

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#12141a` | page background | as a card background |
| `--bg-2` | `#171a22` | partition divider floor, table top | button background |
| `--surface` | `#1a1e28` | kart, input, modal | full-page background |
| `--surface-2` | `#21262f` | passive chip, hover background | primary button |
| `--ink` | `#e7e9f0` | title, body, icon | large background |
| `--ink-soft` | `#a2a8bb` | secondary text, description | — |
| `--ink-faint` | `#767d92` | decorative label, separator text | interactive text |
| `--accent` | `#a78bfa` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#14101f` | text above accent | non-accent background |
| `--line` | `rgba(231,233,240,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.18:1** · `ink-soft/bg` **7.76:1** · `ink-faint/bg` **4.49:1 (decorative)** · `accent-ink/accent` **6.87:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Mono) | 30px (mobile 22px) | 600 | 1.12 | -0.02em |
| H2 | same | 19px | 600 | 1.22 | -0.015em |
| H3 | same | 15px | 600 | 1.3 | 0 |
| Body | `--font-body` (IBM Plex Mono) | 13px | 400 | 1.55 | 0 |
| Small body | same | 12px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.16em |
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
- Radius: `6px` (buton, input, chip), `12px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Yalnız renkle önem kodu (metin çipi zorunlu).
- 12px üstü radius, gölge, cam yüzey, gradient.
- Durdurulamayan otomatik kaydırma veya sonsuz animasyon.
- Satır arası yatay çizgi (zebra yerine çizgi kullanmak).
- Mesaj metnini önem rengine boyamak.
- Log gövdesini kısaltıp detayı erişilemez bırakmak.
- Uydurma trace id / zaman damgası; eksik alan `{{trace_id}}` gibi işaretli yer tutucu olur.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.76:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | nokta dokulu başlık + canlı akış önizlemesi (8 satır) | `shots/01-page.png` |
| Dashboard | yüksek | yapışkan filtre + histogram + 20 satır akış | `shots/01-page.png` |
| Form | düşük | filtre formu: servis, önem, zaman aralığı; 32px alanlar | `shots/01-page.png` |
| Liste / tablo | yüksek | 28px satır, 88px zaman rayı, zebra | `shots/01-page.png` |
| Boş durum | orta | "bu filtreye uyan olay yok" + filtreyi temizle | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: kaynak bağla → önem seç → ilk olayı gör | `shots/01-page.png` |
| Pricing | orta | olay hacmi tablosu (satır 28px) | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | dar SSO kartı, mono alanlar | `shots/01-page.png` |
| Modal | orta | olay detayı: JSON gövde, trace id, kopyala | `shots/01-page.png` |
| Bildirim / toast | orta | `+12 yeni olay`, sağ alt, tıkla → akışa dön | `shots/01-page.png` |
| Hata | düşük | "akış kesildi" bandı + yeniden bağlan; son 5 olay soluk kalır | `shots/01-page.png` |
| Profil / ayar | orta | önem eşiği, otomatik kaydırma, saklama süresi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.18:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.76:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.49:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.87:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.76:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 92.9 | ≥ 60 target | thin text |

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
| Satırlar zıplıyor, göz kayıyor | zaman sütunu içeriğe göre genişliyor | 88px sabit genişlik + `tabular-nums` |
| Liste gürültülü görünüyor | satır arası çizgi + çip + renk birlikte | çizgiyi kaldır, zebra kullan |
| Önem okunmuyor | yalnız renk kodu | çip metni (DEBUG/INFO/WARN/ERROR) zorunlu |
| Kullanıcı akışı durduramıyor | otomatik kaydırma kilidi | yukarı kaydırınca durdur + `akışı izle` düğmesi |
| Yeni satır gecikmiş görünüyor | 30ms üzeri stagger | stagger'ı 12ms'de tut, en fazla 12 satır animasyonu |
| Mobilde metin taşıyor | kaynak sütunu korunmuş | 768px altında kaynak sütununu gizle, çipi alta al |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `telemetry-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `cybercore` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `frutiger-aero` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://opentelemetry.io/docs/concepts/signals/logs/ | OpenTelemetry · Logs — olay alanları: timestamp, severity, trace id |
| https://12factor.net/logs | The Twelve-Factor App · Logs — log'u olay akışı olarak ele alma, satır biçimi |
| https://www.elastic.co/guide/en/kibana/current/discover.html | Kibana · Discover — akan kayıt görünümü, kolon düzeni, yoğunluk |
| https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | WCAG 2.2 · Pause, Stop, Hide — otomatik akan içeriği durdurma zorunluluğu |

## AI brief

```text
Stil: Log Stream (styles/49-log-stream/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="log-stream"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Space Mono 700) başlıkta, --font-body (IBM Plex Mono) mesaj gövdesinde,
           --font-mono (Space Mono) zaman damgası ve etiketlerde; hepsi tabular-nums.
Yüzey: 3 seviye (--bg / --surface / --surface-2); radius 6px/12px; gölge YOK; satır ayrımı zebra.
Bileşen: "Bileşen reçeteleri" birebir; olay satırı 28px, zaman sütunu 88px, önem çipi 20px.
Hareket: enter 0.16s steps(4,end) 0px / stagger 0.012; scroll top 94% 0.18s 4px once:false;
         hover 60ms scale 1.000; pin yok; otomatik kaydırma durdurulabilir olmalı.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (renk-only önem, satır çizgisi, durdurulamayan akış).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Log Stream (log-stream) · family: Data & Indicator (46–55)
Token: --bg #12141a · --surface #1a1e28 · --ink #e7e9f0 · --accent #a78bfa · --line rgba(231,233,240,.14)
Radius: 6px / 12px · Typography: Space Mono / IBM Plex Mono / Space Mono
Required: Zaman damgası sabit 88px sütunda, `HH:MM:SS.mmm` biçiminde ve mono; saniye altı her zaman görünür · Önem düzeyi dört kanaldan: çip metni (DEBUG/INFO/WARN/ERROR) + renk + nokta + solukluk · Satır yüksekliği 28px; zebra zemin (surface / surface-2) ile ayrılır, çizgi kullanılmaz
Banned: Yalnız renkle önem kodu (metin çipi zorunlu). · 12px üstü radius, gölge, cam yüzey, gradient. · Durdurulamayan otomatik kaydırma veya sonsuz animasyon.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="log-stream"] {
  --bg: #12141a; --bg-2: #171a22;
  --surface: #1a1e28; --surface-2: #21262f;
  --ink: #e7e9f0; --ink-soft: #a2a8bb; --ink-faint: #767d92;
  --accent: #a78bfa; --accent-ink: #14101f;
  --line: rgba(231,233,240,.14);
  --danger: #e83d2e;
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
  --radius: 6px; --radius-lg: 12px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Space Mono", ui-monospace, monospace;
  --font-body: "IBM Plex Mono", ui-monospace, monospace;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
