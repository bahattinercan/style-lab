# 129 · Porcelain Glaze

> **Bir cümlede:** Sır gibi pürüzsüz bir zeminde, kobalt çizgilerle ölçülen porselen parçaların sessiz bir koleksiyon arayüzü.

| | |
|---|---|
| **Hissiyat** | temiz, ince, serin, ölçülü |
| **En iyi** | porselen/seramik kataloğu, müzayede vitrini, sofra & dekor markası, sanat galerisi koleksiyonu |
| **Kaçın** | yüksek yoğunluklu panel, oyun/etkinlik, endüstriyel izleme — incelik orada "zayıf" okunur |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 6.74:1) |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="porcelain-glaze"]` |
| **Kompozisyon** | `index` · `split` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Porcelain Glaze, arayüzü **sırlanmış porselen** gibi kurar: soğuk beyaz-pembe arası temiz zemin, neredeyse yok gölge, 1px ince kontur ve tek bir kobalt çizgisi. Süs yoktur; değer **orantı, ince çizgi ve boşluk** ile anlatılır.

Üç kurucu karar: (1) **sıfır doku** — `--grain: 0`; krakle deseni bilinçli olarak yok, yüzey pürüzsüz kalır (tek istisna: hero görselindeki silüet eğrisi); (2) **kobalt accent** — `#1d4f9c` yalnız eylem/seçim/uyarı; (3) **iki radius** — kontrol 14px, kart 28px, buton/chip hap; keskin köşe yok ama abartılı yuvarlama da yok.

Bedeli: düşük gölge ve ince kontur, zayıf ekranlarda sınırları kaybettirebilir; bu yüzden çizgi `--line` %12'nin altına inmez ve her kartın içinde en az bir mono ölçü satırı bulunur.

### Ne değildir
- **Andalusian Azulejo (69) değildir:** karo deseni, geometrik tekrar ve Poiret One ile dekoratif süs kurar; Porcelain Glaze desensizdir, Cormorant Garamond + 14/28px radius ve `once:false` scroll ile ayrışır; ikisi de seramik ailesinde olsa da biri **desenli karo**, diğeri **sade sır** dilidir.
- **Japanese Ma (67) değildir:** beyaz boşluk ve 0/2px keskin köşe ile mimari sessizlik; burada 14/28px yumuşak radius ve kobalt accent var.
- **Ethereal (29) değildir:** pastel lavanta + cam yüzey; Porcelain Glaze opak, soğuk beyaz ve kobalt.
- **Luxury Typography (04) değildir:** krem zemin + altın accent; burada soğuk beyaz + kobalt, altın yok.

### Nereden gelir
Porselen atölyesi ve müzayede kataloğu geleneğinden: parça adı, sır (seladon/kobalt/krakle), çap/yükseklik, ağırlık, koleksiyon. Bugün yeniden kullanılmasının nedeni: sofra/dekor markaları sır farkını fotoğrafla anlatamıyor; sır adı ve ölçü, kataloğun asıl bilgisi. Klişeye dönüşmemesi için korunacak detay: **sıfır doku** ve kobaltın yalnız işlevsel kullanımı.

### 3 saniyede tanıma testi
1. Zemin soğuk beyaz-mavi; hiçbir yerde doku/grain yok (pürüzsüz sır).
2. Kobalt accent; altın/turkuaz ikinci renk yok.
3. Kart köşesi 28px, butonlar hap; keskin köşe yok.
4. Başlıklar ince garamond (Cormorant Garamond 500), gövde yuvarlak sans (Nunito 16px).
5. Her kartta sır chip'i + çap (cm) + ağırlık (g) mono satırı var.

