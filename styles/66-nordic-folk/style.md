# 66 · Nordic Folk

> **Bir cümleyle:** Düz boyanmış keten zemin üzerine simetrik bitkisel bir bant: süs dekoratif kalır, ızgara ve tipografi sade durur.

| | |
|---|---|
| **Hissiyat** | sıcak, el yapımı, neşeli, disiplinli |
| **En iyi** | zanaat/yiyecek-içecek markası, kültür etkinliği vitrini, abonelik kutusu, yerel pazar pazaryeri |
| **Kaçın** | finans/alarm paneli, 20+ satırlık veri tablosu, klinik sağlık formu, kripto ekranı |
| **Zorluk** | orta (süsü dekoratif katmanda tutmak) · **Erişilebilirlik** | iyi (12.67:1 gövde, 7.02:1 accent üstü) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="nordic-folk"]` |
| **Kompozisyon** | `centered` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Nordic Folk, İskandinav halk boyamasının (rosemaling, kurbits, dala) ekran karşılığıdır: **düz boyanmış bir zemin** (keten `#f2ece0`), üstünde **simetrik bitkisel bir bant**, ve onun altında son derece sade bir içerik ızgarası. Süs ile bilgi kesin olarak ayrılır: motif yalnız ayrılmış bantlarda (üst şerit, bölüm ayırıcı, hero köşesi) yaşar; metnin arkasına asla girmez. Bu ayrım stilin hem karakterini hem okunabilirliğini koruyan tek kuraldır.

Kazandığı şey: **sıcaklık + hatırlanma**. Tek bir kırmızı (madder `#9c2b21`) ve iki serif aile, ekranı "el yapımı" hissettirirken hiyerarşiyi boşluk ve punto kurar. Feda ettiği şey: **yoğunluk** — 96px bölüm ritmi ve 24px kart padding'i ile bu stil veri ağır ekranlarda yer israf eder; tablo/dashboard için yalnız tipografi ve radius ödünç alınır.

