# 11 · Claymorphism

> **Bir cümlede:** Kil gibi şişkin, pastel ve oyuncak yüzeyler: iç gölge + dış gölge + kalın yuvarlak hat, dokunulabilir "oyun hamuru" hissi.

| | |
|---|---|
| **Hissiyat** | sevimli, şişkin, davetkâr, oyunlaştırılmış |
| **En iyi** | onboarding, çocuk/eğitim, wellness, sadakat programı, tüketici uygulaması |
| **Kaçın** | kurumsal B2B, finans güven ekranı, veri yoğun panel, ciddi sağlık |
| **Zorluk** | düşük · **Erişilebilirlik** | orta (pastel kontrast riski) |
| **Aile** | Yüzey (08–12) · **Token** | `kit/tokens.css` → `[data-style="claymorphism"]` |
| **Kompozisyon** | `centered` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Claymorphism, 3B kil modelleme estetiğinin arayüze indirgenmesi: **32px radius**, **iç gölge ile hacim** (üst açık, alt koyu) + **dış yumuşak gölge**, pastel palet ve yuvarlak hatlı tipografi (Baloo 2 / Nunito). Her öğe "tutulabilir" görünür; düğmeler hafifçe şişkindir.

Kazandığı şey: yaklaşılabilirlik ve oyun hissi — korkutucu olmayan form, düşük bilişsel baskı. Feda ettiği şey: ciddiyet ve bilgi yoğunluğu.

### Ne değildir
- **Neumorphism değildir.** Neumorphism tek renkli ve sesses; clay **renkli** ve pastel, iç gölge daha belirgin.
- **Dopamine UI değildir.** Dopamine doygun renk + ödül patlaması; clay yumuşak pastel ve sakin neşe.
- **3B illüstrasyon değildir.** Stil CSS ile kurulur; render edilmiş 3B obje zorunlu değildir (küçük dozlarda garnitür).
- **"Yuvarlak köşe" değildir.** İç gölge ile hacim yoksa sadece "yumuşak kart" olur.

### Nereden gelir
2021–2022'de 3B ikon/kil render trendiyle yayıldı; eğitim, finans-onboarding ve çocuk ürünlerinde benimsendi. Kalabalık ve soğuk fintech arayüzlerine "insan yüzü" eklemek için kullanılıyor.

### 3 saniyede tanıma testi
1. Köşe yarıçapı ≥ 24px mi (kart 32px)?
2. Öğelerde **iç gölge** var mı (üst açık, alt koyu hacim)?
3. Palet pastel mi (beyaz üstünde yumuşak mor/lavanta)?
4. Tipografi yuvarlak hatlı mı (Baloo/Nunito)?
5. Gölge her yerde aynı yönde ve yumuşak mı?

## Zorunlu kurallar

1. **Radius 24/32px:** buton 24px (pill serbest), kart 32px.
2. **Hacim üçlüsü:** dış gölge (`0 12px 24px accent %18`) + iç gölge koyu (`inset -6px -8px 16px ink %10`) + iç gölge açık (`inset 6px 8px 16px white %65`).
3. **Pastel palet:** ink koyu mor (`#2b2350`), accent orta mor (`#6f4df0`); doygun kırmızı/neon yok.
4. **Yuvarlak tipografi:** Baloo 2 (display) + Nunito (gövde).
5. **Gölge disiplini:** tüm gölgeler aynı yön (üst-sol açık, alt-sağ koyu), yumuşak.
6. **Kontrast tabanı:** gövde `--ink` (12.75:1), `--ink-faint` sadece dekoratif.

## Yasaklar

