# 151 · Dark Dashboard

> **Bir cümlede:** Kontrol odası: grafit zemin, 1px çizgi ızgara, cyan yalnız veride ve 0.48s hızlı giriş — süs değil, ölçüm okunur.

| | |
|---|---|
| **Hissiyat** | kesin · sakin · yoğun · güvenilir |
| **En iyi** | SaaS ürün paneli, altyapı/gözlemleme konsolu, finans operasyon ekranı, iç araç (admin) |
| **Kaçın** | Duygusal marka sayfası, kampanya/lansman vitrini, uzun-form okuma |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (cyan küçük puntoda ve dolgu üstünde zayıflar) |
| **Aile** | Sahne & Prestij (146–151) · **Token** | `kit/tokens.css` → `[data-style="dark-dashboard"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Dark Dashboard, bir kontrol odasının okunabilirlik hiyerarşisini kurar: grafit zemin (#0b0d10), 1px çizgi ızgara, 8px/14px radius ve yalnız veride görünen cyan (#58c8ff). Ekranın işi etkilemek değil, ölçmek: satır yüksekliği 44px, sayılar tabular, kolon başlıkları 10px mono.

Tipografi iki aileye indirgenir: Michroma yalnız başlık ve büyük KPI rakamlarında (geniş, teknolojik ama sınırlı dozda), Inter gövde ve etiketlerde, JetBrains Mono sayı ve kimliklerde. Michroma ekranın tamamına yayılırsa okuma hızı düşer, bu yüzden H2'den aşağıda kullanılmaz.

Renk disiplini kural: cyan eylem/veri bildirir, kırmızı-turuncu yalnız uyarı, yeşil yalnız sağlıklı durum. Yüzeylerde gölge yok; ayrım 1px `--line` ve `--surface` tonu. Yoğunluk bilinçli olarak yüksek (`dense`): amaç ekran başına daha fazla bilgi, daha az süs.

En hızlı aile üyesi: giriş 0.48s `blur-in`, 16px, 30ms kademe; scroll `reveal` 0.44s. Yoğun ekranda uzun animasyon okumayı geciktirir. Pin yok; hover 140ms ve 1.01 — neredeyse anlık, çünkü tabloda gezinme hızı önemlidir.

### Ne değildir

- Product Launch (148) değildir: orada tek sahne ve spotlight; burada ızgara ve tablo.
- Terminal UI (44) değildir: monospace gövde ve tarama çizgisi yok; gövde Inter.
- Telemetry Grid (47) değildir: o stil grafik-ağırlıklıdır; burada tablo ve KPI dengesi var.
- Glassmorphism (08) değildir: blur yalnız sticky başlıkta ve tek katman.
- Noir Estate (146) değildir: sıcak altın + serif yerine soğuk cyan + geniş sans.

### Nereden gelir

Kök, veri merkezi ve gözlemleme konsollarıdır: 1px ızgara, sabit satır yüksekliği, sağa hizalı tabular sayılar, durum renkleri. Bugün işe yaramasının nedeni, koyu zeminin parlaklık farkını azaltıp uzun vardiyalarda göz yorgunluğunu düşürmesi; cyan ise mavi-yeşil aralığında olduğu için kırmızı/yeşil durum kodlarıyla karışmaz.

### 3 saniyede tanıma testi

1. Zemin grafit (#0b0d10), yüzey #12161a; cyan yalnız veri/eylemde.
2. Satır yüksekliği 44px, kolon başlığı 10px mono `+0.16em` büyük harf.
3. KPI rakamı 34px Michroma, `-0.01em`; birim 10px mono altında.
4. Radius 8px (kontrol) / 14px (kart); gölge yok, 1px çizgi.
5. Sol ray (sidebar) 240px, aktif öğede 2px cyan şerit.

## Görsel imza

- Sidebar: 240px, `--bg-2`, 1px sağ çizgi; aktif öğede 2px cyan sol şerit + `--surface-2` zemin.
- KPI kartı: 34px Michroma rakam + 10px mono birim + 1px `--line`; trend oku yalnız ok ikonu + renk.
- Tablo: 44px satır, zebra yok, hover `--surface-2`; sayılar sağa hizalı tabular.
- Grafik: 2px cyan çizgi, alan %10 cyan dolgu, ızgara 1px `--line` ve yalnız yatay.
- Durum noktası: 6px daire + metin etiketi (sağlıklı/uyarı/kritik) — renk tek başına anlam taşımaz.
- Sticky başlık: 56px, `--bg` %88 + blur 8px; tek cam katman.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0b0d10` | sayfa zemini (grafit) | kart yüzeyi olarak (surface vardır) |
| `--bg-2` | `#07090b` | sidebar, gezinme, footer bandı | kart yüzeyi |
| `--surface` | `#12161a` | kart, panel, tablo kabı | sayfa zemini |
| `--surface-2` | `#1a2026` | hover satırı, seçili öğe, ikincil buton | büyük yüzey dolgusu |
| `--ink` | `#e9eef4` | başlık, gövde, sayılar | dekoratif alan |
| `--ink-soft` | `#a9b6c2` | ikincil metin, kolon açıklaması | 11px altı etiket |
| `--ink-faint` | `#75818d` | birim, zaman damgası, eksen etiketi | gövde metni |
| `--accent` | `#58c8ff` | aktif öğe, birincil buton, seri-1, odak | gövde metni, geniş zemin, dekoratif çizgi |
| `--accent-ink` | `#04141f` | cyan dolgu üstündeki metin (koyu) | cyan olmayan zeminde |
| `--line` | `rgba(233,238,244,.12)` | 1px ızgara, tablo ayırıcı, kart çerçevesi | 2px ve üstü kural |

