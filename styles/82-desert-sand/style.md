# 82 · Desert Sand

> **Bir cümlede:** Kumul eğrileriyle yumuşayan, sıcak kum zemininde mor alacakaranlık vurgusuyla ölçüm gösteren çöl atlası arayüzü.

| | |
|---|---|
| **Hissiyat** | sıcak, geniş, sakin, yalın |
| **En iyi** | iklim/çöl verisi, seyahat & rota atlası, vaha tesis yönetimi, sıcak iklim tarım paneli |
| **Kaçın** | yüksek yoğunluklu operasyon ekranı, koyu mod zorunlu ürünler, neon/oyun arayüzleri |
| **Zorluk** | düşük · **Erişilebilirlik** | orta risk (sıcak zemin + mor accent; en düşük etkileşimli çift 6.41:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="desert-sand"]` |
| **Kompozisyon** | `split` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Desert Sand, arayüzü bir **çöl atlası** gibi kurar: geniş boşluk, alçak ufuk, kumul eğrisi. Köşeler ya tam yuvarlak (buton, chip, toast) ya da çok büyük (kart 44px) — arada keskin köşe yoktur. Accent, gün batımında kumun üstüne düşen **mor gölge**dir; turuncu/kiremit kullanılmaz.

Üç kurucu karar: (1) **punto hiyerarşisi** — Cormorant Garamond 300 başlıklar ağırlıkla değil boyutla konuşur (58px), gövde Jost 16px; (2) **tek yön gölge** — yalnız aşağı doğru uzun yumuşak gölge (kum üstünde güneş), yukarı ışık ve iç gölge yok; (3) **hap kontrol** — buton/chip/toast 999px; form alanı 24px; hiçbir kontrol 16px altı köşe almaz.

Bedeli: yoğun tablo ve panel ekranlarında bu dil ağır kalır; ekran başına en fazla 2 kart satırı ve 1 tablo önerilir.

### Ne değildir
- **Japandi (06) değildir:** japandi düşük kontrastlı, yeşilimsi sakinlik ve Lora/Inter ile kurulur; Desert Sand'de sıcak kum + mor accent, Cormorant 300 ve 44px kumul radiusu var.
- **Bohemian (30) değildir:** bohemian terracotta + dokuma desenle süsler; burada desen yok, tek accent mor ve gölge tek yönlü.
- **Ethereal (29) değildir:** ethereal pastel lavanta ve cam yüzeylerle çalışır; Desert Sand opak, sıcak ve gölge temellidir.
- **Editorial (03) değildir:** editorial serif + sıkı ızgara ve 4px radiusla dergi kurar; burada radius 24/44 ve hap butonlar var.

### Nereden gelir
Çöl haritacılığı ve seyahat atlası geleneğinden: kumul konturu, yükseklik profili, vaha işareti, rüzgâr yönü; alçak ufuk ve geniş boşluk. Bugün yeniden kullanılmasının nedeni: iklim verisi uygulamaları çoğunlukla gri kurumsal panel görünüyor ve sıcak iklim bağlamını taşımıyor. Klişeye dönüşmemesi için korunacak detay: **mor accent** (turuncu değil) ve **tek yön gölge**.

### 3 saniyede tanıma testi
1. Köşeler ya tam hap (999px) ya çok büyük (44px); arada keskin köşe yok.
2. Accent mordur; turuncu/kiremit hiçbir yerde yok.
3. Gölge yalnız alta doğru uzun ve yumuşak; hiçbir yüzeyde iç gölge/parlama yok.
4. Başlıklar ince serif (Cormorant 300), 58px'e kadar çıkar; gövde geometrik Jost 16px.
5. Ekranda bir kumul konturu (eğri çizgi) ve bir ölçüm satırı (sıcaklık °C / rüzgâr km/s) var.

## Görsel imza
- **Kumul eğrisi:** kart/görsel üst köşe 44px, alt köşe 24px; hero görselinde 2 eşmerkezli eğri kontur (`--line`).
- **Hap kontrol:** buton, chip, toast 999px radius; yükseklik 48px (dokunma güvenli).
- **Tek yön gölge:** `0 14px 30px -18px rgba(76,58,34,.45)`; yalnız aşağı, negatif yayılım ile yumuşak.
- **İnce serif başlık:** Cormorant Garamond 300, 58px/1.0, `0.01em`; ağırlık yok, hiyerarşi punto.
- **Mor accent:** `#5f4a8a` yalnız eylem/seçim; accent üstü metin `#f7f1e4`.
- **Bölge chip'i:** çerçeve-only hap, 10px mono büyük harf `0.18em` — erg · reg · hamada · vaha · tuzla.
- **Kum grain:** `--grain: .05`, sayfa zemininde ince doku; fotoğrafın üstünde kullanılmaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f0e5cf` | kum zemini | kart zemini |
| `--bg-2` | `#e6d9be` | gölgeli kum bandı | birincil buton |
| `--surface` | `#faf4e6` | kart, form, tablo | sayfa zemini |
| `--surface-2` | `#efe4cc` | başlık satırı, hover, chip zemini | metin zemini |
| `--ink` | `#241f18` | başlık, gövde metni | dekoratif dolgu |
| `--ink-soft` | `#5a4f3e` | ikincil metin, açıklama | accent dolgu üstü |
| `--ink-faint` | `#857a62` | etiket, eksen, dekoratif ayırıcı | gövde, etkileşimli metin |
| `--accent` | `#5f4a8a` | birincil eylem, seçim, vurgu | dekoratif dolgu |
| `--accent-ink` | `#f7f1e4` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(36,31,24,.16)` | kart çerçevesi, ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` **13.09:1** · `ink-soft/bg` **6.41:1** · `accent-ink/accent` **6.59:1** · `ink-faint/bg` **3.39:1** · accent metin olarak bg'ye **5.93:1**.
- Tek vurgu kuralı: mor accent yalnız eylem/seçim/vurgu; durumlar `--ok` (koyu zeytin), `--warn` (hardal), `--danger` (koyu kiremit) — yalnız etiket ve nokta.
- Yasak kombinasyon: mor accent yanında ikinci doygun renk; accent üstünde `--ink-soft`; `--ink-faint` gövde metni; turuncu accent.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 58px | 300 | 1.00 | 0.01em |
| H2 | Cormorant Garamond | 30px | 300 | 1.12 | 0.02em |
| H3 | Jost | 20px | 600 | 1.3 | 0.01em |
| Gövde | Jost | 16px | 400 | 1.66 | 0 |
| Etiket / mono | IBM Plex Mono | 10px | 400 | 1.35 | 0.22em, büyük harf |
| Ölçüm / tablo | IBM Plex Mono | 13px | 400 | 1.45 | 0.04em, tabular |

