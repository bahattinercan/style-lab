/* ============================================================
   viewer-lightbox.js — bölüm / akış görüntüleyicileri için büyütme katmanı
   `figure img` tıklanınca açılır: ← → gezin, tık 1:1 zoom, Esc kapat.
   Kendi stilini enjekte eder; sayfalara CSS eklemek gerekmez.
   ============================================================ */
(() => {
  'use strict';
  if (document.querySelector('.vlb')) return;

  const style = document.createElement('style');
  style.textContent = `
    figure img { cursor: zoom-in; transition: opacity .12s ease; }
    figure img:hover { opacity: .92; }
    .vlb { position: fixed; inset: 0; z-index: 200; display: flex; flex-direction: column;
      background: rgba(6, 8, 12, .965); color: #e8e6e1;
      font: 12px/1.4 ui-sans-serif, system-ui, "Segoe UI", sans-serif; }
    .vlb[hidden] { display: none !important; }
    .vlb-bar { display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
      padding: 9px 12px; border-bottom: 1px solid #1e242c; background: #0d1116; }
    .vlb-title { font-weight: 600; font-size: 13px; }
    .vlb-sub { color: #8b95a4; font-family: ui-monospace, monospace; font-size: 11px; }
    .vlb-bar .spacer { flex: 1; }
    .vlb-btn { display: inline-flex; align-items: center; gap: 5px; height: 30px; padding: 0 10px;
      border-radius: 7px; border: 1px solid #2a3341; background: #161b23; color: #dfe5ee;
      font: inherit; text-decoration: none; cursor: pointer; }
    .vlb-btn:hover { background: #1e2530; border-color: #3b82f6; color: #fff; }
    .vlb-btn:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; }
    .vlb-btn[aria-pressed="true"] { background: #1d4ed8; border-color: transparent; color: #fff; }
    .vlb-stage { position: relative; flex: 1; min-height: 0; overflow: auto;
      display: flex; align-items: center; justify-content: center; padding: 14px; cursor: zoom-in; }
    .vlb-stage img { display: block; max-width: 100%; max-height: 100%;
      border-radius: 6px; background: #fff; box-shadow: 0 18px 60px rgba(0, 0, 0, .55); }
    .vlb.is-zoom .vlb-stage { cursor: zoom-out; align-items: flex-start; justify-content: flex-start; }
    .vlb.is-zoom .vlb-stage img { max-width: none; max-height: none; width: auto; border-radius: 0; }
    .vlb-msg { position: absolute; inset: auto 0 auto 0; text-align: center; color: #9aa4b2; font-size: 12px; }
    .vlb-msg[hidden] { display: none; }
    .vlb-nav { position: absolute; top: 50%; transform: translateY(-50%); z-index: 2;
      width: 42px; height: 42px; border-radius: 10px; cursor: pointer;
      background: #161b23; border: 1px solid #2a3341; color: #e8e6e1; font-size: 20px; line-height: 1; }
    .vlb-nav:hover { background: #1e2530; border-color: #3b82f6; }
    .vlb-nav.prev { left: 12px; }
    .vlb-nav.next { right: 12px; }
    @media (max-width: 640px) {
      .vlb-nav { top: auto; bottom: 14px; transform: none; }
      .vlb-nav.prev { left: calc(50% - 52px); }
      .vlb-nav.next { right: calc(50% - 52px); }
      .vlb-stage { padding: 8px; }
    }
  `;
  document.head.appendChild(style);

  const box = document.createElement('div');
  box.className = 'vlb';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Görsel inceleme');
  box.innerHTML =
    '<div class="vlb-bar">' +
    '<span class="vlb-title"></span>' +
    '<span class="vlb-sub"></span>' +
    '<span class="spacer"></span>' +
    '<button class="vlb-btn" type="button" data-act="zoom" aria-pressed="false" title="1:1 boyut (z)">1:1</button>' +
    '<a class="vlb-btn" data-act="open" href="#" target="_blank" rel="noopener" title="Yeni sekmede aç">↗ aç</a>' +
    '<button class="vlb-btn" type="button" data-act="close" title="Kapat (Esc)">× kapat</button>' +
    '</div>' +
    '<button class="vlb-nav prev" type="button" data-act="prev" aria-label="Önceki">‹</button>' +
    '<button class="vlb-nav next" type="button" data-act="next" aria-label="Sonraki">›</button>' +
    '<div class="vlb-stage"><img alt=""><p class="vlb-msg" hidden></p></div>';
  document.body.appendChild(box);

  const titleEl = box.querySelector('.vlb-title');
  const subEl = box.querySelector('.vlb-sub');
  const imgEl = box.querySelector('.vlb-stage img');
  const msgEl = box.querySelector('.vlb-msg');
  const zoomBtn = box.querySelector('[data-act="zoom"]');
  const openLink = box.querySelector('[data-act="open"]');

  let items = [];
  let index = 0;
  let lastFocus = null;

  const figures = () =>
    [...document.querySelectorAll('figure')].filter((f) => f.querySelector('img'));

  function collect() {
    items = figures().map((fig) => {
      const img = fig.querySelector('img');
      const cap = fig.querySelector('figcaption');
      return {
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') ?? '',
        title: cap?.querySelector('b')?.textContent?.trim() ?? img.getAttribute('alt') ?? 'Görsel',
        sub: cap?.querySelector('span')?.textContent?.trim() ?? '',
      };
    });
  }

  function show(i) {
    if (!items.length) return;
    index = ((i % items.length) + items.length) % items.length;
    const it = items[index];
    setZoom(false);
    msgEl.hidden = true;
    imgEl.hidden = false;
    imgEl.removeAttribute('src');
    imgEl.src = it.src;
    imgEl.alt = it.alt || it.title;
    titleEl.textContent = it.title;
    subEl.textContent = (it.sub ? it.sub + ' · ' : '') + (index + 1) + '/' + items.length;
    openLink.href = it.src;
    // komşuları önden yükle (gezinme beklemesin)
    for (const d of [1, -1]) {
      const n = items[(index + d + items.length) % items.length];
      if (n) new Image().src = n.src;
    }
  }

  function setZoom(on) {
    box.classList.toggle('is-zoom', on);
    zoomBtn.setAttribute('aria-pressed', String(on));
    zoomBtn.textContent = on ? 'sığdır' : '1:1';
    if (on) {
      const center = () => {
        const stage = box.querySelector('.vlb-stage');
        if (!imgEl.naturalWidth) return;
        stage.scrollLeft = Math.max(0, (imgEl.naturalWidth - stage.clientWidth) / 2);
        stage.scrollTop = Math.max(0, (imgEl.naturalHeight - stage.clientHeight) / 2);
      };
      if (imgEl.complete && imgEl.naturalWidth) requestAnimationFrame(center);
      else imgEl.addEventListener('load', () => requestAnimationFrame(center), { once: true });
    }
  }

  function open(img) {
    collect();
    const idx = items.findIndex((it) => it.src === img.getAttribute('src'));
    lastFocus = document.activeElement;
    box.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    show(idx >= 0 ? idx : 0);
    box.querySelector('[data-act="close"]').focus();
  }

  function close() {
    box.hidden = true;
    setZoom(false);
    imgEl.removeAttribute('src');
    document.documentElement.style.overflow = '';
    lastFocus?.focus?.();
  }

  imgEl.addEventListener('load', () => {
    msgEl.hidden = true;
    imgEl.hidden = false;
  });
  imgEl.addEventListener('error', () => {
    imgEl.hidden = true;
    msgEl.hidden = false;
    msgEl.textContent = 'Görsel yüklenemedi: ' + items[index]?.src;
  });

  // tıklama: kart görseli → lightbox; sahne → zoom geçişi
  document.addEventListener('click', (e) => {
    if (box.contains(e.target)) return;
    const img = e.target.closest('figure img');
    if (!img) return;
    e.preventDefault();
    open(img);
  });

  box.addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'close') return close();
    if (act === 'prev') return show(index - 1);
    if (act === 'next') return show(index + 1);
    if (act === 'zoom') return setZoom(!box.classList.contains('is-zoom'));
    if (e.target.closest('.vlb-stage') && !e.target.closest('.vlb-msg')) {
      setZoom(!box.classList.contains('is-zoom'));
    }
    if (e.target === box) close();
  });

  // capture fazında dinle: lightbox açıkken görüntüleyici kısayolları (viewer-nav) susar.
  // Not: stopImmediatePropagation kullanmak kendi bubble dinleyicisini de öldürürdü.
  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    const inField = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      close();
    } else if (!inField && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      e.preventDefault();
      e.stopPropagation();
      show(index + (e.key === 'ArrowLeft' ? -1 : 1));
    } else if (!inField && (e.key === 'z' || e.key === 'Z')) {
      e.preventDefault();
      e.stopPropagation();
      setZoom(!box.classList.contains('is-zoom'));
    } else if (!inField && e.key === '0') {
      e.preventDefault();
      e.stopPropagation();
      setZoom(true);
    }
  }, true);

})();