- Ölçülen kontrast (`kit/color.mjs`): `ink/bg` **16.68:1** · `ink-soft/bg` **9.41:1** · `accent-ink/accent` **9.88:1** · `ink-faint/bg` **4.89:1** · accent metin olarak bg'ye **10.30:1** · APCA Lc **96**.
- Tek veri vurgusu: cyan yalnız "şu an önemli olan" bilgiyi işaretler; ikinci bir vurgu rengi (mor, turkuaz) eklenmez. Durum renkleri (ok/warn/danger) yalnız durum içindir, dekorasyon değildir.
- Yasak kombinasyon: cyan üstüne beyaz metin, mor-mavi gradient, üçüncü bir vurgu rengi, neon glow

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Michroma | 34px (mobil 24px) | 400 | 1.15 | -.01em |
| H2 | Michroma | 26px | 400 | 1.22 | 0 |
| H3 | Michroma | 20px | 400 | 1.22 | 0 |
| Gövde | Inter | 14px | 400 | 1.55 | 0 |
| Küçük | Inter | 13px | 400 | 1.55 | 0 |
| Etiket / mono | JetBrains Mono | 10px | 400 | 1.4 | .16em |

- Ölçek: 1.3 oranı (10 · 12 · 14 · 16 · 20 · 26 · 34); yoğun ekranda 6 basamak yeter.
- Ölçü: 72ch; `h1 { font-size: clamp(24px, 4vw, 34px) }`.
- Yasak: Michroma gövde metninde (geniş harf, okuma hızı düşer) · Michroma 400 dışı ağırlık (aile tek ağırlık) · 12px altı gövde · Cyan üstüne beyaz metin · İtalik.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1440px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 56px (mobil 32px) |
| Kart içi | 16px |
| Breakpoint | sm 390 / md 768 / lg 1200px |
| Asimetri | uygulama kabuğu simetrik (240px ray + esnek içerik); pazarlama bölümünde 1 asimetrik blok. |

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, sidebar |
| Kart | `--surface` | none | KPI, panel, tablo kabı |
| Yüzen katman | `--surface` + `--blur` | `--shadow` | modal, açılır menü, sticky başlık |
| Veri vurgusu | `--accent` | none | aktif seri, aktif öğe, odak halkası |

