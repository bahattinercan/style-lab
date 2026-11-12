# 07 · Wabi-Sabi

> **Bir cümlede:** Kusuru saklamayan düzen: kırık hiza, organik form, el yapımı doku ve eksik bırakılmış boşluk.

| | |
|---|---|
| **Hissiyat** | organik, elle yapılmış, melankolik sıcaklık, "yaşanmış" |
| **En iyi** | kişisel/günlük uygulaması, kültür-sanat, sürdürülebilir marka, zanaat ürünü |
| **Kaçın** | fintech güven ekranı, kurumsal B2B panel, hızlı e-ticaret |
| **Zorluk** | yüksek (kaosu kontrol etmek zor) · **Erişilebilirlik** | orta risk |
| **Aile** | Sade (01–07) · **Token** | `kit/tokens.css` → `[data-style="wabi-sabi"]` |
| **Kompozisyon** | `centered` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Wabi-sabi, kusurun estetiği: **hizasız** yerleşim (0.5–1.5° dönüklük), **asimetrik radius** (3px / 18px karışımı), **kâğıt dokusu** (grain .07), soluk toprak paleti ve sıcak serif. Mükemmel ızgara bilinçli olarak "elle" bozulur — ama okunabilirlik bozulmaz.

Kazandığı şey: samimiyet ve hatırlanma. Feda ettiği şey: kesinlik ve kurumsal güven; bu stil "steril" olamaz.

### Ne değildir
- **Japandi değildir.** Japandi düzgün ve ölçülü; wabi-sabi kasten eğik ve dokulu.
- **Scrapbook değildir.** Scrapbook kolaj/bant/polaroid ekler; wabi-sabi aynı kâğıt dili ama **daha az** öğeyle, doku ve hizasızlıkla kurar.
- **Bohemian değildir.** Bohemian renkli desen; wabi-sabi soluk ve tek tonlu.
- **"Sadece eğik kart" değildir.** Doku + asimetrik radius + serif + eksik boşluk birlikte gerekir.

### Nereden gelir
Japon çay seremonisi estetiği (侘寂): geçicilik, kusur, tamamlanmamışlık. Dijitalde zanaat ürünleri, kişisel not uygulamaları ve "slow" markalarca kullanılıyor; kalabalık arayüzlere insani bir alternatif.

### 3 saniyede tanıma testi
1. Öğeler hafif **eğik** mi (0.5–1.5°), yoksa kusursuz hizalı mı?
2. Radius **asimetrik** mi (3px/18px karışımı)?
3. Kâğıt dokusu (grain) görünür mü — abartısız?
4. Palet soluk toprak (krem, kil, pas) mı?
5. Boşluk "eksik" mi bırakılmış (kart yarım hizada, kolon dar)?

## Zorunlu kurallar

1. **Hizasızlık kontrollü:** ekran başına en fazla 3 öğe 0.5–1.5° döner; okunabilir bloklar (paragraf, tablo) asla dönmez.
2. **Asimetrik radius:** küçük öğe 3px, büyük yüzey 18px; aynı bileşende iki radius (ör. `18px 4px 18px 4px`).
3. **Kâğıt dokusu:** `--grain: .07`; doku metnin arkasında, okunurluğu bozmaz.
4. **Toprak paleti:** krem/kil/pas; soğuk renk yok.
5. **Serif display (Fraunces), sans gövde (Inter).**
6. **Eksik boşluk:** bir bölümde bilinçli asimetri (ör. sağda 1 kolon boş).

## Yasaklar

- Mükemmel simetri, eşit kart ızgarası (4×2 gibi kusursuz grid).
- Parlak renk, gradient, cam, sert gölge, neon.
- Dönen **metin** blokları ve dönen tablo satırları.
- 2° üzeri dönüklük (dağınık görünür), rastgele ölçek.
- İnce serif gövde metni; 15px altı gövde.
- Doku yoğunluğu > .09 (metin okunmaz).

