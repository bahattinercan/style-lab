# 48 · Executive KPI

> **Bir cümlede:** Dört sayının bir hairline kâğıda yerleştiği, her sayının yanında tek satır yorum taşıdığı yönetici özeti raporu.

| | |
|---|---|
| **Hissiyat** | sakin, otoriter, ölçülü, "bitmiş karar" |
| **En iyi** | yönetici KPI özeti, yatırımcı güncellemesi, yönetim kurulu raporu, çeyrek sonu paneli |
| **Kaçın** | operasyon/on-call ekranı (veri tazeliği yetmez), oyun/etkinlik, yoğun tablo uygulaması |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 7.17:1) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `kit/tokens.css` → `[data-style="executive-kpi"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Executive KPI, bir dönemin sonucunu **tek ekranda karar verdirecek** biçimde sunan rapordur: en fazla dört sayı, her sayının yanında dönem etiketi ve tek cümlelik yorum, altında iki destek grafiği. Süsü feda eder; karşılığında üç şey kazanır — otorite (kalın serif başlık, hairline kural, gölgesiz kâğıt), hız (dört sayı 2 saniyede okunur), izlenebilirlik (her sayının kaynağı dipnotta).

Kurucu kararları üç tanedir. Birincisi **kâğıt tek katman**: kart gölgesi yoktur; KPI bloğu üstündeki 1px accent kural onu "başlıklı bölüm" yapar. İkincisi **sayı serif**: 64px Fraunces, tabular hizalı; rapor dilinde sayı bir tipografi kararıdır, bir widget değildir. Üçüncüsü **boşluk bütçesi**: bölümler arası 80px, gutter 32px, kart padding 24px — içerik azaltılarak değil, nefes verilerek sakinleşir.

Bedeli: veri tazeliği düşüktür ve çok sayıda metrik gösterilemez. Kazancı: yöneticinin ekranda kalma süresi 20 saniyenin altına iner.

### Ne değildir
- **Telemetry Grid (46) değildir:** 46 on iki tile, 96px yükseklik, saniyede yenilenen veri; 48 dört KPI, 64px serif rakam, günlük/çeyreklik dönem.
- **Utility (44) değildir:** 44 Poppins sans, 8/12px radius ve mavi accent kullanır; 48 Fraunces serif, 0–3px radius ve orman yeşili.
- **Editorial Design (03) değildir:** 03 anlatı ve drop cap ile uzun metin kurar; 48'de metin en fazla üç paragraf, geri kalanı sayı ve kuraldır.
- **Minimalism (01) değildir:** 01 sıcak beyaz + Inter + 12px radius ile "sakin ürün"tür; 48 kırık beyaz (#faf7f1) + serif + 0px radius ile "basılı rapor"dur.

### Nereden gelir
Yönetim kurulu raporu ve yatırımcı mektubu geleneğinden: sayfa başına tek iddia, tipografik hiyerarşi, hairline cetvel, dipnot. 2010'ların "executive dashboard" pratiği bunu ekrana taşıdı ama çoğu zaman widget'laştırdı; bu stil widget'ı reddedip kâğıt disiplinini korur. Klişeye dönüşmemesi için korunacak detay: **gölgenin hiç eklenmemesi** ve her KPI'nın tek cümle yorum taşıması.

### 3 saniyede tanıma testi
1. Ekranda en fazla dört büyük serif sayı var ve her birinin üstünde 1px accent kural duruyor.
2. Hiçbir kartta gölge yok; ayrım yalnız 1px hairline.
3. Köşeler neredeyse kare (0–3px); butonlar uzun ve ince yazılı (48px, büyük harf, .08em).
4. Grafikler dolgusuz, 1.5px çizgi, en çok üç seri; eksen etiketi küçük mono.
5. Sol kenarda geniş beyaz boşluk var; bölümler 80px ritimle ayrılıyor.

## Görsel imza
- **KPI bloğu:** üstte `1px solid var(--accent)` kural, ortada 64px Fraunces `tabular-nums`, altta 12px mono delta (`↑ %4,2`).
- **Kâğıt tek katman:** hiçbir yüzeyde gölge yok; `--shadow: none`, yüzen katman bile 2px offset çizgiyle ayrılır.
- **Hairline kural:** `1px solid var(--line)`; bölüm başlığı altında tam genişlik, tablo satırları arasında tam genişlik.
- **Boşluk ritmi:** bölümler arası 80px (mobil 48px), grid gutter 32px, kart padding 24px.
- **Grafik dili:** 1.5px çizgi, 1px hairline ızgara, dolgu yok, en çok 3 seri; accent yalnız ana seride.
- **Tipografik kontrast:** serif display (400) + geometrik sans gövde (400/500) + mono etiket; aynı ekranda üç aile, üç iş.
- **Hover dili:** yavaş ve ölçülü — 320ms'de zemin `--surface-2`'e kayar, görsel ölçek `1.030`; gölge eklenmez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#faf7f1` | sayfa zemini (kırık beyaz kâğıt) | kart zemini |
| `--surface` | `#ffffff` | KPI bloğu, kart, tablo | sayfa zemini |
| `--surface-2` | `#f7f3ec` | hover zemini, ikincil şerit | birincil eylem |
| `--ink` | `#171614` | başlık, KPI rakamı, metin | devre dışı |
| `--ink-soft` | `#51544b` | yorum metni, eksen, ikincil | KPI rakamı |
| `--ink-faint` | `#86897e` | yalnız dekoratif: dipnot, kaynak satırı | etkileşimli metin |
| `--accent` | `#2b5c46` | KPI üst kuralı, birincil eylem, odak halkası | dekoratif dolgu |
| `--accent-ink` | `#f6f7f2` | accent üstü metin | gövde metni |
| `--line` | `rgba(23,22,20,.14)` | hairline kural, tablo ayırıcı, kart kenarı | metin rengi |
| `--danger` / `--ok` / `--warn` | `#9c2b21` / `#1f6b45` / `#7a5a12` | negatif / pozitif / dikkat deltası | dekorasyon, marka rengi |

