# 114 · Eşzamanlı İşbirlikçi

> **Bir cümlede:** Aynı belgede çalışan herkesi canlı imleç, avatar yığını ve uzak seçim vurgusuyla görünür kılan çok kişili çalışma stili.

| | |
|---|---|
| **Hissiyat** | paylaşılan, canlı, sıcak, açık |
| **En iyi** | belge/tahta düzenleme, ürün planlama, eğitimde ortak çalışma, tasarım incelemesi |
| **Kaçın** | tek kişilik finans paneli, gizlilik gerektiren sağlık kaydı, salt-okunur rapor — varlık göstergeleri burada gürültü ve gizlilik riski |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 7.10:1, `ink-faint` 3.59:1) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="multiplayer-presence"]` |
| **Kompozisyon** | `sticky` · `pill` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Eşzamanlı İşbirlikçi, belgenin **kim tarafından** düzenlendiğini sürekli görünür tutar: her katılımcı için 28px avatar, imleç ucunda 12px ad etiketi, uzak seçimde %12 accent zemin + 1px accent çerçeve. Navda `3 kişi düzenliyor` hapı, ortada avatar yığını durur.

Kurucu kararları üç tanedir. Birincisi **varlık (presence) her zaman metinle**: renk tek başına taşıyıcı değil, avatar baş harfi ve ad etiketi zorunlu. İkincisi **tek aktif katman**: yorum ve bahsetme aynı anda iki katman açmaz. Üçüncüsü **sıçramasız düzenleme**: uzak bir düzenleme kartın yüksekliğini değiştirse bile odak kaymaz, yer tutucu kullanılır.

Bedeli: dikkat dağılması. Bu yüzden varlık göstergeleri küçük (28px) ve gölgesizdir; imleç animasyonu yumuşak takip kullanmaz (60ms üstü gecikme yasak) — aksi hâlde okuma ritmi bozulur.

### Ne değildir
- **Kanban Akışı (110) değildir:** 110 iş akışını kolonlarla gösterir, katılımcıyı göstermez; 114'ün birincil bilgisi kimin nerede olduğudur.
- **Zaman Çizelgesi (109) değildir:** 109 zaman eksenlidir ve Archivo Black ile ağır başlık kullanır; 114 Baloo 2 + Nunito ile yumuşak ve kişi odaklıdır.
- **Ses-Öncelikli (106) değildir:** 106 dinleme halkası ve hap kontrollerle tekil odak kurar; 114 çok kişili katman ve avatar yığını taşır.
- **Komut Paleti (108) değildir:** 108 klavye paletidir; 114 farenin/parmağın imleçle konuştuğu bir yüzeydir (klavye erişilebilirliği korunur ama birincil değil).

### Nereden gelir
Gerçek zamanlı ortak düzenleme (Google Docs, Figma) ve CRDT tabanlı çakışmasız birleştirme araştırmalarından gelir. Bugün geri dönüyor çünkü uzaktan çalışma belgeyi tek kişilik nesne olmaktan çıkardı. Klişeye dönmemesi için korunacak detay: **imleç etiketinin gerçek adı göstermesi** ve çevrimdışı katkının kesikli çerçeveyle ayrılması.

### 3 saniyede tanıma testi
1. Navda iç içe geçmiş 28px avatar yığını ve `3 kişi düzenliyor` hapı var.
2. Bir kart %12 accent zemin + 1px accent çerçeveyle "uzak seçim" olarak işaretli.
3. Buton/input hap biçimli (999px), radius 12px kartlarla birlikte.
4. Tipografi yumuşak: Baloo 2 başlık, Nunito gövde — keskin/condensed başlık yok.
5. Zemin kırık beyaz-mor (`#f8f7fc`) ve tek accent mor (`#6d28d9`).

