# 43 · Grand Tourer Midnight

> **Bir cümlede:** Grand Tourer'ın gece varyantı: krem kokpit aynı kalır, nötrler maviye kayar ve vurgu gece mavisine döner — gündüz krem, gece koyu lacivert; iki zaman diliminde de aynı krom disiplini.

| | |
|---|---|
| **Hissiyat** | serin, mesafeli, gece sürüşü, "randevuyla görüşülür" |
| **En iyi** | üst segment konut/rezidans, özel havacılık/yat, hukuk-danışmanlık, saat/mücevher, kurumsal premium vitrin |
| **Kaçın** | sıcak/aile markaları (çocuk, yemek, düğün), indie/topluluk ürünü, hızlı tüketim kampanyası, oyun |
| **Zorluk** | orta · **Erişilebilirlik** | iyi (14.65:1 gövde, 11.44:1 accent üstü) |
| **Aile** | Zamansız (41–44) · **Token** | `kit/tokens.css` → `[data-style="grand-tourer-midnight"]` |
| **Kompozisyon** | `fullbleed` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Midnight, **Grand Tourer (41) sisteminin soğuk palet varyantıdır**: tipografi, ızgara, krom kenar, kadran, koç çizgisi ve tüm bileşen ölçüleri birebir aynıdır. Değişen: vurgu **gece mavisi** `#1b2e4a`, nötrler **mavi-siyaha** kayar (`--ink #171b23`), zemin bir tık serinler (`#f1ece2`). Sonuç: krem deri değil "gece yarısı deri + krom" okuması.

Kazandığı şey: **mesafe ve prestij**. Lacivert, lüksün en nötr rengidir: düğün de davet eder, banka da; bu yüzden kurumsal premium vitrinlerde en güvenli varyanttır. Feda ettiği şey: **sıcaklık**. Bordo (42) ve yeşil (41) "davet" hissi verirken lacivert "randevu" verir; aile/yaşam markalarında soğuk kalır. Ayrıca lacivert, ekranda siyaha çok yaklaştığı için `--ink` ile karıştırılmamalı: **vurgu lacivert, metin mavi-siyah** — ikisi asla aynı tonda olmaz.

### Ne değildir
- **Grand Tourer (41) değildir** — sistem aynı, palet farklı: uyum ve ölçüler eş, sıcaklık ve vurgu farklı.
- **Glassmorphism / Aurora (08, 12) değildir.** Onlar blur ve gradyan ışıkla "teknoloji" kurar; burada `--blur: 0`, opak krem kart ve 1px krom.
- **Cyberpunk (22) değildir.** Neon, glow ve mono gövde yok; lacivert düşük doygunlukta, gövde Jost.
- **Swiss Design (02) değildir.** Swiss kurumsal soğukluğu ızgara ve 0 radius ile kurar; burada krom parlama, kadran ve serif büyük harf var.

### Nereden gelir
Gece mavisi, 1960'ların "midnight blue" araba boyalarından ve gece kulüplerinin/özel bankaların lacivert üniforma geleneğinden gelir; dijitalde premium SaaS'ın "dark navy" furyasıyla yeniden popülerleşti. Klişeye düşmemesi için korunması gereken detay: **krem zemin** — laciverti siyah zemine alırsanız stil Cyberpunk/Scandinavian Dark bölgesine kayar; bu stil gece mavisini **aydınlık krem** üstünde taşır.

### 3 saniyede tanıma testi
1. Zemin krem mi (`#f1ece2`), vurgu tek **gece mavisi** mi (`#1b2e4a`) — cam/blur/neon var mı? (Olmamalı.)
2. Nötrler mavi-siyah mı (`--ink #171b23`); sıcak kahve-siyah (41/42 paleti) sızmış mı?
3. Kartlarda krom iç parlama + tek hairline var mı; koyu blok gölge var mı?
4. Başlık Cinzel büyük harf `.09em`, fiyat/KPI mono sayaç mı?
5. Nav altında koç çizgisi + landing'de kadran var mı?

## Zorunlu kurallar

