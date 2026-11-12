#!/usr/bin/env node
/**
 * kit/motion-audit.mjs — hareketin ÖLÇÜMÜ (kit/dist/motion.md).
 *
 * Neden: `motion-check.mjs` kural denetler (kopya var mı, bütçe aşıldı mı) ama katalogun
 * hareket **dili** hakkında hiçbir şey söylemez. Ölçüm (v5 başı): 145 stilin 110'u tam olarak
 * `["opacity","transform"]`, 145/145 `scroll` = offsetY+fade. Yani imzalar sayıda farklı,
 * desende aynı. Bu rapor o farkı her koşuda görünür kılar ve M1 (hareket sözlüğü) hedeflerini ölçer.
 *
 * Kullanım:
 *   node kit/motion-audit.mjs            # yaz
 *   node kit/motion-audit.mjs --check    # güncel mi (bayat = exit 1)
 *   node kit/motion-audit.mjs --json
 *   node kit/motion-audit.mjs --quiet
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const MOTION_JSON = path.join(ROOT, 'kit', 'dist', 'motion.json');
const POLICY = path.join(ROOT, 'kit', 'motion', 'policy.json');
const OUT = path.join(ROOT, 'kit', 'dist', 'motion.md');
const ARGV = process.argv.slice(2);
const CHECK = ARGV.includes('--check');
const JSON_OUT = ARGV.includes('--json');
const QUIET = ARGV.includes('--quiet');

const readJson = (p, fb = null) => {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return fb;
  }
};
const pct = (v, n) => `%${Math.round((v / n) * 100)}`;
const pad = (s, w) => String(s).padEnd(w);

function styleNumerals() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => ({
      dirName: d.name,
      slug: d.name.replace(/^\d+-/, ''),
      tokens: readJson(path.join(STYLES_DIR, d.name, 'tokens.json'), {}),
    }))
    .sort((a, b) => parseInt(a.dirName, 10) - parseInt(b.dirName, 10));
}

/**
 * Sayı imzasından DESEN sınıfı çıkarır. Şu an koreografi alanı yok (M1 ekleyecek), bu yüzden
 * sınıflandırma `properties` + sekans alanlarından türetiliyor — tam da ölçmek istediğimiz şey:
 * kaç stil gerçekten farklı bir desen taşıyor?
 */
/** M1 sonrası: koreografi alanı varsa DESEN oradan okunur; yoksa sayı imzasından sınıflanır. */
function classifyFromChoreo(ch) {
  return { enter: ch.enter, scroll: ch.scroll, hover: ch.hover, source: 'choreography' };
}

function classify(m) {
  const seq = m.sequences ?? {};
  const props = new Set(m.properties ?? []);
  const enter = props.has('clip-path')
    ? 'mask'
    : props.has('filter')
      ? 'blur'
      : (seq.enter?.offsetYPx ?? 0) === 0
        ? 'fade'
        : 'fade-rise';
  const scroll = seq.pin?.enabled ? 'pin' : (seq.scroll?.offsetYPx ?? 0) === 0 ? 'reveal-fade' : 'reveal-rise';
  const hover = (seq.hover?.imageScale ?? 1) > 1 ? 'image-scale' : 'flat';
  return { enter, scroll, hover };
}

function labDemos() {
  const dir = path.join(ROOT, 'kit', 'motion');
  const out = [];
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.mjs'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    for (const m of src.matchAll(/\{\s*\n\s*id:\s*'([a-z0-9-]+)'[\s\S]*?cat:\s*'([^']+)'/g)) {
      out.push({ id: m[1], cat: m[2], file: f });
    }
  }
  return out;
}

function claimsAudit() {
  const files = [
    ['README.md', path.join(ROOT, 'README.md')],
    ['playbook.md', path.join(ROOT, 'playbook.md')],
  ];
  const problems = [];
  for (const [label, p] of files) {
    if (!fs.existsSync(p)) continue;
    const txt = fs.readFileSync(p, 'utf8');
    // elle yazılmış "N farklı eğri" iddiası ölçümle bağımsız kalıyor → yasak
    const m = txt.match(/(\d+)\s+farklı eğri/);
    if (m) problems.push(`${label}: "${m[0]}" elle yazılmış — eğri sayısı kit/dist/motion.md'den okunmalı`);
    if (label === 'playbook.md' && !txt.includes('kit/motion/policy.json')) {
      problems.push(`${label}: yasak listesi kit/motion/policy.json dosyasını işaret etmiyor`);
    }
  }
  return problems;
}

