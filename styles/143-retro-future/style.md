# 143 · Retro Future

> **Bir cümlede:** 1960'lar uzay çağı afişini ekrana taşıyan; krem kâğıt, hardal mürekkep, yuvarlak paneller ve yörünge yayıyla kurulmuş iyimser fütürizm arayüzü.

| | |
|---|---|
| **Hissiyat** | iyimser, dönemsel, cesur, sıcak |
| **En iyi** | lansman/etkinlik afişi, kültür-sanat vitrini, ürün hikâyesi, müze sergi sayfası |
| **Kaçın** | yoğun veri konsolu, klinik/sağlık ekranı, teknik dokümantasyon |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 6.25:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `styles/143-retro-future/tokens.json` → `[data-style="retro-future"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Retro Future, arayüzü **uzay çağı afişi** gibi kurar: krem kâğıt zemin, hardal mürekkep accent, geniş harf aralıklı geometrik başlık (Futura soyu Jost), yuvarlak paneller ve her ekranda bir yörünge yayı. İyimserlik tasarım kararıdır: hiçbir köşe keskin değil, hiçbir yüzey soğuk gri değil.

Üç kurucu karar: (1) **afiş hiyerarşisi** — tek büyük başlık (56px), tek alt cümle, tek CTA; afişte üçüncü bir vurgu katmanı yoktur; (2) **kâğıttan kesilmiş panel** — 1px mürekkep kenar + 3px alt kural + yumuşak gölge; panel gerçekten "yapıştırılmış" gibi durur; (3) **yörünge yayı** — yarım daire her ekranda bir kez, süs değil dönem işareti.

Display **Jost** (600) ile 0.1em harf aralığı: 1960'lar afiş tipografisinin ölçülebilir karşılığı. Gövde Inter, mono etiketler Space Mono.

Bedeli: bu stil veri yoğunluğunu taşımaz. Tablolar gerektiğinde zebra yarım ton ve mono sayı ile sakinleştirilir, süs bütçesi sıfıra iner.

### Ne değildir
- **Synthwave (21) değildir:** 21 koyu mor zemin + neon pembe ile 1980'ler elektroniğidir (radius 4, grid); Retro Future krem/hardal ve yuvarlaktır (20/28), neon yoktur.
- **Frutiger Aero (25) değildir:** 25 parlak mavi, cam parlaması ve gradient ile 2000'ler estetiğidir; burada gradient yok, kağıt dokusu var.
- **Grand Tourer (41) değildir:** 41 Cinzel + koyu yeşil ile lüks otomotiv dilidir; burada display Jost ve hardal accent vardır.
- **Y2K (19) değildir:** 19 Michroma + parlak mavi krom kullanır; Retro Future mat kâğıttadır.

### Nereden gelir
1960'lar space-age grafik tasarımı (NASA Graphics Standards, Expo 67 afişleri), Futura/Helvetica öncesi geometrik sans kültürü ve roket çağı iyimserliği. Ekranda yeniden kullanılmasının nedeni: koyu "tech" estetiğinin tekdüzeliğine karşı sıcak bir fütürizm arayışı. Klişeye dönüşmemesi için korunacak detay: harf aralığının gerçekten geniş olması (0.1em) ve yörünge yayının yarım daire kalması — tam daire "atom" klişesine kayar.

### 3 saniyede tanıma testi
1. Krem/kâğıt zemin; accent hardal, üçüncü renk yok.
2. Başlık geniş harf aralıklı geometrik sans (Jost), neredeyse afiş puntosunda.
3. Paneller yuvarlak (20–28px) ve altında 3px mürekkep kural var.
4. Ekranda bir yörünge yayı (yarım daire) ve en fazla üç hız çizgisi.
5. Butonlar hap; hiçbir köşe keskin değil.

## Görsel imza
- **Harf aralığı:** display 0.1em, H2 0.06em, etiket 0.22em — dönemin imzası.
- **Yapıştırılmış panel:** 1px `--ink` kenar + `0 3px 0 var(--ink)` alt kural + tek katman gölge.
- **Yörünge yayı:** 2px accent yarım daire, hero ve sayfa zemininde bir kez.
- **Hız çizgileri:** 6/3/2px üç yatay çizgi, accent, opaklık %50; en fazla üç.
- **Radius:** `--radius` 20px (kart içi, input), `--radius-lg` 28px (kart, modal); butonlar 999px.
- **Doku:** `--grain .03` kâğıt; tarama çizgisi ve neon yok.
- **Palet sıcaklığı:** zemin krem (`#f3ecdd`), mürekkep sıcak siyah (`#1b1710`) — soğuk gri yasak.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f3ecdd` | afiş zemini (krem) | panel zemini |
| `--bg-2` | `#ece3d0` | bölüm ayırıcı, input zemini | kart yüzeyi |
| `--surface` | `#faf5e9` | panel, kart (kâğıt) | sayfa zemini |
| `--surface-2` | `#e8dfca` | zebra, chip, ikincil yüzey | birincil kart |
| `--ink` | `#1b1710` | metin, kenarlık, kural | dekoratif dolgu |
| `--ink-soft` | `#4f4737` | ikincil metin | başlık |
| `--ink-faint` | `#857a63` | yalnız dekoratif etiket | etkileşimli metin |
| `--accent` | `#7a5c04` | CTA, afiş vurgusu, yörünge yayı | gövde metni |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(27,23,16,.16)` | ikincil ayırıcı | ana kenarlık (onun yerine `--ink`) |

- Ölçülen kontrast: `ink/bg` = **15.17:1** · `ink-soft/bg` = **7.80:1** · `accent-ink/accent` = **6.25:1** · `ink-faint/bg` = **3.60:1**.
- Tek vurgu kuralı: accent yalnız birincil eylem ve afiş vurgusu. Alarm `--danger`, uyarı `--warn`, onay `--ok`.
- Yasak kombinasyon: gövde metninde hardal; accent üstünde `--ink-soft`.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Jost (`--font-display`) | 56px / mobil 32px | 600 | 1.04 | `--tracking` 0.1em |
| H2 | Jost | 30px | 600 | 1.16 | 0.06em |
| H3 | Inter | 21px | 600 | 1.28 | 0 |
| Gövde | Inter (`--font-body`) | 16px | 400 | 1.62 | 0 |
| Etiket / sayı | Space Mono (`--font-mono`) | 11px | 400/700 | 1.44 | 0.22em |

- Ölçek oranı ≈ 1.5; kullanılan basamaklar: 11 · 12 · 13 · 16 · 21 · 30 · 56.
- Ölçü önerisi: `h1 { font-size: clamp(32px, 5vw, 56px); }`
- Gövde metni maksimum satır uzunluğu: 62 ch (geniş harf aralığı ölçüyü daraltır).
- Ağırlık kuralı: Jost 400/600; 700 afiş başlığında kullanılmaz (harf aralığıyla birlikte taşma yapar).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 afiş paneli 5/7 · 768 tek sütun · 390 başlık 32px, yay küçülür |

- Asimetri kuralı: afiş paneli 5/7; ekran başına bir asimetri.
- Bölüm ritmi: art arda en fazla 2 yuvarlak panel; üçüncü blok tam genişlik afiş bandı olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | kâğıt, bölüm ayırıcı |
| Panel | `--surface` | `0 20px 44px -34px` + `0 3px 0 var(--ink)` | kart, KPI, tablo |
| Yüzen katman | `--surface` + `--shadow` | aynı | modal, toast |

- Kenarlık formülü: `1px solid var(--ink)` + alt kural `0 3px 0 var(--ink)`.
- Derinlik nereden gelir: yapıştırılmış kâğıt etkisi (kenar + alt kural + yumuşak gölge); blur/bevel yok.
- Radius: `--radius` 20px (input, kart içi), `--radius-lg` 28px (kart, modal); butonlar 999px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 26px | 999px | 13px/600 Inter 0.04em | `--accent` zemin, `--accent-ink`, `--shadow` | hover %90 (340ms) · active 2px (kural kısalır) · focus 3px accent · disabled %42 · loading yörünge noktaları |
| Buton (ikincil) | 44px | 0 26px | 999px | 13px/600 | `--surface`, 1px `--ink`, `--ink` | hover `--surface-2` |
| Input | 44px | 0 16px | `--radius` | 15px Inter | `--surface`, 1px `--ink` | focus 3px accent · error `--danger` · disabled %42 |
| Kart | içerik | 24px | `--radius-lg` | — | `--surface`, 1px `--ink`, alt kural + gölge | hover'da yay %45 → %60 |
| Chip / badge | 26px | 0 12px | 999px | 11px/600 mono 0.1em | `--surface-2`, 1px `--ink` | seçili: accent zemin |
| Nav | 60px | 0 28px | 0 | 13px/400 | `--bg`, alt **3px ink** kural | aktif: accent nokta + 3px kural |
| Tablo satırı | 42px | 8px 14px | 0 | 13px (sayı mono) | alt 1px `--line`, zebra `--surface-2` | hover `--surface-2` |
| Modal / sheet | — | 26px | `--radius-lg` | 16px/400 | `--surface`, 1px `--ink`, gölge | ortada, üstte ince yörünge yayı |
| Toast | 42px | 10px 16px | 999px | 12px mono | `--surface`, 1px `--ink`, gölge | 4600ms, üst orta |
| Grafik paleti | — | — | — | — | `--accent` · `--ink` · `--ink-soft` (3 seri) | çizgi 2px, uçta yuvarlak nokta |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 2px`.
- Dokunma hedefi: en az 44×44px; buton ve input 44px, chip 26px görünür ama 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 20px ızgara; roket, uydu, yörünge, atom |
| Fotoğraf | Yok — dönem afişi; fotoğraf yerine vektör şema |
| İllüstrasyon | Yalnız hız çizgileri ve yarım daire yörünge |
| Doku | `--grain .03` kâğıt; tarama çizgisi yok |
| Logo alanı | Jost 600 kelime logosu, 0.14em; 18px halka + üç çizgi işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Afiş paneli 5/7; dev başlık, tek CTA, yörünge yayı | `shots/01-landing.png` |
| Dashboard | orta | Yuvarlak paneller; tablolar zebra, sayı mono | `shots/02-dashboard.png` |
| Form | düşük | 44px alanlar, hap buton, hardal odak | — |
| Liste / tablo | orta | 42px satır, yarım ton zebra, 3px alt kural | — |
| Boş durum | orta | Boş yörünge yayı + tek CTA | — |
| Onboarding | yüksek | 3 adım: fikir → yörünge → lansman | — |
| Pricing | orta | Plan kartları yapıştırılmış kâğıt; öne çıkan hardal kural | — |
| Giriş / ödeme | çok düşük | Tek panel, yay yok, hap buton | — |
| Modal | orta | Ortada afiş; üstte yarım yay | — |
| Bildirim / toast | orta | Hap toast, mono sayaç | — |
| Hata | düşük | `--danger` kenar + "pencere kapandı" | — |
| Profil / ayar | orta | Harf aralığı yoğunluğu, yay görünürlüğü | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.61s**, y **16px**, stagger **0.09** | `cubic-bezier(.3,1.2,.4,1)` | `opacity` + `transform` |
| Scroll reveal | **0.7s**, trigger **top 77%**, y **18px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **1.1**, mesafe **+120%** (yörünge yayı büyür) | scrub doğrusal | `transform` (yay ölçeği) |
| Hover | **340ms**, görsel scale **1.035** | `ease-out` | `transform` |
| Basma | 140ms | aynı eğri | `transform` (2px) |
| CTA vurgusu | 240ms | aynı eğri | `transform` (1.02) |

