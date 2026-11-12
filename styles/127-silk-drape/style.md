# 127 · Silk Drape

> **Bir cümlede:** Işığı yumuşatan ipek kıvrımları gibi akan, asimetrik köşelerle kesilmiş sıcak bir kumaş atölyesi arayüzü.

| | |
|---|---|
| **Hissiyat** | yumuşak, sıcak, akışkan, zarif |
| **En iyi** | kumaş/tekstil kataloğu, moda evi vitrini, ipek & halı butiği, gelinlik konfigüratörü |
| **Kaçın** | yüksek yoğunluklu operasyon paneli, endüstriyel izleme, oyun arayüzü — yumuşaklık orada "yavaş" okunur |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 7.16:1) |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="silk-drape"]` |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Silk Drape, arayüzü **kumaş topu** gibi kurar: yumuşak sıcak zemin, geniş asimetrik kart köşesi (44 44 44 12), hap kontroller ve tek bir ipek kıvrımı. Lüks, parlama ile değil **kıvrımın yumuşaklığı ve boşluğun cömertliği** ile anlatılır.

Üç kurucu karar: (1) **kıvrım köşesi** — kart 44px, alt-sol 12px; buton/chip/toast 999px; yumuşak formun dışına çıkmak yasak; (2) **sıcak mürekkep** — dut ipeği moru `#6b2f4a` tek accent; altın yok; (3) **uzun satır** — gövde 15px/1.7, başlık Cormorant Garamond 300 ile 60px'e kadar; punto hiyerarşisi ağırlıkla değil.

Bedeli: yumuşak köşeler ve geniş boşluk bilgi yoğunluğunu düşürür; ekran başına 2 kart satırı ve 1 tablo sınırı vardır. Bölüm boşluğu 80px'ten aşağı inerse stil "şablon"a döner.

### Ne değildir
- **Luxury Typography (04) değildir:** krem zemin + altın accent ve ince serif butik dil; Silk Drape sıcak ipek zemin + mor accent ve asimetrik 44px kıvrım köşesi kullanır.
- **Ethereal (29) değildir:** pastel lavanta, cam yüzey ve çok düşük kontrast; burada opak yüzey, güçlü mor accent ve 7.16:1 kontrast var.
- **Desert Sand (82) değildir:** kum zemin + 24/44 kumul radiusu + mor accent; 127 asimetrik kıvrım köşesi, hap kontroller ve Cormorant 300 ile ayrışır (82'de gölge tek yön kum tepesi, 127'de kumaş düşüşü).
- **Grand Tourer (41) değildir:** krem deri + krom hairline + motor sporları dil; burada krom yok, kıvrım ve dikiş var.

### Nereden gelir
İpek dokuma atölyesi ve moda evi kumaş kartelasından: iplik türü, gramaj (g/m²), en (cm), boya adı, kıvrım fotoğrafı. Bugün yeniden kullanılmasının nedeni: tekstil e-ticareti ürünü ızgara fotoğrafıyla gösteriyor ama **kumaşın düşüşünü** ve gramajını anlatamıyor; lüks algısı kıvrımdadır. Klişeye dönüşmemesi için korunacak detay: **asimetrik kıvrım köşesi** ve gloss yasağı.

### 3 saniyede tanıma testi
1. Zemin sıcak ipek (kırık beyaz-bej); beyaz panel yok.
2. Kartların bir köşesi farklı: 44 44 44 12; butonlar hap.
3. Accent dut ipeği moru; altın/parlak metal yok.
4. Başlıklar ince serif (Cormorant 300), 60px'e kadar; gövde Poppins 15px, satır 1.7.
5. Her kartta iplik türü chip'i + gramaj (g/m²) + en (cm).

