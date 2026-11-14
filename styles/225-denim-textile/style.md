# 225 · Denim Textile

> **Bir cümlede:** Denim dokusu: çivit mavisi, çift dikiş çizgisi, keten zemin ve mono beden tablosu.

| | |
|---|---|
| **Hissiyat** | dayanıklı, gündelik, "dikiş izi" |
| **En iyi** | tekstil/denim marka, beden tablosu, ürün detayı |
| **Kaçın** | lüks mücevher |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Materyal & Zanaat (222–231) · **Token** | `kit/tokens.css` → `[data-style="denim-textile"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Denim Textile, kumaşın dayanıklılığını dikiş çizgisi ve ölçü tablosuyla anlatır.

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
- **Çift dikiş:** bölüm ayırıcı 1px + 4px aralıklı ikinci çizgi.
- **Çivit accent:** yalnız beden ve CTA.
- **Beden tablosu:** mono ölçü, cm.
- **Keskin kenar:** 2–4px.
- **Tipografi:** Space Grotesk (display) + Inter (gövde) + Courier Prime (mono etiket).
- **Renk disiplini:** tek accent `#1b3f6b`; nötr skala `#f2f4f7` → `#121821`.
- **Yarıçap:** `2px` / `4px`; Köşe 0–6px; malzeme kenarı keskin kalır, yumuşak yuvarlatma dokuyu zayıflatır.

## Zorunlu kurallar

1. Beden tablosu cm ve mono.
2. Kumaş içeriği yazılır.
3. Dikiş çizgisi dekoratif, metne değmez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#f2f4f7` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#e6eaf0` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#eef1f6` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#121821` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#454e5c` | ikincil metin, açıklama | — |
| `--ink-faint` | `#78818e` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#1b3f6b` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f6faff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(18,24,33,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.17:1** · `ink-soft/bg` **7.63:1** · `ink-faint/bg` **3.58:1 (dekoratif)** · `accent-ink/accent` **10.17:1**.
- Malzeme rengi zemin: accent yalnız damga/etiket. Dokuyu renkle değil grain ve kenarla kur.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 52px (mobil 32px) | 400 | 1.08 | -0.02em |
| H2 | aynı | 28px | 600 | 1.2 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 14px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Köşe 0–6px; malzeme kenarı keskin kalır, yumuşak yuvarlatma dokuyu zayıflatır.

## Yasaklar

- Kot pantolon ikonu yığını.
- Beş renkli yıkama paleti.
- Yuvarlak kart.
- Taklit nesne (düğme gibi görünen taş).
- Yüksek kontrastlı desen üstünde metin.
- Sekizden fazla doku örneği.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 10.66:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 16.17:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 7.63:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.58:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 10.17:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 10.66:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 97.9 | ≥ 60 hedef | ince metin |

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
| Garnitür | `denim-textile` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `raw-steel` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `boutique-hotel` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `ethereal` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Denim | Denim (Wikipedia) — kumaş/dikiş bağlamı |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — başlık ailesi |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime (Google Fonts) — beden tablosu |

## AI brief

```text
Denim ürün sayfası tasarla: keten-mavi zemin, çift dikiş çizgisi, mono cm beden tablosu, çivit accent.

Stil: Denim Textile (denim-textile) · aile: Materyal & Zanaat (222–231)
Token: --bg #f2f4f7 · --surface #ffffff · --ink #121821 · --accent #1b3f6b · --line rgba(18,24,33,.14)
Yarıçap: 2px / 4px · Tipografi: Space Grotesk / Inter / Courier Prime
Zorunlu: Beden tablosu cm ve mono. · Kumaş içeriği yazılır. · Dikiş çizgisi dekoratif, metne değmez.
Yasak: Kot pantolon ikonu yığını. · Beş renkli yıkama paleti. · Yuvarlak kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="denim-textile"] {
  --bg: #f2f4f7; --bg-2: #e6eaf0;
  --surface: #ffffff; --surface-2: #eef1f6;
  --ink: #121821; --ink-soft: #454e5c; --ink-faint: #78818e;
  --accent: #1b3f6b; --accent-ink: #f6faff;
  --line: rgba(18,24,33,.14);
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 2px rgba(0,0,0,.16); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