## Görsel imza
- **Avatar yığını:** 28px daire, 2px `--surface` kenar, `-10px` bindirme; en fazla 4 görünür, fazlası `+3`.
- **Canlı imleç:** 2px dikey çubuk + 12px ad etiketi; etiket yalnız adı taşır, renk ikincil.
- **Uzak seçim:** `background: accent %6`, `box-shadow: 0 0 0 1px accent %34`; metin değişmez.
- **Hap kontrol dili:** buton/input 999px, 40px; kart radius 12px, chip 24px hap.
- **Varlık rozeti:** sol üstte 8px accent nokta + 3px halka; metin `DÜZENLİYOR` mono 10px.
- **Hareket imzası:** 630ms `cubic-bezier(.34,1.16,.64,1)`, 9px — hafif yay, ama varlık katmanında değil.
- **Landing hero (QA):** varlık şeritleri: 26px avatar, hap satırlar, `DÜZENLİYOR` canlı altbilgisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f8f7fc` | sayfa zemini (kırık beyaz-mor) | kart zemini |
| `--surface` | `#ffffff` | kart, panel, nav | sayfa zemini |
| `--ink` | `#1b1630` | başlık, gövde, avatar harfi | dekoratif çizgi |
| `--accent` | `#6d28d9` | imleç, uzak seçim, birincil düğme | geniş zemin dolgusu |
| `--line` | `rgba(27,22,48,.14)` | kart kenarı, avatar halkası | metin rengi |

- Ölçülen kontrast: `ink / bg` = **16.36:1** · `ink-soft / bg` = **7.85:1** · `accent-ink / accent` = **7.10:1** · `ink-faint / bg` = **3.59:1** (yalnız mono meta).
- Tek vurgu kuralı: tek accent (`#6d28d9`). Katılımcı kimlikleri accent'in ton varyasyonlarıyla değil, **baş harf + ad** ile ayrışır (renk-only ayrım yasak).
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; beyaz kart üstünde `--ink-faint` gövde metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 (`--font-display`) | 42px (mobil 27px) | 600 | 1.08 | `-.01em` |
| H2 | Baloo 2 | 29px | 600 | 1.18 | `0` |
| H3 | Baloo 2 | 21px | 600 | 1.24 | `0` |
| Gövde | Nunito (`--font-body`) | 16px | 400 | 1.62 | `0` |
| Vurgu / etiket | Nunito 700 / JetBrains Mono (`--font-mono`) | 15px / 11px | 700 / 500 | 1.40 | `.05em` |

