# 125 · Sports Energy

> **Bir cümleyle:** Stadyum enerjisi: mono tabular skor tabelası, 132px forma numarası konturu, pist şeritleri ve tek volt turuncu.

| | |
|---|---|
| **Hissiyat** | hızlı, iddialı, yüksek sesli, "santra yapıldı" |
| **En iyi** | canlı skor/maç takibi, spor kulübü vitrini, antrenman uygulaması, sezon kampanyası, etkinlik geri sayımı |
| **Kaçın** | sakin okuma sayfası, sağlık raporu, kurumsal form, uzun dokümantasyon |
| **Zorluk** | orta (yüksek kontrast + kalın kenar dengesi) · **Erişilebilirlik** | iyi (16.68:1 gövde, 5.16:1 accent üstü) |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="sports-energy"]` |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Sports Energy, stadyumdaki iki göstergeyi ekrana taşır: **skor tabelası** (mono `tabular-nums`, 40px, sağa dayalı) ve **forma numarası** (132px, 3px mürekkep kontur, içi boş). Zemin nötr beton (`#f1f3f1`), kenarlar **2–3px mürekkep**, alt bantta **78px aralıklı pist şeritleri**, ve tek **volt turuncu** (`#f24a00`) manşet vurgusu, birincil buton ve "canlı" durum için. Tipografi manşet dilidir: Rajdhani 700 (dar, yüksek), Inter gövde, JetBrains Mono skor.

Kazandığı şey: **hız**. Kalın kenar, tabular skor ve turuncu vurgu ilk 200ms'de "burada bir şey oluyor" der; canlı skor/geri sayım ekranlarında bu dil doğal durur. Feda ettiği şey: **sakinlik** — uzun gövde metni bu stilde yorucudur; 4 satırdan fazla paragraf gerekiyorsa o ekran başka stile devredilir (bu stilde yalnız manşet + skor + tablo kalır).

### Ne değildir
- **Safety Signage (58) değildir.** O stil uyarı levhası mantığıyla çalışır: koyu zemin, çapraz tehlike bandı, tehlike sarısı; burada zemin açık nötr, şeritler **pist** çizgileridir (dikey, 78px) ve accent volt turuncudur.
- **Telemetry Grid (46) değildir.** Telemetri yoğun veri ızgarası ve küçük punto ile operasyon kurar; burada ekranın yarısı manşet, skor dışındaki sayılar az ve büyüktür.
- **Dopamine UI (18) değildir.** Dopamine doygun bloklar + mikro ödül + 3px radius kullanır; burada radius 0–2px, gölge sert ve vurgu **tek** turuncudur.
- **Memphis (16) değildir.** Memphis desen ve konfeti ile oyun kurar; burada tekrar eden tek öğe pist şerididir, dekorasyon yoktur.
- **"Kalın kenarlı dashboard" değildir.** Forma numarası konturu, pist şeritleri ve tabular skor olmadan bu stil sadece kaba bir panodur.

