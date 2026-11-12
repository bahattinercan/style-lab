# 103 · Motion Trail

> **Bir cümlede:** Her hareket eden öğenin arkasında üç kademeli solan bir iz bıraktığı, hızın kalıcı bir görsel öğe olarak tasarlandığı açık zeminli hareket arayüzü.

| | |
|---|---|
| **Hissiyat** | hızlı, akıcı, sportif, kararlı |
| **En iyi** | ürün lansmanı, spor/etkinlik sayfası, hareketli portfolyo, kampanya hero'su |
| **Kaçın** | klinik/sağlık ekranları, muhasebe tabloları, uzun form akışları — iz dikkat dağıtır |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 5.50:1) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `styles/103-motion-trail/tokens.json` → `[data-style="motion-trail"]` |
| **Kompozisyon** | `sticky` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Motion Trail, hareketi **kalıcı bir görsel dil** yapar: bir öğe yer değiştirdiğinde arkasında %40 / %20 / %8 opaklıkta üç kopya bırakır; iz 300ms içinde söner. Sayfa açık ve sıcaktır (kırık beyaz), çünkü iz burada karanlıkta parlama değil **mürekkep kayması** gibi okunur.

Üç kurucu karar: (1) **üç kopya sınırı** — dörtten fazla kopya ekranı kirletir; (2) **tek yön** — bir ekranda iz hep aynı yöne akar (sol→sağ), karışık yön hareketi kaosa çevirir; (3) **büyük stagger** — 0.13'lük kademe gecikmesi izin okunması için kasıtlı olarak yavaştır; hızlı stagger izi görünmez kılar.

Display **Anton**'dur: tek ağırlık, dar ve yüksek kontrastlı harfler hız hissini tipografide de taşır. Gövde Inter, etiketler IBM Plex Mono. Yumuşak köşeler (20/28px) izin yuvarlak, akıcı doğasına uyar.

Bedeli: bu stil hareket olmadan da anlaşılır olmalıdır — bu yüzden iz statik karede bile (hero görselinin soluk halkaları) görünür ve `prefers-reduced-motion` altında tamamen kapanır.

### Ne değildir
- **Kinetic Type (37) değildir:** 37 koyu zeminde dev tipografiyi hareket ettirir (harf animasyonu); Motion Trail açık zeminde **bileşen izini** gösterir, tipografi sabittir.
- **Neo-Brutalism (13) değildir:** 13 kalın siyah kontur ve sert gölge kullanır; burada yumuşak gölge ve 20/28px radius vardır; iz efekti 13'te yoktur.
- **Grand Tourer (41) değildir:** 41 lüks otomotiv vitrinidir (Cinzel, geniş boşluk, sakin); Motion Trail Anton + iz katmanlarıyla hızı öne çıkarır.
- **Minimalism (01) değildir:** 01 hareketi minimuma indirir; Motion Trail'de hareket başlı başına bir imza öğesidir.

### Nereden gelir
Uzun pozlama fotoğrafçılığı (hareket bulanıklığı), spor yayıncılığındaki hız çizgileri, 2010'ların "speed line" poster dili ve modern ürün lansmanlarında yeniden popülerleşen trail efektleri. Ekranda yeniden kullanılmasının nedeni: kullanıcıya "bu nesne az önce hareket etti" bilgisini **tek karede** vermesi — konum değişimini anlatan en ekonomik görsel araç. Klişeye dönüşmemesi için korunacak detay: izin üç kopyayla sınırlı kalması ve 300ms'de sönmesi; kalıcı iz "hatalı render" gibi görünür.

### 3 saniyede tanıma testi
1. Açık, kırık beyaz zemin; hero görselinin arkasında 8px ve 16px kaymış iki soluk accent çerçeve var.
2. Başlık Anton: dar, çok kalın, tek ağırlık.
3. Butonlar ve chip'ler hap formunda (999px), kartlar 20–28px radius.
4. Hover'da öğe iz bırakarak kayıyor; iz 300ms içinde sönüyor.
5. Accent kavrulmuş turuncu yalnız izde ve birincil eylemde.

