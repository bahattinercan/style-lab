# 64 · Construction Site

> **Bir cümlede:** Şantiyenin plaka, kalıp ve numara dilini ekrana taşıyan; her blokun 2px çerçeveyle, her metrajın birimle göründüğü saha arayüzü.

| | |
|---|---|
| **Hissiyat** | sağlam, ham, sıcak, disiplinli |
| **En iyi** | şantiye/ilermit takibi, metraj & hakediş, saha raporu, proje blok panosu |
| **Kaçın** | fintech, sağlık, lüks e-ticaret — kalın kural ve tozlu zemin burada "özensiz" okunur |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (sıcak zemin + kiremit accent; en düşük etkileşimli çift 6.99:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="construction-site"]` |
| **Kompozisyon** | `split` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Construction Site, arayüzü bir **şantiye panosu** gibi kurar: her bölüm numaralı bir blok, her blok 2px siyah çerçeveli bir plaka, her plaka bir aşama etiketi taşır. Metraj, süre ve ilerleme her zaman birimle yazılır — çıplak sayı sahadaki hiçbir soruyu yanıtlamaz.

Üç kurucu karar: (1) **yapısal kural** — 2px `--ink` bölüm kuralları, 1px `--line` ayırıcılar; hiyerarşi çizgi kalınlığıyla kurulur, gölgeyle değil; (2) **plaka tipografisi** — Anton büyük harf başlık, Jost gövde, Space Mono ölçü/etiket; (3) **malzeme** — beton tozu grain `.05`, grafik kâğıdı ızgarası yalnız hero görselinde.

Bedeli: ekran ağır ve sıcaktır. Ağırlığın "eski" değil "sağlam" görünmesini sağlayan şey **tutarlı 2px çerçeve + numara kutusu**; çerçeve kalınlığı bir yerde 3px olursa dil çöker.

### Ne değildir
- **Bauhaus (35) değildir:** Bauhaus temel geometri ve kırmızı-mavi ile afiş kurar; burada palet beton/kiremit, tipografi Anton (condensed) ve metraj tabloları var.
- **Swiss Design (02) değildir:** Swiss ızgara ve Helvetica disiplinidir, radius 0 ve gölge yoktur; bu stilde radius 2/4px, 6px sert ofset gölge ve grain vardır.
- **Neo-Brutalism (13) değildir:** neo-brutalism pembe/sarı ile provokasyon arar, gölge 8px'tir; bu stil endüstriyel kiremit + beton, gölge 6px ve metraj disiplini.
- **Warehouse Flow (62) değildir:** 62 sarı accent ve Archivo Black ile operasyon hızına bakar; 64 kiremit accent ve Anton ile blok/metraj dengesine bakar (bkz. 61–65 bandı).

### Nereden gelir
Şantiye tabelası, kalıp plakası, ilermit raporu ve teknik çizim geleneğinden: blok no, kat, aks, ölçü oku, aşama damgası. Bugün yeniden kullanılmasının nedeni: inşaat yazılımı çoğu zaman bankacılık arayüzü gibi görünüyor ve sahada "bu benim işim değil" hissi veriyor; kullanıcı kendi dilini (plaka, metraj, aşama) görmek istiyor. Klişeye dönüşmemesi için korunacak detay: **2px yapısal kural + numara kutusu** ve metrajın birimle yazılması.

### 3 saniyede tanıma testi
1. Bölümler arasında **2px siyah yapısal kural**; ayırıcılar 1px ve soluk.
2. Her bölümün başında 32×32 kutu içinde numara (Anton, 18px).
3. Kartlar 2px `--ink` çerçeveli, kaldırılan kart 6px sert ofset gölgeli.
4. Başlıklar Anton, sıkı satır (0.92), büyük harf; gövde Jost 16px.
5. Her sayının yanında birim (`m²`, `ton`, `gün`) — birimsiz metraj yok.

## Görsel imza
- **Yapısal kural:** bölüm ayırıcı 2px `var(--ink)`; tam genişlik, kenardan kenara.
- **Numara kutusu:** 32×32px, 2px `--ink` çerçeve, içinde Anton 18px numara; sol üstte, başlıkla aynı hizada.
- **Plaka çerçevesi:** kart/tablo/modal 2px `--ink`; radius 2–4px; gölge yok.
- **Sert ofset:** yalnız kaldırılan blok/modal `box-shadow: var(--shadow-hard)` = `6px 6px 0 rgba(25,22,18,.85)`.
- **Aşama chip'i:** zemin almaz, 1px `--ink` çerçeve, 11px Space Mono büyük harf `0.14em`; aktif aşamada sol 4px accent blok.
- **Grafik kâğıdı:** hero görselinin zemininde 24px aralıklı 1px ızgara (yalnız orada).
- **Beton tozu:** `--grain: .05` — tüm sayfa zemini; fotoğraf ve tablo hücresi üstünde kullanılmaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#e8e2d4` | sayfa zemini (beton) | kart zemini |
| `--bg-2` | `#dcd4c2` | bölüm bandı, hero zemini | birincil buton |
| `--surface` | `#f4efe4` | kart, tablo, form | sayfa zemini |
| `--surface-2` | `#eae3d4` | başlık satırı, chip zemini, hover | metin zemini |
| `--ink` | `#191612` | metin + 2px yapısal kural | geniş dekoratif dolgu |
| `--ink-soft` | `#4f483d` | ikincil metin, açıklama | accent dolgu üstü |
| `--ink-faint` | `#7b7059` | etiket, birim, ayırıcı | gövde, etkileşimli metin |
| `--accent` | `#a03a26` | aşama, aktif blok, birincil eylem | dekoratif dolgu, ikinci vurgu |
| `--accent-ink` | `#f7f1e6` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(25,22,18,.42)` | 1px ayırıcı | 2px yapısal kural (o `--ink`) |

- Ölçülen kontrast: `ink/bg` **13.96:1** · `ink-soft/bg` **6.99:1** · `accent-ink/accent` **5.97:1** · `ink-faint/bg` **3.78:1** · accent metin olarak bg'ye **5.04:1**.
- Tek vurgu kuralı: kiremit accent yalnız aşama/aktif durum ve birincil eylem. `--ok` (koyu yeşil), `--warn` (hardal), `--danger` (koyu kiremit) yalnız etiket ve 4px blok olarak.
- Yasak kombinasyon: accent ile `--danger` yan yana (aynı sıcaklık ailesi); accent üstünde `--surface-2` metin; 1px accent çizgi.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | 64px | 400 (tek kesim) | 0.92 | 0.01em, büyük harf |
| H2 | Anton | 30px | 400 | 1.05 | 0, büyük harf |
| H3 | Jost | 21px | 600 | 1.25 | 0 |
| Gövde | Jost | 16px | 400 | 1.62 | 0 |
| Etiket / mono | Space Mono | 11px | 700 | 1.35 | 0.18em, büyük harf |
| Metraj / ölçü | Space Mono | 14px | 400 | 1.45 | 0.02em, tabular |

- Ölçek oranı ≈ 1.9 (16 → 30 → 64); kullanılan basamaklar: 11 · 12 · 16 · 21 · 30 · 64 · (mobil 34).
- Ölçü önerisi: `h1 { font-size: clamp(34px, 7vw, 64px) }`.
- Gövde metni maksimum satır uzunluğu: 60ch; metraj tablosu hücresi sarmaz.
- Ağırlık kuralı: Anton tek kesim (400) — sentetik kalın yasak; Jost 400/600; mono 400/700. İtalik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 9/3, metraj tablosu tam genişlik |
| Gutter | 24px |
| Container genişliği | 1280px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, tablo blok kartına döner |

- Asimetri kuralı: ekran başına 1 asimetrik blok (hero 9/3 veya saha notu kolonu).
- Bölüm ritmi: 72px masaüstü / 40px mobil; bölümler her zaman 2px yapısal kural ile başlar.
- Kart içi: 24px padding; numara kutusu ile başlık arası 12px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, bölüm bandı |
| Plaka | `--surface` + 2px `--ink` | yok | kart, tablo, form |
| Kaldırılan blok | `--surface` + 2px `--ink` | `--shadow-hard` 6px ofset | modal, öne çıkan blok |
| Yüzen katman | `--surface` + 2px `--ink` | `--shadow-hard` | açılır menü, onay diyaloğu |

- Kenarlık formülü: plaka `2px solid var(--ink)`; hücre ayırıcı `1px solid var(--line)`; yapısal kural `2px solid var(--ink)`.
- Derinlik nereden gelir: yalnız ofset (plaka kalkar) ve grain dokusu; blur/iç gölge yok.
- Radius: `--radius` 2px (buton, input, chip 0), `--radius-lg` 4px (kart, modal). 4px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 12px 24px | `--radius` | 14px/600 Jost büyük harf | `--accent` + `--accent-ink`, `--shadow-hard` | hover ofset 3px · active ofset 0 + translate(6px,6px) · focus 3px ink halka · disabled %45 · loading 4 kare |
| Buton (ikincil) | 48px | 12px 20px | `--radius` | 14px/600 Jost | `--surface` + 2px `--ink`, gölge yok | hover `--surface-2` · focus accent-ink halka + iç 1px ink |
| Input | 48px | 0 14px | `--radius` | 15px Space Mono | `--surface` + 2px `--ink` | focus 3px accent halka · filled birim sağda · error `--danger` + saha notu · disabled %45 |
| Kart (blok) | — | 24px | `--radius-lg` | başlık 21px Jost 600 | `--surface` + 2px `--ink`, gölge yok | aşama chip'i · aktif blokta sol 4px accent |
| Chip (aşama) | 24px | 0 8px | 0 | 11px/700 Space Mono | çerçeve `--ink`, zemin yok | planlandı · devam (accent blok) · kontrol · teslim |
| Nav (üst bar) | 60px | 0 32px | 0 | 11px mono büyük harf | `--bg`, alt 2px `--ink` | aktif: 4px accent blok · sağda blok no |
| Tablo satırı | 44px | 8px 12px | 0 | blok no Anton 16px + metraj mono | alt 1px `--line`, dış 2px `--ink` | hover: sol 4px accent · seçili: `--surface-2` |
| Modal | — | 28px | `--radius-lg` | başlık Anton 26px | 2px `--ink` + `--shadow-hard` | üstte 8px accent bant, `esc`, 44px kapat |
| Toast | 48px | 12px 16px | 0 | 13px Jost 600 | sol 8px accent blok + 2px ink çerçeve | 4.5sn · hover'da durur · üst üste 2 |
| Grafik | — | — | 0 | eksen 11px mono | kolonlar `--data-1…4`, taban 2px `--ink` | kolon aralığı 4px, yüzde blok içinde |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 2px`; accent dolgulu butonda `outline: 3px solid var(--ink)`.
- Dokunma hedefi: 48px (sahada eldiven); chip 24px görsel, 44px dokunma alanı.
- Metraj tablosu: her satırda ölçü birimi ayrı kolon; toplam satırı 2px üst çizgiyle.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2.5px çizgi, 24px ızgara, kare köşe; baret, vinç, kalıp, ölçü oku |
| Fotoğraf | şantiye/saha, geniş açı, tozlu sıcak ton, max %50 alan, 2px ink çerçeve (poster gibi) |
| İllüstrasyon | yalnız plan/kesit çizimi: 1.5px çizgi, ölçü okları, 45° tarama dolgu |
| Doku | beton tozu grain `.05`; grafik kâğıdı ızgarası yalnız hero görselinde |
| Logo alanı | Anton büyük harf sözcük logosu, 2px çerçeve içinde; sol üst 24px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 9/3 hero: dev Anton başlık + numara kutusu, dar saha notu kolonu | `shots/01-landing.png` |
| Dashboard | yüksek | blok ilerleme kartları + metraj tablosu + aşama dağılımı | `shots/02-dashboard.png` |
| Form | orta | saha raporu: blok, metraj, birim, foto, aşama | — |
| Liste / tablo | çok yüksek | 44px satır, blok no, metraj mono, toplam satırı 2px üst çizgi | — |
| Boş durum | düşük | "bu blokta kayıt yok" + ilk metrajı gir eylemi | — |
| Onboarding | orta | 3 adım: proje aç → blok tanımla → metraj gir | — |
| Pricing | orta | plan karşılaştırma; proje/blok limitleri tablo satırında | — |
| Giriş / ödeme | düşük | tek plaka, 2px çerçeve, tek eylem, hata saha notu | — |
| Modal | orta | blok detayı: aşama, metraj, foto, onay | — |
| Bildirim | orta | 48px toast + 8px accent blok, 4.5sn | — |
| Hata | düşük | `--danger` çerçeve + neden + tekrar dene | — |
| Profil / ayar | orta | proje listesi, blok no şeması, birim tercihi | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (blok) | 460ms | `cubic-bezier(.2,1.3,.3,1)` | `opacity` + `translateY(44px)`, 110ms arayla |
| Scroll reveal | 340ms, `top 86%` | aynı | `translateY(56px)`, `once: true` |
| Pin / scrub | 0.55 scrub, +160% mesafe | doğrusal | blok kesiti: 2 katman sabitlenir, katman yüksekliği değişir |
| Basma | 140ms | aynı | ofset 6px → 3px → 0 |
| Hover (görsel) | 190ms | aynı | `scale(1.012)` |
| Blok ilerleme | 800ms | `steps(4, end)` | ilerleme çubuğu kare kare dolar |

