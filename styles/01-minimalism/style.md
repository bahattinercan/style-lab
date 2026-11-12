# 01 · Minimalism

> **Bir cümlede:** Fazlalığın silinmesi; hiyerarşiyi renk ve süs değil, boşluk + ölçek + ağırlık kurar.

| | |
|---|---|
| **Hissiyat** | sakin, pahalı sessizlik, "her şey yerli yerinde" |
| **En iyi** | odak gereken araçlar, okuma, finans, not uygulamaları |
| **Kaçın** | içerik zayıfsa (boşluk boşluğu büyütür), eğlence/oyun ürünleri |
| **Zorluk** | orta · **Erişilebilirlik** | iyi (kontrastı korursan) |
| **Aile** | Sade (01–07) · **Token** | `kit/tokens.css` → `[data-style="minimalism"]` |
| **Kompozisyon** | `centered` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Minimalizm bir "az süs" tarifi değil, bir **karar disiplini**: her öğe ancak bir işlevi varsa ekranda kalır. Hiyerarşi üç kaldıraçla kurulur — boşluk oranı, punto zıplaması, ağırlık farkı. Renk bir süs değil, anlam taşıyıcısıdır: tek aksan rengi yalnızca *eylem* (buton, bağlantı) ve *durum* (aktif, hata) için kullanılır.

Kazandığı şey odak: kullanıcı ekranda ne yapacağını 1 saniyede görür. Feda ettiği şey karakter: marka kimliği artık tipografi, ritim ve mikro detay (odak halkası, geçiş eğrisi, 1px hairline) üzerinden taşınır.