- Ölçek oranı ≈ 1.9 (16 → 30 → 58); kullanılan basamaklar: 10 · 12 · 13 · 16 · 20 · 30 · 58 · (mobil 32).
- Ölçü önerisi: `h1 { font-size: clamp(32px, 5.2vw, 58px); font-weight: 300 }`.
- Gövde metni maksimum satır uzunluğu: 58ch; lede 46ch'te kırılır.
- Ağırlık kuralı: Cormorant 300 (500 yalnız alıntı), Jost 400/600, mono 400. 700 ve üstü yok; italik yalnız tek vurgu sözcüğünde.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 5/7, içerik 8/4 eğimi |
| Gutter | 32px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, tablo karta döner |

- Asimetri kuralı: ekran başına en fazla 2 asimetrik blok (hero 5/7 + tek 8/4 bölüm).
- Bölüm ritmi: 72px masaüstü / 44px mobil; bölümler arasında çizgi yok, yalnız boşluk.
- Kart içi 28px padding; tablo satırı 44px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | kum zemini, gölgeli bant |
| Kart | `--surface` + 1px `--line` | `var(--shadow)` | panel, kart, tablo |
| Yüzen katman | `--surface` + 1px `--line` | `var(--shadow)` + 0 40px 80px -50px | modal, açılır menü |
| Seçili | `--surface-2` + `--shadow-hard` | 1px koyu halka | seçili kart |

