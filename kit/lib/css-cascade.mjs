function closingBrace(source, openAt) {
  let depth = 1;
  let quote = '';
  for (let i = openAt + 1; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (char === '\\') { i += 1; continue; }
      if (char === quote) quote = '';
      continue;
    }
    if (char === '"' || char === "'") { quote = char; continue; }
    if (char === '{') depth += 1;
    if (char === '}' && --depth === 0) return i;
  }
  throw new Error('CSS block is not closed');
}

function parseDeclarations(body) {
  return body.split(';').map((raw) => {
    const colon = raw.indexOf(':');
    if (colon < 0) return null;
    const property = raw.slice(0, colon).trim();
    const value = raw.slice(colon + 1).trim();
    if (!property || !value) return null;
    const important = /\s*!important\s*$/i.test(value);
    return { property, value, important, removed: false };
  }).filter(Boolean);
}

function parseNodes(css) {
  const nodes = [];
  let cursor = 0;
  while (cursor < css.length) {
    while (cursor < css.length && /\s/.test(css[cursor])) cursor += 1;
    if (cursor >= css.length) break;
    const start = cursor;
    let quote = '';
    while (cursor < css.length) {
      const char = css[cursor];
      if (quote) {
        if (char === '\\') { cursor += 2; continue; }
        if (char === quote) quote = '';
      } else if (char === '"' || char === "'") quote = char;
      else if (char === '{' || char === ';' || char === '}') break;
      cursor += 1;
    }
    const head = css.slice(start, cursor).trim();
    if (cursor >= css.length || css[cursor] === ';' || css[cursor] === '}') {
      cursor += 1;
      continue;
    }
    const end = closingBrace(css, cursor);
    const body = css.slice(cursor + 1, end);
    if (head.startsWith('@')) nodes.push({ type: 'at', head, children: parseNodes(body) });
    else {
      for (const selector of head.split(',').map((item) => item.trim()).filter(Boolean)) {
        nodes.push({ type: 'rule', selector, declarations: parseDeclarations(body) });
      }
    }
    cursor = end + 1;
  }
  return nodes;
}

function prune(nodes, contexts = [], seen = new Map()) {
  for (const node of nodes) {
    if (node.type === 'at') {
      prune(node.children, [...contexts, node.head], seen);
      continue;
    }
    for (const declaration of node.declarations) {
      const property = declaration.property.startsWith('--') ? declaration.property : declaration.property.toLowerCase();
      const key = `${contexts.join('\n')}\n${node.selector}\n${property}\n${declaration.important}`;
      const previous = seen.get(key);
      if (previous) previous.removed = true;
      seen.set(key, declaration);
    }
  }
}

function serialize(nodes, depth = 0) {
  const pad = '  '.repeat(depth);
  return nodes.flatMap((node) => {
    if (node.type === 'at') {
      const children = serialize(node.children, depth + 1);
      return children ? [`${pad}${node.head} {\n${children}\n${pad}}`] : [];
    }
    const declarations = node.declarations.filter((item) => !item.removed);
    if (!declarations.length) return [];
    const body = declarations.map(({ property, value }) => `${property}: ${value}`).join('; ');
    return [`${pad}${node.selector} { ${body}; }`];
  }).join('\n');
}

/** Remove earlier declarations only when selector, media context, and importance match. */
export function normalizeCss(css) {
  const clean = String(css).replace(/\/\*[\s\S]*?\*\//g, '');
  const nodes = parseNodes(clean);
  prune(nodes);
  return serialize(nodes);
}
