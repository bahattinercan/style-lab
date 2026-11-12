# 148 · Product Launch

> **Bir cümlede:** Lansman sahnesi: derin lacivert zemin, tepeden inen tek spotlight, mint accent ve 0.74s oturma girişi — ürün çıkar, sayfa süslenmez.

| | |
|---|---|
| **Hissiyat** | odaklı · teknolojik · taze · davetkâr |
| **En iyi** | Ürün/özellik lansmanı, sürüm duyurusu, donanım tanıtımı, konferans açılış sayfası |
| **Kaçın** | Uzun okuma (blog/rapor), regulatory/klinik içerik, çok kategorili e-ticaret |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (mint accent düşük parlaklıkta okunmaz) |
| **Aile** | Sahne & Prestij (146–151) · **Token** | `kit/tokens.css` → `[data-style="product-launch"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Product Launch, sayfayı tek bir ışık konisi gibi kurar: zemin derin lacivert (#070b14), hero’nın arkasında `radial-gradient` spotlight, solda 52px Space Grotesk başlık, sağda ürün paneli. Ekranın geri kalanı bu koninin dışında kalır ve bilinçli olarak koyulaşır.

Tek vurgu mint (#6fe8b8) ve işlevi net: birincil buton, aktif adım, veri serisinin birinci kanalı. Mint dolgu üstünde metin daima `--accent-ink` (#04140d); beyaz metin kullanılmaz çünkü mint'in parlaklığı beyazı yutar.

Ürünün kendisi görselin yerine geçer: ekran görüntüsü/panel 14px radius, 1px `--line`, üstte 1px iç parlaklık. Gölge yok; derinlik spotlight ve panelin iç parlaklığıyla kurulur. Bu, "kutu" değil "çıkan ürün" hissi verir.

Giriş `scale-settle`: panel 0.74s içinde 1.04'ten 1'e oturur, kopya 24px yükselir (50ms kademe). Scroll'da panel `scroll-zoom` ile 1.06'dan 1'e gelir; pin yok (lansman sayfası lineer akar). Hover 220ms ve 1.02.

### Ne değildir

- Dark SaaS / Dark Dashboard (151) değildir: orada yoğun operasyonel ızgara ve cyan; burada tek sahne, tek ürün, geniş boşluk.
- Cyberpunk (143) değildir: neon çizgi, glitch ve tarama yok; ışık tek kaynaklı ve yumuşak.
- Aurora UI (35) değildir: hareketli gradient aurora yok, spotlight sabit ve statik.
- Bento Grid (05) değildir: kart mozaiği yerine tek spotlight + tek panel.
- Luxury/Noir Estate (146) değildir: sıcak altın ve fotoğraf yerine soğuk mint ve ürün ekranı.

### Nereden gelir

Kök, donanım ve oyun lansmanlarının "sahne" fotoğrafçılığıdır: karanlık salon, tek spot, ortada ürün. Web'e taşındığında ürün ekran görüntüsü panelin içine oturur; spotlight CSS radial-gradient ile kurulur. Bugün işe yaramasının nedeni, tek mesajı tek bakışta vermesi: spotlight dışındaki her şey bilinçli olarak ikinci plandadır.

### 3 saniyede tanıma testi

1. Zemin lacivert-siyah (#070b14); hero üst ortasında yumuşak radial spotlight.
2. Tek mint accent; yalnız buton, aktif adım ve seri-1 çizgisinde.
3. Ürün paneli 14px radius, üstte 1px iç parlaklık, gölge yok.
4. Başlık Space Grotesk 700, 52px, `-0.01em`, iki satır.
5. Kart radius 24px ve panel içi 24px boşluk — geniş nefes.

## Görsel imza

- Spotlight: `radial-gradient(58% 46% at 50% 0%, color-mix(--accent 22%, transparent), transparent 72%)` hero üstünde; hareket etmez.
- Panel: `box-shadow: inset 0 1px 0 rgba(255,255,255,.06)` + 1px `--line`; radius 24px (kart) / 14px (uygulama paneli).
- Adım göstergesi: 3 nokta, aktif mint ve 24px genişleyen hap.
- Mono etiket 10px `+0.18em`; sayılar (fiyat, süre) Space Grotesk 700 tabular.
- Birincil buton: mint dolgu, `--accent-ink` metin, 10px radius, 48px, altında hafif mint glow (`0 10px 30px -18px`).
- Hover: panel `translateY(-2px)` + çerçeve mint %35; görsel ölçek yok (ürün sabit kalır).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#070b14` | sayfa zemini; spotlight dışındaki her alan | kart yüzeyi olarak |
| `--bg-2` | `#04070e` | spotlight dışı band, gezinme, footer | metin zemini |
| `--surface` | `#0e1522` | ürün paneli, kart, modal | tam kanama bölüm |
| `--surface-2` | `#16202f` | seçili chip, ikincil buton, tablo başlığı | hero zemini |
| `--ink` | `#eef3fb` | başlık ve gövde metni | dekoratif alan |
| `--ink-soft` | `#b3c1d6` | gövde ikincil, açıklama | 12px altı etiket |
| `--ink-faint` | `#7d8ba1` | etiket, birim, zaman | gövde metni |
| `--accent` | `#6fe8b8` | birincil buton, aktif adım, seri-1 | geniş yüzey dolgusu, gövde metni |
| `--accent-ink` | `#04140d` | mint dolgu üstündeki metin (koyu) | mint olmayan zeminde |
| `--line` | `rgba(238,243,251,.12)` | 1px panel çerçevesi ve ayırıcı | 2px ve üstü kural |

