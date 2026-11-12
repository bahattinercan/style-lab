# 17 · Maximalism

> **Bir cümlede:** Dolu, katmanlı, motifli: her yüzey bir desen, her bölüm bir renk, ama ritim korunur — "kontrollü bolluk".

| | |
|---|---|
| **Hissiyat** | zengin, kültürel, cesur, koleksiyoncu |
| **En iyi** | moda, kültür/sanat, dergi, festival, butik marka, koleksiyon vitrini |
| **Kaçın** | veri yoğun panel, ödeme/giriş, düşük bilişsel yük gerektiren ürün |
| **Zorluk** | yüksek (bolluk ≠ kaos) · **Erişilebilirlik** | orta risk |
| **Aile** | Cesur (13–18) · **Token** | `kit/tokens.css` → `[data-style="maximalism"]` |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Maximalism, "az çoktur"un tersi: **katmanlı desen**, **doygun derin renk** (bordo, hardal, krem), **serif display** (Playfair), **kalın ofset gölge** ve **motif tekrarı** (çizgi, dama, çiçek). Bolluk bilinçli: her bölümde tek bir baskın motif, tek bir renk bloğu ve net bir hiyerarşi.

Kazandığı şey: kültürel zenginlik ve hatırlanma. Feda ettiği şey: hız ve sakinlik; ayrıca dikkatsiz uygulanırsa okunurluk.

### Ne değildir
- **Anti-design değildir.** Maximalism hizalıdır ve ritmi vardır; anti-design ızgarayı bozar.
- **Memphis değildir.** Memphis kontur + geometri; maximalism **desen + serif + derin renk**.
- **"Her yeri doldur" değildir.** Motif bütçesi olmadan sonuç görsel gürültü olur.
- **Kitsch değildir.** Renk uyumu (analog bordo-hardal-krem) korunur, neon karışmaz.

### Nereden gelir
Viktorya dönemi desen sevgisi, 70'ler iç mekân, Gucci/Alessandro Michele dönemi moda dili. Dijitalde kültür dergileri ve butik markalarda "steril minimalizme" alternatif.

### 3 saniyede tanıma testi
1. Arka planda **motif/desen** var mı (çizgi, dama, çiçek)?
2. Renkler derin ve sıcak mı (bordo, hardal, krem)?
3. Serif display + sans gövde mi?
4. Ofset gölge 6px ve blursuz mu?
5. Birden fazla desen var ama **biri baskın** mı?

## Zorunlu kurallar

