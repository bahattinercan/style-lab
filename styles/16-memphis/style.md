# 16 · Memphis

> **Bir cümlede:** 80'ler Memphis grubunun neşesi: kalın siyah kontur, düz doygun renk, zikzak/nokta/daire geometrisi ve ofset gölge.

| | |
|---|---|
| **Hissiyat** | neşeli, oyuncu, geometrik, "poster" |
| **En iyi** | etkinlik/festival, çocuk/eğitim, oyun, topluluk, indie marka |
| **Kaçın** | finans, sağlık, kurumsal B2B, uzun okuma |
| **Zorluk** | orta (dağınıklığa kayma riski) · **Erişilebilirlik** | orta |
| **Aile** | Cesur (13–18) · **Token** | `kit/tokens.css` → `[data-style="memphis"]` |
| **Kompozisyon** | `split` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
1981 Memphis Group estetiğinin arayüz hali: **3px siyah kontur**, **düz doygun renkler** (kırmızı, sarı, turkuaz), **geometrik dekor** (daire, zikzak, nokta), **3px ofset gölge** ve yuvarlak hatlı tipografi (Poppins). Süs boldur ama **konturlu ve hizalı** olduğu için dağılmaz.

Kazandığı şey: neşe ve hatırlanma. Feda ettiği şey: ciddiyet; ayrıca süs kontrol edilmezse okunurluk düşer.

### Ne değildir
- **Neo-brutalism değildir.** Orada süs yok, sadece sert dil; Memphis **dekoratif geometri** ekler.
- **Anti-design değildir.** Memphis ızgaraya oturur; anti-design ızgarayı bozar.
- **Dopamine UI değildir.** Dopamine ödül/parlaklık; Memphis grafik dil (kontur + geometri).
- **"Renkli çocuk arayüzü" değildir.** Kontur kalınlığı ve gölge ofseti tutarlı değilse sonuç dağınık olur.

### Nereden gelir
Ettore Sottsass ve Memphis Group (1981); 2010'larda "80'ler revival" ile dijitale döndü. Etkinlik ve topluluk ürünlerinde, oyun arayüzlerinde kullanılıyor.

### 3 saniyede tanıma testi
1. Kenarlıklar **siyah ve 3px** mı?
2. Gölge **3px ofset** (blur yok) mu?
3. Dekor geometrisi var mı (daire/zikzak/nokta), konturlu mu?
4. Renkler düz doygun mu (kırmızı, sarı, turkuaz)?
5. Süs **sayılı** mı (ekran başına 3–4 şekil)?

## Zorunlu kurallar

1. **Kontur 3px siyah**, tüm bileşenlerde aynı kalınlık.
2. **Ofset gölge** `3px 3px 0 #111` — blur yok, tek yön.
3. **Dekor bütçesi:** ekran başına en fazla 4 geometrik şekil; hepsi konturlu.
4. **Düz renkler:** en fazla 3 doygun renk (kırmızı, sarı, turkuaz) + siyah/krem.
5. **Radius 10/18px** — tam daire dekorasyon serbest, bileşende 999px yok.
6. **Metin kontrastı ≥ 4.5:1**; dekor metnin arkasına geçmez (z-index).

## Yasaklar

- Gradyan, blur, cam, gölge çeşitliliği (sadece 3px ofset).
- Dekoru metnin üstüne bindirmek.
- 4'ten fazla geometrik şekil / her bölümde farklı dekor dili.
- İnce (1px) kontur.
- Doygun renkte metin (kırmızı üstüne kırmızı).
- Yoğun tabloda tam dekor.

## Görsel imza
- **Kontur + ofset:** 3px siyah kenar, `3px 3px 0` gölge; hover'da öğe gölge yönüne kayar.
- **Dekor:** içi boş daire, zikzak şerit, üçgen, nokta ızgarası — hepsi 2–3px konturlu.
- **Renk bloğu:** sarı (`--surface-2`) ikinci zemin, kırmızı accent.
- **Tipografi:** Poppins 700, geometrik; başlıkta hafif negatif tracking.
- **Doku:** yok (`--grain: 0`) — düz renk, temiz kontur.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fff6e9` | sayfa (krem) | kart |
| `--bg-2` | `#ffe8cc` | bölüm zemini | metin |
| `--surface` | `#ffffff` | kart | sayfa |
| `--surface-2` | `#ffd400` | sarı blok, chip, KPI vurgusu | uzun metin zemini |
| `--ink` | `#111111` | metin + **tüm konturlar** | — |
| `--ink-soft` | `#3d3d3d` | açıklama | kontur |
| `--ink-faint` | `#767676` | dekoratif (4.24:1) | gövde metni |
| `--accent` | `#ff4e50` | CTA, aktif, dekor | metin rengi |
| `--accent-ink` | `#111111` | accent üstü metin (**5.81:1**) | — |
| `--line` | `#111111` | 3px kontur | metin |

