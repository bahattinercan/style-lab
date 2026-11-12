# 10 · Neumorphism

> **Bir cümlede:** Aynı renkli yumuşak yüzey üzerinde çift gölgeyle kabartma; kontrol "çizilmiş" değil "basılmış" görünür.

| | |
|---|---|
| **Hissiyat** | yumuşak plastik, dokunulabilir, sessiz teknoloji |
| **En iyi** | tek amaçlı kontrol seti (akıllı ev, ses, saat), meditasyon/odak uygulaması, donanım eşlikçisi |
| **Kaçın** | yoğun form/tablo, erişilebilirlik kritik ürünler, açık havada okunacak ekran |
| **Zorluk** | yüksek (kontrast) · **Erişilebilirlik** | **yüksek risk** |
| **Aile** | Yüzey (08–12) · **Token** | `kit/tokens.css` → `[data-style="neumorphism"]` |
| **Kompozisyon** | `centered` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Neumorphism, zemin ve yüzeyin **aynı renk** olmasına dayanır; ayrım yalnızca **iki zıt gölgeyle** kurulur: sol üstten açık (`#f8fbff`), sağ alttan koyu (`#cfd4dd`). Kontroller dışa (kabarık) ya da içe (gömülü) gölgelenir. Sonuç: fiziksel bir panel hissi.

Kazandığı şey: dokunsal, sakin bir "cihaz" hissi. Feda ettiği şey: erişilebilirlik — düşük kontrast ve belirsiz tıklama alanları bu stilin doğal riski.

### Ne değildir
- **Skeuomorphism değildir.** Skeuomorphism malzeme dokusu (ahşap, cam, metal) ekler; neumorphism tek renk + gölgeyle çalışır.
- **Claymorphism değildir.** Clay pastel renkli, şişkin ve oyuncak; neumorphism tek renkli ve sessiz.
- **Glassmorphism değildir.** Camda arka plan görünür ve bulanıklaşır; burada arka plan yok, sadece ışık.
- **"Yumuşak kart" değildir.** Aynı renk + iki zıt gölge + iç/dış durum ayrımı olmadan sadece bulanık gölge olur.

### Nereden gelir
2019–2020'de dribbble estetiği olarak yükseldi; Apple'ın watchOS/akıllı ev panelleri ve tek işlevli kontrol setleri için hâlâ kullanışlı. Zayıf kontrastı nedeniyle geniş ürün arayüzlerinde terk edildi — bu yüzden **sınırlı yüzeyde** kullanılmalı.

### 3 saniyede tanıma testi
1. Zemin ve kart **aynı renk** mi?
2. İki zıt gölge var mı (sol üst açık, sağ alt koyu)?
3. Basılı öğeler **içe gömülü** gölge mi kullanıyor?
4. Kenarlık yok / şeffaf mı?
5. Ekranda 3'ten fazla gölge yoğunluğu var mı (hepsi aynı yönde)?

## Zorunlu kurallar

1. **Tek renk yüzey:** zemin ve kart aynı tonda (`#e4e8ef`); ayrım yalnızca gölgeyle.
2. **İki zıt gölge:** `6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff` (kabarık); basılı durumda `inset` aynı değerler.
3. **Kenarlık yok:** `--line: transparent`; input/buton kenarı gölgeyle tanımlanır.
4. **Kontrast tabanı:** gövde metni `--ink` (9.33:1); `--ink-faint` asla gövde metni değil.
5. **Sınırlı yüzey:** ekran başına en fazla 6 neumorfik kontrol; gerisi düz metin/boşluk.
6. **Odak halkası zorunlu:** gölge tek başına durum bildirmez → 2px `--accent` halka + `outline-offset: 3px`.

## Yasaklar

- Aynı ekranda 3+ farklı gölge açısı/mesafesi.
- İnce gölge (2px) — kabartma okunmaz; en az 6px ofset.
- Düşük kontrastlı metin (`--ink-soft` altı) gövde metninde.
- Kenarlık + gölge birlikte (çelişen iki dil).
- Yoğun tablo/form: 6'dan fazla kontrol yan yana.
- Accent üstü beyaz metin yerine accent zemin geniş kullanımı (buton dışında).