- Ölçülen kontrast (açık): `ink / bg` = **16.91:1** · `ink-soft / bg` = **7.22:1** · `accent-ink / accent` = **7.17:1** · `ink-faint / bg` = **3.33:1** (yalnız dipnot).
- Tek vurgu kuralı: orman yeşili ekran başına tek anlamda — KPI üst kuralı + birincil eylem; pozitif/negatif delta daima `--ok`/`--danger` kullanır.
- Yasak kombinasyon: accent'i KPI zemin dolgusu yapmak; dört KPI'yı dört farklı renge boyamak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces (`--font-display`) | 44px (mobil 30px) | 400 | 1.08 | `--tracking` 0.005em |
| H2 | Fraunces | 26px | 400 | 1.22 | 0.005em |
| H3 | Fraunces | 19px | 400 | 1.3 | 0.005em |
| KPI rakamı | Fraunces | 64px | 400 | 1.0 | -0.01em, tabular |
| Gövde | Jost (`--font-body`) | 16px | 400 | 1.62 | 0 |
| Yorum / küçük | Jost | 14px | 400 | 1.55 | 0 |
| Etiket / mono | IBM Plex Mono (`--font-mono`) | 11px | 500 | 1.3 | 0.14em (büyük harf) |

- Ölçek oranı **1.45** (11 → 16 → 26 → 44); kullanılan basamak sayısı 6: 11/12/14/16/26/44 (+64 KPI).
- Ölçü: `h1 { font-size: clamp(30px, 4.4vw, 44px) }`.
- Gövde metni maksimum satır uzunluğu: **68 ch**; yorum paragrafı 3 satırı geçmez.
- Ağırlık kuralı: serif yalnız 400/500; gövde 400/500. 600+ ve italik yasak (rapor tonu bozulur).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1200px üstü), 8 (768–1199), 4 (390–767) |
| Gutter | 32px (mobil 16px) |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`), bölüm arası 80 |
| Breakpoint davranışı | 1200px: 4 KPI tek satır, yorum 7/5; 768px: 2×2 KPI; 390px: tek kolon, KPI 48px |

- Asimetri kuralı: ekran başına **1** asimetrik bölüm — KPI şeridi 4 eşit kolon, altındaki yorum 7/5 bölünür.
- Bölüm ritmi: art arda en fazla **2** eşit blok; üçüncü blok ya grafik ya alıntı (pull-quote) olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | kâğıt |
| Kart | `--surface` | yok | KPI bloğu, tablo, grafik |
| Yüzen katman | `--surface` + 2px offset çizgi | `none` | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; KPI üstünde ek olarak `1px solid var(--accent)`.
- Derinlik nereden gelir: **hiçbir yerden** — katman ayrımı kural çizgisi ve 80px boşlukla kurulur; gölge eklemek rapor dilini "uygulama"ya çevirir.
- Radius: `--radius` 0px (buton, input, çip), `--radius-lg` 3px (kart, modal); 3px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 24px | `--radius` (0) | 13px/500 Jost, .08em, büyük harf | accent + accent-ink, gölge yok | hover %92 (320ms) · active 1px aşağı · focus 2px halka offset 3px · disabled %45 · loading 3 nokta 900ms |
| Buton (ikincil) | 48px | 0 24px | `--radius` | 13px/500 Jost | şeffaf + `--line` | hover metin altı accent çizgi |
| Input | 48px | 0 | 0 | 16px Jost | şeffaf + alt 1px `--line` | focus alt çizgi 2px accent · error alt çizgi `--danger` · disabled %45 |
| Kart (KPI) | — | 24px | `--radius-lg` | etiket 11px mono / rakam 64px Fraunces / delta 12px mono | surface + üst accent kural | pozitif/negatif delta · dönem değişimi |
| Chip | 22px | 0 8px | `--radius` | 11px/500 mono, .06em | şeffaf + `--line` | seçili: accent zemin |
| Nav | 64px | 0 24px | 0 | 13px Jost büyük harf | bg + alt çizgi | aktif: metin altı 1px accent çizgi |
| Tablo satırı | 44px | 0 8px | 0 | 16px Fraunces ilk sütun / 12px mono sayı | alt 1px `--line` | hover `--surface-2` · seçili ilk sütun accent |
| Modal | — | 32px | `--radius-lg` | başlık 26px Fraunces | surface + 2px offset çizgi | açılış 950ms ease · Esc kapatır · odak tuzağı |
| Toast | 40px | 0 16px | `--radius` | 14px Jost | surface + sol 1px durum çizgi | 6000ms · 2 üst sınır |
| Grafik paleti | — | — | — | eksen 11px mono | accent → ink-soft → warn | en çok 3 seri · dolgu yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — kâğıt zemininde halka nefes alsın diye 3px offset.
- Dokunma hedefi: 48px buton ve 44px tablo satırı zaten ≥ 44px; chip'ler 22px görünür ama 44×44px sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | yok; yalnız ↑↓ ok ve 6px kare işaret |
| Fotoğraf | yok — rapor dilinde görsel yerine tipografi ve kural çizgisi |
| İllüstrasyon | yalnız 1px hairline grafik: çizgi, kolon, sparkline; dolgu yok |
| Doku | yok (`--grain: 0`); kâğıt hissi renkten değil dikey ritimden gelir |
| Logo alanı | Fraunces 16px kelime markası, yanında 1px dikey ayırıcı; çevresinde 24px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | düşük | 44px serif başlık + tek paragraf + 4 KPI şeridi | `shots/01-landing.png` |
| Dashboard | düşük | 4 KPI + 7/5 yorum + dolgusuz çizgi grafik | `shots/02-dashboard.png` |
| Form | düşük | alt çizgili 48px alanlar, tek kolon | — |
| Liste / tablo | düşük | 44px satır, ilk sütun serif, sayılar sağa dayalı | — |
| Boş durum | orta | "dönem seçilmedi" + tek cümle + tek CTA | — |
| Onboarding | yüksek | 3 adım: veri kaynağı → dönem → ilk özet | — |
| Pricing | orta | 3 plan, hairline ayırıcı, sayılar serif | — |
| Giriş / ödeme | çok düşük | tek kolon, 48px alanlar, alt çizgi | — |
| Modal | orta | dönem karşılaştırması, 32px padding | — |
| Bildirim / toast | orta | alt orta, sessiz, sol 1px durum çizgi | — |
| Hata | düşük | "veri gecikmeli" uyarısı + kaynak dipnotu | — |
| Profil / ayar | orta | rapor sıklığı, alıcı listesi; iki kolon | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 950ms | `cubic-bezier(.65,0,.35,1)` | `opacity` + `translateY(30px)`, blok başına 110ms stagger |
| Scroll reveal | 1050ms | `cubic-bezier(.65,0,.35,1)` | `top 78%` tetiği, 36px, `once: true` |
| Basma | 320ms | `cubic-bezier(.65,0,.35,1)` | `translateY(1px)` |
| Hover | 320ms | `cubic-bezier(.65,0,.35,1)` | zemin `--surface-2`, görsel ölçek `1.030` |
| Pin / scrub | kapalı | — | — (rapor sabitlenmez) |
| KPI rakamı | 0ms | — | sayaç yok; rakam tek karede yazılır |

- Ölçülebilir imza: `enter 0.95s / cb(.65,0,.35,1) / 30px / 0.11` · `scroll top 78% / 1.05s / 36px / once:true` · `hover 320ms / 1.030` · `pin kapalı`.
- `prefers-reduced-motion`: tüm süreler 0.01ms; bloklar konumunda görünür, hiçbir öğe kaymaz.
- Bu stile yasak hareket: sayaç yuvarlanması, bounce/overshoot, parallax, sürekli döngü.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#faf7f1` | `#121310` |
| `--bg-2` | `#f3eee5` | `#171913` |
| `--surface` | `#ffffff` | `#1a1c16` |
| `--surface-2` | `#f7f3ec` | `#21251d` |
| `--ink` | `#171614` | `#eeeadf` |
| `--ink-soft` | `#51544b` | `#b3b0a2` |
| `--accent` | `#2b5c46` | `#9dbf8f` |
| `--accent-ink` | `#f6f7f2` | `#101a0e` |

