/* ============================================================
   gallery.js — stil kataloğu etkileşimi
   build-gallery.mjs `#style-data` JSON'unu gömer, bu dosya okur.
   Durum URL'de tutulur: ?q=&fam=&ind=&ton=&scene=&sort=&fav
   ============================================================ */
(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  // Türkçe + diakritik duyarsız arama: "golge" → "gölge", "sis" → "şiş"
  const norm = (v) =>
    String(v ?? '')
      .toLocaleLowerCase('tr')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ı/g, 'i');

  const RAW = JSON.parse($('#style-data').textContent);
  const DATA = RAW.styles;
  const SHOT_LABELS = RAW.labels ?? {};
  const bySlug = new Map(DATA.map((s) => [s.slug, s]));
  const cards = $$('.card');
  const cardOf = new Map(cards.map((c) => [c.dataset.slug, c]));

  const grid = $('#grid');
  const q = $('#q');
  const qclear = $('#qclear');
  const count = $('#count');
  const empty = $('#empty');
  const activebar = $('#active');
  const fbtn = $('#fbtn');
  const fpanel = $('#fpanel');
  const fcount = $('#fcount');
  const fsum = $('#fsum');
  const favbtn = $('#favbtn');
  const favcount = $('#favcount');
  const sortSel = $('#sort');
  const toastEl = $('#toast');

  const chipBtns = $$('.chip[data-fam], .chip[data-ind], .chip[data-tone], .chip[data-scene]');

  /* ---------------------------------------------------------- arama dizini */
  const hay = new Map(
    DATA.map((s) => [
      s.slug,
      norm(
        [
          s.name, s.slug, s.family, s.tag, s.industry, s.tone,
          ...s.tags, s.meta.feel, s.meta.best, s.meta.avoid,
          ...s.must, ...s.mustNot,
        ].join(' '),
      ),
    ]),
  );

  /* -------------------------------------------------------------- favoriler */
  const FAV_KEY = 'stylelab.fav.v1';
  const loadFavs = () => {
    try {
      const raw = JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]');
      return new Set(Array.isArray(raw) ? raw.filter((x) => bySlug.has(x)) : []);
    } catch {
      return new Set();
    }
  };
  let favs = loadFavs();
  const saveFavs = () => {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify([...favs]));
    } catch {
      /* gizli mod / kota: sessiz geç, oturum içi çalışmaya devam */
    }
  };

  /* ------------------------------------------------------------------ durum */
  const state = { q: '', fam: '', ind: '', ton: '', scene: '', sort: 'num', fav: false };

  const FILTER_KEYS = ['fam', 'ind', 'ton'];
  const activeCount = () =>
    FILTER_KEYS.filter((k) => state[k]).length + (state.scene ? 1 : 0) + (state.q ? 1 : 0) + (state.fav ? 1 : 0);

  /* ------------------------------------------------------- kart sıralama */
  const sortValue = (s) => {
    if (state.sort === 'name') return norm(s.name);
    if (state.sort === 'family') return norm(s.family) + ' ' + s.num;
    return s.num;
  };
  const ordered = [...DATA].sort((a, b) => (sortValue(a) < sortValue(b) ? -1 : sortValue(a) > sortValue(b) ? 1 : 0));
  const rank = new Map(ordered.map((s, i) => [s.slug, i]));

  /* ------------------------------------------------------------ filtre */
  function apply({ writeUrl = true } = {}) {
    const term = norm(state.q.trim());
    let shown = 0;
    for (const c of cards) {
      const s = bySlug.get(c.dataset.slug);
      const ok =
        (!term || hay.get(s.slug).includes(term)) &&
        (!state.fam || s.family === state.fam) &&
        (!state.ind || s.industry === state.ind) &&
        (!state.ton || s.tone === state.ton) &&
        (!state.fav || favs.has(s.slug));
      c.hidden = !ok;
      c.style.order = String(rank.get(s.slug));
      if (ok) shown += 1;
    }

    count.textContent = shown + ' / ' + cards.length;
    count.dataset.state = shown ? 'ok' : 'empty';
    empty.hidden = shown > 0;
    qclear.hidden = state.q === '';
    q.value = state.q;

    const n = activeCount();
    fcount.textContent = String(n);
    fcount.hidden = n === 0;
    favcount.textContent = String(favs.size);
    favcount.hidden = favs.size === 0;
    favbtn.setAttribute('aria-pressed', String(state.fav));

    for (const b of chipBtns) {
      const kind = b.dataset.fam !== undefined ? 'fam' : b.dataset.ind !== undefined ? 'ind' : b.dataset.tone !== undefined ? 'ton' : 'scene';
      const val = b.dataset[kind] ?? '';
      const current = kind === 'scene' ? state.scene || '01-landing.png' : state[kind];
      b.setAttribute('aria-pressed', String(current === val));
    }

    fsum.textContent = n ? n + ' filtre etkin' : 'Filtre yok';
    renderActive();
    syncFavButtons();
    if (writeUrl) writeUrlState();
  }

  function renderActive() {
    const parts = [];
    if (state.q) parts.push(chip('q', '“' + state.q + '”'));
    for (const k of FILTER_KEYS) if (state[k]) parts.push(chip(k, labelOf(k, state[k])));
    if (state.scene) parts.push(chip('scene', labelOf('scene', state.scene)));
    if (state.fav) parts.push(chip('fav', '★ favoriler'));
    if (!parts.length) {
      activebar.hidden = true;
      activebar.innerHTML = '';
      return;
    }
    activebar.innerHTML =
      parts.join('') +
      `<button type="button" class="achip clearall" data-clear="all">temizle (${parts.length})</button>`;
    activebar.hidden = false;
  }

  const chip = (key, label) =>
    `<button type="button" class="achip" data-clear="${key}">${escHtml(label)}<span aria-hidden="true">×</span></button>`;

  const IND_LABELS = { saas: 'SaaS', emlak: 'Emlak', danismanlik: 'Danışmanlık', egitim: 'Eğitim', eticaret: 'E-ticaret', dergi: 'Dergi', ajans: 'Ajans', saglik: 'Sağlık' };
  const TONE_LABELS = { sicak: 'Sıcak', soguk: 'Soğuk', yesil: 'Yeşil', notr: 'Nötr' };
  const labelOf = (kind, value) => {
    if (kind === 'fam') return value;
    if (kind === 'scene') return sceneLabel(value);
    if (kind === 'ind') return IND_LABELS[value] ?? value;
    return TONE_LABELS[value] ?? value;
  };

  function sceneLabel(file) {
    if (SHOT_LABELS[file]) return SHOT_LABELS[file];
    const map = { '01': 'Landing', '02': 'Dashboard', '03': 'Mobil', '04': 'Bileşenler', '05': 'Do / Don’t' };
    return map[file.slice(0, 2)] ?? file.replace(/\.[a-z]+$/i, '');
  }

  function setFilter(kind, value) {
    state[kind] = state[kind] === value ? '' : value;
    apply();
  }

  function clearAll() {
    state.q = '';
    for (const k of FILTER_KEYS) state[k] = '';
    state.scene = '';
    state.fav = false;
    apply();
  }

  /* --------------------------------------------------------------- URL */
  const URL_KEYS = ['q', 'fam', 'ind', 'ton', 'scene', 'sort', 'fav'];

  function writeUrlState() {
    const p = new URLSearchParams();
    for (const k of URL_KEYS) {
      const v = k === 'fav' ? (state.fav ? '1' : '') : state[k];
      if (v && !(k === 'sort' && v === 'num')) p.set(k, v);
    }
    const styleParam = new URLSearchParams(location.search).get('style');
    if (styleParam) p.set('style', styleParam);
    const qs = p.toString();
    try {
      history.replaceState(null, '', qs ? location.pathname + '?' + qs : location.pathname);
    } catch {
      /* file:// bazı tarayıcılarda replaceState'e izin vermez; sessiz geç */
    }
  }

  function readUrlState() {
    const p = new URLSearchParams(location.search);
    state.q = p.get('q') ?? '';
    for (const k of FILTER_KEYS) state[k] = p.get(k) ?? '';
    state.scene = p.get('scene') ?? '';
    state.sort = p.get('sort') ?? 'num';
    state.fav = p.get('fav') === '1';
    if (!['num', 'name', 'family'].includes(state.sort)) state.sort = 'num';
    sortSel.value = state.sort;
  }

  /* ----------------------------------------------------------- kapak sahnesi */
  function setScene(file) {
    state.scene = file;
    for (const c of cards) {
      const s = bySlug.get(c.dataset.slug);
      const img = $('.cover img', c);
      const ground = $('.cover', c);
      const pick = file && s.shots.includes(file) ? file : s.shots[0];
      const rel = '../styles/' + s.dir + '/shots/' + pick;
      if (img.getAttribute('src') !== rel) img.setAttribute('src', rel);
      img.alt = s.name + ' — ' + sceneLabel(pick);
      ground.href = rel;
      $('.cover-l', c).textContent = sceneLabel(pick);
    }
    apply();
  }

  /* ------------------------------------------------------------- çekmece */
  const TOKEN_VARS = [
    '--bg', '--bg-2', '--surface', '--surface-2', '--ink', '--ink-soft', '--ink-faint',
    '--accent', '--accent-ink', '--line', '--radius', '--radius-lg', '--shadow', '--shadow-hard',
    '--font-display', '--font-body', '--font-mono', '--tracking', '--blur', '--grain',
  ];

  function tokenBlock(slug) {
    const probe = document.createElement('div');
    probe.dataset.style = slug;
    probe.style.cssText = 'position:absolute;left:-9999px;top:0;height:0;overflow:hidden';
    document.body.appendChild(probe);
    const cs = getComputedStyle(probe);
    const lines = [`[data-style="${slug}"] {`];
    for (const v of TOKEN_VARS) {
      const val = cs.getPropertyValue(v).trim();
      if (val) lines.push('  ' + v + ': ' + val + ';');
    }
    lines.push('}');
    probe.remove();
    return lines.join('\n');
  }

  const drawer = $('#drawer');
  const dBody = $('#dBody');
  const drawerPanel = $('.drawer-p', drawer);
  let drawerSlug = null;
  let lastFocus = null;

  function renderDrawer(slug) {
    const s = bySlug.get(slug);
    if (!s) return;
    drawerSlug = slug;
    const darkBadge = s.dark === 'applied' ? '<span class="pill ok">koyu mod ✓</span>'
      : s.dark === 'debt' ? '<span class="pill warn">koyu borç</span>' : '<span class="pill">koyu —</span>';

    const shots = s.shots.length
      ? s.shots
          .map((f) => `<button type="button" class="dshot" data-shot="${f}"><img src="../styles/${s.dir}/shots/${f}" alt="${escHtml(s.name)} — ${escHtml(sceneLabel(f))}" loading="lazy"><span>${escHtml(sceneLabel(f))}</span></button>`)
          .join('')
      : '<p class="dr-note">Görsel yok.</p>';

    const list = (items, cls) =>
      items.length ? `<ul class="${cls}">${items.map((x) => '<li>' + escHtml(x) + '</li>').join('')}</ul>` : '<p class="dr-note">—</p>';

    const demos = s.demo ?? '';

    dBody.innerHTML = `
      <header class="dr-h">
        <div>
          <p class="dr-eyebrow"><span class="num">${escHtml(s.num)}</span> · ${escHtml(s.family)} ${darkBadge}</p>
          <h2 id="dTitle">${escHtml(s.name)}</h2>
          <p class="dr-tag">${escHtml(s.tag)}</p>
        </div>
        <button type="button" class="dr-x" data-close aria-label="Kapat">×</button>
      </header>

      <div class="dr-act">
        <button type="button" class="btn-p" data-copy="style">⧉ data-style</button>
        <button type="button" class="btn-p" data-copy="tokens">⧉ token CSS</button>
        <button type="button" class="btn-p" data-copy="brief">⧉ AI brief</button>
        <button type="button" class="btn-p ghost" data-fav aria-pressed="${favs.has(s.slug)}">${favs.has(s.slug) ? '★ kısa listede' : '☆ kısa listeye ekle'}</button>
      </div>

      <nav class="dr-jump">
        <a href="live.html?style=${encodeURIComponent(s.slug)}" target="_blank" rel="noopener">▶ canlı önizleme</a>
        <a href="sections.html?style=${encodeURIComponent(s.slug)}" target="_blank" rel="noopener">▦ 12 bölüm</a>
        <a href="flows.html?style=${encodeURIComponent(s.slug)}" target="_blank" rel="noopener">⇢ akışlar</a>
        <a href="../styles/${s.dir}/style.md" target="_blank" rel="noopener">style.md</a>
        <a href="../styles/${s.dir}/tokens.json" target="_blank" rel="noopener">tokens.json</a>
      </nav>

      <div class="dr-section">
        <h3>Kareler <span>${s.shots.length}</span></h3>
        <div class="dshots">${shots}</div>
      </div>

      <dl class="dr-meta">
        ${s.meta.feel ? `<div><dt>Hissiyat</dt><dd>${escHtml(s.meta.feel)}</dd></div>` : ''}
        ${s.meta.best ? `<div><dt>En iyi</dt><dd>${escHtml(s.meta.best)}</dd></div>` : ''}
        ${s.meta.avoid ? `<div><dt>Kaçın</dt><dd>${escHtml(s.meta.avoid)}</dd></div>` : ''}
      </dl>

      <div class="dr-section">
        <h3>Canlı bileşen</h3>
        <div class="demo dr-demo" data-style="${escHtml(s.slug)}">${demos}</div>
      </div>

      <div class="dr-cols">
        <div class="dr-section"><h3>Zorunlu kurallar</h3>${list(s.must, 'dr-list')}</div>
        <div class="dr-section"><h3>Yasaklar</h3>${list(s.mustNot, 'dr-list ban')}</div>
      </div>

      ${s.neighbors.length ? `<div class="dr-section"><h3>Komşu stiller</h3><p class="dr-nb">${s.neighbors.map((x) => `<button type="button" class="linkbtn" data-goto="${escHtml(x)}">${escHtml(x)}</button>`).join(' · ')}</p></div>` : ''}

      <details class="dr-sec">
        <summary>Token CSS <span class="dr-hint">kopyala → projeye yapıştır</span></summary>
        <pre class="dr-pre" data-role="tokens"></pre>
      </details>

      <details class="dr-sec">
        <summary>AI brief <span class="dr-hint">ajana verilecek prompt</span></summary>
        <pre class="dr-pre" data-role="brief">${escHtml(s.brief || '—')}</pre>
      </details>

      <p class="dr-foot">${escHtml(s.name)} · <code>data-style="${escHtml(s.slug)}"</code></p>
    `;

    const pre = $('[data-role="tokens"]', dBody);
    pre.textContent = tokenBlock(s.slug);
  }

  function openDrawer(slug) {
    if (!bySlug.has(slug)) return;
    lastFocus = document.activeElement;
    renderDrawer(slug);
    drawer.hidden = false;
    document.body.classList.add('is-locked');
    closePanel();
    drawerPanel.focus();
    writeUrlHash(slug);
  }

  function closeDrawer() {
    if (drawer.hidden) return;
    drawer.hidden = true;
    drawerSlug = null;
    document.body.classList.remove('is-locked');
    lastFocus?.focus?.();
    writeUrlHash(null);
  }

  function writeUrlHash(slug) {
    try {
      const url = new URL(location.href);
      if (slug) url.searchParams.set('style', slug);
      else url.searchParams.delete('style');
      history.replaceState(null, '', url.pathname + (url.search || ''));
    } catch {
      /* file:// */
    }
  }

  /* ------------------------------------------------------------ kopyalama */
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
      toastEl.hidden = true;
    }, 1800);
  }

  async function copyText(text, label) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        toast(label + ' kopyalandı');
        return true;
      }
      throw new Error('clipboard yok');
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try {
        ok = document.execCommand('copy');
      } catch {
        ok = false;
      }
      ta.remove();
      if (ok) {
        toast(label + ' kopyalandı');
        return true;
      }
      const pre = $('[data-role="' + (label.includes('brief') ? 'brief' : 'tokens') + '"]', dBody);
      if (pre) {
        const range = document.createRange();
        range.selectNodeContents(pre);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        toast('Panoya yazılamadı — metin seçildi, Ctrl+C');
      } else {
        toast('Kopyalanamadı — tarayıcı izni yok');
      }
      return false;
    }
  }

  function drawerCopy(kind) {
    const s = bySlug.get(drawerSlug);
    if (!s) return;
    if (kind === 'style') copyText(s.slug, 'data-style');
    else if (kind === 'tokens') copyText(tokenBlock(s.slug), 'token CSS');
    else if (kind === 'brief') copyText(s.brief || '', 'AI brief');
  }

  /* ------------------------------------------------------- favori / seçim */
  function toggleFav(slug) {
    if (favs.has(slug)) favs.delete(slug);
    else favs.add(slug);
    saveFavs();
    syncFavButtons();
    if (state.fav) apply();
    else {
      favcount.textContent = String(favs.size);
      favcount.hidden = favs.size === 0;
    }
    const s = bySlug.get(slug);
    toast(favs.has(slug) ? s.name + ' kısa listeye eklendi' : s.name + ' kısa listeden çıktı');
    if (drawerSlug === slug && !drawer.hidden) {
      const btn = $('[data-fav]', dBody);
      if (btn) {
        btn.setAttribute('aria-pressed', String(favs.has(slug)));
        btn.textContent = favs.has(slug) ? '★ kısa listede' : '☆ kısa listeye ekle';
      }
    }
  }

  function syncFavButtons() {
    for (const c of cards) {
      const on = favs.has(c.dataset.slug);
      $('[data-act="fav"]', c).setAttribute('aria-pressed', String(on));
    }
  }

  /* ----------------------------------------------------------- karşılaştır */
  const cmpbar = $('#cmpbar');
  const cmpcount = $('#cmpcount');
  const cmpGo = $('#cmpGo');
  const cmpview = $('#cmpview');
  const cmpgrid = $('#cmpGrid');
  const cmpTitle = $('#cmpTitle');
  const selected = new Map();
  const MAX_CMP = 4;

  function syncCmp() {
    cmpcount.textContent = selected.size + ' seçili';
    cmpbar.hidden = selected.size === 0;
    cmpGo.disabled = selected.size < 2;
    for (const c of cards) {
      $('[data-act="cmp"]', c).setAttribute('aria-pressed', String(selected.has(c.dataset.slug)));
    }
  }

  function toggleCmp(slug) {
    if (selected.has(slug)) selected.delete(slug);
    else if (selected.size >= MAX_CMP) {
      toast('En fazla ' + MAX_CMP + ' stil karşılaştırılır');
      return;
    } else selected.set(slug, bySlug.get(slug));
    syncCmp();
  }

  function openCmp() {
    const file = state.scene || '01-landing.png';
    cmpTitle.textContent = selected.size + ' stil · ' + sceneLabel(file);
    cmpgrid.innerHTML = [...selected.values()]
      .map((s) => {
        const f = s.shots.includes(file) ? file : s.shots[0];
        return `<figure><a href="../styles/${s.dir}/shots/${f}" target="_blank" rel="noopener"><img src="../styles/${s.dir}/shots/${f}" alt="${escHtml(s.name)} · ${escHtml(sceneLabel(f))}" loading="lazy"></a><figcaption><b>${escHtml(s.name)}</b><span>${escHtml(s.slug)}</span></figcaption></figure>`;
      })
      .join('');
    cmpview.hidden = false;
    document.body.classList.add('is-locked');
    $('#cmpClose').focus();
  }

  function closeCmp() {
    cmpview.hidden = true;
    document.body.classList.remove('is-locked');
  }

  /* ------------------------------------------------------------- lightbox */
  const lb = $('#lb');
  const lbImg = $('#lbImg');
  const lbCap = $('#lbCap');
  let lbItems = [];
  let lbIndex = 0;

  function openLb(items, index) {
    if (!items.length) return;
    lbItems = items;
    lbIndex = ((index % items.length) + items.length) % items.length;
    const it = lbItems[lbIndex];
    lbImg.src = it.src;
    lbImg.alt = it.cap;
    lbCap.textContent = it.cap + ' · ' + (lbIndex + 1) + '/' + lbItems.length;
    lb.hidden = false;
    document.body.classList.add('is-locked');
  }

  function stepLb(d) {
    openLb(lbItems, lbIndex + d);
  }

  function closeLb() {
    lb.hidden = true;
    lbImg.removeAttribute('src');
    document.body.classList.remove('is-locked');
  }

  function shotsOf(s) {
    return s.shots.map((f) => ({ src: '../styles/' + s.dir + '/shots/' + f, cap: s.name + ' · ' + sceneLabel(f) }));
  }

  /* --------------------------------------------------------------- panel */
  function openPanel() {
    fpanel.hidden = false;
    fbtn.setAttribute('aria-expanded', 'true');
  }
  function closePanel() {
    fpanel.hidden = true;
    fbtn.setAttribute('aria-expanded', 'false');
  }
  const togglePanel = () => (fpanel.hidden ? openPanel() : closePanel());

  /* ------------------------------------------------------------ bağlamalar */
  for (const c of cards) {
    const slug = c.dataset.slug;
    c.addEventListener('click', (e) => {
      const act = e.target.closest('[data-act]');
      if (act) {
        e.preventDefault();
        const kind = act.dataset.act;
        if (kind === 'open') openDrawer(slug);
        else if (kind === 'copy') copyText(slug, 'data-style');
        else if (kind === 'fav') toggleFav(slug);
        else if (kind === 'cmp') toggleCmp(slug);
        return;
      }
      if (e.target.closest('.cover')) {
        e.preventDefault();
        openLb(shotsOf(bySlug.get(slug)), 0);
      }
    });
    c.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target === c) {
        e.preventDefault();
        openDrawer(slug);
      }
    });
  }

  q.addEventListener('input', () => {
    state.q = q.value;
    apply();
  });
  q.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      state.q = '';
      apply();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusCard(0);
    }
  });
  qclear.addEventListener('click', () => {
    state.q = '';
    apply();
    q.focus();
  });

  fbtn.addEventListener('click', togglePanel);
  $('#fclose').addEventListener('click', () => {
    closePanel();
    fbtn.focus();
  });
  $('#fclear').addEventListener('click', clearAll);
  $('#emptyReset').addEventListener('click', clearAll);

  activebar.addEventListener('click', (e) => {
    const b = e.target.closest('[data-clear]');
    if (!b) return;
    const key = b.dataset.clear;
    if (key === 'all') clearAll();
    else if (key === 'q') {
      state.q = '';
      apply();
    } else if (key === 'fav') {
      state.fav = false;
      apply();
    } else if (key === 'scene') setScene('');
    else setFilter(key, state[key]);
  });

  for (const b of chipBtns) {
    b.addEventListener('click', () => {
      if (b.dataset.fam !== undefined) setFilter('fam', b.dataset.fam);
      else if (b.dataset.ind !== undefined) setFilter('ind', b.dataset.ind);
      else if (b.dataset.tone !== undefined) setFilter('ton', b.dataset.tone);
      else if (b.dataset.scene !== undefined) setScene(b.dataset.scene === state.scene ? '' : b.dataset.scene);
    });
  }

  sortSel.addEventListener('change', () => {
    state.sort = sortSel.value;
    apply();
  });

  favbtn.addEventListener('click', () => {
    state.fav = !state.fav;
    apply();
  });

  document.addEventListener('click', (e) => {
    if (fpanel.hidden) return;
    if (!e.target.closest('#fpanel') && !e.target.closest('#fbtn')) closePanel();
  });

  drawer.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) return closeDrawer();
    const copyBtn = e.target.closest('[data-copy]');
    if (copyBtn) return drawerCopy(copyBtn.dataset.copy);
    if (e.target.closest('[data-fav]')) return toggleFav(drawerSlug);
    const goto = e.target.closest('[data-goto]');
    if (goto) {
      const target = DATA.find((s) => s.slug === goto.dataset.goto || s.name === goto.dataset.goto);
      return openDrawer(target?.slug ?? goto.dataset.goto);
    }
    const shot = e.target.closest('.dshot');
    if (shot) {
      const s = bySlug.get(drawerSlug);
      const items = shotsOf(s);
      return openLb(items, s.shots.indexOf(shot.dataset.shot));
    }
  });

  cmpbar.addEventListener('click', (e) => {
    if (e.target.id === 'cmpGo') openCmp();
    if (e.target.id === 'cmpClear') {
      selected.clear();
      syncCmp();
    }
  });
  $('#cmpClose').addEventListener('click', closeCmp);
  cmpview.addEventListener('click', (e) => {
    if (e.target === cmpview) closeCmp();
  });

  $('#lbClose').addEventListener('click', closeLb);
  $('#lbPrev').addEventListener('click', () => stepLb(-1));
  $('#lbNext').addEventListener('click', () => stepLb(1));
  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target.id === 'lbImg') closeLb();
  });

  /* ------------------------------------------------------------- klavye */
  const focusCard = (i) => {
    const visible = cards.filter((c) => !c.hidden);
    if (!visible.length) return;
    const card = visible[Math.max(0, Math.min(i, visible.length - 1))];
    card.focus();
    card.scrollIntoView({ block: 'nearest' });
  };

  addEventListener('keydown', (e) => {
    const inField = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
    const focusIdx = () => cards.filter((c) => !c.hidden).indexOf(document.activeElement);

    // modal açıkken Tab döngüsü (odak arkadaki kartlara kaçmasın)
    if (e.key === 'Tab') {
      const scopeEl = !drawer.hidden ? drawerPanel : !cmpview.hidden ? cmpview : !lb.hidden ? lb : null;
      if (scopeEl) {
        const f = [...scopeEl.querySelectorAll('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(
          (el) => el.offsetParent !== null,
        );
        if (f.length) {
          const first = f[0];
          const last = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    if (e.key === 'Escape') {
      if (!lb.hidden) return closeLb();
      if (!cmpview.hidden) return closeCmp();
      if (!drawer.hidden) return closeDrawer();
      if (!fpanel.hidden) return closePanel();
      if (activeCount() && !inField) clearAll();
      return;
    }
    if (inField) return;

    if (e.key === '/') {
      e.preventDefault();
      q.focus();
      q.select();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      togglePanel();
    } else if (e.key === 'j' || e.key === 'ArrowDown') {
      const i = focusIdx();
      if (i < 0) return;
      e.preventDefault();
      focusCard(i + 1);
    } else if (e.key === 'k' || e.key === 'ArrowUp') {
      const i = focusIdx();
      if (i <= 0) return;
      e.preventDefault();
      focusCard(i - 1);
    } else if (e.key === 'Enter') {
      const card = document.activeElement?.closest?.('.card');
      if (card) {
        e.preventDefault();
        openDrawer(card.dataset.slug);
      }
    } else if ((e.key === 'c' || e.key === 'C') && document.activeElement?.closest?.('.card')) {
      e.preventDefault();
      copyText(document.activeElement.closest('.card').dataset.slug, 'data-style');
    } else if ((e.key === 's' || e.key === 'S') && document.activeElement?.closest?.('.card')) {
      e.preventDefault();
      toggleFav(document.activeElement.closest('.card').dataset.slug);
    }
  });

  addEventListener('popstate', () => {
    readUrlState();
    apply({ writeUrl: false });
    if (state.scene) setScene(state.scene);
  });

  function escHtml(v) {
    return String(v ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* --------------------------------------------------------------- başlat */
  readUrlState();
  const hashStyle = new URLSearchParams(location.search).get('style');
  apply({ writeUrl: false });
  if (state.scene) setScene(state.scene);
  syncCmp();
  syncFavButtons();
  if (hashStyle && bySlug.has(hashStyle)) openDrawer(hashStyle);
})();
