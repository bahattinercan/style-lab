# 41 · Grand Tourer

> **In one sentence:** Krem deri, krom hairline ve kadran: 1960'ların klasik GT kokpiti gibi davranan, lüksü süsle değil malzemeyle anlatan bir arayüz.

| | |
|---|---|
| **Feeling** | zamansız, pahalı, el işçiliği, "sahibinden değil ustasından" |
| **Best for** | premium emlak/galeri vitrini, butik otel, klasik otomobil, mücevher, özel bankacılık, yat/charter |
| **Avoid** | yoğun operasyon paneli (20+ satır canlı tablo), çocuk/eğitim ürünü, indirim-kampanya sayfası, oyun, hızlı tüketim e-ticareti |
| **Difficulty** | orta (krom kenar disiplini + kadran; yanlış kullanımda "eskimiş" görünür) · **Accessibility** |  |
| **Family** | Timeless (41–44) · **Token** | `kit/tokens.css` → `[data-style="grand-tourer"]` |
| **Composition** | `fullbleed` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Grand Tourer, lüksü **malzemeyle** kurar: krem deri zemin (`#efe7da`), parşömen kart (`#f8f2e8`), her kartın içinde `1px` beyaz **krom parlama** ve dışında `1px` sıcak hairline, tek vurgu olarak **İngiliz yarış yeşili** (`#1f3b2c`), tipografi olarak krom rozet yazısı gibi davranan **Cinzel** büyük harf. Süs; çiçek, altın çerçeve veya gradyan değil **ölçü**dür: 50px büyük harf başlık, 0.09em harf aralığı, 96px bölüm boşluğu, 2/3px köşe.

Kazandığı şey: **yaşlanmayan değer algısı**. Klasik bir araba gibi, "yeni trend" olmadığı için 5 yıl sonra da pahalı durur; krem zemin gündüz okunur, yeşil vurgu butonu tek bakışta bulunur. Feda ettiği şey: **bilgi yoğunluğu ve hız**. Büyük harf + geniş tracking, aynı alanda %20 daha az kelime taşır; bu yüzden bu stil satış vitrinine, ilan detayına ve marka anlatısına uygundur, canlı operasyon tablosuna değil.

Stilin ikinci taşıyıcısı **gösterge kadranı**dır: landing'de kahraman görselin köşesinde yarım kalan, tik işaretli, iğneli bir saat; KPI ve fiyatlar ise **Courier Prime** ile sayaç rakamı gibi yazılır. Bu iki detay stili "bej lüks şablon"dan ayırır.

### What is not
- **Luxury Typography (04) değildir.** O boşluk ve ince serifle çalışır, rengi neredeyse yoktur; burada **yeşil vurgu, mono sayaç rakamı ve kadran** vardır — malzeme konuşur, sessizlik değil.
- **Art Deco (26) değildir.** Deco simetri + altın hairline + ziggurat geometrisi kullanır ve koyudur; burada **asimetri, krom (beyaz/sıcak gri) hairline, krem zemin** ve tek yeşil vurgu var. Altın yok.
- **Victorian (27) değildir.** Victorian çift çerçeve + gravür + yoğun süs; burada çerçeve **tek hairline + iç krom parlama**, süs yalnız kadran.
- **Skeuomorphism (34) değildir.** Skeuomorphism gerçek malzemeyi taklit eder (ahşap fotoğrafı, dikiş, cam yansıması); burada malzeme **düz renk + 1px parlama** ile ima edilir, taklit edilmez.
- **Scandinavian Dark (40) değildir.** O koyu ve soğuk nötr; bu açık, sıcak ve kromlu — ölçülülük ortak, ışık yönü ve palet ters.
- **"Bej + serif" değildir.** Cinzel büyük harf yoksa, kadran/sayaç rakamı yoksa ve krom iç parlama yoksa geriye "sıcak kurumsal tema" kalır.

### Where it comes from
1960'ların grand tourer kokpitinden: Smiths/Jaeger kadranları, ceviz kaplama gösterge paneli, krom çerçeveli anahtarlar, krem Connolly derisi ve ince çift çizgi **koç çizgisi**. Dijitalde 2010'ların "premium" furyası (altın gradyan + siyah) tükendiği için, lüks markalar yeniden **malzeme ve ölçü** diline döndü: mat krem kâğıt, tek vurgu, gerçek tipografi. Bu stil o dönüşün okunabilir hâlidir. Klişeye düşmemesi için korunması gereken detay: **kromun 1px kalması** — iç parlamayı 2px yapmak veya kart gölgesini büyütmek stili "eski ofis yazılımı"na çevirir.

