#!/usr/bin/env node
/**
 * kit/assign-layouts.mjs — 145 stile kompozisyon arketipi atar (deterministik).
 *
 * Neden: katalog bugüne kadar yalnız rengi/tipografiyi çeşitlendiriyordu; 145 stilin
 * hero iskeleti aynıydı. Bu script `tokens.json → layout { hero, nav, density }` alanını
 * `kit/render/layouts.json` tanımlarından seçer. Seçim rastgele DEĞİL: slug + aile + etiket
 * metni puanlanır; eşitlik deterministik hash ile bozulur (aynı girdi → aynı çıktı).
 *
 * Kısıtlar (kapı: kit/check-layout.mjs):
 *   · aile içinde en az min(4, aile büyüklüğü) farklı hero|nav parmak izi
 *   · hiçbir parmak izi stil sayısının %25'ini geçmez (bugün: hepsi tek parmak izi)
 *   · her stil en az bir `sections` arketipi taşır (hero) — şema v3
 *
 * Kullanım:
 *   node kit/assign-layouts.mjs --dry            # öneriyi yazdırmadan göster
 *   node kit/assign-layouts.mjs --apply          # tokens.json dosyalarını güncelle
 *   node kit/assign-layouts.mjs --check          # dosyalar öneriyle aynı mı (drift kapısı)
 *   node kit/assign-layouts.mjs --apply --styles luxury-typography,y2k
 *   node kit/assign-layouts.mjs --json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const LAYOUTS = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'layouts.json'), 'utf8'));

const ARGV = process.argv.slice(2);
const APPLY = ARGV.includes('--apply');
const CHECK = ARGV.includes('--check');
const DRY = ARGV.includes('--dry') || (!APPLY && !CHECK);
const JSON_OUT = ARGV.includes('--json');
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  if (i < 0) return null;
  const list = (ARGV[i + 1] ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  return list.length ? new Set(list) : null;
})();

const MAX_SHARE = 0.25;
const MAX_FINGERPRINT = Math.max(4, Math.floor(145 * MAX_SHARE));

/**
 * Hero puanlama sözlüğü. Sıra önemli: ilk eşleşen kural +3, sonrakiler +1 puan.
 * Anahtar kelimeler slug + ad + aile + etiketler üzerinde aranır (Türkçe diakritik sadeleşir).
 */
const HERO_RULES = [
  {
    hero: 'type',
    strong: /(tipograf|typograph|poster|afis|swiss|editorial|zine|poetry|siir|newspaper|gazete|book|kitap|library|kutuphane|letterpress|print|bask[iı]|manifesto|headline)/,
    weak: /(dergi|magazine|yay[iı]n|publish|type|metin)/,
  },
  {
    hero: 'fullbleed',
    strong: /(luxury|luks|grand|tourer|estate|emlak|jewel|mucevher|hotel|otel|fashion|moda|coupe|couture|art-deco|victorian|silk|ipek|marble|mermer|brass|pirin[cs]|leather|deri|porcelain|porselen|noir|oxblood|villa|monolith|craft|zanaat|wood|ah[sş]ap|joinery|drape|cafe|kahve|wine|[sş]arap|restaurant|restoran|resort|travel|seyahat|terrain|arazi|coastal|k[iı]y[iı]|reef|mercan)/,
    weak: /(premium|vitrin|showcase|photograph|foto|gallery|galeri|organic|botanical|coastal|mineral|drape|prism|pr[iı]zma)/,
  },
  {
    hero: 'product',
    strong: /(dashboard|panel|telemetry|telemetri|trading|borsa|kanban|terminal|command|komut|repl|notebook|developer|gelistirici|api|sdk|data|veri|kpi|logistics|lojistik|warehouse|depo|\bmes\b|cockpit|kokpit|sensor|iot|monitor|grid|bento|engine|motor|finance|finans|wallet|cüzdan|bank|crypto|kripto|orchestration|orkestra)/,
    weak: /(tool|arac|console|konsol|analytics|analitik|system|sistem|pipeline|flow|akis)/,
  },
  {
    hero: 'index',
    strong: /(index|dizin|archive|arsiv|gallery|galeri|portfolio|portfolyo|museum|muze|studio|studyo|catalog|katalog|directory|rehber|sticker|comic|cizgi|album|sleeve|zine|collection|koleksiyon|marketplace|pazar|store|magaza|shop|commerce|ticaret|listing|ilan)/,
    weak: /(ajans|agency|work|is\b|project|proje|case|vaka|showcase)/,
  },
  {
    hero: 'sticky',
    strong: /(story|hikaye|journal|gunluk|narrative|anlati|scroll|kaydir|timeline|zaman|motion|hareket|kinetic|kinetik|documentary|belgesel|longform|chapter|bolum|journey|yolculuk|process|surec|incident|trace|latency|throughput)/,
    weak: /(editorial|dergi|feature|ozellik|onboarding|wizard|adim|log|metric|gauge|sensor|uptime|pipeline)/,
  },
  {
    hero: 'centered',
    strong: /(minimal|japandi|wabi|sabi|calm|sakin|zen|ethereal|eterik|quiet|sessiz|soft|yumusak|serene|huzur|sustainable|surdurulebilir|biophilic|biyofilik|wellness|saglik|meditat|nordic|isvec)/,
    weak: /(clean|temiz|airy|ferah|breath|nefes|light|isik|aurora|clay|kil|neumorph|neu)/,
  },
  {
    hero: 'split-reverse',
    strong: /(brutal|anti-design|antitasarim|memphis|maximal|dopamin|dopamine|acid|asit|carnival|karnaval|festival|playful|oyuncul|kids|cocuk|arcade|atari|pixel|sticker|comic|y2k|vapor|synth|cyber|neon|glitch)/,
    weak: /(bold|cesur|energy|enerji|sport|spor|party|eqlence|fun)/,
  },
];

