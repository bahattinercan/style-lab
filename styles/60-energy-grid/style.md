# 60 · Enerji Şebekesi

> **Bir cümlede:** Elektrik şebekesinin tek hat şemasını ekrana taşıyan SCADA arayüzü: koyu grafit zemin, nokta ızgarası, 1.5px şema hattı, düğüm noktaları ve tek volt yeşili akış rengi.

| | |
|---|---|
| **Hissiyat** | canlı, izlenen, kritik, şebekeli |
| **En iyi** | enerji/şebeke izleme, tesis telemetrisi, IoT filo paneli, altyapı durum haritası |
| **Kaçın** | e-ticaret vitrini, moda, uzun okuma — koyu şema dili okumayı yorar |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (koyu zemin + ince çizgi; en düşük metin çifti 9.39:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="energy-grid"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Enerji Şebekesi, arayüzü **şebeke şeması** gibi kurar: koyu grafit zemin üzerinde 8px nokta ızgarası, 1.5px şema hatları, 3px düğüm noktaları, tek volt yeşili (`--accent`) akış rengi. Her ölçüm birimlidir (kV, MW, Hz), her düğüm bir durum taşır. Sıcaklığı feda eder; karşılığında **bağlantı ve akış okunurluğu** kazanır.

Kurucu kararları üç tanedir. Birincisi **tek parlak renk**: accent yalnız akış/aktif durum içindir; ikinci bir neon yok. İkincisi **nokta ızgarası zemin**: şema hattının nereye oturduğunu gösterir, dekorasyon değil koordinat sistemi. Üçüncüsü **ölçüm etiketi zorunluluğu**: birimsiz sayı ekrana çıkmaz.

Bedeli: koyu zemin + ince çizgi kombinasyonu düşük parlaklıkta kaybolur. Bu yüzden çizgi kalınlığı 1.5px'in altına inmez ve `--ink-faint` yalnız ızgara/eksende kalır.

### Ne değildir
- **Cybercore (23) değildir:** 23 terminal estetiği (mono her yerde, kutu çizim) ve pembe/mor neon kullanır; Şebeke'de şema düğümleri, birimli ölçüm ve tek renk vardır.
- **Blueprint Çizimi (56) değildir:** 56 cyanotype mavi ve 64px çizgi ağıyla pafta kurar; Şebeke grafit zemin + 8px nokta ızgarası + düğüm/halka kullanır, accent'i volt yeşilidir.
- **Scandinavian Dark (40) değildir:** 40 serif başlık ve sıcak nötr tonla sakinlik satar; Şebeke'de Archivo Black ve teknik mono vardır.
- **Aurora UI (39) değildir:** 39 gradyan/ışıma ile atmosfer kurar; Şebeke'de gradyan yok, parlaklık yalnız accent çizgisinde.

### Nereden gelir
SCADA ekranları ve tek hat (single-line) diyagramlarından; enerji kontrol odalarının "her hat bir çizgi, her hat bir durum" okuma biçiminden. Bugün geri dönüyor çünkü altyapı ürünleri (IoT, şarj ağı, mikroşebeke) topoloji anlatmak zorunda; klişeye dönmemesi için korunacak detay **tek parlak renk** ve **her ölçümün birimli olması**.

### 3 saniyede tanıma testi
1. Zemin grafit siyahı; üstünde 8px nokta ızgarası seçilebiliyor.
2. Ekranda tek parlak renk var: volt yeşili; ikinci neon yok.
3. Şema hatları 1.5px, düğümler 3px daire; kesişimlerde düğüm var.
4. Her sayının yanında birim (`kV`, `MW`, `Hz`, `%`).
5. Kartların sol üst köşesinde 5px yeşil düğüm noktası duruyor.

## Görsel imza
- **Nokta ızgarası:** `radial-gradient(ink %14 1px, transparent 1px)` / `background-size: 8px 8px` — tüm sayfada.
- **Şema hattı:** 1.5px `--line` veya accent; 90° kırılma, yuvarlatma yok (radius 2px'e kadar).
- **Düğüm noktası:** 3px dolu daire; durum düğümleri 5px ve `box-shadow: 0 0 0 3px accent %22`.
- **Tek parlak renk:** `--accent` volt yeşili; glow yalnız accent çizgisinde, başka renkte yasak.
- **Kart düğümü:** kart sol üst köşede -3px offset 5px accent daire (şebeke bağlantı noktası).
- **Ölçüm etiketi:** 10px mono, `.12em`, uppercase; değerin yanında birim zorunlu.
- **Hareket imzası:** 580ms `cubic-bezier(.45,0,.15,1)`, 12px, stagger 0.09 — akış "dolan" bir eğriyle gelir.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0c0f12` | sayfa zemini (grafit) | kart zemini |
| `--bg-2` | `#101519` | nav, input zemini | birincil CTA |
| `--surface` | `#131a1f` | kart / panel | sayfa zemini |
| `--surface-2` | `#182127` | ikincil yüzey, tablo başlığı | modal zemini |
| `--ink` | `#e4eef2` | başlık, gövde, ölçüm değeri | accent dolgu üstü |
| `--ink-soft` | `#a7b8c0` | açıklama, birim, eksen etiketi | başlık |
| `--ink-faint` | `#71858f` | yalnız nokta ızgarası ve dekoratif ayırıcı | metin, ölçüm etiketi |
| `--accent` | `#9be23c` | akış, aktif düğüm, birincil eylem | geniş dolgu alanı, gövde metni |
| `--accent-ink` | `#0e1503` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(228,238,242,.14)` | şema hattı, kenarlık | metin rengi |

- Ölçülen kontrast: `ink / bg` = **16.30:1** · `ink-soft / bg` = **9.39:1** · `accent-ink / accent` = **11.83:1** · `ink-faint / bg` = **4.99:1** (yalnız ızgara ve eksen).
- Tek vurgu kuralı (kesin): bir ekranda tek parlak renk. Durum ayrımı `--danger` (`#ff7a6b`) ve `--warn` (`#ffc247`) ile yapılır ama bunlar **parlamaz**, yalnız düğüm + metin rengidir.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--surface-2` üstünde `--ink-faint` ölçüm etiketi.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black (`--font-display`) | 52px (mobil 32px) | 400 | 1.02 | `-.01em` |
| H2 | Archivo Black | 32px | 400 | 1.10 | `.01em` |
| H3 | Archivo Black | 21px | 400 | 1.24 | `.01em` |
| Gövde | Space Grotesk (`--font-body`) | 16px | 400 | 1.60 | `0` |
| Küçük gövde | Space Grotesk | 13px | 400 | 1.5 | `0` |
| Etiket / ölçüm | Share Tech Mono (`--font-mono`) | 10–12px | 400 | 1.4 | `.12em` |

- Ölçek oranı: **1.6** — kullanılan basamaklar 10 · 12 · 13 · 16 · 21 · 32 · 52.
- Ölçü önerisi: `h1 { font-size: clamp(32px, 5vw, 52px); line-height: 1.02 }`.
- Gövde satır uzunluğu en fazla **66ch**; ölçüm tabloları 100ch'e kadar genişleyebilir (tabular hizalı).
- Ağırlık kuralı: Archivo Black tek ağırlık (400); Space Grotesk 400/500; mono 400. Serif ve italik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (şema bölgesi 7, açıklama 5) |
| Gutter | 20px |
| Container genişliği | 1280px (içerik 1240px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1280; 768 altında şema tek kolona iner, düğüm etiketleri kısalır |

- Asimetri kuralı: ekran başına **1** 7/5 bölünme (şema büyük, açıklama dar). 6/6 simetrik bölünme yok.
- Bölüm ritmi: art arda en fazla **3** kart; dördüncüsü tam genişlik "hat şeridi" olur.
- Tüm şema koordinatları 8px'e hizalı; hat kalınlığı 1.5px, düğüm 3px — ara değer yok.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa + nokta ızgarası |
| Kart | `--surface` | yok | panel, kart; 1px `--line` + köşe düğümü |
| Yüzen katman | `--surface` + accent çerçeve | `0 8px 24px rgba(3,6,8,.7)` | modal, menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; aktif/ölçüm kartında `1px solid var(--accent)`.
- Derinlik nereden gelir: **karanlık katmanları** (bg → surface arasında 4–6 puan parlaklık) + 1px hat. Parlama yalnız accent çizgisinde; renkli glow yasak.
- Radius: `--radius: 2px` (buton, input, chip), `--radius-lg: 6px` (kart, panel, modal). Üst sınır 6px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 42px | `0 18px` | 2px | 12px mono 400 uppercase `.12em` | accent dolgu, accent-ink metin, gölge yok | hover: accent %86 + ink · active: translateY(1px) · focus: 2px accent outline + 3px offset · disabled: opacity .4 + kesikli çerçeve · loading: 3 kademeli akış noktası (600ms) |
| Buton (ikincil) | 42px | `0 18px` | 2px | 12px mono | şeffaf + 1px accent %55 çerçeve, accent metin | hover: accent %16 zemin |
| Input | 42px | `0 12px` | 2px | 13px mono | `--bg-2` + 1px `--line` | focus: accent çerçeve + 2px outline · error: `--danger` çerçeve + 10px mono etiket · disabled: opacity .4 |
| Kart | içerik | 18px | 6px | H3 + gövde | `--surface` + 1px `--line` + sol üst köşe düğümü | hover: çerçeve accent %30 |
| Chip / badge | 22px | `0 8px` | 2px | 10px mono `.12em` | `--bg-2` + 1px `--line` | accent: accent %16 zemin + accent metin + accent %46 çerçeve |
| Nav | 56px | `0 24px` | 0 | 11px mono `.10em` | `--bg-2` + alt 1px accent %20 hat | aktif: accent metin + düğüm noktası |
| Tablo satırı | 34px | `6px 10px` | — | 12px mono, tabular-nums | satır arası 1px `--line` | hover: `--surface-2`; alarm satırı sol 2px `--danger` |
| Modal / sheet | içerik | 22px | 6px | 21px display + mono ölçüm etiketi | `--surface` + 1px accent + `0 8px 24px` | açılış: 12px dolan giriş |
| Toast | 38px | `8px 14px` | 2px | 12px mono | `--surface` + sol uçta 6px accent düğüm | hata: düğüm `--danger`, metin `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink`, `--warn`, `--danger` | en fazla 4 seri; akış çizgisi 1.5px, dolgu yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — koyu zeminde ve nokta ızgarası üstünde 3px offset şart.
- Dokunma hedefi: en az 44×44px; 42px buton mobilde `min-height: 44px`. Düğüm noktaları dekoratif, `aria-hidden`.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 24px ızgara, düğümler 3px dolu; köşe yuvarlatma yok |
| Fotoğraf | yok — şema ve telemetri fotoğrafın yerini alır |
| İllüstrasyon | tek hat şeması: düğüm, hat, kesici, trafo sembolleri (1.5px) |
| Doku | 8px nokta ızgarası; grain yok |
| Logo alanı | mono uppercase wordmark + accent düğüm noktası, 24px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: solda H1 + ölçüm etiketleri, sağda canlı şema | `shots/01-landing.png` |
| Dashboard | **yüksek** | şema bölgesi 7 kolon + sağda ölçüm tablosu 5 kolon | `shots/02-dashboard.png` |
| Form | düşük | 42px input, mono etiket sağda; birim seçici chip | — |
| Liste / tablo | orta | 34px satır, tabular sayı, alarm satırı sol 2px `--danger` | — |
| Boş durum | orta | boş şema: soluk nokta ızgarası + "sinyal yok" mono etiketi | — |
| Onboarding | yüksek | 3 adım: şebeke seç → düğüm ekle → eşik belirle | — |
| Pricing | orta | plan tablosu; öne çıkan plan 1px accent çerçeve | — |
| Giriş / ödeme | çok düşük | şema yok; yalnız odak halkası ve tek accent | — |
| Modal | orta | ölçüm detayı; üst şeritte mono birim etiketi | — |
| Bildirim / toast | orta | sağ alt, sol uçta 6px düğüm + mono metin | — |
| Hata | orta | düğüm `--danger`, hat 1.5px kesikli; ölçüm değeri korunur | — |
| Profil / ayar | orta | eşik ayarları: slider 1.5px hat + düğüm tutamaç | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **580ms** | `cubic-bezier(.45,0,.15,1)` | `opacity` + `translateY(12px)`; stagger **0.09s** |
| Scroll reveal | **660ms** | aynı eğri | trigger `top 81%`, `translateY(16px)`, `once: true` |
| Pin / scrub | **1.45** | `transform` | **açık** — şema panosu `+210%` mesafede pin + scrub (ekran başına 1) |
| Basma | **130ms** | aynı eğri | `translateY(1px)` + düğüm 3→2px |
| Geçiş / sayfa | 340ms | aynı eğri | opacity + 12px |
| Hover | **200ms** | aynı eğri | görsel ölçek **1.004** (şema kaymasın) |
| Ödül / vurgu | 660ms | aynı eğri | akış hattı soldan sağa %0→%100 (tek kez) |

- İmza ölçüleri: `enter = 0.58s / cubic-bezier(.45,0,.15,1) / 12px / 0.09` · `scroll = top 81% / 0.66s / 16px / once` · `pin = true / scrub 1.45 / +210%` · `hover = 200ms / 1.004`.
- Aynı banttaki komşulardan fark: 56'dan (0.36s / 6px / pin yok) dört, 57'den (0.26s / overshoot / scrub 0.62) dört, 58'den (0.14s / linear) dört, 59'dan (0.44s / 20px / scrub 0.95) dört parametrede ayrışır. Mevcut 59 stil içinde en yakını 63-maintenance-cmms (8 parametre farkı).
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin devre dışı, akış hattı statik (son kare).
- Bu stile yasak hareket: saniyede 3 üstü flash, ekran başına 1'den fazla sürekli döngü, kapatılamayan parallax, 4px üstü blur geçişi.

## Koyu mod

Koyu modda şebeke zemini daha derin (ΔL −7) ama kart bandı 7 puan genişler (L bandı 17 → 24) ve volt accent belirgin biçimde parlar; koyu mod artık 01-landing’den tek bakışta ayrılır.

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#0c0f12` | `#04080d` |
| `--surface` | `#131a1f` | `#0b1620` |
| `--ink` | `#e4eef2` | `#edf5f7` |
| `--accent` | `#9be23c` | `#d2ff85` |
| `--ink-soft` | `#a7b8c0` | `#b0c1c8` |
| `--line` | `rgba(228,238,242,.14)` | `rgba(237,245,247,.16)` |

- Koyu modda değişen başka ne var: akış hattı opaklığı %60 → %78, düğüm halkası 3px → 4px, nokta ızgarası %14 → %12 (siyahta gürültü yapmasın). Ölçüm: `ink/bg` 17.87:1, `accent-ink/accent` 16.82:1.

## Zorunlu kurallar
- Zemin 8px nokta ızgarası; şema çizgileri 1.5px, düğümler 3px dolu.
- Tek parlak renk: `--accent`. İkinci neon/parlama rengi yok.
- Tüm ölçümler birimli mono etiketle: `kV`, `MW`, `Hz`, `%`.
- Durum: akış var = accent, kesinti = `--danger`, rezerv = `--warn`; metin + düğüm biçimiyle.
- Radius 2px kontrol / 6px kart; gölge yalnız yüzen katmanda.
- Şema sola (7 kolon), açıklama sağa (5 kolon).

## Yasaklar
- Saf siyah `#000` zemin.
- Çoklu neon parlama, renkli glow, gradyan zemin.
- 12px üstü radius, hap buton.
- Serif display.
- Saniyede 3 üstü flash, ekran başına 1'den fazla sürekli döngü.
- Renk tek başına durum göstergesi.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **9.39:1**; `ink-faint / bg` = **4.99:1** ama yalnız nokta ızgarası ve eksen etiketinde (eşik 3:1).
- `--ink-faint` ölçüm etiketinde kullanılmaz; ölçüm etiketi daima `--ink-soft`.
- Hareket/parlama hassasiyeti: **orta-yüksek** — parlak accent koyu zeminde flash etkisi yaratabilir; flash saniyede 3'ü geçmez, sürekli döngü ekran başına 1, `prefers-reduced-motion` hepsini kapatır.
- Şeffaf yüzey yok; opak fallback gerekmez. `radial-gradient` desteklenmezse nokta ızgarası düz `--bg`'ye düşer (şema okunur kalır).
- Odak görünürlüğü: koyu zeminde 2px accent outline **offset 3px**; nokta ızgarası offset'i yutmasın diye 3px.

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
| Şema görünmüyor | çizgi 1px veya `--ink-faint` | 1.5px ve `--line`/accent kullan |
| Ekran "oyun arayüzü" gibi | ikinci neon eklenmiş | tek parlak renk; diğer durumlar parlamaz |
| Ölçüm okunmuyor | birim eksik veya 10px altı | 10px mono + birim zorunlu |
| Nokta ızgarası gürültü | 8px altı veya %20 üstü opaklık | 8px, %14 sabit |
| Düğümler kayboluyor | 3px altına inilmiş | 3px düğüm, durum düğümü 5px |
| Pin kaydırırken şema titriyor | iki ayrı rAF döngüsü | tek ScrollTrigger + Lenis'i GSAP ticker'a bağla |

## Komşu stiller

- **Uyumlu:** `cybercore` — terminal alt paneli olarak; ikisi de koyu zemin ve mono etiket paylaşır.
- **Uyumlu:** `terminal-ui` — log/olay akışı bölümünde garnitür.
- **Uyumlu:** `scandinavian-dark` — açıklama/okuma bölümünde sakin koyu yüzey.
- **Yasak:** `claymorphism` — yumuşak pastel yüzey şema kesinliğini bozar.
- **Yasak:** `japandi` — sıcak nötr ve düşük kontrast koyu şebeke diline aykırı.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Single-line_diagram | şema sembolleri ve hat dili |
| https://en.wikipedia.org/wiki/SCADA | telemetri ekranı yoğunluğu |
| https://en.wikipedia.org/wiki/Electrical_grid | akış/kesinti terminolojisi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | çizgi ve düğüm kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Enerji Şebekesi (styles/60-energy-grid/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="energy-grid"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg grafit + 8px nokta ızgarası (radial-gradient color-mix var(--ink) %14, size 8px 8px).
Tipografi: --font-display Archivo Black 52/32/21 (400, -.01em); --font-body Space Grotesk 16px/1.60;
  --font-mono Share Tech Mono 10–12px ölçüm etiketi (.12em, uppercase, birim zorunlu).
Yüzey: --bg / --surface (1px var(--line) + sol üst köşe düğümü) / --surface + 0 8px 24px (yüzen).
  Radius 2px kontrol, 6px kart.
Renk: tek parlak accent volt yeşili #9be23c; --danger/--warn parlamaz. ink/bg 16.30:1, ink-soft/bg 9.39:1, accent-ink/accent 11.83:1.
Şema: hat 1.5px, düğüm 3px dolu, kesişimde düğüm zorunlu; 7/5 bölünme (şema sol).
Hareket: enter 580ms cubic-bezier(.45,0,.15,1) 12px stagger .09; scroll top 81% 660ms 16px once;
  pin scrub 1.45 (+210%, ekran başına 1); hover 200ms görsel 1.004. prefers-reduced-motion zorunlu.
Yasak: saf siyah, çoklu neon, gradyan, 12px üstü radius, serif, renk-only durum, saniyede 3 flash.
Çıktı: bileşen kodu + tek paragraf not (şema düğümünü ve ölçüm etiketini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: 8px nokta ızgarası, 1.5px şema hattı, düğüm noktası, ölçüm etiketi.
- [ ] Hard-coded renk/radius/gölge yok.
- [ ] Kontrast: 16.30 / 9.39 / 11.83 — hepsi eşik üstü.
- [ ] Odak halkası 2px accent + 3px offset, ızgara üstünde görünür.
- [ ] 390px'te şema dikey akışa iniyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken pin, akış ve sayaç duruyor.

## Token

```css
[data-style="energy-grid"] {
  --bg: #0c0f12; --bg-2: #101519;
  --surface: #131a1f; --surface-2: #182127;
  --ink: #e4eef2; --ink-soft: #a7b8c0; --ink-faint: #71858f;
  --accent: #9be23c; --accent-ink: #0e1503;
  --line: rgba(228,238,242,.14);
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 8px 24px rgba(3,6,8,.55); --shadow-hard: none;
  --font-display: "Archivo Black", "Space Grotesk", system-ui, sans-serif;
  --font-body: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .03em; --blur: 0px; --grain: 0;
  --danger: #ff7a6b; --danger-ink: #0c0f12;
  --ok: #9be23c; --warn: #ffc247;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="energy-grid"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
