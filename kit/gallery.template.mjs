/**
 * kit/gallery.template.mjs — galeri HTML iskeleti ve kart markup'ı.
 *
 * Sorumluluk ayrımı:
 *   - bu dosya   : sunucu tarafı HTML üretimi (kart, araç çubuğu, filtre paneli, çekmece kabuğu)
 *   - gallery.js : tüm etkileşim (arama, filtre, sıralama, çekmece, kopyalama, URL state)
 *   - gallery.css: görünüm
 *
 * Kart başına görsel sayısı 1'dir (önce 27 `<a class="shot">` gömülüyordu, HTML 687 KB'tı).
 * Kalan kareler `#style-data` JSON'undan çekmecede ve lightbox'ta üretilir.
 */

export const SHOT_LABELS = {
  '01': 'Landing',
  '02': 'Dashboard',
  '03': 'Mobil',
  '04': 'Bileşenler',
  '05': 'Do / Don’t',
};

const INDUSTRY_LABELS = {
  saas: 'SaaS',
  emlak: 'Emlak',
  danismanlik: 'Danışmanlık',
  egitim: 'Eğitim',
  eticaret: 'E-ticaret',
  dergi: 'Dergi',
  ajans: 'Ajans',
  saglik: 'Sağlık',
};

const TONE_LABELS = { sicak: 'Sıcak', soguk: 'Soğuk', yesil: 'Yeşil', notr: 'Nötr' };

