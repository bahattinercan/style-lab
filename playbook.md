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
| Tek ölçek | Her başlık aynı puntoda | İki uç punto + 1.5× ölçek oranı |

**Kural:** Bir ekranda en az **bir** "bu markaya ait" öğe olmalı — stil dosyasındaki *Görsel imza* maddelerinden biri.

---

## 2 · Stil seçimi ve karıştırma

### 2.1 Tek stil (önerilen başlangıç)
Ürün kişiliğine göre 1 stil seç, tüm token'ları ondan al. En hızlı ve en tutarlı yol.

### 2.2 Baskın + garnitür (2 stil, üst sınır)
- **Baskın %80:** renk, tipografi, yüzey, radius → tek stilden.
- **Garnitür %20:** sadece *bir* katmanda (ör. hero görseli, nav, boş durum illüstrasyonu).
- Garnitür, baskının değişkenlerini ezmez; sadece kendi bileşeninde `data-style` taşır.
- **Sarmalayıcı tek öznitelik taşır:** `<div data-style="liquid-glass">`. Bileşik seçici yoktur;
  `kit/check-composition.mjs --browser` komşu stillerin DOM'da birbirine karışmadığını ölçer.

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
6. **Durum izi** — basma/odak/seçim her yerde aynı dilde; 3'ten fazla durum tonu kullanma.
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
| Bildirim / toast | orta | Stilin renk ve radius dili; tek satır, ikon + metin |
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
- Yeni bileşen eklerken tüm stillerde nasıl göründüğünü `kit/gallery.html`'de karşılaştırarak kontrol et.
- Koyu mod v6 kapsamı dışı: yalnız açık palet üretilir; ikinci bir tema bloğu eklenmez.

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
5. Kompozisyon aile içinde kopyalanmaz: **aynı `hero|nav` çifti aile içinde tekrar etmez**, muafiyet yok.

Ayrıntı: README § Kompozisyon ekseni · dağılım: `kit/dist/composition.md`.

---

## 6 · Erişilebilirlik kapısı (her stilde zorunlu)

- [ ] Gövde metni kontrastı ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] `--ink-faint` sadece dekoratif; etkileşimli metinde kullanılmaz.
- [ ] Odak halkası görünür: `:focus-visible { outline: 2px solid var(--focus, var(--accent)); outline-offset: 2px }`.
  Halka hem `--bg` hem `--surface` üzerinde **≥ 3:1** olmalı (non-text kontrast). Accent bu eşiği
  geçmiyorsa `--focus` token'ı ink yönünde karıştırılarak türetilir (13 stilde böyle; accent'e dokunulmadı).
- [ ] APCA kontrolü: gövde metni |Lc| ≥ 75 hedef, ≥ 60 kabul, < 45 hata. WCAG oranı ile birlikte oku —
  APCA polariteye duyarlıdır (koyu zeminde açık metin ile tersi aynı puanı almaz).
- [ ] Dokunma hedefi ≥ 44×44px (görsel küçükse de padding ile).
- [ ] Renk tek başına anlam taşımaz (durum + ikon/etiket).
- [ ] Animasyon yok (v6): otomatik oynayan video/marquee/carousel kullanılmaz.
- [ ] `prefers-reduced-transparency` desteklenir (cam yüzeyde opak fallback).
- [ ] Video `poster` ile gelir; LCP elemanı poster'dır, video değil.
- [ ] Cam/şeffaf yüzeylerde opak fallback (`@supports`).
- [ ] Düşük kontrastlı stillerde (neumorphism, ethereal, japandi) metin katmanı ayrıca koyulaştırılır.

---

## 7 · Performans bütçesi

| Öğe | Sınır | Not |
|---|---|---|
| `backdrop-filter` katmanı | ekran başına ≤ 3 | mobilde statik blur'a düş |
| Grain | SVG `feTurbulence`, 1 kez | PNG doku kullanma |
| Font ailesi | ≤ 3 (display + body + mono) | `font-display: swap`, subset |
| Görsel | ≤ 300 KB / görünür alan | WebP/AVIF + `srcset` |
| Sürekli animasyon | ekran başına ≤ 1 | `transform`/`opacity` dışında animasyon yok |
| Gölge katmanı | ≤ 3 `box-shadow` | çok katmanlı glow mobilde pahalı |

---

## 8 · 40 dakikalık uygulama tarifi

Mevcut bir uygulamaya yeni stil oturtmak için sıra:

