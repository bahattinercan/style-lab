# 224 · Risograph Print

> **Bir cümlede:** Riso baskı: iki mürekkep (mavi-pembe), kayma efekti, kâğıt dokusu ve mono adet.

| | |
|---|---|
| **Hissiyat** | deneysel, ucuza lüks, "iki renk yeter" |
| **En iyi** | bağımsız yayın, poster/zine, sanat baskı |
| **Kaçın** | kurumsal banka |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Materyal & Zanaat (222–231) · **Token** | `kit/tokens.css` → `[data-style="risograph-print"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Risograph Print, kısıtı estetik yapar: iki mürekkep, kayma ve kâğıt.

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
- **İki mürekkep:** mavi accent + %40 opaklık pembe ikinci ton.
- **Kayma:** görselde 2px ofset gölge (accent %30).
- **Kâğıt dokusu:** %5 grain.
- **Mono adet:** baskı numarası.
- **Tipografi:** Space Grotesk (display) + Space Grotesk (gövde) + Space Mono (mono etiket).
- **Renk disiplini:** tek accent `#1f5f8c`; nötr skala `#fbf7f2` → `#1a1522`.
- **Yarıçap:** `0px` / `2px`; Köşe 0–6px; malzeme kenarı keskin kalır, yumuşak yuvarlatma dokuyu zayıflatır.

## Zorunlu kurallar

1. En fazla iki mürekkep; ikinci ton %40 opaklığı geçmez.
2. Baskı adedi mono.
3. Kayma efekti yalnız görselde.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#fbf7f2` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f3ece2` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#fffdfa` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f7f0e7` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#1a1522` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#4e4759` | ikincil metin, açıklama | — |
| `--ink-faint` | `#817a8b` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#1f5f8c` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f7fbfe` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(26,21,34,.16)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.77:1** · `ink-soft/bg` **8.31:1** · `ink-faint/bg` **3.87:1 (dekoratif)** · `accent-ink/accent` **6.57:1**.
- Malzeme rengi zemin: accent yalnız damga/etiket. Dokuyu renkle değil grain ve kenarla kur.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 52px (mobil 32px) | 400 | 1.08 | -0.02em |
| H2 | aynı | 28px | 600 | 1.2 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Space Grotesk) | 16px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 14px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Köşe 0–6px; malzeme kenarı keskin kalır, yumuşak yuvarlatma dokuyu zayıflatır.

## Yasaklar

- Dört renkli CMYK fotoğraf.
- Gradyan.
- Yuvarlak köşe.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 6.73:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px çizgi, 20px; baskı işareti gibi |
| Fotoğraf | Makro doku: kâğıt, metal, kumaş; yumuşak yan ışık |
| İllüstrasyon | Yalnız doku örneği |
| Doku | Malzeme greni (--grain: .04) |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-paper` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 16.77:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.31:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.87:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 6.57:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 6.73:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 100.2 | ≥ 60 hedef | ince metin |

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
| Garnitür | `linocut-print` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `punk-fanzine` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `glassmorphism` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `boutique-hotel` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Risograph | Risograph (Wikipedia) — iki mürekkep mantığı |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — başlık ve gövde |
| https://fonts.google.com/specimen/Space+Mono | Space Mono (Google Fonts) — adet/künye |

## AI brief

```text
Riso baskı sayfası tasarla: kâğıt zemin, mavi accent + %40 pembe, 2px kayma, mono baskı adedi.

Stil: Risograph Print (risograph-print) · aile: Materyal & Zanaat (222–231)
Token: --bg #fbf7f2 · --surface #fffdfa · --ink #1a1522 · --accent #1f5f8c · --line rgba(26,21,34,.16)
Yarıçap: 0px / 2px · Tipografi: Space Grotesk / Space Grotesk / Space Mono
Zorunlu: En fazla iki mürekkep; ikinci ton %40 opaklığı geçmez. · Baskı adedi mono. · Kayma efekti yalnız görselde.
Yasak: Dört renkli CMYK fotoğraf. · Gradyan. · Yuvarlak köşe.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="risograph-print"] {
  --bg: #fbf7f2; --bg-2: #f3ece2;
  --surface: #fffdfa; --surface-2: #f7f0e7;
  --ink: #1a1522; --ink-soft: #4e4759; --ink-faint: #817a8b;
  --accent: #1f5f8c; --accent-ink: #f7fbfe;
  --line: rgba(26,21,34,.16);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00843b;
  --ok-ink: #ffffff;
  --warn: #b85600;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 1px 2px rgba(0,0,0,.16); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0.05;
}
```
