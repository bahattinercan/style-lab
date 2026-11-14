# 213 · Skill Tree

> **Bir cümlede:** Yetenek ağacı: mor accent, düğüm haritası, kilit durumları ve mono ilerleme puanı.

| | |
|---|---|
| **Hissiyat** | haritalı, motive edici, "sıradaki düğüm" |
| **En iyi** | müfredat haritası, yetkinlik modeli, öğrenme yolu |
| **Kaçın** | kurumsal form |
| **Zorluk** | kolay · **Erişilebilirlik** | iyi |
| **Aile** | Öğrenme & Oyunlaştırma (212–221) · **Token** | `kit/tokens.css` → `[data-style="skill-tree"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Skill Tree, öğrenme yolunu haritalandırır: hangi düğüm, hangi ön koşul, ne kadar kaldı.

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
- **Düğüm haritası:** 3 sütun, bağlantı çizgileri 1px.
- **Kilit durumu:** kilitli düğüm %40 opak + metin.
- **Mor accent:** tamamlanan yol.
- **Puan:** mono, sağ üstte.
- **Tipografi:** Space Grotesk (display) + Inter (gövde) + JetBrains Mono (mono etiket).
- **Renk disiplini:** tek accent `#8f7bf0`; nötr skala `#0f1018` → `#eceaf7`.
- **Yarıçap:** `8px` / `10px`; Kart 14px, buton 12px; eğitim ürünlerinde sıcak yuvarlama kabul edilir, 20px üstü yasak.

## Zorunlu kurallar

1. Her düğümde ön koşul yazılır.
2. Kilitli/tamam durumu metinle.
3. Yol çizgileri dekoratif değil, ilişki gösterir.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0f1018` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#141520` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#191a28` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#222333` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#eceaf7` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#aca8c4` | ikincil metin, açıklama | — |
| `--ink-faint` | `#82809a` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#8f7bf0` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#0c0619` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(236,234,247,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **15.96:1** · `ink-soft/bg` **8.26:1** · `ink-faint/bg` **4.97:1 (dekoratif)** · `accent-ink/accent` **5.93:1**.
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
- Radius: `8px` (buton, input, chip), `10px` (kart, modal). Kart 14px, buton 12px; eğitim ürünlerinde sıcak yuvarlama kabul edilir, 20px üstü yasak.

## Yasaklar

- Animasyonlu ışıma.
- Beş durum rengi.
- Bağlantısız düğüm.
- Sonsuz seri baskısı.
- Kırmızı ile cezalandırma.
- Ses/animasyonlu kutlama.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 8px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 8px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 8px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 8px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 8px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 8px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 5.65:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 15.96:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.26:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.97:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 5.93:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 5.65:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 94.6 | ≥ 60 hedef | ince metin |

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
| Garnitür | `kanban-flow` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `regulatory-report` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `boutique-hotel` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Skill | Skill (Wikipedia) — yetkinlik modeli |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — başlık ailesi |
| https://fonts.google.com/specimen/JetBrains+Mono | JetBrains Mono (Google Fonts) — puan |

## AI brief

```text
Yetenek ağacı ekranı tasarla: koyu zemin, mor accent tamamlanan yolda, düğüm haritası, mono puan.

Stil: Skill Tree (skill-tree) · aile: Öğrenme & Oyunlaştırma (212–221)
Token: --bg #0f1018 · --surface #191a28 · --ink #eceaf7 · --accent #8f7bf0 · --line rgba(236,234,247,.14)
Yarıçap: 8px / 10px · Tipografi: Space Grotesk / Inter / JetBrains Mono
Zorunlu: Her düğümde ön koşul yazılır. · Kilitli/tamam durumu metinle. · Yol çizgileri dekoratif değil, ilişki gösterir.
Yasak: Animasyonlu ışıma. · Beş durum rengi. · Bağlantısız düğüm.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="skill-tree"] {
  --bg: #0f1018; --bg-2: #141520;
  --surface: #191a28; --surface-2: #222333;
  --ink: #eceaf7; --ink-soft: #aca8c4; --ink-faint: #82809a;
  --accent: #8f7bf0; --accent-ink: #0c0619;
  --line: rgba(236,234,247,.14);
  --radius: 8px; --radius-lg: 10px;
  --shadow: 0 2px 0 rgba(0,0,0,.12); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
