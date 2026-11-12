# 138 · AI-native Ajan Arayüzü

> **Bir cümlede:** Denetlenebilir ajan dili: numaralı iz kaydı, onay kapıları ve gerekçe/atıf şeritleriyle her adımı görünür kılan nötr zeminli arayüz.

| | |
|---|---|
| **Hissiyat** | denetlenebilir, sakin, güvenilir, şeffaf |
| **En iyi** | ajan/otomasyon konsolu, kod inceleme asistanı, veri hazırlama hattı, iç araç platformu |
| **Kaçın** | vitrin/landing, oyun, duygusal kampanya — iz kaydı dili heyecan taşımaz |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 7.35:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `kit/tokens.css` → `[data-style="agent-orchestration"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
AI-native Ajan Arayüzü, ajanı **denetlenebilir bir işçi** gibi gösterir: solda numaralı iz rayı (her araç çağrısı bir satır), adımın yanında süre ve sonuç, geri alınamaz eylemlerde 2px accent çerçeveli **onay kapısı**, sonuçların yanında **gerekçe/atıf şeridi** (mono kaynak etiketi). Gösterişi feda eder; karşılığında **güven** kazanır — kullanıcı ne olduğunu, neden olduğunu ve nasıl geri alacağını görür.

Kurucu kararları üç tanedir. Birincisi **iz kaydı zorunludur**: görünmeyen adım yoktur; her satır numaralıdır ve 1px dikey konektörle bağlanır. İkincisi **onay kapısı**: yıkıcı eylem 2px accent çerçeve + gerekçe + etki listesiyle onay ister. Üçüncüsü **nötr zemin + tek accent**: mesh gradyan, cam panel ve glow yok — dikkat yalnız accent'e ve onay kapısına gider.

Bedeli: yoğunluk. Bu yüzden iz kaydı görünür alanda 12 satırla sınırlanır ve adımlar gruplanır (plan → araç çağrıları → sonuç).

### Ne değildir
- **AI-native Mesh (39) değildir** — adaşlık dışında ölçülebilir dört fark vardır:

| Ölçüt | 39 · AI-native Mesh | 138 · Agent Orchestration |
|---|---|---|
| Zemin | koyu nötr `#0b0c10` + mesh gradyan | açık nötr `#f4f5f6`, gradyan yok |
| Yüzey dili | cam panel (`backdrop-filter`) | opak panel + 1px çizgi, cam yok |
| Display ailesi | Geist | Space Mono |
| İmza motif | mesh gradyan + sakin geometri | numaralı iz rayı + onay kapısı + atıf şeridi |

- **Command Palette (108) değildir:** 108 geçici bir arama katmanıdır (44px satır, chalk accent, blur karartma); 138 kalıcı bir konsoldur (iz satırları 36px, indigo accent, blur yok).
- **Log Stream (49) değildir:** 49 okuma amaçlı akan olay satırlarıdır; 138'de her satır bir **eylem** ve kararı vardır (onay, geri alma, atıf).
- **MES (59) değildir:** 59 üretim KPI panosudur; 138 ajan yürütmesinin denetim kaydıdır.

### Nereden gelir
İnsan-döngüde (human-in-the-loop) otomasyon pratiğinden ve yazılım dünyasının denetim kaydı geleneğinden (audit log, CI adımları). Bugün kritik çünkü ajanlar gerçek eylem yapıyor: dosya siliyor, mesaj gönderiyor, para harcıyor. Klişeye dönmemesi için korunacak detay **iz kaydının numaralı olması** ve **onaysız yıkıcı eylem bulunmaması**.

### 3 saniyede tanıma testi
1. Sol tarafta numaralı ray (01, 02, 03) ve dikey 1px konektör var; her satır bir araç çağrısı.
2. Geri alınamaz eylem kutusu 2px accent çerçeveyle ayrılıyor (onay kapısı).
3. Her sonuç satırının yanında mono kaynak etiketi (atıf) duruyor.
4. Zemin nötr açık gri; gradyan, mesh ve cam yok; tek accent indigo.
5. Radius 6px kontrol / 16px kart; hap buton yok.