### Nereden gelir
Spor ekranının iki kökü var: **skor tabelası** (1960'lardan itibaren LED/blok rakamlar — uzaktan okunur, orantısız rakam kabul etmez) ve **forma tipografisi** (göğüs numarası, konturla ayrışır). Dijitalde bu dil canlı skor uygulamaları, kulüp vitrinleri ve antrenman uygulamalarıyla yayıldı; nedeni ölçülebilir — yüksek kontrast + iri tabular rakam, hareket halinde (koşarken, tribünde) okunur.

Klişeye düşmemesi için korunması gereken detay: **tabular skor ve tek vurgu**. Sayıları orantılı yazmak, ikinci bir kulüp rengi eklemek veya animasyonlu sayaç koymak stili "kumar uygulaması"na çevirir.

### 3 saniyede tanıma testi
1. Skor/rakamlar **mono ve tabular** mı (hizalı, eşit genişlik); 40px skor bloğu var mı?
2. Bir yerde **132px kontur forma numarası** (içi boş, 3px stroke) var mı; ekran başına 1 mi?
3. Alt bantta **78px aralıklı pist şeritleri** var mı; şeritler dikey ve ince mi?
4. Kenarlar **2–3px mürekkep** mi; bir öğede **6px sert ofset gölge** var mı?
5. Accent **volt turuncu** ve ekranın ≤ %12'sinde mi; yumuşak gölge/gradient hiç yok mu?

## Görsel imza
1. **Skor tabelası:** `.kpi .v` mono 40px `tabular-nums`, `letter-spacing: -.02em`, sağa dayalı; kart 2px mürekkep kenar.
2. **Forma numarası konturu:** 132px Rajdhani 700, `-webkit-text-stroke: 3px var(--ink)`, `color: transparent`; sağ üstte tek adet (mobil 76px / 2px).
3. **Pist şeritleri:** alt bantta 56px yükseklik, `repeating-linear-gradient(90deg, transparent 0 78px, var(--line) 78px 80px)` + 2px üst çizgi.
4. **Hız kırığı:** manşet içinde accent zeminli kelime, `skewX(-9deg)`; tek kelime, tek kullanım.
5. **Kalın kenar:** nav altı ve divider 3px; panel 2px; input/buton 2px. 1px kenar yok.
6. **Sert gölge:** `6px 6px 0 var(--ink)`; yalnız hero görseli, modal ve buton hover (translate -2px).
7. **İlerleme bandı:** 8px yükseklik, `--surface-2` zemin + accent dolgu, 1px kenar; sayısal eşlik (mono süre).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f1f3f1` | Sayfa zemini (nötr beton) | Kart içi |
| `--bg-2` | `#e7eae7` | Tablo şeridi, alt bilgi | Geniş dolgu |
| `--surface` | `#ffffff` | Panel, skor kartı, form | Sayfa zemini |
| `--surface-2` | `#eceee9` | İlerleme bandı zemini, hover | Metin arkası |
| `--ink` | `#0f1412` | Metin, kenar, kontur, sert gölge | Accent zemin üstü |
| `--ink-soft` | `#444d47` | Lede, ikincil metin | Skor rakamları (o `--ink`) |
| `--ink-faint` | `#6f7a73` | Pist çizgisi etiketi, dekoratif | Etkileşimli metin |
| `--accent` | `#f24a00` | Manşet vurgusu, birincil buton, canlı durum, ilerleme dolgusu | Gövde metni, geniş zemin |
| `--accent-ink` | `#17100c` | Accent üstü metin (koyu) | Accent olmayan zemin |
| `--line` | `rgba(15,20,18,.18)` | Panel kenarı, pist çizgisi, tablo | Ana kenar (o 2–3px ink) |

- Ölçülen kontrast: `ink / bg` = **16.68:1** · `ink-soft / bg` = **7.85:1** · `accent-ink / accent` = **5.16:1** · `ink-faint / bg` = **4.00:1**.
- Tek vurgu kuralı: volt turuncu ekranın **≤ %12**'si; **accent üstü metin koyudur** (`#17100c`), beyaz değil — beyaz turuncu üstünde 3.4:1'de kalır.
- Yasak kombinasyon: accent zemin + beyaz metin; ikinci accent (mavi/turkuaz takım rengi); `ink-faint` + `surface-2`.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Rajdhani | 62px (mobil 36px) | 700 | 0.9 | 0.005em |
| H2 | Rajdhani | 32px | 700 | 0.98 | 0.005em |
| H3 | Rajdhani | 20px | 600 | 1.16 | 0.005em |
| Gövde | Inter | 15.5px | 400 | 1.6 | 0 |
| Lede | Inter | 15.5px | 400 | 1.6 | 0 (48ch) |
| Skor / mono | JetBrains Mono | 40px | 700 | 1.0 | -0.02em |
| Etiket / mono | JetBrains Mono | 11px | 400 | 1.4 | 0.14em |

- Ölçek oranı ≈ 1.95 (15.5 → 32 → 62); skor tablosu ölçek dışıdır (40px mono, sabit).
- Ölçü önerisi: `h1 { font-size: clamp(36px, 5vw, 62px) }`.
- Gövde metni maksimum satır uzunluğu: **48ch**; gövde 4 satırı geçmez (manşet + tablo stili).
- Ağırlık kuralı: display 700 (Rajdhani 700 var; 800 sahte kalın yasak), gövde 400/600, skor mono 700.
- Skor rakamları daima `tabular-nums` + `letter-spacing: -.02em`; orantılı rakam hizayı bozar ve "skor" okunmaz.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (skor tabelası 4, manşet 8) |
| Gutter | 16px |
| Container genişliği | 1220px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında skor tabelası manşetin altına iner; kontur 76px'e küçülür |

- Asimetri kuralı: skor tabelası solda 4 kolon, manşet 8 kolon; pist şeritleri tam genişlik. Ekran başına 1 forma numarası konturu.
- Bölüm ritmi: art arda en fazla **3** blok aynı hizada; dördüncüde 3px accent divider.
- Bölüm dikey boşluk 68px (mobil 40px); panel padding 18px; tablo satırı 40px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, tablo şeridi |
| Panel | `--surface` + 2px `--line` | `none` | Skor kartı, tablo, form |
| Yüzen katman | `--surface` + 3px `--ink` + `--shadow-hard` | `6px 6px 0` | Modal, maç detayı |

- Kenarlık formülü: panel 2px `--line`; nav/divider 3px `--ink`; modal 3px `--ink`; pist çizgisi 2px.
- Derinlik nereden gelir: **kalın kenar + sert ofset gölge**; yumuşak gölge `none`, blur yok.
- Radius: `--radius` 2px (panel, input) · `--radius-lg` 6px (modal). Buton ve chip 0px (pano keskinliği).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 12px 20px | 0px | 17px/700 Rajdhani, .04em | `--accent` / `--accent-ink`, 2px ink | hover sert gölge + translate(-2px,-2px) 80ms · active gölge yok · focus 3px ink offset 0 · disabled opacity .4 kesikli · loading `- - -` 200ms |
| Buton (ikincil) | 46px | 12px 20px | 0px | 17px/700 Rajdhani | şeffaf / `--ink`, 2px `--line` | hover `--surface-2` + kenar ink · focus aynı |
| Input | 46px | 0 12px | 0px | 15.5px/400 Inter | `--surface` + 2px `--line` | focus 3px accent offset 0 · error `--danger` + mono açıklama |
| Panel / skor kartı | — | 18px | 0px | skor mono 40px | `--surface` + 2px `--line`, gölge yok | canlı: sol 4px accent blok |
| Chip | 22px | 3px 7px | 0px | 10px/400 mono, .12em | `--ink` zemin / `--bg` metin | accent varyantı = "canlı/başladı" |
| Nav | 54px | 0 32px | 0 | marka Rajdhani 20px + mono 11px | `--bg` + alt 3px ink | aktif: 3px accent alt blok |
| Tablo satırı (puan) | 40px | 8px 10px | 0 | takım Rajdhani 17px, O/G/M mono tabular | alt 2px `--line`; başlık `--ink` zemin | hover `--surface-2`; lider satır: sol 4px accent |
| Modal | — | 24px | 6px | H2 Rajdhani 32px | 3px ink + `--shadow-hard` | perde %55, skor tabelası üstte |
| Toast | 42px | 10px 14px | 0px | 12px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 8px accent blok, 2400ms |
| Grafik | — | — | — | eksen 10px mono | `--accent`, `--ink` | en fazla 2 seri; sütunlar bitişik, 2px kenar |

- Odak halkası: `outline: 3px solid var(--ink); outline-offset: 0`; accent zeminli butonda `outline-color: var(--accent-ink)`, offset -5px.
- Dokunma hedefi: en az 46×46px; tablo satırı 40px görünür ama satırın tamamı 46px hedef olarak tıklanır (satır içi padding).
- Buton hover'ında `translate(-2px,-2px)` + sert gölge: "buton yerinden fırlar" etkisi; reduced-motion'da yalnız gölge kalır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2.5px kalın çizgi, kare uç, 24px ızgara; dolu ikon serbest (tek renk) |
| Fotoğraf | Aksiyon karesi: yüksek kontrast, hareket bulanıklığı serbest; alan ekranın ≤ %55'i |
| İllüstrasyon | Yok — forma numarası ve pist şeritleri grafik dili taşır |
| Doku | Pist şeritleri (78px aralık, 2px) + `--grain: .02` |
| Logo alanı | Rajdhani kelime markası (.08em, uppercase), 20px güvenli boşluk; arma yerine numara konturu |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 62px manşet + skor tabelası + forma numarası konturu + pist şeritleri | `shots/01-landing.png` |
| Dashboard | yüksek | Skor kartları + puan tablosu, mono tabular | `shots/02-dashboard.png` |
| Form | düşük | 46px alanlar, 2px kenar, 3px odak halkası | — |
| Liste / tablo | yüksek | Puan tablosu: sıra, takım, O/G/M, puan | — |
| Boş durum | orta | Boş skor tabelası (`– : –`) + tek cümle + 1 buton | — |
| Onboarding | yüksek | 3 adım: takım seç → bildirim → ilk maç | — |
| Pricing | orta | 3 paket; önerilen paket 3px accent üst çizgi | — |
| Giriş / ödeme | düşük | Kontur/pist yok; 2px kenar + tek accent buton | — |
| Modal | orta | Skor tabelası + olay listesi, 3px çerçeve + sert gölge | — |
| Bildirim / toast | orta | Canlı bildirim: mono + 8px accent blok, 2400ms | — |
| Hata | düşük | `--danger` kenar + mono açıklama; pist şeridi yok | — |
| Profil / ayar | orta | Takım/lig ayarları, mono etiketler, tabular tercihler | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 60ms | `linear` | `box-shadow` kalkar, `translate(0,0)` |
| Geçiş / sayfa | 120ms | `cubic-bezier(.9,0,.1,1)` | `opacity` |
| Giriş (enter) | **240ms** | `cubic-bezier(.9,0,.1,1)` | `opacity` + `translateY(36px)`, **stagger 20ms** (patlama) |
| Kaydırma (scroll) | **280ms** | `cubic-bezier(.9,0,.1,1)` | trigger **`top 93%`**, offsetY **40px**, `once: false` |
| Hover | **80ms** | `linear` | görsel ölçek **1.05** |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 240ms | `cubic-bezier(.9,0,.1,1)` | ilerleme bandı %0 → %100, tek atım (sayaç döngüsü yok) |

- İmza ölçüsü: enter **0.24s / 36px / stagger 0.02** · scroll **0.28s / `top 93%` / 40px / `once: false`** · hover **80ms / 1.05** · pin **kapalı** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; skor/süre güncellemeleri anında görünür, `once: false` animasyonu durur.
- Bu stile yasak hareket: parallax, sürekli döngü (sayaç), spring/bounce, yumuşak ease-in-out zarafeti.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f1f3f1` | `#0c100e` |
| `--bg-2` | `#e7eae7` | `#111612` |
| `--surface` | `#ffffff` | `#161b18` |
| `--surface-2` | `#eceee9` | `#1e2420` |
| `--ink` | `#0f1412` | `#e9efe9` |
| `--ink-soft` | `#444d47` | `#aebbb2` |
| `--ink-faint` | `#6f7a73` | `#7f8d84` |
| `--accent` | `#f24a00` | `#ff6a2e` |
| `--accent-ink` | `#17100c` | `#100804` |
| `--line` | `rgba(15,20,18,.18)` | `rgba(233,239,233,.16)` |

- Koyu mod **gece maçı**: zemin çim-siyahı (`#0c100e`), panel `#161b18`; accent açılır (`#ff6a2e`) ve accent üstü metin koyu kalır (kontrast 6.95:1).
- Sert ofset gölge koyuda siyah olsaydı görünmezdi: `--shadow-hard` **çim grisine** (`#3f4a43`) döner — yazılı istisna, `token-block.css` koyu bloğunda açıkça durur.
- Forma numarası konturu koyuda 3px açık mürekkeple çizilir; pist şeritleri `--line` (.16) ile aynı ağırlıkta kalır.
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **16.41:1** · `ink-soft/bg` = **9.63:1** · `accent-ink/accent` = **6.95:1** · `ink-faint/bg` = **5.52:1**.

## Zorunlu kurallar

1. **Tabular skor:** tüm skor/istatistik sayıları mono + `tabular-nums` + sağa dayalı; orantılı sayı yasak.
2. **Forma numarası:** ekran başına 1 kontur (132px / mobil 76px, 3px stroke, içi boş).
3. **Pist şeritleri:** yalnız alt bantta, 78px aralık, 2px çizgi, 56px (mobil 36px) yükseklik.
4. **Kalın kenar:** panel 2px, nav/divider 3px; 1px kenar hiçbir yerde yok.
5. **Sert gölge:** `6px 6px 0` yalnız hero, modal ve buton hover; yumuşak gölge yok.
6. **Accent ≤ %12:** volt turuncu; accent üstü metin **koyu** (`--accent-ink`), beyaz değil.

## Yasaklar

- Yumuşak gölge, gradient, blur, cam yüzey.
- Serif aile, 1px ince kenar, pill buton, yuvarlak avatar.
- İkinci accent (takım mavisi/turkuaz) ve renkli kulüp rozetleri.
- Sayaç/skor döngü animasyonu, sürekli döngü.
- 4 satırdan uzun gövde paragrafı (bu stil manşet + tablo dilidir).
- Accent zemin üstünde beyaz metin (3.4:1) ve 12px altı accent üstü yazı.

## Erişilebilirlik

- Ölçülen riskler: `ink-faint / bg` = **4.00:1** — yalnız pist etiketi ve dekoratif mono; `accent-ink / accent` = **5.16:1** (koyu metin turuncu üstünde) — beyaz metin kullanılsaydı 3.4:1'de kalırdı, bu yüzden accent üstü metin daima koyudur.
- Skor 40px mono + `tabular-nums`: uzaktan okunur; canlı durum ayrıca **metinle** yazılır (`CANLI 78'`), yalnız renkle değil.
- Pist şeritleri ve forma numarası dekoratif: `aria-hidden`, `pointer-events: none`; skor bilgisi metinle taşınır.
- Hareket/parlama hassasiyeti: orta — 240ms enter + `once: false` scroll; `prefers-reduced-motion` hepsini durdurur, skor değişimi anlık olur.
- Şeffaf yüzey yok (`--blur: 0`); `color-mix` kullanılmıyor, `-webkit-text-stroke` desteklenmezse kontur `color: var(--ink-soft)` dolgusuna düşer (numarası yine görünür).
- Odak görünürlüğü: 3px mürekkep halka (16.68:1); accent butonda `--accent-ink` halka, offset -5px.

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
| "Kumar uygulaması" hissi | ikinci accent + gradient + canlı sayaç | Tek volt accent; döngü/sayaç yok |
| Skorlar hizasız | orantılı rakam, ortalama | `tabular-nums` + sağa dayalı mono |
| Ekran gürültülü | 3 forma numarası + 5 şerit bandı | Kontur 1, şerit 1 bant |
| Panel "yumuşak" | 1px kenar + yumuşak gölge | 2–3px kenar + sert ofset gölge |
| Turuncu üstü metin okunmuyor | beyaz metin kullanılmış (3.4:1) | `--accent-ink` koyu metin (5.16:1) |
| Koyu modda gölge kayboluyor | siyah sert gölge | Koyu blokta `--shadow-hard: 6px 6px 0 #3f4a43` |

## Komşu stiller

- **Uyumlu:** `utility` — tablo/hairline disiplini ortak; utility form ve ayar ekranlarında kalır.
- **Uyumlu:** `safety-signage` — uyarı/duyuru bağlamı ortak; tehlike sarısını bu stile taşıma.
- **Uyumlu:** `telemetry-grid` — sayısal veri dili ortak; telemetry yoğun veri ekranında kalır.
- **Yasak:** `claymorphism` — şişkin yuvarlak form pano keskinliğini yok eder.
- **Yasak:** `glassmorphism` — blur/şeffaflık yüksek kontrastlı skoru sulandırır.
- **Yasak:** `wabi-sabi` — kasten kırık hiza ve soluk palet skor okunurluğunu düşürür.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Scoreboard | tabular rakam düzeni ve uzaktan okunurluk |
| https://en.wikipedia.org/wiki/Jersey_(sports) | forma numarası tipografisi ve kontur |
| https://en.wikipedia.org/wiki/Running_track | pist şeritleri ve kulvar aralığı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | pist çizgisi ve skor çerçevesi ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Sports Energy (styles/125-sports-energy/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="sports-energy"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Rajdhani 700 (H1 62px / .9, mobil 36px), govde Inter 400 15.5/1.6 (<= 48ch),
  skor/etiket JetBrains Mono (40px tabular -0.02em / 11px .14em). Serif ve govdede 16px ustu punto yasak.
Yuzey: yumusak golge YOK; panel 2px var(--line), nav/divider 3px var(--ink), radius 2px (modal 6px),
  buton/chip 0px. Sert golge var(--shadow-hard) yalniz hero, modal ve buton hover'da.
Renk: beton #f1f3f1 + murekkep #0f1412 + TEK volt turuncu #f24a00 (ekranin <= %12'si).
  ACCENT USTU METIN KOYU (#17100c) — beyaz turuncu uzerinde 3.4:1'de kalir, kullanma.
Imza: skor tabelasi (mono tabular, saga dayali, 40px); 132px forma numarasi konturu (3px stroke,
  ici bos, ekran basina 1); alt bantta pist seritleri (78px aralik, 2px cizgi, 56px yukseklik);
  mansette skewX(-9deg) accent kelime; 8px ilerleme bandi.
Hareket: enter 240ms cubic-bezier(.9,0,.1,1) 36px stagger 20ms; scroll top 93% / 280ms / 40px / once:false;
  hover 80ms imageScale 1.05; pin kapali. prefers-reduced-motion zorunlu.
Yasak: yumusak golge/gradient/blur, serif, 1px kenar, pill buton, ikinci accent,
  sayac/dongu animasyonu, 4 satirdan uzun govde, accent ustu beyaz metin.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (tabular skor, forma konturu, pist şeritleri).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (16.68:1), accent üstü ≥ 4.5:1 (5.16:1).
- [ ] Odak halkası görünür (3px, offset 0), dokunma hedefi ≥ 46px.
- [ ] 390px genişlikte taşma yok; kontur ve şeritler küçülüyor.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="sports-energy"] {
  --bg: #f1f3f1; --bg-2: #e7eae7;
  --surface: #ffffff; --surface-2: #eceee9;
  --ink: #0f1412; --ink-soft: #444d47; --ink-faint: #6f7a73;
  --accent: #f24a00; --accent-ink: #17100c;
  --line: rgba(15,20,18,.18);
  --radius: 2px; --radius-lg: 6px;
  --shadow: none; --shadow-hard: 6px 6px 0 #0f1412;
  --font-display: "Rajdhani", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.005em; --blur: 0px; --grain: 0.02;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="sports-energy"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir (koyuda `--shadow-hard` çim grisine döner).

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 3.27:1 · `ink-soft / surface-2` 7.49:1 · `accent-ink / accent` 5.16:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 340px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: skor tabelası: dev skor + set çubukları.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.24s` / `scroll 0.28s` (ikisi de ≤ 1.2 s).
