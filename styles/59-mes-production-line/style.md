# 59 · Üretim Hattı · MES

> **Bir cümlede:** Üretim hattının nabzını tek ekranda tutan operasyon arayüzü: açık gri zemin, tek katman gölge, durum renk kodu ve tabular sayaçlarla kurulmuş yoğun MES panosu.

| | |
|---|---|
| **Hissiyat** | çalışkan, ölçülü, sürekli, güvenilir |
| **En iyi** | MES/üretim izleme, vardiya panosu, OEE ve hat verimliliği, depo-iş emri ekranları |
| **Kaçın** | lüks vitrin, kampanya sayfası, duygusal onboarding — yoğunluk burada "kalabalık" okunur |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 6.57:1; en düşük eşik accent üstü 5.37:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="mes-production-line"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
MES panosu, arayüzü **vardiya ekranı** gibi kurar: açık nötr gri zemin, beyaz kart, tek katman `0 1px 2px` gölge, her KPI'da 3px durum şeridi, tüm sayılar tabular mono. Süsü tamamen keser; karşılığında tarama hızı, hat karşılaştırması ve "şu an ne oluyor" cevabı kazanır.

Kurucu kararları üç tanedir. Birincisi **durum renk kodu sözleşmedir**: `--accent` çalışıyor, `--danger` durdu, `--warn` beklemede — üçü de ikon + metinle tekrarlanır. İkincisi **sayı hizası** önceliktir: tüm sayılar mono, `tabular-nums`, birim ayrı sütunda; sütunlar sağa dayalı. Üçüncüsü **gölge tek katmandır**: kart ayrımı 1px hairline, hover'da gölge büyümez.

Bedeli: karakter zayıftır — bu stil vitrin işi yapmaz. MES'i jenerik olmaktan kurtaran detay, **KPI kartlarının solundaki 3px durum şeridi** ve vardiya karşılaştırma etiketidir.

### Ne değildir
- **Utility (44) değildir:** 44 tek vurgu mavi ve 8/12px radius ile "ürün arayüzü" dilidir; MES'te üç durum rengi, 4px radius ve 32px satır yüksekliğiyle **operasyon** dili vardır.
- **Terminal UI (45) değildir:** 45 koyu zemin ve tamamen mono tipografidir; MES açık zemin, Inter gövde ve yalnız sayaçlarda mono kullanır.
- **Bento Grid (05) değildir:** 05 değişken boyutlu kutularla vitrin kurar; MES'te kart genişliği 12 kolonun katıdır, keyfi boyut yok.
- **Blueprint Çizimi (56) değildir:** 56 koyu cyanotype ve görünür ızgara; MES açık zemin ve ızgarasız (gölge tek katman).