## Görsel imza
- **Üç iz kopyası:** `%40 / %20 / %8` opaklık, hareket yönünde 8/16/24px offset.
- **Sönüm:** 300ms `cubic-bezier(.15,.8,.3,1)`; iz kalıcı değil.
- **Statik iz:** hero görselinin arkasında `translate(-8px, 0)` %20 ve `translate(-16px, 0)` %8 accent çerçeve.
- **Hap kontrol:** buton, chip, avatar 999px; kart `--radius` 20px, `--radius-lg` 28px.
- **Anton başlık:** 52px, ağırlık 400, satır aralığı 1.02, tracking −0.01em.
- **Gölge:** tek katman `0 18px 44px -32px rgba(20,22,26,.55)` — izin altında yumuşak zemin.
- **Doku:** `--grain: 0`; doku izden gelir.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f5f3ef` | sayfa zemini (kırık beyaz) | kart zemini |
| `--bg-2` | `#ecebe6` | ikincil zemin, input çerçevesi | hero görseli |
| `--surface` | `#ffffff` | kart, panel, hero görseli | sayfa zemini |
| `--surface-2` | `#f0eeea` | chip, hover satır, ikincil yüzey | birincil kart |
| `--ink` | `#14161a` | başlık, metin | dekoratif dolgu |
| `--ink-soft` | `#4c5157` | ikincil metin | başlık |
| `--ink-faint` | `#7d838a` | yalnız dekoratif etiket | etkileşimli metin |
| `--accent` | `#a8500f` | iz, birincil eylem, aktif | gövde metni |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(20,22,26,.12)` | kenarlık, ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` = **16.34:1** · `ink-soft/bg` = **7.23:1** · `accent-ink/accent` = **5.50:1** · `ink-faint/bg` = **3.45:1**.
- Tek vurgu kuralı: accent yalnız iz ve birincil eylem. Alarm `--danger`, uyarı `--warn`, onay `--ok`.
- Yasak kombinasyon: accent üstünde `--ink-soft`; iz katmanlarında ikinci renk (mavi/yeşil iz yok).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton (`--font-display`) | 52px / mobil 32px | 400 | 1.02 | `--tracking` −0.01em |
| H2 | Anton | 28px | 400 | 1.16 | −0.005em |
| H3 | Inter | 20px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 16px | 400 | 1.6 | 0 |
| Etiket / sayı | IBM Plex Mono (`--font-mono`) | 11–13px | 400/600 | 1.44 | 0.14em (etiket) |

- Ölçek oranı ≈ 1.5; kullanılan basamaklar: 11 · 12 · 13 · 16 · 20 · 28 · 52.
- Ölçü önerisi: `h1 { font-size: clamp(32px, 5.2vw, 52px); }`
- Gövde metni maksimum satır uzunluğu: 66 ch.
- Ağırlık kuralı: Anton yalnız 400; sentetik bold yasak. Gövdede 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 20px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 iz paneli 7/5 · 768 tek sütun, iz offsetleri yarıya iner · 390 iz kapalı, düz gölge |

- Asimetri kuralı: iz paneli 7/5; ekran başına bir asimetri.
- Bölüm ritmi: art arda en fazla 3 blok; dördüncü blok izsiz "dinlenme" bloğu olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa |
| Kart | `--surface` | `0 18px 44px -32px rgba(20,22,26,.55)` | kart, panel, KPI |
| Yüzen katman | `--surface` + `--shadow` | aynı | modal, toast |

