# 94 · Encyclopedia

> **Bir cümleyle:** Sözlük maddesi: serif madde başı + mono telaffuz, numaralı tanımlar ve çapraz referans okları.

| | |
|---|---|
| **Hissiyat** | otoriter, yoğun, mürekkep kokulu, "kaynak" |
| **En iyi** | ansiklopedi/sözlük okuma, API ve veri sözlüğü dokümantasyonu, mevzuat-terim araması, üniversite kütüphanesi kataloğu |
| **Kaçın** | ürün vitrini, kampanya sayfası, oyunlaştırılmış onboarding, görsel ağırlıklı portfolyo |
| **Zorluk** | orta (yoğunluk + okunurluk dengesi) · **Erişilebilirlik** | iyi (15.72:1 gövde, 9.14:1 accent üstü) |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="encyclopedia"]` |
| **Kompozisyon** | `type` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Encyclopedia, kaynak metnin biçimidir: **madde başı** (serif Lora 700) + **telaffuz** (mono) → **numaralı tanımlar** (1. 2. 3., mono işaret) → **çapraz referanslar** (accent `→`) → **veri sözlüğü tablosu** (alan / tip / zorunluluk / notlar). Gövde iki kolonda (26–28ch) ve 14.5px'tir: yoğunluk bilinçli, çünkü bu ekran "bir şey öğrenmek için" değil **bir şeyi doğrulamak için** açılır.

Kazandığı şey: **otorite ve taranabilirlik**. Numaralı tanımlar aynı kavramın farklı anlamlarını ayırır; mono tip kolonu veri sözlüğünü okunur kılar; accent (erik moru `#7a1f52`) yalnız yönlendirmede kullanılır. Feda ettiği şey: **görsel çekicilik** — bu stilde hiçbir görsel "kahraman" değildir; ürün veya hikâye anlatımı için uygun değildir.

### Ne değildir
- **Editorial Design (03) değildir.** Editorial drop cap + kolon ritmiyle **anlatı** kurar (Fraunces + Inter, ölçü geniş); burada drop cap yok, madde başı + telaffuz ikilisi ve **numaralı tanımlar** var, gövde iki kolon ve 14.5px.
- **Museum & Thesis (92) değildir.** O stil 96px kenarla tek kolon uzun okuma ve `Fig.` künyeleri kurar (EB Garamond); burada kenar 64px, gövde **iki kolon**, karakter **madde başı + tanım numarası + veri tablosu**.
- **Utility (44) değildir.** Utility operasyonel hairline ve isimli metin stilleriyle çalışır (Poppins, mavi); burada serif madde başı ve erik accent var.
- **Dark Academia (33) değildir.** O stil koyu mum paletiyle atmosfer kurar; burada zemin açık krem (`#f7f5ee`) ve süs yok.
- **"İki kolonlu düz metin" değildir.** Telaffuz satırı, numaralı tanım işaretleri ve tip kolonlu tablo olmadan bu stil sadece bir blog şablonudur.

### Nereden gelir
Ansiklopedi maddesi 250 yıldır aynı işi yapar: bir terimi **tanımla, numaralandır, başka terime bağla**. Basılı sözlükte kolon kuralı, madde başı kalınlığı ve çapraz referans oku okurun gözünü yönetir. Dijitalde iki dalga bu biçimi geri getirdi: (1) API/veri dokümantasyonu ("data dictionary"), (2) açık kaynak bilgi tabanları — ikisi de aynı sorunu çözer: **çok sayıda kısa tanımı taranabilir tutmak**.

Klişeye düşmemesi için korunması gereken detay: **iki kolon + mono tip kolonu**. Gövdeyi tek kolonda 100ch'e yaymak, tanım numaralarını kaldırmak veya accent'i başlıklara taşımak stili "uzun blog yazısı"na çevirir.

### 3 saniyede tanıma testi
1. Madde başı **serif ve kalın** mı, hemen altında **mono telaffuz** satırı var mı?
2. Tanımlar **1. 2. 3.** mono işaretleriyle numaralı mı (madde işareti değil)?
3. Gövde **iki kolon** mu, aralarında 1px kolon kuralı var mı?
4. Bir yerde **alan / tip / zorunluluk / notlar** kolonlu veri tablosu var mı?
5. Çapraz referanslar accent **`→`** ile mi; accent ekranın ≤ %7'sinde mi, gölge hiç yok mu?

