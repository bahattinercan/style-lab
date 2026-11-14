# 240 · Numerals Display

> **Bir cümlede:** Rakam odaklı tipografi: dev sayılar, mono hizalama, birim etiketi ve ince çizgi.

| | |
|---|---|
| **Hissiyat** | ölçülü, veri, "sayı konuşur" |
| **En iyi** | yıllık rapor, veri hikâyesi, ölçüm panosu |
| **Kaçın** | çocuk uygulaması |
| **Zorluk** | zor · **Erişilebilirlik** | orta |
| **Aile** | Tipografi Denemeleri (232–241) · **Token** | `kit/tokens.css` → `[data-style="numerals-display"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Numerals Display, sayıyı başrole koyar: rakam büyük, birim net, gerisi sessiz.

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
- **Dev rakam:** 96px display, tabular.
- **Birim etiketi:** mono 11px, rakamın yanında.
- **İnce çizgi:** rakam altında 1px.
- **Az metin:** başlık iki satır sınırı.
- **Tipografi:** Space Grotesk (display) + Inter (gövde) + Space Mono (mono etiket).
- **Renk disiplini:** tek accent `#12506e`; nötr skala `#f7f8f9` → `#0f1215`.
- **Yarıçap:** `0px` / `2px`; Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Zorunlu kurallar

1. Tüm rakamlar tabular ve hizalı.
2. Birim her zaman yazılır.
3. Basamak gruplama nokta/virgül tutarlı.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#f7f8f9` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#eceef0` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f3f5f6` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#0f1215` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#454b51` | ikincil metin, açıklama | — |
| `--ink-faint` | `#767c83` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#12506e` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f6fbfe` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(15,18,21,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.67:1** · `ink-soft/bg` **8.3:1** · `ink-faint/bg` **3.96:1 (dekoratif)** · `accent-ink/accent` **8.4:1**.
- İki renk yeter: zemin ve mürekkep. Accent yalnız bağlantı ve vurgu kelimesi.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 72px (mobil 38px) | 700 | 0.98 | -0.035em |
| H2 | aynı | 32px | 600 | 1.08 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 16px | 400 | 1.6 | 0 |
| Küçük gövde | aynı | 14px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Yasaklar

- Animasyonlu sayaç.
- Dekoratif grafik.
- Üçten fazla rakam boyutu.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 8.76:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 17.67:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.3:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.96:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 8.4:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 8.76:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 101 | ≥ 60 hedef | ince metin |

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
| Garnitür | `ledger-meter` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `variable-weight` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `kids-classroom` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `carnival-festival` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Numeral_system | Numeral system (Wikipedia) — sayı biçimi |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — display ailesi |
| https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric | MDN · tabular-nums — hizalama |

## AI brief

```text
Rakam odaklı rapor sayfası tasarla: 96px tabular rakamlar, mono birim, ince çizgi, az metin.

Stil: Numerals Display (numerals-display) · aile: Tipografi Denemeleri (232–241)
Token: --bg #f7f8f9 · --surface #ffffff · --ink #0f1215 · --accent #12506e · --line rgba(15,18,21,.14)
Yarıçap: 0px / 2px · Tipografi: Space Grotesk / Inter / Space Mono
Zorunlu: Tüm rakamlar tabular ve hizalı. · Birim her zaman yazılır. · Basamak gruplama nokta/virgül tutarlı.
Yasak: Animasyonlu sayaç. · Dekoratif grafik. · Üçten fazla rakam boyutu.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="numerals-display"] {
  --bg: #f7f8f9; --bg-2: #eceef0;
  --surface: #ffffff; --surface-2: #f3f5f6;
  --ink: #0f1215; --ink-soft: #454b51; --ink-faint: #767c83;
  --accent: #12506e; --accent-ink: #f6fbfe;
  --line: rgba(15,18,21,.14);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