- Ölçülen kontrast (koyu): `ink / bg` = **15.51:1** · `ink-soft / bg` = **8.57:1** · `accent-ink / accent` = **8.74:1** · `ink-faint / bg` = **4.44:1**.
- Koyu modda değişen başka ne var: accent koyu zeminde açık adaçayına döner (`#9dbf8f`); hairline alfası .14 → .16; gölge yine yok (koyuda gölge kâğıt dilini bozar).
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Ekran başına en fazla 4 KPI; her KPI tek cümle yorum + dönem etiketi taşır.
- KPI rakamı 64px Fraunces, `tabular-nums`; delta ↑↓ + renk + yüzde metniyle yazılır.
- Hiçbir yüzeyde gölge yok; ayrım yalnız 1px hairline ve 1px accent kural.
- Bölüm ritmi 80px (mobil 48px), gutter 32px, kart padding 24px.
- Grafik 1.5px çizgi, dolgu yok, en çok 3 seri; eksen 11px mono.
- Her sayının kaynağı `Kaynak:` dipnotunda yazılır.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Kart gölgesi, 3px üstü radius, cam yüzey, gradient.
- Renkli KPI zeminleri; dört KPI'yı dört renge boyamak.
- Pasta grafik, 3B grafik, dolgulu alan grafiği.
- Sayaç/rulo animasyonu, bounce, parallax.
- Kalın serif (700+) veya italik başlık; gradient metin.
- Uydurma veri/dönem; eksik sayı `{{value}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.33:1** (yalnız kaynak dipnotu); etkileşimli metin `--ink` 16.91:1 ve `--ink-soft` 7.22:1.
- Delta anlamı yalnız renge bırakılmaz: ↑/↓ oku + `artış/azalış` kelimesi; seri ayrımı renk dışında çizgi deseniyle de verilir.
- Hareket: yavaş ve tek seferlik; `prefers-reduced-motion` tüm geçişleri 0.01ms'e indirir.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: kâğıt zemininde 2px accent halka 7.17:1; alt çizgili input'ta halka yerine kalınlaşan alt çizgi (2px) kullanılır.

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
| Sayfa "dashboard"a dönüyor | KPI sayısı 4'ü geçmiş, gölge eklenmiş | 4 KPI'da kal, gölgeyi sil, ritmi 80px'e çıkar |
| Rapor "eski" görünüyor | serif 700 + 12px radius + gradient | serif 400, radius 0–3px, gradient yok |
| Sayılar hiyerarşiyi taşımıyor | delta ve KPI aynı puntoda | KPI 64px, delta 12px mono |
| Koyu modda ağırlık kayboluyor | accent koyulaştırılmış | accent'i açık adaçayına çevir, hairline'ı .16 yap |
| Yorum metni okunmuyor | `--ink-faint` etkileşimli metinde | yorum için `--ink-soft` kullan |
| Grafik gürültülü | 3'ten fazla seri, dolgu var | seriyi 2–3'e indir, dolguyu sil |

## Komşu stiller

- **Uyumlu:** `editorial-design` — serif display + ölçü disiplini ortak; uzun rapor metni 03'ten alınır.
- **Uyumlu:** `grand-tourer` — krem zemin + serif + hairline aynı ışık fiziğinde; premium sunum katmanı 41'den.
- **Uyumlu:** `telemetry-grid` — aynı KPI dili; ham metrik ekranı 46, özet ekranı 48 olur.
- **Yasak:** `neo-brutalism` — kalın kontur ve sert gölge rapor otoritesini kırar.
- **Yasak:** `dopamine-ui` — doygun renk ve oyuncu hareket, "karar verme" tonunu bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.edwardtufte.com/tufte/books_vdqi | data-ink oranı, gereksiz ızgara ve mürekkep eleme |
| https://www.nngroup.com/articles/dashboard-design/ | KPI sayısı, özet → detay sırası |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | 48px buton ve 44px tablo satırı hedefi |
| https://fonts.google.com/specimen/Fraunces | optical size ve 400 ağırlıkta display davranışı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Executive KPI (styles/48-executive-kpi/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="executive-kpi"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Fraunces 400) başlık ve KPI rakamında, --font-body (Jost) gövdede,
           --font-mono (IBM Plex Mono) etiket/dipnotta.
Yüzey: tek katman kâğıt — gölge YOK; ayrım 1px --line ve KPI üstünde 1px --accent kural.
Bileşen: "Bileşen reçeteleri" birebir; buton 48px/0px radius, input alt çizgili, tablo satırı 44px.
Izgara: gutter 32px, container 1160px, bölüm ritmi 80px (mobil 48px), 4 KPI tek satır.
Hareket: enter 0.95s cubic-bezier(.65,0,.35,1) 30px / stagger 0.11; scroll top 78% 1.05s 36px once:true;
         hover 320ms scale 1.030; pin yok. prefers-reduced-motion zorunlu, sayaç animasyonu yasak.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gölge, pasta grafik, renkli KPI zemini).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (accent kural, 64px serif KPI, 80px ritim, dolgusuz grafik).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Delta işaret + renk + metinle yazılı; kaynak dipnotu var.
- [ ] 390px genişlikte taşma yok; KPI sayısı 4'ü geçmiyor.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="executive-kpi"] {
  --bg: #faf7f1; --bg-2: #f3eee5;
  --surface: #ffffff; --surface-2: #f7f3ec;
  --ink: #171614; --ink-soft: #51544b; --ink-faint: #86897e;
  --accent: #2b5c46; --accent-ink: #f6f7f2;
  --line: rgba(23,22,20,.14);
  --radius: 0px; --radius-lg: 3px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.005em; --blur: 0px; --grain: 0;
  --danger: #9c2b21; --danger-ink: #ffffff; --ok: #1f6b45; --warn: #7a5a12;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="executive-kpi"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
