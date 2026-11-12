# 49 · Log Stream

> **Bir cümlede:** Olayların 28px satırlarda zebra akıp önem düzeyinin çip + renk + nokta üçlüsüyle kodlandığı, kullanıcının akışı her an durdurabildiği kayıt yüzeyi.

| | |
|---|---|
| **Hissiyat** | akışkan, gergin ama kontrollü, teknik, izlenebilir |
| **En iyi** | log & olay akışı, incident timeline, audit trail, CI/deploy olay geçmişi |
| **Kaçın** | pazarlama landing'i, lüks vitrin, form ağırlıklı akış (sürekli hareket dikkat dağıtır) |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (hareketli içerik — durdurma zorunlu; en düşük etkileşimli çift 6.87:1) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `kit/tokens.css` → `[data-style="log-stream"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Log Stream, zamanı **dikey bir ray** olarak kullanan tek katmanlı bir olay yüzeyidir: solda 88px sabit zaman sütunu, yanında 8px önem noktası, sonra kaynak ve mesaj. Kurucu kararları üç tanedir. Birincisi **sabit sütun geometrisi**: zaman, önem ve kaynak sütunları hiç zıplamaz; göz yalnız dikey kayar. İkincisi **zebra, çizgi değil**: satırlar `--surface` / `--surface-2` ile ayrılır; 28px satırda 1px çizgi gürültü olur. Üçüncüsü **kullanıcı egemenliği**: akış otomatik kayar, ama kullanıcı yukarı kaydırdığı an durur ve `akışı izle` düğmesi belirir.

Bedeli: bu ekran sakin değildir ve dekoratif hiçbir şey taşımaz. Kazancı: bir olayın ne zaman, hangi serviste, hangi önemde olduğunu **tek satırda** okutabilmesi ve 500 satırın üstünde bile hizanın bozulmaması.

### Ne değildir
- **Terminal UI (45) değildir:** 45 tek renk (yeşil) mono konsoldur ve önem kodunu metin önekiyle verir (`[ok]`, `!`); 49 çok tonlu (mor accent + dört önem rengi) bir **olay** yüzeyidir, çip ve nokta taşır, zebra kullanır.
- **Telemetry Grid (46) değildir:** 46 ölçüm kartlarıdır (12 tile, eşik); 49 satır akışıdır (28px, sınırsız satır), grafik yok.
- **Trading Desk (47) değildir:** 47 amber tek vurgu ve sayı odaklıdır; 49 mor accent ve metin odaklıdır, 24px yerine 28px satır kullanır.
- **Cybercore (23) değildir:** 23 neon mint ve HUD süsleri taşır; 49'da süs yok, hareket `steps(4)` ile kesik ve tek amaçlı.

### Nereden gelir
Unix `tail -f`, syslog ve 12-factor "log bir olay akışıdır" ilkesinden; bugün OpenTelemetry'nin `severity + trace id` standardı ve Kibana Discover tarzı keşif ekranlarıyla kurumsallaştı. Klişeye dönüşmemesi için korunacak detay: **zaman sütununun sabit genişliği** ve önem kodunun metinsiz bırakılmaması.

### 3 saniyede tanıma testi
1. Solda sabit genişlikte zaman sütunu (`HH:MM:SS.mmm`) ve satır başında 8px önem noktası var.
2. Satırlar 28px ve zebra; hiçbir satırda yatay ayırıcı çizgi yok.
3. Önem her satırda büyük harf çip olarak yazılı: DEBUG / INFO / WARN / ERROR.
4. Üstte yapışkan filtre barı; sağ altta `akışı izle` / `duraklat` düğmesi.
5. Accent mor; kırmızı-sarı-yeşil yalnız önem anlamında kullanılıyor.