## Görsel imza
- **Dönüklük:** hero görseli `-0.7°`, ikincil kart `+0.4°`; metin blokları 0°.
- **Asimetrik radius:** `18px 4px 18px 4px` (görsel), `3px` (buton/input).
- **Grain .07:** kâğıt hissi; PNG'de hafif gürültü.
- **Soluk kontur:** `rgba(42,39,36,.18)` 1px — keskin değil.
- **Eksik çizgi:** bazı bölümlerde alt çizgi yok, sadece boşluk.
- **Pas rengi accent:** `#a85831` yalnızca damga/ikon noktası.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#ede6da` | sayfa (kil) | kart |
| `--bg-2` | `#e3d9c9` | ikinci zemin | buton |
| `--surface` | `#f6f1e6` | kâğıt kart | sayfa |
| `--surface-2` | `#eadfce` | hover, ikincil | vurgu |
| `--ink` | `#2a2724` | metin | — |
| `--ink-soft` | `#5f574d` | açıklama | başlık |
| `--ink-faint` | `#8f8779` | dekoratif etiket | gövde |
| `--accent` | `#a85831` | damga, ikon noktası, tek buton | geniş zemin |
| `--accent-ink` | `#fff8ef` | accent üstü metin | — |
| `--line` | `rgba(42,39,36,.18)` | elle çizilmiş hissi veren kontur | metin |

- Ölçülen kontrast: `ink/bg` **11.97:1** · `ink-soft/bg` **5.73:1** · `ink-faint/bg` **2.87:1** · `accent-ink/accent` **4.85:1**.
- Accent tonu erişilebilirlik için koyulaştırıldı (`#b4643c` → `#a85831`); daha açık ton kullanma.
- Yasak: doygun kırmızı, mavi accent, 3+ renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 48px (mobil 30px) | 400 | 1.1 | `0` |
| H2 | Fraunces | 30px | 400 | 1.18 | `0` |
| H3 | Inter | 17px | 600 | 1.35 | `0` |
| Gövde | Inter | 16px | 400 | 1.7 | `0` |
| El yazısı vurgu | Caveat (opsiyonel) | 20px | 400 | 1.3 | `0` |
| Etiket | Courier New | 11px | 400 | 1.2 | `0.12em`, uppercase |

- Display'de Fraunces'in yumuşak ekseni (SOFT) tercih edilir; WONK kapalı.
- Gövde 64ch; satır aralığı 1.7 (doku nedeniyle biraz daha ferah).
- El yazısı yalnızca 1 kısa notta; gövde metni olarak yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 7, kenarlar bilinçli boş) |
| Gutter | 28px |
| Container | 1080px (okuma 640px) |
| Boşluk ölçeği | 6 · 12 · 18 · 24 · 36 · 54 · 72 |
| Breakpoint | 640 / 900 / 1080 px |
| Bölüm dikey | 72px (mobil 48px) |

- Izgara **görünmez ve kusurlu**: bir kart komşusundan 8px kayabilir (bilinçli).
- Sağ tarafta boş kolon bırakmak serbest (eksiklik estetiği).
- Bölüm ritmi: 2 eşit genişlikten sonra mutlaka 1 daraltılmış blok.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + grain | yok | sayfa |
| Kâğıt kart | `--surface` + 1px `--line` | `0 1px 0 .06` | içerik |
| Yapıştırılmış | `--surface` + `--shadow-hard` | `2px 2px 0 rgba(42,39,36,.12)` | damga/etiket |

