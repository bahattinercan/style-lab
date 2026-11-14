---
name: style-lab-catalog
description: >-
  style-lab kataloğundan (v6: 251 stil, 31 aile bandı, stil başına tek sayfa) niyete göre 1 baskın + en fazla 1 garnitür stil seçer, token'ları [data-style] bloğundan uygular, kompozisyon arketipini (hero/nav/density) kurar ve kapılarla doğrular. Koyu mod ve animasyon v6'da yoktur. Tetikleyiciler: "stil seç", "hangi stil", "style-lab", "landing tasarla", "açılış sayfası", "dashboard görünümü", "design system", "which style", "apply tokens", "oyun stili", "yeni stil ekle", "stil ara".
---

# style-lab Catalog (v6)

Katalog **251 stili 31 aile bandında** tutar; her stil **tek uzun sayfa** mock-up'ı ile render edilir
(1280×2400, `styles/<nn>-<slug>/shots/01-page.png`). Koyu mod ve animasyon katmanı v6'da kaldırıldı.

Tek kaynak `styles/<nn>-<slug>/` klasörüdür:

| Dosya | İçerik |
|---|---|
| `style.md` | kararlar: Öz · Görsel imza · Zorunlu kurallar · Yasaklar · Bileşen reçeteleri · Tuzaklar · AI brief |
| `tokens.json` | palet (10 renk), tipografi, shape, boşluk, bileşen reçeteleri, `layout`, refs |
| `token-block.css` | aynı token'ların CSS bloğu |
| `shots.config.fragment.mjs` | sahne imzası (motif + imza CSS) |
| `keywords.json` | galeri etiketleri |
| `shots/01-page.png` | tek sayfa render (dokümanla çelişirse **görsel kazanır**) |

Bu skill **seçer, okur, uygular, doğrular**. `kit/` altyapısını yazmak (kapılar, render motoru,
export, indeks üretimi) bu skill'in işi değildir.

## When to Use

- Bir yüzey için **görsel dil seçilecekse** ("stil seç", "hangi stil", "style-lab").
- **Sayfa/ekran tasarlanacaksa** ("landing tasarla", "dashboard görünümü", "tema kur").
- Var olan arayüze **katalog token'ı uygulanacaksa** (renk, tipografi, radius, gölge).
- **Oyun/operasyon/ticaret/kültür** gibi yeni bantlardan stil aranacaksa (152–251).
- Kataloğa **yeni stil** eklenecekse → `references/workflow.md` (tek komut).

**Kullanma:** stil dışı işler (saf bug fix, veri/metin işi) · `kit/` altyapı değişikliği
(ayrı bakım işi) · PNG render dalgası (komutu öğret, çalıştırma) · ölçüsüz "zevk" tartışması.

**Sınır (öncelik):** Bu skill **neyi** istediğini seçer (stil + token). **Nasıl** yazılacağı
`modern-web-guidance` yetkisindedir: `color-mix()`, `@property`, container query, `light-dark()`
gibi platform mekaniği kodlanırken `npx -y modern-web-guidance@latest search "<2-5 kelime>"` →
`retrieve "<id>"`. Token değerlerini MWG'ye göre değiştirme; MWG yalnız mekanizmayı verir.

## 30 saniyede karar

| Niyet | Band | Örnek slug |
|---|---|---|
| Sakin, kurumsal, okunur | Sade (01–07) | `minimalism`, `swiss-design`, `japandi` |
| Veri/operasyon yoğunluğu | Veri & Gösterge (46–55) · Operasyon & Veri (172–181) | `telemetry-grid`, `incident-response`, `finops-cost` |
| Oyun / HUD / espor | Oyun & Etkileşim (152–171) | `game-hud`, `game-sci-fi-cockpit`, `game-esports-league` |
| Ticaret / vitrin | Ticaret & Vitrin (182–191) | `grocery-delivery`, `luxury-atelier`, `electronics-spec` |
| Kültür / yayın | Kültür & Yayın (192–201) | `museum-exhibition`, `film-festival`, `condensed-news` |
| Sağlık / bilim | Sağlık & Bilim (202–211) | `clinical-trial`, `mental-wellness`, `genomics-lab` |
| Öğrenme | Öğrenme & Oyunlaştırma (212–221) | `language-app`, `skill-tree`, `exam-prep` |
| Malzeme / zanaat | Materyal & Zanaat (222–231) | `terrazzo-stone`, `linocut-print`, `raw-steel` |
| Tipografi denemesi | Tipografi Denemeleri (232–241) | `variable-weight`, `justified-book`, `uppercase-only` |
| Gelecek / araştırma | Gelecek & Spekülatif (242–251) | `agent-console`, `quantum-dashboard`, `digital-twin` |

Tam bant tablosu: `references/families.md` · stil listesi: `docs/katalog.md` ·
makine-okur: `kit/styles.index.json`.

