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
 *   node kit/check-viewers.mjs                 # örnek stil(ler) ile denetle (--ensure varsayılan)
 *   node kit/check-viewers.mjs --ensure        # eksik bölüm/akış görsellerini üretip doğrular
 *   node kit/check-viewers.mjs --no-ensure     # üretim yapmadan yalnız mevcut cache'i denetler
 *   node kit/check-viewers.mjs --styles y2k,editorial-design
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { launch } from './render/cdp-browser.mjs';
import { SECTIONS } from './render/sections.mjs';
import { FLOWS } from './render/flows.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const CACHE_DIR = path.join(ROOT, 'kit', '.shots-cache');
const ARGV = process.argv.slice(2);
const ENSURE = !ARGV.includes('--no-ensure');
const MIN_PNG_BYTES = 1024;
const i = ARGV.indexOf('--styles');
const SLUGS = i >= 0 ? (ARGV[i + 1] ?? '').split(',').filter(Boolean) : ['editorial-design', 'terminal-ui'];

function dirOf(slug) {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .find((d) => d.isDirectory() && d.name.replace(/^\d+-/, '') === slug)?.name;
}

function missingCacheFor(slug) {
  const dir = dirOf(slug);
  if (!dir) return { dir: null, missingSections: SECTIONS.map((s) => s.id), missingFlows: FLOWS.map((f) => f.id) };
  const missingSections = SECTIONS.map((s) => s.id).filter((id) => {
    const p = path.join(CACHE_DIR, dir, 'sections', `${id}.png`);
    return !fs.existsSync(p) || fs.statSync(p).size < MIN_PNG_BYTES;
  });
  const missingFlows = FLOWS.map((f) => f.id).filter((id) => {
    const p = path.join(CACHE_DIR, dir, 'flows', `${id}.png`);
    return !fs.existsSync(p) || fs.statSync(p).size < MIN_PNG_BYTES;
  });
  return { dir, missingSections, missingFlows };
}

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

let cdp = null;
try {
  cdp = await launch({ tabs: 2 });
} catch (err) {
  console.log(`↷ görüntüleyiciler (bölüm + akış) (cache yok, atlandı: ${err?.message || 'tarayıcı bulunamadı'})`);
  process.exit(0);
}

let failed = 0;
try {
  if (ENSURE) {
    const needSections = [];
    const needFlows = [];
    for (const slug of SLUGS) {
      const { missingSections, missingFlows } = missingCacheFor(slug);
      if (missingSections.length) needSections.push(slug);
      if (missingFlows.length) needFlows.push(slug);
    }
    if (needSections.length) {
      execFileSync(
        process.execPath,
        [path.join(ROOT, 'kit', 'render', 'render-sections.mjs'), '--styles', needSections.join(','), '--check', '--ensure'],
        { stdio: 'inherit' },
      );
    }
    if (needFlows.length) {
      execFileSync(
        process.execPath,
        [path.join(ROOT, 'kit', 'render', 'render-flows.mjs'), '--styles', needFlows.join(','), '--check', '--ensure'],
        { stdio: 'inherit' },
      );
    }
    for (const slug of SLUGS) {
      const after = missingCacheFor(slug);
      if (after.missingSections.length || after.missingFlows.length) {
        console.log(
          `× ${slug}: üretim sonrası eksik cache (sections: ${after.missingSections.length}, flows: ${after.missingFlows.length})`,
        );
        failed += 1;
      }
    }
  }

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