## Görsel imza
- **Sıfır doku:** `--grain: 0`; sayfada krakle/kum/desen yok. Yüzey pürüzsüzlüğü imzanın kendisidir.
- **Kobalt çizgi:** aktif öğe ve odakta 1–2px kobalt; dekoratif ikinci çizgi yok.
- **İnce kontur:** tüm paneller `1px solid var(--line)` (%12) + 2px gölge; sınırı çizgi taşır.
- **İki radius:** kontrol 14px, kart 28px, buton/chip/toast 999px hap.
- **Silüet eğrisi:** hero görselinde 1px vazo silüeti; sayfanın başka yerinde tekrar etmez.
- **Mono ölçü satırı:** her kartta en az bir `çap 24 cm · 780 g` satırı, tabular, birim `--ink-faint`.
- **Sır chip'i:** hap, 10px Space Mono `0.16em` — seladon · kobalt · sırlı beyaz · krakle · mat.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f2f6f8` | porselen zemini | kart zemini |
| `--bg-2` | `#e6eef3` | gölgeli bölüm bandı | birincil buton |
| `--surface` | `#fbfdfe` | parça kartı, form | sayfa zemini |
| `--surface-2` | `#eef4f7` | chip, hover, başlık satırı | metin zemini |
| `--ink` | `#141d26` | metin, başlık | dekoratif dolgu |
| `--ink-soft` | `#46586a` | ikincil metin, açıklama | accent dolgu üstü |
| `--ink-faint` | `#6f8394` | birim, etiket, eksen | gövde, etkileşimli metin |
| `--accent` | `#1d4f9c` | birincil eylem, seçim, uyarı | dekoratif dolgu |
| `--accent-ink` | `#f4f8fd` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(20,29,38,.12)` | panel çerçevesi, ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` **15.66:1** · `ink-soft/bg` **6.74:1** · `accent-ink/accent` **7.43:1** · `ink-faint/bg` **3.61:1** · accent metin olarak bg'ye **7.29:1**.
- Tek vurgu kuralı: kobalt yalnız eylem/seçim/uyarı. Durumlar `--ok` (deniz yeşili), `--warn` (hardal), `--danger` (koyu kiremit) — yalnız etiket ve nokta.
- Yasak kombinasyon: kobalt yanında turkuaz/altın; accent üstünde `--ink-soft`; `--ink-faint` gövde metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 46px | 500 | 1.10 | 0.01em |
| H2 | Cormorant Garamond | 26px | 500 | 1.22 | 0.01em |
| H3 | Nunito | 19px | 700 | 1.28 | 0 |
| Gövde | Nunito | 16px | 400 | 1.68 | 0 |
| Etiket / mono | Space Mono | 11px | 700 | 1.35 | 0.18em, büyük harf |
| Ölçü / tablo | Space Mono | 13px | 400 | 1.45 | 0.02em, tabular |

- Ölçek oranı ≈ 1.6 (16 → 26 → 46); kullanılan basamaklar: 11 · 12 · 13 · 14 · 16 · 19 · 26 · 46 · (mobil 30).
- Ölçü önerisi: `h1 { font-size: clamp(30px, 4vw, 46px); font-weight: 400 }`.
- Gövde metni maksimum satır uzunluğu: 60ch; sır notu 46ch'te kırılır.
- Ağırlık kuralı: Cormorant Garamond 300/500 (başlık 500), Nunito 400/700, mono 400/700. Sentetik kalın yasak. İtalik yalnız tek vurgu sözcüğünde.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 6/6 (görsel 2px sağa kayar), koleksiyon 3×3 |
| Gutter | 20px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, koleksiyon 2'li |

- Asimetri kuralı: ekran başına 1 (hero görseli 2px sağa kayar; bu ölçülebilir tek kayma).
- Bölüm ritmi: 60px masaüstü / 36px mobil; bölümler arasında çizgi yok.
- Kart içi 22px; tablo satırı 42px; chip ile başlık arası 10px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sır zemini |
| Kart | `--surface` + 1px `--line` | `0 2px 6px` | parça kartı, panel |
| Yüzen katman | `--surface` + 1px `--accent` | `var(--shadow)` + 0 30px 60px -44px | modal, menü |
| Seçili | `--surface-2` + `--shadow-hard` | 1px kobalt halka | seçili parça |