- Ölçülen kontrast: `ink/bg` **17.63:1** · `ink-soft/bg` **10.14:1** · `ink-faint/bg` **4.24:1** · `accent-ink/accent` **5.81:1**.
- Accent üstünde **siyah** metin (beyaz 3.25:1 → yasak).
- Yasak: 4. doygun renk; pastel tonlar; gradient.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poppins | 56px (mobil 32px) | 700 | 1.05 | `-0.02em` |
| H2 | Poppins | 32px | 700 | 1.1 | `-0.01em` |
| H3 | Poppins | 20px | 600 | 1.25 | `0` |
| Gövde | Poppins | 16px | 400 | 1.6 | `0` |
| Etiket | JetBrains Mono | 10px | 500 | 1.2 | `0.14em`, uppercase |
| Buton | Poppins | 15px | 700 | 1 | `0.02em` |

- Poppins geometrik; uzun metinde yorucu → gövde 60ch ile sınırla.
- Başlık 700, gövde 400; 500 ara ağırlık kullanma (karakter bulanır).
- 16px altı gövde yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (hero 6/6, dekor sağda) |
| Gutter | 24px |
| Container | 1160px |
| Boşluk ölçeği | 8 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1160 px |
| Bölüm dikey | 72px (mobil 48px) |

- Dekor **kenarlarda ve boşlukta** durur; metnin arkasına geçmez.
- Bir bölümde en fazla 1 tam genişlik sarı blok.
- Kart aralığı 16px; gölge payı için 12px ek boşluk bırak.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Panel | `--surface` + 3px ink | `--shadow` (3px ofset) | kart |
| Yüzen | `--surface` + 3px ink | `6px 6px 0` | modal |

- Derinlik ofsetten; blur yok.
- Radius: `--radius` 10px (buton/input), `--radius-lg` 18px (kart).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 22px | 10px | 15/700 | `--accent` + siyah metin + 3px ink + `3px 3px 0` | hover: `translate(3px,3px)` + gölge 0 · focus: 3px ink dış halka · disabled: %40 |
| Buton (sarı) | 48px | 0 20px | 10px | 15/700 | `--surface-2` + 3px ink | hover: aynı basılma |
| Input | 48px | 0 14px | 10px | 15/400 | `--surface` + 3px ink | focus: 3px `--accent` dış halka · error: `--danger` 3px |
| Kart | içerik | 20px | 18px | H3 + 15 | `--surface` + 3px ink + 3px ofset | hover: `translate(-2px,-2px)` + 5px |
| Chip | 26px | 0 10px | 999px | 11/600 | sarı + 2px ink | aktif: kırmızı + siyah metin |
| Nav | 72px | 0 28px | — | 15/700 | `--bg` + 3px alt | aktif: 6px alt kırmızı |
| Tablo satırı | 52px | 12px 16px | — | 14/400 | 2px ink alt | hover: `--bg-2` |
| Modal | içerik | 24px | 18px | H2 + 15 | `--surface` + 3px ink + `8px 8px 0` | backdrop: `rgba(17,17,17,.35)` |
| Toast | 48px | 0 18px | 10px | 14/700 | sarı + 3px ink | 4sn |
| Grafik | — | — | 4px uç | eksen 10 mono | kırmızı + sarı + 3px ink çerçeve | 3 seri |

- Odak halkası 3px ink, offset 3px.
- Dokunma hedefi 48px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 3px çizgi, 24px, geometrik |
| Fotoğraf | Yüksek kontrast, düz renk overlay; 18px radius |
| İllüstrasyon | Geometrik şekiller (daire, zikzak, üçgen), konturlu |
| Doku | Yok |
| Logo | Kalın, geometrik sans; konturlu sticker içinde serbest |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 56px başlık, 3–4 konturlu geometri, sarı blok, tek kırmızı buton | `shots/01-landing.png` |
| Dashboard | düşük | Dekor kapanır; kartlar kontur + ofset, KPI sayıları sade | `shots/02-dashboard.png` |
| Form | düşük | 3px kontur kalır, dekor yok | — |
| Liste / tablo | düşük | 2px ayırıcı, zebra sarı %20 | — |
| Boş durum | yüksek | 1 büyük geometri + tek cümle + buton | — |
| Onboarding | yüksek | Adım başına 1 illüstrasyon + kısa metin | — |
| Pricing | yüksek | 3 konturlu kart, orta kart sarı + "popüler" sticker | — |
| Giriş / ödeme | çok düşük | Dekor yok, kontur + tek buton | — |
| Modal | orta | 8px ofset gölge | — |
| Bildirim / toast | orta | Sarı toast + 3px kontur | — |
| Hata | düşük | Kırmızı kontur + 14px sakin dil | — |
| Profil / ayar | düşük | Kart listesi, dekor minimum | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 100ms | `ease-out` | `translate(3px,3px)` + gölge 0 |
| Giriş | 300ms | `cubic-bezier(.34,1.6,.64,1)` | `opacity` + 14px `translateY`, stagger 40ms |
| Scroll (`top 87%`) | 280ms | aynı eğri | `opacity` + 16px `translateY`, `once: true` |
| Hover | 100ms | aynı eğri | `transform: scale(1.03)` |
| Ödül | 260ms | `cubic-bezier(.34,1.6,.64,1)` | dekor şekli `scale(1.1)` tek sefer |