## Görsel imza
1. **Madde başı ikilisi:** H1 Lora 700 42px + altında mono 12px telaffuz (`/ɑːn.saɪ.kləˈpiː.di.ə/`), aralarında 8px.
2. **Numaralı tanımlar:** `ol` listesi, mono 11px accent numara, 1.4em asılı girinti; madde işareti hiç yok.
3. **Kolon kuralı:** gövde `columns: 2; column-gap: 32px; column-rule: 1px solid var(--line)`; mobilde tek kolon ve kural kapanır.
4. **Çapraz referans:** accent mono 12px, `→ ` öneki; başlık veya gövde içinde aynı renk kullanılmaz.
5. **Veri sözlüğü tablosu:** alan (mono), tip (mono accent), zorunluluk (metin), notlar (Inter 13px); başlık altı 1px `--ink`.
6. **Alfabe şeridi:** landing'de üstte A–Z mono 10px .18em, aktif harf accent kutu (yalnız 1 adet).
7. **Düz kâğıt:** gölge yok, radius 0, kart 1px `--line`; modal bile 2px mürekkep çerçevesiyle ayrılır.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f7f5ee` | Sayfa zemini (krem kâğıt) | Kart içi |
| `--bg-2` | `#efece1` | Alfabe şeridi, alt bilgi | Geniş dolgu |
| `--surface` | `#fffcf4` | Kart, tablo satırı, form alanı | Sayfa zemini |
| `--surface-2` | `#ebe7da` | Tip etiketi, chip, hover satır | Metin arkası |
| `--ink` | `#1a1c1a` | Madde başı, gövde, nav kuralı | Accent zemin üstü |
| `--ink-soft` | `#4a4f4a` | Telaffuz, açıklama, tablo başlığı | 10px altı etiket |
| `--ink-faint` | `#767b76` | Alfabe şeridi, dekoratif etiket | Etkileşimli metin |
| `--accent` | `#7a1f52` | Tanım numarası, çapraz referans, tip kolonu, birincil buton | Gövde metni, geniş zemin |
| `--accent-ink` | `#fdf6ef` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(26,28,26,.16)` | Kolon kuralı, tablo çizgisi, kart kenarı | Metin |

- Ölçülen kontrast: `ink / bg` = **15.72:1** · `ink-soft / bg` = **7.67:1** · `accent-ink / accent` = **9.14:1** · `ink-faint / bg` = **3.96:1** (yalnız dekoratif).
- Tek vurgu kuralı: erik moru accent ekranın **≤ %7**'si; vurgu için renk değil kalınlık ve mono işaret kullanılır.
- Yasak kombinasyon: accent zemin + `--ink-soft`; `--ink-faint` + `--bg-2` (3.5:1); ikinci accent (mavi/yeşil bağlantı rengi).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Madde başı / H1 | Lora | 42px (mobil 30px) | 700 | 1.08 | -0.005em |
| H2 | Lora | 26px | 700 | 1.16 | 0 |
| H3 | Lora | 18px | 700 | 1.3 | 0 |
| Gövde | Inter | 14.5px | 400 | 1.6 | 0 |
| Tablo notu | Inter | 13px | 400 | 1.5 | 0 |
| Telaffuz / mono | IBM Plex Mono | 12px | 400 | 1.45 | 0.04em |
| Etiket / mono | IBM Plex Mono | 10.5px | 400 | 1.4 | 0.1em |

- Ölçek oranı ≈ 1.6 (14.5 → 26 → 42); kullanılan basamak sayısı 7.
- Ölçü önerisi: `h1 { font-size: clamp(30px, 3.4vw, 42px) }`.
- Gövde metni maksimum satır uzunluğu: **56ch** toplam; iki kolonda kolon başına **26–28ch**.
- Ağırlık kuralı: gövde 400, vurgu 600, madde başı 700. Gövdede 700 kullanmak sözlük hiyerarşisini bozar; italik yalnız terim adlarında.
- Gövde 16px üstüne çıkmaz: yoğunluk sözlüğün karakteridir; okunurluk satır aralığı (1.6) ve 26ch kolonla korunur.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (gövde 2×26ch, tablo tam genişlik) |
| Gutter | 24px (kolon arası 32px) |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 900px altında tek kolon, kolon kuralı kapanır, alfabe şeridi 8.5px |

- Asimetri kuralı: başlık ve alfabe şeridi tam genişlik; gövde iki kolon. Ekran başına en fazla 1 tam genişlik tablo.
- Bölüm ritmi: art arda en fazla **4** numaralı tanım; beşincide 1px divider ve 16px boşluk.
- Bölüm dikey boşluk 64px (mobil 40px); kart padding 20px; tablo satır yüksekliği 34px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, alfabe şeridi |
| Kart / tablo | `--surface` + 1px `--line` | `none` | Madde kartı, veri tablosu, KPI |
| Yüzen katman | `--surface` + 2px `--ink` | `none` | Modal, dropdown (perde %55) |

- Kenarlık formülü: kart `1px solid var(--line)`; nav altı ve tablo başlığı `1px solid var(--ink)`; kolon kuralı `column-rule: 1px`.
- Derinlik nereden gelir: **hiçbir yerden** — kolon kuralı, cetvel ve numaralandırma. `--shadow: none`.
- Radius: `--radius` 0px (her şey) · `--radius-lg` 2px (yalnız modal). 2px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 13px 16px | 0px | 10.5px/400 mono, .08em | `--accent` / `--accent-ink`, gölge yok | hover %90 130ms · active translateY(1px) · focus 2px accent + 1px offset · disabled opacity .45 kesikli · loading mono `…` |
| Buton (ikincil) | 44px | 13px 16px | 0px | 10.5px/400 mono | şeffaf / `--ink`, 1px `--line` | hover `--surface-2` · focus aynı |
| Input (arama) | 44px | 0 10px | 0px | 14.5px/400 Inter | `--surface` + 1px `--line` | focus 2px accent + 1px offset · error `--danger` + mono açıklama · disabled opacity .45 |
| Kart (madde) | — | 20px | 0px | madde başı Lora 26px | `--surface` + 1px `--line`, gölge yok | hover: kenar `--ink-faint` |
| Chip / tip etiketi | 20px | 0 6px | 0px | 9.5px/400 mono, .08em | `--surface-2` + 1px `--line` | accent varyantı dolu (tip adı) |
| Nav | 56px | 0 36px | 0 | marka Lora 700 19px + mono 10.5px | `--bg` + alt 1px `--ink` | aktif: 2px accent alt çizgi; pasif `--ink-soft` |
| Tablo satırı | 34px | 8px 10px | 0 | alan/tip mono 12px, notlar Inter 13px | alt 1px `--line`, başlık altı 1px `--ink` | hover `--surface-2` · seçili: sol 2px accent |
| Modal | — | 24px | 2px | H2 Lora 26px + mono telaffuz | 2px `--ink` çerçeve, gölge yok | perde %55, 130ms |
| Toast | 40px | 10px 14px | 0px | 11px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 1px accent kural, 3200ms |
| Grafik paleti | — | — | — | eksen 10px mono | `--accent`, `--ink`, `--ink-faint` | en fazla 3 seri; 1px çizgi |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 1px`; accent zeminli butonda `outline-color: var(--accent-ink)`, offset -2px.
- Dokunma hedefi: en az 44×44px; 34px tablo satırında satır içi eylem 44px sarmalayıcı ile büyütülür.
- Çapraz referans bağlantıları altı çizili değil, accent + `→` ile işaretlenir; hover'da altı çizilir (yalnız hover).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi; çoğunlukla ikon yerine işaret (`→`, `§`, `†`) |
| Fotoğraf | Yok — zorunluysa 1px çerçeveli küçük levha + mono künye |
| İllüstrasyon | Yalnız 1px çizgi şema (ağaç/akış) + mono etiket |
| Doku | `--grain: .015` kâğıt |
| Logo alanı | Serif kelime markası (Lora 700), 20px güvenli boşluk; alfabe şeridi ayrı bileşen |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Alfabe şeridi + madde başı + telaffuz + ilk tanım | `shots/01-landing.png` |
| Dashboard | orta | Veri sözlüğü tablosu + 3 KPI; mono tip kolonu | `shots/02-dashboard.png` |
| Form | düşük | 44px alan, mono etiket, 2px odak halkası | — |
| Liste / tablo | yüksek | 34px satır, alan/tip/zorunluluk/notlar | — |
| Boş durum | düşük | "Madde bulunamadı" + `→` önerilen 3 çapraz referans | — |
| Onboarding | orta | 3 numaralı adım; her adımda tek tanım | — |
| Pricing | orta | 3 sütun karşılaştırma tablosu; accent yalnız zorunlu satırda | — |
| Giriş / ödeme | çok düşük | Süs sıfır; arama + tek accent buton | — |
| Modal | orta | 2px mürekkep çerçeve, serif başlık + mono telaffuz | — |
| Bildirim / toast | orta | Koyu zemin + 1px accent kural, 3200ms | — |
| Hata | düşük | `--danger` kenar + mono açıklama satırı | — |
| Profil / ayar | orta | İki kolon: mono etiket + Inter değer, 1px cetvel | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — madde kartı — numaralı tanımlar, telaffuz satırı, çapraz referans oku.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 90ms | `ease-out` | `transform: translateY(1px)` |
| Geçiş / sayfa | 130ms | `ease-out` | `opacity` |
| Giriş (enter) | **330ms** | `cubic-bezier(.4,0,.3,1)` | `opacity` + `translateY(6px)`, **stagger 25ms** |
| Kaydırma (scroll) | **420ms** | `cubic-bezier(.4,0,.3,1)` | trigger **`top 89%`**, offsetY **8px**, `once: false` (her geçişte) |
| Hover | **130ms** | `ease-out` | görsel ölçek **1.008** |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 240ms | `cubic-bezier(.4,0,.3,1)` | tanım numarası accent'e döner, tek atım |

