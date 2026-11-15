# Kompozisyon raporu

Üretim: `node kit/composition-report.mjs` · kaynak: `kit/render/layouts.json` + `styles/*/tokens.json`

> Neden bu rapor var: katalog 145 stilin **rengini** çeşitlendiriyordu, **iskeletini** değil.
> Ölçü: hero|nav parmak izi. Hedef: tekdüzelik endeksi (en kalabalık kombinasyonun payı) **%30 altı**.

## 1 · Özet

| Ölçü | Değer | Hedef |
|---|---|---|
| Stil | 251 | — |
| Farklı hero|nav parmak izi | 16 | ≥ 12 |
| **Tekdüzelik endeksi** (en kalabalık parmak izi) | 30/251 = %12 | <%30 |
| En kalabalık tek hero | split = 60/251 = %24 | <%35 |
| Aile başına ortalama farklı hero | 3.2 | ≥ 2 |
| Kullanılan arketip | 8 hero · 5 nav · 3 yoğunluk | tümü |

## 2 · Hero arketipleri

| Arketip | Ne zaman | Stil | Örnekler |
|---|---|---|---|
| `split` · Split | kopya solda, ürün görseli sağda; dengeli, nötr varsayılan | 60 (%24) | `glassmorphism`, `liquid-glass`, `frutiger-aero` |
| `split-reverse` · Split (ters) | görsel solda, kopya sağda; okuma akışını kırar, cesur ailelerde ritim | 26 (%10) | `neo-brutalism`, `anti-design`, `acid-graphics` |
| `centered` · Merkezlenmiş | tek mesaj + geniş görsel bandı; sakin, seyrek markalar | 26 (%10) | `minimalism`, `japandi`, `wabi-sabi` |
| `type` · Salt tipografi | görsel yok; başlık ekranın kendisi. Poster/dergi/ajans vitrini | 28 (%11) | `swiss-design`, `editorial-design`, `scrapbook` |
| `fullbleed` · Tam kenar medya | medya sol kenara taşar (kart yok), kopya sağda nefes alır; vitrin/lüks | 30 (%12) | `luxury-typography`, `art-deco`, `victorian` |
| `product` · Ürün ekranı | kopya üstte küçük, dev ürün paneli altta; araç iddiası | 38 (%15) | `bento-grid`, `terminal-ui`, `telemetry-grid` |
| `index` · Dizin ızgarası | kopya solda dar, sağda 2×2 iş/kayıt ızgarası; portfolyo, arşiv | 22 (%9) | `memphis`, `atlas-console`, `punk-fanzine` |
| `sticky` · Yapışkan anlatı | solda yapışkan kopya, sağda kayan 3 panelli hikâye şeridi; uzun sayfa | 21 (%8) | `constructivism`, `ai-native-mesh`, `grand-tourer-oxblood` |

## 3 · Nav arketipleri

| Arketip | Ne zaman | Stil | Örnekler |
|---|---|---|---|
| `inline` · Satır içi | marka + linkler + iki buton; nötr varsayılan | 82 (%33) | `swiss-design`, `editorial-design`, `glassmorphism` |
| `pill` · Yüzen hap | sayfadan kopuk, ortada linkler; yüzey/cam ve vitrin aileleri | 46 (%18) | `luxury-typography`, `japandi`, `wabi-sabi` |
| `split` · Bölünmüş | marka solda, linkler sağda, tek metin CTA; editoryal ve tipografik | 73 (%29) | `minimalism`, `claymorphism`, `memphis` |
| `utility` · Yardımcı satırlı | üstte ince yardımcı satır, altta ana gezinme; kurumsal, veri, endüstri | 31 (%12) | `bento-grid`, `anti-design`, `acid-graphics` |
| `rail` · Yan ray | solda dikey gezinme rayı; uygulama hissi, komut paleti, araç aileleri | 19 (%8) | `telemetry-grid`, `experiment-split`, `vitals-triage` |

## 4 · Yoğunluk

| Yoğunluk | Ne zaman | Stil |
|---|---|---|
| `sparse` · Seyrek | ekran başına ≤5 öğe, geniş boşluk | 90 (%36) |
| `balanced` · Dengeli | standart bilgi yoğunluğu | 65 (%26) |
| `dense` · Yoğun | çok öğe, küçük boşluk, veri hissi | 96 (%38) |

