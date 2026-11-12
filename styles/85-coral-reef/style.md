# 85 · Coral Reef

> **Bir cümlede:** Su altı ışığının yumuşattığı koyu turkuaz zeminde, her türün bölgesi ve derinliğiyle kaydedildiği resif gözlem arayüzü.

| | |
|---|---|
| **Hissiyat** | yumuşak, akışkan, canlı, serin |
| **En iyi** | deniz/resif gözlem uygulaması, dalış kaydı, sualtı tür kataloğu, akvaryum yönetimi |
| **Kaçın** | kurumsal finans paneli, yüksek yoğunluklu tablo ekranı, katı endüstriyel ürünler |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 8.15:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="coral-reef"]` |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Coral Reef, arayüzü bir **resif kesiti** gibi kurar: her tür bir mercan öbeği kartında, kartın içinde bölge chip'i, derinlik ve su sıcaklığı. Zemin koyu turkuaz (su), accent ise mercan pembesi-turuncusudur ve yalnız eylem/seçim/uyarı için kullanılır.

Üç kurucu karar: (1) **yumuşak form** — buton/chip/toast hap (999px), form 22px, kart 36px ve **asimetrik** köşe (36 36 36 12); keskin köşe yok; (2) **su gölgesi** — yalnız aşağı doğru geniş, düşük opaklıkta gölge; cam/blur ve sualtı ışık huzmesi yasak; (3) **yumuşak hareket** — giriş 980ms süzülür, hover 280ms ve görsel 1.058 büyür; su içinde hareket gibi yavaş ve akışkan.

Bedeli: yumuşak form yoğun tablo ekranlarında yer kaybettirir; ekran başına 2 tablo sınırı vardır. Metin 16px'in altına inmez, aksi halde "çocuk uygulaması" gibi okunur.

### Ne değildir
- **Ethereal (29) değildir:** pastel lavanta, cam yüzey ve çok düşük kontrastla hayal-üstü bir dil kurar; Coral Reef koyu turkuaz, opak yüzey ve güçlü mercan accent ile çalışır.
- **Organic Bio (38) değildir:** açık krem zemin, sage yeşili ve blob radiuslarla "temiz organik" kurar; burada su altı koyuluğu ve mercan accent var.
- **Dopamine UI (18) değildir:** çok renkli enerji ve pastel bloklar kullanır; Coral Reef tek accent (mercan) ve su tonlarıyla sınırlıdır.
- **Aurora UI (12) değildir:** atmosferik gradient ve mor accentle çalışır; burada gradient yerine grain ve düz su tonları var.

### Nereden gelir
Resif izleme raporlarından ve dalış kayıt defterinden: bölge (lagün, resif düzlüğü, yamaç), derinlik, sıcaklık, tür, gözlem notu. Bugün yeniden kullanılmasının nedeni: doğa/deniz uygulamaları genelde ya fotoğraf galerisi ya da soğuk veri tablosu oluyor; resifin katmanlı yapısını taşıyan bir arayüz ihtiyacı var. Klişeye dönüşmemesi için korunacak detay: **asimetrik mercan köşesi** ve **tek mercan accent**.

### 3 saniyede tanıma testi
1. Zemin koyu turkuaz; hiçbir yüzey beyaz değil.
2. Accent mercan pembesi-turuncusu; ikinci doygun renk yok.
3. Buton/chip/toast hap, kart 36px ve **asimetrik** (alt-sol 12px) köşe.
4. Her kartta bölge chip'i + derinlik (m) + sıcaklık (°C) görünüyor.
5. Gölge yalnız aşağı yönde geniş ve yumuşak; parlama/caustic efekti yok.

## Görsel imza
- **Mercan köşesi:** kart `border-radius: 36px 36px 36px 12px`; buton/chip/toast 999px; form 22px.
- **Su tonu katmanları:** `--bg` → `--surface` → `--surface-2` üç koyu turkuaz kademe; sınır 1px `--line`.
- **Mercan accent:** `#ff8a73` yalnız eylem/seçim/uyarı; accent üstü metin `#2a0d08`.
- **Kabarcık dizisi:** hero görselinde 5–7 dairesel halka, 1px `--line`, yukarı doğru azalan boyut (statik).
- **Yumuşak gölge:** `0 10px 24px -14px rgba(4,14,16,.6)` — aşağı, geniş, düşük opaklık.
- **Su zerresi grain:** `--grain: .03`; fotoğrafın üstünde kullanılmaz.
- **Bölge chip'i:** hap, 11px `Courier Prime` 0.12em — lagün · resif düzlüğü · yamaç · çukur · gelgit.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0d2b30` | `#021015` | kart zemini |
| `--bg-2` | `#092226` | `#051b21` | birincil buton |
| `--surface` | `#123840` | `#07222a` | sayfa zemini |
| `--surface-2` | `#174650` | `#0b2c34` | metin zemini |
| `--ink` | `#e6f4f2` | `#f0fbf9` | dekoratif dolgu |
| `--ink-soft` | `#a4c6c4` | `#b6d8d6` | accent dolgu üstü |
| `--ink-faint` | `#779c9b` | `#82a9a7` | gövde, etkileşimli metin |
| `--accent` | `#ff8a73` | `#ffa88f` | dekoratif dolgu |
| `--accent-ink` | `#2a0d08` | `#180904` | accent olmayan zemin |
| `--line` | `rgba(230,244,242,.16)` | `rgba(240,251,249,.22)` | metin |