function build() {
  const motion = readJson(MOTION_JSON, { styles: {}, counts: {} });
  const styles = styleNumerals();
  const n = styles.length;
  const rows = styles.map((s) => {
    const m = motion.styles?.[s.slug] ?? {};
    const layout = s.tokens.layout ?? {};
    const ch = s.tokens.motion?.choreography ?? m.choreography ?? null;
    return { ...s, m, layout, ch, cls: ch ? classifyFromChoreo(ch) : classify(m) };
  });
  const choreoCoverage = rows.filter((r) => r.ch).length;

  const tally = (fn) => {
    const map = new Map();
    for (const r of rows) {
      const k = fn(r);
      map.set(k, (map.get(k) ?? 0) + 1);
    }
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  };

  const enter = tally((r) => r.cls.enter);
  const scroll = tally((r) => r.cls.scroll);
  const hover = tally((r) => r.cls.hover);
  const fingerprints = tally((r) => `${r.cls.enter}|${r.cls.scroll}|${r.cls.hover}`);
  const seqTypes = tally((r) => Object.keys(r.m.sequences ?? {}).sort().join('+'));
  const pinByHero = new Map();
  for (const r of rows) {
    const h = r.layout.hero ?? '—';
    const cur = pinByHero.get(h) ?? { n: 0, pin: 0 };
    cur.n += 1;
    if (r.m.sequences?.pin?.enabled) cur.pin += 1;
    pinByHero.set(h, cur);
  }
  const curves = new Set(rows.map((r) => r.m.curve?.css).filter(Boolean));
  const durations = tally((r) => r.m.sequences?.enter?.durationMs);
  const demos = labDemos();
  const policy = readJson(POLICY, { forbidden: [], teachingOnly: {} });
  const teaching = demoIdsMatching(policy, demos);
  const claimProblems = claimsAudit();

  const lines = [];
  lines.push('# Hareket ölçüm raporu');
  lines.push('');
  lines.push('Üretim: `node kit/motion-audit.mjs` · kaynak: `kit/dist/motion.json` + `styles/*/tokens.json` + `kit/motion/`');
  lines.push('');
  lines.push('> Neden: imza **sayıda** farklı olabilir, **desende** aynı olabilir. Bu rapor ikincisini ölçer.');
  lines.push('> Hedef (M1): aile başına ≥3 farklı `enter` deseni, tek desen ≤%30, arketip ↔ desen kuralı (durum: §1).');
  lines.push('> M1 sonrası desenler `tokens.json → motion.choreography` alanından okunur (sayıdan sınıflama yalnız geriye dönük).');
  lines.push('');
  lines.push('## 1 · Özet');
  lines.push('');
  lines.push('| Ölçü | Değer | Hedef / not |');
  lines.push('|---|---|---|');
  lines.push(`| Stil | ${n} | — |`);
  lines.push(`| Farklı hareket parmak izi (enter\\|scroll\\|hover) | **${fingerprints.length}** | M1 sonrası ≥ 10 |`);
  lines.push(`| En kalabalık parmak izi | \`${fingerprints[0]?.[0] ?? '—'}\` = ${fingerprints[0]?.[1] ?? 0} (${pct(fingerprints[0]?.[1] ?? 0, n)}) | ≤ %30 |`);
  lines.push(`| Sekans türü kombinasyonu | ${seqTypes.length} | \`enter+scroll+pin+hover\` baskın |`);
  const bothProps = rows.filter((r) => {
    const set = new Set(r.m.properties ?? []);
    return set.size === 2 && set.has('opacity') && set.has('transform');
  }).length;
  lines.push(`| \`properties\` = yalnız opacity+transform | ${bothProps}/${n} (${pct(bothProps, n)}) | kalan stiller fade/reveal ailesi (mask/blur/counter desenleri clip/filter kullanıyor) |`);
  const revealCount = scroll.filter(([k]) => k.startsWith('reveal')).reduce((a, [, v]) => a + v, 0);
  lines.push(`| \`scroll\` = reveal | ${revealCount}/${n} (${pct(revealCount, n)}) | M1 sonrası scrub/grid/parallax/counter çeşitlendi |`);
  lines.push(`| Farklı normalize eğri | ${curves.size} (motion.json: ${motion.counts?.curves ?? '—'} curve · ${motion.counts?.approximated ?? '—'} yaklaşık · ${motion.counts?.steps ?? '—'} steps) | — |`);
  lines.push(`| Lab demosu | ${demos.length} | desen ↔ demo bağı: \`kit/render/motion/lab-bindings.json\` (M5, demo süreleri M5b) |`);
  lines.push(`| Doküman iddiası sorunu | ${claimProblems.length} | elle yazılmış sayı = drift |`);
  lines.push(`| \`motion.choreography\` kapsamı | ${choreoCoverage}/${n} | M1: 145/145 |`);
  lines.push('');

  const table = (title, entries, head = 'Desen') => {
    lines.push(`## ${title}`);
    lines.push('');
    lines.push(`| ${head} | Stil | Pay |`);
    lines.push('|---|---|---|');
    for (const [k, v] of entries) lines.push(`| \`${k}\` | ${v} | ${pct(v, n)} |`);
    lines.push('');
  };
  table('2 · Giriş (enter) deseni', enter);
  table('3 · Scroll deseni', scroll);
  table('4 · Hover deseni', hover);
  table('5 · Parmak izleri', fingerprints, 'enter|scroll|hover');

  lines.push('## 6 · Arketip × pin');
  lines.push('');
  lines.push('| Hero arketipi | Stil | pin açık | pay |');
  lines.push('|---|---|---|---|');
  for (const [h, v] of [...pinByHero.entries()].sort((a, b) => b[1].n - a[1].n)) {
    lines.push(`| \`${h}\` | ${v.n} | ${v.pin} | ${pct(v.pin, v.n)} |`);
  }
  lines.push('');
  lines.push('M2 kuralı bu tabloyu zorunlu kılacak: `sticky` ⇒ pin/scrub, `type` ⇒ line-mask, `index` ⇒ grid-stagger.');
  lines.push('');

  lines.push('## 7 · Süre imzası (enter)');
  lines.push('');
  lines.push('| Süre | Stil |');
  lines.push('|---|---|');
  for (const [k, v] of durations.slice(0, 12)) lines.push(`| ${k ?? '—'} ms | ${v} |`);
  if (durations.length > 12) lines.push(`| … ${durations.length - 12} farklı değer daha | |`);
  lines.push('');

  lines.push('## 8 · Laboratuvar ↔ politika');
  lines.push('');
  lines.push(`Politika: \`kit/motion/policy.json\` — ${policy.forbidden?.length ?? 0} yasak, ${Object.keys(policy.teachingOnly ?? {}).length} teachingOnly kaydı.`);
  lines.push('');
  if (teaching.length) {
    lines.push('| Yasak desen | Lab demosu | Durum |');
    lines.push('|---|---|---|');
    for (const t of teaching) lines.push(`| \`${t.rule}\` | \`${t.demo}\` | ${t.ok ? 'teachingOnly ✓' : '**gerekçe yok**'} |`);
    lines.push('');
  }
  lines.push('Kapı: `node kit/build-motion-lab.mjs --check` (yasak desen sergileniyorsa gerekçe zorunlu).');
  lines.push('');

  lines.push('## 9 · Doküman iddiaları');
  lines.push('');
  if (claimProblems.length) for (const p of claimProblems) lines.push(`- × ${p}`);
  else lines.push('- ✓ elle yazılmış eğri/sayı iddiası yok, playbook politikayı işaret ediyor.');
  lines.push('');
  lines.push('## 10 · M1 için kabul ölçütleri');
  lines.push('');
  lines.push('1. `tokens.json → motion.choreography` (enter/scroll/hover/page/reduced) 145/145.');
  lines.push('2. Aile başına ≥3 farklı `enter.pattern`; tek desen ≤%30 stil; her desen ≥3 stilde canlı.');
  lines.push('3. Parmak izi sayısı ≥10; `opacity+transform` tekeli kırıldı (mask/clip/blur/stagger desenleri).');
  lines.push('4. Aile ↔ desen uyumu: `Sade` ailesinde `tilt-3d`/`magnetic` hata; `Retro`da `steps/glitch` serbest.');
  lines.push('5. `kit/motion-check.mjs --self-test` bu kuralları sentetik ihlallerle kanıtlar.');
  lines.push('');
  return { md: lines.join('\n'), summary: { styles: n, fingerprints: fingerprints.length, top: fingerprints[0], claims: claimProblems.length, demos: demos.length } };
}

