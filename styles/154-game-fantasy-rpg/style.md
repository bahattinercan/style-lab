# 154 · Fantasy RPG

> **Bir cümlede:** Ortaçağ el yazması ile oyun menüsünün kesişimi: altın vurgu, kitabe başlık ve envanter ızgarası.

| | |
|---|---|
| **Hissiyat** | destansı, ağır, "kadim kayıt" hissi |
| **En iyi** | RPG menüleri, karakter sayfası, envanter ve görev günlüğü |
| **Kaçın** | hızlı operasyon panelleri, yoğun tablo ekranları |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Oyun & Etkileşim (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-fantasy-rpg"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Fantasy RPG, bir envanterin ve görev günlüğünün okunabilir kalması için süsü tek çizgiye indirir; ağırlık tipografiden gelir.

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
- **Kitabe başlık:** Cinzel, geniş tracking, uppercase; başlık bir levha gibi durur.
- **Altın tek accent:** altın yalnız değerli eylem ve nadirlik etiketi; ikinci sıcak renk yok.
- **Envanter ızgarası:** 4 kolon, eşit kutu oranı, nadirlik etiketi mono.
- **İnce çift çizgi:** bölüm ayırıcı 1px + %40 opaklık ikinci çizgi.
- **Tipografi:** Cinzel (display) + EB Garamond (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#d4a24c`; nötr skala `#14100c` → `#f1e6d2`.
- **Yarıçap:** `2px` / `6px`; Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Zorunlu kurallar

1. Başlıklar uppercase ve display ailede; gövde serif ve cümle düzeninde.
2. Accent yalnız nadirlik ve birincil eylem.
3. Kartlarda köşe ≤ 6px; süs çerçeve çizgisi tek.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#14100c` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#1a150f` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#201a13` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#2a2219` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#f1e6d2` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#c3b499` | ikincil metin, açıklama | — |
| `--ink-faint` | `#94886f` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#d4a24c` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#1a1206` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(241,230,210,.16)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **15.32:1** · `ink-soft/bg` **9.29:1** · `ink-faint/bg` **5.42:1 (dekoratif)** · `accent-ink/accent` **8.01:1**.
- HUD kontrastı: durum renkleri (canlı/hasar) accent'in tonlarından türetilir; dördüncü bir hue eklenmez.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 48px (mobil 28px) | 700 | 1.1 | 0.01em |
| H2 | aynı | 26px | 600 | 1.2 | 0.01em |
| H3 | aynı | 19px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (EB Garamond) | 15px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 13px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.2em |
| Buton | `--font-body` | 11px | 600 | 1 | 0 |

- Rakamlar tabular; skor/timer alanları mono ve sağa hizalı. Başlık uppercase, gövde cümle düzeninde.
- Ölçü: 62ch (okuma metni), kart metni en fazla 52ch.
- Başlıklar cümle düzeninde (uppercase yok); uppercase yalnız mono etiketlerde.

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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Yasaklar

- El yazısı/dekoratif script font.
- Animasyonlu parıltı (v6 kapsam dışı).
- Üçten fazla nadirlik rengi.
- Sonsuz yanıp sönen gösterge (v6'da animasyon yok).
- Üçten fazla durum rengi.
- HUD içinde serif başlık.

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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 8.18:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px blok ikon, 16/20px tuval; anti-alias yok, tam sayı ölçek |
| Fotoğraf | Oyun içi render ya da tek nesne çekimi; %25 alan, koyu vinyet |
| İllüstrasyon | Sprite/silüet: en fazla 3 ton (accent, ink, surface-2) |
| Doku | Statik tarama (1px/3px, %4) yalnız bölüm zemininde |
| Logo | Sol üst 20px, uppercase, mono veya display |

- İmza motif: `motif-rings` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 15.32:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 9.29:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.42:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 8.01:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 8.18:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 91.8 | ≥ 60 hedef | ince metin |

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
| Garnitür | `game-card-tcg` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `collectible-card` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `neo-brutalism` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `memphis` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://fonts.google.com/specimen/Cinzel | Cinzel (Google Fonts) — kitabe başlık ailesi |
| https://en.wikipedia.org/wiki/Illuminated_manuscript | Illuminated manuscript (Wikipedia) — altın vurgu ve çerçeve dili |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond (Google Fonts) — gövde serif ölçeği |

## AI brief

```text
Fantastik RPG karakter sayfası tasarla: altın vurgu yalnız nadirlik ve ana eylem; kitabe başlık, serif gövde, 4 kolon envanter.

Stil: Fantasy RPG (game-fantasy-rpg) · aile: Oyun & Etkileşim (152–171)
Token: --bg #14100c · --surface #201a13 · --ink #f1e6d2 · --accent #d4a24c · --line rgba(241,230,210,.16)
Yarıçap: 2px / 6px · Tipografi: Cinzel / EB Garamond / IBM Plex Mono
Zorunlu: Başlıklar uppercase ve display ailede; gövde serif ve cümle düzeninde. · Accent yalnız nadirlik ve birincil eylem. · Kartlarda köşe ≤ 6px; süs çerçeve çizgisi tek.
Yasak: El yazısı/dekoratif script font. · Animasyonlu parıltı (v6 kapsam dışı). · Üçten fazla nadirlik rengi.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="game-fantasy-rpg"] {
  --bg: #14100c; --bg-2: #1a150f;
  --surface: #201a13; --surface-2: #2a2219;
  --ink: #f1e6d2; --ink-soft: #c3b499; --ink-faint: #94886f;
  --accent: #d4a24c; --accent-ink: #1a1206;
  --line: rgba(241,230,210,.16);
  --danger: #e53b2c;
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
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 0 0 1px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: 0;
}
```
