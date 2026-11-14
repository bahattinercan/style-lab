# 241 · Small Caps Ledger

> **Bir cümlede:** Küçük kapsüllü defter: başlıklarda small-caps, ince çizgili tablo ve mono toplam.

| | |
|---|---|
| **Hissiyat** | kayıt, titiz, "deftere yazıldı" |
| **En iyi** | muhasebe/defter, üyelik kaydı, envanter listesi |
| **Kaçın** | gençlik kampanyası |
| **Zorluk** | zor · **Erişilebilirlik** | orta |
| **Aile** | Tipografi Denemeleri (232–241) · **Token** | `kit/tokens.css` → `[data-style="small-caps-ledger"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Small Caps Ledger, defteri ekranda tutar: small-caps başlık, ince çizgi, mono toplam.

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
- **Small-caps başlık:** `font-variant: small-caps`, 20px.
- **İnce tablo:** yalnız yatay 1px çizgi.
- **Mono toplam:** sağ alt, tabular.
- **Defter dokusu:** hafif çizgi arka plan, %4.
- **Tipografi:** EB Garamond (display) + EB Garamond (gövde) + Courier Prime (mono etiket).
- **Renk disiplini:** tek accent `#6b2f2f`; nötr skala `#fbfaf5` → `#15140f`.
- **Yarıçap:** `0px` / `0px`; Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Zorunlu kurallar

1. Her satırda tarih ve tutar.
2. Toplamlar tabular ve sağa hizalı.
3. Small-caps yalnız başlıklarda.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#fbfaf5` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f1efe6` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#fffef9` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f6f4ec` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#15140f` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#4c4940` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7f7b6d` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#6b2f2f` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#fdf7f7` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(21,20,15,.16)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.64:1** · `ink-soft/bg` **8.61:1** · `ink-faint/bg` **4.05:1 (dekoratif)** · `accent-ink/accent` **9.56:1**.
- İki renk yeter: zemin ve mürekkep. Accent yalnız bağlantı ve vurgu kelimesi.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (EB Garamond) | 72px (mobil 38px) | 700 | 0.98 | -0.035em |
| H2 | aynı | 32px | 600 | 1.08 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (EB Garamond) | 16px | 400 | 1.6 | 0 |
| Küçük gövde | aynı | 14px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (Courier Prime) | 10px | 400 | 1.2 | 0.14em |
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

- Renkli satır vurgusu.
- Yuvarlak kart.
- Üçten fazla rakam biçimi.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 10.03:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 17.64:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.61:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.05:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 9.56:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 10.03:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 102 | ≥ 60 hedef | ince metin |

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
| Garnitür | `library-archive` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `game-pinball-neon` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Small_caps | Small caps (Wikipedia) — başlık biçimi |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond (Google Fonts) — serif aile |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime (Google Fonts) — toplam |

## AI brief

```text
Defter/muhasebe sayfası tasarla: small-caps başlıklar, ince çizgili tablo, mono toplamlar.

Stil: Small Caps Ledger (small-caps-ledger) · aile: Tipografi Denemeleri (232–241)
Token: --bg #fbfaf5 · --surface #fffef9 · --ink #15140f · --accent #6b2f2f · --line rgba(21,20,15,.16)
Yarıçap: 0px / 0px · Tipografi: EB Garamond / EB Garamond / Courier Prime
Zorunlu: Her satırda tarih ve tutar. · Toplamlar tabular ve sağa hizalı. · Small-caps yalnız başlıklarda.
Yasak: Renkli satır vurgusu. · Yuvarlak kart. · Üçten fazla rakam biçimi.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="small-caps-ledger"] {
  --bg: #fbfaf5; --bg-2: #f1efe6;
  --surface: #fffef9; --surface-2: #f6f4ec;
  --ink: #15140f; --ink-soft: #4c4940; --ink-faint: #7f7b6d;
  --accent: #6b2f2f; --accent-ink: #fdf7f7;
  --line: rgba(21,20,15,.16);
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "EB Garamond", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
