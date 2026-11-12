# 18 · Dopamine UI

> **Bir cümlede:** Canlı renk + mikro ödül: her etkileşim küçük bir "iyi his" bırakır, ama palet disiplinli kalır.

| | |
|---|---|
| **Hissiyat** | canlı, ödüllendirici, enerjik, genç |
| **En iyi** | sosyal uygulama, alışveriş, fitness/alışkanlık, oyunlaştırılmış eğitim |
| **Kaçın** | kurumsal finans, sağlık kaydı, resmi süreç, uzun okuma |
| **Zorluk** | orta (renk disiplini zor) · **Erişilebilirlik** | orta risk (doygun renk yorgunluğu) |
| **Aile** | Cesur (13–18) · **Token** | `kit/tokens.css` → `[data-style="dopamine-ui"]` |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Dopamine UI, ödül psikolojisini tasarıma çevirir: **doygun vurgu rengi** (pembe), **pastel yüzey**, **büyük radius** (18/24px), **yumuşak renkli gölge** ve **mikro ödül** (tamamlanınca pop, seri sayacı, konfeti). Renk boldur ama sayısı **3'ü geçmez**; gövde metni nötr koyu tondadır.

Kazandığı şey: motivasyon ve kullanım süresi. Feda ettiği şey: ciddiyet; ayrıca doz kaçarsa "ucuz/oyuncak" algısı.

### Ne değildir
- **Claymorphism değildir.** Clay hacim (iç gölge) ile; dopamine **renk + hareket** ile konuşur.
- **Memphis değildir.** Memphis kontur + geometri; dopamine pastel zemin + doygun vurgu.
- **"Her yeri pembe" değildir.** Accent alanı ≤ %20; gerisi beyaz/krem ve nötr metin.
- **Sürekli animasyon değildir.** Ödül hareketi **eylem başına bir kez**; sürekli parıltı yorgunluk yapar.

### Nereden gelir
Oyunlaştırma (Duolingo, Strava) ve sosyal ürünlerin "streak/reward" dili; 2023+ tüketici uygulamalarında pastel + doygun vurgu kombinasyonu standartlaştı.

### 3 saniyede tanıma testi
1. Accent **doygun** (pembe) ama ekranın ≤ %20'si mi?
2. Yüzeyler pastel/beyaz, radius ≥ 18px mi?
3. Gölge renkli ve yumuşak mı (pembe tonlu), sert değil mi?
4. Ödül/mikro-etkileşim var mı (tek seferlik)?
5. Accent üstünde **koyu** metin mi (beyaz değil)?

## Zorunlu kurallar

1. **Accent bütçesi:** doygun renk ekranın ≤ %20'si; bir ekranda tek doygun hue.
2. **Accent üstü koyu metin:** `--accent-ink` = #16121f (5.40:1); beyaz metin yasak (3.41:1).
3. **Radius 18/24px**, kart 24px; buton pill/18px.
4. **Renkli yumuşak gölge:** `0 10px 24px rgba(255,61,113,.18)`; sert gölge yok.
5. **Ödül disiplini:** eylem başına 1 animasyon, ≤ 400ms; sürekli parıltı yok.
6. **Nötr gövde metni:** `--ink` koyu; doygun renkte metin yok.

## Yasaklar

- 3'ten fazla doygun renk; her kart farklı hue.
- Accent üstünde beyaz metin.
- Sürekli animasyon / parıltı / nabız efekti.
- Sert gölge, kalın siyah kontur (bu stil değil).
- 12px altı gövde metni; pastel üstünde pastel metin.
- Ödül animasyonunu form/ödeme ekranına taşımak.

