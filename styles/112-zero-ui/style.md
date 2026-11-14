# 112 · Sıfır Arayüz

> **Bir cümlede:** Görünür kontrolü neredeyse sıfıra indiren, tek niyet satırı ve 1px hairline katmanlarla çalışan monokrom arayüz stili.

| | |
|---|---|
| **Hissiyat** | sessiz, sakin, güvenen, geri planda |
| **En iyi** | bağlam içi öneri, ajanda/notür ürünü, tek görevli asistan, okuma arayüzü |
| **Kaçın** | yoğun yönetim paneli, çok eylemli editör, e-ticaret vitrini — görünmez arayüz burada keşfedilebilirliği düşürür |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (en düşük metin çifti 7.00:1, `ink-faint` 3.27:1 yalnız dekoratif) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="zero-ui"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Sıfır Arayüz, ekranı **niyet cümlesine** indirger: sayfada bir soru satırı, bir öneri ve bir geri bağlantısı. Kontroller kaybolmaz, **gizlenir**: katman yalnız odak veya niyet geldiğinde 1px hairline olarak belirir. Buton yoktur — eylem, altı çizili metindir; kart yoktur — bölüm, hairline çerçevedir; gölge yoktur.

Kurucu kararları üç tanedir. Birincisi **monokrom**: `--accent` = `--ink`, yani vurgu rengi diye bir şey yok; durum bilgisi metinle verilir. İkincisi **hairline tekniği**: tüm ayrım `rgba(31,33,29,.12)` 1px çizgi ve zemin tonu farkından gelir. Üçüncüsü **niyet önceliği**: kullanıcı yazmaya/odaklanmaya başlamadan hiçbir katman açılmaz (WCAG 3.2.1 ile uyumlu).

Bedeli: keşfedilebilirlik. Bu yüzden sıfır arayüz, kullanıcının görevi bildiği ürünlerde (ajanda, okuma, tek görevli asistan) kullanılır; ilk kez gören kullanıcı için tek satır ipucu (`/` ile başla) zorunludur.

### Ne değildir
- **Ses-Öncelikli (106) değildir:** 106'nın merkezinde hareketli halka ve dalga vardır, koyu menekşe zeminlidir; 112'de hiçbir dekoratif öğe ve hiçbir accent rengi yoktur.
- **Komut Paleti (108) değildir:** 108 koyu, mono başlıklı bir katman paletidir (⌘K); 112'de katman yoktur, tek satır niyet girişi sayfanın kendisidir.
- **Japon Ma (67) değildir:** 67 boşluğu serif tipografi ve sıcak kırmızı accent ile kurar; 112 monokromdur, serif yalnız display'de ve renk yoktur.
- **Minimalizm (01) değildir:** 01'de mavi accent, gölgeli kartlar ve dolu butonlar vardır; 112'de accent = ink, gölge yok, dolu buton yok (radius 2px).

### Nereden gelir
Sakin teknoloji (calm technology) ve ortam bilişimi (ambient computing) araştırmalarından gelir: bilgi dikkat çekmeden, çevrede durur; kullanıcı istediğinde yaklaşır. Bugün geri dönüyor çünkü asistanlar arayüzü konuşma/niyet katmanına taşıdı. Klişeye dönmemesi için korunacak detay: **katmanın kendiliğinden açılmaması** ve monokromun tutarlı uygulanması (ikinci renk girerse stil bozulur).

### 3 saniyede tanıma testi
1. Ekranda dolu buton yok; eylemler altı çizili metin bağlantısı.
2. Hiçbir kartta gölge yok; bölümler yalnız 1px hairline ile ayrılıyor.
3. Vurgu rengi yok: en koyu renk `--ink`, accent da aynı ton.
4. Sayfa büyük ölçüde boş; görünür kontrol sayısı üçü geçmiyor.
5. Radius 2px: köşeler neredeyse keskin, hap biçim yalnız yok.