Kartlarda gölge yok: ayrım 1px çizgi ve yüzey tonu. Gölge yalnız yüzen katmanda; veri vurgusu renk + 1px çerçeve ile yapılır, glow ile değil.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge |
|---|---|---|---|---|---|
| Buton (birincil) | 40px | 8px 16px | var(--radius) | 13px/600 Inter, .02em, cümle düzeni | var(--accent) var(--accent-ink) |
| Buton (ikincil) | 40px | 8px 14px | var(--radius) | 13px/600 Inter, .02em, cümle düzeni | var(--surface-2) / var(--ink) |
| Input | 40px | 0 12px | var(--radius) | 14px/400 Inter | var(--bg-2) + 1px solid var(--line) |
| Kart | — | 16px | var(--radius-lg) | 14px Inter | var(--surface) / 1px solid var(--line) |
| Chip / badge | 22px | 0 8px | var(--radius) | 10px/400 JetBrains Mono, .14em, büyük harf | var(--surface-2) / 1px solid var(--line) |
| Nav | 56px | 0 20px | — | 10px mono .16em | color-mix(in srgb, var(--bg) 88%, transparent) + blur(8px) / 1px solid var(--line) |
| Tablo satırı | 44px | 6px 12px | — | 14px Inter | alt 1px var(--line) |
| Modal / sheet | — | 20px | var(--radius-lg) | Michroma 400 | 1px solid var(--line) + var(--shadow) |
| Toast | 40px | 10px 12px | var(--radius) | 12px/400 JetBrains Mono | sol 3px cyan şerit; sağ alt, üst üste 3 |

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, yuvarlak uç; ölçüm, filtre, uyarı temaları |
| Fotoğraf | yok (ürün ekranı görselin yerini alır); yalnız pazarlama bölümünde 1 kare |
| İllüstrasyon | yok — grafik ve tablo yeter |
| Logo | Michroma 14px sözcük logosu, `.12em`, büyük harf |
| Doku | grain `.01` yalnız zemin; glow yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | split hero: solda başlık + tek CTA, sağda panel önizlemesi (mini tablo + grafik) | `shots/01-landing.png` |
| Dashboard | yüksek | 4 KPI + 2 grafik + 8 satırlık tablo; sol ray 240px | `shots/02-dashboard.png` |
| Form / ayar | orta | iki kolon etiket-alan, 40px alan, cyan odak; hata 1px `--danger` + 11px açıklama | — |
| Liste / tablo | yüksek | 44px satır, sağa hizalı sayı, durum noktası + etiket | — |
| Boş durum | düşük | "bu filtrede kayıt yok" + filtre temizle | — |
| Onboarding | orta | 3 adım: veri kaynağı → ekip → uyarı kanalı | — |
| Pricing | orta | üç plan; öne çıkanda 1px cyan çerçeve | — |
| Giriş / ödeme | düşük | tek kart, SSO seçenekleri, 40px alan | — |
| Modal | orta | 14px radius, `--shadow`, 1px `--line`; kapatma 40×40px | — |
| Bildirim | orta | 40px toast, sol 3px cyan şerit, 3.2s | — |
| Mobil (390px) | orta | sidebar alt tabbar'a döner, tablo 2 kolona iner, dokunma hedefi 44px | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (blur-in) | 0.48s | `cubic-bezier(.25,.6,.2,1)` | `opacity` + `translateY(16px)`, 0.03 arayla |
| Scroll reveal | 0.44s, `top 88%` | aynı | `translateY(12px)`, `once: true` |
| Pin / scrub | kapalı | doğrusal | bu stil sabit bölüm kullanmaz |
| Basma | 100ms | aynı | `translateY(1px)` |
| Hover (görsel) | 140ms | aynı | `scale(1.01)` |

- Ölçülen imza: enter **0.48s · cubic-bezier(.25,.6,.2,1) · 16px · stagger 0.03**; scroll **top 88% · 0.44s · 12px · once**; pin **yok**; hover **140ms · 1.01**.
- undefined
- `prefers-reduced-motion`: opacity.
- Bu stile yasak hareket: bounce/elastik yay, sonsuz döngü (nabız animasyonu), hover tilt-3d, skeleton shimmer.

