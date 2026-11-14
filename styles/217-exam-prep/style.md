# 217 · Exam Prep

> **Bir cümlede:** Sınav hazırlığı: gri-mavi düzen, soru sayacı, konu ağırlığı ve mono süre planı.

| | |
|---|---|
| **Hissiyat** | odaklı, ölçülü, "kaç soru kaldı" |
| **En iyi** | sınav hazırlığı, soru bankası, deneme takibi |
| **Kaçın** | eğlence uygulaması |
| **Zorluk** | kolay · **Erişilebilirlik** | iyi |
| **Aile** | Öğrenme & Oyunlaştırma (212–221) · **Token** | `kit/tokens.css` → `[data-style="exam-prep"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Exam Prep, çalışmayı ölçülebilir kılar: konu, soru, süre ve sonuç.

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
- **Soru sayacı:** mono, sağ üstte sabit.
- **Konu ağırlığı:** yatay çubuk, yüzde metni.
- **Süre planı:** dakika bazlı tablo.
- **Nötr palet:** accent yalnız doğru/ilerleme.
- **Tipografi:** Inter (display) + Inter (gövde) + JetBrains Mono (mono etiket).
- **Renk disiplini:** tek accent `#234a7a`; nötr skala `#f9fafc` → `#12161c`.
- **Yarıçap:** `6px` / `10px`; Kart 14px, buton 12px; eğitim ürünlerinde sıcak yuvarlama kabul edilir, 20px üstü yasak.

## Zorunlu kurallar

1. Her konuda soru sayısı ve hedef süre.
2. Doğru/yanlış yüzdeleri tabular.
3. Deneme sonucu tarihli.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#f9fafc` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#edf0f5` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f4f6fa` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#12161c` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#49515c` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7b838f` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#234a7a` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f7faff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(18,22,28,.12)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.38:1** · `ink-soft/bg` **7.69:1** · `ink-faint/bg` **3.67:1 (dekoratif)** · `accent-ink/accent` **8.61:1**.
- İlerleme ve başarı accent ile; hata semantik. Renk tek başına durum taşımaz, ikon/metin eklenir.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 50px (mobil 30px) | 700 | 1.06 | -0.02em |
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
- Radius: `6px` (buton, input, chip), `10px` (kart, modal). Kart 14px, buton 12px; eğitim ürünlerinde sıcak yuvarlama kabul edilir, 20px üstü yasak.

## Yasaklar

- Animasyonlu sayaç.
- Kırmızı utanç grafiği.
- Sekiz renkli konu paleti.
- Sonsuz seri baskısı.
- Kırmızı ile cezalandırma.
- Ses/animasyonlu kutlama.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 6px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 6px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 6px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 6px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 6px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 6px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 6px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 9.01:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 2px çizgi, 24px; yuvarlak uç |
| Fotoğraf | Öğrenme anı, doğal ışık; stok poz yok |
| İllüstrasyon | Basit geometrik, 3 renk |
| Doku | Nokta deseni %6 |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-none` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 17.38:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 7.69:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.67:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 8.61:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 9.01:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 101.8 | ≥ 60 hedef | ince metin |

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
| Garnitür | `university-portal` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `coding-bootcamp` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `carnival-festival` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Test_preparation | Test preparation (Wikipedia) — konu/soru planı |
| https://fonts.google.com/specimen/Inter | Inter (Google Fonts) — gövde ailesi |
| https://fonts.google.com/specimen/JetBrains+Mono | JetBrains Mono (Google Fonts) — sayaç |

## AI brief

```text
Sınav hazırlık paneli tasarla: nötr gri-mavi, mono soru sayacı, konu ağırlık çubukları, süre tablosu.

Stil: Exam Prep (exam-prep) · aile: Öğrenme & Oyunlaştırma (212–221)
Token: --bg #f9fafc · --surface #ffffff · --ink #12161c · --accent #234a7a · --line rgba(18,22,28,.12)
Yarıçap: 6px / 10px · Tipografi: Inter / Inter / JetBrains Mono
Zorunlu: Her konuda soru sayısı ve hedef süre. · Doğru/yanlış yüzdeleri tabular. · Deneme sonucu tarihli.
Yasak: Animasyonlu sayaç. · Kırmızı utanç grafiği. · Sekiz renkli konu paleti.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="exam-prep"] {
  --bg: #f9fafc; --bg-2: #edf0f5;
  --surface: #ffffff; --surface-2: #f4f6fa;
  --ink: #12161c; --ink-soft: #49515c; --ink-faint: #7b838f;
  --accent: #234a7a; --accent-ink: #f7faff;
  --line: rgba(18,22,28,.12);
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 2px 0 rgba(0,0,0,.12); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