export function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** `## AI brief` altındaki ilk kod bloğu = ajana verilecek prompt. */
export function briefOf(md) {
  const m = md.match(/^##\s+AI brief\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/m);
  if (!m) return '';
  const fenced = m[1].match(/```[a-z]*\n([\s\S]*?)```/);
  return (fenced ? fenced[1] : m[1]).trim();
}

export const shotLabel = (file) =>
  SHOT_LABELS[file.slice(0, 2)] ?? file.replace(/\.[a-z]+$/i, '');

/** Çekmece + lightbox + filtrelerin tek veri kaynağı. */
export function styleData(styles, ctx) {
  const { familyOf, darkState, hueBucket, KEYWORDS, DEMOS, DEFAULT_DEMO } = ctx;
  return styles.map((s) => {
    const industry = (s.tokensJson?.industries ?? [])[0] ?? 'saas';
    const accent = s.tokensJson?.palette?.accent ?? s.vars.accent;
    return {
      slug: s.slug,
      num: s.num,
      name: s.name,
      dir: s.dirName,
      family: familyOf(s.num),
      tag: s.tag,
      tags: KEYWORDS[s.slug] ?? [],
      industry,
      tone: hueBucket(accent),
      dark: darkState(s.slug),
      shots: s.shots,
      swatch: {
        bg: s.vars.bg,
        surface: s.vars.surface,
        ink: s.vars.ink,
        accent,
      },
      meta: {
        feel: s.meta?.['Hissiyat'] ?? '',
        best: s.meta?.['En iyi'] ?? '',
        avoid: s.meta?.['Kaçın'] ?? '',
        difficulty: s.meta?.['Zorluk'] ?? '',
      },
      must: s.tokensJson?.must ?? [],
      mustNot: s.tokensJson?.mustNot ?? [],
      neighbors: s.tokensJson?.neighbors ?? [],
      brief: briefOf(s.md),
      demo: DEMOS[s.slug] ?? DEFAULT_DEMO,
    };
  });
}

function swatchDots(s) {
  const v = s.swatch;
  return `<span class="sw" style="background:${esc(v.bg)}" title="bg ${esc(v.bg)}"></span>` +
    `<span class="sw" style="background:${esc(v.surface)}" title="surface ${esc(v.surface)}"></span>` +
    `<span class="sw" style="background:${esc(v.ink)}" title="ink ${esc(v.ink)}"></span>` +
    `<span class="sw" style="background:${esc(v.accent)}" title="accent ${esc(v.accent)}"></span>`;
}

function card(s) {
  const cover = s.shots[0] ?? '01-landing.png';
  const rel = `../styles/${s.dir}/shots/${cover}`;
  const label = shotLabel(cover);
  const sub = [s.family, ...s.tags.slice(0, 2)].join(' · ');
  return `
      <article class="card" data-slug="${esc(s.slug)}" data-family="${esc(s.family)}" data-industry="${esc(s.industry)}" data-tone="${esc(s.tone)}" data-dark="${esc(s.dark)}" tabindex="-1">
        <a class="cover" href="${rel}" aria-label="${esc(s.name)} — ${esc(label)} görselini büyüt">
          <img src="${rel}" alt="${esc(s.name)} — ${esc(label)}" loading="lazy" decoding="async">
          <span class="cover-l">${esc(label)}</span>
        </a>
        <div class="card-b">
          <div class="card-t">
            <span class="num">${esc(s.num)}</span>
            <h2>${esc(s.name)}</h2>
          </div>
          <p class="card-sub">${esc(sub)}</p>
          <div class="card-a">
            <span class="sw-mini" aria-hidden="true">${swatchDots(s)}</span>
            <button type="button" class="act" data-act="fav" aria-pressed="false" aria-label="Favorilere ekle: ${esc(s.name)}" title="Favori (s)">★</button>
            <button type="button" class="act" data-act="copy" aria-label="data-style kopyala: ${esc(s.slug)}" title="data-style kopyala (c)">⧉</button>
            <button type="button" class="act" data-act="cmp" aria-pressed="false" aria-label="Karşılaştırmaya ekle: ${esc(s.name)}" title="Karşılaştır (⇄)">⇄</button>
            <button type="button" class="act" data-act="open" aria-label="Detayı aç: ${esc(s.name)}" title="Detay (Enter)">⊕</button>
          </div>
        </div>
      </article>`;
}

function chipRow(kind, label, buttons) {
  return `
          <div class="frow" role="group" aria-label="${esc(label)}">
            <span class="frow-h">${esc(label)}</span>
            <div class="chips" data-kind="${esc(kind)}">${buttons}</div>
          </div>`;
}

export function galleryHtml(styles, ctx) {
  const data = styleData(styles, ctx);
  const count = (key) => {
    const m = new Map();
    for (const s of data) m.set(s[key], (m.get(s[key]) ?? 0) + 1);
    return m;
  };

  const famCount = count('family');
  const fams = ctx.families
    .map(([name]) => `<button type="button" class="chip" data-fam="${esc(name)}" aria-pressed="false">${esc(name)}<i>${famCount.get(name) ?? 0}</i></button>`)
    .join('');

  const indCount = count('industry');
  const inds = [...indCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id, n]) => `<button type="button" class="chip" data-ind="${esc(id)}" aria-pressed="false">${esc(INDUSTRY_LABELS[id] ?? id)}<i>${n}</i></button>`)
    .join('');

  const toneCount = count('tone');
  const tones = [...toneCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id, n]) => `<button type="button" class="chip" data-tone="${esc(id)}" aria-pressed="false">${esc(TONE_LABELS[id] ?? id)}<i>${n}</i></button>`)
    .join('');

  const sceneFiles = [...new Set(data.flatMap((s) => s.shots))].sort();
  const scenes = sceneFiles
    .map((file) => `<button type="button" class="chip scn" data-scene="${esc(file)}" aria-pressed="false">${esc(ctx.sceneLabels?.[file] ?? shotLabel(file))}</button>`)
    .join('');

  const darkN = data.filter((s) => s.dark === 'applied').length;

  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tasarım Stilleri · Görsel Katalog (${data.length})</title>
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="gallery.css">
</head>
<body>
  <header class="top">
    <div class="wrap top-in">
      <h1>Tasarım Stilleri <span class="kicker">${data.length} stil</span></h1>
      <details class="top-help">
        <summary>Nasıl kullanılır?</summary>
        <div class="help-body">
          <p>Uygulamaya almak için kök elemana stili yaz:</p>
          <p><code>&lt;html data-style="bento-grid"&gt;</code> + <code>kit/tokens.css</code></p>
          <ul>
            <li>${data.length} stil · ${darkN} koyu mod · ${sceneFiles.length} sahne tipi</li>
            <li>Her kartın <b>⊕</b> düğmesi: token CSS, AI brief, tüm kareler</li>
            <li><b>⧉</b> data-style'ı panoya kopyalar, <b>★</b> kısa listeye ekler</li>
          </ul>
          <p class="kbd-hint">
            <kbd>/</kbd> ara · <kbd>f</kbd> filtre · <kbd>j</kbd><kbd>k</kbd> gez ·
            <kbd>Enter</kbd> detay · <kbd>c</kbd> kopyala · <kbd>s</kbd> yıldız · <kbd>Esc</kbd> kapat
          </p>
        </div>
      </details>
    </div>
  </header>

  <div class="bar" id="bar">
    <div class="wrap bar-in">
      <div class="bar-row">
        <div class="search">
          <svg class="search-icon" viewBox="0 0 20 20" aria-hidden="true"><circle cx="9" cy="9" r="6"></circle><path d="M13.4 13.4 17 17"></path></svg>
          <input id="q" type="search" placeholder="Stil, his veya etiket ara…" aria-label="Stil ara" autocomplete="off" spellcheck="false">
          <button type="button" class="qclear" id="qclear" hidden aria-label="Aramayı temizle">×</button>
          <kbd class="search-kbd" aria-hidden="true">/</kbd>
        </div>
        <button type="button" class="btn-f" id="fbtn" aria-expanded="false" aria-controls="fpanel">
          Filtre<span class="badge" id="fcount" hidden>0</span>
        </button>
        <div class="sortwrap">
          <label for="sort">Sıra</label>
          <select id="sort">
            <option value="num">Numara</option>
            <option value="name">İsim</option>
            <option value="family">Aile</option>
          </select>
        </div>
        <button type="button" class="btn-f ghost" id="favbtn" aria-pressed="false" title="Yalnız favoriler">★<span class="badge" id="favcount" hidden>0</span></button>
        <p class="count" id="count" role="status" aria-live="polite">${data.length} / ${data.length}</p>
      </div>
      <div class="activebar" id="active" hidden></div>
      <div class="fpanel" id="fpanel" hidden>
        <div class="fpanel-in">
          ${chipRow('fam', 'Aile', fams)}
          ${chipRow('ind', 'Sektör', inds)}
          ${chipRow('tone', 'Ton', tones)}
          <div class="frow" role="group" aria-label="Kapak sahnesi">
            <span class="frow-h">Kapak</span>
            <div class="chips" data-kind="scene">
              ${scenes}
            </div>
          </div>
          <div class="fpanel-f">
            <span id="fsum">Filtre yok</span>
            <button type="button" class="linkbtn" id="fclear">Filtreleri temizle</button>
            <button type="button" class="linkbtn" id="fclose">Kapat</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="wrap">
    <div class="grid" id="grid">${data.map(card).join('\n')}
    </div>
    <p class="empty" id="empty" hidden>
      Eşleşen stil yok. <button type="button" class="linkbtn" id="emptyReset">Filtreleri temizle</button>
    </p>
  </main>

  <div class="cmpbar" id="cmpbar" hidden>
    <span id="cmpcount">0 seçili</span>
    <button type="button" id="cmpGo" class="cmpbtn" disabled>Karşılaştır</button>
    <button type="button" id="cmpClear" class="cmpbtn ghost">Temizle</button>
  </div>

  <div class="drawer" id="drawer" hidden>
    <button type="button" class="drawer-scrim" data-close aria-label="Kapat"></button>
    <aside class="drawer-p" role="dialog" aria-modal="true" aria-labelledby="dTitle" tabindex="-1">
      <div class="drawer-body" id="dBody"></div>
    </aside>
  </div>

  <div class="cmpview" id="cmpview" hidden role="dialog" aria-modal="true" aria-label="Stil karşılaştırma">
    <header>
      <h2 id="cmpTitle">Karşılaştırma</h2>
      <button type="button" id="cmpClose" class="lb-close" aria-label="Kapat">×</button>
    </header>
    <div class="cmpgrid" id="cmpGrid"></div>
    <p class="cmpnote">Aynı sahne, farklı stiller. Sahne seçimi galerideki «Kapak» çubuğundan gelir; kartlarda ⇄ ile 2–4 stil seç.</p>
  </div>

  <div class="lb" id="lb" hidden role="dialog" aria-modal="true" aria-label="Görsel önizleme">
    <button type="button" class="lb-close" id="lbClose" aria-label="Kapat">×</button>
    <button type="button" class="lb-nav prev" id="lbPrev" aria-label="Önceki">‹</button>
    <button type="button" class="lb-nav next" id="lbNext" aria-label="Sonraki">›</button>
    <img id="lbImg" alt="">
    <p class="lb-cap" id="lbCap"></p>
  </div>

  <div class="toast" id="toast" role="status" aria-live="polite" hidden></div>

<script type="application/json" id="style-data">${JSON.stringify({ labels: ctx.sceneLabels ?? {}, styles: data }).replace(/</g, '\\u003c')}</script>
<script src="gallery.js" defer></script>
</body>
</html>
`;
}
