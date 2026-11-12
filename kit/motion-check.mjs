#!/usr/bin/env node
/**
 * kit/motion-check.mjs — hareket kapısı.
 *
 * Neden: 43 stilin tokens.json'ında sekans reçetesi olmalı; estate sahneleri
 * "poster = LCP" ve "pause/stop" kurallarını taşımalı; hiçbir şablon sonsuz
 * animasyon veya reduced-motion'sız hareket içermemeli.
 *
 * Kullanım:
 *   node kit/motion-check.mjs             # denetle (hata varsa exit 1)
 *   node kit/motion-check.mjs --json      # makine-okur
 *   node kit/motion-check.mjs --strict    # uyarıları da hata say
 *   node kit/motion-check.mjs --styles <dizin>  # stil kökünü değiştir (fixture testi)
 *   node kit/motion-check.mjs --self-test       # sentetik kopya/sınır/temiz problarını yazdır
 *
 * Çeşitlilik kapısı (playbook §6.2): her stilin 7 parametreli animasyon imzası
 * çıkarılır (enter.duration/ease/offsetY/stagger, scroll.trigger/duration,
 * hover.duration). Aynı ailede iki stil 7 parametrenin en az 2'sinde ayrışmalı:
 * 6/7 veya 7/7 aynı → kopya → HATA; tam 5/7 aynı → uyarı (--strict'te hata).
 * Aile dışı karşılaştırma serbest. Legacy freeze 145. stille kaldırıldı (ölçüm:
 * 145 stil, aile içi 0 kopya çift): kural artık istisnasız uygulanır, muafiyet
 * eklenmez. Kapının no-op olmadığını VARIETY_SELF_TEST her koşuda kanıtlar;
 * ayrıntısı `--self-test` ile yazdırılır.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RENDER = path.join(ROOT, 'kit', 'render');
const JSON_OUT = process.argv.includes('--json');
const STRICT = process.argv.includes('--strict');

/* --styles <dizin> | --styles=<dizin>: fixture denemesi için stil kökünü değiştir */
const argValue = (name) => {
  const hit = process.argv.find((a) => a === name || a.startsWith(`${name}=`));
  if (!hit) return null;
  if (hit.includes('=')) return hit.slice(hit.indexOf('=') + 1);
  return process.argv[process.argv.indexOf(hit) + 1] ?? null;
};
const STYLES_TRY = argValue('--styles');
const STYLES = STYLES_TRY ? path.resolve(STYLES_TRY) : path.join(ROOT, 'styles');
if (!fs.existsSync(STYLES)) {
  console.error(`stil dizini yok: ${STYLES}`);
  process.exit(2);
}

const fail = [];
const warn = [];
const F = (m) => fail.push(m);
const W = (m) => warn.push(m);

const secs = (v) => {
  const m = String(v ?? '').match(/^([\d.]+)\s*(ms|s)$/);
  if (!m) return null;
  return m[2] === 'ms' ? Number(m[1]) / 1000 : Number(m[1]);
};

/* --- çeşitlilik: imza demeti (playbook §6.2) ------------------------------- */

/** İmzayı tanımlayan 7 parametre. Sıra sabittir; playbook §6.2 tablosu buna bağlı. */
const SIG_PARAMS = [
  ['enter.duration', (s) => s.enter?.duration],
  ['enter.ease', (s) => s.enter?.ease],
  ['enter.offsetY', (s) => s.enter?.offsetY],
  ['enter.stagger', (s) => s.enter?.stagger],
  ['scroll.trigger', (s) => s.scroll?.trigger],
  ['scroll.duration', (s) => s.scroll?.duration],
  ['hover.duration', (s) => s.hover?.duration],
];

/**
 * Eşik: aynı ailede en az MIN_DIFFS parametre farklı olmalı.
 * 1 fark (6/7 aynı) veya 0 fark (7/7) → kopya → hata.
 * Tam 2 fark (5/7 aynı) → sınırda → uyarı (--strict'te hata).
 * Böylece "≥2 fark kuralı" ile "7'nin 5'i aynıysa kırmızı" okuması birlikte
 * karşılanır: kopya her modda kırmızı, sınır durum yalnız strict modda kırmızı.
 */
const MIN_DIFFS = 2;
const BORDERLINE_DIFFS = 2;