## Koyu mod

| Token | Açık (kontrol odası) | Koyu (gece vardiyası) |
|---|---|---|
| `--bg` | `#0b0d10` | `#06080a` |
| `--bg-2` | `#07090b` | `#040506` |
| `--surface` | `#12161a` | `#0d1014` |
| `--surface-2` | `#1a2026` | `#151a20` |
| `--ink` | `#e9eef4` | `#f0f5fa` |
| `--ink-soft` | `#a9b6c2` | `#b6c2ce` |
| `--ink-faint` | `#75818d` | `#818d99` |
| `--accent` | `#58c8ff` | `#7ad6ff` |
| `--accent-ink` | `#04141f` | `#04141f` |
| `--line` | `rgba(233,238,244,.12)` | `rgba(240,245,250,.14)` |

- Ölçülen koyu kontrastlar: `ink/bg` **18.29:1** · `ink-soft/bg` **11.08:1** · `accent-ink/accent` **11.46:1** · `ink-faint/bg` **5.93:1** · odak halkası yüzey üzerinde **11.70:1**.
- Koyu blok gece vardiyası için bir kademe daha derin: zemin #06080a, yüzey #0d1014, cyan #7ad6ff (parlaklık +1 kademe). Amaç siyah değil, düşük parlaklıkta uzun süreli okuma.
- `filter: invert()` yasak; koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="dark-dashboard"]` olarak durur.

## Zorunlu kurallar
- Sidebar 240px, aktif öğede 2px cyan şerit.
- Tablo satırı 44px, sayılar sağa hizalı tabular, zebra yok.
- Cyan yalnız aktif/eylem/seri-1; durum renkleri ayrı ve metinle.
- Kart radius 14px, gölge yok, 1px çerçeve.
- Michroma yalnız H1/H2 ve KPI rakamı; gövde Inter 14px.
- Sticky başlık tek cam katman: %88 zemin + blur 8px.

## Yasaklar
- Gövde metninde monospace veya Michroma
- Cyan üstüne beyaz metin, neon glow
- Zebra tablo + renkli satır arka planı
- Kartlarda gölge, 14px üstü radius
- Skeleton shimmer / nabız animasyonu
- Durumu yalnız renkle bildirmek

## Erişilebilirlik
- Gövde `ink/bg` **16.68:1** (≥ 4.5), `ink-soft/bg` **9.41:1**, `accent-ink/accent` **9.88:1**.
- APCA Lc **96** (≥ 45 gövde metni).
- `--ink-faint` **4.89:1** — yalnız etiket/dekor; gövde metni olarak kullanılmaz.
- Odak halkası: `--accent` hem bg (**10.30:1**) hem surface (**9.62:1**) üzerinde ≥ 3:1; 2px halka + 2px offset.
- Cyan dolgulu butonda metin `--accent-ink` (#04141f): 9.88:1; beyaz metin (1.7:1) yasak.
- Cyan metin olarak zeminde 10.30:1 — küçük puntoda da geçerli, ancak 10px etikette kullanılmaz.
- Durum yalnız renkle verilmez: 6px nokta + metin etiketi (sağlıklı/uyarı/kritik).
- Odak halkası 2px `--accent` + 2px offset; tablo satırında halka satırın tamamını çevreler.
- 390px'te tablo 4 kolona iner, sayı kolonu sağda kalır; yatay taşma yok.

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
| "Terminal" gibi | gövde monospace | gövde Inter 14px, mono yalnız sayı/kimlik |
| Cyan her yerde | accent ikon + başlık + çerçeve | cyan yalnız aktif/eylem/seri-1 |
| Göz yoruyor | saf siyah zemin + saf beyaz metin | grafit #0b0d10 + #e9eef4 |
| Tablo karışıyor | zebra + 4 renk | zebra yok, hover yeter; durum noktası + metin |
| Michroma taşıyor | H2 32px Michroma uzun cümle | Michroma yalnız başlık/KPI; gövde Inter |
| Koyu mod farkı yok | iki blok aynı | koyu blok daha derin (#06080a) + cyan parlak |
| Mobilde taşıyor | 8 kolon tablo | 4 kolon + yatay kaydırma ipucu, taşma yok |

## Komşu stiller

- **Uyumlu:** `product-launch` (148) — lansman vitrini ile ürün paneli aynı koyu tabanı paylaşır; fark spotlight vs ızgara.
- **Uyumlu:** `telemetry-grid` — aynı ölçüm dili; grafik ağırlıklı ekranlarda eş.
- **Uyumlu:** `agency-portfolio` (147) — açık tema karşılığı; aynı indeks mantığı.
- **Yasak:** `glassmorphism` — çok katmanlı blur, veri okunurluğunu düşürür.
- **Yasak:** `claymorphism` / `neumorphism` — yumuşak gölge, 1px ızgara disiplinini yok eder.
- **Yasak:** `noir-estate` (146) — sıcak altın ve serif, ölçüm dilini duygusallaştırır.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Michroma | geniş display kullanımı ve sınırları |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | 1px ızgara ve durum noktası ölçütü |
| https://git.apcacontrast.com/documentation/APCAeasyIntro | koyu zeminde gövde metni okunabilirliği |
| https://carbondesignsystem.com/components/data-table/usage/ | satır yüksekliği, hizalama ve durum gösterimi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Dark Dashboard (styles/151-dark-dashboard/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="dark-dashboard"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Michroma 400) yalnız H1/H2 ve 34px KPI rakamı, -.01em; --font-body (Inter 400/600) gövde 14px/1.55;
  --font-mono (JetBrains Mono 400) sayı 13px tabular, etiket 10px +.16em büyük harf.
Yüzey: grafit zemin + 1px --line ızgara. Kart = --surface, radius 14px, gölge YOK; blur yalnız sticky başlık ve modalda.
  Sidebar 240px, --bg-2, aktif öğede 2px cyan şerit.
Renk: tek veri vurgusu cyan (--accent), üstünde --accent-ink; durum renkleri yalnız ok/warn/danger.
Hareket: enter 0.48s cubic-bezier(.25,.6,.2,1) blur-in 16px st.03 · scroll top 88% 0.44s reveal 12px once ·
  pin yok · hover 140ms scale 1.01; prefers-reduced-motion zorunlu.
Yasak: Gövde metninde monospace veya Michroma; Cyan üstüne beyaz metin, neon glow; Zebra tablo + renkli satır arka planı; Kartlarda gölge, 14px üstü radius; Skeleton shimmer / nabız animasyonu; Durumu yalnız renkle bildirmek.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Sidebar 240px ve aktif öğede 2px cyan şerit var.
- [ ] Tablo satırı 44px, sayılar sağa hizalı tabular.
- [ ] Cyan yalnız aktif/eylem/seri-1; durum renkleri ayrı.
- [ ] Kart radius 14px, gölge yok, 1px çerçeve.
- [ ] Kontrast: gövde ≥ 4.5:1, cyan üstü ≥ 4.5:1, odak ≥ 3:1.
- [ ] 390px'te tablo 4 kolona iniyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken giriş animasyonu duruyor.

## Token

```css
[data-style="dark-dashboard"] {
  --bg: #0b0d10;
  --bg-2: #07090b;
  --surface: #12161a;
  --surface-2: #1a2026;
  --ink: #e9eef4;
  --ink-soft: #a9b6c2;
  --ink-faint: #75818d;
  --accent: #58c8ff;
  --accent-ink: #04141f;
  --line: rgba(233,238,244,.12);
  --radius: 8px;
  --radius-lg: 14px;
  --shadow: 0 20px 48px -30px rgba(0,0,0,.9);
  --shadow-hard: 0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent);
  --font-display: "Michroma", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .16em;
  --blur: 8px;
  --grain: .01;
  --danger: #ff7a7a;
  --danger-ink: #1a0505;
  --ok: #6ee7a0;
  --warn: #f2c14e;
}
```

Koyu mod bloğu `styles/151-dark-dashboard/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="dark-dashboard"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
