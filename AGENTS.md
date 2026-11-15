# AGENTS.md · style-lab (v6)

## Proje özeti

Tasarım stili kataloğu: **251 stil**, **31 aile bandı**, stil başına **tek uzun sayfa** (1280×2400)
mock-up + token seti + bileşen reçetesi + AI brief. Koyu mod ve animasyon **v6'da kaldırıldı**.

Kod az, **veri + üretici** çok: `styles/<nn-slug>/` altındaki kaynak dosyalar `kit/` scriptleriyle
tek yönlü olarak HTML/CSS/PNG/JSON'a derlenir. Bağımlılık yok — `npm install` gerekmez; Node 22 +
kurulu Chrome/Edge yeter.

**Kaynak → üretim zinciri**

```
kit/specs/*.json  →  kit/add-style.mjs  →  styles/<nn>/ {tokens.json, token-block.css, style.md,
                                            shots.config.fragment.mjs, keywords.json}
styles/<nn>/token-block.css + fragment + keywords
                  →  kit/apply-fragments.mjs  →  kit/tokens.css · kit/render/shots.config.mjs · kit/gallery.data.mjs
kit/tokens.css    →  kit/render/render-shots.mjs  →  styles/<nn>/shots/01-page.png
kit/styles.index.json → kit/build-gallery.mjs → kit/gallery.html · kit/dist/index.slim.json
kit/tokens.css    →  kit/export-tokens.mjs  →  kit/dist/{tokens.all.css, tailwind.theme.css, figma.variables.json}
styles/<nn>/shots/01-page.png → kit/build-thumbs.mjs → kit/site/thumbs/<nn>-01-page@640|1280.webp
kit/gallery.html + thumbs + fonts + PNG → kit/build-site.mjs → _site/ → .github/workflows/pages.yml → Pages
```

## Klasör haritası

```
styles/<nn-slug>/    style.md · tokens.json · token-block.css · shots.config.fragment.mjs · keywords.json · shots/
kit/                 üretici + kapı scriptleri (.mjs, hepsi CLI'lı)
kit/specs/           bands.json (aile şablonları) + stil SPEC'leri (100 v6 stili burada)
kit/lib/style-spec.mjs  SPEC → kaynak üreteci
kit/render/          page.html (TEK şablon), scene.css, partials/, CDP tarayıcı, layouts.json
kit/dist/            ÜRETİLEN çıktı (elle düzenlenmez)
kit/fonts/           29 Google Fonts ailesi (woff2, OFL)
kit/site/thumbs/     ÜRETİLEN: kart/tam boy WebP türevleri + manifest.json (repoda)
_site/               ÜRETİLEN site (git'e girmez) → GitHub Pages artifact'ı
.github/workflows/   gates.yml (kapılar) · pages.yml (statik site yayını)
docs/                katalog.md (üretilir) · v6-sadelestirme-raporu.md · v5-revizyon-raporu.md · stage-lab-plani.md
playbook.md          tasarım reçeteleri
TESTING.md           siteyi açma + test etme
```

## Kırılamaz kurallar

1. **Üretilen dosyayı elle düzenleme.** `kit/tokens.css`, `kit/render/shots.config.mjs`,
   `kit/gallery.data.mjs`, `kit/gallery.html`, `kit/styles.index.json`, `kit/live-styles.js`,
   `kit/dist/**`, `docs/katalog.md`, `styles/*/shots/**`, `kit/site/thumbs/**`, `_site/**` üretici çıktısıdır.
   Değişiklik kaynağa
   (`styles/*/tokens.json`, `token-block.css`, `style.md`, fragment, ya da `kit/specs/*.json`) yazılır,
   `--apply`/`add-style` ile üretilir. `--check` kapıları elle yazımı **drift** olarak yakalar.
2. **Kaynak değiştiyse üretimi de çalıştır**: `node kit/apply-fragments.mjs --apply` →
   `node kit/build-gallery.mjs` → `node kit/export-tokens.mjs` → `node kit/build-catalog-doc.mjs`.
   `shots/01-page.png` yeniden üretildiyse **ayrıca** `node kit/build-thumbs.mjs` (WebP türevleri);
   aksi halde `build-thumbs --check` bayat türevle kapıyı kırar.
3. **Token sözleşmesi sabit.** Her stil aynı 20 değişkeni doldurur (`--bg … --grain`, `--space-1…8`).
   Yeni stil için sözleşmeye değişken **ekleme** — eksik doldur.
4. **Koyu mod yok (v6).** `palette.dark`, `[data-theme="dark"]` bloğu, koyu sahne üretilmez.
   `check-schema` bu alanları görürse **hata** verir. Tema değiştirici ekleme.
5. **Animasyon yok (v6).** `motion` alanı, `@keyframes`, `animation:` bildirimi yasak;
   `check-schema` `motion` görürse hata verir, migration bant fragment'larından keyframe'leri temizledi.
