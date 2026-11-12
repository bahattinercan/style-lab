# 150 · Lookbook Editorial

> **Bir cümlede:** Kemik kâğıt üzerinde dergi sayfası: Fraunces başlık, 104px dev rakam, kiremit ince çizgi ve 0.7s satır maskesi — ürün değil bakış açısı satılır.

| | |
|---|---|
| **Hissiyat** | editoryel · mesafeli · zarif · cesur |
| **En iyi** | Lookbook/koleksiyon anlatısı, moda ve takı kataloğu, sanat galerisi sergi sayfası, mimari monografi |
| **Kaçın** | İşlem odaklı e-ticaret akışı (sepet/ödeme), B2B panel, teknik dokümantasyon |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (açık zeminde ince çizgi ve kiremit küçük puntoda düşer) |
| **Aile** | Sahne & Prestij (146–151) · **Token** | `kit/tokens.css` → `[data-style="lookbook-editorial"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `type` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Lookbook Editorial, ekranı bir dergi sayfası gibi sayfalar: kemik zemin (#efebe4), siyaha yakın mürekkep (#13110f), Fraunces serif başlık ve sayının kendisi kadar büyük rakamlar (104px). Koleksiyon anlatısı metin ve boşlukla kurulur; ürün fotoğrafı ikinci yarıda başlar.

Tek vurgu kiremit (#a8402a) ve neredeyse sadece çizgi olarak: bölüm üstü 1px, bağlantı altı, aktif sekmecik. Dolgu olarak yalnız birincil eylemde ve numaralı etiketlerde görünür. Bu, dergi baskısındaki "kırmızı mürekkep" mantığıdır — az, keskin, işlevli.

Radius neredeyse yok (0px kontrol, 4px kart): kemik kâğıt üzerinde yumuşak kutu yapay durur. Ayrım 1px `--line` çizgilerle ve negatif boşlukla yapılır; gölge hiç kullanılmaz. Tipografi ölçüsü kasıtlı olarak dar tutulur (56ch) — dergi kolonu gibi.

Giriş `letter-stagger`: başlık satırları maskenin altından 0.7s'de çıkar, satırlar arası 90ms. Scroll'da fotoğraf blokları `mask-wipe` ile soldan sağa açılır (0.62s). Pin yok. Hover 160ms ve 1.02 — basılı dergi hissi: dokunma anı kısa, kalıcı efekt yok.

### Ne değildir

- Brass Copper (128) değildir: metal ve gravür dili yok; burada kâğıt, serif ve kiremit mürekkep var.
- Magazine Feature (88) değildir: o stil çok kolonlu uzun okuma düzenidir; burada tek kolon + dev rakam.
- Luxury Typography (04) değildir: 04 altın ve geniş ölçülerle çalışır; burada kiremit ve dar ölçü.
- Minimalism (01) değildir: boşluk değil tipografi ölçeği (104px rakam) konuşur.
- Noir Estate (146) değildir: taban koyu değil, kemik açık; fotoğraf hero değil, metin hero.

### Nereden gelir

Kök, moda lookbook'ları ve sanat monografileridir: büyük serif başlık, dev fasikül numarası, tek renk mürekkep, geniş kenar boşluğu. Bugün işe yaramasının nedeni, kaydırma hızını düşürmesi: dev rakam ve dar ölçü kullanıcıyı satır satır okumaya çağırır; bu, ürün ızgarasının yapamadığı bir şeydir.

### 3 saniyede tanıma testi

1. Zemin kemik (#efebe4), mürekkep #13110f; vurgu kiremit yalnız çizgi/etiket.
2. Başlık Fraunces 400, 62px, satır aralığı 1.04; dev rakam 104px aynı ailede.
3. Kiremit 1px çizgi bölüm başlığının üstünde 40px; tam genişlik çizgi yok.
4. Radius 0/4px; gölge hiç yok.
5. Ölçü 56ch — dergi kolonu; gövde 17px Inter.

## Görsel imza

- Fasikül rakamı: `104px Fraunces`, `--ink-faint` %40 opaklık, bölüm başlığının soluna taşar (negatif margin).
- Kiremit 1px çizgi: bölüm üstünde 40px, etiketin solunda; tam genişlik ayırıcı `--line`.
- Fotoğraf blokları 16:9 ve 4:5 karışık; aralarında 64px boşluk, kenarda 1px `--line` çerçeve.
- Bağlantı: 1px alttan çizilen kiremit çizgi (140ms), hover'da 2px kalınlaşır.
- Kart: 4px radius, 1px `--line`, `--surface` (kemik beyazı), gölge yok.
- Birincil buton: kiremit dolu, kemik metin, 0 radius, 44px — dergideki kutu ilan gibi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#efebe4` | sayfa zemini (kemik kâğıt) | kart yüzeyi olarak (surface daha açık) |
| `--bg-2` | `#e6e1d8` | bölüm bandı, gezinme altı, footer | metin zemini |
| `--surface` | `#f7f4ef` | kart, panel, modal yüzeyi | tam kanama fotoğraf zemini |
| `--surface-2` | `#ffffff` | seçili chip, tablo başlığı, ikincil buton | geniş yüzey dolgusu |
| `--ink` | `#13110f` | başlık ve gövde metni | dekoratif alan |
| `--ink-soft` | `#5a554e` | gövde ikincil, açıklama, künye | 12px altı etiket |
| `--ink-faint` | `#857f76` | fasikül rakamı, birim, tarih | gövde metni |
| `--accent` | `#a8402a` | ince çizgi, bağlantı, etiket numarası, birincil buton | gövde metni, geniş zemin |
| `--accent-ink` | `#fdf6f2` | kiremit dolgu üstündeki metin (kemik) | kiremit olmayan zeminde |
| `--line` | `rgba(19,17,15,.14)` | 1px çizgi ve fotoğraf çerçevesi | 2px ve üstü kural |

