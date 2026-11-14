# 234 · Blackletter Modern

> **Bir cümlede:** Modern gotik: ağır serif başlık, gece zemin, tek kan rengi ve sade gövde.

| | |
|---|---|
| **Hissiyat** | kadim, güçlü, "mühür" |
| **En iyi** | etkinlik/kulüp kimliği, bira/viski etiketi, kültür programı |
| **Kaçın** | çocuk eğitimi |
| **Zorluk** | zor · **Erişilebilirlik** | orta |
| **Aile** | Tipografi Denemeleri (232–241) · **Token** | `kit/tokens.css` → `[data-style="blackletter-modern"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Blackletter Modern, gotik harfin ağırlığını modern ölçekle dengeler: başlık ağır, gövde sakin.

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
- **Ağır serif başlık:** Cinzel 54px, harf aralığı geniş.
- **Tek kan rengi:** accent yalnız mühür ve CTA.
- **Sade gövde:** EB Garamond 16px.
- **Kenar yok:** hairline dışında çizgi yok.
- **Tipografi:** Cinzel (display) + EB Garamond (gövde) + Courier Prime (mono etiket).
- **Renk disiplini:** tek accent `#c43a2f`; nötr skala `#100e0c` → `#f2ece4`.
- **Yarıçap:** `0px` / `2px`; Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Zorunlu kurallar

1. Gotik başlık yalnız H1/H2.
2. Gövde serif ve okunur; süslenmez.
3. Accent tek.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#100e0c` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#15120f` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#1b1714` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#241f1b` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#f2ece4` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#bdb2a5` | ikincil metin, açıklama | — |
| `--ink-faint` | `#8d8377` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#c43a2f` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#fdf6f4` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(242,236,228,.15)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.41:1** · `ink-soft/bg` **9.24:1** · `ink-faint/bg` **5.18:1 (dekoratif)** · `accent-ink/accent` **4.92:1**.
- İki renk yeter: zemin ve mürekkep. Accent yalnız bağlantı ve vurgu kelimesi.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 72px (mobil 38px) | 700 | 0.98 | -0.035em |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Köşe 0px — tipografik denemede geometri metne hizmet eder.

## Yasaklar

- Gerçek blackletter font (okunmaz).
- Dört renkli ortaçağ paleti.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 3.66:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px çizgi, 16px; metinle aynı ağırlıkta |
| Fotoğraf | Yalnız gerektiğinde; metni destekler, yarışmaz |
| İllüstrasyon | Tipografik işaret olarak kullanılabilir |
| Doku | Yok |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-paper` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 16.41:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 9.24:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.18:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 4.92:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 3.66:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 95.6 | ≥ 60 hedef | ince metin |

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
| Garnitür | `victorian` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `theatre-season` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `minimalism` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `kids-classroom` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Blackletter | Blackletter (Wikipedia) — harf geleneği |
| https://fonts.google.com/specimen/Cinzel | Cinzel (Google Fonts) — gotik esinli başlık |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond (Google Fonts) — gövde |

## AI brief

```text
Modern gotik kimlik sayfası tasarla: gece zemin, ağır serif başlık, tek kan rengi, sade gövde.

Stil: Blackletter Modern (blackletter-modern) · aile: Tipografi Denemeleri (232–241)
Token: --bg #100e0c · --surface #1b1714 · --ink #f2ece4 · --accent #c43a2f · --line rgba(242,236,228,.15)
Yarıçap: 0px / 2px · Tipografi: Cinzel / EB Garamond / Courier Prime
Zorunlu: Gotik başlık yalnız H1/H2. · Gövde serif ve okunur; süslenmez. · Accent tek.
Yasak: Gerçek blackletter font (okunmaz). · Dört renkli ortaçağ paleti. · Yuvarlak kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="blackletter-modern"] {
  --bg: #100e0c; --bg-2: #15120f;
  --surface: #1b1714; --surface-2: #241f1b;
  --ink: #f2ece4; --ink-soft: #bdb2a5; --ink-faint: #8d8377;
  --accent: #c43a2f; --accent-ink: #fdf6f4;
  --line: rgba(242,236,228,.15);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
