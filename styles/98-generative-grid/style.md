# 98 · Generative Grid

> **Bir cümlede:** 24px çizim ızgarasına hizalanmış yay, düğüm ve tarama izlerinden oluşan, her deseni bir tohum etiketiyle tekrar üretilebilir kılan çizici arayüzü.

| | |
|---|---|
| **Hissiyat** | hesaplı, serin, üretilmiş, "çizim masası" |
| **En iyi** | veri/araştırma ürünü vitrini, tasarım aracı, üretken sanat portfolyosu, teknik dokümantasyon landing'i |
| **Kaçın** | duygusal/lüks moda kampanyası, sıcak hikâye anlatımı, çocuk uygulaması — çizici dili mesafeli kalır |
| **Zorluk** | orta-yüksek (desenin gerçekten ızgaraya hizalanması) · **Erişilebilirlik** | iyi (gövde 15.51:1, accent üstü 5.15:1; faint 3.22:1 yalnız dekoratif) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `kit/tokens.css` → `[data-style="generative-grid"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Generative Grid, arayüzü bir **çizim masası** gibi kurar: 24px modül ızgara, kesişimlerde 3px **düğüm noktaları**, 45°/2px **tarama** ile doldurulmuş alanlar, eğri yaylar ve her panelde `seed` + koordinat etiketi. Kurucu kararları üç tanedir. Birincisi **ızgara gerçek**: tüm çizim 24px modüle hizalanır; "yaklaşık hizalı" görsel dağınıklık sayılır. İkincisi **tekrar üretilebilirlik**: her desen bir `seed` değeri taşır, aynı tohum aynı deseni verir. Üçüncüsü **ölçülü üretkenlik**: rastgeleliğin yerini seçilmiş varyasyon alır — `nth-child` ile 4'lük ritimde değişen düğüm yoğunluğu.

Kazandığı şey: **teknik güven** — çizici dili, ürünün "hesaplı" olduğunu görsel olarak kanıtlar. Feda ettiği şey: **samimiyet**; bu yüzden Jost gövde ve %8 ızgara opaklığı ile sertlik kırılır.

### Ne değildir
- **Blueprint Drawing (56) değildir:** 56 mavi zeminli teknik **resim** dilidir (kesit, ölçü oku, pafta); burada zemin açık gri ve desen **üretken** (tohumlu) — ölçü oku yok.
- **Swiss Design (02) değildir:** 02'de ızgara **görünmez bir disiplin**dir; burada ızgara **görünür çizim katmanıdır** (düğüm + tarama + koordinat).
- **Bauhaus (35) değildir:** 35 temel geometri + temel renklerle (kırmızı/sarı/mavi) afiş kurar; burada palet nötr + tek yeşil accent.
- **Optical Illusion (97) değildir:** 97 algıyı yanıltmak için frekans/açı kullanır; burada amaç yanıltmak değil **ölçmek** — her çizgi etiketlidir.
- **"Nokta ızgaralı tech landing" değildir:** kimlik `seed` etiketi + düğüm + 24px modül üçlüsüdür; nokta deseni tek başına yeterli sayılmaz.

### Nereden gelir
Plotter ve vektör çizim geleneği (1960'lar Benson plotter estetiği), Processing/p5.js ile yaygınlaşan "generative design" pratiği ve `randomSeed()` fikri: **rastgelelik tekrar üretilebilir olmalı**. Dijitalde tasarım aracı vitrinleri ve üretken sanat portfolyoları bu dili kurumsallaştırdı. Klişeye dönüşmemesi için korunacak detay: **24px modülün ve seed etiketinin** her desen panelinde bulunması.

### 3 saniyede tanıma testi
1. Zemin ya da bir panel 24px ızgarayla çizilmiş; çizgiler 1px ve eşit aralıklı.
2. Kesişimlerde küçük düğüm noktaları var; sayıları ekran başına 24'ü geçmiyor.
3. Bir alan 45° ince tarama ile doldurulmuş (düz dolgu değil).
4. Panellerin köşesinde `seed 0428` ya da `x:024 y:048` gibi mono etiket duruyor.
5. Display Michroma ile geniş ve büyük harf; gövde Jost, sayılar Share Tech Mono.

## Görsel imza
1. **24px çizim ızgarası:** iki eksen `1px` çizgi, `%8` opaklık; hero ve desen panelinde görünür.
2. **Düğüm noktası:** 3px, accent; yalnız kesişimlerde, ekran başına ≤24; kart köşesinde 2px halka ile.
3. **45° tarama:** `repeating-linear-gradient(-45deg, accent %30, 1px / 6px)`; yalnız bir alanda (desen panelinin bir bölgesi).
4. **Seed + koordinat etiketi:** mono 9–10px, `seed 0428`, `x:024 y:048`; her desen panelinde zorunlu.
5. **Michroma 400:** 34px, `0.03em`, büyük harf; Jost gövde 15px/1.58.
6. **Keskin geometri:** radius 1px / 4px; gölge yok.
7. **Hover dili:** 150ms'de butonun sağ üst köşesinde 3px düğüm belirir, ölçek `1.012`; gölge eklenmez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#e9edf0` | sayfa zemini (çizim masası grisi) | kart zemini |
| `--surface` | `#f7f9fa` | kart, panel, desen zemini | sayfa zemini |
| `--surface-2` | `#eef2f4` | çip, ikincil buton, tablo şeridi | birincil eylem |
| `--ink` | `#0f161a` | başlık, gövde, ızgara çizgisi | accent alanı |
| `--ink-soft` | `#414b51` | etiket, açıklama, eksen | başlık |
| `--ink-faint` | `#79858c` | koordinat etiketi, dipnot | etkileşimli metin |
| `--accent` | `#0b7d55` | düğüm, tarama, birincil buton, odak | geniş dolgu |
| `--accent-ink` | `#ffffff` | accent üstü metin | gövde metni |
| `--line` | `rgba(15,22,26,.13)` | kart kenarı, ızgara, ayırıcı | accent çizgisi |
| `--danger` / `--ok` / `--warn` | `#9c2b1f` / `#25a36d` / `#c1870c` | hata / onay / uyarı | desen rengi |

