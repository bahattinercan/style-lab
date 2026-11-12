#!/usr/bin/env node
/**
 * kit/check-gallery-ui.mjs — galeri arayüzünün kullanılabilirlik kapısı.
 *
 * Neden: kart ızgarası, filtre paneli, çekmece ve URL durumu "çalışıyor gibi"
 * görünse de ölçülmeden bozulabiliyor (kart 490px'e geri döner, panel içeriği
 * örter, mobilde aksiyonlar taşar, ?fam= yok sayılır). Bu kapı ölçer.
 *
 * Kullanım:
 *   node kit/check-gallery-ui.mjs            # kapı
 *   node kit/check-gallery-ui.mjs --verbose  # her ölçümü yazdır
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch } from './render/cdp-browser.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TARGET = path.join(ROOT, 'kit', 'gallery.html');
const VERBOSE = process.argv.includes('--verbose');

/** Beklenen stil sayısı — sabit 145 değil, styles/ altındaki gerçek klasör sayısı. */
const STYLE_COUNT = fs
  .readdirSync(path.join(ROOT, 'styles'), { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, 'styles', d.name, 'style.md'))).length;

/* Ölçümler: her biri { ad, değer, beklenti } döner. Kapı beklentiyi uygular. */
const DESKTOP = `(async () => {
  const wait = (ms = 40) => new Promise((r) => setTimeout(r, ms));
  const m = {};
  const cards = Array.from(document.querySelectorAll('.card'));
  m.cards = cards.length;
  m.cardHeight = Math.round(cards[0].getBoundingClientRect().height);
  m.columns = getComputedStyle(document.getElementById('grid')).gridTemplateColumns.split(' ').length;
  m.visibleCards = cards.filter((c) => {
    const b = c.getBoundingClientRect();
    return !c.hidden && b.top < innerHeight && b.bottom > 0;
  }).length;
  m.stickyBar = getComputedStyle(document.getElementById('bar')).position;

  const q = document.getElementById('q');
  q.value = 'minimal';
  q.dispatchEvent(new Event('input'));
  await wait();
  m.searchMatch = document.getElementById('count').textContent;
  q.value = 'gölge';
  q.dispatchEvent(new Event('input'));
  await wait();
  m.searchDiacritic = document.getElementById('count').textContent;
  q.value = '';
  q.dispatchEvent(new Event('input'));

  document.getElementById('fbtn').click();
  await wait();
  m.panelOpen = !document.getElementById('fpanel').hidden;
  const fam = document.querySelector('#fpanel .chip[data-fam="Sade"]');
  fam.click();
  await wait();
  m.afterFam = document.getElementById('count').textContent;
  m.activeChips = document.querySelectorAll('#active .achip').length;
  m.urlAfterFam = location.search;
  document.getElementById('fbtn').click();

  const first = cards.find((c) => !c.hidden);
  first.querySelector('[data-act="open"]').click();
  await wait();
  m.drawerOpen = !document.getElementById('drawer').hidden;
  m.drawerTitle = document.getElementById('dTitle')?.textContent ?? '';
  m.tokenCss = (document.querySelector('[data-role="tokens"]')?.textContent ?? '');
  m.drawerShots = document.querySelectorAll('.dshot').length;
  m.drawerActions = document.querySelectorAll('.dr-act .btn-p').length;
  document.querySelector('[data-close]').click();
  first.querySelector('.cover').click();
  await wait();
  m.lightboxOpen = !document.getElementById('lb').hidden;
  m.lightboxSrc = document.getElementById('lbImg').getAttribute('src') ?? '';
  document.getElementById('lbClose').click();

  const picks = Array.from(document.querySelectorAll('.card [data-act="cmp"]')).slice(0, 2);
  picks.forEach((p) => p.click());
  await wait();
  m.cmpBarVisible = !document.getElementById('cmpbar').hidden;
  m.cmpEnabled = !document.getElementById('cmpGo').disabled;
  document.getElementById('cmpGo').click();
  await wait();
  m.cmpViewOpen = !document.getElementById('cmpview').hidden;
  m.cmpFigures = document.querySelectorAll('#cmpGrid figure').length;
  return m;
})()`;

const MOBILE = `(() => {
  const m = {};
  m.innerWidth = innerWidth;
  m.scrollWidth = document.documentElement.scrollWidth;
  const arms = Array.from(document.querySelectorAll('.card-a'));
  m.actionOverflow = arms.filter((a) => a.scrollWidth > a.clientWidth + 1).length;
  m.columns = getComputedStyle(document.getElementById('grid')).gridTemplateColumns.split(' ').length;
  const fbtn = document.getElementById('fbtn');
  const r = fbtn.getBoundingClientRect();
  m.filterButton = Math.round(r.width) + 'x' + Math.round(r.height);
  return m;
})()`;

