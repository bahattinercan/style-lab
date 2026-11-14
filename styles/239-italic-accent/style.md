# 239 · Italic Accent

> **Bir cümlede:** İtalik vurgu: düz gövde içinde eğik başlık, ince serif kontrast ve tek sıcak accent.

| | |
|---|---|
| **Hissiyat** | edebî, zarif, "vurgu eğik" |
| **En iyi** | yayınevi, edebiyat dergisi, kültür programı |
| **Kaçın** | yoğun veri tablosu |
| **Zorluk** | zor · **Erişilebilirlik** | orta |
| **Aile** | Tipografi Denemeleri (232–241) · **Token** | `kit/tokens.css` → `[data-style="italic-accent"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Italic Accent, vurguyu tek bir eğik başlıkla kurar; gerisi düz ve sakin.

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
- **Eğik başlık:** H1/H2 italic, gövde düz.
- **İnce/kalın kontrast:** serif display 38px, gövde 16px.
- **Sıcak accent:** yalnız bağlantı.
- **Hairline:** ayırıcı 1px.
- **Tipografi:** Cormorant Garamond (display) + Lora (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#8a4a2f`; nötr skala `#fbf9f4` → `#14120e`.
- **Yarıçap:** `0px` / `2px`; Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Zorunlu kurallar

1. İtalik yalnız başlık ve alıntı.
2. Gövde düz serif.
3. Ölçü 66ch.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#fbf9f4` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f2ede3` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#fffefa` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f7f2e9` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#14120e` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#4b463c` | ikincil metin, açıklama | — |
| `--ink-faint` | `#807a6c` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#8a4a2f` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#fdf8f5` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(20,18,14,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.78:1** · `ink-soft/bg` **8.91:1** · `ink-faint/bg` **4.06:1 (dekoratif)** · `accent-ink/accent` **6.42:1**.
- İki renk yeter: zemin ve mürekkep. Accent yalnız bağlantı ve vurgu kelimesi.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 72px (mobil 38px) | 700 | 0.98 | -0.035em |
| H2 | aynı | 32px | 600 | 1.08 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Lora) | 16px | 400 | 1.6 | 0 |
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

- Tüm metni italik.
- Üçten fazla vurgu.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 6.71:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 17.78:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.91:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.06:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 6.42:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 6.71:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 101.7 | ≥ 60 hedef | ince metin |

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
| Garnitür | `poetry-chapbook` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `justified-book` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `terminal-ui` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `access-audit` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Italic_type | Italic type (Wikipedia) — vurgu kullanımı |
| https://fonts.google.com/specimen/Cormorant+Garamond | Cormorant Garamond (Google Fonts) — başlık serif |
| https://fonts.google.com/specimen/Lora | Lora (Google Fonts) — gövde serif |

## AI brief

```text
Editoryal sayfa tasarla: eğik serif başlık, düz gövde, tek sıcak accent, hairline ayırıcı.

Stil: Italic Accent (italic-accent) · aile: Tipografi Denemeleri (232–241)
Token: --bg #fbf9f4 · --surface #fffefa · --ink #14120e · --accent #8a4a2f · --line rgba(20,18,14,.14)
Yarıçap: 0px / 2px · Tipografi: Cormorant Garamond / Lora / IBM Plex Mono
Zorunlu: İtalik yalnız başlık ve alıntı. · Gövde düz serif. · Ölçü 66ch.
Yasak: Tüm metni italik. · Üçten fazla vurgu. · Yuvarlak kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="italic-accent"] {
  --bg: #fbf9f4; --bg-2: #f2ede3;
  --surface: #fffefa; --surface-2: #f7f2e9;
  --ink: #14120e; --ink-soft: #4b463c; --ink-faint: #807a6c;
  --accent: #8a4a2f; --accent-ink: #fdf8f5;
  --line: rgba(20,18,14,.14);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
