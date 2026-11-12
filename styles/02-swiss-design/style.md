# 02 · Swiss Design

> **Bir cümlede:** Görünmez bir ızgaraya oturan, sola dayalı, tek yazı karakteriyle kurulmuş rasyonel düzen; süsleme yerine hizalama ve tipografik ölçek konuşur.

| | |
|---|---|
| **Hissiyat** | rasyonel, kurumsal, "eski para", mesafeli güven |
| **En iyi** | SaaS/docs, kurumsal site, veri raporu, müze/kültür kurumu |
| **Kaçın** | samimi/oyun ürünü, çocuk, sosyal medya, duygu satan kampanya |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Sade (01–07) · **Token** | `kit/tokens.css` → `[data-style="swiss-design"]` |
| **Kompozisyon** | `type` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
1950'ler İsviçre grafik tasarımı (International Typographic Style): **12 kolonlu ızgara**, **sola dayalı ragged-right** dizgi, **tek sans-serif aile**, **dev tipografik ölçek** ve **kırmızı vurgu**. Her öğe ızgaranın bir hattına oturur; hizalama kusursuz olduğunda düzen "kendini açıklar".

Kazandığı şey: otorite ve taranabilirlik. Feda ettiği şey: sıcaklık — her şey doğru ama hiçbir şey "sıcak" değil.

### Ne değildir
- **Minimalism değildir.** Minimalizm gölgeyi ve çizgiyi azaltır, boşlukla konuşur; Swiss ızgarayı ve **kalın kural çizgilerini** görünür kılar.
- **Editorial değildir.** Editorial serif + kolon ritmi + anlatı kullanır; Swiss sans-serif + hizalama kullanır.
- **"Helvetica + kırmızı" değildir.** Izgara görünmüyorsa (metinler kolon hattına oturmuyorsa) stil taklit olur.
- **Simetrik değildir.** Merkezleme yok; asimetrik gerginlik (7/5, 8/4) karakterin parçası.
- **Dekoratif değildir.** Çizgi, kutu ve renk yalnızca hiyerarşi taşıyorsa var.

### Nereden gelir
Josef Müller-Brockmann'ın grid sistemleri ve Neue Grafik dergisi; kurumsal kimliğin ilk "sistem" yaklaşımı. Dijitalde docs ve kurumsal ürün sitelerinde yaşıyor: çünkü okunabilirlik ve ölçeklenebilirlik sağlar.

### 3 saniyede tanıma testi
1. Tüm metinler aynı sol hatta mı başlıyor, sağ kenar serbest mi?
2. Köşe yarıçapı **0** mı, gölge **yok** mu?
3. Tek bir kırmızı vurgu (≤ %10 alan) var mı?
4. Display ile gövde arasındaki oran ≥ 3× mi?
5. Bölümler kartla değil, **kalın kural çizgisiyle** mi ayrılıyor?

## Zorunlu kurallar

1. **12 kolonlu ızgara.** Her blok kolon hattına oturur; gutter 24px, container 1200px.
2. **Sola dayalı, sağ kenar serbest.** Metin asla ortalı değil (tek istisna: sayfa numarası/alıntı imzası).
3. **Tek aile.** Display ve gövde aynı sans-serif; mono yalnızca etiket/numara için.
4. **Radius 0, gölge yok.** Ayrım 3px siyah kural çizgisiyle yapılır.
5. **Kırmızı yalnızca vurgu.** `--accent` ekran alanının ≤ %10'u; dekorasyon için kullanılmaz.
6. **Dev ölçek.** H1 ≥ 56px; display/gövde oranı en az 3:1.

## Yasaklar

- Köşe yarıçapı, yumuşak gölge, gradient, cam efekti.
- Ortalanmış başlık/paragraf; iki yana yaslı (justified) metin.
- İkinci bir vurgu rengi (mavi/yeşil "durum" renkleri hariç).
- İkondan başka illüstrasyon, fotoğraf kolajı, dekoratif şekil.
- Izgarayı gizleyen kart içinde kart kullanımı.
- 14px altı gövde metni (kurumsal okunabilirlik).

