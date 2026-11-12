# Tasarım Stilleri Kütüphanesi (style-lab)

> **Depo:** https://github.com/bahattinercan/style-lab
> **Kapılar:** `bash kit/gates.sh` (38 adım) · **Kurulum:** `bash kit/install-hooks.sh` (commit öncesi kapılar)
> **Etkileşimli:** `kit/gallery.html` (arama · filtre · çekmece · kısa liste · karşılaştırma) · `kit/live.html?style=<slug>` · `kit/motion-lab.html`
> **Katalog indeksi:** [`docs/katalog.md`](docs/katalog.md) (151 stil, 22 aile) · **Rapor:** `kit/dist/report.md` · **Kompozisyon:** `kit/dist/composition.md`

Uygulamalarda tekdüze tasarım yapmamak için: **151 görsel stil**, her biri için **37 sahne şablonu**
(`kit/shots.manifest.json` sahne listesi), görsel imza,
token seti, ekran + bileşen reçetesi, **ölçülebilir animasyon imzası**, tuzaklar ve **AI brief**.

**Sahne politikası (v5):** repoda her stilin **4 çekirdek sahnesi** durur (`kit/shots.core.json`:
landing · dashboard · components · dark-landing = **604 PNG, ≈195,2 MiB**). Kalan **33 sahne × 151 = 4983**
görsel üretilen çıktıdır, `kit/.shots-cache/` altında tutulur (gitignore). Tek komut:
`node kit/render/render-shots.mjs --styles <slug>` (tam set: `--all`). Gerekçe ve ölçüm: `docs/v5-revizyon-raporu.md` §0.2.

> **Durum: v5 katalog.** 151/151 stil tam şema **v3** (kompozisyon ekseni dahil) · **604/604 çekirdek sahne repoda** · **koyu mod 151/151, borç 0**
> · 8 hero × 5 nav × 3 yoğunluk arketipi; **16 farklı hero|nav parmak izi**, tekdüzelik endeksi **%16** (v4'te %100'dü)
> · 151 farklı animasyon imzası (aile içi kopya 0) · doğrulama: `bash kit/gates.sh`
> · Çekirdek PNG: **604 dosya, 195,2 MiB** dosya verisi (`du`: 197 MiB disk kullanımı) · `kit/.shots-cache/` gitignore kapsamındaki üretilen sahnelerdir.
> · makine-okur giriş: `kit/styles.index.json` (`docsReady: true` = 151) · sahne listesi: `kit/shots.manifest.json`.

## Klasör haritası

```
style-lab/
├── README.md                  # seçim rehberi (bu dosya)
├── docs/katalog.md            # 151 stilin aile aile indeksi (üretilmiş okuma listesi)
├── docs/animasyon-referanslari.md # ödüllü animasyonlu siteler → desen eşlemesi + CSS reçeteleri
├── playbook.md                # tekdüzelik kırma + §6.2 animasyon imzası + §17 koyu mod + §18 export
├── styles/<nn-slug>/
│   ├── style.md               # şema v3 doküman (Öz → AI brief → Token)
│   ├── tokens.json            # makine-okur: palet (açık+koyu), tipografi, motion imzası, reçeteler
│   ├── token-block.css        # CSS değişken blokları (151/151; apply-fragments tek kaynağı)
│   ├── shots.config.fragment.mjs # motif + imza CSS + scenes.landing (151/151)
│   ├── keywords.json          # galeri etiketleri (151/151)
│   └── shots/                 # 27 PNG (üretilen; elle düzenlenmez)
├── kit/
│   ├── tokens.css             # 151 stilin değişken setleri (apply-fragments üretir, elle yazılmaz)
│   ├── families.json          # 22 aile bandı (tek kaynak: build-gallery + report)
│   ├── apply-fragments.mjs    # fragment → tokens.css / shots.config.mjs / gallery.data.mjs (idempotent)
│   ├── styles.index.json      # AI giriş noktası: 151 stilin özeti + yolları
│   ├── lib/tokens.mjs         # renk/süre/eğri/px/em/% ayrıştırıcıları (hedef-bağımsız)
│   ├── normalize-motion.mjs   # motion prose → dist/motion.json (kapı: --check)
│   ├── export/flutter.mjs     # dist/flutter/style_lab_tokens.dart + pubspec.fonts.yaml (kapı: --verify)
│   ├── fetch-fonts.mjs        # kit/fonts/ttf/*.ttf indirir + INDEX.json (kapı: --check)
│   ├── dist/                  # üretilen: tokens.all.css · tailwind.theme.css · figma.variables.json · motion.json · flutter/ · report.md · composition.md
│   ├── check-schema.mjs       # şema v3 + koyu mod + üç kopya paritesi (json ⇄ fragment ⇄ css)
│   ├── assign-layouts.mjs     # 151 stile kompozisyon arketipi atar (deterministik, kapı: --check)
│   ├── assign-motion.mjs      # 151 stile hareket koreografisi atar (desen ekseni, --check)
│   ├── motion-audit.mjs       # dist/motion.md (desen dağılımı, arketip×pin, doküman drift'i)
│   ├── check-layout.mjs       # kompozisyon çeşitliliği + arketip canlılığı + şablon paritesi (+ --self-test)
│   ├── composition-report.mjs # dist/composition.md (tekdüzelik endeksi, aile bazlı çeşitlilik)
│   ├── check-contrast.mjs     # WCAG + APCA + odak halkası (açık + koyu bloklar)
│   ├── motion-check.mjs       # animasyon imzası + çeşitlilik + bütçe + self-test
│   ├── export-tokens.mjs      # dist çıktısı (--check kapıda)
│   ├── dark-fill.mjs          # yarım koyu paletleri formülle tamamlar (+ --sync)
│   ├── report.mjs             # dist/report.md (kapsam + kontrast + borç)
│   ├── color.mjs              # renk ayrıştırma + kontrast (tek kaynak)
│   ├── build-gallery.mjs      # galeri + index.json üretimi ve doğrulaması
│   ├── gallery.template.mjs   # galeri HTML iskeleti + kart markup'ı (sunucu tarafı)
│   ├── gallery.js            # galeri etkileşimi: arama/filtre/sıralama/çekmece/URL durumu
│   ├── gallery.css           # galeri görünümü (chrome nötr, demo alanı temalı)
│   ├── viewer-nav.js         # canlı/bölüm/akış görüntüleyicileri için ortak geçiş çubuğu
│   ├── viewer-lightbox.js    # bölüm/akış kartlarını büyütme: tıkla→aç · ←→ gezin · 1:1 zoom · Esc
│   ├── check-gallery-ui.mjs  # galeri kullanılabilirlik kapısı (kart, filtre, çekmece, mobil, URL)
│   ├── fonts/                 # gömülü woff2 (offline render) + ttf/ (Flutter asset'leri, 30 aile)
│   └── render/
│       ├── layouts.json       # KOMPOZİSYON EKSENİ tek kaynağı: 8 hero · 5 nav · 3 yoğunluk · 12 bölüm
│       ├── motion/patterns.json # HAREKET SÖZLÜĞÜ: 20 desen (7 giriş · 9 scroll · 3 hover · 1 sayfa) + reduced stratejileri
│       ├── motion/policy.json   # yasak desenler + teachingOnly gerekçeleri (lab ↔ üretim)
│       ├── partials/          # hero-<id>.html + nav-<id>.html (13 parça; landing şablonları bunları gömer)
│       ├── render-shots.mjs   # Chrome/Edge headless (tek tarayıcı + CDP), 37 sahne şablonu
│       ├── cdp-browser.mjs    # bağlantı havuzu: N sekme paralel, PNG/WebP, animasyon dondurma
│       ├── shots.core.json    # repoda tutulan çekirdek sahneler (tek kaynak)
│       ├── optimize-shots.mjs # kayıpsız PNG sıkıştırma (--verify: piksel-identical)
│       ├── baseline.mjs       # görsel regresyon baseline (--write/--status/--clean)
│       ├── scene.css          # sahnelerin ortak iskeleti (yalnız var())
│       └── shots.config.mjs   # stil başına imza ayarları (apply-fragments üretir)
├── skills/style-lab-catalog/  # ajan prosedürü: SKILL.md + references/{families,workflow}.md
└── _templates/style-template.md
```