- Derinlik kâğıt katmanından: hafif gölge + doku; 3D/parlaklık yok.
- Radius: `--radius` 3px (buton/input), `--radius-lg` 18px (görsel/kart köşelerinden biri).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 20px | `18px 4px 18px 4px` | 14/600 | `--accent` + `--accent-ink` | hover: %94 · focus: 2px `--accent` halka · disabled: %40 |
| Buton (kâğıt) | 44px | 0 18px | 4px | 14/600 | `--surface` + 1px `--line` + `--shadow-hard` | hover: `--surface-2` |
| Input | 44px | 0 14px | 4px | 15/400 | `--surface` + 1px `--line` | focus: alt kenar 2px `--accent` · error: `--danger` |
| Kart | içerik | 24px | `18px 4px 18px 4px` | H3 + 15 | `--surface` + `--shadow` | hover: `translateY(-2px)` |
| Chip / damga | 24px | 0 10px | 3px | 10/400 mono | `--accent` %14 zemin + `--accent` kenar | — |
| Nav | 66px | 0 32px | — | 14/500 | `--bg` + alt 1px `--line` | aktif: alt 1px `--accent` |
| Tablo satırı | 52px | 12px 16px | — | 14/400 | alt 1px `--line` | hover: `--surface-2` (dönmez) |
| Modal | içerik | 28px | 18px | H2 serif | `--surface` + `--shadow-hard` | backdrop %32 + grain |
| Toast | 44px | 0 16px | 4px | 13/500 | `--ink` + `--bg` | 4.5sn |
| Grafik | — | — | 3px uç | eksen 10 mono | `--accent` + `--ink-faint` kesikli referans | 2 seri |

- Odak halkası 2px accent, offset 2px; dönen öğelerde bile halka görünür kalır.
- Dokunma hedefi 44px; damga/etiketler tıklanabilir olursa padding ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, hafif düzensiz (el çizimi hissi), 22px |
| Fotoğraf | Film grain, sıcak beyaz dengesi, kusurlu kırpma (asimetrik radius) |
| İllüstrasyon | Suluboya/kolaj, soluk toprak |
| Doku | grain .07 + kâğıt kenarı (opsiyonel) |
| Logo | El yazısı veya serif wordmark |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 48px serif başlık, daraltılmış metin kolonu, -0.7° görsel, tek pas buton | `shots/01-landing.png` |
| Dashboard | düşük | Doku ve dönüklük minimum; hairline + serif başlık; sayılar mono | `shots/02-dashboard.png` |
| Form | düşük | 480px, etiket 12px mono, alt kenar vurgulu input | — |
| Liste / tablo | düşük | 52px satır, kesikli ayırıcı, dönme yok | — |
| Boş durum | orta | Tek cümle + el yazısı not + tek buton | — |
| Onboarding | yüksek | Sayfa başına 1 fikir; görsel eğik, metin düz | — |
| Pricing | orta | 3 kart farklı yükseklikte (bilinçli), orta kart accent kenar | — |
| Giriş / ödeme | çok düşük | Dönme ve doku kapatılır; güven için düz form | — |
| Modal | orta | 18px radius, `--shadow-hard`, kâğıt zemin | — |
| Bildirim / toast | orta | Koyu zemin + krem metin, 4px radius | — |
| Hata | düşük | 13px sıcak dil + `--danger` alt kenar | — |
| Profil / ayar | orta | 7/5 kolon, satır 56px, kesikli ayırıcı | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 140ms | `ease-out` | `opacity` |
| Giriş | 750ms | `cubic-bezier(.3,.6,.3,1)` | `opacity` + 18px `translateY`, stagger 50ms |
| Scroll (`top 78%`) | 950ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 260ms | aynı eğri | `transform: scale(1.015)` |
| Ödül | 500ms | `ease-in-out` | dönüklük 0°→hedef (tek sefer) |

- Yavaş, organik hareket; ani sıçrama yok. Dönüklük **animasyon döngüsünde değişmez**.
- `prefers-reduced-motion`: 0.01ms, dönüklük statik kalır.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#ede6da` | `#1a1714` |
| `--surface` | `#f6f1e6` | `#221e19` |
| `--ink` | `#2a2724` | `#e8e0d3` |
| `--ink-soft` | `#5f574d` | `#b0a495` |
| `--line` | `rgba(42,39,36,.18)` | `rgba(232,224,211,.16)` |
| `--accent` | `#a85831` | `#c9744a` |
| `--accent-ink` | `#fff8ef` | `#1a1714` |

- Koyu modda grain azaltılır (.04); doku koyu zeminde lekeye dönüşür.

## Erişilebilirlik

