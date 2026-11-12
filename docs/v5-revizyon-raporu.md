# style-lab v5 · Referans galerileri analizi ve gelişim raporu

> **Tarih:** 2026-11-09 · **Kapsam:** Awwwards · Lapa Ninja · Minimal Gallery · Landing Love · Land-book · Httpster · Refero
> **Yöntem:** yedi sitenin taksonomisi + repo ölçümü + 8 stilin landing ve 4 stilin işlevsel ekran render'ının gözle denetimi
> **Durum:** rapor + **P6, P0 ve P0.5 (sahne depolama) uygulandı** (bkz. §0.1, §0.2) · **hareket denetimi yapıldı, M paketleri plana eklendi** (§2.4, §4.5) · `bash kit/gates.sh` 21 adım **temiz**

## 0.1 · Uygulama durumu (P6 + P0 tamam, 2026-11-09)

| Paket | İş | Kanıt |
|---|---|---|
| P6 | `report.mjs --check` (bayat rapor = hata) | bayat dosyada `exit 1`, güncelde `✓` |
| P6 | `kit/dist/composition.md` + `composition-report.mjs` | tekdüzelik endeksi, aile/arketip dağılımı |
| P6 | README/CI kapı sayısı tek kaynağa indi | `gates.sh` 21 adım, CI aynı listeyi çalıştırıyor |
| P0 | `kit/render/layouts.json` (8 hero · 5 nav · 3 yoğunluk · 12 bölüm) | tek kaynak, gerekçeli |
| P0 | 13 partial (`partials/hero-*.html`, `nav-*.html`) + `landing.html`/`dark-landing.html` yer tutucuları | şablon paritesi kapıda |
| P0 | `tokens.json` şema v3 → `layout { hero, nav, density }` (145/145) | `check-schema` temiz |
| P0 | `assign-layouts.mjs` deterministik atama (`--dry/--apply/--check`) | aynı girdi → aynı çıktı, drift kapısı |
| P0 | `check-layout.mjs` + `--self-test` (5 sentetik ihlal + şablon testi) | kural seti no-op değil |
| P0 | 290 landing render (açık + koyu) + PHash baseline yenilendi | `phash --check` 4495/4495 temiz |
| P0 | `style.md` 145 dosyaya **Kompozisyon** satırı | doküman ↔ render tutarlı |

**Ölçüm (v4 → v5):** tek parmak izi %100 → **%16** (23/145) · farklı `hero|nav` 1 → **16** ·
en kalabalık tek hero %100 → **%28** (`split`) · aile başına ortalama farklı hero **2,9**.
Hepsi `node kit/check-layout.mjs --report` ve `kit/dist/composition.md` ile yeniden üretilebilir.

Sıradaki: **Faz 2 · hareket (M0–M5)** — kullanıcı kararı: animasyon ekseni en zayıf halka (§2.4).
Sonra: P2 (foto, onay: Unsplash/Pexels) → P1 (içerik) → P3 (bölüm) → P4 (akış) → P5 (keşif/MCP).

---

## 0.2 · Sahne depolama revizyonu (P0.5, 2026-11-09)

**Karar:** 4495 PNG repodan çıktı; repoda **4 çekirdek sahne × 145 = 580 PNG** kalıyor,
kalan 3915 görsel `kit/.shots-cache/` altında üretiliyor (gitignore). Site **yayınlanmıyor** (kullanıcı kararı).

| Ölçü | Önce | Sonra | Not |
|---|---|---|---|
| Repoda izlenen PNG | 4495 · 1,29 GB | **580 · 167 MB** | `kit/shots.core.json` tek kaynak |
| `phash --check` | 54,6 s · baseline 423 KB | **~7 s · 56 KB** | tam set: `--cache` |
| `kit/gallery.html` | 2,5 MB · 8993 `<img>` | **640 KB · 580 `<img>`** | sahne çipleri 4'e indi |
| Renderer | kare başına yeni tarayıcı · tam set **34 dk** | **tek tarayıcı + CDP, 4 sekme · tam set 9 dk 50 s** (ölçüldü) | `kit/render/cdp-browser.mjs` |
| Determinizm | `--virtual-time-budget` | `getAnimations()` dondurma, 4000 ms | aynı girdi → **birebir aynı bayt** (kanıtlı) |
| WebP | — | hazır (`format:'webp'`, q88 ≈ **4×** küçük) | repo PNG kalır (phash PNG çözer) |
| `style.md` | 31 satır + kayıp dosya atıfları | **4 satır + "tam set: render komutu"** | `sync-shot-tables` temizliyor |

**Ölçüm (düzeltilmiş):** ilk tahminim "34 dk → 7 dk" PNG sayfaları üzerinden yapılmıştı. Gerçek HTML
karelerinde kare maliyeti 0,11–0,23 s; **tam set 4495 kare = 589,8 s (9 dk 50 s)**, sekmeli paralellik
en iyi 4 sekmede (2 → 4,7 s · 4 → 3,3 s · 8 → 6,0 s / 31 kare). Günlük iş tek stil: **~3 s**.

**Windows tuzağı (kayda değer):** Chrome profilini repo içinde (`kit/render/.tmp/…`) açmak Defender
taraması yüzünden **30 s** sürüyor ve profili silmek de pahalı; ayrıca `proc.kill()` alt süreçleri
bırakıp sonraki turu kilitliyor. Çözüm: profil her koşuda TEMP'te yeni, silme yok (`sweepOldProfiles`
1 saatten eskileri arka planda süpürür), kapanışta Windows'ta `taskkill /T /F` (yalnız kendi PID ağacı).

**Ne kaybedildi:** CI'da tam set görsel regresyon (çekirdek 4 sahne kalıyor), galeride 27 sahnenin
statik önizlemesi (yerine "lokal üret" akışı), dokümanlarda tek tek sahne atıfları (scrub edildi).

---

## 0 · Özet (tek paragraf)

style-lab **token disiplininde** referans galerilerin tamamından ileride: 145 stil, açık+koyu palet, WCAG+APCA kapısı, motion imzası, Flutter/React/Figma export. Ama bu 145 stil **tek bir iskeleti** boyuyor: hepsi aynı nav (4 link + 2 buton), aynı split hero (solda kopya, sağda mock panel), aynı logo şeridi, aynı 8 "sayfa" wireframe'i ve **aynı kurgusal SaaS içeriği**. `layout` diye bir eksen yok, görsel katmanda **tek bir fotoğraf yok** (31 şablonun hiçbirinde `<img>` yok), bölüm-seviyesi kütüphane yok, sektör etiketi yok. Kısacası bugünkü katalog "aynı telden 145 renk" — Awwwards'ın ödüllendirdiği şey ise **sayfa başına farklı kompozisyon**. Aşağıdaki 6 paket bu boşluğu kapatıyor; ilk ikisi (kompozisyon ekseni + sektör içerik paketleri) katalogun inandırıcılığını tek başına değiştirir.

