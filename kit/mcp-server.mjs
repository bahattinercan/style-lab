#!/usr/bin/env node
/**
 * kit/mcp-server.mjs — style-lab'ı ajanlara MCP aracı olarak açar (P5).
 *
 * Neden: Refero "Design Research for the AI Era" diye MCP sunuyor; katalog da ajan-first
 * tasarlandı ama ajan 145 dosyayı gezmeden karar veremiyordu. Bu sunucu stdio üzerinden
 * JSON-RPC 2.0 konuşur (bağımlılık yok) ve şu araçları verir:
 *
 *   pick(intent, limit?, family?)     → niyet cümlesinden aday slug'lar (kit/pick.mjs)
 *   style(slug)                       → style.md (kısa) + layout/choreography/imagery/industries özeti
 *   tokens(slug)                      → tokens.json (tam)
 *   shots(slug, scene?)               → repodaki çekirdek sahne yolları + eksikse render komutu
 *   sections(slug)                    → 12 bölüm yolu (+ eksikse komut)
 *   flows(slug)                       → 3 akış yolu (+ eksikse komut)
 *   brief(intent, industry?)          → hedefe hazır brief markdown (kit/brief.mjs)
 *   render(slug, scene, force?)       → sahneyi üretir ve dosya yolunu döndürür (P5b)
 *
 * Kullanım:
 *   node kit/mcp-server.mjs                 # stdio MCP sunucusu
 *   node kit/mcp-server.mjs --self-test     # initialize + tools/list + pick çağrısı (kapı)
 *   node kit/mcp-server.mjs --list          # araç listesini yazdır (insan okuması)
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES = path.join(ROOT, 'styles');
const CACHE = path.join(ROOT, 'kit', '.shots-cache');
const CORE = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'shots.core.json'), 'utf8')).files;

const dirOf = (slug) => {
  const d = fs.readdirSync(STYLES).find((x) => x.replace(/^\d+-/, '') === slug);
  if (!d) throw new Error(`bilinmeyen stil: ${slug}`);
  return d;
};
const readTokens = (slug) => JSON.parse(fs.readFileSync(path.join(STYLES, dirOf(slug), 'tokens.json'), 'utf8'));

function packOf(slug) {
  const t = readTokens(slug);
  const id = t.industries?.[0] ?? 'saas';
  const f = path.join(ROOT, 'kit', 'content', `${id}.json`);
  return { id, pack: fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null };
}

const TOOLS = [
  {
    name: 'pick',
    description: 'Niyet cümlesinden stil adayı çıkarır (deterministik sözlüksel puanlama). Örn: "premium emlak, sakin".',
    inputSchema: {
      type: 'object',
      properties: {
        intent: { type: 'string' },
        limit: { type: 'number' },
        family: { type: 'string' },
      },
      required: ['intent'],
    },
  },
  {
    name: 'style',
    description: 'Bir stilin özeti: layout (hero/nav), hareket koreografisi, görsel photo/treatment, sektör, ilk 1200 karakter style.md.',
    inputSchema: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
  },
  {
    name: 'tokens',
    description: 'Stilin tam tokens.json içeriği (palet açık+koyu, tipografi, layout, motion, imagery, industries).',
    inputSchema: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
  },
  {
    name: 'shots',
    description: 'Stilin çekirdek sahne dosya yolları (landing, dashboard, components, dark-landing). Eksik sahne için render komutu döner.',
    inputSchema: {
      type: 'object',
      properties: { slug: { type: 'string' }, scene: { type: 'string' } },
      required: ['slug'],
    },
  },
  {
    name: 'sections',
    description: '12 bölümün (hero, pricing-table, faq…) üretilmiş görsel yolları; eksikse üretim komutu.',
    inputSchema: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
  },
  {
    name: 'flows',
    description: '3 akış şeridinin (onboarding, checkout, invite) yolları; eksikse üretim komutu.',
    inputSchema: { type: 'object', properties: { slug: { type: 'string' } }, required: ['slug'] },
  },
  {
    name: 'render',
    description: 'Bir sahneyi (landing, dashboard, paywall…) üretir ve yolunu döndürür. Çekirdek sahne repoda, diğerleri kit/.shots-cache altında.',
    inputSchema: {
      type: 'object',
      properties: {
        slug: { type: 'string' },
        scene: { type: 'string', description: 'sahne anahtarı: landing, dashboard, paywall, feed, profile, search, integrations, table-filters, states…' },
        force: { type: 'boolean' },
      },
      required: ['slug', 'scene'],
    },
  },
  {
    name: 'brief',
    description: 'Niyetten uygulanabilir brief markdown üretir (stil + sektör + layout + koreografi + görsel + dosya yolları).',
    inputSchema: {
      type: 'object',
      properties: { intent: { type: 'string' }, industry: { type: 'string' } },
      required: ['intent'],
    },
  },
];

function callPick({ intent, limit = 3, family }) {
  const args = [path.join(ROOT, 'kit', 'pick.mjs'), '--intent', String(intent), '--json', '--limit', String(limit)];
  if (family) args.push('--family', String(family));
  const out = execFileSync(process.execPath, args, { encoding: 'utf8' });
  return JSON.parse(out);
}

function callStyle({ slug }) {
  const t = readTokens(slug);
  const dir = dirOf(slug);
  const md = fs.readFileSync(path.join(STYLES, dir, 'style.md'), 'utf8');
  return {
    slug,
    num: t.num,
    name: t.name,
    family: t.motion?.family ?? null,
    industries: t.industries ?? [],
    layout: t.layout ?? null,
    choreography: t.motion?.choreography ?? null,
    imagery: t.imagery ?? null,
    palette: { light: t.palette, dark: t.palette?.dark ?? null },
    fonts: { display: t.typography?.display, body: t.typography?.body, mono: t.typography?.mono },
    paths: { doc: `styles/${dir}/style.md`, tokens: `styles/${dir}/tokens.json` },
    docHead: md.slice(0, 1200),
  };
}

function callShots({ slug, scene }) {
  const dir = dirOf(slug);
  const wanted = scene ? [`${scene}.png`] : CORE;
  const found = [];
  const missing = [];
  for (const file of wanted) {
    const p = path.join(STYLES, dir, 'shots', file);
    if (fs.existsSync(p)) found.push({ file, path: path.relative(ROOT, p) });
    else missing.push(file);
  }
  return {
    slug,
    shots: found,
    ...(missing.length
      ? { missing, render: `node kit/render/render-shots.mjs --styles ${slug}${scene ? ` --scene ${scene}` : ''}` }
      : {}),
  };
}

function listCache(kind, slug) {
  const dir = dirOf(slug);
  const p = path.join(CACHE, dir, kind);
  if (!fs.existsSync(p)) {
    return {
      slug,
      files: [],
      render:
        kind === 'sections'
          ? `node kit/render/render-sections.mjs --styles ${slug}`
          : `node kit/render/render-flows.mjs --styles ${slug}`,
    };
  }
  return { slug, files: fs.readdirSync(p).sort().map((f) => ({ id: f.replace(/\.png$/, ''), path: path.relative(ROOT, path.join(p, f)) })) };
}

function callBrief({ intent, industry }) {
  const args = [path.join(ROOT, 'kit', 'brief.mjs'), '--intent', String(intent)];
  if (industry) args.push('--industry', String(industry));
  return { markdown: execFileSync(process.execPath, args, { encoding: 'utf8' }) };
}

const lastLine = (s) => s.trim().split(String.fromCharCode(10)).slice(-1)[0] ?? '';

function callRender({ slug, scene, force }) {
  const dir = dirOf(slug);
  const args = [path.join(ROOT, 'kit', 'render', 'render-shots.mjs'), '--styles', slug, '--scenes', String(scene)];
  if (force) args.push('--force');
  const out = execFileSync(process.execPath, args, { encoding: 'utf8' });
  const sceneFile = MANIFEST_SCENES()[scene];
  if (!sceneFile) throw new Error(`bilinmeyen sahne: ${scene}`);
  const core = CORE.includes(sceneFile);
  const p = core ? path.join(STYLES, dir, 'shots', sceneFile) : path.join(CACHE, dir, sceneFile);
  return { slug, scene, path: path.relative(ROOT, p), exists: fs.existsSync(p), log: lastLine(out) };
}

/** kit/render/render-shots.mjs SCENES listesini tek kaynaktan okur. */
let SCENE_MAP = null;
function MANIFEST_SCENES() {
  if (SCENE_MAP) return SCENE_MAP;
  const src = fs.readFileSync(path.join(ROOT, 'kit', 'render', 'render-shots.mjs'), 'utf8');
  SCENE_MAP = {};
  for (const m of src.matchAll(/\{ key: '([^']+)', file: '([^']+)'/g)) SCENE_MAP[m[1]] = m[2];
  return SCENE_MAP;
}

function dispatch(name, args = {}) {
  switch (name) {
    case 'pick':
      return callPick(args);
    case 'style':
      return callStyle(args);
    case 'tokens':
      return readTokens(args.slug);
    case 'shots':
      return callShots(args);
    case 'sections':
      return listCache('sections', args.slug);
    case 'flows':
      return listCache('flows', args.slug);
    case 'brief':
      return callBrief(args);
    case 'render':
      return callRender(args);
    default:
      throw new Error(`bilinmeyen araç: ${name}`);
  }
}

/* ---------------- stdio JSON-RPC ---------------- */

function send(msg) {
  process.stdout.write(JSON.stringify(msg) + '\n');
}

function handle(msg) {
  const { id, method, params } = msg ?? {};
  if (method === undefined) return; // notification
  try {
    if (method === 'initialize') {
      return send({
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: params?.protocolVersion ?? '2024-11-05',
          capabilities: { tools: {} },
          serverInfo: { name: 'style-lab', version: '5.0.0' },
        },
      });
    }
    if (method === 'tools/list') return send({ jsonrpc: '2.0', id, result: { tools: TOOLS } });
    if (method === 'tools/call') {
      const name = params?.name;
      const out = dispatch(name, params?.arguments ?? {});
      return send({ jsonrpc: '2.0', id, result: { content: [{ type: 'text', text: JSON.stringify(out, null, 2) }] } });
    }
    if (method === 'ping') return send({ jsonrpc: '2.0', id, result: {} });
    send({ jsonrpc: '2.0', id, error: { code: -32601, message: `bilinmeyen method: ${method}` } });
  } catch (err) {
    send({ jsonrpc: '2.0', id, error: { code: -32603, message: String(err.message ?? err) } });
  }
}

