# 173 · FinOps Cost

> **Bir cümlede:** Bulut maliyet paneli: yeşil tasarruf göstergesi, sağa hizalı tutarlar ve bütçe eşiği çizgileri.

| | |
|---|---|
| **Hissiyat** | hesaplı, şeffaf, "nerede harcanıyor" |
| **En iyi** | bulut maliyet yönetimi, bütçe paneli, satın alma |
| **Kaçın** | yaratıcı kampanya sayfası |
| **Zorluk** | zor · **Erişilebilirlik** | iyi |
| **Aile** | Operasyon & Veri (172–181) · **Token** | `kit/tokens.css` → `[data-style="finops-cost"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
FinOps Cost, her tutarı bir karar sorusuna bağlar: ne kadar, hangi ekip, bütçeye göre nerede.

### Ne değildir
- Dashboard şablonu değildir; her blok bir karar sorusunu cevaplar.
- Koyu tema zorunlu değildir; kontrast ve yoğunluk belirleyicidir.

### Nereden gelir
NOC/SRE konsolları, finans terminalleri ve lojistik operasyon ekranlarının bilgi yoğun geleneği.

### 3 saniyede tanıma testi
1. Satır yüksekliği 40–44px mi?
2. Sayılar sağa hizalı ve tabular mı?
3. Grafikte en fazla 3 seri mi?

## Görsel imza
- **Sağa hizalı tutarlar:** para birimi küçük, sayı tabular.
- **Yeşil accent:** tasarruf ve onay; kırmızı yalnız aşım.
- **Bütçe çizgisi:** grafikte kesikli eşik çizgisi.
- **Sade tablo:** zebra yok, hairline var.
- **Tipografi:** Inter (display) + Inter (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#1f6b4f`; nötr skala `#f8faf9` → `#121a17`.
- **Yarıçap:** `6px` / `10px`; Köşe 4–6px; 8px üstü yumuşak yuvarlatma operasyonel tabloyla çelişir.

## Zorunlu kurallar

1. Tutarlar tabular ve sağa hizalı; para birimi her satırda.
2. Bütçe eşiği grafikte kesikli çizgiyle gösterilir.
3. Accent yalnız tasarruf/onay.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#f8faf9` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#eef4f1` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f1f6f3` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#121a17` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#455a52` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7b8f87` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#1f6b4f` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f6fdf9` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(18,26,23,.12)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.89:1** · `ink-soft/bg` **7.06:1** · `ink-faint/bg` **3.27:1 (dekoratif)** · `accent-ink/accent` **6.21:1**.
- Durum renkleri accent'in türevi değil, ayrı semantik token'lar (--ok/--danger/--warn) üzerinden gelir; accent eylem rengidir.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 40px (mobil 26px) | 600 | 1.12 | -0.02em |
| H2 | aynı | 24px | 600 | 1.22 | -0.015em |
| H3 | aynı | 17px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Inter) | 14px | 400 | 1.55 | 0 |
| Küçük gövde | aynı | 13px | 400 | 1.55 | 0 |
| Etiket | `--font-mono` (IBM Plex Mono) | 10.5px | 400 | 1.2 | 0.16em |
| Buton | `--font-body` | 12px | 600 | 1 | 0 |

- Yoğun ekran: 14px gövde, 13px tablo, 10.5px mono etiket. Satır yüksekliği 1.55 altına inilmez.
- Ölçü: 72ch (okuma metni), kart metni en fazla 52ch.
- Başlıklar cümle düzeninde (uppercase yok); uppercase yalnız mono etiketlerde.

## Izgara ve boşluk

