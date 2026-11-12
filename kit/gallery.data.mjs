// kit/gallery.data.mjs — gallery build verisi (python build-gallery.py'den taşındı)
// Elle düzenlenebilir; anahtar = stil slug'ı.

export const DEFAULT_DEMO = `
      <div class="panel">
        <div class="row"><span class="dot"></span><span class="lbl">proje</span></div>
        <h3 class="demo-title">Başlık</h3>
        <p class="demo-text">Kısa açıklama metni, arayüzün nasıl nefes aldığını gösterir.</p>
        <input class="field" placeholder="Ara…" aria-label="demo arama">
        <div class="row"><button class="btn">Devam</button><button class="btn ghost">Geri</button><span class="chip">yeni</span></div>
      </div>`;

export const KEYWORDS = {
  "bauhaus": [
    "geometri",
    "temel renkler",
    "asimetri"
  ],
  "constructivism": [
    "diagonal çubuk",
    "kırmızı-siyah",
    "aşırı tipografi"
  ],
  "kinetic-type": [
    "dev ölçek atlaması",
    "diagonal şerit",
    "monokrom + asit"
  ],
  "organic-bio": [
    "doğal form",
    "toprak yeşil",
    "asimetrik radius"
  ],
  "minimalism": [
    "boşluk",
    "tek aksan",
    "sakin hiyerarşi"
  ],
  "swiss-design": [
    "12 kolon",
    "sola dayalı",
    "dev tipografi"
  ],
  "editorial-design": [
    "serif başlık",
    "kolon ritmi",
    "drop cap"
  ],
  "luxury-typography": [
    "geniş tracking",
    "seyrek",
    "hairline"
  ],
  "bento-grid": [
    "modüler kutu",
    "değişken boyut",
    "sabit gutter"
  ],
  "japandi": [
    "sıcak nötr",
    "düşük kontrast",
    "doğal doku"
  ],
  "wabi-sabi": [
    "kırık hiza",
    "organik form",
    "kâğıt grain"
  ],
  "glassmorphism": [
    "backdrop blur",
    "yarı saydam",
    "ışık kenarı"
  ],
  "liquid-glass": [
    "refraksiyon",
    "yay fiziği",
    "optik kenar"
  ],
  "neumorphism": [
    "çift gölge",
    "kabarık",
    "tek renk"
  ],
  "claymorphism": [
    "pastel",
    "şişkin",
    "oyuncak"
  ],
  "aurora-ui": [
    "gradient blob",
    "grain",
    "koyu zemin"
  ],
  "neo-brutalism": [
    "kalın kenar",
    "sert gölge",
    "düz renk"
  ],
  "anti-design": [
    "bozuk ızgara",
    "karışık tipografi",
    "kasıtlı kaos"
  ],
  "acid-graphics": [
    "asit yeşili",
    "distortion",
    "krom"
  ],
  "memphis": [
    "zikzak",
    "konfeti",
    "kalın kontur"
  ],
  "maximalism": [
    "katman",
    "çok renk",
    "motif tekrarı"
  ],
  "dopamine-ui": [
    "doygun blok",
    "mikro ödül",
    "yuvarlak"
  ],
  "y2k": [
    "krom",
    "parlak plastik",
    "buz mavisi"
  ],
  "vaporwave": [
    "lavanta",
    "kolaj",
    "VHS çizgisi"
  ],
  "synthwave": [
    "neon",
    "perspektif ızgara",
    "gün batımı"
  ],
  "cyberpunk": [
    "neon+kir",
    "HUD",
    "uyarı şeridi"
  ],
  "cybercore": [
    "monospace",
    "terminal",
    "fosfor"
  ],
  "pixel-art": [
    "8-bit",
    "sınırlı palet",
    "keskin kenar"
  ],
  "frutiger-aero": [
    "cam buton",
    "gök mavisi",
    "su damlası"
  ],
  "art-deco": [
    "simetri",
    "altın hairline",
    "ziggurat"
  ],
  "victorian": [
    "gravür",
    "süslü çerçeve",
    "small caps"
  ],
  "surrealism": [
    "ölçek oyunu",
    "kolaj",
    "rüya"
  ],
  "ethereal": [
    "sis",
    "yumuşak ışık",
    "nefes animasyonu"
  ],
  "bohemian": [
    "toprak paleti",
    "kilim deseni",
    "el yazısı"
  ],
  "scrapbook": [
    "bant",
    "polaroid",
    "katman gölgesi"
  ],
  "conceptual-sketch": [
    "el çizgisi",
    "wireframe",
    "ok ve not"
  ],
  "dark-academia": [
    "koyu ahşap",
    "gotik serif",
    "mum ışığı"
  ],
  "skeuomorphism": [
    "malzeme dokusu",
    "gömülü buton",
    "gerçek gölge"
  ],
  "scandinavian-dark": [
    "kuzey ışığı",
    "mat koyu yüzey",
    "hairline + boşluk"
  ],
  "grand-tourer": [
    "krem deri + krom",
    "yarış yeşili",
    "kadran + sayaç"
  ],
  "grand-tourer-oxblood": [
    "bordo deri",
    "kulüp lüksü",
    "krom + kadran"
  ],
  "grand-tourer-midnight": [
    "gece mavisi",
    "mavi-siyah nötr",
    "krom + kadran"
  ],
  "ai-native-mesh": [
    "mesh gradyan",
    "cam yüzey",
    "nötr geometrik tipografi"
  ],
  "utility": [
    "hairline disiplin",
    "isimli metin stili",
    "tek accent + düz zemin"
  ],
  "terminal-ui": [
    "mono ızgara",
    "klavye öncelikli",
    "1px çerçeve + ters video"
  ],
  /* >>> apply-fragments:keywords >>> */
  "minimalism": [
    "boşluk",
    "tek aksan",
    "sakin hiyerarşi",
  ],
  "swiss-design": [
    "12 kolon",
    "sola dayalı",
    "dev tipografi",
  ],
  "editorial-design": [
    "serif başlık",
    "kolon ritmi",
    "drop cap",
  ],
  "luxury-typography": [
    "geniş tracking",
    "seyrek",
    "hairline",
  ],
  "bento-grid": [
    "modüler kutu",
    "değişken boyut",
    "sabit gutter",
  ],
  "japandi": [
    "sıcak nötr",
    "düşük kontrast",
    "doğal doku",
  ],
  "wabi-sabi": [
    "kırık hiza",
    "organik form",
    "kâğıt grain",
  ],
  "glassmorphism": [
    "backdrop blur",
    "yarı saydam",
    "ışık kenarı",
  ],
  "liquid-glass": [
    "refraksiyon",
    "yay fiziği",
    "optik kenar",
  ],
  "neumorphism": [
    "çift gölge",
    "kabarık",
    "tek renk",
  ],
  "claymorphism": [
    "pastel",
    "şişkin",
    "oyuncak",
  ],
  "aurora-ui": [
    "gradient blob",
    "grain",
    "koyu zemin",
  ],
  "neo-brutalism": [
    "kalın kenar",
    "sert gölge",
    "düz renk",
  ],
  "anti-design": [
    "bozuk ızgara",
    "karışık tipografi",
    "kasıtlı kaos",
  ],
  "acid-graphics": [
    "asit yeşili",
    "distortion",
    "krom",
  ],
  "memphis": [
    "zikzak",
    "konfeti",
    "kalın kontur",
  ],
  "maximalism": [
    "katman",
    "çok renk",
    "motif tekrarı",
  ],
  "dopamine-ui": [
    "doygun blok",
    "mikro ödül",
    "yuvarlak",
  ],
  "y2k": [
    "krom",
    "parlak plastik",
    "buz mavisi",
  ],
  "vaporwave": [
    "lavanta",
    "kolaj",
    "VHS çizgisi",
  ],
  "synthwave": [
    "neon",
    "perspektif ızgara",
    "gün batımı",
  ],
  "cyberpunk": [
    "neon+kir",
    "HUD",
    "uyarı şeridi",
  ],
  "cybercore": [
    "monospace",
    "terminal",
    "fosfor",
  ],
  "pixel-art": [
    "8-bit",
    "sınırlı palet",
    "keskin kenar",
  ],
  "frutiger-aero": [
    "cam buton",
    "gök mavisi",
    "su damlası",
  ],
  "art-deco": [
    "simetri",
    "altın hairline",
    "ziggurat",
  ],
  "victorian": [
    "gravür",
    "süslü çerçeve",
    "small caps",
  ],
  "surrealism": [
    "ölçek oyunu",
    "kolaj",
    "rüya",
  ],
  "ethereal": [
    "sis",
    "yumuşak ışık",
    "nefes animasyonu",
  ],
  "bohemian": [
    "toprak paleti",
    "kilim deseni",
    "el yazısı",
  ],
  "scrapbook": [
    "bant",
    "polaroid",
    "katman gölgesi",
  ],
  "conceptual-sketch": [
    "el çizgisi",
    "wireframe",
    "ok ve not",
  ],
  "dark-academia": [
    "koyu ahşap",
    "gotik serif",
    "mum ışığı",
  ],
  "skeuomorphism": [
    "malzeme dokusu",
    "gömülü buton",
    "gerçek gölge",
  ],
  "bauhaus": [
    "geometri",
    "temel renkler",
    "asimetri",
  ],
  "constructivism": [
    "diagonal çubuk",
    "kırmızı-siyah",
    "aşırı tipografi",
  ],
  "kinetic-type": [
    "dev ölçek atlaması",
    "diagonal şerit",
    "monokrom + asit",
  ],
  "organic-bio": [
    "doğal form",
    "toprak yeşil",
    "asimetrik radius",
  ],
  "ai-native-mesh": [
    "mesh gradyan",
    "cam yüzey",
    "nötr geometrik tipografi",
  ],
  "scandinavian-dark": [
    "kuzey ışığı",
    "mat koyu yüzey",
    "hairline + boşluk",
  ],
  "grand-tourer": [
    "krem deri + krom",
    "yarış yeşili",
    "kadran + sayaç",
  ],
  "grand-tourer-oxblood": [
    "bordo deri",
    "kulüp lüksü",
    "krom + kadran",
  ],
  "grand-tourer-midnight": [
    "gece mavisi",
    "mavi-siyah nötr",
    "krom + kadran",
  ],
  "utility": [
    "hairline disiplin",
    "isimli metin stili",
    "tek accent + düz zemin",
  ],
  "terminal-ui": [
    "mono ızgara",
    "klavye öncelikli",
    "1px çerçeve + ters video",
  ],
  "telemetry-grid": [
    "24px ölçüm ızgarası",
    "eşik alarmı",
    "tabular rakam",
  ],
  "trading-desk": [
    "fiyat merdiveni",
    "amber terminal",
    "tick yoğunluğu",
  ],
  "executive-kpi": [
    "yönetici özeti",
    "hairline rapor",
    "serif rakam",
  ],
  "log-stream": [
    "olay zaman çizgisi",
    "önem derecesi",
    "akan kayıt",
  ],
  "lab-instrument": [
    "ölçüm kanalı",
    "kadran yayı",
    "kobalt cetvel",
  ],
  "atlas-console": [
    "coğrafi operasyon haritası",
    "saha koordinasyonu",
    "katman ve lejant",
  ],
  "experiment-split": [
    "deney ve A-B analizi",
    "kontrol/varyant karşılaştırması",
    "delta ve örneklem",
  ],
  "ledger-meter": [
    "faturalama ve kullanım metrikleri",
    "kota ve limit takibi",
    "defter hizalı tutarlar",
  ],
  "vitals-triage": [
    "sağlık vitalleri ve triyaj",
    "hasta önceliklendirme",
    "klinik gözlem panosu",
  ],
  "fleet-telemetry": [
    "IoT filo kontrolü",
    "kapsama ve bağlantı durumu",
    "cihaz telemetrisi",
  ],
  "blueprint-drawing": [
    "teknik çizim ızgarası",
    "cyanotype mavi",
    "ölçü etiketleri",
  ],
  "machined-metal-panel": [
    "fırçalanmış alüminyum",
    "gravür etiket",
    "amber durum noktası",
  ],
  "safety-signage": [
    "çapraz tehlike bandı",
    "sarı-siyah uyarı",
    "büyük harf hiyerarşi",
  ],
  "mes-production-line": [
    "durum renk kodu",
    "tabular sayaç",
    "yoğun hat tablosu",
  ],
  "energy-grid": [
    "tek hat şeması",
    "volt yeşili akış",
    "düğüm noktası",
  ],
  "calibration-lab": [
    "kalibrasyon paneli",
    "ölçüm bandı",
    "tolerans çubuğu",
  ],
  "warehouse-flow": [
    "depo operasyon panosu",
    "raf ve sevkiyat takibi",
    "sert ofset etiket dili",
  ],
  "maintenance-cmms": [
    "iş emri kartı",
    "bakım ve arıza panosu",
    "daktilo künye dili",
  ],
  "construction-site": [
    "şantiye blok panosu",
    "metraj ve aşama takibi",
    "plaka çerçeve dili",
  ],
  "cockpit-avionics": [
    "kokpit gösterge paneli",
    "segment çubuk okuma",
    "bezel çerçeve dili",
  ],
  "nordic-folk": [
    "halk deseni",
    "el boyaması şerit",
    "sıcak linen zemin",
  ],
  "japanese-ma": [
    "ölçülmüş boşluk",
    "tek yatay çizgi",
    "mühür kırmızısı",
  ],
  "levant-calligraphy": [
    "hat hattı",
    "tezhip çerçevesi",
    "altın hairline",
  ],
  "andalusian-azulejo": [
    "kobalt çini",
    "harç ızgarası",
    "sekiz köşeli yıldız",
  ],
  "slavic-late-brutalist": [
    "beton panel",
    "sert ofset gölge",
    "tehlike şeridi",
  ],
  "west-african-pattern": [
    "dokuma şerit",
    "altın desen bloğu",
    "damga motifi",
  ],
  "andean-textile": [
    "basamak motifi",
    "çözgü şeridi",
    "ikili simetri",
  ],
  "indian-block-print": [
    "blok damga",
    "kayma izi",
    "çivit çiçek",
  ],
  "persian-miniature": [
    "altın tezhip çerçevesi",
    "madalyon kemeri",
    "gece laciverti",
  ],
  "aegean-island": [
    "kireç badana",
    "kemer açıklık",
    "ege mavisi",
  ],
  "biophilic-botanical": [
    "yumuşak yeşil",
    "yaprak formu",
    "nefes alan boşluk",
  ],
  "weather-atmosphere": [
    "gökyüzü gradyanı",
    "sisli cam katman",
    "bulut kütlesi",
  ],
  "topographic-terrain": [
    "eş yükselti çizgisi",
    "harita paftası",
    "toprak tonu",
  ],
  "ocean-current": [
    "akıntı çizgisi",
    "derin turkuaz",
    "su dalgası",
  ],
  "seasonal-shift": [
    "mevsim geçişi",
    "sıcak krem",
    "pas turuncusu",
  ],
  "forest-bark": [
    "orman saha defteri",
    "kabuk dokusu",
    "tür künyesi",
  ],
  "desert-sand": [
    "kumul eğrisi arayüz",
    "çöl atlası",
    "mor alacakaranlık accent",
  ],
  "polar-ice": [
    "buz plakası panel",
    "kutup verisi",
    "ölçüm üçlüsü",
  ],
  "volcanic-mineral": [
    "jeolojik kesit paneli",
    "bazalt ve magma",
    "mineral yüzdesi",
  ],
  "coral-reef": [
    "resif gözlem kaydı",
    "su altı turkuaz",
    "asimetrik mercan köşesi",
  ],
  "literary-hardcover": [
    "edebiyat kitabı",
    "tek serif aile",
    "hairline kâğıt",
  ],
  "broadsheet-daily": [
    "gazete kolonu",
    "masthead",
    "keskin kural",
  ],
  "magazine-feature": [
    "dergi feature",
    "pin'li pull-quote",
    "tam kanama görsel",
  ],
  "academic-paper": [
    "akademik makale",
    "kenar notu",
    "numaralı başlık",
  ],
  "poetry-chapbook": [
    "şiir kitapçığı",
    "el dikişi",
    "dar ölçü",
  ],
  "product-catalog": [
    "katalog sayfası",
    "kod ve fiyat sütunu",
    "swatch kareler",
  ],
  "museum-thesis": [
    "duvar etiketi",
    "asılı girinti",
    "levha çerçevesi",
  ],
  "type-experiment": [
    "tipografik spesimen",
    "taban çizgisi ızgarası",
    "ölçü notları",
  ],
  "encyclopedia": [
    "madde başı",
    "numaralı tanımlar",
    "çapraz referans",
  ],
  "punk-fanzine": [
    "fotokopi zine",
    "kes-yapıştır şerit",
    "zımba izleri",
  ],
  "kinetic-marquee": [
    "marquee bandı",
    "hıza bağlı eğim",
    "harf dalgası",
  ],
  "optical-illusion": [
    "moiré katmanı",
    "şekil-zemin",
    "yarım ton nokta",
  ],
  "generative-grid": [
    "tohumlu ızgara",
    "çizici düğüm",
    "koordinat etiketi",
  ],
  "depth-parallax": [
    "üç derinlik düzlemi",
    "atmosferik pus",
    "kaydırma hızı farkı",
  ],
  "fluid-simulation": [
    "akışkan blob",
    "yüzey gerilimi",
    "dalga ayırıcı",
  ],
  "shadow-stage": [
    "ışık ve gölge oyunu",
    "tek ışık kaynaklı sahne",
    "vinyetli koyu yüzey",
  ],
  "moire-field": [
    "moiré ve desen",
    "çift perde girişim",
    "orta ton zemin",
  ],
  "motion-trail": [
    "iz bırakma",
    "hareket izi katmanları",
    "uzun pozlama hissi",
  ],
  "stepped-mechanism": [
    "mekanik kademeli geçiş",
    "kademe göstergesi",
    "orta gri metal panel",
  ],
  "holographic-layer": [
    "holografik katman",
    "üç katmanlı cam yığını",
    "iridesan kenar",
  ],
  "voice-first": [
    "dinleme halkası",
    "dalga formu",
    "ses durumu",
  ],
  "spatial-ar-layer": [
    "derinlik katmanı",
    "çapa artısı",
    "perspektif ızgara",
  ],
  "command-palette": [
    "klavye önceliği",
    "keycap chip",
    "komut arama",
  ],
  "timeline-editor": [
    "playhead",
    "kanal şeridi",
    "zaman kodu",
  ],
  "kanban-flow": [
    "WIP sayacı",
    "kart şeridi",
    "kolon akışı",
  ],
  "step-wizard": [
    "adım rayı",
    "tek soru",
    "ilerleme sayacı",
  ],
  "zero-ui": [
    "monokrom sadeleşme",
    "niyet satırı",
    "hairline katman",
  ],
  "notebook-repl": [
    "hücre numarası",
    "çıktı bloğu",
    "kernel durumu",
  ],
  "multiplayer-presence": [
    "canlı imleç",
    "avatar yığını",
    "uzak seçim",
  ],
  "keyboard-first": [
    "tuş ipucu",
    "komut satırı",
    "odak halkası",
  ],
  "kids-playground": [
    "çocuk oyun alanı",
    "kalın gölge blok",
    "60px hedef",
  ],
  "carnival-festival": [
    "karnaval afişi",
    "renk şeridi",
    "bant başlık",
  ],
  "sticker-sheet": [
    "çıkartma sayfası",
    "die-cut halka",
    "toplanabilir koleksiyon",
  ],
  "arcade-8bit": [
    "arcade kabin",
    "pixel display",
    "statik tarama",
  ],
  "craft-handmade": [
    "el yapımı",
    "kraft kâğıt",
    "dikiş çizgisi",
  ],
  "celebration-card": [
    "die-cut kart",
    "konfeti saçılımı",
    "folyo kurdele",
  ],
  "collectible-card": [
    "2.5:3.5 kart",
    "holo bant",
    "nadirlik taşı",
  ],
  "comic-story": [
    "panel ızgarası",
    "konuşma balonu",
    "yarım ton gölge",
  ],
  "album-sleeve": [
    "plak kılıfı",
    "sırt yazısı",
    "parça listesi",
  ],
  "sports-energy": [
    "skor tabelası",
    "forma numarası",
    "pist şeritleri",
  ],
  "marble-vein": [
    "mermer plaka kataloğu",
    "grafit damar çizgisi",
    "taş yüzey künyesi",
  ],
  "silk-drape": [
    "ipek kumaş kartelası",
    "kıvrım köşesi",
    "gramaj ve en",
  ],
  "brass-copper": [
    "pirinç alaşım kataloğu",
    "gravür plaka künyesi",
    "bakır accent",
  ],
  "porcelain-glaze": [
    "porselen sır kataloğu",
    "kobalt ince çizgi",
    "çap ve ağırlık",
  ],
  "leather-craft": [
    "deri iş emri panosu",
    "kesikli dikiş çerçevesi",
    "tan grain doku",
  ],
  "optic-prism": [
    "optik cam",
    "prizma kenarı",
    "ölçü bandı",
  ],
  "wood-joinery": [
    "marangoz geçmesi",
    "meşe zemin",
    "ölçü etiketi",
  ],
  "letterpress-print": [
    "letterpress baskı",
    "deboss izi",
    "kâğıt elyafı",
  ],
  "concrete-monolith": [
    "dökme beton",
    "monolit kütle",
    "kalıp izi",
  ],
  "enamel-porcelain": [
    "emaye sır",
    "koyu yeşil mine",
    "sırlı yüzey",
  ],
  "speculative-scifi": [
    "diegetic plaka",
    "kadran tiki",
    "yabancı ölçü birimi",
  ],
  "volumetric-data": [
    "nokta bulutu",
    "kesit dilimi",
    "eksen etiketi",
  ],
  "agent-orchestration": [
    "iz kaydı",
    "onay kapısı",
    "atıf şeridi",
  ],
  "bio-synthetic": [
    "zar halkası",
    "hücre kümesi",
    "kültür etiketi",
  ],
  "nanotech": [
    "karbon kafes",
    "nanometre ölçü",
    "monokrom accent",
  ],
  "planetary-service": [
    "gezegen servis operasyonları",
    "yörünge ve pencere panosu",
    "görev telemetrisi",
  ],
  "quantum-lab": [
    "kuantum ve veri",
    "olasılık dağılımı",
    "ölçüm laboratuvarı",
  ],
  "retro-future": [
    "retro-fütürizm",
    "uzay çağı afişi",
    "krem ve hardal palet",
  ],
  "virtual-engine": [
    "sanal dünya ve oyun motoru",
    "viewport ve denetçi",
    "varlık hiyerarşisi",
  ],
  "zero-gravity": [
    "orbital ve sıfır yerçekimi",
    "yüzen panel düzeni",
    "ağırlıksız kartlar",
  ],
  "noir-estate": [
    "sinematik lüks emlak",
    "cam gezinme çubuğu",
    "altın ince çizgi",
  ],
  "agency-portfolio": [
    "ajans portfolyosu",
    "dev tipografi indeksi",
    "elektrik mavi blok",
  ],
  "product-launch": [
    "ürün lansmanı",
    "spotlight hero",
    "mint accent",
  ],
  "boutique-hotel": [
    "butik otel vitrini",
    "terracotta vurgu",
    "yumuşak serif",
  ],
  "lookbook-editorial": [
    "moda lookbook",
    "dergi sayfası",
    "kiremit ince çizgi",
  ],
  "dark-dashboard": [
    "koyu saas paneli",
    "cyan veri vurgusu",
    "grafit ızgara",
  ],
  /* <<< apply-fragments:keywords <<< */

};