## Procedure

### 0 · Bağlamı kur (30 sn)

```bash
node kit/pick.mjs --intent "uzun okuma + sakin + kurumsal"     # 3 aday + gerekçe + dosya yolları
node kit/pick.mjs --intent "oyun hud" --limit 5
node kit/pick.mjs --families                                   # 31 aile bandı
node -e "const i=require('./kit/dist/index.slim.json');console.log('stil:',i.count)"
```

Katalog sayılarını **ezberleme**; sayı gerekiyorsa `kit/dist/report.md` (`node kit/report.mjs`) üretir.
`kit/styles.index.json` ~880 KB — ajan onu okumaz; `pick` + `index.slim.json` kullanılır.

### 1 · Stil seç (1 baskın + en fazla 1 garnitür)

1. Niyeti 2–3 **ölçülebilir** kritere çevir ("uzun okuma + sakin + kurumsal").
2. `node kit/pick.mjs --intent "<niyet>" --limit 3 --garnish` — adayların **gerekçe** satırını oku.
3. `references/families.md`'den 2–3 aday band seç; `style.md → ## Öz` ile daralt.
4. **Birini baskın** seç. Garnitür gerekiyorsa yalnız `tokens.json → neighbors.compatible` içinden seç;
   `neighbors.forbidden` **kullanılmaz**.
5. Seçimi tek cümleyle gerekçelendir: "X baskın çünkü …; Y garnitür çünkü …".

Garnitür kuralı: tek bir alt ağaçta (`[data-style="Y"]` sarmalayıcı) yaşar, baskın stilin
değişkenlerini ezmez. 3+ stil kimlik kaybıdır.

### 2 · Oku (uygulamadan önce, kısa)

1. `style.md` → `## Öz`, `## Görsel imza`, `## Zorunlu kurallar`, `## Yasaklar`,
   `## Bileşen reçeteleri`, `## Tuzaklar`, `## AI brief`.
2. `tokens.json` → `palette`, `typography`, `shape`, `spacing`, `grid`, `layout` (hero/nav/density),
   `components`, `must` / `mustNot`.
3. `shots/01-page.png` (tek sayfa: nav, hero, üç bölüm, bileşen ızgarası, form+veri, CTA, footer).

### 2b · Kompozisyon arketipini uygula

Stil yalnız renk değil **iskelet** de taşır: `tokens.json → layout.hero | nav | density`.
Token'ları uygulayıp varsayılan split hero'ya dönmek "aynı site, farklı boya" üretir.

| `layout.hero` | Ne kuracağın |
|---|---|
| `split` / `split-reverse` | kopya + tek görsel panel; `reverse` görseli sola alır |
| `centered` | ortalanmış tek mesaj + altta geniş görsel bandı |
| `type` | görsel yok; başlık ekranın kendisi (poster ölçeği) |
| `fullbleed` | medya sol kenara taşar, kopya sağda nefes alır |
| `product` | kopya üstte küçük, dev ürün paneli altta |
| `index` | kopya solda dar, sağda 2×2 iş/kayıt ızgarası |
| `sticky` | solda yapışkan kopya, sağda kayan 3 panelli hikâye |

`nav`: `inline` · `pill` · `split` · `utility` · `rail` · `density`: `sparse | balanced | dense`.
Referans: `kit/render/partials/hero-<id>.html` + `nav-<id>.html`; gerekçeler `kit/render/layouts.json`.

### 3 · Token'ları uygula

```html
<html data-style="game-hud">
```

```css
/* yalnız var(--…) — hard-coded renk/radius/gölge/font YOK */
.card  { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); }
.btn   { background: var(--accent); color: var(--accent-ink); border-radius: var(--radius); }
.muted { color: var(--ink-soft); }              /* --ink-faint yalnız dekoratif */
.focus:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
```

Kaynak sırası: `kit/tokens.css → [data-style="<slug>"]` → (paket) `kit/dist/tokens.all.css` ·
Tailwind için `kit/dist/tailwind.theme.css` · Figma için `kit/dist/figma.variables.json`
(tekil stil: `node kit/export-tokens.mjs --styles <slug> --split`).

Sözleşme değişkenleri (20): `--bg --bg-2 --surface --surface-2 --ink --ink-soft --ink-faint
--accent --accent-ink --line --radius --radius-lg --shadow --shadow-hard --font-display
--font-body --font-mono --tracking --blur --grain`. Ek: `--danger/--ok/--warn`,
`--space-1…8`, `--data-1…4`.

Bileşen ölçüleri `## Bileşen reçeteleri` tablosundan **birebir** alınır; "yaklaşık" ölçü kimliği bozar.

### 4 · Koyu mod ve animasyon (v6: kapsam dışı)