## Görsel imza
- **Kıvrım köşesi:** kart `border-radius: 44px 44px 44px 12px`; buton/chip/toast 999px; input 20px.
- **İpek accent:** `#6b2f4a` yalnız eylem/seçim/uyarı; accent üstü metin `#f9f1f4`.
- **Kumaş düşüşü:** gölge yalnız alta doğru geniş ve düşük opaklıkta (`0 10px 30px -18px`); gloss yok.
- **İnce serif:** Cormorant Garamond 300, H1 60px/1.02, `0.02em`; ağırlık yok, hiyerarşi punto.
- **Kıvrım çizgisi:** hero görselinde 3 eğri 1px çizgi (`--ink-faint` %30); başka yerde tekrar etmez.
- **İpek grain:** `--grain: .012` — neredeyse görünmez doku; fotoğrafın üstünde kullanılmaz.
- **Gramaj etiketi:** sağ alt köşede mono 12px `180 g/m²`, birim ayrı ve `--ink-faint`.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f6efe7` | ipek zemini | kart zemini |
| `--bg-2` | `#ede2d6` | gölgeli bölüm bandı | birincil buton |
| `--surface` | `#fdf9f3` | kumaş kartı, form | sayfa zemini |
| `--surface-2` | `#f3eade` | chip, hover, başlık satırı | metin zemini |
| `--ink` | `#241a20` | metin, başlık | dekoratif dolgu |
| `--ink-soft` | `#5b4b52` | ikincil metin, açıklama | accent dolgu üstü |
| `--ink-faint` | `#83737a` | birim, etiket, kıvrım çizgisi | gövde, etkileşimli metin |
| `--accent` | `#6b2f4a` | birincil eylem, seçim, uyarı | dekoratif dolgu |
| `--accent-ink` | `#f9f1f4` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(36,26,32,.14)` | kart çerçevesi, ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` **14.81:1** · `ink-soft/bg` **7.16:1** · `accent-ink/accent` **8.88:1** · `ink-faint/bg` **3.92:1** · accent metin olarak bg'ye **8.64:1**.
- Tek vurgu kuralı: mor accent yalnız eylem/seçim/uyarı. Durumlar `--ok` (koyu yosun), `--warn` (hardal), `--danger` (bordo) — yalnız etiket ve nokta.
- Yasak kombinasyon: accent yanında altın/şampanya ikinci vurgu; accent üstünde `--ink-soft`; `--ink-faint` gövde metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 60px | 300 | 1.02 | 0.02em |
| H2 | Cormorant Garamond | 32px | 300 | 1.14 | 0.01em |
| H3 | Poppins | 20px | 600 | 1.3 | 0 |
| Gövde | Poppins | 15px | 400 | 1.70 | 0 |
| Etiket / mono | IBM Plex Mono | 10px | 400 | 1.35 | 0.24em, büyük harf |
| Ölçü / tablo | IBM Plex Mono | 12px | 400 | 1.45 | 0.04em, tabular |

- Ölçek oranı ≈ 1.9 (15 → 32 → 60); kullanılan basamaklar: 10 · 12 · 13 · 15 · 20 · 32 · 60 · (mobil 34).
- Ölçü önerisi: `h1 { font-size: clamp(34px, 5.4vw, 60px); font-weight: 300 }`.
- Gövde metni maksimum satır uzunluğu: 56ch; kumaş notu 44ch'te kırılır.
- Ağırlık kuralı: Cormorant 300 (500 yalnız alıntı), Poppins 400/600, mono 400. 700 yok; italik yalnız tek vurgu sözcüğünde.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 4/8, kartela 2×3 |
| Gutter | 28px |
| Container genişliği | 1140px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, kartela 2'li |

- Asimetri kuralı: ekran başına en fazla 2 asimetrik blok (hero 4/8 + kartela ritmi).
- Bölüm ritmi: 80px masaüstü / 44px mobil; bölümler arasında çizgi yok, boşluk var.
- Kart içi 28px; tablo satırı 44px; chip ile başlık arası 12px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | ipek zemini |
| Kart | `--surface` + 1px `--line` | `var(--shadow)` | kumaş kartı, panel |
| Yüzen katman | `--surface` + 1px `--line` | `var(--shadow)` + 0 40px 80px -50px | modal, alt sayfa |
| Seçili | `--surface-2` + `--shadow-hard` | 1px mor halka | seçili kumaş |

