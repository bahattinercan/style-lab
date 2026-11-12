# 35 · Bauhaus

> **Bir cümleyle:** Geometri ve temel renk: kalın siyah çizgiler, daire–kare–üçgen, asimetrik denge ve sıfır süs.

| | |
|---|---|
| **Hissiyat** | cesur, akılcı, dönemsel, "afiş" |
| **En iyi** | kültür/sanat kurumu, ajans vitrini, etkinlik afişi, eğitim platformu |
| **Kaçın** | sağlık verisi, finans işlemi, uzun okuma, kurumsal B2B form |
| **Zorluk** | orta (denge ve renk bütçesi) · **Erişilebilirlik** | iyi (yüksek kontrast) |
| **Aile** | Geometrik (35) · **Token** | `kit/tokens.css` → `[data-style="bauhaus"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Bauhaus (1919–1933) tasarım okulunun dili: **temel geometri** (daire, kare, üçgen), **temel renkler** (kırmızı, sarı, mavi + siyah), **kalın çizgi**, **asimetrik denge** ve işlevsel tipografi. Süs yoktur; ritim geometriden gelir.

Kazandığı şey: anında tanınan, yüksek enerjili bir kimlik. Feda ettiği şey: nüans — yoğun veri ekranlarında geometri gürültüye dönüşür.

### Ne değildir
- **Swiss Design değildir.** Swiss ızgara ve tipografik hiyerarşi; Bauhaus **şekil ve renk** kompozisyonu.
- **Neo-brutalism değildir.** Neo-brutalism gölge/offset ve dijital estetik; Bauhaus düz renk ve çizgi.
- **Memphis değildir.** Memphis oyuncu/dağınık; Bauhaus disiplinli ve simetrik olmayan dengede.
- **"Kalın kenarlık" değildir.** Daire/kare/üçgen kompozisyonu olmadan sadece sert bir arayüz kalır.

### Nereden gelir
Bauhaus afişleri, Kandinsky/Klee kompozisyon dersleri, 20. yüzyıl grafik tasarımı; bugün kültür kurumları ve tasarım stüdyoları.

### 3 saniyede tanıma testi
1. Kalın (≥2px) siyah çizgi/kenarlık var mı?
2. Daire + kare + üçgen aynı kompozisyonda mı?
3. Palet 3 renk + siyah mı (kırmızı başat)?
4. Radius 0 mı, gölge yok mu (ya da tek blok gölge)?
5. Başlıklar büyük harf ve çok kalın mı?

## Zorunlu kurallar

1. **Geometri bütçesi:** ekran başına 3–5 temel şekil; her şekil bir işlev taşır (vurgu, ayırıcı, arka plan).
2. **Kalın çizgi:** panel/buton kenarı `2px var(--ink)`; ayırıcı `3px`.
3. **Renk bütçesi:** nötr (krem/siyah) + tek kırmızı; sarı/mavi yalnız grafik/illüstrasyonda.
4. **Radius 0**, gölge yok; gerekiyorsa `--shadow-hard` (4px blok).
5. **Tipografi:** Archivo Black başlık (uppercase, 0 tracking), Jost gövde; gövde 15–16px.
6. **Asimetri:** kompozisyon 2:1 veya 3:2 ağırlıkla; her şey ortalanmaz.

## Yasaklar

- Gradient, blur, cam, yumuşak gölge.
- 4+ renk; pastel tonlar.
- Yuvarlak köşe (radius > 0) — neon-brutalism'e kayar.
- Süs ikonu/illüstrasyon yığını (3–5 şekil sınırı).
- İnce (1px) kenarlıkla "minimal" taklidi.
- Yoğun tabloda büyük geometrik blok.

## Görsel imza
- **Kalın çerçeve:** `2px solid var(--ink)` panel, `3px` bölüm ayırıcı.
- **Daire:** `border-radius: 50%`, accent dolgu, 90–140px.
- **Kare/döndörtgen:** 0 radius, düz accent veya `--surface-2`.
- **Üçgen:** CSS border ile, yönü kompozisyona göre.
- **Uppercase display:** Archivo Black, 0 tracking, satır 1.02.
- **Blok gölge:** `4px 4px 0 var(--ink)` (yalnız kart/buton, tek katman).

## Renk

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#f2ece1` | krem zemin |
| `--bg-2` | `#e6ddcd` | bölüm zemini |
| `--surface` | `#fffdf8` | kart |
| `--surface-2` | `#efe7d8` | ikincil yüzey |
| `--ink` | `#16161a` | metin + çizgi (15.35:1) |
| `--ink-soft` | `#55524b` | açıklama (6.63:1) |
| `--ink-faint` | `#7d776b` | dekoratif (3.78:1) |
| `--accent` | `#d92b2b` | şekil, buton, vurgu |
| `--accent-ink` | `#fffdf8` | accent üstü (**4.72:1**) |
| `--line` | `#16161a` | kalın çizgi |

