# 100 · Fluid Simulation

> **Bir cümlede:** Köşeleri damla gibi asimetrik yuvarlatılmış yüzeylerin viskoz bir eğriyle aktığı, dekoratif katmanın 6px bulanık bloblarla kurulduğu yumuşak arayüz.

| | |
|---|---|
| **Hissiyat** | akışkan, sakin, yumuşak, "sıvı" |
| **En iyi** | wellness/sağlık takibi, fintech birikim uygulaması, ses/müzik ürünü, onboarding akışı |
| **Kaçın** | yoğun veri tablosu (20+ satır), hukuki/resmi belge ekranı, kesinlik gerektiren ayar paneli |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (uzun yumuşak geçişler + blur katmanı; gövde 15.93:1) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `kit/tokens.css` → `[data-style="fluid-simulation"]` |
| **Kompozisyon** | `sticky` · `pill` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Fluid Simulation, formu **yüzey gerilimi** ile kurar: kartlar asimetrik köşeli (`28px 28px 28px 12px` — damla yönü), buton ve çipler 999px pill, dekoratif katmanda 6px blur'lu **blob**'lar ve 12px **dalga ayırıcı**. Kurucu kararları üç tanedir. Birincisi **asimetrik yuvarlaklık**: köşeler eşit değildir, bir köşe diğerlerinden küçüktür — akışkanlık buradan okunur. İkincisi **viskoz hareket**: en kısa 260ms, en uzun 1500ms; `steps()` ve bounce yok. Üçüncüsü **tek dekor katmanı**: blob yalnız dekoratif, %18 opaklık, metin asla üstünde değil.

Kazandığı şey: **dokunma hissi** — arayüz "akan" bir nesne gibi okunur, onboarding ve finans birikimi gibi akış metaforlu ürünlere oturur. Feda ettiği şey: **kesinlik**; 28px radius ve uzun geçişler yoğun tablo ekranlarında yer ve zaman kaybettirir.

### Ne değildir
- **Organic Bio (38) değildir:** 38 doğal form + toprak yeşili ile **bitkisel** çağrışım kurar, radius asimetrisi organik damlada değil yaprak formundadır; burada accent **sıcak kiremit-turuncu** ve imza `28/28/28/12` damla köşesidir.
- **Claymorphism (11) değildir:** 11 şişkin 3B kil yüzey ve iç/dış gölge ikilisiyle hacim kurar; burada gölge tek ve 10px yayılımı geçmez, hacim formdan gelir.
- **Aurora UI (12) değildir:** 12 hareketli degrade zeminlerle atmosfer kurar; burada degrade yok, blob katmanı tek ve %18.
- **Depth Parallax (99) değildir:** 99 katman hızı ve pus ile derinlik kurar; 100'de katman yok — form ve süre var.
- **"Yuvarlak köşeli jenerik SaaS" değilir:** kimlik **asimetrik köşe + 999px pill + viskoz süre üçlüsü**dür; tek başına radius yetmez.

### Nereden gelir
Akışkan arayüz fikri 2010'ların "soft UI" akımından ve sıvı metal/cam deneylerinden gelir; asıl dayanağı **yüzey gerilimi** metaforudur: sıvı damlası bir yönde daha keskin, diğer yönde daha yuvarlaktır. CSS'te asimetrik `border-radius` sözdizimi (`28px 28px 28px 12px`) bunu tek satırda kurar. Klişeye dönüşmemesi için korunacak detay: **köşe asimetrisinin ölçülü kalması** (en çok 28px/12px) ve blob sayısının 2'yi geçmemesi.

### 3 saniyede tanıma testi
1. Kartların bir köşesi diğerlerinden belirgin küçük (damla yönü).
2. Butonlar ve çipler tam pill (999px); hiçbir keskin köşe yok.
3. Arka planda bulanık, yavaşça şekil değiştiren tek bir renk lekesi var.
4. Geçişler uzun ve yumuşak; hiçbir şey "tık" diye oturmuyor.
5. Gövde Poppins, başlık Baloo 2, etiketler Courier Prime; accent tek sıcak turuncu.