/** policy.forbidden[].demospattern → eşleşen demo + teachingOnly var mı */
function demoIdsMatching(policy, demos) {
  const out = [];
  const teaching = policy.teachingOnly ?? {};
  for (const rule of policy.forbidden ?? []) {
    if (!rule.demospattern) continue;
    let re;
    try {
      re = new RegExp(`^(${rule.demospattern})$`);
    } catch {
      continue;
    }
    for (const d of demos) if (re.test(d.id)) out.push({ rule: rule.id, demo: d.id, ok: Boolean(teaching[d.id]) });
  }
  return out;
}

const { md, summary } = build();

if (JSON_OUT) {
  console.log(JSON.stringify(summary, null, 2));
  process.exit(0);
}

if (CHECK) {
  const prev = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
  if (prev === null) {
    console.log('× kit/dist/motion.md yok — node kit/motion-audit.mjs');
    process.exit(1);
  }
  if (prev !== md) {
    console.log('× kit/dist/motion.md bayat — node kit/motion-audit.mjs');
    process.exit(1);
  }
  if (!QUIET) console.log(`✓ hareket raporu güncel (${summary.styles} stil · ${summary.fingerprints} parmak izi)`);
  process.exit(0);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, md);
if (!QUIET) {
  console.log(
    `hareket raporu: ${path.relative(ROOT, OUT)} · ${summary.styles} stil · ` +
      `${summary.fingerprints} parmak izi · en kalabalık ${summary.top?.[0] ?? '—'} (${summary.top?.[1] ?? 0}) · ` +
      `doküman sorunu ${summary.claims}`,
  );
}
