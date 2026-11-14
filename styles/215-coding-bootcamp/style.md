# 215 · Coding Bootcamp

> **Bir cümlede:** Kod bootcamp'i: terminal yeşili accent, müfredat haftaları, mono süre ve proje kartı.

| | |
|---|---|
| **Hissiyat** | yoğun, pratik, "12 hafta" |
| **En iyi** | bootcamp, teknik eğitim, müfredat tanıtımı |
| **Kaçın** | lüks vitrin |
| **Zorluk** | kolay · **Erişilebilirlik** | iyi |
| **Aile** | Öğrenme & Oyunlaştırma (212–221) · **Token** | `kit/tokens.css` → `[data-style="coding-bootcamp"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Coding Bootcamp, müfredatı haftalara böler ve her haftanın çıktısını gösterir.

### Ne değildir
- Çocuk uygulaması değildir; yetişkin öğrenmede de aynı dil geçerli.
- Oyunlaştırma her yere rozet koymak değildir.

### Nereden gelir
Ders planı, çalışma kitabı ve ilerleme çizelgesi geleneğinin dijital karşılığı.

### 3 saniyede tanıma testi
1. İlerleme göstergesi var mı?
2. Adım başına tek hedef mi?
3. Süre etiketi mono mu?

## Görsel imza
- **Hafta şeridi:** 12 hafta, 3 kolon, mono numara.
- **Yeşil accent:** tamamlanan ve CTA.
- **Proje kartı:** repo adı mono, süre etiketi.
- **Terminal dokusu:** 1px çizgi zemin, %5.
- **Tipografi:** Space Grotesk (display) + Inter (gövde) + JetBrains Mono (mono etiket).
- **Renk disiplini:** tek accent `#43d17a`; nötr skala `#0c1110` → `#e9f2ef`.
- **Yarıçap:** `4px` / `6px`; Kart 14px, buton 12px; eğitim ürünlerinde sıcak yuvarlama kabul edilir, 20px üstü yasak.

## Zorunlu kurallar

1. Her haftada konu ve çıktı.
2. Süre ve ön koşul yazılır.
3. Kod örnekleri mono, yatay kaydırma yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0c1110` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#111715` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#161d1b` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#1e2725` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#e9f2ef` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#a6b8b3` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7d8f8a` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#43d17a` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#04170c` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(233,242,239,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.69:1** · `ink-soft/bg` **9.18:1** · `ink-faint/bg` **5.59:1 (dekoratif)** · `accent-ink/accent` **9.39:1**.
- İlerleme ve başarı accent ile; hata semantik. Renk tek başına durum taşımaz, ikon/metin eklenir.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 50px (mobil 30px) | 700 | 1.06 | -0.02em |
| H2 | aynı | 30px | 600 | 1.2 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 15px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
| Buton | `--font-body` | 13px | 600 | 1 | 0 |

- Başlık 50px, gövde 16px. Ders başlıkları 20px/600; süre etiketi mono 11px.
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

- Ders kartları 3 kolon; ilerleme çubuğu 6px. Form 2 kolon.
- Bölüm dikey boşluğu masaüstü 72px, mobil 44px; kart içi padding 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Kartlar sıcak yüzey; gölge tek seviye. İlerleme çubuğu 6px, accent dolgu.
- Radius: `4px` (buton, input, chip), `6px` (kart, modal). Kart 14px, buton 12px; eğitim ürünlerinde sıcak yuvarlama kabul edilir, 20px üstü yasak.

## Yasaklar

- Animasyonlu terminal yazımı.
- On iki renkli hafta paleti.
- Yuvarlak 12px+ kart.
- Sonsuz seri baskısı.
- Kırmızı ile cezalandırma.
- Ses/animasyonlu kutlama.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 9.64:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 2px çizgi, 24px; yuvarlak uç |
| Fotoğraf | Öğrenme anı, doğal ışık; stok poz yok |
| İllüstrasyon | Basit geometrik, 3 renk |
| Doku | Nokta deseni %6 |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-grid` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Sayfada en fazla bir büyük görsel; gerisi metin ve veri.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Kurs landing | orta | Tek vaat + müfredat listesi | `shots/01-page.png` |
| Ders | yüksek | Sol içindekiler, sağ içerik 66ch | `shots/01-page.png` |
| Alıştırma | yüksek | Tek soru + 4 seçenek + geri bildirim | `shots/01-page.png` |
| İlerleme | orta | Haftalık ızgara + seri sayısı | `shots/01-page.png` |
| Sertifika | düşük | Tek kart, isim + tarih | `shots/01-page.png` |
| Topluluk | orta | Akış + yorum 68ch | `shots/01-page.png` |
| Ayarlar | orta | Bildirim ve dil | `shots/01-page.png` |
| Ödeme | düşük | Tek sütun 480px | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.69:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 9.18:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.59:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 9.39:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 9.64:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 97.6 | ≥ 60 hedef | ince metin |

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
| Rozet enflasyonu | Her eylemde ödül | Ödülü haftalık tek göstergeye indir |
| Ders uzuyor | Tek ekranda 5+ blok | Her ekran tek hedef |
| İlerleme belirsiz | Çubuk dekoratif | Yüzde + kalan adım metni ekle |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `skill-tree` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `lab-simulation` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `boutique-hotel` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `lookbook-editorial` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Coding_bootcamp | Coding bootcamp (Wikipedia) — müfredat yapısı |
| https://developer.mozilla.org/ | MDN Web Docs — kod örneği biçimi |
| https://fonts.google.com/specimen/JetBrains+Mono | JetBrains Mono (Google Fonts) — kod ve süre |

## AI brief

```text
Kod bootcamp müfredatı tasarla: koyu zemin, terminal yeşili accent, 12 hafta ızgarası, mono süre ve proje kartı.

Stil: Coding Bootcamp (coding-bootcamp) · aile: Öğrenme & Oyunlaştırma (212–221)
Token: --bg #0c1110 · --surface #161d1b · --ink #e9f2ef · --accent #43d17a · --line rgba(233,242,239,.14)
Yarıçap: 4px / 6px · Tipografi: Space Grotesk / Inter / JetBrains Mono
Zorunlu: Her haftada konu ve çıktı. · Süre ve ön koşul yazılır. · Kod örnekleri mono, yatay kaydırma yok.
Yasak: Animasyonlu terminal yazımı. · On iki renkli hafta paleti. · Yuvarlak 12px+ kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="coding-bootcamp"] {
  --bg: #0c1110; --bg-2: #111715;
  --surface: #161d1b; --surface-2: #1e2725;
  --ink: #e9f2ef; --ink-soft: #a6b8b3; --ink-faint: #7d8f8a;
  --accent: #43d17a; --accent-ink: #04170c;
  --line: rgba(233,242,239,.14);
  --radius: 4px; --radius-lg: 6px;
  --shadow: 0 2px 0 rgba(0,0,0,.12); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
