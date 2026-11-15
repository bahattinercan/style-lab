# 153 · Game Racing

> **Bir cümlede:** Hız göstergesi dilinde arayüz: dar rakamlar, sıcak accent, eğimli kesim ve yarış telemetrisi hiyerarşisi.

| | |
|---|---|
| **Hissiyat** | hız, sıcak metal, "son tur" baskısı |
| **En iyi** | yarış oyunu menüleri, telemetri paneli, spor yayın grafiği |
| **Kaçın** | sakin kurumsal form akışları, uzun okuma ekranları |
| **Zorluk** | orta · **Erişilebilirlik** | orta (sıcak accent büyük puntoda güvenli) |
| **Aile** | Oyun & Etkileşim (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-racing"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Game Racing, yarış kokpitinin gösterge mantığını arayüze taşır: her sayı bir karar (fren, vites, sıra) ve her karar tek bakışta okunmalıdır.

### Ne değildir
- Neon her yere sürülmüş bir tema değildir; accent sadece durum ve eylem taşır.
- Koyu zemin tek başına oyun stili yapmaz; sayısal ritim ve keskin köşe gerekir.
- Pixel font zorunlu değil; yazılım HUD'ları da bu ailedendir.

### Nereden gelir
Yarış oyunu menüleri, motor sporları yayın grafikleri ve analog gösterge panelleri.

### 3 saniyede tanıma testi
1. Köşeler keskin mi (≤6px)?
2. Rakamlar tabular ve mono mu?
3. Accent sayısı tek mi, durum için mi kullanılmış?

## Görsel imza
- **Eğimli kesim:** köşe yerine 8–12px çapraz kırpma; buton ve kart aynı kesim açısını paylaşır.
- **Dar rakam:** Rajdhani'nin sıkı genişliği skor ve tur sayısını tek satırda tutar.
- **Sıcak accent:** turuncu yalnız hız/sıralama vurgusu; soğuk mavi ikinci renk olarak kullanılmaz.
- **Telemetri şeridi:** yatay çubuklar ince ve mono etiketli; grafik değil gösterge gibi okunur.
- **Yarış tipografisi:** başlık uppercase ve geniş tracking, gövde 15px sakin.
- **Tipografi:** Rajdhani (display) + Chakra Petch (gövde) + Share Tech Mono (mono etiket).
- **Renk disiplini:** tek accent `#ff6a2b`; nötr skala `#121010` → `#f5efe6`.
- **Yarıçap:** `0px` / `6px`; Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Zorunlu kurallar

1. Kart ve buton kesimi aynı çapraz açıyla (8–12px) kırpılır.
2. Accent yalnız hız, sıralama ve birincil eylem için kullanılır.
3. Tüm sayısal alanlar mono veya dar display; ondalık hizalı.
4. Şerit göstergeler 6px yüksekliğinde, arka plan `--surface-2`.
5. Kontrast gövde ≥ 4.5:1.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#121010` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#171313` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#1c1817` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#241f1d` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#f5efe6` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#b6a89c` | ikincil metin, açıklama | — |
| `--ink-faint` | `#8a7c72` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#ff6a2b` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#1a0a03` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(245,239,230,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.59:1** · `ink-soft/bg` **8.19:1** · `ink-faint/bg` **4.7:1 (dekoratif)** · `accent-ink/accent` **6.75:1**.
- HUD kontrastı: durum renkleri (canlı/hasar) accent'in tonlarından türetilir; dördüncü bir hue eklenmez.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Rajdhani) | 50px (mobil 28px) | 700 | 1.1 | 0.01em |
| H2 | aynı | 26px | 600 | 1.2 | 0.01em |
| H3 | aynı | 19px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Chakra Petch) | 15px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 13px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.2em |
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
- Radius: `0px` (buton, input, chip), `6px` (kart, modal). Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Yasaklar

- Animasyonlu hız göstergesi veya kayan telemetri (v6 kapsam dışı).
- Mavi-turuncu tamamlayıcı kontrast yığını.
- Serif veya el yazısı başlık.
- Yuvarlak 12px+ kart köşesi.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 6.64:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1px blok ikon, 16/20px tuval; anti-alias yok, tam sayı ölçek |
| Fotoğraf | Oyun içi render ya da tek nesne çekimi; %25 alan, koyu vinyet |
| İllüstrasyon | Sprite/silüet: en fazla 3 ton (accent, ink, surface-2) |
| Doku | Statik tarama (1px/3px, %4) yalnız bölüm zemininde |
| Logo | Sol üst 20px, uppercase, mono veya display |

- İmza motif: `motif-bars` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 16.59:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.19:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 4.7:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 6.75:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 6.64:1 | ≥ 3 | accent halka |
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
| Arayüz oyuncak gibi görünüyor | Neon ve gölge fazla | Accent'i %14 dolguya indir, gölgeyi sıfırla |
| Sayılar zıplıyor | Orantısız (proportional) rakam | font-variant-numeric: tabular-nums kullan |
| Menü okunmuyor | Uppercase + düşük kontrast | Uppercase'i başlıkta tut, gövdeyi cümle düzenine çevir |
| Kartlar kontrolsüz parlıyor | Kenar accent %40+ | Kenarı %22'ye sabitle, hover'da %34 |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `game-hud` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `sports-energy` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `japandi` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `ethereal` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://fonts.google.com/specimen/Rajdhani | Rajdhani (Google Fonts) — dar display; rakam ve başlık ailesi |
| https://en.wikipedia.org/wiki/Telemetry | Racing telemetry (Wikipedia) — gösterge ve ölçüm hiyerarşisi |
| https://www.gameuidatabase.com/ | Game UI Database — yarış oyunu menü referansları |

## AI brief

```text
Yarış oyunu menüsü tasarla: tur, sıralama ve süre aynı şeritte; kartlar çapraz kesimli; accent turuncu yalnız hız vurgusu. Rakamlar dar ve tabular. Animasyon yok, süs yok.

Stil: Game Racing (game-racing) · aile: Oyun & Etkileşim (152–171)
Token: --bg #121010 · --surface #1c1817 · --ink #f5efe6 · --accent #ff6a2b · --line rgba(245,239,230,.14)
Yarıçap: 0px / 6px · Tipografi: Rajdhani / Chakra Petch / Share Tech Mono
Zorunlu: Kart ve buton kesimi aynı çapraz açıyla (8–12px) kırpılır. · Accent yalnız hız, sıralama ve birincil eylem için kullanılır. · Tüm sayısal alanlar mono veya dar display; ondalık hizalı.
Yasak: Animasyonlu hız göstergesi veya kayan telemetri (v6 kapsam dışı). · Mavi-turuncu tamamlayıcı kontrast yığını. · Serif veya el yazısı başlık.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="game-racing"] {
  --bg: #121010; --bg-2: #171313;
  --surface: #1c1817; --surface-2: #241f1d;
  --ink: #f5efe6; --ink-soft: #b6a89c; --ink-faint: #8a7c72;
  --accent: #ff6a2b; --accent-ink: #1a0a03;
  --line: rgba(245,239,230,.14);
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
  --radius: 0px; --radius-lg: 6px;
  --shadow: 0 1px 0 rgba(0,0,0,.4); --shadow-hard: none;
  --font-display: "Rajdhani", system-ui, sans-serif;
  --font-body: "Chakra Petch", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: 0;
}
```