1. **İki mavi ayrımı:** vurgu `#1b2e4a`, metin `#171b23`. Vurgu metin olarak kullanılmaz, metin vurgu yerine geçmez; ikisi komşu ama farklı rolde.
2. **Krom kenar:** dış `1px var(--line)` + iç `inset 0 0 0 1px rgba(255,255,255,.6)`; toplam 2px, üçüncü çizgi yok.
3. **Tek vurgu:** gece mavisi ekranın ≤%8'i (veri ekranlarında ≤%4). Cyan, turkuaz, mor, altın ikinci vurgu yasak.
4. **Büyük harf disiplini:** Cinzel 400 büyük harf `.09em`; gövde Jost normal harf; mono etiket `.14–.2em`.
5. **Sayaç rakamı:** para/adet/tarih/yüzde Courier Prime 400.
6. **Boşluk ve köşe:** bölüm 96px (mobil 56px), kart içi 28px, radius 3/6px.
7. **Koç çizgisi:** `1px var(--accent)` + 1–2px boşluk + `1px var(--line)`; ekran başına en fazla 3.
8. **Doku:** `--grain: .035` + yan panellerde ceviz damarı 1px/11px %2.5 (soğuk paletle sıcak ahşap dokusu bilinçli kontrast).
9. **Kadran:** yalnız landing'de bir tane; gece varyantında iğne lacivert, tikler `--ink` %30.

## Yasaklar

- Cyan/turkuaz/neon mavi, glow, blur (`--blur: 0`), cam panel, "SaaS gradient" (`#6366f1` → `#22d3ee`).
- Siyah zemin (`#0b0f16` ve benzeri) — bu stil gece mavisini **açık** krem zeminde taşır; koyu tema sevk edilmez.
- İkinci vurgu (bordo, yeşil, altın); lacivert + altın kombinasyonu (Art Deco/banka klişesi).
- 2px+ kenar, çift çerçeve, koyu blok gölge, radius ≥ 8px.
- Saf siyah/beyaz; gövdede büyük harf veya 300 ağırlık.
- Display 700/italik, el yazısı font, negatif tracking.
- Emoji, illüstrasyon, foto kolaj, desenli arka plan.
- Sürekli animasyon (marquee, dönen iğne, nefes alan katman), spring.

## Görsel imza
- **Serin krem kart:** `--surface #f8f4ec` üstünde `--ink #171b23`; kart zemini sayfadan %4–%6 açık, gölge yok.
- **Lacivert tek anlam:** birincil buton, aktif satır işareti, veri serisi 1, odak halkası; başka yerde lacivert yok.
- **Mavi-siyah metin:** başlık ve gövde `#171b23`; "siyah" hissi verir ama saf siyah değildir (8 saatlik okumada kontrast yanması yapmaz).
- **Koç çizgisi:** nav altında 1px lacivert + 1px hairline; bölüm ayırıcıda aynı çift çizgi.
- **Kadran:** 224px; 88/96px krom halka, `.9deg` tik / `9deg` aralık, `1.3deg` lacivert iğne, 4px göbek.
- **Ceviz damarı:** 92°, 1px / 11px, %2.5 — soğuk paletle sıcak doku kontrastı stilin tek "sıcak" detayı.
- **Sayaç tipografisi:** fiyat 26px, KPI 22px, 404 44px mono, `letter-spacing: 0`.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f1ece2` | sayfa zemini (serin krem) | kart yüzeyi |
| `--bg-2` | `#e7e0d2` | ikincil bölüm, input zemini, bulk bar | birincil kart |
| `--surface` | `#f8f4ec` | kart, panel, modal, tablo kabı | tam sayfa zemin |
| `--surface-2` | `#e6e1d5` | hover, seçili satır, çip zemini | ana kart |
| `--ink` | `#171b23` | başlık, gövde, sayaç (**14.65:1**) | accent zemin üstünde |
| `--ink-soft` | `#4f5560` | açıklama, lede, pasif nav (**6.37:1**) | başlık |
| `--ink-faint` | `#5f6470` | etiket, sıra no, ipucu (**5.03:1**) | uzun gövde metni |
| `--accent` | `#1b2e4a` | buton, aktif durum, seri 1, odak (**11.61:1** bg üstü) | metin |
| `--accent-ink` | `#f2eadb` | accent üstü metin (**11.44:1**) | accent dışı zeminde |
| `--line` | `rgba(23,27,35,.18)` | kenarlık, koç çizgisi | metin |
| `--danger` | `#8a2b22` | silme/tehlike (**7.28:1**) | dekoratif vurgu |

