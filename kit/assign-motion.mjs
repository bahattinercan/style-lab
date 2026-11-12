#!/usr/bin/env node
/**
 * kit/assign-motion.mjs — 145 stile hareket koreografisi atar (deterministik).
 *
 * Neden: `motion.sequences` yalnızca **sayı** taşıyordu (süre/eğri/offset). Ölçüm (kit/dist/motion.md):
 * 110/145 stil "opacity+transform", 94/145 scroll = reveal, en kalabalık parmak izi %51. Yani imzalar
 * sayıda farklı, desende aynı. Bu script `tokens.json → motion.choreography` alanını
 * `kit/render/motion/patterns.json` sözlüğünden seçer; seçim aile + arketip + hash ile yapılır.
 *
 * Kısıtlar (kapı: kit/motion-check.mjs):
 *   · aile ≥4 stilse en az 3 farklı `enter` deseni
 *   · tek `enter` deseni ≤ %30 stil (43/145)
 *   · her desen ≥3 stilde canlı
 *   · arketip ↔ scroll deseni: sticky ⇒ pin-scrub, index ⇒ grid-stagger, fullbleed ⇒ parallax…
 *   · `kit/motion/policy.json` yasakları hiçbir stile atanamaz (ör. custom-cursor desenleri sözlükte yok)
 *
 * Kullanım:
 *   node kit/assign-motion.mjs --dry | --apply | --check [--styles a,b] [--json]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const PATTERNS = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'motion', 'patterns.json'), 'utf8'));

const ARGV = process.argv.slice(2);
const APPLY = ARGV.includes('--apply');
const CHECK = ARGV.includes('--check');
const JSON_OUT = ARGV.includes('--json');
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  if (i < 0) return null;
  const list = (ARGV[i + 1] ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  return list.length ? new Set(list) : null;
})();

const ENTER = PATTERNS.patterns.filter((p) => p.kind === 'enter').map((p) => p.id);
const SCROLL = PATTERNS.patterns.filter((p) => p.kind === 'scroll').map((p) => p.id);
const HOVER = PATTERNS.patterns.filter((p) => p.kind === 'hover').map((p) => p.id);
const PAGE = PATTERNS.patterns.filter((p) => p.kind === 'page').map((p) => p.id);
const REDUCED = PATTERNS.reducedStrategies.map((r) => r.id);

const MAX_ENTER_SHARE = 0.3;
const MAX_ENTER = Math.floor(145 * MAX_ENTER_SHARE); // 43

/** Arketip × hareket matrisi: tek kaynak kit/render/motion/archetypes.json (M2). */
const ARCH = (() => {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'motion', 'archetypes.json'), 'utf8')).archetypes ?? {};
  } catch {
    return {};
  }
})();

/** Aile → izinli giriş desenleri (ilk eleman tercih edilen). */
const ENTER_BY_FAMILY = {
  Sade: ['fade-rise', 'line-mask', 'clip-curtain'],
  Yüzey: ['scale-settle', 'blur-in', 'clip-curtain'],
  Cesur: ['clip-curtain', 'split-slide', 'scale-settle'],
  Retro: ['letter-stagger', 'clip-curtain', 'fade-rise'],
  Sanatsal: ['blur-in', 'line-mask', 'letter-stagger'],
  Geometrik: ['clip-curtain', 'fade-rise', 'scale-settle'],
  Tipografik: ['line-mask', 'letter-stagger', 'fade-rise'],
  Organik: ['blur-in', 'fade-rise', 'scale-settle'],
  'Yeni Dalga': ['blur-in', 'scale-settle', 'clip-curtain'],
  Zamansız: ['fade-rise', 'line-mask', 'blur-in'],
  Teknik: ['fade-rise', 'scale-settle', 'blur-in'],
  'Veri & Gösterge': ['fade-rise', 'scale-settle', 'blur-in'],
  Endüstriyel: ['fade-rise', 'scale-settle', 'line-mask'],
  'Kültürel & Bölgesel': ['line-mask', 'letter-stagger', 'clip-curtain'],
  'Doğa & Organik': ['blur-in', 'fade-rise', 'clip-curtain'],
  'Yayın & Tipografi': ['line-mask', 'letter-stagger', 'fade-rise'],
  'Hareket & Optik': ['letter-stagger', 'clip-curtain', 'blur-in'],
  Etkileşim: ['scale-settle', 'fade-rise', 'split-slide'],
  Oyuncul: ['scale-settle', 'split-slide', 'letter-stagger'],
  'Materyal & Lüks': ['fade-rise', 'blur-in', 'line-mask'],
  'Deneysel & Gelecek': ['blur-in', 'clip-curtain', 'scale-settle'],
  'Sahne & Prestij': ['clip-curtain', 'blur-in', 'letter-stagger', 'scale-settle'],
  Diğer: ['fade-rise', 'blur-in', 'clip-curtain'],
};