- Ölçülen kontrast (açık): `ink / bg` = **15.51:1** · `ink-soft / bg` = **7.59:1** · `accent-ink / accent` = **5.15:1** · `ink-faint / bg` = **3.22:1** (yalnız dekoratif).
- Tek vurgu kuralı: çizici yeşili yalnız düğüm, tarama, birincil eylem ve odak için; desenin tamamı yeşil olmaz.
- Yasak kombinasyon: accent zemin üstüne `--ink-soft` metin; ikinci doygun renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Michroma (`--font-display`) | 34px (mobil 22px) | 400 | 1.2 | `--tracking` 0.03em |
| H2 | Michroma | 22px | 400 | 1.32 | 0.03em |
| H3 | Michroma | 17px | 400 | 1.34 | 0.03em |
| Gövde | Jost (`--font-body`) | 15px | 400 | 1.58 | 0 |
| Küçük / açıklama | Jost | 13px | 400 | 1.5 | 0 |
| Etiket / mono | Share Tech Mono (`--font-mono`) | 10px | 400 | 1.35 | 0.14em (büyük harf) |

- Ölçek oranı **1.35** (10 → 15 → 22 → 34); kullanılan basamak sayısı 5: 10/13/15/22/34.
- Ölçü: `h1 { font-size: clamp(22px, 2.8vw, 34px) }`.
- Gövde metni maksimum satır uzunluğu: **62 ch**.
- Ağırlık kuralı: Michroma yalnız 400; Jost 400/500. 700 ve italik yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1340px üstü), 8 (768–1339), 4 (390–767) |
| Gutter | 20px |
| Container genişliği | 1300px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`), çizim modülü 24 |
| Breakpoint davranışı | 1340px: desen paneli 12 kolon + 7/5 içerik; 768px: 6/6; 390px: tek kolon, ızgara 24px korunur |

- Asimetri kuralı: ekran başına **1** tam kanama desen paneli; diğer bölümler 7/5 ya da 6/6.
- Bölüm ritmi: 60px (mobil 38px); art arda en fazla **2** desen paneli.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, 24px ızgara |
| Kart | `--surface` | yok | panel, tablo, liste |
| Yüzen katman | `--surface` + 1px accent kenar + 4px dış kılavuz | `none` | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; modalda `1px solid var(--accent)` + 4px dışında `1px` soluk kılavuz.
- Derinlik nereden gelir: **hiçbir yerden** — düz çizim masası; katman ayrımı ızgara ve düğümlerle.
- Radius: `--radius` 1px (buton, input, çip), `--radius-lg` 4px (kart, modal); 4px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 0 18px | `--radius` | 12px/400 Michroma, .06em | accent + accent-ink | hover %90 + köşe düğümü (150ms) · active 1px aşağı · focus 1px `--ink` halka · disabled %45 kesikli · loading 3 düğüm 900ms steps(3) |
| Buton (ikincil) | 40px | 0 18px | `--radius` | 12px mono | şeffaf + 1px `--ink` | hover `--surface-2` |
| Input | 40px | 0 12px | `--radius` | 14px mono | surface + `--line` | focus 1px accent halka + sağ üst düğüm · error `--danger` + `E-01` kodu |
| Kart | — | 18px | `--radius-lg` | başlık 22px Michroma | surface + `--line` + köşe düğümü + koordinat | normal · desen paneli (ızgara+tarama) · seçili (1px accent) |
| Chip | 22px | 0 8px | `--radius` | 10px mono, .12em | surface-2 + `--line` | seçili: accent zemin |
| Nav | 58px | 0 20px | 0 | 13px Jost | bg + alt çizgi + sağda cetvel tıkları | aktif: 1px alt çizgi + düğüm |
| Tablo satırı | 34px | 0 10px | 0 | 13px Jost / mono `r01…` | alt 1px `--line` | hover `--surface-2` · seçili sol 1px accent |
| Modal | — | 22px | `--radius-lg` | başlık 22px Michroma | surface + 1px accent | açılış 780ms · Esc kapatır · 4px dış kılavuz |
| Toast | 36px | 0 12px | `--radius` | 12px mono | surface-2 + sol 4px düğüm sütunu | 3600ms · 3 üst sınır |
| Grafik paleti | — | — | — | eksen 10px mono | accent → ink → ink-soft → warn | en çok 4 seri · 1px çizgi, 2px nokta, tarama dolgu |

- Odak halkası: butonda `outline: 1px solid var(--ink); outline-offset: 2px`; input'ta `1px accent`, offset 1px.
- Dokunma hedefi: 40px buton mobilde 44px; 34px satır mobilde 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 14px, 1px çizgi, yuvarlak uç yok; çizici kalem hissi |
| Fotoğraf | yok — desen ve tipografi |
| İllüstrasyon | CSS çizim: yay, düğüm, tarama, koordinat tıkları; hazır görsel yok |
| Doku | 24px ızgara (%8) + cetvel tıkları; grain 0 |
| Logo alanı | Michroma 13px + 16×16 düğüm işareti; 16px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | tam kanama desen paneli (ızgara+düğüm+tarama) + 7/5 içerik | `shots/01-landing.png` |
| Dashboard | orta | 4 kart, ikisinde koordinat etiketi + 4 serili grafik | `shots/02-dashboard.png` |
| Form | düşük | 40px alanlar, mono etiket, sağ üst düğüm | — |
| Liste / tablo | orta | 34px satır, `r01…` numara, cetvel tıkları | — |
| Boş durum | orta | boş ızgara + `seed 0000` + tek CTA | — |
| Onboarding | yüksek | 3 adım: tohum → modül → çizim | — |
| Pricing | orta | 3 kart, orta kart 1px accent çerçeve | — |
| Giriş / ödeme | çok düşük | desen yok, yalnız mono form | — |
| Modal | orta | 1px accent çerçeve + 4px dış kılavuz | — |
| Bildirim / toast | orta | sol 4px düğüm sütunu, mono metin | — |
| Hata | düşük | `E-01` mono kodu + `--danger` çerçeve | — |
| Profil / ayar | orta | 34px satır + modül/ızgara ayarı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — çizim ızgarası — koordinat ekseni, düğüm işaretleri, 24px ızgara.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 780ms | `cubic-bezier(.3,0,0,1)` | `opacity` + `translateY(10px)`, öğe başına 30ms stagger (çizgi çizilir gibi) |
| Scroll reveal | 900ms | `cubic-bezier(.3,0,0,1)` | `top 76%` tetiği, 24px, `once: true` |
| Basma | 150ms | `linear` | `translateY(1px)` |
| Hover | 150ms | `linear` | köşe düğümü belirir, görsel ölçek `1.012` |
| Pin / scrub | açık | `scrub 1.6` | desen paneli `+60%` mesafede sabitlenir, düğüm yoğunluğu çizime göre artar |
| Çizim | 780ms | `cubic-bezier(.3,0,0,1)` | tek seferlik; yay/tarama bir kez "çizilir", döngü yok |

- Ölçülebilir imza: `enter 0.78s / cb(.3,0,0,1) / 10px / 0.03` · `scroll top 76% / 0.9s / 24px / once:true` · `pin açık scrub 1.6 / +60%` · `hover 150ms / 1.012`.
- `prefers-reduced-motion`: tüm süreler 0.01ms; desen tek karede tamamlanır, pin/scrub kapanır.
- Bu stile yasak hareket: rastgele/kaotik hareket, sonsuz döngü, blur geçişi, bounce.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#e9edf0` | `#0e1215` |
| `--bg-2` | `#dfe5e9` | `#131a1e` |
| `--surface` | `#f7f9fa` | `#172025` |
| `--surface-2` | `#eef2f4` | `#1f2a30` |
| `--ink` | `#0f161a` | `#e8f0f3` |
| `--ink-soft` | `#414b51` | `#a7b6bd` |
| `--accent` | `#0b7d55` | `#3ddca0` |
| `--accent-ink` | `#ffffff` | `#04170f` |