## Görsel imza
- **Numaralı iz rayı:** kart solunda 27px'te 1px dikey konektör + 24px'te 7px accent nokta; satır numarası mono.
- **Onay kapısı:** 2px `--accent` çerçeve + gerekçe paragrafı + etki listesi (`3 dosya silinecek`).
- **Gerekçe/atıf şeridi:** her sonucun yanında 11px mono etiket (`kaynak: repo/main@a1b2`).
- **Durum metni:** `ÇALIŞIYOR` / `ONAY BEKLİYOR` / `TAMAMLANDI` — chunk accent nokta + metin.
- **Nötr zemin:** `--bg #f4f5f6`, gradyan yok; kart ayrımı 1px çizgi + `0 1px 2px`.
- **Radius disiplini:** 6px kontrol, 16px kart; 16px üstü yasak.
- **Hareket imzası:** 270ms `cubic-bezier(.72,.04,.2,1)`, 1px — iz satırı "düşer", süzülmez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4f5f6` | sayfa zemini (nötr) | kart zemini |
| `--bg-2` | `#eaecee` | ray zemini, ikincil bant | birincil CTA |
| `--surface` | `#ffffff` | kart / iz satırı | sayfa zemini |
| `--surface-2` | `#f7f8f9` | chip, hover satır | onay kapısı zemini |
| `--ink` | `#16181c` | başlık, gövdeler, araç adı | dekoratif çizgi |
| `--ink-soft` | `#4b5158` | açıklama, süre, atıf | başlık |
| `--ink-faint` | `#7c838b` | yalnız konektör ve ayırıcı | iz metni, atıf |
| `--accent` | `#3b3f8f` | onay kapısı, aktif adım, birincil eylem | geniş dekoratif dolgu |
| `--accent-ink` | `#f6f7ff` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(22,24,28,.14)` | kart ve satır kenarlığı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **16.28:1** · `ink-soft / bg` = **7.35:1** · `accent-ink / accent` = **8.57:1** · `ink-faint / bg` = **3.51:1** (yalnız konektör).
- Tek vurgu kuralı: tek accent (indigo). `--danger` (#a8302a), `--ok` (#1f6b3f), `--warn` (#7a5300) yalnız durum metni ve ikonla.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; iz rayı üstünde `--ink-faint` metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Mono (`--font-display`) | 34px (mobil 24px) | 700 | 1.16 | `-.01em` |
| H2 | Space Mono | 24px | 700 | 1.26 | `0` |
| H3 (adım başlığı) | Space Mono | 18px | 700 | 1.32 | `0` |
| Gövde | Inter (`--font-body`) | 14px | 400 | 1.55 | `0` |
| Küçük gövde | Inter | 13px | 400 | 1.5 | `0` |
| Etiket / atıf | IBM Plex Mono (`--font-mono`) | 11px | 400 | 1.4 | `.06em` |

- Ölçek oranı: **1.4** — kullanılan basamaklar 11 · 12 · 13 · 14 · 18 · 24 · 34.
- Ölçü önerisi: `h1 { font-size: clamp(24px, 3.2vw, 34px); line-height: 1.16 }`.
- Gövde satır uzunluğu en fazla **70ch**; gerekçe paragrafı 60ch'te kırılır (okunur argüman).
- Ağırlık kuralı: display 700, gövde 400/600, mono 400. İtalik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (iz kaydı 7, gerekçe/atıf 5) |
| Gutter | 20px |
| Container genişliği | 1240px (içerik 1200px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1240; 768 altında tek kolon, ray 28px'e daralır |

- Asimetri kuralı: ekran başına **1** 7/5 bölünme (iz solda, gerekçe sağda). Simetrik iki kolon yok.
- Bölüm ritmi: art arda en fazla **3** adım grubu (plan → araç → sonuç); dördüncüsü tam genişlik özet bandı olur.
- İz satırı 36px; satır arası 8px; ray iç boşluğu 44px (numara + nokta sığar).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa + ray zemini |
| Kart | `--surface` | `0 1px 2px rgba(22,24,28,.08)` | iz satırı, panel |
| Yüzen katman | `--surface` + 2px accent | `0 8px 24px rgba(22,24,28,.14)` | onay kapısı, modal |

- Kenarlık formülü: `1px solid var(--line)`; onay kapısında `2px solid var(--accent)`.
- Derinlik nereden gelir: **1px çizgi + çok küçük gölge**; derinlik değil okunurluk önceliklidir. Gradyan/glow yok.
- Radius: `--radius: 6px` (buton, input, chip), `--radius-lg: 16px` (kart, modal). Üst sınır 16px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 36px | `0 14px` | 6px | 13px Inter 600 | accent dolgu, accent-ink metin, gölge yok | hover: accent %88 + ink · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .45 · loading: iz kaydına "çalışıyor" satırı (600ms skeleton) |
| Buton (ikincil) | 36px | `0 14px` | 6px | 13px Inter 600 | `--surface` + 1px `--line` | hover: `--surface-2` |
| Input | 38px | `0 12px` | 6px | 14px Inter | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %28 outline · error: `--danger` çerçeve + 12px etiket · disabled: opacity .45 |
| İz satırı (kart) | 36px (satır) | `18px` | 16px | 18px adım + 13px detay | `--surface` + 1px `--line` + 1px gölge | aktif: sol nokta accent dolu · tamamlandı: `--ok` nokta · hata: `--danger` nokta |
| Onay kapısı | içerik | 20px | 16px | 18px adım + gerekçe | 2px accent çerçeve + `0 8px 24px` | bekliyor / onaylandı / reddedildi |
| Chip / badge | 22px | `0 8px` | 6px | 11px mono `.06em` | `--surface-2` + 1px `--line` | accent: accent %12 zemin + accent metin |
| Nav | 50px | `0 20px` | 0 | 14px Inter | `--surface` + alt hairline | sağda ajan durumu (metin + nokta) |
| Atıf şeridi | 20px | `0 6px` | 4px | 11px mono | `--surface-2` + 1px `--line` | kaynak + commit/tarih |
| Modal | içerik | 20px | 16px | 18px adım + gerekçe | 2px accent + `0 8px 24px` | onay iki düğme (onayla / reddet) |
| Toast | 36px | `8px 12px` | 6px | 13px Inter 600 | `--surface` + sol uçta 3px accent | hata: şerit `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 4 seri; araç süreleri çubuk, eksen adım no |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; onay kapısında 2px outline çerçeveye biner → offset 3px.
- Dokunma hedefi: en az 44×44px; 36px buton mobilde `min-height: 44px`; iz satırı zaten 44px hedefe padding ile genişler.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 2px köşe, 20px ızgara; araç/onay/atıf sembolleri |
| Fotoğraf | yok — ajan arayüzünde dekoratif görsel kullanılmaz |
| İllüstrasyon | yok; iz rayı ve onay kapısı imza |
| Doku | grain yok; 1px çizgi ritmi ve numaralı ray |
| Logo alanı | Space Mono wordmark + durum noktası, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | düşük | H1 34px mono + tek CTA + 3 satırlık örnek iz rayı | `shots/01-landing.png` |
| Dashboard | **yüksek** | 7/5: iz kaydı + gerekçe/atıf paneli | `shots/02-dashboard.png` |
| Form | düşük | 38px input, tek kolon; etki özeti altta | — |
| Liste / tablo | orta | 36px satır, adım no + araç + süre kolonları | — |
| Boş durum | orta | "Henüz adım yok" + tek CTA + örnek plan | — |
| Onboarding | yüksek | 3 adım: izinler → ilk görev → onay kuralı | — |
| Pricing | orta | plan tablosu; aylık adım kotası mono | — |
| Giriş / ödeme | çok düşük | iz rayı yok; sade form + tek CTA | — |
| Modal | orta | onay kapısı: gerekçe + etki listesi + iki karar | — |
| Bildirim / toast | orta | alt-sağ, 3px accent şerit + kısa metin | — |
| Hata | orta | satır noktası `--danger` + "geri al" düğmesi | — |
| Profil / ayar | orta | onay politikası, araç izinleri, oturum kaydı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **270ms** | `cubic-bezier(.72,.04,.2,1)` | `opacity` + `translateY(1px)`; stagger **0.013s** |
| Scroll reveal | **290ms** | aynı eğri | trigger `top 61%`, `translateY(6px)`, `once: true` |
| Pin / scrub | yok | — | pin kapalı (iz kaydı kaymaz) |
| Basma | **105ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 210ms | aynı eğri | opacity + 4px |
| Hover | **105ms** | aynı eğri | görsel ölçek **1.001** (kart büyümez, yalnız zemin) |
| Ödül / vurgu | 380ms | aynı eğri | yeni iz satırı rayın altına eklenir (tek kez) |

