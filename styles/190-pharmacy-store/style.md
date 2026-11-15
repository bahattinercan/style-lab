# 190 · Pharmacy Store

> **Bir cümlede:** Eczane vitrini: beyaz-mavi zemin, yeşil reçete accent, açık doz bilgisi ve güven satırları.

| | |
|---|---|
| **Hissiyat** | güvenli, temiz, "doğru bilgi" |
| **En iyi** | eczane, sağlık ürünü, reçete/danışmanlık |
| **Kaçın** | hype kampanya, koyu tema |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Ticaret & Vitrin (182–191) · **Token** | `kit/tokens.css` → `[data-style="pharmacy-store"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Pharmacy Store, ürünü değil bilgiyi öne çıkarır: doz, kullanım ve reçete durumu her kartta.

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
- **Reçete accent:** yeşil yalnız reçeteli ürün ve eylem.
- **Doz bilgisi:** kutu altında mono 12px.
- **Güven şeridi:** 3 madde, ikon + metin.
- **Temiz ızgara:** 3 kolon, 1:1 görsel.
- **Tipografi:** Inter (display) + Inter (gövde) + Space Mono (mono etiket).
- **Renk disiplini:** tek accent `#0f6b4a`; nötr skala `#f9fbfd` → `#111820`.
- **Yarıçap:** `8px` / `12px`; Kart 10–14px, buton 6–10px; tam daire yalnız chip/rozet.

## Zorunlu kurallar

1. Doz/kullanım bilgisi her ürün kartında.
2. Reçeteli ürün işareti metinle belirtilir.
3. Fiyat ve KDV ayrı satır.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#f9fbfd` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#eef4f9` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f3f8fc` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#111820` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#46525f` | ikincil metin, açıklama | — |
| `--ink-faint` | `#78848f` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#0f6b4a` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f4fdf8` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(17,24,32,.12)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.22:1** · `ink-soft/bg` **7.69:1** · `ink-faint/bg` **3.68:1 (dekoratif)** · `accent-ink/accent` **6.29:1**.
- Fiyat ve stok bilgisi accent ile değil --ink ile yazılır; accent yalnız eylem (sepet, satın al).
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 40px (mobil 30px) | 600 | 1.06 | -0.02em |
| H2 | aynı | 26px | 600 | 1.18 | -0.015em |
| H3 | aynı | 18px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 15px | 400 | 1.6 | 0 |
| Küçük gövde | aynı | 14px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `8px` (buton, input, chip), `12px` (kart, modal). Kart 10–14px, buton 6–10px; tam daire yalnız chip/rozet.

## Yasaklar

- Sağlık iddiası veren görsel.
- Kırmızı indirim etiketi.
- Animasyonlu banner.
- Fiyat üzerinde indirim etiketi yığını.
- Dörtten fazla rozet türü.
- Otomatik oynayan görsel.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 8px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 8px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 8px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 8px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 8px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 8px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 6.52:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 17.22:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 7.69:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.68:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 6.29:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 6.52:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 102.1 | ≥ 60 hedef | ince metin |

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
| Garnitür | `grocery-delivery` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `luxury-atelier` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `game-horror-occult` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `synthwave` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Pharmacy | Pharmacy (Wikipedia) — reçete/danışmanlık dili |
| https://fonts.google.com/specimen/Inter | Inter (Google Fonts) — gövde ailesi |
| https://www.w3.org/TR/WCAG22/ | WCAG 2.2 — erişilebilirlik ölçütleri |

## AI brief

```text
Eczane vitrini tasarla: açık zemin, yeşil yalnız reçeteli üründe, mono doz bilgisi, güven şeridi.

Stil: Pharmacy Store (pharmacy-store) · aile: Ticaret & Vitrin (182–191)
Token: --bg #f9fbfd · --surface #ffffff · --ink #111820 · --accent #0f6b4a · --line rgba(17,24,32,.12)
Yarıçap: 8px / 12px · Tipografi: Inter / Inter / Space Mono
Zorunlu: Doz/kullanım bilgisi her ürün kartında. · Reçeteli ürün işareti metinle belirtilir. · Fiyat ve KDV ayrı satır.
Yasak: Sağlık iddiası veren görsel. · Kırmızı indirim etiketi. · Animasyonlu banner.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="pharmacy-store"] {
  --bg: #f9fbfd; --bg-2: #eef4f9;
  --surface: #ffffff; --surface-2: #f3f8fc;
  --ink: #111820; --ink-soft: #46525f; --ink-faint: #78848f;
  --accent: #0f6b4a; --accent-ink: #f4fdf8;
  --line: rgba(17,24,32,.12);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00863d;
  --ok-ink: #ffffff;
  --warn: #ba5800;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 8px; --radius-lg: 12px;
  --shadow: 0 2px 8px rgba(0,0,0,.10); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
