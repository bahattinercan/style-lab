# 188 · Furniture Studio

> **Bir cümlede:** Mobilya stüdyosu: sıcak meşe paleti, geniş ürün fotoğrafı, ölçü tablosu ve sade fiyat satırı.

| | |
|---|---|
| **Hissiyat** | sakin, dokunsal, "ölçüp alacağım" |
| **En iyi** | mobilya/dekorasyon, ürün detayı, ölçü seçimi |
| **Kaçın** | hype drop, koyu gece teması |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Ticaret & Vitrin (182–191) · **Token** | `kit/tokens.css` → `[data-style="furniture-studio"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Furniture Studio, satın alma kararını ölçüyle destekler: fotoğraf büyük, sayılar net.

### Ne değildir
- Vitrin afişi değildir; ürün ızgarası ve fiyat hiyerarşisi belirleyicidir.
- İndirim kırmızısı her yerde kullanılmaz; tek vurgu yeter.

### Nereden gelir
Basılı katalog, mağaza vitrini ve pazar yeri listeleme düzenlerinin ekran karşılığı.

### 3 saniyede tanıma testi
1. Fiyat göz ilk üç saniyede bulunuyor mu?
2. Tek accent eylem rengi mi?
3. Ürün görseli kutusu 4:5 mi?

## Görsel imza
- **Ölçü tablosu:** genişlik/derinlik/yükseklik mm, mono.
- **Meşe accent:** yalnız seçili varyant ve fiyat.
- **Geniş fotoğraf:** ürün 4:3, gölge yumuşak.
- **Sade fiyat:** tek satır, kdv notu mono.
- **Tipografi:** Jost (display) + Jost (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#7a4b22`; nötr skala `#faf6f0` → `#1d1811`.
- **Yarıçap:** `4px` / `8px`; Kart 10–14px, buton 6–10px; tam daire yalnız chip/rozet.

## Zorunlu kurallar

1. Ölçüler mm ve mono; kumaş/renk varyantı ayrı satır.
2. Teslim süresi metinle yazılır.
3. Fotoğraf oranı 4:3, kırpma tutarlı.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#faf6f0` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f1e9dd` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f7f1e8` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#1d1811` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#544b40` | ikincil metin, açıklama | — |
| `--ink-faint` | `#867b6d` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#7a4b22` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#fdf8f2` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(29,24,17,.13)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.38:1** · `ink-soft/bg` **7.94:1** · `ink-faint/bg` **3.85:1 (dekoratif)** · `accent-ink/accent` **6.96:1**.
- Fiyat ve stok bilgisi accent ile değil --ink ile yazılır; accent yalnız eylem (sepet, satın al).
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Jost) | 44px (mobil 30px) | 600 | 1.06 | -0.02em |
| H2 | aynı | 26px | 600 | 1.18 | -0.015em |
| H3 | aynı | 18px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Jost) | 15px | 400 | 1.6 | 0 |
| Küçük gövde | aynı | 14px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Buton | `--font-body` | 12px | 600 | 1 | 0 |

- Fiyat 26–32px display, para birimi 13px mono; ürün adı 15px/600.
- Ölçü: 66ch (okuma metni), kart metni en fazla 52ch.
- Başlıklar cümle düzeninde (uppercase yok); uppercase yalnız mono etiketlerde.

## Izgara ve boşluk