- İmza ölçüleri: `enter = 0.27s / cubic-bezier(.72,.04,.2,1) / 1px / 0.013` · `scroll = top 61% / 0.29s / 6px / once` · `pin = false` · `hover = 105ms / 1.001`.
- Bant içi fark: 136'dan (0.41s / 11px / pin 0.58), 137'den (0.96s / 38px), 139'dan (1.08s / 46px), 140'tan (0.61s / 21px / pin 0.4) en az dört parametrede ayrışır. Mevcut 126 stil içinde en yakını 108-command-palette (`0.19s / .05,.9,.1,1 / 5px / 0.018`) — süre, eğri, offset, trigger (top 61%), hover ve zemin bandında farklı; `top 61%` katalogda yeni.
- `prefers-reduced-motion`: tüm süreler 0.01ms, iz satırları anında görünür.
- Bu stile yasak hareket: sürekli "düşünüyor" animasyonu (ekran başına ≤1), yay/overshoot, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f4f5f6` | `#101216` |
| `--surface` | `#ffffff` | `#1a1e24` |
| `--ink` | `#16181c` | `#e9ecf0` |
| `--accent` | `#3b3f8f` | `#8e93e8` |
| `--ink-soft` | `#4b5158` | `#a8afb8` |
| `--line` | `rgba(22,24,28,.14)` | `rgba(233,236,240,.16)` |