1. **5 dk** — README'den stil seç; stil dosyasının "Ekran reçeteleri" tablosunu oku.
2. **5 dk** — `kit/tokens.css` içindeki bloğu `:root` altına taşı; `<html data-style="...">` ekle.
3. **10 dk** — `components.css` içindeki hard-coded renk/radius/gölgeleri `var()` ile değiştir.
4. **5 dk** — Tipografi ölçeğini stil dosyasındaki oranlara çek (punto + tracking + satır aralığı).
5. **5 dk** — Yüzey hiyerarşisini kur: zemin → kart → yüzen katman; üçüne farklı davranış ver.
6. **5 dk** — Tek imza öğe ekle (doku, hairline, gölge dili, cam nav).
7. **5 dk** — Durum dilini uygula: odak halkası, basma, seçim (§6).
8. **QA** — §7 listesi + `kit/gallery.html`'de kendi bileşenini karşılaştır.

---

## 9 · Tek ekran QA listesi

- [ ] Ekranda baskın tek bir odak var mı?
- [ ] En az 2 farklı punto uçları (11px etiket + 32px+ başlık) var mı?
- [ ] Yüzeyler 3 seviyeye ayrıldı mı, yoksa hepsi aynı kart mı?
- [ ] Renk bilgi taşıyor mu, süs mü?
- [ ] Stile ait bir imza öğe görünüyor mu?
- [ ] 390px genişlikte taşma/çakışma var mı?
- [ ] Kontrast ve odak halkası geçti mi?
- [ ] Aynı ekran başka bir stille de çalışır mı (token sözleşmesi sağlam mı)?

---

## 10 · Sık yapılan hatalar

| Hata | Sonuç | Düzeltme |
|---|---|---|
| Stili her bileşene ayrı ayrı uygulamak | Tutarsız radius/gölge | Tek `data-style` + token |
| Garnitür stili baskının değişkenlerini ezmek | Kimlik kaybı | Garnitür sadece kendi alt ağacında |
| Tüm ekranlarda aynı yoğunluk | Yorucu ya da ruhsuz | §4 matrisi |
| Sadece rengi değiştirmek | "Aynı tasarım, farklı boya" | Tipografi + yüzey + boşluk da değişmeli |
| 4+ font / 3+ radius | Dağınıklık | 1 ölçek, 2 radius |
| Paleti filter ile değiştirmek | Renkler zehirlenir | Paleti token'dan yaz |
| Stili figma'da bırakmak | Kodda kaybolur | Token'ları repoya koy |

---

## 11 · Ajan/otomatik üretim için prompt şablonu

Kısa sürüm (stil dosyasındaki `## AI brief` bloğu daha ayrıntılıdır; çelişirse AI brief kazanır):

```
Stil: <slug> — dosyalar: styles/<nn-slug>/style.md + tokens.json + shots/
Kurallar:
- Sadece kit/tokens.css içindeki <slug> değişkenlerini kullan; hard-coded renk/gölge/radius yazma.
- Tipografi: --font-display başlıkta, --font-body gövdede, --font-mono etiketlerde, --tracking başlıkta.
- Yüzey: 3 seviye (bg / surface / surface+shadow), radius --radius ve --radius-lg.
- Bileşenler: style.md § Bileşen reçeteleri tablosundaki ölçüler birebir.
- Kompozisyon: playbook §5 + style.md § Görsel imza; animasyon yok (v6).
- Yasaklar: style.md § Yasaklar ve § Tuzaklar.
- Erişilebilirlik: playbook §7 listesi geçmeli.
- Çıktı: bileşen kodu + kısa not (hangi imza öğeyi nerede kullandın).
```

---

## 12 · Yeni stil ekleme akışı (v6 · tek komut)

> v5'te 8 adımdı (~15 dk) ve üç kopyanın elle senkronu en sık kırılan yerdi. v6'da tek SPEC + tek komut.

1. `kit/specs/*.json` içinden bir dosyayı örnek al; SPEC'e şunları yaz: `num`, `slug`, `name`, `band`,
   `tagline`, `feeling/best/avoid`, `palette` (10 renk), `fonts` (3 aile, `kit/fonts` listesinden),
   `radius` (2 değer), `motif`, `signature` (≥3), `must` / `mustNot` (≥3), `refs` (≥3 https),
   `keywords` (3), `brief`, `neighbors`.
2. `node kit/add-style.mjs kit/specs/<dosya>.json` — kontrast/font/komşu/bant doğrulanır; beş kaynak
   (`tokens.json`, `token-block.css`, `style.md`, `shots.config.fragment.mjs`, `keywords.json`) yazılır.
