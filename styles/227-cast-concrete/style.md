# 227 · Cast Concrete

> **Bir cümlede:** Beton döküm: gri skala, kalıp izi, keskin blok ve mono dayanım sınıfı.

| | |
|---|---|
| **Hissiyat** | ağır, yapısal, "C30/37" |
| **En iyi** | mimarlık, yapı malzemesi, inşaat portfolyosu |
| **Kaçın** | çocuk uygulaması |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Materyal & Zanaat (222–231) · **Token** | `kit/tokens.css` → `[data-style="cast-concrete"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Cast Concrete, yapıyı rakamla anlatır: sınıf, ölçü, tolerans.

### Ne değildir
- Karton doku eklemek tek başına stil değildir.
- Skeuomorphism değildir; doku var, taklit nesne yok.

### Nereden gelir
Letterpress, mürekkep, kâğıt ve metal baskı atölyelerinin malzeme bilgisi.

### 3 saniyede tanıma testi
1. Doku %5 altında mı?
2. Başlık ince ve sessiz mi?
3. Kenar keskin mi?

## Görsel imza
- **Kalıp izi:** kart üstünde 1px yatay çizgi dizisi.
- **Kalın blok:** kartlar arasında 2px boşluk, gölge yok.
- **Gri skala:** accent koyu gri-mavi, dekoratif renk yok.
- **Dayanım:** mono `C30/37`.
- **Tipografi:** Archivo Black (display) + Inter (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#3d4b57`; nötr skala `#eef0f1` → `#14171a`.
- **Yarıçap:** `0px` / `0px`; Köşe 0–6px; malzeme kenarı keskin kalır, yumuşak yuvarlatma dokuyu zayıflatır.

## Zorunlu kurallar

1. Her blokta ölçü ve dayanım sınıfı.
2. Kenar 0px, gölge yok.
3. Görsel S/B veya düşük doygunluk.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#eef0f1` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#e2e5e7` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#f8f9fa` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#eaedee` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#14171a` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#464d53` | ikincil metin, açıklama | — |
| `--ink-faint` | `#767d84` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#3d4b57` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f7fafc` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(20,23,26,.18)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **15.74:1** · `ink-soft/bg` **7.51:1** · `ink-faint/bg` **3.65:1 (dekoratif)** · `accent-ink/accent` **8.55:1**.
- Malzeme rengi zemin: accent yalnız damga/etiket. Dokuyu renkle değil grain ve kenarla kur.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 52px (mobil 32px) | 400 | 1.08 | -0.02em |
| H2 | aynı | 28px | 600 | 1.2 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 14px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Buton | `--font-body` | 12px | 600 | 1 | 0 |

- Başlık 52px/400 — dokunun yanında sessiz kalır. Etiketler mono, geniş tracking.
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

- Kart aralığı 14px; malzeme fotoğrafı tam kenara taşabilir, metin taşamaz.
- Bölüm dikey boşluğu masaüstü 72px, mobil 44px; kart içi padding 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Gölge tek seviye; malzeme hissi grain + kenar ile. Cam/blur yok.
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Köşe 0–6px; malzeme kenarı keskin kalır, yumuşak yuvarlatma dokuyu zayıflatır.

## Yasaklar

- Renkli degrade.
- Yuvarlak köşe.
- Süs illüstrasyon.
- Taklit nesne (düğme gibi görünen taş).
- Yüksek kontrastlı desen üstünde metin.
- Sekizden fazla doku örneği.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 8.5:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px çizgi, 20px; baskı işareti gibi |
| Fotoğraf | Makro doku: kâğıt, metal, kumaş; yumuşak yan ışık |
| İllüstrasyon | Yalnız doku örneği |
| Doku | Malzeme greni (--grain: .04) |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-grid` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Sayfada en fazla bir büyük görsel; gerisi metin ve veri.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Vitrin | orta | Makro doku + tek başlık | `shots/01-page.png` |
| Numune / swatch | yüksek | Izgara 4 kolon, etiket mono | `shots/01-page.png` |
| Detay | orta | Doku + künye tablosu | `shots/01-page.png` |
| Süreç | orta | 3 adım, numaralı | `shots/01-page.png` |
| Sipariş / talep | düşük | Form 2 kolon | `shots/01-page.png` |
| Arşiv | yüksek | Yıl + malzeme etiketi | `shots/01-page.png` |
| Atölye | düşük | Uzun metin + fotoğraf | `shots/01-page.png` |
| İletişim | düşük | Adres + form | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.74:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 7.51:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.65:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 8.55:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 8.5:1 | ≥ 3 | accent halka |
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
| Doku gürültü oluyor | Grain %10 üstü | %4'e indir, yalnız büyük yüzeyde kullan |
| Başlık eziliyor | Doku metnin arkasında | Metin bloğunu opak yüzeye al |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `concrete-monolith` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `raw-steel` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `kids-classroom` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Concrete | Concrete (Wikipedia) — dayanım sınıfı |
| https://fonts.google.com/specimen/Archivo+Black | Archivo Black (Google Fonts) — blok başlık |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — sınıf/ölçü |

## AI brief

```text
Beton malzeme sayfası tasarla: gri skala, keskin blok, kalıp izi çizgisi, mono dayanım sınıfı.

Stil: Cast Concrete (cast-concrete) · aile: Materyal & Zanaat (222–231)
Token: --bg #eef0f1 · --surface #f8f9fa · --ink #14171a · --accent #3d4b57 · --line rgba(20,23,26,.18)
Yarıçap: 0px / 0px · Tipografi: Archivo Black / Inter / IBM Plex Mono
Zorunlu: Her blokta ölçü ve dayanım sınıfı. · Kenar 0px, gölge yok. · Görsel S/B veya düşük doygunluk.
Yasak: Renkli degrade. · Yuvarlak köşe. · Süs illüstrasyon.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="cast-concrete"] {
  --bg: #eef0f1; --bg-2: #e2e5e7;
  --surface: #f8f9fa; --surface-2: #eaedee;
  --ink: #14171a; --ink-soft: #464d53; --ink-faint: #767d84;
  --accent: #3d4b57; --accent-ink: #f7fafc;
  --line: rgba(20,23,26,.18);
  --danger: #d3261a;
  --danger-ink: #ffffff;
  --ok: #007e35;
  --ok-ink: #ffffff;
  --warn: #b25100;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 0px;
  --shadow: 0 1px 2px rgba(0,0,0,.16); --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