- İmza ölçüsü: enter **0.33s / 6px / stagger 0.025** · scroll **0.42s / `top 89%` / 8px / `once: false`** · hover **130ms / 1.008** · pin **kapalı** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; `once: false` animasyonu da durur, satır vurgusu statik kalır.
- Bu stile yasak hareket: parallax, sürekli döngü, spring/bounce, harf harf animasyon.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f7f5ee` | `#131211` |
| `--bg-2` | `#efece1` | `#181715` |
| `--surface` | `#fffcf4` | `#1d1b19` |
| `--surface-2` | `#ebe7da` | `#262321` |
| `--ink` | `#1a1c1a` | `#ece7dc` |
| `--ink-soft` | `#4a4f4a` | `#b5afa4` |
| `--ink-faint` | `#767b76` | `#8a857c` |
| `--accent` | `#7a1f52` | `#d684ae` |
| `--accent-ink` | `#fdf6ef` | `#17100f` |
| `--line` | `rgba(26,28,26,.16)` | `rgba(236,231,220,.16)` |

- Koyu mod **gece okuması**: zemin `#131211` (sıcak siyah), kart `#1d1b19`; accent açılır (`#d684ae`) çünkü erik moru koyu zeminde okunmaz.
- Kolon kuralı koyuda aynı opaklıkta (.16) kalır; 1px çizgi koyu zeminde yeterli.
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **15.17:1** · `ink-soft/bg` = **8.58:1** · `accent-ink/accent` = **6.95:1** · `ink-faint/bg` = **5.10:1**.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **-:1** açık / **-:1** koyu · `--warn / bg` = **-:1** / **-:1** · `--ok / surface` = -:1 / -:1 (warn) · devre dışı buton metni = **7.14:1** / **7.79:1** · ghost buton kenarı = **3.75:1** / **5.22:1** (eşik 3:1).

