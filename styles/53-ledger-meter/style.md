# 53 · Ledger Meter

> **Bir cümlede:** Faturayı defter gibi okuyan; her tutarı sağa hizalı tabular rakam ve çift kuralla toplayan, tek ağırlıklı eski stil serifle fildişi kağıt sıcaklığı veren kullanım panosu.

| | |
|---|---|
| **Hissiyat** | güvenilir, sıcak, kesin, muhasebe düzenli |
| **En iyi** | fatura/kullanım paneli, abonelik yönetimi, kota ve limit ekranı, muhasebe raporu |
| **Kaçın** | oyun/eğlence ürünü, düşük yoğunluklu vitrin landing — sayı olmayan ekranda serif başlık boşa çalışır |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 7.50:1) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `styles/53-ledger-meter/tokens.json` → `[data-style="ledger-meter"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Ledger Meter, fatura ve kullanım verisini **kağıt defter** metaforuyla kurar: 28px aralıklı defter çizgisi, sağa hizalı tabular rakamlar, toplam satırında 3px çift kural ve fildişi kağıt zemini. Display, **tek ağırlıklı** EB Garamond'dur (yalnız 400): eski stil rakamlar ve kalın serif yerine sakin bir gravür hissi verir. Gövde Inter, bütün sayılar JetBrains Mono ve tabular hizalıdır.

Üç kurucu karar: (1) **hizalama = dürüstlük** — her tutar aynı ondalık hizasında durur; hizası bozuk bir fiyat tablosu güven kaybıdır; (2) **çift kural hiyerarşisi** — toplam/alt toplam yalnız kalınlıkla ayrılır (1px → 3px double), renkle değil; (3) **accent muhasebe anlamı taşır** — mürekkep lacivert `--accent` yalnız toplam satırı ve birincil eylemi işaretler; "tahsil edildi" durumu `--ok` ile ayrı tutulur.

Bedeli: bu stil yoğundur ve serif tek ağırlık olduğu için hiyerarşi punto + kural kalınlığı ile kurulmalıdır. Her ekranda tek bir "özet cümle" (serif 29px) bulunur; kullanıcı sayıya değil sonuca önce bakar.

### Ne değildir
- **Executive KPI (48) değildir:** 48 Fraunces (çok ağırlıklı serif) + Jost gövde + krem zemin + **yeşil** accent ile 4 vitrin KPI kurar, radius 0/3'tür ve pin yoktur; Ledger tek ağırlıklı EB Garamond + Inter + fildişi + **mürekkep lacivert** accent kullanır, radius 2/6 ve pin scrub 1.35 taşır. Karıştırıldığında bakılacak fark: accent rengi ve tablo/toplam satırı varlığı.
- **Nordic Folk (66) değildir:** 66 Fraunces + Lora + koyu kırmızı accent ile folklorik sıcaklık kurar; Ledger'da doku defter çizgisidir, accent laciverttir.
- **Editorial Design (03) değildir:** 03 serif ile editoryal anlatı kurar, sayı dili yoktur; Ledger'da serif yalnız başlık ve toplam satırında, gövde sans ve her yerde tablo vardır.
- **Skeuomorphism (34) değildir:** 34 bevel/gravür ve malzeme taklidi yapar; Ledger'da yalnız defter çizgisi ve fildişi zemin vardır, hiçbir bevel yoktur.

### Nereden gelir
Çift girişli defter (double-entry bookkeeping), fatura koşum cetveli ve muhasebe defteri estetiği; modern karşılığı Stripe Invoicing, GOV.UK tablo deseni ve kurumsal fatura panelleri. EB Garamond'un eski stil rakamları burada "elle yazılmış cetvel" hissini taşır (tabular hizalama yine mono sütunda). Bugün yeniden kullanılmasının nedeni: abonelik/kullanım fiyatlandırmasının **açıklanabilir** olması gerekliliği — kullanıcı "neden bu tutar?" sorusunun cevabını tabloda görmelidir. Klişeye dönüşmemesi için korunacak detay: tablonun gerçekten hizalı olması ve defter çizgisinin metni kesmemesi (çizgi %6 opaklık).

### 3 saniyede tanıma testi
1. Zemin fildişi; ekranda 28px aralıklı ince defter çizgileri var.
2. Başlık tek ağırlıklı eski stil serif (EB Garamond), gövde sans — iki aile yan yana.
3. Tüm tutarlar sağa hizalı ve ondalıkları alt alta.
4. Toplam satırı 3px çift kural ile ayrılmış ve mürekkep lacivert.
5. Radius 2–6px; hiçbir yerde yumuşak büyük köşe veya cam efekt yok.

## Görsel imza
- **Defter çizgisi:** 28px aralıklı 1px çizgi, `--line` ile %55 opaklık; yalnız tablo/zemin arkasında.
- **Sayı hizası:** tüm tutarlar `--font-mono` + `font-variant-numeric: tabular-nums`, sağa hizalı, iki ondalık.
- **Çift kural:** toplam satırının üstünde `3px double var(--line)`, metin `--accent`.
- **Kota çubuğu:** 6px yükseklik, radius 2px, `--surface-2` ray + accent dolgu; eşik aşımı `--warn`.
- **Radius:** `--radius` 2px (buton, input, chip), `--radius-lg` 6px (kart, modal).
- **Doku:** `--grain: .04` + defter çizgisi; doku metnin arkasında kalır, kontrastı düşürmez.
- **Başlık ağırlığı:** EB Garamond 400, satır aralığı 1.06; başlık asla 48px üstüne çıkmaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#faf7ee` | sayfa zemini (fildişi kağıt) | kart zemini |
| `--bg-2` | `#f2ecdc` | bölüm ayırıcı, input zemini | tablo satırı |
| `--surface` | `#fffdf6` | kart, tablo, fatura paneli | sayfa zemini |
| `--surface-2` | `#f6f0e1` | zebra satır, chip, kota rayı | toplam satırı |
| `--ink` | `#1c1913` | metin, tutar, başlık | dekoratif dolgu |
| `--ink-soft` | `#56503f` | ikincil metin, sütun başlığı | toplam tutarı |
| `--ink-faint` | `#8a8068` | yalnız defter çizgisi ve dipnot | etkileşimli metin |
| `--accent` | `#22456b` | toplam satırı, birincil eylem, seçili | dekorasyon, ikinci durum |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(28,25,19,.13)` | tablo, kenarlık, çift kural | metin |

- Ölçülen kontrast: `ink/bg` = **16.37:1** · `ink-soft/bg` = **7.50:1** · `accent-ink/accent` = **9.85:1** · `ink-faint/bg` = **3.65:1**.
- Tek vurgu kuralı: accent yalnız toplam satırı + birincil eylem. "Tahsil edildi" `--ok`, gecikme `--danger`, eşik aşımı `--warn`; accent ile `--ok` yan yana geldiğinde accent küçültülür.
- Yasak kombinasyon: kırmızı-yeşil ikilisiyle "ödenmiş/ödenmemiş" ayrımı (metin + ikon ekle).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | EB Garamond (`--font-display`) | 48px / mobil 29px | 400 | 1.06 | `--tracking` −0.005em |
| H2 | EB Garamond | 29px | 400 | 1.18 | 0.005em |
| H3 | Inter | 20px | 600 | 1.32 | 0 |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.62 | 0 |
| Etiket / tutar | JetBrains Mono (`--font-mono`) | 11–13px | 400/700 | 1.45 | 0.14em (etiket) |

- Ölçek oranı ≈ 1.4; kullanılan basamaklar: 11 · 13 · 15 · 20 · 29 · 48.
- Ölçü önerisi: `h1 { font-size: clamp(29px, 3.6vw, 48px); }`
- Gövde metni maksimum satır uzunluğu: 68 ch; tablo hücresi 24 ch.
- Ağırlık kuralı: EB Garamond yalnız 400 (gömülü aile tek ağırlık); 600/700 denemek sentetik kalınlaştırma üretir — yasak. Gövdede 400/600, toplam satırında mono 700.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 özet sütunu 4/8 · 768 tablo yatay kaydırılır (kendi içinde) · 390 tek sütun, para birimi sütunu sabit |

- Asimetri kuralı: özet sütunu 4/8; ekran başına bir asimetri, tablolar tam genişlik.
- Bölüm ritmi: art arda en fazla 2 tablo; üçüncü blok özet cümlesi (serif) olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | kağıt, bölüm ayırıcı |
| Kart | `--surface` | yok | fatura paneli, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | `0 10px 24px -22px rgba(29,26,21,.55)` | fatura detay modalı, özet paneli |

- Kenarlık formülü: `1px solid var(--line)`; toplam satırında `3px double`.
- Derinlik nereden gelir: kağıt dokusu, çift kural ve zebra satır; bevel, iç gölge veya parlaklık yok.
- Radius: `--radius` 2px (kontrol), `--radius-lg` 6px (kart, modal); 6px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 0 18px | `--radius` | 13px/600 Inter | `--accent` zemin, `--accent-ink`, gölge yok | hover %88 · active 1px · focus 2px accent · disabled %45 kesikli · loading metin "işleniyor…" |
| Buton (ikincil) | 40px | 0 18px | `--radius` | 13px/600 | şeffaf, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 40px | 0 12px | `--radius` | 13px mono (tutar) | `--surface`, 1px `--line` | focus 2px accent · filled `--bg-2` · error `--danger` · disabled %45 |
| Kart | içerik | 20px | `--radius-lg` | — | `--surface`, 1px `--line`, gölge yok | — |
| Chip / badge | 24px | 0 8px | `--radius` | 11px/600 mono 0.06em | `--surface-2`, 1px `--line` | tahsil edildi: accent zemin |
| Nav | 56px | 0 24px | 0 | 16px/400 serif marka | `--bg`, alt `3px double` | aktif sekme 2px accent |
| Tablo satırı | 34px | 4px 10px | 0 | 13px (tutar mono, sağa) | alt 1px `--line`, zebra `--surface-2` | hover `--surface-2` · seçili sol 3px accent |
| Modal / sheet | — | 22px | `--radius-lg` | 15px/400 | `--surface`, 1px `--line`, `--shadow` | fatura detayı: dönem başlığı + kalem tablosu + çift kural toplam |
| Toast | 38px | 8px 12px | `--radius` | 12px mono | `--surface-2`, 1px `--line` | 5s, sağ alt, "tahsil edildi" + tutar |
| Grafik paleti | — | — | — | — | `--accent` (kota dolgu) · `--ink-soft` (referans) · `--warn` (eşik) | yatay çubuk, en fazla 3 seri |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; fildişi zeminde accent 9.85:1 — ek gölge gerekmez.
- Dokunma hedefi: en az 44×44px; 34px tablo satırı `::after` ile 44px hedef alanı taşır (mobilde satır 44px'e çıkar).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 16px ızgara; para, saat, belge işaretleri; dolu ikon yok |
| Fotoğraf | Yok — fatura/örnek belge fotoğrafı yerine tipografik tablo |
| İllüstrasyon | Yok; yatay kota çubukları ve tablo görsel dili kurar |
| Doku | `--grain: .04` + 28px defter çizgisi; doku %6 opaklık üstüne çıkmaz |
| Logo alanı | Kelime logosu EB Garamond 400; işaret 16px çift kural blok, sol üstte 20px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Sol serif başlık + sağ fatura önizleme (kalem tablosu + çift kural toplam) | `shots/01-landing.png` |
| Dashboard | yüksek | Üstte 3 özet kutusu (dönem, tutar, kota), altında kalem tablosu | `shots/02-dashboard.png` |
| Form | düşük | Tutar alanları sağa hizalı mono; para birimi ayrı sütun | — |
| Liste / tablo | yüksek | 34px satır, zebra, toplam satırı çift kural | — |
| Boş durum | orta | "Bu dönem kullanım yok" + 0,00 satırı (tablo iskeleti korunur) | — |
| Onboarding | yüksek | 3 adım: plan seç → limit belirle → ödeme yöntemi; her adımda tek tablo | — |
| Pricing | orta | Plan karşılaştırma tablosu; fiyatlar sağa hizalı, öne çıkan plan çift kural | — |
| Giriş / ödeme | çok düşük | Tek panel, solda özet (serif), sağda form; toplam satırı görünür | — |
| Modal | orta | Fatura detayı: üstte dönem, altta kalemler, en altta çift kural toplam | — |
| Bildirim / toast | orta | "Tahsil edildi · ₺1.240,00" mono tek satır | — |
| Hata | düşük | Tutar alanında `--danger` kenar + "geçersiz tutar" yardım satırı | — |
| Profil / ayar | orta | Ödeme yöntemi, fatura e-postası, limit uyarı eşiği | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.66s**, y **20px**, stagger **0.09** | `cubic-bezier(.65,0,.35,1)` | `opacity` + `transform` |
| Scroll reveal | **0.72s**, trigger **top 82%**, y **26px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **1.35**, mesafe **+110%** (kalem tablosu sabitlenir) | scrub doğrusal | `transform` (tablo sabit, özet kayar) |
| Hover | **110ms**, görsel scale **1.000** (görsel yok — satır zemini değişir) | `ease-out` | `background-color` |
| Basma | 110ms | aynı eğri | `transform` (1px) |
| Satır girişi | 200ms, 40ms arayla | aynı eğri | `opacity` |

- Bu stilin ölçülebilir imzası: `enter 0.66s / cubic-bezier(.65,0,.35,1) / 20px / 0.09` + `scroll top 82% / 0.72s / 26px` + `pin scrub 1.35 / +110%` + `hover 110ms / 1.000`. Katalogda `scrub 1.35` yalnız bu stilde; `0.66s` giriş + `hover 1.000` birlikte başka stilde yok (48'in girişi 0.95s ve pini kapalı).
- `prefers-reduced-motion`: tüm süreler 0.01ms; pin scrub kapanır, toplam satırı anında görünür; sayaç yok.
- Bu stile yasak hareket: 0→tutar sayaç animasyonu, bounce, sürekli döngü, parallax, defter çizgisi kaydırma efekti.

## Koyu mod

| Token | Açık (kağıt) | Koyu (gece defteri) |
|---|---|---|
| `--bg` | `#faf7ee` | `#12110d` |
| `--bg-2` | `#f2ecdc` | `#181712` |
| `--surface` | `#fffdf6` | `#1d1b15` |
| `--surface-2` | `#f6f0e1` | `#24221a` |
| `--ink` | `#1c1913` | `#f1ebdc` |
| `--ink-soft` | `#56503f` | `#bdb29b` |
| `--ink-faint` | `#8a8068` | `#8d8571` |
| `--accent` | `#22456b` | `#8fb3dd` |
| `--accent-ink` | `#ffffff` | `#0b1119` |
| `--line` | `rgba(28,25,19,.13)` | `rgba(241,235,220,.16)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **15.88:1** · `ink-soft/bg` = **9.00:1** · `accent-ink/accent` = **8.71:1** · `ink-faint/bg` = **5.15:1**.
- Koyu modda değişen başka ne var: accent açılır (lacivert → buz mavisi), defter çizgisi opaklığı .13 → .16, doku aynı kalır ama daha az görünür.
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="ledger-meter"]`.

