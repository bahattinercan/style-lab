# 222 · Terrazzo Stone

> **Bir cümlede:** Terrazzo yüzey: taş kırıntısı doku, kireç zemin, tek kiremit accent ve sade künye.

| | |
|---|---|
| **Hissiyat** | serin, dokulu, "taş cilalı" |
| **En iyi** | mimarlık/iç mekân, malzeme kataloğu, döşeme ürünü |
| **Kaçın** | yazılım paneli |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Materyal & Zanaat (222–231) · **Token** | `kit/tokens.css` → `[data-style="terrazzo-stone"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Terrazzo Stone, malzemenin kendisini gösterir: doku fotoğrafta, sayı künyede.

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
- **Taş kırıntısı:** yalnız görsel kutuda noktasal doku.
- **Kireç zemin:** sıcak nötr, tek accent.
- **Keskin kenar:** 0–4px.
- **Numune künyesi:** mono kalınlık/ölçü.
- **Tipografi:** Jost (display) + Jost (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#8a4a3c`; nötr skala `#f6f4ef` → `#1a1915`.
- **Yarıçap:** `0px` / `4px`; Köşe 0–6px; malzeme kenarı keskin kalır, yumuşak yuvarlatma dokuyu zayıflatır.

## Zorunlu kurallar

1. Her numunede ölçü ve yüzey bitişi.
2. Doku yalnız görsel katmanda.
3. Metin opak yüzeyde.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#f6f4ef` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#ece9e1` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#fffefb` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f3f0e9` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#1a1915` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#514e46` | ikincil metin, açıklama | — |
| `--ink-faint` | `#847f74` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#8a4a3c` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#fdf7f5` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(26,25,21,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16:1** · `ink-soft/bg` **7.56:1** · `ink-faint/bg` **3.63:1 (dekoratif)** · `accent-ink/accent` **6.33:1**.
- Malzeme rengi zemin: accent yalnız damga/etiket. Dokuyu renkle değil grain ve kenarla kur.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Jost) | 52px (mobil 32px) | 400 | 1.08 | -0.02em |
| H2 | aynı | 28px | 600 | 1.2 | -0.015em |
| H3 | aynı | 20px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Jost) | 16px | 400 | 1.62 | 0 |
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
- Radius: `0px` (buton, input, chip), `4px` (kart, modal). Köşe 0–6px; malzeme kenarı keskin kalır, yumuşak yuvarlatma dokuyu zayıflatır.

## Yasaklar

- Taklit taş düğme.
- Çok renkli terrazzo paleti.
- Yuvarlak 12px+ kart.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 6.66:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 16:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 7.56:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.63:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 6.33:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 6.66:1 | ≥ 3 | accent halka |
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
| Garnitür | `cast-concrete` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `wood-joinery` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `synthwave` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `game-racing-neon` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Terrazzo | Terrazzo (Wikipedia) — malzeme bağlamı |
| https://fonts.google.com/specimen/Jost | Jost (Google Fonts) — başlık ve gövde |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — ölçü |

## AI brief

```text
Terrazzo malzeme kataloğu tasarla: kireç zemin, noktasal doku yalnız görselde, mono ölçü künyesi.

Stil: Terrazzo Stone (terrazzo-stone) · aile: Materyal & Zanaat (222–231)
Token: --bg #f6f4ef · --surface #fffefb · --ink #1a1915 · --accent #8a4a3c · --line rgba(26,25,21,.14)
Yarıçap: 0px / 4px · Tipografi: Jost / Jost / IBM Plex Mono
Zorunlu: Her numunede ölçü ve yüzey bitişi. · Doku yalnız görsel katmanda. · Metin opak yüzeyde.
Yasak: Taklit taş düğme. · Çok renkli terrazzo paleti. · Yuvarlak 12px+ kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="terrazzo-stone"] {
  --bg: #f6f4ef; --bg-2: #ece9e1;
  --surface: #fffefb; --surface-2: #f3f0e9;
  --ink: #1a1915; --ink-soft: #514e46; --ink-faint: #847f74;
  --accent: #8a4a3c; --accent-ink: #fdf7f5;
  --line: rgba(26,25,21,.14);
  --danger: #d72a1e;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b55400;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 4px;
  --shadow: 0 1px 2px rgba(0,0,0,.16); --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0.05;
}
```
