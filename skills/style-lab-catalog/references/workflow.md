# Yeni stil ekleme akışı (8 adım)

Kataloğa **yeni** stil eklerken izlenecek sıra. Var olan stili uygulamak için bu akışa girme
(`SKILL.md → Procedure`). Süre beklentisi: tek stil ≈ 30–45 dk (yazım) + kapılar.

Kaynak dosyalarını `styles/<nn>-<slug>/` altında düzenle; `kit/` çıktıları üreticilerle
güncellenir. Üretilen dosyaları elle değiştirme; commit öncesi kapıları çalıştır.

---

## 1 · Niyet, band ve numara

- Niyeti 2–3 ölçülebilir kritere çevir ("uzun okuma + sakin + kurumsal").
- Band seç: `kit/families.json` (tek kaynak, 21 band, 1–145 kesintisiz) + `references/families.md`
  (3 tipik kullanım). Yeni bant açıyorsan aralığı kesintisiz tut (son band 136–145 ise
  sonraki 146–150) ve `kit/families.json` içindeki band aralığını güncelle.
- Numara + slug: klasör adı `<nn>-<slug>`, slug İngilizce kebab-case ve **benzersiz**.

```bash
# numara/slug çakışması var mı
ls styles | grep -E "^<nn>-|<slug>$" || echo "temiz"
node -e "const s=require('./kit/styles.index.json').styles.map(x=>x.slug);console.log(s.includes('<slug>')?'index çakışması':'index temiz')"
```

Bant içi tema çakışması varsa (aynı konu iki stile atanmışsa) **dur ve sor**; katalogda
yinelenen kimlik, aile içi kopya kadar zararlıdır.

## 2 · `styles/<nn>-<slug>/style.md`

`_templates/style-template.md` bölümlerinin **tamamı** doldurulur (24 başlık):

`## Öz` (Nedir / Ne değildir / Nereden gelir / 3 saniyede tanıma testi) · `## Görsel imza` ·
`## Renk` · `## Tipografi` · `## Izgara ve boşluk` · `## Yüzey ve derinlik` ·
`## Bileşen reçeteleri` · `## Görsel dil` · `## Ekran reçeteleri` · `## Hareket` · `## Koyu mod` ·
`## Zorunlu kurallar` · `## Yasaklar` · `## Erişilebilirlik` · `## Örnek görseller` ·
`## Tuzaklar` · `## Komşu stiller` · `## Referanslar` (en az 3 `https://` satırı) ·
`## AI brief` (kopyalanabilir kod bloğu) · `## Token` (`[data-style="<slug>"]` bloğu).

Zorunlu ayrıntılar:

- Başlık: `# <nn> · <Ad>` ve `> **Bir cümleyle:** …` satırı (≤ 170 karakter).
- Meta tabloda **Hissiyat / En iyi / Kaçın / Aile / Token** satırları.
- "Ne değildir" maddeleri **ölçülebilir** fark yazsın (radius, kontrast, ölçek, accent hex).
- `## Hareket` tablosu `tokens.json → motion.sequences` ile **birebir** aynı sayıları taşır.

## 3 · `tokens.json`

```jsonc
{
  "slug": "<slug>", "num": "<nn>", "name": "<Ad>", "version": 2,
  "css": "[data-style=\"<slug>\"] { --bg: …; … }",   // token-block açık bloğuyla BİREBİR
  "palette": { "bg","bg2","surface","surface2","ink","inkSoft","inkFaint","accent","accentInk","line",
               "dark": { aynı 10 anahtar } },
  "typography": { "display","body","mono","scale","weights","lineHeight","tracking","measure","forbidden" },
  "shape": { "radius","radiusLg","border","maxRadius" },
  "elevation": { "levels","shadow","shadowHard","rule" },
  "spacing": { "unit","scale","sectionY","cardPadding" },
  "grid": { "columns","gutter","container","measure","breakpoints","asymmetry" },
  "imagery": { … }, "components": { "button","input","card","nav","tableRow","toast","chip","modal","chart" },
  "motion": { "fast","base","slow","easing","properties","reduced","forbidden","family","sequences": { "enter","scroll","pin","hover" } },
  "must": [ … ], "mustNot": [ … ],
  "neighbors": { "compatible": [ … ], "forbidden": [ … ] },
  "refs": [ { "label","url","use" } ]
}
```

Kurallar: `spacing.scale` 4·8·12·16·24·32·48·64; `shape.radius`/`radiusLg` dolu;
`must`/`mustNot` en az 3 madde; `neighbors` slug'ları katalogda **var olmalı**;
`refs` en az 3 `https://` kayıt; `motion.family` bandın adı.

```bash
node -e "JSON.parse(require('fs').readFileSync('styles/<nn>-<slug>/tokens.json'));console.log('json ok')"
```

## 4 · `token-block.css`

İki blok, tek dosya:

```css
/* <nn> · <Ad> — açık tema (tokens.json "css" alanıyla birebir aynı) */
[data-style="<slug>"] { --bg: #…; --bg-2: #…; --surface: #…; --surface-2: #…; --ink: #…; --ink-soft: #…; --ink-faint: #…; --accent: #…; --accent-ink: #…; --line: …; --radius: …; --radius-lg: …; --shadow: …; --shadow-hard: …; --font-display: …; --font-body: …; --font-mono: …; --tracking: …; --blur: …; --grain: …; }

/* <nn> · <Ad> — koyu tema (palette.dark ile birebir aynı) */
[data-theme="dark"][data-style="<slug>"] { --bg: …; --bg-2: …; --surface: …; --surface-2: …; --ink: …; --ink-soft: …; --ink-faint: …; --accent: …; --accent-ink: …; --line: …; }
```

