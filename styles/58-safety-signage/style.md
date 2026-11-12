# 58 · Güvenlik Tabelası

> **Bir cümlede:** Sahadaki uyarı levhasının mantığı: koyu zemin, çapraz tehlike bandı, 2px uyarı çerçevesi ve piktogram + büyük harf metinle kurulan üç kademeli hiyerarşi.

| | |
|---|---|
| **Hissiyat** | acil, kesin, yüksek sesli, tartışmasız |
| **En iyi** | saha/güvenlik paneli, kritik uyarı akışı, iş güvenliği eğitimi, tehlike bildirim ürünü |
| **Kaçın** | lüks vitrin, sağlık iletişimi (sakinlik gerekir), uzun okuma ekranları — sürekli uyarı yorar |
| **Zorluk** | düşük · **Erişilebilirlik** | orta risk (fotosensitivite; en düşük metin çifti 10.25:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="safety-signage"]` |
| **Kompozisyon** | `split` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Güvenlik Tabelası, arayüzü bir **uyarı levhası** gibi kurar: koyu asfalt zemin, üstte 8px çapraz tehlike bandı, uyarı kutularında 2px accent çerçeve, başlıklar Anton ile tamamı büyük harf, her durum piktogram + metinle. Sükûneti feda eder; karşılığında **hiçbir uyarının gözden kaçmaması** kazanır.

Kurucu kararları üç tanedir. Birincisi **üç kademeli hiyerarşi sabittir**: 2px accent çerçeve = yasak/tehlike, 2px `--ink` çerçeve = talimat, 1px `--line` = bilgi. İkincisi **renk tek başına anlam taşımaz**: her kademe piktogram + metinle tekrar edilir. Üçüncüsü **hareket kesiktir**: `linear` 140ms — uyarı süzülmez, belirir.

Bedeli: uzun süreli kullanımda yorucudur. Bu yüzden yalnız kritik akış ve saha ekranlarında kullanılır; okuma ekranlarında `--bg` düz, bant yok.

### Ne değildir
- **Constructivism (36) değildir:** 36 diyagonal kompozisyon ve siyah-kırmızı baskı dili kullanır, uyarı kademesi tanımlamaz. Tabela'da hiyerarşi kuraldır ve piktogram zorunludur.
- **Neo-Brutalism (13) değildir:** 13 ofset sert gölge ve keyfi çerçeve kalınlığıyla "kaba" görünür; Tabela'da gölge yoktur, çerçeve kalınlığı anlam taşır.
- **Kinetic Type (37) değildir:** 37 dev tipografiyi hareket ettirir; Tabela'da hareket 140ms'de biter, sürekli animasyon yasak.
- **Terminal UI (45) değildir:** 45 eşaralıklı mono ve durum metinleriyle konuşur; Tabela Anton + Rajdhani ile ses yükseltir, mono yalnız ölçü etiketinde.

### Nereden gelir
ISO 3864 / ISO 7010 piktogram sistemi ve OSHA 1910.145 uyarı kategorilerinden. Bugün geri dönüyor çünkü operasyonel yazılımda en pahalı hata **gözden kaçan uyarı**; levha dili, uyarıyı estetik tercih olmaktan çıkarıp sözleşmeye bağlar. Klişeye dönmemesi için korunacak detay: üç kademeli çerçeve kuralı ve piktogram zorunluluğu.

### 3 saniyede tanıma testi
1. Sayfanın üstünde 8px çapraz sarı-siyah tehlike bandı var.
2. Başlıklar Anton, tamamı büyük harf, satır aralığı 1.0'ın altında.
3. Uyarı kutularında radius 0 ve 2px çerçeve; gölge yok.
4. Her durumun yanında piktogram (üçgen / yuvarlak / kare) duruyor.
5. Buton 48px yüksekliğinde, dolgu sarı, metin siyah.

## Görsel imza
- **Tehlike bandı:** `repeating-linear-gradient(45deg, var(--accent) 0 20px, var(--accent-ink) 20px 40px)`, 8px yüksekliğinde üst bant (nav üstü).
- **Üç kademeli çerçeve:** 2px accent (tehlike) · 2px `--ink` (talimat) · 1px `--line` (bilgi) — dördüncü kalınlık yok.
- **Piktogram zorunluluğu:** her uyarı satırında 24px piktogram; renk körlüğünde tek ayırt edici.
- **Dev büyük harf:** H1 72px Anton, `line-height: .94`, en fazla 18ch — levha gibi 2–3 satır.
- **Sol 8px bant:** tehlike kartlarında sol kenar 8px accent (levha kenarı).
- **Radius 0:** her yüzeyde; tek istisna yok.
- **Hareket imzası:** 140ms `linear`, 16px yukarıdan — belirme, süzülme değil.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#12120e` | sayfa zemini (asfalt) | kart zemini |
| `--bg-2` | `#1a1a14` | input zemini, bant | buton zemini |
| `--surface` | `#1f1f18` | uyarı kutusu / kart | sayfa zemini |
| `--surface-2` | `#26261d` | ikincil panel, tablo başlığı | birincil uyarı kutusu |
| `--ink` | `#f6f2e4` | başlık, gövde (yüksek kontrast) | accent dolgu üstü |
| `--ink-soft` | `#c4c0a9` | açıklama, ikincil etiket | büyük harf H1 |
| `--ink-faint` | `#8b8874` | yalnız dekoratif ayırıcı ve teknik not | her türlü uyarı metni |
| `--accent` | `#ffd52e` | tehlike bandı, yasak çerçevesi, birincil eylem | gövde metni rengi |
| `--accent-ink` | `#14140d` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(246,242,228,.20)` | bilgi kademesi çerçevesi ve ayırıcı | tehlike çerçevesi |

- Ölçülen kontrast: `ink / bg` = **16.75:1** · `ink-soft / bg` = **10.25:1** · `accent-ink / accent` = **13.04:1** · `ink-faint / bg` = **5.25:1** (yalnız dekoratif).
- Çok renk kuralı (bilinçli istisna): üç durum rengi vardır — `--danger` (tehlike), `--warn` (dikkat, accent ile aynı sarı), `--ok` (güvenli). Üçü de **piktogram + metinle** birlikte kullanılır; renk tek başına anlam taşımaz.
- Yasak kombinasyon: accent üstünde `--ink-soft`; `--surface` üstünde `--ink-faint` uyarı metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton (`--font-display`) | 72px (mobil 40px) | 400 | 0.94 | `.01em` |
| H2 | Anton | 40px | 400 | 1.02 | `.02em` |
| H3 | Anton | 24px | 400 | 1.12 | `.02em` |
| Gövde | Rajdhani (`--font-body`) | 17px | 500 | 1.45 | `.01em` |
| Küçük gövde | Rajdhani | 14px | 500 | 1.45 | `.01em` |
| Etiket / mono | Space Mono (`--font-mono`) | 11–12px | 400 | 1.4 | `.10em` |

- Ölçek oranı: **1.7** — kullanılan basamaklar 11 · 12 · 14 · 17 · 24 · 40 · 72.
- Ölçü önerisi: `h1 { font-size: clamp(40px, 8vw, 72px); line-height: .94; text-transform: uppercase }`.
- Gövde satır uzunluğu en fazla **54ch** — uyarı metni kısa olmalı.
- Ağırlık kuralı: Anton tek ağırlık (400); Rajdhani 500/700; mono 400. İnce (300) ve italik yasak; display daima büyük harf.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 12px |
| Container genişliği | 1160px (içerik 1136px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1160; 768 altında band 6px, tek kolon |

- Asimetri kuralı: uyarı bandı her zaman **tam genişlik**; içerik 8/4 bölünür. Ortalanmış başlık yok — metin sola dayalı (levha okuma yönü).
- Bölüm ritmi: art arda en fazla **2** uyarı kutusu; üçüncü uyarı tam genişlik bant olur (hiyerarşi düşer).
- Boşluklar 4'ün katı; uyarı kutusu iç padding 16px'ten az olamaz (piktogram sıkışır).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | asfalt zemin, bant |
| Kart | `--surface` | yok | uyarı kutusu: 2px accent veya 2px `--ink` çerçeve |
| Yüzen katman | `--surface` + accent çerçeve | yok | modal/toast: 3px accent çerçeve ile ayrılır |

- Kenarlık formülü: kademe belirler — 2px accent (tehlike), 2px `--ink` (talimat), 1px `--line` (bilgi). Gölge hiçbir seviyede yok.
- Derinlik nereden gelir: **hiçbir yerden** — levha düzdür. Ayrım çerçeve kalınlığı ve zemin tonuyla.
- Radius: `--radius: 0px` ve `--radius-lg: 0px`. İstisna yok.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | `0 20px` | 0 | 15px Rajdhani 700 uppercase `.10em` | accent dolgu, accent-ink metin, 2px accent-ink çerçeve, gölge yok | hover: renkler ters çevrilir · active: translateY(2px) · focus: 3px accent outline + 3px offset · disabled: opacity .55 + 45° tarama · loading: "İŞLENİYOR" + 3 kare nokta |
| Buton (ikincil) | 48px | `0 20px` | 0 | 15px Rajdhani 700 | şeffaf + 2px `--ink` çerçeve | hover: `--ink` dolgu + `--bg` metin |
| Input | 48px | `0 14px` | 0 | 16px Rajdhani 500 | `--bg-2` + 2px `--line` | focus: 3px accent outline offset 2px, çerçeve 2px accent · error: 2px `--danger` + `!` piktogram · disabled: opacity .5 |
| Kart | içerik | 16px | 0 | H3 + gövde | `--surface` + 2px `--line`, tehlike kartında sol 8px accent | hover: çerçeve accent'e döner |
| Chip / badge | 24px | `0 10px` | 0 | 12px Rajdhani 700 uppercase `.10em` | accent dolgu + accent-ink metin | tehlike: `--danger` dolgu + `--danger-ink` |
| Nav | 60px | `0 20px` | 0 | 14px Rajdhani 700 uppercase `.08em` | `--accent-ink` zemin + üstte 8px çapraz bant | aktif: accent metin + 2px alt çizgi |
| Tablo satırı | 44px | `8px 10px` | — | 15px Rajdhani | satır arası 2px `--line` | hover: `--surface-2`; kritik satır sol 8px `--danger` |
| Modal / sheet | içerik | 20px | 0 | 24px Anton uppercase | `--surface` + 3px accent çerçeve + üstte 12px bant | açılış: 140ms linear |
| Toast | 48px | `10px 14px` | 0 | 14px Rajdhani 700 | `--surface` + sol uçta 24px piktogram | hata: `--danger` sol bant |
| Grafik paleti | — | — | — | — | `--accent`, `--ink`, `--danger`, `--ok` | en fazla 4 seri; limit çizgisi 2px accent kesikli |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 3px` (diğer stillerden kalın: 2px çerçeve yanında 2px outline kaybolur).
- Dokunma hedefi: en az 48×48px — bu stilde 44px alt sınır değil, 48px hedef; saha eldiveni payı.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 24px ızgara, yuvarlatma yok; ISO 7010 piktogram üçlüsü (üçgen/yuvarlak/kare) |
| Fotoğraf | yok — piktogram + tipografi yeterli |
| İllüstrasyon | yalnız standart piktogram; marka illüstrasyonu yasak |
| Doku | 45° çapraz bant (accent + accent-ink, 20px/20px); grain 0 |
| Logo alanı | accent kutu içinde siyah wordmark; kutu dışında 20px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 72px Anton H1 + üstte 8px tehlike bandı + tek CTA | `shots/01-landing.png` |
| Dashboard | orta | KPI'lar 2px çerçeve; kritik olan accent çerçeve | `shots/02-dashboard.png` |
| Form | düşük | 48px input, 2px çerçeve, focus'ta accent | — |
| Liste / tablo | düşük | 44px satır, kritik satır sol 8px `--danger` | — |
| Boş durum | orta | "KAYIT YOK" 40px Anton + piktogram | — |
| Onboarding | yüksek | her adım tek uyarı kuralı; ilerleme 4 kare blok | — |
| Pricing | orta | plan kartları 2px çerçeve; öne çıkan accent çerçeve | — |
| Giriş / ödeme | düşük | bant yok, 2px çerçeve korunur; süs sıfır | — |
| Modal | orta | 3px accent çerçeve + üst 12px bant | — |
| Bildirim / toast | orta | üst-orta, sol uçta 24px piktogram | — |
| Hata | yüksek | `--danger` çerçeve + piktogram + 40px Anton başlık | — |
| Profil / ayar | orta | bant yok; talimat kademesi 2px `--ink` | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **140ms** | `linear` | `opacity` + `translateY(16px)`; stagger **0.06s** |
| Scroll reveal | **150ms** | `linear` | trigger `top 93%`, `translateY(22px)`, `once: true` |
| Pin / scrub | yok | — | pin kapalı (uyarı kaymaz) |
| Basma | **60ms** | `linear` | `translateY(2px)`, renk ters çevrilir |
| Geçiş / sayfa | 140ms | `linear` | opacity, cross-fade yok |
| Hover | **80ms** | `linear` | görsel ölçek **1.012** |
| Ödül / vurgu | 220ms | `linear` | bant 8px→12px, tek kez (döngü yok) |

