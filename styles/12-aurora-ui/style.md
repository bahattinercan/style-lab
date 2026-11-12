# 12 · Aurora UI

> **Bir cümlede:** Koyu zeminin üzerinde kuzey ışığı gibi akan renkli gradient katmanları; cam paneller gradient'i taşır.

| | |
|---|---|
| **Hissiyat** | ışıklı, akışkan, modern, "yeni teknoloji" |
| **En iyi** | AI/veri ürünü landing'i, kripto, SaaS hero, etkinlik/lansman sayfası |
| **Kaçın** | uzun okuma, düşük kontrastlı ofis ekranı, güç tasarrufu hedefli ürün, baskı/print |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (parlama, banding, yorgunluk) |
| **Aile** | Yüzey (08–12) · **Token** | `kit/tokens.css` → `[data-style="aurora-ui"]` |
| **Kompozisyon** | `centered` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Aurora UI, koyu zemin üzerine yerleştirilmiş **bulanık renk bulutları** (mor, cyan, pembe) ve bunların üzerinde duran **cam panellerden** oluşur. Gradient statik değildir: yavaşça kayar (20s+ döngü) veya scroll'da hafifçe hareket eder. Amaç "canlı, ışıklı, geleceğe ait" bir ilk izlenim.

Kazandığı şey: modernlik ve ürün lansmanı enerjisi. Feda ettiği şey: uzun süreli okuma konforu ve performans.

### Ne değildir
- **Glassmorphism değildir.** Cam orada katman iddiasıdır; aurora'da asıl öğe **zemin gradient**idir, cam ikincildir.
- **Synthwave değildir.** Synthwave ızgara + neon çizgi + 80'ler; aurora yumuşak ve nokta ışığı.
- **Gradient arka plan değildir.** Tek lineer gradient yeterli değil: 2–3 radyal blob + grain + cam katman gerekir.
- **"Mor gradient + beyaz yazı" değildir.** Kontrast yönetilmezse okunmaz; aurora bunu grain ve cam opaklığıyla çözer.

### Nereden gelir
2021–2023'te AI ürünlerinin lansman dili olarak popülerleşti (aurora borealis metaforu). Bugün hâlâ landing/hero için güçlü, ama dashboard'da "2023 klişesi" riski taşır — bu yüzden **yoğunluk ekran başına düşürülmelidir**.

### 3 saniyede tanıma testi
1. Koyu zemin üzerinde 2–3 yumuşak renk bulutu var mı?
2. Bulutların üstünde yarı saydam cam panel mi duruyor?
3. Grain (`.06`) var mı — banding'i kırıyor mu?
4. Accent tek (mor) ve metin tam opak beyaz mı?
5. Gradient **yavaş** mı (yorgunluk yapmayan hız)?

## Zorunlu kurallar

