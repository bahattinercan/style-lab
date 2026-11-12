# Aile bantları (21 band)

Band tablosunun **tek kaynağı** `kit/families.json`'dır: 1–151 kesintisiz ve çakışmasız.
`kit/build-gallery.mjs`, `kit/report.mjs` ve `kit/apply-fragments.mjs` bu dosyayı okur;
`node kit/apply-fragments.mjs --check` aralıkların bütünlüğünü doğrular.

Örnek slug'lar ve "3 tipik kullanım" kolonları bu skill'in yorumudur; bandın adı, aralığı ve
stil sayısı `kit/families.json` + `styles/` klasörlerinden gelir.
Tek stilli bandlar tek numara olarak yazılır (37 = 37–37 · 38 = 38–38 · 45 = 45–45).

| Band | Aile | Stil | Örnek slug'lar | 3 tipik kullanım |
|---|---|---|---|---|
| 01–07 | Sade | 7 | `minimalism` · `swiss-design` · `japandi` | kurumsal SaaS paneli · uzun okuma/makale · sakin e-ticaret |
| 08–12 | Yüzey | 5 | `glassmorphism` · `neumorphism` · `aurora-ui` | mobil ayar ekranı · medya oynatıcı katmanı · oyunlaştırılmış onboarding |
| 13–18 | Cesur | 6 | `neo-brutalism` · `memphis` · `dopamine-ui` | etkinlik afişi · genç marka lansmanı · indirim/kampanya sayfası |
| 19–27 | Retro | 9 | `y2k` · `synthwave` · `art-deco` | müzik/oyun vitrini · dönemsel kampanya · sergi posteri |
| 28–34 | Sanatsal | 7 | `surrealism` · `scrapbook` · `dark-academia` | kültür-sanat projesi · kişisel portfolyo · kitap/yayın tanıtımı |
| 35–36 | Geometrik | 2 | `bauhaus` · `constructivism` | kültür kurumu afişi · mimarlık stüdyosu · konferans programı |
| 37 | Tipografik | 1 | `kinetic-type` | tipografi vitrini · font/ajans sunumu · konferans ana sayfası |
| 38 | Organik | 1 | `organic-bio` | wellness/sağlık ürünü · sürdürülebilir marka · bitki/yemek içeriği |
| 39–40 | Yeni Dalga | 2 | `ai-native-mesh` · `scandinavian-dark` | AI ürün lansmanı · uzun oturumlu üretkenlik aracı · sakin içerik okuma |
| 41–44 | Zamansız | 4 | `grand-tourer` · `utility` | lüks otomotiv/saat · kurumsal form ve ayar · teknik dokümantasyon |
| 45 | Teknik | 1 | `terminal-ui` | geliştirici aracı · log/konsol ekranı · CLI dokümantasyonu |
| 46–55 | Veri & Gösterge | 10 | `telemetry-grid` · `trading-desk` · `vitals-triage` | operasyon paneli · finans alım-satım ekranı · hasta/vital izleme |
| 56–65 | Endüstriyel | 10 | `blueprint-drawing` · `mes-production-line` · `cockpit-avionics` | mühendislik paftası & saha güvenliği · MES/depo akışı · enerji (SCADA) & kokpit paneli |
| 66–75 | Kültürel & Bölgesel | 10 | `nordic-folk` · `levant-calligraphy` · `persian-miniature` | müze/sergi kataloğu · yerel zanaat markası · şehir/turizm tanıtımı |
| 76–85 | Doğa & Organik | 10 | `biophilic-botanical` · `topographic-terrain` · `coral-reef` | iklim/çevre projesi · açık hava markası · harita/keşif ürünü |
| 86–95 | Yayın & Tipografi | 10 | `literary-hardcover` · `broadsheet-daily` · `encyclopedia` | yayınevi/kitap okuma · katalog & ürün listesi · akademik referans |
| 96–105 | Hareket & Optik | 10 | `kinetic-marquee` · `depth-parallax` · `holographic-layer` | marka manifestosu hero · vitrin/portfolyo · lansman teaser'ı |
| 106–115 | Etkileşim | 10 | `command-palette` · `timeline-editor` · `kanban-flow` | araç/IDE arayüzü · zaman çizelgesi editörü · görev panosu |
| 116–125 | Oyuncul | 10 | `kids-playground` · `celebration-card` · `collectible-card` | çocuk/oyun ürünü · festival ve kutlama akışı · koleksiyon/hikâye anlatımı |
| 126–135 | Materyal & Lüks | 10 | `marble-vein` · `leather-craft` · `letterpress-print` | mücevap/moda vitrini · butik hizmet · premium ambalaj |
| 136–145 | Deneysel & Gelecek | 10 | `speculative-scifi` · `agent-orchestration` · `quantum-lab` | konsept/lansman denemesi · AI ajan ve veri hacmi vitrini · bilim kurgu/gelecek anlatısı |
| 146–151 | Sahne & Prestij | 6 | `noir-estate` · `agency-portfolio` · `product-launch` · `boutique-hotel` · `lookbook-editorial` · `dark-dashboard` | sinematik emlak/prestij · ajans vitrini · ürün lansmanı · butik otel · editoryal lookbook · koyu ürün paneli |

