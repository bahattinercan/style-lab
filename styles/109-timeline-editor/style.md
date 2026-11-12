# 109 · Zaman Çizelgesi Editörü

> **Bir cümlede:** Kurgu masasının dili: 32px kanal şeritleri, tek dikey playhead, mono zaman kodu ve %14 kanal tonlu klip bloklarıyla kurulan sıkı çalışma yüzeyi.

| | |
|---|---|
| **Hissiyat** | hassas, sıkı, ritmik, çalışkan |
| **En iyi** | video/ses kurgu aracı, podcast editörü, animasyon zaman çizelgesi, olay-kronoloji paneli |
| **Kaçın** | vitrin/landing, moda kampanyası, çocuk uygulaması — şerit dili duygusal anlatım taşımaz |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (yoğun ızgara + küçük etiketler; en düşük metin çifti 7.21:1) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="timeline-editor"]` |
| **Kompozisyon** | `sticky` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Zaman Çizelgesi Editörü, arayüzü **kurgu zaman çizgisi** gibi kurar: solda kanal adları (32px şerit), sağda zaman ekseni; tek dikey playhead (2px accent), klip blokları %14 kanal tonu, tüm zaman kodları mono ve tabular (`00:00:12:04`). Süsü sıfıra indirir; karşılığında **zamanın nerede olduğunu** bir bakışta okutur.

Kurucu kararları üç tanedir. Birincisi **tek playhead**: ekranda bir dikey imleç; ikinci imleç yok. İkincisi **ızgara iki kademeli**: 64px ana kare çizgisi, 16px ara çizgi (%50 opak) — ölçek okunur. Üçüncüsü **gölge neredeyse yok**: yalnız sürüklenen klip gölge taşır, diğer yüzeyler 1px çizgiyle ayrılır.

Bedeli: yoğunluk yorgunluğu. Bu yüzden ekran 1360px genişlikte çalışır, 1360 altında denetçi paneli alta iner.

### Ne değildir
- **Utility (44) değildir:** 44 genel ürün arayüzüdür ve mavi accent taşır; 109 kurgu masasıdır, playhead + kanal şeridi imzadır.
- **Kinetic Type (37) değildir:** 37 tipografiyi hareket ettirir; 109'da hareket araca aittir, tipografi sabit ve mono zaman kodudur.
- **Log Stream (49) değildir:** 49 dikey akan olay satırlarıdır; 109 yatay zaman ekseni ve kanal katmanlarıdır.
- **Blueprint Çizimi (56) değildir:** 56 ölçü paftasıdır (koyu cyanotype); 109 açık sıcak gri çalışma yüzeyi ve yatay zaman ekseni.

### Nereden gelir
Doğrusal olmayan kurgu (NLE) pratiğinden: kanal/klip/playhead modeli, J-K-L tuş refleksi, SMPTE zaman kodu. Bugün web'de geri dönüyor çünkü tarayıcı tabanlı ses/video editörleri yaygınlaştı; klişeye dönmemesi için korunacak detay **zaman kodunun tabular ve mono olması** ve **tek playhead kuralı**.

### 3 saniyede tanıma testi
1. Yatay zaman ekseni ve 32px kanal şeritleri görünüyor; şeritler 1px çizgiyle ayrılıyor.
2. Tek dikey playhead var (2px accent, plum) ve cetvelde zaman kodu duruyor.
3. Tüm zaman kodları mono ve tabular: `00:01:07:12`.
4. Klipler 1px çerçeve + %14 kanal tonu; gölge yok (yalnız sürüklenen klipte).
5. Ana kare çizgisi 64px, ara çizgi 16px — ızgara iki kademeli.

## Görsel imza
- **Playhead:** 2px accent dikey çizgi, sahne görselinde ve `.sig` üzerinde; tek adet.
- **Kanal şeridi:** 32px yükseklik, 1px yatay çizgi, kanal adı solda mono.
- **İki kademeli ızgara:** 64px ana çizgi (ink %12), 16px ara çizgi (ink %5).
- **Klip bloğu:** 1px çerçeve + `color-mix(accent 8%, surface)` zemin; seçili klip accent %20.
- **Zaman kodu:** IBM Plex Mono 10–12px, `tabular-nums`, `.02em` tracking.
- **Sıfır gölge kuralı:** yalnız sürüklenen klip `0 8px 20px`; diğer yüzeyler düz.
- **Hareket imzası:** 510ms `cubic-bezier(.45,.08,.25,1)`, 15px — playhead hizaya oturur.
- **Landing hero (QA):** zaman çizelgesi: playhead gradyanı, kanal satırları, aktif klip accent %8 + sol accent şerit.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f1efec` | çalışma yüzeyi zemini (sıcak gri) | klip zemini |
| `--bg-2` | `#e7e3de` | cetvel bandı, kanal başlığı | buton zemini |
| `--surface` | `#fbfaf8` | denetçi paneli, kart | playhead |
| `--surface-2` | `#f5f2ee` | klip zemini, araç çubuğu | modal zemini |
| `--ink` | `#1e1a17` | başlık, gövde, zaman kodu | dekoratif çizgi |
| `--ink-soft` | `#554d46` | açıklama, kanal etiketi | başlık |
| `--ink-faint` | `#857b71` | yalnız ara ızgara çizgisi | zaman kodu, etiket |
| `--accent` | `#a12a6e` | playhead, seçili klip, birincil eylem | gövde metni |
| `--accent-ink` | `#fff4f8` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(30,26,23,.16)` | şerit, klip çerçevesi, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **15.06:1** · `ink-soft / bg` = **7.21:1** · `accent-ink / accent` = **5.36:1** · `ink-faint / bg` = **3.61:1** (yalnız ara ızgara).
- Tek vurgu kuralı: accent (playhead plum) tek. `--ok` (#1f6b3f) = onaylı klip, `--warn` (#7a5300) = medya eksik, `--danger` (#a8262c) = render hatası; üçü de metinle birlikte.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; ara ızgara üstünde `--ink-faint` etiket.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black (`--font-display`) | 38px (mobil 24px) | 400 | 1.10 | `-.01em` |
| H2 | Archivo Black | 26px | 400 | 1.18 | `0` |
| H3 | Archivo Black | 18px | 400 | 1.28 | `0` |
| Gövde | Inter (`--font-body`) | 14px | 400 | 1.55 | `0` |
| Küçük gövde | Inter | 12px | 400 | 1.5 | `0` |
| Zaman kodu / etiket | IBM Plex Mono (`--font-mono`) | 10–12px | 400 | 1.4 | `.02–.08em` |

- Ölçek oranı: **1.45** — kullanılan basamaklar 10 · 11 · 12 · 14 · 18 · 26 · 38.
- Ölçü önerisi: `h1 { font-size: clamp(24px, 3.4vw, 38px); line-height: 1.1 }` — başlık araç çubuğunu ezmez.
- Gövde satır uzunluğu en fazla **68ch**; denetçi paneli 40ch'te kırılır.
- Ağırlık kuralı: display 400 (Archivo Black zaten kalın), gövde 400/600, mono 400. İtalik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (iş alanı 8, denetçi 4) |
| Gutter | 12px |
| Container genişliği | 1360px (içerik 1336px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1360; 1360 altında denetçi alta iner, 768 altında kanal şeridi 40px |

- Asimetri kuralı: ekran başına **1** asimetrik bölünme (8/4). Kanal şeritleri tam genişlik.
- Bölüm ritmi: art arda en fazla **12** kanal şeridi (fazlası kaydırma); her 4 şeritte bir 8px grup boşluğu.
- Zaman ekseni soldan 96px içeride başlar (kanal adı kolonu), cetvel 24px yüksekliğinde.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | çalışma yüzeyi + cetvel bandı |
| Kart | `--surface` | yok | denetçi paneli, klip dışı kart (1px line) |
| Yüzen katman | `--surface-2` + accent çerçeve | `0 8px 20px rgba(30,26,23,.18)` | sürüklenen klip, modal, menü |

- Kenarlık formülü: `1px solid var(--line)`; seçili klip `1px solid var(--accent)` + accent %20 dolgu.
- Derinlik nereden gelir: **neredeyse hiçbir yerden** — düzlük kuraldır; yalnız sürükleme ve modal gölge taşır.
- Radius: `--radius: 4px` (buton, input, chip), `--radius-lg: 8px` (panel, modal, klip). Üst sınır 8px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 32px | `0 10px` | 4px | 11px mono uppercase `.08em` | `--surface-2` + 1px `--line`, gölge yok | hover: surface-2 %88 + ink · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .45 + kesikli · loading: playhead ilerleme çizgisi %0→%100 (600ms) |
| Buton (ikincil) | 32px | `0 10px` | 4px | 11px mono | şeffaf + 1px `--line` | hover: `--surface-2` |
| Input (zaman kodu) | 32px | `0 10px` | 4px | 12px mono tabular | `--surface` + 1px `--line` | focus: accent çerçeve + 2px outline offset 1px · error: `--danger` çerçeve + 10px etiket · disabled: opacity .45 |
| Klip bloğu | 32px | `4px 8px` | 8px | 11px mono (süre) | `accent %8` zemin + 1px accent %22 çerçeve | seçili: accent %20 zemin + accent çerçeve · sürüklenen: `0 8px 20px` · kilitli: kesikli çerçeve |
| Chip / badge | 20px | `0 6px` | 4px | 10px mono `.08em` | `--surface-2` + 1px `--line` | accent: accent %20 zemin + accent metin |
| Nav (üst bar) | 44px | `0 16px` | 0 | 13px Inter 500 | `--surface-2` + alt hairline | proje adı mono + kaydet durumu noktası |
| Tablo satırı (kanal) | 32px | `4px 8px` | — | 11px mono kanal adı | alt 1px `--line` | seçili kanal: sol 2px accent |
| Modal | içerik | 20px | 8px | 18px display + mono süre | `--surface` + 1px accent + `0 8px 20px` | açılış: 15px oturma, 510ms |
| Toast | 32px | `6px 10px` | 4px | 11px Inter 600 | `--surface` + sol uçta 2px accent playhead | hata: çizgi `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ok`, `--warn`, `--danger` | en fazla 4 seri; dalga formu 1.5px, klip dolgusu %14 |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; yoğun ızgarada 1px offset kaybolur.
- Dokunma hedefi: en az 44×44px; 32px buton mobilde `min-height: 44px`; kanal şeridi 40px'e çıkar.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara; oynat/kes/trim/mikser sembolleri |
| Fotoğraf | medya küçük görseli (thumbnail) klip içinde, 4px radius, düşük doygunluk |
| İllüstrasyon | yok; dalga formu (ses kanalı) ve klip blokları imza |
| Doku | grain %2; kanal şeritlerinde 1px yatay çizgi deseni |
| Logo alanı | mono büyük harf wordmark + zaman kodu biçimi, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | solda H1 + zaman kodu etiketi, sağda zaman çizgisi görseli | `shots/01-landing.png` |
| Dashboard | **yüksek** | kanal şeritleri + denetçi paneli; süs sıfır | `shots/02-dashboard.png` |
| Form | düşük | 32px mono input, tek kolon; zaman kodu doğrulaması | — |
| Liste / tablo | **yüksek** | 32px kanal satırı, mono süre kolonu | — |
| Boş durum | orta | boş zaman çizgisi + "medya sürükle" mono etiketi | — |
| Onboarding | orta | 3 adım: medya ekle → klip kes → dışa aktar | — |
| Pricing | orta | plan tablosu satır bazlı; süre limiti mono | — |
| Giriş / ödeme | çok düşük | zaman çizgisi yok; sade form + tek CTA | — |
| Modal | orta | dışa aktarma: codec + süre mono | — |
| Bildirim / toast | orta | sağ-alt, playhead çizgisi + mono metin | — |
| Hata | orta | kırmızı klip çerçevesi + mono hata kodu | — |
| Profil / ayar | orta | kısayol ve ızgara yoğunluğu ayarları | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **510ms** | `cubic-bezier(.45,.08,.25,1)` | `opacity` + `translateY(15px)`; stagger **0.042s** |
| Scroll reveal | **530ms** | aynı eğri | trigger `top 67%`, `translateY(18px)`, `once: true` |
| Pin / scrub | **1.3** | `transform` | **açık** — zaman ekseni `+190%` mesafede pin + scrub (ekran başına 1) |
| Basma | **110ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 220ms | aynı eğri | opacity + 8px |
| Hover | **165ms** | aynı eğri | görsel ölçek **1.004** |
| Ödül / vurgu | 530ms | aynı eğri | playhead hedef kareye oturur (tek kez) |

- İmza ölçüleri: `enter = 0.51s / cubic-bezier(.45,.08,.25,1) / 15px / 0.042` · `scroll = top 67% / 0.53s / 18px / once` · `pin = true / scrub 1.3 / +190%` · `hover = 165ms / 1.004`.
- Bant içi fark: 106'dan (0.37s / 2px / pin yok), 107'den (0.86s / 25px / scrub 0.42), 108'den (0.19s / 5px), 110'den (0.73s / 19px / pin yok) en az dört parametrede ayrışır. Mevcut 93 stil içinde en yakını 53-ledger-meter (`0.66s / .65,0,.35,1 / 20px / 0.09 / scrub 1.35`) — süre, eğri, offset, stagger, trigger (top 67%) ve distance farklı; `scrub 1.3` ve `top 67%` katalogda yeni.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin kapalı, playhead statik.
- Bu stile yasak hareket: kayıt dışında akan playhead, yay/overshoot, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f1efec` | `#121213` |
| `--surface` | `#fbfaf8` | `#1d1c1f` |
| `--ink` | `#1e1a17` | `#efece7` |
| `--accent` | `#a12a6e` | `#d97ac0` |
| `--ink-soft` | `#554d46` | `#b7b0a8` |
| `--line` | `rgba(30,26,23,.16)` | `rgba(239,236,231,.16)` |