/** Nav: hero'dan türetilir; aynı fingerprint'in tekrarını kırmak için ikinci aday da var. */
const NAV_OF_HERO = {
  split: ['inline', 'split'],
  'split-reverse': ['utility', 'inline'],
  centered: ['pill', 'split'],
  type: ['split', 'inline'],
  fullbleed: ['pill', 'inline'],
  product: ['utility', 'rail'],
  index: ['split', 'pill'],
  sticky: ['inline', 'pill'],
};

const DENSITY_OF_FAMILY = {
  'Veri & Gösterge': 'dense',
  Endüstriyel: 'dense',
  Oyuncul: 'dense',
  Cesur: 'dense',
  Teknik: 'dense',
  'Materyal & Lüks': 'sparse',
  Sade: 'sparse',
  'Doğa & Organik': 'sparse',
};

function norm(text) {
  return String(text)
    .toLocaleLowerCase('tr')
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/â/g, 'a');
}

function hash(slug) {
  let h = 0x811c9dc5;
  for (let i = 0; i < slug.length; i += 1) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));

function families() {
  const j = readJson(path.join(ROOT, 'kit', 'families.json'));
  return (j.families ?? []).map((f) => ({ from: f.from, to: f.to, name: f.name }));
}
const FAMILIES = families();
const FAMILY_OF = (num) => FAMILIES.find((f) => num >= f.from && num <= f.to)?.name ?? 'Diğer';

const HERO_IDS = LAYOUTS.heroes.map((h) => h.id);
const NAV_IDS = LAYOUTS.navs.map((n) => n.id);
const DENSITY_IDS = LAYOUTS.densities.map((d) => d.id);

function discover() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => {
      const tokens = readJson(path.join(STYLES_DIR, d.name, 'tokens.json'));
      return {
        dirName: d.name,
        num: parseInt(d.name, 10),
        slug: tokens.slug ?? d.name.replace(/^\d+-/, ''),
        tokens,
        family: FAMILY_OF(parseInt(d.name, 10)),
        path: path.join(STYLES_DIR, d.name, 'tokens.json'),
      };
    })
    .sort((a, b) => a.num - b.num);
}

/** Bir stil için hero puanları (yüksek = daha uygun). */
function heroScores(style) {
  const hay = norm(
    [style.slug, style.tokens.name ?? '', style.family, style.tokens.tag ?? '', ...(style.tokens.tags ?? [])].join(' '),
  );
  const scores = {};
  for (const id of HERO_IDS) scores[id] = 0;
  scores.split = 1; // nötr taban
  for (const rule of HERO_RULES) {
    if (rule.strong.test(hay)) scores[rule.hero] += 3;
    else if (rule.weak?.test(hay)) scores[rule.hero] += 1;
  }
  // aile eğilimleri: sade → sakin kompozisyon, veri → ürün ekranı
  if (style.family === 'Sade') scores.centered += 1;
  if (style.family === 'Veri & Gösterge') scores.product += 2;
  if (style.family === 'Materyal & Lüks') scores.fullbleed += 2;
  if (style.family === 'Yayın & Tipografi') scores.type += 2;
  if (style.family === 'Tipografik') scores.type += 3;
  if (style.family === 'Etkileşim') scores.product += 1;
  if (style.family === 'Geometrik') scores.index += 1;
  return scores;
}