## Görsel imza
1. **Asimetrik damla köşesi:** `border-radius: 28px 28px 28px 12px`; durum kartlarında `28px 12px 28px 28px` (ters yön).
2. **Pill etkileşim:** buton, çip ve toast `999px`; hover'da buton `26px`'e "gerilir" (520ms).
3. **Blob katmanı:** `filter: blur(6px)`, `%18` accent, asimetrik `border-radius`, ekran başına en fazla 2; 24s/32s yavaş salınım.
4. **Dalga ayırıcı:** 12px yükseklik, `radial-gradient` ile 7px yarım daire dizisi.
5. **Yüzey gerilimi halkası:** hero görselinin içinde 2px `%35` accent asimetrik yay.
6. **Baloo 2 display:** 44px, tracking 0; gövde Poppins 16px/1.68; sayı Courier Prime.
7. **Hover dili:** 520ms'de ölçek `1.028`, buton radius daralır, tablo satırı `12px → 18px`; renk sıçraması yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#eff4f3` | sayfa zemini (sıvı yüzey) | kart zemini |
| `--surface` | `#fbfdfc` | kart, panel, modal | sayfa zemini |
| `--surface-2` | `#f0f6f4` | çip, satır hover, ikincil buton | birincil eylem |
| `--ink` | `#101a1c` | başlık, gövde, sayı | dekoratif leke |
| `--ink-soft` | `#435452` | etiket, açıklama, eksen | başlık |
| `--ink-faint` | `#7d8b89` | dekoratif: dipnot, blob içi etiket | etkileşimli metin |
| `--accent` | `#b8481a` | birincil buton, blob, odak halkası | geniş metin bloğu |
| `--accent-ink` | `#fdf6f2` | accent üstü metin | gövde metni |
| `--line` | `rgba(16,26,28,.13)` | kart kenarı, ayırıcı, input çerçevesi | metin rengi |
| `--danger` / `--ok` / `--warn` | `#a02b1c` / `#29a680` / `#c68613` | hata / onay / uyarı | blob, dekorasyon |

- Ölçülen kontrast (açık): `ink / bg` = **15.93:1** · `ink-soft / bg` = **7.19:1** · `accent-ink / accent` = **4.94:1** · `ink-faint / bg` = **3.19:1** (yalnız dekoratif).
- Tek vurgu kuralı: kiremit-turuncu yalnız eylem, blob ve odak; blob `%18` opaklığı geçmez.
- Yasak kombinasyon: accent zemin üstüne kırık beyaz ince metin (12px altı punto); ikinci doygun renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 (`--font-display`) | 44px (mobil 29px) | 600 | 1.14 | `--tracking` 0 |
| H2 | Baloo 2 | 28px | 600 | 1.3 | 0 |
| H3 | Baloo 2 | 21px | 600 | 1.34 | 0 |
| Gövde | Poppins (`--font-body`) | 16px | 400 | 1.68 | 0 |
| Küçük / açıklama | Poppins | 14px | 400 | 1.6 | 0 |
| Etiket / mono | Courier Prime (`--font-mono`) | 11px | 400 | 1.4 | 0.1em (büyük harf) |

- Ölçek oranı **1.5** (11 → 16 → 28 → 44); kullanılan basamak sayısı 5: 11/14/16/28/44.
- Ölçü: `h1 { font-size: clamp(29px, 3.8vw, 44px) }`.
- Gövde metni maksimum satır uzunluğu: **64 ch**.
- Ağırlık kuralı: Baloo 2 600, Poppins 400/500. İtalik yasak; 800 ağırlık kullanılmaz (yumuşaklık kaybolur).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1220px üstü), 8 (768–1219), 4 (390–767) |
| Gutter | 26px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1220px: 7/5 akış bölünmesi + 1 dalga; 768px: 6/6; 390px: tek kolon, blob %12 opaklık |