### Nereden gelir
ISA-95 katman modeli ve OEE/vardiya panolarından; fabrika terminallerinin (dokunmatik HMI, 24" kontrol odası ekranı) okunabilirlik pratiğinden. Bugün tekrar önemli çünkü uzaktan izleme ekranları çoğaldı ve en sık hata "dekoratif dashboard": okunmayan grafik, hizasız sayı. Klişeye dönmemesi için korunacak detay: **32px satır yüksekliği** ve durum şeridinin 3px'te kalması.

### 3 saniyede tanıma testi
1. Her KPI kartının solunda 3px renkli şerit var (yeşil/kırmızı/amber).
2. Tüm sayılar mono ve sağa dayalı; birimler ayrı sütunda.
3. Kart ayrımı 1px hairline + çok hafif gölge; gölge hover'da büyümüyor.
4. Tablo satır yüksekliği 32px, ekranda 6+ satır görünüyor.
5. Radius 4px (kontrol) / 8px (kart); hiçbir buton hap biçiminde değil.

## Görsel imza
- **Durum şeridi:** KPI kartının solunda 3px `--accent` / `--danger` / `--warn`; şerit uzunluğu kart yüksekliği kadar.
- **Tabular sayaç:** `.num` 28px mono 700, `font-variant-numeric: tabular-nums`, `.06em` birim etiketiyle.
- **Tek katman gölge:** `0 1px 2px rgba(23,32,28,.10)`; yüzen katmanda `0 8px 24px` — iki seviye, üçüncü yok.
- **Vardiya etiketi:** her KPI'da 11px mono üst etiket + `▲/▼ %x` karşılaştırma satırı.
- **Yoğun tablo:** 32px satır, 1px `--line` ayırıcı, hover'da `--surface-2`.
- **Durum noktası:** nav sağında 6px daire + mono etiket (ÇALIŞIYOR / DURDU).
- **Hareket imzası:** 440ms `cubic-bezier(.12,.94,.24,1)`, 20px, stagger 0.035 — sayaçlar "akar", sıçramaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f2f4f3` | sayfa zemini | kart zemini |
| `--bg-2` | `#e8ebe9` | filtre şeridi, ikincil bant | buton zemini |
| `--surface` | `#ffffff` | kart / panel / tablo | sayfa zemini |
| `--surface-2` | `#f7f9f8` | tablo başlığı, hover satır | birincil CTA |
| `--ink` | `#17201c` | başlık, gövde, sayı | devre dışı metin |
| `--ink-soft` | `#4c5a53` | açıklama, sütun başlığı | başlık |
| `--ink-faint` | `#7d8a83` | eksen etiketi, dekoratif ayırıcı | etkileşimli metin |
| `--accent` | `#0d7a4f` | çalışıyor durumu, birincil eylem | beklemede durumu |
| `--accent-ink` | `#ffffff` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(23,32,28,.14)` | kart ve satır kenarlığı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **15.09:1** · `ink-soft / bg` = **6.57:1** · `accent-ink / accent` = **5.37:1** · `ink-faint / bg` = **3.26:1** (yalnız eksen etiketi).
- Durum renk kodu: `--accent` `#0d7a4f` (çalışıyor) · `--danger` `#b3241a` (durdu) · `--warn` `#8a5c00` (beklemede). Üçü de metin kontrastı ≥ 4.5:1 ve her zaman ikon + etiketle.
- Yasak kombinasyon: accent üstünde `--ink-soft`; beyaz kart üstünde `--ink-faint` etkileşimli metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | JetBrains Mono (`--font-display`) | 34px (mobil 24px) | 700 | 1.16 | `-.01em` |
| H2 | JetBrains Mono | 24px | 700 | 1.30 | `0` |
| H3 | JetBrains Mono | 18px | 700 | 1.35 | `0` |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.55 | `0` |
| Küçük gövde | Inter | 13px | 400 | 1.5 | `0` |
| Etiket / sayaç | JetBrains Mono (`--font-mono`) | 11–13px | 600 | 1.3 | `.06em` |

- Ölçek oranı: **1.4** — kullanılan basamaklar 11 · 12 · 13 · 15 · 18 · 24 · 34.
- Ölçü önerisi: `h1 { font-size: clamp(24px, 3vw, 34px) }` — operasyonel başlık dev olmaz.
- Gövde satır uzunluğu en fazla **70ch**; tablo hücreleri 28ch'i geçmez.
- Ağırlık kuralı: display 700, gövde 400/600, etiket 600. 300 ve italik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (kart genişlikleri yalnız 3 / 4 / 6 / 12) |
| Gutter | 16px |
| Container genişliği | 1320px (içerik 1288px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1320; 768–1320 arası 6 kolon, 768 altı tek kolon |

- Asimetri kuralı: operasyonel ekranda **asimetri yok** — 12 kolon kesin hizalı (tablo karşılaştırması için). Vitrin ekranında tek istisna 8/4.
- Bölüm ritmi: art arda en fazla **4** aynı yükseklikte KPI satırı; beşincisi tam genişlik hat şeridi olur.
- Boşluklar 4'ün katı; tablo satır yüksekliği 32px sabit (6 satır görünür alan hedefi).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa + filtre şeridi |
| Kart | `--surface` | `0 1px 2px rgba(23,32,28,.10)` | KPI, panel, tablo kabı |
| Yüzen katman | `--surface` + `--line` | `0 8px 24px rgba(23,32,28,.18)` | modal, menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; yüzen katmanda ek olarak 1px `--line` korunur.
- Derinlik nereden gelir: **tek katman gölge + hairline**. Hover'da gölge büyümez (operasyonel ekranda titreme yaratır), yalnız zemin `--surface-2` olur.
- Radius: `--radius: 4px` (buton, input, chip), `--radius-lg: 8px` (kart, panel, modal). Üst sınır 8px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 36px | `0 12px` | 4px | 13px Inter 600 | accent dolgu, accent-ink metin, gölge yok | hover: accent %88 + ink · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .45 · loading: 12px spinner (800ms tek tur) |
| Buton (ikincil) | 36px | `0 12px` | 4px | 13px Inter 500 | `--surface` + 1px `--line` | hover: `--surface-2` |
| Input | 36px | `0 10px` | 4px | 14px Inter | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %40 outline · error: `--danger` çerçeve + 12px etiket + ikon · disabled: opacity .5 |
| Kart | içerik | 16px | 8px | H3 + gövde | `--surface` + 1px `--line` + tek gölge | KPI'da sol 3px durum şeridi; hover: yalnız zemin |
| Chip / badge | 22px | `0 8px` | 4px | 11px mono 600 `.06em` | `--surface-2` + 1px `--line` | accent: accent %14 zemin + accent metin |
| Nav | 48px | `0 16px` | 0 | 13px Inter 500 | `--surface` + alt 1px `--line` | aktif: accent metin + 2px alt çizgi; sağda hat durumu noktası |
| Tablo satırı | 32px | `4px 10px` | — | 13px mono, tabular-nums | satır arası 1px `--line` | hover: `--surface-2`; seçili: sol 3px accent |
| Modal / sheet | içerik | 20px | 8px | 24px mono 700 + iş emri no | `--surface` + `0 8px 24px ink %18` | açılış: 20px akış |
| Toast | 36px | `8px 12px` | 4px | 13px Inter 600 | `--surface` + sol 3px durum şeridi | hata: şerit `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink`, `--warn`, `--danger` | en fazla 4 seri; hedef çizgisi 1px kesikli |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; input'ta ek olarak accent %40 halka (açık zeminde daha okunur).
- Dokunma hedefi: en az 44×44px; 36px buton mobilde `min-height: 44px`. Tablo satırı 32px ama satır içi eylem 44px hedefle.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 2px köşe, 20px ızgara; durum ikonları (çalışıyor/durdu/bekliyor) |
| Fotoğraf | yok — hat fotoğrafı yerine durum şeridi ve zaman çizelgesi |
| İllüstrasyon | yok; grafik + tablo yeterli |
| Doku | grain %2 (vitrin ekranında), operasyonel ekranda kapalı |
| Logo alanı | mono wordmark + durum noktası; üst bar sol, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | başlık 34px mono, sağda canlı hat şeridi (3 satır KPI) | `shots/01-landing.png` |
| Dashboard | **yüksek** | 4 KPI + hat tablosu + vardiya grafiği; süs sıfır | `shots/02-dashboard.png` |
| Form | düşük | 36px input, etiket üstte 11px mono, tek kolon | — |
| Liste / tablo | **yüksek** | 32px satır, 6+ satır görünür, toplu işlem çubuğu | — |
| Boş durum | orta | "Vardiya kaydı yok" + tek eylem; durum şeridi nötr | — |
| Onboarding | orta | 3 adım; her adımda tek karar, hat seçimi | — |
| Pricing | orta | plan tablosu (satır bazlı), öne çıkan satır sol 3px accent | — |
| Giriş / ödeme | çok düşük | konvansiyon; yalnız odak halkası ve hairline | — |
| Modal | orta | iş emri no başlıkta mono; tek gölge 8/24 | — |
| Bildirim / toast | orta | alt-sağ, sol 3px durum şeridi + ikon | — |
| Hata | düşük | `--danger` şerit + ikon + etiket; zemin değişmez | — |
| Profil / ayar | orta | form + tehlike bölgesi kırmızı çerçeve | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **440ms** | `cubic-bezier(.12,.94,.24,1)` | `opacity` + `translateY(20px)`; stagger **0.035s** |
| Scroll reveal | **480ms** | aynı eğri | trigger `top 76%`, `translateY(30px)`, `once: true` |
| Pin / scrub | **0.95** | `transform` | **açık** — hat şeridi `+170%` mesafede pin + scrub (ekran başına 1) |
| Basma | **120ms** | `cubic-bezier(.12,.94,.24,1)` | `translateY(1px)` |
| Geçiş / sayfa | 260ms | aynı eğri | opacity + 8px |
| Hover | **180ms** | aynı eğri | görsel ölçek **1.016** |
| Ödül / vurgu | 480ms | aynı eğri | sayaç değeri 0→x sayar (tek kez, 480ms) |

- İmza ölçüleri: `enter = 0.44s / cubic-bezier(.12,.94,.24,1) / 20px / 0.035` · `scroll = top 76% / 0.48s / 30px / once` · `pin = true / scrub 0.95 / +170%` · `hover = 180ms / 1.016`.
- Aynı banttaki komşulardan fark: 56'dan (0.36s / 6px / pin yok) dört, 57'den (0.26s / 4px / scrub 0.62) dört, 58'den (0.14s / linear / 16px) dört, 60'tan (0.58s / 12px / scrub 1.45) dört parametrede ayrışır. Mevcut 59 stil içinde en yakını 51-atlas-console (8 parametre farkı).
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin devre dışı, sayaç animasyonu son değere atlar.
- Bu stile yasak hareket: sürekli akan konveyör (ekran başına 1'den fazla), blur geçişi, yay/overshoot (operasyonel ekranda sıçrama güven vermez).

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f2f4f3` | `#101614` |
| `--surface` | `#ffffff` | `#18201c` |
| `--ink` | `#17201c` | `#e3ece6` |
| `--accent` | `#0d7a4f` | `#35c98b` |
| `--ink-soft` | `#4c5a53` | `#a5b4ab` |
| `--line` | `rgba(23,32,28,.14)` | `rgba(227,236,230,.16)` |

- Koyu modda değişen başka ne var: gölge yerine kenarlık çalışır (`0 1px 2px` görünmez → hairline %16), accent bir ton açılır, grafik alan dolgusu %12 → %18.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Durum renk kodu sabit: çalışıyor `--accent`, durdu `--danger`, beklemede `--warn`; her zaman ikon + metinle.
- Tüm sayılar `tabular-nums` ve mono; birim ayrı sütunda, sağa dayalı.
- Satır yüksekliği 32px; görünür alanda en az 6 satır.
- Gölge tek katman (`0 1px 2px`); kart ayrımı 1px hairline.
- Radius 4px kontrol / 8px kart; hap radius yok.
- Her KPI kartı vardiya karşılaştırma etiketi (`▲/▼ %x`) taşır.

## Yasaklar
- Süs amaçlı gradyan, glow, cam.
- Orantılı (tabular olmayan) sayı, hizasız sütun.
- 12px üstü radius, hap buton.
- Ekran başına 1'den fazla sürekli hareket (konveyör animasyonu, akan şerit).
- Renk tek başına durum bildirimi.
- Serif display veya dekoratif illüstrasyon.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **6.57:1**; en dar çift `accent-ink / accent` = **5.37:1** (eşik 4.5).
- `--ink-faint` = **3.26:1** yalnız grafik ekseni ve dekoratif ayırıcıda; etkileşimli metinde kullanılmaz.
- Hareket/parlama hassasiyeti: düşük — flash yok, sürekli animasyon sınırlı; `prefers-reduced-motion` pin ve sayaç animasyonunu kapatır.
- Şeffaf yüzey yok; opak fallback gerekmez. `tabular-nums` desteklenmezse fallback mono aile (JetBrains Mono) zaten sabit genişliklidir.
- Odak görünürlüğü: beyaz kart üstünde 2px accent outline yeterli; `--bg` üstünde ek %40 halka eklenir.

## Örnek görseller

Aynı içerik, 34 stilde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-landing.png` | Landing — Hero hiyerarşisi, imza motif, tek CTA; süsün en yüksek olduğu kare. |
| `shots/02-dashboard.png` | Dashboard — Süsün geri çekildiği operasyonel ekran; KPI ve tablo okunurluğu. |
| `shots/04-components.png` | Bileşenler · temel — Renk, tipografi, yüzey, boşluk ritmi — temel levha. |
| `shots/17-dark-landing.png` | Koyu mod · landing — Koyu mod · landing |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| Ekran "dashboard şablonu" gibi | tüm kartlar aynı beyaz, durum yok | her KPI'ya 3px durum şeridi + karşılaştırma etiketi |
| Sayılar kayıyor | orantılı font veya mono olmayan rakam | `font-variant-numeric: tabular-nums` + mono |
| Gölge titriyor | hover'da gölge büyütülmüş | hover'da yalnız zemin `--surface-2` |
| Renk körlüğünde durum kayboluyor | yalnız şerit rengi | ikon + etiket ekle (ÇALIŞIYOR / DURDU) |
| Tablo 40px satıra çıkmış | padding şişmiş | 32px sabit, `padding: 4px 10px` |
| Pin kaydırırken tablo zıplıyor | iki ayrı rAF döngüsü | tek ScrollTrigger batch; ekran başına 1 pin |

## Komşu stiller

- **Uyumlu:** `utility` — aynı sade iskelet; Utility vitrin, MES operasyon katmanı.
- **Uyumlu:** `terminal-ui` — MES'in alt panelinde terminal görünümü (log/olay akışı).
- **Uyumlu:** `bento-grid` — KPI ızgarası için bento ritmi, 12 kolonla sınırlı.
- **Yasak:** `maximalism` — yoğunluk süsle çakışır, tarama hızı düşer.
- **Yasak:** `surrealism` — metaforik görsel dil operasyonel okunurluğu bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Manufacturing_execution_system | ekran kapsamı ve KPI seti |
| https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard | ISA-95 katman/terminoloji modeli |
| https://en.wikipedia.org/wiki/Overall_equipment_effectiveness | KPI tanımları ve birimler |
| https://www.ibm.com/design/language/data-visualization/ | grafik paleti ve eksen ritmi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Üretim Hattı · MES (styles/59-mes-production-line/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="mes-production-line"] değişkenleri; hard-coded renk/radius/gölge yasak.
Tipografi: --font-display JetBrains Mono 34/24/18 (700); --font-body Inter 15px/1.55;
  --font-mono JetBrains Mono 11–13px etiket/sayaç (.06em). Tüm sayılar tabular-nums.
Yüzey: --bg açık gri / --surface beyaz + 1px var(--line) + 0 1px 2px; yüzen katman 0 8px 24px.
  Radius 4px kontrol, 8px kart.
Renk: durum kodu accent #0d7a4f çalışıyor, --danger durdu, --warn beklemede — daima ikon + metin.
  ink/bg 15.09:1, ink-soft/bg 6.57:1, accent-ink/accent 5.37:1, ink-faint/bg 3.26:1 (dekoratif).
Bileşen: KPI kartı 16px padding + sol 3px durum şeridi + vardiya karşılaştırma etiketi; tablo satırı 32px.
Hareket: enter 440ms cubic-bezier(.12,.94,.24,1) 20px stagger .035; scroll top 76% 480ms 30px once;
  pin scrub 0.95 (+170%, ekran başına 1); hover 180ms görsel 1.016. prefers-reduced-motion zorunlu.
Yasak: gradyan/glow/cam, orantılı sayı, 12px üstü radius, ekran başına >1 sürekli hareket, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (durum şeridini ve sayaç hizasını nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: 3px durum şeridi, tabular sayaç, vardiya etiketi, 32px satır.
- [ ] Hard-coded renk/radius/gölge yok.
- [ ] Kontrast: 15.09 / 6.57 / 5.37 — hepsi eşik üstü.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px (mobilde 36px buton büyür).
- [ ] 390px'te tablo kendi kabında kaydırılıyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken pin ve sayaç duruyor.

## Token

```css
[data-style="mes-production-line"] {
  --bg: #f2f4f3; --bg-2: #e8ebe9;
  --surface: #ffffff; --surface-2: #f7f9f8;
  --ink: #17201c; --ink-soft: #4c5a53; --ink-faint: #7d8a83;
  --accent: #0d7a4f; --accent-ink: #ffffff;
  --line: rgba(23,32,28,.14);
  --radius: 4px; --radius-lg: 8px;
  --shadow: 0 1px 2px rgba(23,32,28,.10); --shadow-hard: none;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 2;
  --danger: #b3241a; --danger-ink: #ffffff;
  --ok: #0d7a4f; --warn: #8a5c00;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="mes-production-line"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