- Gövde 11.97:1, açıklama 5.73:1 → güvenli. `--ink-faint` 2.87:1 → dekoratif.
- Accent üstü metin 4.85:1 (krem) → buton metni AA; 12px altına inme.
- Kontur 0.18 opaklık: koyu zeminde 1px görünür; açık zeminde input kenarını `--ink` %28'e çıkar.
- Dönüklük: **metin blokları dönmez**, yalnızca görsel/kart; ekran okuyucu sırası etkilenmez.
- Grain .07 üzerinde 14px metin okunur; .09 üzerine çıkarma.
- Dokunma hedefi 44px; eğik kartlarda tıklama alanı dikdörtgen kalır.

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
| "Yarım kalmış" görünüyor | Kusur var, hiyerarşi yok | Serif display + net ölçek ekle, dönüklüğü azalt |
| Dağınık | 3'ten fazla öğe dönük, 2°+ açı | Ekran başına ≤ 3 öğe, ≤ 1.5° |
| Okunmuyor | Doku + dönük metin | Metin bloklarını düz tut, grain ≤ .07 |
| Ucuz | Doygun renk/parlak gölge | Toprak paleti + mat gölge |
| Kurumsal güven kaybı | Ödeme ekranında tam stil | Ödeme/girişte dönme ve dokuyu kapat |

## Komşu stiller

- **Uyumlu:** `06 japandi` (aynı sıcaklık), `31 scrapbook` (kâğıt dili, garnitür), `30 bohemian` (toprak paleti).
- **Yasak:** `22 cyberpunk` (neon/kir çelişkisi), `05 bento-grid` (kusursuz ızgara), `26 art-deco` (simetri).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Fraunces | Yumuşak serif ekseni |
| https://www.are.na | Kâğıt/doku referans panoları |
| https://www.etsy.com | Zanaat ürünlerinde organik yerleşim |

## AI brief

```
Stil: Wabi-Sabi (styles/07-wabi-sabi/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="wabi-sabi"]; hard-coded renk/ölçü YASAK.
Doku: grain .07 (kâğıt), 1px kontur rgba(42,39,36,.18).
Hizasızlık: ekran başına ≤ 3 öğe 0.5–1.5° döner; METİN BLOKLARI ASLA DÖNMEZ.
Radius: buton/input 3–4px, kart/görsel asimetrik (18px 4px 18px 4px).
Tipografi: Fraunces display 400 (48/1.1) + Inter gövde 16/1.7; etiket Courier 11 uppercase; el yazısı yalnız 1 notta.
Renk: krem/kil/pas (#ede6da, #f6f1e6, #a85831); accent üstü metin #fff8ef (4.85:1).
Boşluk: bölüm 72px, eksik/asimetrik kolon serbest (bir bölümde 1 kolon boş).
Yasak: simetrik eşit kart ızgarası, parlak renk/gradient/cam, dönen metin, >1.5° açı, grain > .09.
Çıktı: kod + tek paragraf not (hangi öğeyi döndürdün, hangisini düz bıraktın).
```

**Teslim öncesi öz-denetim**
- [ ] Dönen öğe ≤ 3, açı ≤ 1.5°, metinler düz.
- [ ] Radius asimetrik kullanıldı (küçük 3px, büyük 18px).
- [ ] Grain .07, metin okunur.
- [ ] Palet toprak; doygun renk yok.
- [ ] Accent üstü metin kontrastı ≥ 4.5:1.
- [ ] Ödeme/giriş ekranında süs kapatıldı.

## Token

```css
[data-style="wabi-sabi"] {
  --bg: #ede6da; --bg-2: #e3d9c9;
  --surface: #f6f1e6; --surface-2: #eadfce;
  --ink: #2a2724; --ink-soft: #5f574d; --ink-faint: #8f8779;
  --accent: #a85831; --accent-ink: #fff8ef;
  --line: rgba(42,39,36,.18);
  --radius: 3px; --radius-lg: 18px;
  --shadow: 0 1px 0 rgba(42,39,36,.06); --shadow-hard: 2px 2px 0 rgba(42,39,36,.12);
  --font-display: "Fraunces", "Lora", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Courier New", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: .07;
}
```
