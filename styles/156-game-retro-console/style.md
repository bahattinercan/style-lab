# 156 · Retro Console

> **Bir cümlede:** Kartuş dönemi konsolu: pixel başlık, amber accent, 0 köşe ve dar ekran ritmi.

| | |
|---|---|
| **Hissiyat** | nostaljik, sıcak, "kumanda elinde" |
| **En iyi** | retro oyun menüleri, arşiv/vitrin, etkinlik sayfası |
| **Kaçın** | uzun okuma, kurumsal form akışları |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Oyun & Etkileşim (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-retro-console"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Retro Console, pixel estetiğini okunurluk sınırında tutar: başlık pixel, gövde sakin; nostalji süs değil ritimdir.

### Ne değildir
- Neon her yere sürülmüş bir tema değildir; accent sadece durum ve eylem taşır.
- Koyu zemin tek başına oyun stili yapmaz; sayısal ritim ve keskin köşe gerekir.
- Pixel font zorunlu değil; yazılım HUD'ları da bu ailedendir.

### Nereden gelir
Arcade kokpitleri, konsol HUD'ları ve PC oyun menülerinin ekran tipografisi geleneği; 2010'lardan sonra canlı yayın ve espor arayüzleriyle sadeleşti.

### 3 saniyede tanıma testi
1. Köşeler keskin mi (≤6px)?
2. Rakamlar tabular ve mono mu?
3. Accent sayısı tek mi, durum için mi kullanılmış?

## Görsel imza
- **Pixel display:** Press Start 2P yalnız başlık ve buton; 3 satırdan fazla kullanılmaz.
- **Amber accent:** tek sıcak renk; mavi ikinci renk olarak eklenmez.
- **Sıfır köşe:** tüm kutular 0–2px; gölge yok.
- **Dar satır:** gövde 14–15px, satır aralığı 1.7 — pixel fontun okunurluk açığı kapatılır.
- **Tipografi:** Press Start 2P (display) + Chakra Petch (gövde) + VT323 (mono etiket).
- **Renk disiplini:** tek accent `#f2c434`; nötr skala `#101418` → `#e6eef4`.
- **Yarıçap:** `0px` / `2px`; Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Zorunlu kurallar

1. Pixel font yalnız başlık/etiket; gövde okunur bir sans-serif.
2. Başlık en fazla 3 satır, uppercase.
3. Köşe 0–2px; gölge kullanılmaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#101418` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#151b21` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#1a222a` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#222d37` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#e6eef4` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#a4b6c4` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7d8f9d` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#f2c434` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#1a1403` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(230,238,244,.16)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **15.77:1** · `ink-soft/bg` **8.87:1** · `ink-faint/bg` **5.54:1 (dekoratif)** · `accent-ink/accent` **11.11:1**.
- HUD kontrastı: durum renkleri (canlı/hasar) accent'in tonlarından türetilir; dördüncü bir hue eklenmez.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Press Start 2P) | 26px (mobil 28px) | 700 | 1.1 | 0.01em |
| H2 | aynı | 26px | 600 | 1.2 | 0.01em |
| H3 | aynı | 19px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Chakra Petch) | 15px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 13px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (VT323) | 10px | 400 | 1.2 | 0.2em |
| Buton | `--font-body` | 11px | 600 | 1 | 0 |

- Rakamlar tabular; skor/timer alanları mono ve sağa hizalı. Başlık uppercase, gövde cümle düzeninde.
- Ölçü: 62ch (okuma metni), kart metni en fazla 52ch.
- Başlıklar uppercase: `text-transform: uppercase` + pozitif tracking; gövde metni asla.

## Izgara ve boşluk