- Asimetri kuralı: ekran başına **1** dalga ayırıcı; içerik 7/5 bölünür.
- Bölüm ritmi: 80px (mobil 48px); art arda en fazla **2** damla köşeli kart satırı.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, blob katmanı |
| Kart | `--surface` | `0 2px 10px rgba(16,26,28,.08)` | kart, panel, satır |
| Yüzen katman | `--surface` | `0 8px 32px rgba(16,26,28,.14)` | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; pill öğelerde kenarlık yok (yalnız zemin farkı).
- Derinlik nereden gelir: **form (asimetrik radius) + düşük gölge**; gölge 10px yayılımı geçmez.
- Radius: `--radius` 18px (input, alanlar), `--radius-lg` 28px (kart, modal); pill 999px istisnadır.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 28px | 999px | 15px/600 Baloo 2 | accent + accent-ink + `--shadow` | hover radius 26px + %92 (520ms) · active scale(.98) 260ms · focus 2px halka offset 4px · disabled %45 · loading 3 damla 1400ms |
| Buton (ikincil) | 48px | 0 28px | 999px | 15px Poppins | surface + `--line` | hover iç yüzey `--surface-2` (520ms) |
| Input | 48px | 0 18px | `--radius` | 15px Poppins | surface + `--line` | focus 2px halka + sol iç 3px accent · error `--danger` · disabled %45 |
| Kart | — | 26px | 28px 28px 28px 12px | başlık 28px Baloo 2 | surface + `--shadow` | normal · ters damla (durum) · seçili (1px accent) |
| Chip | 26px | 0 12px | 999px | 12px Courier Prime | surface-2 + `--line` | seçili: accent zemin + accent-ink |
| Nav | 72px | 0 26px | 0 | 14px Poppins | bg + alt çizgi + 12px dalga | aktif: 999px pill zemin |
| Tablo satırı | 48px | 0 16px | 12px (hover 18px) | 15px Poppins / mono sayı | satır `--surface-2`, aralar 4px | hover radius 18px · seçili 1px accent |
| Modal | — | 30px | 28px 28px 18px 18px | başlık 28px Baloo 2 | surface + `0 8px 32px` + arka blob | açılış 1400ms · Esc kapatır |
| Toast | 46px | 0 18px | 999px | 14px Poppins | surface + sol 6px damla | giriş 520ms · 5200ms · 2 üst sınır |
| Grafik paleti | — | — | — | eksen 11px mono | accent → ink-soft → warn | en çok 3 seri · 2.5px yuvarlatılmış eğri, %12 dolgu |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 4px` — pill ve damla köşede halka görünür kalsın.
- Dokunma hedefi: 48px buton/input ve 48px satır ≥ 44px; 26px çipler 44×44px sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 18px, 1.6px çizgi, yuvarlak uç; damla/akış metaforu |
| Fotoğraf | yok; zorunluysa 28px radius + %85 doygunluk |
| İllüstrasyon | CSS blob, dalga ayırıcı, yüzey gerilimi halkası; figüratif görsel yok |
| Doku | blob katmanı (blur 6px, %18) + dalga dizisi; grain 0 |
| Logo alanı | Baloo 2 18px + 14px damla işareti; 20px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | blob + 7/5 akış bölünmesi + damla köşeli hero kartı | `shots/01-landing.png` |
| Dashboard | düşük | 3 damla köşeli KPI + 3 serili yumuşak grafik | `shots/02-dashboard.png` |
| Form | düşük | 48px alanlar, pill buton, tek kolon | — |
| Liste / tablo | orta | 48px yumuşak satırlar, hover'da radius 18px | — |
| Boş durum | orta | boş damla + tek pill CTA | — |
| Onboarding | yüksek | 3 adım: damla metaforu (birikim → akış → hedef) | — |
| Pricing | orta | 3 pill kart, orta kart daha büyük radius | — |
| Giriş / ödeme | çok düşük | tek kolon, blob yok (odak) | — |
| Modal | orta | 28/28/18/18 köşe + arka blob | — |
| Bildirim / toast | orta | pill kutu, 6px damla, 520ms giriş | — |
| Hata | düşük | `--danger` sol damla şeridi, blob susturulur | — |
| Profil / ayar | orta | 48px satır + "hareketi azalt" anahtarı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — viskozite ölçer — damla kesiti, pill satırlar, akış/sıcaklık altbilgisi.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 1050ms | `cubic-bezier(.22,.9,.24,1)` | `opacity` + `translateY(20px)`, öğe başına 160ms stagger |
| Scroll reveal | 1150ms | `cubic-bezier(.22,.9,.24,1)` | `top 72%` tetiği, 34px, `once: true` |
| Basma | 260ms | `linear` | `scale(.98)` |
| Hover | 520ms | `cubic-bezier(.22,.9,.24,1)` | radius daralması, görsel ölçek `1.028` |
| Pin / scrub | kapalı | — | — (akışkan yüzey sabitlenmez) |
| Blob salınımı | 24s / 32s | `ease-in-out` | yalnız dekoratif katman, 2 blob, `alternate` |
| Form geçişi | 520ms | `cubic-bezier(.22,.9,.24,1)` | tablo satırı radius `12px → 18px` |

- Ölçülebilir imza: `enter 1.05s / cb(.22,.9,.24,1) / 20px / 0.16` · `scroll top 72% / 1.15s / 34px / once:true` · `hover 520ms / 1.028` · `pin kapalı`.
- `prefers-reduced-motion`: tüm süreler 0.01ms, blob salınımı durur, form geçişi kapanır; statik form korunur.
- Bu stile yasak hareket: bounce/sıçrama, `steps()`, sürekli döngüde 2'den fazla blob, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#eff4f3` | `#0b1417` |
| `--bg-2` | `#e3ecea` | `#101c1f` |
| `--surface` | `#fbfdfc` | `#132327` |
| `--surface-2` | `#f0f6f4` | `#1a2f33` |
| `--ink` | `#101a1c` | `#e9f1f1` |
| `--ink-soft` | `#435452` | `#a6b6b5` |
| `--accent` | `#b8481a` | `#ff8a5c` |
| `--accent-ink` | `#fdf6f2` | `#1d0a04` |