- Radius < 16px (sertlik hissi), köşeli buton.
- Sadece dış gölge (hacim yok → "karton" görünür).
- Doygun/neon renk, siyah metin (#000), gri skala.
- Keskin gölge, kalın kontur, cam efekti.
- Pastel accent üstü açık metin (kontrast düşer) — beyaz metin accent üstünde 5.26:1 olacak şekilde accent koyulaştırıldı, daha açık ton kullanma.
- Veri yoğun tabloda tam stil (okunmaz).

## Görsel imza
- **Hacim:** üç gölge katmanı birlikte; tek başına dış gölge yetersiz.
- **Şişkin buton:** 48px yükseklik, 999px pill veya 24px radius, alt kenarda koyu iç gölge.
- **Pastel blok:** `--surface-2` (#f6f2ff) ile ikincil alan; doygun accent yalnızca CTA.
- **Yuvarlak ikon:** daire içinde, kalın çizgi (2px).
- **Doku yok:** pürüzsüz yüzey (`--grain: 0`) — kil "temiz" olmalı.
- **Yumuşak hareket:** 220–320ms, hafif yay (`scale(.97→1)`).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f3efff` | sayfa (lavanta) | kart |
| `--bg-2` | `#e9e3ff` | ikincil zemin | buton |
| `--surface` | `#ffffff` | kart, input | sayfa zemini |
| `--surface-2` | `#f6f2ff` | ikincil kart, hover | birincil buton |
| `--ink` | `#2b2350` | tüm metin (koyu mor) | — |
| `--ink-soft` | `#5b5382` | açıklama | 12px altı |
| `--ink-faint` | `#8d87ad` | dekoratif etiket (3.00:1) | gövde metni |
| `--accent` | `#6f4df0` | CTA, aktif, ikon | geniş zemin |
| `--accent-ink` | `#ffffff` | accent üstü metin (**5.26:1**) | — |
| `--line` | `rgba(255,255,255,.7)` | iç kenar highlight | metin |

- Ölçülen kontrast: `ink/bg` **12.75:1** · `ink-soft/bg` **6.19:1** · `ink-faint/bg` **3.00:1** · `accent-ink/accent` **5.26:1**.
- Accent erişilebilirlik için koyulaştırıldı (`#7c5cff` → `#6f4df0`); daha açık mor kullanma.
- Yasak: siyah metin, neon pembe, ikinci accent, gradient zemin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 | 44px (mobil 28px) | 600 | 1.15 | `0` |
| H2 | Baloo 2 | 28px | 600 | 1.2 | `0` |
| H3 | Nunito | 19px | 700 | 1.3 | `0` |
| Gövde | Nunito | 16px | 400 | 1.6 | `0` |
| Etiket | JetBrains Mono | 10px | 500 | 1.2 | `0.14em`, uppercase |
| Buton | Nunito | 15px | 700 | 1 | `0.01em` |

- Baloo 2 zaten yuvarlak; ek tracking verme (harfler birbirine değer).
- Gövde 16px/1.6, satır 60ch; başlık 22ch.
- Display'de 700 yerine 600: aşırı kalın "çizgi film" hissi verir.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 8) |
| Gutter | 24px |
| Container | 1120px |
| Boşluk ölçeği | 8 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1120 px |
| Bölüm dikey | 72px (mobil 48px) |

- Öğe arası boşluk ≥ 20px: gölgeler birbirine karışmaz.
- Kart içi padding 24px (gölge payı için).
- Bir bölümde en fazla 4 büyük "şişkin" blok; gerisi düz metin.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Şişkin kart | `--surface` | `--shadow` (üç katman) | kart, modal |
| Yükseltilmiş | `--surface` | `--shadow-hard` (dış, daha derin) | hero kart, FAB |

- Derinlik hacimden (iç gölge) ve yumuşak dış gölgeden.
- Radius: `--radius` 24px (buton/input), `--radius-lg` 32px (kart/modal); pill 999px serbest.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 24px | 999px | 15/700 | `--accent` + `--accent-ink` + `--shadow-hard` | hover: `translateY(-1px)` · active: `scale(.97)` · focus: 3px white halka + 2px accent · disabled: %40 |
| Buton (pastel) | 48px | 0 22px | 999px | 15/700 | `--surface-2` + `--shadow` | hover: `--bg-2` |
| Input | 48px | 0 18px | 24px | 16/400 | `--surface` + iç gölge (`--shadow-hard` değil, hafif inset) | focus: 2px `--accent` halka · error: `--danger` metin + ikon |
| Kart | içerik | 24px | 32px | H3 + 16 gövde | `--surface` + `--shadow` | hover: `translateY(-2px)` |
| Chip | 30px | 0 14px | 999px | 11/700 | `--surface-2` + `--line` | aktif: accent + beyaz |
| Nav | 72px | 0 32px | — | 15/700 | `--bg` + alt 1px `--line` | aktif: pill `--surface` |
| Tablo satırı | 56px | 12px 16px | 16px | 15/400 | satır arası 8px boşluk, gölge yok | hover: `--surface-2` |
| Modal | içerik | 28px | 32px | H2 + 16 | `--surface` + `--shadow` | backdrop: `rgba(43,35,80,.28)` |
| Toast | 48px | 0 20px | 999px | 14/700 | `--ink` + `--bg` | 4sn |
| Grafik | — | — | 8px uç | eksen 10 mono | `--accent` + `--surface-2` | 2 seri |

- Odak halkası: beyaz 3px + accent 2px (lavanta zeminde accent tek başına zayıf).
- Dokunma hedefi 48px (şişkin öğelerde görsel hedefe eşit).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, daire içinde, 22px; dolgulu ikon serbest |
| Fotoğraf | Yumuşak ışık, pastel fon; kenar 32px radius |
| İllüstrasyon | Kil/3B render veya yuvarlak vektör; küçük dozda |
| Doku | Yok (pürüzsüz kil) |
| Logo | Yuvarlak wordmark, `--ink` |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 44px yuvarlak başlık, tek pastel kart, 2 pill CTA, küçük 3B illüstrasyon | `shots/01-landing.png` |
| Dashboard | düşük | En fazla 4 şişkin KPI kartı; veri yoğunsa düz tablo | `shots/02-dashboard.png` |
| Form | düşük | 480px tek sütun, 48px input, tek pill buton | — |
| Liste / tablo | çok düşük | Gölgeyi kapat, boşluk + kalın sayı; satır 56px | — |
| Boş durum | yüksek | Sevimli illüstrasyon + tek cümle + pill buton | — |
| Onboarding | yüksek | Sayfa başına 1 fikir, ilerleme şişkin nokta; ödül animasyonu | — |
| Pricing | orta | 3 pastel kart, orta kart accent halka + "popüler" chip | — |
| Giriş / ödeme | çok düşük | Şişkinliği azalt, sade input + tek buton | — |
| Modal | orta | 32px radius, yumuşak gölge | — |
| Bildirim / toast | yüksek | Pill toast, koyu metin, hafif yay | — |
| Hata | düşük | Sevimli ikon + 14px sakin dil (suçlayıcı değil) | — |
| Profil / ayar | orta | Ayar satırı 56px, pill toggle | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `ease-out` | `transform: scale(.97)` |
| Giriş | 600ms | `back.out(1.4)` | `opacity` + 18px `translateY`, stagger 80ms |
| Scroll (`top 84%`) | 700ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 300ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 320ms | `cubic-bezier(.34,1.5,.64,1)` | `scale(1→1.06→1)`, tek sefer |

- Yay hareketi bu stilin imzası; ama ekran başına 1 ödül animasyonu.
- `prefers-reduced-motion`: ölçek animasyonu kapanır, sadece opacity.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f3efff` | `#1a1630` |
| `--surface` | `#ffffff` | `#241f3d` |
| `--surface-2` | `#f6f2ff` | `#2c2649` |
| `--ink` | `#2b2350` | `#ece7ff` |
| `--ink-soft` | `#5b5382` | `#b4add6` |
| `--accent` | `#6f4df0` | `#8b6dff` |
| `--accent-ink` | `#ffffff` | `#14102a` |

- Koyu modda iç gölge highlight'ı beyaz yerine `%10 beyaz` olur; aksi halde parlar.

## Erişilebilirlik

- Gövde 12.75:1, açıklama 6.19:1 → güvenli. `--ink-faint` 3.00:1 → yalnızca dekoratif.
- Accent üstü beyaz 5.26:1 → buton metni AA geçer; 13px altına inme.
- Pastel zemin + pastel buton kombinasyonu riskli: buton accent koyu olmalı (yoksa sınır kaybolur).
- Odak halkası beyaz + accent çift katman; lavanta zeminde tek accent zayıf.
- Hareket: yay efekti vestibüler hassasiyeti olan kullanıcıda rahatsız edebilir → `prefers-reduced-motion` şart.
- Dokunma hedefi 48px; çocuk kullanıcı için 52px tercih edilir.

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
| "Karton" görünüyor | Sadece dış gölge var | İç gölge (koyu+açık) ekle |
| Ciddiyetsiz/çocukça | Her yerde doygun renk + büyük radius | Pasteli azalt, gövde metnini nötr tut |
| Okunmuyor | Pastel üstü pastel metin | `--ink` koyu mor, kontrast ≥ 4.5:1 |
| Dağınık | Farklı gölge yönleri | Tek ışık yönü |
| Kurumsal güven kaybı | Ödeme ekranında tam stil | Ödeme/girişte şişkinliği azalt |

## Komşu stiller

- **Uyumlu:** `18 dopamine-ui` (pastel + canlı, aynı oyuncu ton), `10 neumorphism` (yumuşak yüzey dili), `16 memphis` (oyuncu geometri, garnitür).
- **Yasak:** `02 swiss-design` (rasyonel ızgara), `22 cyberpunk` (kir/neon), `33 dark-academia` (ciddiyet).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Baloo+2 | Yuvarlak display karakteri |
| https://dribbble.com/tags/claymorphism | İç gölge/hacim örnekleri |
| https://mobbin.com | Onboarding ve boş durum örnekleri |

## AI brief

```
Stil: Claymorphism (styles/11-claymorphism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="claymorphism"]; hard-coded renk/gölge YASAK.
Hacim üçlüsü: dış gölge (--shadow) + inset koyu (ink %10) + inset açık (beyaz %65); yön tek (üst-sol açık).
Radius: buton/input 24px veya 999px pill, kart 32px.
Tipografi: Baloo 2 display 600 (44/1.15) + Nunito gövde 16/1.6; etiket mono 10 uppercase.
Renk: pastel lavanta zemin (#f3efff), accent #6f4df0 (beyaz metin 5.26:1) — daha açık mor kullanma.
Hareket: 120–320ms, cubic-bezier(.34,1.4,.64,1); basınca scale(.97); ekran başına 1 ödül animasyonu.
Yasak: radius <16px, sadece dış gölge, doygun/neon renk, siyah metin, keskin gölge, cam.
Çıktı: kod + tek paragraf not (hacmi nasıl kurduğun ve kontrastı nasıl koruduğun).
```

**Teslim öncesi öz-denetim**
- [ ] Her yüzeyde iç + dış gölge var (hacim).
- [ ] Radius ≥ 24px, butonlar pill/24px.
- [ ] Palet pastel; accent üstü beyaz 5.26:1.
- [ ] Gövde metni `--ink`, `--ink-faint` dekoratif.
- [ ] Ödeme/giriş ekranında şişkinlik azaltıldı.
- [ ] `prefers-reduced-motion` ödül animasyonunu kapatıyor.

## Token

```css
[data-style="claymorphism"] {
  --bg: #f3efff; --bg-2: #e9e3ff;
  --surface: #ffffff; --surface-2: #f6f2ff;
  --ink: #2b2350; --ink-soft: #5b5382; --ink-faint: #8d87ad;
  --accent: #6f4df0; --accent-ink: #ffffff;
  --line: rgba(255,255,255,.7);
  --radius: 24px; --radius-lg: 32px;
  --shadow: 0 12px 24px rgba(124,92,255,.18), inset -6px -8px 16px rgba(43,35,80,.10), inset 6px 8px 16px rgba(255,255,255,.65);
  --shadow-hard: 0 16px 28px rgba(124,92,255,.22);
  --font-display: "Baloo 2", "Poppins", "Nunito", system-ui, sans-serif;
  --font-body: "Nunito", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