## Zorunlu kurallar
- Tüm tutarlar sağa hizalı, `tabular-nums`, iki ondalık; para birimi ayrı sütunda.
- Toplam/alt toplam yalnız çift kural (3px double) + accent metinle ayrılır.
- Defter çizgisi 28px aralık, %55 opaklık; metnin arkasında kalır, kontrastı düşürmez.
- Display EB Garamond **yalnız 400** (gömülü tek ağırlık); gövde Inter, sayı JetBrains Mono.
- Fatura dönemi her ekranda görünür (üst sağ, mono).
- Her ekranda tek "özet cümle" (serif 29px) bulunur; kullanıcı önce sonucu okur.

## Yasaklar
- 6px üzeri radius, tam hap buton, yuvarlak kart.
- Gradient, cam/blur, bevel veya iç gölge (skeuomorphism değildir).
- EB Garamond üzerinde 600/700 (sentetik kalınlaştırma).
- Renkli kart zeminleri; accent'in dekoratif kullanımı.
- Hizasız/onlaksız sayı, `tabular-nums` olmadan tutar.
- Tutar sayaç animasyonu (0→değer).
- Süs ikonu/illüstrasyon; emoji ile durum bildirimi.
- Yeşil accent (Executive KPI 48 ile karışır — bu stil mürekkep lacivert kullanır).

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `ink-soft/bg` = 7.50:1; gövde 16.37:1; accent üstü 9.85:1; `ink-faint/bg` 3.65:1 yalnız dekoratif.
- `--ink-faint` defter çizgisi ve dipnot için; etkileşimli metin değil.
- Durum yalnız renkle anlatılmaz: "tahsil edildi", "limit aşıldı" metni + ikon + renk birlikte.
- Zebra satır (`--surface-2`) ile ink kontrastı 17.23:1 — tarama kolaylığı sağlar, okunurluğu bozmaz.
- Odak halkası 2px accent + 2px offset; fildişi zeminde de görünür.
- 390px'te tablo kendi içinde yatay kaydırılır; sayfa gövdesi taşmaz; tutar sütunu sağda sabitlenir.
- `prefers-reduced-motion` açıkken satır girişi ve scrub durur.

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
| "Excel ekranı" hissi | çizgi ve renk fazlalığı | defter çizgisini %55 opaklığa indir, zebrayı tek tona düşür |
| 48 ile karışıyor | krem zemin + yeşil accent + serif | accent mürekkep lacivert, serif tek ağırlık (EB Garamond 400) |
| Tutarlar kayıyor | oransal font | mono + tabular-nums + sağa hizalama |
| Toplam okunmuyor | renkli kutu + kalın yazı | çift kural + accent metin; kutu yok |
| Serif bulanık | 600/700 denendi | yalnız 400; hiyerarşiyi punto ve kural kalınlığı kurar |
| Mobilde tablo kırılıyor | tüm sütunlar sığdırılmış | yatay kaydırma + sabit tutar sütunu |