## 0.3 · Hareket fazı (M0–M5) durumu

| Paket | Durum | Kanıt |
|---|---|---|
| M0 · Ölçüm | ✅ | `kit/motion-audit.mjs` → `kit/dist/motion.md` (desen dağılımı, arketip×pin, doküman drift'i); `kit/motion/policy.json` (yasak desen + teachingOnly) lab kapısına bağlandı |
| M1 · Sözlük | ✅ | 16 desen (`kit/render/motion/patterns.json`), `motion.choreography` şema v4 145/145, `assign-motion.mjs`, `build-motion-css.mjs`; aile ≥3 desen, tavan %30, 6 sentetik ihlal self-test |
| M2 · Arketip × hareket | ✅ | `kit/render/motion/archetypes.json` (sticky⇒pin-scrub, index⇒grid-stagger, type⇒line-mask tercihi); `live.html` veri güdümlü (`live-motion.js`, `data-motion` + `--mi/--ms/--mh`), sabit süre yasak |
| M3 · Çalışma zamanı | ✅ | `kit/render/motion-measure.mjs` (CDP): süre paritesi ±20ms/%2, reduced'ta **0** gerçek animasyon, p95 frame ≤32ms; kapıda 6 stil örneklem |
| M4 · Storyboard | ✅ | `kit/render/motion-strip.mjs` → 145 şerit (5 kare + reduced, ms etiketli), `kit/.shots-cache/<dir>/27-motion.png` (~80 s) |
| M5 · Lab bağı | ⚠️ kısmi | `lab-bindings.json` + kapı (her desenin demosu var, ölü bağ yok), stil seçici mevcut; **demo sürelerinin stilin token'larına bağlanması (M5b) açık** |

**Ölçüm (M1 öncesi → sonrası):** farklı hareket parmak izi **10 → 55-60**, en kalabalık parmak izi
**%51 → %5-7**, `properties` yalnız opacity+transform **110/145 → desen türevli**, `choreography` kapsamı
**0 → 145/145**. `enter` dağılımı: fade-rise %20 · clip-curtain %17 · blur-in %17 · scale-settle %14 ·
line-mask %14 · letter-stagger %12 · split-slide %6.

---

## 0.4 · P2 · Görsel katman (2026-11-09)

| İş | Sonuç |
|---|---|
| Kaynak | `kit/images/` **24 kare** (7,1 MB); `INDEX.json`: kaynak id, lisans, etiket, kullanım notu |
| İndirme/doğrulama | `kit/fetch-images.mjs --all` / `--check` (boyut, yetim dosya, lisans kaydı) |
| Atama | `kit/assign-imagery.mjs`: aile → fotoğraf havuzu + `treatment` (`plain/scrim/duotone/grain`) |
| Uygulama | `hero-fullbleed` + `hero-centered` partial'ları `__PHOTO__`/`__PHOTO_ATTRS__` taşır; `scene.css`'te scrim/duotone/grain katmanları |
| Kapı | `check-imagery.mjs`: 145/145 photo+treatment, `plain ⇒ strength 0`, fotoğraflı arketiplerde photo zorunlu, şablon yer tutucuları |
| Ölçüm | 290 landing yeniden render **41,8 s**; 18/24 fotoğraf kullanımda (6 dosya yedek havuz) |

Yol boyunca çıkan iki gerçek hata düzeltildi: (1) fotoğraflı sayfada arka sekmede
`Page.captureScreenshot` askıda kalıyordu → yakalama öncesi `Page.bringToFront`; (2) ilk boyama
kaçtığında 5–9 KB'lik **boş kare** yazılıyordu → 14 KB altı yakalamada 2 kez yeniden deneme.
Küçük metin fotoğraf üstünde kalmasın diye caption bir **yüzey çipine** alındı.

---

## 0.5 · P1 · Sektör içerik katmanı (2026-11-09)

| İş | Sonuç |
|---|---|
| Paketler | `kit/content/` **8 sektör** (saas · emlak · danışmanlık · eğitim · e-ticaret · dergi · ajans · sağlık); her pakette eyebrow/h1/lede/CTA/proofs/logos/tiles |
| Atama | `kit/assign-content.mjs`: aile havuzu + arketip kuralı (`fullbleed ⇒ emlak`, `type ⇒ dergi`) + denge (ölü paket yok, tavan %35) |
| Şablonlar | 8 hero partial + logo şeridi `__COPY_*__` yer tutucuları; render-shots paketten doldurur (`__COPY_H1_LINES__` type arketipi için 3 satıra böler) |
| Kapı | `check-content.mjs`: 145/145 atama, 8/8 paket canlı, metin uzunluk sınırları (h1 ≤56), literal demo metni yok, her yer tutucunun karşılığı var |
| Ölçüm | 290 landing yeniden render **44,5 s**; dağılım: dergi 29 · emlak 27 · saas 23 · ajans 22 · danışmanlık 13 · e-ticaret 13 · eğitim 11 · sağlık 7 |

Bilinen flake: yoğun toplu render'da tek kare boş yazılabiliyor (5 KB). İki savunma eklendi:
14 KB altı yakalamada 3 kez yeniden deneme + `build-gallery` boş kare kapısı (`... boş/yarım render`).

---

## 0.6 · P3 · Bölüm kütüphanesi (2026-11-09)

| İş | Sonuç |
|---|---|
| Arketipler | `kit/render/sections.mjs` **12 bölüm** (hero, logo-wall, feature-trio, bento, how-it-works, testimonial, stats, pricing-table, faq, cta, footer, og-card) |
| İskelet | `section.html` + `section.css` (yalnız var(--…) renk, mevcut sınıflar) |
| Render | `render-sections.mjs` → `kit/.shots-cache/<dir>/sections/<id>.png`; **145 × 12 = 1740** görsel, **4 dk 49 s** |
| Görüntüleyici | `kit/sections.html?style=<slug>` (12 bölüm, üretilmemişse komut gösterir) |
| Kapı | `--measure`: yatay taşma ≤2px, viewport dışı öğe yok, 9px altı metin yok; boş kare **PNG renk çeşitliliğiyle** ölçülür (boyut eşiği yanıltıcıydı: 5–8 KB'lik sade bölümler geçerli) |

Yol boyunca düzeltilen iki hata: (1) bölüm HTML'leri alt dizine yazılınca `section.css`/`tokens.css`
göreli yolları çözülmüyordu → stiller sessizce kayboldu (artık `kit/render/` içine yazılıyor);
(2) copy yer tutucuları bölüm gövdesi gömülmeden dolduruluyordu → sıra düzeltildi.

---

## 0.7 · P4 · Akış şeritleri (2026-11-09)

| İş | Sonuç |
|---|---|
| Akışlar | `kit/render/flows.mjs` **3 akış × 3 adım**: onboarding (amaç→ekip→davet), checkout (sepet→ödeme→onay), invite (rol→mesaj→gönder) |
| İskelet | `flow.html` + `flow.css` (yalnız mevcut sınıflar + var(--…)) |
| Render | `render-flows.mjs` → `kit/.shots-cache/<dir>/flows/<id>.png`; **145 × 3 = 435** şerit, **78 s** |
| Görüntüleyici | `kit/flows.html?style=<slug>`; galeri kartlarında `▦ bölüm` / `⇢ akış` bağlantıları |
| Kapı | `--measure`: 3 adım zorunlu, yatay taşma ≤2px, viewport dışı adım yok; boş kare renk çeşitliliğiyle ölçülür |

Not: P4'ün "yeni işlevsel ekranlar" kısmı (paywall, feed, table-filters, profile, search, integrations)
ve 5 varyantlı durum matrisi **P4b** olarak açık — bunlar ana katalog sahnelerini (31 → 38) büyütür
ve tam set render gerektirir.

---

## 0.8 · P5 · Keşif ve ajan erişimi (2026-11-09)

| İş | Sonuç |
|---|---|
| Galeri filtreleri | **aile · sektör (8) · ton (sıcak/soğuk/yeşil/nötr) · sahne** + arama; kartlarda `▶ canlı` / `▦ bölüm` / `⇢ akış` |
| Brief | `kit/brief.mjs`: niyet → stil, sektör/kopya, layout, koreografi, fotoğraf+treatment, token bloğu, kanıt yolları, yasaklar, doğrulama komutları |
| MCP | `kit/mcp-server.mjs` (stdio JSON-RPC, bağımlılık yok): `pick` · `style` · `tokens` · `shots` · `sections` · `flows` · `brief` |
| Kapı | `brief --self-test` (zorunlu bölümler + uzunluk), `mcp-server --self-test` (initialize · tools/list · pick · style · shots · brief) |

Kalan (P5b): MCP'ye `render` aracı (seçilen sahneyi üretip yol döndürmek) ve kaynak izleme/telemetri.

---

## 0.9 · P4b + P5b + M5b · kapanış (2026-11-09)

| İş | Sonuç |
|---|---|
| **P4b · işlevsel sahneler** | 6 yeni şablon: `paywall` (bulanık içerik + plan kartı), `feed` (3 kolonlu akış), `table-filters` (filtre çubuğu + toplu seçim + sayfalama), `profile` (künye + sekmeler), `search` (sorgu + daraltma + vurgulu sonuç), `integrations` (katalog ızgarası + bağlı/kısmi durum). Katalog **31 → 37 sahne**; 145 × 6 = **864 yeni görsel**, 2 dk 59 s |
| **Durum matrisi** | `state.html` **5 varyant**: boş · iskelet · hata · 404 · **dolu** (6 durum çipi + çözüm CTA'ları). 145 yeniden render, 46 s |
| **P5b · MCP render** | `kit/mcp-server.mjs` 8. araç: `render(slug, scene, force)` → sahneyi üretir, yolunu döndürür. Self-test artık render'ı da doğruluyor |
| **M5b · lab süresi token'a bağlı** | Demo süreleri ham literal değil: CSS'te `calc(var(--mdspeed, 1) * 0.9s)`, JS'te `Math.round(900 * mdspeed())`. `--mdspeed` = stilin enter süresi / 900 ms (145 stil → **52 farklı çarpan**, y2k 0,44× · terminal-ui 0,40× · grand-tourer 0,73×) + sayfada hız kaydırıcısı. Kapı: bağlanmamış demo → hata, harita tekdüze → hata |

Yeni sahnelerin CSS'i `scene.css` sonunda (`.scene-paywall`…`.scene-integrations`, ~150 satır, yalnız
`var(--…)`); durum çipleri `.chip.ok/.warn/.bad`. Yol boyunca: eksik ikonlar (`chart`, `share`,
`arrow-left`) yakalandı ve mevcut ikonlarla değiştirildi; `states` sahnesi `--scenes states`
anahtarıyla render edilir (dosya adıyla değil).


### 0.9b · Sahne taşma kapısı ve bulduğu gerçek hatalar (aynı tur)

`render-shots.mjs --measure` eklendi: her sahneyi CDP'de açar, **yatay taşma >2px**, **alttan kırpılan blok**
(panel/tablo/ızgara, viewport altı) ve 8,5px altı metin sayısını ölçer. Kapı: `--sample 3 --measure`
(37 sahne × 3 stil). 12 stilde tam tarama: **444 sahne · 0 sorun** (küçük metin uyarı sayılır — log-stream,
terminal-ui gibi mono stiller 8px etiket kullanıyor).

Kapının yakaladığı üç gerçek hata:

| Hata | Kök neden | Düzeltme |
|---|---|---|
| `optical-illusion` form sahnesi 41px taşıyor, alt sıra kırpılıyor | stil 44px gövde tipografisi + 44px buton yüksekliği kullanıyor, form sahnesi 900px | form/dark-form şablonlarına **sığdırma**: fontlar hazır olunca taşma ölçülür, gerekirse gövde tek sefer `zoom` ile ölçeklenir (taşma yoksa hiçbir şey değişmez) |
| `calibration-lab` koyu landing 77px yatay taşıyor | stil imza katmanı `.sig` (ızgara) kendi kutusundan taşıyor, belge kaydırılabilir oluyor | `body .sig { overflow: hidden }` — dekor katmanı sayfa sınırını taşırmaz |
| landing/dark-landing'de tek tük **5 KB boş kare** | arka sekmede paint yarışı; yakalama içerik boyanmadan yapılıyor | `cdp-browser.captureOn`: kare boyutu eşiğin altındaysa **3 kez yeniden dene**, sonra uyarı üret. Yeniden deneme yolu `CDP_MIN_BYTES` ile zorlanarak kanıtlandı (`Warning: boş kare … — 3 deneme`) |

Form sahnesinin ritmi de 10px → 8px aralığa çekildi (ilk çalıştırmada `indian-block-print` 12px taşıyordu).
Etkilenen 580 çekirdek görsel yeniden üretildi, phash baseline güncellendi (`--write --force`).

### 0.9c · Görüntüleyici yolu hatası (kullanıcı bildirdi)

`kit/sections.html` ve `kit/flows.html` görselleri `../.shots-cache/...` ile arıyordu; repoda `file://`
ile açılınca `kit/.shots-cache/` yerine `style-lab/.shots-cache/` çözülüyor ve sayfa "bu bölüm henüz
üretilmemiş" kutusu gösteriyordu (12 bölüm ve 3 akış görünmüyordu). Düzeltme: yol `.shots-cache/...`.
Yeni kapı `kit/check-viewers.mjs`: iki görüntüleyiciyi CDP'de açar, **görsellerin gerçekten yüklendiğini**
(`naturalWidth > 0`, eksik kutusu yok) doğrular — lazy yükleme için bekler. Kapı sayısı 37 → 38.

---

## 1 · Kanıt tabanı

| Kaynak | Okunan | Ölçü |
|---|---|---|
| land-book.com | ana sayfa taksonomisi (Jina reader) | 6 üst görünüm + 13 sayfa türü |
| landing.love | `/effect/scroll-animation` + section sayfaları | 19 bölüm türü, 1.467 scroll animasyonu, 2.267 animasyonlu site |
| lapa.ninja | ana sayfa + `/color` + hakkında | 7.300+ landing, 15.000+ tam sayfa görsel; filtre: kategori · sektör · **renk** · platform · yıl · **eski sürümler** |
| minimal.gallery | ana sayfa etiket bulutu | **36 sektör/kullanım etiketi** (emlak, danışmanlık, eğitim, sağlık, finans… dahil) |
| httpster.net | ana sayfa + hakkında | 3.116 site; stil/type etiketi (minimal, tipografik, brutalist) |
| refero.design | ana sayfa taksonomisi | 7 ekran türü · **16 görev akışı** · ~30 öğe deseni · sektör listesi · **MCP** + research mode |
| awwwards.com | ana sayfa | Site of the Day + **10 üzerinden jüri puanı**, koleksiyonlar, ajans dizini, trend yazıları |
| . | 31 şablon, 145 fragment, manifest, dist, gates | aşağıdaki §2 ölçümleri |

## 2 · Ölçülen mevcut durum

### 2.1 Gerçekten güçlü olan (korunmalı)

| Özellik | Ölçü | Neden değerli |
|---|---|---|
| Stil sayısı | 145 / 21 aile | sektördeki hiçbir galeride bu kadar sistematik etiketli stil yok |
| Sahne kapsamı | 31 şablon × 145 = **4.495 PNG** | galeriler tek ekran gösterir; burada tüm ürün yüzeyi var |
| Koyu mod | 145/145, borç 0 | rakiplerin hiçbirinde ölçülebilir koyu mod kapsamı yok |
| Erişilebilirlik | WCAG + APCA + odak halkası, `--strict-soft` | tasarım önerisi değil, **kapı** |
| Hareket | 145 farklı imza, aile içi kopya 0, `--self-test` | "animasyonlu" demekle kalmıyor, ölçüyor |
| Çıktı sözleşmesi | CSS · Tailwind · Figma · Flutter · React | galeriler sadece *gösterir*; bu katalog *veriyor* |
| Denetim | 16 adımlı `kit/gates.sh` + CI | MCP dışında hiçbir rakipte yok |

### 2.2 Boşluklar (sayılarla)

| # | Bulgu | Ölçüm | Kaynak karşılaştırma |
|---|---|---|---|
| B1 | ~~**Kompozisyon tekdüzeliği**~~ **→ kapandı (P0)** | v4: 145 stil tek iskelet (`scene.css:246-248`); v5: 8 hero × 5 nav, 16 parmak izi, endeks %16 | Awwwards/Land-book: sayfa başına farklı kompozisyon |
| B2 | **Tek içerik** | tüm düz sahnelerde tek marka/demo metni ("Northwind", "Ürün ekibin için sakin bir çalışma alanı"); sadece emlak paketi ayrı (`estate*.html`) | Land-book/Refero: gerçek ürün, gerçek sektör metni |
| B3 | **Görsel katman yok** | 31 şablonun **hiçbirinde** `<img>` yok; `imagery` alanı yalnız prose (`tokens.json → imagery.photos`) | 7 sitenin tamamı fotoğraf/video ağırlıklı; Httpster "tipografi + fotoğraf" diyor |
| B4 | **Bölüm kütüphanesi yok** | hiçbir yerde `section` arketipi yok; sahne = tam sayfa | Land-book "**Sections**" üst sekmesi; landing.love 19 bölüm türü (Hero 1657, Work 1195, Features 510, Footer 362…) |
| B5 | **Akış yok, sadece ekran var** | 8 "sayfa" sahnesi + 2×2 durum levhası; onboarding/checkout adımları tek karede | Refero: **16 görev akışı** (kaydolma, abone olma, iptal, rezervasyon, para transferi…) |
| B6 | **Keşif zayıf** | galeride arama + 21 aile + sahne çipi + ⇄ karşılaştırma var; **renk · sektör · sayfa türü filtresi yok**, seçki dışa aktarma yok, ajan için MCP yok | Lapa renk/platform/yıl/eski sürüm; Land-book sayfa türü + Motion/OG/Headlines; Refero MCP |
| B7 | ~~**Ölçüm boşluğu**~~ **→ kapandı (P6)** | kompozisyon artık kapıda (`check-layout`), `report.md --check` bayatlığı yakalıyor, kapı sayısı tek kaynak | Awwwards jüri puanı (10 üzerinden) = ölçülmüş kalite |
| B8 | **Hareket sözlüğü tek tip** | 110/145 stil tam olarak `["opacity","transform"]`; 145/145 scroll = `offsetY + fade`. Kapı **sayı** çeşitliliğini ölçüyor, **desen** çeşitliliğini değil | Landing Love: maske, perde, split-line, parallax, pin, yatay, 3D — 19 efekt ailesi |
| B9 | **Sekans türü eksik** | her stilde yalnız 4 sekans: `enter/scroll/pin/hover`; `page` ve `reduced` yalnız 3 stilde (grand-tourer üçlüsü); `exit`, `focus`, durum geçişi yok | Refero: akış = durum geçişleri; Awwwards: sayfa geçişi standart |
| B10 | **Arketip ↔ hareket bağı yok** | kompozisyon artık 8 arketip (P0) ama hareket stile bağlı: `sticky` hero'da pin 8/13, `centered`'da 0/12 — kural değil tesadüf | `sticky`/`index`/`type` arketipleri koreografiyi **zorunlu** kılar |
| B11 | **Çalışma zamanı ölçülmüyor** | `motion-check` `tokens.json` prose'unu okuyor; `live.html` süreleri **sabit yazılmış** (`countUp` 900ms, `.24s` hover) → "canlı önizleme stilin imzasını göstermiyor". Eğri sayısı dağınık: README "105", `motion.json` "109 curve / 11 approximated / 30 steps" | — |
| B12 | **Gösterim statik** | `shots/27-motion.png` 3 sabit kare; süre/karşılaştırma yok, video/şerit yok; lab 20 demo **hiçbir stile bağlı değil** ve playbook §6.1 #10'un yasakladığı desenleri (custom cursor, yatay kaydırma) sergiliyor | Landing Love: her giriş **kayıt** (video) + bölüm etiketi |

### 2.4 Hareket denetimi (ölçüm)

`kit/dist/motion.json` + 145 `tokens.json` üzerinden sayıldı (yeniden üretilebilir):

| Ölçü | Değer | Yorum |
|---|---|---|
| Stil | 145 | — |
| 9-parametreli imzası **tamamen benzersiz** | 145/145 | sayı çeşitliliği gerçek (v4'ün güçlü yanı) |
| Sekans türü | `enter · scroll · pin · hover` (145) · `page` + `reduced` (3) | tür çeşitliliği yok |
| `properties` = `opacity + transform` | **110/145 (%76)** | sözlük fiilen iki özellik |
| `scroll` yalnız `offsetY + fade` | **145/145** | scrub/progress/mask/parallax token'da yok |
| `pin.enabled` | 51/145 (%35) | arketipten bağımsız dağılmış |
| `enter.offsetY` | 37 farklı değer, %50'si 6–22px | ölçek aynı |
| Farklı eğri (normalize) | 109 curve · 11 approximated · 30 steps | README'de "105" yazıyor → **bayat** |
| Canlı önizlemede sabit süre | `live.html`: 900ms sayaç, `.24s` hover, IO `-18%` | imza **uygulanmıyor** |
| Lab demosu ↔ stil bağı | 20 demo · 0 stil referansı | lab katalogdan kopuk |
| Playbook ↔ lab çelişkisi | §6.1 #10 "custom cursor, yatay kaydırma, marquee>1 yasak" vs lab'da ikisi de demo | doküman kendi laboratuvarıyla çelişiyor |

**Okuma:** katalog "145 farklı animasyon imzası" diyor ve bu doğru — ama fark **sayılarda**.
Koreografi tek: hepsi aynı şeyi yapıyor (aşağıdan yukarı 6–28px fade), farklı hızlarda.
Awwwards/Landing Love'ın sattığı şey tam tersi: **farklı hareket dilleri** (maske, perde, split-line,
parallax katmanları, pin+scrub, yatay akış, 3D). Yani hareket ekseni, kompozisyondan önce düştüğümüz
tuzağın aynısında: parametre çeşitliliği ≠ ifade çeşitliliği.

### 2.3 Gözle denetim notları (8 landing + 16 işlevsel ekran)

- 8 farklı aileden landing yan yana konduğunda ayırt edici olan tek şey **renk, font, kenarlık/gölge, motif**. Yerleşim, hiyerarşi, CTA sayısı, nav modeli aynı; "hangi stil" sorusunun cevabı liverin renginden okunuyor.
- İşlevsel ekranlar (auth, pricing, checkout, states) **kaliteli** — pricing sayfası karşılaştırma tablosu + SSS + "popüler" rozetiyle gerçek bir SaaS sayfası gibi. Sorun kalite değil: bu ekranlar da 145 stilde birebir aynı iskelette.
- `12-page-states` 4 kutuya sıkışmış; Refero'nun gösterdiği boş/skeleton/kısmi/hata/başarı ayrımı yok.

## 3 · Referans sitelerden alınacak tek şey

| Site | Çalışma modeli | style-lab'a taşınacak |
|---|---|---|
| Awwwards | jüri puanı + Site of the Day + koleksiyon | **stil başına kalite kartı** (kontrast, hiyerarşi, hareket bütçesi, yoğunluk) ve "ödül seviyesi" işareti |
| Lapa Ninja | kategori + sektör + **renk** + platform + **eski sürüm** | galeriye renk/sektör filtresi; stil sürüm geçmişi (`styles/<slug>/CHANGELOG`) |
| Minimal Gallery | 36 sektör etiketi | `tokens.json → industries[]` + `kit/industries.json` sözlüğü |
| Landing Love | **bölüm türü** + efekt taksonomisi + video | bölüm kütüphanesi (P3) + hareket reçetelerinin efekt adlarıyla etiketlenmesi |
| Land-book | Websites/**Sections**/Mobile/Motion/**OG Images**/**Headlines** | bölüm görünümü, OG kartı sahnesi, başlık (headline) spesimeni |
| Httpster | tipografi/brutalist ekseni, az ama keskin seçki | tipografi spesimen sahnesi; "az ve keskin" küratör filtresi (`kit/pick.mjs` zaten var) |
| Refero | gerçek ürün ekranları + **akış** + öğe deseni + **MCP** | akış sahneleri (P4) + `kit/mcp-server.mjs` (P5) |

## 4 · v5 yol haritası — tasarım (P) + hareket (M) paketleri

> Sıralama bağımlılık sırasıdır: **P6 → P0 → M0 → M1 → M2 → M3 → M4 → M5 → P2 → P1 → P3 → P4 → P5**.
> Gerekçe: (1) ölçüm olmadan iyileştirme kanıtlanamaz, (2) hareket sözlüğü fotoğraf katmanından önce
> gelmeli — maske/parallax desenleri foto olmadan da kurulur ve foto geldiğinde yerine oturur,
> (3) P1 içerik paketleri hareket bitince tek seferde render edilir (290 değil 580 görsel yeniden üretmemek için).
> Her paket tek başına kapıdan geçmiş halde teslim edilir; hiçbiri "hepsi birden" değil.

### P6 · Ölçüm borcunu kapat (yarım gün)

| İş | Dosya | Kabul ölçütü |
|---|---|---|
| `report.md` bayatlığı | `kit/report.mjs` + `kit/gates.sh` | `--check` modu: dist raporu manifest ile uyuşmazsa exit 1; çıktı 31/4495 |
| README ↔ CI kapı sayısı | `README.md`, `.github/workflows/gates.yml` | tek kaynak: `gates.sh` adım sayısı; README'de "adım sayısı: N" tek yerde |
| Kompozisyon ölçümü | `kit/composition-report.mjs` → `kit/dist/composition.md` | hero/nav/motif/içerik paketi dağılımı + **tekdüzelik endeksi** (en kalabalık parmak izinin payı) |

Doğrulama: `bash kit/gates.sh`, `node kit/report.mjs --check`.

### P0 · Kompozisyon ekseni — en yüksek getiri (2–3 gün)

**Ne:** `layout` birinci sınıf eksen olur; stil artık yalnız renk/font değil **iskelet** de seçer.

```
kit/render/layouts.json       # 8 hero + 5 nav arketipi (tek kaynak)
tokens.json → layout: { hero, nav, sectionOrder, density }   (şema v3)
kit/render/landing.html       # data-layout="<hero>" ile arketip CSS'i
kit/render/partials/*.html    # centered-type · full-bleed-media · type-only · product-shot
                              # grid-index · split-reverse · sticky-scroll · split
```

| Arketip | Ne zaman | Örnek stil |
|---|---|---|
`centered-type` | lüks, editorial, poster | 04, 03, 37 |
`full-bleed-media` | vitrin, emlak, otel | 41, 42, 127 |
`product-shot` | SaaS, araç, donanım | 01, 05, 46 |
`grid-index` | ajans, portfolyo, arşiv | 35, 36, 89 |
`type-only-poster` | tipografi, kültür | 37, 86, 87 |
`split-reverse` | alternatif ritim | 13, 15 |
`sticky-scroll` | hikâye, uzun sayfa | 42, 136 |
`split` | varsayılan (bugünkü) | geri kalan |

**Kapı:** `kit/check-layout.mjs`
- aile başına ≥ 4 farklı `hero|nav` parmak izi,
- tek parmak izi ≤ 40 stil (bugün 145),
- `density` dağılımı: her ailede en az 1 seyrek + 1 yoğun,
- self-test: kuralın no-op olmadığını kanıtlayan 2 sentetik ihlal.

**Risk:** 145 landing yeniden render (~145 PNG × 2 boyut) → `optimize-shots --all --verify` zorunlu, PHash baseline'ı yenile.

### M0 · Hareketi ölçülebilir yap (yarım gün)

**Ne:** bugünkü kapı yalnız prose sayılarına bakıyor; hangi *desenin* kullanıldığı ve `live.html`'in
imzayı gerçekten uygulayıp uygulamadığı ölçülmüyor.

| İş | Dosya | Kabul ölçütü |
|---|---|---|
| Sözlük sayımı + desen sınıflandırma | `kit/motion-audit.mjs` → `kit/dist/motion.md` | 145 stilin desen dağılımı (bugün: `fade+rise` %100), arketip × pin tablosu, eğri sayısı |
| Doküman drift'i | `README.md`, `playbook.md` | eğri sayısı tek kaynaktan (`motion.json → counts`); "105" gibi elle yazılmış sayı kalmaz |
| Doküman ↔ lab çelişkisi | `kit/build-motion-lab.mjs --check` | lab'da sergilenen her desen playbook izin listesinde ya da playbook gerekçeyle güncellenir |
| Kapı | `bash kit/gates.sh` | + 2 adım: `motion-audit --check`, `build-motion-lab --check` |

Doğrulama: `node kit/motion-audit.mjs --check`, `node kit/build-motion-lab.mjs --check`.

### M1 · Hareket sözlüğü (patterns) — 2–3 gün

**Ne:** imza "kaç ms" değil **"ne yapıyor"** olur. `tokens.json → motion.choreography`:

```
motion: {
  choreography: {
    enter:  { pattern: 'mask-reveal' | 'line-mask' | 'clip-curtain' | 'fade-rise' |
                         'blur-in' | 'scale-settle' | 'letter-stagger' | 'split-slide', from, to },
    scroll: { pattern: 'reveal' | 'scrub' | 'pin' | 'grid-stagger' | 'parallax' |
                         'horizontal' | 'counter', range, once },
    hover:  { pattern: 'scale' | 'lift' | 'underline-draw' | 'invert' | 'tilt-3d' | 'magnetic' },
    page:   { pattern: 'crossfade' | 'curtain' | 'none' },       // opsiyonel, varsayılan crossfade
    reduced:{ strategy: 'opacity' | 'instant' | 'static-frame' }
  }
}
```

| İş | Dosya | Kabul ölçütü |
|---|---|---|
| Desen kataloğu (14 desen, metadata ile) | `kit/render/motion/patterns.json` | her desende `when`, `properties`, `measure` (50%'de beklenen delta), `reduced` |
| Desen uygulaması (CSS + opsiyonel JS) | `kit/render/motion/<pattern>.css|.js` | tek kaynak; lab ve `live.html` **aynı** dosyayı kullanır |
| 145 stile koreografi ataması | `kit/assign-motion.mjs` (`--dry/--apply/--check`) | aile + arketip + tipografi kuralları; deterministik (assign-layouts ile aynı desen) |
| Şema + kapı | `check-schema.mjs`, `motion-check.mjs` | aile başına ≥3 farklı `enter.pattern`; tek desen ≤%30 stil; her desen ≥3 stilde (ölü desen yok); `properties` beyanı desenle uyumlu |
| Aile ↔ desen uyumu | `motion-check.mjs` | ör. `Sade` ailesinde `tilt-3d`/`magnetic` **hata**, `Retro`'da `steps/glitch` serbest |

Doğrulama: `node kit/motion-check.mjs --self-test` (5 sentetik ihlal), `node kit/assign-motion.mjs --check`.

### M2 · Arketip × hareket matrisi — 1–2 gün

**Ne:** P0 ile kompozisyon 8 arketipe ayrıldı; hareket de arketipe bağlanmazsa `sticky` hero ile
`type` hero aynı fade'i oynar (bugünkü durum: `centered` 0/12 pin, `sticky` 8/13 — kural değil tesadüf).

| Arketip | Zorunlu scroll/enter beati | Gerekçe |
|---|---|---|
| `sticky` | `pin` veya `scrub` **zorunlu** | yapışkan anlatının anlamı kaydırmayla açığa çıkmak |
| `type` | `line-mask` veya `letter-stagger` | poster tipografisi satır satır gelmeli |
| `product` | `scale-settle` + `scrub` | dev panel "yerleşiyor" hissi |
| `index` | `grid-stagger` | ızgara kademeli açılır |
| `fullbleed` | media `mask-reveal` | medya kenardan açılır |
| `centered` | `fade-rise` veya `blur-in` | sakin, tek mesaj |
| `split` / `split-reverse` | `split-slide` (aynalı) | iki kolon ayrı yönden gelir |

| İş | Dosya | Kabul ölçütü |
|---|---|---|
| Matris + kapı | `kit/render/motion/archetypes.json`, `motion-check.mjs` | 145/145 stil kendi arketipinin zorunlu beatini taşıyor (hata = exit 1) |
| `live.html` veri güdümlü | `kit/build-gallery.mjs` → `kit/live-motion.js`; `live.html` | sayfa `window.STYLE_MOTION[slug]` okur; **sabit süre literali yok** (kapı: `motion-check --live`) |
| Canlı önizleme desenleri | `live.html` | en az 4 desen (mask, stagger, scrub/pin, hover) stilin kendi değerleriyle |

Doğrulama: `node kit/motion-check.mjs --live`, tarayıcıda `kit/live.html?style=<slug>` ile gözle.

### M3 · Çalışma zamanı doğrulaması (2 gün)

**Ne:** "tokens.json öyle diyor" yetmez; tarayıcıda **ölçülür**.

| İş | Dosya | Kabul ölçütü |
|---|---|---|
| `getAnimations()` paritesi | `kit/render/motion-measure.mjs` | 12 stil örneklemde `duration/easing/delay` tokens ile ±%2; `properties` beyanı gerçekleşen `transitionProperty` ile uyumlu |
| reduced-motion | aynı | `?motion=reduce` altında **0 çalışan animasyon**, içerik ilk karede görünür |
| Frame bütçesi | aynı (CDP `Performance`/frame delta) | ilk 60 karede p95 ≤ **32ms**, long task ≤ 1 |
| Kapı | `gates.sh` (örneklem 12) · `--all` manuel/CI nightly | hata varsa hangi stil + hangi ölçü yazılır |

Doğrulama: `node kit/render/motion-measure.mjs --sample 12`, `--all` ≥145.

### M4 · Gösterim: storyboard şerit + opsiyonel video (2–3 gün)

**Ne:** hareketin katalogda **görünmesi** lazım. Bugünkü `27-motion.png` 3 sabit kare; süre yok.

| İş | Dosya | Kabul ölçütü |
|---|---|---|
| Deterministik kare üretimi | `kit/render/motion-strip.mjs` | t = 0/25/50/75/100% kareleri (rAF dondurulur, `--t` enjekte edilir), üstlerinde ms + pattern etiketi |
| Şerit sahnesi | `styles/<slug>/shots/27-motion.png` | 5 kare + **reduced-motion karesi** (6. hücre) |
| Video (opsiyonel) | `kit/render/motion-strip.mjs --webm` | `ffmpeg` varsa WebM; yoksa net mesaj + şerit kalır (**yeni npm bağımlılığı yok**) |
| Kapı | `check-schema.mjs` + `render/phash.mjs` | şerit 145/145 var, etiketler tokens süresiyle ±%2 |

### M5 · Lab'ı kataloğa bağla (1–2 gün)

**Ne:** 20 demo bugün hiçbir stile bağlı değil; katalog ise hangi desenin hangi stile ait olduğunu yazmıyor.

| İş | Dosya | Kabul ölçütü |
|---|---|---|
| Demo sözleşmesine `tokensRef` + `styles[]` | `kit/motion/*.mjs` | her demo hangi token alanını tükettiğini ve 3 örnek stili yazar |
| Karşılıklı kapsama kapısı | `build-motion-lab.mjs --check` | her desenin ≥1 demosu var; her stilin deseni lab'da var; `reduced` beyanı zorunlu |
| Stil seçici | `motion-lab.html` | demo, seçilen stilin token'larıyla oynar (live.html ile aynı veri) |

### P1 · Sektör içerik paketleri (2 gün)

**Ne:** Doküman "En iyi: premium marka, otel, mücevher" diyor, render ise SaaS gösteriyor. İçerik ayrışır, iskelet aynı kalır.

```
kit/content/{saas,emlak,danismanlik,egitim,e-ticaret,dergi,ajans,saglik}.json
kit/industries.json           # Minimal Gallery'nin 36 etiketinin TR karşılığı + eşleme
templates: __COPY:hero.h1__   # hard-coded metin kalmaz
tokens.json → industries: ["emlak","otel","mucevher"]   (en fazla 3, ilki zorunlu render)
```

**Kapı:** `kit/check-content.mjs` — şablonda serbest metin kalmadı mı, her stilin `industries[0]` paketiyle render edildiği manifestte yazılı mı, yasak eşleşme (ör. `pixel-art` + `saglik-kurumsal`) yok mu.

**Etki:** katalog ilk kez "bu stil emlakte nasıl duruyor" sorusunu **gerçekten** cevaplar; emlak paketinin zaten var olması işi yarıya indirir.

### P2 · Görsel katman (1 gün + render)

**Ne:** CSS motifleri kalır, üstüne lisans-temiz foto katmanı gelir.

```
kit/images/                   # 24 kare, 4:5 + 3:2 + 16:9
kit/images/INDEX.json         # kaynak URL, lisans, oran, ortalama parlaklık, baskın renk
kit/fetch-images.mjs --check  # eksik/atıfsız dosya = hata
tokens.json → imagery.treatment: { overlay:'scrim|duotone|grain|none', strength }
```

**Kapı:** `kit/check-imagery.mjs` — foto kullanan sahnede metin/zeminde 4.5:1, `grain`/`blur` token'ı gerçekten uygulanmış mı (DOM'dan ölçüm), atıf tam mı.

**Etki:** bugünkü render'lar "wireframe" gibi okunuyor; `--grain`, `--blur`, duotone gibi token'lar ancak fotoğrafla sınanabilir.

### P3 · Bölüm kütüphanesi — Land-book/landing.love karşılığı (3–5 gün)

**Ne:** tam sayfa değil **bölüm** üreten yeni bir görünüm: `kit/sections.html?style=<slug>&section=<key>` → `styles/<slug>/sections/<key>.png`.

12 arketip: `hero` · `logo-wall` · `feature-trio` · `bento` · `how-it-works` · `testimonial-wall` · `stats` · `pricing-table` · `faq` · `cta` · `footer` · `og-card` (1200×630).

**Kapı:** `kit/check-sections.mjs` — 145×12 doluluk, bölüm başına taşma (overflow) yok, kontrast geçer, `og-card` 1200×630.

**Depolama uyarısı:** 12 × 145 = 1.740 yeni görsel, mevcut 1.2 GB'a **~%40** ekler. Öneri: bölüm görselleri **WebP** (kalite 90) — PNG kayıpsızlığı yalnız tam sayfa sahnelerinde kalsın.

### P4 · İşlevsel derinlik — Refero karşılığı (3 gün)

Yeni sahneler: `paywall` · `feed` (aktivite/bildirim) · `table-filters` · `profile` · `search` · `integrations` · `invite` · `empty-first-run`.
Akış şeritleri: `flow-onboarding` (3 adım tek geniş görselde) · `flow-checkout` (sepet → ödeme → onay) · `flow-invite`.
Durum matrisi: mevcut 2×2 yerine 5 varyant — boş · skeleton · kısmi · hata · başarı.

**Kapı:** `kit/check-flow.mjs` — akış adımları arasında token tutarlılığı, adım sayısı ≥ 3, her adımda geri çıkış/güven unsuru var mı (kural seti playbook §7'ye bağlanır).

### P5 · Keşif ve ajan erişimi (3 gün)

| İş | Detay |
|---|---|
| Galeri filtreleri | renk (baskın hue × açık/koyu), sektör (`industries[]`), sayfa türü (landing / portfolyo / blog / e-ticaret / fiyatlandırma / kayıt) |
| Görünüm modları | **Web · Bölüm · Mobil · Hareket · OG** (Land-book'un üst sekmeleri) |
| Seçki → brief | seçilen 1 baskın + 1 garnitür + sektör → `brief.md` (ajan girdisi, `pick.mjs` çıktısıyla aynı şema) |
| `kit/mcp-server.mjs` | araçlar: `pick(intent)` · `style(slug)` · `tokens(slug,theme)` · `shots(slug,scene)` · `sections(slug)`; `--self-test` |

**Kapı:** `node kit/mcp-server.mjs --self-test` + `build-gallery --check`.

## 5 · Kabul ölçütleri (v5 "bitti" tanımı)

1. **Tekdüzelik endeksi** (en kalabalık hero|nav parmak izinin payı) **%30'un altında** — v4 %100, v5 **%16** ✅
2. **Sektör kapsaması:** her ailenin en az 3 farklı sektörde render'ı var; `industries[]` 145/145 dolu.
3. **Görsel katman:** en az 60 stil foto katmanı kullanıyor; `imagery.treatment` prose değil, ölçülen değer.
4. **Bölüm kütüphanesi:** 145 × 12 = 1.740 bölüm, hepsi kontrast + taşma kapısından geçmiş.
5. **Akış:** en az 3 akış şeridi × 145 stil; her akış ≥ 3 adım.
6. **Kapılar:** `bash kit/gates.sh` yeşil; yeni kapılar self-test'li; `dist/report.md --check` bayatlığı yakalıyor.
7. **Ajan yolu:** `node kit/pick.mjs --intent "premium emlak"` → `mcp` çağrısı → `brief.md` üçü aynı slug'ı öneriyor.
8. **Hareket sözlüğü:** aile başına **≥3 farklı** `enter.pattern`; tek desen ≤ **%30** stil; her desen ≥3 stilde canlı; `fade-rise` tekeli kırıldı (bugün %100).
9. **Arketip ↔ hareket:** 145/145 stil kendi arketipinin zorunlu beatini taşıyor (`sticky` ⇒ pin/scrub, `type` ⇒ line-mask, `index` ⇒ grid-stagger…).
10. **Çalışma zamanı:** 12 stillik örneklemde animasyon süreleri tokens ile **±%2**; `prefers-reduced-motion` altında **0** çalışan animasyon; p95 frame ≤ **32ms**.
11. **Gösterim:** 145 storyboard şeridi (`27-motion.png`, 5 kare + reduced karesi, ms etiketli); `live.html` **sabit süre literali içermiyor**.
12. **Lab ↔ katalog:** her desenin ≥1 demosu, her stilin deseni lab'da; playbook yasak listesi ile çelişki **0**.

## 6 · Sıra (somut) — Faz 1 tamam, Faz 2 hareket

**Faz 1 · tamamlandı (P6 + P0):** ölçüm borcu + kompozisyon ekseni → 16 parmak izi, endeks %16, `gates.sh` 21 adım temiz.

**Faz 2 · hareket (yaklaşık 9–12 gün):**

| Gün | İş | Komut / kanıt |
|---|---|---|
| 1 | M0: `motion-audit` + `dist/motion.md` + doküman drift'i (eğri sayısı) | `node kit/motion-audit.mjs --check` |
| 2–4 | M1: 14 desenlik katalog + `motion.choreography` şema v4 + `assign-motion` | `node kit/assign-motion.mjs --apply` → `motion-check --self-test` |
| 5 | M1: 145 stilin koreografisi + kapı (aile ≥3 desen, tavan %30) | `node kit/motion-check.mjs` |
| 6–7 | M2: arketip matrisi + `live.html` veri güdümlü | `node kit/motion-check.mjs --live` |
| 8–9 | M3: CDP ölçümü (parite + reduced + frame bütçesi) | `node kit/render/motion-measure.mjs --sample 12` |
| 10–11 | M4: storyboard şerit (5 kare + reduced) + `27-motion.png` yenileme | `node kit/render/motion-strip.mjs --all` |
| 12 | M5: lab ↔ katalog kapsama kapısı + stil seçici; baseline + gates | `node kit/build-motion-lab.mjs --check`, `phash --write`, `gates.sh` |

**Faz 3 · kalan tasarım paketleri:** P2 (foto) → P1 (içerik) → P3 (bölüm) → P4 (akış) → P5 (keşif/MCP).

## 7 · Yapmama listesi

- 146. stili eklemek **şimdi değersiz**: sorun stil sayısı değil, kompozisyon ve içerik tekdüzeliği.
- Sahne sayısını sahne ekleyerek büyütmek: 31 zaten yeterli; eksik olan **derinlik** (akış, durum, bölüm).
- Yeni hedef (ör. Vue/Svelte) export'u: mevcut 5 hedef sınanmadıkça yenisi gürültü.
- Fotoğrafları sahne başına elle seçmek: `INDEX.json` + deterministik eşleme olmadan 4.495 sahne bakımsız kalır.
- **Hareket imzasını yalnız süre/eğri oynatarak "çeşitlendirmek"** — v4'ün hatası buydu; M1 desen eksenini kurmadan yeni süre değeri yazmak gürültü.
- `motion-lab`'a yeni demo eklemek: demo ancak bir stilin koreografisiyle bağlanıyorsa değerli (M5 kapısı).
- Video için yeni npm bağımlılığı (ffmpeg/puppeteer): şerit + CDP yeterli; bağımlılık son çare.

## 8 · Doğrulanmayanlar

- `bash kit/gates.sh` **çalıştırıldı**: 21 adım temiz (görsel regresyon baseline dizini olmadığı için atlanıyor — v4'te de aynıydı).
- Render kalitesi gözle denetlendi: 8 arketipin açık + koyu varyantları, 5 nav modeli, 4 farklı aile (contact sheet ile). Taşma/kırpılma görülmedi; **tipografi ölçeği ve boşluk ritmi** arketip başına ayrıca elden geçirilmedi.
- `docs/katalog.md` yenilenmedi (layout kolonu yok); istenirse üretim scripti eklenmeli.
- **Hareket bulguları dosya okumasından** (`kit/dist/motion.json` + 145 `tokens.json` + `live.html`/`motion-lab.html` kaynağı). Tarayıcıda çalışma zamanı ölçümü **yapılmadı** — M3 paketi tam bunu kuracak; bu yüzden "canlı önizleme imzayı uygulamıyor" tespiti JS kaynağındaki sabit sürelere dayanıyor, cihazda gözlemle doğrulanmadı.
- Referans sitelerin bir kısmı doğrudan fetch'te 403 verdi (Land-book, Lapa, Landing Love); içerikleri Jina reader ve arama özetleri üzerinden okundu. Ekran görüntüleri incelenmedi.
