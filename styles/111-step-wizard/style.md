# 111 · Adım Sihirbazı

> **Bir cümlede:** Ekran başına tek karar veren, sol dikey numaralı adım rayı ve altta sabit geri/ileri çubuğu olan çok adımlı form stili.

| | |
|---|---|
| **Hissiyat** | yönlendiren, sakin, sıralı, güvenli |
| **En iyi** | onboarding, kredi/sigorta başvurusu, kurulum sihirbazı, çok adımlı ödeme |
| **Kaçın** | analitik panel, gerçek zamanlı izleme ekranı, serbest metin editörü — tek-karar ritmi burada veri taramasını yavaşlatır |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 7.16:1, accent üstü 7.34:1) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="step-wizard"]` |
| **Kompozisyon** | `centered` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Adım Sihirbazı, uzun bir formu **tek karara indirger**: her ekranda bir soru, en fazla dört seçenek, solda numaralı dikey ray, altta sabit geri/ileri çubuğu. Kullanıcı "kaç adım kaldı" sorusunun cevabını iki yerde birden görür — üstte ince ilerleme çubuğu, navda `2/5` mono sayaç.

Kurucu kararları üç tanedir. Birincisi **tek soru kuralı**: bir adımda ikinci bir karar (eşleşen alan, opsiyonel kutu) yoktur; gerekiyorsa adım bölünür. İkincisi **ray**: sol tarafta numaralı noktalar, tamamlanan adım accent, aktif adım ink, gelecek adım ink-faint; ray her adımda aynı yerde durur ve sayfa yeniden yerleşmez. Üçüncüsü **özet adımı**: son ekran girilen her değeri tek listede gösterir, her satırda `Düzenle` bağlantısı vardır.

Bedeli: ekran başına düşük bilgi yoğunluğu. Bu yüzden sihirbaz, veri okuma işlerinde (tablo, panel) değil, **sıralı karar** işlerinde kullanılır.

### Ne değildir
- **Kanban Akışı (110) değildir:** 110 paralel kolonlarda çok kart gösterir; 111 tek kart ve tek soru gösterir, kart sayısı ekran başına birdir.
- **Ses-Öncelikli (106) değildir:** 106 merkezî bir halka ve hap kontroller kullanır; 111'de radius 10px, merkez yok, ray sol taraftadır.
- **Utility (44) değildir:** 44 yoğun, çok eylemli bir araç yüzeyidir; 111'de ekran başına tek birincil eylem vardır.
- **Akademik Makale (89) değildir:** 89 uzun serif metin akışıdır; 111 gövdeyi 56ch ile sınırlar ve serif kullanmaz (Jost).

### Nereden gelir
Masaüstü kurulum sihirbazlarından (installer) ve kamu hizmeti formlarından gelir: tek seferde tek soru, geri dönüş garantisi, özet ekranı. Bugün geri dönüyor çünkü uzun formların terk oranını düşüren en ucuz müdahale adım bölmektir. Klişeye dönmemesi için korunacak detay: **adım sayacının her zaman görünür olması** ve geri dönüşün veri kaybetmemesi.

### 3 saniyede tanıma testi
1. Solda dikey numaralı ray var (2px çizgi + numaralı noktalar), içerik sağda tek kart.
2. Navda `2/5` biçiminde mono sayaç ve üstte ince ilerleme çubuğu birlikte görünür.
3. Ekranda tek soru var; seçenekler satır satır, her satır 44px yüksekliğinde.
4. Altta tam genişlik, iki düğmeli sabit çubuk durur (geri solda, ileri sağda).
5. Başlıklar Jost 600, gövde Inter; serif ve mono başlık yok.

## Görsel imza
- **Adım rayı:** panelin solunda `2px` dikey çizgi (`--ink` %12) + `22px` numaralı daire; tamamlanan daire accent dolgu.
- **İlerleme:** üstte `4px` yüksekliğinde çubuk, accent dolu kısım; navda `n/toplam` mono sayaç (tabular).
- **Tek soru tipografisi:** `h1` 40px/1.10 Jost 600, `max-width: 22ch`; altında 16px açıklama, en fazla iki satır.
- **Seçenek satırı:** 44px yükseklik, `--radius` 10px, 1px `--line`; seçili durumda accent 1px çerçeve + accent %10 zemin.
- **Sabit alt çubuk:** `56px` yüksekliğinde, `--surface` + üst hairline; ileri düğmesi 44px.
- **Hareket imzası:** 390ms `cubic-bezier(.25,.8,.3,1)`, 7px yukarıdan; adım geçişi tek yönlü.
- **Landing hero (QA):** adım rayı: %66 dolu ilerleme çubuğu, 3 adım satırı, seçili adım accent çerçeve + `adım 2/5` altbilgisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4f6fa` | sayfa zemini (soğuk kağıt) | kart zemini |
| `--surface` | `#ffffff` | adım kartı, input | sayfa zemini |
| `--ink` | `#101828` | başlık, seçenek etiketi | dekoratif çizgi |
| `--accent` | `#3346c9` | ilerleme, seçili seçenek, ileri düğmesi | geniş zemin dolgusu |
| `--line` | `rgba(16,24,40,.14)` | kart kenarı, ray çizgisi | metin rengi |

