/**
 * kit/gallery.template.mjs — gallery HTML skeleton and card markup.
 *
 * Separation of responsibilities:
 * - this file : server side HTML generation (card, toolbar, filter panel, drawer shell)
 * - gallery.js : all interaction (search, filter, sort, drawer, copy, URL state)
 * - gallery.css: view
 *
 * Number of images per card is 1 (previously 27 `<a class="shot">` were embedded, HTML was 687 KB).
 * The remaining frames are generated in drawer and lightbox from `#style-data` JSON.*/

export const SHOT_LABELS = {
  '01': 'Landing',
  '02': 'Dashboard',
  '03': 'Mobil',
  '04': 'Components',
  '05': 'Do / Don’t',
};

const INDUSTRY_LABELS = {
  saas: 'SaaS',
  emlak: 'Emlak',
  danismanlik: 'Consulting',
  egitim: 'Education',
  eticaret: 'E-ticaret',
  dergi: 'Dergi',
  ajans: 'Ajans',
  saglik: 'health',
};

const TONE_LABELS = { sicak: 'hot', soguk: 'cold', yesil: 'Green', notr: 'neutral' };

export function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** First block of code under `## AI brief` = prompt to be given to the agent.*/
export function briefOf(md) {
  const m = md.match(/^##\s+AI brief\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/m);
  if (!m) return '';
  const fenced = m[1].match(/```[a-z]*\n([\s\S]*?)```/);
  return (fenced ? fenced[1] : m[1]).trim();
}

export const shotLabel = (file) =>
  SHOT_LABELS[file.slice(0, 2)] ?? file.replace(/\.[a-z]+$/i, '');

/** Single data source of drawer + lightbox + filters.*/
export function styleData(styles, ctx) {
  const { familyOf, hueBucket, KEYWORDS, DEMOS, DEFAULT_DEMO } = ctx;
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
      shots: s.shots,
      swatch: {
        bg: s.vars.bg,
        surface: s.vars.surface,
        ink: s.vars.ink,
        accent,
      },
      meta: {
        feel: s.meta?.['Feeling'] ?? '',
        best: s.meta?.['Best for'] ?? '',
        avoid: s.meta?.['Avoid'] ?? '',
        difficulty: s.meta?.['Difficulty'] ?? '',
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
  const cover = s.shots[0] ?? '01-page.png';
  const rel = `../styles/${s.dir}/shots/${cover}`;
  const label = shotLabel(cover);
  const sub = [s.family, ...s.tags.slice(0, 2)].join(' · ');
  return `
      <article class="card" data-slug="${esc(s.slug)}" data-num="${esc(s.num)}" data-family="${esc(s.family)}" data-industry="${esc(s.industry)}" data-tone="${esc(s.tone)}" tabindex="-1">
        <a class="cover" href="${rel}" aria-label="${esc(s.name)} — enlarge image ${esc(label)}">
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
            <button type="button" class="act" data-act="fav" aria-pressed="false" aria-label="Add to favorites: ${esc(s.name)}" title="Favori (s)">★</button>
            <button type="button" class="act" data-act="copy" aria-label="copy data-style: ${esc(s.slug)}" title="copy data-style (c)">⧉</button>
            <button type="button" class="act" data-act="cmp" aria-pressed="false" aria-label="Add to comparison: ${esc(s.name)}" title="Compare (⇄)">⇄</button>
            <button type="button" class="act" data-act="open" aria-label="Open detail: ${esc(s.name)}" title="Detay (Enter)">⊕</button>
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


  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Design Styles · Visual Catalog (${data.length})</title>
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="gallery.css">
</head>
<body>
  <header class="top">
    <div class="wrap top-in">
      <h1>Design Styles<span class="kicker">${data.length} style</span></h1>
      <details class="top-help">
        <summary>How to use?</summary>
        <div class="help-body">
          <p>To implement it, write the style to the root element:</p>
          <p><code>&lt;html data-style="bento-grid"&gt;</code> + <code>kit/tokens.css</code></p>
          <ul>
            <li>${data.length} style · single page image per style (1280×2400)</li>
            <li>of each card<b>⊕</b>button: token CSS, AI brief, all frames</li>
            <li><b>⧉</b>copies the data-style to the clipboard,<b>★</b>adds to shortlist</li>
            <li>The search box number also accepts:<code>152</code>single style,<code>152-171</code>filters the range</li>
            <li>The catalog is paginated: 60 cards per page, with page numbers at the bottom (URL:<code>?page=2</code>)</li>
          </ul>
          <p class="kbd-hint">
            <kbd>/</kbd>search ·<kbd>f</kbd>filter ·<kbd>j</kbd><kbd>k</kbd> move · <kbd>[</kbd><kbd>]</kbd> page ·
            <kbd>Enter</kbd> detay · <kbd>c</kbd>copy ·<kbd>s</kbd>star ·<kbd>Esc</kbd> kapat
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
          <input id="q" type="search" placeholder="Search for style, label or number (152 152-171)…" aria-label="Search for style: name, label, number or number range" autocomplete="off" spellcheck="false">
          <button type="button" class="qclear" id="qclear" hidden aria-label="clear search">×</button>
          <kbd class="search-kbd" aria-hidden="true">/</kbd>
        </div>
        <button type="button" class="btn-f" id="fbtn" aria-expanded="false" aria-controls="fpanel">
          Filtre<span class="badge" id="fcount" hidden>0</span>
        </button>
        <div class="sortwrap">
          <label for="sort">sequence</label>
          <select id="sort">
            <option value="num">Numara</option>
            <option value="name">name</option>
            <option value="family">family</option>
          </select>
        </div>
        <button type="button" class="btn-f ghost" id="favbtn" aria-pressed="false" title="lonely favorites">★<span class="badge" id="favcount" hidden>0</span></button>
        <p class="count" id="count" role="status" aria-live="polite">${data.length} / ${data.length}</p>
      </div>
      <div class="activebar" id="active" hidden></div>
      <div class="fpanel" id="fpanel" hidden>
        <div class="fpanel-in">
          ${chipRow('fam', 'Aile', fams)}
          ${chipRow('ind', 'Sector', inds)}
          ${chipRow('tone', 'Ton', tones)}
          <div class="fpanel-f">
            <span id="fsum">no filter</span>
            <span class="fhint">Number: in the search box<b>152</b>or<b>152-171</b> yaz</span>
            <button type="button" class="linkbtn" id="fclear">Filtreleri temizle</button>
            <button type="button" class="linkbtn" id="fclose">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="wrap">
    <div class="grid" id="grid">${data.map(card).join('\n')}
    </div>
    <nav class="pager" id="pager" aria-label="Pagination" hidden>
      <button type="button" class="pbtn" id="pPrev" aria-label="Previous page">←</button>
      <div class="pnums" id="pNums"></div>
      <button type="button" class="pbtn" id="pNext" aria-label="Next page">→</button>
      <span class="pinfo" id="pInfo" role="status" aria-live="polite"></span>
    </nav>
    <p class="empty" id="empty" hidden>
      No matching style. <button type="button" class="linkbtn" id="emptyReset">Clear filters</button>
    </p>
  </main>

  <div class="cmpbar" id="cmpbar" hidden>
    <span id="cmpcount">0 selected</span>
    <button type="button" id="cmpGo" class="cmpbtn" disabled>Compare</button>
    <button type="button" id="cmpClear" class="cmpbtn ghost">Temizle</button>
  </div>

  <div class="drawer" id="drawer" hidden>
    <button type="button" class="drawer-scrim" data-close aria-label="Close"></button>
    <aside class="drawer-p" role="dialog" aria-modal="true" aria-labelledby="dTitle" tabindex="-1">
      <div class="drawer-body" id="dBody"></div>
    </aside>
  </div>

  <div class="cmpview" id="cmpview" hidden role="dialog" aria-modal="true" aria-label="Style comparison">
    <header>
      <h2 id="cmpTitle">Comparison</h2>
      <button type="button" id="cmpClose" class="lb-close" aria-label="Close">×</button>
    </header>
    <div class="cmpgrid" id="cmpGrid"></div>
    <p class="cmpnote">Same scene, different styles. Scene selection comes from the «Cover» bar in the gallery; Choose 2–4 styles with ⇄ on the cards.</p>
  </div>

  <div class="lb" id="lb" hidden role="dialog" aria-modal="true" aria-label="Visual preview">
    <button type="button" class="lb-close" id="lbClose" aria-label="Close">×</button>
    <button type="button" class="lb-nav prev" id="lbPrev" aria-label="Previous">‹</button>
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
