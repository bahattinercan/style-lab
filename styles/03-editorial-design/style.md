# 03 · Editorial Design

> **Bir cümlede:** Dergi sayfası mantığı: serif display, kolon ritmi, drop cap, dipnot ve hairline — içerik anlatı gibi akar.

| | |
|---|---|
| **Hissiyat** | edebi, sakin otorite, "yavaş okuma" |
| **En iyi** | blog/dergi, haber, uzun okuma ürünü, kültür kurumu, landing'de hikâye bölümü |
| **Kaçın** | yoğun dashboard, anlık veri, oyun, e-ticaret listesi |
| **Zorluk** | orta-yüksek (tipografi ve ritim bakımı) · **Erişilebilirlik** | iyi |
| **Aile** | Sade (01–07) · **Token** | `kit/tokens.css` → `[data-style="editorial-design"]` |
| **Kompozisyon** | `type` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Basılı dergi/gazete dilinin ekrana taşınması: **serif display** (Fraunces/Playfair), **gövde sans** (Inter), **ölçülü satır uzunluğu (66–72ch)**, **drop cap**, **hairline kurallar**, **dipnot/etiket numaraları**. Hiyerarşi punto ve ağırlıkla kurulur; renk neredeyse yoktur, tek sıcak accent (terracotta) vardır.

Kazandığı şey: anlatı ve güven — metin okunur, taranır, hatırlanır. Feda ettiği şey: hız — bu stil yoğun veri ekranında nefes alamaz.

### Ne değildir
- **Luxury Typography değildir.** Lüks seyrek ve geniş tracking'li; editorial **dolu** ve ritmik, dipnotlu.
- **Swiss Design değildir.** Swiss sans-serif + ızgara gösterisi; editorial serif + kolon ritmi.
- **Minimalism değildir.** Burada süs değil ama **doku** (grain), kural çizgisi ve drop cap bilinçli olarak var.
- **"Serif başlık" değildir.** Serif başlık + sans gövde + kolon ritmi + hairline olmadan sadece "şık blog" olur.
- **Dark Academia değildir.** O koyu ve arşiv; editorial açık kâğıt zemininde çalışır.

### Nereden gelir
Gazete/dergi tipografisi ve Jan Tschichold'in kolon sistemleri; dijitalde Medium sonrası "okuma ürünü" dalgası. Haber siteleri ve uzun okuma odaklı ürünlerde (Substack, Ghost temaları) standart hale geldi.

### 3 saniyede tanıma testi
1. Başlık **serif**, gövde **sans** mı?
2. Metin **kolonlu** (veya 66–72ch ölçülü) mi?
3. Hairline kural ve **drop cap** var mı?
4. Renk neredeyse yok, tek sıcak accent mi?
5. Gölge yok, kenarlıklar **1px** mi?

## Zorunlu kurallar

1. **Serif display + sans gövde.** Fraunces (display) / Inter (gövde) ayrımı her ekranda korunur.
2. **Ölçülü satır:** gövde 66–72ch, iki kolonda 46ch; satır aralığı 1.65.
3. **Kolon ritmi:** geniş ekranda 2 kolon; kolon arası 32px + 1px dikey kural.
4. **Hairline:** tüm ayırıcılar 1px `--line` (0.14 opaklık); gölge yok.
5. **Drop cap** yalnızca açılış paragrafında, 3 satır derinliğinde.
6. **Tek sıcak accent** (terracotta) ≤ %8 alan; bağlantı ve tek vurgu.

## Yasaklar

- Gölge, gradient, cam, radius > 4px.
- 12px altı gövde metni; 1.4 altı satır aralığı.
- İkiden fazla font ailesi (serif + sans + mono etiket sınırı).
- Ortalanmış uzun metin; 90ch üzeri satır.
- Dekoratif illüstrasyon, 3B ikon, emoji başlık.
- Tam genişlik ekran görselini metinsiz kullanmak (caption zorunlu).