### Ne değildir
- **Japandi (06) değildir.** Japandi'de süs yoktur, kontrast yumuşaktır (`ink/bg` ≈ 8:1), accent adaçayı yeşilidir. Burada süs **zorunlu** bir katmandır, kontrast **12.67:1** ve accent **madder kırmızısı**; ayrıca boyalı çift kural (1px accent + 1px line) vardır.
- **Bohemian (30) değildir.** Bohemian kilim desenini **arka plana** yayar ve el yazısı kullanır; burada desen yalnız bantta, gövde **Lora** (el yazısı değil) ve radius 6/10px (bohemian'da organik/asimetrik).
- **Victorian (27) değildir.** Victorian süslü çerçeve + small caps + gravür dokusuyla dolu bir yüzey kurar; burada süs **tek bant**, çerçeve yok, `--grain` yalnız .04.
- **"Kırmızı accent eklenmiş minimalizm" değildir.** Minimalizmde süs kategorik olarak yasak ve radius 8/12px; burada süs katmanı ve boyalı kural imzanın kendisidir.
- **Scrapbook (31) değildir.** Scrapbook katman/bant/polaroid ekler; burada tek düzlem, tek boya katmanı var.

### Nereden gelir
Norveç rosemaling'i (18.–19. yy gezici ressamların mobilya ve kilise duvarı boyaması), İsveç kurbits/dala geleneği ve Fin karélien nakışları aynı dili paylaşır: **simetrik bitkisel kıvrım + sınırlı palet + düz zemin**. Dijitalde 2020'lerde "craft revival" ve yerel üretici platformlarıyla geri döndü; nedeni ölçülebilir — düz zemin + tek accent, düşük bant genişliğinde bile kimlik taşır (görsel yerine CSS nokta şeridi yeter).

Klişeye düşmemek için korunması gereken detay: **bandın simetrisi ve ölçüsü**. Motifi büyütmek, metnin arkasına almak veya ikinci bir renk eklemek stili "turistik hediyelik" seviyesine indirir.

### 3 saniyede tanıma testi
1. Zemin **keten sarısı** mı (`#f2ece0`), beyaz/gri değil mi?
2. Ekranın üstünde **nokta dizisi** (rosemaling bandı) ve bir köşede **eş merkezli halka** var mı?
3. Bölüm başlıklarının üstünde **1px kırmızı + 1px ince çizgi** ikilisi (boyalı çift kural) görünüyor mu?
4. Başlık **serif ve sıcak** (Fraunces 700, ≤54px), gövde de **serif** (Lora) mi — mono yalnız etiketlerde mi?
5. Kartlarda **gölge yok**, ayrım 1px çizgi mi; accent ekranın ≤ %12'sinde mi?

## Görsel imza
1. **Boyalı çift kural:** 1px `--accent` + 8px boşluk + 1px `--line`; her bölüm başlığının üstünde, başka yerde yok.
2. **Rosemaling nokta şeridi:** 32×20px tekrar, 2px accent nokta + 1.5px %40 opaklık ikinci nokta, opacity .50 — yalnız sayfa üst bandı.
3. **Kurbits köşe:** 148×148px, 2px `%34 accent` halka + 10px iç halka; hero sağ üstte, mobilde 84px.
4. **Düz boya zemin:** zemin ile kart arasındaki fark yalnız ton (`--bg` → `--surface`); kartta `box-shadow: none`.
5. **Simetrik bant, asimetrik içerik:** dekoratif eksen ortada, metin ekseni solda; ekran başına en fazla 1 asimetrik blok.
6. **Kırmızı yalnız üç yerde:** birincil buton, aktif nav işareti, ornament çekirdeği. Dördüncü kullanım yasak.
7. **Chip = nokta:** pill radius (999px) 24px yükseklik, 1px `%42 accent` kenar — "boyanmış düğme" hissi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f2ece0` | Sayfa zemini (keten boya) | Kart içi, form alanı |
| `--bg-2` | `#e9e0cf` | Bölüm şeritleri, alt bilgi | Metin arkası blok |
| `--surface` | `#fbf7ed` | Kart, panel, form alanı | Sayfa zemini |
| `--surface-2` | `#e3d9c6` | Chip, ikincil buton hover, tablo başlığı | Geniş alan dolgusu |
| `--ink` | `#1d2a24` | Gövde, başlık (çam yeşili siyah) | Accent zemin üstü |
| `--ink-soft` | `#4b5b51` | İkincil metin, açıklama | Küçük etiket |
| `--ink-faint` | `#6f7d71` | Dekoratif etiket, ayırıcı metin | Etkileşimli metin, gövde |
| `--accent` | `#9c2b21` | Birincil buton, aktif işaret, ornament | Geniş zemin, gövde metni |
| `--accent-ink` | `#fdf6e8` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(29,42,36,.16)` | Kart kenarı, tablo çizgisi | Accent kural (o accent) |

- Ölçülen kontrast: `ink / bg` = **12.67:1** · `ink-soft / bg` = **6.12:1** · `accent-ink / accent` = **7.02:1** · `ink-faint / bg` = **3.68:1** (yalnız dekoratif).
- Tek vurgu kuralı geçerli: keten + çam + madder. Accent alanı ekranın **≤ %12'si**.
- Yasak kombinasyon: accent zemin + `--ink-faint` metin (3.0:1 altı), ikinci accent (sarı/mavi), siyah-beyaz saf kontrast.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 54px (mobil 34px) | 700 | 1.04 | -0.015em |
| H2 | Fraunces | 30px | 700 | 1.16 | -0.01em |
| H3 | Fraunces | 20px | 700 | 1.28 | 0 |
| Gövde | Lora | 16px | 400 | 1.66 | 0 |
| Lede | Lora | 16.5px | 400 | 1.66 | 0 |
| Etiket / mono | IBM Plex Mono | 11px | 600 | 1.4 | 0.18em |

- Ölçek oranı ≈ 1.34 (16 → 20 → 30 → 54); kullanılan basamak sayısı 6.
- Ölçü önerisi: `h1 { font-size: clamp(34px, 4.2vw, 54px) }`.
- Gövde metni maksimum satır uzunluğu: **64ch**; lede 46ch.
- Ağırlık kuralı: yalnız 400 ve 600/700. 300 ve 900/800 yok. Display'de italik yok.
- Mono yalnız etiket, sayı ve chip metninde; gövdede mono kullanmak stilin sıcaklığını siler.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (dekoratif bant 12 kolonu ortalar, içerik 8 kolon kullanır) |
| Gutter | 24px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında 1 kolon, dekoratif köşe 84px'e küçülür |

- Asimetri kuralı: ekran başına en fazla **1** asimetrik blok (hero metni sola, köşe ornamenti sağa); diğer bölümler simetrik ızgarada.
- Bölüm ritmi: art arda en fazla **3** aynı hizada blok; dördüncüde boyalı çift kural ile nefes verilir.
- Bölüm dikey boşluk 96px (mobil 56px); kart padding 24px; kart arası 24px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, bölüm şeridi |
| Kart | `--surface` + `--line` | `none` | Panel, KPI, bileşen kartı |
| Yüzen katman | `--surface` + `--shadow` | `0 1px 2px rgba(29,42,36,.10)` | Modal, dropdown, hero görseli |

- Kenarlık formülü: `1px solid var(--line)`; sekonder kural gerekirse `1px solid color-mix(in srgb, var(--accent) 42%, transparent)` (yalnız chip).
- Derinlik nereden gelir: **boya ve kural** — 2px accent çizgi, çift kural, radius-lg; gölge yok.
- Radius: `--radius` 6px (buton, input) · `--radius-lg` 10px (kart, modal, hero görseli). Pill yalnız chip ve toast'ta (999px).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 12px 20px | 6px | 15px/600 Lora | `--accent` / `--accent-ink`, gölge yok | hover %90 karışım 190ms · active translateY(1px) · focus 2px accent + 3px offset · disabled opacity .45 kesikli · loading 3 nokta 640ms |
| Buton (ikincil) | 44px | 12px 20px | 6px | 15px/600 Lora | şeffaf / `--ink`, 1px `--line` | hover `--surface-2` · focus aynı halka |
| Input | 44px | 0 14px | 6px | 16px/400 Lora | `--surface` + 1px `--line` | focus 2px accent + 2px offset · filled `--surface` · error `--danger` kenar + metin · disabled opacity .45 |
| Kart | — | 24px | 10px | başlık Fraunces 20px | `--surface`, gölge yok | hover: yalnız kenar koyulaşır (`--line` → accent %30) |
| Chip / badge | 24px | 0 10px | 999px | 11px/600 mono | `--surface-2`, 1px accent %42 | accent varyantı: accent zemin + accent-ink |
| Nav | 56px | 0 32px | 0 | 13px/600 Lora + 11px mono etiket | `--surface` zemin + alt çizgi | aktif: accent 2px alt çizgi + accent metin; pasif `--ink-soft` |
| Tablo satırı | 44px | 10px 14px | 0 | 14px/400 Lora, sayı mono | satır altı 1px `--line` | hover `--bg-2` · seçili: sol 2px accent |
| Modal / sheet | — | 24px | 10px | H2 Fraunces 30px | 2px accent çerçeve + `--shadow` | kapanış 190ms fade |
| Toast | 40px | 10px 18px | 999px | 13px/600 Lora | `--ink` zemin / `--bg` metin | sol uçta 6px accent nokta, 3600ms |
| Grafik paleti | — | — | — | eksen 11px mono | `--accent`, `--ink-soft`, `--ink-faint` | en fazla 3 seri, çizgi 2px, alan dolgusu yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — düz zeminde accent halka görünür; accent zemin üstünde buton içinde `outline-offset: -4px` kullanılır.
- Dokunma hedefi: en az 44×44px. Chip görsel olarak 24px, ama satır içi sarmalayıcıya 10px dikey padding verilerek 44px'e çıkarılır.
- Buton metni asla uppercase değil (folk dili sıcak kalır); tek istisna nav mono etiketleri (11px, .18em).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, yuvarlatılmış uç, 20/24px ızgara; dolu ikon yok |
| Fotoğraf | Sıcak doğal ışık, mat yüzey, ahşap/keten/kıl; doygunluk düşük; genişlik ekranın en fazla %58'i |
| İllüstrasyon | El boyaması bitkisel kıvrım (kurbits) — yalnız bant/köşe; içerik illüstrasyonu yok |
| Doku | `--grain: .04` keten; görünür gürültü değil, boya hissi |
| Logo alanı | Serif metin logo (Fraunces 700); çevresinde 24px güvenli boşluk; monogram/negatif varyant yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Üst nokta bandı + kurbits köşe; boyalı çift kural başlığın üstünde | `shots/01-landing.png` |
| Dashboard | düşük | Süs yok; kartlar 1px çizgi, KPI sayıları mono, accent yalnız trend | `shots/02-dashboard.png` |
| Form | düşük | Konvansiyon: 44px alan, 2px odak halkası, açıklama `--ink-soft` | — |
| Liste / tablo | düşük | Zebra yok; 44px satır, satır altı 1px çizgi | — |
| Boş durum | orta | Tek kurbits çizimi (84px) + 1 cümle + 1 buton | — |
| Onboarding | yüksek | 3 adım, her adımda tek ornament; ilerleme = 3 nokta dizisi | — |
| Pricing | orta | 3 kart, orta kartta 2px accent çerçeve; fiyat mono | — |
| Giriş / ödeme | çok düşük | Süs sıfır; yalnız logo, alan, buton; tek accent buton | — |
| Modal | orta | 2px accent çerçeve, iç 1px line ikinci kural | — |
| Bildirim / toast | orta | Pill toast, sol uçta accent nokta, 3600ms | — |
| Hata | düşük | `--danger` kenar + metin; ornament kullanılmaz | — |
| Profil / ayar | orta | Bölüm başlıkları boyalı çift kural; form alanları 44px | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 110ms | `cubic-bezier(.22,.61,.36,1)` | `transform: translateY(1px)`, `background-color` |
| Giriş (enter) | **620ms** | `cubic-bezier(.22,.61,.36,1)` | `opacity` + `translateY(18px)`, stagger **45ms** |
| Kaydırma (scroll) | **760ms** | `cubic-bezier(.22,.61,.36,1)` | trigger `top 86%`, offsetY **22px**, `once: true` |
| Hover | **190ms** | `ease-out` | görsel ölçek **1.018**, kenar koyulaşması |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu (toast) | 300ms | `cubic-bezier(.22,.61,.36,1)` | `translateY(8px)` → 0, 3 nokta ardışık |

- `prefers-reduced-motion`: tüm süreler 0.01ms; nokta şeritleri ve kurbits halkası statik kalır (animasyonlu dekor yok).
- Bu stile yasak hareket: parallax, sürekli döngü, spring/bounce, dekoratif bandın kayması/dönmesi.
- İmza ölçüsü: giriş **0.62s / 18px / stagger .045**, kaydırma **0.76s / top 86% / 22px**, hover **190ms / 1.018**, pin **kapalı** — bandın hiçbir stili bu dörtlüyü tekrar etmez.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f2ece0` | `#141a17` |
| `--bg-2` | `#e9e0cf` | `#1a221e` |
| `--surface` | `#fbf7ed` | `#1f2823` |
| `--surface-2` | `#e3d9c6` | `#27332c` |
| `--ink` | `#1d2a24` | `#ece5d5` |
| `--ink-soft` | `#4b5b51` | `#b4bfae` |
| `--ink-faint` | `#6f7d71` | `#8a9686` |
| `--accent` | `#9c2b21` | `#e07a66` |
| `--accent-ink` | `#fdf6e8` | `#141a17` |
| `--line` | `rgba(29,42,36,.16)` | `rgba(236,229,213,.16)` |

- Koyu modda değişen başka ne var: accent **açılır** (koyu kırmızı koyu zeminde kaybolur), `--accent-ink` koyuya döner; gölge yerine kenarlık kalır (kart `box-shadow` yine `none`).
- `--grain` koyuda .03'e düşer (koyu zeminde grain daha görünür).
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **14.06:1** · `ink-soft/bg` = **9.25:1** · `accent-ink/accent` = **6.00:1**.

## Zorunlu kurallar

1. **Düz boyanmış zemin:** renk bloğu tek parça; gradient, cam ve blur yok (`--blur: 0`).
2. **Süs yalnız ayrılmış bantta:** üst şerit, bölüm ayırıcı, hero köşesi. Motif metnin arkasına girmez.
3. **Accent ≤ %12:** madder kırmızı yalnız birincil buton, aktif nav işareti ve ornament çekirdeğinde.
4. **Boyalı çift kural:** 1px accent + 8px boşluk + 1px line; her bölüm başlığını bu ayırır.
5. **Serif ikilisi:** display Fraunces 700 (≤ 54px), gövde Lora 400; mono yalnız etiket ve chip'te.
6. **Ritim 96/56px, ölçü 64ch, kart padding 24px** — üçü birlikte boşluğun ölçüsüdür.

## Yasaklar

- Motifi metnin arkasına yerleştirmek; kontrast ve okunabilirlik kırılır.
- Üçten fazla renk ailesi (keten + çam + madder dışında) ve ikinci accent.
- Gradient ile hacim taklidi, blur, cam yüzey, neon parlaklık.
- 900/800 ağırlık, italik display, 10px üstü radius.
- Asimetrik dekoratif bant (folk bandı daima simetrik kalır).
- Gövde metninde uppercase veya 0.05em üstü tracking.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.68:1** (açık) ve **5.70:1** (koyu). Açık temada `--ink-faint` **yalnız dekoratif** (etiket süsü, ayırıcı); etkileşimli metin değil.
- `--ink-faint` hiçbir buton, bağlantı veya form etiketinde kullanılmaz.
- Hareket/parlama hassasiyeti: düşük — animasyon yalnız opaklık ve 18–22px dikey kayma; parlama/flash yok.
- Şeffaf yüzey yok (`--blur: 0`), bu yüzden `@supports` fallback gerekmez; `color-mix` desteklenmezse chip kenarı `1px solid var(--line)` olur.
- Odak görünürlüğü: accent zeminli butonda accent halka kaybolur → `outline-offset: -4px` ve `outline-color: var(--accent-ink)` ile içeri alınır.
- Dekoratif katman `.sig` `pointer-events: none` ve `aria-hidden="true"`; ekran okuyucuya motif duyurulmaz.

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
| Metin zor okunuyor | motif hero metninin arkasına taşmış | Motifi `.sig` katmanına al, metnin arkasına `background` koyma |
| "Turistik hediyelik" hissi | motif büyütülmüş + ikinci renk eklenmiş | Nokta şeridi 32×20px'te kalsın, tek accent (madder) korunsun |
| Ekran ağır görünüyor | bölüm ritmi 96px yerine 48px, kart padding 16px | 96/56px ritim ve 24px padding'e dön |
| Başlıklar kimliksiz | Fraunces yerine sans display | Display'i Fraunces 700'e sabitle, italic kullanma |
| Fazla kırmızı | accent buton + nav + chip + grafik hepsinde | Accent'i 3 yere indir (buton, aktif işaret, ornament çekirdeği) |
| Kirli kenarlar | `color-mix` yerine sabit rgba | Yalnız `var(--...)` ve `color-mix(in srgb, var(--accent) …)` kullan |

## Komşu stiller

- **Uyumlu:** `japandi` — sıcak nötr zemin aynı; garnitür olarak yalnız sessiz bölümlerde kullanılır (süs eklenmez).
- **Uyumlu:** `bohemian` — el yapımı dili paylaşır; bohemian'ı tek katmanda (ürün kartı) ve desensiz kullan.
- **Uyumlu:** `editorial-design` — serif + kolon ritmi ortak; uzun makale sayfasında gövde metnini editorial'a bırak.
- **Yasak:** `neo-brutalism` — sert gölge ve 3px siyah kenar düz boya dilini kırar.
- **Yasak:** `glassmorphism` — blur ve şeffaflık `--blur: 0` kuralıyla çelişir.
- **Yasak:** `cyberpunk` — neon ve mono gövde, folk sıcaklığını siler.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Rosemaling | bitkisel kıvrım, simetri ve üç renk disiplini |
| https://en.wikipedia.org/wiki/Dala_horse | tek motifli halk ikonu; süsün ölçülü kullanımı |
| https://www.nasjonalmuseet.no/en/ | halk sanatı arşivi: zemin/şerit oranları |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | dekoratif motifin etkileşimli öğeden ayrılması |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Nordic Folk (styles/66-nordic-folk/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="nordic-folk"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Fraunces 700 (H1 <= 54px, tracking -0.015em), gövde Lora 400 16/1.66,
  mono IBM Plex Mono yalnız etiket/chip (11px, .18em, uppercase serbest).
Yüzey: düz boya; kart box-shadow: none, ayrım 1px var(--line). Radius 6px / 10px (chip 999px).
Renk: keten #f2ece0 zemin + cam #1d2a24 metin + tek accent madder #9c2b21 (ekranin <= %12'si).
Imza: boyalı çift kural (1px accent + 8px bosluk + 1px line) her bolum basliginin ustunde;
  ust bantta 32x20px nokta seridi (opacity .5); hero sag ustte 148px es merkezli halka (kurbits);
  nav altinda 2px accent kural. Sus YALNIZ bu bantlarda; metnin arkasina motif koyma.
Hareket: enter 620ms cubic-bezier(.22,.61,.36,1) 18px stagger 45ms; scroll top 86% / 760ms / 22px / once;
  hover 190ms imageScale 1.018; pin kapali. prefers-reduced-motion zorunlu.
Yasak: gradient, blur, cam, ikinci accent, metin arkasinda motif, 900 agirlik, italik display,
  asimetrik dekoratif bant, gövdede uppercase.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (nokta şeridi + boyalı çift kural).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (12.67:1), accent üstü ≥ 4.5:1 (7.02:1).
- [ ] Odak halkası görünür (2px accent + 3px offset), dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok; köşe ornamenti 84px'e küçülüyor.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="nordic-folk"] {
  --bg: #f2ece0; --bg-2: #e9e0cf;
  --surface: #fbf7ed; --surface-2: #e3d9c6;
  --ink: #1d2a24; --ink-soft: #4b5b51; --ink-faint: #6f7d71;
  --accent: #9c2b21; --accent-ink: #fdf6e8;
  --line: rgba(29,42,36,.16);
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 1px 2px rgba(29,42,36,.10); --shadow-hard: none;
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Lora", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.015em; --blur: 0px; --grain: 0.04;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="nordic-folk"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
