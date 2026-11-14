# 233 · Monospace Editorial

> **Bir cümlede:** Monospace editoryal: kod ritmi, tek accent, uzun ölçü ve mono etiket hiyerarşisi.

| | |
|---|---|
| **Hissiyat** | teknik, dürüst, "her şey hizalı" |
| **En iyi** | teknik blog, dokümantasyon, geliştirici yayını |
| **Kaçın** | lüks vitrin |
| **Zorluk** | zor · **Erişilebilirlik** | orta |
| **Aile** | Tipografi Denemeleri (232–241) · **Token** | `kit/tokens.css` → `[data-style="monospace-editorial"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Monospace Editorial, tek aileyle hiyerarşi kurar: punto, ağırlık ve boşluk yeter.

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
- **Tek aile:** başlık ve gövde aynı mono; hiyerarşi punto ve ağırlıkla.
- **Kod ritmi:** satır aralığı 1.7, ölçü 72ch.
- **Tek accent:** yalnız bağlantı ve inline kod.
- **Keskin kenar:** 0–2px.
- **Tipografi:** IBM Plex Mono (display) + IBM Plex Mono (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#1f5f4f`; nötr skala `#fbfbfa` → `#141414`.
- **Yarıçap:** `0px` / `2px`; Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Zorunlu kurallar

1. Hiyerarşi yalnız punto/ağırlıkla kurulur.
2. Kod blokları yatay kaymaz.
3. Satır uzunluğu 72ch.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#fbfbfa` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f0f0ee` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f5f5f3` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#141414` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#4b4b49` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7c7c79` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#1f5f4f` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f5fdfa` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(20,20,20,.16)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.79:1** · `ink-soft/bg` **8.44:1** · `ink-faint/bg` **4.04:1 (dekoratif)** · `accent-ink/accent` **7.23:1**.
- İki renk yeter: zemin ve mürekkep. Accent yalnız bağlantı ve vurgu kelimesi.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (IBM Plex Mono) | 72px (mobil 38px) | 700 | 0.98 | -0.035em |
| H2 | aynı | 32px | 600 | 1.08 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (IBM Plex Mono) | 16px | 400 | 1.6 | 0 |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Yasaklar

- İkinci font ailesi.
- Gradyan.
- Yuvarlak kart.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 7.48:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 17.79:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.44:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.04:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 7.23:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 7.48:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 102.6 | ≥ 60 hedef | ince metin |

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
| Garnitür | `terminal-ui` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `academic-paper` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `boutique-hotel` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `carnival-festival` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — tek aile |
| https://developer.mozilla.org/ | MDN Web Docs — kod blok biçimi |
| https://www.w3.org/TR/WCAG22/ | WCAG 2.2 — okunurluk |

## AI brief

```text
Monospace editoryal sayfa tasarla: tek mono aile, 72ch ölçü, inline kod accent, keskin kenar.

Stil: Monospace Editorial (monospace-editorial) · aile: Tipografi Denemeleri (232–241)
Token: --bg #fbfbfa · --surface #ffffff · --ink #141414 · --accent #1f5f4f · --line rgba(20,20,20,.16)
Yarıçap: 0px / 2px · Tipografi: IBM Plex Mono / IBM Plex Mono / IBM Plex Mono
Zorunlu: Hiyerarşi yalnız punto/ağırlıkla kurulur. · Kod blokları yatay kaymaz. · Satır uzunluğu 72ch.
Yasak: İkinci font ailesi. · Gradyan. · Yuvarlak kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="monospace-editorial"] {
  --bg: #fbfbfa; --bg-2: #f0f0ee;
  --surface: #ffffff; --surface-2: #f5f5f3;
  --ink: #141414; --ink-soft: #4b4b49; --ink-faint: #7c7c79;
  --accent: #1f5f4f; --accent-ink: #f5fdfa;
  --line: rgba(20,20,20,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "IBM Plex Mono", ui-monospace, monospace;
  --font-body: "IBM Plex Mono", ui-monospace, monospace;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