- Ölçülen kontrast (koyu): `ink / bg` = **16.26:1** · `ink-soft / bg` = **8.86:1** · `accent-ink / accent` = **8.24:1** · `ink-faint / bg` = **4.82:1**.
- Koyu modda değişen başka ne var: blob opaklığı %18 → %14 (koyuda leke daha baskın görünür); gölge 10px → 12px; accent açık mercana döner.
- `filter: invert()` yasak; palet elle yazılır.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **7.11:1** açık / **6.09:1** koyu · `--warn / bg` = **6.44:1** / **6.05:1** · `--ok / surface` = 5.29:1 / 5.26:1 (warn) · devre dışı buton metni = **7.26:1** / **7.60:1** · ghost buton kenarı = **3.84:1** / **5.56:1** (eşik 3:1).

## Zorunlu kurallar
- Kart köşeleri asimetrik (`28/28/28/12`); buton ve çipler 999px pill.
- Hiçbir etkileşimli öğe 4px altı radius kullanmaz.
- Blob yalnız dekoratif katmanda: 6px blur, %18 opaklık, metin üstünde yasak, en fazla 2 blob.
- Dalga ayırıcı ekran başına 1, 12px yükseklik.
- Hareket viskoz: en kısa 260ms, en uzun 1500ms; `steps()` ve bounce yasak.
- Grafik eğrileri yumuşatılmış, çizgi ucu yuvarlak.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Keskin köşe (4px altı), 90° form, kalın kontur.
- Bounce/sıçrama, `steps()` hareket, hızlı (200ms altı) geçiş.
- Metni blob/blur katmanının üstüne koymak.
- Üçten fazla doygun renk; gradient metin.
- İkiden fazla hareketli blob; sürekli şekil değiştiren liste öğeleri.
- Uydurma finansal tutar/hedef; eksik içerik `{{amount}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.19:1** (dekoratif dipnot); etkileşimli metin `--ink` 15.93:1, `--ink-soft` 7.19:1; `accent-ink / accent` 4.94:1 (accent üstünde 15px altı metin kullanılmaz).
- Hareket: uzun yumuşak geçişler `prefers-reduced-motion` ile kapanır; ayrıca ayarlarda "hareketi azalt" anahtarı bulunur.
- Blob dekoratiftir; bilgi taşımaz; `aria-hidden` ile işaretlenir.
- Şeffaf yüzey yok: blob `filter: blur()` ile bulanıklaştırılmış opak renktir — `@supports` fallback gerekmez.
- Odak görünürlüğü: açık zeminde 2px kiremit halka 4.94:1; pill butonda `offset: 4px`.

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
| Ekran "yuvarlak SaaS şablonu" gibi duruyor | tüm köşeler eşit | bir köşeyi 12px'e düşür, diğerleri 28px |
| Bulanık/kirli görünüyor | blob sayısı 3+ veya opaklık %25 üstü | 2 blob, %18 opaklık, 6px blur |
| Hareket "gecikmiş" hissettiriyor | süreler 1500ms üstüne çıkmış | taban 520ms, giriş 1400ms'de kal |
| Tablo okunmuyor | satır radius 18px'de sabitlenmiş | varsayılan 12px, hover'da 18px |
| Kontrast zayıf | accent üstünde küçük metin | accent üstü metni 15px+ yap veya `--ink` kullan |
| Pill buton tıklanmıyor gibi | dokunma hedefi 40px altı | 48px'e çıkar, dikey padding ekle |

## Komşu stiller

- **Uyumlu:** `organic-bio` — doğal form dili ortak; bitkisel içerik 38'den, akışkan yüzey 100'den.
- **Uyumlu:** `claymorphism` — yumuşak hacim; ancak 100'de gölge tek ve düşük kalır.
- **Uyumlu:** `aurora-ui` — atmosferik zemin; degrade 12'de kalır, 100 blob kullanır.
- **Yasak:** `swiss-design` — 02'nin keskin ızgara ve 0 radius disiplini damla formunu dışlar.
- **Yasak:** `constructivism` — kalın kontur ve sert blok köşe akışkanlığı bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius | asimetrik köşe (blob) sözdizimi ve sınırları |
| https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function | viskoz eğri seçimi ve karşılaştırma |
| https://www.nngroup.com/articles/animation-duration/ | uzun yumuşak geçişlerin ne zaman kabul edilebilir olduğu |
| https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | hareketin kapatılabilir olması |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Fluid Simulation (styles/100-fluid-simulation/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="fluid-simulation"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Baloo 2 600) başlıkta, --font-body (Poppins) gövdede,
           --font-mono (Courier Prime) etiket ve sayılarda.
Yüzey: --bg / --surface / --surface-2; kart 28/28/28/12 (asimetrik damla), input 18px, buton-çip 999px pill;
        gölge 10px yayılımı geçmez. Blob yalnız dekoratif (blur 6px, %18, en fazla 2).
Hareket: viskoz — enter 1.4s cubic-bezier(.22,.9,.24,1) 20px / stagger 0.16;
         scroll top 72% 1.5s 34px once:true; hover 520ms scale 1.028; pin yok; bounce ve steps yasak.
Yasak: keskin köşe, metin üstünde blob, 3'ten fazla doygun renk, gradient metin, ikiden fazla hareketli blob.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (asimetrik damla köşe, pill, blob, dalga ayırıcı).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1, accent üstünde küçük metin yok.
- [ ] Blob ≤ 2 ve metin üstünde değil.
- [ ] 390px genişlikte taşma yok.
- [ ] `prefers-reduced-motion` açıkken blob salınımı duruyor.

## Token

```css
[data-style="fluid-simulation"] {
  --bg: #eff4f3; --bg-2: #e3ecea;
  --surface: #fbfdfc; --surface-2: #f0f6f4;
  --ink: #101a1c; --ink-soft: #435452; --ink-faint: #7d8b89;
  --accent: #b8481a; --accent-ink: #fdf6f2;
  --line: rgba(16,26,28,.13);
  --radius: 18px; --radius-lg: 28px;
  --shadow: 0 2px 10px rgba(16,26,28,.08); --shadow-hard: none;
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 6px; --grain: 0;
  --danger: #a02b1c; --danger-ink: #ffffff; --ok: #29a680; --warn: #c68613;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="fluid-simulation"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
