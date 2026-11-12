# 95 · Punk Fanzine

> **Bir cümleyle:** Fotokopi zine: toner grenli kâğıt, 2px mürekkep kenarlar, kes-yapıştır şeritler ve tek damga kırmızısı.

| | |
|---|---|
| **Hissiyat** | kaba, acil, el yapımı, öfkeli-neşeli |
| **En iyi** | etkinlik/line-up afişi, bağımsız yayın ve zine vitrini, müzik-punk markası, topluluk duyurusu |
| **Kaçın** | ödeme/güvenlik akışı, sağlık ve resmi form, kurumsal yatırımcı sunumu, yaşlı kullanıcı ağırlıklı arayüz |
| **Zorluk** | yüksek (kaosu ölçülü tutmak) · **Erişilebilirlik** | orta risk (döndürme + yüksek kontrast + gren) — ölçülen kontrast 15.17:1 / 5.10:1 |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="punk-fanzine"]` |
| **Kompozisyon** | `index` · `pill` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Punk Fanzine, 1970'lerin fotokopi zine estetiğidir: **gri kâğıt**, **1-bit mürekkep**, **2px kenar**, **sert ofset gölge** (`4px 4px 0`), kes-yapıştır şeritler (en fazla 2 öğe ±0.8–1.4°) ve tek **damga kırmızısı** (`#cf1f2b`). Tipografi bilinçli olarak heterojendir: başlıkta el yazısı **Kalam 700**, gövdede daktilo **Courier Prime**, etiketlerde **Share Tech Mono**; bir başlık satırında en fazla üç farklı ses (ranson punto) kullanılır.

Kazandığı şey: **aciliyet ve sahiplik**. Gren, döndürme ve zımba izleri sayfayı "biri az önce elle yapıştırdı" hissine getirir; bu yüzden etkinlik ve bağış çağrısı gibi hızlı eylem gerektiren bağlamlarda hatırlanır. Feda ettiği şey: **güven ve ölçülülük** — aynı dili ödeme/onay ekranına taşımak kullanıcıyı tedirgin eder; o ekranlarda stil yalnız tipografi ve kenar kalınlığıyla hatırlatılır, döndürme ve gren kapatılır.

### Ne değildir
- **Scrapbook (31) değildir.** Scrapbook polaroid, bant ve katman gölgesiyle **anı defteri** kurar (Fraunces/Inter, açık pastel); burada **1-bit mürekkep**, toner greni `.12`, el yazısı Kalam ve daktilo Courier var; gölge sert ofset.
- **Anti-Design (14) değildir.** Anti-design kasıtlı kaosu ızgara bozarak kurar (Anton/Space Grotesk, `cubic-bezier(.2,.9,.2,1)`, 0.035 stagger); burada ızgara korunur, **yalnız 2 öğe** döndürülür ve hareket **steps(2)**.
- **Neo-Brutalism (13) değildir.** Neo-brutalism parlak sarı/pembe bloklar ve 2px siyah kenarla "oyuncu" dil kurar; burada palet **gri kâğıt + siyah + damga kırmızısı**, gren yüksek, tipografi el yazısı/daktilo.
- **Pixel Art (24) değildir.** Pixel art 8-bit grid ve sınırlı paletle dijital nostalji kurar; burada bozulma **fotokopi** kaynaklıdır (toner, yarım ton), piksel grid yok.
- **"Sadece eğik kart" değildir.** Toner greni, 2px kenar, sert gölge ve ranson punto olmadan bu stil sadece dağınık bir düzendir.

### Nereden gelir
Zine, 1930'ların amatör dergilerinden (fanzine) 1970'lerde punk sahnesine geçti: fotokopi makinesi ucuzladı, üretim dağıtımdan ayrıldı, herkes kendi yayınını yapabildi. Estetiği **zorunluluktan** doğdu: toner bitiyor, kâğıt kayıyor, harfler kesilip yapıştırılıyor. Dijitalde 2010'lardan sonra bu dil "bağımsız/DIY" işareti olarak geri döndü; nedeni ölçülebilir — yüksek kontrast + el yazısı + tek renk, küçük ekranda bile kimlik taşır.