- Ölçülen kontrast: `ink / bg` = **16.40:1** · `ink-soft / bg` = **7.16:1** · `accent-ink / accent` = **7.34:1** · `ink-faint / bg` = **3.35:1** (yalnız dekoratif ray/etiket).
- Tek vurgu kuralı: yalnız tek accent (`#3346c9`). `--ok`, `--warn`, `--danger` durum metni ve 6px nokta olarak kullanılır, dolgu olmaz.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--surface-2` üstünde `--ink-faint` seçenek etiketi.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Jost (`--font-display`) | 40px (mobil 26px) | 600 | 1.10 | `-.01em` |
| H2 | Jost | 28px | 600 | 1.16 | `0` |
| H3 | Jost | 20px | 600 | 1.26 | `0` |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.60 | `0` |
| Etiket / mono | JetBrains Mono (`--font-mono`) | 11px | 500 | 1.40 | `.04em` |

- Ölçek oranı: **1.30** — kullanılan basamaklar 11 · 12 · 13 · 15 · 20 · 28 · 40 (en fazla 6 basamak kuralına uyulur).
- Ölçü önerisi: `h1 { font-size: clamp(26px, 3.4vw, 40px); line-height: 1.1 }`.
- Gövde metni maksimum satır uzunluğu: **56ch** (açıklama), kart içi ölçü 64ch.
- Ağırlık kuralı: 400 ve 600 var; 300 ve italik yasak. Sayaç ve adım numarası mono 500.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1120px (içerik 1072px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1120; 768 altında ray yatay şeride döner (5 nokta), kart tek kolon |

- Asimetri kuralı: içerik 7 kolon + sağda 4 kolonluk özet rayı; ekran başına **1** asimetrik bölünme.
- Bölüm ritmi: art arda en fazla **2** kart; üçüncü blok tam genişlik özet satırı olur.
- Sabit alt çubuk için sayfa altında 56px + 24px güvenli boşluk bırakılır.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, ray zemini |
| Kart | `--surface` | `0 2px 6px rgba(16,24,40,.08)` | adım kartı, seçenek listesi |
| Yüzen katman | `--surface` + `--shadow` | `0 12px 32px rgba(16,24,40,.16)` | özet onayı, modal |

- Kenarlık formülü: `1px solid var(--line)`; seçili seçenekte `1px solid var(--accent)`.
- Derinlik nereden gelir: **tek yumuşak gölge** + 1px line. Sert/ofset gölge ve iç gölge yok.
- Radius: `--radius: 10px` (input, düğme, seçenek satırı), `--radius-lg: 18px` (kart, modal); chip 999px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | `0 20px` | `var(--radius)` | 14px Inter 600 | accent dolgu, accent-ink metin, gölge yok | hover: accent %90 + ink · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .45 + `aria-disabled` · loading: 3 nokta, 600ms |
| Buton (ikincil) | 44px | `0 20px` | `var(--radius)` | 14px Inter 600 | `--surface` + 1px `--line` | hover: `--surface-2` |
| Input | 44px | `0 14px` | `var(--radius)` | 15px Inter | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %28 outline · error: `--danger` çerçeve + 13px açıklama · disabled: opacity .45 |
| Kart | içerik | `24px` | `18px` | 28px H1 + 16px gövde | `--surface` + 1px `--line` + `var(--shadow)` | tamamlanan adımda sol ray noktası accent |
| Chip / badge | 24px | `0 10px` | 999px | 11px Inter 600 | `--surface-2` + 1px `--line` | accent: accent %10 zemin + accent metin |
| Nav | 56px | `0 24px` | 0 | 14px Inter 600 | `--surface` + alt hairline | aktif: accent metin + `2/5` mono sayaç |
| Tablo satırı | 44px | `8px 14px` | — | 14px Inter, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / sheet | içerik | `24px` | `18px` | 28px Jost + gövde | `--surface` + 1px `--line` + `0 12px 32px` | açılış: 7px yukarıdan, 390ms |
| Toast | 40px | `10px 14px` | `var(--radius)` | 13px Inter 500 | `--surface` + sol uçta 6px accent nokta | `Taslak kaydedildi` + geri alma bağlantısı, 4000ms |
| Grafik paleti | — | — | — | — | `--accent`, `--ok`, `--warn` | sihirbaz içinde grafik yok; özette tek ilerleme çubuğu |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — seçenek satırında `outline-offset: 0` (satır tam genişlik).
- Dokunma hedefi: 44×44px; seçenek satırında görsel radio 20px ama etiket + satır tamamı hedef (44px × tam genişlik).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 2px köşe, 20px ızgara; yalnız onay (tik) ve geri oku |
| Fotoğraf | yok — sihirbazda fotoğraf kararı yavaşlatır |
| İllüstrasyon | yok; ray ve numaralar tek görsel dil |
| Doku | grain yok; zemin düz, ayrım kenarlıkla |
| Logo alanı | Jost 600 küçük harf wordmark + 8px ilerleme noktası, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | "3 adımda başvuru" + tek başla düğmesi + adım önizlemesi | `shots/01-landing.png` |
| Dashboard | çok düşük | sihirbaz durumu: `2/5 tamamlandı` + tek devam düğmesi | `shots/02-dashboard.png` |
| Form | düşük | tek soru + en fazla 4 seçenek; hata alan altında | — |
| Liste / tablo | düşük | başvuru listesi: 44px satır, sağda adım etiketi | — |
| Boş durum | orta | "Henüz başvuru yok" + ilk adım CTA'sı | — |
| Onboarding | yüksek | sihirbazın kendisi: 5 adım, ray + ilerleme | — |
| Pricing | düşük | iki plan kartı; seçim tek radyo satırı | — |
| Giriş / ödeme | çok düşük | sadece kimlik alanı + ileri; süs yok | — |
| Modal | orta | özet onayı: madde listesi + geri/onayla | — |
| Bildirim / toast | orta | alt-sol, "taslak kaydedildi", geri alma | — |
| Hata | düşük | hata yalnız ilgili alanın altında, adım bloke olmaz | — |
| Profil / ayar | orta | hesap ayarları sekmeli, aynı tek-kart ritmi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **390ms** | `cubic-bezier(.25,.8,.3,1)` | `opacity` + `translateY(7px)`; stagger **0.048s** |
| Scroll reveal | **410ms** | aynı eğri | trigger `top 87%`, `translateY(9px)`, `once: true` |
| Pin / scrub | yok | — | pin kapalı (ray sabit, kaymaz) |
| Basma | **150ms** | aynı eğri | `translateY(1px)` |
| Geçiş / adım | **240ms** | aynı eğri | opacity + 7px; çıkış 150ms |
| Hover | **145ms** | aynı eğri | görsel ölçek **1.008** (seçenek satırı büyümez, yalnız çerçeve) |
| Ödül / vurgu | 390ms | aynı eğri | ilerleme çubuğu dolar, tek kez |

- İmza ölçüleri: `enter = 0.39s / cubic-bezier(.25,.8,.3,1) / 7px / 0.048` · `scroll = top 87% / 0.41s / 9px / once` · `pin = false` · `hover = 145ms / 1.008`.
- Bant içi fark: 112'den (1.28s / 3px / 0.185 / top 64%), 113'ten (0.23s / 3px / 0.024), 114'ten (0.63s / 9px / 0.033), 115'ten (0.12s / 0px / 0.008) en az dört parametrede ayrışır. Karşılaştırma örneği 16-memphis (`0.3s / cubic-bezier(.34,1.6,.64,1) / 14px / 0.04`): 8 parametrede ayrışır; katalogdaki tüm imzalarla en az iki parametre farkı makine kontrolüyle doğrulanır.
- `prefers-reduced-motion`: tüm süreler 0.01ms; adım geçişi anında olur, ilerleme çubuğu animasyonsuz dolar.
- Bu stile yasak hareket: yatay kaydırmalı adım geçişi (swipe-only), tam sayfa yeniden belirme, blur geçişi, sürekli nabız.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f4f6fa` | `#0c1120` |
| `--surface` | `#ffffff` | `#172033` |
| `--ink` | `#101828` | `#eef2fa` |
| `--accent` | `#3346c9` | `#8fa3ff` |
| `--ink-soft` | `#46536b` | `#aeb9cd` |
| `--line` | `rgba(16,24,40,.14)` | `rgba(238,242,250,.16)` |