## Görsel imza
- **Kabartma formülü:** `6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff`.
- **Gömülü formül:** `inset 6px 6px 12px #cfd4dd, inset -6px -6px 12px #f8fbff`.
- **Radius 16/24px:** yumuşak ama daire değil.
- **Yön disiplini:** tüm gölgeler sol üst ışık / sağ alt gölge.
- **Buton basılması:** basınca dış gölge → iç gölge (gerçek "basılma").
- **Sessiz palet:** tek gri-mavi skala + tek accent (`#4262e8`).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#e4e8ef` | zemin | ayrı kart rengi |
| `--bg-2` | `#dde2ea` | basılı zemin (gömülü alan) | buton |
| `--surface` | `#e4e8ef` | kart (aynı renk!) | — |
| `--surface-2` | `#e9edf3` | hafif açık alan | vurgu |
| `--ink` | `#333a45` | tüm metin | — |
| `--ink-soft` | `#5d6674` | açıklama (4.72:1) | 12px altı |
| `--ink-faint` | `#8b93a1` | dekoratif (2.52:1) | **gövde metni yasak** |
| `--accent` | `#4262e8` | aktif durum, tek buton, odak | geniş zemin |
| `--accent-ink` | `#ffffff` | accent üstü metin (5.07:1) | — |
| `--line` | `transparent` | — | kenarlık çizmek |

- Ölçülen kontrast: `ink/bg` **9.33:1** · `ink-soft/bg` **4.72:1** · `ink-faint/bg` **2.52:1** · `accent-ink/accent` **5.07:1**.
- Gölge renkleri zeminin türevleri olmalı (`#cfd4dd` koyu, `#f8fbff` açık); gri/siyah gölge kabartmayı öldürür.
- Yasak: ikinci accent, gradient, doku.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Nunito Sans | 44px (mobil 28px) | 700 | 1.12 | `0` |
| H2 | Nunito Sans | 26px | 700 | 1.2 | `0` |
| H3 | Nunito Sans | 18px | 700 | 1.3 | `0` |
| Gövde | Nunito Sans | 16px | 400 | 1.6 | `0` |
| Etiket | JetBrains Mono | 10px | 500 | 1.2 | `0.14em`, uppercase |
| Buton | Nunito Sans | 14px | 700 | 1 | `0.01em` |

- Yuvarlak hatlı sans (Nunito Sans) radius ile uyum sağlar; grotesk (Inter) kabartmayla çelişir.
- Display 700 — bu stilde kalın ağırlık gölgeye karşı durabilir.
- 12px altı metin kullanma (kontrast + yumuşak zemin).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 8) |
| Gutter | 24px |
| Container | 1120px |
| Boşluk ölçeği | 8 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1120 px |
| Bölüm dikey | 64px (mobil 44px) |