/*
 * Legacy freeze YOK. Katalog 45 stilken burada dondurulmuş bir imza tablosu
 * vardı; 100 yeni stil eklendikten ve eski 45 stilin imzaları ANIM2A/2B/2C ile
 * çeşitlendirildikten sonra aile içi hiçbir çift muafiyete ihtiyaç duymuyor
 * (ölçüm: 145 stil · 145 farklı imza · 0 çift). Tablo kaldırıldı: kural
 * istisnasız uygulanır, ileride çıkacak kopya çift muafiyetle susturulmaz —
 * düzeltilir (playbook §6.2).
 */


const sigOf = (seq) => SIG_PARAMS.map(([, read]) => String(read(seq ?? {})));
const sigKey = (sig) => sig.join('|');
/** "7'sinde / 6'sında / 5'inde" — hata mesajı Türkçe okunur kalsın. */
const ordinalSuffix = (n) => (n === 6 ? "'sında" : n === 7 ? "'sinde" : "'inde");

/**
 * Aile içi imza çiftlerini çıkarır. Yalnız sınır ve üstündeki çiftleri döndürür
 * (fark sayısı ≤ BORDERLINE_DIFFS). `severity`:
 *   'copy'       — fark < MIN_DIFFS → hard hata
 *   'borderline' — fark === MIN_DIFFS → uyarı (--strict'te hata)
 */
const comparePairs = (entries) => {
  const pairs = [];
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const a = entries[i];
      const b = entries[j];
      if (a.family !== b.family) continue;
      const differing = SIG_PARAMS.filter((_, k) => a.sig[k] !== b.sig[k]).map(([label]) => label);
      if (differing.length > BORDERLINE_DIFFS) continue;
      const colliding = SIG_PARAMS.map(([label]) => label).filter((label) => !differing.includes(label));
      pairs.push({
        family: a.family,
        a: a.dir,
        b: b.dir,
        same: SIG_PARAMS.length - differing.length,
        colliding,
        differing,
        severity: differing.length < MIN_DIFFS ? 'copy' : 'borderline',
      });
    }
  }
  return pairs;
};

/*
 * Dedektörün no-op olmadığının kanıtı: sentetik ikiz hard hata olmalı, tek
 * parametresi farklı çift sınırda sayılmalı, 3 farklı çift tamamen geçmeli.
 * Kural sessizce devre dışı kalırsa bu test kırmızı yanar.
 */
const VARIETY_SELF_TEST = (() => {
  const base = ['0.6s', 'ease-out', '16px', '0.05', 'top 84%', '0.7s', '200ms'];
  const oneDiff = ['0.6s', 'ease-out', '16px', '0.05', 'top 84%', '0.9s', '200ms'];
  const twoDiffs = ['0.6s', 'ease-out', '16px', '0.05', 'top 84%', '0.9s', '240ms'];
  const threeDiffs = ['0.6s', 'ease-out', '20px', '0.05', 'top 84%', '0.9s', '240ms'];
  const mk = (dir, sig) => ({ dir, family: 'self-test', sig, key: sigKey(sig) });
  const probe = (other) => comparePairs([mk('syn-a', base), mk('syn-b', other)]);
  const twin = probe(base);
  const nearCopy = probe(oneDiff);
  const twoDiff = probe(twoDiffs);
  const clean = probe(threeDiffs);
  return {
    minDiffs: MIN_DIFFS,
    identicalCaught: twin.length === 1 && twin[0].severity === 'copy' && twin[0].same === 7,
    oneDiffCaught: nearCopy.length === 1 && nearCopy[0].severity === 'copy',
    twoDiffBorderline: twoDiff.length === 1 && twoDiff[0].severity === 'borderline',
    threeDiffCleared: clean.length === 0,
  };
})();

/* 5) hareket sözlüğü (M1): desen çeşitliliği + arketip kuralı + aile↔desen uyumu */
const PATTERN_DEFS = (() => {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'motion', 'patterns.json'), 'utf8'));
  } catch {
    return { patterns: [] };
  }
})();
const ENTER_IDS = PATTERN_DEFS.patterns.filter((p) => p.kind === 'enter').map((p) => p.id);
const SCROLL_IDS = PATTERN_DEFS.patterns.filter((p) => p.kind === 'scroll').map((p) => p.id);
const HOVER_IDS = PATTERN_DEFS.patterns.filter((p) => p.kind === 'hover').map((p) => p.id);