- Ölçek oranı: **1.38** — kullanılan basamaklar 11 · 12 · 13 · 16 · 21 · 29 · 42.
- Ölçü önerisi: `h1 { font-size: clamp(27px, 3.4vw, 42px); line-height: 1.08 }`.
- Gövde metni maksimum satır uzunluğu: **58ch** (yorum ve açıklama satırları kısa).
- Ağırlık kuralı: gövde 400, vurgu 700, display 600; 300 ve italik yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1160px (içerik 1112px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1160; 768 altında katılımcı paneli alta iner, avatar yığını navda kalır |

- Asimetri kuralı: içerik 8 kolon + sağda 3 kolonluk canlı katılımcı paneli; ekran başına **1** asimetrik bölünme.
- Bölüm ritmi: art arda en fazla **3** kart; dördüncü blok yorum şeridi olur.
- Avatar yığını ile başlık arası en az 16px; imleç etiketi metnin üstüne binmez (8px pay).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, katılımcı paneli zemini |
| Kart | `--surface` | `0 4px 14px rgba(27,22,48,.10)` | kart, panel, tablo |
| Yüzen katman | `--surface` + `--shadow` | `0 12px 32px rgba(27,22,48,.18)` | yorum dizisi, modal |

- Kenarlık formülü: `1px solid var(--line)`; uzak seçimde ek `0 0 0 1px accent %34`.
- Derinlik nereden gelir: tek yumuşak gölge + renkli seçim çerçevesi. Katılımcı göstergeleri (avatar, imleç) **gölge taşımaz**.
- Radius: `--radius: 12px` (kart içi kontrol, tablo hücresi), `--radius-lg: 20px` (kart, modal); buton/input/avatar 999px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | `0 18px` | 999px | 15px Nunito 700 | accent dolgu, accent-ink metin, gölge yok | hover: accent %90 + ink · active: scale .98 · focus: 2px accent outline + 2px offset · disabled: opacity .45 · loading: 3 nokta, 500ms |
| Buton (ikincil) | 40px | `0 18px` | 999px | 15px Nunito 700 | `--surface` + 1px `--line` | hover: `--surface-2` |
| Input | 40px | `0 16px` | 999px | 15px Nunito | `--surface` + 1px `--line` | focus: accent çerçeve + 3px accent %22 halka · error: `--danger` çerçeve + 13px açıklama · disabled: opacity .45 |
| Kart | içerik | `20px` | 20px | 21px Baloo 2 + 16px gövde | `--surface` + 1px `--line` + `var(--shadow)` | uzak seçim: accent %6 zemin + accent çerçeve · çevrimdışı: kesikli 1px `--line` |
| Chip / badge | 24px | `0 10px` | 999px | 12px Nunito 700 | `--surface-2` + 1px `--line` | accent: accent %14 zemin + accent metin; `3 kişi düzenliyor` bu kalıpta |
| Nav | 56px | `0 24px` | 0 | 17px Baloo 2 600 | `--surface` + alt hairline | ortada avatar yığını, sağda paylaş düğmesi |
| Tablo satırı | 42px | `8px 12px` | — | 14px Nunito, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` · uzak seçim: sol 2px accent şerit |
| Modal / sheet | içerik | `24px` | 20px | 29px Baloo 2 + gövde | `--surface` + 1px `--line` + `0 12px 32px` | yorum dizisi; tek seferde bir katman |
| Toast | 38px | `9px 14px` | 999px | 13px Nunito 700 | `--surface` + solda 20px avatar | `Elif katıldı`, 3800ms, alt-orta |
| Grafik paleti | — | — | — | — | `--accent`, `--ok`, `--warn` | en fazla 3 seri; katkı grafiği 2px çizgi + %12 dolgu |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; hap kontrollerde `offset: 3px` (yuvarlak kenarda 2px kesiliyor).
- Dokunma hedefi: 44×44px — 28px avatar listede 44px satır hedefiyle sarılır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, yuvarlak uç, 20px ızgara; imleç, yorum, @ bahsetme |
| Fotoğraf | yalnız 28px yuvarlak avatar (baş harfli yedek); kahraman fotoğrafı yok |
| İllüstrasyon | yok; imleç ve uzak seçim tek görsel dil |
| Doku | grain yok; canlı seçim zemini doku yerine geçer |
| Logo alanı | Baloo 2 wordmark + iki iç içe avatar halkası, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | örnek belge + üç canlı imleç + tek CTA | `shots/01-landing.png` |
| Dashboard | orta | üç kart, sağda katılımcı paneli, iki uzak seçim | `shots/02-dashboard.png` |
| Form | düşük | hap input'lar, alanın yanında düzenleyen avatarı | — |
| Liste / tablo | düşük | 42px satır, uzak seçimde sol 2px accent | — |
| Boş durum | orta | "Belge boş — birini davet et" + avatar yığını | — |
| Onboarding | yüksek | ekip daveti + ilk ortak düzenleme | — |
| Pricing | orta | ekip planı kartı; koltuk sayısı avatar yığınıyla | — |
| Giriş / ödeme | düşük | hap input + tek CTA, `kim olarak katıldın` etiketi | — |
| Modal | orta | yorum dizisi: avatar + mono zaman + yanıt kutusu | — |
| Bildirim / toast | orta | alt-orta hap, `Elif katıldı` + avatar | — |
| Hata | düşük | çakışma uyarısı: `Bu alanı Selin düzenledi` + sürüm seç | — |
| Profil / ayar | orta | katılımcı listesi, rol seçimi, `çevrimdışı` etiketi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **630ms** | `cubic-bezier(.34,1.16,.64,1)` | `opacity` + `translateY(9px)`; stagger **0.033s** |
| Scroll reveal | **570ms** | aynı eğri | trigger `top 88%`, `translateY(11px)`, `once: false` |
| Pin / scrub | yok | — | pin kapalı (uzak düzenleme sırasında sayfa kaymaz) |
| Basma | **210ms** | aynı eğri | `scale .98` |
| Geçiş / sayfa | 380ms | aynı eğri | opacity + 9px |
| Hover | **210ms** | aynı eğri | görsel ölçek **1.026** |
| Ödül / vurgu | 380ms | aynı eğri | gelen imleç 1 kez belirir, sürekli nabız yok |

- İmza ölçüleri: `enter = 0.63s / cubic-bezier(.34,1.16,.64,1) / 9px / 0.033` · `scroll = top 88% / 0.57s / 11px / once:false` · `pin = false` · `hover = 210ms / 1.026`.
- Bant içi fark: 111'den (0.39s / 7px / 0.048 / top 87%), 112'den (1.28s / 3px / 0.185), 113'ten (0.23s / 3px / 0.024), 115'ten (0.12s / 0px / 0.008) en az yedi parametrede ayrışır. Karşılaştırma örneği 46-telemetry-grid (`0.28s / cubic-bezier(.16,.84,.44,1) / 6px / 0.02`): süre, eğri, offset, stagger, trigger ve hover'da ayrışır (8 parametre); katalogdaki tüm imzalarla en az iki parametre farkı makine kontrolüyle doğrulanır.
- `prefers-reduced-motion`: tüm süreler 0.01ms; imleçler konum atlar, uzak seçim anında belirir, avatar nabzı yok.
- Bu stile yasak hareket: yumuşak takip gecikmesi (60ms üstü), sürekli nabız atan avatar, blur geçişi, canlı düzenlemede kartın zıplaması.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f8f7fc` | `#14101f` |
| `--surface` | `#ffffff` | `#221c33` |
| `--ink` | `#1b1630` | `#f0ecfa` |
| `--accent` | `#6d28d9` | `#b18cff` |
| `--ink-soft` | `#514870` | `#b6adcc` |
| `--line` | `rgba(27,22,48,.14)` | `rgba(240,236,250,.16)` |

- Koyu modda değişen başka ne var: accent açılır (`#b18cff`, 7.33:1) ve dolgu üstü metin koyulaşır (`#150a24`); uzak seçim zemini %6 → %10 (koyu zeminde %6 okunmuyor); gölge görünmez olduğu için kart ayrımı 1px line'a biner.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark` ve `token-block.css` koyu bloğu birebir aynı).

## Zorunlu kurallar
- Her çevrimiçi kişi görünür: 28px avatar + baş harf; yığın en fazla 4, fazlası `+3`.
- Uzak seçim %6 accent zemin + 1px accent çerçeve ile gösterilir; imleç ucunda 12px ad etiketi taşınır.
- Varlık durumu metinle yazılır (`3 kişi düzenliyor`, `DÜZENLİYOR`, `çevrimdışı`); renk tek başına yetmez.
- Aynı anda tek katman: yorum veya bahsetme açıksa ikincisi açılmaz.
- Uzak düzenleme sırasında odak kaymaz: yer tutucu yükseklik kullanılır, canlı zıplama olmaz.
- Çevrimdışı katkı kesikli 1px çerçeve + `çevrimdışı` mono etiketiyle ayrılır.

## Yasaklar
- Avatar olmayan "biri düzenliyor" belirsizliği.
- Renk-only presence (renk + baş harf zorunlu).
- İmleç animasyonunda birikimli yay/overshoot; sürekli nabız.
- Aynı anda iki modal katman.
- Gölgeli avatar/imleç, neon çerçeve, gradyan zemin.
- Serif display ve italik.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `accent-ink / accent` = **7.10:1** (eşik 4.5); `ink-soft / bg` = **7.85:1**; `ink / bg` = **16.36:1**.
- `--ink-faint` (3.59:1) yalnız mono meta satırında (zaman damgası dışı); zaman damgası `--ink-soft`.
- Varlık bilgisi ekran okuyucuya `aria-label="3 kişi düzenliyor: Elif, Mert, Selin"` olarak verilir; canlı imleç `aria-hidden`.
- Yorum/etiket katmanı `Esc` ile kapanır, `Tab` ile erişilebilir (WCAG 1.4.13 uyumu).
- Hareket/parlama hassasiyeti: orta — canlı imleç hareketi `prefers-reduced-motion` ile konum atlamaya döner; nabız tamamen kapanır.
- Odak görünürlüğü: hap kontrollerde 3px offset; beyaz kart üstünde accent outline 2px yeterli.

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
| Kim düzenliyor belirsiz | yalnız renk kullanılmış | avatar + baş harf + ad etiketi ekle |
| Okuma ritmi bozuluyor | çok sayıda canlı imleç | aynı anda en fazla 3 imleç göster, fazlasını `+N` |
| Kartlar zıplıyor | canlı yükseklik değişimi | yer tutucu yükseklik + sıçramasız yerleşim |
| Hap radius kartta da kullanılmış | radius karışmış | buton/input 999px, kart 12/20px |
| Katman üst üste açılıyor | iki state aynı anda true | tek aktif katman kuralı |
| Çevrimdışı katkı kayboluyor | görsel ayrım yok | kesikli çerçeve + `çevrimdışı` etiketi |

## Komşu stiller

- **Uyumlu:** `kanban-flow` — kart/kolon yapısı aynı ton sisteminde; 114 varlık katmanını ekler.
- **Uyumlu:** `timeline-editor` — ortak çalışma zaman ekseninde.
- **Uyumlu:** `utility` — yorum ve görev paneli için yoğun tablo.
- **Yasak:** `dark-academia` — ağır serif ve düşük kontrast canlı imleci okunamaz kılar.
- **Yasak:** `victorian` — süsleme ve ince çerçeve varlık göstergeleriyle çakışır.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Collaborative_real-time_editor | eşzamanlı düzenleme modeli ve gecikme beklentisi |
| https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type | çakışmasız birleştirme, çevrimdışı katkı |
| https://en.wikipedia.org/wiki/Presence_information | katılımcı durumu (çevrimiçi/meşgul/çevrimdışı) |
| https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html | kapanabilir yorum/etiket katmanı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Eşzamanlı İşbirlikçi (styles/114-multiplayer-presence/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="multiplayer-presence"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Baloo 2 42/29/21 (600, -.01em); --font-body Nunito 16px/1.62;
  --font-mono JetBrains Mono 11px etiket (.05em).
Yüzey: --bg kırık beyaz-mor / --surface kart + 1px var(--line) + var(--shadow) 0 4px 14px;
  radius 12px kart içi, 20px kart/modal, buton+input+avatar 999px.
Renk: tek accent #6d28d9; ink/bg 16.36:1, ink-soft/bg 7.85:1, accent-ink/accent 7.10:1,
  ink-faint/bg 3.59:1 (mono meta).
İmza: 28px avatar yığını (-10px bindirme), canlı imleç + 12px ad etiketi, uzak seçim %6 zemin +
  1px accent çerçeve, navda "3 kişi düzenliyor" hapı.
Hareket: enter 630ms cubic-bezier(.34,1.16,.64,1) 9px stagger .033; scroll top 88% 570ms 11px once:false;
  pin yok; hover 210ms görsel 1.026. prefers-reduced-motion zorunlu.
Yasak: renk-only presence, gölgeli avatar/imleç, iki modal katman, imleçte birikimli yay.
Çıktı: bileşen kodu + tek paragraf not (avatar yığınını ve uzak seçimi nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: avatar yığını, canlı imleç, uzak seçim, presence hapı.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 16.36 / 7.85 / 7.10 — hepsi eşik üstü.
- [ ] Varlık bilgisi metinle de veriliyor (renk-only değil).
- [ ] Odak halkası 2px accent + 2–3px offset görünür.
- [ ] 390px'te taşma yok; `prefers-reduced-motion` hareketi durduruyor.

## Token

```css
[data-style="multiplayer-presence"] {
  --bg: #f8f7fc; --bg-2: #eeecf8; --surface: #ffffff; --surface-2: #f4f2fc;
  --ink: #1b1630; --ink-soft: #514870; --ink-faint: #857ea0;
  --accent: #6d28d9; --accent-ink: #ffffff; --line: rgba(27,22,48,.14);
  --radius: 12px; --radius-lg: 20px; --shadow: 0 4px 14px rgba(27,22,48,.10); --shadow-hard: none;
  --font-display: "Baloo 2", "Nunito", system-ui, sans-serif; --font-body: "Nunito", "Inter", system-ui, sans-serif; --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.005em; --blur: 0px; --grain: 0;
  --danger: #b3261e; --danger-ink: #ffffff; --ok: #1c6b46; --warn: #8a5a00;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="multiplayer-presence"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
