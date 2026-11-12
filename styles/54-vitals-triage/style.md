# 54 · Vitals Triage

> **Bir cümlede:** Vital bulguları büyük yuvarlak kartlarda, triyaj seviyesini sol şerit ve metinle kodlayan; sıcak-soğuk klinik zeminli, nabız halkasıyla durumu hissettiren sağlık panosu.

| | |
|---|---|
| **Hissiyat** | şefkatli, dikkatli, hızlı okunur, sakin |
| **En iyi** | klinik triyaj panosu, hasta/vital takip ekranı, sağlık çağrı merkezi, refakatçi (caregiver) uygulaması |
| **Kaçın** | finansal işlem yoğun ekran, geliştirici aracı, lüks vitrin — yuvarlak yüzey veri yoğunluğunda yer kaybettirir |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (en düşük etkileşimli çift 6.13:1) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `styles/54-vitals-triage/tokens.json` → `[data-style="vitals-triage"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Vitals Triage, klinik bir ekranı **triyaj masası** gibi kurar: her hasta satırı solda 4px seviye şeridi taşır, vital kartları büyük yuvarlak yüzeylerde değer + birim + referans aralığı + ölçüm saati gösterir. Yuvarlak köşe (14/22px) burada bir moda değil, "sert olmayan ama net" bir okunurluk kararıdır: panik anında ekran tehdit etmemeli.

Üç kurucu karar: (1) **seviye = şerit + sayı + sözcük** — triyaj seviyesi yalnız renkle değil, sol şerit genişliğiyle ve "2 · Acil" metniyle kodlanır; (2) **vital kartı tek şablon** — değer 44px mono, birim 13px, referans aralığı 11px; her vital aynı şablonu kullanır ki göz tarama hızı düşmesin; (3) **tek animasyon hakkı** — yalnız nabız halkası (durum göstergesi) canlıdır; geri kalan hareket 0.24s'lik hızlı girişle sınırlıdır.

Bedeli: yumuşak yüzey ve geniş padding yoğunluğu azaltır. Bu yüzden liste ekranında kart değil **satır** kullanılır (52px, sol şerit) — yuvarlaklık yalnız kart düzeyinde kalır.

### Ne değildir
- **Claymorphism (11) değildir:** 11 kil dokusu ve çift gölgeyle hacim kurar; burada gölge tek katman ve ≤ %35, doku yoktur.
- **Telemetry Grid (46) değildir:** 46 eşit hairline hücrelerle nötr metrik ızgarasıdır; Vitals'ta 22px radius, sol seviye şeridi ve triyaj sözlüğü vardır.
- **Ethereal (29) değildir:** 29 düşük kontrastlı sis estetiğidir; burada gövde kontrastı 15.71:1 — klinik okunurluk önceliklidir.
- **Dopamine UI (18) değildir:** 18 renkli, oyuncu, yüksek doygunluktadır; Vitals'ta tek accent (klinik kırmızı) ve nötr klinik zemin vardır.

### Nereden gelir
Acil servis triyaj ölçekleri (ESI 5 seviye, Manchester, RETTS), hemşire gözlem kağıdı ve modern klinik arayüzler (NHS Design System, Apple Health). Bugün yeniden kullanılmasının nedeni: sağlık verisinin **panik anında** okunabilir olması gerekliliği — büyük rakam, sakin yüzey, tek renk vurgu. Klişeye dönüşmemesi için korunacak detay: her ölçümün yanında saat ve referans aralığı bulunması; "hasta fotoğrafı ile duygu" tuzağına düşmemek.

### 3 saniyede tanıma testi
1. Vital kartları büyük ve yuvarlak (22px); değerler 44px mono, yanında birim var.
2. Triyaj satırlarında sol tarafta 4px renkli şerit ve "1–5 · sözcük" etiketi.
3. Kartlarda EKG/nabız çizgisi ve yumuşak bir halka; hareket yalnız burada.
4. Zemin soğuk klinik beyazı; accent kiremit kırmızısı, üçüncü renk yok.
5. Her ölçümün yanında saat (`14:32`) mono olarak yazılı.

## Görsel imza
- **Seviye şeridi:** satır solunda 4px dolu şerit; seviye 1–2 `--danger`, 3 `--warn`, 4–5 `--ok`; şerit her zaman metinle birlikte.
- **Vital şablonu:** değer 44px mono (`tabular-nums`), birim 13px, referans aralığı 11px `--ink-soft`, saat 11px mono sağ üstte.
- **Nabız halkası:** 44×44px, 2px `--accent` yay; `reduced-motion` altında sabit yay (animasyon yok).
- **EKG çizgisi:** 2px `--accent`, 12px ızgarada; eşik dışı segment `--danger` ile bölünür, gradyan yok.
- **Radius:** `--radius` 14px (kontrol, chip, satır), `--radius-lg` 22px (kart, modal).
- **Gölge:** tek katman `0 16px 32px -26px`; iç gölge ve bevel yok.
- **Doku:** `--grain: 0`; yumuşaklık yüzey ve radius ile, doku ile değil.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4f8f7` | sayfa zemini (klinik) | kart zemini |
| `--bg-2` | `#e8f1ef` | ikincil zemin, input | triyaj şeridi |
| `--surface` | `#ffffff` | vital kartı, panel | sayfa zemini |
| `--surface-2` | `#eef5f3` | ikincil yüzey, chip, ray | vital değer zemini |
| `--ink` | `#10201f` | metin, vital değeri | dekoratif dolgu |
| `--ink-soft` | `#47605d` | referans aralığı, ikincil metin | kritik değer |
| `--ink-faint` | `#7d938f` | yalnız dekoratif etiket/çizgi | etkileşimli metin |
| `--accent` | `#b3341f` | kritik değer, birincil eylem, nabız | dekorasyon |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(16,32,31,.11)` | kart kenarı, ızgara | metin |

- Ölçülen kontrast: `ink/bg` = **15.71:1** · `ink-soft/bg` = **6.33:1** · `accent-ink/accent` = **6.13:1** · `ink-faint/bg` = **3.05:1**.
- Tek vurgu kuralı: accent yalnız "kritik / eylem" (kiremit kırmızı). Triyaj seviyeleri `--danger` / `--warn` / `--ok` üçlüsüyle; accent ile `--danger` aynı ekranda yan yana gelirse accent yalnız halka/çizgi olarak kullanılır.
- Yasak kombinasyon: kırmızı-yeşil ikilisiyle "iyi/kötü" ayrımı (metin + seviye numarası zorunlu).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 (`--font-display`) | 44px / mobil 28px | 600 | 1.06 | `--tracking` −0.015em |
| H2 | Baloo 2 | 27px | 600 | 1.2 | −0.005em |
| H3 | Nunito | 20px | 700 | 1.32 | 0 |
| Gövde | Nunito (`--font-body`) | 16px | 400 | 1.62 | 0 |
| Etiket / vital | IBM Plex Mono (`--font-mono`) | 11–13px | 400/600 | 1.44 | 0.1em (etiket) |

- Ölçek oranı ≈ 1.4; kullanılan basamaklar: 11 · 13 · 16 · 20 · 27 · 44.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 3.4vw, 44px); }`
- Gövde metni maksimum satır uzunluğu: 62 ch (klinik notlar kısa okunur).
- Ağırlık kuralı: 400 gövde, 700 vurgu, 600 display. 300 yok — ince ağırlık panik anında kaybolur.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 20px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 vital kartları 3'lü · 768 2'li · 390 tek sütun, triyaj satırı 52px kalır |