/** Arketip → zorunlu scroll deseni (M2 kuralı; tek kaynak kit/render/motion/archetypes.json). */
const ARCHETYPES = (() => {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'motion', 'archetypes.json'), 'utf8')).archetypes ?? {};
  } catch {
    return {};
  }
})();
const SCROLL_REQUIRED = Object.fromEntries(
  Object.entries(ARCHETYPES)
    .filter(([, v]) => Array.isArray(v.scroll) && v.scroll.length === 1)
    .map(([k, v]) => [k, v.scroll[0]]),
);
/** Aile → yasak hover deseni (playbook: Sade ailesinde 3D eğilme yok). */
const HOVER_FORBIDDEN_BY_FAMILY = { Sade: ['tilt-3d'], 'Veri & Gösterge': ['tilt-3d'], Endüstriyel: ['tilt-3d'] };

function readChoreo(dir) {
  try {
    const t = JSON.parse(fs.readFileSync(path.join(STYLES, dir, 'tokens.json'), 'utf8'));
    return {
      dir,
      family: t.motion?.family ?? 'bilinmiyor',
      hero: t.layout?.hero ?? null,
      ch: t.motion?.choreography ?? null,
    };
  } catch {
    return { dir, family: 'bilinmiyor', hero: null, ch: null };
  }
}

/** Saf kural seti (self-test sentetik girdiyle çağırır). */
function vocabProblems(rows) {
  const problems = [];
  const warns = [];
  const n = rows.length || 1;
  for (const r of rows) {
    if (!r.ch) {
      problems.push(`${r.dir}: motion.choreography yok (şema v4) — node kit/assign-motion.mjs --apply`);
      continue;
    }
    if (ENTER_IDS.length && !ENTER_IDS.includes(r.ch.enter)) problems.push(`${r.dir}: enter "${r.ch.enter}" tanımsız`);
    if (SCROLL_IDS.length && !SCROLL_IDS.includes(r.ch.scroll)) problems.push(`${r.dir}: scroll "${r.ch.scroll}" tanımsız`);
    if (HOVER_IDS.length && !HOVER_IDS.includes(r.ch.hover)) problems.push(`${r.dir}: hover "${r.ch.hover}" tanımsız`);
    const required = SCROLL_REQUIRED[r.hero];
    if (required && r.ch.scroll !== required) {
      problems.push(`${r.dir}: hero "${r.hero}" ⇒ scroll "${required}" zorunlu (şu an "${r.ch.scroll}")`);
    }
    for (const bad of HOVER_FORBIDDEN_BY_FAMILY[r.family] ?? []) {
      if (r.ch.hover === bad) problems.push(`${r.dir}: "${r.family}" ailesinde hover "${bad}" yasak`);
    }
  }
  if (problems.length) return { problems, warns };

  const enterCount = new Map();
  for (const r of rows) enterCount.set(r.ch.enter, (enterCount.get(r.ch.enter) ?? 0) + 1);
  const top = [...enterCount.entries()].sort((a, b) => b[1] - a[1])[0];
  if (top && top[1] / n > 0.3) {
    problems.push(`enter deseni "${top[0]}" ${top[1]}/${n} (%${Math.round((top[1] / n) * 100)}) — tavan %30`);
  }
  for (const id of ENTER_IDS) {
    const used = enterCount.get(id) ?? 0;
    if (used < 3) problems.push(`enter deseni "${id}" yalnız ${used} stilde (ölü desen, en az 3)`);
  }
  const byFamily = new Map();
  for (const r of rows) {
    if (!byFamily.has(r.family)) byFamily.set(r.family, []);
    byFamily.get(r.family).push(r);
  }
  for (const [family, list] of byFamily) {
    const target = list.length >= 4 ? 3 : 1;
    const distinct = new Set(list.map((r) => r.ch.enter)).size;
    if (distinct < target) problems.push(`aile "${family}": ${distinct} farklı enter deseni — en az ${target}`);
  }
  return { problems, warns };
}