- Ölçülen kontrast (`kit/color.mjs`): `ink/bg` **17.67:1** · `ink-soft/bg` **10.79:1** · `accent-ink/accent` **12.52:1** · `ink-faint/bg` **5.70:1** · accent metin olarak bg'ye **13.04:1** · APCA Lc **100**.
- Tek vurgu kuralı: mint yalnız eylem ve veri kanalı; ikinci bir soğuk ton (cyan/mavi) eklenmez. Spotlight rengi de mint'tir, ek renk üretmez.
- Yasak kombinasyon: mint üstüne beyaz metin, ikinci neon, mor-mint gradient, hareketli gradient

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 52px (mobil 30px) | 700 | 1.06 | -.01em |
| H2 | Space Grotesk | 32px | 700 | 1.14 | -.005em |
| H3 | Space Grotesk | 22px | 700 | 1.14 | -.005em |
| Gövde | Poppins | 16px | 400 | 1.6 | 0 |
| Küçük | Poppins | 14px | 400 | 1.6 | 0 |
| Etiket / mono | IBM Plex Mono | 10px | 400 | 1.4 | .18em |

- Ölçek: 1.4 oranı (10 · 14 · 16 · 22 · 32 · 52); 10px yalnız mono etiket.
- Ölçü: 58ch; `h1 { font-size: clamp(30px, 4vw, 52px) }`.
- Yasak: Space Grotesk 500/700 dışı ağırlık · Büyük harf gövde · 13px altı gövde · İtalik başlık · İkinci display ailesi.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 88px (mobil 48px) |
| Kart içi | 24px |
| Breakpoint | sm 390 / md 768 / lg 1200px |
| Asimetri | hero 5/7 (kopya dar, panel geniş); ekran başına 1 asimetrik blok. |

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | spotlight dışı alan, band |
| Panel | `--surface` + inset parlaklık | none | ürün paneli, kart, tablo |
| Yüzen katman | `--surface` + `--blur` | `--shadow` | modal, menü, komut paleti |
| Vurgu katmanı | `--accent` | `--shadow-hard` (mint halka) | öne çıkan plan kartı, birincil buton |