Klişeye düşmemesi için korunması gereken detay: **tek renk ve döndürme bütçesi**. İkinci bir accent eklemek, 4-5 öğeyi döndürmek veya gren yerine gradient kullanmak stili "ucuz retro tema"ya çevirir.

### 3 saniyede tanıma testi
1. Zemin **gri kâğıt ve grenli** mi (3px tarama, `--grain: .12`); kart yüzeyleri temiz mi?
2. Kenarlar **2px mürekkep** mi; bir öğede **sert ofset gölge** (blur'suz, 4px) var mı?
3. Başlık **el yazısı** mı (Kalam 700), gövde **daktilo** (Courier Prime), etiketler mono mu?
4. En fazla **2 öğe** hafifçe döndürülmüş mü (±0.8–1.4°), daha fazlası değil mi?
5. Tek renk **damga kırmızısı** mı; ekranın ≤ %10'unda mı ve yumuşak gölge hiç yok mu?

## Görsel imza
1. **Toner greni:** `--grain: .12` + `repeating-linear-gradient(0deg, … 0 1px, transparent 1px 3px)` yalnız `body` zemininde; kart yüzeyi `background-image: none`.
2. **2px mürekkep kenar:** kart, buton, input ve chip 2px `--ink`; radius 0.
3. **Sert ofset gölge:** `4px 4px 0 #0e0e0e` (koyuda `#4b4844`); yalnız hero görseli, modal ve buton hover'da; blur sıfır.
4. **Kes-yapıştır şerit:** en fazla 2 öğe `rotate(-1.4deg)` / `rotate(.8deg)`; şeritlerde 2px üst-alt kenar.
5. **Zımba izleri:** sol kenarda 18px'te iki adet 10×10px mürekkep kare (62px arayla; mobilde 44px).
6. **Yarım ton bandı:** sağ üstte 6px nokta ızgarası, opacity **.18**, gradyan maskeyle köşeye sınırlı.
7. **Ranson punto:** tek başlık satırında Kalam 46px + ters video mono blok + Courier 14.5px; üçten fazla ses yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#e6e4dd` | Sayfa zemini (gri kâğıt, gren burada) | Kart içi |
| `--bg-2` | `#dbd8d0` | Şerit zemini, alt bilgi | Geniş dolgu |
| `--surface` | `#f2f0e9` | Kart, modal, input (temiz kâğıt) | Sayfa zemini |
| `--surface-2` | `#d2cfc6` | İkincil şerit, hover satır | Metin arkası |
| `--ink` | `#0e0e0e` | Metin, 2px kenar, sert gölge | Damga kırmızısı zemin üstü |
| `--ink-soft` | `#43433f` | Lede, ikincil metin | 10px altı etiket |
| `--ink-faint` | `#6d6d68` | Dekoratif etiket, eksen | Etkileşimli metin |
| `--accent` | `#cf1f2b` | Birincil buton, damga kutusu, aktif işaret | Geniş zemin, gövde metni |
| `--accent-ink` | `#fff7f1` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(14,14,14,.24)` | Tablo çizgisi, ikincil kenar | Ana kenar (o 2px `--ink`) |

- Ölçülen kontrast: `ink / bg` = **15.17:1** · `ink-soft / bg` = **7.81:1** · `accent-ink / accent` = **5.10:1** · `ink-faint / bg` = **4.09:1**.
- Tek renk kuralı: damga kırmızısı ekranın **≤ %10**'u; ikinci renk (sarı, yeşil) hiçbir amaçla yok — durum metinle (`SATILDI`, `İPTAL`).
- Yasak kombinasyon: accent zemin + `--ink`; `--ink-faint` + `--surface-2` (3.3:1); gren üzerine 11px altı metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Kalam | 46px (mobil 30px) | 700 | 1.04 | 0.01em |
| H2 | Kalam | 28px | 700 | 1.1 | 0.01em |
| H3 | Kalam | 19px | 700 | 1.2 | 0.01em |
| Gövde | Courier Prime | 14.5px | 400 | 1.6 | 0 |
| Lede | Courier Prime | 14.5px | 400 | 1.6 | 0 (54ch) |
| Etiket / mono | Share Tech Mono | 11px | 400 | 1.4 | 0.12em |

- Ölçek oranı ≈ 1.9 (14.5 → 28 → 46); basamak sayısı 6 — zine'de zıplama bilinçli, ama 3'ten fazla ses karışmaz.
- Ölçü önerisi: `h1 { font-size: clamp(30px, 3.8vw, 46px) }`.
- Gövde metni maksimum satır uzunluğu: **54ch** (daktilo karakteri geniş, 66ch okunmuyor).
- Ağırlık kuralı: display 700 (Kalam el yazısı), gövde 400; 300/500 ara ağırlık yok (Kalam ve Courier Prime'da zaten yok, sahte ağırlık yasak).
- Başlıkta el yazısı 60px'i geçmez: daha büyük puntoda Kalam okunmaz, "kaba" olur ("kaba" ile "okunmaz" farkı bu stilin sınırı).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 8, "kesik şerit" 4) |
| Gutter | 16px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 900px altında döndürme 0.6°'ye iner, zımba aralığı 44px'e düşer |

- Asimetri kuralı: ekran başına **en fazla 2** döndürülmüş öğe (±0.8–1.4°); geri kalan her şey hizalı.
- Bölüm ritmi: art arda en fazla **3** blok aynı hizada; dördüncüde 3px mürekkep divider.
- Bölüm dikey boşluk 56px (mobil 36px); kart padding 18px; şerit yüksekliği 40px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + toner greni | — | Sayfa |
| Kart | `--surface` + 2px `--ink` | `none` | Panel, line-up, KPI |
| Kesik şerit | `--bg-2` + 2px üst/alt | `none` | Program şeridi, logo bandı (döndürülmüş) |
| Yüzen katman | `--surface` + 3px `--ink` | `--shadow-hard` | Modal, dropdown |

- Kenarlık formülü: ana kenar `2px solid var(--ink)`; ikincil çizgi `1px solid var(--line)`; şeritlerde yalnız üst-alt 2px.
- Derinlik nereden gelir: **sert ofset gölge + 2px kenar**; yumuşak gölge, blur ve gradient yok.
- Radius: `--radius` 0px (her şey) · `--radius-lg` 2px (yalnız modal). Pill yok.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 12px 16px | 0px | 11px/400 mono uppercase, .12em | `--accent` / `--accent-ink`, 2px `--ink` | hover sert gölge + translate(-1px,-1px) 60ms · active gölge yok · focus 3px ink + 2px offset · disabled opacity .4 üstü çizili · loading `***` 120ms |
| Buton (ikincil) | 44px | 12px 16px | 0px | 11px/400 mono | şeffaf / `--ink`, 2px `--ink` | hover `--surface-2` + sert gölge · focus aynı |
| Input | 44px | 0 10px | 0px | 14.5px/400 Courier Prime | `--surface` + 2px `--ink` | focus 3px ink + 2px offset · error `--accent` kenar + `!` + mono açıklama · disabled opacity .4 |
| Kart | — | 18px | 0px | H3 Kalam 19px | `--surface` + 2px `--ink`, gölge yok | en fazla 2 kart 0.8° döndürülür |
| Chip | 22px | 3px 6px | 0px | 10px/400 mono uppercase | ters video (`--ink` zemin / `--bg` metin) | accent varyantı damga kırmızısı |
| Nav | 52px | 0 28px | 0 | marka Kalam 22px + mono 11px uppercase | `--bg` + alt 2px `--ink` | aktif: 3px accent blok; pasif `--ink-soft` |
| Tablo satırı | 36px | 8px 10px | 0 | saat mono 12px, sanatçı Courier 14px | dış çerçeve 2px `--ink`, satır altı 1px `--line` | hover `--surface-2` · seçili: sol 3px accent |
| Modal | — | 24px | 0px | H2 Kalam 28px | 3px `--ink` + sert gölge, perde %60 | kapat butonu 44×44px |
| Toast | 40px | 10px 14px | 0px | 11px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 8px accent kare, 2400ms |
| Grafik paleti | — | — | — | eksen 11px mono | `--accent`, `--ink` (en fazla 2 seri) | 2px mürekkep çerçeve, el çizimi sütun |

- Odak halkası: `outline: 3px solid var(--ink); outline-offset: 2px` — kalın halka el çizimi diliyle uyumlu; accent zeminli butonda `outline-color: var(--accent-ink)`.
- Dokunma hedefi: en az 44×44px; zımba izleri dekoratif, etkileşimli değil.
- Döndürülmüş öğeler `transform` ile döner; metin **seçilebilir kalır** ve `prefers-reduced-motion` açıkken döndürme korunur (statik açı bilgi taşımaz, dekoratiftir).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px kalın çizgi veya elle çizilmiş ok/yıldız/çarpı (Kalam); en fazla 3 işaret / ekran |
| Fotoğraf | Fotokopi estetiği: 1-bit siyah-beyaz, yüksek kontrast, grenli; renkli fotoğraf yasak |
| İllüstrasyon | El çizimi işaretler (ok, yıldız, kaba kutu); başka illüstrasyon yok |
| Doku | Toner greni `.12` + 3px yatay tarama + yarım ton nokta bandı (%18, yalnız sağ üst) |
| Logo alanı | El yazısı kelime markası (Kalam 700), 1.2° döndürülmüş, 16px güvenli boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Ranson punto başlık + zımba izleri + yarım ton bandı | `shots/01-landing.png` |
| Dashboard | orta | 2px kenarlı kartlar, mono sayılar; döndürme yok | `shots/02-dashboard.png` |
| Form | düşük | 2px kenar alanlar, 3px odak halkası, `!` hata işareti | — |
| Liste / tablo | orta | Line-up tablosu: saat mono, sanatçı daktilo | — |
| Boş durum | orta | El çizimi `?` + tek cümle + tek buton | — |
| Onboarding | yüksek | 3 adım, her adımda tek damga kutusu | — |
| Pricing | orta | 3 kart; destek bandı damga kırmızısı, kesik şerit döndürülmüş | — |
| Giriş / ödeme | çok düşük | Döndürme ve gren kapanır; 2px kenar + mono form kalır | — |
| Modal | orta | 3px mürekkep çerçeve + sert gölge, perde %60 | — |
| Bildirim / toast | orta | Koyu zemin, 8px accent kare, 2400ms | — |
| Hata | düşük | `--accent` kenar + `!` + mono açıklama | — |
| Profil / ayar | orta | Ayarlar 2px kartlarda; döndürme yok, mono etiketler | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — fotokopi kolaj — kes-yapıştır şerit, damga, eğik kart.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 60ms | `steps(2, end)` | `box-shadow` kalkar, `translate(0,0)` |
| Geçiş / sayfa | 120ms | `steps(2, end)` | `opacity` (kesik) |
| Giriş (enter) | **150ms** | `steps(2, end)` | `opacity` + `translateY(30px)`, **stagger 50ms** |
| Kaydırma (scroll) | **180ms** | `steps(2, end)` | trigger **`top 96%`**, offsetY **34px**, `once: false` |
| Hover | **60ms** | `linear` | görsel ölçek **1.03** (en kısa hover) |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 200ms | `steps(2, end)` | damga kutusu 2 kademede büyür |

- İmza ölçüsü: enter **0.15s / 30px / stagger 0.05** · scroll **0.18s / `top 96%` / 34px / `once: false`** · hover **60ms / 1.03** · pin **kapalı** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; `once: false` animasyonu durur, toner dokusu ve döndürme statik kalır.
- Bu stile yasak hareket: yumuşak ease-out/spring, parallax, sürekli döngü, blur geçişi, titreme (jitter) animasyonu.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#e6e4dd` | `#0f0f0f` |
| `--bg-2` | `#dbd8d0` | `#151514` |
| `--surface` | `#f2f0e9` | `#1a1a19` |
| `--surface-2` | `#d2cfc6` | `#242423` |
| `--ink` | `#0e0e0e` | `#ececea` |
| `--ink-soft` | `#43433f` | `#adadab` |
| `--ink-faint` | `#6d6d68` | `#838381` |
| `--accent` | `#cf1f2b` | `#f0434f` |
| `--accent-ink` | `#fff7f1` | `#100b0b` |
| `--line` | `rgba(14,14,14,.24)` | `rgba(236,236,234,.22)` |

- Koyu mod **gece fotokopisi**: zemin `#0f0f0f`, kart `#1a1a19`; accent açılır (`#f0434f`) çünkü koyu kırmızı koyu zeminde kaybolur.
- Sert ofset gölge koyuda siyah olsaydı görünmezdi: `--shadow-hard` **kâğıt grisine** (`#4b4844`) döner — yazılı istisna, `token-block.css` koyu bloğunda açıkça durur.
- Gren koyuda `%6` çizgiye düşer (açık opaklık koyu zeminde toner lekesi gibi okunmaz, gürültü olur).
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **16.20:1** · `ink-soft/bg` = **8.53:1** · `accent-ink/accent` = **5.23:1** · `ink-faint/bg` = **5.05:1**.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **-:1** açık / **-:1** koyu · `--warn / bg` = **-:1** / **-:1** · `--ok / surface` = -:1 / -:1 (warn) · devre dışı buton metni = **6.91:1** / **7.59:1** · ghost buton kenarı = **4.01:1** / **5.47:1** (eşik 3:1).

## Zorunlu kurallar

1. **Toner greni:** `--grain: .12` + 3px tarama yalnız zemin katmanında; kart/modal yüzeyi temiz.
2. **2px mürekkep kenar:** kart, buton, input, chip; radius 0; sert gölge `4px 4px 0` yalnız hero/modal/hover.
3. **Döndürme bütçesi:** ekran başına en fazla 2 öğe, ±0.8–1.4°; döndürülmüş öğe metni seçilebilir kalır.
4. **Ranson punto:** başlık satırında en fazla 3 ses (Kalam / mono ters video / Courier).
5. **Tek renk:** damga kırmızısı ekranın ≤ %10'u; durum bilgisi metinle (`SATILDI`, `İPTAL`).
6. **Zımba + yarım ton:** zımba izleri yalnız sol kenarda 2 adet; yarım ton bandı yalnız sağ üstte 1 adet.

## Yasaklar

- Yumuşak gölge, blur, gradient, cam yüzey.
- Serif/geometrik sans display; iki farklı el yazısı ailesi.
- Renkli fotoğraf, pastel palet, ikinci accent (sarı/yeşil).
- 2px üstü radius, pill buton, yuvarlak chip.
- 3'ten fazla döndürülmüş öğe; döndürmeyi metin gövdesine uygulamak.
- Sürekli döngü, marquee, titreme (jitter) animasyonu, parlama.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **4.09:1** — yalnız dekoratif etiket ve eksen yazısı; etkileşimli metin olamaz. `accent-ink/accent` = **5.10:1** (damga üstü metin eşiği geçer).
- Gren (`.12`) 11px altı metinde okunurluğu düşürür: mono etiketler en az 10px, gövde 14.5px ve gren metnin arkasına değil sayfa zeminine uygulanır.
- Döndürme dekoratiftir, bilgi taşımaz; `prefers-reduced-motion` açıkken de açı korunur (hareket değil, statik eğim).
- Hareket: `steps(2)` kesik ve çok kısa (150/180ms); vestibüler risk düşük, yine de reduced-motion'da tümü 0.01ms.
- Şeffaf yüzey yok (`--blur: 0`); `color-mix` desteklenmezse tarama dokusu düz zemine düşer (işlevsel kayıp yok).
- Odak görünürlüğü: 3px mürekkep halka (15.17:1) her zeminde net; accent zeminli butonda `--accent-ink` halka.

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
| "Ucuz retro tema" | ikinci renk + gradient + yumuşak gölge eklenmiş | Tek damga rengi + sert gölge; gradient/blur kaldır |
| Okunmuyor | gren metnin arkasında, 11px altı punto | Gren yalnız zeminde; gövde 14.5px, etiket 10px |
| Sayfa dağınık | 4-5 öğe döndürülmüş | Döndürme bütçesi 2; kalanı hizalı |
| "El yazısı her yerde" | Kalam gövde metninde kullanılmış | Kalam yalnız başlık; gövde Courier Prime |
| Kenarlar zayıf | 1px kenar + gölge | 2px `--ink` kenar + `4px 4px 0` sert gölge |
| Koyu modda gölge kayboluyor | siyah sert gölge | Koyu blokta `--shadow-hard: 4px 4px 0 #4b4844` |

## Komşu stiller

- **Uyumlu:** `anti-design` — kırık hiza dili ortak; anti-design yalnız tek bölümde, accent'i ezmeden.
- **Uyumlu:** `scrapbook` — kâğıt/kolaj dili ortak; scrapbook polaroid bantlarını bu stile taşımadan kullan.
- **Uyumlu:** `neo-brutalism` — 2px kenar ve düz renk ortak; neo-brutalism'in parlak paletini kullanma.
- **Yasak:** `claymorphism` — şişkin yuvarlak form ve yumuşak gölge fotokopi dilini yok eder.
- **Yasak:** `glassmorphism` — blur/şeffaflık 1-bit mürekkep kontrastını kırar.
- **Yasak:** `ethereal` — sis ve nefes animasyonu zine'in kesik hareket diliyle çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Zine | fotokopi üretim, zımba/kes-yapıştır dili |
| https://en.wikipedia.org/wiki/Photocopier | toner greni, 1-bit kontrast, kopyalama bozulması |
| https://en.wikipedia.org/wiki/Riot_grrrl | el yazısı + damga tipografisi, ranson punto geleneği |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | 3px mürekkep odak halkası ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Punk Fanzine (styles/95-punk-fanzine/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="punk-fanzine"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Kalam 700 (H1 46px / 1.04 / +0.01em, mobil 30px), govde Courier Prime 400 14.5/1.6
  (<= 54ch), etiket Share Tech Mono 11px .12em uppercase. Ranson punto: tek satirda en fazla 3 ses.
Yuzey: YUMUSAK GOLGE YOK. Kart/buton/input 2px var(--ink) kenar, radius 0; sert ofset golge
  var(--shadow-hard) yalniz hero gorseli, modal ve buton hover'da. Zemin toner grenli (3px tarama + --grain .12),
  kart yuzeyi temiz.
Renk: gri kagit #e6e4dd + murekkep #0e0e0e + TEK damga kirmizisi #cf1f2b (ekranin <= %10'u).
Imza: en fazla 2 oge +/-0.8-1.4 derece dondurulmus kes-yapisitr serit; sol kenarda 2 zimba izi (10px kare);
  sag ustte yarim ton nokta bandi (%18, maskeli); ranson punto baslik; ters video chip.
Hareket: enter 150ms steps(2,end) 30px stagger 50ms; scroll top 96% / 180ms / 34px / once:false;
  hover 60ms imageScale 1.03; pin kapali. prefers-reduced-motion zorunlu.
Yasak: yumusak golge, blur, gradient, serif/geometrik display, renkli fotograflar, ikinci accent,
  2px ustu radius, 3'ten fazla dondurme, dongu/marquee/jitter.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (toner greni + 2px kenar + sert gölge + zımba).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (15.17:1), accent üstü ≥ 4.5:1 (5.10:1).
- [ ] Odak halkası görünür (3px + 2px offset), dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok; döndürme 0.6°'ye iniyor.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="punk-fanzine"] {
  --bg: #e6e4dd; --bg-2: #dbd8d0;
  --surface: #f2f0e9; --surface-2: #d2cfc6;
  --ink: #0e0e0e; --ink-soft: #43433f; --ink-faint: #6d6d68;
  --accent: #cf1f2b; --accent-ink: #fff7f1;
  --line: rgba(14,14,14,.24);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: 4px 4px 0 #0e0e0e;
  --font-display: "Kalam", "Archivo Black", system-ui, sans-serif;
  --font-body: "Courier Prime", ui-monospace, monospace;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0.12;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="punk-fanzine"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir (koyuda `--shadow-hard` kâğıt grisine döner).
