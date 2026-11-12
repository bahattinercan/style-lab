# 42 · Grand Tourer Oxblood

> **Bir cümlede:** Grand Tourer sisteminin bordo deri kardeşi: aynı krem kokpit, aynı krom ve kadran, ama vurgu İngiliz kulüp derisinin bordo tonunda — üstüne gravür başlık, künye şeridi ve mat çerçeve eklenmiş "prime" katmanı.

| | |
|---|---|
| **Hissiyat** | kulüp üyesi, deri koltuk, gizli servet, "aileye özel" |
| **En iyi** | lüks konut/ofis portföyü, özel kulüp, butik otel suiteleri, mücevher, özel bankacılık, şarap/viski |
| **Kaçın** | kurumsal B2B panel, sağlık, çocuk ürünü, indirim kampanyası, devlet/kamu arayüzü (bordo + krem "kulüp" okunur) |
| **Zorluk** | orta · **Erişilebilirlik** | iyi (14.28:1 gövde, 9.75:1 accent üstü) |
| **Aile** | Zamansız (41–44) · **Token** | `kit/tokens.css` → `[data-style="grand-tourer-oxblood"]` |
| **Kompozisyon** | `sticky` · `pill` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Oxblood, **Grand Tourer (41) sisteminin palet varyantıdır**: tipografi, ızgara, krom kenar, kadran, koç çizgisi ve tüm bileşen ölçüleri birebir aynıdır. Değişen tek şey **vurgu ve nötr sıcaklığı**: yarış yeşili yerine bordo `#6b2130` (oxblood, klasik İngiliz deri rengi), zemin ise bir tık daha sıcak krem `#f1e9dd`. Böylece lüks "kulüp" tarafına kayar: yeşil bahçe/yarış, bordo koltuk/kütüphane.

Kazandığı şey: **yakınlık ve aidiyet**. Bordo, kontrastı düşük olduğu için saldırgan değil; krem zeminde "davet" gibi okunur. Feda ettiği şey: **kurumsal güvenlik**. Bordo + krem, banka/kurum arayüzünde değil, üyelik ve konuk ağırlama dilinde okunur; resmi işlem ekranlarında yeşil (41) veya lacivert (43) daha nötr kalır.