export const DEMOS = {
  "bento-grid": `      <div class="bento">
        <div class="panel b-a"><span class="lbl">gelir</span><div class="big">₺84.2k</div></div>
        <div class="panel b-b"><span class="lbl">trend</span><div class="big">+12%</div></div>
        <div class="panel b-c"><span class="lbl">aktif kullanıcı</span><div class="big">1.204</div></div>
        <div class="panel b-d"><span class="lbl">not</span><span class="demo-text" style="margin:0;font-size:10px">Hedefin %80'i tamam.</span></div>
      </div>`,
  "swiss-design": `      <div class="swiss">
        <div class="lbl">01 — bölüm</div>
        <h3 class="swiss-t">Tasarım bir<br>sistemdir</h3>
        <div class="rule"></div>
        <p class="demo-text">Sola dayalı, ızgaraya oturan metin. Sağ kenar serbest kalır.</p>
      </div>`,
  "editorial-design": `      <div class="panel">
        <div class="lbl">deneme · 12 dk okuma</div>
        <h3 class="demo-title" style="font-size:23px">Kâğıdın sessizliği</h3>
        <p class="ed-p"><span class="cap">B</span>ir zamanlar metin ekranda nefes alırdı; kolonlar, dipnotlar ve satır aralıkları okuru yavaşlatırdı.</p>
      </div>`,
  "luxury-typography": `      <div class="lux">
        <div class="lbl" style="letter-spacing:.32em">maison · 1924</div>
        <h3 class="lux-t">Sessiz<br>lüks</h3>
        <div class="hair"></div>
        <button class="btn ghost">Koleksiyonu gör</button>
      </div>`,
  "glassmorphism": `      <div class="panel">
        <div class="row"><span class="dot"></span><span class="lbl">şimdi çalıyor</span></div>
        <h3 class="demo-title">Night Drive</h3>
        <p class="demo-text">Cam panel, arkasındaki renkli zemini bulanıklaştırır.</p>
        <div class="row"><button class="btn">Oynat</button><span class="chip">24 bit</span></div>
      </div>`,
  "liquid-glass": `      <div class="panel">
        <div class="row"><span class="dot"></span><span class="lbl">kontrol</span></div>
        <h3 class="demo-title">Ses seviyesi</h3>
        <input class="field" placeholder="Ara…" aria-label="demo arama">
        <div class="row"><button class="btn">Uygula</button><span class="chip">canlı</span></div>
      </div>`,
  "neumorphism": `      <div class="panel">
        <div class="lbl" style="text-align:center;display:block">ses</div>
        <div class="knob"></div>
        <div class="row" style="justify-content:center">
          <button class="btn neu-press">açık</button>
          <button class="btn ghost">kapalı</button>
        </div>
      </div>`,
  "pixel-art": `      <div class="panel px">
        <div class="lbl">oyun · 1987</div>
        <h3 class="demo-title">YÜKSEK SKOR</h3>
        <div class="px-num">013370</div>
        <button class="btn">▶ BAŞLA</button>
      </div>`,
  "cybercore": `      <div class="panel">
        <div class="lbl">~/system</div>
        <pre class="term-l">$ status --all
[ok]   gateway
[ok]   worker-03
[warn] queue: 412</pre>
      </div>`,
  "cyberpunk": `      <div class="panel">
        <div class="lbl">// sektör 7</div>
        <h3 class="demo-title">ECZANE</h3>
        <p class="demo-text">Neon kenar, koyu beton, mono etiket.</p>
        <div class="row"><button class="btn">GİRİŞ</button><span class="chip">uyarı</span></div>
      </div>`,
  "scrapbook": `      <div class="scrap">
        <span class="tape"></span>
        <div class="polaroid"><div class="ph"></div><span class="hand">yaz 2026</span></div>
        <div class="panel"><div class="lbl">kayıt</div><h3 class="demo-title" style="font-size:15px">İzmir</h3></div>
        <p class="hand-note">bunu hatırla</p>
      </div>`,
  "art-deco": `      <div class="deco"><div class="deco-frame">
        <span class="lbl">est. 1925</span>
        <h3 class="deco-t">GRAND</h3>
        <div class="deco-line"></div>
        <span class="lbl">otel · istanbul</span>
      </div></div>`,
  "memphis": `      <div class="mem">
        <span class="shapes"><i></i><i></i><i></i></span>
        <div class="panel">
          <div class="lbl">etkinlik</div>
          <h3 class="demo-title">Piksel Parti</h3>
          <p class="demo-text">Geometri, kontur ve neşe.</p>
          <div class="row"><button class="btn">Bilet al</button><span class="chip">18+</span></div>
        </div>
      </div>`,
  "victorian": `      <div class="vic">
        <div class="orn">❦ ❦ ❦</div>
        <div class="d-rule"></div>
        <div class="lbl">cilt iii · bölüm 4</div>
        <h3 class="demo-title">Karanlık<br>Kütüphane</h3>
        <div class="d-rule"></div>
        <span class="lbl">1851</span>
      </div>`,
  "acid-graphics": `      <div class="panel" style="background:transparent;border-color:var(--line);box-shadow:none">
        <div class="glitch"><b>ACID</b><b>NIGHT</b></div>
        <p class="demo-text" style="margin-top:10px">Distortion, krom ve asit yeşili.</p>
        <button class="btn">GİRİŞ</button>
      </div>`,
  "anti-design": `      <div class="panel" style="transform:rotate(-1.5deg);box-shadow:var(--shadow-hard)">
        <div class="lbl">sayı 04</div>
        <h3 class="demo-title" style="font-size:26px;line-height:.9">KURALLARI<br>KIR</h3>
        <p class="demo-text">Kaosun da bir ritmi vardır.</p>
        <button class="btn">devam →</button>
      </div>`,
  "y2k": `      <div class="panel">
        <div class="lbl">y2k · 2001</div>
        <h3 class="demo-title" style="font-size:20px">FUTURE<br>IS HERE</h3>
        <p class="demo-text">Krom, parlak plastik, buz mavisi.</p>
        <button class="btn">Giriş</button>
      </div>`,
  "frutiger-aero": `      <div class="panel">
        <div class="lbl">aero · 2007</div>
        <h3 class="demo-title" style="font-size:20px">Daha temiz<br>bir yarın</h3>
        <p class="demo-text">Parlak cam, su damlası, gök mavisi.</p>
        <button class="btn">Başla</button>
      </div>`,
  "synthwave": `      <div class="panel">
        <div class="lbl">outrun · 1984</div>
        <h3 class="demo-title" style="text-transform:uppercase;letter-spacing:.14em">Neon<br>Drive</h3>
        <div class="row"><button class="btn">Oyna</button><span class="chip">vhs</span></div>
      </div>`,
  "vaporwave": `      <div class="panel">
        <div class="lbl">aesthetic · 1995</div>
        <h3 class="demo-title" style="letter-spacing:.22em;font-weight:400">ＡＥＳＴＨＥＴＩＣ</h3>
        <p class="demo-text">Soluk mor, palmiye, yavaşlık.</p>
        <button class="btn ghost">dinle</button>
      </div>`,
  "skeuomorphism": `      <div class="panel">
        <div class="lbl">panel · ahşap</div>
        <h3 class="demo-title">Amfi</h3>
        <div class="row" style="justify-content:center;margin:10px 0">
          <button class="btn">−</button>
          <div class="knob" style="width:52px;height:52px;margin:0"></div>
          <button class="btn">+</button>
        </div>
        <button class="btn ghost">Sıfırla</button>
      </div>`,
  "ethereal": `      <div class="panel">
        <div class="lbl">nefes · 4-7-8</div>
        <h3 class="demo-title" style="font-weight:400">şimdi</h3>
        <p class="demo-text">Sis, ışık ve yumuşak geçişler.</p>
        <button class="btn ghost">başla</button>
      </div>`,
  "wabi-sabi": `      <div class="panel">
        <div class="lbl">not · 12 mart</div>
        <h3 class="demo-title" style="font-weight:400">Eksik kalan</h3>
        <p class="ed-p">Kusuru saklamayan bir defter; soluk çizgiler, kil tonları.</p>
      </div>`,
  "minimalism": `      <div class="panel">
        <div class="lbl">sadelik · 01</div>
        <h3 class="demo-title">Sessiz Alan</h3>
        <p class="demo-text">Gereksiz her ayrıntı elendi; yalnızca boşluk ve ritim.</p>
        <button class="btn">Keşfet</button>
      </div>`,
  "japandi": `      <div class="panel">
        <div class="lbl">dinginlik · ev</div>
        <h3 class="demo-title" style="font-weight:400">Doğal Denge</h3>
        <p class="demo-text">Ahşap sıcaklığı ve ölçülü boşlukla nefes alan arayüz.</p>
        <div class="row"><button class="btn ghost">İncele</button><span class="chip">organik</span></div>
      </div>`,
  "claymorphism": `      <div class="panel">
        <div class="row"><span class="dot"></span><span class="lbl">seviye 02</span></div>
        <h3 class="demo-title">Pofuduk</h3>
        <p class="demo-text">Yumuşak gölgeler, şişkin butonlar ve pastel dokunuşlar.</p>
        <button class="btn">Topla +50</button>
      </div>`,
  "aurora-ui": `      <div class="panel">
        <div class="row"><span class="dot"></span><span class="lbl">aurora · canlı</span></div>
        <h3 class="demo-title">Kuzey Işığı</h3>
        <p class="demo-text">Koyu zemin üzerinde parlayan akışkan renk gradyanları.</p>
        <div class="row"><button class="btn">Bağlan</button><span class="chip">aktarım</span></div>
      </div>`,
  "neo-brutalism": `      <div class="panel">
        <div class="lbl">// duyuru</div>
        <h3 class="demo-title" style="text-transform:uppercase">DURMA, YAP!</h3>
        <p class="demo-text">Kalın siyah kontur, sert ofset gölge ve saf enerji.</p>
        <button class="btn" style="border:2px solid var(--line)">Hemen Başla →</button>
      </div>`,
  "maximalism": `      <div class="panel">
        <div class="lbl">koleksiyon · no. 88</div>
        <h3 class="demo-title">Bolluğun Ritmi</h3>
        <p class="demo-text">Katman katman desenler, cesur renkler ve zengin detaylar.</p>
        <div class="row"><button class="btn">Daha Fazla</button><button class="btn ghost">Arşiv</button></div>
      </div>`,
  "dopamine-ui": `      <div class="panel">
        <div class="row"><span class="dot"></span><span class="lbl">günlük seri · 5 gün</span></div>
        <h3 class="demo-title">Harika Gidiyorsun!</h3>
        <p class="demo-text">Canlı renkler ve mikro ödüllerle motive eden etkileşim.</p>
        <button class="btn">Ödülü Al ✨</button>
      </div>`,
  "surrealism": `      <div class="panel">
        <div class="lbl">düş · no. 09</div>
        <h3 class="demo-title">Gerçeğin Ötesi</h3>
        <p class="demo-text">Beklenmedik ölçekler ve tanıdık nesnelerin rüya kolajı.</p>
        <div class="row"><button class="btn">Adım At</button><span class="chip">paradoks</span></div>
      </div>`,
  "bohemian": `      <div class="panel">
        <div class="lbl">seyyah · günlük</div>
        <h3 class="demo-title" style="font-weight:400">Yol Hikâyesi</h3>
        <p class="demo-text">Toprak tonları, dokulu yüzeyler ve özgür bir ruh.</p>
        <div class="row"><button class="btn">Kervana Katıl</button><span class="chip">el yapımı</span></div>
      </div>`,
  "conceptual-sketch": `      <div class="panel">
        <div class="lbl">taslak · v0.3</div>
        <h3 class="demo-title">Fikir Notları</h3>
        <p class="demo-text">Kâğıt üstünde tel kafes; oklar, notlar ve ham düşünceler.</p>
        <div class="row"><button class="btn ghost">çizmeye devam</button><span class="chip">taslak</span></div>
      </div>`,
  "dark-academia": `      <div class="panel">
        <div class="lbl">arşiv · cilt vii</div>
        <h3 class="demo-title" style="font-weight:400">Eski Yazmalar</h3>
        <p class="demo-text">Mum ışığında deri ciltler, mürekkep kokusu ve kadim bilgi.</p>
        <div class="row"><button class="btn">İncele</button><span class="chip">1884</span></div>
      </div>`,
  "bauhaus": `      <div class="panel">
        <div class="row"><span class="dot"></span><span class="lbl">weimar · 1919</span></div>
        <h3 class="demo-title" style="text-transform:uppercase">BİÇİM VE İŞLEV</h3>
        <p class="demo-text">Temel geometrik formlar, asimetrik denge ve sıfır süs.</p>
        <button class="btn" style="border:2px solid var(--line)">Atölye →</button>
      </div>`,
  "constructivism": `      <div class="panel" style="border-width:3px">
        <div class="row"><span class="dot" style="border-radius:0"></span><span class="lbl">moskova · 1923</span></div>
        <h3 class="demo-title" style="text-transform:uppercase;font-size:22px;letter-spacing:-.01em">Sanat Hayata</h3>
        <div style="height:6px;background:var(--accent);transform:rotate(-4deg);margin:8px -6px 10px"></div>
        <p class="demo-text">Kırmızı–siyah montaj, kalın diagonal çubuk, radius yok.</p>
        <button class="btn" style="border:3px solid var(--line)">Afişi gör →</button>
      </div>`,
  "kinetic-type": `      <div class="panel" style="border-radius:4px;padding:14px">
        <div class="row"><span class="dot" style="border-radius:2px"></span><span class="lbl">poster · 37</span></div>
        <h3 class="demo-title" style="text-transform:uppercase;font-size:30px;line-height:.94;letter-spacing:-.03em">Hareket eden tipografi</h3>
        <div style="height:6px;background:var(--accent);transform:rotate(-6deg);margin:10px -8px"></div>
        <p class="demo-text">28→96px atlama, 0.92 satır aralığı, tek asit vurgu; gölge yok.</p>
        <button class="btn" style="border-radius:2px;text-transform:uppercase;letter-spacing:.18em;font-size:10px">Başla →</button>
      </div>`,
  "organic-bio": `      <div class="panel" style="border-radius:26px 26px 26px 8px">
        <div class="row"><span class="dot" style="border-radius:42% 58% 55% 45%/52% 45% 55% 48%"></span><span class="lbl">sera · sabah</span></div>
        <h3 class="demo-title">Yaprak gibi nefes alan arayüz</h3>
        <p class="demo-text">Asimetrik yumuşak radius, toprak–yeşil palet, tek yumuşak gölge.</p>
        <div class="row"><button class="btn" style="border-radius:999px">Filizlen →</button><span class="chip" style="border-radius:999px">yeni</span></div>
      </div>`,
  "scandinavian-dark": `      <div class="panel" style="border-radius:10px;box-shadow:none">
        <div class="row"><span class="dot" style="border-radius:2px"></span><span class="lbl">kuzey · sabah</span></div>
        <h3 class="demo-title" style="font-weight:400;letter-spacing:-.005em">Sessiz bir çalışma alanı</h3>
        <p class="demo-text">Mat koyu yüzey, 1px hairline ve liken aksan; süs yok, boşluk var.</p>
        <div class="row"><button class="btn" style="border-radius:6px">Başla</button><button class="btn ghost" style="border-radius:6px">Geri</button><span class="chip" style="border-radius:4px">yeni</span></div>
      </div>`,
  "grand-tourer": `      <div class="panel" style="border-radius:6px;padding:16px">
        <div class="row"><span class="dot" style="border-radius:50%"></span><span class="lbl">kadran · 1962</span></div>
        <h3 class="demo-title" style="font-weight:400;text-transform:uppercase;letter-spacing:.09em;font-size:20px">Krem deri, krom hairline</h3>
        <p class="demo-text">Tek yeşil vurgu, mono sayaç rakamı ve 1px krom parlama; koyu blok gölge yok.</p>
        <div class="row"><button class="btn" style="border-radius:3px;font-family:var(--font-mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase">Randevu al</button><span class="chip" style="border-radius:2px;background:transparent;font-family:var(--font-mono);font-size:8.5px">3+1 · 240 m²</span></div>
      </div>`,
  "grand-tourer-oxblood": `      <div class="panel" style="border-radius:6px;padding:16px">
        <div class="row"><span class="dot" style="border-radius:50%"></span><span class="lbl">oxblood · 1962</span></div>
        <h3 class="demo-title" style="font-weight:400;text-transform:uppercase;letter-spacing:.09em;font-size:20px">Kulüp derisi, krom çizgi</h3>
        <p class="demo-text">Bordo tek vurgu, sıcak krem zemin, mono sayaç; hata rengi ayrı tutulur.</p>
        <div class="row"><button class="btn" style="border-radius:3px;font-family:var(--font-mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase">Randevu al</button><span class="chip" style="border-radius:2px;background:transparent;font-family:var(--font-mono);font-size:8.5px">4+1 · 310 m²</span></div>
      </div>`,
  "grand-tourer-midnight": `      <div class="panel" style="border-radius:6px;padding:16px">
        <div class="row"><span class="dot" style="border-radius:50%"></span><span class="lbl">midnight · 1962</span></div>
        <h3 class="demo-title" style="font-weight:400;text-transform:uppercase;letter-spacing:.09em;font-size:20px">Gece mavisi, krom çizgi</h3>
        <p class="demo-text">Serin krem zemin, mavi-siyah metin, lacivert tek vurgu; cam ve glow yok.</p>
        <div class="row"><button class="btn" style="border-radius:3px;font-family:var(--font-mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase">Randevu al</button><span class="chip" style="border-radius:2px;background:transparent;font-family:var(--font-mono);font-size:8.5px">3+1 · 240 m²</span></div>
      </div>`,
  "ai-native-mesh": `      <div class="panel" style="border-radius:22px">
        <div class="row"><span class="dot"></span><span class="lbl">mesh · oturum</span></div>
        <h3 class="demo-title" style="font-weight:600;letter-spacing:-.01em">Atmosfer ile içerik ayrı katman</h3>
        <p class="demo-text">İki katmanlı mesh, cam kart ve tek üst parlaklık; tipografi nötr ve sakin.</p>
        <div class="row"><button class="btn">Devam</button><button class="btn ghost">Geri</button><span class="chip">yeni</span></div>
      </div>`,
};
