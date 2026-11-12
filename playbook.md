# Playbook · Tekdüze Tasarımı Kırma

Bu dosya "hangi stil" sorusundan sonraki soruyu yanıtlar: **stili uygulamaya nasıl oturturum, tekdüzeleşmeden nasıl çeşitlendiririm.**

---

## 1 · Tekdüzelik neden oluşur

| Sebep | Belirti | Çözüm |
|---|---|---|
| Tek yüzey tipi | Her ekran aynı beyaz kart + aynı gölge | 3 yüzey seviyesi tanımla: zemin, kart, yüzen katman (her biri farklı davranır) |
| Tek punto ritmi | Her başlık 20px, her gövde 14px | Ölçek zıplaması: 1.25× yerine 1.5–1.7× (14 → 21 → 32) |
| Renk sadece "marka" | Buton dışında renk yok | Renk **kod** taşısın: durum, kategori, öncelik |
| Simetri takıntısı | Her bölüm ortalanmış, eşit | 1 asimetrik bölüm / ekran (7/5 veya 8/4) |
| Süs yasağı | Her şey düz; hiçbir imza yok | 1 imza öğe: doku, hairline, özel köşe, özel geçiş |
| Aynı hareket | Her şey 150ms fade | Hareket imzası: 2–3 farklı süre/eğri, amaca göre |

**Kural:** Bir ekranda en az **bir** "bu markaya ait" öğe olmalı — stil dosyasındaki *Görsel imza* maddelerinden biri.

---

## 2 · Stil seçimi ve karıştırma

### 2.1 Tek stil (önerilen başlangıç)
Ürün kişiliğine göre 1 stil seç, tüm token'ları ondan al. En hızlı ve en tutarlı yol.

### 2.2 Baskın + garnitür (2 stil, üst sınır)
- **Baskın %80:** renk, tipografi, yüzey, radius → tek stilden.
- **Garnitür %20:** sadece *bir* katmanda (ör. hero görseli, nav, boş durum illüstrasyonu).
- Garnitür, baskının değişkenlerini ezmez; sadece kendi bileşeninde `data-style` taşır.
- **Koyu modda sarmalayıcı iki öznitelik taşır:** `<div data-style="liquid-glass" data-theme="dark">`.
  Koyu bloklar bileşik seçicidir (`[data-theme="dark"][data-style="Y"]`, aynı elemanda); yalnız
  `data-style` verirsen garnitür açık paletle boyanır. `kit/check-composition.mjs --browser` bunu DOM'da ölçer.

```
<html data-style="minimalism">          <!-- baskın -->
  <header data-style="liquid-glass">     <!-- garnitür: sadece nav -->
  <main> ... minimalism token'ları ... </main>
  <section data-style="editorial-design"><!-- garnitür: sadece hikâye bölümü -->
</html>
```

### 2.3 Uyumlu / yasak ikili

| Uyumlu | Neden |
|---|---|
| minimalism + liquid-glass | cam, sade zeminde tek katman olarak okunur |
| swiss-design + bento-grid | ikisi de ızgara disiplini |
| editorial-design + luxury-typography | aynı serif ailesi, farklı yoğunluk |
| japandi + wabi-sabi | aynı sıcaklık ve doku dili |
| neo-brutalism + memphis | ikisi de kalın kontur + düz renk |
| cybercore + cyberpunk | terminal + neon, aynı dünya |
| aurora-ui + glassmorphism | biri zemin, diğeri katman |
| claymorphism + dopamine-ui | pastel + canlı, aynı oyuncu ton |

| Yasak | Neden |
|---|---|
| glassmorphism + neumorphism | iki farklı ışık fiziği; ikisi de "yüzey" iddiasında |
| minimalism + maximalism | boşluk politikası çelişir |
| swiss-design + scrapbook | ızgara vs bilinçli kaos |
| art-deco + pixel-art | çözünürlük ve dönem çelişir |
| 3+ stil | hiyerarşi değil gürültü üretir |

**Kural:** 3. stili eklemek istiyorsan önce 2.'yi sil.

---

## 3 · Tekdüzeliği kıran 7 kaldıraç

1. **Yüzey hiyerarşisi** — zemin / kart / yüzen katman. Üçü farklı gölge, farklı radius, farklı opaklık.
2. **Tipografik kontrast** — aynı ekranda 2 uç: çok büyük başlık + çok küçük etiket (11px tracked). Orta boyutları azalt.
3. **Renk kodu** — renk dekorasyon değil bilgi taşısın (durum, kategori, öncelik). Gri skalada 4 ton yeter.
4. **Doku** — %3–6 grain, 1px hairline, hafif iç gölge. Düz yüzeyi "malzeme" yapar.
5. **Düzen ritmi** — 3 bölüm aynı hizada olmasın: biri tam genişlik, biri 2 kolon, biri dar + boşluklu.
6. **Mikro-hareket** — sadece 3 yerde: basma, geçiş, ödül. Her yere animasyon = hiçbir yerde animasyon.
7. **İmza öğe** — 1 tane, tekrar eden, markaya ait: köşe braket, hairline altın çizgi, kalın gölge, cam nav, pixel ikon.

---

## 4 · Ekran bazlı stil atama

Stil yoğunluğu ekranın işine göre değişmeli. Operasyonel ekranda "gösteri", vitrin ekranında "sadelik" hata.

| Ekran | Stil yoğunluğu | Uygulama |
|---|---|---|
| Landing / hero | **yüksek** | Tam stil: büyük başlık, doku, gradient, imza öğe |
| Onboarding | yüksek | Tek fikir/sayfa, güçlü illüstrasyon, tek CTA |
| Boş durum | orta-yüksek | Stilin karakteri burada en çok görünür; 1 cümle + 1 eylem |
| Dashboard | **düşük** | Nötr zemin, stil sadece tipografi/radius/renk kodunda |
| Liste / tablo | düşük | Yoğunluk önde; stil satır çizgisi ve sayı tipografisinde |
| Form | düşük | Konvansiyon kazanır; stil sadece odak ve kenarlıkta |
| Ödeme / silme / giriş | **çok düşük** | Stil 0'a yakın; güven ve netlik |
| Bildirim / toast | orta | Stilin renk ve radius dili; hareket imzası |
| Profil / ayar | orta | Bento veya bölüm ritmi; süs minimal |

**Pratik:** Uygulamada `data-style` seçimi sayfa düzeyinde; istisna ekranlar için `data-style="plain"` (nötr) tanımla.

---

## 5 · Token mimarisi

