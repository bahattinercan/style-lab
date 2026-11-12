/* ============================================================
   viewer-nav.js — canlı / bölüm / akış görüntüleyicileri için ortak geçiş çubuğu
   Sayfa kendi header'ına ekler; stilleri kendisi enjekte eder (3 HTML'de tekrar yok).
   Kaynak liste: kit/live-styles.js (build-gallery.mjs üretir)
   ============================================================ */
(() => {
  'use strict';
  if (document.querySelector('.viewer-nav')) return;

  const list = window.LIVE_STYLES || [];
  if (!list.length) return;

  const page = (location.pathname.split('/').pop() || '').toLowerCase();
  const qs = new URLSearchParams(location.search);
  const slug =
    qs.get('style') ||
    document.documentElement.dataset.style ||
    (list[0] && list[0].slug);
  const idx = list.findIndex((s) => s.slug === slug);
  const at = idx >= 0 ? idx : 0;
  const prev = list[(at - 1 + list.length) % list.length];
  const next = list[(at + 1) % list.length];
  const cur = list[at];

  const VIEWS = [
    ['live.html', '▶', 'canlı'],
    ['sections.html', '▦', 'bölüm'],
    ['flows.html', '⇢', 'akış'],
  ];

  const html =
    '<nav class="viewer-nav" aria-label="Görüntüleyici geçişi">' +
    '<a class="vn-back" href="gallery.html" title="Galeriye dön (g)">← galeri</a>' +
    '<span class="vn-tabs">' +
    VIEWS.map(([file, icon, label]) => {
      const active = page === file;
      return (
        '<a href="' + file + '?style=' + encodeURIComponent(slug) + '"' +
        (active ? ' class="is-active" aria-current="page"' : '') +
        '>' + icon + ' ' + label + '</a>'
      );
    }).join('') +
    '</span>' +
    '<span class="vn-step">' +
    '<a href="?style=' + encodeURIComponent(prev.slug) + '" title="Önceki stil: ' + esc(prev.name) + ' (←)">‹ ' + esc(prev.num) + '</a>' +
    '<a class="vn-cur" href="gallery.html?style=' + encodeURIComponent(cur.slug) + '" title="Galeride aç">' + esc(cur.num) + ' · ' + esc(cur.name) + '</a>' +
    '<a href="?style=' + encodeURIComponent(next.slug) + '" title="Sonraki stil: ' + esc(next.name) + ' (→)">' + esc(next.num) + ' ›</a>' +
    '</span>' +
    '</nav>';

  const style = document.createElement('style');
  style.textContent = `
    .viewer-nav{display:flex;align-items:center;gap:10px;flex-wrap:wrap;font-size:12px;
      font-family:ui-sans-serif,system-ui,"Segoe UI",sans-serif}
    .viewer-nav.viewer-nav a{color:#a9b6c8;font-family:inherit;font-size:12px;letter-spacing:0;text-transform:none;border-bottom:0;text-decoration:none;border:1px solid transparent;border-radius:999px;
      padding:5px 9px;line-height:1;transition:background .14s,border-color .14s,color .14s;white-space:nowrap}
    .viewer-nav.viewer-nav a:hover{background:#1b2330;border-color:#2f3a49;color:#fff}
    .viewer-nav.viewer-nav a:focus-visible{outline:2px solid #3b82f6;outline-offset:2px}
    .viewer-nav .vn-tabs{display:inline-flex;gap:2px;padding:2px;background:#12161d;
      border:1px solid #232a35;border-radius:999px}
    .viewer-nav.viewer-nav .vn-tabs a{border-radius:999px}
    .viewer-nav.viewer-nav .vn-tabs a.is-active{background:#e9edf4;color:#0c0e13;font-weight:600}
    .viewer-nav .vn-back{border-color:#232a35}
    .viewer-nav .vn-step{display:inline-flex;align-items:center;gap:2px;padding:2px;background:#12161d;
      border:1px solid #232a35;border-radius:999px}
    .viewer-nav .vn-cur{color:#e9edf4;font-weight:500;max-width:190px;overflow:hidden;text-overflow:ellipsis}
    @media (max-width:760px){.viewer-nav .vn-cur{display:none}.viewer-nav{font-size:11px}}
  `;
  document.head.appendChild(style);

  const host = document.querySelector('.bar') || document.querySelector('header');
  if (!host) return;
  const grow = host.querySelector('.grow');
  const wrap = document.createElement('span');
  wrap.innerHTML = html;
  const nav = wrap.firstElementChild;
  if (grow && grow.nextSibling) host.insertBefore(nav, grow.nextSibling);
  else if (grow) host.appendChild(nav);
  else host.appendChild(nav);

  // lightbox açıkken görüntüleyici kısayolları susar (görsel inceleme öncelikli)
  const lightboxOpen = () => Boolean(document.querySelector('.vlb:not([hidden])'));

  // ← → ile stil gezinme (form alanlarında değilken)
  addEventListener('keydown', (e) => {
    if (lightboxOpen()) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const t = e.target;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
    location.search = '?style=' + encodeURIComponent((e.key === 'ArrowLeft' ? prev : next).slug);
  });

  // "g" ile galeriye dön
  addEventListener('keydown', (e) => {
    if (lightboxOpen()) return;
    if (e.key !== 'g' && e.key !== 'G') return;
    const t = e.target;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
    location.href = 'gallery.html';
  });

  function esc(v) {
    return String(v ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
})();