## Görsel imza
- **Kalın kural:** bölüm ayırıcı `3px solid var(--ink)`; nav ve logo şeridi de kalın çizgiyle kapanır.
- **Kırmızı blok:** başlığın solunda 6px dikey accent çubuk veya tek bir kırmızı buton.
- **Mono etiket:** `01 — BÖLÜM`, `0.14em` tracking, uppercase, 11px.
- **Dev tipografi:** 56–72px, `-0.03em`, satır aralığı 0.95–1.0.
- **Asimetri:** hero 7/5 veya 8/4; ikinci bölümde tam genişlik kural.
- **Sıfır yuvarlaklık:** buton/input/kart hepsi dikdörtgen.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#ffffff` | zemin | kart zemini (kart `--surface` + kural) |
| `--bg-2` | `#f1f1f1` | tablo başlığı, pasif blok | buton |
| `--surface` | `#ffffff` | panel | tam sayfa |
| `--surface-2` | `#fafafa` | hover | vurgu bloğu |
| `--ink` | `#0a0a0a` | metin + **tüm kurallar** | — |
| `--ink-soft` | `#4a4a4a` | açıklama | büyük başlık |
| `--ink-faint` | `#8c8c8c` | mono etiket | gövde metni |
| `--accent` | `#e4002b` | vurgu çubuğu, birincil buton, tek kelime | geniş zemin |
| `--accent-ink` | `#ffffff` | accent üstü metin | — |
| `--line` | `#0a0a0a` | 1–3px kural | metin |

- Ölçülen kontrast: `ink/bg` **19.80:1** · `ink-soft/bg` **8.86:1** · `ink-faint/bg` **3.36:1** · `accent-ink/accent` **4.85:1**.
- Kırmızı, metin içinde **tek kelime** vurgusu olarak da kullanılabilir (ör. fiyat, uyarı).
- Yasak: iki farklı kırmızı; pastel tonlar; kırmızı zemin + siyah yazı (kontrast 4.5 altı).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Helvetica Neue | 64px (mobil 36px) | 700 | 0.95 | `-0.035em` |
| H2 | aynı | 34px | 700 | 1.0 | `-0.03em` |
| H3 | aynı | 20px | 700 | 1.2 | `-0.01em` |
| Gövde | aynı | 16px | 400 | 1.55 | `0` |
| Etiket | IBM Plex Mono | 11px | 500 | 1.2 | `0.14em`, uppercase |
| Buton | aynı (gövde) | 14px | 700 | 1 | `0.02em` |

- Ölçek **1.6×**: 16 → 26 → 42 → 64. Ara basamak yok.
- Ölçü: `h1 { font-size: clamp(2.25rem, 1.2rem + 4vw, 4rem) }`.
- Gövde max **72ch**; iki kolonlu metinde 46ch.
- `Arial` fallback kabul; Georgia/Times fallback **yasak** (karakter bozulur).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (gutter 24px) |
| Container | 1200px (edge-to-edge kurallar 56px padding) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1200 px |
| Bölüm dikey | 72px (mobil 48px) |

- Hero: 7 kolon metin / 5 kolon görsel; metin bloğu sol kenardan başlar.
- Asimetri zorunlu: ekran başına en az 1 asimetrik bölüm; tam genişlik bloklar en fazla 1.
- Kurallar container genişliğinde, kenara taşmaz.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Blok | `--surface` + 3px kural | yok | içerik |
| Yüzen | `--surface` + 1px kural | yok | modal (arka plan `rgba(10,10,10,.5)`) |