## 10 saniyede seçim

| İhtiyaç | Stil |
|---|---|
| Odak, hız, veri yoğun panel | `01 minimalism`, `02 swiss-design`, `46 telemetry-grid`, `47 trading-desk` |
| İçerik/dergi/blog | `03 editorial-design`, `86 poetry-chapbook`, `87 zine-collage` |
| Premium, pahalı his | `04 luxury-typography`, `26 art-deco`, `41 grand-tourer`, `128 brass-copper` |
| Lüks emlak vitrini | `42 grand-tourer-oxblood` + `22–27` emlak sahneleri |
| Dashboard düzeni | `05 bento-grid`, `48 executive-kpi`, `109 kanban-flow` |
| Sakin, sürdürülebilir | `06 japandi`, `07 wabi-sabi`, `78 biophilic-botanical` |
| Medya üstü katman | `08 glassmorphism`, `09 liquid-glass`, `98 generative-grid` |
| Eğlenceli, çocuk/wellness | `11 claymorphism`, `18 dopamine-ui`, `116 kids-playground` |
| Cesur, indie | `13 neo-brutalism`, `14 anti-design`, `15 acid-graphics` |
| Nostalji, oyun, müzik | `19 y2k`, `21 synthwave`, `119 arcade-8bit`, `124 album-sleeve` |
| Teknik, terminal, hacker | `22 cyberpunk`, `23 cybercore`, `45 terminal-ui` |
| Klavye önceliği, dev tool | `45 terminal-ui`, `108 command-palette`, `115 keyboard-first` |
| Ajan/otomasyon ürünü | `137 agent-orchestration`, `113 notebook-repl`, `112 zero-ui` |
| Akademik, arşiv, kitap | `33 dark-academia`, `27 victorian`, `89 library-index` |
| Malzeme/lüks doku | `126 marble-vein`, `127 silk-drape`, `130 leather-craft`, `135 enamel-porcelain` |
| Deneysel, spekülatif gelecek | `136 speculative-scifi`, `140 nanotech`, `145 zero-gravity` |

Tam liste (slug + tek cümle + etiketler): [`docs/katalog.md`](docs/katalog.md).

## Aile bantları (21)

Tek kaynak `kit/families.json`; 1–151 kesintisiz. `tokens.json → motion.family` bazı stillerde alt-kümeyi yazar.

| Bant | Aile | Stil | Tipik kullanım |
|---|---|---|---|
| 01–07 | Sade | 7 | ürün arayüzü, dokümantasyon, okuma |
| 08–12 | Yüzey | 5 | katman, cam, ışıma, yumuşak kontrol |
| 13–18 | Cesur | 6 | indie marka, etkinlik, kampanya |
| 19–27 | Retro | 9 | nostalji, oyun, kültür |
| 28–34 | Sanatsal | 7 | sanat, kişisel, deneysel vitrin |
| 35–36 | Geometrik | 2 | kültür/ajans vitrini |
| 37 | Tipografik | 1 | tipografi odaklı poster/landing |
| 38 | Organik | 1 | doğal/ürün hikâyesi |
| 39–40 | Yeni Dalga | 2 | AI ürünü, mesh/gradyan vitrin |
| 41–44 | Zamansız | 4 | premium, kurumsal, lüks emlak |
| 45 | Teknik | 1 | TUI, CI paneli, log |
| 46–55 | Veri & Gösterge | 10 | telemetri, finans, KPI, log, IoT |
| 56–65 | Endüstriyel | 10 | blueprint, MES, saha, kokpit |
| 66–75 | Kültürel & Bölgesel | 10 | bölgesel miras, desen, el sanatları |
| 76–85 | Doğa & Organik | 10 | biyofilik, hava, arazi, deniz |
| 86–95 | Yayın & Tipografi | 10 | kitap, gazete, katalog, fanzin |
| 96–105 | Hareket & Optik | 10 | kinetik, illüzyon, generative, holografik |
| 106–115 | Etkileşim | 10 | voice, AR, komut paleti, wizard |
| 116–125 | Oyuncul | 10 | çocuk, festival, sticker, arcade |
| 126–135 | Materyal & Lüks | 10 | mermer, ipek, pirinç, deri, cam |
| 136–145 | Deneysel & Gelecek | 10 | spekülatif, AI-native, orbital |
| 146–151 | Sahne & Prestij | 6 | sinematik emlak, ajans vitrini, lansman, butik otel, lookbook, koyu panel |