## Görsel imza
- **Pastel yüzey + doygun vurgu:** `--surface-2` (#ffe3ec) pastel blok, `--accent` (#ff3d71) CTA.
- **Pembe gölge:** yumuşak, renkli; öğeyi "ışıklı" gösterir.
- **Büyük radius:** buton pill, kart 24px.
- **Mikro ödül:** tamamlanan görevde `scale(1→1.06→1)` + konfeti (tek sefer).
- **Poppins:** geometrik ve dost; başlık 700.
- **Streak/sayaç:** mono rakam + pill arka plan.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fffdf7` | sayfa | kart |
| `--bg-2` | `#fff3d6` | ikinci zemin (sıcak) | metin |
| `--surface` | `#ffffff` | kart | sayfa |
| `--surface-2` | `#ffe3ec` | pastel blok, ikincil kart | CTA |
| `--ink` | `#16121f` | tüm metin | — |
| `--ink-soft` | `#4a4358` | açıklama | başlık |
| `--ink-faint` | `#837b93` | dekoratif (3.96:1) | gövde metni |
| `--accent` | `#ff3d71` | CTA, aktif, ödül | geniş zemin (>%20) |
| `--accent-ink` | `#16121f` | accent üstü metin (**5.40:1**) | — |
| `--line` | `rgba(22,18,31,.10)` | kenarlık | metin |

- Ölçülen kontrast: `ink/bg` **18.10:1** · `ink-soft/bg` **9.24:1** · `ink-faint/bg` **3.96:1** · `accent-ink/accent` **5.40:1**.
- Accent üstünde **koyu** metin; beyaz 3.41:1 → yasak.
- İkincil renk olarak pastel sarı (#fff3d6) veya mint kullanılabilir; her biri ≤ %10.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poppins | 48px (mobil 30px) | 700 | 1.08 | `-0.01em` |
| H2 | Poppins | 28px | 700 | 1.15 | `0` |
| H3 | Poppins | 19px | 600 | 1.3 | `0` |
| Gövde | Poppins | 16px | 400 | 1.6 | `0` |
| Etiket | JetBrains Mono | 10px | 500 | 1.2 | `0.14em`, uppercase |
| Buton | Poppins | 15px | 700 | 1 | `0.01em` |

- Poppins dost ve geometrik; 16px gövde altına inme.
- Emoji ikon olarak kullanılabilir ama **metrye karışmaz**; en fazla 1 emoji/ekran (mikro ödül).
- Sayı/streak: mono tabular, 700.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (hero 6/6) |
| Gutter | 24px |
| Container | 1160px |
| Boşluk ölçeği | 8 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1160 px |
| Bölüm dikey | 64px (mobil 44px) |

- Kart aralığı 16px; pastel bloklar arasında en az 1 beyaz kart (nefes).
- Bir bölümde en fazla 2 doygun öğe (örn. 1 CTA + 1 badge).
- Ödül alanı (streak/kupa) sağ üstte sabit; içerik alanını kaplamaz.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | yok | sayfa |
| Kart | `--surface` | `--shadow` (pembe) | içerik |
| Yükseltilmiş | `--surface` | daha güçlü pembe gölge | CTA bloğu, modal |

- Derinlik yumuşak renkli gölgeden; sert gölge yok.
- Radius: `--radius` 18px (buton), `--radius-lg` 24px (kart); pill 999px serbest.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 24px | 999px | 15/700 | `--accent` + `--accent-ink` (koyu) + pembe gölge | hover: `translateY(-1px)` · active: `scale(.97)` · focus: 3px white + 2px accent halka · disabled: %40 |
| Buton (pastel) | 48px | 0 22px | 999px | 15/700 | `--surface-2` + `--ink` | hover: `--bg-2` |
| Input | 48px | 0 18px | 18px | 16/400 | `--surface` + 1px `--line` | focus: 2px `--accent` halka · error: `--danger` metin |
| Kart | içerik | 20px | 24px | H3 + 16 | `--surface` + `--shadow` | hover: `translateY(-2px)` |
| Chip / streak | 28px | 0 12px | 999px | 11/700 mono | pastel `--surface-2` + accent metin | aktif: accent zemin + koyu metin |
| Nav | 68px | 0 24px | — | 15/700 | `--bg` + alt 1px `--line` | aktif: pill accent |
| Tablo satırı | 54px | 12px 16px | 16px | 15/400 | satır arası 8px, gölge yok | hover: `--surface-2` |
| Modal | içerik | 24px | 24px | H2 + 16 | `--surface` + güçlü gölge | backdrop: `rgba(22,18,31,.35)` |
| Toast | 48px | 0 20px | 999px | 14/700 | accent + koyu metin | 4sn |
| Grafik | — | — | 8px uç | eksen 10 mono | accent + pastel sarı | 2 seri |

- Odak halkası: beyaz 3px + accent 2px (pastel zeminde accent tek başına zayıf).
- Dokunma hedefi 48px; ödül ikonları dekoratif olduğu için hedef değil.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 22px, yuvarlak uç; dolgulu serbest |
| Fotoğraf | Aydınlık, yüksek doygunluk, 24px radius |
| İllüstrasyon | Yuvarlak vektör; 3B obje küçük dozda (ödül ikonları) |
| Doku | Yok (`--grain: 0`) |
| Logo | Yuvarlak, kalın; renkli olabilir |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 48px başlık, pastel blok, tek accent CTA, sağda ödül kartı | `shots/01-landing.png` |
| Dashboard | orta | Streak/kupa sağ üstte; KPI'lar pastel, grafik 2 renk | `shots/02-dashboard.png` |
| Form | düşük | 480px, 48px input, tek pill buton; ödül animasyonu yok | — |
| Liste / tablo | düşük | Satır 54px, pastel hover; accent yalnız durum | — |
| Boş durum | yüksek | Ödül illüstrasyonu + tek cümle + pill buton | — |
| Onboarding | yüksek | Sayfa başına 1 kazanım; ilerleme pill; tamamlanınca konfeti | — |
| Pricing | orta | 3 kart, orta kart accent gölge + "popüler" pill | — |
| Giriş / ödeme | çok düşük | Doygun rengi azalt; sade kart, tek buton | — |
| Modal | orta | 24px radius, güçlü gölge | — |
| Bildirim / toast | yüksek | Pill + ödül ikonu, 4sn | — |
| Hata | düşük | Sevimli ama sakin dil; `--danger` yalnız ikon | — |
| Profil / ayar | orta | Ayar satırı 56px, pill toggle | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `ease-out` | `transform: scale(.97)` |
| Giriş | 360ms | `cubic-bezier(.34,1.4,.64,1)` | `opacity` + 18px `translateY`, stagger 50ms |
| Scroll (`top 89%`) | 300ms | aynı eğri | `opacity` + 16px `translateY`, `once: true` |
| Hover | 130ms | aynı eğri | `transform: scale(1.03)` |
| Ödül | 400ms | `cubic-bezier(.34,1.5,.64,1)` | `scale(1→1.06→1)` + konfeti |

- Ödül hareketi **eylem başına bir kez**; aynı ekranda 2. ödül 1 sn içinde tetiklenmez.
- `prefers-reduced-motion`: tüm ödül animasyonları kapanır (konfeti dahil).

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#fffdf7` | `#14101a` |
| `--surface` | `#ffffff` | `#211b2b` |
| `--surface-2` | `#ffe3ec` | `#3a2430` |
| `--ink` | `#16121f` | `#fdf7f9` |
| `--ink-soft` | `#4a4358` | `#b9b1c6` |
| `--accent` | `#ff3d71` | `#ff5d8a` |
| `--accent-ink` | `#16121f` | `#14101a` |

- Koyu modda pastel bloklar %40 opaklıkla kullanılır; pembe gölge koyu tonda (`rgba(0,0,0,.45)`).

## Erişilebilirlik

- Gövde 18.10:1, açıklama 9.24:1 → güvenli. `--ink-faint` 3.96:1 → etkileşimli değil.
- Accent üstü **koyu** metin 5.40:1; beyaz metin yasak.
- Doygun renk yorgunluğu: accent alanı ≤ %20, bir ekranda tek hue.
- Ödül animasyonu: eylem başına 1, ≤ 400ms; `prefers-reduced-motion` zorunlu (vestibüler risk).
- Odak halkası çift katman (beyaz + accent); pastel zeminde görünür.
- Dokunma hedefi 48px.

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
| Ucuz/oyuncak | Accent %40'ı geçmiş, 3+ doygun renk | Accent ≤ %20, tek hue |
| Okunmuyor | Accent üstünde beyaz metin | Koyu metin (5.40:1) |
| Yorgunluk | Sürekli parıltı/nabız | Ödül yalnız eylemde, 1 kez |
| Kimlik kaybı | Her kart farklı renk | Pastel + tek doygun hue |
| Güven kaybı | Ödeme ekranında ödül animasyonu | Ödeme/girişte süs kapat |

## Komşu stiller

- **Uyumlu:** `11 claymorphism` (pastel + yumuşaklık), `16 memphis` (neşe), `05 bento-grid` (ödül panosu).
- **Yasak:** `02 swiss-design` (rasyonel sessizlik), `33 dark-academia` (ciddiyet), `34 skeuomorphism` (malzeme gerçekliği).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://dribbble.com/tags/dopamine_ui | Renk oranı örnekleri |
| https://mobbin.com | Streak/ödül akışları |
| https://developer.apple.com/design/human-interface-guidelines/motion | Hareket ve vestibüler erişilebilirlik |

## AI brief

```
Stil: Dopamine UI (styles/18-dopamine-ui/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="dopamine-ui"]; hard-coded renk YASAK.
Renk bütçesi: doygun accent ≤ %20 ekran alanı, bir ekranda tek hue (#ff3d71); pastel #ffe3ec destek.
Accent üstünde KOYU metin (#16121f, 5.40:1); beyaz metin YASAK.
Radius: buton pill/18px, kart 24px; gölge yumuşak ve renkli (0 10px 24px rgba(255,61,113,.18)).
Tipografi: Poppins display 700 (48/1.08) + gövde 16/1.6; etiket mono 10 uppercase; streak sayıları mono tabular.
Ödül: eylem başına 1 animasyon (scale 1→1.06→1, ≤400ms) + konfeti; sürekli parıltı yasak.
Yoğun/kritik ekran (form, ödeme): doygun rengi azalt, ödül animasyonu kapalı.
Yasak: 3+ doygun renk, accent üstü beyaz metin, sürekli animasyon, sert gölge, pastel üstünde pastel metin.
Çıktı: kod + tek paragraf not (renk oranı ve ödül disiplini).
```

**Teslim öncesi öz-denetim**
- [ ] Accent ≤ %20, tek doygun hue.
- [ ] Accent üstü koyu metin (5.40:1).
- [ ] Radius 18/24, gölge renkli ve yumuşak.
- [ ] Ödül animasyonu eylem başına 1, ≤ 400ms.
- [ ] Ödeme/giriş ekranında süs kapalı.
- [ ] `prefers-reduced-motion` konfeti dahil kapatıyor.

## Token

```css
[data-style="dopamine-ui"] {
  --bg: #fffdf7; --bg-2: #fff3d6;
  --surface: #ffffff; --surface-2: #ffe3ec;
  --ink: #16121f; --ink-soft: #4a4358; --ink-faint: #837b93;
  --accent: #ff3d71; --accent-ink: #16121f;
  --line: rgba(22,18,31,.10);
  --radius: 18px; --radius-lg: 24px;
  --shadow: 0 10px 24px rgba(255,61,113,.18); --shadow-hard: none;
  --font-display: "Poppins", "Inter", system-ui, sans-serif;
  --font-body: "Poppins", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