## Görsel imza
- **Hairline katman:** tüm kartlar `1px solid var(--line)` (`rgba(31,33,29,.12)`), gölge `none`.
- **Niyet satırı:** 44px yüksekliğinde, alt çizgili tek giriş satırı; placeholder `--ink-faint`, odakta alt çizgi 2px `--ink`.
- **Monokrom accent:** `--accent: #26302a` = `--ink`'e komşu koyu ton; dolgu yalnız seçili durumda.
- **Sessiz tipografi:** H1 44px Fraunces 400, gövde 16px/1.68 — ağırlık farkı yok, hiyerarşi boyutla.
- **Boşluk ritmi:** bölüm arası 80px masaüstü / 40px mobil; satır aralığı geniş (1.68).
- **Hareket imzası:** 1100ms `cubic-bezier(.33,0,.12,1)`, yalnız 3px ve opacity — hareket neredeyse yok.
- **Landing hero (QA):** niyet satırları: yalnız hairline alt çizgiler (dolgu yok), odakta kalın çizgi — hero'da renk bloğu yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4f3ee` | sayfa zemini (sıcak kağıt) | kart zemini |
| `--surface` | `#fdfcf8` | odaklanan katman, kart zemini | sayfa zemini |
| `--ink` | `#1f211d` | metin, accent (aynı ton) | dekoratif dolgu |
| `--accent` | `#26302a` | seçili durum, dolgu, odak | geniş zemin |
| `--line` | `rgba(31,33,29,.12)` | tüm kenarlıklar, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **14.61:1** · `ink-soft / bg` = **7.00:1** · `accent-ink / accent` = **12.50:1** · `ink-faint / bg` = **3.27:1** (yalnız dekoratif etiket).
- Tek vurgu kuralı: **sıfır vurgu** — accent, ink'in kendisidir. Renkli durum yok; `--danger` yalnız hata metni ve 1px alt çizgide.
- Yasak kombinasyon: herhangi bir ikinci accent tonu; `--accent` metnini `--surface-2` üstünde 13px altı kullanmak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces (`--font-display`) | 44px (mobil 28px) | 400 | 1.14 | `-.005em` |
| H2 | Fraunces | 30px | 400 | 1.30 | `0` |
| H3 | Fraunces | 21px | 400 | 1.30 | `0` |
| Gövde | Inter (`--font-body`) | 16px | 400 | 1.68 | `0` |
| Etiket / mono | IBM Plex Mono (`--font-mono`) | 11px | 400 | 1.40 | `.08em` |

