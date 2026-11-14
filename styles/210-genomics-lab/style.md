# 210 · Genomics Lab

> **Bir cümlede:** Genom laboratuvarı: koyu mor zemin, turkuaz accent, dizileme tablosu ve mono baz etiketleri.

| | |
|---|---|
| **Hissiyat** | ileri teknoloji, hassas, "ACGT" |
| **En iyi** | genomik/biyoinformatik, dizileme paneli, örnek takibi |
| **Kaçın** | tüketici vitrini |
| **Zorluk** | orta · **Erişilebilirlik** | yüksek — AA üstü, form hataları programatik |
| **Aile** | Sağlık & Bilim (202–211) · **Token** | `kit/tokens.css` → `[data-style="genomics-lab"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Genomics Lab, veriyi süslemeden gösterir: baz, kalite, örnek ve tarih.

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
- **Baz şeridi:** ACGT harfleri mono, renk yok.
- **Örnek tablosu:** kimlik, kalite, tarih mono.
- **Turkuaz accent:** yalnız seçili örnek.
- **Koyu ızgara:** 24px arka plan çizgisi %6.
- **Tipografi:** IBM Plex Mono (display) + Inter (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#45d6c8`; nötr skala `#0b0d14` → `#e8ecf7`.
- **Yarıçap:** `2px` / `4px`; Köşe 8–12px; form alanları 10px. Keskin 0px köşe klinik dilde sert kalır.

## Zorunlu kurallar

1. Kalite metrikleri iki ondalık ve birimli.
2. Örnek kimlikleri mono ve tekil.
3. Renk körlüğü için baz renklendirmesi yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0b0d14` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#10131c` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#141824` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#1c2130` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#e8ecf7` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#a4aec4` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7a859c` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#45d6c8` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#04171a` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(232,236,247,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.43:1** · `ink-soft/bg` **8.72:1** · `ink-faint/bg` **5.23:1 (dekoratif)** · `accent-ink/accent` **10.24:1**.
- Güven rengi accent; uyarı ve hata semantik token'lardan gelir. Kırmızı yalnız gerçek risk için.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (IBM Plex Mono) | 48px (mobil 30px) | 500 | 1.08 | -0.02em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Köşe 8–12px; form alanları 10px. Keskin 0px köşe klinik dilde sert kalır.

## Yasaklar

- Sarmal DNA illüstrasyonu.
- Animasyonlu dizileme akışı.
- Neon degrade.
- Kırmızıyı dekoratif kullanmak.
- Sağlık iddiası taşıyan illüstrasyon.
- Otomatik odak değiştirme.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 10.82:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1.5px çizgi, 20px; tıbbi sembol yerine nötr geometri |
| Fotoğraf | Doğal ışık, insan odaklı, stetoskop klişesi yok |
| İllüstrasyon | Tek çizgi, sakin; anatomik detay yok |
| Doku | Yok |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-grid` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 16.43:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.72:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.23:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 10.24:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 10.82:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 95.2 | ≥ 60 hedef | ince metin |

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
| Garnitür | `lab-protocol` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `data-lineage` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `boutique-hotel` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Genomics | Genomics (Wikipedia) — örnek/metrik alanları |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — baz/örnek kimliği |
| https://fonts.google.com/specimen/Inter | Inter (Google Fonts) — gövde ailesi |

## AI brief

```text
Genom laboratuvarı paneli tasarla: koyu zemin, turkuaz yalnız seçili örnekte, mono baz şeridi ve örnek tablosu.

Stil: Genomics Lab (genomics-lab) · aile: Sağlık & Bilim (202–211)
Token: --bg #0b0d14 · --surface #141824 · --ink #e8ecf7 · --accent #45d6c8 · --line rgba(232,236,247,.14)
Yarıçap: 2px / 4px · Tipografi: IBM Plex Mono / Inter / IBM Plex Mono
Zorunlu: Kalite metrikleri iki ondalık ve birimli. · Örnek kimlikleri mono ve tekil. · Renk körlüğü için baz renklendirmesi yok.
Yasak: Sarmal DNA illüstrasyonu. · Animasyonlu dizileme akışı. · Neon degrade.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="genomics-lab"] {
  --bg: #0b0d14; --bg-2: #10131c;
  --surface: #141824; --surface-2: #1c2130;
  --ink: #e8ecf7; --ink-soft: #a4aec4; --ink-faint: #7a859c;
  --accent: #45d6c8; --accent-ink: #04171a;
  --line: rgba(232,236,247,.14);
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 3px rgba(0,0,0,.10); --shadow-hard: none;
  --font-display: "IBM Plex Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
