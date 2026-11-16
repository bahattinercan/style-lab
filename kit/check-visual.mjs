#!/usr/bin/env node
/** Validate per-style CSS motif layers and generated SVG artwork. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { configFor } from './render/shots.config.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JSON_OUT = process.argv.includes('--json');

function validateSvg(file) {
  const issues = [];
  if (!fs.existsSync(file)) return ['file missing'];
  const bytes = fs.readFileSync(file);
  const svg = bytes.toString('utf8');
  if (bytes.length > 64 * 1024) issues.push('over 64 KB');
  if (/<\s*(script|foreignObject)\b/i.test(svg)) issues.push('script/foreignObject forbidden');
  if (/@import\b/i.test(svg)) issues.push('@import forbidden');
  if (/url\(\s*['"]?\s*https?:/i.test(svg)) issues.push('external url() forbidden');
  if (/\b(?:href|src)\s*=\s*(['"])(?!#|data:image\/)[^'"]+\1/i.test(svg)) issues.push('external href/src forbidden');
  if (!/^\s*<svg\b[^>]*\bviewBox\s*=\s*(['"])[^'"]+\1/i.test(svg)) issues.push('SVG root/viewBox missing');
  const stack = [];
  const tags = svg.match(/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<\?[\s\S]*?\?>|<!DOCTYPE[^>]*>|<[^>]*>/gi) ?? [];
  for (const token of tags) {
    if (/^<!--|^<!\[CDATA\[|^<\?|^<!DOCTYPE/i.test(token)) continue;
    const closing = token.match(/^<\s*\/\s*([\w:-]+)\s*>$/);
    if (closing) {
      if (stack.pop() !== closing[1]) { issues.push('malformed XML tag nesting'); break; }
      continue;
    }
    const opening = token.match(/^<\s*([\w:-]+)(?:\s[^<>]*?)?\s*(\/?)>$/);
    if (!opening) { issues.push('malformed XML tag'); break; }
    if (!stack.length && opening[1].toLowerCase() !== 'svg') issues.push('root element is not svg');
    if (!opening[2]) stack.push(opening[1]);
  }
  if (stack.length) issues.push('unclosed XML tags');
  return [...new Set(issues)];
}

function validateMotif(css, motif) {
  const issues = [];
  if (Buffer.byteLength(css, 'utf8') > 4096) issues.push('over 4096 bytes');
  if (!motif || !new RegExp('\\.motif-' + motif.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&') + '(?![\\w-])').test(css)) {
    issues.push('expected .motif-' + (motif || '(missing)') + ' selector');
  }
  if (/@keyframes\b/i.test(css)) issues.push('@keyframes forbidden');
  if (/\banimation\s*:/i.test(css)) issues.push('animation forbidden');
  if (/\btransition\s*:/i.test(css)) issues.push('transition forbidden');
  if (/!\s*important\b/i.test(css)) issues.push('!important forbidden');
  const withoutVars = css.replace(/var\((?:[^()]|\([^()]*\))*\)/gi, '');
  if (/(?:#[0-9a-f]{3,8}\b|\b(?:rgb|hsl|oklch)\s*\()/i.test(withoutVars)) issues.push('literal color forbidden; use token variables');
  return issues;
}

function scan(root, entries) {
  const errors = [];
  const artworks = new Map();
  const activeStyles = new Set();
  for (const entry of entries) {
    const dir = path.join(root, 'styles', entry.dirName);
    const motifFile = path.join(dir, 'motif.css');
    if (fs.existsSync(motifFile)) {
      activeStyles.add(entry.dirName);
      const issues = validateMotif(fs.readFileSync(motifFile, 'utf8'), entry.motif);
      for (const issue of issues) errors.push(entry.dirName + '/motif.css: ' + issue);
    }
    const tokensFile = path.join(dir, 'tokens.json');
    const tokens = JSON.parse(fs.readFileSync(tokensFile, 'utf8'));
    const art = tokens.imagery?.art;
    if (!art) continue;
    activeStyles.add(entry.dirName);
    const rel = String(art);
    const file = path.resolve(root, 'kit/images', rel);
    const base = path.resolve(root, 'kit/images/gen') + path.sep;
    if (!rel.startsWith('gen/') || rel.split('/').includes('..') || !rel.endsWith('.svg') || !file.startsWith(base)) {
      errors.push(entry.dirName + ': imagery.art must be an .svg under kit/images/gen/');
      continue;
    }
    const issues = validateSvg(file);
    for (const issue of issues) errors.push(entry.dirName + ': imagery.art ' + rel + ': ' + issue);
    if (fs.existsSync(file)) {
      const hash = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
      if (artworks.has(hash)) errors.push(entry.dirName + ': duplicate artwork used by ' + artworks.get(hash));
      else artworks.set(hash, entry.dirName);
    }
  }
  return { count: activeStyles.size, errors };
}

function selfTest() {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'check-visual-'));
  try {
    const styles = path.join(temp, 'styles');
    const gen = path.join(temp, 'kit', 'images', 'gen');
    fs.mkdirSync(path.join(styles, '001-test'), { recursive: true });
    fs.mkdirSync(gen, { recursive: true });
    fs.writeFileSync(path.join(styles, '001-test', 'tokens.json'), JSON.stringify({ imagery: { art: 'gen/sample.svg' } }));
    fs.writeFileSync(path.join(styles, '001-test', 'motif.css'), '.motif-rays::before { color: var(--accent); }');
    fs.writeFileSync(path.join(gen, 'sample.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="var(--accent)"/></svg>');
    const clean = scan(temp, [{ dirName: '001-test', motif: 'rays' }]);
    if (clean.count !== 1 || clean.errors.length) throw new Error('clean synthetic fixture failed: ' + clean.errors.join('; '));
    fs.writeFileSync(path.join(styles, '001-test', 'motif.css'), '.motif-wrong { color: #fff; animation: x 1s; }');
    fs.writeFileSync(path.join(gen, 'sample.svg'), '<svg viewBox="0 0 10 10"><script/></svg>');
    const bad = scan(temp, [{ dirName: '001-test', motif: 'rays' }]);
    if (bad.errors.length < 4) throw new Error('invalid synthetic fixture was not rejected');
    return true;
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
}

if (process.argv.includes('--self-test')) {
  try { selfTest(); console.log('check-visual: self-test temiz'); }
  catch (error) { console.error('check-visual: self-test failed:' + error.message); process.exitCode = 1; }
} else {
  const styles = path.join(ROOT, 'styles');
  const entries = fs.readdirSync(styles, { withFileTypes: true })
    .filter((item) => item.isDirectory() && fs.existsSync(path.join(styles, item.name, 'tokens.json')))
    .map((item) => {
      const slug = item.name.replace(/^\d+-/, '');
      return { dirName: item.name, motif: configFor(slug).motif };
    });
  const result = scan(ROOT, entries);
  if (JSON_OUT) console.log(JSON.stringify({ styles: result.count, errors: result.errors }, null, 2));
  else {
    for (const error of result.errors) console.log('  × ' + error);
    console.log('check-visual: ' + result.count + ' styles, ' + result.errors.length + ' errors');
  }
  if (result.errors.length) process.exitCode = 1;
}
