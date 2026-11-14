# 192 · Museum Exhibition

> **Bir cümlede:** Sergi sayfası: kemik zemin, ince hairline, tarih-sıra künyesi ve geniş kenar boşluğu.

| | |
|---|---|
| **Hissiyat** | sakin, arşivli, "salon 2 sağda" |
| **En iyi** | müze/galeri sergisi, koleksiyon, ziyaret bilgisi |
| **Kaçın** | kampanya afişi, neon |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Kültür & Yayın (192–201) · **Token** | `kit/tokens.css` → `[data-style="museum-exhibition"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Museum Exhibition, eseri öne alır: arayüz ince bir künye gibi davranır, görselle yarışmaz.

### Ne değildir
- Müze broşürü kopyası değildir; ekran okunurluğu korunur.
- Serif zorunlu değildir; boşluk ve ölçek belirleyicidir.

### Nereden gelir
Basılı program dergileri, sergi katalogları ve tiyatro afişlerinin tipografik hiyerarşisi.

### 3 saniyede tanıma testi
1. Başlık en az 3 satıra yayılıyor mu?
2. Kenar boşluğu 48px üstü mü?
3. Gölge yerine hairline mı kullanılmış?

## Görsel imza
- **Tarih-sıra künyesi:** mono, sol tarafta sabit sütun.
- **Hairline:** bölüm ayırıcı 1px, gölge yok.
- **Geniş kenar:** 56px, tek asimetri (7/5).
- **Koyu kırmızı accent:** yalnız sergi etiketi.
- **Tipografi:** Cormorant Garamond (display) + EB Garamond (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#7a2f2f`; nötr skala `#f7f5f0` → `#1a1917`.
- **Yarıçap:** `0px` / `2px`; Köşe 0–4px; kültür dili keskin kenar ve geniş boşlukla kurulur.

## Zorunlu kurallar

1. Tarih aralığı ve salon numarası her bölümde.
2. Metin 68ch, başlık geniş ölçekli.
3. Görsel altı künye zorunlu.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#f7f5f0` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#efece4` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#fffdfa` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f4f1ea` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#1a1917` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#514e48` | ikincil metin, açıklama | — |
| `--ink-faint` | `#847f76` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#7a2f2f` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#fdf7f7` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(26,25,23,.16)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.12:1** · `ink-soft/bg` **7.61:1** · `ink-faint/bg` **3.65:1 (dekoratif)** · `accent-ink/accent` **8.71:1**.
- Zemin kâğıt tonu; accent yalnız bağlantı ve program etiketi. Görselin kendi rengi baskın kalır.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 58px (mobil 34px) | 400 | 1.04 | -0.02em |
| H2 | aynı | 32px | 600 | 1.16 | -0.015em |
| H3 | aynı | 22px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (EB Garamond) | 17px | 400 | 1.68 | 0 |
| Küçük gövde | aynı | 15px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Buton | `--font-body` | 13px | 600 | 1 | 0 |

- Başlık geniş ölçekli ve sıkı satır aralıklı; gövde 17px, ölçü 68ch. Etiket mono ve uppercase.
- Ölçü: 68ch (okuma metni), kart metni en fazla 52ch.
- Başlıklar cümle düzeninde (uppercase yok); uppercase yalnız mono etiketlerde.

## Izgara ve boşluk

| Öğe | Değer |
| --- | --- |
| Kolon | 12 (içerik 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Geniş kenar boşluğu (56px), asimetrik 7/5 kolon. Bölüm başlıkları sol kolonda kalır.
- Bölüm dikey boşluğu masaüstü 84px, mobil 48px; kart içi padding 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Gölge yok; ayrım hairline ve zemin tonuyla. Görseller tam kenar ya da 4:3 çerçevede.
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Köşe 0–4px; kültür dili keskin kenar ve geniş boşlukla kurulur.

## Yasaklar

- Animasyonlu galeri.
- Beş renkli kategori.
- Yuvarlak köşe.
- Neon accent.
- Yuvarlak kart yığını.
- Otomatik carousel.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 9.09:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px çizgi, 20px; minimal |
| Fotoğraf | Sergi/mekân fotoğrafı, doğal ışık, geniş açı |
| İllüstrasyon | Yalnız arşiv/afiş çoğaltması |
| Doku | Kâğıt greni %2 (--grain: .02) |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-paper` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Sayfada en fazla bir büyük görsel; gerisi metin ve veri.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Program / etkinlik | orta | Tarih + mekân + tek CTA; mono etiket | `shots/01-page.png` |
| Arşiv / koleksiyon | yüksek | Izgara 3 kolon, her kartta yıl ve tür | `shots/01-page.png` |
| Detay / makale | düşük | 68ch ölçü, 17px gövde, alıntı bloğu | `shots/01-page.png` |
| Takvim | yüksek | Ay ızgarası, gün hücresi 44px | `shots/01-page.png` |
| Bilet / kayıt | orta | Tek sütun form + fiyat özeti | `shots/01-page.png` |
| Hakkında | düşük | Uzun metin + künye tablosu | `shots/01-page.png` |
| Sponsor / destek | orta | Logo şeridi tek satır | `shots/01-page.png` |
| İletişim | düşük | Adres + form, 2 kolon | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.12:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 7.61:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.65:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 8.71:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 9.09:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 98.5 | ≥ 60 hedef | ince metin |

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
| Sayfa dergi gibi dağılıyor | Çok fazla farklı hizalama | Tek asimetri kuralı seç ve koru |
| Başlık eziliyor | Satır aralığı fazla | line-height 1.04–1.1 aralığında tut |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `museum-thesis` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `library-archive` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `game-racing-neon` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://fonts.google.com/specimen/Cormorant+Garamond | Cormorant Garamond (Google Fonts) — başlık serif |
| https://en.wikipedia.org/wiki/Art_exhibition | Art exhibition (Wikipedia) — sergi künyesi |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — tarih/sıra |

## AI brief

```text
Müze sergi sayfası tasarla: kemik zemin, hairline ayırıcılar, mono tarih-sıra künyesi, geniş kenar boşluğu.

Stil: Museum Exhibition (museum-exhibition) · aile: Kültür & Yayın (192–201)
Token: --bg #f7f5f0 · --surface #fffdfa · --ink #1a1917 · --accent #7a2f2f · --line rgba(26,25,23,.16)
Yarıçap: 0px / 2px · Tipografi: Cormorant Garamond / EB Garamond / IBM Plex Mono
Zorunlu: Tarih aralığı ve salon numarası her bölümde. · Metin 68ch, başlık geniş ölçekli. · Görsel altı künye zorunlu.
Yasak: Animasyonlu galeri. · Beş renkli kategori. · Yuvarlak köşe.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="museum-exhibition"] {
  --bg: #f7f5f0; --bg-2: #efece4;
  --surface: #fffdfa; --surface-2: #f4f1ea;
  --ink: #1a1917; --ink-soft: #514e48; --ink-faint: #847f76;
  --accent: #7a2f2f; --accent-ink: #fdf7f7;
  --line: rgba(26,25,23,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
