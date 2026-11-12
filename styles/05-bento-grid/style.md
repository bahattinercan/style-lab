# 05 · Bento Grid

> **Bir cümlede:** Değişken boyutlu modüler kutular; her kutu tek bir cevap verir, ızgara "her şey yerinde" hissini kurar.

| | |
|---|---|
| **Hissiyat** | düzenli, taranabilir, ürün vitrini, "kontrol paneli" |
| **En iyi** | dashboard, özellik vitrini, ürün landing'i, kişisel ana ekran |
| **Kaçın** | uzun okuma, tek akışlı form, ağır anlatı sayfası |
| **Zorluk** | orta (mobil kırılganlığı) · **Erişilebilirlik** | iyi |
| **Aile** | Sade (01–07) · **Token** | `kit/tokens.css` → `[data-style="bento-grid"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Bento, Japon yemek kutusu düzeninin arayüze uyarlanması: **değişken boyutlu kartlar**, **sabit gutter**, **yüksek radius**, **yumuşak gölge**. Her kutu bağımsız bir "mini cevap" taşır (sayı, grafik, durum, eylem) ve göz ızgarayı tarayarak bilgiyi toplar.

Kazandığı şey: taranabilirlik ve vitrin etkisi. Feda ettiği şey: akış — bento okutmaz, gösterir.

### Ne değildir
- **Dashboard değildir.** Dashboard işlevsel yoğunluk; bento **vitrin** düzenidir, boşluk ve radius ile nefes alır.
- **Minimalism değildir.** Minimalizm gölgeyi reddeder; bento yumuşak gölge ve büyük radius kullanır.
- **Masonry değildir.** Masonry düzensiz yükseklik; bento **hizalı** satır/kolon sistemidir.
- **"Her şeyi kutuya koy" değildir.** Kutular arasında hiyerarşi yoksa sonuç "kart çorbası" olur.

### Nereden gelir
Apple/Google'ın widget ekranları, kişisel panolar ve 2022+ ürün sitelerinin "özellik vitrini" ihtiyacı. Kutu boyutu = önem sırası olduğu için pazarlama ile ürün arayüzünü aynı dilde buluşturur.

### 3 saniyede tanıma testi
1. Kartlar farklı boyutlarda mı (2×1, 1×2, 2×2)?
2. Gutter her yerde aynı mı (16–20px)?
3. Radius ≥ 16px, gölge yumuşak mı?
4. Her kartta tek bir sayı/grafik/eylem mi var?
5. Mobilde tek kolona düşüyor mu, yoksa kartlar taşıyor mu?

## Zorunlu kurallar

1. **Değişken boyut:** en az 3 farklı kart ölçüsü (2×2, 2×1, 1×1); her satırda en fazla 1 "kahraman" kart.
2. **Sabit gutter:** 16px (mobil 12px); kart aralıkları asla değişmez.
3. **Tek cevap kuralı:** her kartta bir sayı, bir grafik veya bir eylem — ikisi birden değil.
4. **Radius 18/24px, yumuşak gölge** (`0 1px 2px` + `0 8px 24px`); sert gölge yok.
5. **Mobilde tek kolon:** 2+ kolonlu kartlar tam genişliğe düşer, yükseklik korunur.
6. **Kart içi boşluk 16–20px**, kart başlığı 11–12px mono etiket.

## Yasaklar

- 4+ farklı kart ölçüsü, rastgele boşluklar.
- Kart içinde kart (kutu içinde kutu) — 1 seviye yeter.
- 14px altı gövde metni; kart içinde 5+ satır paragraf.
- Sert/koyu gölge, kalın kontur, gradient zemin.
- Mobilde 2 kolon ısrarı (taşma/okunmazlık).
- Her karta farklı radius/gölge tonu.

## Görsel imza
- **Kart anatomisi:** mono etiket (11px) → büyük sayı/başlık (28–34px) → tek satır açıklama.
- **Kahraman kart:** 2×2, sayı 40px, accent vurgu çubuğu veya mini grafik.
- **Radius 18px** (küçük kart) / **24px** (büyük kart).
- **Gölge:** `0 1px 2px rgba(18,19,15,.05), 0 8px 24px rgba(18,19,15,.04)` — iki katman, düşük opaklık.
- **Accent dokunuşu:** kart başına en fazla 1 accent öğe (ikinci renk yok).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4f4f2` | sayfa | kart zemini |
| `--bg-2` | `#ececea` | bölüm zemini | buton |
| `--surface` | `#ffffff` | tüm kartlar | — |
| `--surface-2` | `#fafaf9` | ikincil kart, hover | vurgu |
| `--ink` | `#12130f` | başlık, sayı | — |
| `--ink-soft` | `#5b5f58` | kart açıklaması | sayı |
| `--ink-faint` | `#9aa096` | mono etiket | gövde metni |
| `--accent` | `#1f6feb` | tek vurgu, grafik, aktif | geniş zemin |
| `--accent-ink` | `#ffffff` | accent üstü metin | — |
| `--line` | `rgba(18,19,15,.08)` | kart kenarı (opsiyonel) | metin |