- Ölçülen kontrast: `ink/bg` **14.65:1** · `ink-soft/bg` **6.37:1** · `ink-faint/bg` **5.03:1** · `accent-ink/accent` **11.44:1** · `accent/bg` **11.61:1** · `ink/surface` **15.72:1** · `ink/surface-2` **13.22:1** · `ink-soft/surface-2` **5.75:1** · `ink-faint/surface-2` **4.54:1** · `ok/bg` **7.20:1** · `warn/bg` **5.02:1** · `danger/bg` **7.28:1**.
- Grafik paleti: `--data-1 #1b2e4a` (lacivert), `--data-2 #6f6250` (ceviz), `--data-3 #9d9079` (krom gölge), `--data-4 #a9762d` (pirinç, yalnız 4. seri — sıcak detay).
- Yasak kombinasyon: lacivert zemin üstü `--ink` (1.3:1), `--accent-ink` krem zemin üstü, lacivert + altın yan yana, iki mavi seriyi (data-1 + data-3) aynı grafikte karıştırmak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cinzel | 50px (mobil 30px) | 400 | 1.06 | `.09em`, büyük harf |
| H2 | Cinzel | 24px | 400 | 1.16 | `.07em` |
| H3 | Cinzel | 15.5px | 400 | 1.3 | `.05em` |
| Gövde | Jost | 16.5px | 400 | 1.68 | `0` |
| Küçük gövde | Jost | 13px | 400 | 1.55 | `.01em` |
| Etiket / mono | Courier Prime | 9.5–10.5px | 400 | 1.2 | `.14–.2em` |
| Sayaç | Courier Prime | 22–26px | 400 | 1.05 | `0` |

- Basamaklar **9.5 · 11 · 13 · 16.5 · 24 · 50**; ölçü `clamp(30px, 4vw, 50px)`, gövde 62ch, lede 44ch.
- Ağırlık: yalnız 400/500; Cinzel 400, gövde 300 yasak. Lacivert metinde 300 ağırlık "soluk mavi" gürültüsü yapar.

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
| Kart | `--surface` + krom kenar | `0 1px 2px rgba(23,27,35,.08)` | panel, KPI, tablo kabı, plan kartı |
| Yüzen | `--surface` + krom kenar | `0 18px 40px -28px rgba(23,27,35,.45)` | modal, dropdown, tooltip, alt sayfa |

- Derinlik krom iç parlamadan ve ton farkından gelir; koyu blok gölge, blur ve cam yok.
- Radius: 3px buton/input/chip, 6px kart/modal; 50% yalnız kadran/avatar/rozet/toggle.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 42px | 0 20px | 3px | Courier Prime 10.5px `.16em` | `--accent` + `--accent-ink`, `inset 0 1px 0 rgba(255,255,255,.3)` + `inset 0 -1px 0 rgba(23,27,35,.24)` | hover: `color-mix(accent 90%, ink)` · active: `translateY(1px)` · focus: `outline 2px accent, offset 2px` · disabled: `.42` |
| Buton (ikincil) | 42px | 0 18px | 3px | Courier Prime 10.5px | saydam + `1px color-mix(ink 30%)` + `--ink` | hover: `--surface-2` · focus: aynı halka |
| Input | 42px | 0 14px | 3px | Jost 13px | `--surface` + `1px color-mix(ink 22%)` + `inset 0 1px 2px` | focus: `outline 2px accent, offset 2px` · error: `1px var(--danger)` + 12px satır |
| Kart | içerik | 28px (20px mobil) | 6px | Cinzel 24 + Jost 16.5 | `--surface` + krom kenar | öne çıkan: `--surface-2` + üst 2px `--accent` |
| Chip / plaka | 24px | 0 8px | 2px | Courier Prime 8.5px `.18em` | saydam + `1px color-mix(ink 26%)` | aktif: `--accent` + `--accent-ink`; dokunma 44px |
| Nav | 72px | 0 52px | — | mono 11px `.14em` | `--bg` + koç çizgisi | aktif: 1px lacivert alt çizgi |
| Tablo satırı | 52px | 12px 14px | 0 / 6px kap | Jost 13px, başlık mono 9.5px | alt `1px var(--line)` | hover: `--surface-2` · seçili: `--surface-2` + sol 2px lacivert |
| Modal | içerik | 28px | 6px | Cinzel 24 + 16.5 | krom kenar + yüzen gölge | backdrop `rgba(23,27,35,.55)` |
| Toast | 52px | 0 16px | 3px | Jost 13px | `--surface` + sol 2px durum | 5sn, tek sefer |
| Grafik | — | — | çubuk üst 2px | eksen mono 8–9px | `--data-1…4` | çubuk arası 12px, yatay grid yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; dolu butonda `--accent-ink` halka.
- Dokunma hedefi: en az 44×44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.6px çizgi, 24px ızgara, `currentColor`; dolu ikon yok |
| Fotoğraf | mavi saat (blue hour), gece çekimi, ıslak asfalt yansıması, cam cephe; tek kare, alan ≥%30, `saturate(.88) contrast(1.05)` |
| İllüstrasyon | yok — kadran çizimi + mono künye + boşluk |
| Doku | grain .035 + ceviz damarı (1px/11px, %2.5) + koç çizgisi |
| Logo alanı | 26px lacivert daire rozet + Cinzel harf, çevresinde ≥24px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 50px Cinzel, 7/5 asimetri, tek lacivert CTA, bir kadran | `shots/01-landing.png` |
| Dashboard | düşük-orta | mono KPI, krom kartlar, lacivert yalnız seri 1 ve aktif satır | `shots/02-dashboard.png` |
| Mobil | orta | tek kolon, 30px başlık, 44px hedef, plaka sekmeler | — |
| Bileşenler | orta | palet + tipografi + krom kenar levhası | — |
| Form | düşük | tek sütun 460px, odak 2px lacivert | — |
| Katman | orta | 6px radius + krom kenar + yüzen gölge | — |
| Veri | düşük | 52px satır, mono sayaçlar, 4 renkli grafik | — |
| Gezinme | orta | koç çizgili nav, plaka chip, ceviz damarlı footer | — |
| Fiyatlandırma | orta | 3 kart, orta kart `--surface-2` + üst 2px lacivert | — |
| Giriş | çok düşük | süs 0, ceviz damarlı sol panel, tek kart | — |
| Liste | düşük-orta | filtre + 52px satır, seçili satır sol 2px lacivert | — |
| Durumlar | orta | boş/hata/404; 404 mono 44px | — |
| Ayarlar | düşük | hairline ayırıcı, tehlike bölgesi `--danger` | — |
| Ödeme | çok düşük | mono tutarlar, lacivert yalnız ödeme butonunda | — |
| Onboarding | orta | adım noktaları, tek ileri CTA | — |
| Makale | orta | 62ch, Cinzel 24px H2, mono künye | — |
| Mobil · alt sayfa | orta | üst köşe 6px, 44px tutamaç, yapışkan CTA | — |
| Mobil · form | çok düşük | 54px input, 46px CTA | — |
| Mobil · liste | düşük | 64px satır, durum plakası | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 140ms | `cubic-bezier(.2,.72,.2,1)` | `translateY(1px)` + `--surface-2` |
| Geçiş / sayfa | 280ms | aynı | `opacity` + `translateY(4px)` (sayfa geçişi 320ms) |
| Giriş (enter) | **1060ms** | `cubic-bezier(.6,.02,.25,1)` | `opacity` + `translateY(12px)`, **stagger 140ms**; gece sürüşü gibi uzun, en yumuşak açılış |
| Kaydırma (scroll) | **1100ms** | `cubic-bezier(.6,.02,.25,1)` | trigger **`top 78%`**, offsetY **16px**, stagger 60ms, `once: true` |
| Hover | **340ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | açık | `scrub 1.1` | hero sabitlenir, mesafe **+140%**, `scale 1.04 → 1`, mobilde kapalı |
| Ödül / vurgu | 420ms | aynı | koç çizgisi `scaleX(0→1)` / kadran iğnesi tek atım |