- Kontroller arası boşluk ≥ 20px: iki gölge birbirine karışırsa kabartma okunmaz.
- Bir bölümde en fazla 6 neumorfik öğe; 7. öğe düz metin olur.
- Kart içi padding 24px (gölge payı için 20px'ten az olmaz).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Kabarık | `--surface` | `--shadow` | kart, buton |
| Gömülü | `--bg-2` | `--shadow-hard` (inset) | input, basılı buton, seçili sekme |

- Derinlik tamamen gölgeden; kenarlık, doku, gradient yok.
- Radius: `--radius` 16px (buton/input), `--radius-lg` 24px (kart/modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 22px | 16px | 14/700 | `--accent` + `--accent-ink` (düz renk, gölge yok) | hover: %94 parlaklık · **active: inset gölge** · focus: 2px `--accent` halka, offset 3px · disabled: %38 |
| Buton (kabartma) | 48px | 0 22px | 16px | 14/700 | `--surface` + `--shadow` | active: `--shadow-hard` (gömülür) |
| Input | 48px | 0 16px | 16px | 15/400 | `--surface` + `--shadow-hard` (gömülü) | focus: 2px `--accent` halka · error: `--danger` metin + ikon (kenarlık yok) |
| Kart | içerik | 24px | 24px | H3 + 15 | `--surface` + `--shadow` | hover (tıklanabilir): gölge mesafesi 8px'e çıkar |
| Chip / sekme | 34px | 0 14px | 16px | 12/700 | `--surface` + `--shadow` | aktif: `--shadow-hard` + metin `--ink` |
| Nav | 72px | 0 32px | — | 14/700 | `--bg` + alt gölge `0 1px 0 #cfd4dd` | aktif: 4px alt iç gölge |
| Tablo satırı | 52px | 12px 16px | — | 14/400 | gölge yok, satır arası 8px boşluk | hover: satır `--shadow` |
| Modal | içerik | 28px | 24px | H2 + 15 | `--surface` + daha büyük `--shadow` | backdrop: `rgba(51,58,69,.28)` |
| Toast | 48px | 0 18px | 16px | 13/600 | `--surface` + `--shadow` | 4sn |
| Grafik | — | — | 8px uç | eksen 10 mono | `--accent` + gömülü ray (`--shadow-hard`) | 2 seri |

- Odak halkası **zorunlu ve accent renkli**; gölge tek başına "odaklandı" demez.
- Dokunma hedefi 48px (bu stilde 44 değil: gölge kenarı algıyı küçültür).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 20px, `--ink-soft`; gömülü daire içinde serbest |
| Fotoğraf | Yumuşak ışık, stüdyo; kenarlar 24px radius |
| İllüstrasyon | Yumuşak 3B/plastik tonlu; keskin çizgi yasak |
| Doku | Yok (`--grain: 0`) |
| Logo | Koyu gri, yuvarlak hatlı wordmark |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | Büyük başlık + tek kabartma kontrol kümesi (3–4 öğe); gerisi boşluk | `shots/01-landing.png` |
| Dashboard | düşük | En fazla 6 kabartma kart; KPI metni `--ink`, grafik gömülü ray | `shots/02-dashboard.png` |
| Form | düşük | Gömülü inputlar, tek sütun 480px; hata metinle bildirilir | — |
| Liste / tablo | çok düşük | Gölge yerine boşluk + kalın sayı; tabloda neumorphism kullanma | — |
| Boş durum | orta | Gömülü daire içinde ikon + tek cümle | — |
| Onboarding | orta | Sayfa başına 1 kontrol seti; ilerleme gömülü segment | — |
| Pricing | orta | 2–3 kabartma kart, orta kart accent halka | — |
| Giriş / ödeme | çok düşük | Gömülü input + düz accent buton; güven için sade | — |
| Modal | orta | 24px radius, büyük gölge, backdrop düz | — |
| Bildirim / toast | orta | Kabartma pill, koyu metin | — |
| Hata | düşük | `--danger` ikon + metin (kenarlık yok) | — |
| Profil / ayar | orta | Ayar satırı 56px, gömülü toggle | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `ease-out` | dış gölge → iç gölge (geçişli) |
| Giriş | 400ms | `ease-out` | `opacity` + 8px `translateY`, stagger 30ms |
| Scroll (`top 88%`) | 500ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 200ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 300ms | `cubic-bezier(.34,1.4,.64,1)` | kabartma `scale(.98→1)` |

- Hareketin işi **basılma** hissi; süs animasyonu yok.
- `prefers-reduced-motion`: gölge geçişi anlık, süre 0.01ms.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` / `--surface` | `#e4e8ef` | `#23262e` |
| `--bg-2` | `#dde2ea` | `#1c1f26` |
| `--ink` | `#333a45` | `#e6e9ef` |
| `--ink-soft` | `#5d6674` | `#a7aebc` |
| gölge koyu | `#cfd4dd` | `#171a20` |
| gölge açık | `#f8fbff` | `#2f333c` |

- Koyu modda gölge renkleri **ters** türetilir (koyu gölge zeminin altı, açık highlight üstü); `--shadow` değerleri elle yazılır.

## Erişilebilirlik

- **En yüksek riskli stil.** Gövde 9.33:1 güvenli; `ink-soft` 4.72:1 sınırda; `ink-faint` **kullanılamaz**.
- Tıklanabilirlik: gölge "dokunulabilir" hissi verse de etkileşim sınırı belirsiz → **görünür odak halkası ve hover'da metin rengi değişimi** zorunlu.
- Dokunma hedefi 48px, gölge payı hedefe dahil değil.
- Form hataları yalnızca renkle değil **ikon + metinle** bildirilir.
- Düşük görme/parlak ortam: bu stil tek başına kullanılmaz; kritik ekranlarda `data-style` düşür (`plain`).
- `prefers-contrast: more` → kenarlık ekle (`1px var(--ink)`), neumorphism'i bırak.

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
| "Bulanık gri" görünüyor | Gölge zıtlığı yok | Açık highlight'ı `#f8fbff` yap, ofset 6px |
| Buton tıklanmıyor gibi | Basılma durumu yok | active'te inset gölge + metin rengi |
| Okunmuyor | `--ink-faint` gövde metninde | `--ink` kullan; gövde ≥ 4.5:1 |
| Dağınık | Farklı gölge açıları | Tüm gölgeler tek yön (sol üst ışık) |
| Form kullanılamaz | Kenarlık yok + belirsiz hedef | Gömülü input + odak halkası + 48px |
| Erişilebilirlik şikayeti | Renk tek başına durum | İkon + metin + halka |

## Komşu stiller

- **Uyumlu:** `11 claymorphism` (yumuşak yüzey dili, garnitür), `01 minimalism` (düz zemin + tek neumorfik kontrol).
- **Yasak:** `08 glassmorphism` / `09 liquid-glass` (ışık fiziği çelişir), `13 neo-brutalism` (kontur + sert gölge).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://dribbble.com/tags/neumorphism | Gölge formülü varyantları (eleştirel bak) |
| https://www.nngroup.com/articles/neumorphism-critique/ | Neden sınırlı kullanılmalı |
| https://developer.apple.com/design/human-interface-guidelines/accessibility | Kontrast ve hedef boyutu |

## AI brief

```
Stil: Neumorphism (styles/10-neumorphism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="neumorphism"]; hard-coded renk/gölge YASAK.
Yüzey: zemin ve kart AYNI renk (#e4e8ef); ayrım sadece çift gölge: 6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff.
Gömülü (input/aktif buton): inset aynı değerler. Kenarlık YOK (--line: transparent).
Işık yönü tek: sol üst açık, sağ alt koyu; tüm bileşenlerde aynı.
Kontrast: gövde --ink (9.33:1), açıklama --ink-soft (4.72:1), --ink-faint SADECE dekoratif.
Odak halkası ZORUNLU: 2px var(--accent), offset 3px. Dokunma hedefi 48px.
Sınır: ekran başına ≤ 6 neumorfik kontrol; tabloda neumorphism kullanma.
Yasak: kenarlık, gradient, doku, farklı gölge açıları, 2px altı ofset, düşük kontrastlı metin.
Çıktı: kod + tek paragraf not (gölge yönü ve erişilebilirlik önlemleri).
```

**Teslim öncesi öz-denetim**
- [ ] Zemin ve kart aynı renk; ayrım yalnızca çift gölge.
- [ ] Tüm gölgeler aynı yönde ve aynı mesafede.
- [ ] Basılı durumda inset gölge var.
- [ ] Ekran başına ≤ 6 neumorfik kontrol.
- [ ] Odak halkası görünür, hedef 48px, hata ikon+metin.
- [ ] `--ink-faint` gövde metninde kullanılmadı.

## Token

```css
[data-style="neumorphism"] {
  --bg: #e4e8ef; --bg-2: #dde2ea;
  --surface: #e4e8ef; --surface-2: #e9edf3;
  --ink: #333a45; --ink-soft: #5d6674; --ink-faint: #8b93a1;
  --accent: #4262e8; --accent-ink: #ffffff;
  --line: transparent;
  --radius: 16px; --radius-lg: 24px;
  --shadow: 6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff;
  --shadow-hard: inset 6px 6px 12px #cfd4dd, inset -6px -6px 12px #f8fbff;
  --font-display: "Nunito Sans", "Inter", system-ui, sans-serif;
  --font-body: "Nunito Sans", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
