# 194 · Film Festival

> **Bir cümlede:** Film festivali: siyah zemin, kırmızı program accent, seans ızgarası ve mono süre bilgisi.

| | |
|---|---|
| **Hissiyat** | yoğun, sinemasal, "üç salon aynı anda" |
| **En iyi** | film festivali, program, bilet/seans |
| **Kaçın** | sakin kurumsal rapor |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Kültür & Yayın (192–201) · **Token** | `kit/tokens.css` → `[data-style="film-festival"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Film Festival, üç paralel programı tek ızgarada okutur: salon, saat, süre ve durum.

### Ne değildir
- Müze broşürü kopyası değildir; ekran okunurluğu korunur.
- Serif zorunlu değildir; boşluk ve ölçek belirleyicidir.

### Nereden gelir
Basılı program dergileri, sergi katalogları ve tiyatro afişlerinin tipografik hiyerarşisi.

### 3 saniyede tanıma testi
1. Başlık en az 3 satıra yayılıyor mu?
2. Kenar boşluğu 48px üstü mü?
3. Gölge yerine hairline mı kullanılmış?

## Görsel imza
- **Seans ızgarası:** 3 salon × saat, mono saat.
- **Kırmızı accent:** yalnız canlı/biten seans.
- **Dev film başlığı:** Anton, tek satır hedefi.
- **Süre bilgisi:** mono, dakika.
- **Tipografi:** Anton (display) + Inter (gövde) + Space Mono (mono etiket).
- **Renk disiplini:** tek accent `#e04a3f`; nötr skala `#0c0c0e` → `#f3f1f0`.
- **Yarıçap:** `0px` / `2px`; Köşe 0–4px; kültür dili keskin kenar ve geniş boşlukla kurulur.

## Zorunlu kurallar

1. Her seansta salon, saat ve süre.
2. Bilet durumu metinle yazılır (boş/az/kapalı).
3. Uppercase yalnız başlıkta.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0c0c0e` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#121215` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#17171b` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#202027` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#f3f1f0` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#ada9a7` | ikincil metin, açıklama | — |
| `--ink-faint` | `#807c7a` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#e04a3f` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#170302` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(243,241,240,.15)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.36:1** · `ink-soft/bg` **8.38:1** · `ink-faint/bg` **4.73:1 (dekoratif)** · `accent-ink/accent` **4.97:1**.
- Zemin kâğıt tonu; accent yalnız bağlantı ve program etiketi. Görselin kendi rengi baskın kalır.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 58px (mobil 34px) | 400 | 1.04 | -0.02em |
| H2 | aynı | 32px | 600 | 1.16 | -0.015em |
| H3 | aynı | 22px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 17px | 400 | 1.68 | 0 |
| Küçük gövde | aynı | 15px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
| Buton | `--font-body` | 13px | 600 | 1 | 0 |

- Başlık geniş ölçekli ve sıkı satır aralıklı; gövde 17px, ölçü 68ch. Etiket mono ve uppercase.
- Ölçü: 68ch (okuma metni), kart metni en fazla 52ch.
- Başlıklar uppercase: `text-transform: uppercase` + pozitif tracking; gövde metni asla.

## Izgara ve boşluk

| Öğe | Değer |
| --- | --- |
| Kolon | 12 (içerik 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Geniş kenar boşluğu (56px), asimetrik 7/5 kolon. Bölüm başlıkları sol kolonda kalır.
- Bölüm dikey boşluğu masaüstü 84px, mobil 48px; kart içi padding 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Gölge yok; ayrım hairline ve zemin tonuyla. Görseller tam kenar ya da 4:3 çerçevede.
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Köşe 0–4px; kültür dili keskin kenar ve geniş boşlukla kurulur.

## Yasaklar

- Animasyonlu fragman.
- Altıdan fazla kategori rengi.
- Yuvarlak kart.
- Neon accent.
- Yuvarlak kart yığını.
- Otomatik carousel.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 0px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 0px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 0px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 0px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 0px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 0px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 0px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 4.86:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px çizgi, 20px; minimal |
| Fotoğraf | Sergi/mekân fotoğrafı, doğal ışık, geniş açı |
| İllüstrasyon | Yalnız arşiv/afiş çoğaltması |
| Doku | Kâğıt greni %2 (--grain: .02) |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-bars` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Sayfada en fazla bir büyük görsel; gerisi metin ve veri.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Program / etkinlik | orta | Tarih + mekân + tek CTA; mono etiket | `shots/01-page.png` |
| Arşiv / koleksiyon | yüksek | Izgara 3 kolon, her kartta yıl ve tür | `shots/01-page.png` |
| Detay / makale | düşük | 68ch ölçü, 17px gövde, alıntı bloğu | `shots/01-page.png` |
| Takvim | yüksek | Ay ızgarası, gün hücresi 44px | `shots/01-page.png` |
| Bilet / kayıt | orta | Tek sütun form + fiyat özeti | `shots/01-page.png` |
| Hakkında | düşük | Uzun metin + künye tablosu | `shots/01-page.png` |
| Sponsor / destek | orta | Logo şeridi tek satır | `shots/01-page.png` |
| İletişim | düşük | Adres + form, 2 kolon | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.36:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.38:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.73:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 4.97:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 4.86:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 98.7 | ≥ 60 hedef | ince metin |

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
| Sayfa dergi gibi dağılıyor | Çok fazla farklı hizalama | Tek asimetri kuralı seç ve koru |
| Başlık eziliyor | Satır aralığı fazla | line-height 1.04–1.1 aralığında tut |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `indie-cinema` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `noir-estate` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `japandi` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `marketplace-multi` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Film_festival | Film festival (Wikipedia) — program yapısı |
| https://fonts.google.com/specimen/Anton | Anton (Google Fonts) — afiş başlığı |
| https://fonts.google.com/specimen/Space+Mono | Space Mono (Google Fonts) — saat/süre |

## AI brief

```text
Film festivali programı tasarla: siyah zemin, Anton dev başlık, mono seans ızgarası, kırmızı yalnız canlı seansta.

Stil: Film Festival (film-festival) · aile: Kültür & Yayın (192–201)
Token: --bg #0c0c0e · --surface #17171b · --ink #f3f1f0 · --accent #e04a3f · --line rgba(243,241,240,.15)
Yarıçap: 0px / 2px · Tipografi: Anton / Inter / Space Mono
Zorunlu: Her seansta salon, saat ve süre. · Bilet durumu metinle yazılır (boş/az/kapalı). · Uppercase yalnız başlıkta.
Yasak: Animasyonlu fragman. · Altıdan fazla kategori rengi. · Yuvarlak kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="film-festival"] {
  --bg: #0c0c0e; --bg-2: #121215;
  --surface: #17171b; --surface-2: #202027;
  --ink: #f3f1f0; --ink-soft: #ada9a7; --ink-faint: #807c7a;
  --accent: #e04a3f; --accent-ink: #170302;
  --line: rgba(243,241,240,.15);
  --danger: #e3382a;
  --danger-ink: #0b0d10;
  --ok: #12b76a;
  --ok-ink: #0b0d10;
  --warn: #f79009;
  --warn-ink: #0b0d10;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