Derinlik spotlight + panelin üst kenarındaki 1px iç parlaklıktan gelir. Gölge yalnız yüzen katmanda; glow yalnız birincil buton ve öne çıkan planda.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge |
|---|---|---|---|---|---|
| Buton (birincil) | 48px | 12px 26px | var(--radius) | 13px/600 Poppins, .06em, cümle düzeni | var(--accent) var(--accent-ink) |
| Buton (ikincil) | 48px | 12px 22px | var(--radius) | 13px/600 Poppins, .06em, cümle düzeni | var(--surface-2) / var(--ink) |
| Input | 48px | 0 14px | var(--radius) | 16px/400 Poppins | var(--bg-2) + 1px solid var(--line) |
| Kart | — | 24px | var(--radius-lg) | 16px Poppins | var(--surface) / 1px solid var(--line) |
| Chip / badge | 26px | 0 12px | 999px | 10px/400 IBM Plex Mono, .16em, büyük harf | var(--surface-2) / 1px solid var(--line) |
| Nav | 64px | 0 28px | — | 11px mono .16em | var(--bg-2) / 1px solid var(--line) |
| Tablo satırı | 52px | 8px 14px | — | 16px Poppins | alt 1px var(--line) |
| Modal / sheet | — | 28px | var(--radius-lg) | Space Grotesk 700 | 1px solid color-mix(in srgb, var(--accent) 35%, transparent) + var(--shadow) |
| Toast | 40px | 10px 14px | var(--radius) | 12px/400 IBM Plex Mono | sol 3px mint şerit; sağ üst, üst üste 2 |

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, yuvarlak uç; ok, eklenti, sürüm temaları |
| Fotoğraf | yalnız ürün/donanım çekimi (varsa); alan ≤ %30, panel içinde |
| İllüstrasyon | yok — ürün ekranı görselin yerini alır |
| Logo | Space Grotesk 700 sözcük logosu 16px, `-0.01em` |
| Doku | grain `.015` yalnız spotlight dışında; panel yüzeyi temiz |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | split hero: solda 52px başlık + 2 CTA, sağda ürün paneli; sabit spotlight ikisinin arkasında | `shots/01-landing.png` |
| Dashboard (ürün) | yüksek | 3 KPI + 2 grafik + 6 satırlık tablo; yoğun ama tek accent | `shots/02-dashboard.png` |
| Form / bekleme listesi | düşük | tek alan + mint buton; hata `--danger` 1px + 12px açıklama | — |
| Liste / changelog | orta | satır: sürüm no (mono) + başlık + tarih; 56px | — |
| Boş durum | düşük | "henüz sürüm yok" + ilk adım CTA | — |
| Onboarding | orta | 3 adım nokta göstergesi, aktif mint hap | — |
| Pricing | orta | iki plan; öne çıkanda mint 1px çerçeve + glow | — |
| Giriş / ödeme | düşük | tek panel, tek eylem; spotlight yok | — |
| Modal | orta | 24px radius, mint %35 çerçeve, `--shadow` | — |
| Bildirim | orta | 40px toast, sol 3px mint şerit, 3.4s | — |
| Mobil (390px) | orta | spotlight %80 genişlik, başlık 30px, panel tam kanama | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (scale-settle) | 0.74s | `cubic-bezier(.22,.9,.24,1)` | `opacity` + `translateY(24px)`, 0.05 arayla |
| Scroll reveal | 0.7s, `top 76%` | aynı | `translateY(18px)`, `once: true` |
| Pin / scrub | kapalı | doğrusal | bu stil sabit bölüm kullanmaz |
| Basma | 130ms | aynı | `translateY(1px)` |
| Hover (görsel) | 220ms | aynı | `scale(1.02)` |

- Ölçülen imza: enter **0.74s · cubic-bezier(.22,.9,.24,1) · 24px · stagger 0.05**; scroll **top 76% · 0.7s · 18px · once**; pin **yok**; hover **220ms · 1.02**.
- undefined
- `prefers-reduced-motion`: opacity.
- Bu stile yasak hareket: bounce/elastik yay (aşmalı cubic-bezier), sonsuz döngü, hareketli gradient/aurora, hover tilt-3d.

## Koyu mod