- Ölçülen kontrast: `ink/bg` **13.23:1** · `ink-soft/bg` **8.15:1** · `accent-ink/accent` **7.88:1** · `ink-faint/bg` **4.99:1** · accent metin olarak bg'ye **6.50:1**.
- Tek vurgu kuralı: mercan accent yalnız eylem/seçim/uyarı. `--ok` (turkuaz yeşil), `--warn` (kum sarısı), `--danger` (mercan kırmızı) yalnız durum etiketi.
- Yasak kombinasyon: accent ile `--danger` yan yana (aynı sıcaklık ailesi); accent üstünde `--ink-soft`; ikinci doygun accent (mor/mavi).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 | 46px | 600 | 1.08 | 0 |
| H2 | Baloo 2 | 28px | 600 | 1.20 | 0 |
| H3 | Nunito | 20px | 700 | 1.3 | 0 |
| Gövde | Nunito | 16px | 400 | 1.66 | 0 |
| Etiket / mono | Courier Prime | 11px | 400 | 1.35 | 0.14em, büyük harf |
| Ölçü / tablo | Courier Prime | 14px | 400 | 1.45 | 0.02em, tabular |

- Ölçek oranı ≈ 1.65 (16 → 28 → 46); kullanılan basamaklar: 11 · 12 · 14 · 16 · 20 · 28 · 46 · (mobil 30).
- Ölçü önerisi: `h1 { font-size: clamp(30px, 4.4vw, 46px) }`.
- Gövde metni maksimum satır uzunluğu: 60ch; gözlem notu 48ch'te kırılır.
- Ağırlık kuralı: Baloo 2 600, Nunito 400/700, mono 400. İtalik yok; büyük harf yalnız etiket.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 5/7, mercan öbekleri 2/3/2/3 ritmi |
| Gutter | 20px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, tablo kart demetine döner |

- Asimetri kuralı: ekran başına en fazla 2 asimetrik blok (hero 5/7 + mercan öbek ritmi).
- Bölüm ritmi: 64px masaüstü / 40px mobil; bölüm geçişlerinde çizgi yok, boşluk var.
- Kart içi 24px; satır 44px; chip ile başlık arası 10px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | su zemini |
| Kart | `--surface` + 1px `--line` | `var(--shadow)` | mercan öbeği, panel |
| Yüzen katman | `--surface` + 1px `--line` | `var(--shadow)` + 0 30px 60px -40px | modal, alt sayfa |
| Seçili | `--surface-2` + `--shadow-hard` | 1px mercan halka | seçili tür |