- Koyu modda değişen başka ne var: gölge yerine 1px çizgi öne çıkar, accent bir ton açılır (`#8e93e8`), ray konektörü %14 → %18 (siyahta görünmesi için).
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Her ajan eylemi iz kaydında numaralı satır olarak görünür (araç + süre + sonuç).
- Geri alınamaz eylem onay kapısından geçer: 2px accent çerçeve + gerekçe + etki listesi.
- Gerekçe/atıf şeridi zorunlu: her sonucun yanında mono kaynak etiketi.
- Tek accent, nötr zemin; mesh gradyan ve cam panel yok.
- Radius 6px kontrol / 16px kart; durum daima metinle.
- İz satırı 36px, görünür alanda en fazla 12 satır.

## Yasaklar
- Mesh gradyan, cam panel, glow (39 ile örtüşür).
- İz kaydı olmadan çalışan "sihirli" adım.
- Onaysız geri alınamaz işlem.
- Çoklu parlak renk, 16px üstü radius.
- Serif display, süs illüstrasyonu.
- Renk-only durum (metin zorunlu).

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **7.35:1** (eşik 4.5); `ink-faint / bg` = **3.51:1** yalnız konektör ve ayırıcıda.
- `--ink-faint` iz metninde ve atıf şeridinde kullanılmaz; atıf `--ink-soft` (7.35:1).
- Hareket/parlama hassasiyeti: düşük — flash yok; sürekli "çalışıyor" animasyonu ekran başına ≤1 ve `prefers-reduced-motion` ile durur.
- Şeffaf yüzey yok; opak fallback gerekmez.
- Odak görünürlüğü: 2px accent outline + 2px offset; onay kapısında 3px offset (2px çerçeveyle çakışmasın).
- İz akışı canlı bölge olarak duyurulur: `aria-live="polite"` + her satırda `aria-label` (adım no, araç, sonuç).
- Sürükleme yok; onay/geri alma klavye ile tam erişilebilir.

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
| "Sihirli kutu" hissi | adımlar görünmüyor | her araç çağrısını iz satırı yap |
| Güven kaybı | onaysız yıkıcı eylem | 2px accent onay kapısı + etki listesi |
| 39 ile karışıyor | mesh gradyan/cam eklenmiş | nötr zemin + opak panel |
| Atıf okunmuyor | `--ink-faint` kullanılmış | `--ink-soft` + 11px mono |
| Ray kayboluyor | konektör 1px ve %8 opaklık | %14 konektör, 7px accent nokta |
| Mobilde sıkışma | ray 44px korunmuş | 768 altı 28px, numara tek satır |