1. **Blob katmanı:** 2–3 radyal gradient, opaklık ≤ .30, `blur(40px)`; ekran başına ≤ 3.
2. **Cam panel:** `--surface` (beyaz %6) + `backdrop-filter: blur(20px)` + 1px `--line`.
3. **Grain .06:** banding'i kırar; 8-bit ekranlarda zorunlu.
4. **Tam opak metin:** `--ink` (#f7f7fb); gradient üstünde yarı saydam metin yasak.
5. **Yavaş hareket:** blob döngüsü ≥ 24s, `linear`; `prefers-reduced-motion` ile durur.
6. **Accent tek:** `#6d5bff`; ikinci vurgu rengi yok (blob renkleri accent değil atmosfer).

## Yasaklar

- Doygun neon çizgi/ızgara (synthwave'e kayma).
- Hızlı hareket eden gradient (baş dönmesi, performans).
- Gradient üstünde gradient metin (`background-clip: text` ile 3 renk).
- 4+ blob veya 3+ parlak renk; her bölümde farklı palet.
- Yoğun veri ekranında tam aurora (grafik okunmaz).
- `will-change` ile sürekli compositing (pil tüketimi).

## Görsel imza
- **Aurora katmanı:** `radial-gradient(40% 46% at 12% 8%, #12121c, transparent 62%)` + accent blob + cyan blob.
- **Cam panel:** beyaz %6 + blur 20px + 1px beyaz %14.
- **Mor gölge:** `0 20px 60px rgba(109,91,255,.25)` — paneller ışık saçar.
- **Grain .06:** tüm zeminde; gradyanın "dijital" görünümünü yumuşatır.
- **Tipografi:** Inter, `-0.02em`, 600 display; gradient metin yok, düz beyaz.
- **Yavaş sürüklenme:** blob'lar 24–40s döngüde 8–12px kayar.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0a0a10` | sayfa | panel |
| `--bg-2` | `#12121c` | blob iç taban, ikincil zemin | metin |
| `--surface` | `rgba(255,255,255,.06)` | cam panel | opak gerekli yerde |
| `--surface-2` | `rgba(255,255,255,.04)` | ikincil cam | buton |
| `--ink` | `#f7f7fb` | tüm metin (tam opak) | — |
| `--ink-soft` | `rgba(247,247,251,.72)` | açıklama | 12px altı |
| `--ink-faint` | `rgba(247,247,251,.48)` | dekoratif (4.74:1) | etkileşimli |
| `--accent` | `#6d5bff` | CTA, aktif, grafik | geniş zemin |
| `--accent-ink` | `#ffffff` | accent üstü metin (**4.57:1**) | — |
| `--line` | `rgba(255,255,255,.14)` | cam kenarı | metin |

- Ölçülen kontrast: `ink/bg` **18.47:1** · `ink-soft/bg` **9.62:1** · `ink-faint/bg` **4.74:1** · `accent-ink/accent` **4.57:1**.
- Accent üstü beyaz **4.57:1** → 14px/600 buton metni AA sınırında; 12px altına inme.
- Blob renkleri: `#6d5bff` (mor), `#22d3ee` (cyan), `#f472b6` (pembe) — opaklık ≤ .30.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Inter | 56px (mobil 32px) | 600 | 1.06 | `-0.02em` |
| H2 | Inter | 28px | 600 | 1.2 | `-0.02em` |
| H3 | Inter | 18px | 600 | 1.3 | `-0.01em` |
| Gövde | Inter | 16px | 400 | 1.65 | `0` |
| Etiket | JetBrains Mono | 10px | 500 | 1.2 | `0.16em`, uppercase |
| Buton | Inter | 14px | 600 | 1 | `0` |

- Gradient metin yok; okunabilirlik için düz beyaz.
- Cam üstü metin 12px altına inmez (blur kontrastı düşürür).
- Display 700 kullanma; 600 yeterli ve gradient üstünde daha net.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (hero 6/6) |
| Gutter | 24px |
| Container | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1200 px |
| Bölüm dikey | 80px (mobil 48px) |

- Blob'lar bölüm sınırlarına değil ekranın tamamına yayılır (`background-attachment: fixed`).
- Kartlar arası ≥ 16px; cam panel içi 24px.
- Hero'da tek cam panel; ikinci panel ancak ayırıcı boşlukla.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Aurora zemini | `--bg` + blobs + grain | — | sayfa |
| Cam panel | `--surface` + blur 20px | `--shadow` (mor) | kart, KPI |
| Yüzen | `--surface` + blur 24px | `--shadow` | modal, nav |

- Derinlik ışıktan: mor glow + cam katman. Koyu gölge yok.
- Radius: `--radius` 16px, `--radius-lg` 24px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 22px | 16px | 14/600 | `--accent` + `--accent-ink` | hover: parlaklık + mor glow artar · focus: 2px beyaz %70 halka · disabled: %42 |
| Buton (cam) | 44px | 0 18px | 16px | 14/600 | `--surface-2` + blur + 1px `--line` | hover: `--surface` |
| Input | 44px | 0 14px | 16px | 14/400 | `--surface-2` + blur | focus: 2px `--accent` halka · error: `--danger` |
| Kart | içerik | 24px | 24px | H3 + 15 | `--surface` + blur + `--shadow` | hover: translateY(-2px) |
| Chip | 26px | 0 11px | 999px | 10/500 mono | `--surface-2` + `--line` | aktif: accent + beyaz |
| Nav | 64px | 0 24px | — | 14/600 | cam + blur 20px | aktif: metin `--ink` + 2px alt accent |
| Tablo satırı | 52px | 12px 16px | — | 14/400 | satır altı beyaz %10 | hover: `--surface-2` |
| Modal | içerik | 28px | 24px | H2 + 15 | cam + blur 24px + daha derin glow | backdrop: `rgba(5,5,12,.55)` |
| Toast | 46px | 0 18px | 16px | 13/500 | cam + `--line` | 4sn |
| Grafik | — | — | 4px uç | eksen 10 mono | `--accent` + cyan %70 | 2 seri |

- Odak halkası beyaz %70 (mor accent cam üstünde zayıf kalır).
- Dokunma hedefi 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, beyaz, 20px |
| Fotoğraf | Koyu zemin + ışıklı kenar; ürün render'ı serbest |
| İllüstrasyon | Blob/gradient; ayrıntılı çizgi yasak |
| Doku | grain .06 (zorunlu, banding kırıcı) |
| Logo | Beyaz monokrom, 20–24px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 3 blob + cam hero panel, 56px başlık, tek accent CTA, altında logo şeridi | `shots/01-landing.png` |
| Dashboard | düşük | Blob'lar sadece arka planda ve **opaklık .12**; cam yalnız nav + tek panel | `shots/02-dashboard.png` |
| Form | çok düşük | Cam panel içinde tek sütun; gradient minimal | — |
| Liste / tablo | düşük | Cam panel + satır altı beyaz %10; zebra yok | — |
| Boş durum | orta | Cam kart + tek cümle + accent buton | — |
| Onboarding | yüksek | Sayfa başına cam panel; blob rengi adıma göre değişir (tek palet içinde) | — |
| Pricing | orta | 3 cam kolon, orta kolon accent kenar + glow | — |
| Giriş / ödeme | çok düşük | Opak koyu kart, blob yok; güven için sade | — |
| Modal | orta | Cam panel, blur 24px, backdrop %55 | — |
| Bildirim / toast | orta | Cam pill, 4sn | — |
| Hata | düşük | `--danger` kenar + açık metin | — |
| Profil / ayar | orta | Cam sidebar + cam içerik (tek katman) | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 140ms | `ease-out` | `transform: scale(.98)` |
| Giriş | 900ms | `sine.out` | `opacity` + 24px `translateY`, stagger 60ms |
| Scroll (`top 76%`) | 1150ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 320ms | aynı eğri | `transform: scale(1.02)` |
| Blob sürüklenme | 24–40s | `linear` | `transform: translate(0→12px)` döngü |
| Ödül | 400ms | `ease-in-out` | accent glow `opacity` 0→1 |

- Blob animasyonu tek ve yavaş; `transform` ile (background-position değil).
- `prefers-reduced-motion`: blob durur, geçişler 0.01ms.

## Koyu mod

Bu stil **koyu tabanlı**. Açık tema gerekiyorsa:

| Token | Koyu | Açık varyant |
|---|---|---|
| `--bg` | `#0a0a10` | `#f7f7fb` |
| `--bg-2` | `#12121c` | `#ecedf5` |
| `--surface` | `rgba(255,255,255,.06)` | `rgba(255,255,255,.72)` |
| `--ink` | `#f7f7fb` | `#0b0b14` |
| `--line` | `rgba(255,255,255,.14)` | `rgba(11,11,20,.12)` |
| `--accent` | `#6d5bff` | `#4b3ae0` |
| `--accent-ink` | `#ffffff` | `#ffffff` |

- Açık varyantta blob opaklığı .18'e düşürülür ve cam daha opak olur.

## Erişilebilirlik

- Gövde 18.47:1, açıklama 9.62:1 → güvenli. `--ink-faint` 4.74:1 → küçük metinde sınırda, etkileşimli değil.
- Accent üstü beyaz **4.57:1** → 14px/600 AA; buton metni küçültme.
- **Parlama/photosensitivite:** blob hareketi yavaş (≥24s), parlaklık ≤ .30; `prefers-reduced-motion` durdurur.
- Banding: grain .06 olmadan gradient şeritleri görünür (özellikle Windows'ta).
- Cam üstü metin daima opak; yarı saydam metin efektif kontrastı 4.5 altına düşürür.
- `prefers-reduced-transparency`: `--blur: 0`, `--surface: var(--bg-2)`.

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
| Banding (şeritler) | Grain yok / 8-bit gradient | `--grain: .06` ekle |
| Göz yorgunluğu | 4+ blob, yüksek parlaklık | Blob ≤ 3, opaklık ≤ .30 |
| "2023 klişesi" | Aynı mor-pembe hero, değişmeyen düzen | Blob yerleşimini markaya özel kur; tipografi/düzenle ayrıştır |
| Metin okunmuyor | Yarı saydam metin / açık blob üstü | Metin opak, blob'u metnin arkasından çek |
| Pil tüketimi | Sürekli animasyon + blur | Blob animasyonu 1, `will-change` sadece gerektiğinde |
| Dashboard'da kaos | Tam aurora yoğun veride | Opaklık .12, cam yalnız nav |

## Komşu stiller

- **Uyumlu:** `08 glassmorphism` (zemin + katman), `09 liquid-glass` (optik varyant), `05 bento-grid` (cam bento hero).
- **Yasak:** `21 synthwave` (neon ızgara), `02 swiss-design` (rasyonel ızgara), `24 pixel-art` (ölçek).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://stripe.com | Koyu zemin + ışıklı gradient dengesi |
| https://linear.app | Gradient'in geri çekildiği örnek |
| https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient | Blob katmanlarının kurulumu |

## AI brief

```
Stil: Aurora UI (styles/12-aurora-ui/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="aurora-ui"]; hard-coded renk/blur YASAK.
Zemin: 2–3 radyal blob (mor #6d5bff, cyan #22d3ee, pembe #f472b6) opaklık ≤ .30 + blur(40px); grain .06 ZORUNLU.
Panel: --surface (beyaz %6) + backdrop-filter: blur(20px) + 1px rgba(255,255,255,.14) + mor glow gölge.
Metin: tam opak #f7f7fb; gradient text YASAK; 12px altı metin yok.
Accent: tek mor #6d5bff; accent üstü beyaz 4.57:1 → buton metni 14px/600, küçültme.
Hareket: blob 24–40s linear döngü (transform), geçişler 260ms; prefers-reduced-motion'da blob durur.
Yoğun ekran (dashboard/tablo/ödeme): blob opaklığı .12, cam yalnız nav → stil geri çekilir.
Yasak: neon ızgara/çizgi, 4+ blob, hızlı gradient, gradient metin, opak bar üstü sahte cam.
Çıktı: kod + tek paragraf not (blob sayısı, opaklık, grain ve kontrast önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] Blob ≤ 3, opaklık ≤ .30, grain .06 var.
- [ ] Cam panelde blur + 1px kenar + glow gölge.
- [ ] Metin tam opak; kontrast ≥ 4.5:1.
- [ ] Accent tek; buton metni 14px/600.
- [ ] Blob animasyonu yavaş, `prefers-reduced-motion` durduruyor.
- [ ] Yoğun ekranda opaklık düşürüldü.

## Token

```css
[data-style="aurora-ui"] {
  --bg: #0a0a10; --bg-2: #12121c;
  --surface: rgba(255,255,255,.06); --surface-2: rgba(255,255,255,.04);
  --ink: #f7f7fb; --ink-soft: rgba(247,247,251,.72); --ink-faint: rgba(247,247,251,.48);
  --accent: #6d5bff; --accent-ink: #ffffff;
  --line: rgba(255,255,255,.14);
  --radius: 16px; --radius-lg: 24px;
  --shadow: 0 20px 60px rgba(109,91,255,.25); --shadow-hard: none;
  --font-display: "Inter", "Satoshi", system-ui, sans-serif;
  --font-body: "Inter", "Satoshi", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 20px; --grain: .06;
}
```