/**
 * Arketip → izinli scroll desenleri. İlk eleman ZORUNLU (M2 kuralı), kalanlar serbest:
 * böylece "herkes reveal" tekdüzeliği kırılır ama sticky/index kimliği korunur.
 */
const SCROLL_BY_ARCHETYPE = {
  // varsayılanlar archetypes.json'dan okunur; burada yalnız geri dönüş var
  sticky: ['pin-scrub'],
  index: ['grid-stagger'],
  fullbleed: ['parallax', 'reveal', 'mask-wipe', 'scroll-zoom'],
  product: ['reveal', 'counter', 'grid-stagger', 'scroll-zoom', 'stack-pin'],
  type: ['reveal', 'counter', 'mask-wipe', 'velocity-skew'],
  centered: ['reveal', 'counter', 'scroll-zoom'],
  split: ['reveal', 'parallax', 'counter', 'mask-wipe'],
  'split-reverse': ['reveal', 'parallax', 'grid-stagger', 'stack-pin'],
};
const MAX_SCROLL_SHARE = 0.4;
const MAX_SCROLL = Math.floor(145 * MAX_SCROLL_SHARE);

/** Aile → hover deseni (Sade'de tilt-3d yasak; Oyuncul'da serbest). */
const HOVER_BY_FAMILY = {
  Sade: ['underline-draw', 'scale'],
  Yüzey: ['scale', 'underline-draw'],
  Cesur: ['scale', 'underline-draw'],
  Retro: ['underline-draw', 'scale'],
  Sanatsal: ['underline-draw', 'scale'],
  'Veri & Gösterge': ['scale', 'underline-draw'],
  Endüstriyel: ['scale'],
  Teknik: ['scale', 'underline-draw'],
  Etkileşim: ['scale', 'underline-draw'],
  Oyuncul: ['scale', 'tilt-3d'],
  'Deneysel & Gelecek': ['scale', 'tilt-3d', 'underline-draw'],
  'Sahne & Prestij': ['scale', 'underline-draw'],
};
const HOVER_DEFAULT = ['scale', 'underline-draw'];

const FAMILIES = (() => {
  const j = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'families.json'), 'utf8'));
  return (j.families ?? []).map((f) => ({ from: f.from, to: f.to, name: f.name }));
})();
const familyOf = (num) => FAMILIES.find((f) => num >= f.from && num <= f.to)?.name ?? 'Diğer';

function hash(slug) {
  let h = 0x811c9dc5;
  for (let i = 0; i < slug.length; i += 1) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

function discover() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => {
      const num = parseInt(d.name, 10);
      const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, d.name, 'tokens.json'), 'utf8'));
      return {
        dirName: d.name,
        num,
        slug: tokens.slug ?? d.name.replace(/^\d+-/, ''),
        family: familyOf(num),
        tokens,
        path: path.join(STYLES_DIR, d.name, 'tokens.json'),
      };
    })
    .sort((a, b) => a.num - b.num);
}