## Görsel imza
- **Drop cap:** ilk harf 42px serif, 3 satır yüksekliğinde, `float: left`.
- **Hairline kural:** bölüm üstü 1px; başlık altı 2px accent kısa çubuk.
- **Kolon:** iki kolon + aralarında 1px dikey kural (32px gutter).
- **Numaralı etiket:** `01 / GİRİŞ`, mono, 10px, `0.2em`.
- **Grain:** `--grain: .04` — kâğıt hissi, görünür gürültü değil.
- **Görsel altı caption:** 12px, `--ink-faint`, italik serif.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fdfcf9` | sayfa (kâğıt) | kart zemini |
| `--bg-2` | `#f4f1ea` | alıntı bloğu, tablo başlığı | buton |
| `--surface` | `#ffffff` | kart, modal | tam sayfa |
| `--surface-2` | `#faf8f3` | hover, ikincil blok | vurgu |
| `--ink` | `#141414` | başlık, gövde | — |
| `--ink-soft` | `#56504a` | caption, açıklama | başlık |
| `--ink-faint` | `#8e8880` | etiket, dipnot numarası | gövde metni |
| `--accent` | `#b4472f` | bağlantı, kısa çubuk, drop cap | geniş zemin |
| `--accent-ink` | `#ffffff` | accent üstü metin | — |
| `--line` | `rgba(20,20,20,.14)` | hairline kural | metin |

- Ölçülen kontrast: `ink/bg` **17.96:1** · `ink-soft/bg` **7.75:1** · `ink-faint/bg` **3.42:1** · `accent-ink/accent` **5.41:1**.
- `--ink-faint` yalnızca caption/etiket; gövde metni asla.
- Yasak: mavi "link" rengi (accent kullanılır), 3'ten fazla renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 60px (mobil 34px) | 400 | 1.04 | `-0.02em` |
| H2 | Fraunces | 32px | 400 | 1.12 | `-0.01em` |
| H3 | Fraunces | 21px | 600 | 1.25 | `0` |
| Gövde | Inter | 17px | 400 | 1.65 | `0` |
| Gövde (kolon) | Inter | 16px | 400 | 1.6 | `0` |
| Etiket / dipnot | IBM Plex Mono | 10–12px | 400 | 1.3 | `0.2em` uppercase |
| Alıntı | Fraunces italic | 24px | 400 | 1.4 | `0` |