- Asimetri kuralı: yalnız triyaj listesi 7/5; vital kartları simetrik.
- Bölüm ritmi: art arda en fazla 3 aynı boyutlu kart; dördüncü blok tam genişlik "kritik uyarı" olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | klinik zemin, bölüm ayırıcı |
| Kart | `--surface` | `0 16px 32px -26px rgba(16,32,31,.35)` | vital kartı, panel |
| Yüzen katman | `--surface` + `--shadow` | aynı | modal/sheet, kritik uyarı |

- Kenarlık formülü: `1px solid var(--line)` + tek katman yumuşak gölge; kenarlık ile gölge birlikte kullanılabilir (bu stil istisnası).
- Derinlik nereden gelir: yumuşak gölge + yuvarlak yüzey; bevel, parlaklık, cam yok.
- Radius: `--radius` 14px (kontrol, satır, chip), `--radius-lg` 22px (kart, modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 22px | 999px | 15px/700 Nunito | `--accent` zemin, `--accent-ink`, `--shadow` | hover %90 · active .98 scale · focus 3px accent · disabled %45 · loading nabız halkası |
| Buton (ikincil) | 48px | 0 22px | 999px | 15px/700 | `--surface`, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 48px | 0 16px | `--radius` | 15px Nunito + mono sayı | `--surface`, 1px `--line` | focus 3px accent · filled `--bg-2` · error `--danger` + 2px sol şerit · disabled %45 |
| Kart | içerik | 22px | `--radius-lg` | — | `--surface`, 1px `--line`, `--shadow` | kritik durumda sol 4px `--danger` şerit |
| Chip / badge | 28px | 0 12px | 999px | 12px/700 Nunito | `--surface-2`, 1px `--line` | seviye chip'i: renk + numara + sözcük |
| Nav | 60px | 0 28px | 0 | 14px/400 | `--bg`, alt 1px `--line` | aktif sekme pill (accent %12 zemin) |
| Tablo satırı | 52px | 10px 14px | 0 | 14px (saat mono) | alt 1px `--line` | hover `--surface-2` · seçili sol 4px `--accent` |
| Modal / sheet | — | 26px | `--radius-lg` | 16px/400 | `--surface`, 1px `--line`, `--shadow` | alttan açar, başlıkta kimlik + seviye |
| Toast | 46px | 10px 16px | 999px | 13px mono saat | `--surface`, 1px `--line`, `--shadow` | 5s, üst orta; kritik uyarıda `--danger` şerit |
| Grafik paleti | — | — | — | — | `--accent` · `--ink-soft` · `--ok` · `--warn` (en fazla 4) | EKG/vitals çizgisi 2px, eşik bandı %8 dolgu |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 2px` (dokunma/klavye hedefi büyük olduğu için halka da kalın).
- Dokunma hedefi: en az 44×44px; butonlar 48px, triyaj satırı 52px — hiçbir etkileşim 44px altına inmez.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px yuvarlak uçlu çizgi, 20px ızgara; kalp, termometre, damla, saat |
| Fotoğraf | Yok — hasta/klinik fotoğrafı kullanılmaz (mahremiyet + dikkat dağıtma) |
| İllüstrasyon | Yok; EKG çizgisi, nabız halkası ve vital kartı tek görsel dil |
| Doku | `--grain: 0`; doku yerine yumuşak zemin tonu ve yuvarlak yüzey |
| Logo alanı | Kelime logosu Baloo 2 600; işaret 14px yuvarlak nabız noktası, sol üst 24px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Solda tek cümle + iki CTA, sağda vital kartı yığını (2 kart + halka) | `shots/01-landing.png` |
| Dashboard | yüksek | Üstte 3 vital kartı, altta triyaj listesi (sol şerit + saat) | `shots/02-dashboard.png` |
| Form | düşük | Vital girişi: büyük alanlar (48px), birim sabit, tek sütun | — |
| Liste / tablo | yüksek | 52px satır, sol 4px seviye şeridi, sağda bekleme süresi mono | — |
| Boş durum | orta | "Şu an bekleyen yok" + nabız halkası (sabit) + tek eylem | — |
| Onboarding | yüksek | 3 adım: rol → vardiya → bildirim; her adımda tek seçenek grubu | — |
| Pricing | orta | Klinik plan tablosu; seviye chip'leri ile kapsam gösterilir | — |
| Giriş / ödeme | çok düşük | Tek panel; 48px alanlar, 3px odak halkası, hata sol şeritle | — |
| Modal | orta | Hasta detayı sheet: kimlik, seviye chip'i, vital geçmişi | — |
| Bildirim / toast | orta | "2 · Acil — oda 3 · 14:32" mono saatle, üst orta | — |
| Hata | düşük | Kart içinde `--danger` sol şerit + "ölçüm alınamadı" + yeniden dene | — |
| Profil / ayar | orta | Vardiya, bildirim eşiği, referans aralığı birimleri | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.26s**, y **6px**, stagger **0.02** | `cubic-bezier(.16,1,.3,1)` | `opacity` + `transform` |
| Scroll reveal | **0.28s**, trigger **top 91%**, y **5px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **kapalı** (kritik veri sabitlenmez; pin okuma sırasını böler) | — | — |
| Hover | **150ms**, görsel scale **1.025** | `ease-out` | `transform` |
| Basma | 120ms | aynı eğri | `transform` (.98 scale) |
| Nabız halkası | 1.6s döngü (tek canlı öğe) | `linear` | `transform: rotate` |

- Bu stilin ölçülebilir imzası: `enter 0.26s / cubic-bezier(.16,1,.3,1) / 6px / 0.02` + `scroll top 91% / 0.28s / 5px` + `pin kapalı` + `hover 150ms / 1.025`. Katalogda `top 91%` trigger'ı ve `hover scale 1.025` yalnız bu stilde; `0.26s` giriş + `cubic-bezier(.16,1,.3,1)` ikilisi 47 (0.22s) ve 57 (0.24s) ile çakışmaz.
- `prefers-reduced-motion`: tüm süreler 0.01ms; nabız halkası durur (sabit yay), EKG çizgisi donar; giriş anında.
- Bu stile yasak hareket: saniyede 1'den fazla flash, alarm yanıp sönmesi, bounce, parallax, sayı sayan sayaç.

## Koyu mod

| Token | Açık (klinik) | Koyu (gece nöbeti) |
|---|---|---|
| `--bg` | `#f4f8f7` | `#0a1413` |
| `--bg-2` | `#e8f1ef` | `#0f1c1a` |
| `--surface` | `#ffffff` | `#132220` |
| `--surface-2` | `#eef5f3` | `#1a2c29` |
| `--ink` | `#10201f` | `#e9f4f1` |
| `--ink-soft` | `#47605d` | `#a3bfba` |
| `--ink-faint` | `#7d938f` | `#79948f` |
| `--accent` | `#b3341f` | `#ff8a72` |
| `--accent-ink` | `#ffffff` | `#250a05` |
| `--line` | `rgba(16,32,31,.11)` | `rgba(233,244,241,.15)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **16.64:1** · `ink-soft/bg` = **9.55:1** · `accent-ink/accent` = **8.12:1** · `ink-faint/bg` = **5.74:1**.
- Koyu modda değişen başka ne var: accent açılır ve parlaklığı artar, gölge yerine `--line` ağırlığı artar; `--blur` 6px yalnız sheet başlığında kullanılır, koyuda 0px'e düşer.
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="vitals-triage"]`.

## Zorunlu kurallar
- Her vital kartı aynı şablonu kullanır: değer (44px mono) + birim + referans aralığı + ölçüm saati.
- Triyaj seviyesi üçlü kodlanır: sol 4px şerit + seviye numarası + sözcük (Acil / Öncelikli / Ayaktan).
- Eşik dışı değer "yüksek/düşük" sözcüğüyle ve `--danger` ile birlikte gösterilir.
- Radius: kart 22px, kontrol 14px, buton 999px — üç değer dışında radius yok.
- Gölge tek katman ve ≤ %35 opaklık; kenarlık her zaman 1px.
- Kritik uyarı ekranın üstünde tek satır; saat mono.
- Boş/dolu/hata durumları aynı iskeleti korur (kart + birincil eylem).

## Yasaklar
- Kırmızı-yeşil tek başına ayrım; renk körlüğü güvenli kodlama zorunlu.
- Yanıp sönen alarm (>1/s) ve sürekli döngü (nabız halkası hariç).
- Fotoğraf/illüstrasyon ile duygu kurma; hasta kimliği gösteren görsel.
- 22px üzeri radius, sert siyah gölge, iç gölge/bevel.
- Neon tıbbi-tech mavisi, gradient zemin, cam efekt (blur ≤ 6px, yalnız sheet).
- Saatsiz ölçüm ve referans aralığı olmayan vital değeri.
- Emoji ile durum bildirimi.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `accent-ink/accent` = 6.13:1; gövde 15.71:1; `ink-faint/bg` 3.05:1 yalnız dekoratif.
- `--ink-faint` ayırıcı ve dekoratif etiket için; etkileşimli metin değil.
- Durum üçlü kodlanır (şerit + numara + sözcük); renk körlüğünde de okunur.
- Odak halkası 3px accent + 2px offset; 48px hedef üstünde net görünür.
- Nabız halkası tek canlı öğe; `prefers-reduced-motion` altında sabit yay — vestibüler risk düşük.
- 390px'te vital kartları tek sütun, triyaj satırı 52px korunur; yatay kaydırma yok.
- Ekran okuyucu için vital değeri `aria-label` ile "38,4 derece, yüksek" biçiminde okunur.

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
| "Çocuk uygulaması" hissi | fazla yuvarlak + pastel çok renk | radius 22px'te sabit, accent tek, palet klinik |
| Kritik değer gözden kaçıyor | yalnız renk kullanılmış | sol şerit + "yüksek" sözcüğü + kalın mono değer |
| Kart yığını dağınık | farklı yükseklikte kartlar | tek şablon: değer/birim/aralık/saat satırları sabit |
| Okunmuyor | 300 ağırlık + düşük kontrast | 400 taban, ink-soft ≥ 6:1 |
| Alarm yoruyor | yanıp sönen kart | yalnız nabız halkası canlı, alarm statik şerit |
| Mobilde dokunulamıyor | 36px buton | 48px hedef, tek sütun |

## Komşu stiller

- **Uyumlu:** `claymorphism` — yuvarlak yüzey ortak; ama kil dokusu eklenirse gölge tek katmana indirilir.
- **Uyumlu:** `japandi` — sakin boşluk ve yumuşak zemin ortak; klinik notlar için sıcak varyant.
- **Uyumlu:** `ethereal` — düşük kontrast isteniyorsa yalnız dekoratif katmanda.
- **Yasak:** `terminal-ui` — mono ızgara ve 0 radius, panik anında okunurluğu düşürür.
- **Yasak:** `cyberpunk` — neon palet klinik güveni bozar.
- **Yasak:** `neo-brutalism` — 3px siyah kontur ve sert gölge "tehdit" hissi verir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.ahrq.gov/patient-safety/settings/emergency-dept/esi.html | 5 seviyeli triyaj ölçeği ve sözlüğü |
| https://service-manual.nhs.uk/design-system | klinik arayüzde erişilebilirlik kararları |
| https://www.england.nhs.uk/statistics/statistical-work-areas/ae-waiting-times-and-activity/ | bekleme süresi metrikleri |
| https://developer.apple.com/design/human-interface-guidelines/healthkit | vital kartı ve birim gösterimi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Vitals Triage (styles/54-vitals-triage/style.md, tokens.json)
Token: sadece [data-style="vitals-triage"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Baloo 2 600 (tracking -0.015em), gövde Nunito 400/700, etiket+sayı IBM Plex Mono.
  Ölçek 11/13/16/20/27/44; gövde ölçü 62ch; vital değeri 44px mono tabular.
Yüzey: klinik beyaz zemin, radius 14px/22px, tek katman yumuşak gölge (<= %35).
Imza: vital kartı tek şablon (değer + birim + referans aralığı + saat); triyaj satırında
  sol 4px seviye şeridi + numara + sözcük; tek canlı öğe nabız halkası.
Hareket: enter .24s cubic-bezier(.16,1,.3,1) y6 stagger .02; scroll top 92% .26s y4 once;
  pin yok; hover 150ms scale 1.025; reduced-motion'da halka sabit.
Yasak: kırmızı-yeşil tek başına ayrım, yanıp sönen alarm, fotoğraf, 22px üstü radius, gradient.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Vital kartı tek şablon; saat ve referans aralığı her kartta.
- [ ] Triyaj üçlü kodlanmış (şerit + numara + sözcük).
- [ ] Kontrast: gövde 15.71:1, accent üstü 6.13:1.
- [ ] Dokunma hedefi ≥ 44px (buton 48px).
- [ ] 390px'te tek sütun, taşma yok.
- [ ] `prefers-reduced-motion` açıkken halka ve EKG duruyor.
- [ ] Hiçbir renk/radius hard-coded değil.

## Token

```css
[data-style="vitals-triage"] {
  --bg: #f4f8f7; --bg-2: #e8f1ef;
  --surface: #ffffff; --surface-2: #eef5f3;
  --ink: #10201f; --ink-soft: #47605d; --ink-faint: #7d938f;
  --accent: #b3341f; --accent-ink: #ffffff;
  --line: rgba(16,32,31,.11);
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 16px 32px -26px rgba(16,32,31,.35); --shadow-hard: 0 0 0 2px var(--surface-2);
  --font-display: "Baloo 2", ui-rounded, "Nunito", ui-sans-serif, sans-serif;
  --font-body: "Nunito", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: -0.015em; --blur: 6px; --grain: 0;
  --danger: #a52a1c; --danger-ink: #ffffff;
  --ok: #1c6b4f; --warn: #8a5a06;
}
```

Koyu mod bloğu `styles/54-vitals-triage/token-block.css` içinde `[data-theme="dark"][data-style="vitals-triage"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