- Ölçülen kontrast (koyu): `ink / bg` = **16.30:1** · `ink-soft / bg` = **9.02:1** · `accent-ink / accent` = **10.53:1** · `ink-faint / bg` = **4.91:1**.
- Koyu modda değişen başka ne var: ızgara opaklığı %8 → %10; koordinat etiketi `--ink-faint` kalır ama 4.91:1 ile okunur; accent açık nane yeşiline döner.
- `filter: invert()` yasak; palet elle yazılır.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **7.17:1** açık / **5.86:1** koyu · `--warn / bg` = **6.44:1** / **6.04:1** · `--ok / surface` = 5.15:1 / 5.31:1 (warn) · devre dışı buton metni = **7.79:1** / **7.91:1** · ghost buton kenarı = **3.86:1** / **5.52:1** (eşik 3:1).

## Zorunlu kurallar
- Çizim 24px modüle hizalı; "yaklaşık" hizalama yasak.
- Her desen panelinde `seed` ve koordinat etiketi görünür.
- Düğüm 3px, yalnız kesişimde, ekran başına ≤24.
- Tarama 45°, 2px çizgi, %30 opaklık; dolgu yerine kullanılmaz.
- Michroma 400, Jost 400/500, Share Tech Mono; başka aile yok.
- Ekran başına en fazla 1 tam kanama desen paneli.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Hizasız/rastgele görünen çizgiler (ızgara dışı çizim).
- Gradient, gölge, blur, cam yüzey.
- 4px üstü radius; Michroma 700; italik.
- Sonsuz dönen çizim; kaotik hareket.
- Desenü metnin arkasına koymak.
- Seed etiketi olmayan "üretken" desen.
- Uydurma veri/seed değeri; eksik içerik `{{seed}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.22:1** (koordinat etiketi ve dipnot); etkileşimli metin `--ink` 15.51:1, `--ink-soft` 7.59:1.
- Desen bilgi taşımaz; `seed` ve koordinat metin olarak da yazılır.
- Hareket: tek seferlik çizim + 150ms hover; `prefers-reduced-motion` pin/scrub dahil hepsini kapatır.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: açık zeminde 1px `--ink` halka 15.51:1; input'ta 1px accent halka (5.15:1) + düğüm ipucu.

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
| Desen "dağınık" görünüyor | çizim 24px modüle hizalı değil | tüm koordinatları 24'ün katına yuvarla |
| Ekran "tech şablon" gibi duruyor | seed/koordinat etiketi yok | her desen paneline `seed` + koordinat ekle |
| Göz yoruyor | düğüm sayısı 24'ü geçmiş | düğümleri kesişimlerin dörtte birine indir |
| Tarama kirli görünüyor | opaklık %30 üstü veya aralık 6px altı | %30 ve 6px aralıkta kal |
| Tipografi çizimle yarışıyor | Michroma 700 / büyük punto | 400 ve ≤34px |
| Koyu modda ızgara kayboluyor | opaklık %8'de kalmış | koyuda %10'a çıkar |

## Komşu stiller

- **Uyumlu:** `blueprint-drawing` — teknik çizim dili ortak; kesit/ölçü paftası 56'dan, üretken desen 98'den.
- **Uyumlu:** `swiss-design` — ızgara disiplini; tipografi 02, çizim katmanı 98.
- **Uyumlu:** `bauhaus` — geometrik form; ama 98'de renk bütçesi tek accent.
- **Yasak:** `claymorphism` — yumuşak hacim çizici keskinliğini bozar.
- **Yasak:** `frutiger-aero` — parlak/gradient yüzey ızgara çizimini okunamaz kılar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://processing.org/ | tohum (seed) mantığı ve çizim döngüsü |
| https://www.generative-gestaltung.de/2/ | ızgara tabanlı üretken kompozisyon kuralları |
| https://p5js.org/reference/p5/randomSeed/ | tekrar üretilebilir desen (seed) semantiği |
| https://fonts.google.com/specimen/Michroma | geniş teknik display ve 400 sınırı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Generative Grid (styles/98-generative-grid/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="generative-grid"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Michroma 400, buyuk harf) baslikta, --font-body (Jost) govdede,
           --font-mono (Share Tech Mono) etiket/sayi/koordinatta.
Yuzey: --bg / --surface / --surface-2; radius 1px/4px; golge YOK; ayrim 1px --line + 24px izgara.
Desen: 24px modul izgara, 3px dugum (<=24), 45 derece 2px tarama (%30); her panelde seed + koordinat etiketi.
Imza: enter 0.78s cubic-bezier(.3,0,0,1) 10px / stagger 0.03; scroll top 76% 0.9s 24px once:true;
      pin acik scrub 1.6 / +60%; hover 150ms scale 1.012.
Yasak: hizasiz cizim, golge/blur/gradient, 4px ustu radius, seed etiketsiz desen, sonsuz dongu.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (24px ızgara, düğüm, tarama, seed etiketi).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Çizim 24px hizalı; seed etiketi görünür.
- [ ] 390px genişlikte taşma yok, ızgara modülü korunmuş.
- [ ] `prefers-reduced-motion` açıkken pin/scrub ve çizim duruyor.

## Token

```css
[data-style="generative-grid"] {
  --bg: #e9edf0; --bg-2: #dfe5e9;
  --surface: #f7f9fa; --surface-2: #eef2f4;
  --ink: #0f161a; --ink-soft: #414b51; --ink-faint: #79858c;
  --accent: #0b7d55; --accent-ink: #ffffff;
  --line: rgba(15,22,26,.13);
  --radius: 1px; --radius-lg: 4px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.03em; --blur: 0px; --grain: 0;
  --danger: #9c2b1f; --danger-ink: #ffffff; --ok: #25a36d; --warn: #c1870c;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="generative-grid"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