## 5 · Aile bazlı çeşitlilik

| Aile | Stil | Farklı hero | Farklı parmak izi | Baskın hero |
|---|---|---|---|---|
| Sade | 7 | 4 | 5 | `centered` (3) |
| Yüzey | 5 | 2 | 3 | `centered` (3) |
| Cesur | 6 | 2 | 3 | `split-reverse` (5) |
| Retro | 9 | 3 | 4 | `split-reverse` (6) |
| Sanatsal | 7 | 3 | 4 | `split` (5) |
| Geometrik | 2 | 2 | 2 | `split` (1) |
| Tipografik | 1 | 1 | 1 | `type` (1) |
| Organik | 1 | 1 | 1 | `centered` (1) |
| Yeni Dalga | 2 | 2 | 2 | `sticky` (1) |
| Zamansız | 4 | 2 | 3 | `fullbleed` (2) |
| Teknik | 1 | 1 | 1 | `product` (1) |
| Veri & Gösterge | 10 | 3 | 4 | `product` (8) |
| Endüstriyel | 10 | 3 | 5 | `product` (5) |
| Kültürel & Bölgesel | 10 | 4 | 5 | `split` (7) |
| Doğa & Organik | 10 | 3 | 4 | `split` (7) |
| Yayın & Tipografi | 10 | 3 | 4 | `type` (8) |
| Hareket & Optik | 10 | 3 | 4 | `sticky` (8) |
| Etkileşim | 10 | 4 | 8 | `product` (4) |
| Oyuncu | 10 | 4 | 7 | `split-reverse` (3) |
| Materyal & Lüks | 10 | 3 | 4 | `fullbleed` (8) |
| Deneysel & Gelecek | 10 | 3 | 5 | `split` (6) |
| Sahne & Prestij | 6 | 5 | 5 | `fullbleed` (2) |
| Oyun & Etkileşim | 20 | 5 | 8 | `split` (8) |
| Operasyon & Veri | 10 | 3 | 4 | `product` (8) |
| Ticaret & Vitrin | 10 | 3 | 4 | `index` (6) |
| Kültür & Yayın | 10 | 3 | 6 | `type` (5) |
| Sağlık & Bilim | 10 | 3 | 4 | `centered` (8) |
| Öğrenme & Oyunlaştırma | 10 | 3 | 4 | `split` (8) |
| Materyal & Zanaat | 10 | 3 | 4 | `fullbleed` (8) |
| Tipografi Denemeleri | 10 | 3 | 4 | `type` (8) |
| Gelecek & Spekülatif | 10 | 5 | 7 | `split` (4) |

## 6 · Parmak izleri

| hero|nav | Stil | Pay |
|---|---|---|
| `split|inline` | 30 | %12 |
| `split|split` | 30 | %12 |
| `product|utility` | 19 | %8 |
| `product|rail` | 19 | %8 |
| `fullbleed|pill` | 17 | %7 |
| `type|split` | 16 | %6 |
| `centered|split` | 14 | %6 |
| `split-reverse|inline` | 14 | %6 |
| `index|split` | 13 | %5 |
| `sticky|inline` | 13 | %5 |
| `fullbleed|inline` | 13 | %5 |
| `type|inline` | 12 | %5 |
| `centered|pill` | 12 | %5 |
| `split-reverse|utility` | 12 | %5 |
| `index|pill` | 9 | %4 |
| `sticky|pill` | 8 | %3 |

## 7 · Kalan eksenler (henüz ölçülmüyor)

| Eksen | Durum | Plan |
|---|---|---|
| İçerik paketi (sektör) | tek kurgusal SaaS + emlak | P1: `kit/content/*.json`, `tokens.json → industries[]` |
| Görsel katman | 0 `<img>` (yalnız CSS motif) | P2: `kit/images/` + `imagery.treatment` |
| Bölüm kütüphanesi | yok | P3: `kit/sections.html` + 12 arketip |
| Akış şeritleri | tek kare | P4: onboarding/checkout/invite akışları |