## Görsel imza
- **28px satır + zebra:** satır yüksekliği 28px, zemin `--surface` / `--surface-2` dönüşümlü; satır arası çizgi yok.
- **88px zaman rayı:** `HH:MM:SS.mmm` mono, `tabular-nums`, sola dayalı; sütun genişliği hiç değişmez, taşarsa `…` ile kesilir.
- **8px önem noktası:** DEBUG `--ink-faint`, INFO `--ok`, WARN `--warn`, ERROR `--danger`; yuvarlak, satırın optik ortasında.
- **Önem çipi:** 20px yükseklik, 6px radius, büyük harf 11px mono, %12 renkli zemin + 1px aynı renk kenar.
- **Yapışkan filtre barı:** 40px, `position: sticky; top: 0`, gölge yerine alt 1px `--line`; aktif filtre sayısı çipte.
- **Nokta dokusu:** 16px aralıklı `radial-gradient` yalnız başlık ve boş durum zemininde (veri satırlarında asla).
- **Hover dili:** 60ms'de satır zemini `--surface-2`'e koyulaşır, ölçek değişmez (`1.000`); hareket neredeyse yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#12141a` | sayfa zemini, nav | satır zemini |
| `--surface` | `#1a1e28` | panel, tek satır zebra, kart | sayfa zemini |
| `--surface-2` | `#21262f` | çift satır zebra, ikincil buton | birincil eylem |
| `--ink` | `#e7e9f0` | mesaj metni, başlık | önem kodu |
| `--ink-soft` | `#a2a8bb` | zaman damgası, kaynak adı, etiket | mesaj gövdesi |
| `--ink-faint` | `#767d92` | DEBUG noktası, dipnot | etkileşimli metin |
| `--accent` | `#a78bfa` | aktif filtre, birincil eylem, odak halkası | önem rengi yerine |
| `--accent-ink` | `#14101f` | accent üstü metin | gövde metni |
| `--line` | `rgba(231,233,240,.14)` | panel kenarı, yapışkan bar ayırıcı | satır ayırıcı (zebra kullanılır) |
| `--ok` / `--warn` / `--danger` | `#55d6a8` / `#f0c05a` / `#ff7b8a` | INFO / WARN / ERROR nokta + çip | dekorasyon, marka rengi |

- Ölçülen kontrast (varsayılan zemin): `ink / bg` = **15.18:1** · `ink-soft / bg` = **7.76:1** · `accent-ink / accent` = **6.87:1** · `ink-faint / bg` = **4.49:1**.
- Çok renk kuralı: accent tek (mor, gezinme/eylem); kırmızı-sarı-yeşil yalnız **önem** anlamı taşır ve her zaman çip metniyle birlikte görünür.
- Yasak kombinasyon: mesaj metnini önem rengine boyamak (yalnız nokta ve çip renklenir).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Mono (`--font-display`) | 30px (mobil 22px) | 700 | 1.18 | `--tracking` -0.01em |
| H2 | Space Mono | 19px | 700 | 1.32 | 0 |
| H3 | Space Mono | 15px | 700 | 1.34 | 0 |
| Gövde / olay mesajı | IBM Plex Mono (`--font-body`) | 13px | 400 | 1.6 | 0 |
| Satır metni / zaman | IBM Plex Mono / Space Mono | 12px | 400–500 | 28px sabit | 0 |
| Etiket / mono | Space Mono (`--font-mono`) | 11px | 500 | 1.3 | 0.08em (büyük harf) |

- Ölçek oranı **1.27** (11 → 13 → 19 → 30); kullanılan basamak sayısı 5: 11/12/13/19/30.
- Ölçü: `h1 { font-size: clamp(22px, 2.6vw, 30px) }`.
- Gövde metni maksimum satır uzunluğu: **76 ch** (log gövdesi JSON ise 88 ch'e kadar, sarma yok).
- Ağırlık kuralı: display yalnız 700; metin 400/500. 600 kullanılmaz (iki mono ailede 600 ile 700 ayırt edilemiyor).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1200px üstü), 8 (768–1199), 4 (390–767) |
| Gutter | 8px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200px: 88/64/120 + mesaj; 768px: zaman + önem + mesaj (kaynak gizlenir); 390px: zaman + önem noktası + mesaj, çip mesajın altına iner |