- Kenarlık formülü: `1px solid var(--line)`; seçili parçada `--shadow-hard` (1px kobalt halka).
- Derinlik nereden gelir: yalnız 1px çizgi + 1–2 ton fark; parlama (gloss) yok.
- Radius: `--radius` 14px (input, iç kutu), `--radius-lg` 28px (kart, modal); buton/chip/toast 999px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 12px 24px | 999px | 14px/700 Nunito | `--accent` + `--accent-ink`, `var(--shadow)` | hover %90 · active 1px aşağı · focus 2px kobalt halka + 3px offset · disabled %45 · loading ince halka |
| Buton (ikincil) | 46px | 12px 22px | 999px | 14px/700 Nunito | `--surface` + 1px `--line` | hover `--surface-2` · focus kobalt halka |
| Input | 46px | 0 18px | 14px | 15px Nunito | `--surface` + 1px `--line` | focus kobalt halka · filled birim mono · error danger · disabled %45 |
| Parça kartı | — | 22px | `--radius-lg` | başlık 19px Nunito 700 | `--surface` + 1px `--line`, 2px gölge | seçili 1px kobalt halka |
| Chip (sır) | 24px | 0 10px | 999px | 10px Space Mono | `--surface-2` + 1px `--line` | seladon · kobalt · sırlı beyaz · krakle · mat |
| Nav (üst bar) | 60px | 0 28px | 0 | 13px Nunito büyük harf | `--bg`, alt 1px `--line` | aktif 2px kobalt alt çizgi · sağda koleksiyon |
| Tablo satırı | 42px | 8px 14px | 0 | parça gövde + mono ölçü | alt 1px `--line` | hover `--surface-2` · seçili kobalt sol nokta |
| Modal | — | 28px | `--radius-lg` | başlık 26px Cormorant | 1px kobalt + hafif gölge | silüet + sır notu, kapatma 46px |
| Toast | 42px | 10px 18px | 999px | 14px Nunito | `--surface`, sol 8px kobalt nokta | 4sn · alt ortada |
| Grafik | — | — | 0 | eksen 11px mono | çizgi 1.5px, alan %8 | ızgara 1px, yalnız alt eksen |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px`; accent dolgulu butonda `--accent-ink` halka.
- Dokunma hedefi: 46×46px; chip 24px görsel, satır içi padding ile 44px.
- Ölçü satırı: `çap 24 cm · 780 g` biçiminde, birimler `--ink-faint` ve ayrı; değerler tabular.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 22px ızgara, tam yuvarlak uç; vazo, tabak, fırça, sır damlası |
| Fotoğraf | porselen yüzey/vazo silüeti, yumuşak stüdyo ışığı, soğuk beyaz, max %40 alan |
| İllüstrasyon | yalnız silüet çizimi: 1px kontur ve sır akışı eğrisi |
| Doku | yok (`--grain: 0`); sır parlaklığı yalnız fotoğrafta |
| Logo alanı | Cormorant Garamond 500 büyük harf, geniş aralık, sol üst 22px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 6/6 hero: solda başlık + tek hap CTA, sağda silüet (2px kaymış) | `shots/01-landing.png` |
| Dashboard | düşük | 3 KPI (parça, sır çeşidi, ortalama çap) + koleksiyon | `shots/02-dashboard.png` |
| Form | düşük | parça girişi: tür, sır, çap+cm, ağırlık+g | — |
| Liste / tablo | orta | 42px satır, sır chip'i, sağda mono ölçü | — |
| Boş durum | düşük | "koleksiyonda parça yok" + ilk parçayı ekle | — |
| Onboarding | düşük | 3 adım: koleksiyon → parça → sır seç | — |
| Pricing | orta | iki plan, parça/koleksiyon limitleri | — |
| Giriş / ödeme | çok düşük | tek kart (28px köşe), 46px alanlar | — |
| Modal | orta | parça detayı: silüet, sır notu, ölçüler | — |
| Bildirim | düşük | hap toast, alt ortada, 4sn | — |
| Hata | düşük | danger çerçeve + neden + sonraki adım | — |
| Profil / ayar | orta | koleksiyon listesi, birim (cm/inç), sır paleti | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (parça) | 560ms | `cubic-bezier(.12,.75,.24,1)` | `opacity` + `translateY(33px)`, 95ms arayla |
| Scroll reveal | 840ms, `top 98%` | aynı | `translateY(35px)`, `once: false` (yukarı kaydırınca tekrar) |
| Basma | 150ms | aynı | `translateY(1px)` |
| Hover (görsel) | 360ms | aynı | `scale(1.028)` |
| Seçim halkası | 280ms | aynı | `outline-color` (kobalt) |
| Pin | kapalı | — | — |

- Ölçülen imza: enter **0.56s · cubic-bezier(.12,.75,.24,1) · 33px · stagger 0.095**; scroll **top 98% · 0.84s · 35px · once:false**; pin **kapalı**; hover **360ms · 1.028**.
- Sır akışı: hızlı başlar, yumuşakça durur; geri sekme yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms, hover ölçeği 1.000, içerik anında.
- Bu stile yasak hareket: sürekli akan sır/damla, bounce, parallax, gloss geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f2f6f8` | `#0b1420` |
| `--bg-2` | `#e6eef3` | `#0e1926` |
| `--surface` | `#fbfdfe` | `#121f2e` |
| `--surface-2` | `#eef4f7` | `#192838` |
| `--ink` | `#141d26` | `#eaf2fa` |
| `--ink-soft` | `#46586a` | `#a8bccf` |
| `--accent` | `#1d4f9c` | `#6aa6f0` |
| `--accent-ink` | `#f4f8fd` | `#07172b` |