- İmza ölçüleri: `enter = 0.14s / linear / 16px / 0.06` · `scroll = top 93% / 0.15s / 22px / once` · `pin = false` · `hover = 80ms / 1.012`.
- Aynı banttaki komşulardan fark: 56'dan (0.36s / bezier / 6px) dört, 57'den (0.26s / overshoot / 4px) dört, 59'dan (0.44s / bezier / 20px) dört, 60'tan (0.58s / bezier / 12px) dört parametrede ayrışır. Mevcut 59 stil içinde en yakını 49-log-stream (7 parametre farkı).
- `prefers-reduced-motion`: tüm süreler 0.01ms, bant genişlemesi kapanır.
- Bu stile yasak hareket: yay/overshoot, yumuşak ease, saniyede 3 üstü flash, sürekli yanıp sönen bant, parallax.

## Koyu mod

Koyu modda asfalt zemin daha da koyulaşır (ΔL −9) ve kart bandı yukarı çıkar; sarı accent parlaklığı artar ki tehlike bandı siyahta ayrışsın.

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#12120e` | `#090906` |
| `--bg-2` | `#1a1a14` | `#0f0f0b` |
| `--surface` | `#1f1f18` | `#15150e` |
| `--surface-2` | `#26261d` | `#1d1d15` |
| `--ink` | `#f6f2e4` | `#fbf8ec` |
| `--ink-soft` | `#c4c0a9` | `#cdc9b2` |
| `--accent` | `#ffd52e` | `#fff08a` |
| `--accent-ink` | `#14140d` | `#14140d` |