const URLSTATE = `(() => {
  const cards = Array.from(document.querySelectorAll('.card'));
  return {
    visible: cards.filter((c) => !c.hidden).length,
    sort: document.getElementById('sort').value,
    chips: document.querySelectorAll('#active .achip').length,
    query: document.getElementById('q').value,
  };
})()`;

const results = [];
const check = (name, ok, measured) => results.push({ name, ok, measured });

const cdp = await launch({ tabs: 2 });
try {
  const d = await cdp.evaluate(TARGET, { width: 1440, height: 900, expression: DESKTOP });
  check(`kart sayısı ${STYLE_COUNT}`, d.cards === STYLE_COUNT, d.cards);
  check('kart yüksekliği ≤ 320px', d.cardHeight > 0 && d.cardHeight <= 320, d.cardHeight + 'px');
  check('ızgara ≥ 4 sütun (1440px)', d.columns >= 4, d.columns);
  check('ilk ekranda ≥ 8 kart', d.visibleCards >= 8, d.visibleCards);
  check('araç çubuğu sticky', d.stickyBar === 'sticky', d.stickyBar);
  check('arama "minimal" daraltıyor', new RegExp(`^[1-9]\\d? / ${STYLE_COUNT}$`).test(d.searchMatch), d.searchMatch);
  check('arama diakritik duyarsız ("gölge" ← "golge")', Number(d.searchDiacritic.split(' ')[0]) > 0, d.searchDiacritic);
  check('filtre paneli açılıyor', d.panelOpen === true, d.panelOpen);
  check('aile filtresi 7 stile indiriyor', d.afterFam === `7 / ${STYLE_COUNT}`, d.afterFam);
  check('aktif filtre çipleri görünür', d.activeChips >= 2, d.activeChips);
  check('filtre URL\'e yazılıyor', /(^|[?&])fam=Sade/.test(d.urlAfterFam), d.urlAfterFam);
  check('çekmece açılıyor', d.drawerOpen === true, d.drawerOpen);
  check('çekmecede stil başlığı var', d.drawerTitle.length > 2, d.drawerTitle);
  check('token CSS üretiliyor (≥ 200 karakter)', d.tokenCss.length >= 200 && d.tokenCss.includes('--bg:'), d.tokenCss.length + ' karakter');
  check('çekmecede tüm kareler listeleniyor', d.drawerShots >= 4, d.drawerShots);
  check('çekmecede 4 aksiyon (kopyala/favori)', d.drawerActions >= 4, d.drawerActions);
  check('lightbox açılıyor', d.lightboxOpen === true && d.lightboxSrc.length > 0, d.lightboxSrc);
  check('karşılaştırma çubuğu görünür', d.cmpBarVisible === true, d.cmpBarVisible);
  check('karşılaştırma 2 stille etkin', d.cmpEnabled === true, d.cmpEnabled);
  check('karşılaştırma görünümü açılıyor', d.cmpViewOpen === true && d.cmpFigures === 2, d.cmpFigures + ' figür');

  const mob = await cdp.evaluate(TARGET, { width: 375, height: 780, expression: MOBILE });
  check('mobilde yatay taşma yok', mob.scrollWidth <= mob.innerWidth + 1, mob.scrollWidth + ' ≤ ' + mob.innerWidth);
  check('mobilde kart aksiyonları taşmıyor', mob.actionOverflow === 0, mob.actionOverflow + ' taşan kart');
  check('mobilde 2 sütun', mob.columns === 2, mob.columns);
  check('filtre düğmesi dokunma hedefi ≥ 32px', Number(mob.filterButton.split('x')[1]) >= 32, mob.filterButton);

  const u = await cdp.evaluate(TARGET, {
    width: 1440,
    height: 900,
    query: 'fam=Sade&sort=name&q=minimal',
    expression: URLSTATE,
  });
  check('URL durumu geri yükleniyor (fam+sort+q)', u.sort === 'name' && u.query === 'minimal' && u.visible === 1, JSON.stringify(u));
} finally {
  await cdp.close();
}

let failed = 0;
for (const r of results) {
  if (!r.ok) failed += 1;
  if (r.ok && !VERBOSE) continue;
  console.log(`${r.ok ? '✓' : '×'} ${r.name}${r.ok ? ' — ' + r.measured : ' — ölçülen: ' + r.measured}`);
}
if (failed) {
  console.log(`\n× galeri arayüzü: ${failed}/${results.length} ölçüm başarısız (kit/gallery.css · kit/gallery.js)`);
  process.exit(1);
}
console.log(`\n✓ galeri arayüzü: ${results.length} ölçüm geçti (1440px · 375px · URL durumu)`);
