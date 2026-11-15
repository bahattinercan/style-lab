# 152 · Game HUD

> **Bir cümlede:** Oyun içi katmanın okunur hâli: keskin köşe, tabular rakam, tek sinyal rengi ve durum odaklı hiyerarşi.

| | |
|---|---|
| **Hissiyat** | kontrollü gerilim, "her şey bir tuş uzağında" |
| **En iyi** | oyun içi katmanlar, espor yayın paneli, canlı skor ekranı, kontrol paneli |
| **Kaçın** | uzun okuma metni, form ağırlıklı kurumsal akışlar |
| **Zorluk** | orta · **Erişilebilirlik** | iyi (koyu zeminde 4.5:1 üstü) |
| **Aile** | Oyun & Etkileşim (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-hud"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Game HUD, oyuncunun ekranda gördüğü her sayının bir karar anına bağlı olduğu varsayımıyla kurulur: skor, can, süre ve hedef aynı ızgarada hizalanır. Süs yok; kontrast ve keskinlik var.

### Ne değildir
- Neon her yere sürülmüş bir tema değildir; accent sadece durum ve eylem taşır.
- Koyu zemin tek başına oyun stili yapmaz; sayısal ritim ve keskin köşe gerekir.
- Pixel font zorunlu değil; yazılım HUD'ları da bu ailedendir.

### Nereden gelir
Arcade kokpitleri, konsol HUD'ları ve PC oyun menüleri; 2010'lardan sonra espor yayın panelleriyle sadeleşti.

### 3 saniyede tanıma testi
1. Köşeler keskin mi (≤6px)?
2. Rakamlar tabular ve mono mu?
3. Accent sayısı tek mi, durum için mi kullanılmış?

## Görsel imza
- **Keskin köşe:** 2/4px; HUD bir çerçeve gibi davranır, yumuşak yuvarlatma yok.
- **Tek sinyal rengi:** accent yalnız canlı durum ve birincil eylem; ikinci bir neon hue yasak.
- **Tabular rakam:** skor/timer/sayaç mono ve sağa hizalı; rakam genişliği zıplamaz.
- **İnce accent kenar:** kartlar 1px accent %22 kenarla ayrılır, gölge kullanılmaz.
- **Uppercase başlık:** başlık ve etiket uppercase; gövde metni cümle düzeninde kalır.
- **Tipografi:** Chakra Petch (display) + Chakra Petch (gövde) + Share Tech Mono (mono etiket).
- **Renk disiplini:** tek accent `#38e8c0`; nötr skala `#0b1118` → `#e9f2fa`.
- **Yarıçap:** `2px` / `4px`; Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Zorunlu kurallar

1. Accent sayısı bir; durum bilgisi metin veya ikonla da verilir.
2. Tüm sayılar `font-variant-numeric: tabular-nums` ile yazılır.
3. Kart ve buton köşesi ≤ 4px; gölge yerine 1px kenar kullanılır.
4. HUD katmanı en fazla 3 seviye: zemin, panel, yüzen bildirim.
5. Kontrast gövde ≥ 4.5:1, odak halkası ≥ 3:1.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0b1118` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#0e161f` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#121c26` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#182430` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#e9f2fa` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#a9bccd` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7f93a5` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#38e8c0` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#04140f` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(233,242,250,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.74:1** · `ink-soft/bg` **9.72:1** · `ink-faint/bg` **5.98:1 (dekoratif)** · `accent-ink/accent` **12.11:1**.
- HUD kontrastı: durum renkleri (canlı/hasar) accent'in tonlarından türetilir; dördüncü bir hue eklenmez.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 48px (mobil 28px) | 700 | 1.1 | 0.01em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Köşe ya 0 ya da tek küçük değer (≤6px); yumuşak 12px+ yuvarlatma yasak.

## Yasaklar

- Sonsuz yanıp sönen gösterge veya animasyonlu skor (v6 kapsam dışı).
- Üçten fazla durum rengi; sarı/yeşil/kırmızı üçlüsünün keyfî kullanımı.
- Yumuşak 12px+ yuvarlatma ve çok katmanlı gölge.
- Serif başlık veya script font.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 12.16:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 16.74:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 9.72:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.98:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 12.11:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 12.16:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 98 | ≥ 60 hedef | ince metin |

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
| Garnitür | `game-racing` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `arcade-8bit` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `japandi` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `wabi-sabi` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://www.gameuidatabase.com/ | Game UI Database — oyun içi katman örnekleri; HUD yoğunluğu karşılaştırması |
| https://en.wikipedia.org/wiki/Heads-up_display | Heads-up display (Wikipedia) — HUD katmanlarının bilgi hiyerarşisi |
| https://fonts.google.com/specimen/Chakra+Petch | Chakra Petch (Google Fonts) — teknik display ailesi; uppercase başlık |
| https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric | MDN · tabular-nums — sabit genişlikli rakam ayarı |

## AI brief

```text
Oyun içi bir kontrol paneli tasarla. Skor, can ve süre aynı yatay şeritte; ana eylem tek buton. Rakamlar mono ve tabular, köşeler 2px, accent yalnız canlı durum için. Süs, gölge ve animasyon yok; hiyerarşi puntodan gelir.

Stil: Game HUD (game-hud) · aile: Oyun & Etkileşim (152–171)
Token: --bg #0b1118 · --surface #121c26 · --ink #e9f2fa · --accent #38e8c0 · --line rgba(233,242,250,.14)
Yarıçap: 2px / 4px · Tipografi: Chakra Petch / Chakra Petch / Share Tech Mono
Zorunlu: Accent sayısı bir; durum bilgisi metin veya ikonla da verilir. · Tüm sayılar `font-variant-numeric: tabular-nums` ile yazılır. · Kart ve buton köşesi ≤ 4px; gölge yerine 1px kenar kullanılır.
Yasak: Sonsuz yanıp sönen gösterge veya animasyonlu skor (v6 kapsam dışı). · Üçten fazla durum rengi; sarı/yeşil/kırmızı üçlüsünün keyfî kullanımı. · Yumuşak 12px+ yuvarlatma ve çok katmanlı gölge.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="game-hud"] {
  --bg: #0b1118; --bg-2: #0e161f;
  --surface: #121c26; --surface-2: #182430;
  --ink: #e9f2fa; --ink-soft: #a9bccd; --ink-faint: #7f93a5;
  --accent: #38e8c0; --accent-ink: #04140f;
  --line: rgba(233,242,250,.14);
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
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 0 0 1px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Chakra Petch", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