- Koyu modda değişen başka ne var: gölge görünmez olduğu için kart ayrımı 1px line + `--surface` ton farkına biner; accent bir ton açılır (kontrast 7.96:1), seçili seçenek zemini accent %14'e çıkar.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark` ve `token-block.css` koyu bloğu birebir aynı).

## Zorunlu kurallar
- Ekran başına tek soru ve en fazla 4 seçenek; ikinci karar aynı ekrana sığdırılmaz.
- İlerleme iki yerde: üst çubuk + navda `n/toplam` mono sayaç; ikisi her adımda aynı değeri gösterir.
- Geri dönüş veri kaybettirmez; geri düğmesi her adımda görünür (ilk adım hariç).
- Seçenek satırı tamamı tıklanabilir, en az 44px yüksekliğinde.
- Özet adımı zorunlu: tüm değerler tek listede, satır başına `Düzenle` bağlantısı.
- Adım rayı numaralı ve durum üç tonla ayrılır (accent / ink / ink-faint) + metin etiketi.

## Yasaklar
- Aynı ekranda iki soru veya ikinci bir birincil eylem.
- Adım sayısını gizlemek veya "sonsuz" ilerleme göstermek.
- İkinci parlak renk, gradyan zemin, neon, cam/blur.
- Sert/ofset gölge (`--shadow-hard` kullanılmaz).
- Otomatik ilerleme: kullanıcı onaylamadan sonraki adıma geçmek.
- 44px altı dokunma hedefi; yalnız ikonla anlatılan seçenek.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **7.16:1** (eşik 4.5); `ink / bg` = **16.40:1**; `accent-ink / accent` = **7.34:1**.
- `--ink-faint` (3.35:1) yalnız gelecek adım noktası ve dekoratif etikette; etkileşimli metinde kullanılmaz.
- Adım değişimi `aria-live="polite"` ile duyurulur: "Adım 2 / 5, İletişim bilgileri".
- Hata: `aria-invalid` + `aria-describedby`; hata metni alanın altında ve renk dışında metinle de verilir.
- Hareket/parlama hassasiyeti: düşük — `prefers-reduced-motion` adım geçişini ve ilerleme dolgusunu durdurur.
- Odak görünürlüğü: 2px accent outline + 2px offset; beyaz kart üstünde 2px yeterli, `--bg` üstünde offset 3px'e çıkar.

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
| Ekran "uzun form" gibi | bir adımda 2+ soru var | adımı böl, tek karar bırak |
| Kullanıcı nerede olduğunu bilmiyor | sayaç yok, yalnız çubuk var | navda `n/toplam` mono yaz |
| Geri dönünce veri kayboluyor | adım durumu saklanmıyor | adım state'ini akış boyunca tut |
| Seçenekler tıklanmıyor | yalnız radio hedef | etiket + satırın tamamını `<label>` yap |
| Kart zemini "kirli" | gölge + ikinci ton | tek yumuşak gölge, `--surface` beyaz |
| Ray sayfayla birlikte kayıyor | ray absolute değil | rayı kart kolonuna sabitle |

