# 181 · Regulatory Report

> **Bir cümlede:** Uyum raporu: serif başlık, numaralı bölüm, gri tablo ve tek lacivert accent ile resmî belge düzeni.

| | |
|---|---|
| **Hissiyat** | resmî, denetlenebilir, "madde madde" |
| **En iyi** | uyum/regülasyon raporu, yıllık bildirim, denetim dosyası |
| **Kaçın** | kampanya sayfası, neon |
| **Zorluk** | zor · **Erişilebilirlik** | iyi |
| **Aile** | Operasyon & Veri (172–181) · **Token** | `kit/tokens.css` → `[data-style="regulatory-report"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Regulatory Report, bir belgeyi ekranda da belge gibi tutar: numaralı bölüm, kaynak dipnotu, ölçülü serif.

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
- **Numaralı bölüm:** 1 / 1.1 / 1.1.1 hiyerarşisi.
- **Serif gövde:** Lora 16px/1.7, ölçü 68ch.
- **Lacivert accent:** yalnız bağlantı ve onay mührü.
- **Gri tablo:** kenar çizgili, zebra yok.
- **Tipografi:** Lora (display) + Lora (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#1d3a6b`; nötr skala `#fffdf9` → `#16181c`.
- **Yarıçap:** `0px` / `2px`; Köşe 4–6px; 8px üstü yumuşak yuvarlatma operasyonel tabloyla çelişir.

## Zorunlu kurallar

1. Bölüm numaraları ve başlıklar tutarlı.
2. Her tabloda birim ve kaynak dipnotu.
3. Metin 68ch'i geçmez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#fffdf9` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#f4f1ea` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#ffffff` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#f8f5ef` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#16181c` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#4a5057` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7c838b` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#1d3a6b` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#f7faff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(22,24,28,.16)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.49:1** · `ink-soft/bg` **8.02:1** · `ink-faint/bg` **3.77:1 (dekoratif)** · `accent-ink/accent` **10.74:1**.
- Durum renkleri accent'in türevi değil, ayrı semantik token'lar (--ok/--danger/--warn) üzerinden gelir; accent eylem rengidir.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Lora) | 40px (mobil 26px) | 600 | 1.12 | -0.02em |
| H2 | aynı | 24px | 600 | 1.22 | -0.015em |
| H3 | aynı | 17px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Lora) | 14px | 400 | 1.55 | 0 |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Köşe 4–6px; 8px üstü yumuşak yuvarlatma operasyonel tabloyla çelişir.

## Yasaklar

- Renkli uyarı blokları.
- Dekoratif görsel.
- Yuvarlak köşe.
- Süsleme amaçlı gradient.
- Beşten fazla renkli seri.
- Animasyonlu sayaç.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 0px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 0px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 0px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 0px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 0px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 0px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 0px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 11.23:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1.5px çizgi, 16px kutu; durum ikonları dolu |
| Fotoğraf | Veri ekranında fotoğraf yok; boş durumda tek illüstrasyon |
| İllüstrasyon | Yalnız boş/başarısız durumda tek çizgi illüstrasyon |
| Doku | Yok |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-none` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 17.49:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.02:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 3.77:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 10.74:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 11.23:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 103.5 | ≥ 60 hedef | ince metin |

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
| Garnitür | `academic-paper` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `access-audit` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `sticker-sheet` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://fonts.google.com/specimen/Lora | Lora (Google Fonts) — gövde serif |
| https://en.wikipedia.org/wiki/Regulatory_compliance | Regulatory compliance (Wikipedia) — rapor yapısı |
| https://www.w3.org/TR/WCAG22/ | WCAG 2.2 — erişilebilirlik ölçütleri |

## AI brief

```text
Uyum raporu sayfası tasarla: serif gövde, numaralı bölümler, lacivert accent yalnız bağlantıda, gri kenar çizgili tablo.

Stil: Regulatory Report (regulatory-report) · aile: Operasyon & Veri (172–181)
Token: --bg #fffdf9 · --surface #ffffff · --ink #16181c · --accent #1d3a6b · --line rgba(22,24,28,.16)
Yarıçap: 0px / 2px · Tipografi: Lora / Lora / IBM Plex Mono
Zorunlu: Bölüm numaraları ve başlıklar tutarlı. · Her tabloda birim ve kaynak dipnotu. · Metin 68ch'i geçmez.
Yasak: Renkli uyarı blokları. · Dekoratif görsel. · Yuvarlak köşe.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="regulatory-report"] {
  --bg: #fffdf9; --bg-2: #f4f1ea;
  --surface: #ffffff; --surface-2: #f8f5ef;
  --ink: #16181c; --ink-soft: #4a5057; --ink-faint: #7c838b;
  --accent: #1d3a6b; --accent-ink: #f7faff;
  --line: rgba(22,24,28,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 1px 0 rgba(0,0,0,.2); --shadow-hard: none;
  --font-display: "Lora", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