| Öğe | Değer |
| --- | --- |
| Kolon | 12 (içerik 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Ürün ızgarası 3–4 kolon; kart oranı 4:5. Filtre rayı 240px.
- Bölüm dikey boşluğu masaüstü 72px, mobil 44px; kart içi padding 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Kartlar hafif gölgeyle ayrılır; hover'da gölge büyür, kenar değişmez.
- Radius: `4px` (buton, input, chip), `8px` (kart, modal). Kart 10–14px, buton 6–10px; tam daire yalnız chip/rozet.

## Yasaklar

- Animasyonlu 360° döndürme.
- On iki varyant chip'i.
- Yuvarlak 20px+ kart.
- Fiyat üzerinde indirim etiketi yığını.
- Dörtten fazla rozet türü.
- Otomatik oynayan görsel.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 4px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 4px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 4px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 7.35:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1.5px çizgi, 20px; sepet/favori dolu |
| Fotoğraf | Ürün tek nesne, beyaz/nötr zemin, gölge yumuşak; 4:5 |
| İllüstrasyon | Yalnız kategori başlığında ince çizgi |
| Doku | Yok |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-none` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Sayfada en fazla bir büyük görsel; gerisi metin ve veri.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Vitrin / landing | orta | Hero + 3 öne çıkan ürün; tek CTA | `shots/01-page.png` |
| Ürün ızgarası | yüksek | 3–4 kolon, 4:5 görsel, fiyat + tek satır açıklama | `shots/01-page.png` |
| Ürün detayı | orta | Galeri solda, fiyat + varyant sağda | `shots/01-page.png` |
| Sepet | orta | Satır 64px, adet stepper, ara toplam sağa hizalı | `shots/01-page.png` |
| Ödeme | düşük | Tek sütun 480px, 3 alan, tek buton | `shots/01-page.png` |
| Filtre paneli | yüksek | Ray 240px, chip'ler tek satır, sıfırla | `shots/01-page.png` |
| Kategori/kolleksiyon | orta | Başlık + açıklama + ızgara | `shots/01-page.png` |
| Hesap / sipariş | orta | Sipariş kartı + durum etiketi | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.38:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 7.94:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.85:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 6.96:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 7.35:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 99.3 | ≥ 60 hedef | ince metin |

- `--ink-faint` yalnız dekoratif; gövde metni asla.
- Renk tek başına anlam taşımaz: durum her zaman metin/ikonla birlikte.
- Klavye sırası görsel sırayı izler; odak tuzağı yok. prefers-reduced-motion ve prefers-contrast desteklenir.

## Örnek görseller

Aynı içerik, tüm stillerde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-page.png` | Tek sayfa — 1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form/veri, CTA ve alt bilgi tek karede. |

## Tuzaklar

| Belirti | Neden | Düzeltme |
| --- | --- | --- |
| Ürün küçük görünüyor | Kart padding fazla | Padding 12px'e indir, görseli kartın %86'sına çıkar |
| Fiyat kayboluyor | Fiyat gövde puntosunda | Fiyatı 26px+ display, para birimini mono yap |
| Vitrin yavaş hissi veriyor | Fazla gölge/rozet | Gölgeyi tek seviyeye indir, rozeti tek tut |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `japandi` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `boutique-hotel` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `cyberpunk` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `game-racing-neon` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Furniture | Furniture (Wikipedia) — ölçü/varyant alanları |
| https://fonts.google.com/specimen/Jost | Jost (Google Fonts) — başlık ve gövde |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — ölçü ve fiyat notu |

## AI brief

```text
Mobilya ürün detayı tasarla: sıcak zemin, geniş 4:3 fotoğraf, mono ölçü tablosu, tek accent fiyat.

Stil: Furniture Studio (furniture-studio) · aile: Ticaret & Vitrin (182–191)
Token: --bg #faf6f0 · --surface #ffffff · --ink #1d1811 · --accent #7a4b22 · --line rgba(29,24,17,.13)
Yarıçap: 4px / 8px · Tipografi: Jost / Jost / IBM Plex Mono
Zorunlu: Ölçüler mm ve mono; kumaş/renk varyantı ayrı satır. · Teslim süresi metinle yazılır. · Fotoğraf oranı 4:3, kırpma tutarlı.
Yasak: Animasyonlu 360° döndürme. · On iki varyant chip'i. · Yuvarlak 20px+ kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="furniture-studio"] {
  --bg: #faf6f0; --bg-2: #f1e9dd;
  --surface: #ffffff; --surface-2: #f7f1e8;
  --ink: #1d1811; --ink-soft: #544b40; --ink-faint: #867b6d;
  --accent: #7a4b22; --accent-ink: #fdf8f2;
  --line: rgba(29,24,17,.13);
  --danger: #d92c20;
  --danger-ink: #ffffff;
  --ok: #00833a;
  --ok-ink: #ffffff;
  --warn: #b75500;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 8px;
  --shadow: 0 2px 8px rgba(0,0,0,.10); --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