## Zorunlu kurallar

1. **Madde başı ikilisi:** serif H1 (Lora 700) + mono telaffuz satırı; madde başı tek başına bırakılmaz.
2. **Numaralı tanımlar:** her tanım `1.` `2.` mono işareti taşır; madde işareti kullanılmaz.
3. **İki kolon:** gövde `columns: 2`, kolon arası 32px ve 1px kural; 900px altında tek kolon.
4. **Çapraz referans accent:** `→` + accent mono; accent ekranın ≤ %7'si.
5. **Veri sözlüğü tablosu:** alan (mono) / tip (mono accent) / zorunluluk / notlar; başlık altı 1px `--ink`.
6. **Düz kâğıt:** gölge yok, radius 0, ayrım 1px çizgi; alfabe şeridi yalnız landing'de 1 adet.

## Yasaklar

- Sans display, 52px üstü başlık, afiş ölçeği.
- Gradient, blur, cam yüzey, gölge.
- 2px üstü radius, pill buton, yuvarlak chip.
- İkinci accent; bağlantı rengi olarak mavi/yeşil.
- Numarasız tanım listesi, madde işareti, ikonlu liste.
- Gövdeyi tek kolonda 100ch'e yaymak; 16px üstü gövde puntoso.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.96:1** — `--ink-faint` yalnız alfabe şeridi ve dekoratif etiket; etkileşimli metin, telaffuz satırı, tanım metni olamaz.
- 14.5px gövde + 1.6 satır aralığı + 26–28ch kolon: uzun okuma için sınırda ama kabul edilebilir; `text-spacing` (WCAG 1.4.12) açıldığında kolonlar taşmaz (sabit yükseklik yok).
- Telaffuz satırı 12px mono: kısa metin kuralı geçerli; `abbr`/`lang` etiketi ile işaretlenir, aksi halde ekran okuyucu yanlış okur.
- Hareket/parlama hassasiyeti: düşük; `once: false` olan scroll reveal her geçişte tekrar eder, reduced-motion'da durur.
- Şeffaf yüzey yok (`--blur: 0`, `--shadow: none`); `color-mix` desteklenmezse buton hover'ı `--surface-2` fallback'ine düşer.
- Odak görünürlüğü: 2px accent + 1px offset; accent zeminli butonda `--accent-ink` halka, offset -2px.

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
| "Uzun blog yazısı" gibi | tek kolon + madde işaretli listeler | `columns: 2` + numaralı tanım (`ol` + mono sayaç) |
| Tanımlar karışıyor | numara yok, asılı girinti yok | 1.4em asılı girinti + mono numara |
| Accent her yerde | başlıklar ve gövde de erik moru | Accent yalnız numara, `→`, tip kolonu, birincil buton |
| Tablo okunmuyor | tip kolonu metinle aynı stilde | Tip kolonunu mono + accent yap |
| Gövde yoruyor | 1.4 satır aralığı, 60ch kolon | 1.6 satır aralığı, 26–28ch kolon |
| Modal "yüzüyor" | gölge eklenmiş | Gölgeyi kaldır; 2px mürekkep çerçeve + perde |

