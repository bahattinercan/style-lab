const MARKER = /[ \t]*<!-- SECTION:([a-z-]+) -->[ \t]*\r?\n?/g;

export function applySectionPlan(html, plan) {
  const mainStart = html.indexOf('<main class="pg"');
  if (mainStart < 0) throw new Error('page template has no main.pg');
  const contentStart = html.indexOf('>', mainStart) + 1;
  const mainEnd = html.indexOf('</main>', contentStart);
  if (mainEnd < 0) throw new Error('page template main.pg is not closed');
  const body = html.slice(contentStart, mainEnd);
  const markers = [...body.matchAll(MARKER)];
  const ids = markers.map((match) => match[1]);
  if (ids.length !== plan.order.length || new Set(ids).size !== ids.length || new Set(plan.order).size !== plan.order.length) {
    throw new Error('section plan marker count or uniqueness mismatch');
  }
  const chunks = new Map(markers.map((match, index) => [match[1], body.slice(match.index + match[0].length, markers[index + 1]?.index ?? body.length)]));
  if (plan.order.some((id) => !chunks.has(id)) || chunks.size !== plan.order.length) {
    throw new Error(`section plan "${plan.id}" does not match page markers`);
  }
  return html.slice(0, contentStart) + plan.order.map((id) => chunks.get(id)).join('') + html.slice(mainEnd);
}