- Enerjik ama 300ms üstüne çıkma.
- `prefers-reduced-motion`: ölçek kapanır, sadece opacity.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#fff6e9` | `#141210` |
| `--surface` | `#ffffff` | `#1e1a16` |
| `--surface-2` | `#ffd400` | `#e8c000` |
| `--ink` | `#111111` | `#fff6e9` |
| `--accent` | `#ff4e50` | `#ff4e50` |
| `--accent-ink` | `#111111` | `#111111` |
| `--line` | `#111111` | `#fff6e9` |

- Koyu modda kontur açık renge döner; ofset gölge açık renk %20 opaklık.

## Erişilebilirlik

- Gövde 17.63:1, açıklama 10.14:1 → güvenli; `--ink-faint` 4.24:1 → etkileşimli değil.
- Accent üstü siyah 5.81:1; beyaz yasak (3.25:1).
- Dekor konturlu ve metnin arkasında değil → okunurluk korunur.
- Hareket enerjik: `prefers-reduced-motion` şart, sarsıntı/salınım yok.
- Dokunma hedefi 48px; küçük chip'ler tıklanabilir olmaz.
- Sarı blok üstünde metin siyah (13:1); sarı üstünde kırmızı yasak.

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
| Dağınık | 6+ dekor, karışık kontur | Dekor ≤ 4, kontur tek kalınlık |
| Okunmuyor | Dekor metnin üstünde | Dekoru kenara al, z-index düşür |
| "Çocuk uygulaması" | Pastel + çok renk | Doygun 3 renk + siyah kontur |
| Karakter kaybı | 1px kontur | 3px'e çıkar, ofset gölge ekle |
| Hover hissi yok | Gölge büyüyor | Hover'da gölge küçülür, öğe kayar |

## Komşu stiller

- **Uyumlu:** `13 neo-brutalism` (kontur + düz renk), `18 dopamine-ui` (neşe), `24 pixel-art` (retro geometri).
- **Yasak:** `02 swiss-design` (rasyonel sessizlik), `33 dark-academia` (ciddiyet), `04 luxury-typography` (seyrek lüks).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.memphis-milano.com | Orijinal geometri dili |
| https://fonts.google.com/specimen/Poppins | Geometrik sans |
| https://www.awwwards.com/websites/80s/ | 80'ler revival örnekleri |

## AI brief

```
Stil: Memphis (styles/16-memphis/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="memphis"]; hard-coded renk YASAK.
Kontur: 3px solid #111 tüm bileşenlerde; ofset gölge 3px 3px 0 #111 (blur yok).
Dekor: ekran başına ≤ 4 konturlu geometri (daire/zikzak/üçgen/nokta); metnin arkasına geçmez.
Renk: krem #fff6e9 + sarı #ffd400 + kırmızı #ff4e50 (üstünde SİYAH metin 5.81:1); 4. doygun renk yok.
Tipografi: Poppins display 700 (56/1.05 -0.02em) + gövde 16/1.6; etiket mono 10 uppercase.
Radius 10/18px; hover'da öğe gölge yönüne kayar (translate(3px,3px)), gölge 0.
Hareket: 100–260ms, hafif yay; reduced-motion'da ölçek kapanır.
Yasak: 1px kontur, gradient, blur, dekor metin üstünde, 4+ doygun renk, yoğun tabloda dekor.
Çıktı: kod + tek paragraf not (dekor sayısı ve kontur tutarlılığı).
```

**Teslim öncesi öz-denetim**
- [ ] Tüm konturlar 3px, tüm gölgeler 3px ofset.
- [ ] Dekor ≤ 4 ve konturlu; metnin arkasında değil.
- [ ] Doygun renk ≤ 3 + siyah; accent üstünde siyah metin.
- [ ] Radius 10/18px.
- [ ] Yoğun ekranda dekor kapatıldı.
- [ ] Hover'da gölge küçülüyor.

## Token

```css
[data-style="memphis"] {
  --bg: #fff6e9; --bg-2: #ffe8cc;
  --surface: #ffffff; --surface-2: #ffd400;
  --ink: #111111; --ink-soft: #3d3d3d; --ink-faint: #767676;
  --accent: #ff4e50; --accent-ink: #111111;
  --line: #111111;
  --radius: 10px; --radius-lg: 18px;
  --shadow: 3px 3px 0 #111111; --shadow-hard: 0 0 0 #111111;
  --font-display: "Poppins", "Baloo 2", system-ui, sans-serif;
  --font-body: "Poppins", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
