# Sahne katmanı planı — "site bir sahne" (stage-lab) · v2

> **Ne işe yarar:** Lando Norris · Monolith · Bruno · Inkwell · Aurel · Ponpon · Unseen · Mat Voyce sınıfı
> WebGL/animasyon sitelerini üretebilir hâle gelmek için karar kaydı + uygulama planı.
> **Durum:** plan onaylandı, kod yazılmadı. **v2:** stil `04-luxury-typography` kilitlendi, stil sözleşmesi çatışması çözüldü.
> **Kapsam dışı:** style-lab'ın 145 stil kataloğu ve 38 kapısı **değişmez**. Bu plan yeni bir repo açar.

---

## 1 · Karar kaydı (kilitli)

| # | Karar | Seçim | Sonuç |
|---|---|---|---|
| K1 | Kod nerede | **Kardeş proje `../stage-lab`** | npm/vite/three serbest; style-lab bağımlılıksız kalır |
| K2 | Hareket politikası | **Serbest, şartsız** | `kit/motion/policy.json` yasakları sahne tier'ında geçersiz |
| K3 | İlk arketip | **`portrait-motif`** (Lando iskeleti) | 5 beat + motif tekrarı |
| K4 | Bu turun çıktısı | **Yalnız bu doküman** | Kod yok, kapı değişmez |
| **K5** | **Stil** | **`04-luxury-typography`** | Palet, tipografi, boşluk ve **stil hareket yasakları** bağlayıcı → §3 |

### K1 gerekçesi — neden kardeş proje
style-lab kökte `package.json` taşımıyor; kit Node built-in + headless Chrome (CDP) ile çalışıyor.
Sahne sitesi tersini ister: `three` + `@react-three/fiber` + `gsap` + `lenis` + `vite`. Bunları style-lab'a sokmak
38 kapıyı npm'e bağımlı hâle getirir.

| Repo | Rol | Yazar | Okur |
|---|---|---|---|
| `style-lab` | **veri**: palet, tipografi, motion süre/eğri, sahne şablonları | yalnız kendi kapıları | — |
| `stage-lab` | **sahne**: beat makinesi, WebGL, kamera, ses | kendi `npm run verify` | style-lab'ın `dist/` çıktısı + `tokens.json` |

**Kontrat (tek yön):** `stage-lab` style-lab'a **yazmaz**. Okuduğu dosyalar:

| Dosya | Ne alınır |
|---|---|
| `kit/dist/tokens.all.css` | `[data-style]` değişken setleri (açık + koyu) |
| `kit/dist/tailwind.theme.css` | `@theme` (Tailwind v4) |
| `kit/dist/motion.json` | `durationMs`, `{kind, points}` eğri, `offsetYPx` |
| `kit/dist/react/styleLabTokens.js` | TS tarafında tipli token |
| `kit/styles.index.json` | 145 stil özeti + yollar |
| **`styles/04-luxury-typography/tokens.json`** | **`must` · `mustNot` · `motion.forbidden` · `components` — stil sözleşmesi kapısının girdisi** |
| **`styles/04-luxury-typography/style.md`** | kompozisyon + ekran reçetesi (insan okur, kapı okumaz) |

**Drift koruması:** `tools/verify-contract.mjs` — 7 dosyanın SHA256'sını `contract.lock.json` ile karşılaştırır.
style-lab export'u değişip stage-lab güncellenmemişse `npm run verify` kırmızı. Ters yön yok.

---

## 2 · Referans sökümü → 5 arketip

| Arketip | Referans | Taşıyıcı fikir | Çekirdek mekanik | `04` ile uyum |
|---|---|---|---|---|
| `portrait-motif` | Lando Norris | kask | imleç motifi parçalar → motif 4+ yerde tekrar | ✅ (uyarlanmış, §3) |
| `single-object` | Monolith | tek monolit | scroll → **kamera** | ⚠️ kamera sabitlenmeli, motif dönmeli |
| `scroll-narrative` | Inkwell | oyunun kendisi | nav yok, beat + fizik | ⚠️ fizik "hareket" sayılır → dürtülü olmalı |
| `playable-world` | Bruno · Aurel | oynanabilir dünya | WASD + çarpışma | ⚠️ 04'ün seyrek yerleşimi ile zor; sonraya |
| `kinetic-type` | Mat Voyce · Stas Bondar | harf | ölçek/eksen + DrawSVG | ✅ doğal uyum (Cormorant 300 + DrawSVG) |

