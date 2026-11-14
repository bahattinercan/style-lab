# 158 · Indie Pixel

> **Bir cümlede:** Bağımsız oyun vitrini: pixel etiket, yeşil accent, düşük kontrastlı panel ve el yapımı düzensizlik.

| | |
|---|---|
| **Hissiyat** | samimi, deneysel, "tek kişilik stüdyo" |
| **En iyi** | bağımsız oyun tanıtımı, geliştirici günlüğü, jam sayfası |
| **Kaçın** | kurumsal ürün sayfaları, yüksek yoğunluklu tablo |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Oyun & Etkileşim (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-indie-pixel"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Indie Pixel, büyük stüdyo cilası yerine el yapımı düzensizliği korur; ama okunurluk ve hiyerarşi pazarlıksızdır.

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
- **Pixel etiket:** Silkscreen yalnız nav, etiket ve buton; gövde Space Grotesk.
- **Yeşil accent:** canlılık rengi; mor zeminle tek kontrast.
- **Keskin kutu:** 0–2px köşe, 1px kenar.
- **Elle dizilmiş düzensizlik:** kart aralıkları eşit değil (14/18px), ızgara bilinçli kırılır.
- **Tipografi:** Silkscreen (display) + Space Grotesk (gövde) + VT323 (mono etiket).
- **Renk disiplini:** tek accent `#63d471`; nötr skala `#1a1526` → `#f2e9ff`.
- **Yarıçap:** `0px` / `2px`; Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Zorunlu kurallar

1. Pixel font yalnız etiket/buton; gövde okunur ailede.
2. Accent tek; durum bilgisi metinle de verilir.
3. Köşe 0–2px.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#1a1526` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#211b30` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#271f38` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#332945` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#f2e9ff` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#bfb0d8` | ikincil metin, açıklama | — |
| `--ink-faint` | `#988bb5` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#63d471` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#04170a` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(242,233,255,.16)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **15.16:1** · `ink-soft/bg` **8.83:1** · `ink-faint/bg` **5.68:1 (dekoratif)** · `accent-ink/accent` **9.88:1**.
- HUD kontrastı: durum renkleri (canlı/hasar) accent'in tonlarından türetilir; dördüncü bir hue eklenmez.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Silkscreen) | 48px (mobil 28px) | 700 | 1.1 | 0.01em |
| H2 | aynı | 26px | 600 | 1.2 | 0.01em |
| H3 | aynı | 19px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Space Grotesk) | 15px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 13px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (VT323) | 10px | 400 | 1.2 | 0.2em |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Yasaklar

- Pixel fontu paragrafta kullanmak.
- Sekiz renkli palet.
- Yuvarlak buton.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 9.49:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px blok ikon, 16/20px tuval; anti-alias yok, tam sayı ölçek |
| Fotoğraf | Oyun içi render ya da tek nesne çekimi; %25 alan, koyu vinyet |
| İllüstrasyon | Sprite/silüet: en fazla 3 ton (accent, ink, surface-2) |
| Doku | Statik tarama (1px/3px, %4) yalnız bölüm zemininde |
| Logo | Sol üst 20px, uppercase, mono veya display |

- İmza motif: `motif-dots` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 15.16:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.83:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.68:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 9.88:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 9.49:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 94.8 | ≥ 60 hedef | ince metin |

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
| Garnitür | `game-retro-console` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `arcade-8bit` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `luxury-typography` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `japandi` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://fonts.google.com/specimen/Silkscreen | Silkscreen (Google Fonts) — pixel etiket ailesi |
| https://en.wikipedia.org/wiki/Indie_game | Indie game (Wikipedia) — bağımsız oyun bağlamı |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — gövde ailesi |

## AI brief

```text
Bağımsız oyun tanıtım sayfası tasarla: pixel etiketler, yeşil accent, keskin kutu, bilinçli düzensiz kart aralığı.

Stil: Indie Pixel (game-indie-pixel) · aile: Oyun & Etkileşim (152–171)
Token: --bg #1a1526 · --surface #271f38 · --ink #f2e9ff · --accent #63d471 · --line rgba(242,233,255,.16)
Yarıçap: 0px / 2px · Tipografi: Silkscreen / Space Grotesk / VT323
Zorunlu: Pixel font yalnız etiket/buton; gövde okunur ailede. · Accent tek; durum bilgisi metinle de verilir. · Köşe 0–2px.
Yasak: Pixel fontu paragrafta kullanmak. · Sekiz renkli palet. · Yuvarlak buton.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="game-indie-pixel"] {
  --bg: #1a1526; --bg-2: #211b30;
  --surface: #271f38; --surface-2: #332945;
  --ink: #f2e9ff; --ink-soft: #bfb0d8; --ink-faint: #988bb5;
  --accent: #63d471; --accent-ink: #04170a;
  --line: rgba(242,233,255,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 0 0 1px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Silkscreen", ui-monospace, monospace;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "VT323", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
