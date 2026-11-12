# 76 · Biyofilik Botanik

> **Bir cümlede:** Doğayı dekor olarak değil ölçü olarak kullanan arayüz: kırık beyaz kâğıt zemin, yaprak biçimli kart, tek yumuşak gölge ve derin yaprak yeşilinin taşıdığı sakin hiyerarşi.

| | |
|---|---|
| **Hissiyat** | sakin, canlı, davetkâr, soluk alan |
| **En iyi** | sağlık/wellness ürünü, eğitim platformu, sürdürülebilirlik raporu, yaşam alanı vitrini |
| **Kaçın** | finans trading ekranı, güvenlik uyarı arayüzü, yoğun veri tablosu — burada "yumuşaklık" okunurluğu yer |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (ölçülen en düşük metin çifti 6.47:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="biophilic-botanical"]` |
| **Kompozisyon** | `centered` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Biyofilik Botanik, arayüzü bir **kâğıt üzerinde büyüyen form** gibi kurar: kırık beyaz zemin (`--bg`), üstte iki yumuşak radial ışık lekesi, kart köşeleri çapraz biçimde 32/12px kırılmış (yaprak biçimi), gölge tek katman ve daima yumuşak. Sertliği feda eder; karşılığında düşük bilişsel yük ve uzun okuma dayanıklılığı kazanır.

Kurucu kararları üç tanedir. Birincisi **yumuşaklık ölçülüdür**: radius 14px kontrol, 24px kart, `--radius` asla "her yeri yuvarlak" anlamına gelmez — chip hap, kart yaprak, buton 14px. İkincisi **tek organik form**: ekran başına bir yaprak köşesi ailesi ya da bir dal çizgisi; süs çoğalırsa stil "doğal" değil "dağınık" okunur. Üçüncüsü **boşluk cömerttir**: bölüm dikey boşluğu 80px, gövde satır aralığı 1.65.

Bedeli: yoğunluğa dayanmaz. Bu yüzden tablo ve dashboard ekranlarında kart sayısı sınırlanır, veri yoğunluğu gereken yerde bu stil garnitür olarak kalır.

### Ne değildir
- **Organic / Biophilic (38) değildir:** 38 toprak yeşili + Fraunces ile "organik akış" kurar ama kart köşeleri standart ve gölge yok; 76'da yaprak biçimli çapraz köşe (32/12px) ve tek yumuşak gölge imzadır.
- **Japandi (06) değildir:** 06 düşük kontrast ve wabi-sabi dinginliği satar; 76'da `ink-soft/bg` **6.47:1** — okunurluktan ödün verilmez.
- **Claymorphism (11) değildir:** 11 pastel + çift gölge + şişkin 3B form kullanır; 76'da gölge tek, form düz, radius çapraz.
- **Glassmorphism (08) değildir:** 08 blur ve yarı saydamlıkla katman kurar; 76 opak, blur 0.

### Nereden gelir
Biyofilik tasarım araştırmalarından (Terrapin'in 14 deseni: görsel doğa bağlantısı, malzeme, ışık) ve 2020'lerin "sakin teknoloji" dalgasından. Bugün tekrar kullanılıyor çünkü uzun oturumlu ürünlerde ekran yorgunluğu ölçülebilir bir sorun; yeşil skala + yumuşak boşluk bunu düşürür. Klişeye dönmemesi için korunacak detay: **boşluğun ölçülü olması** (80px bölüm, 1.65 satır) ve yaprak köşesinin çapraz olması — her kartı yuvarlamak stili jenerik "kart UI"ya çevirir.

### 3 saniyede tanıma testi
1. Zemin saf beyaz değil, hafif yeşile çalan kırık beyaz; üstte iki yumuşak ışık lekesi var.
2. Kart köşeleri çapraz: iki köşe geniş, iki köşe dar (32/12px).
3. Tek gölge var, yumuşak ve büyük; hiçbir yerde sert/ofset gölge yok.
4. Buton 44px, radius 14px; chip hap biçiminde (999px).
5. Gövde satır aralığı geniş (1.65), bölümler arası boşluk 80px.

## Görsel imza
- **Yaprak köşesi:** `border-radius: 32px 12px 32px 12px` (kart), `20px 10px 20px 10px` (KPI/input kabı).
- **Işık lekeleri:** gövdeye iki `radial-gradient` — sol üst accent %10, sağ alt ok %8; başka gradyan yok.
- **Tek gölge:** `--shadow: 0 8px 24px rgba(27,42,31,.10)`; sert/ofset/iç gölge yasak.
- **Dal çizgisi:** kart alt-solunda 64px × 1px accent %45 çizgi (imza işareti, `::after`).
- **Hap chip:** 26px yükseklik, `999px` radius, 12px 600 gövde yazı.
- **Nefes ölçüsü:** bölüm dikey 80px (mobil 48px), kart padding 24px.
- **Hareket imzası:** 680ms `cubic-bezier(.3,.7,.2,1)`, 24px yukarı — "büyüme" hissi, sıçrama yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f2f4ea` | sayfa zemini (kırık beyaz) | kart zemini |
| `--bg-2` | `#e9eddd` | alt bant, ikincil zemin | buton zemini |
| `--surface` | `#fbfcf6` | kart / panel | sayfa zemini |
| `--surface-2` | `#f5f8ee` | chip, tablo başlığı, hover | birincil CTA |
| `--ink` | `#1b2a1f` | başlık, gövde | dekoratif çizgi |
| `--ink-soft` | `#4a5c4a` | açıklama, ikincil etiket | başlık |
| `--ink-faint` | `#73826f` | yalnız dekoratif çizgi ve alt not | etkileşimli metin |
| `--accent` | `#2f6b3f` | birincil eylem, aktif durum, dal çizgisi | geniş dekoratif dolgu |
| `--accent-ink` | `#ffffff` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(27,42,31,.14)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **13.53:1** · `ink-soft / bg` = **6.47:1** · `accent-ink / accent` = **6.37:1** · `ink-faint / bg` = **3.67:1** (yalnız dekoratif).
- Tek vurgu kuralı: bir ekranda tek yeşil ailesi (accent). Durum renkleri (`--danger`, `--ok`, `--warn`) yalnız etiket + ikonla, çok renkli dekorasyon yok.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--surface` üstünde `--ink-faint` metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces (`--font-display`) | 48px (mobil 30px) | 500 | 1.08 | `-.01em` |
| H2 | Fraunces | 32px | 500 | 1.14 | `0` |
| H3 | Fraunces | 22px | 500 | 1.28 | `0` |
| Gövde | Nunito (`--font-body`) | 16px | 400 | 1.65 | `0` |
| Küçük gövde | Nunito | 13px | 400 | 1.6 | `0` |
| Etiket / mono | IBM Plex Mono (`--font-mono`) | 11px | 400 | 1.4 | `.08em` |

- Ölçek oranı: **1.5** — kullanılan basamaklar 11 · 12 · 13 · 16 · 22 · 32 · 48.
- Ölçü önerisi: `h1 { font-size: clamp(30px, 4.6vw, 48px); line-height: 1.08 }`.
- Gövde satır uzunluğu en fazla **62ch**; uzun metinde satır aralığı 1.65'in altına inmez.
- Ağırlık kuralı: display 500 (Fraunces 700 kullanılmaz — kontrast fazla sertleşir), gövde 400/600, mono 400. İtalik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1200px (içerik 1152px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1200; 768 altında tek kolon, kart radius 24px → 18px |

- Asimetri kuralı: ekran başına **1** asimetrik bölüm (7/5) — metin solda geniş, görsel sağda dar ya da tersi.
- Bölüm ritmi: art arda en fazla **3** aynı hizada kart; dördüncüsü tam genişlik "nefes bandı" olur.
- Kart içi padding 24px'in altına inmez; 390px'te 16px'e düşer ama radius korunur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa + iki ışık lekesi |
| Kart | `--surface` | `0 8px 24px rgba(27,42,31,.10)` | kart, panel, KPI |
| Yüzen katman | `--surface` + gölge | `0 16px 48px rgba(27,42,31,.16)` | modal, menü, toast |

- Kenarlık formülü: `1px solid var(--line)` — kart gölgesi varken çerçeve kalır (düşük kontrastlı zeminde sınır kaybolmasın).
- Derinlik nereden gelir: **yumuşak gölge** (tek katman) + radial ışık. Sert gölge ve ofset gölge yok.
- Radius: `--radius: 14px` (buton, input), `--radius-lg: 24px` (kart, panel); chip 999px, kart köşesi çapraz 32/12px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | `0 22px` | 14px | 15px Nunito 600 | accent dolgu, accent-ink metin, gölge yok | hover: accent %88 + ink · active: translateY(1px) + scale .995 · focus: 2px accent outline + 3px offset · disabled: opacity .45 · loading: dal çizgisi %0→%100 (600ms) |
| Buton (ikincil) | 44px | `0 22px` | 14px | 15px Nunito 600 | `--surface` + 1px `--line` | hover: `--surface-2` |
| Input | 44px | `0 16px` | 14px | 15px Nunito | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %35 outline · filled: değer 600 · error: `--danger` çerçeve + 12px etiket · disabled: opacity .5 |
| Kart | içerik | 24px | 32/12px çapraz | H3 + gövde | `--surface` + 1px `--line` + yumuşak gölge | hover: gölge 1px büyür (0 10px 28px) |
| Chip / badge | 26px | `0 12px` | 999px | 12px Nunito 600 | `--surface-2` + 1px `--line` | accent: accent %12 zemin + accent metin |
| Nav | 64px | `0 28px` | 0 | 15px Nunito 600 | `--bg` %86 + `--surface` karışımı + alt hairline | aktif: accent metin (alt çizgi yok) |
| Tablo satırı | 48px | `10px 14px` | — | 15px Nunito, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / sheet | içerik | 28px | 24px | 22px display + 11px mono etiket | `--surface` + `0 16px 48px ink %16` | açılış: 24px yukarıdan, 680ms |
| Toast | 44px | `10px 16px` | 14px | 14px Nunito 600 | `--surface` + sol uçta 8px yaprak noktası | hata: nokta `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 4 seri; çizgi 2px yuvarlak uç, dolgu %10 |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — kırık beyaz zeminde 2px offset yeterli değil.
- Dokunma hedefi: en az 44×44px; chip 26px ama satır içi hedef 44px (padding ile).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, tam yuvarlak uç, 24px ızgara; dolu ikon yok |
| Fotoğraf | doğal ışıkta bitki/mekân: düşük kontrast, sıcak beyaz dengesi, 24px radius kırpma |
| İllüstrasyon | tek renk botanik çizim (dal, yaprak damarı), %20 opaklıkta zemin dokusu |
| Doku | grain %3 + iki radial ışık; sert geometrik desen yok |
| Logo alanı | küçük harf wordmark + tek yaprak işareti, 32px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: solda H1 + tek CTA, sağda yaprak köşeli görsel kartı | `shots/01-landing.png` |
| Dashboard | düşük | en fazla 3 KPI kartı; grafik tek, süs yok | `shots/02-dashboard.png` |
| Form | düşük | 44px input, etiket üstte 11px mono; tek kolon | — |
| Liste / tablo | düşük | 48px satır (yoğunluk düşük), hover `--surface-2` | — |
| Boş durum | orta | boş kart + dal çizgisi + tek cümle + tek eylem | — |
| Onboarding | yüksek | her adım tek fikir, adım 1/3 mono etiketi | — |
| Pricing | orta | üç kart; öne çıkan kart accent %6 zemin + dal çizgisi | — |
| Giriş / ödeme | çok düşük | kart sadeleşir, gölge kalır; süs yok | — |
| Modal | orta | 24px radius + yumuşak gölge, üstte dal çizgisi | — |
| Bildirim / toast | orta | alt-sol, yaprak noktası + 14px metin | — |
| Hata | düşük | `--danger` nokta + etiket; zemin değişmez | — |
| Profil / ayar | orta | iki kolon form, bölüm başlıkları 22px display | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **680ms** | `cubic-bezier(.3,.7,.2,1)` | `opacity` + `translateY(24px)`; stagger **0.085s** |
| Scroll reveal | **740ms** | aynı eğri | trigger `top 77%`, `translateY(26px)`, `once: true` |
| Pin / scrub | yok | — | pin kapalı (içerik büyür, sayfa sabitlenmez) |
| Basma | **160ms** | aynı eğri | `translateY(1px)` + scale .995 |
| Geçiş / sayfa | 320ms | aynı eğri | opacity + 24px |
| Hover | **320ms** | aynı eğri | görsel ölçek **1.03** (en yumuşak büyüme) |
| Ödül / vurgu | 680ms | aynı eğri | dal çizgisi soldan sağa %0→%100 (tek kez) |

