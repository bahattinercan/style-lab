# 172 · Incident Response

> **Bir cümlede:** Olay müdahale konsolu: zaman çizelgesi, turuncu uyarı, tek sahiplik ve durum etiketleriyle sakin bir kriz ekranı.

| | |
|---|---|
| **Hissiyat** | kontrollü kriz, "kim ne yapıyor" |
| **En iyi** | SRE/olay yönetimi, kesinti müdahalesi, vardiya panosu |
| **Kaçın** | pazarlama vitrini, uzun okuma |
| **Zorluk** | zor · **Erişilebilirlik** | iyi |
| **Aile** | Operasyon & Veri (172–181) · **Token** | `kit/tokens.css` → `[data-style="incident-response"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Incident Response, kriz anında okunurluğu korur: tek zaman çizelgesi, tek sahip, tek sonraki adım.

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
- **Zaman çizelgesi:** her olay 44px satır, sol tarafta saat mono.
- **Turuncu uyarı:** accent yalnız açık olay ve eylem.
- **Sahiplik:** her satırda tek isim, tek rol.
- **Sakin kriz:** 4 KPI sınırı, grafik yok.
- **Tipografi:** Chakra Petch (display) + Chakra Petch (gövde) + IBM Plex Mono (mono etiket).
- **Renk disiplini:** tek accent `#f08b3c`; nötr skala `#0f1216` → `#e9eef5`.
- **Yarıçap:** `4px` / `6px`; Köşe 4–6px; 8px üstü yumuşak yuvarlatma operasyonel tabloyla çelişir.

## Zorunlu kurallar

1. Her olay satırında saat, sahip ve durum yazılır.
2. Accent yalnız açık/kritik durum.
3. Ekran başına en fazla 4 KPI.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
| --- | --- | --- | --- |
| `--bg` | `#0f1216` | sayfa zemini | kart zemini olarak |
| `--bg-2` | `#131820` | bölüm ayırıcı zemin, tablo başı | buton zemini |
| `--surface` | `#171d26` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#1f2833` | pasif chip, hover zemini | birincil buton |
| `--ink` | `#e9eef5` | başlık, gövde, ikon | dev zemin |
| `--ink-soft` | `#a8b4c2` | ikincil metin, açıklama | — |
| `--ink-faint` | `#7f8c9c` | dekoratif etiket, ayırıcı metin | etkileşimli metin |
| `--accent` | `#f08b3c` | birincil eylem, aktif durum | geniş zemin (opaklık 0.14 ile) |
| `--accent-ink` | `#1a0d03` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(233,238,245,.14)` | tüm kenarlıklar | metin rengi |

- Ölçülen kontrast: `ink/bg` **16.11:1** · `ink-soft/bg` **8.92:1** · `ink-faint/bg` **5.48:1 (dekoratif)** · `accent-ink/accent` **7.67:1**.
- Durum renkleri accent'in türevi değil, ayrı semantik token'lar (--ok/--danger/--warn) üzerinden gelir; accent eylem rengidir.
- Opaklıkla tonlanan accent: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — ikinci bir hex uydurma.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 40px (mobil 26px) | 600 | 1.12 | -0.02em |
| H2 | aynı | 24px | 600 | 1.22 | -0.015em |
| H3 | aynı | 17px | 600 | 1.3 | 0 |
| Gövde | `--font-body` (Chakra Petch) | 14px | 400 | 1.55 | 0 |
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

- Yanıp sönen alarm ikonu.
- Beşten fazla durum rengi.
- Grafik duvarı.
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

- Odak halkası: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; halka 7.57:1 (zemin/surface üstünde ≥ 3).
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
| `--ink` / `--bg` | 16.11:1 | ≥ 4.5 | gövde metni |
| `--ink-soft` / `--bg` | 8.92:1 | ≥ 4.5 | ikincil metin |
| `--ink-faint` / `--bg` | 5.48:1 | ≥ 3 hedef | yalnız dekoratif |
| `--accent-ink` / `--accent` | 7.67:1 | ≥ 4.5 | buton metni |
| odak halkası / zemin | 7.57:1 | ≥ 3 | accent halka |
| APCA `--ink` / `--bg` | Lc 95.9 | ≥ 60 hedef | ince metin |

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
| Garnitür | `log-stream` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Garnitür | `access-audit` | Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz |
| Karıştırma | `luxury-typography` | İki farklı süs dili aynı ekranda rekabet eder |
| Karıştırma | `carnival-festival` | İki farklı süs dili aynı ekranda rekabet eder |

## Referanslar

| Kaynak | Ne için |
| --- | --- |
| https://www.atlassian.com/incident-management | Incident management (Atlassian) — olay akışı ve roller |
| https://sre.google/sre-book/table-of-contents/ | Google SRE Book — müdahale pratiği |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — zaman ve kimlik etiketi |

## AI brief

```text
Olay müdahale ekranı tasarla: koyu zemin, zaman çizelgesi, turuncu yalnız açık olayda, 4 KPI sınırı, mono saat.

Stil: Incident Response (incident-response) · aile: Operasyon & Veri (172–181)
Token: --bg #0f1216 · --surface #171d26 · --ink #e9eef5 · --accent #f08b3c · --line rgba(233,238,245,.14)
Yarıçap: 4px / 6px · Tipografi: Chakra Petch / Chakra Petch / IBM Plex Mono
Zorunlu: Her olay satırında saat, sahip ve durum yazılır. · Accent yalnız açık/kritik durum. · Ekran başına en fazla 4 KPI.
Yasak: Yanıp sönen alarm ikonu. · Beşten fazla durum rengi. · Grafik duvarı.
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
```

## Token

```css
[data-style="incident-response"] {
  --bg: #0f1216; --bg-2: #131820;
  --surface: #171d26; --surface-2: #1f2833;
  --ink: #e9eef5; --ink-soft: #a8b4c2; --ink-faint: #7f8c9c;
  --accent: #f08b3c; --accent-ink: #1a0d03;
  --line: rgba(233,238,245,.14);
  --radius: 4px; --radius-lg: 6px;
  --shadow: 0 1px 0 rgba(0,0,0,.2); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Chakra Petch", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