### Recognition test in 3 seconds
1. Zemin **krem/părşömen** mi (`#efe7da` / `#f8f2e8`); soğuk beyaz ya da siyah var mı? (Olmamalı.)
2. Kartlarda **iç 1px beyaz parlama + dış 1px hairline** var mı; koyu blok gölge var mı? (Gölge olmamalı.)
3. Başlık **Cinzel büyük harf, 0.09em** aralıklı mı; eğik/el yazısı ya da 700 ağırlık var mı?
4. Tek **yeşil** vurgu mu var; ikinci bir doygun renk (altın, bordo, mavi) sızmış mı?
5. Rakamlar (fiyat, KPI, tarih) **mono sayaç** gibi mi; kadran/tik/iğne veya çift çizgi koç çizgisi görünüyor mu?

## Visual signature
- **Krom kart:** `.panel { background: var(--surface); border: 1px solid var(--line); border-radius: 6px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(28,26,23,.08); }` — dış hairline koyu, iç parlama beyaz; iki çizgi arası 0px, toplam 2px.
- **Krem zemin:** `--bg #efe7da` + `--grain .035`; kart `--surface #f8f2e8` ile **%4–%6 daha açık** — kart "kâğıt", zemin "deri".
- **Rozet çerçevesi:** logo `26px` daire, `--accent` dolgu, iç `1px` beyaz parlama; harf Cinzel. Kare/radiuslu monogram kullanılmaz.
- **Ceviz damarı:** yalnız yan panellerde (dashboard side, auth aside, footer, footer şerit): `1px` dikey çizgi / `11px`, `--ink` %2.5 opaklık.
- **Koç çizgisi:** `border-top: 1px var(--accent)` + `border-bottom: 1px var(--line)`, aralarında 2px; nav altında `box-shadow: 0 4px 0 -3px var(--accent)` ile 1px yeşil çizgi.
- **Kadran:** 224px daire; tik halkası (`repeating-conic-gradient`, `.9deg` tik / `9deg` aralık, 64–100px annulus), çift krom halka (88px + 96px), iğne (`conic-gradient` `1.3deg` kama, 82px, `--accent`), göbek `4px` + beyaz halka. Landing dışında tekrarlanmaz.
- **Sayaç tipografisi:** `--font-mono` 400, `letter-spacing: 0`; fiyat 26px, KPI 22px, 404 44px, tablo sayısı 11.5px.
- **Typography:** Cinzel (display) + Jost (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#1f3b2c`; neutral scale `#efe7da` → `#1c1a17`.
- **Radius:** `3px` / `6px`; Card 10–14px, button 6–10px; full circle only chip/badge.

## Mandatory rules

1. **Krom kenar = 2 çizgi, 2px toplam.** Her kart: dış `1px solid var(--line)` + iç `inset 0 0 0 1px rgba(255,255,255,.6)`. Üçüncü çizgi, çift çerçeve (outline + border) ve 2px kenar yok. Kenar **hep aynı kalınlıkta** kalır; aktif durum kenarı kalınlaştırmaz, renk değiştirir.
2. **Tek vurgu: yarış yeşili `#1f3b2c`.** Ekranın ≤%8'i (veri ekranlarında ≤%4). Yalnız: birincil buton, aktif/selected durum, veri serisi 1, odak halkası. İkinci vurgu rengi yok; altın/şampanya yasak (Art Deco bölgesi).
3. **Büyük harf disiplini.** Display (Cinzel) her zaman büyük harf, `letter-spacing: .09em`, ağırlık **400**. Gövde metni asla büyük harf değil; mono etiketler büyük harf (`.14–.2em`).
4. **Sayaç rakamı.** Para, adet, tarih, yüzde, kod: `--font-mono` (Courier Prime) 400. Serif/mono ile rakam karıştırılmaz — bir ekranda sayıların tamamı mono.
5. **Boşluk ritmi.** Bölüm arası **96px** (mobil 56px), kart içi **28px** (mobil 20px), başlık–gövde 12px, kart–kart 20px. Tek sayfada 3'ten fazla farklı dikey boşluk değeri kullanılmaz.
6. **Köşe.** `--radius: 3px` (buton, input, chip, etiket), `--radius-lg: 6px` (kart, modal, hero görsel). 8px üstü yasak; `border-radius: 50%` yalnız kadran, avatar, rozet ve toggle topuzunda.
7. **Koç çizgisi.** Bölüm ayırıcı ve nav altı: `1px var(--accent)` + 1–2px boşluk + `1px var(--line)` çift çizgi. Ekran başına en fazla **3** koç çizgisi (nav, bölüm ayırıcı, footer); dekoratif tekrar yasak.
8. **Doku iki katman, ikisi de sabit.** `--grain: .035` (örtü opaklığı .175, overlay) + yan panellerde ceviz damarı: `repeating-linear-gradient(92deg, ink %2.5, 1px / 11px)`. Animasyonlu doku, parallax, kayma yok.
9. **Kadran bir tane.** Landing'de en fazla bir gösterge (tik halkası + iğne + göbek); başka ekranda kadran tekrarlanmaz, yerine mono sayaç rakamı kullanılır.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#efe7da` | page background | as a card background |
| `--bg-2` | `#e6dccb` | partition divider floor, table top | button background |
| `--surface` | `#f8f2e8` | kart, input, modal | full-page background |
| `--surface-2` | `#e8ddca` | passive chip, hover background | primary button |
| `--ink` | `#1c1a17` | title, body, icon | large background |
| `--ink-soft` | `#574f44` | secondary text, description | — |
| `--ink-faint` | `#726757` | decorative label, separator text | interactive text |
| `--accent` | `#1f3b2c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f4ecdc` | text above accent | non-accent background |
| `--line` | `rgba(28,26,23,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.15:1** · `ink-soft/bg` **6.56:1** · `ink-faint/bg` **4.51:1 (decorative)** · `accent-ink/accent` **10.39:1**.
- Price and stock information is written with --ink, not accent; accent solo action (cart, buy).
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 50px (mobile 30px) | 600 | 1.06 | -0.02em |
| H2 | same | 24px | 600 | 1.18 | -0.015em |
| H3 | same | 15.5px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16.5px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 9.5px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Price 26–32px display, currency 13px mono; product name 15px/600.
- Measure: 66ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Product grid 3–4 columns; card ratio 4:5. Filter rail 240px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Cards are separated by light shadow; On hover, the shadow grows, the edge does not change.
- Radius: `3px` (buton, input, chip), `6px` (kart, modal). Card 10–14px, button 6–10px; full circle only chip/badge.

## Bans

- Altın/şampanya metal, bakır vurgu, ikinci sıcak metal — "altın + siyah" lüks klişesi bu stilin dışında.
- Neon, glow (`box-shadow` ile parlama), renkli ışık lekesi, blur/`backdrop-filter` (`--blur: 0`).
- Gradyan geçişli buton/kart (metal taklidi), `linear-gradient` ile "krom" boyama; krom **yalnız 1px parlama çizgisi**.
- 2px ve üstü kenar, çift çerçeve, çerçeve + büyük gölge kombinasyonu, `border-radius` ≥ 8px.
- Saf siyah (`#000`) zemin/metin ve saf beyaz (`#fff`) kart: sıcak nötr (`#1c1a17`, `#f8f2e8`) kullanılır.
- Display'de 700 ağırlık, italik display, el yazısı font, negatif tracking (`< 0`) büyük harfte.
- Gövde metninde mono/uppercase; 300 ağırlık (Jost 300 krem zeminde kaybolur).
- Emoji, ikon kolajı, foto kolaj, illüstrasyon, desenli arka plan fotoğrafı.
- Sürekli hareket: marquee, nefes alan katman, dönen kadran iğnesi, sayaç animasyonu (sadece açılışta tek atım).
- Aynı ekranda 3'ten fazla koç çizgisi; her kartın altına çizgi eklemek ("makine çizimi" gürültüsü).
- Stack of discount labels on price.
- More than four types of rosettes.
- Auto-playing image.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 3px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 3px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 3px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 3px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 3px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 3px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 3px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.96:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 20px; basket/favorite full |
| photo | The product is single object, white/neutral backdrop, shadow is soft; 4:5 |
| illustration | Thin line only in category title |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 50px Cinzel büyük harf, 7/5 asimetri, tek yeşil CTA, hero görselinde bir kadran, koç çizgili nav | `shots/01-page.png` |
| Dashboard | düşük-orta | KPI sayıları mono 22px, başlıklar Cinzel 24px, krom kartlar, yeşil yalnız seri 1 ve aktif satır | `shots/01-page.png` |
| Mobil | orta | tek kolon, 30px başlık, 44px dokunma hedefi, sekme plakaları 2px, alt bar 56px | `shots/01-page.png` |
| Bileşenler · temel | orta | palet + tipografi + krom kenar + kadran levhası | `shots/01-page.png` |
| Form | düşük | tek sütun 460px, input 42px, odak 2px yeşil + 2px offset, süs 0 | `shots/01-page.png` |
| Modal / katman | orta | 6px radius + krom kenar + yumuşak gölge; backdrop %55; 2 buton sağa | `shots/01-page.png` |
| Veri | düşük | 52px satır, mono sayaçlar, 4 renkli grafik paleti, ince grid yok | `shots/01-page.png` |
| Gezinme | orta | koç çizgili nav, plaka chip, ray ikonları, footer'da ceviz damarı | `shots/01-page.png` |
| Pricing / danışmanlık | orta | 3 kart, orta kart `--surface-2` + üst 2px yeşil; fiyat mono 26px | `shots/01-page.png` |
| Giriş | çok düşük | süs 0; sol panelde ceviz damarı, tek kart, hata `--danger` 1px | `shots/01-page.png` |
| Liste (ilan listesi) | düşük-orta | filtre çubuğu + 52px satır, seçili satır `--surface-2` + sol 2px yeşil | `shots/01-page.png` |
| Boş / hata durumu | orta | tek ikon + tek cümle + tek buton; 404 mono 44px | `shots/01-page.png` |
| Ayarlar | düşük | bölüm başlığı Cinzel, satır ayırıcı hairline, tehlike bölgesi `--danger` 1px | `shots/01-page.png` |
| Ödeme | çok düşük | özet sütunu sağda, mono tutarlar, yeşil yalnız "Ödemeyi tamamla" | `shots/01-page.png` |
| Onboarding | orta | adım noktaları, seçenek kartı 6px + krom kenar, tek ileri CTA | `shots/01-page.png` |
| Makale / ilan künyesi | orta | 62ch ölçü, Cinzel 24px H2, hairline ayırıcı, mono künye satırı | `shots/01-page.png` |
| Mobil · alt sayfa | orta | üst köşe 6px, 44px sürükleme tutamacı, butonlar alt yapışkan | `shots/01-page.png` |
| Mobil · form | çok düşük | tam genişlik input 54px, klavye üstü 46px CTA, etiket mono | `shots/01-page.png` |
| Mobil · liste | düşük | 64px satır, krom kart, sağda durum plakası | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.15:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.56:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.51:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 10.39:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.96:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 90.5 | ≥ 60 target | thin text |

- `--ink-faint` is decorative only; never body text.
- Colour never carries meaning alone: state always comes with text or an icon.
- Keyboard order follows visual order; no focus traps. prefers-reduced-motion and prefers-contrast are supported.

## Sample images

Identical content is rendered with the same text in every style; only the design differs.

| Image | What to look at |
|---|---|
| `shots/01-page.png` | Single page — 1280×2400: navigation, hero, three sections, component grid, form/data, CTA and footer in one frame. |

## Traps

| Symptom | Cause | Fix |
| --- | --- | --- |
| "Eski ofis yazılımı" gibi duruyor | Kenar 2px+, kart gölgesi büyük, buton gradyanlı | Kenar 1px + iç 1px beyaz; gölge `0 1px 2px`; buton düz dolgu |
| "Bej lüks şablon" gibi duruyor | Kadran, sayaç rakamı ve koç çizgisi yok; her şey serif | En az bir kadran + tüm sayılar mono + nav altı çift çizgi |
| Art Deco'ya kaydı | Altın/şampanya ton, simetrik hero, çift altın çerçeve | Altını kaldır; asimetri 7/5; tek hairline + krom iç parlama |
| Krem zemin kirli/çamurumsu | Kart ile zemin arasında fark <%3 veya gri ton eklendi | Kart `#f8f2e8`, zemin `#efe7da`; griler sıcak (`#574f44`) |
| Okumak yoruyor | Gövde büyük harf, 300 ağırlık, 66ch üstü satır | Gövde Jost 400 normal harf, 62ch |
| Lüks değil "pahalı taklidi" | İki vurgu rengi, ikon çeşitliliği, emoji | Tek yeşil; ikon 1.6px tek set; emoji yok |
| Kadran oyuncak gibi | Tik halkası çok sık, iğne kalın, merkezde parlama | `.9deg` tik / `9deg` aralık, iğne `1.3deg` / 82px, göbek 4px |
| Mobilde başlık taşıyor | 50px sabit punto + geniş tracking | `clamp(30px, 4vw, 50px)`, `text-wrap: balance`, 2 satır sınırı |
| Ceviz damarı desen gibi | Opaklık > %4 veya tüm sayfada | %2.5, yalnız yan panel/footer, 1px/11px |
| Form "ölü" görünüyor | Input zemini kartla aynı | Input `--surface` + `1px color-mix(ink 22%)` + iç gölge |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `art-deco` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `bauhaus` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Cinzel | Cinzel — krom rozet büyük harf, 400 ağırlık, .09em tracking |
| https://fonts.google.com/specimen/Jost | Jost — 1960'lar broşür geometrik sansı, gövde 16.5/1.68 |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime — sayaç rakamı ve servis defteri etiketi (mono 400) |
| https://www.hagerty.com/media/ | Hagerty — klasik GT medyası — klasik GT kokpiti fotoğrafı: kadran, ceviz panel, krom anahtar |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — 4.5:1 gövde / 3:1 büyük metin eşiği ve ölçüm yöntemi |
| https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient | MDN — conic-gradient — kadran tik halkası ve iğne (conic-gradient + mask) |

## AI brief

```text
Stil: Grand Tourer (styles/41-grand-tourer/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="grand-tourer"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cinzel) yalnız başlıkta, BÜYÜK HARF, 400, tracking .09em;
           --font-body (Jost) gövdede, normal harf; --font-mono (Courier Prime) tüm sayı ve etiketlerde.

Yap:
- Zemin krem #efe7da, kart parşömen #f8f2e8; her kartta dış 1px hairline + iç 1px beyaz parlama (krom).
- Tek vurgu yarış yeşili #1f3b2c; ekranın ≤%8'i; accent üstüne her zaman #f4ecdc.
- Bölüm arası 96px (mobil 56px), kart içi 28px, gövde ölçüsü 62ch, radius 3/6px.
- Nav ve bölüm ayırıcıda koç çizgisi (1px yeşil + 1px hairline), ekran başına en fazla 3.
- Fiyat/KPI/tarih/yüzde: Courier Prime 400 (sayaç); serif veya sans ile rakam yazma.
- Landing'de tek kadran (tik halkası + çift krom halka + 1.3deg iğne); başka ekranda tekrarlama.
- Yan panellerde ceviz damarı: 1px / 11px, ink %2.5.

Yapma:
- Altın/şampanya, ikinci vurgu rengi, gradyan buton, glow, blur, 2px+ kenar, 8px+ radius.
- Saf siyah/beyaz; gövdede büyük harf veya 300 ağırlık; emoji; çizim/illüstrasyon.
- Simetrik hero (Art Deco bölgesi); sürekli animasyon.

Style: Grand Tourer (grand-tourer) · family: Timeless (41–44)
Token: --bg #efe7da · --surface #f8f2e8 · --ink #1c1a17 · --accent #1f3b2c · --line rgba(28,26,23,.18)
Radius: 3px / 6px · Typography: Cinzel / Jost / Courier Prime
Required: **Krom kenar = 2 çizgi, 2px toplam.** Her kart: dış `1px solid var(--line)` + iç `inset 0 0 0 1px rgba(255,255,255,.6)`. Üçüncü çizgi, çift çerçeve (outline + border) ve 2px kenar yok. Kenar **hep aynı kalınlıkta** kalır; aktif durum kenarı kalınlaştırmaz, renk değiştirir. · **Tek vurgu: yarış yeşili `#1f3b2c`.** Ekranın ≤%8'i (veri ekranlarında ≤%4). Yalnız: birincil buton, aktif/selected durum, veri serisi 1, odak halkası. İkinci vurgu rengi yok; altın/şampanya yasak (Art Deco bölgesi). · **Büyük harf disiplini.** Display (Cinzel) her zaman büyük harf, `letter-spacing: .09em`, ağırlık **400**. Gövde metni asla büyük harf değil; mono etiketler büyük harf (`.14–.2em`).
Banned: Altın/şampanya metal, bakır vurgu, ikinci sıcak metal — "altın + siyah" lüks klişesi bu stilin dışında. · Neon, glow (`box-shadow` ile parlama), renkli ışık lekesi, blur/`backdrop-filter` (`--blur: 0`). · Gradyan geçişli buton/kart (metal taklidi), `linear-gradient` ile "krom" boyama; krom **yalnız 1px parlama çizgisi**.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="grand-tourer"] {
  --bg: #efe7da; --bg-2: #e6dccb;
  --surface: #f8f2e8; --surface-2: #e8ddca;
  --ink: #1c1a17; --ink-soft: #574f44; --ink-faint: #726757;
  --accent: #1f3b2c; --accent-ink: #f4ecdc;
  --line: rgba(28,26,23,.18);
  --danger: #cd1d12;
  --danger-ink: #ffffff;
  --ok: #007931;
  --ok-ink: #ffffff;
  --warn: #ad4b00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 3px; --radius-lg: 6px;
  --shadow: inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(28,26,23,.08); --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0.09em; --blur: 0px; --grain: 0;
}
```