- Koyu modda değişen başka ne var: ana kare çizgisi ink %12 → %16 (siyahta kaybolmasın), klip tonu %8 → %12, accent bir ton açılır (`#d97ac0`) çünkü koyu zeminde plum kaybolur.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Kanal şeritleri 32px (mobil 40px); zaman kodu mono ve tabular (`00:00:12:04`).
- Tek playhead: 2px accent dikey çizgi, sürüklenebilir; ikinci imleç yok.
- Klip bloğu 1px çerçeve + %14 kanal tonu; seçili klip accent %20 dolgu.
- Izgara iki kademeli: 64px ana çizgi, 16px ara çizgi (%50 opak).
- Gölge yalnız sürüklenen klipte; diğer yüzeyler düz.
- Klavye kısayolları zorunlu: boşluk oynat/durdur, J/K/L trim, I/O işaretle.

## Yasaklar
- Serif display ve dekoratif illüstrasyon.
- Hap radius, yumuşak büyük gölge.
- Orantılı sayı / hizasız zaman kodu.
- Kayıt dışında akan playhead.
- Renk-only kanal ayrımı (kanal adı yazılır).
- Blur ve cam yüzey.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **7.21:1** (eşik 4.5); `ink-faint / bg` = **3.61:1** yalnız ara ızgara çizgisinde.
- `--ink-faint` zaman kodunda ve etikette kullanılmaz; zaman kodu daima `--ink` (15.06:1) ve 10px'in altına inmez.
- Hareket/parlama hassasiyeti: orta — pin/scrub kapatılabilir (WCAG 2.3.3); `prefers-reduced-motion` playhead animasyonunu durdurur.
- Şeffaf yüzey yok; opak fallback gerekmez. `color-mix` desteklenmezse klip tonu düz `--surface-2` olur.
- Odak görünürlüğü: 2px accent outline + 2px offset; ızgara üstünde 1px offset kaybolur.
- Klavye: kanal/klip gezinmesi Tab + ok tuşlarıyla; sürükleme için alternatif (tarih/süre girişi) zorunlu (WCAG 2.5.7).

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
| "Tablo" gibi görünüyor | şerit yüksekliği 48px+ | 32px şerit, 16px ara çizgi |
| Zaman kodu kayıyor | orantılı font | `font-variant-numeric: tabular-nums` + mono |
| İki imleç | playhead + hover çizgisi birlikte | hover çizgisi 1px ve %40 opak; playhead tek |
| Gölge kirliliği | tüm kliplere gölge | gölge yalnız sürüklenen klipte |
| Izgara okunmuyor | tek kademe çizgi | 64px ana + 16px ara kademe |
| Mobilde sıkışma | 32px şerit korunmuş | 768 altı 40px, yatay kaydırma kalıbı |