- Derinlik **yok**: hiyerarşi kalınlık (1/2/3px), ölçek ve kırmızı ile kurulur.
- Radius her yerde 0.
- İç gölge, kenar highlight, doku yok (`--grain: 0`).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 24px | 0 | 14/700 uppercase | `--accent` + `--accent-ink`, 2px `--ink` kenar | hover: `--ink` zemin + `--bg` metin · focus: 3px `--ink` halka, offset 2px · disabled: %35 opak, kenar gri |
| Buton (ikincil) | 48px | 0 22px | 0 | 14/700 | `transparent` + 2px `--ink` | hover: `--bg-2` |
| Input | 48px | 0 14px | 0 | 15/400 | `--surface` + 2px `--ink` | focus: 3px `--accent` halka · error: 2px `--danger` kenar + 12px metin |
| Kart | içerik | 24px | 0 | H3 + 15 gövde | `--surface` + 2px `--ink` | hover yok (statik blok) |
| Chip | 24px | 0 8px | 0 | 10/500 mono uppercase | `--bg-2` + 1px `--ink` | aktif: `--accent` |
| Nav | 72px | 0 32px | 0 | 12/700 uppercase `0.08em` | alt 3px `--ink` | aktif: 3px alt `--accent` |
| Tablo satırı | 48px | 10px 16px | 0 | 15/400, sayı mono 13 | alt 1px `--ink` | hover: `--bg-2`; başlık satırı `--bg-2` + 2px alt |
| Modal | içerik | 32px | 0 | H2 + 16 | `--surface` + 3px `--ink` | backdrop %50, gölge yok |
| Toast | 44px | 0 16px | 0 | 13/500 | `--ink` zemin + `--bg` metin | 4sn, ikon + tek satır |
| Grafik | — | — | 0 | eksen 11 mono | `--accent` (tek seri), referans çizgi 1px `--ink` | 2 seriden fazla yok, gölge yok |

- Odak halkası **kalın ve siyah** (3px), accent halka yalnızca açık zeminde.
- Dokunma hedefi 48×48px (kurumsal dokunmatik ekranlar için 48 tercih).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 24px kutu, dik uç; dolgu yok |
| Fotoğraf | Yüksek kontrast, siyah-beyaz veya tek renk duotone; ızgara hattına hizalı |
| İllüstrasyon | Yalnızca diyagram/şema; dekoratif illüstrasyon yok |
| Doku | Yok (`--grain: 0`) |
| Logo | Siyah, kalın, minimum 20px; beyaz alanda tek başına |
| Sayı/veri | Mono, tabular, sağa hizalı sütun |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 64px büyük harf başlık, 6px kırmızı dikey çubuk, 2 buton (kırmızı + çerçeveli), sağda ızgara desenli görsel | `shots/01-landing.png` |
| Dashboard | düşük | KPI'lar 3 kolon, kalın kural ayırıcı; grafik tek renk kırmızı | `shots/02-dashboard.png` |
| Form | düşük | Tek sütun 520px, etiket mono uppercase, input 2px çerçeve | — |
| Liste / tablo | düşük | 48px satır, 1px kural, başlık satırı `--bg-2`; zebra yok | — |
| Boş durum | orta | Sola dayalı tek cümle + tek buton; illüstrasyon yok | — |
| Onboarding | yüksek | Adım numarası 01/02/03 dev mono, tek fikir/sayfa | — |
| Pricing | orta | 3 kolon, orta kolon 3px kırmızı kenar + "önerilen" mono etiket | — |
| Giriş / ödeme | düşük | 440px form, 2px çerçeve, tek kırmızı buton; süs yok | — |
| Modal | orta | 3px siyah kenar, gölge yok, başlık büyük harf | — |
| Bildirim / toast | orta | Siyah zemin + beyaz metin, sol kenarda 4px kırmızı çubuk | — |
| Hata | düşük | 2px kırmızı kenar + mono "HATA" etiketi + 14px açıklama | — |
| Profil / ayar | orta | 8/4 kolon; her satır 56px, sağda mono değer | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 90ms | `ease-out` | `opacity` + 1px translate |
| Giriş | 320ms | `cubic-bezier(.2,.6,.2,1)` | `opacity` (kayma yok), stagger 30ms |
| Scroll (`top 92%`) | 300ms | aynı eğri | yalnız `opacity` (kayma yok), `once: true` |
| Hover | 90ms | aynı eğri | `transform: scale(1.015)` |
| Ödül | — | — | Animasyon yok; vurgu kırmızı blok ile |

- Hareket minimum: renk değişimi + opacity. Kayma/ölçek/parallax yok.
- `prefers-reduced-motion`: 0.01ms.
- Yasak: scroll animasyonu, sayaç animasyonu, hover'da büyüme.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#ffffff` | `#0d0d0d` |
| `--surface` | `#ffffff` | `#141414` |
| `--ink` | `#0a0a0a` | `#f5f5f5` |
| `--line` | `#0a0a0a` | `#f5f5f5` |
| `--accent` | `#e4002b` | `#ff2d4b` |
| `--accent-ink` | `#ffffff` | `#0d0d0d` |

- Koyu modda kurallar açık renge döner, kalınlık aynı kalır.
- Gölge yok kuralı koyu modda da geçerli.