## Komşu stiller

- **Uyumlu:** `editorial-design` — serif başlık ortak; pazarlama ve dokümantasyonda köprü kurar.
- **Uyumlu:** `japandi` — sıcak kağıt zemini ve sakin boşluk ortak.
- **Uyumlu:** `utility` — ürün arayüzünde soğuk nötr varyant olarak yan yana çalışır.
- **Yasak:** `cyberpunk` — neon palet ve gölge dili muhasebe ciddiyetini bozar.
- **Yasak:** `glassmorphism` — cam yüzey kağıt metaforunu yok eder.
- **Yasak:** `dopamine-ui` — çok renkli palet tutar hiyerarşisini anlamsızlaştırır.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://docs.stripe.com/invoicing | fatura kalemleri ve toplam hiyerarşisi |
| https://docs.stripe.com/billing/subscriptions/usage-based | kullanım metreği ve kota eşiği dili |
| https://www.nngroup.com/articles/data-tables/ | sayısal sütun hizalama ve tarama ritmi |
| https://design-system.service.gov.uk/components/table/ | toplam satırı ve sayı biçimi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Ledger Meter (styles/53-ledger-meter/style.md, tokens.json)
Token: sadece [data-style="ledger-meter"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display EB Garamond 400 (tek ağırlık, tracking -0.005em), gövde Inter 400/600,
  sayı JetBrains Mono. Ölçek 11/13/15/20/29/48; gövde ölçü 68ch; tutarlar tabular-nums ve sağa hizalı.
Yüzey: fildişi kağıt (#faf7ee); defter çizgisi 28px (%55 opaklık), radius 2px/6px,
  gölge yalnız modalda. Bevel/gradient/cam yok.
Imza: kalem tablosu + 3px double toplam kuralı (accent metin) + 6px kota çubuğu;
  zebra satır --surface-2; her ekranda tek serif özet cümlesi.
Renk: tek accent #22456b (mürekkep lacivert); --ok yalnız "tahsil edildi" durumu.
Hareket: enter .66s cubic-bezier(.65,0,.35,1) y20 stagger .09; scroll top 82% .72s y26 once;
  1 pin scrub 1.35 (+110%); hover 110ms (yalnız satır zemini); prefers-reduced-motion zorunlu.
Yasak: 6px üstü radius, gradient/cam/bevel, yeşil accent, serif 600/700, tutar sayaç animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Tüm tutarlar hizalı ve tabular; toplam çift kuralla ayrılmış.
- [ ] Defter çizgisi metni kesmiyor; doku %6 altında.
- [ ] Kontrast: gövde 16.37:1, accent üstü 9.85:1.
- [ ] 390px'te tablo kendi içinde kaydırılıyor, sayfa taşmıyor.
- [ ] Serif (yalnız 400) + sans + mono üçü de görünür.
- [ ] `prefers-reduced-motion` açıkken hareket yok.
- [ ] Hiçbir renk/radius hard-coded değil.

## Token

```css
[data-style="ledger-meter"] {
  --bg: #faf7ee; --bg-2: #f2ecdc;
  --surface: #fffdf6; --surface-2: #f6f0e1;
  --ink: #1c1913; --ink-soft: #56503f; --ink-faint: #8a8068;
  --accent: #22456b; --accent-ink: #ffffff;
  --line: rgba(28,25,19,.13);
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 10px 24px -22px rgba(29,26,21,.55); --shadow-hard: 0 2px 0 var(--line);
  --font-display: "EB Garamond", ui-serif, Georgia, serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: .04;
  --danger: #a32b1c; --danger-ink: #ffffff;
  --ok: #1f6f4a; --warn: #8a5d12;
}
```

Koyu mod bloğu `styles/53-ledger-meter/token-block.css` içinde `[data-theme="dark"][data-style="ledger-meter"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