## Komşu stiller

- **Uyumlu:** `editorial-design` — uzun anlatı gövdesini editorial üstlenir; madde/tanım yapısı bu stilde kalır.
- **Uyumlu:** `utility` — form ve ayar ekranlarında hairline disiplini ortak; utility'nin isimli stilleri kart içinde.
- **Uyumlu:** `museum-thesis` — kültür kurumu arşivi bağlamı ortak; künye/levha dili museum-thesis'te kalır.
- **Yasak:** `maximalism` — katman ve renk çokluğu iki kolonlu taranabilirliği yok eder.
- **Yasak:** `memphis` — desen ve canlı renk sözlük ciddiyetini bozar.
- **Yasak:** `dopamine-ui` — mikro ödül animasyonu "doğrulama" işini gürültüye çevirir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Encyclopedia | madde başı, numaralı tanım ve çapraz referans düzeni |
| https://en.wikipedia.org/wiki/Data_dictionary | alan / tip / zorunluluk / notlar tablosu |
| https://www.britannica.com/ | madde başı hiyerarşisi ve telaffuz satırı |
| https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html | iki kolonlu 14.5px gövdede satır aralığı ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Encyclopedia (styles/94-encyclopedia/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="encyclopedia"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: madde basi Lora 700 (H1 42px / 1.08, mobil 30px), govde Inter 400 14.5px/1.6 (<= 56ch toplam,
  kolon basina 26-28ch), telaffuz/etiket IBM Plex Mono (12px .04em / 10.5px .1em).
Yuzey: golge YOK; radius 0 (modal 2px). Kart 1px var(--line); nav ve tablo basligi 1px var(--ink).
Yerlesim: govde IKI KOLON (columns: 2, gap 32px, column-rule 1px); baslik/alfabe seridi tam genislik.
  Tanimlar 1. 2. 3. mono numarali ve 1.4em asili girintili; madde isareti yasak.
Renk: krem #f7f5ee + murekkep #1a1c1a + tek accent erik #7a1f52 (ekranin <= %7'si).
Imza: madde basi + mono telaffuz; capraz referans "-> " accent mono; veri sozlugu tablosu
  (alan mono / tip mono accent / zorunluluk / notlar); landing'de A-Z alfabe seridi (tek aktif harf accent kutu).
Hareket: enter 330ms cubic-bezier(.4,0,.3,1) 6px stagger 25ms; scroll top 89% / 420ms / 8px / once:false;
  hover 130ms imageScale 1.008; pin kapali. prefers-reduced-motion zorunlu.
Yasak: sans display, 52px ustu baslik, gradient/blur/golge, 2px ustu radius, ikinci accent,
  numarasiz tanim, tek kolonda 100ch govde, 16px ustu govde puntoso.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (madde başı+telaffuz, numaralı tanım, iki kolon, `→`).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (15.72:1), accent üstü ≥ 4.5:1 (9.14:1).
- [ ] Odak halkası görünür (2px + 1px offset), dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok; kolonlar tek kolona düşüyor.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="encyclopedia"] {
  --bg: #f7f5ee; --bg-2: #efece1;
  --surface: #fffcf4; --surface-2: #ebe7da;
  --ink: #1a1c1a; --ink-soft: #4a4f4a; --ink-faint: #767b76;
  --accent: #7a1f52; --accent-ink: #fdf6ef;
  --line: rgba(26,28,26,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Lora", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0.015;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="encyclopedia"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
