# 232 · Condensed News

> **Bir cümlede:** Sıkı gazete tipografisi: dar başlık, çok kolon, hairline ve mono tarih-imza.

| | |
|---|---|
| **Hissiyat** | haber, baskı, "manşet" |
| **En iyi** | haber sitesi, köşe yazısı, günlük bülten |
| **Kaçın** | yavaş lüks vitrin |
| **Zorluk** | zor · **Erişilebilirlik** | orta |
| **Aile** | Tipografi Denemeleri (232–241) · **Token** | `kit/tokens.css` → `[data-style="condensed-news"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Condensed News, sayfayı bir gazete gibi doldurur: manşet, kolon, tarih ve imza.

### Ne değildir
- Büyük başlık tek başına tipografik stil değildir; ızgara ve ölçü de gerekir.
- Dekoratif font yığını değildir; tek aile yeter.

### Nereden gelir
Swiss tipografi, poster baskısı ve editoryal başlık denemeleri.

### 3 saniyede tanıma testi
1. Başlık üç satıra yayılıyor mu?
2. İkiden fazla font ailesi var mı (olmamalı)?
3. Köşe yarıçapı 0 mı?

## Görsel imza
- **Dar başlık:** Anton, 0.98 satır aralığı, 3 satıra kadar.
- **Çok kolon:** 4 kolon gövde, 2 kolon alıntı.
- **Hairline:** kolon ayırıcı 1px.
- **Manşet kırmızısı:** yalnız etiket.
- **Tipografi:** Anton (display) + EB Garamond (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#8c1a1a`; nötr skala `#fdfcf8` → `#121212`.
- **Yarıçap:** `0px` / `0px`; Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Zorunlu kurallar

1. Başlık en fazla 3 satır.
2. Her metinde tarih ve imza mono.
3. Kolon ayırıcı 1px.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#fdfcf8` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f2f0e8` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f6f4ee` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#121212` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#4a4a46` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7d7d77` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#8c1a1a` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#fdf7f6` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(18,18,18,.2)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **18.25:1** · `ink-soft/bg` **8.67:1** · `ink-faint/bg` **4.03:1 (dekoratif)** · `accent-ink/accent` **8.7:1**.
- İki renk yeter: zemin ve mürekkep. Accent yalnız bağlantı ve vurgu kelimesi.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 72px (mobil 38px) | 700 | 0.98 | -0.035em |
| H2 | aynı | 32px | 600 | 1.08 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (EB Garamond) | 16px | 400 | 1.6 | 0 |
| Küçük gövde | aynı | 14px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.14em |
| Buton | `--font-body` | 12px | 600 | 1 | 0 |

- Display 72px, satır aralığı 0.98; gövde 16/1.6. Ara punto yok — iki uç arasında zıplama bilinçli.
- Ölçü: 62ch (okuma metni), kart metni en fazla 52ch.
- Başlıklar cümle düzeninde (uppercase yok); uppercase yalnız mono etiketlerde.

## Izgara ve boşluk

| Öğe | Değer |
| --- | --- |
| Kolon | 12 (içerik 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 12 kolon görünmez; başlık 8 kolona yayılır, gövde 6 kolonda kalır.
- Bölüm dikey boşluğu masaüstü 72px, mobil 44px; kart içi padding 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Gölge ve yuvarlatma yok; ayrım yalnız hairline ve boşluk.
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Yasaklar

- Yuvarlak köşe.
- Dekoratif görsel.
- Üçten fazla font.
- Üçüncü font ailesi.
- Başlıkta gölge/eğim.
- Gövde metninde uppercase.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 9.22:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px çizgi, 16px; metinle aynı ağırlıkta |
| Fotoğraf | Yalnız gerektiğinde; metni destekler, yarışmaz |
| İllüstrasyon | Tipografik işaret olarak kullanılabilir |
| Doku | Yok |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-none` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Sayfada en fazla bir büyük görsel; gerisi metin ve veri.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Poster hero | düşük | Tek başlık + tek satır açıklama | `shots/01-page.png` |
| Manifesto | düşük | Uzun metin, geniş sol boşluk | `shots/01-page.png` |
| Dizin | yüksek | Numaralı satır listesi, mono | `shots/01-page.png` |
| Makale | düşük | 62ch ölçü, alıntı 32px | `shots/01-page.png` |
| Kolofon | düşük | Künye tablosu | `shots/01-page.png` |
| Form | orta | Etiket üstte, çizgi input | `shots/01-page.png` |
| Arşiv | yüksek | Yıl + başlık, iki kolon | `shots/01-page.png` |
| İletişim | düşük | Adres + tek satır e-posta | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 18.25:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.67:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.03:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 8.7:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 9.22:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 103.4 | ≥ 60 hedef | ince metin |

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
| Başlık taşıyor | max-width yok | 18ch sınırı koy |
| Metin okunmuyor | Ölçü 90ch | 62ch'e indir |
| Hiyerarşi düz | Üç ara punto | İki uç punto kullan |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `broadsheet-daily` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `justified-book` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `glassmorphism` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Newspaper | Newspaper (Wikipedia) — kolon/manşet düzeni |
| https://fonts.google.com/specimen/Anton | Anton (Google Fonts) — manşet |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond (Google Fonts) — gövde serif |

## AI brief

```text
Haber sayfası tasarla: dar Anton manşet, 4 kolon gövde, hairline ayırıcı, mono tarih-imza.

Stil: Condensed News (condensed-news) · aile: Tipografi Denemeleri (232–241)
Token: --bg #fdfcf8 · --surface #ffffff · --ink #121212 · --accent #8c1a1a · --line rgba(18,18,18,.2)
Yarıçap: 0px / 0px · Tipografi: Anton / EB Garamond / IBM Plex Mono
Zorunlu: Başlık en fazla 3 satır. · Her metinde tarih ve imza mono. · Kolon ayırıcı 1px.
Yasak: Yuvarlak köşe. · Dekoratif görsel. · Üçten fazla font.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="condensed-news"] {
  --bg: #fdfcf8; --bg-2: #f2f0e8;
  --surface: #ffffff; --surface-2: #f6f4ee;
  --ink: #121212; --ink-soft: #4a4a46; --ink-faint: #7d7d77;
  --accent: #8c1a1a; --accent-ink: #fdf7f6;
  --line: rgba(18,18,18,.2);
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