- Ölçülen kontrast: `ink/bg` **16.94:1** · `ink-soft/bg` **5.92:1** · `ink-faint/bg` **2.43:1** · `accent-ink/accent` **4.63:1**.
- `--ink-faint` yalnızca mono etiket; gövde metni `--ink-soft`.
- Yasak: kart başına farklı accent; grafikte 3+ renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Kart sayısı / display | Inter | 34–40px | 700 | 1.0 | `-0.02em` |
| Kart başlığı | Inter | 16px | 600 | 1.3 | `-0.01em` |
| Gövde / açıklama | Inter | 14px | 400 | 1.5 | `0` |
| Mono etiket | JetBrains Mono | 11px | 500 | 1.2 | `0.12em`, uppercase |
| Buton | Inter | 13px | 600 | 1 | `0` |

- Sayılar **tabular**; birim (₺, %, adet) 14px `--ink-soft` olarak yanında.
- Kart içi maksimum satır: başlık 2 satır, açıklama 2 satır.
- Ölçek: 11 → 14 → 16 → 24 → 34 → 40.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 4 (mobil 1) / 6 (tablet) / 12 (masaüstü kart alanı) |
| Gutter | 16px (mobil 12px) |
| Container | 1200px |
| Kart iç boşluk | 18px |
| Breakpoint | 640 / 900 / 1200 px |

- Bento ızgarası `grid-auto-rows` ile sabit satır yüksekliği kullanır (ör. 120px) ve kartlar `span` ile büyür.
- Bir satırda en fazla 1 kahraman kart; kahraman komşusu küçük kartlarla dengelenir.
- Bölüm dikey boşluk 56px; kartlar arası 16px — iki farklı ritim karıştırılmaz.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Kart | `--surface` | `--shadow` (iki katman) | tüm kutular |
| Yüzen | `--surface` | aynı + 1px kenar | modal, popover |

- Derinlik gölgeden gelir ama **düşük opaklıkta**; koyu gölge bento'yu "eski" gösterir.
- Radius: küçük kart 18px, büyük kart 24px; buton/input 18px ile uyumlu.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 0 16px | 18px | 13/600 | `--accent` + `--accent-ink` | hover: %94 parlaklık · focus: 2px `--accent` halka · disabled: %40 |
| Buton (sessiz) | 40px | 0 14px | 18px | 13/600 | `--surface-2` + `--line` | hover: `--bg-2` |
| Input | 44px | 0 14px | 18px | 14/400 | `--surface-2` + 1px `--line` | focus: 2px `--accent` halka · error: `--danger` |
| Kart | değişken | 18px | 18/24px | etiket + sayı + açıklama | `--surface` + `--shadow` | hover (tıklanabilir): `translateY(-2px)` + gölge %20 güçlenir |
| Chip | 24px | 0 10px | 999px | 11/500 | `--surface-2` + `--line` | aktif: `--accent` |
| Nav | 64px | 0 24px | — | 14/500 | `--bg` + alt 1px `--line` | aktif: 2px alt `--accent` |
| Tablo satırı | 52px | 12px 16px | — | 14/400 | satır altı 1px `--line` | hover: `--surface-2` |
| Modal | içerik | 24px | 24px | H2 + 14 | `--surface` + `--shadow` | backdrop %35 |
| Toast | 44px | 0 16px | 18px | 13/500 | `--ink` + `--bg` | 4sn |
| Grafik | — | — | 4px uç | eksen 10 mono | `--accent` + `%12` dolgu | 2 seri |