### Ne değildir
- **Boş sayfa değildir.** Boşluk, hiyerarşiyi taşıyacak kadar olmalı; hiyerarşi yoksa sonuç "bitmemiş" görünür.
- **Swiss Design değildir.** Swiss ızgara ve dev tipografi ile konuşur; minimalizm daha sıcak ve daha az kuralcıdır, ızgarayı görünür kılmaz.
- **Japandi değildir.** Japandi sıcak nötr + doğal doku kullanır; minimalizm nötr gri skalada kalır, doku eklemez.
- **Neumorphism değildir.** Orada yüzey kabartmayla konuşur; burada derinlik yok, katman 1px çizgiyle ayrılır.
- **"Gri + mavi buton" değildir.** Sadece paleti kopyalamak stili getirmez; ölçek (1.5×+), boşluk ritmi (8'in katları) ve tipografi disiplini gelmezse sonuç jenerik olur.

### Nereden gelir
20. yüzyıl modernizmi ve Dieter Rams'ın "less but better" çizgisi; dijitalde 2010'ların "flat" dalgasından sonra, gürültülü arayüzlerin yoruculuğuna tepki olarak geri döndü. Bugün Linear/Vercel gibi araç ürünlerinde görünür: çünkü veri yoğun arayüzlerde süs, bilişsel maliyettir.

### 3 saniyede tanıma testi
1. Ekranda **tek** doygun renk var mı (genelde buton), gerisi nötr mü?
2. Gölge var mı? Doğru cevap: modal/popper dışında **yok**.
3. Aynı ekranda en az iki uç punto var mı (11px etiket + 32px+ başlık)?
4. Bölümler kart içinde mi, çizgiyle mi ayrılıyor? (Doğru: çizgi/boşluk.)
5. Tüm köşe yarıçapları aynı aileden mi (8 / 12)?

## Görsel imza
- **Tek vurgu rengi** (`--accent`), gerisi 5–7 tonluk nötr skala. İkinci bir aksan *yok*.
- **Gölge yok.** Yüzen katman (modal, dropdown, toast) için tek gölge: `0 1px 2px rgba(16,17,18,.06)` + 1px `--line`.
- **Süs yok:** gradient, iç gölge, blur, doku (`--grain: 0`), parlaklık yok.
- **İkon dili:** 1.5px çizgi, 20/24px kutu, yuvarlatılmış uç (round cap); dolgulu ikon yalnızca aktif durumda.
- **Hiyerarşi üç kaldıraç:** boşluk (8'in katları), punto zıplaması (en az 1.5×), ağırlık (400 / 600; 700 sadece H1).
- **Kenarlık:** 1px, `--ink`'in %10 opaklığı (`rgba(16,17,18,.10)`); daha kalın kenarlık yalnızca odak/hata durumunda.

## Zorunlu kurallar

1. **Tek vurgu rengi.** `--accent` yalnızca eylem ve durum için; gerisi 5–7 tonluk nötr skala.
2. **Hiyerarşi üç kaldıraçla.** Boşluk (8'in katları) + punto zıplaması (≥1.5×) + ağırlık (400/600/700).
3. **Gölge yalnızca yüzen katmanda.** Kart ayrımı 1px `--line` ile yapılır.
4. **Ölçü disiplini.** Gövde 16px/1.6, en fazla 68ch; bölüm dikey boşluğu 80px (mobil 48px).
5. **Erişilebilirlik tabanı.** 44×44px hedef, görünür odak halkası, gövde kontrastı ≥ 4.5:1.
6. **Tek imza öğe.** Ekranda en az bir markaya ait detay: mono etiket ritmi, hairline, özel geçiş eğrisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fafaf9` | sayfa zemini | kart zemini olarak (kart beyaz olmalı) |
| `--bg-2` | `#f2f2f0` | bölüm ayırıcı zemin, tablo başlığı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f7f7f5` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#101112` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#5a5f66` | ikincil metin, açıklama | 11px altı metin (kontrast düşer) |
| `--ink-faint` | `#9aa0a6` | dekoratif etiket, ayırıcı metin | etkileşimli metin, placeholder dışında |
| `--accent` | `#2563eb` | birincil buton, bağlantı, aktif durum | geniş zemin, grafik dolgusu (opaklık 0.12 ile) |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zeminde |
| `--line` | `rgba(16,17,18,.10)` | tüm kenarlıklar | metin rengi olarak |

- Ölçülen kontrast: `ink/bg` **18.10:1** · `ink-soft/bg` **6.16:1** · `ink-faint/bg` **2.53:1 (sadece dekoratif)** · `accent-ink/accent` **5.17:1**.
- `--ink-faint` etkileşimli metinde kullanılmaz; input placeholder istisnadır ve `--ink-soft` tercih edilir.
- Yasak: accent + accent-soft ikinci bir renk uydurmak; grafikte 3'ten fazla renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | `--font-display` (Inter) | 56px (mobil 34px) | 700 | 1.02 | `-0.03em` |
| H2 | aynı | 28px | 600 | 1.15 | `-0.02em` |
| H3 | aynı | 20px | 600 | 1.3 | `-0.01em` |
| Gövde | `--font-body` (Inter) | 16px | 400 | 1.6 | `0` |
| Küçük gövde | aynı | 14px | 400 | 1.55 | `0` |
| Etiket | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | `0.14em`, uppercase |
| Buton | `--font-body` | 14px | 600 | 1 | `-0.01em` |

- Ölçek oranı **1.5×** (16 → 24 → 36 → 56). Ara basamakları (18, 22, 26) kullanma; zıplama kaybolur.
- Ölçü önerisi: `h1 { font-size: clamp(2.125rem, 1.2rem + 3.2vw, 3.5rem) }`.
- Gövde maksimum satır uzunluğu **68ch**; uzun metinde satır aralığı 1.65.
- 500 ağırlık kullanılmaz (ara ton karakteri bulanıklaştırır); 400 / 600 / 700 yeterli.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 8 kolon, form 4 kolon) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px (okuma metni 720px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Bölüm dikey boşluğu: masaüstü 80px, mobil 48px. Kart içi padding 20–24px.
- Asimetri: ekran başına **1** bölüm simetriden çıkar (ör. hero'da 7/5 kolon).
- Bölüm ritmi: art arda en fazla **2** aynı hizalı blok; üçüncüyü tam genişlik veya daraltılmış yap.
- Izgara görünmez: yardımcı çizgi/kenar çizgisi ekleme.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Kart | `--surface` + 1px `--line` | `--shadow` (0 1px 2px) | içerik bloğu |
| Yüzen | `--surface` + `--shadow` + `--line` | aynı gölge | modal, popover, toast |

- Derinlik ışıktan değil **ayrımdan** gelir: 1px çizgi + zemin tonu farkı. Gölge sadece "yüzen" olduğunu bildirmek için.
- Radius: `--radius` 8px (buton, input, chip), `--radius-lg` 12px (kart, modal). 16px+ kullanma.
- İç gölge, inset highlight, cam efekti yasak.

## Yasaklar

- Gradient, blur, grain, iç gölge, parlaklık, glow ekleme.
- İkinci bir aksan rengi veya süsleme amaçlı renk kullanma.
- 16px üzeri köşe yarıçapı; çok katmanlı gölge.
- 18/22/26px gibi ara punto basamakları, 500 ağırlık.
- Izgarayı görünür kılan yardımcı çizgiler, sütun ayırıcı lekeler.
- İkon setini karıştırma (dolgulu + çizgi aynı ekranda).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 20px | 8px | 14/600 | `--accent` + `--accent-ink`, gölge yok | hover: %92 parlaklık · active: `translateY(1px)` · focus: 2px `--accent` halka · disabled: %40 opaklık · loading: 16px spinner, metin gizlenmez |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | `transparent` + 1px `--line`, `--ink` | hover: `--surface-2` |
| Buton (sessiz/ghost) | 40px | 0 12px | 8px | 14/500 | metin `--ink-soft` | hover: `--surface-2`, metin `--ink` |
| Input | 44px | 0 14px | 8px | 14/400 | `--surface` + 1px `--line` | focus: 2px `--accent` halka (outline-offset 1px) · error: kenarlık `--danger` + 12px açıklama · disabled: `--bg-2` zemin |
| Kart | içerik | 24px | 12px | başlık H3, gövde 14 | `--surface` + `--line` + `--shadow` | hover yalnızca tıklanabilir kartta: kenarlık `--ink` %16 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 | `--surface-2` + `--line`, metin `--ink-soft` | aktif: `--accent` zemin + `--accent-ink` |
| Nav | 64px | 0 24px | — | 14/500 | alt 1px `--line`, zemin `--bg` | aktif: metin `--ink` + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400, sayı mono 13 | satır altı 1px `--line` | hover: `--surface-2`; seçili: sol 2px `--accent` |
| Modal | içerik | 28px | 12px | H3 + 14 gövde | `--surface` + `--shadow` | arka plan `rgba(16,17,18,.32)` |
| Toast | 44px | 0 16px | 8px | 13/500 | `--ink` zemin + `--bg` metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 2px uç | eksen 11 mono | `--accent` (opaklık 1.0) + `--accent` 0.16 dolgu + `--ink-faint` referans çizgi | 3 renkten fazla seri yok |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }` — gölge yok.
- Dokunma hedefi: görsel 20px ikon bile 44×44px padding ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 24px kutu, round cap; dolgu yalnızca aktif |
| Fotoğraf | Yumuşak ışık, düşük doygunluk, tek konu; kutu içinde 12px radius ile kırpılır |
| İllüstrasyon | Tercih edilmez; gerekiyorsa tek çizgi (line-art), `--ink-soft` |
| Doku | Yok (`--grain: 0`); kağıt/plastik hissi eklenmez |
| Logo | `--ink` monokrom; minimum 24px yükseklik, çevresinde 1× logo boyu boşluk |
| Görsel hiyerarşi | Sayfada en fazla 1 büyük görsel (hero), gerisi metin/veri |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 56px başlık (2 satır), 68ch paragraf, tek birincil + bir sessiz CTA, altında 3 maddelik güven satırı | `shots/01-landing.png` |
| Dashboard | düşük | Kart yerine bölüm + hairline; KPI sayısı 28px, etiketi 11px mono gri. Grafikte tek renk | `shots/02-dashboard.png` |
| Form | düşük | Tek sütun 480px, etiket üstte 13px, input 44px, hata metni input altında 12px | — |
| Liste / tablo | düşük | Satır 52px, sayılar mono, durum metinle (chip ikincil); zebra çizgi yok, sadece hairline | — |
| Boş durum | orta | Tek cümle + tek buton; illüstrasyon yerine ikon veya hiçbir şey | — |
| Onboarding | yüksek | Sayfa başına tek fikir + 2 satır açıklama; ilerleme çizgi değil nokta (3–4) | — |
| Pricing | orta | 3 kolon, orta plan 1px `--accent` kenarlık + "önerilen" etiketi; fiyat 40px, özellikler 14px | — |
| Giriş / ödeme | çok düşük | Stil sıfıra yakın: 400px kart, tek sütun, tek buton; ikna öğesi yok | — |
| Modal | orta | 480–560px, başlık 20px, gövde 14px, 2 buton sağa hizalı | — |
| Bildirim / toast | orta | Sağ üst, 4sn, ikon + tek satır; üst üste 3'ten fazla kuyruk yok | — |
| Hata | düşük | Hata metni 14px `--ink`, altında 12px `--ink-soft` çözüm önerisi; kırmızı sadece kenarlık/ikon | — |
| Profil / ayar | orta | Sol nav + sağ içerik 8/4 kolon; her ayar satırı 56px, açıklama 13px | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `ease-out` | `transform: translateY(1px)`, `opacity` |
| Giriş | 500ms | `ease-out` | `opacity` + 12px `translateY`, stagger 40ms |
| Scroll (`top 86%`) | 600ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 160ms | aynı eğri | `transform: scale(1.015)` |
| Ödül / vurgu | 240ms | `ease-out` | tek seferlik `opacity` 0→1, ölçek yok |

- Sadece `opacity` ve `transform`; `height`/`width`/`filter` animasyonu yasak.
- `prefers-reduced-motion`: tüm süreler 0.01ms, geçişler anlık (tokens.css global kuralı).
- Yasak: spring/bounce, parallax, sürekli döngü, sayfa geçişinde slide.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#fafaf9` | `#0b0b0c` |
| `--bg-2` | `#f2f2f0` | `#121214` |
| `--surface` | `#ffffff` | `#161618` |
| `--surface-2` | `#f7f7f5` | `#1d1d20` |
| `--ink` | `#101112` | `#ededed` |
| `--ink-soft` | `#5a5f66` | `#a0a4aa` |
| `--ink-faint` | `#9aa0a6` | `#6f747a` |
| `--accent` | `#2563eb` | `#60a5fa` |
| `--accent-ink` | `#ffffff` | `#0b0b0c` |
| `--line` | `rgba(16,17,18,.10)` | `rgba(255,255,255,.12)` |

- Koyu modda gölge işe yaramaz; kart ayrımı `--line` + `--surface` tonu ile kurulur.
- `filter: invert()` yasak — palet elle yazılır.
- Odak halkası koyu modda `--accent` (açık mavi) kalır; 2px yeterli.

## Erişilebilirlik

- Ölçülen en düşük çift: `--ink-faint/bg` **2.53:1** → yalnızca dekoratif etiketlerde; gövde metni asla.
- `--ink-soft/bg` 6.16:1 → küçük metin için güvenli.
- `--accent` üstü beyaz 5.17:1 → 14px/600 buton metni AA geçer.
- Odak halkası her yüzeyde görünür; `--surface` üstünde de 3:1 üzeri.
- Renk tek başına anlam taşımaz: durum her zaman metin/ikonla birlikte.
- Dokunma hedefi 44×44px; ikon butonlarında `padding` ile.
- `prefers-reduced-motion` ve `prefers-reduced-transparency` (blur 0) desteklenir.

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
| Sayfa "boş/bitmemiş" görünüyor | Boşluk var, hiyerarşi yok | En az iki uç punto (11 + 32) ve tek güçlü odak ekle |
| Her şey aynı gri, marka yok | Renk dekorasyona indirgenmiş | İmza mikro detay: hairline, özel geçiş eğrisi, mono etiket ritmi |
| Butonlar küçük, tıklanmıyor | Görsel küçüklük | 44px minimum + görünmez padding |
| Okuma yorucu | 16px gövde + 90ch satır | Satır uzunluğu 68ch, satır aralığı 1.6 |
| Kontrast kaybı | `--ink-faint` gövde metninde | `--ink-soft` kullan, faint'i sadece dekorasyonda bırak |
| Jenerik görünüm | Sadece renk değiştirilmiş | Boşluk ritmi + punto zıplaması + ağırlık farkını da uygula |

## Komşu stiller

- **Uyumlu:** `02 swiss-design` (ızgara disiplini), `05 bento-grid` (düzen), `06 japandi` (sıcaklık), `08 glassmorphism` (sade zeminde tek cam katman).
- **Yasak:** `17 maximalism` (boşluk politikası çelişir), `16 memphis` (süs yasağı ile çakışır), `10 neumorphism` (yüzey fiziği çelişir).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://linear.app | Ürün arayüzünde boşluk disiplini, hairline kullanımı |
| https://vercel.com | Nötr palet + dev tipografi oranı |
| https://stripe.com/docs | Yoğun dokümantasyonda tablo/liste sadeliği |
| https://muji.com | "Sessiz lüks" oranı, ürün fotoğrafı ve boşluk |
| https://developer.apple.com/design/human-interface-guidelines/layout | Dokunma hedefi ve layout temelleri |

## AI brief

```
Stil: Minimalism (styles/01-minimalism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="minimalism"]; hard-coded renk/gölge/radius YASAK.
Tipografi: Inter (--font-display) başlıkta -0.03em tracking; gövde 16/1.6; etiket 11px mono 0.14em uppercase.
Ölçek: 12/14/16/20/28/56 — ara basamak yok. Gövde max 68ch.
Yüzey: bg → surface (1px line + 0 1px 2px gölge) → yüzen katman (aynı gölge). Başka gölge yok.
Boşluk: 4/8/12/16/24/32/48/64; bölüm dikey 80px (mobil 48px); kart padding 24px.
Bileşenler: "Bileşen reçeteleri" tablosundaki ölçüler birebir; 44px hedef, 8/12px radius.
Hareket: 120–240ms ease-out, sadece opacity + 1–8px translate.
Yasak: gradient, blur, doku, ikinci aksan rengi, 16px üstü radius, gölge çeşitliliği.
Çıktı: kod + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda tek aksan rengi var, ikinci doygun renk yok.
- [ ] Modal dışında gölge yok; kartlar 1px `--line` ile ayrılmış.
- [ ] En az iki uç punto (11px etiket + 28px+ başlık) görünüyor.
- [ ] Hiçbir değer hard-coded değil (`var(--…)`).
- [ ] Gövde kontrastı ≥ 4.5:1, odak halkası görünür, hedef ≥ 44px.
- [ ] 390px'te taşma yok; hareket yalnızca opacity/translate.

## Token

```css
[data-style="minimalism"] {
  --bg: #fafaf9; --bg-2: #f2f2f0;
  --surface: #ffffff; --surface-2: #f7f7f5;
  --ink: #101112; --ink-soft: #5a5f66; --ink-faint: #9aa0a6;
  --accent: #2563eb; --accent-ink: #ffffff;
  --line: rgba(16,17,18,.10);
  --radius: 8px; --radius-lg: 12px;
  --shadow: 0 1px 2px rgba(16,17,18,.06); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