20 sözleşme değişkeni eksiksiz olmalı; koyu blok `palette.dark` değerleriyle **birebir**
eşleşmeli (`kit/check-schema.mjs` bunu denetler).

## 5 · Hareket imzası (`motion.sequences`) — aile içi çeşitlilik

Stilin karakterini sayıya çevir, sonra **aile içinde** karşılaştır:

| Karakter | Süre | Eğri |
|---|---|---|
| Ani/agresif, mekanik | 0.15–0.35s | `steps(2..4, end)` · sert bezier |
| Disiplinli, kurumsal | 0.4–0.7s | `cubic-bezier(.18,.86,.24,1)` gibi erken duran |
| Sakin, uzun okuma | 0.85–1.15s | yavaş bezier (`cubic-bezier(.4,.05,.2,1)`) |
| Deneysel/optik | 0.2–0.6s | `steps()` veya aşırı eğri |

Bütçe: `enter ≤ 1.2s`, `scroll ≤ 1.2s`. `pin.enabled: true` ise `scrub` (≤ 1.4) ve `distance` yazılır.
`prefers-reduced-motion` notu `motion.reduced` alanında durur.

```bash
node kit/motion-check.mjs          # aile içi 7 parametrenin en az 2'sinde ayrışma (playbook §6.2)
```

Aynı ailede kopya imza çıkarsa süre/eğri/yön/trigger/stagger'dan **en az 2'sini** değiştir.

## 6 · `shots.config.fragment.mjs` + `keywords.json`

```js
// styles/<nn>-<slug>/shots.config.fragment.mjs
export const CONFIG = {
  motif: 'none',            // none | rings | blob | grid | bars | dots | paper | mesh
  bodyClass: '',            // '' | 'upper' | 'hard-shadow'
  extraCss: `
      /* yalnız var(--…) — hard-coded renk yasak */
      h1 { font-size: 52px; max-width: 20ch; }
      .sig::before { content: ""; background: var(--accent); }
    `,
};
```

```json
["<türkçe etiket>", "<türkçe etiket>", "<türkçe etiket>"]
```

`extraCss` imza görsel dili kurar; her değer `var(--…)` olmalı. `keywords.json` 3 Türkçe
etiket (galeri araması) — `apply-fragments --apply` ile `kit/gallery.data.mjs → KEYWORDS` içine aktarılır.

## 7 · Kaynaklardan üretim (kit dosyaları)

Kaynak dosyalarını üreticilerle birleştir. Çıktı eşlemesi:

| Ne | Nereye |
|---|---|
| `token-block.css` açık+koyu blok | `kit/tokens.css` (aynı biçimde) |
| `shots.config.fragment.mjs → CONFIG` | `kit/render/shots.config.mjs → STYLES[slug]` |
| `keywords.json` | `kit/gallery.data.mjs → KEYWORDS[slug]` |
| Tek satır (num, slug, name, family, tag, tags, palette, refs…) | `kit/styles.index.json → styles[]` |
| Band aralığı (yeni band açıldıysa) | `kit/families.json → families[]` (1–145 kesintisiz) |
| `palette.dark` koyu blok | `token-block.css` ile eşleşir; kontrast ihlalinde değeri düzelt, baseline'a borç ekleme |

```bash
node kit/apply-fragments.mjs --check    # fragment ↔ kit dosyaları senkron mu (değilse exit 1)
node kit/apply-fragments.mjs --apply    # idempotent birleştirme: tokens.css + shots.config.mjs + gallery KEYWORDS
```

`--apply` yalnız `apply-fragments:*` işaretleri arasındaki üretilen bölgeleri yazar; elle
_yazılmış eski bloklara dokunmaz, ikinci çalıştırma aynı baytları üretir.

## 8 · Render + kapılar + senkron

```bash
node kit/render/render-shots.mjs --styles <slug> --force   # 27 sahne
node kit/sync-shot-tables.mjs --write --styles <slug>      # style.md tablolarını manifest'ten doldur
node kit/render/optimize-shots.mjs --styles <slug>            # kayıpsız sıkıştır
node kit/render/optimize-shots.mjs --styles <slug> --verify   # piksel-identical doğrula (fark 0)
bash kit/gates.sh                                          # tüm kapılar
```

`bash kit/gates.sh` sırası: galeri denetimi → şema → kontrast (`--strict-soft`) → ekran
tabloları senkronu (`--check`) → hareket → token export → görsel regresyon.

Bitiş koşulu: `kapılar: temiz` **ve** render edilen görsellerde stilin imza öğelerinden en az
2'si görünür. Görsel ile `style.md` çelişiyorsa ölçüler `style.md`'den alınır, çelişki raporlanır.

---

## Teslim kontrol listesi

- [ ] 5 dosya tam: `style.md`, `tokens.json`, `token-block.css`, `shots.config.fragment.mjs`, `keywords.json`
- [ ] `tokens.json` parse ediyor; `slug`/`num` klasörle birebir; `version: 2`
- [ ] `tokens.json.css` = `token-block.css` açık bloğu (karakter farkı yok)
- [ ] 20 sözleşme değişkeni tam; koyu blok = `palette.dark`
- [ ] `motion.sequences` dört anahtar (enter/scroll/pin/hover); `node kit/motion-check.mjs` temiz
- [ ] `style.md` 24 bölüm dolu; `## Hareket` sayıları `tokens.json` ile aynı; ≥3 https referans
- [ ] `extraCss` içinde tek bir renk literali yok
- [ ] `bash kit/gates.sh` → `kapılar: temiz`
- [ ] Render dalgası ayrı yürütüldüyse PNG'ler `styles/<slug>/shots/` altında
- [ ] Commit öncesi staged dosyalar incelendi; cache ve geçici çıktılar eklenmedi