- Ölçek **1.9×** display/gövde: 17 → 32 → 60. Zıplama belirgin olmalı.
- Ölçü: `h1 { font-size: clamp(2.125rem, 1.2rem + 3.4vw, 3.75rem) }`.
- Gövde **66–72ch**; 2 kolonda 46ch. 90ch üzeri yasak.
- Display ağırlığı 400–600; 700+ "afili" görünür, kaçın (Fraunces'de SOFT/WONK ekseni kullanılabilir).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (metin 8, kenar 2+2) |
| Gutter | 32px (kolonlar arası 1px kural) |
| Container | 1140px (okuma 720px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1140 px |
| Bölüm dikey | 64px (mobil 40px) |

- Metin bloğu asla tam genişlik değil: maksimum 720px, kenarlarda ≥ 64px boşluk.
- Bölüm ritmi: 1 tam genişlik görsel → 1 iki kolon metin → 1 alıntı bloğu; üçü art arda aynı genişlikte olmaz.
- Görsel + caption her zaman birlikte; caption 12px, sol hizalı.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + grain | yok | sayfa |
| Kart | `--surface` + 1px `--line` | yok | alıntı, bilgi kutusu |
| Yüzen | `--surface` + 1px | yok | modal (backdrop %40) |

- Derinlik **yok**; katman 1px hairline ve zemin tonu farkıyla ayrılır.
- Radius: `--radius` 2px, `--radius-lg` 4px — daha fazlası dergi hissini bozar.
- Gölge yerine `border-top: 1px` + `padding-top` kullan.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 20px | 2px | 14/600 | `--accent` + `--accent-ink` | hover: %92 parlaklık · focus: 2px `--accent` halka · disabled: %40 |
| Buton (metin/bağlantı) | — | 0 | 0 | 14/500 + alt çizgi | `--ink` + `1px underline` | hover: `--accent` |
| Input | 44px | 0 14px | 2px | 15/400 | `--surface` + 1px `--line`, alt kenar 2px | focus: alt kenar 2px `--accent` · error: `--danger` |
| Kart / alıntı bloğu | içerik | 24px | 4px | Fraunces italic 24/1.4 | `--bg-2` + sol 3px `--accent` | — |
| Chip / etiket | 22px | 0 8px | 2px | 10/500 mono uppercase | `transparent` + 1px `--line` | — |
| Nav | 68px | 0 40px | 0 | 12/600 `0.08em` uppercase | alt 1px `--line` | aktif: 2px alt `--accent` |
| Tablo satırı | 44px | 10px 12px | 0 | 14/400, sayı mono 13 | alt 1px `--line` | hover: `--surface-2` |
| Modal | içerik | 32px | 4px | H2 serif + 16 gövde | `--surface` + 1px `--line` | backdrop %40 |
| Toast | 44px | 0 16px | 2px | 13/500 | `--ink` zemin + `--bg` | 4sn |
| Grafik | — | — | 0 | eksen 11 mono | `--accent` + `--ink-faint` referans | 2 seri |
| Caption | — | 6px 0 0 | — | 12px italic `--ink-faint` | — | görsel altı zorunlu |

- Odak halkası 2px accent, offset 2px; kâğıt zemininde görünür.
- Dokunma hedefi 44px; metin bağlantılarında satır yüksekliği 44px'e tamamlanır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, editorial içerikte minimal kullanım |
| Fotoğraf | Doğal ışık, orta doygunluk; kenar boşluksuz (full-bleed) veya kolon genişliğinde |
| İllüstrasyon | Elle çizilmiş/gravür tonlu kabul; 3B yasak |
| Doku | Grain .04 (kâğıt) |
| Logo | Serif wordmark tercih; 24px yükseklik |
| Alıntı | Büyük serif italik + sol 3px accent çubuk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 60px serif başlık, altında 66ch lede, sol 3px accent çubuk, sağda kolonlu görsel + caption | `shots/01-landing.png` |
| Dashboard | düşük | Dergi dili geri çekilir: sans gövde, hairline kural, mono sayılar; serif sadece başlıkta | `shots/02-dashboard.png` |
| Form | düşük | 520px tek sütun, etiket 12px mono, input alt kenar vurgulu | — |
| Liste / tablo | düşük | 44px satır, hairline; başlık satırı mono uppercase | — |
| Boş durum | orta | Tek cümle + tek bağlantı; illüstrasyon yerine hairline kutu | — |
| Onboarding / makale | yüksek | Drop cap, iki kolon, dipnot numaraları, alıntı bloğu | — |
| Pricing | orta | 3 kolon, orta kolon 1px accent kenar; fiyat serif 40px | — |
| Giriş / ödeme | çok düşük | 420px kart, hairline, tek accent buton | — |
| Modal | orta | 4px radius, 1px kenar, serif başlık | — |
| Bildirim / toast | düşük | Koyu zemin + serif olmayan 13px metin | — |
| Hata | düşük | 1px `--danger` kenar + 13px açıklama, utanç vermeyen dil | — |
| Profil / ayar | orta | 8/4 kolon, bölüm başlıkları serif, ayar satırı 52px | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `ease-out` | `opacity` |
| Giriş | 550ms | `ease-out` | `opacity` + 10px `translateY`, stagger 60ms |
| Scroll (`top 88%`) | 650ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 180ms | aynı eğri | `transform: scale(1.015)` |
| Ödül | 300ms | `ease-in-out` | accent çubuk genişliği 0→100% (tek seferlik) |

- Okuma akışını bozan animasyon yasak (parallax, fade-in her paragrafta).
- `prefers-reduced-motion`: 0.01ms; accent çubuk anında görünür.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#fdfcf9` | `#14120f` |
| `--bg-2` | `#f4f1ea` | `#1e1b16` |
| `--surface` | `#ffffff` | `#1a1714` |
| `--ink` | `#141414` | `#f0e9dd` |
| `--ink-soft` | `#56504a` | `#b9b0a2` |
| `--line` | `rgba(20,20,20,.14)` | `rgba(240,233,221,.18)` |
| `--accent` | `#b4472f` | `#d76a4c` |
| `--accent-ink` | `#ffffff` | `#14120f` |

- Koyu modda grain azaltılır (.02), aksi halde lekeli görünür.

## Erişilebilirlik

- Gövde 17.96:1, açıklama 7.75:1 → güvenli. `--ink-faint` 3.42:1 → sadece caption.
- Serif display 60px → büyük metin eşiği geçer; ama 18px altı serif kullanma.
- İtalik uzun blok yasak (okunabilirlik); alıntıda max 3 satır.
- Odak halkası accent 2px; kâğıt zemininde 5.4:1 ile görünür.
- Drop cap `float` kullanırken ekran okuyucu sırası bozulmaz (yalnızca `::first-letter`).
- Dokunma hedefi 44px; caption'lar tıklanabilirse tam genişlik hedef.

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
| "Şık blog" görünüyor | Kolon ritmi ve hairline yok | 2 kolon + 1px dikey kural + drop cap ekle |
| Okuma yorucu | 90ch satır, 1.4 satır aralığı | 66–72ch, 1.65 |
| Serif her yerde | Serif gövdeye taşmış | Serif yalnızca display/alıntı; gövde sans |
| Dağınık | 3+ font, 4 renk | Serif + sans + mono; tek accent |
| Yavaş | Her paragrafta fade-in | Animasyonu bölüm başlıklarıyla sınırla |
| Mobilde taşma | 60px sabit başlık | `clamp()` ile 34px |

## Komşu stiller

- **Uyumlu:** `04 luxury-typography` (aynı serif ailesi, farklı yoğunluk), `02 swiss-design` (ızgara), `33 dark-academia` (arşiv/kâğıt).
- **Yasak:** `13 neo-brutalism` (kalın kontur + ofset gölge), `21 synthwave` (neon), `05 bento-grid` (kutu enflasyonu).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.nytimes.com | Kolon ritmi, caption ve dipnot dili |
| https://ghost.org | Editorial landing ve tipografi ölçeği |
| https://fonts.google.com/specimen/Fraunces | Display ekseni (SOFT/WONK) kullanımı |

## AI brief

```
Stil: Editorial Design (styles/03-editorial-design/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="editorial-design"]; hard-coded renk/ölçü YASAK.
Tipografi: Fraunces display (400, -0.02em, 1.04) + Inter gövde (17/1.65, 0); etiket mono 10–12 uppercase 0.2em.
Ölçü: gövde 66–72ch (bölüm 2 kolonda 46ch); bölüm dikey 64px; kart padding 24px.
Yüzey: radius 2/4px, gölge yok; ayırıcı 1px --line hairline.
İmza: açılış paragrafında drop cap (42px, 3 satır), sol 3px accent çubuk, görsel altı caption zorunlu.
Renk: tek accent #b4472f ≤ %8 alan; link rengi mavi DEĞİL accent.
Hareket: 120–300ms ease-out, sadece opacity/translate; okuma akışında parallax yasak.
Yasak: gölge, gradient, radius > 4px, 12px altı gövde, 3+ font, ortalanmış uzun metin.
Çıktı: kod + tek paragraf not (kolon ölçüsü ve tipografi rollerini nasıl korudun).
```

**Teslim öncesi öz-denetim**
- [ ] Serif display + sans gövde ayrımı net.
- [ ] Gövde 66–72ch, satır aralığı 1.6–1.65.
- [ ] Hairline kural (1px) kullanıldı, gölge yok.
- [ ] Drop cap yalnızca açılış paragrafında.
- [ ] Tek accent; mavi link rengi yok.
- [ ] Caption'sız görsel yok; mobilde 34px başlık.

## Token

```css
[data-style="editorial-design"] {
  --bg: #fdfcf9; --bg-2: #f4f1ea;
  --surface: #ffffff; --surface-2: #faf8f3;
  --ink: #141414; --ink-soft: #56504a; --ink-faint: #8e8880;
  --accent: #b4472f; --accent-ink: #ffffff;
  --line: rgba(20,20,20,.14);
  --radius: 2px; --radius-lg: 4px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Fraunces", "Playfair Display", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: .04;
}
```