## Komşu stiller

- **Uyumlu:** `kinetic-type` — hareket/tipografi dünyası; Kinetic yalnız başlık bölümünde.
- **Uyumlu:** `utility` — nötr iskelet; Utility form ve ayar ekranlarında.
- **Uyumlu:** `log-stream` — olay kaydı paneli olarak sağ kolonda.
- **Yasak:** `claymorphism` — pastel 3B formlar kurgu hassasiyetiyle çelişir.
- **Yasak:** `memphis` — süs geometrisi zaman eksenini okunamaz kılar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/SMPTE_timecode | zaman kodu biçimi ve kare hızı |
| https://en.wikipedia.org/wiki/Non-linear_editing | kanal/klip/playhead modeli |
| https://helpx.adobe.com/premiere-pro/using/default-keyboard-shortcuts.html | J/K/L ve işaretleme refleksi |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | yoğun ızgarada odak halkası |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Zaman Çizelgesi Editörü (styles/109-timeline-editor/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="timeline-editor"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg sıcak gri + 32px yatay şerit deseni (repeating-linear-gradient, ink %4).
Tipografi: --font-display Archivo Black 38/26/18 (400); --font-body Inter 14px/1.55;
  --font-mono IBM Plex Mono 10–12px zaman kodu (.02–.08em, tabular-nums).