- Koyu modda değişen başka ne var: bant opaklığı 1’e sabitlenir, plaka çerçevesine 1px iç accent %40 eklenir; `--line` .20 → .22. Ölçüm: `ink/bg` 18.52:1, `accent-ink/accent` 15.56:1.

## Zorunlu kurallar
- Üç kademeli çerçeve sabit: 2px accent (tehlike) · 2px `--ink` (talimat) · 1px `--line` (bilgi).
- Display daima büyük harf (Anton), `line-height` ≤ 1.0.
- Renk tek başına anlam taşımaz: her durum piktogram + metinle birlikte.
- Radius 0; çapraz tehlike bandı yalnız `--accent` + `--accent-ink`.
- Dokunma hedefi 48px; birincil eylem accent dolgu + accent-ink metin.
- Kritik uyarı ekranın üst 1/3'ünde; katlama altında kritik uyarı olamaz.

## Yasaklar
- Pastel veya düşük kontrast palet.
- İnce ağırlık, italik, serif.
- Yumuşak gölge, blur, cam.
- Saniyede 3 üstü yanıp sönme (fotosensitivite).
- Emoji veya marka illüstrasyonu.
- Küçük harf başlık; ortalanmış levha metni.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **10.25:1**; `ink-faint / bg` = **5.25:1** yalnız dekoratif ayırıcıda.
- `--ink-faint` uyarı metninde kullanılmaz; uyarı metni daima `--ink` (16.75:1).
- Hareket/parlama hassasiyeti: **yüksek risk** — yanıp sönen öğe saniyede 3'ü geçmez, sürekli animasyon ekran başına 1, `prefers-reduced-motion` hepsini kapatır (WCAG 2.3.1 / 2.2.2).
- Şeffaf yüzey yok; `@supports` fallback gerekmez. `border-image` desteklenmezse bant 8px düz accent şeride düşer.
- Odak görünürlüğü: 2px çerçeve üstünde 3px accent outline + 3px offset; 2px outline bu stilde yetersiz kalır.

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
| Ekran "bağırıyor", hiyerarşi yok | her kutuya accent çerçeve verilmiş | accent yalnız tehlike kademesinde; bilgi 1px `--line` |
| Sarı yoruyor | accent geniş zemin olarak kullanılmış | accent yalnız bant, çerçeve ve CTA dolgusunda |
| Uyarı gözden kaçıyor | renk tek başına kullanılmış | piktogram + metin ekle (renk körlüğü) |
| Başlık taşıyor | Anton + 72px, 18ch üstü | metni 2–3 satıra böl, `max-width: 18ch` |
| Tehlike bandı "dekor" gibi | her bölümde tekrar edilmiş | bant yalnız nav üstü ve modal üstünde |
| Mobilde buton küçük | 48px korunmamış | `min-height: 48px` sabit; padding kısaltılmaz |