## Erişilebilirlik

- Gövde 19.80:1, açıklama 8.86:1 → güvenli; `--ink-faint` 3.36:1 yalnızca mono etiket.
- Kırmızı üstü beyaz **4.85:1** — 14px/700 buton metni AA sınırında; 12px altına inme.
- Kırmızı + siyah yan yana kullanma (kontrast 3:1 altı).
- Odak halkası siyah 3px; koyu zeminde beyaz 3px.
- Büyük harf yalnızca başlık/etiket/buton; gövdede kullanılmaz.
- Dokunma hedefi 48px; tablo satırı tıklanabilirse tam satır hedef olur.

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
| "Sadece Helvetica" görünüyor | Izgara ve asimetri yok | 12 kolon + 7/5 bölünme + kalın kural ekle |
| Kurumsal ama sıkıcı | Ölçek zıplaması yok | H1 ≥ 56px, gövde 16px; oran ≥ 3:1 |
| Kırmızı her yerde | Vurgu değil dekorasyon | Ekran alanının ≤ %10'u |
| Düzen kayıyor | Metin ortalı / justified | Sola dayalı, sağ kenar serbest |
| Kart enflasyonu | Her bölüm kutu içinde | Bölümleri kural çizgisiyle ayır, kutuyu azalt |
| Mobilde taşma | 64px başlık sabit | `clamp()` ile 36px'e düşür |

## Komşu stiller

- **Uyumlu:** `01 minimalism` (boşluk disiplini), `05 bento-grid` (ızgara), `03 editorial-design` (kolon ritmi, garnitür olarak metin bölümünde).
- **Yasak:** `31 scrapbook` (bilinçli kaos), `11 claymorphism` (şişkin yumuşaklık), `20 vaporwave` (ızgara = dekor).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.moma.org | Kurumsal tipografi + ızgara disiplini |
| https://www.swissted.com | Dönem afişlerinde tipografik ölçek |
| https://helveticaposter.tumblr.com | Izgara ve asimetri örnekleri |

## AI brief

```
Stil: Swiss Design (styles/02-swiss-design/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="swiss-design"]; hard-coded renk/ölçü YASAK.
Izgara: 12 kolon, gutter 24px, container 1200px; tüm bloklar kolon hattına oturur, sağ kenar serbest.
Tipografi: tek aile (Helvetica Neue/Inter); H1 64/700 -0.035em uppercase; gövde 16/1.55; etiket mono 11 uppercase 0.14em.
Ayrım: radius 0, gölge yok; 1/2/3px siyah kural çizgisi.
Kırmızı: ekran alanının ≤ %10'u; birincil buton + vurgu çubuğu + tek kelime.
Bileşen: "Bileşen reçeteleri" tablosundaki ölçüler birebir; buton 48px, input 48px 2px çerçeve.
Hareket: yalnızca opacity/renk, 90–160ms; scroll animasyonu yok.
Yasak: ortalanmış metin, justified, radius, gölge, gradient, ikinci aksan, dekoratif illüstrasyon.
Çıktı: kod + tek paragraf not (ızgara hizalamasını ve kırmızı oranını nasıl korudun).
```

**Teslim öncesi öz-denetim**
- [ ] Tüm bloklar aynı sol hatta; sağ kenarlar serbest.
- [ ] Radius 0, gölge 0, gradient 0.
- [ ] Kırmızı alan oranı ≤ %10.
- [ ] Display ≥ 56px ve gövdeyle oran ≥ 3:1.
- [ ] Bölüm ayrımı kural çizgisiyle (kartla değil).
- [ ] Koyu metin kontrastı ≥ 4.5:1; buton metni 12px altına inmedi.

## Token

```css
[data-style="swiss-design"] {
  --bg: #ffffff; --bg-2: #f1f1f1;
  --surface: #ffffff; --surface-2: #fafafa;
  --ink: #0a0a0a; --ink-soft: #4a4a4a; --ink-faint: #8c8c8c;
  --accent: #e4002b; --accent-ink: #ffffff;
  --line: #0a0a0a;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Helvetica Neue", "Inter", Arial, sans-serif;
  --font-body: "Helvetica Neue", "Inter", Arial, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.03em; --blur: 0px; --grain: 0;
}
```
