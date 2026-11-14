# 157 · Esports League

> **Bir cümlede:** Yayın grafiği dili: dev başlık, mor accent, maç kartı ve sağa hizalı skor tabloları.

| | |
|---|---|
| **Hissiyat** | rekabetçi, yüksek enerji, "canlı yayın" |
| **En iyi** | espor ligi, turnuva sayfası, canlı skor paneli |
| **Kaçın** | sakin kurumsal ürün sayfaları, uzun makaleler |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Oyun & Etkileşim (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-esports-league"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Esports League, bir yayın grafiğinin hiyerarşisini kullanır: izleyici iki saniyede kimin önde olduğunu görmeli.

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
- **Dev display:** Anton 56px, sıkı satır aralığı, uppercase — poster etkisi.
- **Mor accent:** tek enerji rengi; turuncu rakip renk olarak kullanılmaz.
- **Maç kartı:** iki takım bloğu, ortada VS, altta mono skor.
- **Skor tablosu:** sağa hizalı sayılar, zebra yerine hairline.
- **Tipografi:** Anton (display) + Chakra Petch (gövde) + Space Mono (mono etiket).
- **Renk disiplini:** tek accent `#b07cff`; nötr skala `#0d0b14` → `#f0ecff`.
- **Yarıçap:** `0px` / `4px`; Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Zorunlu kurallar

1. Skor ve sıralama sayıları tabular ve sağa hizalı.
2. Accent yalnız kazanan/canlı durum ve CTA.
3. Başlık uppercase, gövde cümle düzeninde.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0d0b14` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#120f1c` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#171326` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#1f1a30` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#f0ecff` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#b2a8cf` | ikincil metin, açıklama | — |
| `--ink-faint` | `#8b81a8` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#b07cff` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#120720` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(240,236,255,.15)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.88:1** · `ink-soft/bg` **8.74:1** · `ink-faint/bg` **5.4:1 (dekoratif)** · `accent-ink/accent` **6.66:1**.
- HUD kontrastı: durum renkleri (canlı/hasar) accent'in tonlarından türetilir; dördüncü bir hue eklenmez.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 48px (mobil 28px) | 700 | 1.1 | 0.01em |
| H2 | aynı | 26px | 600 | 1.2 | 0.01em |
| H3 | aynı | 19px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Chakra Petch) | 15px | 400 | 1.62 | 0 |
| Küçük gövde | aynı | 13px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.2em |
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
- Radius: `0px` (buton, input, chip), `4px` (kart, modal). Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Yasaklar

- Animasyonlu skor geçişi.
- Üçten fazla takım rengi.
- Yuvarlak 12px+ kart.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 6.67:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 16.88:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.74:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.4:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 6.66:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 6.67:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 96.7 | ≥ 60 hedef | ince metin |

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
| https://fonts.google.com/specimen/Anton | Anton (Google Fonts) — poster display ailesi |
| https://en.wikipedia.org/wiki/Esports | Esports (Wikipedia) — lig/turnuva yapısı |
| https://fonts.google.com/specimen/Space+Mono | Space Mono (Google Fonts) — skor ve etiket |

## AI brief

```text
Espor turnuva sayfası tasarla: dev uppercase başlık, mor accent yalnız kazanan ve CTA, maç kartı + sağa hizalı skor tablosu.

Stil: Esports League (game-esports-league) · aile: Oyun & Etkileşim (152–171)
Token: --bg #0d0b14 · --surface #171326 · --ink #f0ecff · --accent #b07cff · --line rgba(240,236,255,.15)
Yarıçap: 0px / 4px · Tipografi: Anton / Chakra Petch / Space Mono
Zorunlu: Skor ve sıralama sayıları tabular ve sağa hizalı. · Accent yalnız kazanan/canlı durum ve CTA. · Başlık uppercase, gövde cümle düzeninde.
Yasak: Animasyonlu skor geçişi. · Üçten fazla takım rengi. · Yuvarlak 12px+ kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="game-esports-league"] {
  --bg: #0d0b14; --bg-2: #120f1c;
  --surface: #171326; --surface-2: #1f1a30;
  --ink: #f0ecff; --ink-soft: #b2a8cf; --ink-faint: #8b81a8;
  --accent: #b07cff; --accent-ink: #120720;
  --line: rgba(240,236,255,.15);
  --radius: 0px; --radius-lg: 4px;
  --shadow: 0 0 0 1px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Chakra Petch", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.03em; --blur: 0px; --grain: 0;
}
```