## Komşu stiller

- **Uyumlu:** `constructivism` — diyagonal ve baskı dili; Constructivism yalnız hero'da garnitür.
- **Uyumlu:** `neo-brutalism` — kalın çerçeve ve düz renk aynı ailede okunur.
- **Uyumlu:** `kinetic-type` — dev tipografi tek bölümde kullanılabilir.
- **Yasak:** `japandi` — düşük kontrast ve sakinlik uyarı hiyerarşisini öldürür.
- **Yasak:** `ethereal` — sis/ışıma dili kesin uyarı kademesini bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.iso.org/standard/68835.html | ISO 3864 güvenlik işaretleri: renk + biçim |
| https://en.wikipedia.org/wiki/Hazard_symbol | çapraz bant ve uyarı renkleri |
| https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.145 | uyarı kategorileri ve metin hiyerarşisi |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | flash sınırı (saniyede 3 altı) |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Güvenlik Tabelası (styles/58-safety-signage/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="safety-signage"] değişkenleri; hard-coded renk/radius/gölge yasak.
Zemin: --bg asfalt; üst bant 8px çapraz (repeating-linear-gradient 45°, var(--accent) 0 20px, var(--accent-ink) 20px 40px).
Tipografi: --font-display Anton 72/40/24 (400, UPPERCASE, line-height ≤1.0, max 18ch);
  --font-body Rajdhani 17px/1.45 500; --font-mono Space Mono 11px etiket (.10em).
