# AGENTS.md · style-lab

## Proje özeti

Tasarım stili kataloğu: **151 stil** × 37 sahne şablonu, her stilde token seti (açık + koyu),
ölçülebilir animasyon imzası, kompozisyon arketipi (hero/nav/density) ve AI brief.
Çıktı hedefleri: CSS değişkenleri (`kit/dist/tokens.all.css`), Tailwind, Figma variables,
Flutter `ThemeExtension`, React `.js`/`.d.ts`.

Kod yok, **veri + üretici** var: `styles/<nn-slug>/` altındaki kaynak dosyalar `kit/` içindeki
scriptlerle tek yönlü olarak HTML/CSS/JSON/PNG'ye derlenir. Bağımlılık yok — `npm install` gerekmez;
yalnız Node 22 + kurulu Chrome/Edge.

**Üç kaynak kopyası** (parite `check-schema` ile zorunlu): `tokens.json` ⇄ `shots.config.fragment.mjs` ⇄ `kit/tokens.css` bloğu.

## Klasör haritası

```
styles/<nn-slug>/    style.md · tokens.json · token-block.css · shots.config.fragment.mjs · keywords.json · shots/ (PNG)
kit/                 üretici + kapı scriptleri (hepsi .mjs, CLI'lı)
kit/render/          sahne şablonları, CDP tarayıcı, layouts.json, motion/patterns.json
kit/dist/            ÜRETİLEN çıktı (elle düzenlenmez)
kit/.shots-cache/    1.2 GB üretilen sahne cache'i — gitignore'lu, commit edilmez
docs/                katalog.md · animasyon-referanslari.md · stage-lab-plani.md · v5-revizyon-raporu.md
playbook.md          tasarım reçeteleri (§6.2 animasyon, §17 koyu mod, §18 export sözleşmesi)
refs/design-resources/ dondurulmuş kaynak kataloğu (link sağlığı denetimli)
TESTING.md           siteyi açma + test etme (tek cevap)
```

## Kırılamaz kurallar

1. **Üretilen dosyayı elle düzenleme.** `kit/tokens.css`, `kit/render/shots.config.mjs`,
   `kit/gallery.data.mjs`, `kit/gallery.html`, `kit/styles.index.json`, `kit/live-*.js`,
   `kit/motion-lab.html`, `kit/dist/**` üretici çıktısıdır. Değişiklik kaynağa yazılır,
   `node <script> --apply` ile üretilir. `--check` kapıları elle yazımı **drift** olarak yakalar.
2. **Kaynak değiştiyse üretimi de çalıştır**, sonra `--check` ile doğrula:
   `node kit/apply-fragments.mjs --apply` · `node kit/build-gallery.mjs` · `node kit/export-tokens.mjs`.
3. **Token sözleşmesi sabit.** Her stil aynı değişken adlarını doldurur (`--bg`, `--ink`, `--accent`,
   `--line`, `--radius`, `--font-*`, `--space-1…8`, `--data-1…4`, `--focus`…).
   Bileşen kodu stil değişince değişmez; stil değişimi yalnız `[data-style]` özniteliğidir.
   Yeni stil için sözleşmeye değişken **ekleme** — eksik doldur.
4. **Koyu mod zorunlu.** `palette.dark` (10 renk) + `kit/tokens.css` koyu bloğu + `shots/17-18`.
   Eksik anahtar `node kit/dark-fill.mjs --styles <slug>` ile formülle tamamlanır; elle değer uydurma.
   Bileşik seçici aynı elemanda iki öznitelik ister: `data-style` **ve** `data-theme="dark"`.
5. **Kontrast ölçülür, tahmin edilmez.** WCAG + APCA + odak halkası 3:1, açık **ve** koyu blokta.
   `kit/contrast-baseline.json` / `kit/dark-baseline.json` birer **borç defteri**: yeni ihlal hatadır.
   Kapıyı geçirmek için baseline'a kayıt **ekleme**; değeri düzelt.
6. **Hareket imzası aile içinde benzersiz.** Aile komşusundan en az 2 parametre farklı (süre/eğri/desen).
   Süre bütçesi aşımı, `prefers-reduced-motion` eksikliği, yasak desen (`spring`/`bounce`/sonsuz döngü)
   kapıdan döner. Üretimde `teachingOnly` desen kullanılmaz.
7. **Sahne politikası v5.** Repoda yalnız 4 çekirdek sahne durur (`kit/shots.core.json`, 604 PNG).
   Diğer sahneler `kit/.shots-cache/` altında üretilir — **commit etme**. Yeni sahne üretimi sonrası
   `node kit/render/optimize-shots.mjs --all --verify` (piksel farkı 0 olmalı).
8. **Dosya yolu kırılgan.** `kit/gallery.html` yanındaki `gallery.css` / `tokens.css` / `gallery.js`
   ile çalışır; görseller göreli yol (`../styles/...`). Dosyaları `kit/` dışına taşıma, mutlak yol yazma.