function computeAssignments(rows) {
  const counts = new Map(ENTER.map((id) => [id, 0]));
  const assigned = [];

  // 1) aile içinde dönüşümlü seçim: aynı ailede aynı desene yığılmayı engeller
  const byFamily = new Map();
  for (const r of rows) {
    if (!byFamily.has(r.family)) byFamily.set(r.family, []);
    byFamily.get(r.family).push(r);
  }
  for (const [family, list] of byFamily) {
    const allowed = (ENTER_BY_FAMILY[family] ?? ENTER_BY_FAMILY.Diğer).filter((id) => ENTER.includes(id));
    const start = hash(family) % allowed.length;
    list.forEach((r, i) => {
      // ilk turda herkes farklı desene dağılır; sonra sırayla döner
      const pref = (ARCH[r.tokens.layout?.hero ?? 'split']?.enterPreferred ?? []).find((id) => allowed.includes(id));
      const ordered = pref ? [pref, ...allowed.filter((id) => id !== pref)] : allowed;
      // 2/3 arketip tercihi (varsa), 1/3 aile rotasyonu: tercih ile çeşitlilik çakışmasın
      const usePref = pref && hash(r.slug) % 3 !== 0;
      let chosen = usePref ? pref : ordered[(start + i) % ordered.length];
      // global tavan: doluysa ikinci/üçüncü adaya geç
      if ((counts.get(chosen) ?? 0) >= MAX_ENTER) {
        chosen = ordered.find((id) => (counts.get(id) ?? 0) < MAX_ENTER) ?? chosen;
      }
      counts.set(chosen, (counts.get(chosen) ?? 0) + 1);
      assigned.push({ row: r, enter: chosen });
    });
  }

  // 1b) aile çeşitliliği garantisi: aile ≥4 stilse ≥3 farklı enter (tavan korunur)
  const byFam = new Map();
  for (const a of assigned) {
    if (!byFam.has(a.row.family)) byFam.set(a.row.family, []);
    byFam.get(a.row.family).push(a);
  }
  for (const [family, list] of byFam) {
    const target = list.length >= 4 ? 3 : 1;
    const allowed = (ENTER_BY_FAMILY[family] ?? ENTER_BY_FAMILY.Diğer).filter((id) => ENTER.includes(id));
    for (let guard = 0; guard < 12; guard += 1) {
      const used = new Set(list.map((a) => a.enter));
      if (used.size >= target) break;
      const unused = allowed.find((id) => !used.has(id) && (counts.get(id) ?? 0) < MAX_ENTER);
      if (!unused) break;
      // kurban: ailede en kalabalık desenden, hash ile deterministik
      const freq = new Map();
      for (const a of list) freq.set(a.enter, (freq.get(a.enter) ?? 0) + 1);
      const [crowded, n] = [...freq.entries()].sort((x, y) => y[1] - x[1])[0];
      if (n < 2) break;
      const victim = list
        .filter((a) => a.enter === crowded)
        .sort((a, b) => hash(a.row.slug) - hash(b.row.slug))[0];
      counts.set(crowded, (counts.get(crowded) ?? 1) - 1);
      counts.set(unused, (counts.get(unused) ?? 0) + 1);
      victim.enter = unused;
    }
  }

  // 2) scroll/hover: arketip + aile kuralı (ilk eleman zorunlu, kalanı tavanla dengelenir)
  const scrollCounts = new Map(SCROLL.map((id) => [id, 0]));
  return assigned.map(({ row: r, enter }) => {
    const hero = r.tokens.layout?.hero ?? 'split';
    const allowedScroll = ((ARCH[hero]?.scroll ?? SCROLL_BY_ARCHETYPE[hero]) ?? ['reveal']).filter((id) => SCROLL.includes(id));
    const h = hash(r.slug);
    let scroll = allowedScroll.length === 1 ? allowedScroll[0] : allowedScroll[h % allowedScroll.length];
    if ((scrollCounts.get(scroll) ?? 0) >= MAX_SCROLL) {
      scroll = allowedScroll.find((id) => (scrollCounts.get(id) ?? 0) < MAX_SCROLL) ?? scroll;
    }
    scrollCounts.set(scroll, (scrollCounts.get(scroll) ?? 0) + 1);
    const hoverPool = (HOVER_BY_FAMILY[r.family] ?? HOVER_DEFAULT).filter((id) => HOVER.includes(id));
    const hover = hoverPool[hash(r.slug) % hoverPool.length] ?? 'scale';
    const page = PAGE.includes('crossfade') ? 'crossfade' : null;
    const reduced = r.tokens.motion?.sequences?.pin?.enabled ? 'static-frame' : 'opacity';
    return {
      dirName: r.dirName,
      slug: r.slug,
      family: r.family,
      choreography: { enter, scroll, hover, ...(page ? { page } : {}), reduced: REDUCED.includes(reduced) ? reduced : 'opacity' },
    };
  });
}