| Öğe | Değer |
| --- | --- |
| Kolon | 12 (içerik 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 kolon içerik + 4 kolon panel; tablolar tam genişlik. Kart içi padding 16px, satır 40px.
- Bölüm dikey boşluğu masaüstü 44px, mobil 28px; kart içi padding 16px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
| --- | --- | --- | --- |
| Zemin | --bg | yok | sayfa |
| Kart | --surface + 1px --line | --shadow | içerik bloğu |
| Yüzen | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Yüzeyler düz; ayrım 1px kenar ve zemin tonuyla. Grafiklerde referans çizgisi --line.
- Radius: `6px` (buton, input, chip), `10px` (kart, modal). Köşe 4–6px; 8px üstü yumuşak yuvarlatma operasyonel tabloyla çelişir.

## Yasaklar

- Renkli ısı haritası (7+ ton).
- Animasyonlu sayaç.
- Yuvarlak 16px+ kart.
- Süsleme amaçlı gradient.
- Beşten fazla renkli seri.
- Animasyonlu sayaç.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 6px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 6px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 6px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 6px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 6px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 6px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 6px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 6.41:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1.5px çizgi, 16px kutu; durum ikonları dolu |
| Fotoğraf | Veri ekranında fotoğraf yok; boş durumda tek illüstrasyon |
| İllüstrasyon | Yalnız boş/başarısız durumda tek çizgi illüstrasyon |
| Doku | Yok |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-bars` (sahne şablonunda `__MOTIF__`).
- Görsel hiyerarşi: Sayfada en fazla bir büyük görsel; gerisi metin ve veri.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Genel bakış | yüksek | 4 KPI + tek zaman serisi; her KPI'da delta ve zaman aralığı | `shots/01-page.png` |
| Olay / incident | yüksek | Zaman çizelgesi + durum etiketi; 1 satır = 1 olay | `shots/01-page.png` |
| Tablo / liste | yüksek | Filtre çubuğu + 40px satır + sağa hizalı sayı | `shots/01-page.png` |
| Servis detayı | yüksek | Metrik + log + eşik; 3 kolon | `shots/01-page.png` |
| Ayarlar / eşik | orta | Form 2 kolon, birim etiketi sağda mono | `shots/01-page.png` |
| Boş durum | düşük | Tek cümle + tek buton; illüstrasyon yok | `shots/01-page.png` |
| Onboarding / bağlantı | orta | 3 adım, her adımda tek doğrulama | `shots/01-page.png` |
| Rapor / dışa aktar | orta | Tarih aralığı + biçim seçimi + özet | `shots/01-page.png` |

## Erişilebilirlik

| Çift | Oran | Eşik | Not |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.89:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 7.06:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.27:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 6.21:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 6.41:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 101.2 | ≥ 60 hedef | ince metin |

- `--ink-faint` yalnız dekoratif; gövde metni asla.
- Renk tek başına anlam taşımaz: durum her zaman metin/ikonla birlikte.
- Klavye sırası görsel sırayı izler; odak tuzağı yok. prefers-reduced-motion ve prefers-contrast desteklenir.

## Örnek görseller

Aynı içerik, tüm stillerde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-page.png` | Tek sayfa — 1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form/veri, CTA ve alt bilgi tek karede. |

## Tuzaklar

| Belirti | Neden | Düzeltme |
| --- | --- | --- |
| Ekran kalabalık ama boş | KPI sayısı fazla | Ekran başına 4 KPI sınırı koy |
| Tablo okunmuyor | Zebra + renkli hücre | Zebra yerine hairline; rengi yalnız durum için kullan |
| Grafik yanlış okunuyor | Eksen etiketi eksik | Eksen + birim + zaman aralığı yaz |

## Komşu stiller

| Yön | Stil | Neden |
| --- | --- | --- |
| Garnitür | `ledger-meter` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `regulatory-report` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `game-pinball-neon` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://www.finops.org/ | FinOps Foundation — maliyet yönetimi pratiği |
| https://fonts.google.com/specimen/Inter | Inter (Google Fonts) — gövde ailesi |
| https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout | MDN · CSS Grid — panel yerleşimi |

## AI brief

```text
Bulut maliyet paneli tasarla: açık zemin, sağa hizalı tabular tutarlar, yeşil accent tasarrufta, kesikli bütçe eşiği.

Stil: FinOps Cost (finops-cost) · aile: Operasyon & Veri (172–181)
Token: --bg #f8faf9 · --surface #ffffff · --ink #121a17 · --accent #1f6b4f · --line rgba(18,26,23,.12)
Yarıçap: 6px / 10px · Tipografi: Inter / Inter / IBM Plex Mono
Zorunlu: Tutarlar tabular ve sağa hizalı; para birimi her satırda. · Bütçe eşiği grafikte kesikli çizgiyle gösterilir. · Accent yalnız tasarruf/onay.
Yasak: Renkli ısı haritası (7+ ton). · Animasyonlu sayaç. · Yuvarlak 16px+ kart.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="finops-cost"] {
  --bg: #f8faf9; --bg-2: #eef4f1;
  --surface: #ffffff; --surface-2: #f1f6f3;
  --ink: #121a17; --ink-soft: #455a52; --ink-faint: #7b8f87;
  --accent: #1f6b4f; --accent-ink: #f6fdf9;
  --line: rgba(18,26,23,.12);
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 1px 0 rgba(0,0,0,.2); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