- Ölçek oranı: **1.40** — kullanılan basamaklar 11 · 12 · 13 · 16 · 21 · 30 · 44.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 3.6vw, 44px); line-height: 1.14 }`.
- Gövde metni maksimum satır uzunluğu: **58ch** (okuma için ideal aralık).
- Ağırlık kuralı: yalnız 400 ve 500 (vurgu). 600+ ve bold display yasak — monokromda ağırlık gürültü yapar.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 32px |
| Container genişliği | 1080px (içerik 952px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1080; 768 altında gutter 24px, tek kolon, hairline'lar korunur |

- Asimetri kuralı: içerik hep 6 kolonda biter, sağda 3 kolon boş kalır; ekran başına **1** kez tam genişlik hairline.
- Bölüm ritmi: art arda en fazla **3** hairline blok; dördüncüde tam genişlik ayırıcı gerekir.
- Nefes kuralı: her bölümün üstünde en az 48px boşluk; iki hairline arası 64px'ten az olamaz.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, sessiz bant |
| Katman | `--surface` (hairline) | yok | kart, panel, tablo |
| Odak | `--surface` + `--ink` 1px | yok | yalnız odaklı öğe |

- Kenarlık formülü: `1px solid var(--line)`; odakta `1px solid var(--ink)` + 2px accent-dışı outline.
- Derinlik nereden gelir: **hiçbir yerden** — gölge yok, blur yok; derinlik yalnız ton ve hairline.
- Radius: `--radius: 2px` (input, chip), `--radius-lg: 6px` (kart); `--shadow: none`, `--shadow-hard: none`.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | `0 0 2px` | 0 | 16px Inter 500 | saydam + alt çizgi 1px `--ink` | hover: alt çizgi 2px · active: alt çizgi 2px + `--ink` · focus: 2px outline + 3px offset · disabled: `--ink-faint`, alt çizgi yok · loading: 3 nokta |
| Buton (ikincil) | 32px | `0 8px` | 2px | 14px Inter 400 | saydam + 1px `--line` | hover: `--surface` zemin |
| Input | 44px | `0 2px` | 0 | 16px Inter | saydam, yalnız alt 1px `--line` | focus: alt çizgi 2px `--ink` · error: alt çizgi `--danger` + 13px açıklama · disabled: `--ink-faint` |
| Kart | içerik | `20px` | 6px | 21px Fraunces + 16px gövde | saydam + 1px `--line`, gölge yok | odakta 1px `--ink` |
| Chip / badge | 22px | `0 6px` | 2px | 11px IBM Plex Mono | saydam + 1px `--line` | seçili: `--ink` dolgu + `--bg` metin |
| Nav | 52px | `0 24px` | 0 | 14px Inter 400 | saydam + alt hairline (yalnız kaydırınca) | aktif: `--ink` + alt çizgi 4px offset |
| Tablo satırı | 40px | `8px 0` | — | 15px Inter, tabular-nums | satır arası 1px `--line` | hover: hiçbir değişim (yalnız odak) |
| Modal / sheet | içerik | `24px` | 6px | 30px Fraunces + gövde | `--surface` + 1px `--line`, gölge yok | açılış: 1100ms yalnız opacity |
| Toast | 36px | `8px 0` | 0 | 13px Inter 400 | kutu yok; tek satır metin + geri alma | 5000ms, sol alt, `Esc` kapatır |
| Grafik paleti | — | — | — | — | `--ink`, `--ink-soft`, `--ink-faint` | en fazla 2 seri; grafik yerine tek satır sayı tercih edilir |

- Odak halkası: `outline: 2px solid var(--ink); outline-offset: 3px` — accent zaten ink olduğu için halka da ink.
- Dokunma hedefi: 44×44px; metin bağlantısı 40px görünse de satır kutusu padding ile 44px'e çıkarılır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, keskin köşe, 18px ızgara; ikon yalnız metnin solunda ve 16px |
| Fotoğraf | yok — arayüz görünmemeyi hedefler |
| İllüstrasyon | yok; tek görsel dil tipografi ve boşluk |
| Doku | grain yok; zemin düz kağıt |
| Logo alanı | Fraunces 400 küçük harf wordmark, işaret yok, 24px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | çok düşük | tek niyet satırı + tek öneri + tek bağlantı | `shots/01-page.png` |
| Dashboard | çok düşük | üç hairline blok: bugün, sırada, not | `shots/01-page.png` |
| Form | çok düşük | alt çizgili input, etiket mono 11px | `shots/01-page.png` |
| Liste / tablo | düşük | 40px satır, yalnız hairline ayırıcı | `shots/01-page.png` |
| Boş durum | düşük | tek cümle + `/` ipucu | `shots/01-page.png` |
| Onboarding | düşük | üç hairline blok, her biri tek cümle | `shots/01-page.png` |
| Pricing | düşük | iki kolon, dolu buton yerine alt çizili bağlantı | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | iki alt çizgili alan + tek eylem | `shots/01-page.png` |
| Modal | düşük | sayfa yerinde kalır, tek soru satırı öne çıkar | `shots/01-page.png` |
| Bildirim / toast | düşük | kutusuz tek satır, sol altta | `shots/01-page.png` |
| Hata | düşük | alt çizgi `--danger` + mono hata satırı | `shots/01-page.png` |
| Profil / ayar | düşük | hairline bölümler, mono etiket, kaydet düğmesi yok (otomatik) | `shots/01-page.png` |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Zorunlu kurallar
- Monokrom: `--accent` = `--ink` ailesi; ikinci bir vurgu tonu eklenmez.
- Görünür kontrol sayısı ekran başına en fazla 3; fazlası ikinci bir ekrana taşınır.
- Hiçbir katman kendiliğinden açılmaz; açılış daima odak veya açık niyet ile olur.
- Tüm bölüm ayrımı 1px hairline; gölge, kabartma, cam/blur yok.
- Klavye tam kapsam: `/` niyet satırına odaklanır, `Tab` sırası görünür, `Esc` kapatır.
- Durum bilgisi metinle yazılır (renk tek başına anlam taşımaz).

## Yasaklar
- Dolu buton, rozet yığını, ikon şeridi, gölgeli kart.
- İkinci accent rengi, gradyan, neon, renkli grafik paleti.
- İzin olmadan açılan popover/modal; otomatik oynayan medya.
- 1px üstü kalın çerçeve, 6px üstü radius (hap biçim).
- Aynı ekranda 3'ten fazla eylem.
- Kalın display ağırlığı (600+) ve bold başlık.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **7.00:1** (eşik 4.5); `ink / bg` = **14.61:1**; `accent-ink / accent` = **12.50:1**.
- `--ink-faint` (3.27:1) yalnız dekoratif mono etikette ve placeholder'da; etkileşimli metinde kullanılmaz (placeholder için `--ink-soft` tercih edilir).
- Görünmez arayüz riski: her ekranda en az bir **kalıcı** ipucu (ör. `/ ile başla`) bulunur; keşfedilebilirlik tek başına hafızaya bırakılmaz.
- `@supports` gerekmez: saydamlık ve blur yok, opak fallback zorunlu değil.
- Odak görünürlüğü: 2px `--ink` outline + 3px offset; kağıt zeminde ince çizgi kaybolduğu için offset 3px'in altına inmez.
- Hareket/parlama hassasiyeti: çok düşük — animasyon yalnız opacity; `prefers-reduced-motion` hepsini durdurur.

## Örnek görseller

Aynı içerik, tüm stillerde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-page.png` | Tek sayfa — 1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form/veri, CTA ve alt bilgi tek karede. |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| Ekran "boş ve anlaşılmaz" | hiç kalıcı ipucu yok | tek satır `/ ile başla` ipucu ekle |
| Stil minimalizm'e kayıyor | accent rengi geri gelmiş | accent'i `--ink` ailesine sabitle |
| Katmanlar gölge taşıyor | kart bileşeni varsayılanı | `box-shadow: none` + 1px hairline |
| Okuma yoruyor | satır uzunluğu 80ch üzeri | `max-width: 58ch` |
| Buton görünmüyor | alt çizgi `--line` (çok soluk) | eylem alt çizgisi `--ink` 1px |
| Odak kayboluyor | outline kaldırılmış | 2px ink outline + 3px offset |