- Bu stilin ölçülebilir imzası: `enter 0.61s / cubic-bezier(.3,1.2,.4,1) / 16px / 0.09` + `scroll top 77% / 0.7s / 18px` + `pin scrub 1.1 / +120%` + `hover 340ms / 1.035`. Bu eğri (hafif aşan) ve `hover 340ms + 1.035` ikilisi katalogda yalnız burada.
- `prefers-reduced-motion`: tüm süreler 0.01ms; yay ölçeği ve hız çizgileri sabitlenir.
- Bu stile yasak hareket: sürekli dönen roket/uydu, neon glow nabzı, parallax, gradient geçişi.

## Koyu mod

| Token | Açık (kâğıt afiş) | Koyu (gece afişi) |
|---|---|---|
| `--bg` | `#f3ecdd` | `#16130d` |
| `--bg-2` | `#ece3d0` | `#1c1811` |
| `--surface` | `#faf5e9` | `#221d14` |
| `--surface-2` | `#e8dfca` | `#2a241a` |
| `--ink` | `#1b1710` | `#f4eddc` |
| `--ink-soft` | `#4f4737` | `#c2b69c` |
| `--ink-faint` | `#857a63` | `#918872` |
| `--accent` | `#7a5c04` | `#e8b93f` |
| `--accent-ink` | `#ffffff` | `#1a1405` |
| `--line` | `rgba(27,23,16,.16)` | `rgba(244,237,220,.16)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **15.88:1** · `ink-soft/bg` = **9.24:1** · `accent-ink/accent` = **9.98:1** · `ink-faint/bg` = **5.27:1**.
- Koyu modda değişen başka ne var: accent parlar (hardal → sarı), kâğıt dokusu `--grain` aynı kalır ama alt kural `--ink` korunur.
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="retro-future"]`.