- Kenarlık formülü: `1px solid var(--line)` (kum üstünde neredeyse görünmez); seçili durumda 1px `--shadow-hard`.
- Derinlik nereden gelir: yalnız aşağı yönlü uzun gölge + zemin tonu; ışık/parlama yok.
- Radius: `--radius` 24px (input, küçük kart), `--radius-lg` 44px (kart, modal); buton/chip/toast 999px. 16px altı köşe yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 12px 26px | 999px | 13px/600 Jost büyük harf | `--accent` + `--accent-ink`, `var(--shadow)` | hover %94 · active 2px aşağı · focus 2px accent halka + 4px offset · disabled %45 · loading yarım ay |
| Buton (ikincil) | 48px | 12px 24px | 999px | 13px/600 Jost | şeffaf + 1px `--ink` | hover `--surface-2` · focus accent halka |
| Input | 48px | 0 20px | 24px | 15px Jost | `--surface` + 1px `--line` | focus accent halka · filled sağa hizalı + mono birim · error danger · disabled %45 |
| Kart | — | 28px | `--radius-lg` | başlık 30px Cormorant | `--surface` + 1px `--line`, `var(--shadow)` | hover gölge 4px uzar · seçili 1px koyu halka |
| Chip (bölge) | 24px | 0 12px | 999px | 10px IBM Plex Mono | şeffaf + 1px `--line` | erg · reg · hamada · vaha · tuzla |
| Nav (üst bar) | 64px | 0 32px | 0 | 12px Jost büyük harf | `--bg`, alt 1px `--line` | aktif 1px alt çizgi (metin altında, 6px boşluk) |
| Tablo satırı | 44px | 8px 16px | 0 | gövde 16px + mono ölçüm | alt 1px `--line` | hover `--surface-2` · seçili accent sol nokta |
| Modal | — | 32px | `--radius-lg` | başlık 30px Cormorant | `var(--shadow)` + derin alt gölge | geniş tek sütun, kapatma 48px |
| Toast | 44px | 10px 20px | 999px | 14px Jost | `--surface`, sol 8px accent nokta | 4sn · alt ortada · hover'da durur |
| Grafik | — | — | 0 | eksen 10px mono | alan %10 dolgu, çizgi 2px | ızgara yok, yalnız alt eksen |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` (accent dolgulu butonda `--accent-ink`).
- Dokunma hedefi: 48×48px; chip 24px görsel, satır içi padding ile 44px'e tamamlanır.
- Ölçüm satırı: değer sağa hizalı mono, birim üst etiket olarak mono 10px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 24px ızgara, tam yuvarlak uç; güneş, kumul, vaha, damla |
| Fotoğraf | kumul sırtı/çöl dokusu, alçak güneş, sıcak-nötr ton, max %55 alan, 44px radius çerçeve |
| İllüstrasyon | yalnız kontur: kumul eğrisi, rüzgâr yönü, yükseklik profili (1px) |
| Doku | ince kum grain `.05`; rüzgâr çizgisi yalnız hero görselinde |
| Logo alanı | Cormorant 300 büyük harf, geniş aralık, sol üst 28px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 5/7 hero: solda ince serif başlık + tek hap CTA, sağda kumul profili | `shots/01-landing.png` |
| Dashboard | orta | 3 KPI (sıcaklık, rüzgâr, nem) + bölge dağılımı + ölçüm tablosu | `shots/02-dashboard.png` |
| Form | düşük | tek sütun, 48px alanlar, birim üst etiket | — |
| Liste / tablo | orta | 44px satır, bölge chip'i, sağda mono ölçüm | — |
| Boş durum | düşük | "bu bölgede ölçüm yok" + vaha önerisi | — |
| Onboarding | düşük | 3 adım: bölge seç → ölçüm ekle → uyarı eşiği | — |
| Pricing | orta | iki plan, hap butonlar, alan limitleri | — |
| Giriş / ödeme | çok düşük | tek kart (44px köşe), 48px alanlar | — |
| Modal | orta | bölge detayı: profil, ölçüm geçmişi, not | — |
| Bildirim | düşük | hap toast, alt ortada, 4sn | — |
| Hata | düşük | danger çerçeve + neden + sonraki adım | — |
| Profil / ayar | orta | birim sistemi (°C/°F), dil, uyarı eşikleri | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (bölüm) | 1150ms | `cubic-bezier(.16,.62,.24,1)` | `opacity` + `translateY(40px)`, 160ms arayla |
| Scroll reveal | 1150ms, `top 68%` | aynı | `translateY(48px)`, `once: true` |
| Pin / scrub | 1.35 scrub, +180% mesafe | doğrusal | kumul profili sabitlenir, yükseklik eğrisi kayar |
| Basma | 160ms | aynı | `translateY(2px)` |
| Hover (görsel) | 420ms | aynı | `scale(1.038)` |
| Gölge uzaması | 420ms | aynı | `box-shadow` yayılımı +4px |

- Ölçülen imza: enter **1.15s · cubic-bezier(.16,.62,.24,1) · 40px · stagger 0.16**; scroll **top 68% · 1.15s · 48px · once**; pin **açık · scrub 1.35 · +180%**; hover **420ms · 1.038**.
- Eğri kumul profili gibi: hızlı kalkar, uzun yavaşlar; hiçbir hareket geri sekmez.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin/scrub kapalı, gölge uzaması anında.
- Bu stile yasak hareket: sürekli esen kum/parçacık, bounce, yatay parallax, gradient animasyonu.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f0e5cf` | `#191510` |
| `--bg-2` | `#e6d9be` | `#211b14` |
| `--surface` | `#faf4e6` | `#251f17` |
| `--surface-2` | `#efe4cc` | `#2f271d` |
| `--ink` | `#241f18` | `#f4ecdc` |
| `--ink-soft` | `#5a4f3e` | `#c0b39c` |
| `--accent` | `#5f4a8a` | `#b39ae0` |
| `--accent-ink` | `#f7f1e4` | `#1d1230` |

