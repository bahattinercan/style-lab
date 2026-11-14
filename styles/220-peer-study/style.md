# 220 · Peer Study

> **Bir cümlede:** Akran çalışma grubu: sıcak gri, mor accent, oturum kartları ve mono katılımcı sayısı.

| | |
|---|---|
| **Hissiyat** | birlikte, esnek, "bu akşam 20:00" |
| **En iyi** | çalışma grubu, akran öğrenmesi, oturum planı |
| **Kaçın** | kurumsal portal |
| **Zorluk** | kolay · **Erişilebilirlik** | iyi |
| **Aile** | Öğrenme & Oyunlaştırma (212–221) · **Token** | `kit/tokens.css` → `[data-style="peer-study"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Peer Study, ortak çalışmayı planlar: ne zaman, kiminle, kaç kişi.

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
- **Oturum kartı:** konu, saat, katılımcı sayısı.
- **Saat:** mono, gün adı kısa.
- **Mor accent:** katıl ve seçili oturum.
- **Sıcak gri:** nötr zemin, tek accent.
- **Tipografi:** Space Grotesk (display) + Inter (gövde) + Space Mono (mono etiket).
- **Renk disiplini:** tek accent `#5a3f8a`; nötr skala `#faf9fc` → `#17151e`.
- **Yarıçap:** `10px` / `14px`; Kart 14px, buton 12px; eğitim ürünlerinde sıcak yuvarlama kabul edilir, 20px üstü yasak.

## Zorunlu kurallar

1. Her oturumda konu, saat ve kontenjan.
2. Katılım tek tık; durum metinle.
3. Saat dilimi yazılır.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#faf9fc` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f0eef5` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f5f3f9` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#17151e` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#4d4859` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7f788c` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#5a3f8a` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#faf7ff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(23,21,30,.12)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.22:1** · `ink-soft/bg` **8.39:1** · `ink-faint/bg` **4.03:1 (dekoratif)** · `accent-ink/accent` **7.89:1**.
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
| Etiket | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `10px` (buton, input, chip), `14px` (kart, modal). Kart 14px, buton 12px; eğitim ürünlerinde sıcak yuvarlama kabul edilir, 20px üstü yasak.

## Yasaklar

- Animasyonlu avatar yığını.
- Beş renkli konu paleti.
- Yuvarlak 20px+ kart.
- Sonsuz seri baskısı.
- Kırmızı ile cezalandırma.
- Ses/animasyonlu kutlama.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 10px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 10px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 10px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 10px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 10px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 10px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 10px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 8.36:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 2px çizgi, 24px; yuvarlak uç |
| Fotoğraf | Öğrenme anı, doğal ışık; stok poz yok |
| İllüstrasyon | Basit geometrik, 3 renk |
| Doku | Nokta deseni %6 |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-dots` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 17.22:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.39:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.03:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 7.89:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 8.36:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 101.5 | ≥ 60 hedef | ince metin |

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
| Garnitür | `language-app` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `podcast-network` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `access-audit` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `regulatory-report` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Peer_learning | Peer learning (Wikipedia) — oturum modeli |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — başlık ailesi |
| https://fonts.google.com/specimen/Space+Mono | Space Mono (Google Fonts) — saat/kontenjan |

## AI brief

```text
Akran çalışma grubu sayfası tasarla: sıcak gri zemin, mor accent, oturum kartları, mono saat ve kontenjan.

Stil: Peer Study (peer-study) · aile: Öğrenme & Oyunlaştırma (212–221)
Token: --bg #faf9fc · --surface #ffffff · --ink #17151e · --accent #5a3f8a · --line rgba(23,21,30,.12)
Yarıçap: 10px / 14px · Tipografi: Space Grotesk / Inter / Space Mono
Zorunlu: Her oturumda konu, saat ve kontenjan. · Katılım tek tık; durum metinle. · Saat dilimi yazılır.
Yasak: Animasyonlu avatar yığını. · Beş renkli konu paleti. · Yuvarlak 20px+ kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="peer-study"] {
  --bg: #faf9fc; --bg-2: #f0eef5;
  --surface: #ffffff; --surface-2: #f5f3f9;
  --ink: #17151e; --ink-soft: #4d4859; --ink-faint: #7f788c;
  --accent: #5a3f8a; --accent-ink: #faf7ff;
  --line: rgba(23,21,30,.12);
  --radius: 10px; --radius-lg: 14px;
  --shadow: 0 2px 0 rgba(0,0,0,.12); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