- İmza ölçüsü: enter **1.06s / 12px / stagger 0.14** · scroll **1.1s / `top 78%` / 16px** · hover **340ms / 1.02** · pin **açık (scrub 1.1 / +140%)**.
- `prefers-reduced-motion`: 0.01ms, iğne son konumda, transform sıfır, pin/scrub kapalı.
- Yasak: parallax, marquee, sürekli dönen iğne, nefes alan katman, spring.
## Koyu mod

| Token | Açık (sevk edilen) | Koyu (referans) |
|---|---|---|
| `--bg` | `#f1ece2` | `#101520` |
| `--surface` | `#f8f4ec` | `#171d29` |
| `--ink` | `#171b23` | `#eae6dc` |
| `--accent` | `#1b2e4a` | `#9db2cc` |
| `--accent-ink` | `#f2eadb` | `#101520` |

- Bu stil **açık tabanlıdır**: "Midnight" adı gece mavisinden gelir, koyu temadan değil. Koyu tema sevk edilmez, koyu mod sahneleri (17/18) üretilmez; yukarıdaki sütun referanstır (üretilirse `accent-ink/accent ≥ 7:1` yeniden ölçülür, grain `.035 → .04`).
- `filter: invert()` yasak; palet elle yazılır. Siyah zemine geçmek stili Cyberpunk/Scandinavian Dark bölgesine taşır — yasak.

## Erişilebilirlik

