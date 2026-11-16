#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { configFor } from './render/shots.config.mjs';
import { fillPageHtml } from './lib/page-html.mjs';

const KIT = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(KIT, '..');
const OUT = path.join(KIT, 'live');
const CHECK = process.argv.includes('--check');
const JSON_OUT = process.argv.includes('--json');
const onlyArg = process.argv.indexOf('--styles');
const only = new Set(onlyArg >= 0 ? (process.argv[onlyArg + 1] ?? '').split(',').filter(Boolean) : []);
const liveJs = fs.readFileSync(path.join(KIT, 'live-styles.js'), 'utf8');
const listMatch = liveJs.match(/window\.LIVE_STYLES\s*=\s*(\[[\s\S]*?\]);/);
if (!listMatch) throw new Error('kit/live-styles.js does not contain LIVE_STYLES');
const styles = JSON.parse(listMatch[1]);
const requested = only.size ? styles.filter((s) => only.has(s.slug)) : styles;
if (only.size && requested.length !== only.size) throw new Error(`unknown styles: ${[...only].filter((s) => !styles.some((x) => x.slug === s)).join(', ')}`);
const varsCss = fs.readFileSync(path.join(KIT, 'tokens.css'), 'utf8');
const varsBySlug = Object.fromEntries([...varsCss.matchAll(/^\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)].map((m) => [m[1], Object.fromEntries([...m[2].matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)].map((v) => [v[1], v[2].trim()]))]));
const families = JSON.parse(fs.readFileSync(path.join(KIT, 'families.json'), 'utf8')).families;
const layouts = JSON.parse(fs.readFileSync(path.join(KIT, 'render/layouts.json'), 'utf8'));
const template = fs.readFileSync(path.join(KIT, 'render/page.html'), 'utf8')
  .replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">')
  .replace('href="../tokens.css"', 'href="../tokens.css"')
  .replace('<link rel="stylesheet" href="scene.css">', '<link rel="stylesheet" href="../render/scene.css">');
const escapeHtml = (s) => String(s ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function generate(style) {
  const dir = `${style.num}-${style.slug}`;
  const source = path.join(ROOT, 'styles', dir);
  const tokens = JSON.parse(fs.readFileSync(path.join(source, 'tokens.json'), 'utf8'));
  const rawLayout = tokens.layout ?? {};
  const layout = {
    hero: layouts.heroes.some((x) => x.id === rawLayout.hero) ? rawLayout.hero : 'split',
    nav: layouts.navs.some((x) => x.id === rawLayout.nav) ? rawLayout.nav : 'inline',
    density: layouts.densities.some((x) => x.id === rawLayout.density) ? rawLayout.density : 'balanced',
    sectionPlan: layouts.sections.some((x) => x.id === rawLayout.sectionPlan) ? rawLayout.sectionPlan : layouts.sections[0].id,
    fit: ['0','1','2','3'].includes(String(rawLayout.fit)) ? String(rawLayout.fit) : null,
    typeScale: tokens.typography?.scale ?? {},
  };
  const contentId = tokens.industries?.[0] ?? 'saas';
  const copyPath = path.join(KIT, 'content', `${contentId}.json`);
  const copy = fs.existsSync(copyPath) ? JSON.parse(fs.readFileSync(copyPath, 'utf8')) : {};
  const vars = varsBySlug[style.slug];
  if (!vars) throw new Error(`${style.slug}: token block missing`);
  const cfg = configFor(style.slug);
  const motifPath = path.join(source, 'motif.css');
  const motifCss = fs.existsSync(motifPath) ? fs.readFileSync(motifPath, 'utf8') : '';
  const sectionPartial = (name) => fs.readFileSync(path.join(KIT, 'render/partials', `${name}.html`), 'utf8');
  const familyOf = (number) => families.find((family) => Number(number) >= family.from && Number(number) <= family.to)?.name ?? 'Other';
  let html = fillPageHtml(template, style.slug, cfg, style.num, vars, 'page', layout, tokens.imagery, copy, motifCss, {
    partial: sectionPartial,
    familyOf,
    refit: false,
    sectionDefs: layouts.sections,
  });  const bar = `<nav class="live-bar" aria-label="Preview toolbar"><a href="../gallery.html">← gallery</a><b>Style preview</b><span class="grow"></span><label for="styleSel">style</label><select id="styleSel" aria-label="Choose style">${styles.map((s) => `<option value="${s.slug}"${s.slug === style.slug ? ' selected' : ''}>${escapeHtml(s.num)} · ${escapeHtml(s.name)}</option>`).join('')}</select><a href="../../styles/${dir}/shots/01-page.png" target="_blank" rel="noopener">full page ↗</a><a href="../../docs/catalog.md">catalog</a><a href="../live.html?mode=tokens&amp;style=${style.slug}">tokens</a></nav><style>.live-bar{position:fixed;inset:0 0 auto;z-index:9999;display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-3);padding:var(--space-3) min(4vw,32px);background:var(--bg-2,var(--bg));border-bottom:1px solid var(--line);font:11px var(--font-mono);letter-spacing:.06em}.live-bar[hidden]{display:none}.live-bar .grow{flex:1}.live-bar a,.live-bar select{font:inherit;background:var(--surface);color:var(--ink);border:1px solid var(--line);border-radius:var(--radius);padding:8px 10px;min-height:36px;text-decoration:none}.live-bar b{font:14px var(--font-display);letter-spacing:var(--tracking)}@media(max-width:700px){.live-bar{position:sticky}.live-bar select{min-width:0;max-width:40vw}}</style><script>if(new URLSearchParams(location.search).get('chrome')==='0')document.querySelector('.live-bar').hidden=true;document.getElementById('styleSel').addEventListener('change',e=>location.href='../live.html?style='+encodeURIComponent(e.target.value));</script>`;
  html = html.replace('</body>', `${bar}\n</body>`);
  return html;
}
fs.mkdirSync(OUT, { recursive: true });
const expected = new Set(); let drift = 0;
for (const style of requested) {
  const file = path.join(OUT, `${style.num}-${style.slug}.html`); expected.add(path.basename(file));
  const html = generate(style);
  if (CHECK) {
    if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== html) { console.error(`drift: kit/live/${path.basename(file)}`); drift++; }
  } else fs.writeFileSync(file, html);
}
if (!only.size) {
  for (const name of fs.readdirSync(OUT)) if (name.endsWith('.html') && !expected.has(name)) { if (CHECK) { console.error(`extra: kit/live/${name}`); drift++; } else fs.unlinkSync(path.join(OUT, name)); }
}
if (CHECK && drift) process.exitCode = 1;
if (JSON_OUT) console.log(JSON.stringify({ generated: requested.length, drift, directory: 'kit/live' }));
else console.log(CHECK ? `checked ${requested.length} live pages${drift ? ` · ${drift} drift` : ' · clean'}` : `generated ${requested.length} live pages in kit/live/`);