- Kenarlık formülü: `1px solid var(--line)` + tek katman gölge.
- Derinlik nereden gelir: iz katmanları (offset + opaklık) ve tek katman gölge; bevel/blur yok.
- Radius: `--radius` 20px (kontrol, kart içi), `--radius-lg` 28px (kart, modal); butonlar 999px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 24px | 999px | 14px/600 Inter | `--accent` zemin, `--accent-ink`, `--shadow` | hover iz kuyruğu (300ms) · active 1px · focus 3px accent · disabled %45 · loading 4 kare iz |
| Buton (ikincil) | 44px | 0 24px | 999px | 14px/600 | `--surface`, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 44px | 0 16px | `--radius` | 15px Inter | `--surface`, 1px `--line` | focus 3px accent · error `--danger` · disabled %45 |
| Kart | içerik | 22px | `--radius-lg` | — | `--surface`, 1px `--line`, `--shadow` | hover'da 4px sağa kayma + iz |
| Chip / badge | 26px | 0 12px | 999px | 12px/600 Inter | `--surface-2`, 1px `--line` | seçili: accent zemin |
| Nav | 60px | 0 28px | 0 | 13px/600 | `--bg`, alt 1px `--line` | aktif: pill zemin + iz |
| Tablo satırı | 44px | 10px 14px | 0 | 14px (sayı mono) | alt 1px `--line` | hover: 4px sağa kayar (iz) |
| Modal / sheet | — | 24px | `--radius-lg` | 15px/400 | `--surface`, `--shadow` | açılışta 2 iz kopyası, sonra söner |
| Toast | 44px | 10px 16px | 999px | 13px mono | `--surface`, `--shadow` | 4200ms, üst orta |
| Grafik paleti | — | — | — | — | `--accent` · `--ink-soft` · `--ink-faint` (3 seri) | çizgi 2px + son 80px'te solan iz |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 2px` (iri yuvarlak hedefler için kalın halka).
- Dokunma hedefi: en az 44×44px; buton ve input zaten 44px, chip 26px görünür ama 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 20px ızgara, yuvarlak uç + hareket oku |
| Fotoğraf | Long-exposure tek kare kabul; aksi halde fotoğraf yok |
| İllüstrasyon | Yalnız iz katmanları (CSS kopya + offset) |
| Doku | `--grain: 0`; doku izden gelir |
| Logo alanı | Anton kelime logosu; 16px üç kademeli çubuk işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | İz paneli 7/5; hero görselinin arkasında iki soluk çerçeve | `shots/01-landing.png` |
| Dashboard | düşük | İz yalnız hover ve geçişlerde; tabloda kayma 4px | `shots/02-dashboard.png` |
| Form | düşük | 44px alanlar, 20px radius, hata satırı | — |
| Liste / tablo | düşük | 44px satır, hover'da sağa 4px kayma | — |
| Boş durum | orta | Boş alanda tek iz çizgisi + birincil eylem | — |
| Onboarding | yüksek | Adımlar soldan sağa iz bırakarak geçer | — |
| Pricing | orta | Kartlar hap checklist; öne çıkan kart accent çerçeve | — |
| Giriş / ödeme | çok düşük | İz kapalı (odak formu), tek panel | — |
| Modal | orta | Açılışta 2 iz kopyası, 300ms'de söner | — |
| Bildirim / toast | orta | Sağdan girip iz bırakarak durur | — |
| Hata | düşük | `--danger` kenar + hata metni; iz yok | — |
| Profil / ayar | orta | İz yoğunluğu ve süre tercihi (kapalı/açık) | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — iz zaman çizelgesi — 12/24px hayalet kopyalar, kademe etiketi.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.37s**, y **10px**, stagger **0.13** | `cubic-bezier(.15,.8,.3,1)` | `opacity` + `transform` |
| Scroll reveal | **0.49s**, trigger **top 84%**, y **14px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **1.15**, mesafe **+140%** (iz paneli sabitlenir) | scrub doğrusal | `transform` (iz offseti büyür) |
| Hover | **300ms**, görsel scale **1.045** | `ease-out` | `transform` + iz `opacity` |
| Basma | 140ms | aynı eğri | `transform` (1px) |
| İz sönümü | 300ms | aynı eğri | `opacity` (%40→0, %20→0, %8→0) |