/**
 * Atama: her stil için puan sıralı adaylar; kısıt ihlali olursa sonraki adaya geçilir.
 * Deterministik: eşit puanda hash(slug) sıralamayı belirler.
 */
function computeAssignments(styles) {
  const ordered = styles.map((s) => {
    const scores = heroScores(s);
    const h = hash(s.slug);
    // en yüksek puanlı adaylar arasında seçim hash ile yapılır (aynı puan → çeşitlilik),
    // sonra kalan adaylar puan sırasıyla gelir: kısıt çözümü hep EN İYİ ikinci seçeneğe gider.
    const maxScore = Math.max(...HERO_IDS.map((id) => scores[id]));
    const byHash = (a, b) => hash(a + s.slug) - hash(b + s.slug);
    const best = HERO_IDS.filter((id) => scores[id] === maxScore).sort(byHash);
    const rest = HERO_IDS.filter((id) => scores[id] !== maxScore).sort((a, b) => scores[b] - scores[a] || byHash(a, b));
    const candidates = [...best, ...rest];
    return { style: s, scores, candidates, hero: candidates[0] };
  });

  const count = (keyFn) => {
    const m = new Map();
    for (const o of ordered) {
      const k = keyFn(o);
      m.set(k, (m.get(k) ?? 0) + 1);
    }
    return m;
  };

  // 1) global parmak izi tavanı: en kalabalık hero+nav kombinasyonu MAX_FINGERPRINT'i geçmesin
  for (let pass = 0; pass < 12; pass += 1) {
    const navOf = (o) => navChoice(o);
    const fp = count((o) => `${o.hero}|${navOf(o)}`);
    const worst = [...fp.entries()].sort((a, b) => b[1] - a[1])[0];
    if (!worst || worst[1] <= MAX_FINGERPRINT) break;
    const [hero] = worst[0].split('|');
    // bu kombinasyondaki en düşük puanlı stili ikinci adaya taşı
    const affected = ordered
      .filter((o) => o.hero === hero && `${o.hero}|${navOf(o)}` === worst[0])
      .sort((a, b) => a.scores[a.hero] - b.scores[b.hero]);
    const victim = affected[0];
    if (!victim) break;
    const next = victim.candidates.find((c) => `${c}|${navChoice({ ...victim, hero: c })}` !== worst[0]);
    if (!next) break;
    victim.hero = next;
  }

  // 2) aile içi çeşitlilik: aile ≥4 stilse en az 3 farklı HERO (görsel iskelet), tek stil için 1
  const byFamily = new Map();
  for (const o of ordered) {
    const f = o.style.family;
    if (!byFamily.has(f)) byFamily.set(f, []);
    byFamily.get(f).push(o);
  }
  for (const [family, list] of byFamily) {
    const target = list.length >= 8 ? 3 : Math.min(2, list.length);
    for (let guard = 0; guard < 40; guard += 1) {
      const usedHeroes = new Set(list.map((o) => o.hero));
      if (usedHeroes.size >= target) break;
      const local = new Map();
      for (const o of list) local.set(o.hero, [...(local.get(o.hero) ?? []), o]);
      const crowded = [...local.entries()].sort((a, b) => b[1].length - a[1].length)[0];
      if (!crowded || crowded[1].length < 2) break;
      // kurban: en düşük puanlı, eşitlikte hash ile deterministik
      const victim = crowded[1]
        .slice()
        .sort((a, b) => a.scores[a.hero] - b.scores[b.hero] || hash(a.style.slug) - hash(b.style.slug))[0];
      const unused = victim.candidates.find((c) => !usedHeroes.has(c));
      if (!unused) break;
      // kaliteyi koru: belirgin bir eşleşmeyi (≥2) sıfır puanlı arketipe düşürme
      // kaliteyi koru: belirgin eşleşmeyi (≥2) sıfır puanlı arketipe düşürme — yalnız
      // kalabalık ailede (≥8) ve tek bir kez zorunlu çeşitlilik için izin verilir.
      if (victim.scores[victim.hero] >= 2 && victim.scores[unused] === 0 && list.length < 8) break;
      victim.hero = unused;
      const fp = count((o) => `${o.hero}|${navChoice(o)}`);
      if ((fp.get(`${victim.hero}|${navChoice(victim)}`) ?? 0) > MAX_FINGERPRINT) victim.hero = crowded[0];
    }
  }

  return ordered.map((o) => ({
    dirName: o.style.dirName,
    slug: o.style.slug,
    family: o.style.family,
    hero: o.hero,
    nav: navChoice(o),
    density: densityChoice(o),
    scores: o.scores,
  }));
}

