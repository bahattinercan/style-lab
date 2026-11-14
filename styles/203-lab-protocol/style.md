# 203 · Lab Protocol

> **Bir cümlede:** Laboratuvar protokolü: numaralı adımlar, monospace zaman damgası ve uyarı bloğu.

| | |
|---|---|
| **Hissiyat** | disiplinli, tekrarlanabilir, "adım 4'te bekle" |
| **En iyi** | laboratuvar protokolü, deney kaydı, cihaz prosedürü |
| **Kaçın** | marka vitrini |
| **Zorluk** | orta · **Erişilebilirlik** | yüksek — AA üstü, form hataları programatik |
| **Aile** | Sağlık & Bilim (202–211) · **Token** | `kit/tokens.css` → `[data-style="lab-protocol"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Lab Protocol, tekrarlanabilirliği görselleştirir: her adım numaralı, süreli ve uyarılı.

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
- **Numaralı adım:** 01/02 mono, adım başlığı 17px.
- **Zaman damgası:** mono, sağ sütun.
- **Uyarı bloğu:** sol 2px accent, zemin --surface-2.
- **Tek accent:** yalnız uyarı ve onay.
- **Tipografi:** Inter (display) + Inter (gövde) + JetBrains Mono (mono etiket).
- **Renk disiplini:** tek accent `#4fc3a1`; nötr skala `#0f1214` → `#e8f0f2`.
- **Yarıçap:** `2px` / `4px`; Köşe 8–12px; form alanları 10px. Keskin 0px köşe klinik dilde sert kalır.

## Zorunlu kurallar

1. Her adımda süre ve cihaz bilgisi.
2. Uyarılar adımın içinde, ayrı bölümde değil.
3. Birimler mono.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0f1214` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#131719` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#182023` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#202a2e` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#e8f0f2` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#a6b6ba` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7d8d91` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#4fc3a1` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#04160f` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(232,240,242,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.27:1** · `ink-soft/bg` **8.97:1** · `ink-faint/bg` **5.45:1 (dekoratif)** · `accent-ink/accent` **8.57:1**.
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
| Etiket | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
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

- Animasyonlu sayaç.
- Süslü illüstrasyon.
- On adımdan fazla tek ekranda.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 8.64:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 16.27:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.97:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.45:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 8.57:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 8.64:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 96.5 | ≥ 60 hedef | ince metin |

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
| Garnitür | `clinical-trial` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `terminal-ui` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `lookbook-editorial` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Laboratory | Laboratory (Wikipedia) — protokol akışı |
| https://fonts.google.com/specimen/JetBrains+Mono | JetBrains Mono (Google Fonts) — zaman/birim |
| https://fonts.google.com/specimen/Inter | Inter (Google Fonts) — gövde ailesi |

## AI brief

```text
Laboratuvar protokolü tasarla: koyu zemin, numaralı adımlar, mono zaman damgası, sol accent uyarı bloğu.

Stil: Lab Protocol (lab-protocol) · aile: Sağlık & Bilim (202–211)
Token: --bg #0f1214 · --surface #182023 · --ink #e8f0f2 · --accent #4fc3a1 · --line rgba(232,240,242,.14)
Yarıçap: 2px / 4px · Tipografi: Inter / Inter / JetBrains Mono
Zorunlu: Her adımda süre ve cihaz bilgisi. · Uyarılar adımın içinde, ayrı bölümde değil. · Birimler mono.
Yasak: Animasyonlu sayaç. · Süslü illüstrasyon. · On adımdan fazla tek ekranda.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="lab-protocol"] {
  --bg: #0f1214; --bg-2: #131719;
  --surface: #182023; --surface-2: #202a2e;
  --ink: #e8f0f2; --ink-soft: #a6b6ba; --ink-faint: #7d8d91;
  --accent: #4fc3a1; --accent-ink: #04160f;
  --line: rgba(232,240,242,.14);
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 3px rgba(0,0,0,.10); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