- En düşük metin çifti: `--ink-faint / --surface-2` **4.54:1** (dekoratif etiket); `--ink-faint / --bg` **5.03:1**. Gövde metni her zaman `--ink` veya `--ink-soft`.
- `--accent-ink / --accent` **11.44:1** (AAA) · `--ink / --bg` **14.65:1** · `warn/bg` **5.02:1** — durum metinleri güvenli.
- Lacivert vurgu, `--ink` mavi-siyaha yakın olduğu için **dolu buton + açık metin** kombinasyonu zorunlu: lacivert zemin üstüne `--ink` yazılmaz (1.3:1).
- Odak: krem zeminde 2px lacivert halka 11.61:1; dolu butonda `--accent-ink` halka (koyu zeminde açık halka).
- Grain/ceviz katmanları `pointer-events: none` + `aria-hidden`.
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
| Cyberpunk'a kaydı | Lacivert siyah zemine alınmış, neon/glow eklenmiş | Krem zemin `#f1ece2` korunur, `--blur: 0`, glow yok |
| "SaaS mavisi" gibi duruyor | Doygun mavi (`#3b82f6`) veya gradyan | `#1b2e4a` düşük doygunluk, gradyan yok |
| Metin vurgudan ayırt edilmiyor | `--ink` laciverte kaydırılmış | `--ink #171b23` mavi-siyah, vurgu `#1b2e4a`; rol ayrımı korunur |
| Banka/Art Deco klişesi | Lacivert + altın | Altın yok; sıcaklık yalnız ceviz damarı ve `--data-4` pirinçte |
| Soğuk/ölü görünüyor | Ceviz damarı ve grain kaldırılmış | Damar %2.5 + grain .035 (stilin tek sıcak detayı) |
| Eski ofis yazılımı | Kenar 2px+, kart gölgesi büyük | Krom kenar 2px toplam, gölge `0 1px 2px` |
| Okumak yoruyor | Gövde büyük harf / 300 ağırlık / saf siyah | Jost 400, `#171b23`, 62ch |

## Komşu stiller

- **Uyumlu:** `grand-tourer` (aynı aile, yeşil), `swiss-design` (kurumsal premium bölümü — aynı soğukluk), `editorial-design`.
- **Yasak:** `grand-tourer-oxblood` (aynı sayfada iki vurgu paleti), `cyberpunk`, `glassmorphism`, `aurora-ui`, `neo-brutalism`, `dopamine-ui`.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Cinzel | büyük harf display, 400, `.09em` |
| https://fonts.google.com/specimen/Jost | gövde 16.5/1.68 |
| https://fonts.google.com/specimen/Courier+Prime | sayaç ve etiket mono |
| https://www.hagerty.com/media/ | midnight blue klasik GT boyası ve gece kokpiti |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | kontrast eşikleri |

## AI brief

```
Stil: Grand Tourer Midnight (styles/43-grand-tourer-midnight/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="grand-tourer-midnight"]; hard-coded renk/gölge/radius yasak.
Tipografi: Cinzel BÜYÜK HARF 400 (başlık), Jost (gövde), Courier Prime (tüm sayı + etiket).

Yap:
- Serin krem #f1ece2 zemin, kart #f8f4ec; dış 1px hairline + iç 1px beyaz (krom).
- Metin mavi-siyah #171b23; vurgu gece mavisi #1b2e4a (rol ayrımı korunur); accent üstü #f2eadb.
- Bölüm 96px, kart içi 28px, gövde 62ch, radius 3/6px.
- Nav/bölüm ayırıcıda koç çizgisi (≤3), yan panelde ceviz damarı 1px/11px %2.5.
- Fiyat/KPI/tarih mono Courier Prime; landing'de tek kadran (lacivert iğne).

Yapma:
- Siyah zemin, cam/blur, neon/cyan, gradyan, ikinci vurgu, lacivert+altın.
- 2px+ kenar, 8px+ radius, saf siyah/beyaz, gövdede büyük harf/300 ağırlık, emoji, illüstrasyon.
```

## Token

```css
[data-style="grand-tourer-midnight"] {
  --bg: #f1ece2; --bg-2: #e7e0d2;
  --surface: #f8f4ec; --surface-2: #e6e1d5;
  --ink: #171b23; --ink-soft: #4f5560; --ink-faint: #5f6470;
  --accent: #1b2e4a; --accent-ink: #f2eadb;
  --line: rgba(23,27,35,.18);
  --radius: 3px; --radius-lg: 6px;
  --shadow: inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(23,27,35,.08); --shadow-hard: 3px 3px 0 rgba(23,27,35,.12);
  --font-display: "Cinzel", "Playfair Display", Georgia, serif;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "Courier Prime", "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.09em; --blur: 0px; --grain: .035;
  --data-1: #1b2e4a; --data-2: #6f6250; --data-3: #9d9079; --data-4: #a9762d;
  --danger: #8a2b22; --danger-ink: #f8f4ec;
  --ok: #23572f; --warn: #8a5a12;
}
```