- Ölçülen kontrast (`kit/color.mjs`): `ink/bg` **15.85:1** · `ink-soft/bg` **6.21:1** · `accent-ink/accent` **5.72:1** · `ink-faint/bg` **3.34:1** · accent metin olarak bg'ye **5.15:1** · APCA Lc **94**.
- Tek mürekkep kuralı: kiremit baskı mürekkebi gibi davranır — ince ve az. Metin olarak yalnız 14px üstü etiketlerde; gövde metni her zaman `--ink` / `--ink-soft`.
- Yasak kombinasyon: kiremit üstüne siyah metin (2.9:1), ikinci sıcak renk, pastel gradient, gri-mavi ton

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 62px (mobil 32px) | 400 | 1.04 | -.01em |
| H2 | Fraunces | 38px | 400 | 1.14 | 0 |
| H3 | Fraunces | 24px | 400 | 1.14 | 0 |
| Gövde | Inter | 17px | 400 | 1.7 | 0 |
| Küçük | Inter | 14px | 400 | 1.7 | 0 |
| Etiket / mono | JetBrains Mono | 11px | 400 | 1.4 | .18em |

- Ölçek: 1.6 oranı (11 · 17 · 24 · 38 · 62 · 104); 104px yalnız fasikül rakamı.
- Ölçü: 56ch; `h1 { font-size: clamp(32px, 4vw, 62px) }`.
- Yasak: Fraunces 400/700 dışı ağırlık · İtalik gövde (yalnız vurgu kelimesi) · Büyük harf gövde · 15px altı gövde · Kiremit gövde metni.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 32px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 96px (mobil 48px) |
| Kart içi | 24px |
| Breakpoint | sm 390 / md 768 / lg 1200px |
| Asimetri | hero 7/5 (tipografi geniş, fotoğraf dar); her bölümde en fazla 1 taşan öğe (fasikül rakamı). |

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, bölüm bandı |
| Kart | `--surface` | none | kart, panel, fotoğraf çerçevesi |
| Yüzen katman | `--surface` + 1px `--ink` | none (1px sert çerçeve) | modal, açılır menü |
| Mürekkep katmanı | `--accent` | none | birincil buton, aktif etiket |