| Token | Açık (sahne) | Koyu (karanlık sahne) |
|---|---|---|
| `--bg` | `#070b14` | `#04070c` |
| `--bg-2` | `#04070e` | `#020408` |
| `--surface` | `#0e1522` | `#0a111b` |
| `--surface-2` | `#16202f` | `#121b27` |
| `--ink` | `#eef3fb` | `#f2f7fd` |
| `--ink-soft` | `#b3c1d6` | `#bcc9dc` |
| `--ink-faint` | `#7d8ba1` | `#8695aa` |
| `--accent` | `#6fe8b8` | `#8bf2c9` |
| `--accent-ink` | `#04140d` | `#04140d` |
| `--line` | `rgba(238,243,251,.12)` | `rgba(242,247,253,.14)` |

- Ölçülen koyu kontrastlar: `ink/bg` **18.73:1** · `ink-soft/bg` **12.03:1** · `accent-ink/accent` **14.08:1** · `ink-faint/bg` **6.62:1** · odak halkası yüzey üzerinde **14.11:1**.
- Koyu blokta zemin #04070c'ye iner, mint #8bf2c9'a çıkar: spotlight dışı alan daha da koyulaştığı için mint'in parlaklığı korunmalı, aksi hâlde buton zemine gömülür. Çizgi %12 → %14.
- `filter: invert()` yasak; koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="product-launch"]` olarak durur.

## Zorunlu kurallar
- Hero'da tek sabit spotlight; hareketli gradient yok.
- Mint yalnız eylem/aktif/veri kanalı; üstünde `--accent-ink`.
- Panel radius 24px (kart) / 14px (uygulama), gölge yok, üstte 1px iç parlaklık.
- Tek birincil + tek ikincil CTA.
- Sürüm/tarih mono tabular; başlık Space Grotesk 700.
- Bölüm ritmi ≥ 88px (mobil 48px); ekran başına 1 sahne.

## Yasaklar
- İkinci neon veya mavi cyan accent
- Mint üstüne beyaz metin
- Hareketli gradient/aurora arka plan
- Kartlarda `--shadow`, 24px üstü radius
- Bounce/elastik easing
- Spotlight dışında gövde metni

## Erişilebilirlik
- Gövde `ink/bg` **17.67:1** (≥ 4.5), `ink-soft/bg` **10.79:1**, `accent-ink/accent` **12.52:1**.
- APCA Lc **100** (≥ 45 gövde metni).
- `--ink-faint` **5.70:1** — yalnız etiket/dekor; gövde metni olarak kullanılmaz.
- Odak halkası: `--accent` hem bg (**13.04:1**) hem surface (**12.11:1**) üzerinde ≥ 3:1; 2px halka + 2px offset.
- Mint dolgulu butonda metin `--accent-ink` (#04140d): 12.52:1 — beyaz metin (1.6:1) yasak.
- Mint metin olarak zeminde 13.04:1; küçük punto (10px) etikette bile geçerli.
- Spotlight dışına düşen metin okunmaz: gövde metni daima spotlight veya `--surface` üzerinde.
- Odak halkası 2px `--accent` + 2px offset; panel üzerinde 12.11:1.
- 390px'te panel tam kanama, yatay taşma yok; buton yüksekliği 48px (dokunma hedefi).

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
| "Oyun arayüzü" gibi | neon çizgi + parlak mint glow her yerde | glow yalnız birincil butonda; çizgiler 1px ve %12 |
| Mint okunmuyor | beyaz metin mint üstünde | mint üstünde `--accent-ink` (12.5:1) |
| Spotlight kirli | iki farklı radial katman | tek spotlight, sabit, %22 opaklık |
| Kart "yüzüyor" | gölge + radius 32px | gölge yok, inset parlaklık + 1px çerçeve |
| Hero sıkışık | spotlight içinde 4 CTA | tek birincil + tek ghost CTA |
| Koyu mod farkı yok | koyu blok kopya | koyu blokta bg daha derin, mint parlaklık +1 kademe |
| Mobilde taşıyor | panel genişliği sabit | panel %100, iç boşluk 16px |

## Komşu stiller

- **Uyumlu:** `aurora-ui` — lansman atmosferi; ancak aurora hareketlidir, burada statik spotlight kullanılır.
- **Uyumlu:** `dark-dashboard` (151) — lansmandan sonra ürünün kendi paneli; aynı koyu taban, farklı vurgu (mint vs cyan).
- **Uyumlu:** `bento-grid` — özellik bölümü mozaiği; spotlight bölümünden sonra ritim kırar.
- **Yasak:** `cyberpunk` / `glitch` — neon ve bozulma, tek ışık kaynağı kuralını kırar.
- **Yasak:** `minimalism` — lansmanın tek sahne dramaturjisini düzleştirir.
- **Yasak:** `neo-brutalism` — offset gölge ve kalın çerçeve spotlight'ı bastırır.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Space+Grotesk | display ölçek ve harf aralığı (700) |
| https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient | spotlight katmanı ve opaklık |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | mint üstü metin ve gövde eşiği |
| https://www.nngroup.com/articles/landing-page-design/ | tek mesaj / tek birincil eylem kuralı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Product Launch (styles/148-product-launch/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="product-launch"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Space Grotesk 700) H1 clamp(30px,5vw,52px) 1.06 -0.01em; --font-body (Poppins 400/600) gövde 16px/1.6;
  --font-mono (IBM Plex Mono 400) etiket 10px +.18em büyük harf ve sürüm numarası.
Yüzey: derin lacivert zemin + sabit radial spotlight (mint %22). Panel = --surface + 1px --line + üstte 1px iç parlaklık,
  radius 24px (kart) / 14px (panel), GÖLGE YOK; blur yalnız modal/menüde.
Renk: tek accent mint (--accent), üstünde --accent-ink; ikinci neon, hareketli gradient yok.
Hareket: enter 0.74s cubic-bezier(.22,.9,.24,1) scale-settle 24px st.05 · scroll top 76% 0.7s scroll-zoom 18px once ·
  pin yok · hover 220ms scale 1.02; prefers-reduced-motion zorunlu.
Yasak: İkinci neon veya mavi cyan accent; Mint üstüne beyaz metin; Hareketli gradient/aurora arka plan; Kartlarda `--shadow`, 24px üstü radius; Bounce/elastik easing; Spotlight dışında gövde metni.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Spotlight tek ve sabit; mint %22 opaklık.
- [ ] Mint üstünde metin `--accent-ink`, beyaz değil.
- [ ] Panel radius 24px/14px, gölge yok, üstte 1px iç parlaklık.
- [ ] Tek birincil + tek ikincil CTA.
- [ ] Kontrast: gövde ≥ 4.5:1, mint üstü ≥ 4.5:1, odak ≥ 3:1.
- [ ] 390px'te panel tam kanama, taşma yok.
- [ ] `prefers-reduced-motion` açıkken scale-settle ve zoom duruyor.

## Token

```css
[data-style="product-launch"] {
  --bg: #070b14;
  --bg-2: #04070e;
  --surface: #0e1522;
  --surface-2: #16202f;
  --ink: #eef3fb;
  --ink-soft: #b3c1d6;
  --ink-faint: #7d8ba1;
  --accent: #6fe8b8;
  --accent-ink: #04140d;
  --line: rgba(238,243,251,.12);
  --radius: 10px;
  --radius-lg: 24px;
  --shadow: 0 24px 60px -32px rgba(0,0,0,.9);
  --shadow-hard: 0 0 0 1px color-mix(in srgb, var(--accent) 45%, transparent), 0 10px 30px -18px color-mix(in srgb, var(--accent) 55%, transparent);
  --font-display: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .16em;
  --blur: 10px;
  --grain: .015;
  --danger: #ff6b7a;
  --danger-ink: #1a0206;
  --ok: #6fe8b8;
  --warn: #f2c14e;
}
```

Koyu mod bloğu `styles/148-product-launch/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="product-launch"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
