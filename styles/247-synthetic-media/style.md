# 247 · Synthetic Media

> **Bir cümlede:** Sentetik medya: grafit zemin, turkuaz accent, kaynak etiketi ve mono üretim parametresi.

| | |
|---|---|
| **Hissiyat** | deneysel, şeffaf, "üretildi" |
| **En iyi** | AI medya ürünü, içerik doğrulama, model kartı |
| **Kaçın** | resmî belge |
| **Zorluk** | zor · **Erişilebilirlik** | orta |
| **Aile** | Gelecek & Spekülatif (242–251) · **Token** | `kit/tokens.css` → `[data-style="synthetic-media"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Synthetic Media, üretilmiş içeriği işaretler: kaynak, model ve parametre görünür.

### Ne değildir
- Neon sci-fi klişesi değildir; accent sinyal, zemin sakin.
- Koyu zemin zorunlu değildir; kontrast ve çizgi dili belirleyici.

### Nereden gelir
Uzay programı arayüzleri, laboratuvar cihaz panelleri ve sistem şemalarının görsel dili.

### 3 saniyede tanıma testi
1. Accent sinyal olarak mı kullanılmış?
2. Teknik etiketler mono mu?
3. Gölge yerine çizgi mi?

## Görsel imza
- **Kaynak etiketi:** her medyada "synthetic" mono etiketi.
- **Turkuaz accent:** yalnız doğrulama durumu.
- **Parametre listesi:** mono anahtar/değer.
- **Grafit zemin:** tek ton.
- **Tipografi:** Space Grotesk (display) + Inter (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#3fd4c2`; nötr skala `#0e1013` → `#edf0f4`.
- **Yarıçap:** `4px` / `8px`; Köşe 2–8px; spekülatif dilde geometri keskin, yuvarlatma ölçülü.

## Zorunlu kurallar

1. Her medyada üretim kaynağı ve model adı.
2. Doğrulama durumu metinle.
3. Parametreler mono ve birimli.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0e1013` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#121519` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#181c22` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#21262e` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#edf0f4` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#adb4bf` | ikincil metin, açıklama | — |
| `--ink-faint` | `#828a96` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#3fd4c2` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#041614` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(237,240,244,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.67:1** · `ink-soft/bg` **9.13:1** · `ink-faint/bg` **5.47:1 (dekoratif)** · `accent-ink/accent` **10.1:1**.
- Accent bir sinyal rengi; geniş zemin yerine çizgi, etiket ve grafikte kullanılır.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 54px (mobil 32px) | 500 | 1.06 | -0.02em |
| H2 | aynı | 28px | 600 | 1.18 | -0.015em |
| H3 | aynı | 19px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 14px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (IBM Plex Mono) | 10.5px | 400 | 1.2 | 0.14em |
| Buton | `--font-body` | 12px | 600 | 1 | 0 |

- Display 54px; teknik etiketler mono ve geniş tracking. Gövde 15px, ölçü 62ch.
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

- Izgara yardımcı çizgi olarak hafifçe görünür (accent %8); bölüm aralığı 56px.
- Bölüm dikey boşluğu masaüstü 72px, mobil 44px; kart içi padding 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Yüzeyler ince accent kenarla ayrılır; gölge yerine 1px sinyal çizgisi.
- Radius: `4px` (buton, input, chip), `8px` (kart, modal). Köşe 2–8px; spekülatif dilde geometri keskin, yuvarlatma ölçülü.

## Yasaklar

- Gizlenen kaynak etiketi.
- Animasyonlu örnek üretim.
- Üçten fazla accent.
- Animasyonlu tarama.
- Üçten fazla sinyal rengi.
- Okunamayan 8px etiket.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 10.35:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px çizgi, 20px; ölçüm işareti gibi |
| Fotoğraf | Teknik görsel: render, diyagram, makro doku |
| İllüstrasyon | Diyagram/şema; süs illüstrasyon yok |
| Doku | Tarama çizgisi %3 |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-dots` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Sayfada en fazla bir büyük görsel; gerisi metin ve veri.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Sistem / landing | orta | Tek cümle + ölçüm şeridi | `shots/01-page.png` |
| Şema | yüksek | Diyagram + mono etiket | `shots/01-page.png` |
| Veri | yüksek | Grafik + birim + zaman | `shots/01-page.png` |
| Kontrol | orta | 3 anahtar + eşik | `shots/01-page.png` |
| Kayıt / erişim | düşük | Tek sütun form | `shots/01-page.png` |
| Rapor | orta | Özet + tablo | `shots/01-page.png` |
| Yol haritası | orta | Zaman çizelgesi | `shots/01-page.png` |
| İletişim | düşük | Form + adres | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.67:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 9.13:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.47:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 10.1:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 10.35:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 97.4 | ≥ 60 hedef | ince metin |

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
| Bilim kurgu klişesi | Her yerde neon | Accent'i %10 alana indir |
| Şema okunmuyor | Etiket üst üste | Etiketi çizgi dışına taşı |
| Kontrast düşük | Accent metin | Metni --ink, accent'i çizgi yap |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `agent-console` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `neural-canvas` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `regulatory-report` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `access-audit` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Generative_artificial_intelligence | Generative artificial intelligence (Wikipedia) — model/kaynak etiketi |
| https://c2pa.org/ | C2PA — içerik kaynağı standardı |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — parametre |

## AI brief

```text
Sentetik medya ürünü tasarla: grafit zemin, turkuaz doğrulama accent, mono kaynak/parametre listesi.

Stil: Synthetic Media (synthetic-media) · aile: Gelecek & Spekülatif (242–251)
Token: --bg #0e1013 · --surface #181c22 · --ink #edf0f4 · --accent #3fd4c2 · --line rgba(237,240,244,.14)
Yarıçap: 4px / 8px · Tipografi: Space Grotesk / Inter / IBM Plex Mono
Zorunlu: Her medyada üretim kaynağı ve model adı. · Doğrulama durumu metinle. · Parametreler mono ve birimli.
Yasak: Gizlenen kaynak etiketi. · Animasyonlu örnek üretim. · Üçten fazla accent.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="synthetic-media"] {
  --bg: #0e1013; --bg-2: #121519;
  --surface: #181c22; --surface-2: #21262e;
  --ink: #edf0f4; --ink-soft: #adb4bf; --ink-faint: #828a96;
  --accent: #3fd4c2; --accent-ink: #041614;
  --line: rgba(237,240,244,.14);
  --radius: 4px; --radius-lg: 8px;
  --shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 18%, transparent); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