6. **Kontrast ölçülür, tahmin edilmez.** WCAG + APCA + odak halkası 3:1. Eşikler `add-style`
   (SPEC doğrulaması: ink/bg ≥ 4.5, ink-soft/bg ≥ 4.5, accent-ink/accent ≥ 4.5, odak ≥ 3) ve
   `kit/check-contrast.mjs --strict-soft` ile ölçülür. `kit/contrast-baseline.json` bir **borç defteri**:
   kapıyı geçirmek için baseline'a kayıt **ekleme**; değeri düzelt.
7. **Kompozisyon çeşitliliği.** `layout` `kit/render/layouts.json` arketiplerinden gelir; elle uydurma.
   Kural: hiçbir `hero|nav` parmak izi %25'i geçmez, her arketip ≥4 stilde kullanılır, aile başına
   en az 3 farklı parmak izi. Kapı: `node kit/check-layout.mjs`.
8. **Tek sahne politikası.** Repoda yalnız `shots/01-page.png` durur (1280×2400). Başka sahne
   üretme, `.shots-cache` kullanma; `kit/shots.core.json` = `["01-page.png"]`.
9. **Dosya yolu kırılgan.** `kit/gallery.html` yanındaki `gallery.css`/`tokens.css`/`gallery.js` ile
   çalışır; görseller göreli yol (`../styles/...`). Dosyaları `kit/` dışına taşıma, mutlak yol yazma.
10. **Sayı uydurma.** "251 stil", "251 PNG", "31 aile" gibi iddialar `bash kit/gates.sh` ve
    `kit/dist/report.md` / `docs/katalog.md` çıktısından gelir. Ölçmediğin sayıyı README/AGENTS'e yazma.
11. **Yeni stil = tek komut.** `kit/specs/*.json`'a SPEC yaz → `node kit/add-style.mjs <dosya>`.
    Komut kaynakları üretir, atamaları yapar, render eder, indeks/rapor/baseline yeniler.
12. **Bir değişiklik = bir amaç.** Üretilen dev dosyaları (880 KB `styles.index.json`, 780 KB
    `gallery.html`) format gerekçesiyle yeniden yazma; diff'i okunamaz hale getirir.
13. **Commit mesajı** `feat|fix|docs|test|chore(<alan>): <ne>` — alan: render, gallery, schema, export,
    content, specs, docs. Mevcut geçmiş böyle (`fix(render): …`).
14. **Kullanıcıya görünen metin Türkçe; kod tanımlayıcıları İngilizce.** `docs/`, `style.md` prose'u Türkçe.
15. **Dış kaynak eklerken** `refs/design-resources` kataloğuna yaz, ölü link bırakma.

## Komutlar

```bash
# Siteyi aç (sunucusuz)
kit/gallery.html                    # file:// çalışır; arama/URL testi için sunucu gerekli
python -m http.server 8000 --bind 127.0.0.1
# → http://localhost:8000/kit/gallery.html · kit/live.html?style=game-hud

# Yayın sitesi (GitHub Pages)
node kit/build-thumbs.mjs              # PNG → WebP türevleri (kart 640 / tam 1280) · --check: bayat mı
node kit/build-site.mjs                # _site/ derle · --check: varlık bütünlüğü · --clean: sıfırdan
node kit/check-site.mjs                # duman testi: HTTP + başsız tarayıcı (landing/galeri/katalog/live)
python -m http.server 8000 --directory _site --bind 127.0.0.1   # derlenen siteyi yerelde gez

# Yeni stil ekle (SPEC → her şey)
node kit/add-style.mjs kit/specs/my-batch.json          # üret + render + indeks
node kit/add-style.mjs kit/specs/my-batch.json --dry    # yalnız doğrula
node kit/add-style.mjs kit/specs/my-batch.json --check  # kaynaklar SPEC ile aynı mı

# Tek stil sahne üretimi / görsel regresyon
node kit/render/render-shots.mjs --styles <slug> --force --jobs 2
node kit/sync-shot-tables.mjs --write --styles <slug>
node kit/render/optimize-shots.mjs --styles <slug>
node kit/render/phash.mjs --write --force     # görsel imza baseline
node kit/render/phash.mjs --check             # 251 PNG'nin imzası

# Token / export / doküman
node kit/export-tokens.mjs                    # dist/* (--check: güncel mi)
node kit/build-gallery.mjs                    # gallery.html + styles.index.json
node kit/build-catalog-doc.mjs                # docs/katalog.md
node kit/report.mjs                           # dist/report.md
node kit/composition-report.mjs               # dist/composition.md

# Tüketen projede stil gerçekten uygulanmış mı
node kit/style-lint.mjs src --style <slug>
```

## Doğrulama (ajan kapısı)

Bu depoda `package.json` yoktur; doğrulama kapısı `kit/gates.sh` dosyasıdır:

```bash
bash kit/gates.sh          # 31 adım, birkaç dakika: parite → katalog → atamalar → ölçüm → export → site → görsel imza
```

Hızlı alt kümeler (değişikliğin türüne göre, tamamı değil):