- İmza ölçüleri: `enter = 0.68s / cubic-bezier(.3,.7,.2,1) / 24px / 0.085` · `scroll = top 77% / 0.74s / 26px / once` · `pin = false` · `hover = 320ms / 1.03`.
- Bant içi fark: 77'den (0.78s / 18px / pin 1.6), 78'den (0.48s / 32px / 0.05), 79'dan (0.83s / 40px / 0.115), 80'den (0.57s / 22px) en az dört parametrede ayrışır. Mevcut 72 stil içinde en yakını 38-organic-bio (`1.0s / power2.out / 28px / 0.1`) — beş parametrede farklı.
- `prefers-reduced-motion`: tüm süreler 0.01ms, dal çizgisi ve büyüme animasyonu son kareye atlar.
- Bu stile yasak hareket: sürekli salınım (rüzgâr) ekran başına 1'den fazla, kapatılamayan parallax, sert/step geçiş.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f2f4ea` | `#101a12` |
| `--surface` | `#fbfcf6` | `#1b2a1f` |
| `--ink` | `#1b2a1f` | `#e6efe2` |
| `--accent` | `#2f6b3f` | `#7fbf6a` |
| `--ink-soft` | `#4a5c4a` | `#a9bca6` |
| `--line` | `rgba(27,42,31,.14)` | `rgba(230,239,226,.16)` |