/** Sözlük kural setinin no-op olmadığını kanıtlar (--self-test). */
const VOCAB_SELF_TEST = (() => {
  const base = ENTER_IDS.slice(0, 3);
  const mk = (family, ch) => ({ dir: `${family}-x`, family, hero: null, ch });
  const ok = [
    mk('Sade', { enter: base[0], scroll: 'reveal', hover: 'scale', reduced: 'opacity' }),
    mk('Sade', { enter: base[1], scroll: 'reveal', hover: 'scale', reduced: 'opacity' }),
    mk('Cesur', { enter: base[2], scroll: 'reveal', hover: 'scale', reduced: 'opacity' }),
  ];
  const cases = {
    missing: vocabProblems([...ok, { dir: 'yok', family: 'Sade', hero: null, ch: null }]).problems.length > 0,
    undefinedId: vocabProblems([...ok, mk('Cesur', { enter: 'yok-desen', scroll: 'reveal', hover: 'scale', reduced: 'opacity' })]).problems.length > 0,
    monotone: vocabProblems(ok.map((r) => ({ ...r, ch: { ...r.ch, enter: base[0] } }))).problems.length > 0,
    deadPattern: vocabProblems(ok).problems.some((p) => /ölü desen/.test(p)),
    stickyRule: vocabProblems([
      mk('Cesur', { enter: base[0], scroll: 'reveal', hover: 'scale', reduced: 'opacity' }),
      { dir: 'sticky-x', family: 'Cesur', hero: 'sticky', ch: { enter: base[1], scroll: 'reveal', hover: 'scale', reduced: 'opacity' } },
    ]).problems.some((p) => /zorunlu/.test(p)),
    hoverFamily: vocabProblems([mk('Sade', { enter: base[0], scroll: 'reveal', hover: 'tilt-3d', reduced: 'opacity' })]).problems.some((p) => /yasak/.test(p)),
  };
  return cases;
})();


/*
 * --self-test: dedektörün no-op olmadığını dışarıdan denetlenebilir kılar.
 * Gerçek katalog taranmadan yalnız sentetik problar çalışır.
 */
if (process.argv.includes('--self-test')) {
  const pass = Object.entries(VARIETY_SELF_TEST).filter(([k]) => k !== 'minDiffs').every(([, v]) => v === true);
  const probeOf = (other) =>
    comparePairs([
      { dir: 'syn-a', family: 'self-test', sig: ['0.6s', 'ease-out', '16px', '0.05', 'top 84%', '0.7s', '200ms'], key: 'base' },
      { dir: 'syn-b', family: 'self-test', sig: other, key: other.join('|') },
    ]);
  const twin = probeOf(['0.6s', 'ease-out', '16px', '0.05', 'top 84%', '0.7s', '200ms']);
  const near = probeOf(['0.6s', 'ease-out', '16px', '0.05', 'top 84%', '0.9s', '200ms']);
  const border = probeOf(['0.6s', 'ease-out', '16px', '0.05', 'top 84%', '0.9s', '240ms']);
  const ok3 = probeOf(['0.6s', 'ease-out', '20px', '0.05', 'top 84%', '0.9s', '240ms']);
  console.log('VOCAB_SELF_TEST · hareket sözlüğü kuralları');
  console.log(JSON.stringify(VOCAB_SELF_TEST, null, 2));
  console.log('VARIETY_SELF_TEST · eşik aile içinde ≥' + MIN_DIFFS + ' fark');
  console.log(JSON.stringify(VARIETY_SELF_TEST, null, 2));
  console.log('sentetik ikiz       → ' + twin.length + ' çift · ' + (twin[0] ? twin[0].severity + ' · same ' + twin[0].same : 'yok'));
  console.log('tek parametre farklı→ ' + near.length + ' çift · ' + (near[0] ? near[0].severity + ' · same ' + near[0].same : 'yok'));
  console.log('iki parametre farklı→ ' + border.length + ' çift · ' + (border[0] ? border[0].severity + ' · same ' + border[0].same : 'yok'));
  console.log('üç parametre farklı → ' + ok3.length + ' çift · ' + (ok3.length === 0 ? 'geçti' : 'beklenmedik'));
  console.log(pass ? 'self-test: GEÇTİ (kural no-op değil)' : 'self-test: KALDI (kural no-op!)');
  process.exit(pass ? 0 : 1);
}