| Öğe | Değer |
| --- | --- |
| Kolon | 12 (içerik 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Ekran ızgarası görünür bir çerçeve gibi davranır: bölümler arasına 1px accent kenar konur, dekoratif çizgi eklenmez.
- Bölüm dikey boşluğu masaüstü 64px, mobil 40px; kart içi padding 18px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Yüzeyler opak; cam/blur yok. Durum bildirimi için ince accent kenar kullanılır.
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Yasaklar

- Pixel fontu gövde metnine koymak.
- Animasyonlu CRT taraması.
- Üçten fazla renk.
- Sonsuz yanıp sönen gösterge (v6'da animasyon yok).
- Üçten fazla durum rengi.
- HUD içinde serif başlık.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 11.21:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px blok ikon, 16/20px tuval; anti-alias yok, tam sayı ölçek |
| Fotoğraf | Oyun içi render ya da tek nesne çekimi; %25 alan, koyu vinyet |
| İllüstrasyon | Sprite/silüet: en fazla 3 ton (accent, ink, surface-2) |
| Doku | Statik tarama (1px/3px, %4) yalnız bölüm zemininde |
| Logo | Sol üst 20px, uppercase, mono veya display |

- İmza motif: `motif-grid` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Birincil odak tek büyük sayı/skor; ikinci odak tek CTA; gerisi etiket.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| HUD / oyun içi katman | yüksek | Skor + durum çubuğu + tek CTA; 3 katmandan fazla bindirme yok | `shots/01-page.png` |
| Menü / lobi | orta | Dikey liste, seçili satırda accent sol kenar, 44px satır | `shots/01-page.png` |
| Karakter / envanter | yüksek | Izgara 4'lü, her kartta nadirlik etiketi mono | `shots/01-page.png` |
| Görev / quest | orta | Başlık + 2 satır açıklama + ödül tablosu | `shots/01-page.png` |
| Maç sonu / skor tablosu | yüksek | Sağa hizalı sayılar, zebra yerine hairline | `shots/01-page.png` |
| Ayarlar | orta | Anahtar + segment; her satır 56px | `shots/01-page.png` |
| Mağaza / battle pass | yüksek | 3 kolon plan kartı, ortada accent kenar | `shots/01-page.png` |
| Form / hesap | düşük | Tek sütun 480px, etiket üstte 12px mono | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.77:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.87:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.54:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 11.11:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 11.21:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 95.3 | ≥ 60 hedef | ince metin |

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
| Arayüz oyuncak gibi görünüyor | Neon ve gölge fazla | Accent'i %14 dolguya indir, gölgeyi sıfırla |
| Sayılar zıplıyor | Orantısız (proportional) rakam | font-variant-numeric: tabular-nums kullan |
| Menü okunmuyor | Uppercase + düşük kontrast | Uppercase'i başlıkta tut, gövdeyi cümle düzenine çevir |
| Kartlar kontrolsüz parlıyor | Kenar accent %40+ | Kenarı %22'ye sabitle, hover'da %34 |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `arcade-8bit` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `game-indie-pixel` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `japandi` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `utility` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://fonts.google.com/specimen/Press+Start+2P | Press Start 2P (Google Fonts) — pixel başlık |
| https://en.wikipedia.org/wiki/History_of_video_game_consoles | 16-bit era (Wikipedia) — kartuş dönemi referansı |
| https://fonts.google.com/specimen/VT323 | VT323 (Google Fonts) — terminal etiket |

## AI brief

```text
16-bit konsol menüsü tasarla: pixel başlık yalnız üç satır, amber accent tek, keskin köşe, gövde okunur sans.

Stil: Retro Console (game-retro-console) · aile: Oyun & Etkileşim (152–171)
Token: --bg #101418 · --surface #1a222a · --ink #e6eef4 · --accent #f2c434 · --line rgba(230,238,244,.16)
Yarıçap: 0px / 2px · Tipografi: Press Start 2P / Chakra Petch / VT323
Zorunlu: Pixel font yalnız başlık/etiket; gövde okunur bir sans-serif. · Başlık en fazla 3 satır, uppercase. · Köşe 0–2px; gölge kullanılmaz.
Yasak: Pixel fontu gövde metnine koymak. · Animasyonlu CRT taraması. · Üçten fazla renk.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="game-retro-console"] {
  --bg: #101418; --bg-2: #151b21;
  --surface: #1a222a; --surface-2: #222d37;
  --ink: #e6eef4; --ink-soft: #a4b6c4; --ink-faint: #7d8f9d;
  --accent: #f2c434; --accent-ink: #1a1403;
  --line: rgba(230,238,244,.16);
  --danger: #e83d2e;
  --danger-ink: #0b0d10;
  --ok: #12b76a;
  --ok-ink: #0b0d10;
  --warn: #f79009;
  --warn-ink: #0b0d10;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 0 0 1px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Press Start 2P", ui-monospace, monospace;
  --font-body: "Chakra Petch", system-ui, sans-serif;
  --font-mono: "VT323", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