- Odak halkası 2px accent, offset 2px; 18px radius'ta halka karta yapışmaz.
- Dokunma hedefi 44px; kartın tamamı tıklanabilirse 44px altına inmez.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px, kart etiketinin solunda |
| Fotoğraf | Kart içinde 18px radius ile kırpılır; 1 kartta en fazla 1 görsel |
| İllüstrasyon | Küçük ikonografi; büyük illüstrasyon 1 kahraman kartta |
| Doku | Yok (`--grain: 0`) |
| Logo | 20px, kartın üst satırında |
| Mini grafik | Sparkline 24–40px yükseklik, 1 seri |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 1 dev başlık + altında 2×2 kahraman kart + 4 küçük özellik kartı | `shots/01-landing.png` |
| Dashboard | yüksek | 4 kolon ızgara: KPI 1×1 ×3, grafik 2×1, tablo 2×2; her kartta tek sayı | `shots/02-dashboard.png` |
| Form | düşük | Bento kullanma; tek kolon form (stil sadece radius/renk) | — |
| Liste / tablo | düşük | Tablo tek kart içinde 2×2 alan; satırlar hairline | — |
| Boş durum | orta | 1×1 kartta ikon + tek cümle + buton | — |
| Onboarding | yüksek | Adım başına 1 büyük kart; ilerleme nokta | — |
| Pricing | orta | 3 kolon kart, orta kart 2×1 (daha uzun) + accent kenar | — |
| Giriş / ödeme | çok düşük | Tek 1×1 kart, 2 alan; süs yok | — |
| Modal | orta | 24px radius, 1 kart içinde içerik | — |
| Bildirim / toast | orta | 18px radius pill | — |
| Hata | düşük | Kart içinde ikon + 2 satır | — |
| Profil / ayar | orta | 2 kolon ızgara; her ayar grubu 1 kart | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `ease-out` | `transform: scale(.99)` |
| Giriş | 450ms | `cubic-bezier(.2,.6,.2,1)` | `opacity` + 16px `translateY`, stagger 80ms |
| Scroll (`top 85%`) | 550ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 200ms | aynı eğri | `transform: scale(1.015)` |
| Ödül | 240ms | `ease-out` | sayı `opacity` 0→1 |

- Kartlar aynı anda hareket etmez: satır bazında 80ms gecikme kabul.
- `prefers-reduced-motion`: transform kapanır, sadece opacity.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f4f4f2` | `#0e0f0d` |
| `--bg-2` | `#ececea` | `#151714` |
| `--surface` | `#ffffff` | `#191b18` |
| `--surface-2` | `#fafaf9` | `#202320` |
| `--ink` | `#12130f` | `#f0f1ee` |
| `--ink-soft` | `#5b5f58` | `#a8ada5` |
| `--line` | `rgba(18,19,15,.08)` | `rgba(255,255,255,.10)` |
| `--accent` | `#1f6feb` | `#5b9cff` |

- Koyu modda gölge yerine kart kenarı (`--line`) öne çıkar; gölge opaklığı .5× yapılır.

## Erişilebilirlik