Gölge yok. Katman farkı 1px çizgi, kâğıt tonu ve boşlukla kurulur; yüzen katman 1px `--ink` sert çerçeve alır.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge |
|---|---|---|---|---|---|
| Buton (birincil) | 44px | 10px 24px | var(--radius) | 12px/600 Inter, .14em, büyük harf | var(--accent) var(--accent-ink) |
| Buton (ikincil) | 44px | 10px 0 | 0 | 12px/600 Inter, .14em, büyük harf | transparent / var(--ink) |
| Input | 52px | 0 0 | 0 | 17px/400 Inter | transparent + 0 0 1px 0 solid var(--line) |
| Kart | — | 24px | var(--radius-lg) | 17px Inter | var(--surface) / 1px solid var(--line) |
| Chip / badge | 22px | 0 0 | 0 | 11px/400 JetBrains Mono, .18em, büyük harf | transparent / 0 |
| Nav | 64px | 0 32px | — | 11px mono .18em | var(--bg) / 1px solid var(--line) |
| Tablo satırı | 52px | 8px 0 | — | 17px Inter | alt 1px var(--line) |
| Modal / sheet | — | 28px | var(--radius-lg) | Fraunces 400/700 | 1px solid var(--ink) + none |
| Toast | 36px | 8px 12px | var(--radius) | 11px/400 JetBrains Mono | sol 3px kiremit şerit; sağ üst, üst üste 2 |

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 24px ızgara, kare uç; ince ve seyrek kullanılır |
| Fotoğraf | kıyafet/obje/mekân detayı; nötr ışık, düşük doygunluk; iki oran (16:9, 4:5) |
| İllüstrasyon | yok — fasikül rakamı ve serif tipografi süs işlevi görür |
| Logo | Fraunces 400 sözcük logosu 18px, `.14em`, büyük harf |
| Doku | grain `.015` zemin katmanında; fotoğrafa filtre yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | salt tipografi: 62px başlık + dev fasikül rakamı, sağda 1 sütun fotoğraf; 2 CTA | `shots/01-landing.png` |
| Dashboard (koleksiyon) | orta | 3 sayı (parça, sezon, ortalama fiyat) + 8 satırlık koleksiyon listesi | `shots/02-dashboard.png` |
| Form / randevu | düşük | tek sütun 52px alan, alt çizgi odak; hata 1px `--danger` + 12px açıklama | — |
| Liste / koleksiyon | yüksek | 52px satır: rakam solda, parça adı, sezon etiketi | — |
| Boş durum | düşük | "bu sezonda parça yok" + arşiv bağlantısı | — |
| Onboarding | orta | 2 adım: sezon → ölçü; her adımda tek karar | — |
| Pricing | orta | iki abonelik; öne çıkanda kiremit 1px üst çizgi | — |
| Giriş / ödeme | düşük | kart yok, tek sütun, 1px çizgi bölmeli | — |
| Modal | orta | 4px radius, 1px `--ink` çerçeve, gölge yok | — |
| Bildirim | orta | 36px toast, sol 3px kiremit şerit, 3.6s | — |
| Mobil (390px) | orta | başlık 32px, fasikül rakamı 56px, fotoğraf tam kanama | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (letter-stagger) | 0.7s | `cubic-bezier(.4,0,.15,1)` | `opacity` + `translateY(12px)`, 0.09 arayla |
| Scroll reveal | 0.62s, `top 82%` | aynı | `translateY(14px)`, `once: true` |
| Pin / scrub | kapalı | doğrusal | bu stil sabit bölüm kullanmaz |
| Basma | 110ms | aynı | `translateY(1px)` |
| Hover (görsel) | 160ms | aynı | `scale(1.02)` |

- Ölçülen imza: enter **0.7s · cubic-bezier(.4,0,.15,1) · 12px · stagger 0.09**; scroll **top 82% · 0.62s · 14px · once**; pin **yok**; hover **160ms · 1.02**.
- undefined
- `prefers-reduced-motion`: instant.
- Bu stile yasak hareket: bounce/elastik yay, sonsuz döngü, hover tilt-3d, gölge animasyonu.

## Koyu mod

