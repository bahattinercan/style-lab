# 106 · Ses-Öncelikli

> **Bir cümlede:** Arayüzün ana girişi ses olan stil: ekranın merkezinde dinleme halkası ve dalga formu, çevresinde tek satırlık transkript, hap biçimli dev butonlar.

| | |
|---|---|
| **Hissiyat** | davetkâr, canlı, konuşkan, sabırlı |
| **En iyi** | sesli asistan, dikte/not ürünü, erişilebilirlik arayüzü, çağrı merkezi paneli |
| **Kaçın** | yoğun veri tablosu, finans paneli, güvenlik uyarı ekranı — ses odağı burada veri okumayı yavaşlatır |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 9.15:1, accent üstü 8.48:1) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="voice-first"]` |
| **Kompozisyon** | `centered` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Ses-Öncelikli, ekranı **konuşma sırası** gibi kurar: merkezde dinleme halkası (eşmerkezli iki accent halka), altında dalga formu, çevresinde tek kolon transkript; tüm butonlar hap biçimli (999px) ve en az 48px. Metin yoğunluğunu feda eder; karşılığında **tek odaklı, sıraya saygılı** bir etkileşim kazanır.

Kurucu kararları üç tanedir. Birincisi **tek odak**: ekranda birincil hedef dinleme düğmesi; ikinci bir görsel odak (grafik, büyük görsel) yoktur. İkincisi **durum metinle de yazılır**: DİNLİYOR / İŞLENİYOR / HAZIR — renk tek başına anlam taşımaz, ses arayüzünde bu kritik çünkü kullanıcı ekrana bakmıyor olabilir. Üçüncüsü **iri hedefler**: 48px buton, 999px radius, cömert padding.

Bedeli: veri yoğunluğu. Bu yüzden liste ekranları 12 satırla sınırlanır; yoğun veri gereken yerde bu stil yalnız komut katmanı olarak kullanılır.

### Ne değildir
- **Log Stream (49) değildir:** 49 mono yoğun olay akışıdır ve Space Mono ile yazılır; 106'da merkezî halka + Poppins başlık vardır, satır akışı yok.
- **AI-native Mesh (39) değildir:** 39 gradyan/ışıma ile "üretken" atmosfer kurar ve yoğun metin taşır; 106 tek accent + hap kontrol dili.
- **Liquid Glass (09) değildir:** 09 kırılma/sıvı taklit eder; 106'da cam ve blur yok, derinlik accent ışımasıdır.
- **Terminal UI (45) değildir:** 45 klavye-öncelikli kesik hareket kullanır; 106'da hareket kısa ve yumuşak (370ms), odak seste.

### Nereden gelir
Sesli arayüz (VUI) araştırmalarından: tur alma (turn-taking), dinleme göstergesi, sözlü onay. Bugün geri dönüyor çünkü asistanlar ekranın yerine geçmeye başladı; klişeye dönmemesi için korunacak detay **durumun metinle yazılması** ve dalga formunun gerçek ölçüye bağlı olması (rastgele çubuk değil).

### 3 saniyede tanıma testi
1. Ekranın merkezinde eşmerkezli iki accent halka var; çevresinde tek kolon metin.
2. Tüm butonlar hap biçimli ve en az 48px; köşeli buton yok.
3. Durum metni yazıyla görünüyor ("DİNLİYOR"), yalnız renkle değil.
4. Dalga formu 3–40 çubuk arasında; çubuklar accent'ten şeffafa sönüyor.
5. Zemin koyu menekşe; ikinci parlak renk yok.

## Görsel imza
- **Dinleme halkası:** iki `repeating-radial-gradient` (34px ve 68px aralık), accent %26 ve %14.
- **Dalga formu:** 4px genişlik, 999px radius çubuklar; yükseklik 8–56px, accent → şeffaf gradyan.
- **Hap kontrol dili:** buton/input 999px, 48px yükseklik; chip 28px hap.
- **Accent ışıması:** `--shadow: 0 8px 40px rgba(255,138,212,.22)` yalnız dinleme katmanında.
- **Transkript mono:** IBM Plex Mono 14px/1.6; konuşulan metin `--ink`, ara metin `--ink-soft`.
- **Durum noktası:** 8px accent daire + 4px accent %22 halka (eyebrow önünde).
- **Hareket imzası:** 370ms `cubic-bezier(.2,.9,.3,1)`, 2px — neredeyse yerinde belirir, ses anlıktır.
- **Landing hero (QA):** dinleme halkası + 5px dalga çubuğu dizisi + canlı transkript altbilgisi (`scenes.landing`, yalnız CSS).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#171021` | sayfa zemini (koyu menekşe) | kart zemini |
| `--bg-2` | `#1d152a` | nav, ikincil bant | birincil CTA |
| `--surface` | `#241a33` | kart / panel | sayfa zemini |
| `--surface-2` | `#2b2040` | chip, input zemini | modal zemini |
| `--ink` | `#f1e9f7` | başlık, transkript | dekoratif çizgi |
| `--ink-soft` | `#c0b0d0` | açıklama, ikincil etiket | başlık |
| `--ink-faint` | `#8f7fa2` | yalnız dekoratif çizgi, eksen | etkileşimli metin |
| `--accent` | `#ff8ad4` | dinleme halkası, birincil eylem, dalga | geniş zemin dolgusu |
| `--accent-ink` | `#2a0a1e` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(241,233,247,.16)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **15.66:1** · `ink-soft / bg` = **9.15:1** · `accent-ink / accent` = **8.48:1** · `ink-faint / bg` = **5.06:1** (yalnız dekoratif).
- Tek vurgu kuralı (kesin): tek parlak renk accent. `--danger` (#ff9aa5), `--ok` (#7ee6b0), `--warn` (#ffd98a) parlamaz; yalnız metin + nokta.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--surface-2` üstünde `--ink-faint` transkript.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poppins (`--font-display`) | 48px (mobil 30px) | 500 | 1.08 | `-.01em` |
| H2 | Poppins | 32px | 500 | 1.16 | `0` |
| H3 | Poppins | 22px | 500 | 1.30 | `0` |
| Gövde / transkript | IBM Plex Mono (`--font-mono`) | 14px | 400 | 1.60 | `0` |
| Arayüz gövdesi | Inter (`--font-body`) | 16px | 400 | 1.62 | `0` |
| Etiket | IBM Plex Mono | 11px | 400 | 1.4 | `.10em` |

- Ölçek oranı: **1.45** — kullanılan basamaklar 11 · 12 · 14 · 16 · 22 · 32 · 48.
- Ölçü önerisi: `h1 { font-size: clamp(30px, 4.8vw, 48px); line-height: 1.08 }`.
- Transkript satır uzunluğu en fazla **58ch** (ses metni kısa satırda okunur).
- Ağırlık kuralı: display 500, gövde 400/600, mono 400. 700 üstü ve italik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1120px (içerik 1072px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1120; 768 altında halka 200px'e küçülür, tek kolon |

- Asimetri kuralı: simetri **merkezde** (halka), asimetri metinde: ekran başına 1 adet 8/4 bölünme.
- Bölüm ritmi: art arda en fazla **3** kart; dördüncüsü tam genişlik transkript bandı olur.
- Halka çevresinde en az 32px boşluk; metin halkaya 24px'ten fazla yaklaşmaz.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa + radial accent ışıması |
| Kart | `--surface` | yok | kart, panel, transkript kutusu (1px line) |
| Yüzen katman | `--surface` + accent gölge | `0 8px 40px rgba(255,138,212,.28)` | dinleme katmanı, onay modalı, toast |

- Kenarlık formülü: `1px solid var(--line)`; dinleme katmanında `1px solid accent %34`.
- Derinlik nereden gelir: **accent ışıması** (tek katman) + 1px line. Sert/ofset gölge yok.
- Radius: `--radius: 24px` (kart içi kontrol), `--radius-lg: 32px` (kart, modal); buton/input 999px hap.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | `0 26px` | 999px | 15px Inter 600 | accent dolgu, accent-ink metin, `var(--shadow)` | hover: accent %90 + ink, halka 1px genişler · active: scale .98 · focus: 3px accent outline + 3px offset · disabled: opacity .4 · loading: dalga çubukları 3 kademe (600ms) |
| Buton (ikincil) | 48px | `0 26px` | 999px | 15px Inter 600 | şeffaf + 1px `--line` | hover: `--surface` dolgu |
| Input | 48px | `0 20px` | 999px | 15px Inter | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %40 outline · error: `--danger` çerçeve + 12px etiket · disabled: opacity .4 |
| Kart | içerik | 24px | 32px | H3 + gövde | `--surface` + 1px `--line`, gölge yok | dinleme kartı: accent çerçeve + accent gölge |
| Chip / badge | 28px | `0 12px` | 999px | 12px Inter 600 | `--surface-2` + 1px `--line` | accent: accent %18 zemin + accent metin |
| Nav | 60px | `0 24px` | 0 | 15px Inter 500 | `--bg` %88 + `--surface` karışımı + alt hairline | aktif: accent metin |
| Tablo satırı | 44px | `8px 14px` | — | 14px Inter, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / sheet | içerik | 28px | 32px | 22px display + mono transkript | `--surface` + 1px accent + `0 8px 40px` | açılış: 2px belirme, 370ms |
| Toast | 44px | `10px 16px` | 999px | 14px Inter 600 | `--surface` + sol uçta 8px accent nokta | hata: nokta `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 3 seri; grafik yerine dalga formu tercih edilir |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 3px` — koyu menekşe zeminde 2px yetersiz.
- Dokunma hedefi: en az 48×48px (bu stil 44px alt sınırını kullanmaz: ses kontrolü sık ve hızlı basılır).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, tam yuvarlak uç, 24px ızgara; mikrofon/dalga/dur |
| Fotoğraf | yok — odak halkası ve dalga; kişi fotoğrafı kullanılmaz |
| İllüstrasyon | dalga formu zorunlu imza; dekoratif başka çizim yok |
| Doku | grain yok; dinleme halinde accent halka %18 opaklıkta nefes alır |
| Logo alanı | yuvarlak accent işaret + küçük harf wordmark, 32px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | merkezde halka + tek CTA + iki satır açıklama | `shots/01-page.png` |
| Dashboard | düşük | en fazla 3 KPI; grafik yerine dalga özeti | `shots/01-page.png` |
| Form | düşük | 48px hap input, tek kolon; sesle doldurma düğmesi | `shots/01-page.png` |
| Liste / tablo | düşük | 12 satır sınırı, 44px satır | `shots/01-page.png` |
| Boş durum | orta | "Henüz konuşma yok" + tek mikrofon CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: izin → mikrofon testi → ilk dikte | `shots/01-page.png` |
| Pricing | orta | iki plan kartı; öne çıkan kart accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | süs yok; tek CTA, hap input | `shots/01-page.png` |
| Modal | orta | transkript onayı: mono metin + iki hap buton | `shots/01-page.png` |
| Bildirim / toast | orta | alt-orta, accent nokta + kısa metin | `shots/01-page.png` |
| Hata | orta | "ANLAŞILAMADI" + tekrar dinle CTA'sı | `shots/01-page.png` |
| Profil / ayar | orta | ses/dil/tolerans ayarları, hap seçiciler | `shots/01-page.png` |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Zorunlu kurallar
- Ekranın tek odağı dinleme hali: halka + dalga; ikinci görsel odak yok.
- Ses durumu daima metinle de yazılır (DİNLİYOR / İŞLENİYOR / HAZIR); renk tek başına yetmez.
- Butonlar hap biçimli (999px) ve en az 48px yüksekliğinde.
- Transkript mono (IBM Plex Mono) ve 1.6 satır aralığıyla yazılır.
- Accent yalnız dinleme/vurgu için yanar; ikinci parlak renk yok.
- Yoğun tablo yok: görünür alanda en fazla 12 satır.

## Yasaklar
- Serif display ve dekoratif illüstrasyon.
- İkinci parlak renk / çoklu gradyan.
- Kalın 2px+ çerçeve, 0px keskin köşe.
- 44px altı dokunma hedefi.
- Dinleme dışında sürekli animasyon.
- Renk-only durum bildirimi.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **9.15:1** (eşik 4.5); `ink-faint / bg` = **5.06:1** yalnız dekoratif çizgide.
- `--ink-faint` transkriptte ve etkileşimli metinde kullanılmaz; transkript `--ink` (15.66:1).
- Hareket/parlama hassasiyeti: orta — sürekli dalga yalnız dinleme sırasında ve kapatılabilir (WCAG 2.2.2); `prefers-reduced-motion` halka ve dalgayı dondurur.
- Şeffaf yüzey yok; opak fallback gerekmez. `repeating-radial-gradient` desteklenmezse halka 1px düz accent çembere düşer.
- Odak görünürlüğü: 3px accent outline + 3px offset; halka çizgileri üstünde 2px kaybolur.
- Ses ipuçları yalnız sesle verilmez: her durumun görsel metin karşılığı vardır (işitme engeli).

## Örnek görseller

Aynı içerik, tüm stillerde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-page.png` | Tek sayfa — 1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form/veri, CTA ve alt bilgi tek karede. |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| Ekran "sohbet uygulaması" gibi | halka küçük, metin baskın | halkayı merkez ve en büyük öğe yap |
| Kullanıcı dinleme halini kaçırıyor | yalnız renk değişimi | durum metni + nokta ekle |
| Butonlar "kutu" gibi | radius 24px kalmış | buton/input 999px hap |
| Kontrast düşük | accent metin olarak kullanılmış | accent dolgu/halka; metin `--ink` |
| Dalga gürültü yapıyor | 40+ çubuk veya rastgele yükseklik | 3–40 çubuk, gerçek genliğe bağlı |
| Titreşim | halka animasyonu sürekli | animasyon yalnız dinleme halinde |

## Komşu stiller

- **Uyumlu:** `ai-native-mesh` — aynı üretken-asistan dünyası; Mesh yalnız hero zemininde garnitür.
- **Uyumlu:** `liquid-glass` — cam nav olarak; ses ekranında tek katman.
- **Uyumlu:** `chat-stream` — yazılı kanal eklendiğinde transkript katmanı.
- **Yasak:** `academic-paper` — yoğun serif metin ses odağını boğar.
- **Yasak:** `blueprint-drawing` — ölçü/ızgara disiplini sesin akışkanlığıyla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Voice_user_interface | tur alma ve durum modeli |
| https://developers.google.com/assistant/conversation-design/welcome | dinleme/işleme/hazır durum dili |
| https://en.wikipedia.org/wiki/Waveform | dalga biçimi ölçüleri |
| https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | sürekli animasyon sınırı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Ses-Öncelikli (styles/106-voice-first/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="voice-first"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg koyu menekşe + radial accent ışıma (üst %16, sağ alt %8).
Tipografi: --font-display Poppins 48/32/22 (500, -.01em); --font-body Inter 16px/1.62;
  --font-mono IBM Plex Mono 14px/1.6 transkript + 11px etiket (.10em, uppercase).
Yüzey: --bg / --surface (1px var(--line), gölge yok) / dinleme katmanı + var(--shadow) 0 8px 40px accent.
  Buton/input 999px hap (48px), kart radius 32px.
Renk: tek parlak accent #ff8ad4; durum renkleri parlamaz, metinle birlikte.
  ink/bg 15.66:1, ink-soft/bg 9.15:1, accent-ink/accent 8.48:1, ink-faint/bg 5.06:1 (dekoratif).
İmza: iki eşmerkezli accent halka (34/68px aralık) + 4px dalga çubukları (accent → şeffaf).
Hareket: enter 370ms cubic-bezier(.2,.9,.3,1) 2px stagger .022; scroll top 95% 230ms 6px once;
  pin yok; hover 95ms görsel 1.002. prefers-reduced-motion zorunlu (halka/dalga durur).
Yasak: serif display, ikinci parlak renk, kalın çerçeve, 44px altı hedef, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (halkayı ve durum metnini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: eşmerkezli halka, dalga formu, hap buton, durum noktası.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 15.66 / 9.15 / 8.48 — hepsi eşik üstü.
- [ ] Durum hem renk hem metinle bildiriliyor.
- [ ] Odak halkası 3px accent + 3px offset görünür; dokunma hedefi ≥48px.
- [ ] 390px'te halka küçülüyor, taşma yok; `prefers-reduced-motion` animasyonu durduruyor.

## Token

```css
[data-style="voice-first"] {
  --bg: #171021; --bg-2: #1d152a;
  --surface: #241a33; --surface-2: #2b2040;
  --ink: #f1e9f7; --ink-soft: #c0b0d0; --ink-faint: #8f7fa2;
  --accent: #ff8ad4; --accent-ink: #2a0a1e;
  --line: rgba(241,233,247,.16);
  --radius: 24px; --radius-lg: 32px;
  --shadow: 0 8px 40px rgba(255,138,212,.22); --shadow-hard: none;
  --font-display: "Poppins", "Jost", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
  --danger: #ff9aa5; --danger-ink: #2a0a1e;
  --ok: #7ee6b0; --warn: #ffd98a;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="voice-first"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