## Nasıl kullanılır

1. **Seç** — niyete göre **1 baskın + en fazla 1 garnitür** (`playbook.md` §2). Aday listesi: `docs/katalog.md`.
2. **Bak** — `styles/<nn-slug>/shots/01-landing.png`, `02-dashboard.png`, `04-components.png`. Dokümanla görsel çelişirse **görsel kazanır**.
3. **Oku** — `style.md` (§ Görsel imza, § Zorunlu kurallar, § Yasaklar, § Bileşen reçeteleri, § Tuzaklar, § AI brief) + `tokens.json`.
4. **Uygula** — token'ları `kit/tokens.css`'teki `[data-style="<slug>"]` bloğundan (veya hazır `kit/dist/tokens.all.css`) al; koyu mod `[data-theme="dark"]`. Bileşen kodunda hard-coded renk/radius/gölge yok.
5. **Animasyonu kur** — `tokens.json → motion.sequences` o stilin imzasıdır (aşağıya bak). `prefers-reduced-motion` zorunlu.
6. **Doğrula** — kendi ekranını `node kit/render/render-shots.mjs --styles <slug> --force` ile üret ve görselle karşılaştır; repoda `bash kit/gates.sh`.
7. **Karşılaştır** — `kit/gallery.html`: kartlarda **⇄** ile 2–4 stil seç → **Karşılaştır** aynı sahneyi yan yana açar.
   **Kapak** çipleri tüm kartları aynı sahneye çevirir; **koyu mod** durumu çekmecede rozet olarak görünür.
   Kart aksiyonları: **⧉** `data-style`'ı kopyalar · **★** kısa listeye ekler · **⊕** detay çekmecesini açar
   (token CSS, AI brief, tüm kareler, canlı bileşen). Klavye: `/` ara · `f` filtre · `j`/`k` gez ·
   `Enter` detay · `c` kopyala · `s` yıldız · `Esc` kapat. Filtreler URL'de tutulur (`?fam=&q=&scene=`), link paylaşılabilir.
8. **Canlı gör** — `kit/live.html?style=<slug>`: maskeli giriş → scroll reveal → pin+scrub → sayaç → hover;
   `hareket: açık/kapalı` reduced-motion karşılığını, `❙❙` poster döngüsünü gösterir.
9. **İncele** — `kit/sections.html?style=<slug>` (12 bölüm) ve `kit/flows.html?style=<slug>` (3 akış):
   karta tıkla → tam ekran inceleme; `←`/`→` gezin, tık veya `z` ile 1:1 zoom, `↗ aç` yeni sekmede, `Esc` kapat.

## Animasyon sistemi (stil başına imza)

Her stil 7 parametreyle tanımlı **tek bir imza** taşır:
`enter {duration, ease, offsetY, stagger}` · `scroll {trigger, duration, offsetY, once}` · `hover {duration, imageScale}` (+ `pin`).

| Kural | Ölçü |
|---|---|
| Aile içi çeşitlilik | İki stil 7 parametrenin **≥2'sinde** farklı olmak zorunda (`kit/motion-check.mjs`) |
| Süre bütçesi | `enter ≤ 1.2s`, `scroll ≤ 1.2s`; `pin.scrub > 1.4` uyarı |
| Eğri | Stilin `motion.easing` değeri esastır; CSS varsayılanı (`ease`/`linear`) yalnız bilinçli tercihse kullanılır. **Eğri sayısı elle yazılmaz**, `kit/dist/motion.md` §1'den ölçülür (normalize eğri + `steps()` sayısı) |
| reduced-motion | Zorunlu; hareket yerine opaklık |
| Muafiyet | **Yok.** Kural 151. stille birlikte istisnasız uygulanıyor; `--self-test` kuralın no-op olmadığını kanıtlar |

Durum: **151 farklı imza / 151 stil**, aile içi kopya **0**. Ayrıntı: `playbook.md` §6.2.

## Kompozisyon ekseni (şema v3)

Renk/tipografi iki stili ayırır ama **aynı iskelet** iki siteyi ayırmaz. Bu yüzden her stil
`tokens.json → layout` altında bir kompozisyon arketipi taşır:

| Eksen | Değerler | Nerede |
|---|---|---|
| `hero` | `split` · `split-reverse` · `centered` · `type` · `fullbleed` · `product` · `index` · `sticky` | `kit/render/partials/hero-<id>.html` |
| `nav` | `inline` · `pill` · `split` · `utility` · `rail` | `kit/render/partials/nav-<id>.html` |
| `density` | `sparse` · `balanced` · `dense` | `kit/render/scene.css` (`.density-*`) |

Tek kaynak `kit/render/layouts.json` (her arketipin "ne zaman" gerekçesiyle). Şablonlar
`<!-- HERO -->` / `<!-- NAV -->` yer tutucularını taşır; `render-shots.mjs` stilin layout'una göre
partial'ı gömer. Arketip seçicileri `[data-layout]` / `[data-nav]` ile nitelendiği için **iskelet**
kazanır, stilin `extraCss`'i iç öğeleri (kart, buton, başlık rengi) boyamaya devam eder.

| Kural | Ölçü | Kapı |
|---|---|---|
| Aile çeşitliliği | aile ≥8 stilse **≥3 farklı hero**, ≥1 farklı parmak izi seti | `check-layout.mjs` |
| Parmak izi tavanı | tek `hero|nav` kombinasyonu ≤ **%25**, tek hero ≤ **%35** | `check-layout.mjs` |
| Arketip canlılığı | her arketip ≥4 stilde kullanılır (ölü arketip yok) | `check-layout.mjs` |
| Şablon paritesi | `landing.html` ⇄ `dark-landing.html` yalnız `data-theme` ile ayrılır | `check-layout.mjs` |
| Atama kararlılığı | `assign-layouts --check` → tokens.json öneriyle aynı | `assign-layouts.mjs` |