/* 1) her stilde motion.sequences var mı, süreler bütçede mi */
const dirs = fs
  .readdirSync(STYLES, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES, d.name, 'tokens.json')))
  .map((d) => d.name)
  .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

const VOCAB_ROWS = dirs.map((d) => readChoreo(d));
const vocab = vocabProblems(VOCAB_ROWS);
for (const p of vocab.problems) F(p);
for (const w of vocab.warns) W(w);



const families = new Map();
const sigs = [];
for (const dir of dirs) {
  const t = JSON.parse(fs.readFileSync(path.join(STYLES, dir, 'tokens.json'), 'utf8'));
  const m = t.motion ?? {};
  const s = m.sequences;
  if (!s) {
    F(`${dir}: tokens.json motion.sequences yok — playbook §6.1 reçetesi uygulanmamış`);
    continue;
  }
  for (const key of ['enter', 'scroll', 'pin', 'hover']) {
    if (!s[key]) F(`${dir}: motion.sequences.${key} eksik`);
  }
  const enter = secs(s.enter?.duration);
  const scroll = secs(s.scroll?.duration);
  if (enter === null) F(`${dir}: enter.duration okunamadı (${s.enter?.duration})`);
  else if (enter > 1.2) F(`${dir}: enter ${s.enter.duration} > 1.2s (lüks hareket üst sınırı)`);
  if (scroll !== null && scroll > 1.2) F(`${dir}: scroll ${s.scroll.duration} > 1.2s`);
  if (s.pin?.enabled && !s.pin?.scrub) F(`${dir}: pin açık ama scrub değeri yok`);
  if (s.pin?.enabled && Number(s.pin.scrub) > 1.4) W(`${dir}: scrub ${s.pin.scrub} > 1.4 (gecikmeli his)`);
  if (!s.reduced && !m.reduced) W(`${dir}: reduced-motion notu yok`);
  const fam = m.family ?? 'bilinmiyor';
  families.set(fam, (families.get(fam) ?? 0) + 1);
  const sig = sigOf(s);
  sigs.push({ dir, family: fam, sig, key: sigKey(sig) });
}

/* 1.5) çeşitlilik kapısı — aynı ailede imza kopyası yasak (playbook §6.2) */
const varietyPairs = comparePairs(sigs);
for (const p of varietyPairs) {
  const detail =
    `7 parametrenin ${p.same}${ordinalSuffix(p.same)} aynı; çakışan: ${p.colliding.join(', ')}; ` +
    `farklı: ${p.differing.length ? p.differing.join(', ') : 'hiçbiri (tam kopya)'}`;
  if (p.severity === 'copy') {
    F(
      `çeşitlilik: ${p.a} ~ ${p.b} (${p.family}) — ${detail}; en az ${MIN_DIFFS} parametre ` +
        `ayrışmalı (playbook §6.2)`,
    );
  } else {
    W(`çeşitlilik sınırda: ${p.a} ~ ${p.b} (${p.family}) — ${detail}; ${MIN_DIFFS} fark var, ` +
      `3. farkı ekle (--strict'te hata)`);
  }
}
if (!Object.entries(VARIETY_SELF_TEST).filter(([k]) => k !== 'minDiffs').every(([, v]) => v === true)) {
  F('çeşitlilik kapısı no-op: sentetik ikiz/tek-fark yakalanmadı ya da 3 farklı imza yanlış kırmızıya düştü');
}
if (!Object.values(VOCAB_SELF_TEST).every((v) => v === true)) {
  F(`hareket sözlüğü kapısı no-op: ${Object.entries(VOCAB_SELF_TEST).filter(([, v]) => !v).map(([k]) => k).join(', ')}`);
}

const familyVariety = new Map();
for (const r of sigs) {
  if (!familyVariety.has(r.family)) familyVariety.set(r.family, []);
  familyVariety.get(r.family).push(r);
}
const familyDistinct = Object.fromEntries(
  [...familyVariety].map(([fam, rows]) => [
    fam,
    { styles: rows.length, distinct: new Set(rows.map((r) => r.key)).size },
  ]),
);
const sigGroups = new Map();
for (const r of sigs) {
  if (!sigGroups.has(r.key)) {
    sigGroups.set(r.key, { signature: Object.fromEntries(SIG_PARAMS.map(([label], k) => [label, r.sig[k]])), family: r.family, styles: [] });
  }
  sigGroups.get(r.key).styles.push(r.dir);
}