- Bu stilin ölçülebilir imzası: `enter 0.37s / cubic-bezier(.15,.8,.3,1) / 10px / 0.13` + `scroll top 84% / 0.49s / 14px` + `pin scrub 1.15 / +140%` + `hover 300ms / 1.045`. `stagger 0.13` katalogdaki en büyük değerlerden biridir ve `0.37s` + bu eğri ikilisi yalnız burada geçer.
- `prefers-reduced-motion`: tüm süreler 0.01ms; iz katmanları hiç oluşmaz, öğe doğrudan son konumda olur.
- Bu stile yasak hareket: sürekli iz (döngü), iz üzerinde blur artışı, iki farklı yön, parallax.

## Koyu mod

| Token | Açık (kırık beyaz) | Koyu (gece izi) |
|---|---|---|
| `--bg` | `#f5f3ef` | `#121316` |
| `--bg-2` | `#ecebe6` | `#181a1e` |
| `--surface` | `#ffffff` | `#1e2025` |
| `--surface-2` | `#f0eeea` | `#262930` |
| `--ink` | `#14161a` | `#f1f2f4` |
| `--ink-soft` | `#4c5157` | `#aeb3b9` |
| `--ink-faint` | `#7d838a` | `#7f858c` |
| `--accent` | `#a8500f` | `#ffa06b` |
| `--accent-ink` | `#ffffff` | `#200a06` |
| `--line` | `rgba(20,22,26,.12)` | `rgba(241,242,244,.16)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **16.58:1** · `ink-soft/bg` = **8.80:1** · `accent-ink/accent` = **9.47:1** · `ink-faint/bg` = **4.99:1**.
- Koyu modda değişen başka ne var: accent açılır (kavrulmuş turuncu → kayısı), iz opaklıkları %40/%20/%8 → %48/%26/%12 (koyu zeminde soluk iz kaybolur).
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="motion-trail"]`.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **5.85:1** açık / **5.79:1** koyu · `--warn / bg` = **5.34:1** / **5.77:1** · `--ok / surface` = 5.08:1 / 5.06:1 (warn) · devre dışı buton metni = **7.04:1** / **7.71:1** · ghost buton kenarı = **3.92:1** / **5.67:1** (eşik 3:1).

## Zorunlu kurallar
- İz en fazla **üç** kopya: %40 / %20 / %8; offset 8/16/24px; 300ms'de söner.
- İz yönü ekran başına tek (sol→sağ veya yukarı→aşağı).
- Stagger 0.13 — iz okunsun diye kasıtlı büyük gecikme.
- Anton yalnız başlıkta ve 400; gövde Inter, etiket mono.
- Hap kontrol: buton, chip, avatar 999px; kart radius 20/28px.
- Accent yalnız izde ve birincil eylemde; ikinci iz rengi yok.

## Yasaklar
- Üçten fazla iz kopyası veya kalıcı iz.
- Renkli/blur'lu iz, neon kuyruk.
- Aynı ekranda iki farklı iz yönü.
- 28px üzeri radius, köşeli kart (bu stil yumuşak form dilidir).
- Fotoğraf üstüne iz bindirme.
- `prefers-reduced-motion` açıkken hareket ettirmeye devam etmek.
- Klinik/muhasebe bağlamında iz kullanmak.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `accent-ink/accent` = 5.50:1; `ink-faint/bg` = 3.45:1 (dekoratif); gövde 16.34:1.
- `--ink-faint` yalnız dekoratif etiket; etkileşimli metin değil.
- İz katmanları her zaman metnin **arkasında** ve `pointer-events: none`; tıklamayı engellemez.
- `prefers-reduced-motion` açıkken iz hiç oluşmaz (vestibüler risk sıfır).
- Odak halkası 3px accent + 2px offset; iz ile karışmaması için halka her zaman en üst katmanda.
- 390px'te iz offsetleri yarıya iner, tablo hover kayması kapanır; taşma yok.

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
| Ekran "kirli" | iz kalıcı | 300ms sönüm + üç kopya sınırı |
| Hareket anlaşılmıyor | stagger çok küçük | 0.13'e çıkar |
| "Hatalı render" hissi | iz metnin üstünde | `pointer-events:none` + z-index altta |
| Yön karmaşası | iki farklı iz yönü | ekran başına tek yön |
| Başlık taşıyor | Anton geniş harf + uzun kelime | `max-width` ch ile sınırla |
| Mobilde ağır | tam offset + gölge | mobilde offset yarı, gölge tek katman |