**K2 sonrası net kural:** `policy.json` yasakları düştü, **`04`'ün kendi yasakları düşmedi.** İkisi ayrı katman.

---

## 3 · `04` ile uyum: 6 çatışma ve çözümü

Bu bölüm v2'nin asıl işi. Lando mekaniği `04`'ün sözleşmesine **olduğu gibi** konamaz.

| # | Çatışma | `04` ne diyor | Kaynak | Çözüm |
|---|---|---|---|---|
| Ç1 | **Sürekli animasyon** | `motion.forbidden`: "sürekli animasyon" | parçacıklar kendi kendine süzülürse ihlal | **Hareket kullanıcıdan gelir.** Parçacıklar imleç dürtünce hareket eder, atalet 1.2s'de sıfıra iner, durur. "Toz" değil **"gravür talaşı"** |
| Ç2 | **Parallax** | `motion.forbidden`: "parallax" | kamera/katman kayması yasak | Kamera **sabit**. Derinlik `clip-path` katmanları + `opacity` ile kurulur (`04` imzası: `mask-wipe` / `clip-curtain`) |
| Ç3 | **Pin / scrub** | `pin.enabled: false`, `scroll.once: true` | Monolith/Inkwell mekaniği pin ister | **İki kanal:** DOM reveal = `once: true` (04 aynen); sahne scrub = ayrı kanal, geri dönebilir. Override **yazılı**, sessiz ezme yok |
| Ç4 | **Bloom / parlaklık** | "gölge, gradient, cam, doku" yasak; `--bg` krem | krem zeminde bloom beyazı kırpar | **Bloom = 0.** Post yok; yerine grain `.03` + 1px `--line` vignette |
| Ç5 | **Altın** | "`--accent` metin olarak kullanılmaz" (2.0:1); "altın yalnızca hairline/ikon/çerçeve" | dolu altın mesh = geniş alan | Motif **çizgi**dir: `LineSegments` / 1px gravür. Dolu altın yüzey yok; altın yalnızca hairline ve tek vurgu noktası |
| Ç6 | **Yoğunluk** | "ekran başına 1 başlık + 1 paragraf + 1 CTA", "≤2 bölüm", chip enflasyonu yasak | Lando'nun hall-of-fame grid'i | `atlas` beat'i **grid değil**: 3 satır seyrek liste, hairline ayırıcı, serif rakam |

### 3.1 Üç katmanlı öncelik (çatışma çıkınca sıra bu)

```
1. 04 stil sözleşmesi  (must / mustNot / motion.forbidden)
2. K2 sahne istisnası   (policy.json yasakları düşer)
3. Arketip mekaniği     (Lando iskeleti; ilk ikisiyle çelişirse uyarlanır)
```

### 3.2 `04` profil (stage-lab tarafı)

| Katman | Değer | Kaynak |
|---|---|---|
| Zemin | `#f6f1e7` krem (`--bg`) | tokens.json |
| Display | Cormorant Garamond **300**, 64px / 1.1 / `0.01em` | typography.scale.h1 |
| Gövde | Jost 14 / 1.75 / `0.02em`, ölçü **46–54ch** | typography.measure |
| Mikro etiket | 10px / 500 / uppercase / `0.3em`, renk **`--ink`** (altın değil) | must #3 + kontrast |
| Hairline | 1px `rgba(26,24,21,.16)`; **altın `--accent` yalnız çizgi** | must #6 |
| Shape | radius **0**, gölge **yok** (`--shadow: none`) | shape/elevation |
| Giriş | **800ms** `cubic-bezier(.2,.7,.2,1)`, `opacity` + 24px, stagger 90ms | sequences.enter |
| Scroll reveal | **1000ms**, `top 80%`, `once: true` | sequences.scroll |
| Hover | **320ms**, `scale(1.015)` (görsel), `underline-draw` (bağlantı) | sequences.hover |
| Ödül hareketi | hairline **0 → 40px**, 400ms `ease-in-out` | `04` hareket tablosu |
| Koyu mod | `#12100e` zemin, altın `#d8bb7d` | palette.dark |