/* 2) şablonlarda sonsuz animasyon / reduced-motion izi — yalnız gerçek şablonlar.
 * Render dalgası kit/render/ altında `.tmp-<slug>-<scene>.html` ara dosyaları bırakır
 * (gitignore'lu, binlerce); bunlar şablon değil ara çıktıdır. Taranırlarsa kapı eşzamanlı
 * render sırasında yanlış kırmızıya düşer, bu yüzden nokta ile başlayan dosyalar atlanır.
 * Gerçek şablonlar (*.html) istisnasız taranmaya devam eder.
 */
const tpls = fs
  .readdirSync(RENDER)
  .filter((f) => f.endsWith('.html') && !f.startsWith('.'));
for (const f of tpls) {
  const src = fs.readFileSync(path.join(RENDER, f), 'utf8');
  if (/animation[^;]*infinite/i.test(src)) F(`kit/render/${f}: sonsuz animasyon (infinite) — yasak`);
  if (/animation-play-state:\s*paused/.test(src) && !/reduced-motion/.test(src)) {
    W(`kit/render/${f}: paused animasyon var, reduced-motion notu yok`);
  }
}

/* 3) estate şablonları: poster + duraklat + scrub dili */
for (const f of ['estate.html', 'mobile-estate.html']) {
  const p = path.join(RENDER, f);
  if (!fs.existsSync(p)) continue;
  const src = fs.readFileSync(p, 'utf8');
  if (!/poster/i.test(src)) F(`kit/render/${f}: poster etiketi yok (LCP poster olmalı)`);
  if (!/film-ctl|duraklat|pause/i.test(src)) F(`kit/render/${f}: duraklat/oynat kontrolü yok (WCAG 2.2.2)`);
}
const motionBoard = path.join(RENDER, 'motion.html');
if (fs.existsSync(motionBoard)) {
  const src = fs.readFileSync(motionBoard, 'utf8');
  if (!/reduced-motion/i.test(src)) F('kit/render/motion.html: reduced-motion notu yok');
}

