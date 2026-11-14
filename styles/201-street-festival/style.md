# 201 · Street Festival

> **Bir cümlede:** Sokak festivali: doygun turuncu accent, kalın tipografi, sahne programı ve harita bloğu.

| | |
|---|---|
| **Hissiyat** | kalabalık, gündüz, "sahne 2'de başlıyor" |
| **En iyi** | sokak festivali, açık hava etkinliği, sahne programı |
| **Kaçın** | kurumsal yıllık rapor |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Kültür & Yayın (192–201) · **Token** | `kit/tokens.css` → `[data-style="street-festival"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Street Festival, kalabalıkta yön bulmayı sağlar: sahne, saat ve harita aynı sayfada.

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
- **Sahne programı:** saat mono, sahne adı kalın, 3 sütun.
- **Turuncu accent:** yalnız saat ve CTA.
- **Harita bloğu:** koyu zemin, açık çizgi.
- **Kalın başlık:** Archivo Black, iki satır sınırı.
- **Tipografi:** Archivo Black (display) + Space Grotesk (gövde) + Space Mono (mono etiket).
- **Renk disiplini:** tek accent `#a83a0d`; nötr skala `#fdf7ef` → `#1c1409`.
- **Yarıçap:** `2px` / `6px`; Köşe 0–4px; kültür dili keskin kenar ve geniş boşlukla kurulur.

## Zorunlu kurallar

1. Her etkinlikte sahne, saat ve süre.
2. Harita üzerinde 3 nokta (giriş, sahne, wc).
3. Fiyat/ücretsiz bilgisi açık.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#fdf7ef` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#fae9d6` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#fffdf9` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#fdeedd` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#1c1409` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#55402a` | ikincil metin, açıklama | — |
| `--ink-faint` | `#8a7055` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#a83a0d` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#fff6f1` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(28,20,9,.16)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.1:1** · `ink-soft/bg` **9.16:1** · `ink-faint/bg` **4.36:1 (dekoratif)** · `accent-ink/accent` **6.01:1**.
- Zemin kâğıt tonu; accent yalnız bağlantı ve program etiketi. Görselin kendi rengi baskın kalır.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 58px (mobil 34px) | 400 | 1.04 | -0.02em |
| H2 | aynı | 32px | 600 | 1.16 | -0.015em |
| H3 | aynı | 22px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Space Grotesk) | 17px | 400 | 1.68 | 0 |
| Küçük gövde | aynı | 15px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
| Buton | `--font-body` | 13px | 600 | 1 | 0 |

- Başlık geniş ölçekli ve sıkı satır aralıklı; gövde 17px, ölçü 68ch. Etiket mono ve uppercase.
- Ölçü: 68ch (okuma metni), kart metni en fazla 52ch.
- Başlıklar uppercase: `text-transform: uppercase` + pozitif tracking; gövde metni asla.

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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Köşe 0–4px; kültür dili keskin kenar ve geniş boşlukla kurulur.

## Yasaklar

- Animasyonlu konfeti.
- Altıdan fazla kategori rengi.
- Okunamayan ince yazı.
- Neon accent.
- Yuvarlak kart yığını.
- Otomatik carousel.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 2px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 2px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 2px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 2px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 2px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 2px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 2px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 6.31:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px çizgi, 20px; minimal |
| Fotoğraf | Sergi/mekân fotoğrafı, doğal ışık, geniş açı |
| İllüstrasyon | Yalnız arşiv/afiş çoğaltması |
| Doku | Kâğıt greni %2 (--grain: .02) |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-dots` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 17.1:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 9.16:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.36:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 6.01:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 6.31:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 100.5 | ≥ 60 hedef | ince metin |

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
| Garnitür | `carnival-festival` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `comic-bookstore` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `regulatory-report` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `access-audit` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Street_festival | Street festival (Wikipedia) — sahne/program yapısı |
| https://fonts.google.com/specimen/Archivo+Black | Archivo Black (Google Fonts) — kalın başlık |
| https://fonts.google.com/specimen/Space+Mono | Space Mono (Google Fonts) — saat |

## AI brief

```text
Sokak festivali sayfası tasarla: sıcak zemin, turuncu accent, kalın başlık, mono sahne programı ve harita bloğu.

Stil: Street Festival (street-festival) · aile: Kültür & Yayın (192–201)
Token: --bg #fdf7ef · --surface #fffdf9 · --ink #1c1409 · --accent #a83a0d · --line rgba(28,20,9,.16)
Yarıçap: 2px / 6px · Tipografi: Archivo Black / Space Grotesk / Space Mono
Zorunlu: Her etkinlikte sahne, saat ve süre. · Harita üzerinde 3 nokta (giriş, sahne, wc). · Fiyat/ücretsiz bilgisi açık.
Yasak: Animasyonlu konfeti. · Altıdan fazla kategori rengi. · Okunamayan ince yazı.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="street-festival"] {
  --bg: #fdf7ef; --bg-2: #fae9d6;
  --surface: #fffdf9; --surface-2: #fdeedd;
  --ink: #1c1409; --ink-soft: #55402a; --ink-faint: #8a7055;
  --accent: #a83a0d; --accent-ink: #fff6f1;
  --line: rgba(28,20,9,.16);
  --radius: 2px; --radius-lg: 6px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