- Ölçülen imza: enter **0.46s · cubic-bezier(.2,1.3,.3,1) · 44px · stagger 0.11**; scroll **top 86% · 0.34s · 56px · once**; pin **açık · scrub 0.55 · +160%**; hover **190ms · 1.012**.
- Blok yerine otururken 1–2px taşar ve durur; 3'ten fazla sekme "oyuncak" hissi verdiği için yasak.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin/scrub kapalı, ilerleme anında son değeri gösterir.
- Bu stile yasak hareket: sürekli sallanan vinç, parallax ezme, blur geçişi, gradient animasyonu.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#e8e2d4` | `#14120e` |
| `--bg-2` | `#dcd4c2` | `#1c1914` |
| `--surface` | `#f4efe4` | `#211d17` |
| `--surface-2` | `#eae3d4` | `#2a251d` |
| `--ink` | `#191612` | `#f0e9db` |
| `--ink-soft` | `#4f483d` | `#b1a795` |
| `--accent` | `#a03a26` | `#df6b4a` |
| `--accent-ink` | `#f7f1e6` | `#130a06` |

- Ölçülen koyu kontrastlar: `ink/bg` **15.48:1** · `ink-soft/bg` **7.87:1** · `accent-ink/accent` **5.90:1** · `ink-faint/bg` **4.36:1** · accent metin olarak bg'ye **5.65:1**.
- Koyu modda değişen başka ne var: grain `.05` → `.08` (koyu zeminde doku daha görünür), sert ofset gölge `rgba(0,0,0,.9)`, kiremit accent bir ton açılır, yapısal kural 2px `--ink` (açık krem) olur.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="construction-site"]` olarak durur.

## Zorunlu kurallar
- Her bölüm 32×32 numara kutusu taşır (Anton 18px) ve 2px yapısal kuralla başlar.
- Plaka çerçevesi her yerde 2px `--ink`; ayırıcı 1px `--line`. Kalınlık sapması yok.
- Aşama dörtlüsü hem çerçeve chip hem metinle: `planlandı` · `devam` · `kontrol` · `teslim`.
- Her metraj birimle (`m²`, `m³`, `ton`, `gün`); toplam satırı 2px üst çizgiyle.
- Kaldırılan blok 6px sert ofset alır; düz plaka gölgesiz.
- Dokunma hedefi 48px; gövde 16px Jost, metraj 14px Space Mono tabular.

## Yasaklar
- 4px üstü radius, hap buton, yumuşak gölge.
- Cam/blur, gradient zemin, neon renk.
- Serif/el yazısı, italik, Anton'da sentetik kalın.
- Büyük harf gövde, 14px altı gövde metni.
- Birimsiz metraj, ölçüsüz sayı, yalnız renkle aşama.
- Grain'i fotoğraf veya tablo hücresi üstünde kullanmak.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 6.99:1 (`ink-soft/bg`).
- `--ink-faint` 3.78:1 — birim etiketi, eksen ve ayırıcı; gövde metni olarak kullanılmaz.
- Accent metin olarak 5.04:1, dolgu üstünde `--accent-ink` ile 5.97:1 — ikisi de geçer; 11px altı accent metin kullanılmaz.
- Aşama yalnız renkle anlatılmaz: çerçeve chip + büyük harf metin + aktif aşamada 4px blok.
- Odak görünürlüğü: açık zeminde 3px accent halka (5.04:1) — yeterli değilse 3px `--ink` halka (13.96:1) kullan; accent dolgulu butonda 3px ink halka.
- 390px'te tablo blok kartına döner; metraj birimleri alt satıra iner, taşma yok.
- `prefers-reduced-motion` açıkken giriş, pin/scrub ve blok ilerleme durur.

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
| "Afiş gibi" dağılıyor | her blok ofsetli | ofset yalnız kaldırılan blokta |
| Kirli görünüyor | grain fotoğrafın üstünde | grain yalnız zemin katmanında |
| Çizgi dili çöküyor | 2px ve 3px karışmış | yapısal 2px, ayırıcı 1px — sabit |
| Metraj okunmuyor | birim yok, hizalama yok | birim kolonu + tabular mono |
| Aşama kayboluyor | yalnız renkli çip | çerçeve chip + büyük harf metin |
| Başlık taşıyor | mobilde 64px | clamp(34px, 7vw, 64px) |
| Kontrast düşük | accent 11px metin | accent metni ≥14px veya `--ink` kullan |

## Komşu stiller

- **Uyumlu:** `bauhaus` — temel geometri ve kalın kural dili; kurumsal sunum bölümlerinde eş.
- **Uyumlu:** `swiss-design` — ızgara disiplini; teknik doküman ve tablo ekranlarında tamamlayıcı.
- **Uyumlu:** `terminal-ui` — saha logları ve cihaz çıktısı için teknik yüzey.
- **Yasak:** `glassmorphism` — cam/blur, plaka fiziğini tamamen bozar.
- **Yasak:** `ethereal` — yumuşak pastel ve düşük kontrast saha okunurluğunu bitirir.
- **Yasak:** `claymorphism` — yuvarlak pastel gölge, sert ofset ve 2px kural ile çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.iso.org/standard/68078.html | ISO 19650 — blok/kat/sistem numaralandırma ve künye dili |
| https://www.osha.gov/construction | şantiye uyarı levhası, aşama ve güvenlik etiketi hiyerarşisi |
| https://www.iso.org/standard/65491.html | ISO 128 — ölçü oku, kesit ve tarama dolgu dili |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | sıcak zemin üzerinde metin kontrastı ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | 2px kural ve çerçeve kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Construction Site (styles/64-construction-site/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="construction-site"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Anton 400, tek kesim) yalnız H1/H2 ve blok numarasında (büyük harf);
  --font-body (Jost 400/600) gövde; --font-mono (Space Mono 400/700) metraj, birim ve aşama etiketleri.
  H1 64px/0.92; gövde 16px/1.62; etiket 11px mono +0.18em büyük harf.
Yüzey: plaka = 2px var(--ink) çerçeve, gölge yok; kaldırılan blok/modal = 2px ink + var(--shadow-hard) 6px ofset.
  radius --radius 2px, --radius-lg 4px; --grain .05 (beton tozu, yalnız zemin).
Yapı: bölümler 2px var(--ink) yapısal kural ile başlar; ayırıcılar 1px var(--line); her bölümde 32×32 numara kutusu (Anton 18px).
Aşama: planlandı / devam / kontrol / teslim — zemin almayan 1px ink çerçeve chip + büyük harf metin; aktif aşamada sol 4px var(--accent).
Metraj: her sayı birimle (m², m³, ton, gün), mono tabular, birim ayrı kolon; toplam satırı 2px üst çizgi.
Hareket: enter 0.46s cubic-bezier(.2,1.3,.3,1) 44px stagger 0.11 · scroll top 86% 0.34s 56px once ·
  pin açık scrub 0.55 +160% · hover 190ms scale 1.012; prefers-reduced-motion zorunlu.
Yasak: 4px üstü radius, yumuşak gölge, cam/blur, gradient, neon, italik, birimsiz metraj, grain'i fotoğraf üstünde kullanmak.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Bölümlerde 2px yapısal kural ve numara kutusu var.
- [ ] Plaka 2px çerçeve; yalnız kaldırılan blokta 6px ofset.
- [ ] Her metraj birimle ve mono tabular.
- [ ] Aşama hem çerçeve chip hem metinle.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Dokunma hedefi ≥ 48px; 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="construction-site"] {
  --bg: #e8e2d4; --bg-2: #dcd4c2;
  --surface: #f4efe4; --surface-2: #eae3d4;
  --ink: #191612; --ink-soft: #4f483d; --ink-faint: #7b7059;
  --accent: #a03a26; --accent-ink: #f7f1e6;
  --line: rgba(25,22,18,.42);
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 0 rgba(25,22,18,.12); --shadow-hard: 6px 6px 0 rgba(25,22,18,.85);
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: .05;
  --danger: #8f2417; --danger-ink: #fbeee9;
  --ok: #2c5c33; --warn: #7d5200;
}
```

Koyu mod bloğu `styles/64-construction-site/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="construction-site"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