3. Aynı komut `apply-fragments` → layout/görsel/içerik atamaları → tek sayfa render → doküman tabloları
   → galeri, indeks, export, rapor, görsel baseline adımlarını koşar.
4. `bash kit/gates.sh` temiz olana kadar düzelt. Yeni aile açıyorsan `kit/families.json`'a kesintisiz aralık
   ve `kit/specs/bands.json`'a şablon ekle; `apply-fragments` boşluk/çakışma görürse kırmızı verir.

Kabul: `add-style` son satırı `bitti · N stil hazır`, `bash kit/gates.sh` son satırı `kapılar: temiz`,
`node kit/check-schema.mjs` 0 hata, `node kit/check-contrast.mjs --strict-soft` 0 hata.

---

## 13 · AI uygulama protokolü (stil → kod)

Bu bölüm "AI bu kütüphaneyi kullanarak tasarım uygulasın" dendiğinde izlenecek sıradır.
Amaç: stilin **kimliğini** koruyarak uygulanabilir kod üretmek; "renk değiştirilmiş aynı tasarım" değil.

### 14.1 Okuma sırası (bağlam kurma)

1. `kit/styles.index.json` → stil seç (aile, etiket, `docsReady`).
2. `styles/<nn-slug>/style.md` → sırayla: **§ Zorunlu kurallar → § Yasaklar → § Bileşen reçeteleri → § Ekran reçeteleri → § Tuzaklar**.
3. `styles/<nn-slug>/tokens.json` → palet, ölçek, layout, must/mustNot (kod üretirken bunu referans al).
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
- Kompozisyon: playbook §5 + stil dosyası § Görsel imza; animasyon yok (v6).
- Stil "koyu tabanlı" ise açık tema uydurma; ikinci tema gerekiyorsa tokens.json'daki `dark`/`light` bloğunu kullan, `filter: invert()` asla.
- Garnitür kullanımı: en fazla 1 ikincil stil ve yalnızca tek katmanda (`data-style` alt ağaçta); baskın stilin değişkenlerini ezmez.

### 14.4 Teslim öncesi öz-denetim (AI kendi çıktısına uygular)

- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (style.md § Görsel imza).
- [ ] Hard-coded renk/gölge/radius yok — grep ile doğrula (`#[0-9a-f]{3,6}`, `box-shadow:`, `border-radius:`).
- [ ] Yasaklar listesindeki hiçbir öğe kullanılmadı.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1 (style.md § Erişilebilirlik değerleriyle).
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44×44px.
- [ ] 390px genişlikte taşma/çakışma yok.
- [ ] Otomatik oynayan hiçbir hareket yok (v6).
- [ ] Yazdığın kodu `kit/gallery.html` mantığıyla karşılaştırdın mı: aynı bileşen, stil değişince bozulmuyor mu?

### 14.5 Sık hatalar (AI'ya özel)

| Hata | Belirti | Düzeltme |
|---|---|---|
| Sadece token'ları kopyalamak | "Aynı tasarım, farklı boya" | Tipografi ölçeği + yüzey + boşluk ritmini de uygula |
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

## 14 · Kabul edilmiş kontrast uyarıları

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

## 15 · Token dışa aktarma sözleşmesi

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

## 16 · Sözleşme denetimi (style-lint)

Token üretmek yetmez; tüketen kodun token'a uyduğunu **ölçmek** gerekir. `kit/style-lint.mjs`
seçilen stile göre kod tarar ve katalogu referanstan sözleşmeye çevirir:

```bash
node kit/style-lint.mjs src --style terminal-ui --strict   # CI'da bu
```

| Kural sınıfı | Neden hata | Nasıl düzeltilir |
|---|---|---|
| Renk literali (`#fff`, `rgba()`, `Color(0x…)`) | stil değişince ekran değişmez | `var(--accent)` / `context.styleLab.accent` |
| Stil dışı font | kimlik kaybolur (her stil tek font ailesi taşır) | `var(--font-display)` / `t.typography` |
| Radius literali | köşe dili stil sözleşmesinden kopar | `var(--radius)` / `var(--radius-lg)` |
| `--ink-faint` metin olarak | kontrast düşer, okunmaz | `var(--ink-soft)` |
| `data-style` yok | hiçbir token uygulanmaz | kök elemanda `data-style="<slug>"` |

Uyarı/hata ayrımı bilinçli: renk ve font **kimliği** bozar (hata); radius çoğu zaman
makul bir istisna taşıyabilir (uyarı). `--strict` ile uyarılar da kapı olur — yeni projede
bunu aç, eski projede borç defteri gibi kullan.