1. **Motif bütçesi:** ekran başına 1 baskın desen + en fazla 1 ikincil; ikisi aynı ölçekte kullanılmaz.
2. **Renk uyumu:** analog palet (bordo #7a1f3d, hardal #f2c14e, krem #f6e7d8); 3'ten fazla doygun renk yok.
3. **Serif display (Playfair) + sans gövde (Inter).**
4. **Ofset gölge** `6px 6px 0 rgba(34,20,16,.85)`; radius 6/14px.
5. **Okunurluk tabanı:** metin zemini her zaman düz (desen üstünde metin yok), kontrast ≥ 4.5:1.
6. **Hiyerarşi:** her bölümde tek bir odak (görsel, başlık veya sayı).

## Yasaklar

- Desen üstünde metin (kontrast düşer).
- 3'ten fazla desen/renk; her bölümde farklı stil.
- Neon renk + pastel karışımı.
- Gölge çeşitliliği (tek ofset).
- Yoğun veri ekranında motif (tablo/grafik okunmaz).
- 8 adet eşit kart (bolluk ≠ eşit ızgara).

## Görsel imza
- **Baskın motif:** çapraz çizgi (diagonal stripe) veya dama; opacity .08–.12 zemin katmanı.
- **Renk bloğu:** hardal `--surface-2` ikinci bölüm zemini, bordo `--accent` CTA.
- **Serif display:** Playfair 56–72px, `-0.01em`.
- **Ofset gölge:** 6px, koyu kahve; blur yok.
- **Karışık ölçek:** 72px başlık + 18px serif alıntı + 13px etiket.
- **Grain .05:** kâğıt/baskı hissi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f6e7d8` | sayfa (krem) | metin zemini olarak desen üstü |
| `--bg-2` | `#e8cfae` | ikinci bölüm | kart |
| `--surface` | `#fffaf3` | kart | sayfa |
| `--surface-2` | `#f2c14e` | hardal blok, vurgu | uzun metin zemini |
| `--ink` | `#221410` | metin | desen |
| `--ink-soft` | `#57403a` | açıklama | başlık |
| `--ink-faint` | `#8f7a72` | dekoratif (3.34:1) | gövde metni |
| `--accent` | `#7a1f3d` | CTA, başlık vurgusu | geniş zemin (ağır) |
| `--accent-ink` | `#f6e7d8` | accent üstü metin (**8.29:1**) | — |
| `--line` | `rgba(34,20,16,.2)` | kenarlık | metin |

- Ölçülen kontrast: `ink/bg` **14.75:1** · `ink-soft/bg` **7.88:1** · `ink-faint/bg` **3.34:1** · `accent-ink/accent` **8.29:1**.
- Bordo üstünde krem metin (8.29:1) → ideal buton kombinasyonu.
- Yasak: neon, pastel, 4. doygun renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 68px (mobil 36px) | 700 | 1.0 | `-0.01em` |
| H2 | Playfair Display | 40px | 700 | 1.05 | `-0.01em` |
| Alıntı | Playfair Display italic | 22px | 400 | 1.4 | `0` |
| Gövde | Inter | 16px | 400 | 1.6 | `0` |
| Etiket | Space Mono | 10px | 400 | 1.2 | `0.18em`, uppercase |
| Buton | Inter | 15px | 600 | 1 | `0.01em` |

- Serif yalnızca display/alıntı; gövde sans (serif gövde + desen = yorgunluk).
- 3 farklı punto ucu aynı ekranda: 68 / 22 / 13 — maximalism'de kontrast daha yüksek.
- Gövde 58ch (desenli zeminde uzun satır okunmaz).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (hero 7/5, ikinci bölüm 4/4/4 asimetrik) |
| Gutter | 24px |
| Container | 1200px |
| Boşluk ölçeği | 8 · 16 · 24 · 32 · 48 · 72 |
| Breakpoint | 640 / 900 / 1200 px |
| Bölüm dikey | 72px (mobil 48px) |

- Bölüm ritmi: **1 tam genişlik desenli bant → 1 dar içerik → 1 hardal blok**; üçü art arda aynı genişlikte olmaz.
- Desenli bantta metin yok; metin her zaman `--surface` üstünde.
- Kart aralığı 16px; gölge payı 8px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Desenli zemin | `--bg` + motif | yok | bant |
| Kart | `--surface` + 2px ink | `--shadow` (6px ofset) | içerik |
| Yüzen | `--surface` | 10px ofset | modal |

- Derinlik ofsetten; blur yok.
- Radius 6/14px; desenli bandın radius'u 0 (tam genişlik).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 50px | 0 24px | 6px | 15/600 | `--accent` + `--accent-ink` + 4px ofset | hover: `translate(4px,4px)` + gölge 0 · focus: 3px ink halka · disabled: %40 |
| Buton (hardal) | 50px | 0 22px | 6px | 15/600 | `--surface-2` + `--ink` + 2px ink | hover: `--bg-2` |
| Input | 50px | 0 16px | 6px | 16/400 | `--surface` + 2px ink | focus: 2px `--accent` halka · error: `--danger` |
| Kart | içerik | 24px | 14px | H2 serif + 16 | `--surface` + 2px ink + 6px ofset | hover: `translate(-2px,-2px)` |
| Chip | 26px | 0 10px | 6px | 10/400 mono | hardal %22 + 1px ink | aktif: bordo + krem |
| Nav | 76px | 0 32px | — | 14/600 | desenli bant + 2px alt ink | aktif: 4px alt bordo |
| Tablo satırı | 54px | 12px 16px | — | 15/400 | 2px ink alt | hover: `--bg-2` (desen kapalı) |
| Modal | içerik | 28px | 14px | H2 serif + 16 | `--surface` + 2px ink + 10px ofset | backdrop: `rgba(34,20,16,.45)` |
| Toast | 50px | 0 18px | 6px | 14/600 | bordo + krem | 4.5sn |
| Grafik | — | — | 4px uç | eksen 10 mono | bordo + hardal + ink çerçeve | 3 seri |

- Odak halkası 3px ink (hardal zemin üstünde de görünür).
- Dokunma hedefi 50px (desen algıyı böler, hedefi büyüt).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 24px, çerçeveli daire içinde |
| Fotoğraf | Zengin renk, dokulu yüzey, 14px radius, kalın çerçeve |
| İllüstrasyon | Gravür/çiçek motifi, çok renkli |
| Doku | grain .05 + 1 desen katmanı |
| Logo | Serif wordmark, çerçeveli |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | çok yüksek | 68px serif başlık, desenli sağ panel, hardal blok, bordo CTA | `shots/01-landing.png` |
| Dashboard | düşük | Desen kapanır; kart gölgeleri kalır, KPI'lar sade | `shots/02-dashboard.png` |
| Form | düşük | Düz yüzey, 2px kenar, bordo buton | — |
| Liste / tablo | düşük | Desen yok, 2px ayırıcı, serif sayı | — |
| Boş durum | orta | Motifli illüstrasyon + tek cümle + buton | — |
| Onboarding | yüksek | Adım başına 1 büyük görsel + 2 satır | — |
| Pricing | yüksek | 3 kart, orta kart hardal + bordo çerçeve | — |
| Giriş / ödeme | çok düşük | Desen ve ofset kapanır; düz form | — |
| Modal | orta | 10px ofset, serif başlık | — |
| Bildirim / toast | orta | Bordo zemin + krem metin | — |
| Hata | düşük | `--danger` çerçeve + 14px metin | — |
| Profil / ayar | orta | Kart listesi, motif yalnız başlık bandında | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `ease-out` | `translate(4px,4px)` |
| Giriş | 420ms | `cubic-bezier(.2,.6,.2,1)` | `opacity` + 20px `translateY`, stagger 60ms |
| Scroll (`top 84%`) | 500ms | aynı eğri | `opacity` + 16px `translateY`, `once: true` |
| Hover | 140ms | aynı eğri | `transform: scale(1.03)` |
| Ödül | 360ms | `ease-in-out` | motif katmanı `opacity` 0→.10 |

- Zengin ama temkinli: aynı anda 2'den fazla öğe hareket etmez; motif katmanı yalnız ödülde oynar.
- `prefers-reduced-motion`: motif animasyonu kapanır.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f6e7d8` | `#1a1310` |
| `--surface` | `#fffaf3` | `#241a15` |
| `--surface-2` | `#f2c14e` | `#c79b33` |
| `--ink` | `#221410` | `#f6e7d8` |
| `--accent` | `#7a1f3d` | `#a8385a` |
| `--accent-ink` | `#f6e7d8` | `#1a1310` |

- Koyu modda motif opacity .06'ya düşer (desen gürültü yapar).

## Erişilebilirlik

- Gövde 14.75:1, açıklama 7.88:1 → güvenli; `--ink-faint` 3.34:1 → dekoratif.
- Metin **asla desen üstünde**; desen katmanı `--surface`in arkasında.
- Bordo üstü krem 8.29:1 → butonlar güvenli.
- Bolluk bilişsel yük yaratır: ekran başına tek odak, en fazla 3 punto seviyesi.
- Hareket: yavaş ve az; `prefers-reduced-motion` motif animasyonunu kapatır.
- Dokunma hedefi 50px.

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
| Görsel gürültü | 3+ desen, her bölüm farklı renk | Motif ≤ 2, tek palet |
| Okunmuyor | Desen metin altında | Metni `--surface` üstüne al |
| "Ucuz" görünüm | Neon/pastel karışımı | Analog palet (bordo-hardal-krem) |
| Hiyerarşi yok | Her şey eşit doygunlukta | Bölüm başına 1 odak, accent alanı ≤ %15 |
| Yorgunluk | 4+ punto seviyesi | En fazla 3 seviye |

## Komşu stiller

- **Uyumlu:** `27 victorian` (desen/gravür), `26 art-deco` (geometrik lüks), `30 bohemian` (doku).
- **Yasak:** `01 minimalism` (boşluk politikası), `02 swiss-design` (ızgara sessizliği), `10 neumorphism` (tek renk).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.gucci.com | Katmanlı desen + serif lüks dili |
| https://www.itsnicethat.com | Editöryel maximalism örnekleri |
| https://fonts.google.com/specimen/Playfair+Display | Serif display |

## AI brief

```
Stil: Maximalism (styles/17-maximalism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="maximalism"]; hard-coded renk YASAK.
Motif: ekran başına 1 baskın + en fazla 1 ikincil desen; opacity .08–.12; METİN ASLA desen üstünde.
Renk: bordo #7a1f3d (üstünde krem #f6e7d8, 8.29:1) + hardal #f2c14e + krem #f6e7d8; 4. doygun renk yok.
Tipografi: Playfair display 700 (68/1.0 -0.01em) + Inter gövde 16/1.6 + Space Mono etiket 10 uppercase; en fazla 3 punto seviyesi.
Yüzey: radius 6/14px, 2px ink kenarlık, 6px blur'suz ofset gölge.
Bölüm ritmi: tam genişlik desenli bant → dar içerik → hardal blok (eşit genişlikte üst üste olmaz).
Hareket: 120–360ms ease-out; reduced-motion'da motif animasyonu kapalı.
Yasak: desen üstünde metin, 3+ desen, neon/pastel karışım, eşit 8 kart ızgarası, yoğun tabloda motif.
Çıktı: kod + tek paragraf not (motif bütçesi ve okunurluk önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] Motif ≤ 2, biri baskın; metin düz yüzeyde.
- [ ] Palet analog (bordo/hardal/krem), 3'ten fazla doygun renk yok.
- [ ] Serif yalnızca display/alıntı; gövde sans.
- [ ] Ofset gölge tek tip (6px), radius 6/14.
- [ ] Bölüm başına 1 odak; en fazla 3 punto seviyesi.
- [ ] Yoğun ekranda motif kapatıldı.

## Token

```css
[data-style="maximalism"] {
  --bg: #f6e7d8; --bg-2: #e8cfae;
  --surface: #fffaf3; --surface-2: #f2c14e;
  --ink: #221410; --ink-soft: #57403a; --ink-faint: #8f7a72;
  --accent: #7a1f3d; --accent-ink: #f6e7d8;
  --line: rgba(34,20,16,.2);
  --radius: 6px; --radius-lg: 14px;
  --shadow: 6px 6px 0 rgba(34,20,16,.85); --shadow-hard: none;
  --font-display: "Playfair Display", "Fraunces", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: .05;
}
```