/** Desenlerin gerçekten değiştirdiği CSS özellikleri (tokens.json sözleşmesi). */
const PROPS_OF = new Map(PATTERNS.patterns.map((p) => [p.id, p.properties ?? []]));

function withChoreography(tokens, choreography) {
  const next = { ...tokens };
  if ((next.version ?? 3) < 4) next.version = 4;
  const motion = { ...(next.motion ?? {}) };
  motion.choreography = choreography;
  // properties artık desenden türer (yalnız opacity+transform diyen eski liste düzeltilir)
  const props = new Set();
  for (const id of [choreography.enter, choreography.scroll, choreography.hover, choreography.page].filter(Boolean)) {
    for (const prop of PROPS_OF.get(id) ?? []) props.add(prop);
  }
  if (props.size) motion.properties = [...props];
  next.motion = motion;
  return next;
}

function main() {
  const rows = discover();
  const assignments = computeAssignments(rows);
  const scoped = ONLY
    ? assignments.filter((a) => ONLY.has(a.slug) || ONLY.has(String(parseInt(a.dirName, 10))))
    : assignments;

  const drift = [];
  for (const a of scoped) {
    const cur = rows.find((r) => r.slug === a.slug)?.tokens?.motion?.choreography ?? null;
    if (!cur || JSON.stringify(cur) !== JSON.stringify(a.choreography)) {
      drift.push({ slug: a.slug, dir: a.dirName, current: cur, want: a.choreography });
    }
  }

  if (APPLY) {
    for (const a of scoped) {
      const row = rows.find((r) => r.slug === a.slug);
      fs.writeFileSync(row.path, JSON.stringify(withChoreography(row.tokens, a.choreography), null, 2) + '\n');
    }
    console.log(`yazıldı: ${scoped.length} tokens.json (şema v4 · motion.choreography)`);
    if (!JSON_OUT) printDistribution(assignments);
    return 0;
  }

  if (CHECK) {
    if (drift.length) {
      console.log(`× ${drift.length} stilde koreografi öneriden farklı (drift):`);
      for (const d of drift.slice(0, 8)) console.log(`  - ${d.dir}: ${JSON.stringify(d.current)} → ${JSON.stringify(d.want)}`);
      if (drift.length > 8) console.log(`  … ${drift.length - 8} tane daha`);
      console.log('düzeltme: node kit/assign-motion.mjs --apply');
      return 1;
    }
    console.log(`✓ koreografi ataması güncel (${scoped.length} stil)`);
    return 0;
  }

  if (JSON_OUT) {
    console.log(JSON.stringify({ assignments: scoped }, null, 2));
    return 0;
  }
  for (const a of scoped) console.log(a.dirName.padEnd(28), a.choreography.enter.padEnd(14), a.choreography.scroll.padEnd(13), a.choreography.hover);
  printDistribution(assignments);
  return 0;
}

function printDistribution(assignments) {
  const tally = (key) => {
    const m = new Map();
    for (const a of assignments) m.set(a.choreography[key], (m.get(a.choreography[key]) ?? 0) + 1);
    return [...m.entries()].sort((x, y) => y[1] - x[1]);
  };
  const n = assignments.length;
  for (const key of ['enter', 'scroll', 'hover']) {
    console.log(`\n— ${key} dağılımı —`);
    for (const [k, v] of tally(key)) console.log(`  ${k.padEnd(16)} ${String(v).padStart(3)}  ${Math.round((v / n) * 100)}%`);
  }
  const fp = new Map();
  for (const a of assignments) {
    const k = `${a.choreography.enter}|${a.choreography.scroll}|${a.choreography.hover}`;
    fp.set(k, (fp.get(k) ?? 0) + 1);
  }
  const top = [...fp.entries()].sort((x, y) => y[1] - x[1])[0];
  console.log(`\nparmak izi: ${fp.size} kombinasyon · en kalabalık ${top[0]} = ${top[1]} (${Math.round((top[1] / n) * 100)}%)`);
}

process.exit(main());