- Asimetri kuralı: **sabit ray** — zaman sütunu 88px, gerisi akışkan; ekran başına başka asimetri eklenmez.
- Bölüm ritmi: art arda en fazla **2** panel; üçüncü blok ya histogram ya boş durum olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, nav |
| Panel | `--surface` | yok | akış paneli, kart |
| Yüzen katman | `--surface` + 1px accent kenar | `none` | olay detayı modalı, filtre açılırı |

- Kenarlık formülü: `1px solid var(--line)`; yapışkan barın yalnız altında çizgi, üstünde yok.
- Derinlik nereden gelir: **hiçbir yerden** — katman ayrımı zemin tonu; satır ayrımı zebra.
- Radius: `--radius` 6px (buton, input, çip), `--radius-lg` 12px (panel, modal); 12px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 32px | 0 12px | `--radius` | 12px/500 Space Mono, .04em | accent + accent-ink | hover %90 (60ms) · active 1px aşağı · focus 2px halka · disabled %40 · loading `····` 320ms steps(4) |
| Buton (ikincil) | 32px | 0 12px | `--radius` | 12px/500 Space Mono | surface-2 + `--line` | hover `--surface` |
| Input | 32px | 0 10px | `--radius` | 12px mono | surface + `--line` | focus 2px accent · error `--danger` + `!` · disabled %40 |
| Kart (olay kartı) | — | 12px | `--radius-lg` | üst 12px mono / mesaj 13px | surface + `--line` | normal · vurgulu (sol 2px accent) · susturulmuş (%60) |
| Chip (önem) | 20px | 0 8px | `--radius` | 11px/500 mono büyük harf | %12 önem rengi zemin + 1px kenar | DEBUG/INFO/WARN/ERROR |
| Nav | 48px (+40px filtre) | 0 16px | 0 | 12px mono | bg + alt çizgi | aktif: accent alt çizgi 2px |
| Tablo satırı (olay) | 28px | 0 8px | 0 | 12px mono | zebra surface / surface-2 | hover `--surface-2` · seçili sol 2px accent · yeni satır 160ms opaklık |
| Modal | — | 16px | `--radius-lg` | başlık 15px Space Mono | surface + 1px accent kenar | açılış 160ms · Esc kapatır · JSON kopyala |
| Toast | 34px | 0 12px | `--radius` | 12px mono | surface-2 + sol 1px accent | 4000ms · 3 üst sınır · tıkla → akışa dön |
| Grafik paleti | — | — | — | eksen 11px mono | accent → warn → danger → ok | histogram, 1 dakikalık kovalar |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; satır içi kopyala düğmesinde `offset: 0` (satır yüksekliği 28px).
- Dokunma hedefi: 28px satır mobilde 44px'e çıkar; satır içi düğmeler 44×44px görünmez sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 10–12px, 1.5px çizgi: yeniden yükle, filtre, kopyala, duraklat — başka ikon yok |
| Fotoğraf | yok |
| İllüstrasyon | yok; görsel dil zaman rayı + nokta + metin |
| Doku | 16px nokta deseni, yalnız başlık ve boş durum zemininde |
| Logo alanı | 12px Space Mono kelime markası + 6px accent nokta; 16px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | nokta dokulu başlık + canlı akış önizlemesi (8 satır) | `shots/01-landing.png` |
| Dashboard | yüksek | yapışkan filtre + histogram + 20 satır akış | `shots/02-dashboard.png` |
| Form | düşük | filtre formu: servis, önem, zaman aralığı; 32px alanlar | — |
| Liste / tablo | yüksek | 28px satır, 88px zaman rayı, zebra | — |
| Boş durum | orta | "bu filtreye uyan olay yok" + filtreyi temizle | — |
| Onboarding | yüksek | 3 adım: kaynak bağla → önem seç → ilk olayı gör | — |
| Pricing | orta | olay hacmi tablosu (satır 28px) | — |
| Giriş / ödeme | çok düşük | dar SSO kartı, mono alanlar | — |
| Modal | orta | olay detayı: JSON gövde, trace id, kopyala | — |
| Bildirim / toast | orta | `+12 yeni olay`, sağ alt, tıkla → akışa dön | — |
| Hata | düşük | "akış kesildi" bandı + yeniden bağlan; son 5 olay soluk kalır | — |
| Profil / ayar | orta | önem eşiği, otomatik kaydırma, saklama süresi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 160ms | `steps(4, end)` | `opacity`, kayma yok (`0px`), satır başına 12ms stagger |
| Scroll reveal | 180ms | `steps(4, end)` | `top 94%` tetiği, 4px, `once: false` (akış geri gelince tazelenir) |
| Yeni satır | 160ms | `steps(4, end)` | `opacity` 0 → 1, kayma yok; en fazla 12 satır aynı anda |
| Hover | 60ms | `linear` | zemin `--surface-2`, görsel ölçek `1.000` |
| Pin / scrub | kapalı | — | — (akan liste sabitlenmez) |
| Otomatik kaydırma | 260ms | `linear` | 12 satır/sn üst sınır; kullanıcı kaydırınca durur |