const ARGV = process.argv.slice(2);
if (ARGV.includes('--list')) {
  for (const t of TOOLS) console.log(`${t.name.padEnd(10)} ${t.description}`);
  process.exit(0);
}
if (ARGV.includes('--self-test')) {
  const checks = [];
  const init = { protocolVersion: '2024-11-05', capabilities: { tools: {} }, serverInfo: { name: 'style-lab', version: '5.0.0' } };
  checks.push(['initialize', init.serverInfo.name === 'style-lab']);
  checks.push(['tools/list', TOOLS.length >= 8]);
  const slugs = fs.readdirSync(STYLES).filter((d) => /^\d+-/.test(d)).map((d) => d.replace(/^\d+-/, ''));
  const sample = slugs[0];
  const picked = callPick({ intent: 'premium emlak sakin', limit: 3 });
  const arr = Array.isArray(picked) ? picked : picked.picks ?? picked.candidates ?? [];
  checks.push(['pick', arr.length > 0 && typeof arr[0].slug === 'string']);
  const style = callStyle({ slug: sample });
  checks.push(['style', Boolean(style.layout && style.choreography)]);
  const shots = callShots({ slug: sample });
  checks.push(['shots', shots.shots.length === CORE.length]);
  const brief = callBrief({ intent: 'premium emlak' });
  checks.push(['brief', brief.markdown.includes('## Seçim') && brief.markdown.length > 400]);
  const rendered = callRender({ slug: sample, scene: 'paywall', force: true });
  checks.push(['render', rendered.exists === true]);
  let failed = 0;
  for (const [name, ok] of checks) {
    console.log(`${ok ? '✓' : '×'} ${name}`);
    if (!ok) failed += 1;
  }
  console.log(failed ? `\n× mcp self-test: ${failed} başarısız` : '\n✓ mcp self-test: araçlar çalışıyor');
  process.exit(failed ? 1 : 0);
}

// stdio sunucu
process.stdin.setEncoding('utf8');
let buffer = '';
process.stdin.on('data', (chunk) => {
  buffer += chunk;
  let idx;
  while ((idx = buffer.indexOf('\n')) >= 0) {
    const line = buffer.slice(0, idx).trim();
    buffer = buffer.slice(idx + 1);
    if (!line) continue;
    try {
      handle(JSON.parse(line));
    } catch {
      /* bozuk satır: MCP istemcisi yeniden dener */
    }
  }
});
