# 204 · Pharmacy Labels

> **Bir cümlede:** İlaç etiketi okunurluğu: yüksek kontrast, büyük punto, doz tablosu ve net uyarı şeridi.

| | |
|---|---|
| **Hissiyat** | açık, güvenli, "günde iki kez" |
| **En iyi** | ilaç kullanım bilgisi, doz takvimi, hasta eğitimi |
| **Kaçın** | dekoratif lüks tema |
| **Zorluk** | orta · **Erişilebilirlik** | yüksek — AA üstü, form hataları programatik |
| **Aile** | Sağlık & Bilim (202–211) · **Token** | `kit/tokens.css` → `[data-style="pharmacy-labels"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Pharmacy Labels, okunurluğu tek ölçüt yapar: punto büyük, kontrast yüksek, uyarı net.

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
- **Büyük punto:** gövde 17px, doz 24px; punto düşürülmez.
- **Kırmızı uyarı şeridi:** yalnız kritik uyarı.
- **Doz tablosu:** sabah/öğle/akşam mono.
- **Maksimum kontrast:** ink 18:1 üstü.
- **Tipografi:** Inter (display) + Inter (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#8a1b1b`; nötr skala `#ffffff` → `#0f1317`.
- **Yarıçap:** `4px` / `6px`; Köşe 8–12px; form alanları 10px. Keskin 0px köşe klinik dilde sert kalır.

## Zorunlu kurallar

1. Doz ve sıklık 17px altına inmez.
2. Uyarı şeridi metinle ve ikonla.
3. Okunurluk için satır uzunluğu 60ch.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#ffffff` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f2f4f6` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f6f8fa` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#0f1317` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#414a53` | ikincil metin, açıklama | — |
| `--ink-faint` | `#71797f` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#8a1b1b` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#fff7f7` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(15,19,23,.18)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **18.65:1** · `ink-soft/bg` **9.02:1** · `ink-faint/bg` **4.43:1 (dekoratif)** · `accent-ink/accent` **8.83:1**.
- Güven rengi accent; uyarı ve hata semantik token'lardan gelir. Kırmızı yalnız gerçek risk için.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 48px (mobil 30px) | 500 | 1.08 | -0.02em |
| H2 | aynı | 28px | 600 | 1.2 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 16px | 400 | 1.65 | 0 |
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
- Radius: `4px` (buton, input, chip), `6px` (kart, modal). Köşe 8–12px; form alanları 10px. Keskin 0px köşe klinik dilde sert kalır.

## Yasaklar

- Dekoratif görsel.
- Renkli gradyan.
- Küçük punto ile yasal metin.
- Kırmızıyı dekoratif kullanmak.
- Sağlık iddiası taşıyan illüstrasyon.
- Otomatik odak değiştirme.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 9.32:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1.5px çizgi, 20px; tıbbi sembol yerine nötr geometri |
| Fotoğraf | Doğal ışık, insan odaklı, stetoskop klişesi yok |
| İllüstrasyon | Tek çizgi, sakin; anatomik detay yok |
| Doku | Yok |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-none` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 18.65:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 9.02:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.43:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 8.83:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 9.32:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 105.2 | ≥ 60 hedef | ince metin |

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
| Garnitür | `pharmacy-store` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `nutrition-plan` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `game-horror-occult` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `synthwave` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Prescription_drug | Prescription drug (Wikipedia) — doz/kullanım alanları |
| https://www.w3.org/TR/WCAG22/ | WCAG 2.2 — kontrast ve punto ölçütleri |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — doz tablosu |

## AI brief

```text
İlaç kullanım bilgisi sayfası tasarla: beyaz zemin, 17px gövde, mono doz tablosu, kırmızı uyarı şeridi.

Stil: Pharmacy Labels (pharmacy-labels) · aile: Sağlık & Bilim (202–211)
Token: --bg #ffffff · --surface #ffffff · --ink #0f1317 · --accent #8a1b1b · --line rgba(15,19,23,.18)
Yarıçap: 4px / 6px · Tipografi: Inter / Inter / IBM Plex Mono
Zorunlu: Doz ve sıklık 17px altına inmez. · Uyarı şeridi metinle ve ikonla. · Okunurluk için satır uzunluğu 60ch.
Yasak: Dekoratif görsel. · Renkli gradyan. · Küçük punto ile yasal metin.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="pharmacy-labels"] {
  --bg: #ffffff; --bg-2: #f2f4f6;
  --surface: #ffffff; --surface-2: #f6f8fa;
  --ink: #0f1317; --ink-soft: #414a53; --ink-faint: #71797f;
  --accent: #8a1b1b; --accent-ink: #fff7f7;
  --line: rgba(15,19,23,.18);
  --radius: 4px; --radius-lg: 6px;
  --shadow: 0 1px 3px rgba(0,0,0,.10); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