- Kenarlık formülü: `1px solid var(--line)`; seçili türde `--shadow-hard` (1px mercan halka).
- Derinlik nereden gelir: yumuşak alt gölge + ton katmanı + grain; blur, iç gölge, parlama yok.
- Radius: `--radius` 22px (form, iç kutu), `--radius-lg` 36px (kart, modal); buton/chip/toast 999px. Kartta alt-sol 12px asimetrisi.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 12px 24px | 999px | 14px/700 Nunito | `--accent` + `--accent-ink`, `var(--shadow)` | hover 2px yukarı · active 1px aşağı · focus 2px accent halka + 3px offset · disabled %45 · loading kabarcık |
| Buton (ikincil) | 48px | 12px 22px | 999px | 14px/700 Nunito | şeffaf + 1px accent çerçeve | hover `--surface-2` · focus accent halka |
| Input | 48px | 0 18px | 22px | 15px Nunito | `--surface` + 1px `--line` | focus accent halka · filled birim üst etiket · error danger · disabled %45 |
| Kart (mercan öbeği) | — | 24px | 36 36 36 12 | başlık 20px Nunito 700 | `--surface` + 1px `--line` | sol üst chip · sağ alt derinlik · seçili 1px mercan halka |
| Chip (bölge) | 24px | 0 12px | 999px | 11px Courier Prime | `--surface-2` + 1px `--line` | lagün · resif düzlüğü · yamaç · çukur · gelgit |
| Nav (üst bar) | 60px | 0 26px | 0 | 12px Nunito / 11px mono | `--bg`, alt 1px `--line` | aktif: mercan nokta + metin · sağda su sıcaklığı |
| Tablo satırı | 44px | 8px 14px | 0 | tür gövde + mono ölçü | alt 1px `--line` | hover `--surface-2` · seçili mercan sol şerit 3px |
| Modal | — | 28px | 36px | başlık 28px Baloo 2 | `var(--shadow)` + derin alt gölge | tür detayı, kapatma 48px |
| Toast | 44px | 10px 18px | 999px | 14px Nunito | `--surface`, sol 10px mercan nokta | 4.2sn · alt ortada |
| Grafik | — | — | 0 | eksen 11px mono | alan %14 dolgu, çizgi 2px yuvarlak uç | ızgara yok, yalnız taban çizgisi |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px`; accent dolgulu butonda `--accent-ink` halka.
- Dokunma hedefi: 48×48px; chip 24px görsel, satır içi padding ile 44px.
- Derinlik ölçüsü: kartın sağ altında mono 14px; birim (`m`) ayrı ve `--ink-faint`.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 22px ızgara, tam yuvarlak uç; mercan, balık, dalga, kabarcık |
| Fotoğraf | mercan/balık su altı, mavi-yeşil su tonu, tek mercan vurgusu, max %50 alan, 22px radius |
| İllüstrasyon | yumuşak vektör: mercan dalı, anemon, kabarcık dizisi (2px, yuvarlak uç) |
| Doku | su zerresi grain `.03`; kabarcık deseni yalnız hero görselinde |
| Logo alanı | Baloo 2 600 küçük harf, sol üst 24px; mono varyant yalnız alt bilgi |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 5/7 hero: solda başlık + tek hap CTA, sağda mercan öbeği + kabarcıklar | `shots/01-landing.png` |
| Dashboard | orta | 3 KPI (tür, ortalama derinlik, sıcaklık) + bölge dağılımı + gözlem listesi | `shots/02-dashboard.png` |
| Form | düşük | dalış kaydı: bölge, derinlik+birim, sıcaklık, tür, not | — |
| Liste / tablo | orta | 44px satır, bölge chip'i, sağda mono derinlik | — |
| Boş durum | düşük | "bu bölgede gözlem yok" + ilk gözlemi ekle | — |
| Onboarding | düşük | 3 adım: resif seç → bölge tanımla → ilk gözlem | — |
| Pricing | orta | iki plan; gözlem/dışa aktarma limitleri hap kartlarda | — |
| Giriş / ödeme | çok düşük | tek kart, 48px alanlar, tek eylem | — |
| Modal | orta | tür detayı: foto, derinlik, sıcaklık, gözlem notu | — |
| Bildirim | düşük | hap toast, alt ortada, 4.2sn | — |
| Hata | düşük | danger çerçeve + neden + yeniden dene | — |
| Profil / ayar | orta | resif listesi, birim (m/ft, °C/°F), uyarı eşiği | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (kart) | 980ms | `cubic-bezier(.2,.8,.3,1)` | `opacity` + `translateY(22px)`, 80ms arayla |
| Scroll reveal | 880ms, `top 79%` | aynı | `translateY(18px)`, `once: false` (yukarı kaydırınca tekrar) |
| Pin / scrub | 1.05 scrub, +110% mesafe | doğrusal | resif kesiti sabitlenir, bölge katmanı kayar |
| Basma | 160ms | aynı | `translateY(1px)` |
| Hover (görsel) | 280ms | aynı | `scale(1.058)` |
| Kabarcık | 1200ms | `cubic-bezier(.2,.8,.3,1)` | `translateY` + `opacity` (yalnız yükleme göstergesi) |

- Ölçülen imza: enter **0.98s · cubic-bezier(.2,.8,.3,1) · 22px · stagger 0.08**; scroll **top 79% · 0.88s · 18px · once:false**; pin **açık · scrub 1.05 · +110%**; hover **280ms · 1.058**.
- Su içinde süzülme: yumuşak hızlanma ve yumuşak duruş; hiçbir hareket geri sekmez.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin/scrub ve kabarcık kapalı, içerik anında.
- Bu stile yasak hareket: sürekli yüzen balık/kabarcık döngüsü, bounce, caustic animasyonu, blur geçişi.

## Koyu mod

| Token | Açık (resif) | Koyu (gece dalışı) |
|---|---|---|
| `--bg` | `#0d2b30` | `#021015` |
| `--bg-2` | `#092226` | `#051b21` |
| `--surface` | `#123840` | `#07222a` |
| `--surface-2` | `#174650` | `#0b2c34` |
| `--ink` | `#e6f4f2` | `#f0fbf9` |
| `--ink-soft` | `#a4c6c4` | `#b6d8d6` |
| `--accent` | `#ff8a73` | `#ffa88f` |
| `--accent-ink` | `#2a0d08` | `#180904` |