9. **Sayı uydurma.** "151 stil", "604 sahne", "%16 tekdüzelik" gibi iddialar `bash kit/gates.sh` ve
   `kit/dist/report.md` çıktısından gelir. Ölçmediğin sayıyı README/AGENTS'e yazma.
10. **Yeni stil = 8 adım** (aşağıdaki akış). Adım atlarsan `check-schema` üç kopya paritesinde patlar.
11. **Bir değişiklik = bir amaç.** Üretilen dev dosyaları (binlerce satır `styles.index.json`,
    `gallery.html`) format/whitespace gerekçesiyle yeniden yazma; diff'i okunamaz hale getirir.
12. **Commit mesajı** `feat|fix|docs|test|chore(<alan>): <ne>` — mevcut geçmiş böyle
    (`fix(render): …`, `feat(gallery): …`). Alan: render, gallery, schema, motion, export, content, refs.
13. **Kullanıcıya görünen metin Türkçe; kod tanımlayıcıları İngilizce.** `docs/`, `style.md` prose'u Türkçe.
14. **Dış kaynak eklerken** `refs/design-resources` kataloğuna yaz, ölü link bırakma (link sağlığı denetimi var).

## Komutlar

```bash
# Siteyi aç (sunucusuz)
kit/gallery.html                    # file:// çalışır; arama/URL testi için sunucu gerekli
python -m http.server 8000 --bind 127.0.0.1
# → http://localhost:8000/kit/gallery.html · kit/live.html?style=bento-grid · kit/motion-lab.html

# Tek stil sahne üretimi / görsel regresyon
node kit/render/render-shots.mjs --styles <slug> --force --jobs 2
node kit/sync-shot-tables.mjs --write --styles <slug>
node kit/render/optimize-shots.mjs --styles <slug>
node kit/render/baseline.mjs --write      # piksel baseline (ilk sefer)
node kit/render/phash.mjs --check         # çekirdek sahnelerin görsel imzası

# Token / export
node kit/export-tokens.mjs                # dist/*  (--check: güncel mi)
node kit/normalize-motion.mjs             # dist/motion.json (önkoşul)
node kit/export/flutter.mjs --verify      # dart analyze + flutter test (Flutter SDK ister)
node kit/export/react.mjs --verify

# Tüketen projede stil gerçekten uygulanmış mı
node kit/style-lint.mjs src --style <slug>
```

## Doğrulama (ajan kapısı)

Bu depoda `package.json` yoktur; doğrulama kapısı `kit/gates.sh` dosyasıdır:

```bash
bash kit/gates.sh          # 38 adım, birkaç dakika: galeri → şema → kontrast → hareket → export → görsel imza
```

Hızlı alt kümeler (değişikliğin türüne göre, tamamı değil):

```bash
# web arayüzü / galeri
node kit/check-gallery-ui.mjs && node kit/build-gallery.mjs --check
# şema / token / fragment
node kit/check-schema.mjs && node kit/apply-fragments.mjs --check && node kit/check-contrast.mjs --strict-soft
# hareket
node kit/motion-check.mjs && node kit/assign-motion.mjs --check
# görsel
node kit/render/phash.mjs --check
```

**"Bitti" tanımı:** `bash kit/gates.sh` son satırı `kapılar: temiz` **ve** çalıştırdığın komutun
çıktısı gösterilmiş olmalı. Kapı kırmızıysa düzelt ve **aynı komutu tekrar** çalıştır.
3 turda geçmiyorsa dur, ⚠️ ile neden + 2 seçenek sun.

**İstisnalar (çıktıda yazılır, sessizce geçilmez):**
`node` yoksa `gates.sh` kapıları atlar ve uyarır (0 döner — "temiz" sayma).
`kit/render/.baseline/` yoksa piksel regresyonu `↷` ile atlanır.
`kit/.shots-cache/` temiz klonda yoktur; eksik sahne hata değil, `render-shots` ile üretilir.
Flutter SDK yoksa `export/flutter.mjs --verify` koşmaz — `doğrulanmadı: flutter SDK yok` yaz.

Commit öncesi kapı **kurulu**: `.git/hooks/pre-commit` → `bash kit/gates.sh` (yeniden kurmak için
`bash kit/install-hooks.sh`). Tam set 120 s'lik araç zaman aşımını aşabilir: kancayı `--no-verify`
ile atlamak yerine `gates.sh`'i ayrı uzun koşuda çalıştır, çıktıyı göster, commit'i ondan sonra yap.

## Yeni stil ekleme akışı