- Ölçülebilir imza: `enter 0.16s / steps(4,end) / 0px / 0.012` · `scroll top 94% / 0.18s / 4px / once:false` · `hover 60ms / 1.000` · `pin kapalı`.
- `prefers-reduced-motion`: tüm süreler 0.01ms, otomatik kaydırma kapanır, yeni satırlar animasyonsuz eklenir.
- Bu stile yasak hareket: yumuşak ease-out, blur geçişi, 30ms üzeri stagger, sürekli kayan arka plan.

## Koyu mod

Koyu modda log zemini belirgin biçimde daha derin (ΔL −13), satır bandı genişler; accent (mor) bir kademe açılır ki seviye noktaları siyahta okunsun.

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#12141a` | `#06070b` |
| `--bg-2` | `#171a21` | `#0a0c12` |
| `--surface` | `#1a1e26` | `#0e1119` |
| `--surface-2` | `#20252e` | `#141926` |
| `--ink` | `#e6e8ef` | `#f2f4fb` |
| `--ink-soft` | `#a3a9b8` | `#b6bccd` |
| `--accent` | `#a78bfa` | `#ccb9ff` |
| `--accent-ink` | `#120d20` | `#150f26` |

- Koyu modda değişen başka ne var: satır ayırıcısı %65 → %75, seviye noktalarına 2px accent halka eklenir. Ölçüm: `ink/bg` 17.56:1, `accent-ink/accent` 9.47:1.

## Zorunlu kurallar
- Zaman sütunu 88px sabit, `HH:MM:SS.mmm`, mono + `tabular-nums`.
- Önem dört kanaldan: çip metni + renk + nokta + mesajın solukluğu.
- Satır 28px, ayrım zebra; satırlar arasında çizgi kullanılmaz.
- Otomatik kaydırma varsayılan açık; kullanıcı kaydırınca durur ve `akışı izle` görünür.
- Her olay kaynak (servis + host) ve trace/request id taşır.
- Filtre barı yapışkan; aktif filtre sayısı çipte yazar.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Yalnız renkle önem kodu (metin çipi zorunlu).
- 12px üstü radius, gölge, cam yüzey, gradient.
- Durdurulamayan otomatik kaydırma veya sonsuz animasyon.
- Satır arası yatay çizgi (zebra yerine çizgi kullanmak).
- Mesaj metnini önem rengine boyamak.
- Log gövdesini kısaltıp detayı erişilemez bırakmak.
- Uydurma trace id / zaman damgası; eksik alan `{{trace_id}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **4.49:1** (DEBUG noktası ve dipnot); etkileşimli metin `--ink` 15.18:1, `--ink-soft` 7.76:1.
- Hareket: akan içerik WCAG 2.2 "Pause, Stop, Hide" gereği durdurulabilir; `prefers-reduced-motion` otomatik kaydırmayı tamamen kapatır.
- Önem ayrımı renk dışında: çip metni + noktanın dolu/boş hali + mesajın solukluğu.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: satır zemini üstünde 2px mor halka 6.87:1; yapışkan filtre barında halka `offset: 3px` (bar yüksekliği 40px).

## Örnek görseller

Aynı içerik, 34 stilde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-landing.png` | Landing — Hero hiyerarşisi, imza motif, tek CTA; süsün en yüksek olduğu kare. |
| `shots/02-dashboard.png` | Dashboard — Süsün geri çekildiği operasyonel ekran; KPI ve tablo okunurluğu. |
| `shots/04-components.png` | Bileşenler · temel — Renk, tipografi, yüzey, boşluk ritmi — temel levha. |
| `shots/17-dark-landing.png` | Koyu mod · landing — Koyu mod · landing |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| Satırlar zıplıyor, göz kayıyor | zaman sütunu içeriğe göre genişliyor | 88px sabit genişlik + `tabular-nums` |
| Liste gürültülü görünüyor | satır arası çizgi + çip + renk birlikte | çizgiyi kaldır, zebra kullan |
| Önem okunmuyor | yalnız renk kodu | çip metni (DEBUG/INFO/WARN/ERROR) zorunlu |
| Kullanıcı akışı durduramıyor | otomatik kaydırma kilidi | yukarı kaydırınca durdur + `akışı izle` düğmesi |
| Yeni satır gecikmiş görünüyor | 30ms üzeri stagger | stagger'ı 12ms'de tut, en fazla 12 satır animasyonu |
| Mobilde metin taşıyor | kaynak sütunu korunmuş | 768px altında kaynak sütununu gizle, çipi alta al |