- Ölçülen koyu kontrastlar: `ink/bg` **15.46:1** · `ink-soft/bg` **8.80:1** · `accent-ink/accent` **7.29:1** · `ink-faint/bg` **4.84:1** · accent metin olarak bg'ye **7.45:1**.
- Koyu modda değişen başka ne var: kum grain `.05` → `.04` (koyu zeminde doku daha görünür olmasın), gölge opaklığı artar ve yayılımı 4px daralır, mor accent bir ton açılır.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="desert-sand"]` olarak durur.

## Zorunlu kurallar
- Köşe ikilisi: hap (999px) veya kumul (24/44px); arada keskin köşe yok.
- Gölge yalnız aşağı doğru uzun ve yumuşak; yukarı ışık, iç gölge yok.
- Accent mor; turuncu/kiremit hiçbir yerde kullanılmaz.
- Her ölçüm birimle ve mono tabular; birim üst etiket olarak 10px.
- Bölge chip'i listede her satırda; ekran başına en fazla 2 kart satırı + 1 tablo.
- Başlık Cormorant 300, gövde Jost 400; hiyerarşi punto ile.

## Yasaklar
- 16px altı kart/buton radiusu, keskin köşe.
- Yukarı gölge, iç gölge, cam/blur, gradient zemin.
- Turuncu/kiremit accent veya ikinci doygun renk.
- 700+ ağırlık, büyük harf gövde, mono gövde metni.
- Sürekli esen kum animasyonu, bounce, yatay parallax.
- Fotoğraf üstünde grain.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 6.41:1 (`ink-soft/bg`).
- `--ink-faint` 3.39:1 — 12px altı yalnız etiket/eksen; gövde metni olarak kullanılmaz.
- Mor accent metin olarak 5.93:1, dolgu üstünde 6.59:1 — ikisi de geçer; accent'te 13px altı metin kullanılmaz.
- Odak görünürlüğü: kum zemininde 2px mor halka (5.93:1) + 3px offset; mor dolgulu butonda `--accent-ink` halka.
- Durum yalnız renkle verilmez: bölge chip'i metin; uyarı noktası + etiket.
- 390px'te tablo karta döner, ölçüm birimi üst etiket olur; yatay taşma yok.
- `prefers-reduced-motion` açıkken giriş, pin/scrub ve gölge uzaması durur.

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
| "Kremsi şablon" hissi | her yüzey aynı kum tonu | `--surface` iki ton açık + tek yön gölge |
| Kontrast düşük | `--ink-faint` gövdeye kullanılmış | gövde `--ink`/`--ink-soft` |
| Mor "yapıştırma" görünüyor | accent dekorasyon olarak | accent yalnız eylem/seçim |
| Gölge kirli | iki yönlü gölge | yalnız aşağı, negatif yayılım |
| Yoğun ekran okunmuyor | 3+ tablo | ekran başına 2 kart satırı + 1 tablo |
| Mobilde taşıyor | 32px gutter | 16px'e iner, tablo karta döner |
| Keskin köşe sırıtıyor | 16px altı radius | hap veya 24/44 kullan |

## Komşu stiller

- **Uyumlu:** `japandi` — sakin boşluk ve düşük kontrast; aynı ürünün içerik bölümlerinde eş.
- **Uyumlu:** `ethereal` — yumuşak geçişler; onboarding/duygusal bölümlerde tamamlayıcı.
- **Uyumlu:** `editorial-design` — uzun okuma ve serif başlık; blog/atlas yazılarında eş.
- **Yasak:** `pixel-art` — keskin piksel köşeleri kumul radiusuyla çelişir.
- **Yasak:** `cyberpunk` — neon çok renk, tek mor accent kuralını yok eder.
- **Yasak:** `neumorphism` — iç gölge, tek yön gölge fiziğini bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.unccd.int/ | kuraklık/çölleşme metrikleri ve bölge terminolojisi |
| https://www.nps.gov/deva/index.htm | kumul, tuzla ve sıcaklık verisi sunumu |
| https://whc.unesco.org/en/list/ | çöl peyzajı künyesi ve koruma statüsü etiketleri |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | sıcak kum zemininde metin kontrastı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | 1px çerçeve ve grafik çizgisi kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Desert Sand (styles/82-desert-sand/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="desert-sand"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cormorant Garamond 300) yalnız H1/H2 (58px/1.0); --font-body (Jost 400/600) gövde 16px/1.66;
  --font-mono (IBM Plex Mono) etiket 10px +0.22em ve tüm ölçüm değerleri (tabular, birim üst etiket).
Yüzey: sıcak kum zemini + ince grain (--grain .05). radius --radius 24px, --radius-lg 44px; buton/chip/toast 999px hap.
  Gölge YALNIZ aşağı yönlü uzun ve yumuşak: 0 14px 30px -18px rgba(76,58,34,.45). İç gölge/parlama yasak.
Renk: tek accent mor (--accent), accent üstü --accent-ink; turuncu/kiremit kullanılmaz.
Bölge chip'i: erg / reg / hamada / vaha / tuzla — çerçeve-only hap, 10px mono.
Hareket: enter 1.15s cubic-bezier(.16,.62,.24,1) 40px stagger 0.16 · scroll top 68% 1.15s 48px once ·
  pin açık scrub 1.35 +180% · hover 420ms scale 1.038; prefers-reduced-motion zorunlu.
Yasak: keskin köşe, yukarı/iç gölge, cam/blur, gradient, turuncu accent, bounce, yatay parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Köşeler hap veya 24/44; keskin köşe yok.
- [ ] Gölge yalnız aşağı yönlü; iç gölge/parlama yok.
- [ ] Accent mor; turuncu hiçbir yerde yok.
- [ ] Ölçümler birimle ve mono tabular.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] 390px'te taşma yok; dokunma hedefi ≥ 44px.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="desert-sand"] {
  --bg: #f0e5cf; --bg-2: #e6d9be;
  --surface: #faf4e6; --surface-2: #efe4cc;
  --ink: #241f18; --ink-soft: #5a4f3e; --ink-faint: #857a62;
  --accent: #5f4a8a; --accent-ink: #f7f1e4;
  --line: rgba(36,31,24,.16);
  --radius: 24px; --radius-lg: 44px;
  --shadow: 0 14px 30px -18px rgba(76,58,34,.45); --shadow-hard: 0 0 0 1px rgba(36,31,24,.22);
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: .05;
  --danger: #8f2f22; --danger-ink: #fbf0e6;
  --ok: #46603a; --warn: #8a5a1e;
}
```

Koyu mod bloğu `styles/82-desert-sand/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="desert-sand"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