Yüzey: gölge YOK, radius 0. Kademe: 2px accent = tehlike, 2px ink = talimat, 1px line = bilgi.
Renk: accent #ffd52e tek tehlike rengi; durum daima piktogram + metinle. ink/bg 16.75:1, ink-soft/bg 10.25:1, accent-ink/accent 13.04:1.
Bileşen: buton/input 48px, 2px çerçeve; focus 3px accent outline offset 3px.
Hareket: enter 140ms linear 16px stagger .06; scroll top 93% 150ms 22px once; pin yok; hover 80ms görsel 1.012.
  Sinirde: saniyede 3 flash yok, sürekli animasyon ≤1, prefers-reduced-motion hepsini kapatır.
Yasak: pastel, italik, serif, gölge, blur, cam, küçük harf başlık, emoji.
Çıktı: bileşen kodu + tek paragraf not (hangi uyarı kademesini nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: çapraz bant, üç kademeli çerçeve, piktogram, sol 8px bant.
- [ ] Hard-coded renk/radius/gölge yok; radius 0.
- [ ] Kontrast: 16.75 / 10.25 / 13.04 — hepsi eşik üstü.
- [ ] Odak halkası 3px accent + 3px offset görünür.
- [ ] 390px'te bant 6px, başlık 40px, taşma yok.
- [ ] `prefers-reduced-motion` açıkken hiçbir flash/döngü kalmıyor.

## Token

```css
[data-style="safety-signage"] {
  --bg: #12120e; --bg-2: #1a1a14;
  --surface: #1f1f18; --surface-2: #26261d;
  --ink: #f6f2e4; --ink-soft: #c4c0a9; --ink-faint: #8b8874;
  --accent: #ffd52e; --accent-ink: #14140d;
  --line: rgba(246,242,228,.20);
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Anton", "Archivo Black", system-ui, sans-serif;
  --font-body: "Rajdhani", "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
  --danger: #ff6b57; --danger-ink: #12120e;
  --ok: #7ee08a; --warn: #ffd52e;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="safety-signage"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