**Sahne varsayılanı açık mod** (`04`'ün imzası krem kâğıt). Koyu mod ayrı profil: aynı kod, farklı parçacık/bloom ayarı.

### 3.3 Tipografi ↔ sahne köprüsü

- **FOUT yasak.** 64px Cormorant 300 bir kez sıçrarsa lüks hissi biter. `font-display: block` + preload;
  **B0 preload beat'i `document.fonts.ready`'yi bekler** → sahne fontla birlikte açılır.
- Motif ile display aynı karede: metin `mix-blend-mode: multiply` **kullanılmaz** (gölge/gradient yasağına yakın);
  bunun yerine motif `opacity: .12` gravür katmanı, metin üstte tam kontrast.
- Hairline, motifin bir parçasından türetilir (motifin yatay kesiti = 40px çizgi) → **motif tekrarı #3**.

---

## 4 · `portrait-motif` derin söküm (K3 + K5)

### 4.1 Altı beat (04 temposuna çekilmiş)

| Beat | Süre / tetik | Ne olur | Teknik | `04` uyumu |
|---|---|---|---|---|
| **B0 preload** | 0 – 1.2s | font + motif parçaları toplanır | `document.fonts.ready` + GSAP timeline | `clip-curtain` |
| **B1 hero** | scroll = 0 | gravür motif; imleç dürtünce talaş kalkar, **1.2s'de durur** | `InstancedMesh` 4k, atalet sönümü | Ç1 |
| **B2 story** | scroll 0 → .6 | 3 perde, **kamera sabit**, motif `clip-path` ile açılır | GSAP scrub + `clip-path` | Ç2, Ç3 |
| **B3 atlas** | scroll .6 → .9 | 3 satır seyrek liste; satır numarası serif; motifin dilimi hairline (tekrar #3) | DOM + hairline | Ç6 |
| **B4 footer** | scroll .9 → 1 | motif dev gravür, `opacity .08`, `clip-path` (tekrar #4) | CSS clip + scrub | Ç2, Ç4 |

Motif tekrarı: nav mikro çizim (#1) + hero (#2) + atlas hairline (#3) + footer (#4) → **4**.

### 4.2 Motif pipeline

```
motif.svg / motif.glb  →  tools/optimize-motif.mjs  →  public/motif/{mesh.glb, parts.json, og.webp}
```

- `04` gereği motif **çizgi** taşımalı: GLB'den `LineSegments` (edges) türetilir; dolu yüzey yalnızca
  `--surface` / `--bg` ile aynı tonda, gölgesiz. Altın yalnız hairline.
- GLB: Draco + KTX2, **≤ 1.5 MB**; parça isimleri `parts.json`'a (imleç hangi parçayı koparacak).
- SVG fallback: WebGL yoksa **aynı motif** SVG olarak; boş ekran yok.
- Parçacık sayısı 10k **değil 4k**: krem zeminde 10k toz "kirli" görünür (`04`'ün "görünür gürültü yok" kuralı).

### 4.3 Yığın (pinlenmiş sürümler)

| Katman | Seçim | Not |
|---|---|---|
| Build | Vite 6 + React 19 + TS strict | |
| 3B | `three` + `@react-three/fiber` + `@react-three/drei` | `LineSegments`, KTX2 loader |
| Timeline | `gsap` + `ScrollTrigger` | scrub kanalı ayrı; `CustomEase` marka eğrisi |
| Smooth scroll | `lenis` | GSAP ticker'a bağlanır |
| 2B mikro-motion | `@rive-app/react-canvas` | hairline çizimi + mikro etiket |
| Post | **yok** (bloom off) | Ç4; grain CSS ile |
| Ölçüm | `playwright` + CDP | FPS, drawcall, LCP, uzun görev |

---

## 5 · `stage-lab` mimarisi

```
../stage-lab/
├── contract.lock.json            # style-lab 7 dosya SHA256 (tokens.json dahil)
├── tools/
│   ├── verify-contract.mjs       # drift kapısı
│   ├── check-style-contract.mjs  # 04 must/mustNot denetimi (kod + config)
│   ├── optimize-motif.mjs        # GLB → çizgi türetimi + Draco/KTX2 + parts.json
│   └── measure.mjs               # playwright: FPS/drawcall/LCP/long task/etkileşim sayısı
├── src/
│   ├── stage/
│   │   ├── beats.ts              # B0..B4, config'ten okur, fonts.ready bekler
│   │   ├── scroll.ts             # Lenis + iki kanal: reveal(once) / scrub(reversible)
│   │   ├── scene.tsx             # R3F canvas, frameloop='demand', kalite kademesi
│   │   └── motif.ts              # çizgi motif yükleme + parça haritası + SVG fallback
│   ├── archetypes/portrait-motif/
│   ├── ui/                       # nav (pill) · hero · atlas listesi · footer
│   └── styles/                   # tokens.all.css import + data-style="luxury-typography"
├── stage.config.json
└── verify: typecheck + lint + style-contract + build + verify-contract + measure
```

```json
{
  "style": "04-luxury-typography",
  "theme": "light",
  "motif": { "mesh": "public/motif/mesh.glb", "parts": "public/motif/parts.json", "svg": "public/motif/motif.svg" },
  "beats": ["preload", "hero", "story", "atlas", "footer"],
  "quality": { "particles": 4000, "bloom": 0, "edgesOnly": true, "dprMax": 1.75 },
  "scroll": { "reveal": { "once": true, "durationMs": 1000 }, "scrub": { "distanceVh": 300 } },
  "audio": { "enabled": false },
  "styleOverrides": {
    "motion.forbidden": ["hızlı (100ms altı) geçişler"],
    "scroll.pin": { "enabled": true, "scrub": true, "rationale": "Ç3: scrub kullanıcı sürüyor, otonom hareket değil" },
    "policy.forbidden": ["custom-cursor", "scroll-hijack", "pin"] 
  }
}
```

`styleOverrides` **zorunlu alan**: override yoksa kapı `motion.forbidden`'ı aynen uygular. Sessiz ezme yok.

---

## 6 · Kabul ölçütleri (ölçülebilir)

### Sahne

| # | Ölçüt | Eşik | Nasıl |
|---|---|---|---|
| 1 | Motif tekrarı | ≥ **4** farklı bölüm | `measure.mjs` DOM sorgusu |
| 2 | Beat ilerlemesi | 5 beat, scroll 0→1 | `window.__beats` telemetrisi |
| 3 | FPS (desktop, 4k) | p50 ≥ **55** · p95 ≥ **45** | CDP `Performance` |
| 4 | Drawcall | ≤ **30** | `renderer.info.render.calls` |
| 5 | LCP (4G) | ≤ **2.5s** | Lighthouse |
| 6 | JS gzip | ≤ **450 KB** | vite build raporu |
| 7 | GLB | ≤ **1.5 MB** (Draco+KTX2) | dosya boyutu |
| 8 | WebGL yok | SVG motif, boş ekran yok | `--disable-webgl` |
| 9 | Atalet durur | imleç sabitken 1.5s sonra transform değişimi = **0** | CDP: ardışık frame matrix diff |

### `04` stil sözleşmesi (yeni — v2'nin ana kapısı)

| # | Ölçüt | Eşik | Nasıl |
|---|---|---|---|
| 10 | Gölge | `box-shadow: none`, `text-shadow: none` | computed style taraması |
| 11 | Gradient / cam | `gradient` / `backdrop-filter` = **0** eşleşme | CSS tarama |
| 12 | Radius | ≤ **2px** her öğede | computed style |
| 13 | Display | family ⊇ Cormorant, weight ∈ {300,400}, size ≥ 52px | computed style |
| 14 | Kalın display | weight ≥ 600 **hiçbir** display öğede | computed style |
| 15 | Gövde | ≥ 14px, line-height ≥ 1.7 | computed style |
| 16 | Altın metin | `color: #c6a664` **hiçbir** metin düğümünde | computed style (kontrast 2.0:1) |
| 17 | Mikro etiket | `--ink`, 10px, uppercase, tracking ≥ `0.2em` | computed style |
| 18 | Seyreklik | hero'da ≤ **3** etkileşim; bölüm ≤ **2** | DOM sayımı |
| 19 | FOUT | preload sonrası font swap **0** | `document.fonts` gözlemcisi |
| 20 | Kontrast | `ink/bg` ≥ 15, `ink-soft/bg` ≥ 6.5, `ink-faint` gövdede **yok** | APCA/WCAG hesabı |

**Kapı:** `npm run verify` = `tsc --noEmit` → `eslint` → **`check-style-contract`** → `vite build` → `verify-contract` → `measure --all`

---

## 7 · Fazlar

### stage-lab

| Faz | İş | Bitti sayılır |
|---|---|---|
| **S0** | iskelet: Vite+TS+R3F, `verify-contract`, `check-style-contract`, token import, boş canvas | `verify` yeşil, `contract.lock.json` üretildi |
| **S1** | motif pipeline: çizgi türetimi + Draco/KTX2 + SVG fallback | motif GLB ≤ 1.5 MB, fallback çalışıyor |
| **S2** | beat makinesi + **iki kanal scroll** + `fonts.ready` bekleyişi | scroll 0→1, 5 beat, FOUT yok |
| **S3** | gravür parçacık + imleç dürtüsü + **atalet sönümü** | imleç sabitken hareket duruyor (ölçüt 9) |
| **S4** | UI: pill nav · hero · atlas listesi · footer + motif 4 tekrar | ölçüt 1 ve 18 |
| **S5** | ölçüm + poster + 3 viewport + koyu mod profili | `measure --all` bütçe içinde |
| **S6** | kalan 4 arketip (`04` uyarlamalarıyla) | config değiştirip arketip değişiyor |

### style-lab (bu plandan tek dokunuş)

| Faz | İş |
|---|---|
| **Z0** | bu doküman (yapıldı) |
| **Z1** *(opsiyonel)* | `docs/animasyon-referanslari.md` §2'ye yıllık kazanan 8 satırı |

`policy.json`, `gates.sh`, `playbook.md`, `styles/04-*` **değişmiyor**.

---

## 8 · Bilinçli kabul edilen riskler

| Risk | Ne olur | Tek anahtarla geri dönüş |
|---|---|---|
| **Klavye tuzağı** | scroll kilidi + pin klavye kullanıcısını sıkıştırır | `a11y.escapeHatch: true` → statik sürüm |
| **Hareket hassasiyeti** | `prefers-reduced-motion` yok sayılıyor | `a11y.respectReducedMotion: true` → poster |
| **Odak kaybı** | `cursor:none` + gölge DOM | `a11y.focusRing: true` → 1px `--accent`, offset 3px |
| **Performans** | düşük cihazda 4k parçacık kasar | kalite kademesi (4k → 1k → 0) |
| **Stil kayması** | sahne büyüdükçe 04'ün yasakları unutulur | `check-style-contract` kapısı (ölçüt 10–19) |

Dört `a11y.*` anahtarı **varsayılan `false`** (K2). Kod yolu yazılır ve test edilir; kapı zorlamaz,
`measure.mjs --a11y` raporu bilgi olarak yazar. "Statik sürüm" bağlantısı yine de bulunur (tek satır HTML).

---

## 9 · Geri dönüş

- **stage-lab:** yeni repo, silinirse style-lab etkilenmez. `git init` + ilk commit S0 sonunda.
- **style-lab:** bu plandan tek dosya (`docs/stage-lab-plani.md`); `git rm` ile dönülür. Kapı eklenmedi.
- **Kontrat kırılırsa:** `verify-contract` kırmızı → `node kit/export-tokens.mjs --check` hangi dosyanın kaydığını söyler.

---

## 10 · Sıradaki tur (öneri)

1. `../stage-lab` iskeleti (S0) — 8 dosya, `npm run verify` yeşil.
2. **Motif envanteri:** kask yerine bu projenin tek nesnesi ne? Çizgi/gravür türetimine uygun mu (kapalı hacim, keskin kenar)?
3. Marka metni: `04` ekran başına 1 başlık + 1 paragraf istiyor → 5 beat'in metni **önceden** yazılmalı (sahne metne göre kurulur, tersi değil).

---

## 11 · Uygulama durumu (S0–S5 tamam · 2026-11-09)

`../stage-lab` kuruldu, ilk commit `2a48da1`. `npm run verify` yeşil, ölçüm **32/32**.

| Faz | Durum | Kanıt |
|---|---|---|
| S0 iskelet | ✅ | Vite 8 + React 19 + R3F 9 + TS strict · `contract.lock.json` (7 dosya) |
| S1 motif | ✅ | Prosedürel gravür mühür: `motif.svg` + `parts.json`, 5 parti, hairline oranı 0.91 |
| S2 beat + scroll | ✅ | B0–B4, `fonts.ready` bekleyişi (FOUT 0), reveal `once` / scrub geri dönüşebilir |
| S3 toz + imleç | ✅ | 2.4k nokta, imleç dürtüsü, atalet ~1 s'de **0** (ölçüldü) |
| S4 UI | ✅ | Motif 4 yerde: nav · canvas · atlas hairline · footer |
| S5 ölçüm | ✅ | `tools/measure.mjs` — gölge 0, gradient 0, radius 0, altın metin 0, kontrast 15.74:1 |
| S6 diğer arketipler | ✅ | 5/5 arketip ayrı derleme+ölçümde yeşil (`npm run verify:archetypes`) |

### 11.1 Plandan bilinçli sapmalar

| # | Sapma | Gerekçe |
|---|---|---|
| 1 | `a11y.respectReducedMotion` + `focusRing` **açık** (plan `false` diyordu) | §3.1 öncelik sırası: stil sözleşmesi > K2. `04` reduced-motion ve altın odak halkasını **zorunlu** kılıyor. `escapeHatch` kapalı kaldı |
| 2 | GLB/Draco/KTX2 boru hattı **yok** | Motif prosedürel çizgi; tek kaynak `motif-geometry.js` hem SVG hem `LineSegments` üretiyor. Gerçek mesh gelince `optimize-motif.mjs` devreye girer |
| 3 | 145 palet yerine **tek stil** çekildi (`tools/extract-tokens.mjs`) | CSS 116 KB → 15 KB. Kural korunur: token yine style-lab'ın üretilmiş çıktısından gelir |
| 4 | Rive ve ses yok | 2B mikro-motion CSS ile kuruldu; `audio.enabled: false` |

### 11.2 Ölçümün yakaladığı 3 gerçek hata

1. **Toz hiç durmuyordu** — kuvvet imlecin *konumuna* bağlıydı, imleç sabitken de itmeye devam ediyordu.
   `04`'ün "sürekli animasyon" yasağının tam ihlali. Düzeltme: kuvvet yalnız imleç hareket ettiği karede.
2. **Motif kaydırmada donuyordu** — `frameloop: 'demand'` + ilerleme değişiminde `invalidate()` yok.
3. **Toz motifi takip etmiyordu** — parçacıklar `<group>` dönüşümünün dışındaydı; ayrı hesap yapılınca
   motif küçülürken toz halkası yerinde kalıyordu. Düzeltme: tek `lookState` + `localToWorld`/`worldToLocal`.

**Ders:** "sahne ölçütü" yalnız görsel değil; 19–20 numaralı ölçütler bu üç hatayı yakalamasaydı site
"çalışıyor" görünüp yasak tekniği sessizce uygulayacaktı.

### 11.3 "Kare üretimi" ≠ FPS

Headless Chromium'da vsync yok; ölçülen sayı saniyedeki kare üretimi (ölçümde ~180). Gerçek cihaz FPS'i
değildir — raporda böyle yazılıyor, "60fps" iddiası yok.

### 11.4 S6 — diğer 4 arketip (tamam)

| Arketip | Referans | Mekanik | `04` uyarlaması |
|---|---|---|---|
| `portrait-motif` | Lando | motif + toz, imleç dürtüsü | hareket yalnız imleçten |
| `single-object` | Monolith | dönüş = ilerleme | **kamera sabit** (Ç2), clip-curtain, toz yok |
| `scroll-narrative` | Inkwell | navigasyonsuz anlatı | clip-curtain + scrub, dürtü yok |
| `playable-motif` | Bruno / Aurel | WASD ile konum | tuş bırakılınca durur (Ç1) |
| `kinetic-type` | Mat Voyce | harf = motif, WebGL yok | 1px stroke gravür, `--stage-rot` ile döner |

**Ölçüm:** her arketip ayrı derlenir (`VITE_STAGE_ARCHETYPE`), 33 ölçüt koşar. Sahne taşımayan
arketipte drawcall/parçacık ölçütleri `n/a` — sahte sayı üretilmez.

**Gözle bulunan 2 tasarım hatası (ölçüt yakalamadı):**

1. **Clip story ortasında kalıyordu** → mühür yarısı kesik görünüyordu. Perde hero'dan çıkarken
   (p 0.02→0.20) açılacak şekilde daraltıldı; story'ye girildiğinde motif tam.
2. **`kinetic-type` harfi görünmüyordu** — hem clip onu gizliyordu hem dolgu 0.07 opaklıkta kayboluyordu.
   Clip kapatıldı, harf **1px stroke gravür**e çevrildi (04: "illüstrasyon yok, gerekiyorsa ince gravür").

**Ders:** ölçüt "motif görünür" diyemez; görünürlüğün *ne kadar* olduğunu ancak kareye bakmak söyler.
Sayısal kapı + `--shot` birlikte çalışmalı.