## Komşu stiller

- **Uyumlu:** `utility` — sihirbazın son adımında yoğun özet tablosu için.
- **Uyumlu:** `kanban-flow` — başvuruların durum takibi aynı ton sisteminde.
- **Uyumlu:** `product-catalog` — ürün seçimi adımında kart ızgarası.
- **Yasak:** `maximalism` — çoklu renk ve katman tek-karar ritmini boğar.
- **Yasak:** `acid-graphics` — yüksek kontrastlı grafikler adım odağını böler.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Wizard_(software) | adım kavramı, geri dönüş ve iptal beklentisi |
| https://design-system.service.gov.uk/patterns/question-pages/ | sayfa başına tek soru kuralı |
| https://design-system.service.gov.uk/patterns/check-answers/ | özet adımı ve satır bazlı düzenleme |
| https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html | hata metninin alanın altında verilmesi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Adım Sihirbazı (styles/111-step-wizard/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="step-wizard"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Jost 40/28/20 (600, -.01em); --font-body Inter 15px/1.6;
  --font-mono JetBrains Mono 11px sayaç ve adım numarası (.04em).
Yüzey: --bg / --surface + 1px var(--line) + var(--shadow) 0 2px 6px; modal 0 12px 32px.
  Radius --radius 10px (kontrol), --radius-lg 18px (kart), chip 999px.
Renk: tek accent #3346c9; ink/bg 16.40:1, ink-soft/bg 7.16:1, accent-ink/accent 7.34:1,
  ink-faint/bg 3.35:1 (dekoratif).
İmza: solda 2px dikey ray + 22px numaralı daire; navda "2/5" mono sayaç; üstte 4px ilerleme çubuğu;
  altta 56px sabit geri/ileri çubuğu.
Hareket: enter 390ms cubic-bezier(.25,.8,.3,1) 7px stagger .048; scroll top 87% 410ms 9px once;
  pin yok; hover 145ms görsel 1.008. prefers-reduced-motion zorunlu.
Yasak: aynı ekranda 2 soru, ikinci parlak renk, sert gölge, otomatik ilerleme, 44px altı hedef.
Çıktı: bileşen kodu + tek paragraf not (rayı ve sayacı nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: dikey ray, `n/5` sayaç, ilerleme çubuğu, sabit alt çubuk.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 16.40 / 7.16 / 7.34 — hepsi eşik üstü.
- [ ] Ekranda tek soru; seçenek satırı ≥44px.
- [ ] Odak halkası 2px accent + 2px offset görünür.
- [ ] 390px'te taşma yok; ray yatay şeride dönüyor; `prefers-reduced-motion` hareketi durduruyor.

## Token

```css
[data-style="step-wizard"] {
  --bg: #f4f6fa; --bg-2: #e9eef7; --surface: #ffffff; --surface-2: #f7f9fd;
  --ink: #101828; --ink-soft: #46536b; --ink-faint: #7b879c;
  --accent: #3346c9; --accent-ink: #ffffff; --line: rgba(16,24,40,.14);
  --radius: 10px; --radius-lg: 18px; --shadow: 0 2px 6px rgba(16,24,40,.08); --shadow-hard: none;
  --font-display: "Jost", "Inter", system-ui, sans-serif; --font-body: "Inter", system-ui, sans-serif; --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: 0;
  --danger: #b3261e; --danger-ink: #ffffff; --ok: #1c6b46; --warn: #8a5a00;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="step-wizard"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