- Kenarlık formülü: `1px solid var(--line)`; seçili kumaşta `--shadow-hard` (1px mor halka).
- Derinlik nereden gelir: yumuşak alt gölge + ton katmanı; gloss, iç gölge, parlama yok.
- Radius: `--radius` 20px (input, iç kutu), `--radius-lg` 44px (kart, modal); buton/chip/toast 999px; kartta alt-sol 12px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 12px 26px | 999px | 13px/600 Poppins büyük harf | `--accent` + `--accent-ink`, `var(--shadow)` | hover %94 · active 1px aşağı · focus 2px mor halka + 4px offset · disabled %45 · loading kıvrım çizgileri |
| Buton (ikincil) | 48px | 12px 24px | 999px | 13px/600 Poppins | şeffaf + 1px `--ink` | hover `--surface-2` · focus mor halka |
| Input | 48px | 0 20px | 20px | 14px Poppins | `--surface` + 1px `--line` | focus mor halka · filled birim mono · error bordo · disabled %45 |
| Kumaş kartı | — | 28px | 44 44 44 12 | başlık 20px Poppins 600 | `--surface` + 1px `--line`, `var(--shadow)` | seçili 1px mor halka · hover gölge 4px genişler |
| Chip (iplik) | 24px | 0 12px | 999px | 10px IBM Plex Mono | şeffaf + 1px `--line` | dut ipeği · tussah · saten · şifon · brokar |
| Nav (üst bar) | 64px | 0 32px | 0 | 12px Poppins büyük harf | `--bg`, alt 1px `--line` | aktif 1px alt çizgi (6px boşluk) |
| Tablo satırı | 44px | 8px 16px | 0 | kumaş gövde + mono gramaj | alt 1px `--line` | hover `--surface-2` · seçili mor sol nokta |
| Modal | — | 32px | 44px | başlık 32px Cormorant | `var(--shadow)` + derin alt gölge | kumaş detayı, kapatma 48px |
| Toast | 44px | 10px 20px | 999px | 14px Poppins | `--surface`, sol 8px mor nokta | 4.2sn · alt ortada |
| Grafik | — | — | 0 | eksen 10px mono | alan %10 dolgu, çizgi 2px yuvarlak uç | ızgara yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px`; accent dolgulu butonda `--accent-ink` halka.
- Dokunma hedefi: 48×48px; chip 24px görsel, satır içi padding ile 44px.
- Gramaj/en: kartın sağ altında mono; birim ayrı ve `--ink-faint`; değerler tabular.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 20px ızgara, yuvarlak uç; ipek böceği, kumaş topu, dikiş, katlama |
| Fotoğraf | ipek kumaş kıvrımı, yumuşak yan ışık, sıcak-nötr ton, max %50 alan, 44px radius |
| İllüstrasyon | yalnız kumaş kıvrım çizimi: 1px eğri çizgi ve kat izleri |
| Doku | ipek grain `.012`; kıvrım deseni yalnız hero görselinde |
| Logo alanı | Cormorant 300 büyük harf, geniş aralık, sol üst 28px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 4/8 hero: solda ince serif başlık + tek hap CTA, sağda kumaş kıvrımı | `shots/01-landing.png` |
| Dashboard | düşük | 3 KPI (kumaş, gramaj ort., renk) + kartela | `shots/02-dashboard.png` |
| Form | düşük | yeni kumaş: iplik, gramaj+g/m², en+cm, boya | — |
| Liste / tablo | orta | 44px satır, iplik chip'i, sağda mono gramaj/en | — |
| Boş durum | düşük | "kartelada kumaş yok" + ilk kumaşı ekle | — |
| Onboarding | düşük | 3 adım: koleksiyon → kumaş → renk paleti | — |
| Pricing | orta | iki plan, kumaş/renk limitleri hap kartlarda | — |
| Giriş / ödeme | çok düşük | tek kart (44px köşe), 48px alanlar | — |
| Modal | orta | kumaş detayı: kıvrım fotoğrafı, gramaj, bakım | — |
| Bildirim | düşük | hap toast, alt ortada, 4.2sn | — |
| Hata | düşük | bordo çerçeve + neden + sonraki adım | — |
| Profil / ayar | orta | koleksiyon listesi, birim (cm/inç), boya paleti | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (kart) | 760ms | `cubic-bezier(.46,.03,.24,1)` | `opacity` + `translateY(27px)`, 78ms arayla |
| Scroll reveal | 920ms, `top 65%` | aynı | `translateY(29px)`, `once: true` |
| Pin / scrub | 0.78 scrub, +145% mesafe | doğrusal | kumaş kartelası sabitlenir, kıvrım katmanı kayar |
| Basma | 180ms | aynı | `translateY(1px)` |
| Hover (görsel) | 245ms | aynı | `scale(1.048)` |
| Gölge genişlemesi | 380ms | aynı | `box-shadow` yayılımı +4px |

- Ölçülen imza: enter **0.76s · cubic-bezier(.46,.03,.24,1) · 27px · stagger 0.078**; scroll **top 65% · 0.92s · 29px · once**; pin **açık · scrub 0.78 · +145%**; hover **245ms · 1.048**.
- Kumaşın düşüşü: yumuşak kalkış, uzun iniş; hiçbir hareket geri sekmez.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin/scrub ve gölge genişlemesi kapalı.
- Bu stile yasak hareket: sürekli dalgalanan kumaş, bounce, yatay parallax, gloss/parlama geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f6efe7` | `#1a1217` |
| `--bg-2` | `#ede2d6` | `#140e12` |
| `--surface` | `#fdf9f3` | `#221820` |
| `--surface-2` | `#f3eade` | `#2c2028` |
| `--ink` | `#241a20` | `#f6ecf0` |
| `--ink-soft` | `#5b4b52` | `#c4b1ba` |
| `--accent` | `#6b2f4a` | `#d08aa8` |
| `--accent-ink` | `#f9f1f4` | `#26101a` |