Durum: **16 farklı hero|nav parmak izi**, tekdüzelik endeksi **%16** (v4'te %100), aile başına
ortalama **2,9** farklı hero. Dağılım: [`kit/dist/composition.md`](kit/dist/composition.md).

```bash
node kit/assign-layouts.mjs --dry          # öneriyi gör (slug+aile+etiket puanlaması, deterministik)
node kit/assign-layouts.mjs --apply        # 151 tokens.json'a yaz (şema v3)
node kit/check-layout.mjs --report         # dağılım tablosu
node kit/composition-report.mjs            # dist/composition.md
```

Yeni arketip eklemek: `layouts.json`'a kayıt → `partials/<tip>-<id>.html` → `scene.css`'te
`[data-layout='<id>']` bloğu → `assign-layouts.mjs` sözlüğüne anahtar kelime → `--apply` → render.

## Hareket sözlüğü (şema v4, M1)

Sayı imzası (süre/eğri/offset) tek başına ifade çeşitliliği üretmiyor: v5 ölçümünde 110/151 stil
yalnız `opacity+transform`, 94/151 scroll = `reveal`, en kalabalık parmak izi %51'di. Bu yüzden
her stil artık **desen** de taşır: `tokens.json → motion.choreography`.

| Eksen | Desenler (tek kaynak `kit/render/motion/patterns.json`) |
|---|---|
| `enter` | `fade-rise` · `line-mask` · `clip-curtain` · `blur-in` · `scale-settle` · `letter-stagger` · `split-slide` |
| `scroll` | `reveal` · `grid-stagger` · `pin-scrub` · `parallax` · `counter` · `mask-wipe` · `stack-pin` · `velocity-skew` · `scroll-zoom` |
| `hover` | `scale` · `underline-draw` · `tilt-3d` |
| `page` | `crossfade` (View Transitions varsa cross-fade'e düşer) |
| `reduced` | `opacity` · `instant` · `static-frame` |

| Kural | Ölçü | Kapı |
|---|---|---|
| Aile çeşitliliği | aile ≥4 stilse **≥3 farklı** `enter` deseni | `motion-check` |
| Desen tavanı | tek `enter` deseni ≤ **%30** stil; her desen ≥3 stilde canlı | `motion-check` |
| Arketip kuralı | `sticky ⇒ pin-scrub`, `index ⇒ grid-stagger` | `motion-check` |
| Aile ↔ desen | `Sade` ailesinde `tilt-3d` yasak | `motion-check` |
| Atama kararlılığı | `assign-motion --check` → tokens.json öneriyle aynı | `assign-motion.mjs` |
| Sözlük no-op değil | 6 sentetik ihlal (eksik, tanımsız id, tekdüze, ölü desen, arketip, hover) | `motion-check --self-test` |
| Çalışma zamanı paritesi | hesaplanmış süre ↔ tokens **±20ms/%2**; reduced'ta **0** gerçek animasyon; p95 frame ≤32ms | `motion-measure` (CDP) |
| Canlı önizleme | `live.html` sabit süre içermez, `data-motion` + `--mi/--ms/--mh` değişkenleri | `motion-check` |
| Storyboard | 151 şerit: 5 kare (0-100%) + reduced karesi, ms etiketli | `motion-strip` |
| Lab ↔ katalog | her desenin ≥1 demosu, her bağ mevcut | `build-motion-lab --check` |

Durum: **20 desen · 78 farklı hareket parmak izi**, en kalabalık %6, `choreography` kapsamı 151/151.
Ödüllü site tekniklerinden türetilen desenler (hangi site → hangi stil → hangi CSS):
[`docs/animasyon-referanslari.md`](docs/animasyon-referanslari.md).
Dağılım: [`kit/dist/motion.md`](kit/dist/motion.md). Politika (üretimde yasak desenler):
[`kit/motion/policy.json`](kit/motion/policy.json) — lab bunları yalnız `teachingOnly` gerekçesiyle sergiler.

```bash
node kit/assign-motion.mjs --dry | --apply | --check   # deterministik koreografi ataması
node kit/motion-check.mjs --self-test                  # kural setini sentetik ihlallerle kanıtla
node kit/motion-audit.mjs                              # dist/motion.md (desen dağılımı)
node kit/render/motion-measure.mjs --sample 8          # tarayıcıda süre paritesi + reduced + p95 frame
node kit/render/motion-measure.mjs --all               # 151 stil (~2 dk)
node kit/render/motion-strip.mjs --all                # 151 storyboard (kit/.shots-cache/*/27-motion.png, ~80 s)
```

## Keşif ve ajan erişimi (P5)

Galeri artık niyetle aranıyor: **aile · sektör · ton · sahne** çipleri + arama (ton, accent renginin
hue kovası: sıcak/soğuk/yeşil/nötr). Kartlarda `▶ canlı`, `▦ bölüm`, `⇢ akış` bağlantıları.

Ajan tarafı iki giriş:

| Araç | Ne verir |
|---|---|
`node kit/pick.mjs --intent "premium emlak"` | sıralı adaylar + eşleşen terimler (deterministik) |
`node kit/brief.mjs --intent "…"` | tek dosyalık uygulanabilir brief: stil + sektör + layout + koreografi + fotoğraf + token bloğu + kanıt yolları + yasaklar |
`node kit/mcp-server.mjs` | **MCP (stdio, JSON-RPC)**: `pick` · `style` · `tokens` · `shots` · `sections` · `flows` · `brief` |

```bash
node kit/brief.mjs --intent "premium emlak" --out brief.md
node kit/mcp-server.mjs --list       # 7 araç + açıklama
node kit/mcp-server.mjs --self-test  # kapı
```

MCP kaydı (Claude/Codex/Cursor): çalışma dizini depo kökü, komut `node`, argüman `kit/mcp-server.mjs`.

## Akış şeritleri (P4)

Refero'nun değeri ekran değil **akış**; katalogda her stil için 3 akış × 3 adım tek şeritte:
`kit/.shots-cache/<dir>/flows/<id>.png`. Görüntüleyici: `kit/flows.html?style=<slug>`.

| Akış | Adımlar | Ne kanıtlar |
|---|---|---|
| `onboarding` | Amaç → Ekip → Davet | seçenek kartı, alan, ilerleme noktaları |
| `checkout` | Sepet → Ödeme → Onay | tutar satırları, kart alanı, başarı durumu |
| `invite` | Rol → Mesaj → Gönder | rol seçimi, çoklu alıcı çipi |

```bash
node kit/render/render-flows.mjs --styles y2k      # tek stil, 3 akış
node kit/render/render-flows.mjs --all             # 151 × 3 = 453 (~80 s)
node kit/render/render-flows.mjs --sample 3 --measure  # 3 adım var mı, taşma var mı (CDP)
```

Kapı: her akışta **3 adım**, yatay taşma ≤2px, viewport dışına taşan adım yok, boş kare yok.
Galeri kartlarında `▦ bölüm` ve `⇢ akış` bağlantıları.

## Bölüm kütüphanesi (P3)

Tam sayfa yerine **bölüm** kütüphanesi: 12 arketip × 151 stil = **1812 bölüm** görseli.
Görüntüleyici: `kit/sections.html?style=<slug>` (stil seç → 12 bölüm).

| # | Bölüm | Ne kanıtlar |
|---|---|---|
| 01 | `hero` | başlık hiyerarşisi + CTA + güven satırı |
| 02 | `logo-wall` | sosyal kanıt şeridinin tipografisi |
| 03 | `feature-trio` | üçlü özellik ritmi |
| 04 | `bento` | farklı boyutlu kutu ızgarası |
| 05 | `how-it-works` | numaralı 3 adım akışı |
| 06 | `testimonial` | tek güçlü alıntı + kimlik |
| 07 | `stats` | 4 büyük sayının ölçeği |
| 08 | `pricing-table` | plan karşılaştırma + öne çıkan kart |
| 09 | `faq` | itiraz kırma bloğu |
| 10 | `cta` | kapanış eylemi |
| 11 | `footer` | site haritası + yasal |
| 12 | `og-card` | 1200×630 paylaşım görseli |

Sahne şablonları (37): 01 landing · 02 dashboard · 03–08 bileşenler · 09–16 sayfalar ·
17–21 koyu+mobil · 22–27 emlak+hareket levhası · 28–31 koyu listeler · **32 paywall · 33 akış ·
34 filtreli tablo · 35 profil · 36 arama · 37 entegrasyonlar**. `12-page-states` artık
**5 varyant** gösterir (boş · iskelet · hata · 404 · dolu).

```bash
node kit/render/render-sections.mjs --styles y2k        # tek stil, 12 bölüm
node kit/render/render-sections.mjs --all               # 151 × 12 = 1812 (~5 dk)
node kit/render/render-sections.mjs --sample 3 --measure # taşma/ölçü kapısı (CDP)
```

Çıktı `kit/.shots-cache/<dir>/sections/<id>.png` (üretilen; repoda tutulmaz). Kapı: yatay taşma ≤2px,
viewport dışına taşan öğe yok, 9px altı metin yok, boş kare yok (PNG renk çeşitliliği ile ölçülür).

## Sektör içerik katmanı (P1)

Aynı kurgusal SaaS metni her stilde görünüyordu; artık her stilin bir **sektörü** ve o sektörün
kopya paketi var: `tokens.json → industries[]` (ilk eleman render'da kullanılır) →
`kit/content/<id>.json`.

| Sektör | Örnek başlık | Tipik stiller |
|---|---|---|
| `saas` | "Ürün ekibin için sakin bir çalışma alanı" | panel/araç/veri stilleri |
| `emlak` | "Deniz manzaralı, az katlı, sakin bir yaşam" | vitrin, lüks, `fullbleed` |
| `danismanlik` | "Kararı tahmine değil kanıta dayandırın" | sade/kurumsal |
| `egitim` | "Herkesin öğrenebildiği bir sınıf" | oyuncul, etkileşim |
| `eticaret` | "Mevsimin en sade parçaları" | cesur, retro |
| `dergi` | "Uzun okumalar, kısa cümleler" | yayın, tipografik, `type` |
| `ajans` | "Markayı süslemeden anlatan işler" | sanatsal, hareket |
| `saglik` | "Randevudan önce bilmeniz gerekenler" | organik, yüzey |

Şablonlar literal metin taşımaz: `__COPY_H1__`, `__COPY_LEDE__`, `__COPY_PROOF1..3__`,
`__COPY_LOGO1..5__`, `__COPY_TILE1..4__` — `render-shots.mjs` paketten doldurur.

| Kural | Ölçü | Kapı |
|---|---|---|
| Atama | `industries[0]` geçerli, aile/arketip kuralına uygun | `assign-content --check` |
| Paket canlılığı | her paket ≥3 stilde (ölü paket yok), hiçbiri %35 tavanını aşmaz | `check-content` |
| Metin sınırı | `h1 ≤ 56`, `lede ≤ 120`, `cta ≤ 26` karakter (taşma önleme) | `check-content` |
| Şablon | literal demo metni yok; her `__COPY_*__` anahtarının karşılığı var | `check-content` |

```bash
node kit/assign-content.mjs --apply   # 151 stile industries[] (aile + arketip + denge)
node kit/check-content.mjs            # kapı
```

Dağılım (151): dergi 31 · emlak 31 · saas 23 · ajans 22 · danışmanlık 13 · e-ticaret 13 · eğitim 11 · sağlık 7.

## Görsel katman (P2)

Fotoğraf artık katalogun parçası: 24 lisans-temiz kare (`kit/images/`, Unsplash License — atıf zorunlu
değil, kaynak URL provenance için `INDEX.json`'da) ve her stile **bir fotoğraf + bir treatment** atanır
(`tokens.json → imagery.photo|treatment`). Fotoğraf yalnız `fullbleed` ve `centered` arketiplerinde
kullanılır; kopya metni fotoğrafın üstünde değil, kendi kolonunda durur.

| Eksen | Değerler | Nerede |
|---|---|---|
| `imagery.photo` | `arch-*` · `int-*` · `nat-*` · `tex-*` · `obj-*` · `urb-*` · `por-*` | `kit/images/INDEX.json` |
| `imagery.treatment` | `plain` (0) · `scrim` (0.3–0.55) · `duotone` (accent blend) · `grain` (doku) | `kit/render/scene.css` |

| Kural | Ölçü | Kapı |
|---|---|---|
| Kaynak bütünlüğü | dosya var, ≥40 KB, INDEX kaydı tam, yetim dosya yok | `fetch-images --check` |
| Atama kararlılığı | `assign-imagery --check` → tokens.json öneriyle aynı | `assign-imagery.mjs` |
| Treatment tutarlılığı | `plain ⇒ strength 0`, diğerleri `>0`; fullbleed/centered stillerinde photo zorunlu | `check-imagery.mjs` |
| Şablon sözleşmesi | `hero-fullbleed.html` + `hero-centered.html` `__PHOTO__` taşır | `check-imagery.mjs` |

```bash
node kit/fetch-images.mjs --all      # eksik görselleri indir (24 kare ≈ 7 MB)
node kit/assign-imagery.mjs --apply  # 151 stile fotoğraf + treatment ata
node kit/check-imagery.mjs           # kapı: kapsam + treatment + şablon
```

## Değişken sözleşmesi

Her stil aynı adları doldurur; bileşen kodu stil değişince değişmez.

| Değişken | İş |
|---|---|
| `--bg`, `--bg-2` · `--surface`, `--surface-2` | zemin / yüzey katmanları |
| `--ink`, `--ink-soft`, `--ink-faint` | metin katmanları (`--ink-faint` yalnız dekoratif) |
| `--accent`, `--accent-ink` | vurgu + üstüne yazılacak metin |
| `--line` | kenarlık |
| `--radius`, `--radius-lg` | köşe |
| `--shadow`, `--shadow-hard` | yumuşak / sert gölge |
| `--font-display`, `--font-body`, `--font-mono` | tipografi |
| `--tracking`, `--blur`, `--grain` | harf aralığı, cam bulanıklığı, doku |
| `--focus` | odak halkası (varsayılan `--accent`; 13 stilde 3:1 için türetilmiş değer) |
| `--danger`, `--danger-ink`, `--ok`, `--warn` | durum renkleri (stil ezebilir) |
| `--space-1 … --space-8` | 4/8/12/16/24/32/48/64 px |
| `--data-1 … --data-4` | grafik serileri |

## Koyu mod

**151/151 stil uygulandı, borç 0.** Her stilde `palette.dark` (10 renk) + `tokens.css` koyu bloğu + `shots/17-18` render'ı var;
üçü `kit/check-schema.mjs` tarafından karşılıklı doğrulanır.

```bash
node kit/dark-fill.mjs --styles <slug> --dry  # eksik anahtarlar + kontrast önizlemesi
node kit/dark-fill.mjs --styles <slug>        # paleti tamamla + koyu bloğu yaz (kontrast geçmeyeni yazmaz)
node kit/dark-fill.mjs --sync                 # tokens.json ↔ tokens.css bloklarını eşitle
```

Türetme formülleri (bg2 %6, surface2 %8, inkSoft %70 ink, inkFaint %45 ink, line = ink %14 alfa, accentInk = en yüksek kontrastlı aday)
`kit/dark-fill.mjs` başlığında; hiçbir değer kontrast kapısından geçmeden yazılmaz. Ayrıntı: `playbook.md` §17.

## Doğrulama (kapılar)

```bash
bash kit/gates.sh                     # 38 adım: galeri → slim indeks → fragment senkronu → şema → kontrast → tablolar → koreografi ataması → hareket CSS → hareket kapısı → hareket ölçümü → hareket lab → hareket ölçümü (tarayıcı) → hareket storyboard → motion normalize → export → font TTF → flutter → react → style-lint → layout ataması → kompozisyon çeşitliliği → kompozisyon self-test → DOM kompozisyonu → rapor güncel → kompozisyon raporu güncel → görsel imza → görsel regresyon
node kit/apply-fragments.mjs --check    # fragment → tokens.css / shots.config / gallery.data senkron mu
node kit/check-schema.mjs               # şema v3 + layout + koyu mod + üç kopya paritesi + komşu/refs + eksik sahne
node kit/assign-layouts.mjs --check      # tokens.json layout'u öneriyle aynı mı (drift kapısı)
node kit/assign-motion.mjs --check       # motion.choreography öneriyle aynı mı
node kit/build-motion-css.mjs --check    # patterns.json → patterns.css senkron mu
node kit/fetch-images.mjs --check        # görsel kaynakları (24 kare, INDEX tutarlı)
node kit/assign-imagery.mjs --check      # imagery.photo/treatment öneriyle aynı mı
node kit/check-imagery.mjs               # treatment tutarlılığı + fotoğraflı arketip kapsamı
node kit/assign-content.mjs --check      # industries[] öneriyle aynı mı
node kit/check-content.mjs               # sektör paketleri + şablon yer tutucuları + taşma sınırı
node kit/render/render-sections.mjs --sample 3 --measure  # bölüm kütüphanesi taşma ölçümü
node kit/render/render-flows.mjs --sample 3 --measure     # akış şeritleri (3 adım, taşma) ölçümü
node kit/render/render-shots.mjs --sample 3 --measure     # 37 sahne: yatay taşma + alttan kırpılma
node kit/check-viewers.mjs                                # sections.html / flows.html görselleri yükleniyor mu
node kit/brief.mjs --intent "premium emlak" --out brief.md  # uygulanabilir brief (MCP aracı olarak da)
node kit/mcp-server.mjs --self-test                       # MCP araçları (7 araç) çalışıyor mu
node kit/motion-audit.mjs --check        # kit/dist/motion.md bayat mı
node kit/build-motion-lab.mjs --check    # lab ↔ politika (yasak desen gerekçesi)
node kit/check-layout.mjs               # kompozisyon çeşitliliği + parmak izi tavanı + şablon paritesi
node kit/check-layout.mjs --self-test   # kural setinin no-op olmadığını kanıtlar
node kit/check-contrast.mjs             # WCAG + APCA + odak halkası 3:1 (açık VE koyu bloklar)
node kit/motion-check.mjs               # imza çeşitliliği + süre bütçesi + self-test
node kit/export-tokens.mjs --check      # kit/dist güncel mi
node kit/render/optimize-shots.mjs --all --verify   # PNG kayıpsız mı (piksel farkı 0)
node kit/report.mjs --check             # kit/dist/report.md bayat mı
node kit/composition-report.mjs --check # kit/dist/composition.md bayat mı
```

### CI

`.github/workflows/gates.yml` — aynı kapılar üç işe bölünmüş (veri · flutter · görsel imza).
Yerel hook tek makineyi korur; CI sunucu tarafını korur. `flutter-version: 3.47.9` pinli,
Node 22. Görsel iş `--json` çıktısı verir (hangi sahne, kaç bit fark).
Depoda 604 çekirdek PNG tutulur; tam set repoya eklenmez, görsel regresyon çekirdek sette çalışır.

**Görsel imza regresyonu** (kapıda, **604 çekirdek sahne**): `node kit/render/phash.mjs --check` (tam set: `--cache`) —
sahne başına 256-bit dHash + ortalama renk, baseline `kit/render/visual-baseline.json` **368 KB**.
Eşik: hash ≤ 8/256 bit, renk Δ ≤ 10. Duyarlılık `--self-test` ile kanıtlı (%15 parlaklık, negatif, 24px kayma yakalanır).
Piksel-piksel baseline ayrıca istenirse: `node kit/render/baseline.mjs --write` (çekirdek set; tam set için cache'i de dahil et).

**Temiz klonda üretilen artefaktlar (gitignore):**
- `kit/.shots-cache/<dir>/27-motion.png` — hareket storyboard şeritleri; `node kit/render/motion-strip.mjs --sample 6 --check` (veya `--ensure`) eksik şeritleri headless tarayıcıda üretip varlığını/boyutunu doğrular, tarayıcı bulunamazsa `↷` satırıyla görünür biçimde atlar (tam set: `--all`).
- `kit/render/.baseline/` — piksel-piksel görsel regresyon referansı; `node kit/render/baseline.mjs --write` ile oluşturulur, dizin yoksa `gates.sh` adımı `↷ görsel regresyon (baseline yok, atlandı)` ile atlar.
- `kit/.shots-cache/<dir>/` altındaki çekirdek dışı 33 sahne, `sections/*.png` (12 bölüm) ve `flows/*.png` (3 akış) — ilgili `render-*.mjs` komutlarıyla talep üzerine üretilir.

**Borç defterleri:** `kit/contrast-baseline.json` (kabul edilmiş kontrast istisnaları) ve
`kit/dark-baseline.json` (koyu mod borcu). Listede olmayan yeni ihlal **hata**dır.

## Token dışa aktarma

```bash
node kit/export-tokens.mjs              # dist/{tokens.all.css,tailwind.theme.css,figma.variables.json,index.json}
node kit/export-tokens.mjs --styles utility --split   # ayrıca stil başına dosya
node kit/export-tokens.mjs --check      # kapı
```

| Çıktı | Ne işe yarar |
|---|---|
| `dist/tokens.all.css` | `:root` + 151 `[data-style]` + koyu bloklar — projeye doğrudan kopyalanır |
| `dist/tailwind.theme.css` | Tailwind v4 `@theme` (renk/font/radius/gölge) + 8 adım boşluk → `p-1…p-16` |
| `dist/figma.variables.json` | Figma variables: `Color System` (Light/Dark) + `Radius` + `Spacing` + `Typography` |
| `dist/report.md` | kapsam + kontrast + borç raporu |
| `dist/motion.json` | 151 stilin normalize edilmiş hareket imzası (ms + `{kind, points}` eğri) |
| `dist/flutter/` | `style_lab_tokens.dart` (ThemeExtension + 151 açık/151 koyu), `pubspec.fonts.yaml`, kullanım README'si |
| `dist/react/` | `styleLabTokens.js` + `.d.ts` (151 stil, light/dark, motion), `styleLabCssVars`, `applyStyleLab`, ThemeProvider reçetesi |
| `dist/index.slim.json` | Kompakt ajan indeksi (slug/ad/aile/etiket/hareket/komşular) — `kit/pick.mjs` kaynağı |

## Flutter / React

Hedef çıktılar aynı kaynaktan (`tokens.json` + `dist/motion.json`) üretilir; CSS dışı hedefler
prose değil **sayı** ister. Yeni hedef eklemek = `kit/export/<hedef>.mjs` yazmak (ayrıştırıcılar
`kit/lib/tokens.mjs`'de hazır).

```bash
node kit/normalize-motion.mjs                 # prose → dist/motion.json (önkoşul)
node kit/fetch-fonts.mjs                      # kit/fonts/ttf/ (30 aile, OFL) + INDEX.json
node kit/export/flutter.mjs                   # dist/flutter/*
node kit/export/flutter.mjs --verify          # + dart analyze + flutter test (fixture)
```

**Flutter.** `cp kit/dist/flutter/style_lab_tokens.dart lib/theme/` →
`MaterialApp(theme: styleLabTheme(slug: 'terminal-ui'), darkTheme: styleLabTheme(slug: 'terminal-ui', brightness: Brightness.dark))`.
`context.styleLab` ile token'lara eriş (`t.surface`, `t.padding(3)`, `t.h2`, `t.motion.enterDurationValue`).
Koyu mod yalnız paleti değiştirir; tipografi/şekil/hareket aynı kalır. `pubspec.fonts.yaml`
yalnız gerçekten indirilen TTF'leri listeler (11 ailede bazı ağırlıklar Google Fonts'ta yok —
Flutter en yakın bildirilen ağırlığa düşer; 11 sistem fontu bilinçli olarak paketlenmez).

**Garnitür koyu modda.** Koyu bloklar bileşik seçici (`[data-theme="dark"][data-style="Y"]`)
aynı elemanda iki öznitelik ister: `<div data-style="Y" data-theme="dark">`. Yalnız `data-style`
verirsen garnitür açık paletle boyanır (kapı: `kit/check-composition.mjs --browser`).

**React.** `dist/tokens.all.css` + `dist/tailwind.theme.css` yeterli: `<html data-style="<slug>" data-theme="dark">`.
Tüm değerler CSS değişkeni; bileşen kodu stil değişince değişmez. JS tarafı (grafik, canvas, inline style,
test) için `node kit/export/react.mjs` → `dist/react/styleLabTokens.js` + `.d.ts`:
`styleLabTokens[slug].light|dark`, `styleLabCssVars(slug, theme)`, `applyStyleLab(slug, {theme})`.
ThemeProvider reçetesi `dist/react/README.md` içinde (bağımlılık yok, SSR notlarıyla).

Doğrulama kanıtı: `kit/export/flutter/fixture/` paketinde 11 test (`dart analyze` 0 issue) —
palet/tipografi/motion değerleri `tokens.json` ile karşılaştırılır, `ThemeData` köprüsü ve
`StyleLabSteps` eğrisi test edilir.

## Uygulanan kodu denetleme (style-lint)

Katalog token üretir; `kit/style-lint.mjs` tüketen projede **gerçekten kullanıldığını** denetler:

```bash
node kit/style-lint.mjs src --style terminal-ui            # hata varsa exit 1
node kit/style-lint.mjs src --style terminal-ui --json     # makine-okur
node kit/style-lint.mjs src --style terminal-ui --strict    # uyarılar da hata
node kit/style-lint.mjs --list-rules                        # 12 kural
node kit/style-lint.mjs --self-test                         # fixture'larla kuralları kanıtla
```

| Kural | Önem | Ne yakalar |
|---|---|---|
| `color-literal`, `dart-color-literal` | hata | `#fff`, `rgba(…)`, `Color(0x…)`, `Colors.red` — `var(--…)` / `context.styleLab` olmalı |
| `font-literal`, `dart-font-literal` | hata | stilin fontları dışında `font-family` / `fontFamily:` |
| `radius-literal`, `dart-radius-literal` | uyarı | `border-radius: 7px`, `BorderRadius.circular(7)` — `var(--radius)` / `t.radius` |
| `duration-literal`, `dart-duration-literal` | uyarı | token dışı süre (`320ms`, `Duration(milliseconds: 123)`) |
| `default-ease` | uyarı | stilin eğrisi varken `ease`/`linear` |
| `reduced-motion-missing` | uyarı | hareket var, `prefers-reduced-motion` / `disableAnimations` yok |
| `ink-faint-text` | uyarı | `--ink-faint` metin rengi olarak (yalnız dekoratif) |
| `root-style-missing` | uyarı | hiçbir dosyada `data-style="<slug>"` yok |

Muafiyet: satıra (veya bir üst satıra) `style-lint-allow` yorumu; `--allow-color "#fff"` listesi.
Üretilen dosyalar (`tokens.css`, `style_lab_tokens.dart`, `styleLabTokens.js`…) ve
`node_modules/dist/build/.dart_tool` atlanır.

## Yeni stil ekleme

1. `_templates/style-template.md` → `styles/146-<slug>/style.md` (`# 146 · Ad` + `> **Bir cümlede:**`).
2. `token-block.css` — açık + koyu iki blok, sözleşme değişkenlerinin tamamı.
3. `tokens.json` — palet (açık + koyu), tipografi, **motion imzası** (aile içinde ≥2 parametre farklı), **`layout` (hero/nav/density, şema v3)**, 3 referans.
4. `shots.config.fragment.mjs` — `motif`, `bodyClass`, `extraCss`, `scenes: { landing }` (stile özel hero).
5. `keywords.json` (3 etiket) + `kit/families.json`'a bandı ekle (aralık kesintisiz kalacak).
6. `node kit/apply-fragments.mjs --apply` → `--check` (tokens.css / shots.config / gallery.data üretilir);
   `node kit/assign-layouts.mjs --apply` → `--check` (kompozisyon arketipi atanır).
7. `node kit/render/render-shots.mjs --styles <slug> --force --jobs 2` → `node kit/sync-shot-tables.mjs --write --styles <slug>`.
8. `node kit/render/optimize-shots.mjs --styles <slug>` → `node kit/build-gallery.mjs` → `bash kit/gates.sh` temiz olana kadar.

`tokens.css`, `shots.config.mjs` ve `gallery.data.mjs` **elle düzenlenmez**; `apply-fragments --check` elle yazımı drift olarak yakalar.

## Ajanlar için

Hazır prosedür: **[`skills/style-lab-catalog/SKILL.md`](skills/style-lab-catalog/SKILL.md)** — niyete göre stil seçer,
`[data-style]` token bloğunu uygular, `motion.sequences` imzasını kurar, `scenes`/`Tuzaklar` listesini uygular ve kapılarla doğrular.
Referanslar: `families.md` (aile → kullanım), `workflow.md` (yeni stil akışı).

**Ajan desteği.** Bu depo ajan destekli geliştirilir. Kanonik prosedürler `skills/` altında durur;
uyumlu araçların kullanıcı düzeyindeki keşif yoluna (`~/.agents/skills/`) bağlanabilir:

```bash
node kit/link-skill.mjs status    # bağ, hedef ve SKILL.md frontmatter kontrolü
node kit/link-skill.mjs install   # junction/symlink kur — kopya yok, drift yok
node kit/link-skill.mjs remove    # yalnız bağı siler, hedef klasöre dokunmaz
```

Frontmatter doğrulaması önce kurulu `yaml` paketini arar. Ek arama dizini
`STYLE_LAB_YAML_RELEASES` ile seçilebilir; varsayılan, uyumluluk için mevcut ajan kurulumudur.
Ajanın prosedürleri keşfetmesi ve yeniden yüklemesi kullandığınız araca bağlıdır.

Ajan oturumu için 3 adım: `kit/styles.index.json` ile **seç** → `style.md` + `tokens.json` ile **oku** →
`shots/01…04` ile **bak**. Katalog sayılarını ezberleme; `bash kit/gates.sh` ve `kit/dist/report.md` ile ölç.

## Lisans

Proje [MIT lisansıyla](LICENSE) dağıtılır. Fontlar için [OFL 1.1 ve aile listesi](kit/fonts/LICENSES.md),
tasarım kaynak kataloğu için [kaynak MIT lisansı](refs/design-resources/LICENSE-upstream.txt),
fotoğraflar için `kit/images/` altındaki lisans bilgileri geçerlidir.

## Bilinen sınırlar

- **2 bloklamayan uyarı:** `60-energy-grid` scrub 1.45 ve `98-generative-grid` scrub 1.6 (>1.4) — süre bütçesi değil, "gecikmeli his" uyarısı.
- **20 stilde `typography.forbidden` boş** (şema uyarısı, hata değil).
- **PNG ağırlıklı katalog:** metin keskinliği için PNG; kayıpsız optimize edilir, yeni sahne üretiminden sonra `optimize-shots --all` çalıştırılmalı.
- Stil açıklamaları tasarım araştırmalarıyla hazırlanır; katalog önizlemeleri depodaki token ve sahne kaynaklarından üretilir.