1. `_templates/style-template.md` → `styles/146-<slug>/style.md` (`# 146 · Ad` + `> **Bir cümlede:**`).
2. `token-block.css` — açık + koyu blok, sözleşmenin tamamı.
3. `tokens.json` — palet (açık+koyu), tipografi, motion imzası, `layout` (hero/nav/density), 3 referans.
4. `shots.config.fragment.mjs` — `motif`, `bodyClass`, `extraCss`, `scenes: { landing }`.
5. `keywords.json` (3 etiket) + `kit/families.json` bandı (aralık **kesintisiz** kalacak).
6. `node kit/apply-fragments.mjs --apply` → `--check` · `node kit/assign-layouts.mjs --apply` → `--check`.
7. `node kit/render/render-shots.mjs --styles <slug> --force --jobs 2` → `node kit/sync-shot-tables.mjs --write --styles <slug>`.
   Bölüm/akış görüntüleyicileri de aynı stilden beslenir: `node kit/render/render-sections.mjs --styles <slug>` (12 bölüm) ve
   `node kit/render/render-flows.mjs --styles <slug>` (3 akış). Atlanırsa `kit/sections.html` ve `kit/flows.html`
   "bu bölüm henüz üretilmemiş" der — `.shots-cache/` gitignore'lu olduğu için bu çıktı her klonda yeniden üretilir.
8. `node kit/render/optimize-shots.mjs --styles <slug>` → `node kit/build-gallery.mjs` → `bash kit/gates.sh` temiz olana kadar.

## Pitfalls

- **`styles/` klasör adı = slug kaynağı.** `04-luxury-typography` → `luxury-typography` (URL'de numarasız).
  Klasörü yeniden adlandırmak 37 sahne + tokens.css + gallery.data + index.json'u kırar.
- **`kit/tokens.css` "elle düzenlenmez" kuralı** en sık çiğnenen kural: koyu blok düzeltmesi
  `styles/<slug>/token-block.css` içine yazılır, sonra `--apply`.
- **`check-schema` üç kopya paritesi** json ⇄ fragment ⇄ css. Yalnız birini düzeltmek kapıyı kırar.
- **`gallery.html` 767 KB, `styles.index.json` 880 KB** — bunları read/edit ile açma; `node -e` ile alan çek.
- **Headless render WebGL'i SwiftShader ile koşar** — GPU FPS ölçmez; performans iddiası için bu çıktı yeterli değil.
- **`file://` altında `replaceState` engellenir** — URL durumu (filtre/paylaşım) testi sunucu ister.
- **Pre-commit kancası 38 adım koşar (>120 s)** ve araç zaman aşımına takılır; commit "başarısız"
  görünür. Çözüm: kapıyı ayrı uzun komutta çalıştırıp temiz çıktıyı göster, sonra commit et.
- **Kapılar statik denetim yapar, tıklama davranışını yakalamaz.** Galeri için `check-gallery-ui` var;
  motion-lab / lightbox davranışı için headless Chrome + CDP turu elle koşulur (düğme, arama, reduced-motion).
- **Flutter export `3.47.9` sürümüne pinli** (CI). Farklı SDK'da `dart analyze` çıktısı farklı olabilir.
- **`optimize-shots --all` sonrası `phash --check`** koş; sıkıştırma piksel değiştirdiyse görsel imza kayar.
- **`refs/design-resources` dondurulmuş** — kayıt silmek yerine `status` alanını güncelle.

## Kural haritası

| Konu | Dosya | Ne zaman okunur |
|---|---|---|
| Stil seçimi + token uygulama prosedürü | `skills/style-lab-catalog/SKILL.md` | Bir uygulamaya stil uygulamadan **önce** |
| Aile→kullanım eşlemesi | `skills/style-lab-catalog/references/families.md` | Stil adaylarını daraltırken |
| Yeni stil / bakım akışı | `skills/style-lab-catalog/references/workflow.md` | Yeni stil eklerken |
| 151 stilin indeksi | `docs/katalog.md` | Slug/etiket ararken (README'yi taramak yerine) |
| Tasarla, tekdüzeliği kır (reçete) | `playbook.md` §2–§6 | Bileşen/ekran tasarlarken, motion imzası kurarken |
| Kontrast + koyu mod + export sözleşmesi | `playbook.md` §7, §16–§20 | Renk/erişilebilirlik/çıktı hedefi değiştirirken |
| Sahne katmanı planı (S6, açık işler) | `docs/stage-lab-plani.md` | Sahne/render işine girmeden önce |
| Animasyon referansları → desen eşlemesi | `docs/animasyon-referanslari.md` | Yeni hareket deseni eklerken |
| v5 kararları ve gerekçeleri | `docs/v5-revizyon-raporu.md` | Sahne politikası/kapsam tartışmasında |
| Siteyi açma, test, sorun giderme | `TESTING.md` | Sayfa açılmıyorsa / görsel boşsa |
| Katalog dışı tasarım kaynağı (mockup, ikon, font) | `skills/tasarim-kaynak-katalogu/SKILL.md` | Asset ararken |

---
_Doğrulandı (2026-11-11): bu dosyadaki tüm `kit/…` · `docs/…` · `skills/…` yolları diskte var.
Hızlı alt küme koşuldu ve geçti (exit 0): `apply-fragments --check` (temiz) · `build-gallery --check`
(151 stil / 604 görsel) · `check-schema` (0 hata, 78 uyarı) · `check-contrast --strict-soft` ·
`motion-check` (0 hata, 2 uyarı) · `assign-motion --check` · `phash --check` (580/580, 0 fark).
Tam set `bash kit/gates.sh` bu dosya yazılırken **koşulmadı** (birkaç dakika + Flutter SDK ister)._