- Koyu modda değişen başka ne var: radial ışık lekeleri %10 → %14 (koyu zeminde görünmesi için), gölge opaklığı .10 → gece modunda gölge yerine 1px `--line` öne çıkar, accent bir ton açılır (`#7fbf6a`) çünkü koyu zeminde koyu yeşil kaybolur.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Yüzeyler yumuşak: radius 14px (kontrol) / 24px (kart), yaprak köşesi 32/12px; 999px yalnız chip.
- Zemin kırık beyaz (`--bg`); saf beyaz `#ffffff` zemin olarak kullanılmaz.
- Derinlik tek yumuşak gölge; sert, ofset ve iç gölge yok.
- Her ekranda tek organik form: yaprak köşesi ya da dal çizgisi.
- Renk paleti bitki skalası; ikinci doygun renk yok.
- Gövde satır aralığı ≥ 1.6, bölüm dikey boşluğu ≥ 80px (mobil 48px).

## Yasaklar
- Saf gri/beton zemin ve nötr kurumsal mavi.
- 0px keskin köşe, 2px ve üstü kalın çerçeve.
- Neon, gradyan patlaması, cam/blur efekti.
- Geometrik sans display, italik display, 700 üstü Fraunces.
- Dolu renkli ikon, emoji.
- Sıkı satır aralığı (1.4 altı) ve 3'ten fazla gölge katmanı.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **6.47:1** (eşik 4.5); `ink-faint / bg` = **3.67:1** yalnız dekoratif çizgi ve alt notta.
- `--ink-faint` etkileşimli metinde kullanılmaz; form etiketleri `--ink-soft` (6.47:1).
- Hareket/parlama hassasiyeti: düşük — flash yok, sürekli animasyon ekran başına ≤1; `prefers-reduced-motion` büyüme ve dal çizgisini durdurur.
- Şeffaf yüzey yok; opak fallback gerekmez. `border-radius` ile çapraz köşe desteklenmezse 24px düz radius'a düşer (okunurluk değişmez).
- Odak görünürlüğü: kırık beyaz zeminde 2px accent outline + **3px** offset; 1px offset yeşil zeminde kaybolur.

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
| Ekran "şablon kart UI" gibi | her kart eşit yuvarlanmış | yaprak köşesini çapraz uygula (32/12px) |
| Yeşil okunmuyor | accent metin olarak kullanılmış | accent yalnız dolgu/çizgi; metin `--ink` |
| Sayfa "oyuncak" görünüyor | radius 24px tüm bileşenlerde | kontrol 14px, kart 24px, chip 999px |
| Yorgunluk değil ama dağınıklık | birden fazla organik form | ekran başına tek yaprak/dal formu |
| Gölge kirli | çok katmanlı gölge eklenmiş | tek katman `var(--shadow)` |
| Mobilde taşma | 24px gutter korunmuş | 768 altı 16px gutter, tek kolon |