- Tema değiştirici, `data-theme="dark"` bloğu, `palette.dark` **ekleme** — katalog açık palet üretir.
  Tüketici proje koyu tema istiyorsa kendi temasını kurar; katalogdan renk ödünç almaz.
- Animasyon/geçiş ekleme. `@keyframes`, `animation:` ve scroll-reveal kütüphaneleri v6 sözleşmesinde yok.
  Etkileşim geri bildirimi statiktir (renk/kenar/odak değişimi).

### 5 · Doğrula

```bash
node kit/render/render-shots.mjs --styles <slug> --force     # tek sayfa (1280×2400)
node kit/render/optimize-shots.mjs --styles <slug>           # kayıpsız sıkıştırma
node kit/render/render-shots.mjs --styles <slug> --measure    # taşma / kırpılan blok / küçük metin
bash kit/gates.sh                                            # 27 adım: parite → katalog → atama → ölçüm → export → imza
```

Tek tek: `node kit/check-schema.mjs` · `node kit/check-contrast.mjs --strict-soft` ·
`node kit/check-layout.mjs` · `node kit/sync-shot-tables.mjs --check` · `node kit/export-tokens.mjs --check` ·
`node kit/build-gallery.mjs --check` · `node kit/build-catalog-doc.mjs --check` · `node kit/render/phash.mjs --check`.

Uygulanan kod katalogla uyumlu mu: `node kit/style-lint.mjs <dizin> --style <slug>`
(renk/font literali hata, radius uyarı; `--strict` ile hepsi kapı). Kural listesi: `--list-rules`.

`styles/<slug>/shots/01-page.png`'yi aç: `## Görsel imza` maddelerinden **en az 2'si** görünmüyorsa
uygulama eksiktir.

### 6 · Yeni stil (tek komut)

`references/workflow.md` — `kit/specs/*.json` SPEC'i yaz, `node kit/add-style.mjs <dosya>` çalıştır.
Mevcut stili uygulamak için bu akışa girme.

## Pitfalls

| Tuzak | Neden olur | Doğrusu |
|---|---|---|
| Hard-coded `#hex`, `box-shadow`, `border-radius: 12px` | hızlı prototip | Yalnız `var(--…)`; stil değişince bileşen bozulmamalı |
| 2+ garnitür | "daha zengin görünsün" | 1 baskın + en fazla 1 garnitür, tek alt ağaçta |
| `neighbors.forbidden` stili karıştırmak | tabloya bakılmadı | Yalnız `neighbors.compatible`; `check-schema` yakalar |
| Koyu mod/animasyon eklemek | v5 alışkanlığı | v6'da kapsam dışı; `check-schema` motion/dark görürse kırmızı |
| `kit/tokens.css` / `shots.config.mjs` / `gallery.data.mjs` elle düzenlemek | "burada da yazayım" | Bu dosyalar **üretilir**: kaynağa yaz + `apply-fragments --apply` |
| Render sonrası sıkıştırmayı unutmak | PNG'ler büyür | `optimize-shots --styles <slug>` + `phash --check` |
| Doküman yerine görselden ölçü kopyalamak | görsel 1280px'e göre üretildi | Ölçüler `style.md` tablolarından; karakter görselden |
| `styles.index.json` sayısını ezberlemek | dosya üretilir, değişir | Sayıyı `node -e` veya `kit/dist/report.md` ile ölç |
| Kapıları atlayıp "tamam" demek | hızlı teslim | `bash kit/gates.sh` çıktısı olmadan bitmiş sayılmaz |

## Verification

Bir uygulama "bitti" sayılmadan:

- [ ] Seçim gerekçeli: 1 baskın + (varsa) 1 garnitür, `neighbors.compatible` içinden.
- [ ] `style.md` okundu: Zorunlu kurallar + Yasaklar + Bileşen reçeteleri uygulandı.
- [ ] Kodda tek bir renk/radius/gölge/font literali yok:
      `grep -nE "#[0-9a-fA-F]{3,8}|rgba?\(|border-radius: *[0-9]|box-shadow: *[0-9]" <dosya>`
- [ ] Kökte tek öznitelik: `data-style="<slug>"` (tema özniteliği yok).
- [ ] Animasyon/`@keyframes` yok; etkileşim statik geri bildirimle.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1, accent üstü ≥ 4.5:1 (`--strict-soft`).
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px, 390px'te taşma yok.
- [ ] Kompozisyon: ekran `layout.hero` arketipine göre kuruldu; `node kit/check-layout.mjs` temiz.
- [ ] `bash kit/gates.sh` → "kapılar: temiz" (ya da kalan hatanın gerekçesi yazılı).

Referanslar: `references/families.md` (31 band) · `references/workflow.md` (yeni stil, tek komut) ·
`docs/katalog.md` (251 stil) · `playbook.md` §2 seçim, §5 token, §14–§16 kontrast/export.