## Zorunlu kurallar
- Uzay çağı tipografisi: Jost 600 + 0.1em harf aralığı; başlık 56px üstüne çıkmaz.
- Panel kenarı 1px `--ink` + `0 3px 0 var(--ink)` alt kural.
- Yörünge yayı yarım daire ve ekran başına bir kez.
- Hız çizgileri tek yönde, en fazla üç.
- Zemin krem, mürekkep sıcak siyah; soğuk gri yok.
- Accent hardal yalnız CTA ve afiş vurgusunda.

## Yasaklar
- Neon/cyberpunk paleti, glow, tarama çizgisi.
- 28px üzeri radius veya keskin 0 radius.
- Roket fotoğrafı/kolaj, emoji roket.
- Gradient metin; gövde metninde hardal.
- Saniyede 1+ flaş, sürekli dönen uydu.
- Tam daire "atom" motifi (yarım yay kuralını bozar).

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `accent-ink/accent` = 6.25:1; gövde 15.17:1; `ink-faint/bg` = 3.60:1 (dekoratif).
- `--ink-faint` yalnız dekoratif etiketlerde; etkileşimli metin daima `--ink`/`--ink-soft`.
- Geniş harf aralığı okunurluğu düşürmesin diye ölçü 62 ch'yi geçmez.
- Odak halkası 3px accent + 2px offset; krem zeminde net.
- 390px'te başlık 32px, yay küçülür; taşma yok.
- `prefers-reduced-motion` açıkken yay ve hız çizgileri sabit.

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
| "Kitsch" görünüyor | üçüncü renk + tam daire motif | paleti iki renge indir, yayı yarım bırak |
| Başlık taşıyor | 0.1em aralık + uzun kelime | punktoyu düşür, `max-width` ch ver |
| Panel yüzmüyor | alt kural yok | `0 3px 0 var(--ink)` ekle |
| Soğuk/ağır | gri zemin | krem + sıcak siyah |
| Okunmuyor | gövde hardal | gövde `--ink`, accent yalnız CTA |
| Mobilde kırılıyor | 5/7 korunmuş | 768 altında tek sütun |