## Komşu stiller

- **Uyumlu:** `organic-bio` — aynı doğal form dili; Organic yalnız grafik/illüstrasyon katmanında garnitür.
- **Uyumlu:** `japandi` — sıcak nötr zemin + sade tipografi; Japandi tek bölümde.
- **Uyumlu:** `wabi-sabi` — doku ve kırık hiza; yalnız boş durum illüstrasyonunda.
- **Yasak:** `terminal-ui` — mono yoğunluk ve kesik hareket yumuşaklık iddiasını bozar.
- **Yasak:** `neo-brutalism` — sert ofset gölge ve kalın çerçeve fizik çelişkisi.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Biophilic_design | doğa referansının ölçülebilir ilkeleri |
| https://www.terrapinbrightgreen.com/reports/14-patterns/ | ışık, malzeme ve karmaşıklık desenleri |
| https://www.wellcertified.com/ | mekân ve görsel bağlantı ölçütleri |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | yeşil tonlarında metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Biyofilik Botanik (styles/76-biophilic-botanical/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="biophilic-botanical"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg kırık beyaz + iki radial ışık (accent %10 sol üst, ok %8 sağ alt).
Tipografi: --font-display Fraunces 48/32/22 (500, -.01em); --font-body Nunito 16px/1.65;
  --font-mono IBM Plex Mono 11px etiket (.08em, uppercase).