- Ölçülen koyu kontrastlar: `ink/bg` **18.27:1** · `ink-soft/bg` **12.67:1** · `accent-ink/accent` **10.42:1** · `ink-faint/bg` **7.52:1** · accent metin olarak bg'ye **10.34:1**.
- Koyu modda değişen başka ne var: resif gece dalışına iner (`#0d2b30` → `#021015`, ton bandı Δ≈40), mercan accent açılır (`#ff8a73` → `#ffa88f`), yüzey kademeleri koyulaşır, hairline .16 → .22. Açık/koyu ekran yan yana ayırt edilir.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="coral-reef"]` olarak durur.

## Zorunlu kurallar
- Her tür kaydı: tür adı + bölge chip'i + derinlik (m) + sıcaklık (°C).
- Mercan accent yalnız eylem/seçim/uyarı; su tonları accent değildir.
- Form dili: hap kontrol (999px), 22px form alanı, 36px kart (alt-sol 12px asimetri).
- Gölge yalnız aşağı yönlü yumuşak; cam/blur, parlama, caustic efekti yok.
- Gövde 16px Nunito, satır 1.66; etiket 11px Courier Prime büyük harf.
- Su zerresi grain yalnız zemin katmanında; fotoğrafın üstünde kullanılmaz.

## Yasaklar
- Cam/blur, sualtı ışık huzmesi, caustic animasyonu.
- 12px altı kart köşesi, keskin köşe; hap olmayan buton.
- İkinci doygun accent (mor/mavi); accent ile `--danger` yan yana.
- Büyük harf gövde, 14px altı gövde metni, italik.
- Sürekli yüzen balık/kabarcık döngüsü, bounce, yatay parallax.
- Beyaz/açık zemin.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 8.15:1 (`ink-soft/bg`).
- `--ink-faint` 4.99:1 — etiket/eksen için geçer; gövde metni olarak kullanılmaz.
- Mercan accent metin olarak 6.50:1, dolgu üstünde 7.88:1 — ikisi de geçer; 11px altı accent metin kullanılmaz.
- Durum yalnız renkle verilmez: bölge chip metni, uyarı etiketi + nokta.
- Odak görünürlüğü: koyu su zemininde 2px mercan halka (6.50:1) + 3px offset; mercan dolgulu butonda `--accent-ink` halka.
- 390px'te tablo kart demetine döner, derinlik ve sıcaklık alt satıra iner; yatay taşma yok.
- `prefers-reduced-motion` açıkken giriş, pin/scrub, hover ölçeği ve kabarcık durur.

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
| "Çocuk uygulaması" hissi | 14px altı metin + çok yuvarlak her şey | gövde 16px, asimetrik köşe, tek accent |
| Kontrast düşük | su tonu üstünde `--ink-soft` kullanılmış | gövde `--ink`, ikincil `--ink-soft` |
| "Cam" kayması | blur/parlama eklendi | `--blur: 0`, opak yüzey |
| Mercan fazla | accent dekorasyon olarak | accent yalnız eylem/seçim |
| Bölge karışıyor | yalnız renkli chip | chip metni + bölge adı |
| Mobilde taşıyor | 20px gutter + tablo | tek kolon, tablo karta |
| Koyu modda doku | grain düşük | koyu blokta `.025` + çizgi %18 |

## Komşu stiller

- **Uyumlu:** `ocean-current` — aynı sualtı ailesi, ölçülebilir üç farkla ayrışır: accent hue **10°** (mercan) vs **172°** (turkuaz, ±30° dışında); radius **22/36px asimetrik** vs **6/16px simetrik**; motion **0.98s · cubic-bezier(.2,.8,.3,1) · 22px** vs **0.83s · cubic-bezier(.35,.02,.25,1) · 40px**. Ortak zemin tonuna rağmen display ailesi (Baloo 2 vs Cormorant Garamond) ve biçim dili farklı olduğu için çakışma değil, bant çeşitliliği.
- **Uyumlu:** `ethereal` — yumuşak geçişler; duygusal onboarding bölümlerinde eş.
- **Uyumlu:** `organic-bio` — organik form dili; açık zemin bölümlerinde tamamlayıcı.
- **Uyumlu:** `aurora-ui` — atmosferik koyu zemin; pazarlama hero'sunda eş.
- **Yasak:** `neo-brutalism` — kalın siyah çerçeve ve keskin köşe, mercan formunu yok eder.
- **Yasak:** `swiss-design` — ızgara katılığı ve 0 radius, yumuşak resif dilini bozar.
- **Yasak:** `pixel-art` — piksel köşe ve sınırlı palet, su tonlarıyla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://coralreefwatch.noaa.gov/ | resif bölgesi, sıcaklık stresi ve derinlik verisi sunumu |
| https://www.icriforum.org/ | resif koruma statüsü ve izleme terminolojisi |
| https://www.gbif.org/ | tür kaydı künyesi ve gözlem alanları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | koyu su zemininde metin kontrastı |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | odak halkası görünürlüğü |

> **79-ocean-current ile ölçülen ayrım:** accent hue 10° vs 172° · radius 22/36 asimetrik vs 6/16 simetrik · motion 0.98s `cubic-bezier(.2,.8,.3,1)` 22px vs 0.83s `cubic-bezier(.35,.02,.25,1)` 40px. Üç eksende de farklı; aynı ürünün "resif" ve "akıntı" ekranlarında yan yana kullanılabilir.

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Coral Reef (styles/85-coral-reef/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="coral-reef"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Baloo 2 600) H1/H2; --font-body (Nunito 400/700) gövde 16px/1.66;
  --font-mono (Courier Prime) etiket 11px +0.14em büyük harf ve tüm derinlik/sıcaklık değerleri (tabular).
Yüzey: koyu turkuaz su zemini + su zerresi grain (--grain .03). radius --radius 22px, --radius-lg 36px,
  kartta asimetrik: 36px 36px 36px 12px; buton/chip/toast 999px hap. Gölge yalnız aşağı yönlü yumuşak.
Renk: tek accent mercan (--accent); accent üstü --accent-ink; ikinci doygun accent yasak.
Kayıt: tür adı + bölge chip'i (lagün / resif düzlüğü / yamaç / çukur / gelgit) + derinlik m + sıcaklık °C.
Hareket: enter 0.98s cubic-bezier(.2,.8,.3,1) 22px stagger 0.08 · scroll top 79% 0.88s 18px once:false ·
  pin açık scrub 1.05 +110% · hover 280ms scale 1.058; prefers-reduced-motion zorunlu.
Yasak: cam/blur, caustic animasyonu, keskin köşe, ikinci accent, büyük harf gövde, sürekli yüzen balık/kabarcık, beyaz zemin.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Kart köşesi asimetrik (36/12), butonlar hap.
- [ ] Mercan accent yalnız eylem/seçim/uyarı.
- [ ] Her kayıtta bölge + derinlik + sıcaklık var.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="coral-reef"] {
  --bg: #0d2b30; --bg-2: #092226;
  --surface: #123840; --surface-2: #174650;
  --ink: #e6f4f2; --ink-soft: #a4c6c4; --ink-faint: #779c9b;
  --accent: #ff8a73; --accent-ink: #2a0d08;
  --line: rgba(230,244,242,.16);
  --radius: 22px; --radius-lg: 36px;
  --shadow: 0 10px 24px -14px rgba(4,14,16,.6); --shadow-hard: 0 0 0 1px rgba(255,138,115,.4);
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: .03;
  --danger: #ff7a7a; --danger-ink: #260606;
  --ok: #7fe0b0; --warn: #ffc46b;
}
```

Koyu mod bloğu `styles/85-coral-reef/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="coral-reef"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