```
tokens.css        → stillerin değişken setleri ([data-style="..."])
components.css    → buton, kart, input, tablo: sadece var() tüketir
app.css           → sadece düzen (grid, spacing); stil bilgisi içermez
```

Kurallar:
- Bileşenlerde **hard-coded renk/gölge/radius yok**; hepsi `var(--...)`.
- Stil başına en fazla 3 ek değişken (ör. `--shadow-hard`, `--grain`, `--blur`).
- Yeni bileşen eklerken 35 stilin hepsinde nasıl göründüğünü `kit/gallery.html`'e kart ekleyerek kontrol et.
- Koyu mod: stilin kendi paleti varsa ayrı `[data-style="x"][data-theme="dark"]` bloğu yaz; otomatik `filter: invert()` yasak.

---

### 5.1 Kompozisyon ekseni (şema v3) — iskelet de bir tokendır

Renk ve tipografi iki stili ayırır; **aynı iskelet** ayırmaz. 145 stilin hero kompozisyonu aynı
olduğunda katalog "aynı sitenin 145 boyası" olur (ölçüldü: v4'te tek parmak izi = %100).
Bu yüzden kompozisyon token düzeyine taşındı: `tokens.json → layout { hero, nav, density }`.

| Eksen | Arketipler | Ne değişir |
|---|---|---|
| `hero` | split · split-reverse · centered · type · fullbleed · product · index · sticky | kopya/medya ilişkisi, ekran sayısı, hiyerarşi |
| `nav` | inline · pill · split · utility · rail | gezinme modeli (üst satır, hap, yan ray…) |
| `density` | sparse · balanced · dense | ekran başına öğe sayısı ve boşluk |

Kurallar:
1. **Tek kaynak** `kit/render/layouts.json`; markup `kit/render/partials/`; stiller yalnız CSS yazar.
2. Arketip seçicileri `[data-layout]` / `[data-nav]` ile nitelenir → iskelet kazanır, iç öğe stilleri çalışır.
3. Atama **deterministiktir** (`kit/assign-layouts.mjs`): slug + aile + etiket puanlanır, eşitlik hash ile bozulur.
   Elle "hissiyat" seçimi yapılmaz; istisna gerekiyorsa önce sözlüğe kural eklenir.
4. Tavanlar ölçülür: tek `hero|nav` ≤ %25, tek hero ≤ %35, aile ≥8 stilde ≥3 farklı hero,
   her arketip ≥4 stilde canlı (`kit/check-layout.mjs`, `--self-test` ile kanıtlı).
5. Hareket imzası neyse kompozisyon da odur: **aile içinde kopya yasak**, muafiyet yok.

Ayrıntı: README § Kompozisyon ekseni · dağılım: `kit/dist/composition.md`.

---

## 6 · Hareket imzası

Stil, hareketin süresi ve eğrisiyle de ayrışır. Aynı `150ms ease` her yerde tekdüzelik yaratır.

| Aile | Süre | Eğri | İmza |
|---|---|---|---|
| Sade (minimal, swiss, editorial, luxury) | 120–200ms | `ease-out` | 4–8px yükselme, opacity |
| Yüzey (glass, liquid, aurora, neu, clay) | 200–320ms | `cubic-bezier(.34,1.4,.64,1)` | basınca gömülme, yay |
| Cesur (brutal, anti, acid, memphis, dopamine) | 90–240ms | `ease-out` + snap | ofset gölge sıçraması, pop |
| Retro (y2k, vapor, synth, cyber, pixel) | 120–400ms | `steps(4)` veya `linear` | glitch, scanline, ızgara kayması |
| Sanatsal (surreal, ethereal, bohem, scrapbook) | 300–600ms | `ease-in-out` | nefes, salınım, çizim |

`prefers-reduced-motion` → tüm süreler 0.01ms (tokens.css bunu global olarak yapar).

### 6.1 Sekans reçeteleri (estate / landing)

Sahne kareleri tek bir animasyonu değil bir **sekansı** anlatır: `shots/27-motion.png`
levhası üç beat'i gösterir — giriş, scroll reveal, pin+scrub. Aile başına sekans:

| Aile | Giriş | Scroll reveal | Pin / scrub | Hover |
|---|---|---|---|---|
| Sade (01–07) | 0.6s `ease-out`, y 16, stagger 0.05 | 0.7s, `top 84%`, y 24 | pin yok | 200ms, görsel scale 1.015 |
| Yüzey (08–12) | 0.8s `power3.out`, y 24, blur 6→0 | 0.9s, stagger 0.06 | 1 pin, scrub 1.0 | 240ms, cam parlaması yok, opacity |
| Cesur (13–18) | 0.35s `out`, y 12, snap | 0.45s, stagger 0.03 | pin yok, kesme | 120ms, scale 1.03 |
| Retro (19–27) | 0.5s `linear` / `steps(6)` | 0.6s, satır maske | 1 scrub (dijital ise 0.8) | 160ms, glitch yok |
| Sanatsal (28–34) | 1.2s `ease-in-out`, y 32, maske | 1.1s, stagger 0.12 | pin yok, nefes ≤1 | 400ms, yumuşak |
| Geometrik / Tipografik (35–37) | 0.5s `expo.out`, satır satır | 0.7s, stagger 0.08 | 1 pin (35–36), 37'de yok | 160ms, ölçek sıçraması |
| Organik (38) | 1.0s `power2.out`, y 28 | 0.9s, stagger 0.1 | pin yok | 280ms |
| Yeni Dalga (39–40) | 0.7s `expo.out`, y 20 | 0.8s, blur 8→0 | 1 pin, scrub 1.2 | 220ms |
| Zamansız (41–44) |
| Teknik (45–46) | 0.18s `steps(3,end)`, y 0; satır satır opacity | 0.2s, `top 90%`, offset 8, `once` | pin yok | 90ms, görsel scale 1.0 | 0.8s `power3.out`, y 24; maskeli başlık 0.9s | 0.9s, `top 82%`, stagger 0.06, `once` | **1 pin**, scrub 1.1, `scale 1.04→1` | 240ms, görsel scale 1.02 |

Kurallar (araştırma: Kompose, Inshaal, MengTo cinematic-scroll, W3C 2.2.2/2.3.3):

1. **Tek saat:** GSAP + Lenis birlikte kullanılıyorsa Lenis `raf` çağrısı GSAP ticker'ından beslenir;
   iki ayrı `requestAnimationFrame` döngüsü pin'leri titretir. `duration 0.8–1.2`, mobilde smoothing kapalı.
2. **Sadece `transform`/`opacity`** (blur yalnız ≥900px genişlikte, ≤8px); `top/left/width/height` animasyonu yasak.
3. **Bir observer/batch:** `ScrollTrigger.batch` veya tek `IntersectionObserver`; bileşen başına observer yok.
4. **Reveal bir kez:** `once: true`; geri kaydırınca tekrar oynayan reveal okuma ritmini bozar.
5. **Sadece başlık ve bölüm girişi** animate edilir; her paragraf animasyonlu ise hiçbiri okunmaz.
6. **Pin bütçesi:** ekran başına en fazla **1** pin; mobilde pin kapalı, scrub yerine statik.
7. **Poster LCP'dir:** hero'da video varsa LCP elemanı **poster görsel**tir; video `preload="none"` + `poster`
   ile arkadan gelir. Video >5s otomatik oynuyorsa **duraklat** düğmesi zorunlu (WCAG 2.2.2).
8. **Hareket kapatılabilir:** `prefers-reduced-motion` CSS *ve* JS tarafında dallanır (2.3.3); parallax
   bu kapsamda adı geçen harekettir — kapatma yolu yoksa parallax kullanılmaz.
9. **Sayfa geçişi** 320ms opacity + 8px; View Transitions kullanılıyorsa reduced-motion'da cross-fade'e düşer.
10. **Yasak:** custom cursor, scroll hijack, yatay kaydırma, aynı sayfada iki scrub, sürekli dönen iğne,
    marquee >1, saniyede 3'ten fazla flash. **Tek kaynak:** `kit/motion/policy.json` — laboratuvar bu
    desenleri yalnız `teachingOnly` gerekçesiyle sergiler, katalog koreografisine atanamaz
    (kapı: `node kit/build-motion-lab.mjs --check`).

### 6.2 · Stil başına animasyon imzası

Katalog 145 stile çıkarken "aynı aile, aynı animasyon" tekdüzeliğin en hızlı geri gelme yoludur.
Her stilin `tokens.json` içindeki `motion.sequences` bloğundan **7 parametreli bir imza** çıkarılır
ve kapı bunu ölçer (`node kit/motion-check.mjs` · §6.2'yi kaynak alır).

| # | Parametre | Kaynak | Örnek |
|---|---|---|---|
| 1 | `enter.duration` | `motion.sequences.enter.duration` | `0.6s` |
| 2 | `enter.ease` | `motion.sequences.enter.ease` | `ease-out`, `power3.out`, `steps(3, end)` |
| 3 | `enter.offsetY` | `motion.sequences.enter.offsetY` | `16px` (saf opacity'de `0px`) |
| 4 | `enter.stagger` | `motion.sequences.enter.stagger` | `0.05` (saniye) |
| 5 | `scroll.trigger` | `motion.sequences.scroll.trigger` | `top 84%` |
| 6 | `scroll.duration` | `motion.sequences.scroll.duration` | `0.7s` |
| 7 | `hover.duration` | `motion.sequences.hover.duration` | `160ms` |

**Kural — aile içinde en az 2 fark.** Aile = `motion.family` bandı (§6.1 tablosu). Aynı ailedeki
iki stilin imzası 7 parametrenin 5'inde aynıysa (yani yalnız 2 parametre ayrışıyorsa) bu *sınırda*dır:
normal modda uyarı, `--strict` modda hata. 6 veya 7 parametre aynıysa **kopya**: her modda hata,
exit 1. Hata mesajı iki stil adını, çakışan parametreleri ve farklı olanları yazar. Aile dışı
karşılaştırma serbesttir (Sade ile Retro aynı imzayı paylaşabilir).

**Süre bütçeleri (kapı zorlar).** `enter.duration` ≤ **1.2s**, `scroll.duration` ≤ **1.2s**
(lüks hareket üst sınırı; `pin.scrub` > 1.4 uyarı). Stagger girişi bu bütçenin içinde kalmalı:
`stagger × görünür öğe sayısı + enter.duration ≤ ~2s`, yoksa sayfa "geç yükleniyor" hissi verir.

**Reduced-motion zorunlu.** Her stil `prefers-reduced-motion: reduce` altında hareketi durdurur;
global blok `kit/tokens.css`'te durur ve kapı o bloğun varlığını her koşuda doğrular. Stil bazlı
`reduced` notu (`motion.reduced` veya `motion.sequences.reduced`) yoksa uyarı düşer. JS ile sürülen
hareket (parallax, pin) `matchMedia('(prefers-reduced-motion: reduce)')` ile dallanır — CSS tek başına yetmez.

### 6.3 · Hareket sözlüğü (şema v4) — desen de bir tokendır

`motion.sequences` **sayıyı** tanımlar (süre/eğri/offset); **neyin** hareket ettiğini tanımlamaz.
Ölçüm: 110/145 stil yalnız `opacity+transform`, 94/145 scroll = `reveal`, en kalabalık parmak izi %51 →
"145 imza" iddiası sayıda doğru, ifadede tekdüze. Bu yüzden `tokens.json → motion.choreography`:

```
motion: {
  sequences: { enter, scroll, pin, hover },        // sayı (M0 öncesi sözleşme, korunur)
  choreography: {
    enter:  { fade-rise | line-mask | clip-curtain | blur-in | scale-settle | letter-stagger | split-slide },
    scroll: { reveal | grid-stagger | pin-scrub | parallax | counter | mask-wipe | stack-pin | velocity-skew | scroll-zoom },
    hover:  { scale | underline-draw | tilt-3d },
    page:   { crossfade },                          // opsiyonel
    reduced:{ opacity | instant | static-frame }
  }
}
```

| Kural | Ölçü | Kapı |
|---|---|---|
| Aile çeşitliliği | aile ≥4 stilse ≥3 farklı `enter` deseni | `motion-check` |
| Desen tavanı | tek `enter` ≤ %30 stil; her desen ≥3 stilde | `motion-check` |
| Arketip | `sticky ⇒ pin-scrub`, `index ⇒ grid-stagger` | `motion-check` |
| Aile ↔ desen | `Sade` ailesinde `tilt-3d` yasak | `motion-check` |
| Atama | `assign-motion --check` (deterministik: aile + arketip + hash) | `assign-motion.mjs` |
| Politika | üretimde yasak desenler `kit/motion/policy.json`; lab yalnız `teachingOnly` | `build-motion-lab --check` |

**Yeni desen eklemek:** `patterns.json`'a kayıt (kind, properties, measure, reduced, css) →
`assign-motion.mjs` izinli küme + `archetypes.json` scroll havuzu → `--apply` → `motion-check --self-test` → render/lab.
Ödüllü site tekniklerinden türetilen desenler ve katalog eşlemesi: [`docs/animasyon-referanslari.md`](docs/animasyon-referanslari.md).

Durum: 145/145 koreografi · 20 desen · 77 farklı hareket parmak izi · en kalabalık %6 (`kit/dist/motion.md`).

**Yeni stil eklerken animasyon seçme rehberi** (imzayı aile komşularından en az 2 parametrede ayır):

| Aile | Giriş niyeti | Önerilen ayrıştırma (en az 2) | Süre tavanı |
|---|---|---|---|
| Sade (01–07) | sessiz yükselme, abartısız | `enter.offsetY` 8–24px + `stagger` 0.03–0.09 | enter ≤0.8s |
| Yüzey (08–12) | cam/basınç yayı | `enter.ease` `power3.out`/`back.out` + `hover.duration` 200–320ms | enter ≤0.9s |
| Cesur (13–18) | kesme, snap, pop | `enter.duration` 0.25–0.45s + `scroll.trigger` `top 85/88%` | enter ≤0.6s |
| Retro (19–27) | dijital/glitch ritmi | `enter.ease` `linear`/`steps(n)` + `scroll.duration` 0.5–0.7s | enter ≤0.6s |
| Sanatsal (28–34) | nefes, maske, salınım | `enter.offsetY` 28–40px + `stagger` 0.1–0.14 | enter ≤1.2s |
| Geometrik / Organik / Yeni Dalga | ızgara ya da akış | `enter.ease` (`expo.out` / `power2.out`) + `hover.duration` | enter ≤1.0s |
| Teknik / Veri & Gösterge | satır satır, ölçülü | `enter.offsetY` 0px + `enter.ease` `steps()` veya `linear` | enter ≤0.4s |

Adımlar: (1) aynı ailedeki iki komşunun 7 parametresini oku, (2) en az 2'sini bilinçli değiştir —
sadece süreyi oynatmak `hover.duration` gibi ikinci bir fark da gerektirir, (3) `style.md` § Hareket
tablosuna imzayı yaz, (4) `node kit/motion-check.mjs` yeşil olana kadar düzelt.

Kapı çıktısı: normal modda aile başına **farklı imza sayısı** yazılır (`Sade 1/7` gibi — 1 farklı
imza / 7 stil). `--json` çıktısında `variety: { families, signatures, duplicatePairs }` bulunur;
`duplicatePairs[].frozen` mevcut kopya ailelerinin dondurulmuş ikizlerini işaretler.

**Legacy freeze'i kapatma.** 45 stilken ölçülen imzalar `kit/motion-check.mjs` içindeki
`LEGACY_FREEZE` tablosunda dondurulmuştur (Sade 7/7, Retro 9/9 … hepsi kopyaydı). Muafiyet yalnız
"iki stil de dondurulmuş imzasında duruyorsa" geçerlidir: **yeni stil, kopyalanmış eski stil veya
imzası değişmiş eski stil muafiyet görmez.** Katalog 145'e ulaşıp aile içi imzalar gerçekten
ayrıştığında tabloyu sil — kural o zaman istisnasız çalışır. Kapı kendi kendini denetler:
`VARIETY_SELF_TEST` sentetik ikizi, tek-fark çiftini ve 3-farklı çifti her koşuda sınar; dedektör
no-op'a düşerse hata verir.

Fixture denemesi (repoya dosya bırakmadan): `node kit/motion-check.mjs --styles C:/tmp/fixture/styles`.

---

## 7 · Erişilebilirlik kapısı (her stilde zorunlu)

- [ ] Gövde metni kontrastı ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] `--ink-faint` sadece dekoratif; etkileşimli metinde kullanılmaz.
- [ ] Odak halkası görünür: `:focus-visible { outline: 2px solid var(--focus, var(--accent)); outline-offset: 2px }`.
  Halka hem `--bg` hem `--surface` üzerinde **≥ 3:1** olmalı (non-text kontrast). Accent bu eşiği
  geçmiyorsa `--focus` token'ı ink yönünde karıştırılarak türetilir (13 stilde böyle; accent'e dokunulmadı).
- [ ] APCA kontrolü: gövde metni |Lc| ≥ 75 hedef, ≥ 60 kabul, < 45 hata. WCAG oranı ile birlikte oku —
  APCA polariteye duyarlıdır (koyu zeminde açık metin ile tersi aynı puanı almaz).
- [ ] Dokunma hedefi ≥ 44×44px (görsel küçükse de padding ile).
- [ ] Renk tek başına anlam taşımaz (durum + ikon/etiket).
- [ ] `prefers-reduced-motion` ve `prefers-reduced-transparency` desteklenir.
- [ ] Otomatik başlayan ve >5s süren hareket (video, marquee, carousel) duraklatılabilir (WCAG 2.2.2).
- [ ] Etkileşimle tetiklenen hareket (parallax, hover büyütme) kapatılabilir (WCAG 2.3.3).
- [ ] Video `poster` ile gelir; LCP elemanı poster'dır, video değil.
- [ ] Cam/şeffaf yüzeylerde opak fallback (`@supports`).
- [ ] Düşük kontrastlı stillerde (neumorphism, ethereal, japandi) metin katmanı ayrıca koyulaştırılır.

---

## 8 · Performans bütçesi

| Öğe | Sınır | Not |
|---|---|---|
| `backdrop-filter` katmanı | ekran başına ≤ 3 | mobilde statik blur'a düş |
| Grain | SVG `feTurbulence`, 1 kez | PNG doku kullanma |
| Font ailesi | ≤ 3 (display + body + mono) | `font-display: swap`, subset |
| Görsel | ≤ 300 KB / görünür alan | WebP/AVIF + `srcset` |
| Sürekli animasyon | ekran başına ≤ 1 | `transform`/`opacity` dışında animasyon yok |
| Gölge katmanı | ≤ 3 `box-shadow` | çok katmanlı glow mobilde pahalı |

---

## 9 · 40 dakikalık uygulama tarifi

Mevcut bir uygulamaya yeni stil oturtmak için sıra:

1. **5 dk** — README'den stil seç; stil dosyasının "Ekran reçeteleri" tablosunu oku.
2. **5 dk** — `kit/tokens.css` içindeki bloğu `:root` altına taşı; `<html data-style="...">` ekle.
3. **10 dk** — `components.css` içindeki hard-coded renk/radius/gölgeleri `var()` ile değiştir.
4. **5 dk** — Tipografi ölçeğini stil dosyasındaki oranlara çek (punto + tracking + satır aralığı).
5. **5 dk** — Yüzey hiyerarşisini kur: zemin → kart → yüzen katman; üçüne farklı davranış ver.
6. **5 dk** — Tek imza öğe ekle (doku, hairline, gölge dili, cam nav).
7. **5 dk** — Hareket imzasını uygula (§6) + `prefers-reduced-motion`.
8. **QA** — §7 listesi + `kit/gallery.html`'de kendi bileşenini karşılaştır.

---

## 10 · Tek ekran QA listesi

- [ ] Ekranda baskın tek bir odak var mı?
- [ ] En az 2 farklı punto uçları (11px etiket + 32px+ başlık) var mı?
- [ ] Yüzeyler 3 seviyeye ayrıldı mı, yoksa hepsi aynı kart mı?
- [ ] Renk bilgi taşıyor mu, süs mü?
- [ ] Stile ait bir imza öğe görünüyor mu?
- [ ] 390px genişlikte taşma/çakışma var mı?
- [ ] Kontrast ve odak halkası geçti mi?
- [ ] Aynı ekran başka bir stille de çalışır mı (token sözleşmesi sağlam mı)?

---

## 11 · Sık yapılan hatalar

| Hata | Sonuç | Düzeltme |
|---|---|---|
| Stili her bileşene ayrı ayrı uygulamak | Tutarsız radius/gölge | Tek `data-style` + token |
| Garnitür stili baskının değişkenlerini ezmek | Kimlik kaybı | Garnitür sadece kendi alt ağacında |
| Tüm ekranlarda aynı yoğunluk | Yorucu ya da ruhsuz | §4 matrisi |
| Sadece rengi değiştirmek | "Aynı tasarım, farklı boya" | Tipografi + yüzey + hareket de değişmeli |
| 4+ font / 3+ radius | Dağınıklık | 1 ölçek, 2 radius |
| Paleti koyu moda çevirmek için `invert()` | Renkler zehirlenir | Ayrı palet yaz |
| Stili figma'da bırakmak | Kodda kaybolur | Token'ları repoya koy |

---

## 12 · Ajan/otomatik üretim için prompt şablonu

Kısa sürüm (stil dosyasındaki `## AI brief` bloğu daha ayrıntılıdır; çelişirse AI brief kazanır):

```
Stil: <slug> — dosyalar: styles/<nn-slug>/style.md + tokens.json + shots/
Kurallar:
- Sadece kit/tokens.css içindeki <slug> değişkenlerini kullan; hard-coded renk/gölge/radius yazma.
- Tipografi: --font-display başlıkta, --font-body gövdede, --font-mono etiketlerde, --tracking başlıkta.
- Yüzey: 3 seviye (bg / surface / surface+shadow), radius --radius ve --radius-lg.
- Bileşenler: style.md § Bileşen reçeteleri tablosundaki ölçüler birebir.
- Hareket: playbook §6 ailesi + style.md § Hareket; prefers-reduced-motion zorunlu.
- Yasaklar: style.md § Yasaklar ve § Tuzaklar.
- Erişilebilirlik: playbook §7 listesi geçmeli.
- Çıktı: bileşen kodu + kısa not (hangi imza öğeyi nerede kullandın).
```

---

## 13 · Yeni stil ekleme akışı

> Bu akış 35. stil (Bauhaus) eklenirken uçtan uca test edildi; 8 adım ~15 dakika.

1. `_templates/style-template.md` kopyala → `styles/NN-<slug>/style.md`; başlık `# NN · Ad`, `> **Bir cümleyle:**` satırı, meta tablosunda **Token** satırı ve `## Token` altında `[data-style="<slug>"]` bloğu zorunlu (20 bölümün tamamı dolu olmalı).
2. Aynı CSS bloğunu `kit/tokens.css`'e **birebir** ekle; `--check` blok metnini karşılaştırır.
3. `styles/NN-<slug>/tokens.json` yaz: `css` alanı tokens.css bloğuyla birebir, `palette` değerleri CSS değişkenleriyle aynı, `must` / `mustNot` / `components` / `refs` dolu, `version: 3` + `layout` (bkz. §5.1; `node kit/assign-layouts.mjs --apply` yazar).
4. `kit/render/shots.config.mjs` → `STYLES` içine `motif`, `bodyClass`, `extraCss` (yalnız `var(--…)`); gerekiyorsa `scenes: { … }`.
5. `node kit/render/render-shots.mjs --styles <slug>` → 16 sahne. Eksik şablonlar sessizce atlanır.
6. `node kit/sync-shot-tables.mjs --write` → `style.md` "Örnek görseller" + "Ekran reçeteleri · Görsel" kolonunu manifest'ten yazar.
7. `kit/gallery.data.mjs` → `KEYWORDS` içine 3 etiket (galeri araması için); gerekirse `DEMOS`.
8. `node kit/build-gallery.mjs --check` + `node kit/check-contrast.mjs` + `node kit/sync-shot-tables.mjs --check` temiz olana kadar düzelt; sonra README indeksine satır ekle ve `node kit/build-gallery.mjs` ile galeriyi yaz.

Kabul: katalog satırı `NN stil · NN×16 görsel · NN tam şema (v3) · doğrulama: temiz`,
kompozisyon kapısı temiz (`node kit/check-layout.mjs`),
kontrast `0 hata · 0 borç`, `kit/qa/<sahne>.png` levhalarında yeni stil 3 saniye testini geçiyor.

---

## 14 · AI uygulama protokolü (stil → kod)

Bu bölüm "AI bu kütüphaneyi kullanarak tasarım uygulasın" dendiğinde izlenecek sıradır.
Amaç: stilin **kimliğini** koruyarak uygulanabilir kod üretmek; "renk değiştirilmiş aynı tasarım" değil.

### 14.1 Okuma sırası (bağlam kurma)

1. `kit/styles.index.json` → stil seç (aile, etiket, `docsReady`).
2. `styles/<nn-slug>/style.md` → sırayla: **§ Zorunlu kurallar → § Yasaklar → § Bileşen reçeteleri → § Ekran reçeteleri → § Tuzaklar**.
3. `styles/<nn-slug>/tokens.json` → palet, ölçek, motion, must/mustNot (kod üretirken bunu referans al).
4. `styles/<nn-slug>/shots/01…04` → görseli aç. Dokümanla görsel çelişiyorsa **görsel kazanır**; çelişkiyi düzelt (docsReady olan stillerde görseller token'lardan üretildiği için tutarlıdır).

### 14.2 Karar matrisi (hangi ekranda ne kadar stil)

| Ekran | Yoğunluk | AI'ya talimat |
|---|---|---|
| Landing / hero | yüksek | Tam stil: display tipografi, imza öğe, doku/gradient/katman serbest (yasaklara uyarak) |
| Dashboard / tablo | düşük | Stil yalnızca tipografi + radius + renk kodunda; süs ekleme |
| Form / ödeme / giriş | çok düşük | Konvansiyon kazanır; stil sadece odak halkası ve kenarlıkta |
| Boş durum / onboarding | orta-yüksek | Stilin karakteri burada görünür: 1 cümle + 1 eylem + imza öğe |

### 14.3 Üretim kuralları

- Bileşen kodu **yalnızca** `var(--…)` tüketir; hiçbir renk/gölge/radius literal yazılmaz.
- Üç yüzey seviyesi kurulur: `--bg` → `--surface` (+`--line`) → yüzen katman (+`--shadow`). Stil "gölge yok" diyorsa yüzen katman da 1px çizgiyle ayrılır.
- Tipografi: display + gövde + mono rolleri ayrı; punto ölçeği stil dosyasındaki basamaklardan seçilir, ara basamak uydurulmaz.
- Hareket: playbook §6 ailesi + stil dosyası § Hareket tablosu; `prefers-reduced-motion` her zaman.
- Stil "koyu tabanlı" ise açık tema uydurma; ikinci tema gerekiyorsa tokens.json'daki `dark`/`light` bloğunu kullan, `filter: invert()` asla.
- Garnitür kullanımı: en fazla 1 ikincil stil ve yalnızca tek katmanda (`data-style` alt ağaçta); baskın stilin değişkenlerini ezmez.

### 14.4 Teslim öncesi öz-denetim (AI kendi çıktısına uygular)

- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (style.md § Görsel imza).
- [ ] Hard-coded renk/gölge/radius yok — grep ile doğrula (`#[0-9a-f]{3,6}`, `box-shadow:`, `border-radius:`).
- [ ] Yasaklar listesindeki hiçbir öğe kullanılmadı.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1 (style.md § Erişilebilirlik değerleriyle).
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44×44px.
- [ ] 390px genişlikte taşma/çakışma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.
- [ ] Yazdığın kodu `kit/gallery.html` mantığıyla karşılaştırdın mı: aynı bileşen, stil değişince bozulmuyor mu?

### 14.5 Sık hatalar (AI'ya özel)

| Hata | Belirti | Düzeltme |
|---|---|---|
| Sadece token'ları kopyalamak | "Aynı tasarım, farklı boya" | Tipografi ölçeği + yüzey + hareket imzasını da uygula |
| Stili her bileşene ayrı uygulamak | Tutarsız radius/gölge | Tek `data-style` + token katmanı |
| Tüm ekranlarda tam yoğunluk | Yorucu ya da güvensiz (ödeme ekranı) | §14.2 matrisi |
| Dokümanı okumadan görselden kopyalamak | Yanlış ölçü (görsel 1280px'e göre üretildi) | Ölçüleri style.md tablolarından al; görselden yalnızca *karakter* al |
| Yasakları atlamak | Stilin kimliği bozulur (ör. neumorphism'de gölge eklemek) | § Yasaklar listesini çıktı üretmeden önce oku |

### 14.6 Hızlı komut özeti

```bash
node kit/build-gallery.mjs --check      # şema/link/görsel/token senkron denetimi
node kit/check-contrast.mjs             # WCAG raporu (borçlar baseline'da)
node kit/render/render-shots.mjs        # eksik görselleri üret (--styles <slug> --force)
node kit/render/fetch-fonts.mjs         # fontları yeniden indir (offline render için)
```

## 15 · Görsel katalog (37 sahne şablonu · 4'ü repoda)

Her stil, **aynı içerik** ile 37 sahne şablonunda render edilir; repoda yalnız 4 çekirdek
sahne tutulur (landing · dashboard · components · dark-landing = 580 PNG). Kalan 27 sahne
`kit/.shots-cache/` altında lokal üretilir (gitignore): `node kit/render/render-shots.mjs --styles <slug>`.
Gerekçe + ölçüm: `docs/v5-revizyon-raporu.md` §0.2. Amaç: stilin yalnızca "güzel
görünmesi" değil, gerçek ürün kararlarında (form, tablo, ödeme, okuma) nasıl
davrandığının kanıtlanması. İçerik `kit/render/*.html` şablonlarında sabittir;
renk/tipografi/radius/gölge yalnız `kit/tokens.css`'ten gelir.

| # | Sahne | Ne kanıtlar | Süs tavanı |
|---|---|---|---|
| 01 | landing | hero hiyerarşisi, imza motif | 1.0 |
| 02 | dashboard | operasyonel ekranda geri çekilme | .45 |
| 03 | mobile | 390px, tek sütun, hedef ölçüsü | .45 |
| 04 | components (temel) | renk, tipografi, yüzey, boşluk | .35–.5 |
| 05 | components · form | girdi karakteri, doğrulama renkleri | .5 |
| 06 | components · katman | modal/menü/toast gölge dili | .5 |
| 07 | components · veri | tablo ritmi, grafik serileri | .45 |
| 08 | components · gezinme | aktif durum, sekme, footer | .45 |
| 09 | page · pricing | ticari sayfa, öne çıkan kart | .45 |
| 10 | page · auth | güven ekranı (en düşük süs) | **.22** |
| 11 | page · list | filtre/toplu işlem/yoğun tablo | .45 |
| 12 | page · states | boş · iskelet · hata · 404 | .4 |
| 13 | page · settings | form + tehlike bölgesi | .45 |
| 14 | page · checkout | ödeme (en düşük süs) | **.22** |
| 15 | page · onboarding | adım akışı, seçenek kartı | .45 |
| 16 | page · article | okuma ölçüsü, içindekiler | .45 |

**Grafik serileri:** `--data-1..4` (kit/tokens.css `:root`). Stil ezmezse
accent/ink/ink-soft/warn'a düşer; grafik renkleri uygulama kodunda sabitlenmez.

### 15.1 Komutlar

```bash
node kit/render/render-shots.mjs                         # eksik sahneleri üret (çekirdek → repo, kalan → cache)
node kit/render/render-shots.mjs --styles y2k --force     # stili baştan üret
node kit/render/render-shots.mjs --scene form --styles glassmorphism
node kit/render/render-shots.mjs --all --cache-only       # tam set, repoya dokunmadan (kit/.shots-cache/)
node kit/render/render-shots.mjs --legacy-spawn           # eski yol: kare başına yeni tarayıcı (kıyas)
node kit/render/render-shots.mjs --contact form           # kit/qa/form.png (34'lü QA levhası)
node kit/sync-shot-tables.mjs --check                     # style.md tabloları manifest ile aynı mı
node kit/sync-shot-tables.mjs --write                     # tabloları yeniden yaz
```

**Renderer (v5):** tek tarayıcı + CDP bağlantı havuzu (`kit/render/cdp-browser.mjs`).
N sekme paralel (`CDP_TABS`, varsayılan 4); animasyonlar `document.getAnimations()` ile
sabit ana kareye dondurulur (eski `--virtual-time-budget=4000` karşılığı) → deterministik kare.
WebP yakalama hazır (`format:'webp'`) ama repoda PNG kalır (phash/pixel-diff PNG çözer).
Ölçüm: kare başına ~0.16–0.30 s (yükleme 33–129 ms · font 40–80 ms · yakalama 80–200 ms);
4500 kare tam set hâlâ ~30 dk — bu yüzden günlük iş **tek stil** (`--styles`, ~10 s).

### 15.2 Headless viewport notu (yalnız `--legacy-spawn`)

`msedge --headless=new --window-size=W,H` verildiğinde sayfa **H−92 px** yüksekliğinde
bir viewport'a yerleşir; PNG ise H yüksekliğinde üretilir. `render-shots.mjs` bu payı
`WINDOW_CHROME=92` ile telafi eder ve `kit/render/png.mjs` ile üstten kırpar. Pay
değişirse `WINDOW_CHROME` ortam değişkeniyle geçersiz kıl.

### 15.3 Yeni sahne eklemek

1. `kit/render/<ad>.html` şablonunu yaz (`__STYLE__`, `__ICON:ad:boyut__` kancaları).
2. `scene.css`'e `.scene-<ad>` bloğunu ekle — **yalnız `var(--…)`**, hard-coded renk yok.
3. `render-shots.mjs` içindeki `SCENES` dizisine `{ key, file, tpl, width, height, label }` ekle.
4. `node kit/render/render-shots.mjs --scene <ad>` → 35 stil; `--contact <ad>` → QA levhası.
5. `node kit/sync-shot-tables.mjs --write` → 34 doküman tablosu güncellenir.
6. `node kit/build-gallery.mjs --check` temiz olmalı (manifest + doküman eşleşmesi).

### 15.4 Erişilebilirlik denetimi

`node kit/render/a11y-check.mjs --styles 01-minimalism,08-glassmorphism --scene form` her stil için
h1 sayısı, eksik `alt`, etiketsiz alan/buton ve negatif `tabindex` sayar (tablo + özet). Kritik ihlalde
çıkış 1; yalnız negatif `tabindex` varsa 0; `--json` makine-okur, `--warn-only` her durumda 0 döner.

### 15.5 Görsel regresyon kapısı

`bash kit/gates.sh` dördüncü adımda görsel regresyona bakar: `kit/render/.baseline/<slug>/<dosya>.png` ile
`styles/<slug>/shots/<dosya>.png` karşılaştırılır (`kit/render/pixel-diff.mjs --a … --b … --json`, eşik %0.1).
Baseline dizini repoya girmez; dizin yoksa adım `↷` ile atlanır, fark varsa kapı `✗` ile 1'e çıkar — baseline'ı
güncellemek, yeni görüntüyü kabul etmek demektir.

## 16 · Kabul edilmiş kontrast uyarıları

`node kit/check-contrast.mjs` **0 hata** verir. Kalan 15 uyarı bilinçli tasarım kararıdır
ve `kit/contrast-baseline.json`'a **yazılmaz** — çünkü bunlar metin değil, dekoratif
öğelerdir (ızgara çizgisi, ayırıcı, ikon konturu, soluk etiket).

**Kural:** `--ink-faint` **gövde metni olarak kullanılmaz.** Yalnızca şu yerlerde:
- ≥ 3:1 gerektirmeyen dekoratif çizgi/ayırıcı/ızgara,
- pasif durumdaki ikon konturu,
- `aria-hidden` etiketler (ör. teknik ölçü notları).

Metin her zaman `--ink` (gövde) veya `--ink-soft` (açıklama, ≥ 4.5:1) kullanır.

| Stil | Token | Ölçülen | Nerede kullanılıyor |
|---|---|---|---|
| 01 minimalism | `--ink-faint` | 2.53:1 | bölüm etiketi, hairline |
| 04 luxury-typography | `--ink-faint` | 2.76:1 | mini etiket, çizgi |
| 05 bento-grid | `--ink-faint` | 2.43:1 | kutucuk etiketi |
| 06 japandi | `--ink-faint` | 2.98:1 | etiket, ayırıcı |
| 07 wabi-sabi | `--ink-faint` | 2.87:1 | etiket, çizgi |
| 10 neumorphism | `--ink-faint` | 2.52:1 | gömülü yüzey etiketi |
| 11 claymorphism | `--ink-faint` | 3.00:1 | yumuşak etiket |
| 19 y2k | `--ink-faint` | 2.70:1 | krom üstü etiket |
| 25 frutiger-aero | `--ink-faint` | 2.94:1 | parlak yüzey etiketi |
| 28 surrealism | `--ink-faint` | 2.76:1 | ölçek notu |
| 29 ethereal | `--ink-faint` | 2.85:1 | sis üstü etiket |
| 30 bohemian | `--ink-faint` | 2.99:1 | doku üstü etiket |
| 31 scrapbook | `--ink-faint` | 2.95:1 | el yazısı altı not |
| 34 skeuomorphism | `--ink-faint` | 2.26:1 | bevel üstü etiket |
| 34 skeuomorphism | `--ink-soft` | 4.34:1 | **gövde metni değil** — yalnız ≥18px |

**Skeuomorphism istisnası:** malzeme dokusu kontrastı yediği için `--ink-soft` 4.34:1'de
kalıyor; bu stilde gövde metni her zaman `--ink` (8.41:1). Yeni bir stil eklerken
`--ink-soft` ≥ 4.5:1 hedefle; altına inerse bu tabloya satır ekle ve nedenini yaz.

## 17 · Koyu mod tamamlama (borç kapatma)

Bir stilde `tokens.json → palette.dark` varsa ama `tokens.css` koyu bloğu ve `shots/17-18`
yoksa o stil **borçlu** sayılır (`kit/dark-baseline.json`). Borç, tasarım kararı verilmeden
kapatılmaz; `kit/dark-fill.mjs` yalnız **ölçülebilir** kısmı türetir:

| Anahtar | Formül | Neden |
|---|---|---|
| `bg2` | `mix(bg, ink, %6)` | zeminden bir ton açık ikincil yüzey |
| `surface2` | `mix(surface, ink, %8)` | kart içi ikincil yüzey |
| `inkSoft` | `mix(ink, bg, %30)` | ikincil metin; gövde kontrastı ≥ 4.5 kalmalı |
| `inkFaint` | `mix(ink, bg, %55)` | dekoratif; ≥ 3 hedefi garanti değil |
| `line` | `ink` %14 alfa | koyu zeminde hairline |
| `accentInk` | `bg` / `#0d0d0d` / `#ffffff` içinden en yüksek kontrast | accent üstü metin ≥ 4.5 |

Kurallar:

1. `--dry` ile önizle; en düşük kontrast 4.5'in altındaysa **accent tonunu** koyulaştır/aç, formülü zorlama.
2. Yazdıktan sonra iki koyu sahneyi **gözle** kontrol et: gölge yerine kenarlık çalışıyor mu, blur/parlama
   koyu zeminde bantlanıyor mu, `--ink-faint` etiketleri okunuyor mu.
3. `kit/check-schema.mjs` pariteyi denetler: `palette.dark` ⇄ CSS bloğu ⇄ `shots/17-18`.
   Üçünden biri eksikse kapı hata verir; borç kapanınca kaydı `dark-baseline.json`'dan sil.
4. Koyu mod **uydurulmaz**: paleti olmayan stile koyu render üretmek yasak (yanıltıcı kare).

## 18 · Token dışa aktarma sözleşmesi

`kit/dist/` üretilen çıktıdır, elle düzenlenmez; `node kit/export-tokens.mjs` yazar,
`--check` kapıda güncelliğini doğrular.

| Çıktı | Sözleşme |
|---|---|
| `tokens.all.css` | `:root` fallback + her stil için `[data-style]` + varsa `[data-theme=dark]`; değişken adları `kit/tokens.css` ile birebir |
| `tailwind.theme.css` | Tailwind v4 `@theme`: `--color-*`, `--font-*`, `--radius-control/card`, `--shadow-control`; 8 adımlı boşluk `p-1…p-16` ile eşlenir (4px taban) |
| `figma.variables.json` | `collections[]`: `Color System` (Light/Dark modlu), `Radius`, `Spacing`, `Typography`; her değişken `{ name, type, values: { <mod>: değer } }` |
| `index.json` | Stil başına `dark` durumu, token sayısı, dosya yolları |

Kural: yeni bir token eklendiğinde önce `kit/tokens.css` + `styles/<slug>/tokens.json` güncellenir,
sonra export çalıştırılır. Ters yön (dist'i elle düzeltmek) kapıda `token export güncel` adımında yakalanır.

## 19 · Hedef çıktıları: Flutter / React (CSS dışı)

Katalog bir **veri** deposudur; CSS yalnız bir hedeftir. Flutter (ve yarın SwiftUI/Compose) CSS
değişkeni tüketemez, `tokens.json`'daki prose'u da yorumlayamaz. Bu yüzden iki katman ayrılır:

| Katman | Dosya | İş |
|---|---|---|
| Normalizasyon | `kit/lib/tokens.mjs` → `kit/dist/motion.json` | prose → sayı: `durationMs`, `{kind, points}` eğri, `offsetYPx`, `trigger.topPercent` |
| Emitter | `kit/export/flutter.mjs` → `kit/dist/flutter/` | sayı → hedefin tipi: `Duration`, `Curve`, `Color`, `TextStyle`, `BoxShadow` |

**Kural 1 — hedef ayrıştırmaz.** Yeni hedef yalnız `dist/motion.json` + `tokens.json` okur;
kendi `cubic-bezier` regex'ini yazmaz. Ayrıştırma tek yerde (`kit/lib/tokens.mjs`) durur.

**Kural 2 — koyu mod yalnız palet.** Flutter çıktısında koyu harita 10 renk taşır; tipografi/şekil/
hareket açık setten gelir. İki tam set üretmek 145×2 kopya demektir ve sessiz drift üretir.

**Kural 3 — birim dönüşümü açık olsun.** `tracking` em'dir; `TextStyle.letterSpacing` px ister →
`em × fontSize`. `--shadow` CSS'tir; `BoxShadow` inset taşımaz → inset gölgeler metin olarak raporlanır.

**Kural 4 — eğri yaklaşımı işaretlenir.** GSAP (`power3.out`, `back.out(1.7)`) ve `steps(n)` CSS'te
birebir yoktur; normalizer cubic-bezier yaklaşımı üretir ve `approximated: true` yazar. Yaklaşımı
saklamak, "aynı animasyon" yalanından iyidir.

**Kural 5 — font bir varlıktır.** Web woff2 Flutter'da çalışmaz. `kit/fetch-fonts.mjs` Google Fonts'tan
TTF indirir (`kit/fonts/ttf/` + `INDEX.json`), `pubspec.fonts.yaml` yalnız gerçekten var olan
dosyaları listeler; sistem fontları (SF Pro, Segoe UI, Menlo…) bilinçli olarak paketlenmez ve
`INDEX.json → skippedSystem`'de görünür. Sessiz fallback kapıda hata olur.

**Kapılar.** `font TTF` (kapsam: her aile ya gömülü ya bilinçli sistem fontu) · `flutter export`
(`--check` + `dart analyze` + `flutter test`). Dart/Flutter yoksa `↷ atlandı` yazar — "geçti" demez.

## 20 · Sözleşme denetimi (style-lint)

Token üretmek yetmez; tüketen kodun token'a uyduğunu **ölçmek** gerekir. `kit/style-lint.mjs`
seçilen stile göre kod tarar ve katalogu referanstan sözleşmeye çevirir:

```bash
node kit/style-lint.mjs src --style terminal-ui --strict   # CI'da bu
```

| Kural sınıfı | Neden hata | Nasıl düzeltilir |
|---|---|---|
| Renk literali (`#fff`, `rgba()`, `Color(0x…)`) | stil değişince ekran değişmez, koyu mod kırılır | `var(--accent)` / `context.styleLab.accent` |
| Stil dışı font | kimlik kaybolur (her stil tek font ailesi taşır) | `var(--font-display)` / `t.typography` |
| Token dışı süre | animasyon imzası bozulur, "her yerde 300ms" tekdüzeliği | `tokens.json → motion.sequences` değerleri |
| `ease`/`linear` | stilin eğrisi zaten tanımlı | `cubic-bezier(…)` / `steps(…)` |
| reduced-motion yok | erişilebilirlik kapısı | `@media (prefers-reduced-motion: reduce)` / `MediaQuery.disableAnimations` |

Uyarı/hata ayrımı bilinçli: renk ve font **kimliği** bozar (hata); radius/süre çoğu zaman
makul bir istisna taşıyabilir (uyarı). `--strict` ile uyarılar da kapı olur — yeni projede
bunu aç, eski projede borç defteri gibi kullan.