Yüzey: --bg / --surface + 1px var(--line) + var(--shadow) 0 8px 24px / yüzen 0 16px 48px.
  Radius 14px kontrol, 24px kart, kart köşesi çapraz 32px 12px 32px 12px, chip 999px.
Renk: tek yeşil ailesi accent #2f6b3f; durum renkleri yalnız etiket + ikonla.
  ink/bg 13.53:1, ink-soft/bg 6.47:1, accent-ink/accent 6.37:1, ink-faint/bg 3.67:1 (dekoratif).
Bileşen: buton/input 44px (padding 0 22px / 0 16px); chip 26px hap; odak 2px accent + 3px offset.
Hareket: enter 680ms cubic-bezier(.3,.7,.2,1) 24px stagger .085; scroll top 77% 740ms 26px once;
  pin yok; hover 320ms görsel 1.03. prefers-reduced-motion zorunlu.
Yasak: saf gri/beton zemin, 0px köşe, kalın çerçeve, neon, cam, dolu renkli ikon, sıkı satır aralığı.
Çıktı: bileşen kodu + tek paragraf not (yaprak köşesini ve dal çizgisini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: çapraz yaprak köşesi, dal çizgisi, radial ışık, hap chip.
- [ ] Hard-coded renk/gölge/radius yok (`grep -E '#[0-9a-f]{3,6}|box-shadow:|border-radius:'` temiz).
- [ ] Kontrast: 13.53 / 6.47 / 6.37 — hepsi eşik üstü.
- [ ] Odak halkası 2px accent + 3px offset görünür.
- [ ] 390px'te tek kolon, radius 18px, taşma yok.
- [ ] `prefers-reduced-motion` açıkken büyüme ve dal çizgisi duruyor.

## Token

```css
[data-style="biophilic-botanical"] {
  --bg: #f2f4ea; --bg-2: #e9eddd;
  --surface: #fbfcf6; --surface-2: #f5f8ee;
  --ink: #1b2a1f; --ink-soft: #4a5c4a; --ink-faint: #73826f;
  --accent: #2f6b3f; --accent-ink: #ffffff;
  --line: rgba(27,42,31,.14);
  --radius: 14px; --radius-lg: 24px;
  --shadow: 0 8px 24px rgba(27,42,31,.10); --shadow-hard: none;
  --font-display: "Fraunces", "Lora", Georgia, serif;
  --font-body: "Nunito", "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 3;
  --danger: #a33a2b; --danger-ink: #ffffff;
  --ok: #2f6b3f; --warn: #8a6212;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="biophilic-botanical"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