function navChoice(o) {
  const options = NAV_OF_HERO[o.hero] ?? ['inline'];
  return options[hash(o.style?.slug ?? '') % options.length] ?? options[0];
}

function densityChoice(o) {
  const bias = LAYOUTS.heroes.find((h) => h.id === o.hero)?.densityBias;
  const familyBias = DENSITY_OF_FAMILY[o.style?.family];
  const chosen = bias === 'dense' || familyBias === 'dense' ? 'dense' : familyBias === 'sparse' || bias === 'sparse' ? 'sparse' : 'balanced';
  return DENSITY_IDS.includes(chosen) ? chosen : 'balanced';
}

/** tokens.json'a `layout` alanını yazar (varsa günceller), anahtar sırasını korur. */
function withLayout(tokens, layout) {
  const next = { ...tokens };
  if ((next.version ?? 2) < 3) next.version = 3;
  const out = {};
  for (const [k, v] of Object.entries(next)) {
    if (k === 'layout') continue;
    out[k] = v;
    if (k === 'grid' && !tokens.layout) out.layout = layout;
  }
  if (!out.layout) out.layout = layout;
  return out;
}

function main() {
  const styles = discover();
  const assignments = computeAssignments(styles);
  const scoped = ONLY ? assignments.filter((a) => ONLY.has(a.slug) || ONLY.has(String(parseInt(a.dirName, 10)))) : assignments;

  const drift = [];
  for (const a of scoped) {
    const style = styles.find((s) => s.slug === a.slug);
    const cur = style.tokens.layout ?? null;
    const want = { hero: a.hero, nav: a.nav, density: a.density };
    if (!cur || cur.hero !== want.hero || cur.nav !== want.nav || cur.density !== want.density) {
      drift.push({ slug: a.slug, dir: a.dirName, current: cur, want });
    }
  }

  if (APPLY) {
    for (const a of scoped) {
      const style = styles.find((s) => s.slug === a.slug);
      const next = withLayout(style.tokens, { hero: a.hero, nav: a.nav, density: a.density, family: style.family });
      fs.writeFileSync(style.path, JSON.stringify(next, null, 2) + '\n');
    }
    console.log(`yazıldı: ${scoped.length} tokens.json (şema v3, layout eklendi)`);
    if (!JSON_OUT) printDistribution(assignments);
    return 0;
  }

  if (CHECK) {
    if (drift.length) {
      console.log(`× ${drift.length} stilde layout öneriden farklı (drift):`);
      for (const d of drift.slice(0, 10)) console.log(`  - ${d.dir}: ${JSON.stringify(d.current)} → ${JSON.stringify(d.want)}`);
      if (drift.length > 10) console.log(`  … ${drift.length - 10} tane daha`);
      console.log('düzeltme: node kit/assign-layouts.mjs --apply');
      return 1;
    }
    console.log(`✓ layout ataması güncel (${scoped.length} stil)`);
    return 0;
  }

  // --dry
  if (JSON_OUT) {
    console.log(JSON.stringify({ assignments: scoped }, null, 2));
    return 0;
  }
  console.log('stil'.padEnd(30), 'hero'.padEnd(14), 'nav'.padEnd(9), 'density');
  for (const a of scoped) console.log(a.dirName.padEnd(30), a.hero.padEnd(14), a.nav.padEnd(9), a.density);
  printDistribution(assignments);
  return 0;
}

function printDistribution(assignments) {
  const tab = (key) => {
    const m = new Map();
    for (const a of assignments) m.set(a[key], (m.get(a[key]) ?? 0) + 1);
    return [...m.entries()].sort((x, y) => y[1] - x[1]);
  };
  console.log('\n— hero dağılımı —');
  for (const [k, v] of tab('hero')) console.log(`  ${k.padEnd(14)} ${String(v).padStart(3)}  %${Math.round((v / assignments.length) * 100)}`);
  console.log('— nav dağılımı —');
  for (const [k, v] of tab('nav')) console.log(`  ${k.padEnd(14)} ${String(v).padStart(3)}`);
  console.log('— yoğunluk —');
  for (const [k, v] of tab('density')) console.log(`  ${k.padEnd(14)} ${String(v).padStart(3)}`);
  const fp = new Map();
  for (const a of assignments) fp.set(`${a.hero}|${a.nav}`, (fp.get(`${a.hero}|${a.nav}`) ?? 0) + 1);
  const [top, topN] = [...fp.entries()].sort((x, y) => y[1] - x[1])[0] ?? ['—', 0];
  console.log(`\nparmak izi: ${fp.size} farklı kombinasyon · en kalabalık ${top} = ${topN} stil (%${Math.round((topN / assignments.length) * 100)})`);
}

main();
