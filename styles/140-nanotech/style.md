# 140 · Nanoteknik

> **Bir cümlede:** Moleküler ölçeğin monokrom arayüzü: karbon kafes noktaları, 3px köşeler, nm ölçü etiketleri ve neredeyse siyah tek accent ile hassas ölçüm dili.

| | |
|---|---|
| **Hissiyat** | hassas, steril, ölçekli, sakin-otoriter |
| **En iyi** | malzeme bilimi paneli, yarı iletken/kaplama üretimi, ölçüm cihazı UI'ı, derin teknoloji markası |
| **Kaçın** | tüketici uygulaması, etkinlik vitrini, sıcak hikâye — monokrom dil duygusal anlatım taşımaz |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 7.36:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `kit/tokens.css` → `[data-style="nanotech"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Nanoteknik, arayüzü **ölçüm cihazının ölçek penceresi** gibi kurar: neredeyse beyaz zemin, 8px nokta kafesi, altıgen bağ çizgileri, 3px köşe ve **tek "karbon" koyu accent** — renk değil değer vurgusu. Her ölçü nanometre ve tolerans taşır (`Ø 42 nm`, `±1.5 nm`). Sıcaklığı feda eder; karşılığında **ölçek disiplini** ve steril bir otorite kazanır.

Kurucu kararları üç tanedir. Birincisi **monokrom**: accent `#22272c` (karbon) — birincil eylem siyaha yakın, accent-ink açık. İkincisi **kafes imzası**: 8px nokta ızgarası + 60°/−60° altıgen bağ çizgileri; her nokta bir ölçüm düğümüdür. Üçüncüsü **ölçek zorunluluğu**: birimsiz sayı yok, tolerans olmadan ölçüm yok.

Bedeli: sıcaklık yok. Uzun okuma ve duygusal anlatım bu stilde yapılmaz; stil ölçüm, spesifikasyon ve kontrol panelleri içindir.

### Ne değildir
- **Calibration Lab (61) değildir:** 61 teal accent ve `0.42s` girişli laboratuvar panelidir (kadran/eşik); 140 monokromdur, kafes imzası ve `0.61s` girişi vardır.
- **Academic Paper (89) değildir:** 89 serif gövde + mavi accent + dipnot dili kullanır; 140 sans gövde, monokrom ve ölçü etiketlidir (bibliyografya görünümü yasak).
- **Blueprint Çizimi (56) değildir:** 56 koyu cyanotype paftadır; 140 açık steril zemin + altıgen kafes.
- **Utility (44) değildir:** 44 mavi accent ve 8/12px radius ile ürün arayüzüdür; 140'ta accent karbon (renksiz), radius 3/8px, nm ölçü dili.

### Nereden gelir
Malzeme bilimi ve yarı iletken ölçüm pratiğinden (nm ölçeği, tolerans, kafes yapısı) ve SEM görüntülerinin görsel dilinden. Bugün önemli çünkü derin teknoloji ürünleri "ölçek" anlatmak zorunda; klişeye dönmemesi için korunacak detay **monokrom accent** ve **her ölçünün tolerans taşıması**.

### 3 saniyede tanıma testi
1. Zemin neredeyse beyaz; 8px nokta kafesi ve 60° bağ çizgileri görünüyor.
2. Accent renkli değil: siyaha yakın karbon; birincil buton bu tonda.
3. Köşeler keskin: 3px kontrol, 8px kart; hap yok.
4. Etiketler mono büyük harf `.12em`; ölçüler `nm` ve `±` toleranslı.
5. Gölge neredeyse yok; ayrım 1px çizgi ve nokta kafesiyle.