- Ölçülen kontrast: `ink/bg` **15.35:1** · `ink-soft/bg` **6.63:1** · `ink-faint/bg` **3.78:1** · `accent-ink/accent` **4.77:1**.
- Sarı (`#f2c230`) ve mavi (`#1f4fa8`) yalnız illüstrasyon/grafik; metin üstünde kullanılmaz.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Archivo Black | 46px (mobil 28px) | 400 | 1.02 | `0`, uppercase |
| H2 | Archivo Black | 24px | 400 | 1.1 | `0` |
| Gövde | Jost | 15.5px | 400 | 1.6 | `0.01em` |
| Etiket | Space Mono | 10px | 400 | 1.2 | `0.16em`, uppercase |

- Archivo Black zaten çok kalın; `font-weight` artırmak gerekmez, `letter-spacing` negatife inmez.
- Gövde 62ch; uppercase yalnız başlık/etiket.

## Izgara ve boşluk

Kolon 12 · gutter 24px · container 1180px · bölüm 72/44px · breakpoint 640/900/1180.
- Asimetri kuralı: hero 7/5 veya 8/4 kolon; 6/6 ortalanmış kompozisyon yasak.
- Şekiller ızgaraya oturur ama **taşabilir** (bir kenarı dışarı) — dengeyi bu kurar.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Krem zemin | `--bg` | yok | sayfa |
| Kart | `--surface` + 2px ink | yok | içerik |
| Blok kart | `--surface` + 2px ink | `4px 4px 0` | öne çıkan |

- Derinlik **çizgi ve blok gölgeden**; radius 0 zorunlu.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 44px | 0 20px | 0 | 13/500 uppercase 0.08em | `--accent` + krem + 2px ink | hover: blok gölge · active: gölge 0 · focus: 3px ink · disabled: %45 |
| Buton (çizgi) | 44px | 0 18px | 0 | 13/500 | transparent + 2px ink | hover: `--surface-2` |
| Input | 44px | 0 12px | 0 | 15/400 Jost | `--surface` + 2px ink | focus: 2px accent · error: 2px `--danger` |
| Kart | içerik | 20px | 0 | H2 + 15.5 | krem/white + 2px ink | — |
| Chip | 24px | 0 8px | 0 | 10/400 mono | `--surface-2` + 1px ink | accent varyant: kırmızı |
| Nav | 68px | 0 28px | — | 12/500 uppercase | `--bg` + alt 3px ink | aktif: 3px accent alt çizgi |
| Tablo satırı | 52px | 12px 14px | — | 15/400 | 1px ink %20 alt | hover: `--surface-2` |
| Modal | içerik | 26px | 0 | H2 + 15.5 | white + 3px ink + blok gölge | backdrop: `rgba(22,22,26,.55)` |
| Toast | 44px | 0 16px | 0 | 12/500 | `--ink` + `--bg` | 4sn |
| Grafik | — | — | 0 | eksen 10 mono | accent + ink (+ sarı) | 2 seri |

## Görsel dil

İkon: 2px çizgi, 22px, geometrik (daire/kare kesişimi). Fotoğraf: yüksek kontrast, tek renk duotone. İllüstrasyon: temel şekil kompozisyonu (Kandinsky etkisi). Doku: grain .02 (kâğıt). Logo: Archivo Black, kare monogram.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | 46px uppercase başlık, 7/5 asimetri, 1 daire + 1 kare, tek kırmızı buton | `shots/01-landing.png` |
| Dashboard | düşük | Şekiller kapanır; KPI'lar 3px üst çizgi ile ayrılır, kırmızı yalnız pozitif/negatif farkta | `shots/02-dashboard.png` |
| Form | düşük | 2px kenarlı input, tek sütun 460px, etiket uppercase mono | — |
| Liste/tablo | çok düşük | Kalın başlık çizgisi, satır 52px, geometri yok | — |
| Boş durum | orta | Tek daire + tek cümle + tek buton | — |
| Onboarding | yüksek | Adım başına bir temel şekil (daire→kare→üçgen) | — |
| Pricing | orta | 3 kart, orta kart 3px ink + blok gölge, kırmızı "seç" | — |
| Giriş/ödeme | çok düşük | Şekil yok, 2px kenarlı form; güven için sade | — |
| Modal | orta | 3px ink çerçeve, blok gölge, 2 buton sağa | — |
| Toast | düşük | Siyah bar + krem metin, sol kenarda 4px kırmızı | — |
| Hata | düşük | Kırmızı 3px sol çizgi + 14px metin | — |
| Profil/ayar | düşük | Kalın ayırıcılar, geometri yok | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 100ms | `cubic-bezier(.2,.8,.2,1)` | `transform: translateY(1px)` |
| Geçiş / sayfa | 180ms | `cubic-bezier(.2,.8,.2,1)` | `opacity` |
| Giriş (enter) | **440ms** | `cubic-bezier(.2,.8,.2,1)` | `opacity` + `translateY(14px)`, **stagger 70ms**; satır satır |
| Kaydırma (scroll) | **620ms** | `cubic-bezier(.2,.8,.2,1)` | trigger **`top 86%`**, offsetY **18px**, `once: true` |
| Hover | **170ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | kapalı | — | `enabled: false` (`scrub 1.0` / `+120%` tanımlı ama kullanılmıyor) |
| Ödül / vurgu | 260ms | `cubic-bezier(.2,.8,.2,1)` | şekil ölçek .96 → 1 (tek atım) |