- Ölçülen koyu kontrastlar: `ink/bg` **15.90:1** · `ink-soft/bg` **9.05:1** · `accent-ink/accent` **6.73:1** · `ink-faint/bg` **4.75:1** · accent metin olarak bg'ye **6.90:1**.
- Koyu modda değişen başka ne var: grain `.012` → `.02`, çizgi %14 → %16, accent bir ton açılır (gül kurusu); gölge opaklığı artar.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="silk-drape"]` olarak durur.

## Zorunlu kurallar
- Her kumaş kaydı: iplik türü + gramaj (g/m²) + en (cm) + boya adı.
- Kart köşesi asimetrik (44 44 44 12); buton/chip/toast hap; form 20px.
- Mor accent yalnız eylem/seçim/uyarı; altın/parlak metal yok.
- Gölge yalnız alta doğru, geniş ve yumuşak; gloss/parlama yok.
- Başlık Cormorant 300 (60px'e kadar), gövde Poppins 15px/1.7; hiyerarşi punto.
- İpek grain yalnız zemin katmanında; dokunma hedefi 48px.

## Yasaklar
- Gloss/parlama, cam/blur, metalik gradient.
- Keskin köşe (12px altı) kart/buton; hap olmayan buton.
- İkinci doygun accent (altın, turkuaz); accent'i dekorasyon olarak kullanmak.
- Büyük harf gövde, 13px altı gövde metni, italik başlık.
- Sürekli dalgalanan kumaş, bounce, yatay parallax.
- Beyaz zemin.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 7.16:1 (`ink-soft/bg`).
- `--ink-faint` 3.92:1 — birim/etiket ve kıvrım çizgisi için; gövde metni olarak kullanılmaz.
- Mor accent metin olarak 8.64:1, dolgu üstünde 8.88:1 — ikisi de geçer.
- Odak görünürlüğü: 2px mor halka (8.64:1) + 3px offset; koyu modda gül kurusu halka (6.90:1).
- Durum yalnız renkle verilmez: iplik chip metni, uyarı etiketi + 8px nokta.
- 390px'te kartela 2'li, tablo karta döner; yatay taşma yok.
- `prefers-reduced-motion` açıkken giriş, pin/scrub, hover ölçeği ve gölge genişlemesi durur.

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
| "Şablon" hissi | her köşe aynı yuvarlak | asimetrik 44 44 44 12 |
| Lüks kayboluyor | gloss/parlama eklendi | mat yüzey, yumuşak gölge |
| Okunmuyor | 13px gövde | 15px Poppins, 1.7 satır |
| Kumaş "plastik" görünüyor | sert gölge | geniş, düşük opaklıkta gölge |
| Kartela dağılıyor | 28px gutter daraltılmış | 28px korunur, mobilde 16px |
| Koyu modda kıvrım kayboluyor | çizgi opaklığı düşük | koyu blokta %16 + grain .02 |
| Mobilde taşıyor | 2×3 kartela sabit | tek kolon + kart |

## Komşu stiller

- **Uyumlu:** `luxury-typography` — aynı zarif serif ailesi; butik marka bölümlerinde altın varyant.
- **Uyumlu:** `ethereal` — yumuşak geçişler; duygusal onboarding'de tamamlayıcı.
- **Uyumlu:** `grand-tourer` — krem deri ve krom; premium ürün vitrininde eş.
- **Yasak:** `neo-brutalism` — kalın siyah çerçeve, kıvrım dilini yok eder.
- **Yasak:** `safety-signage` — yüksek doygun uyarı sarısı, ipek paletini bozar.
- **Yasak:** `pixel-art` — piksel köşe, yumuşak formla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.vam.ac.uk/collections/textiles | kumaş türleri, gramaj ve doku terminolojisi |
| https://www.metmuseum.org/toah/hd/silk/hd_silk.htm | ipek üretimi ve tarihsel kullanım bağlamı |
| https://ich.unesco.org/en/home | dokuma/boya zanaatı kayıt dili |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | sıcak ipek zemininde metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Silk Drape (styles/127-silk-drape/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="silk-drape"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cormorant Garamond 300) H1/H2 (60px/1.02); --font-body (Poppins 400/600) gövde 15px/1.7;
  --font-mono (IBM Plex Mono) etiket 10px +0.24em ve gramaj/en değerleri (tabular).
Yüzey: sıcak ipek zemini + çok ince grain (--grain .012). radius --radius 20px, --radius-lg 44px,
  kartta ASİMETRİK: 44px 44px 44px 12px; buton/chip/toast 999px hap. Gölge yalnız alta, geniş, düşük opaklık.
Renk: tek accent dut ipeği moru (--accent), accent üstü --accent-ink; altın/parlak metal yasak.
Kayıt: iplik türü chip'i + gramaj g/m² + en cm + boya adı.
Hareket: enter 0.76s cubic-bezier(.46,.03,.24,1) 27px st.078 · scroll top 65% 0.92s 29px once ·
  pin açık scrub 0.78 +145% · hover 245ms scale 1.048; prefers-reduced-motion zorunlu.
Yasak: gloss/parlama, cam/blur, metalik gradient, keskin köşe, ikinci accent, büyük harf gövde, dalgalanan kumaş animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Kart köşesi asimetrik (44/12), butonlar hap.
- [ ] Mor accent dışında vurgu yok; gloss yok.
- [ ] Her kayıtta iplik + gramaj + en var.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="silk-drape"] {
  --bg: #f6efe7; --bg-2: #ede2d6;
  --surface: #fdf9f3; --surface-2: #f3eade;
  --ink: #241a20; --ink-soft: #5b4b52; --ink-faint: #83737a;
  --accent: #6b2f4a; --accent-ink: #f9f1f4;
  --line: rgba(36,26,32,.14);
  --radius: 20px; --radius-lg: 44px;
  --shadow: 0 10px 30px -18px rgba(60,34,44,.35); --shadow-hard: 0 0 0 1px rgba(107,47,74,.3);
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: .012;
  --danger: #9b2436; --danger-ink: #fdf3f4;
  --ok: #3d5c40; --warn: #7d5a1e;
}
```

Koyu mod bloğu `styles/127-silk-drape/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="silk-drape"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 8.64:1 · `ink-soft / surface-2` 6.85:1 · `accent-ink / accent` 8.88:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 360px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: ipek perde: kuma kıvrımları + kenar dikişi.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.76s` / `scroll 0.92s` (ikisi de ≤ 1.2 s).