Toplam: **21 band · 145 stil**.

## İki etiket, iki iş (karıştırma)

| Alan | Nerede | Ne işe yarar |
|---|---|---|
| **Band** (`kit/families.json`) | band tablosu, galeri, rapor, fragment birleştirme | Seçim ve sınıflandırma. 21 band, 1–145 kesintisiz. |
| **Hareket ailesi** (`tokens.json → motion.family`) | `kit/motion-check.mjs` çeşitlilik kapısı | Animasyon imzası karşılaştırması. **Band adıyla birebir aynıdır** (21 aile); eşitliği `check-schema` + aşağıdaki kanıt komutu doğrular. |

Pratik sonuç: band ve hareket ailesi **aynı adı taşır** (tek kaynak `kit/families.json`). Yeni stilde
`motion.family` alanına bandın adını yaz; farklı yazarsan `node kit/check-schema.mjs` ve aşağıdaki
kanıt komutu uyarır/hatalar.

## Tabloyu güncel doğrula

```bash
# band tablosu ↔ katalog uyumu (ad + aralık + sayı)
node -e "const fs=require('fs');const f=require('./kit/families.json').families;const s=fs.readdirSync('styles').filter(x=>fs.statSync('styles/'+x).isDirectory()).map(x=>parseInt(x,10)).filter(Number.isFinite);let ok=true;for(const b of f){const n=s.filter(x=>x>=b.from&&x<=b.to).length;console.log(String(b.from).padStart(3)+'-'+String(b.to).padStart(3),b.name.padEnd(22),n);if(!n)ok=false}console.log(ok?'band tablosu tutarlı':'BOŞ BAND VAR')"

# fragment'ların kit dosyalarıyla senkronu + aralık bütünlüğü
node kit/apply-fragments.mjs --check
```

## Band nasıl seçilir

Niyet → önce bakılacak bandlar (2–3 aday seç, sonra tek stile in):

| İhtiyaç | Önce bakılacak band |
|---|---|
| Sakin, nötr, kurumsal | Sade (01–07) · Yeni Dalga (39–40) |
| Okuma/uzun metin | Sade (01–07) · Yayın & Tipografi (86–95) |
| Veri/operasyon yoğunluğu | Veri & Gösterge (46–55) · Endüstriyel (56–65) |
| Sahada/üretimde kullanım | Endüstriyel (56–65) · Veri & Gösterge (46–55) |
| Yüksek enerji, kampanya | Cesur (13–18) · Oyuncul (116–125) |
| Kültürel kimlik, zanaat | Kültürel & Bölgesel (66–75) · Materyal & Lüks (126–135) |
| Doğa/iklim anlatısı | Doğa & Organik (76–85) · Organik (38) |
| Vitrin, marka manifestosu | Hareket & Optik (96–105) · Cesur (13–18) |
| Tipografi odaklı vitrin | Tipografik (37) · Yayın & Tipografi (86–95) |
| Araç/üretkenlik arayüzü | Etkileşim (106–115) · Teknik (45) |
| Konsept/deney, gelecek anlatısı | Deneysel & Gelecek (136–145) |

## Seçim kuralları (baskın + garnitür)

1. **Tek baskın stil.** Ekranın rengi, tipografisi, radius'u ve hareketi tek stilden gelir.
2. **En fazla 1 garnitür.** Garnitür yalnız kendi `data-style` alt ağacında yaşar ve baskın
   stilin değişkenlerini **ezmez**.
3. Garnitür adayı: baskın stilin `tokens.json → neighbors.compatible` listesi.
   `neighbors.forbidden` listesindeki stille kimlik çatışır — kullanma.
   `kit/check-schema.mjs` bu slug'ların katalogda var olmasını denetler.
4. Aynı bandın içinden iki stil yan yana konmaz (imza ve kimlik yakın); farklı bandan seç.
5. Karar gerekçesi tek cümle: "Baskın X çünkü <ölçülebilir sebep>; garnitür Y çünkü <tek katman>".

## Kanıt: band = motion.family (tek kaynak)

```bash
# her stilin bandı ile tokens.json motion.family aynı mı?
node -e "const fs=require('fs');const F=require('./kit/families.json').families;const band=n=>F.find(f=>n>=f.from&&n<=f.to)?.name;let bad=[];for(const d of fs.readdirSync('styles').filter(x=>fs.statSync('styles/'+x).isDirectory())){const t=JSON.parse(fs.readFileSync('styles/'+d+'/tokens.json','utf8'));const b=band(parseInt(d,10));if(t.motion?.family!==b)bad.push(d+' :: '+(t.motion?.family||'-')+' ≠ '+b)}console.log(bad.length?'UYUMSUZ '+bad.length+'\n'+bad.join('\n'):'tutarlı: band = motion.family')"

# kapılar
node kit/motion-check.mjs | tail -3   # 21 aile, aile içi kopya 0, imza 145/145
node kit/check-schema.mjs | tail -2   # 0 hata
```