## Görsel imza
- **Nokta kafesi:** 8px `radial-gradient` (ink %10) tüm gövdede.
- **Altıgen bağ:** `repeating-linear-gradient` 60° ve −60° (ink %12), 18px aralık; hero görselinde accent düğüm noktaları.
- **Kafes düğümü:** kart sol üstte 3px + 3 offsetli çift nokta (2×2 matris), accent %55.
- **Mono ölçü:** `Ø 42 nm`, `±1.5 nm`, `d 0.8 nm` — 10px, `.12em`, uppercase.
- **Radius disiplini:** 3px kontrol, 8px kart; 12px üstü yasak.
- **Karbon accent:** `#22272c`; birincil eylem dolu koyu, ghost buton çizgi.
- **Hareket imzası:** 610ms `cubic-bezier(.62,.06,.28,.98)`, 21px — kafes hizaya oturur.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f7f7f5` | sayfa zemini (steril) | kart zemini |
| `--bg-2` | `#edede9` | ikincil bant, nav altı | birincil CTA |
| `--surface` | `#ffffff` | kart / panel | sayfa zemini |
| `--surface-2` | `#f4f4f1` | chip, satır zemini | modal zemini |
| `--ink` | `#191b1e` | başlık, gövde, ölçü | dekoratif çizgi |
| `--ink-soft` | `#4d5257` | açıklama, tolerans | başlık |
| `--ink-faint` | `#7f858a` | yalnız kafes çizgisi ve dekoratif not | ölçü değeri, etkileşimli metin |
| `--accent` | `#22272c` | birincil eylem, kafes düğümü, aktif | gövde metni üstü |
| `--accent-ink` | `#f7f7f5` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(25,27,30,.16)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **16.09:1** · `ink-soft / bg` = **7.36:1** · `accent-ink / accent` = **14.04:1** · `ink-faint / bg` = **3.48:1** (yalnız kafes çizgisi).
- Tek vurgu kuralı: **tek değer, renk yok** — accent monokrom karbon. `--danger` (#a3281f), `--ok` (#2f6b3f), `--warn` (#7a5300) yalnız ölçüm durumunda, metinle.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; kafes üstünde `--ink-faint` ölçü etiketi.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black (`--font-display`) | 42px (mobil 26px) | 400 | 1.08 | `-.01em` |
| H2 | Archivo Black | 27px | 400 | 1.18 | `.02em` |
| H3 | Archivo Black | 19px | 400 | 1.26 | `.02em` |
| Gövde | Jost (`--font-body`) | 15px | 400 | 1.60 | `0` |
| Küçük gövde | Jost | 13px | 400 | 1.55 | `0` |
| Etiket / ölçü | IBM Plex Mono (`--font-mono`) | 10px | 600 | 1.4 | `.12em` |

- Ölçek oranı: **1.45** — kullanılan basamaklar 10 · 11 · 13 · 15 · 19 · 27 · 42.
- Ölçü önerisi: `h1 { font-size: clamp(26px, 3.6vw, 42px); line-height: 1.08 }`.
- Gövde satır uzunluğu en fazla **68ch**; ölçü tabloları 110ch'e kadar genişleyebilir.
- Ağırlık kuralı: display 400 (Archivo Black zaten kalın), gövde 400/600, mono 600. İtalik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1200px (içerik 1168px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1200; 768 altında tek kolon, kafes 12px aralığa çıkar |

- Asimetri kuralı: ekran başına **1** asimetrik 8/4 bölünme; kafes noktaları kolon kesişimlerine oturur.
- Bölüm ritmi: art arda en fazla **4** kart; beşincisi tam genişlik ölçüm bandı olur.
- İç boşluklar 4'ün katı; kafes aralığı (8px) boşluk ölçeğiyle çakışır (bilinçli hizalama).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | steril zemin + 8px nokta kafesi |
| Kart | `--surface` | `0 1px 2px rgba(25,27,30,.10)` | kart, panel |
| Yüzen katman | `--surface` + 1px accent | `0 8px 20px rgba(25,27,30,.14)` | modal, menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; seçili/ölçüm kartında `1px solid var(--accent)`.
- Derinlik nereden gelir: **ölçek ve çizgi** — gölge neredeyse yok (0 1px 2px). Sert/ofset gölge ve glow yok.
- Radius: `--radius: 3px` (buton, input, chip), `--radius-lg: 8px` (kart, modal). Üst sınır 8px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 36px | `0 14px` | 3px | 11px mono 600 uppercase `.12em` | karbon accent dolgu, accent-ink metin, gölge yok | hover: accent %88 + ink (açık ton) · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .45 + kesikli · loading: kafes noktaları sırayla (800ms) |
| Buton (ikincil) | 36px | `0 14px` | 3px | 11px mono | şeffaf + 1px `--line` | hover: `--surface-2` |
| Input | 36px | `0 12px` | 3px | 15px Jost | `--surface` + 1px `--line` | focus: accent çerçeve + 2px outline offset 1px · error: `--danger` çerçeve + 10px mono etiket · disabled: opacity .45 |
| Kart | içerik | 18px | 8px | H3 + gövde | `--surface` + 1px `--line` + 1px gölge | hover: kafes düğümü accent %80 |
| Chip / badge | 20px | `0 6px` | 3px | 10px mono `.12em` | `--surface-2` + 1px `--line` | accent: accent dolgu + accent-ink metin |
| Nav | 50px | `0 20px` | 0 | 14px Jost 500 | `--surface` + alt 8px kafes şeridi | aktif: accent metin + 2px alt çizgi |
| Tablo satırı | 34px | `6px 10px` | — | 13px Jost, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal | içerik | 20px | 8px | 19px display + mono ölçü | `--surface` + 1px accent + `0 8px 20px` | açılış: 21px oturma, 610ms |
| Toast | 34px | `8px 12px` | 3px | 13px Jost 600 | `--surface` + sol uçta 3px accent | hata: çizgi `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 4 seri; kafes diyagramı 1px, dolgu yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; kafes üstünde 1px offset kaybolur.
- Dokunma hedefi: en az 44×44px; 36px buton mobilde `min-height: 44px`. Kafes düğümü dekoratif (`aria-hidden`).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, keskin köşe, 16px ızgara; atom/kafes/bağ sembolleri |
| Fotoğraf | tek SEM/mikroskop karesi, yüksek kontrast, 3px radius kırpma |
| İllüstrasyon | karbon kafes (altıgen) + bağ çizimi zorunlu imza |
| Doku | grain %2 + 8px nokta kafesi; parlak yüzey yok |
| Logo alanı | mono büyük harf wordmark + kafes noktası, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 8/4: solda H1 + nm etiketleri, sağda kafes sahnesi | `shots/01-landing.png` |
| Dashboard | **yüksek** | 4 ölçüm kartı; kafes düğümü ve tolerans etiketi | `shots/02-dashboard.png` |
| Form | düşük | 36px input, mono ölçü alanları (`Ø`, `±`) | — |
| Liste / tablo | **yüksek** | 34px satır, sağa dayalı nm değerleri | — |
| Boş durum | orta | boş kafes + "ölçüm yok" mono etiketi | — |
| Onboarding | orta | 3 adım: örnek yükle → ölçek seç → tolerans | — |
| Pricing | orta | plan tablosu; ölçüm kotası mono | — |
| Giriş / ödeme | çok düşük | kafes yok; sade form + tek CTA | — |
| Modal | orta | ölçüm detayı: `Ø 42 nm · ±1.5 nm` | — |
| Bildirim / toast | orta | sağ-alt, 3px accent çizgi | — |
| Hata | orta | tolerans aşımı: `--danger` çerçeve + etiket | — |
| Profil / ayar | orta | birim/tolerans/kalibrasyon ayarları | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **610ms** | `cubic-bezier(.62,.06,.28,.98)` | `opacity` + `translateY(21px)`; stagger **0.031s** |
| Scroll reveal | **670ms** | aynı eğri | trigger `top 59%`, `translateY(23px)`, `once: true` |
| Pin / scrub | **0.4** | `transform` | **açık** — kafes sahnesi `+88%` mesafede pin + scrub (ekran başına 1) |
| Basma | **130ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 300ms | aynı eğri | opacity + 8px |
| Hover | **155ms** | aynı eğri | görsel ölçek **1.007** |
| Ödül / vurgu | 610ms | aynı eğri | kafes düğümleri sırayla yanar (tek kez) |

- İmza ölçüleri: `enter = 0.61s / cubic-bezier(.62,.06,.28,.98) / 21px / 0.031` · `scroll = top 59% / 0.67s / 23px / once` · `pin = true / scrub 0.4 / +88%` · `hover = 155ms / 1.007`.
- Bant içi fark: 136'dan (0.41s / 11px / scrub 0.58), 137'den (0.96s / 38px / pin yok), 138'den (0.27s / 1px), 139'dan (1.08s / 46px / scrub 1.18) en az dört parametrede ayrışır. Mevcut 126 stil içinde en yakını 63-maintenance-cmms (`0.55s / .4,0,.2,1 / 26px / 0.09`) — süre, eğri, offset, trigger (top 59%), pin ve hover'da farklı; `scrub 0.4` ve `top 59%` katalogda yeni.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin kapalı, kafes düğüm animasyonu son kareye atlar.
- Bu stile yasak hareket: sürekli titreşen kafes, blur geçişi, saniyede 3 üstü flash.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f7f7f5` | `#0c0d0f` |
| `--surface` | `#ffffff` | `#16181b` |
| `--ink` | `#191b1e` | `#eef0f2` |
| `--accent` | `#22272c` | `#e6e9ec` |
| `--ink-soft` | `#4d5257` | `#a9aeb4` |
| `--line` | `rgba(25,27,30,.16)` | `rgba(238,240,242,.16)` |

- Koyu modda değişen başka ne var: accent ters çevrilir (karbon → açık gri) çünkü koyu zeminde karbon kaybolur; kafes çizgisi %10 → %14, gölge yerine 1px çizgi öne çıkar.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Monokrom taban: accent "karbon" koyu; ikinci renk vurgu yok.
- Kafes (lattice) imza öğedir: 8px nokta ızgarası + 60°/−60° bağ çizgisi.
- Tüm ölçüler nanometre ve toleransla: `Ø 42 nm`, `±1.5 nm`.
- Radius 3px kontrol / 8px kart; 12px üstü yuvarlama yok.
- Gölge neredeyse yok (`0 1px 2px`); ayrım 1px çizgiyle.
- Etiketler mono büyük harf `.12em`; gövde Jost 15px/1.6.

## Yasaklar
- Doygun/neon renk ve gradyan.
- Yuvarlak 12px+ radius, hap buton.
- Yumuşak büyük gölge, glow, cam.
- Serif display.
- Bibliyografya/rapor görünümü (academic-paper ile örtüşür).
- Süs kafesi (her nokta bir ölçüm düğümü).

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **7.36:1** (eşik 4.5); `ink-faint / bg` = **3.48:1** yalnız kafes çizgisinde.
- `--ink-faint` ölçü etiketinde ve etkileşimli metinde kullanılmaz; ölçü `--ink` (16.09:1).
- Hareket/parlama hassasiyeti: düşük — flash yok; `prefers-reduced-motion` pin ve düğüm animasyonunu kapatır.
- Şeffaf yüzey yok; opak fallback gerekmez. `repeating-linear-gradient` desteklenmezse kafes bağı düz nokta ızgarasına düşer (ölçüm tabloda kalır).
- Odak görünürlüğü: 2px accent outline + 2px offset; kafes üstünde 1px offset kaybolur.
- Nanometre değerleri her zaman metin olarak yazılır; birim ikonla değiştirilmez.

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
| "Rapor" gibi görünüyor | serif + dipnot dili | sans gövde, ölçü etiketi, kafes |
| Kafes gürültü | nokta %14 üstü / 6px altı | %10 ve 8px sabit |
| Accent renkli olmuş | mavi/teal accent eklenmiş | karbon (monokrom) accent |
| Ölçü anlamsız | tolerans yok | `±` değeri ekle |
| Okunmuyor | `--ink-faint` ölçü metni | ölçü `--ink` |
| Mobilde sıkışık | kafes 8px korunmuş | 768 altı 12px, tek kolon |

## Komşu stiller

- **Uyumlu:** `calibration-lab` — ölçüm/kalibrasyon dili; tek bölümde.
- **Uyumlu:** `topographic-terrain` — ölçek/arazi okuma; alt panel olarak.
- **Uyumlu:** `utility` — nötr iskelet; form ekranlarında.
- **Yasak:** `dopamine-ui` — doygun renk monokrom disiplini kırar.
- **Yasak:** `vaporwave` — neon/gradyan ölçek otoritesini bozar.

| Eksen (5) | 140 · Nanotech | 61 · Calibration Lab |
|---|---|---|
| Display ailesi | Archivo Black 400 | Jost 500 |
| Zemin bandı | steril beyaz `#f7f7f5` | açık gri-yeşil `#eef1f0` |
| Accent hue | karbon (renksiz) `#22272c` | teal `#0d5f5c` |
| Radius ölçeği | 3 / 8px | 6 / 12px |
| İmza motif / motion | nokta kafesi + altıgen bağ · 0.61s · top 59% | kadran/eşik bandı · 0.42s · top 88% |

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Nanotechnology | nm ölçeği ve terminoloji |
| https://en.wikipedia.org/wiki/Carbon_nanotube | kafes/altıgen yapı |
| https://en.wikipedia.org/wiki/Scanning_electron_microscope | görüntü kontrastı ve ölçek çubuğu |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | monokrom zeminde metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Nanoteknik (styles/140-nanotech/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="nanotech"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg steril beyaz + 8px nokta kafesi (ink %10) + 60°/−60° bağ çizgisi (ink %12).
Tipografi: --font-display Archivo Black 42/27/19 (400); --font-body Jost 15px/1.60;
  --font-mono IBM Plex Mono 10px ölçü (.12em, uppercase, `Ø 42 nm` / `±1.5 nm` zorunlu).
Yüzey: --surface + 1px var(--line) + 0 1px 2px; yüzen katman 1px accent + 0 8px 20px. Radius 3px / 8px.
Renk: MONOKROM accent karbon #22272c (accent-ink açık); ink/bg 16.09:1, ink-soft/bg 7.36:1, accent-ink/accent 14.04:1, ink-faint/bg 3.48:1.
İmza: nokta kafesi + altıgen bağ + 2×2 kafes düğümü (kart sol üst).
Hareket: enter 610ms cubic-bezier(.62,.06,.28,.98) 21px stagger .031; scroll top 59% 670ms 23px once;
  pin scrub 0.4 (+88%, ekran başına 1); hover 155ms görsel 1.007. prefers-reduced-motion zorunlu.
Yasak: doygun/neon renk, 12px üstü radius, büyük gölge/glow/cam, serif, bibliyografya görünümü, süs kafesi.
Çıktı: bileşen kodu + tek paragraf not (kafes düğümünü ve nm etiketini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: nokta kafesi, altıgen bağ, kafes düğümü, nm etiketi.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 16.09 / 7.36 / 14.04 — hepsi eşik üstü.
- [ ] Ölçüler toleranslı ve birimli; odak halkası 2px accent + 2px offset.
- [ ] 390px'te kafes 12px, tek kolon, taşma yok.
- [ ] `prefers-reduced-motion` açıkken pin ve düğüm animasyonu duruyor.

## Token

```css
[data-style="nanotech"] {
  --bg: #f7f7f5; --bg-2: #edede9;
  --surface: #ffffff; --surface-2: #f4f4f1;
  --ink: #191b1e; --ink-soft: #4d5257; --ink-faint: #7f858a;
  --accent: #22272c; --accent-ink: #f7f7f5;
  --line: rgba(25,27,30,.16);
  --radius: 3px; --radius-lg: 8px;
  --shadow: 0 1px 2px rgba(25,27,30,.10); --shadow-hard: none;
  --font-display: "Archivo Black", "Inter", system-ui, sans-serif;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .04em; --blur: 0px; --grain: 2;
  --danger: #a3281f; --danger-ink: #ffffff;
  --ok: #2f6b3f; --warn: #7a5300;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="nanotech"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