```bash
# kaynak / şema / token / fragment
node kit/check-schema.mjs && node kit/apply-fragments.mjs --check && node kit/check-contrast.mjs --strict-soft
# web arayüzü / galeri / doküman
node kit/check-gallery-ui.mjs && node kit/build-gallery.mjs --check && node kit/build-catalog-doc.mjs --check
# kompozisyon
node kit/assign-layouts.mjs --check && node kit/check-layout.mjs
# yayın sitesi
node kit/build-thumbs.mjs --check && node kit/build-site.mjs --check && node kit/check-site.mjs
# tek sayfa taşma ölçümü + görsel imza
node kit/render/render-shots.mjs --sample 8 --measure && node kit/render/phash.mjs --check
```

**"Bitti" tanımı:** `bash kit/gates.sh` son satırı `kapılar: temiz` **ve** çalıştırdığın komutun
çıktısı gösterilmiş olmalı. Kapı kırmızıysa düzelt ve **aynı komutu tekrar** çalıştır.
3 turda geçmiyorsa dur, ⚠️ ile neden + 2 seçenek sun.

**İstisnalar (çıktıda yazılır, sessizce geçilmez):**
`node` yoksa `gates.sh` kapıları atlar ve uyarır (0 döner — "temiz" sayma).
`kit/render/.baseline/` yoksa piksel regresyonu `↷` ile atlanır.
Flutter SDK gerekmiyor (v6'da flutter export yok).

Commit öncesi kapı **kurulu**: `.git/hooks/pre-commit` → `bash kit/gates.sh` (yeniden kurmak için
`bash kit/install-hooks.sh`). Tam set 120 s'lik araç zaman aşımını aşabilir: kancayı `--no-verify`
ile atlamak yerine `gates.sh`'i ayrı uzun koşuda çalıştır, çıktıyı göster, commit'i ondan sonra yap.

## Pitfalls

- **`styles/` klasör adı = slug kaynağı.** `152-game-hud` → `game-hud`. Klasörü yeniden adlandırmak
  token bloğu + galeri + indeks + PNG'yi kırar.
- **`kit/tokens.css` elle düzenlenmez**: düzeltme `styles/<slug>/token-block.css` içine yazılır, `--apply`.
- **`check-schema` üç kopya paritesi** json ⇄ fragment ⇄ css. Yalnız birini düzeltmek kapıyı kırar.
- **`gallery.html` ~780 KB, `styles.index.json` ~880 KB** — bunları read/edit ile açma; `node -e` ile alan çek.
- **Band eklerken `kit/families.json` kesintisiz olmalı** (boşluk/çakışma `apply-fragments`'ı kırar).
- **SPEC'te `avoid`/`best`/`feeling` düz string olmalı** (dizi verirsen `add-style` hata verir).
- **`neighbors` slug'ları katalogda ya da aynı partide olmalı** (`check-schema` arar).
- **Headless render WebGL'i SwiftShader ile koşar** — GPU FPS ölçmez; performans iddiası için yeterli değil.
- **`file://` altında `replaceState` engellenir** — URL durumu (filtre/paylaşım) testi sunucu ister.
- **Pre-commit kancası 31 adım koşar (>120 s)** ve araç zaman aşımına takılır; kapıyı ayrı uzun komutta
  çalıştırıp temiz çıktıyı göster, sonra commit et.
- **Boş kare riski:** CDP sekme havuzunda viewport yarışı olabilir; `render-shots` artık `innerWidth`
  doğrular, PNG boyutunu kontrol eder ve boş kareyi bir kez yeniden yakalar (`kit/render/cdp-browser.mjs`).
- **Kapılar statik denetim yapar, tıklama davranışını yakalamaz.** Galeri için `check-gallery-ui` var;
  lightbox/arama davranışı için headless Chrome + CDP turu elle koşulur.
- **`optimize-shots --all` sonrası `phash --check`** koş; sıkıştırma piksel değiştirdiyse imza kayar.

## Kural haritası

| Konu | Dosya | Ne zaman okunur |
|---|---|---|
| Stil seçimi + token uygulama prosedürü | `skills/style-lab-catalog/SKILL.md` | Bir uygulamaya stil uygulamadan **önce** |
| Aile→kullanım eşlemesi | `skills/style-lab-catalog/references/families.md` | Stil adaylarını daraltırken |
| Yeni stil / SPEC alanları | `kit/specs/*.json` + `kit/lib/style-spec.mjs` | Stil eklerken |
| 251 stilin indeksi | `docs/katalog.md` | Slug/etiket ararken |
| Tasarla, tekdüzeliği kır (reçete) | `playbook.md` §2–§5 | Bileşen/ekran tasarlarken |
| Kontrast + export sözleşmesi | `playbook.md` §14–§16 | Renk/erişilebilirlik/çıktı hedefi değiştirirken |
| v6 kararları ve ölçümler | `docs/v6-sadelestirme-raporu.md` | Kapsam tartışmasında |
| Siteyi açma, test, sorun giderme | `TESTING.md` | Sayfa açılmıyorsa / görsel boşsa |

---
_Doğrulandı (v6): `bash kit/gates.sh` → `kapılar: temiz` (27 adım) · 251 stil · 251 tek sayfa PNG ·
31 aile · 16 farklı hero|nav parmak izi · kontrast 0 hata / 19 yumuşak uyarı · phash 251/251 fark 0._
