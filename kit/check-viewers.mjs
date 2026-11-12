#!/usr/bin/env node
/**
 * kit/check-viewers.mjs — bölüm/akış görüntüleyicileri gerçekten çalışıyor mu?
 *
 * Neden: `sections.html` / `flows.html` göreli yolu `../.shots-cache/...` yazdığı için
 * repoda `file://` ile açıldığında 12 bölüm ve 3 akış yerine "henüz üretilmemiş" kutusu
 * gösteriyordu (yollar `.shots-cache/` olmalı). Bu kapı o sınıfı yakalar.
 *
 * Ayrıca kartlardan görsel inceleme (viewer-lightbox.js) sözleşmesini denetler:
 * tıkla → aç · → ile gezin · zoom · Esc ile kapat.
 *
 * Kullanım:
 *   node kit/check-viewers.mjs                 # örnek stil(ler) ile denetle
 *   node kit/check-viewers.mjs --styles y2k,editorial-design
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch } from './render/cdp-browser.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ARGV = process.argv.slice(2);
const i = ARGV.indexOf('--styles');
const SLUGS = i >= 0 ? (ARGV[i + 1] ?? '').split(',').filter(Boolean) : ['editorial-design', 'terminal-ui'];

/* Görseller lazy yükleniyor: hepsi bitene kadar bekle (en fazla 4 sn), sonra say.
   Ardından lightbox sözleşmesini gerçek tıklamayla sına. */
const PROBE = `(async () => {
  const wait = (ms = 60) => new Promise((r) => setTimeout(r, ms));
  const imgs = [...document.querySelectorAll('figure img')];
  const waitImg = (img) =>
    img.complete
      ? Promise.resolve()
      : new Promise((res) => {
          img.addEventListener('load', res, { once: true });
          img.addEventListener('error', res, { once: true });
          setTimeout(res, 4000);
        });
  await Promise.all(imgs.map(waitImg));

  const out = {
    total: imgs.length,
    ok: imgs.filter((x) => x.complete && x.naturalWidth > 0).length,
    missing: [...document.querySelectorAll('.empty')].length,
    lb: {
      open: false, closed: false, zoom: false, src: '', title: '', count: '', nextCount: '',
      keyAdvanced: false, pageStable: false,
    },
  };

  const target = document.querySelector('figure img');
  if (target) {
    target.click();
    await wait(150);
    const box = document.querySelector('.vlb');
    if (box) {
      out.lb.open = !box.hidden;
      out.lb.title = box.querySelector('.vlb-title')?.textContent ?? '';
      out.lb.count = box.querySelector('.vlb-sub')?.textContent ?? '';
      const lbImg = box.querySelector('.vlb-stage img');
      out.lb.src = lbImg?.getAttribute('src') ?? '';
      box.querySelector('[data-act="next"]').click();
      await wait(80);
      out.lb.nextCount = box.querySelector('.vlb-sub')?.textContent ?? '';

      // klavye: olay ODAKLI butona gider (target = button) — gerçek kullanıcı akışı.
      // Window'a dispatch etmek bu hatayı gizler: guard yalnız bubble fazında patlar.
      const pageBefore = location.search;
      const focusEl = box.querySelector('[data-act="close"]');
      focusEl.focus();
      const keyBefore = box.querySelector('.vlb-sub')?.textContent ?? '';
      focusEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true }));
      await wait(100);
      const keyAfter = box.querySelector('.vlb-sub')?.textContent ?? '';
      out.lb.keyAdvanced = keyBefore !== keyAfter;
      out.lb.pageStable = pageBefore === location.search;
      box.querySelector('[data-act="zoom"]').click();
      await wait(80);
      out.lb.zoom = box.classList.contains('is-zoom');
      focusEl.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
      await wait(80);
      out.lb.closed = box.hidden;
    }
  }
  return out;
})()`;

const cdp = await launch({ tabs: 2 });
let failed = 0;
try {
  for (const slug of SLUGS) {
    for (const [page, expect] of [
      ['sections.html', 12],
      ['flows.html', 3],
    ]) {
      const url = path.join(ROOT, 'kit', page) + `?style=${slug}`;
      const r = await cdp.evaluate(url, { width: 1280, height: 900, expression: PROBE });

      const imagesOk = r.total === expect && r.ok === expect && r.missing === 0;
      console.log(
        `${imagesOk ? '✓' : '×'} ${page}?style=${slug} — ${r.ok}/${expect} görsel yüklendi` +
          (r.missing ? `, ${r.missing} eksik kutusu` : ''),
      );
      if (!imagesOk) failed += 1;

      const lb = r.lb;
      const lbOk =
        lb.open &&
        lb.closed &&
        lb.zoom &&
        lb.src.length > 0 &&
        lb.title.length > 0 &&
        /\d+\/(\d+)$/.test(lb.count) &&
        lb.nextCount !== lb.count &&
        lb.keyAdvanced &&
        lb.pageStable;
      console.log(
        `${lbOk ? '✓' : '×'} ${page}?style=${slug} — inceleme: tıkla→aç · gezin (${lb.count || '—'} → ${lb.nextCount || '—'}) · klavye ${lb.keyAdvanced ? '✓' : '×'} · sayfa sabit ${lb.pageStable ? '✓' : '×'} · zoom · Esc`,
      );
      if (!lbOk) failed += 1;
    }
  }
} finally {
  await cdp.close();
}
if (failed) {
  console.log(`\n× görüntüleyici: ${failed} denetim başarısız — kit/sections.html, kit/flows.html, kit/viewer-lightbox.js`);
  process.exit(1);
}
console.log(`\n✓ görüntüleyiciler: ${SLUGS.length} stil × 2 sayfa · görseller yükleniyor · kart inceleme çalışıyor`);
