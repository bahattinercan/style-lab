# 34 · Skeuomorphism

> **Bir cümleyle:** Gerçek malzeme metaforu: ahşap panel, kumaş doku, gömülü buton ve fiziksel gölge — arayüz bir nesne gibi davranır.

| | |
|---|---|
| **Hissiyat** | tanıdık, dokunsal, "cihaz", nostaljik |
| **En iyi** | enstrüman/ses uygulaması, saat, tek amaçlı kontrol paneli, eğitim simülasyonu |
| **Kaçın** | veri yoğun panel, modern SaaS, mobil öncelikli ürün, erişilebilirlik kritik akış |
| **Zorluk** | yüksek (maliyet + erişilebilirlik) · **Erişilebilirlik** | orta risk |
| **Aile** | Sanatsal (28–34) · **Token** | `kit/tokens.css` → `[data-style="skeuomorphism"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Skeuomorphism, dijital kontrolü **fiziksel nesne** gibi gösterir: ahşap/metal panel, kumaş zemin, içe gömülü (inset) buton, gerçekçi gölge ve ışık yönü. Kullanıcı "düğmeye basıyorum" hissini alır.

Kazandığı şey: anında anlaşılırlık (tanıdık metafor) ve dokunsallık. Feda ettiği şey: ölçeklenebilirlik ve erişilebilirlik — doku ve gölge kontrastı yer, üretim maliyeti yüksektir.

### Ne değildir
- **Neumorphism değildir.** O tek renk + çift gölge; skeuomorphism **malzeme** (ahşap, kumaş, metal) kullanır.
- **Claymorphism değildir.** Clay pastel/oyuncak; skeuomorphism gerçekçi malzeme.
- **"Gradient buton" değildir.** Malzeme dokusu, ışık yönü ve inset/outset tutarlılığı olmadan sadece eski görünür.
- **Flat design değildir.** Derinlik ve doku kasıtlıdır.

### Nereden gelir
Erken GUI (Mac OS Classic, Win 95/XP), audio ekipman panelleri; bugün niş ürünlerde (enstrüman, saat, retro oyun) ve "gerçeklik" hissi gereken yerlerde.

### 3 saniyede tanıma testi
1. Malzeme dokusu (ahşap/kumaş/metal) var mı?
2. Buton **gömülü** (inset) gölgeyle mi, ışık yönü tutarlı mı?
3. Panel kenarında bevel/highlight var mı?
4. Tipografi nötr (Helvetica) mi, süs yok mu?
5. Gölge gerçekçi (çift katman, kısa mesafe) mi?

## Zorunlu kurallar

1. **Tek ışık yönü:** üst-sol açık, alt-sağ koyu; tüm öğelerde tutarlı.
2. **Malzeme katmanı:** en fazla 1 doku (ahşap **veya** kumaş) + grain .05.
3. **Gömülü/kabarık ayrımı:** basılabilir buton inset, panel outset.
4. **6–10px radius**, bevel 1px highlight; sert köşe yok.
5. **Kontrast:** gövde `--ink` (8.41:1); `--ink-soft` (4.34:1) yalnız ≥18px metinde.
6. **Maliyet sınırı:** ekran başına ≤ 3 dokulu yüzey; gerisi düz.

## Yasaklar

- 2+ malzeme dokusu (ahşap + metal + kumaş).
- Rastgele ışık yönü.
- Doku üstünde düşük kontrastlı metin.
- Sınırsız gradient; 3+ gölge tonu.
- Mobilde yoğun doku (performans + okunurluk).
- Ödeme/giriş ekranında tam malzeme (güven + sadelik).

## Görsel imza
- **Panel:** `linear-gradient(180deg,#fdf8ee,#ece3d2)` + 1px `#b9ad99` kenar + dış gölge.
- **Buton:** `linear-gradient(180deg,#479a74,#2f6b4f)` + koyu metin + inset highlight.
- **Gömülü input:** `inset 0 2px 6px rgba(47,42,36,.45)`.
- **Ahşap/kumaş:** SVG doku (1 kez), opacity .06–.10.
- **Işık:** üst-sol; tüm highlight'lar aynı yönde.
- **Grain .05** (malzeme grenli).

## Renk

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#cfc6b8` | zemin (bej) |
| `--bg-2` | `#bdb2a1` | ikincil zemin |
| `--surface` | `#f2ebdd` | panel (kâğıt/kumaş) |
| `--surface-2` | `#e6ddcb` | ikincil panel |
| `--ink` | `#2f2a24` | metin (8.41:1) |
| `--ink-soft` | `#5d554a` | açıklama (4.34:1, ≥18px) |
| `--ink-faint` | `#8b8173` | dekoratif (2.26:1) |
| `--accent` | `#2f6b4f` | buton (yeşil metal) |
| `--accent-ink` | `#f7f3e8` | accent üstü (**5.68:1**) |
| `--line` | `rgba(47,42,36,.35)` | bevel/kenar |

- Ölçülen kontrast: `ink/bg` **8.41:1** · `ink-soft/bg` **4.34:1** · `ink-faint/bg` **2.26:1** · `accent-ink/accent` **5.68:1**.
- `--ink-soft` **gövde metni olarak kullanılmaz** (4.34:1 < 4.5); yalnız ≥18px veya dekoratif.
- Yasak: 4. malzeme rengi; neon.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Helvetica Neue | 40px (mobil 26px) | 700 | 1.15 | `0` |
| H2 | Helvetica Neue | 24px | 700 | 1.2 | `0` |
| Gövde | Helvetica Neue | 16px | 400 | 1.55 | `0` |
| Etiket | Menlo | 11px | 500 | 1.2 | `0.08em` |

- Tipografi nötr: malzeme süslü, yazı sade olmalı.
- Buton metni 15px/700 + `text-shadow: 0 1px 0 rgba(0,0,0,.35)` (gömülü hissi).

## Izgara ve boşluk

Kolon 12 · gutter 24px · container 1120px · bölüm 64/44px · breakpoint 640/900/1120.
- Panel içi padding 24px; kenar payı (bevel) için 12px ek.
- Dokulu yüzey ≤ 3; aralarına düz yüzey koy.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Malzeme zemin | `--bg` + doku | yok | sayfa |
| Panel (outset) | `--surface` gradient | `--shadow` (dış + inset highlight) | kart |
| Buton/input (inset) | `--surface-2` | `--shadow-hard` (inset) | etkileşim |

- Derinlik malzeme + ışıktan; radius 6/10px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 44px | 0 20px | 6px | 15/700 | yeşil gradient + krem metin + inset highlight | hover: %6 parlaklık · active: inset gölge (basılma) · focus: 2px koyu halka · disabled: %45 |
| Buton (bej) | 44px | 0 18px | 6px | 15/700 | bej gradient + ink | active: inset |
| Input | 44px | 0 14px | 6px | 16/400 | beyazımsı + **inset** gölge | focus: 2px accent · error: `--danger` |
| Kart/panel | içerik | 24px | 10px | H3 + 16 | panel gradient + bevel | — |
| Chip/etiket | 24px | 0 10px | 6px | 11/500 mono | `--surface-2` + inset 1px | — |
| Nav | 68px | 0 28px | — | 14/600 | doku bar + alt bevel | aktif: gömülü sekme |
| Tablo satırı | 50px | 10px 14px | — | 15/400 | bevel 1px alt | hover: `--surface-2` |
| Modal | içerik | 28px | 10px | H2 + 16 | panel + dış gölge | backdrop: `rgba(47,42,36,.45)` |
| Toast | 44px | 0 16px | 6px | 13/600 | koyu panel + bevel | 4.5sn |
| Grafik | — | — | 4px uç | eksen 10 mono | accent + koyu referans | 1 seri |

## Görsel dil

İkon: 2px çizgi + hafif gölge, 22px; gömülü daire içinde. Fotoğraf: malzeme makro (ahşap, kumaş). İllüstrasyon: gerçekçi obje render'ı. Doku: 1 malzeme dokusu + grain .05. Logo: bevel/emboss'lu wordmark.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | Ahşap panel, gömülü butonlar, fiziksel kontrol kümesi | `shots/01-landing.png` |
| Dashboard | düşük | Doku azalır; panel + bevel yeter | `shots/02-dashboard.png` |
| Form | düşük | Gömülü inputlar, tek buton | — |
| Liste/tablo | çok düşük | Düz yüzey, bevel ayırıcı | — |
| Boş durum | orta | Panel + tek cümle + buton | — |
| Onboarding | orta | Adım başına 1 fiziksel kontrol | — |
| Pricing | düşük | 2–3 panel, bevel kenar | — |
| Giriş/ödeme | çok düşük | Doku kapanır; sade panel | — |
| Modal | orta | Panel + dış gölge | — |
| Toast | orta | Koyu panel + bevel | — |
| Hata | düşük | `--danger` kenar + 15px metin | — |
| Profil/ayar | orta | Fiziksel toggle (gömülü ray) | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 120ms | `ease-out` | `transform: translateY(1px)` + inset gölge |
| Geçiş / sayfa | 220ms | `ease-out` | `opacity` |
| Giriş (enter) | **360ms** | `cubic-bezier(.22,1.32,.4,1)` | `opacity` + `translateY(6px)`, **stagger 40ms**; malzeme oturur (hafif taşma = "tık") |
| Kaydırma (scroll) | **500ms** | `cubic-bezier(.22,1.32,.4,1)` | trigger **`top 86%`**, offsetY **10px**, `once: true` |
| Hover | **130ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 300ms | `ease-out` | "tık": inset → outset |

- İmza ölçüsü: enter **0.36s / 6px / stagger 0.04** · scroll **0.5s / `top 86%` / 10px** · hover **130ms / 1.02** · pin **kapalı**.
- `prefers-reduced-motion`: 0.01ms.
- Bu stile yasak hareket: sürekli parlama, döngü.
## Koyu mod

`--bg` `#2a241d` · `--surface` `#3a3226` · `--ink` `#f0e8da` · `--accent` `#3f8a68` · `--accent-ink` `#1b1714` · doku opacity .08.

## Erişilebilirlik

- Gövde `--ink` 8.41:1 → güvenli. **`--ink-soft` 4.34:1 → gövde metni olarak kullanılmaz** (yalnız ≥18px).
- `--ink-faint` 2.26:1 → yalnız dekoratif.
- Doku + gölge kontrastı yer: metin yüzeyi düz tutulur (doku metnin arkasında, opacity ≤ .10).
- Gömülü input + belirsiz kenar riski: odak halkası 2px accent zorunlu.
- Dokunma hedefi 44px; toggle ray'ı 44px yüksekliğinde.
- `prefers-contrast: more` → dokuyu kapat, kenarlıkları 1px ink yap.

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
| Eski/ucuz | 3+ gradient tonu, tutarsız ışık | Tek ışık yönü, 2 gölge katmanı |
| Okunmuyor | Doku üstünde metin | Metni düz yüzeye al, doku ≤ .10 |
| Yavaş | Çok doku + büyük görsel | Doku ≤ 3 yüzey, SVG 1 kez |
| Erişilebilirlik şikayeti | `--ink-soft` gövdede | `--ink` kullan (8.41:1) |
| Güven kaybı | Ödeme ekranında malzeme | O ekranda sadeleştir |

## Komşu stiller

**Uyumlu:** `26 art-deco` (malzeme lüksü), `10 neumorphism` (yumuşak yüzey), `31 scrapbook` (fiziksel his). **Yasak:** `01 minimalism`, `02 swiss-design`, `23 cybercore`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://guidebookgallery.org | Klasik GUI arşivi |
| https://en.wikipedia.org/wiki/Skeuomorph | Metafor tanımı |
| https://www.nngroup.com/articles/flat-design-long-exposure/ | Flat vs skeuomorphic tartışması |

## AI brief

```
Stil: Skeuomorphism (styles/34-skeuomorphism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="skeuomorphism"]; hard-coded renk YASAK.
Işık: tek yön (üst-sol açık, alt-sağ koyu); panel outset, buton/input inset.
Malzeme: 1 doku (ahşap VEYA kumaş) + grain .05; ekran başına ≤ 3 dokulu yüzey, doku metnin arkasında (opacity ≤ .10).
Tipografi: Helvetica Neue (display 40/700, gövde 16/1.55); buton metni text-shadow 0 1px 0 rgba(0,0,0,.35).
Renk: bej #cfc6b8 + yeşil metal #2f6b4f (üstünde krem 5.68:1). KRİTİK: --ink-soft (4.34:1) gövde metni olarak KULLANILMAZ; gövde --ink (8.41:1).
Radius 6/10px, bevel 1px highlight. Hareket: 120–300ms, basılma inset→outset.
Ödeme/giriş: doku kapanır (güven). prefers-contrast: more → doku kapat.
Çıktı: kod + tek paragraf not (ışık yönü ve kontrast önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] Tek ışık yönü; panel outset, buton inset.
- [ ] Doku ≤ 3 yüzey, opacity ≤ .10, metin düz yüzeyde.
- [ ] Gövde `--ink` (8.41:1); `--ink-soft` yalnız ≥18px.
- [ ] Radius 6/10, 2 gölge katmanı.
- [ ] Odak halkası görünür; hedef 44px.
- [ ] Ödeme/girişte doku kapalı.

## Token

```css
[data-style="skeuomorphism"] {
  --bg: #cfc6b8; --bg-2: #bdb2a1;
  --surface: #f2ebdd; --surface-2: #e6ddcb;
  --ink: #2f2a24; --ink-soft: #5d554a; --ink-faint: #8b8173;
  --accent: #2f6b4f; --accent-ink: #f7f3e8;
  --line: rgba(47,42,36,.35);
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 2px 4px rgba(47,42,36,.35), inset 0 1px 0 rgba(255,255,255,.75);
  --shadow-hard: inset 0 2px 6px rgba(47,42,36,.45);
  --font-display: "Helvetica Neue", "Segoe UI", system-ui, sans-serif;
  --font-body: "Helvetica Neue", "Segoe UI", system-ui, sans-serif;
  --font-mono: "Menlo", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: .05;
}
```