| Token | Açık (kâğıt) | Koyu (gece baskısı) |
|---|---|---|
| `--bg` | `#efebe4` | `#0c0b0a` |
| `--bg-2` | `#e6e1d8` | `#080706` |
| `--surface` | `#f7f4ef` | `#151312` |
| `--surface-2` | `#ffffff` | `#1e1c1a` |
| `--ink` | `#13110f` | `#f2ede6` |
| `--ink-soft` | `#5a554e` | `#bcb4aa` |
| `--ink-faint` | `#857f76` | `#8a837a` |
| `--accent` | `#a8402a` | `#e0704f` |
| `--accent-ink` | `#fdf6f2` | `#140703` |
| `--line` | `rgba(19,17,15,.14)` | `rgba(242,237,230,.16)` |

- Ölçülen koyu kontrastlar: `ink/bg` **16.89:1** · `ink-soft/bg` **9.60:1** · `accent-ink/accent` **6.22:1** · `ink-faint/bg` **5.25:1** · odak halkası yüzey üzerinde **5.82:1**.
- Koyu blok bir "gece baskısı": zemin #0c0b0a (nötr-sıcak), kiremit #e0704f (parlaklık +2 kademe) çünkü #a8402a koyu zeminde 4.5:1'in altına düşer; çizgi %14 → %16, surface #151312.
- `filter: invert()` yasak; koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="lookbook-editorial"]` olarak durur.

## Zorunlu kurallar
- Başlık Fraunces 400 62px (mobil 32px) `1.04`; 104px fasikül rakamı dekoratif ve aria-hidden.
- Kiremit yalnız ince çizgi, etiket ve birincil buton.
- Radius 0/4px, gölge yok, ayrım 1px çizgi.
- Ölçü 56ch; gövde 17px/1.7.
- İki fotoğraf oranı (16:9, 4:5), aralarında 64px boşluk.
- Bağlantı alt çizgisi 1px kiremit, hover'da 2px.

## Yasaklar
- Kiremit üstüne siyah metin
- Gradient, gölge, blur, 4px üstü radius
- İkinci sıcak renk (hardal, turuncu, altın)
- Büyük harf gövde, 15px altı metin
- Kart mozaiği/bento düzeni
- Sonsuz animasyon, bounce, tilt-3d

## Erişilebilirlik
- Gövde `ink/bg` **15.85:1** (≥ 4.5), `ink-soft/bg` **6.21:1**, `accent-ink/accent` **5.72:1**.
- APCA Lc **94** (≥ 45 gövde metni).
- `--ink-faint` **3.34:1** — yalnız etiket/dekor; gövde metni olarak kullanılmaz.
- Odak halkası: `--accent` hem bg (**5.15:1**) hem surface (**5.58:1**) üzerinde ≥ 3:1; 2px halka + 2px offset.
- Kiremit dolgulu butonda metin kemik (#fdf6f2): 5.72:1; siyah metin kiremit üstünde 2.9:1 — yasak.
- Kiremit metin olarak zeminde 5.15:1; 14px altı etikette kullanılmaz.
- Fasikül rakamı dekoratiftir: `aria-hidden` + `--ink-faint` %40; bilgi taşımaz.
- Odak halkası 2px `--accent` + 2px offset; kemik zeminde 5.15:1.
- 390px'te fasikül rakamı clamp ile 56px'e iner, negatif margin kaldırılır; taşma yok.

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
| "Blog" gibi görünüyor | başlık 40px, rakam yok | 62px Fraunces + 104px fasikül rakamı |
| Kiremit her yerde | accent başlık + buton + ikon | kiremit yalnız çizgi/etiket/buton |
| Kolaj kalabalığı | 6 farklı fotoğraf oranı | iki oran (16:9 ve 4:5), aralarında 64px |
| Kâğıt hissi yok | gri zemin + gradient | kemik zemin + grain .015, gradient yok |
| Okunmuyor | gövde 15px, ölçü 80ch | 17px, 56ch |
| Mobilde rakam taşıyor | 104px sabit | clamp(56px, 14vw, 104px), negatif margin kaldırılır |
| Koyu mod "kahverengi" oldu | sıcak siyah yerine kahverengi | koyu blok nötr-sıcak #0c0b0a, kiremit açılır #e0704f |

## Komşu stiller

- **Uyumlu:** `magazine-feature` — aynı editoryal dil; uzun makale bölümleri için eş.
- **Uyumlu:** `porcelain-glaze` — açık kâğıt ve ince çizgi; sergi kataloğu bölümünde.
- **Uyumlu:** `boutique-hotel` (149) — aynı serif sıcaklığı; fark taban (koyu kum vs kemik) ve vurgu (terracotta vs kiremit).
- **Yasak:** `bento-grid` — modüler kart mozaiği, tek kolon dergi akışını bozar.
- **Yasak:** `claymorphism` — yumuşak gölge ve pastel, kâğıt mürekkep dilini yok eder.
- **Yasak:** `dopamine-ui` — çok renkli enerji, tek mürekkep kuralını kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Fraunces | serif display ölçeği ve optik boyut ayarı |
| https://practicaltypography.com/choosing-typefaces.html | serif/gövde eşleşmesi ve ölçü kararı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | kiremit metin eşiği ve küçük punto kuralı |
| https://alistapart.com/article/how-we-read/ | satır uzunluğu ve okuma ritmi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Lookbook Editorial (styles/150-lookbook-editorial/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="lookbook-editorial"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Fraunces 400 başlık / 700 vurgu) H1 clamp(32px,6vw,62px) 1.04; fasikül rakamı clamp(56px,14vw,104px);
  --font-body (Inter 400) gövde 17px/1.7 ölçü 56ch; --font-mono (JetBrains Mono 400) etiket 11px +.18em büyük harf.
Yüzey: kemik kâğıt zemin, 1px --line çizgiler, radius 0/4px, GÖLGE YOK; iki fotoğraf oranı (16:9 ve 4:5).
  Blur yok; modal 1px --ink çerçeve alır.
Renk: tek mürekkep kiremit (--accent), üstünde kemik (--accent-ink); ikinci sıcak renk ve gradient yok.
Hareket: enter 0.7s cubic-bezier(.4,0,.15,1) letter-stagger 12px st.09 · scroll top 82% 0.62s mask-wipe 14px once ·
  pin yok · hover 160ms scale 1.02 + alt çizgi; prefers-reduced-motion zorunlu.
Yasak: Kiremit üstüne siyah metin; Gradient, gölge, blur, 4px üstü radius; İkinci sıcak renk (hardal, turuncu, altın); Büyük harf gövde, 15px altı metin; Kart mozaiği/bento düzeni; Sonsuz animasyon, bounce, tilt-3d.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Başlık Fraunces 62px (mobil 32px) ve 104px fasikül rakamı var (dekoratif, aria-hidden).
- [ ] Kiremit yalnız çizgi / etiket / buton; gövde metni değil.
- [ ] Radius 0/4px, gölge yok, 1px çizgi.
- [ ] Ölçü 56ch; gövde 17px.
- [ ] Kontrast: gövde ≥ 4.5:1, kiremit üstü ≥ 4.5:1, odak ≥ 3:1.
- [ ] 390px'te rakam clamp ile küçülüyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken satır maskesi duruyor.

## Token

```css
[data-style="lookbook-editorial"] {
  --bg: #efebe4;
  --bg-2: #e6e1d8;
  --surface: #f7f4ef;
  --surface-2: #ffffff;
  --ink: #13110f;
  --ink-soft: #5a554e;
  --ink-faint: #857f76;
  --accent: #a8402a;
  --accent-ink: #fdf6f2;
  --line: rgba(19,17,15,.14);
  --radius: 0px;
  --radius-lg: 4px;
  --shadow: 0 0 0 1px var(--ink);
  --shadow-hard: 0 0 0 1px var(--accent);
  --font-display: "Fraunces", "Georgia", serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.01em;
  --blur: 0px;
  --grain: .015;
  --danger: #b3261e;
  --danger-ink: #fff6f4;
  --ok: #2f6b46;
  --warn: #8a6212;
}
```

Koyu mod bloğu `styles/150-lookbook-editorial/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="lookbook-editorial"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