## Komşu stiller

- **Uyumlu:** `command-palette` — aynı klavye-öncelikli dünya; palet komut katmanı olarak.
- **Uyumlu:** `log-stream` — olay akışı okuma paneli.
- **Uyumlu:** `terminal-ui` — teknik alt panel; tek bölümde.
- **Yasak:** `maximalism` — çoklu renk/desen denetim odağını dağıtır.
- **Yasak:** `claymorphism` — yumuşak 3B formlar denetlenebilirlik iddiasıyla çelişir.

| Eksen (5) | 138 · Agent Orchestration | 39 · AI-native Mesh |
|---|---|---|
| Display ailesi | Space Mono 700 | Geist |
| Zemin bandı | açık nötr `#f4f5f6` | koyu `#0b0c10` |
| Accent hue | indigo-slate `#3b3f8f` | indigo `#7c8cff` |
| Radius ölçeği | 6 / 16px | 20 / 28px (39: geniş yüzey) |
| İmza motif / motion | numaralı iz rayı + onay kapısı · 0.27s · top 61% | mesh gradyan · 0.7s · top 82% |

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Human-in-the-loop | onay kapısı ve geri alınabilirlik |
| https://en.wikipedia.org/wiki/AI_agent | araç çağrısı / plan-yürüt modeli |
| https://www.nist.gov/itl/ai-risk-management-framework | denetlenebilirlik ve kayıt zorunluluğu |
| https://www.w3.org/WAI/ARIA/apg/patterns/alert/ | iz akışının ekran okuyucu bildirimi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: AI-native Ajan Arayüzü (styles/138-agent-orchestration/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="agent-orchestration"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg nötr açık gri; gradyan/mesh/cam YOK (39 ile örtüşmemek için).
Tipografi: --font-display Space Mono 34/24/18 (700); --font-body Inter 14px/1.55;
  --font-mono IBM Plex Mono 11px atıf/süre (.06em).
Yüzey: --bg / --surface + 1px var(--line) + 0 1px 2px; onay kapısı 2px var(--accent) + 0 8px 24px.
  Radius 6px kontrol, 16px kart.
Renk: tek accent indigo #3b3f8f; ink/bg 16.28:1, ink-soft/bg 7.35:1, accent-ink/accent 8.57:1, ink-faint/bg 3.51:1 (konektör).
İmza: numaralı iz rayı (27px konektör + 7px accent nokta) + onay kapısı (gerekçe + etki) + atıf şeridi.
Hareket: enter 270ms cubic-bezier(.72,.04,.2,1) 1px stagger .013; scroll top 61% 290ms 6px once;
  pin yok; hover 105ms görsel 1.001. prefers-reduced-motion zorunlu.
Yasak: mesh gradyan, cam/glow, iz kaydı olmayan adım, onaysız yıkıcı eylem, >16px radius, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (iz rayını ve onay kapısını nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: numaralı iz rayı, onay kapısı, atıf şeridi, durum metni.
- [ ] Hard-coded renk/gölge/radius yok; mesh/cam yok.
- [ ] Kontrast: 16.28 / 7.35 / 8.57 — hepsi eşik üstü.
- [ ] Her yıkıcı eylem onay kapısından geçiyor; atıf şeridi var.
- [ ] 390px'te ray 28px, tek kolon, taşma yok.
- [ ] `prefers-reduced-motion` açıkken sürekli animasyon duruyor.

## Token

```css
[data-style="agent-orchestration"] {
  --bg: #f4f5f6; --bg-2: #eaecee;
  --surface: #ffffff; --surface-2: #f7f8f9;
  --ink: #16181c; --ink-soft: #4b5158; --ink-faint: #7c838b;
  --accent: #3b3f8f; --accent-ink: #f6f7ff;
  --line: rgba(22,24,28,.14);
  --radius: 6px; --radius-lg: 16px;
  --shadow: 0 1px 2px rgba(22,24,28,.08); --shadow-hard: none;
  --font-display: "Space Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
  --danger: #a8302a; --danger-ink: #ffffff;
  --ok: #1f6b3f; --warn: #7a5300;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="agent-orchestration"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
