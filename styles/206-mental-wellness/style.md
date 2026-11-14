# 206 · Mental Wellness

> **Bir cümlede:** Zihin sağlığı uygulaması: sakin leylak, yumuşak geçiş, günlük check-in ve nefes ritmi bloğu.

| | |
|---|---|
| **Hissiyat** | sakin, yargısız, "bugün nasılsın" |
| **En iyi** | zihin sağlığı, meditasyon, günlük check-in |
| **Kaçın** | rekabetçi lig, kırmızı uyarı dili |
| **Zorluk** | orta · **Erişilebilirlik** | yüksek — AA üstü, form hataları programatik |
| **Aile** | Sağlık & Bilim (202–211) · **Token** | `kit/tokens.css` → `[data-style="mental-wellness"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Mental Wellness, arayüzü yavaşlatır: az seçenek, yumuşak dil, tek adım.

### Ne değildir
- Hastane broşürü değildir; form ve durum akışı belirleyicidir.
- Yeşil zorunlu değildir; kontrast ve sakin ritim belirleyicidir.

### Nereden gelir
Klinik formlar, hasta bilgilendirme materyalleri ve sağlık uygulamalarının erişilebilirlik pratiği.

### 3 saniyede tanıma testi
1. Gövde 16px ve üstü mü?
2. Hata mesajı alanın altında mı?
3. Odak halkası görünür mü?

## Görsel imza
- **Günlük check-in:** 5 ölçekli, tek satır, 48px hedef.
- **Leylak accent:** yalnız seçili ruh hali ve CTA.
- **Nefes bloğu:** statik halka + süre metni.
- **Yumuşak yüzey:** 14/20px, düşük gölge.
- **Tipografi:** Jost (display) + Nunito (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#5b3f8f`; nötr skala `#faf8fd` → `#171322`.
- **Yarıçap:** `14px` / `20px`; Köşe 8–12px; form alanları 10px. Keskin 0px köşe klinik dilde sert kalır.

## Zorunlu kurallar

1. Duygu seçimi her zaman metin etiketli.
2. Gizlilik notu görünür.
3. Acil durum bağlantısı alt bilgi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#faf8fd` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f0ebf7` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f5f1fa` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#171322` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#4c4459` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7f768c` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#5b3f8f` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#faf7ff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(23,19,34,.12)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.27:1** · `ink-soft/bg` **8.74:1** · `ink-faint/bg` **4.09:1 (dekoratif)** · `accent-ink/accent` **7.76:1**.
- Güven rengi accent; uyarı ve hata semantik token'lardan gelir. Kırmızı yalnız gerçek risk için.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Jost) | 48px (mobil 30px) | 500 | 1.08 | -0.02em |
| H2 | aynı | 28px | 600 | 1.2 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Nunito) | 16px | 400 | 1.65 | 0 |
| Küçük gövde | aynı | 15px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Buton | `--font-body` | 13px | 600 | 1 | 0 |

- Gövde 16px/1.65 — okuma yorgunluğu düşük tutulur. Etiketler 13px, form yardım metni 12px.
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

- Form 2 kolon (mobil 1), içerik 8 kolon. Kart içi 20px; satır aralığı 44px.
- Bölüm dikey boşluğu masaüstü 72px, mobil 44px; kart içi padding 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Kart yüzeyi opak; yumuşak gölge tek seviye. Odak halkası her yüzeyde 3:1 üzeri.
- Radius: `14px` (buton, input, chip), `20px` (kart, modal). Köşe 8–12px; form alanları 10px. Keskin 0px köşe klinik dilde sert kalır.

## Yasaklar

- Animasyonlu nefes halkası (v6: statik).
- Suçlayıcı dil.
- Seri/streak baskısı.
- Kırmızıyı dekoratif kullanmak.
- Sağlık iddiası taşıyan illüstrasyon.
- Otomatik odak değiştirme.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 14px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 14px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 14px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 14px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 14px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 14px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 14px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 8.23:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1.5px çizgi, 20px; tıbbi sembol yerine nötr geometri |
| Fotoğraf | Doğal ışık, insan odaklı, stetoskop klişesi yok |
| İllüstrasyon | Tek çizgi, sakin; anatomik detay yok |
| Doku | Yok |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-blob` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Sayfada en fazla bir büyük görsel; gerisi metin ve veri.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Randevu / landing | orta | Tek mesaj + tek CTA + güven satırı | `shots/01-page.png` |
| Form / intake | orta | 2 kolon, etiket üstte, hata altta | `shots/01-page.png` |
| Sonuç / ölçüm | yüksek | Tek büyük sayı + referans aralığı | `shots/01-page.png` |
| Plan / tedavi | orta | Zaman çizelgesi + durum | `shots/01-page.png` |
| Mesaj / destek | orta | Balon 68ch altı, zaman etiketi mono | `shots/01-page.png` |
| Profil | düşük | Özet kartı + izinler | `shots/01-page.png` |
| Bilgi merkezi | düşük | Makale listesi, 17px gövde | `shots/01-page.png` |
| Acil durum | yüksek | Tek kırmızı blok + tel numarası | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.27:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.74:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.09:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 7.76:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 8.23:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 101.2 | ≥ 60 hedef | ince metin |

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
| Form korkutuyor | Tek ekranda 8+ alan | Adım başına en fazla 4 alan |
| Uyarı görünmüyor | Yalnız renk kullanılmış | İkon + metin ekle |
| Metin yoruyor | Satır uzunluğu 90ch | Ölçüyü 66ch'e indir |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `physiotherapy` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `ethereal` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `game-esports-league` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `access-audit` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Mental_health | Mental health (Wikipedia) — dil ve çerçeve |
| https://fonts.google.com/specimen/Jost | Jost (Google Fonts) — başlık ailesi |
| https://fonts.google.com/specimen/Nunito | Nunito (Google Fonts) — gövde ailesi |

## AI brief

```text
Zihin sağlığı check-in ekranı tasarla: sakin leylak, yuvarlak kart, 5 ölçekli duygu seçimi, gizlilik notu.

Stil: Mental Wellness (mental-wellness) · aile: Sağlık & Bilim (202–211)
Token: --bg #faf8fd · --surface #ffffff · --ink #171322 · --accent #5b3f8f · --line rgba(23,19,34,.12)
Yarıçap: 14px / 20px · Tipografi: Jost / Nunito / IBM Plex Mono
Zorunlu: Duygu seçimi her zaman metin etiketli. · Gizlilik notu görünür. · Acil durum bağlantısı alt bilgi.
Yasak: Animasyonlu nefes halkası (v6: statik). · Suçlayıcı dil. · Seri/streak baskısı.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="mental-wellness"] {
  --bg: #faf8fd; --bg-2: #f0ebf7;
  --surface: #ffffff; --surface-2: #f5f1fa;
  --ink: #171322; --ink-soft: #4c4459; --ink-faint: #7f768c;
  --accent: #5b3f8f; --accent-ink: #faf7ff;
  --line: rgba(23,19,34,.12);
  --radius: 14px; --radius-lg: 20px;
  --shadow: 0 1px 3px rgba(0,0,0,.10); --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