- Gövde `ink/bg` 16.94:1, açıklama 5.92:1 → güvenli; `--ink-faint` 2.43:1 yalnızca etiket.
- Accent üstü beyaz **4.63:1** → 13px/600 buton metni sınırda; 12px altına inme.
- Kart içi metin 14px altına inmez; etiketler 11px mono (uppercase, tracking'li) okunur.
- Odak halkası kart radius'una rağmen görünür (offset 2px).
- Dokunma hedefi 44px; küçük kartlar 1×1 olsa da min yükseklik 120px.
- Renk tek başına anlam taşımaz: durum etiketi metinle birlikte.

## Örnek görseller

Aynı içerik, 34 stilde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-landing.png` | Landing — Hero hiyerarşisi, imza motif, tek CTA; süsün en yüksek olduğu kare. |
| `shots/02-dashboard.png` | Dashboard — Süsün geri çekildiği operasyonel ekran; KPI ve tablo okunurluğu. |
| `shots/04-components.png` | Bileşenler · temel — Renk, tipografi, yüzey, boşluk ritmi — temel levha. |
| `shots/17-dark-landing.png` | Koyu mod · landing — Koyu mod · landing |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| "Kart çorbası" | Hiyerarşi yok, hepsi aynı boyut | 1 kahraman 2×2 + farklı span'ler |
| Mobilde kırılıyor | Sabit `grid-column: span 3` | Mobilde tüm kartlar `span 1` (tam genişlik) |
| Dağınık | 4+ farklı ölçü, değişken gutter | 3 ölçü + tek gutter |
| Yorgun | Her kartta 3+ satır metin | Tek cevap kuralı: sayı **veya** grafik **veya** eylem |
| Eski görünüm | Koyu gölge | İki katman, düşük opaklık |
| Okunmuyor | 11px etiket + düşük kontrast | Etiket mono uppercase ≥ 11px, `--ink-soft` kullan |

## Komşu stiller

- **Uyumlu:** `01 minimalism` (sade zemin + bento vitrin), `02 swiss-design` (ızgara), `12 aurora-ui` (koyu zemin + bento hero).
- **Yasak:** `31 scrapbook` (hizasız kolaj), `17 maximalism` (katman enflasyonu), `24 pixel-art` (radius çelişkisi).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.apple.com/ios/ | Widget/bento düzeni ve radius oranları |
| https://www.notion.so/product | Özellik vitrininde değişken kart |
| https://linear.app | Yoğun panoda kart hiyerarşisi |

## AI brief

```
Stil: Bento Grid (styles/05-bento-grid/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="bento-grid"]; hard-coded renk/gölge/radius YASAK.
Izgara: grid-auto-rows sabit (120px) + span'ler (2x2, 2x1, 1x1); gutter 16px (mobil 12px); mobilde tüm kartlar tam genişlik.
Kart: --surface + radius 18/24px + --shadow (iki katman); padding 18px; mono etiket 11px + sayı 34–40px + 1 satır açıklama.
Tek cevap kuralı: her kartta sayı VEYA grafik VEYA eylem.
Tipografi: Inter; sayı tabular 700, açıklama 14/400 --ink-soft, etiket mono 11 uppercase 0.12em.
Renk: tek accent (--accent); kart başına en fazla 1 accent öğe.
Hareket: hover translateY(-2px) + gölge 180ms; reduced-motion'da yalnız opacity.
Yasak: kart içinde kart, koyu gölge, 4+ ölçü, değişken gutter, mobilde 2 kolon ısrarı.
Çıktı: kod + tek paragraf not (span dağılımını ve mobil düşüşü nasıl kurdun).
```

**Teslim öncesi öz-denetim**
- [ ] En az 3 farklı kart ölçüsü, satır başına ≤ 1 kahraman kart.
- [ ] Gutter her yerde aynı (16/12px).
- [ ] Her kartta tek cevap var.
- [ ] Radius 18/24px, gölge iki katman ve yumuşak.
- [ ] Mobilde tek kolon, taşma yok.
- [ ] Etiketler ≥ 11px, gövde ≥ 14px; kontrast 4.5:1.

## Token

```css
[data-style="bento-grid"] {
  --bg: #f4f4f2; --bg-2: #ececea;
  --surface: #ffffff; --surface-2: #fafaf9;
  --ink: #12130f; --ink-soft: #5b5f58; --ink-faint: #9aa096;
  --accent: #1f6feb; --accent-ink: #ffffff;
  --line: rgba(18,19,15,.08);
  --radius: 18px; --radius-lg: 24px;
  --shadow: 0 1px 2px rgba(18,19,15,.05), 0 8px 24px rgba(18,19,15,.04);
  --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