**Prime katmanı (41'den ayrıldığı yer).** 42, ailenin "üst donanım" varyantıdır; palet farkının üstüne beş ölçülebilir detay ekler: (1) başlıkta **gravür ışığı** (`text-shadow: 0 1px 0 rgba(255,255,255,.62)`) ve 52px/.12em geniş harf aralığı, (2) landing'de CTA altında **künye şeridi** (mono 9px, hairline hücreler), (3) birincil butonda **plaka halkası** (1px outline, 2px boşluk), (4) hero görselinde **mat çerçeve** (6px zemin boşluğu + 1px hairline + iç vinyet ≤%6), (5) kartlarda **işlenmiş alt kenar** (`inset 0 -1px 0 rgba(32,26,23,.07)`). Hareket de ağırlaşır: 200/400/560ms — "kapı kapanışı" hissi.

### Ne değildir
- **Grand Tourer (41) değildir** — aynı sistem, farklı palet. Yalnız rengi değiştirip ölçüleri bozarsanız (radius 12px, gölge, altın) bu stil olmaz; ikisi **tek ailede iki oda** gibidir.
- **Art Deco (26) değildir.** Deco'nun altını, simetrisi ve zigguratı yok; burada krom 1px ve asimetri var.
- **Victorian (27) değildir.** Bordo burada tek vurgu; gravür, çift çerçeve ve süs yok.
- **Dopamine/warm-luxury şablonları değildir.** Pembe-bej "sıcak minimal" furyasından farkı: **mono sayaç rakamı, krom iç parlama ve kadran** — sıcaklık renkten değil malzemeden gelir.

### Nereden gelir
Oxblood, 20. yüzyıl İngiliz kulüp ve otomobil iç mekânlarının deri rengi (Connolly "oxblood"), Amerikan üniversite ve ülke kulüplerinin koltuklarında standarttı. Dijitalde bordo, "davet" ve "üyelik" sinyali olarak geri döndü. Klişeye düşmemesi için korunması gereken detay: **bordoyu doygunlaştırmamak** — `#6b2130` üstüne parlak kırmızı eklendiği an stil "düğün davetiyesi"ne kayar.

### 3 saniyede tanıma testi
1. Zemin sıcak krem mi (`#f1e9dd`), vurgu **tek** bordo mu (`#6b2130`) — parlak kırmızı/bordo karışımı yok mu?
2. Kartlarda krom iç parlama (1px beyaz) + tek hairline var mı; gölge koyu blok mu? (Olmamalı.)
3. Başlık Cinzel büyük harf, 0.09em mi; altın/şampanya sızmış mı? (Olmamalı.)
4. Fiyat/KPI **mono sayaç** mı; serif rakam var mı?
5. Nav altında koç çizgisi ve landing'de kadran var mı?

## Zorunlu kurallar

1. **Krom kenar:** dış `1px var(--line)` + iç `inset 0 0 0 1px rgba(255,255,255,.6)`. Toplam 2px, üçüncü çizgi yok.
2. **Tek vurgu bordo `#6b2130`:** ekranın ≤%8'i (veri ekranlarında ≤%4). Parlak kırmızı, bordo-mor, altın ikinci vurgu yasak.
3. **Durum rengi ayrı:** `--danger #9a3b1e` (yanık kızıl) — accent bordo ile karışmaması için bilinçli olarak daha turuncu; "sil" butonu asla accent bordoyu kullanmaz.
4. **Büyük harf disiplini:** display Cinzel 400 büyük harf `.09em`; gövde Jost normal harf; mono etiket `.14–.2em`.
5. **Sayaç rakamı:** para/adet/tarih/yüzde/kod Courier Prime 400; bir ekranda sayıların tamamı mono.
6. **Boşluk ve köşe:** bölüm 96px (mobil 56px), kart içi 28px, radius 3/6px. 8px üstü radius yok.
7. **Koç çizgisi:** `1px var(--accent)` + 1–2px boşluk + `1px var(--line)`; ekran başına en fazla 3.
8. **Doku:** `--grain: .035` + yan panellerde ceviz damarı 1px/10px %3.2; ikisi de `pointer-events: none`.
9. **Kadran:** yalnız landing'de bir tane; tik halkası + çift krom halka + 1.3° iğne.
10. **Gravür başlık:** h1 52px, `letter-spacing: .12em`, `text-shadow: 0 1px 0 rgba(255,255,255,.62)`. Işık tek yönlü ve 1px; 2px üstü deboss gölge, çift ışık, iç gölge yasak.
11. **Plaka CTA:** yalnız **birincil** butonda 1px accent halka (`outline`, offset 2px) — ikincil/sessiz butonda halka yok; halka 2px+ veya çift halka olmaz. **Yıkıcı eylem** (`--danger`) halka almaz ve mobil/dar sahnelerde halka kapanır (kırpılma).
12. **Mat çerçeve + künye:** landing'de hero görseli mat çerçeve (6px `--bg` + 1px hairline + iç vinyet ≤%6) alır; CTA altındaki üç hücreli künye şeridi mono 9px `.18em`, hücre arası 1px dikey çizgi. Vinyet %6'yı geçmez (kontrast düşürür).

## Yasaklar

- Altın/şampanya/bakır metal, pembe-bej "sıcak minimal" geçişi, ikinci vurgu (mor, yeşil, turuncu).
- Parlak kırmızı (`#c1121f` ve benzeri) — bordo ile yan yana "indirim" diline kayar.
- Gradyan buton/kart, glow, blur (`--blur: 0`), renkli ışık lekesi.
- 2px+ kenar, çift çerçeve, koyu blok gölge, radius ≥ 8px.
- Saf siyah/beyaz; gövdede büyük harf veya 300 ağırlık.
- Display 700/italik, el yazısı font, negatif tracking.
- Emoji, illüstrasyon, foto kolaj, desenli arka plan.
- Sürekli animasyon (marquee, dönen iğne, nefes alan katman), spring.

## Görsel imza
- **Bordo krom kart:** `--surface #f9f3e9` + dış hairline + iç beyaz 1px + **alt 1px işlenmiş gölge çizgisi** (`inset 0 -1px 0 rgba(32,26,23,.07)`); kart zemini sayfadan %4–%6 açık.
- **Gravür başlık:** Cinzel 400, 52px, `.12em`, `text-shadow: 0 1px 0 rgba(255,255,255,.62)` — krem zeminde kabartma plaka; eyebrow ve etiketler bordo (`--accent`), `.22–.24em`.
- **Mat çerçeve:** hero görseli `0 0 0 6px var(--bg), 0 0 0 7px color-mix(ink 15%)` + `inset 0 0 70px color-mix(ink 6%)` → duvara asılmış baskı; koyu blok gölge yok.
- **Künye şeridi:** CTA altında üç hücre, mono 9px `.18em`, üst/alt 1px hairline, hücre arası 1px dikey çizgi, 4px bordo nokta.
- **Plaka CTA:** birincil butonda `outline: 1px color-mix(accent 40%)`, `outline-offset: 2px`, mono 11px `.2em`; buton içinde üst beyaz/alt koyu 1px krom.
- **Tek bordo anlam:** birincil buton, aktif satır işareti, veri serisi 1, odak halkası — başka yerde bordo yok.
- **Sıcak nötr:** `--ink #201a17` (kahve-siyah), `--ink-soft #5a4d45`, `--line rgba(32,26,23,.18)`; soğuk gri yok.
- **Koç çizgisi:** nav altında 1px bordo + 1px hairline; onboarding/ayırıcıda `border-top: 1px var(--accent)` eşleşmesi.
- **Kadran:** 224px, `.9deg` tik / `9deg` aralık, 88/96px krom halka, `1.3deg` bordo iğne, 4px göbek.
- **Ceviz damarı:** 92°, 1px / 11px, `--ink` %2.5 — yalnız yan panel, auth asidesi ve footer.
- **Sayaç tipografisi:** fiyat 26px, KPI 22px, 404 44px mono; `letter-spacing: 0`.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f1e9dd` | sayfa zemini (sıcak krem deri) | kart yüzeyi |
| `--bg-2` | `#e8dfd0` | ikincil bölüm, input zemini, bulk bar | birincil kart |
| `--surface` | `#f9f3e9` | kart, panel, modal, tablo kabı | tam sayfa zemin |
| `--surface-2` | `#e9dfce` | hover, seçili satır, çip zemini | ana kart |
| `--ink` | `#201a17` | başlık, gövde, sayaç (**14.28:1**) | accent zemin üstünde |
| `--ink-soft` | `#5a4d45` | açıklama, lede, pasif nav (**6.75:1**) | başlık |
| `--ink-faint` | `#74665c` | etiket, sıra no, ipucu (**4.59:1**) | uzun gövde metni |
| `--accent` | `#6b2130` | buton, aktif durum, seri 1, odak (**9.25:1** bg üstü) | durum/silme |
| `--accent-ink` | `#f7efe1` | accent üstü metin (**9.75:1**) | accent dışı zeminde (1.03:1) |
| `--line` | `rgba(32,26,23,.18)` | kenarlık, koç çizgisi | metin |
| `--danger` | `#9a3b1e` | silme/tehlike (**5.78:1**) | dekoratif vurgu |

- Ölçülen kontrast: `ink/bg` **14.28:1** · `ink-soft/bg` **6.75:1** · `ink-faint/bg` **4.59:1** · `accent-ink/accent` **9.75:1** · `accent/bg` **9.25:1** · `ink/surface` **15.57:1** · `ink/surface-2` **13.03:1** · `ink-soft/surface-2` **6.16:1** · `ink-faint/surface-2` **4.19:1** (dekoratif) · `ok/bg` **7.04:1** · `warn/bg` **4.91:1** · `danger/bg` **5.78:1**.
- Grafik paleti: `--data-1 #6b2130` (bordo), `--data-2 #6f6250` (ceviz), `--data-3 #9d9079` (krom gölge), `--data-4 #a9762d` (pirinç, yalnız 4. seri).
- Yasak kombinasyon: bordo zemin üstü `--ink` (2.6:1), `--ink-faint` üstü `--surface-2` gövde metni (4.19:1), accent bordo ile `--danger` yan yana aynı anlamda.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cinzel | 52px (mobil 31px) | 400 | 1.06 | `.12em`, büyük harf, gravür ışığı |
| H2 | Cinzel | 24px | 400 | 1.16 | `.10em` |
| H3 | Cinzel | 15.5px | 400 | 1.3 | `.08em` |
| Gövde | Jost | 16.5px | 400 | 1.68 | `0` |
| Küçük gövde | Jost | 13px | 400 | 1.55 | `.01em` |
| Etiket / mono | Courier Prime | 9.5–10.5px | 400 | 1.2 | `.14–.2em` |
| Sayaç | Courier Prime | 22–26px | 400 | 1.05 | `0` |

- Basamaklar **9.5 · 11 · 13 · 16.5 · 24 · 52**; ölçü `clamp(31px, 4vw, 52px)`, gövde 62ch, lede 44ch.
- Ağırlık: yalnız 400/500; Cinzel 400 (700 büyük harfte tabela etkisi yapar), gövde 300 yasak.
- Gravür ışığı yalnız **başlıkta**; gövde metninde `text-shadow` yok (küçük puntoda bulanıklık yapar).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 32px |
| Container | 1160px (galeri 1320px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 96 |
| Breakpoint | <640 tek kolon (20px), 640–960 8 kolon, >960 12 kolon |

- Asimetri: hero 7/5 veya 8/4; ekran başına en fazla 2 bölüm asimetrik; simetrik hero yasak (tek kart onboarding/404 istisna).
- Ritim: bölüm 96px (mobil 56px), kart içi 28px, kart–kart 20px, başlık–gövde 12px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | yok | sayfa + grain + ceviz damarı |
| Kart | `--surface` + krom kenar | `0 1px 2px rgba(32,26,23,.08)` | panel, KPI, tablo kabı, plan kartı |
| Yüzen | `--surface` + krom kenar | `0 18px 40px -28px rgba(32,26,23,.45)` | modal, dropdown, tooltip, alt sayfa |

- Derinlik **krom iç parlama + hairline + ton farkı**ndan gelir; koyu blok gölge ve cam efekti yok.
- Radius: 3px buton/input/chip, 6px kart/modal; 50% yalnız kadran/avatar/rozet/toggle.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 42px | 0 20px | 3px | Courier Prime 10.5px `.16em` | `--accent` + `--accent-ink`, `inset 0 1px 0 rgba(255,255,255,.3)` + `inset 0 -1px 0 rgba(32,26,23,.24)` | hover: `color-mix(accent 90%, ink)` · active: `translateY(1px)` · focus: `outline 2px accent, offset 2px` · disabled: `opacity .42` |
| Buton (ikincil) | 42px | 0 18px | 3px | Courier Prime 10.5px | saydam + `1px color-mix(ink 30%)` + `--ink` | hover: `--surface-2` · focus: aynı halka |
| Input | 42px | 0 14px | 3px | Jost 13px | `--surface` + `1px color-mix(ink 22%)` + `inset 0 1px 2px` | focus: `outline 2px accent, offset 2px` · error: `1px var(--danger)` + 12px satır · disabled: `.5` |
| Kart | içerik | 28px (20px mobil) | 6px | Cinzel 24 + Jost 16.5 | `--surface` + krom kenar | öne çıkan: `--surface-2` + üst 2px `--accent` |
| Chip / plaka | 24px | 0 8px | 2px | Courier Prime 8.5px `.18em` | saydam + `1px color-mix(ink 26%)` | aktif: `--accent` + `--accent-ink`; dokunma 44px |
| Nav | 72px | 0 52px | — | mono 11px `.14em` | `--bg` + koç çizgisi | aktif: 1px bordo alt çizgi |
| Tablo satırı | 52px | 12px 14px | 0 / 6px kap | Jost 13px, başlık mono 9.5px | alt `1px var(--line)` | hover: `--surface-2` · seçili: `--surface-2` + sol 2px bordo |
| Modal | içerik | 28px | 6px | Cinzel 24 + 16.5 | krom kenar + yüzen gölge | backdrop `rgba(32,26,23,.55)` |
| Toast | 52px | 0 16px | 3px | Jost 13px | `--surface` + sol 2px durum | 5sn, tek sefer |
| Grafik | — | — | çubuk üst 2px | eksen mono 8–9px | `--data-1…4` | çubuk arası 12px, yatay grid yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; dolu butonda `--accent-ink` halka. **Plaka halkası** (1px) odak halkasının yerine geçmez; ikisi üst üste binerse odak 3px offset ile çizilir.
- Dokunma hedefi: en az 44×44px (chip 24px görünür, `min-height: 44px`).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.6px çizgi, 24px ızgara, `currentColor`; dolu ikon yok |
| Fotoğraf | altın saat, sıcak ton, film grain; deri dikiş/jant/şömine detayı; tek kare, alan ≥%30, `saturate(.92) contrast(1.03)` |
| İllüstrasyon | yok — kadran çizimi + mono künye + boşluk |
| Doku | grain .035 + ceviz damarı (1px/11px, %2.5) + koç çizgisi |
| Logo alanı | 26px bordo daire rozet + Cinzel harf, çevresinde ≥24px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 50px Cinzel, 7/5 asimetri, tek bordo CTA, bir kadran | `shots/01-landing.png` |
| Dashboard | düşük-orta | mono KPI, krom kartlar, bordo yalnız seri 1 ve aktif satır | `shots/02-dashboard.png` |
| Mobil | orta | tek kolon, 30px başlık, 44px hedef, plaka sekmeler | — |
| Bileşenler | orta | palet + tipografi + krom kenar levhası | — |
| Form | düşük | tek sütun 460px, odak 2px bordo | — |
| Katman | orta | 6px radius + krom kenar + yüzen gölge | — |
| Veri | düşük | 52px satır, mono sayaçlar, 4 renkli grafik | — |
| Gezinme | orta | koç çizgili nav, plaka chip, ceviz damarlı footer | — |
| Fiyatlandırma | orta | 3 kart, orta kart `--surface-2` + üst 2px bordo | — |
| Giriş | çok düşük | süs 0, ceviz damarlı sol panel, tek kart | — |
| Liste | düşük-orta | filtre + 52px satır, seçili satır sol 2px bordo | — |
| Durumlar | orta | boş/hata/404; 404 mono 44px | — |
| Ayarlar | düşük | satır ayırıcı hairline, tehlike bölgesi `--danger` | — |
| Ödeme | çok düşük | mono tutarlar, bordo yalnız ödeme butonunda | — |
| Onboarding | orta | adım noktaları, tek ileri CTA | — |
| Makale | orta | 62ch, Cinzel 24px H2, mono künye | — |
| Mobil · alt sayfa | orta | üst köşe 6px, 44px tutamaç, yapışkan CTA | — |
| Mobil · form | çok düşük | 54px input, 46px CTA | — |
| Mobil · liste | düşük | 64px satır, durum plakası | — |

| Emlak landing | orta | poster hero + künye şeridi + portföy rafı + bölüm + galeri; 6 ilan kuralı | — |
| Emlak · ilan detayı | yüksek | galeri (1+2), künye, açıklama, kat planı, harita, yapışkan ajan paneli + 3 alanlı form | — |
| Emlak · harita | orta | sol filtre rayı, iğneli harita, hover kartı, mini sonuç listesi | — |
| Emlak · concierge | düşük | 3 alanlı form + adım göstergesi + güven/gizlilik blokları | — |
| Mobil · emlak | orta | dikey poster hero, künye, 360° tur, yapışkan ajan barı | — |
| Hareket levhası | — | giriş / scroll reveal / pin+scrub beatleri; reduced-motion notu | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 200ms | `cubic-bezier(.2,.72,.2,1)` | `translateY(1px)` + `--surface-2` |
| Geçiş / sayfa | 400ms | aynı | `opacity` + `translateY(4px)` (sayfa geçişi 320ms) |
| Giriş (enter) | **900ms** | `cubic-bezier(.4,.1,.2,1)` | `opacity` + `translateY(28px)`, **stagger 110ms**; başlık maske içinden 0.9s |
| Kaydırma (scroll) | **1000ms** | `cubic-bezier(.4,.1,.2,1)` | trigger **`top 80%`**, offsetY **30px**, stagger 60ms, `once: true` |
| Hover | **300ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | açık | `scrub 1.1` | hero sabitlenir, mesafe **+140%**, `scale 1.04 → 1`, mobilde kapalı |
| Ödül / vurgu | 560ms | aynı | koç çizgisi `scaleX(0→1)` / kadran iğnesi tek atım |

**Sekans (playbook §6.1):** giriş 0.9s `cubic-bezier(.4,.1,.2,1)` (y 28px, stagger 110ms) → scroll reveal 1.0s / `top 80%` / `once` → **tek pin** + scrub 1.1 (`scale 1.04 → 1`, mobilde kapalı) → sayfa geçişi 320ms opacity + 8px. Poster LCP'dir; video arkadan gelir ve duraklat düğmesi görünür kalır.

- Basma/geçiş/vurgu süreleri aile ortalamasından **daha ağır**: 41/43 140/280/420 kullanır, 42 bilinçli olarak 200/400/560 — "ağır kapı" hissi premium katmanın parçası.
- İmza ölçüsü: enter **0.9s / 28px / stagger 0.11** · scroll **1.0s / `top 80%` / 30px** · hover **300ms / 1.02** · pin **açık (scrub 1.1 / +140%)**.
- `prefers-reduced-motion`: 0.01ms, iğne son konumda, transform sıfır, pin/scrub kapalı.
- Yasak: parallax, marquee, sürekli dönen iğne, nefes alan katman, spring.
## Koyu mod

| Token | Açık (sevk edilen) | Koyu (referans) |
|---|---|---|
| `--bg` | `#f1e9dd` | `#1a1214` |
| `--surface` | `#f9f3e9` | `#241a1c` |
| `--ink` | `#201a17` | `#f1e9dd` |
| `--accent` | `#6b2130` | `#d3a3ab` |
| `--accent-ink` | `#f7efe1` | `#1a1214` |

- Bu stil **açık tabanlıdır**: koyu tema sevk edilmez, koyu mod sahneleri (17/18) üretilmez; yukarıdaki sütun gece vitrini referansıdır (üretilirse `accent-ink/accent ≥ 7:1` yeniden ölçülür).
- `filter: invert()` yasak; palet elle yazılır.

## Erişilebilirlik

- En düşük metin çifti: `--ink-faint / --bg` **4.59:1** (dekoratif etiket). `--ink-faint / --surface-2` **4.19:1** → gövde metni olarak kullanılmaz.
- `--accent-ink / --accent` **9.75:1** (AAA), `--ink / --bg` **14.28:1**: buton ve gövde güvenli. `--accent-ink` krem zemin üstünde metin değildir (1.03:1).
- Bordo, kırmızı ile karışabildiği için `--danger` bilinçli olarak turuncuya çekildi (`#9a3b1e`, 5.78:1); hata metni her zaman ikon + metin birlikte (renk tek başına anlam taşımaz).
- Odak: krem zeminde 2px bordo halka 9.25:1; dolu butonda `--accent-ink` halka. Plakanın 1px halkası dekoratiftir, odak göstergesi sayılmaz.
- Gravür ışığı (`text-shadow` beyaz, 1px) yalnız glifin alt kenarında kalır; ölçülen kontrastı eşik altına indirmez (deboss ≤ 0.15:1). Mat çerçevenin iç vinyeti ≤%6 — metin üstüne binmez (yalnız görsel zemini).
- Grain/ceviz katmanları `pointer-events: none` + `aria-hidden`; kontrastı 0.2:1'den fazla düşürmez.
- `--blur: 0` → `@supports` fallback gerekmez.

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
| "Düğün davetiyesi" gibi duruyor | Bordo doygunlaşmış / altın eklenmiş | `#6b2130` sabit; altın yok; süs yalnız kadran ve gravür ışığı |
| "Sadece 41'in bordolusu" gibi duruyor | Prime katmanı uygulanmamış (gravür, künye, mat çerçeve, plaka halkası yok) | Beş detayın hepsi: gravür başlık + künye şeridi + plaka CTA + mat çerçeve + işlenmiş alt kenar |
| Başlık bulanık/ağır | Deboss 2px+ veya çift ışık, ya da gövdeye de `text-shadow` verilmiş | Işık 1px, yalnız başlıkta |
| Butonlar birbirine yapışık | Plaka halkası 2px offset ile komşu butona değiyor | Halka 1px / offset 2px; buton arası en az 8px boşluk |
| "İndirim" dili oluştu | Parlak kırmızı + bordo yan yana | Tek bordo; `--danger` yalnız silme, ikonla birlikte |
| Kurumsal banka gibi duruyor | Palet lacivert/yeşile kaymış ya da simetri | Bordo `#6b2130`, asimetri 7/5 |
| Eski ofis yazılımı | Kenar 2px+, kart gölgesi büyük | Krom kenar 2px toplam, gölge `0 1px 2px` |
| Bej lüks şablon | Kadran ve mono sayaç yok | Kadran + tüm sayılar Courier Prime |
| Okumak yoruyor | Gövde büyük harf / 300 ağırlık | Jost 400 normal harf, 62ch |
| Bordo ile hata karıştı | `--danger` accent'e yakın seçilmiş | `#9a3b1e` turuncu-kızıl + ikon zorunlu |

## Komşu stiller

- **Uyumlu:** `grand-tourer` (aynı aile, yeşil — farklı marka katmanı), `luxury-typography`, `editorial-design`.
- **Yasak:** `grand-tourer-midnight` (aynı sayfada iki vurgu paleti), `neo-brutalism`, `dopamine-ui`, `glassmorphism`, `cyberpunk`, `bauhaus`.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Cinzel | büyük harf display, 400, `.09em` |
| https://fonts.google.com/specimen/Jost | gövde 16.5/1.68 |
| https://fonts.google.com/specimen/Courier+Prime | sayaç ve etiket mono |
| https://www.hagerty.com/media/ | bordo deri kokpit, krom anahtar, ceviz panel |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | kontrast eşikleri |

## AI brief

```
Stil: Grand Tourer Oxblood (styles/42-grand-tourer-oxblood/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="grand-tourer-oxblood"]; hard-coded renk/gölge/radius yasak.
Tipografi: Cinzel BÜYÜK HARF 400 (başlık), Jost (gövde), Courier Prime (tüm sayı + etiket).

Yap:
- Krem #f1e9dd zemin, kart #f9f3e9; dış 1px hairline + iç 1px beyaz + alt 1px işlenmiş gölge (krom + işçilik).
- Tek vurgu bordo #6b2130; accent üstü #f7efe1; ekranın ≤%8'i.
- Silme/tehlike #9a3b1e (turuncu-kızıl) + ikon; accent'i durum için kullanma.
- Başlık: Cinzel 52px, BÜYÜK HARF, tracking .12em, gravür ışığı text-shadow 0 1px 0 rgba(255,255,255,.62).
- Bölüm 96px, kart içi 28px, gövde 62ch, radius 3/6px.
- Nav/bölüm ayırıcıda koç çizgisi (≤3), yan panelde ceviz damarı 1px/10px %3.2.
- Landing: hero görseli mat çerçeve (6px bg + 1px hairline + vinyet ≤%6), CTA altı künye şeridi, birincil butonda 1px plaka halkası.
- Fiyat/KPI/tarih mono Courier Prime; landing'de tek kadran. Hareket 200/400/560ms.

Yapma:
- Altın/şampanya, parlak kırmızı, ikinci vurgu, gradyan, glow, blur, 2px+ kenar, 8px+ radius.
- Deboss 2px+, çift ışık, gövdede text-shadow, vinyet %6 üstü, çift plaka halkası.
- Saf siyah/beyaz, gövdede büyük harf/300 ağırlık, emoji, illüstrasyon, sürekli animasyon.
```

## Token

```css
[data-style="grand-tourer-oxblood"] {
  --bg: #f1e9dd; --bg-2: #e8dfd0;
  --surface: #f9f3e9; --surface-2: #e9dfce;
  --ink: #201a17; --ink-soft: #5a4d45; --ink-faint: #74665c;
  --accent: #6b2130; --accent-ink: #f7efe1;
  --line: rgba(32,26,23,.18);
  --radius: 3px; --radius-lg: 6px;
  --shadow: inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(32,26,23,.08); --shadow-hard: 3px 3px 0 rgba(32,26,23,.12);
  --font-display: "Cinzel", "Playfair Display", Georgia, serif;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "Courier Prime", "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.12em; --blur: 0px; --grain: .035;
  --data-1: #6b2130; --data-2: #6f6250; --data-3: #9d9079; --data-4: #a9762d;
  --danger: #9a3b1e; --danger-ink: #f9f3e9;
  --ok: #23572f; --warn: #8a5a12;
}
```
