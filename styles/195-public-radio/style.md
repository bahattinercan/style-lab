# 195 · Public Radio

> **Bir cümlede:** Kamu radyosu: kâğıt zemin, mavi accent, program kuşağı tablosu ve ses süresi bilgisi.

| | |
|---|---|
| **Hissiyat** | güvenilir, sakin, "kuşak başlıyor" |
| **En iyi** | radyo, podcast ağı, program rehberi |
| **Kaçın** | hype müzik kampanyası |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Kültür & Yayın (192–201) · **Token** | `kit/tokens.css` → `[data-style="public-radio"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Public Radio, yayın akışını bir tarife gibi gösterir: ne zaman, kim, kaç dakika.

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
- **Kuşak tablosu:** saat aralığı mono, program adı serif.
- **Mavi accent:** yalnız canlı yayın etiketi.
- **Kâğıt zemin:** sıcak nötr; gradient yok.
- **Süre bilgisi:** dakika mono.
- **Tipografi:** Lora (display) + Inter (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#1b4f7a`; nötr skala `#fcfaf6` → `#15171b`.
- **Yarıçap:** `2px` / `6px`; Köşe 0–4px; kültür dili keskin kenar ve geniş boşlukla kurulur.

## Zorunlu kurallar

1. Her programda saat aralığı ve süre.
2. Canlı yayın etiketi metinle yazılır.
3. Dinleme bağlantısı tek satır.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#fcfaf6` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f1ece2` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f7f3ec` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#15171b` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#484d55` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7c8189` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#1b4f7a` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f6faff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(21,23,27,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.21:1** · `ink-soft/bg` **8.16:1** · `ink-faint/bg` **3.76:1 (dekoratif)** · `accent-ink/accent` **8.19:1**.
- Zemin kâğıt tonu; accent yalnız bağlantı ve program etiketi. Görselin kendi rengi baskın kalır.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Lora) | 58px (mobil 34px) | 400 | 1.04 | -0.02em |
| H2 | aynı | 32px | 600 | 1.16 | -0.015em |
| H3 | aynı | 22px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 17px | 400 | 1.68 | 0 |
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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Köşe 0–4px; kültür dili keskin kenar ve geniş boşlukla kurulur.

## Yasaklar

- Dalga formu animasyonu.
- Reklam bandı karmaşası.
- Yuvarlak 12px+ kart.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 8.59:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px çizgi, 20px; minimal |
| Fotoğraf | Sergi/mekân fotoğrafı, doğal ışık, geniş açı |
| İllüstrasyon | Yalnız arşiv/afiş çoğaltması |
| Doku | Kâğıt greni %2 (--grain: .02) |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-none` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 17.21:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.16:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.76:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 8.19:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 8.59:1 | ≥ 3 | accent halka |
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
| Sayfa dergi gibi dağılıyor | Çok fazla farklı hizalama | Tek asimetri kuralı seç ve koru |
| Başlık eziliyor | Satır aralığı fazla | line-height 1.04–1.1 aralığında tut |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `podcast-network` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `broadsheet-daily` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `game-pinball-neon` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Public_broadcasting | Public broadcasting (Wikipedia) — kuşak yayıncılığı |
| https://fonts.google.com/specimen/Lora | Lora (Google Fonts) — program adı serif |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — saat/süre |

## AI brief

```text
Kamu radyosu program rehberi tasarla: kâğıt zemin, serif program adları, mono saat sütunu, mavi canlı etiketi.

Stil: Public Radio (public-radio) · aile: Kültür & Yayın (192–201)
Token: --bg #fcfaf6 · --surface #ffffff · --ink #15171b · --accent #1b4f7a · --line rgba(21,23,27,.14)
Yarıçap: 2px / 6px · Tipografi: Lora / Inter / IBM Plex Mono
Zorunlu: Her programda saat aralığı ve süre. · Canlı yayın etiketi metinle yazılır. · Dinleme bağlantısı tek satır.
Yasak: Dalga formu animasyonu. · Reklam bandı karmaşası. · Yuvarlak 12px+ kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="public-radio"] {
  --bg: #fcfaf6; --bg-2: #f1ece2;
  --surface: #ffffff; --surface-2: #f7f3ec;
  --ink: #15171b; --ink-soft: #484d55; --ink-faint: #7c8189;
  --accent: #1b4f7a; --accent-ink: #f6faff;
  --line: rgba(21,23,27,.14);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00863c;
  --ok-ink: #ffffff;
  --warn: #b95800;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 6px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Lora", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