## Komşu stiller

- **Uyumlu:** `terminal-ui` — aynı teknik izleyici kitlesi; CLI/log okuma ekranı 45, olay yönetimi 49.
- **Uyumlu:** `telemetry-grid` — olaydan metriğe geçiş aynı yoğunlukta; panel 46, akış 49.
- **Uyumlu:** `cybercore` — koyu zemin + mono, ancak süsler 23'te kalır, 49 sade kalır.
- **Yasak:** `claymorphism` — şişkin yuvarlak yüzey 28px satır hizasını bozar.
- **Yasak:** `memphis` — dekoratif geometri olay metnini okunamaz kılar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://opentelemetry.io/docs/concepts/signals/logs/ | olay alanları: timestamp, severity, trace id |
| https://12factor.net/logs | log'u olay akışı olarak ele alma, satır biçimi |
| https://www.elastic.co/guide/en/kibana/current/discover.html | akan kayıt görünümü, kolon düzeni, yoğunluk |
| https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | otomatik akan içeriği durdurma zorunluluğu |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Log Stream (styles/49-log-stream/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="log-stream"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Space Mono 700) başlıkta, --font-body (IBM Plex Mono) mesaj gövdesinde,
           --font-mono (Space Mono) zaman damgası ve etiketlerde; hepsi tabular-nums.
Yüzey: 3 seviye (--bg / --surface / --surface-2); radius 6px/12px; gölge YOK; satır ayrımı zebra.
Bileşen: "Bileşen reçeteleri" birebir; olay satırı 28px, zaman sütunu 88px, önem çipi 20px.
Hareket: enter 0.16s steps(4,end) 0px / stagger 0.012; scroll top 94% 0.18s 4px once:false;
         hover 60ms scale 1.000; pin yok; otomatik kaydırma durdurulabilir olmalı.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (renk-only önem, satır çizgisi, durdurulamayan akış).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (88px zaman rayı, zebra 28px satır, önem çipi, yapışkan bar).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Otomatik kaydırma durdurulabiliyor; `prefers-reduced-motion` akışı kapatıyor.
- [ ] 390px genişlikte taşma yok, kaynak sütunu gizleniyor.
- [ ] Önem çipi metni her satırda görünür.

## Token

```css
[data-style="log-stream"] {
  --bg: #12141a; --bg-2: #171a22;
  --surface: #1a1e28; --surface-2: #21262f;
  --ink: #e7e9f0; --ink-soft: #a2a8bb; --ink-faint: #767d92;
  --accent: #a78bfa; --accent-ink: #14101f;
  --line: rgba(231,233,240,.14);
  --radius: 6px; --radius-lg: 12px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Space Mono", ui-monospace, monospace;
  --font-body: "IBM Plex Mono", ui-monospace, monospace;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
  --danger: #ff7b8a; --danger-ink: #23060b; --ok: #55d6a8; --warn: #f0c05a;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="log-stream"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