## Komşu stiller

- **Uyumlu:** `grand-tourer` — dönemsel vitrin dili; hap form ve kural ortak.
- **Uyumlu:** `frutiger-aero` — iyimser gelecek; gradient eklenirse 2000'lere kayar (dikkat).
- **Uyumlu:** `synthwave` — retro ekseni; koyu varyant olarak yan yana kullanılabilir.
- **Yasak:** `terminal-ui` — mono ızgara ve 0 radius afiş dilini bozar.
- **Yasak:** `swiss-design` — keskin ızgara ve 0 radius yuvarlak panel kuralıyla çelişir.
- **Yasak:** `neo-brutalism` — kalın siyah kontur afişin kâğıt hissini sertleştirir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.moma.org/collection/terms/space-age | retro-fütürist tipografi ve renk |
| https://www.nasa.gov/history/nasa-graphics-standards-manual/ | harf aralığı ve işaret dili |
| https://fonts.google.com/specimen/Jost | Futura benzeri display ölçüleri |
| https://www.nngroup.com/articles/legibility-of-typography/ | geniş harf aralığının sınırı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Retro Future (styles/143-retro-future/style.md, tokens.json)
Token: sadece [data-style="retro-future"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Jost 600 + tracking .1em (yalnız başlık), gövde Inter 400/600,
  etiket Space Mono .22em. Ölçek 11/12/13/16/21/30/56; gövde ölçü 62ch.
Yüzey: krem kâğıt (#f3ecdd) + sıcak mürekkep; radius 20/28px, hap buton 999px;
  panel = 1px var(--ink) + `0 3px 0 var(--ink)` alt kural + tek katman gölge.
Imza: yarım daire yörünge yayı (ekran başına 1) + en fazla 3 yatay hız çizgisi;
  afiş hiyerarşisi: tek başlık (<=56px), tek cümle, tek CTA.
Renk: tek accent #7a5c04 (hardal); gövde metninde accent kullanılmaz.
Hareket: enter .61s cubic-bezier(.3,1.2,.4,1) y16 stagger .09; scroll top 77% .7s y18 once;
  1 pin scrub 1.1 (+120%); hover 340ms scale 1.035; reduced-motion zorunlu.
Yasak: neon/glow, 28px üstü veya 0 radius, üçüncü renk, tam daire atom motifi, roket fotoğrafı.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Başlık Jost 600 ve 0.1em aralıkla taşmıyor.
- [ ] Panellerde 1px kenar + 3px alt kural var.
- [ ] Yörünge yayı yarım daire ve tek.
- [ ] Kontrast: gövde 15.17:1, accent üstü 6.25:1.
- [ ] Zemin krem, soğuk gri yok.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken yay/hız çizgileri sabit.

## Token

```css
[data-style="retro-future"] {
  --bg: #f3ecdd; --bg-2: #ece3d0;
  --surface: #faf5e9; --surface-2: #e8dfca;
  --ink: #1b1710; --ink-soft: #4f4737; --ink-faint: #857a63;
  --accent: #7a5c04; --accent-ink: #ffffff;
  --line: rgba(27,23,16,.16);
  --radius: 20px; --radius-lg: 28px;
  --shadow: 0 20px 44px -34px rgba(27,23,16,.55); --shadow-hard: 0 3px 0 var(--ink);
  --font-display: "Jost", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.1em; --blur: 0px; --grain: .03;
  --danger: #8f2a12; --danger-ink: #ffffff;
  --ok: #28603c; --warn: #7a5205;
}
```

Koyu mod bloğu `styles/143-retro-future/token-block.css` içinde `[data-theme="dark"][data-style="retro-future"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