/* 4) global reduced-motion bloğu tokens.css'te var mı */
/* 5b) canlı önizleme sözleşmesi (M2): sabit süre yok, stilin verisi kullanılır */
const LIVE = path.join(ROOT, 'kit', 'live.html');
const LIVE_MOTION = path.join(ROOT, 'kit', 'live-motion.js');
if (!fs.existsSync(LIVE_MOTION)) {
  F('kit/live-motion.js yok — node kit/build-gallery.mjs (canlı önizleme stilin verisini kullanmalı)');
} else {
  const src = fs.readFileSync(LIVE_MOTION, 'utf8');
  const m = src.match(/window\.STYLE_MOTION = ([\s\S]*);\s*$/);
  if (!m) {
    F('kit/live-motion.js: window.STYLE_MOTION tanımı okunamadı');
  } else {
    let map = null;
    try {
      map = JSON.parse(m[1]);
    } catch {
      F('kit/live-motion.js: JSON çözülemedi');
    }
    if (map) {
      const missing = dirs.map((d) => d.replace(/^\d+-/, '')).filter((slug) => !map[slug]);
      if (missing.length) F(`live-motion.js: ${missing.length} stil eksik (ör. ${missing.slice(0, 3).join(', ')})`);
      for (const [slug, v] of Object.entries(map)) {
        if (!ENTER_IDS.includes(v?.enter?.pattern)) F(`live-motion.js ${slug}: enter deseni "${v?.enter?.pattern}" tanımsız`);
        if (!(v?.enter?.durationMs > 0)) F(`live-motion.js ${slug}: enter.durationMs sayı değil`);
        if (!SCROLL_IDS.includes(v?.scroll?.pattern)) F(`live-motion.js ${slug}: scroll deseni tanımsız`);
        if (!(v?.hover?.durationMs > 0)) F(`live-motion.js ${slug}: hover.durationMs sayı değil`);
      }
    }
  }
}
if (fs.existsSync(LIVE)) {
  const html = fs.readFileSync(LIVE, 'utf8');
  if (!html.includes('live-motion.js')) F('kit/live.html: live-motion.js yüklenmiyor (stilin verisi bağlanmamış)');
  if (!html.includes('render/motion/patterns.css')) F('kit/live.html: patterns.css yüklenmiyor (desen sınıfları yok)');
  if (!html.includes('STYLE_MOTION')) F('kit/live.html: STYLE_MOTION okunmuyor');
  if (!/dataset\.motion\s*=/.test(html)) F('kit/live.html: data-motion uygulanmıyor');
  // sabit süre imzası: .24s / .9s gibi literal transition (fallback değil)
  const hard = html.match(/transition:[^;]*(?:\.\d+s|\d{2,4}ms)/g) ?? [];
  const offending = hard.filter((x) => !/var\(--/.test(x));
  if (offending.length) F(`kit/live.html: ${offending.length} sabit süreli transition (stilin süresi kullanılmalı): ${offending[0]}`);
}

const tokens = fs.readFileSync(path.join(ROOT, 'kit', 'tokens.css'), 'utf8');
if (!/@media\s*\(prefers-reduced-motion:\s*reduce\)/.test(tokens)) {
  F('kit/tokens.css: global prefers-reduced-motion bloğu yok');
}

const summary = {
  styles: dirs.length,
  families: Object.fromEntries([...families].sort((a, b) => b[1] - a[1])),
  variety: {
    families: familyDistinct,
    signatures: {
      total: sigGroups.size,
      params: SIG_PARAMS.map(([label]) => label),
      groups: [...sigGroups.values()],
    },
    duplicatePairs: varietyPairs.map((p) => ({
      family: p.family,
      styles: [p.a, p.b],
      same: p.same,
      colliding: p.colliding,
      differing: p.differing,
      severity: p.severity,
    })),
    duplicatePairCount: {
      total: varietyPairs.length,
      violating: varietyPairs.filter((p) => p.severity === 'copy').length,
      borderline: varietyPairs.filter((p) => p.severity === 'borderline').length,
      exemptions: 0,
    },
    threshold: { minDiffs: MIN_DIFFS, borderlineDiffs: BORDERLINE_DIFFS },
    selfTest: VARIETY_SELF_TEST,
  },
  vocabulary: {
    enter: [...new Set(VOCAB_ROWS.map((r) => r.ch?.enter).filter(Boolean))],
    scroll: [...new Set(VOCAB_ROWS.map((r) => r.ch?.scroll).filter(Boolean))],
    hover: [...new Set(VOCAB_ROWS.map((r) => r.ch?.hover).filter(Boolean))],
    selfTest: VOCAB_SELF_TEST,
    problems: vocab.problems,
  },
  failures: fail,
  warnings: warn,
};

if (JSON_OUT) {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log(`hareket kapısı · ${dirs.length} stil · ${new Set(families.keys()).size} aile`);
  console.log(
    `aile dağılımı: ${[...families].map(([k, v]) => `${k} ${v}`).join(' · ')}`,
  );
  console.log(
    `çeşitlilik: ${sigGroups.size} farklı imza / ${sigs.length} stil · eşik aile içinde ` +
      `≥${MIN_DIFFS} fark (yoksa kopya) · ${varietyPairs.length} çift ` +
      `(${varietyPairs.filter((p) => p.severity === 'copy').length} ihlal, ` +
      `${varietyPairs.filter((p) => p.severity === 'borderline').length} sınırda · muafiyet yok)`,
  );
  console.log(
    `aile başına farklı imza: ${[...familyVariety]
      .map(([fam, rows]) => `${fam} ${new Set(rows.map((r) => r.key)).size}/${rows.length}`)
      .join(' · ')}`,
  );
  if (warn.length) {
    console.log(`\n${warn.length} uyarı:`);
    for (const w of warn) console.log(`  ! ${w}`);
  }
  if (fail.length) {
    console.log(`\n${fail.length} HATA:`);
    for (const f of fail) console.log(`  × ${f}`);
  }
  console.log(
    `\n${dirs.length} stil · ${fail.length} hata · ${warn.length} uyarı` +
      (fail.length === 0 && (!STRICT || warn.length === 0) ? ' — temiz' : ''),
  );
}

process.exit(fail.length || (STRICT && warn.length) ? 1 : 0);
