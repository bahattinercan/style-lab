# 177 · Data Lineage

> **Bir cümlede:** Veri soy ağacı ekranı: düğüm çizgileri, soluk camgöbeği accent ve mono şema etiketleri.

| | |
|---|---|
| **Hissiyat** | sistemli, haritalı, "kaynak nereden geliyor" |
| **En iyi** | veri kataloğu, ETL izleme, şema dokümantasyonu |
| **Kaçın** | tüketici vitrini |
| **Zorluk** | zor · **Erişilebilirlik** | iyi |
| **Aile** | Operasyon & Veri (172–181) · **Token** | `kit/tokens.css` → `[data-style="data-lineage"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Data Lineage, veri akışını harita gibi okutur: kutu, çizgi ve rol etiketi; süs yok.

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
- **Düğüm dili:** her tablo bir kutu, kenarlar 1px, ok başı yok.
- **Camgöbeği accent:** yalnız seçili yol.
- **Mono kimlik:** tablo adları mono, tipografi minimal.
- **Şema etiketi:** sütunlar 11px mono, satır 28px.
- **Tipografi:** IBM Plex Mono (display) + Inter (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#54c8d8`; nötr skala `#0d1216` → `#e8f1f6`.
- **Yarıçap:** `4px` / `6px`; Köşe 4–6px; 8px üstü yumuşak yuvarlatma operasyonel tabloyla çelişir.

## Zorunlu kurallar

1. Tablo ve sütun adları mono ve okunur (≥11px).
2. Seçili yol dışında accent kullanılmaz.
3. Her düğümde kaynak/hedef rolü yazılır.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0d1216` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#12191f` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#162028` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#1e2b34` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#e8f1f6` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#a4b7c3` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7b8e99` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#54c8d8` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#04181c` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(232,241,246,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.45:1** · `ink-soft/bg` **9.09:1** · `ink-faint/bg` **5.53:1 (dekoratif)** · `accent-ink/accent` **9.22:1**.
- Durum renkleri accent'in türevi değil, ayrı semantik token'lar (--ok/--danger/--warn) üzerinden gelir; accent eylem rengidir.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (IBM Plex Mono) | 40px (mobil 26px) | 600 | 1.12 | -0.02em |
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
- Radius: `4px` (buton, input, chip), `6px` (kart, modal). Köşe 4–6px; 8px üstü yumuşak yuvarlatma operasyonel tabloyla çelişir.

## Yasaklar

- Animasyonlu akış çizgisi.
- Rastgele renklendirilmiş düğümler.
- 8px altı etiket.
- Süsleme amaçlı gradient.
- Beşten fazla renkli seri.
- Animasyonlu sayaç.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
| --- | --- | --- | --- | --- | --- | --- |
| Buton (birincil) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2 |
| Kart | içerik | 20px | 4px | H3 + 14 gövde | --surface + --line + --shadow | hover yalnız tıklanabilir kartta: kenar --ink %18 |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | aktif: --ink + 2px alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 · sayı mono | satır altı 1px --line | hover: --surface-2 · seçili: sol 2px --accent |
| Modal | içerik | 28px | 4px | H3 + 14 gövde | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink zemin + --bg metin | ikon + tek satır, 4sn |
| Grafik paleti | — | — | 4px | eksen 11 mono | --accent + accent %16 dolgu + --line referans | en fazla 3 seri |

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 9.53:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ikon butonlarında padding ile hedef büyütülür.

## Görsel dil

| Öğe | Kural |
| --- | --- |
| İkon | 1.5px çizgi, 16px kutu; durum ikonları dolu |
| Fotoğraf | Veri ekranında fotoğraf yok; boş durumda tek illüstrasyon |
| İllüstrasyon | Yalnız boş/başarısız durumda tek çizgi illüstrasyon |
| Doku | Yok |
| Logo | Monokrom --ink, en az 24px yükseklik |

- İmza motif: `motif-grid` (sahne şablonunda `__MOTIF__`).
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
| `--ink` / `--bg` | 16.45:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 9.09:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.53:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 9.22:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 9.53:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 97.2 | ≥ 60 hedef | ince metin |

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
| Garnitür | `blueprint-drawing` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `atlas-console` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `carnival-festival` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `dopamine-ui` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://en.wikipedia.org/wiki/Data_lineage | Data lineage (Wikipedia) — soy ağacı kavramı |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — şema etiketi |
| https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout | MDN · CSS Grid — düğüm yerleşimi |

## AI brief

```text
Veri soy ağacı ekranı tasarla: koyu zemin, kutu düğümler, camgöbeği yalnız seçili yolda, mono şema etiketleri.

Stil: Data Lineage (data-lineage) · aile: Operasyon & Veri (172–181)
Token: --bg #0d1216 · --surface #162028 · --ink #e8f1f6 · --accent #54c8d8 · --line rgba(232,241,246,.14)
Yarıçap: 4px / 6px · Tipografi: IBM Plex Mono / Inter / IBM Plex Mono
Zorunlu: Tablo ve sütun adları mono ve okunur (≥11px). · Seçili yol dışında accent kullanılmaz. · Her düğümde kaynak/hedef rolü yazılır.
Yasak: Animasyonlu akış çizgisi. · Rastgele renklendirilmiş düğümler. · 8px altı etiket.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="data-lineage"] {
  --bg: #0d1216; --bg-2: #12191f;
  --surface: #162028; --surface-2: #1e2b34;
  --ink: #e8f1f6; --ink-soft: #a4b7c3; --ink-faint: #7b8e99;
  --accent: #54c8d8; --accent-ink: #04181c;
  --line: rgba(232,241,246,.14);
  --radius: 4px; --radius-lg: 6px;
  --shadow: 0 1px 0 rgba(0,0,0,.2); --shadow-hard: none;
  --font-display: "IBM Plex Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