- Ölçülen koyu kontrastlar: `ink/bg` **16.37:1** · `ink-soft/bg` **9.48:1** · `accent-ink/accent` **7.14:1** · `ink-faint/bg` **5.55:1** · accent metin olarak bg'ye **7.33:1**.
- Koyu modda değişen başka ne var: grain zaten 0, açık modda da koyu modda da doku eklenmez; çizgi %12 → %14, kobalt accent bir ton açılır (gece sırrı), gölge opaklığı artar.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="porcelain-glaze"]` olarak durur.

## Zorunlu kurallar
- Her parça kaydı: tür + sır + çap/yükseklik (cm) + ağırlık (g).
- Yüzeyde doku yok (`--grain: 0`); krakle deseni sayfada kullanılmaz.
- Kobalt accent yalnız eylem/seçim/uyarı; ikinci doygun renk yok.
- Radius: form 14px, kart 28px, buton/chip/toast 999px; keskin köşe yok.
- Gölge 2px'i geçmez; sınırı 1px çizgi taşır.
- Her ekranda en az bir mono ölçü satırı; dokunma hedefi 44px.

## Yasaklar
- Krakle/kırık sır dokusu, grain, cam/blur, gloss efekti.
- 28px üstü radius; hap olmayan buton; keskin köşe.
- İkinci doygun accent (turkuaz, altın).
- Büyük harf gövde, 14px altı gövde metni, italik başlık.
- Sürekli akan sır animasyonu, bounce, parallax.
- Koyu lüks zemin (bu stil açık porselen dilidir).

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 6.74:1 (`ink-soft/bg`).
- `--ink-faint` 3.61:1 — birim/etiket ve eksen için; gövde metni olarak kullanılmaz.
- Kobalt accent metin olarak 7.29:1, dolgu üstünde 7.43:1 — ikisi de geçer.
- Odak görünürlüğü: 2px kobalt halka (7.29:1) + 3px offset; koyu modda açık kobalt halka (7.33:1).
- Durum yalnız renkle verilmez: sır chip metni, uyarı etiketi + 8px nokta.
- 390px'te koleksiyon 2'li, tablo karta döner; yatay taşma yok.
- `prefers-reduced-motion` açıkken giriş, hover ölçeği ve seçim halkası durur.

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
| "Boş sayfa" hissi | gölge + çizgi zayıf | 1px çizgi (%12) + 2px gölge + mono ölçü |
| Porselen "plastik" | gloss/parlama eklendi | parlaklık yalnız fotoğrafta |
| Dekoratif karo kayması | desen/crackle eklendi | `--grain: 0`, desen yok |
| Okunmuyor | `--ink-faint` gövdeye | gövde `--ink`/`--ink-soft` |
| Keskin köşe sırıtıyor | 14px altı radius | 14/28 + hap |
| Koyu modda sınır kayboluyor | çizgi opaklığı düşük | koyu blokta %14 + accent açık |
| Mobilde taşıyor | 3×3 koleksiyon | 2'li + kart |

## Komşu stiller

- **Uyumlu:** `japanese-ma` — beyaz boşluk ve çizgi disiplini; galeri bölümlerinde eş.
- **Uyumlu:** `editorial-design` — serif başlık ve uzun ölçü; katalog yazılarında tamamlayıcı.
- **Uyumlu:** `magazine-feature` — editoryal vitrin; müzayede sayfalarında eş.
- **Yasak:** `neo-brutalism` — kalın siyah çerçeve, sır inceliğini yok eder.
- **Yasak:** `acid-graphics` — neon ve glow, porselen beyazını kirletir.
- **Yasak:** `pixel-art` — piksel doku, sıfır doku kuralını bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.britannica.com/art/porcelain | porselen türleri, sır ve pişirim terminolojisi |
| https://www.metmuseum.org/toah/hd/porc/hd_porc.htm | kobalt dekor ve tarihsel biçim dili |
| https://www.vam.ac.uk/collections/ceramics | sır adları, ölçü ve künye biçimi |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | açık porselen zemininde metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Porcelain Glaze (styles/129-porcelain-glaze/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="porcelain-glaze"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cormorant Garamond 500) H1/H2 (46px/1.1); --font-body (Nunito 400/700) gövde 16px/1.68;
  --font-mono (Space Mono) sır chip'i 11px +0.18em ve tüm çap/ağırlık değerleri (tabular).
Yüzey: soğuk porselen beyazı, DOKU YOK (--grain: 0), gölge en fazla 0 2px 6px.
  radius --radius 14px (form), --radius-lg 28px (kart/modal), buton/chip/toast 999px hap.
Renk: tek accent kobalt (--accent), accent üstü --accent-ink; turkuaz/altın yasak.
Kayıt: tür + sır chip'i (seladon/kobalt/sırlı beyaz/krakle/mat) + çap cm + ağırlık g.
Hareket: enter 0.56s cubic-bezier(.12,.75,.24,1) 33px st.095 · scroll top 98% 0.84s 35px once:false ·
  pin kapalı · hover 360ms scale 1.028; prefers-reduced-motion zorunlu.
Yasak: crackle/grain, cam/blur, gloss, 28px üstü radius, ikinci accent, büyük harf gövde, akan sır animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Sayfada doku/grain yok; sınır 1px çizgiyle taşınıyor.
- [ ] Kobalt dışında doygun renk yok.
- [ ] Her kartta sır + çap + ağırlık var.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="porcelain-glaze"] {
  --bg: #f2f6f8; --bg-2: #e6eef3;
  --surface: #fbfdfe; --surface-2: #eef4f7;
  --ink: #141d26; --ink-soft: #46586a; --ink-faint: #6f8394;
  --accent: #1d4f9c; --accent-ink: #f4f8fd;
  --line: rgba(20,29,38,.12);
  --radius: 14px; --radius-lg: 28px;
  --shadow: 0 2px 6px rgba(20,29,38,.06); --shadow-hard: 0 0 0 1px rgba(29,79,156,.35);
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
  --danger: #96231f; --danger-ink: #fdf3f2;
  --ok: #1f6150; --warn: #7a5a10;
}
```

Koyu mod bloğu `styles/129-porcelain-glaze/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="porcelain-glaze"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 7.29:1 · `ink-soft / surface-2` 6.60:1 · `accent-ink / accent` 7.43:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 360px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: sır halkaları + kraklür çatlakları.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.56s` / `scroll 0.84s` (ikisi de ≤ 1.2 s).