## Komşu stiller

- **Uyumlu:** `japandi` — sessiz boşluk dili; 112 monokrom katman olarak üstte durur.
- **Uyumlu:** `minimalism` — 112'nin gölgesiz/renksiz sürümü; accent'i 01'den devralma.
- **Uyumlu:** `academic-paper` — uzun okuma yüzeyi; hairline ve ölçü uyumlu.
- **Yasak:** `maximalism` — çoklu renk ve katman monokromu kırar.
- **Yasak:** `dopamine-ui` — parlak accent ve hap kontrol sıfır-arayüz tezini çürütür.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Calm_technology | dikkat çekmeden bilgi verme ilkeleri |
| https://en.wikipedia.org/wiki/Ambient_computing | gömülü/bağlam temelli arayüz tanımı |
| https://en.wikipedia.org/wiki/Natural_user_interface | niyet-öncelikli etkileşim modeli |
| https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html | odakla kendiliğinden değişim yasağı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Sıfır Arayüz (styles/112-zero-ui/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="zero-ui"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Fraunces 44/30/21 (400, -.005em); --font-body Inter 16px/1.68;
  --font-mono IBM Plex Mono 11px etiket (.08em).
Yüzey: --bg / --surface + 1px var(--line); gölge YOK (--shadow: none). Radius --radius 2px, --radius-lg 6px.
Renk: monokrom — accent = ink ailesi (#26302a); ink/bg 14.61:1, ink-soft/bg 7.00:1,
  accent-ink/accent 12.50:1, ink-faint/bg 3.27:1 (dekoratif).
İmza: tek niyet satırı (alt çizgili input), dolu buton yerine altı çizili eylem, hairline katmanlar,
  ekran başına en fazla 3 görünür kontrol.
Hareket: enter 1100ms cubic-bezier(.33,0,.12,1) 3px stagger .185; scroll top 64% 1150ms 2px once;
  pin yok; hover 560ms görsel 1.000. prefers-reduced-motion zorunlu.
Yasak: dolu buton, gölge, ikinci accent rengi, izinsiz açılan katman, 6px üstü radius.
Çıktı: bileşen kodu + tek paragraf not (niyet satırını ve hairline katmanı nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: niyet satırı, hairline katman, monokrom accent, altı çizili eylem.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 14.61 / 7.00 / 12.50 — hepsi eşik üstü.
- [ ] Görünür kontrol ≤3; kalıcı klavye ipucu var.
- [ ] Odak halkası 2px ink + 3px offset görünür.
- [ ] 390px'te taşma yok; `prefers-reduced-motion` hareketi durduruyor.

## Token

```css
[data-style="zero-ui"] {
  --bg: #f4f3ee; --bg-2: #ecebe5; --surface: #fdfcf8; --surface-2: #f2f1eb;
  --ink: #1f211d; --ink-soft: #4f544a; --ink-faint: #83887c;
  --accent: #26302a; --accent-ink: #f6f5ef; --line: rgba(31,33,29,.12);
  --radius: 2px; --radius-lg: 6px; --shadow: none; --shadow-hard: none;
  --font-display: "Fraunces", "Lora", Georgia, serif; --font-body: "Inter", system-ui, sans-serif; --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0; --blur: 0px; --grain: 0;
  --danger: #9c2a20; --danger-ink: #fdfcf8; --ok: #2c6046; --warn: #7a5a10;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="zero-ui"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