- İmza ölçüsü: enter **0.44s / 14px / stagger 0.07** · scroll **0.62s / `top 86%` / 18px** · hover **170ms / 1.02** · pin **kapalı**.
- `prefers-reduced-motion`: 0.01ms.
- Bu stile yasak hareket: sürekli dönen şekil, gradient geçişi.
## Koyu mod

`--bg` `#16161a` · `--surface` `#1f1f24` · `--surface-2` `#2a2a30` · `--ink` `#f4ede1` · `--line` `#f4ede1` · `--accent` `#e84747` · `--accent-ink` `#16161a`.

## Erişilebilirlik

- Gövde 15.35:1, açıklama 6.63:1 → güvenli; `--ink-faint` 3.78:1 → yalnız dekoratif.
- Accent üstü krem 4.77:1 → gövde metni olarak sınırda; buton metni 13px+ ve 500 ağırlık.
- Uppercase yalnız başlık/etiket; gövde uppercase edilmez (okunurluk).
- Archivo Black 24px altına inmez (ağır font küçük puntoda kapanır).
- Geometrik şekiller `pointer-events: none`; metni örtmez, odak sırasını değiştirmez.
- Dokunma hedefi 44px.

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
| "Neo-brutalism" gibi duruyor | Sadece kalın kenar + gölge | Daire/kare/üçgen kompozisyonu ekle |
| Yorgun/dağınık | 6+ şekil, 4+ renk | Şekil 3–5, renk 3+siyah |
| Kurumsal güven kaybı | Ödeme ekranında afiş dili | O ekranda geometriyi kapat |
| Okunmuyor | Uppercase gövde, 22px Archivo | Gövde Jost 15.5, başlık ≥24px |
| Dönemsel taklit | Sarı/mavi her yerde | Renk bütçesi: tek kırmızı |

## Komşu stiller

**Uyumlu:** `02 swiss-design` (ızgara), `13 neo-brutalism` (kalın çizgi), `16 memphis` (geometri). **Yasak:** `29 ethereal`, `04 luxury-typography`, `08 glassmorphism`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://www.bauhaus-dessau.de | Dönem afişleri, kompozisyon ilkeleri |
| https://fonts.google.com/specimen/Archivo+Black | Display |
| https://fonts.google.com/specimen/Jost | Geometrik gövde |

## AI brief

```
Stil: Bauhaus (styles/35-bauhaus/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="bauhaus"]; hard-coded renk YASAK.
Geometri: ekran başına 3–5 temel şekil (daire/kare/üçgen); her şekil bir işlev taşır.
Çizgi: panel/buton 2px var(--ink), bölüm ayırıcı 3px. Radius 0; gölge yok (gerekiyorsa 4px blok).
Renk: krem #f2ece1 + siyah #16161a + tek kırmızı #d92b2b (üstünde krem, 4.77:1). Sarı/mavi yalnız illüstrasyon.
Tipografi: Archivo Black uppercase başlık (≥24px, 0 tracking) + Jost gövde 15.5/1.6; etiket Space Mono 10 uppercase.
Düzen: asimetri (7/5 veya 8/4); ortalanmış 6/6 kompozisyon yasak.
Hareket: 100–260ms; reduced-motion'da 0.01ms; sürekli dönen şekil yasak.
Yasak: gradient/blur/cam, 4+ renk, radius>0, ince 1px kenarla minimal taklidi.
Çıktı: kod + tek paragraf not (kaç şekil, hangi ağırlıkta asimetri).
```

**Teslim öncesi öz-denetim**
- [ ] 3–5 geometrik şekil, her biri işlevli.
- [ ] Kalın çizgi (2–3px), radius 0, gradient yok.
- [ ] Palet: krem + siyah + tek kırmızı.
- [ ] Başlık uppercase ≥24px; gövde Jost 15.5.
- [ ] Asimetrik kompozisyon (7/5 veya 8/4).
- [ ] Ödeme/giriş ekranında geometri kapatıldı.

## Token

```css
[data-style="bauhaus"] {
  --bg: #f2ece1; --bg-2: #e6ddcd;
  --surface: #fffdf8; --surface-2: #efe7d8;
  --ink: #16161a; --ink-soft: #55524b; --ink-faint: #7d776b;
  --accent: #d92b2b; --accent-ink: #fffdf8;
  --line: #16161a;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: 4px 4px 0 #16161a;
  --font-display: "Archivo Black", "Inter", sans-serif;
  --font-body: "Jost", "Inter", sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: .02;
}
```
