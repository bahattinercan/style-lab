#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { STYLES, configFor } from './render/shots.config.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SELF_TEST = process.argv.includes('--self-test');
const JSON_OUT = process.argv.includes('--json');
// Reviewed legacy vocabulary from existing signatures; new component selectors require an explicit addition.
const SIGNATURE_CLASSES = new Set(`comp-card table-row motif-mesh card lv-tag is-disabled plan-grid stat-grid sec metric copy masthead quote aside-note footnote swatch caption rule crumb-x xref selected list-row score score-value disabled bignum progress spec-band edition figure material sec-head ob-steps dots nav-item dot-ok dot-warn dot-err`.split(' '));

function knownSelectors() {
  const render = path.join(ROOT, 'kit', 'render');
  const sources = [
    fs.readFileSync(path.join(render, 'scene.css'), 'utf8'),
    ...['page.html', ...fs.readdirSync(path.join(render, 'partials')).map((name) => `partials/${name}`)]
      .map((name) => fs.readFileSync(path.join(render, name), 'utf8')),
  ];
  const classes = new Set(sources.flatMap((s) => [...s.matchAll(/class\s*=\s*["']([^"']*)["']/g)].flatMap((m) => m[1].split(/\s+/))));
  for (const source of sources) for (const m of source.matchAll(/\.([a-z_][\w-]*)/gi)) classes.add(m[1]);
  for (const name of SIGNATURE_CLASSES) classes.add(name);
  const tags = new Set(['html', 'body', 'main', 'header', 'footer', 'nav', 'section', 'article', 'aside', 'figure', 'figcaption', 'div', 'span', 'p', 'a', 'button', 'input', 'select', 'textarea', 'label', 'form', 'img', 'svg', 'path', 'i', 'b', 'strong', 'em', 'small', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'time', 'br', 'blockquote', 'hr', 'code', 'pre']);
  for (const source of sources) for (const m of source.matchAll(/<([a-z][a-z0-9-]*)\b/gi)) tags.add(m[1].toLowerCase());
  return { classes, tags };
}

function parseRules(css, contexts = [], result = []) {
  let i = 0;
  let prelude = '';
  while (i < css.length) {
    const ch = css[i];
    if (ch === '/' && css[i + 1] === '*') {
      const end = css.indexOf('*/', i + 2);
      i = end < 0 ? css.length : end + 2;
      continue;
    }
    if (ch === '"' || ch === "'") {
      const quote = ch;
      prelude += ch;
      i++;
      while (i < css.length) {
        prelude += css[i];
        if (css[i] === '\\') { i += 2; continue; }
        if (css[i++] === quote) break;
      }
      continue;
    }
    if (ch === '{') {
      const head = prelude.trim();
      prelude = '';
      i++;
      let depth = 1;
      let body = '';
      let quote = '';
      while (i < css.length && depth) {
        const c = css[i];
        if (quote) {
          body += c;
          if (c === '\\') { body += css[i + 1] ?? ''; i += 2; continue; }
          if (c === quote) quote = '';
          i++;
          continue;
        }
        if (c === '"' || c === "'") { quote = c; body += c; i++; continue; }
        if (c === '/' && css[i + 1] === '*') {
          const end = css.indexOf('*/', i + 2);
          if (end < 0) { i = css.length; break; }
          i = end + 2;
          continue;
        }
        if (c === '{') depth++;
        if (c === '}') depth--;
        if (depth) body += c;
        i++;
      }
      if (head.startsWith('@')) parseRules(body, [...contexts, head], result);
      else result.push({ selector: head, body, contexts: contexts.join(' > ') });
      continue;
    }
    if (ch === ';' || ch === '}') prelude = '';
    else prelude += ch;
    i++;
  }
  return result;
}

function declarations(body) {
  return body.split(';').map((part) => {
    const colon = part.indexOf(':');
    if (colon < 0) return null;
    const property = part.slice(0, colon).trim().toLowerCase();
    const value = part.slice(colon + 1).trim();
    return property && value ? { property, value } : null;
  }).filter(Boolean);
}

function auditCss(css, known = knownSelectors()) {
  const findings = [];
  const seen = new Map();
  for (const rule of parseRules(css)) {
    const selectors = rule.selector.split(',').map((s) => s.trim()).filter(Boolean);
    for (const selector of selectors) {
      const base = selector.replace(/:{1,2}[\w-]+(?:\([^)]*\))?/g, '').replace(/\[[^\]]*\]/g, '').trim();
      for (const token of base.split(/[\s>+~]+/).filter(Boolean)) {
        const classNames = [...token.matchAll(/\.([a-z_][\w-]*)/gi)].map((m) => m[1]);
        const tag = token.match(/^[a-z][a-z0-9-]*/i)?.[0]?.toLowerCase();
        for (const name of classNames) if (!known.classes.has(name)) findings.push({ rule: 'selector', selector, value: `.${name}` });
        if (tag && !known.tags.has(tag)) findings.push({ rule: 'selector', selector, value: tag });
      }
      for (const { property, value } of declarations(rule.body)) {
        if (!property.includes('mask') && /(^|\s)#[0-9a-f]{3,4}(?:[0-9a-f]{2})?(?:[0-9a-f]{2})?(?=\s|$|[,;)])/i.test(value)) {
          findings.push({ rule: 'hex', selector, value: `${property}: ${value}` });
        }
        const key = `${rule.contexts}|${selector}|${property}`;
        if (seen.has(key)) findings.push({ rule: 'override', selector, value: property });
        seen.set(key, true);
      }
    }
  }
  return findings;
}

function selfTest() {
  const known = { classes: new Set(['card']), tags: new Set(['h1']) };
  const bad = auditCss('h1 { font-size: 20px } h1 { font-size: 30px; color: #123456 } .missing { color: red }', known);
  const good = auditCss('h1 { font-size: 20px } @media (max-width: 600px) { h1 { font-size: 16px } } .card { color: red }', known);
  if (bad.filter((f) => f.rule === 'override').length !== 1 || !bad.some((f) => f.rule === 'hex') || !bad.some((f) => f.rule === 'selector') || good.length) {
    throw new Error('self-test failed');
  }
  console.log('self-test: hex, crush notification and selector leaks caught; media override free');
}

if (SELF_TEST) {
  selfTest();
} else {
  const rows = Object.keys(STYLES).flatMap((slug) =>
    auditCss(configFor(slug).extraCss ?? '').map((finding) => ({ slug, ...finding })),
  );
  if (JSON_OUT) console.log(JSON.stringify({ styles: Object.keys(STYLES).length, findings: rows }, null, 2));
  else {
    for (const row of rows.slice(0, 60)) console.log(`! ${row.slug}: ${row.rule} · ${row.selector} · ${row.value}`);
    console.log(`signature CSS · ${Object.keys(STYLES).length} styles · ${rows.length} violations`);
  }
  process.exitCode = rows.length ? 1 : 0;
}