## Komşu stiller

- **Uyumlu:** `kinetic-type` — hareket ve tipografi ortak; iz eklenince dinamik varyant olur.
- **Uyumlu:** `neo-brutalism` — cesur tipografi; iz yumuşatıcı katman olarak eklenebilir.
- **Uyumlu:** `grand-tourer` — otomotiv vitrini; iz hız hissini güçlendirir.
- **Yasak:** `claymorphism` — kil dokusu izi bulanıklaştırır.
- **Yasak:** `japandi` — sakin estetik izin hızını bozar.
- **Yasak:** `minimalism` — hareketi minimuma indirir, iz imzası kaybolur.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Motion_blur | iz uzunluğu ve sönüm oranı |
| https://m3.material.io/styles/motion/transitions | geçiş süresi ve sönüm eğrisi |
| https://www.nngroup.com/articles/animation-duration/ | 300ms hover/geri bildirim aralığı |
| https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html | hareketi kapatma zorunluluğu |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Motion Trail (styles/103-motion-trail/style.md, tokens.json)
Token: sadece [data-style="motion-trail"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Anton 400 (yalnız başlık, tracking -0.01em), gövde Inter 400/600,
  etiket IBM Plex Mono. Ölçek 11/12/13/16/20/28/52; gövde ölçü 66ch.
Yüzey: kırık beyaz zemin; radius 20/28px, hap kontrol 999px, tek katman gölge.
Imza: iz katmanları — %40/%20/%8 opaklık, 8/16/24px offset, tek yön, 300ms sönüm;
  hero görselinin arkasında iki soluk accent çerçeve (statik iz).
Renk: tek accent #a8500f (iz + birincil eylem); ikinci iz rengi yok.
Hareket: enter .37s cubic-bezier(.15,.8,.3,1) y10 stagger .13; scroll top 84% .49s y14 once;
  1 pin scrub 1.15 (+140%); hover 300ms scale 1.045; reduced-motion'da iz oluşmaz.
Yasak: kalıcı iz, renkli/blur iz, iki yön, 28px üstü radius, klinik bağlamda iz.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] İz en fazla üç kopya ve 300ms'de sönüyor.
- [ ] İz metnin arkasında, `pointer-events: none`.
- [ ] Tek yön kuralı uygulanmış.
- [ ] Kontrast: gövde 16.34:1, accent üstü 5.50:1.
- [ ] Hap kontrol ve 20/28px radius tutarlı.
- [ ] 390px'te taşma yok, offset yarıya inmiş.
- [ ] `prefers-reduced-motion` açıkken iz yok.

## Token

```css
[data-style="motion-trail"] {
  --bg: #f5f3ef; --bg-2: #ecebe6;
  --surface: #ffffff; --surface-2: #f0eeea;
  --ink: #14161a; --ink-soft: #4c5157; --ink-faint: #7d838a;
  --accent: #a8500f; --accent-ink: #ffffff;
  --line: rgba(20,22,26,.12);
  --radius: 20px; --radius-lg: 28px;
  --shadow: 0 18px 44px -32px rgba(20,22,26,.55); --shadow-hard: 6px 6px 0 var(--line);
  --font-display: "Anton", ui-sans-serif, system-ui, "Arial Narrow", sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
  --danger: #a3201a; --danger-ink: #ffffff;
  --ok: #2ba369; --warn: #c58109;
}
```

Koyu mod bloğu `styles/103-motion-trail/token-block.css` içinde `[data-theme="dark"][data-style="motion-trail"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