Yüzey: gölge YOK (yalnız sürüklenen klip 0 8px 20px); kart 1px var(--line).
  Radius 4px kontrol, 8px panel/klip.
Renk: tek accent plum #a12a6e (playhead + seçili klip); ok/warn/danger metinle.
  ink/bg 15.06:1, ink-soft/bg 7.21:1, accent-ink/accent 5.36:1, ink-faint/bg 3.61:1 (ara ızgara).
İmza: tek playhead (2px dikey accent) + iki kademeli ızgara (64px ana / 16px ara) + mono zaman kodu.
Hareket: enter 510ms cubic-bezier(.45,.08,.25,1) 15px stagger .042; scroll top 67% 530ms 18px once;
  pin scrub 1.3 (+190%, ekran başına 1); hover 165ms görsel 1.004. prefers-reduced-motion zorunlu.
Yasak: serif, hap radius, orantılı sayı, kayıt dışı akan playhead, blur/cam, renk-only kanal ayrımı.
Çıktı: bileşen kodu + tek paragraf not (playhead'i ve zaman kodunu nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: tek playhead, iki kademeli ızgara, kanal şeridi, mono zaman kodu.
- [ ] Hard-coded renk/gölge/radius yok; gölge yalnız sürüklenen klipte.
- [ ] Kontrast: 15.06 / 7.21 / 5.36 — hepsi eşik üstü.
- [ ] Zaman kodları tabular ve hizalı; odak halkası 2px accent + 2px offset.
- [ ] 390px'te yatay kaydırma kalıbı çalışıyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken pin ve playhead animasyonu duruyor.

## Token

```css
[data-style="timeline-editor"] {
  --bg: #f1efec; --bg-2: #e7e3de;
  --surface: #fbfaf8; --surface-2: #f5f2ee;
  --ink: #1e1a17; --ink-soft: #554d46; --ink-faint: #857b71;
  --accent: #a12a6e; --accent-ink: #fff4f8;
  --line: rgba(30,26,23,.16);
  --radius: 4px; --radius-lg: 8px;
  --shadow: 0 2px 8px rgba(30,26,23,.12); --shadow-hard: none;
  --font-display: "Archivo Black", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 2;
  --danger: #a8262c; --danger-ink: #ffffff;
  --ok: #1f6b3f; --warn: #7a5300;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="timeline-editor"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
