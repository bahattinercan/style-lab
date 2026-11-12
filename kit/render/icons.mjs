/**
 * kit/render/icons.mjs — şablonlar için tek ikon seti
 *
 * Kural: ikonlar `currentColor` kullanır, sabit renk YOKTur; böylece 34 stilin
 * metin rengini otomatik alır. 24×24 ızgara, 1.6px çizgi, yuvarlak uç.
 *
 * Kullanım (şablon içinde):
 *   __ICON:search:14__      → 14px arama ikonu
 *   __ICON:alert:16__       → 16px uyarı ikonu
 */

const P = {
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  'chevron-down': '<path d="M6 9.5l6 6 6-6"/>',
  'chevron-right': '<path d="M9.5 6l6 6-6 6"/>',
  'chevron-left': '<path d="M14.5 6l-6 6 6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  alert: '<path d="M12 4.5l8.5 15h-17z"/><path d="M12 10v4.4"/><circle cx="12" cy="17.2" r=".9" fill="currentColor" stroke="none"/>',
  info: '<circle cx="12" cy="12" r="8"/><path d="M12 11v5"/><circle cx="12" cy="8.2" r=".9" fill="currentColor" stroke="none"/>',
  user: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5"/>',
  bell: '<path d="M7 16.5V11a5 5 0 0 1 10 0v5.5l1.5 2.5h-13z"/><path d="M10.5 20.4a1.8 1.8 0 0 0 3 0"/>',
  calendar: '<rect x="4" y="6" width="16" height="14" rx="2"/><path d="M4 10.5h16M8.5 4v4M15.5 4v4"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4.5l3 1.8"/>',
  lock: '<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',
  mail: '<rect x="3.5" y="6" width="17" height="12" rx="2"/><path d="M4.5 7.5l7.5 5.5 7.5-5.5"/>',
  eye: '<path d="M2.8 12S6 6.8 12 6.8 21.2 12 21.2 12 18 17.2 12 17.2 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.6"/>',
  download: '<path d="M12 4v10.5M7.5 10.5L12 15l4.5-4.5"/><path d="M5 19.5h14"/>',
  upload: '<path d="M12 15V4.5M7.5 9L12 4.5 16.5 9"/><path d="M5 19.5h14"/>',
  filter: '<path d="M4 6.5h16M7 12h10M10 17.5h4"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  list: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  more: '<circle cx="6" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="18" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
  shield: '<path d="M12 3.5l7 2.6v5.6c0 4.2-2.9 7.2-7 8.8-4.1-1.6-7-4.6-7-8.8V6.1z"/>',
  tag: '<path d="M13.5 3.5H20v6.5L11 19a2 2 0 0 1-2.8 0l-3.2-3.2a2 2 0 0 1 0-2.8z"/><circle cx="16.2" cy="7.8" r="1.2"/>',
  'arrow-right': '<path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M18 6l-1.6 1.6M7.6 16.4L6 18M18 18l-1.6-1.6M7.6 7.6L6 6"/>',
  star: '<path d="M12 4l2.5 5.3 5.5.7-4 3.9 1 5.6-5-2.8-5 2.8 1-5.6-4-3.9 5.5-.7z"/>',
  trash: '<path d="M4.5 6.5h15M9.5 6.5V4.8h5v1.7M6.8 6.5l.9 13h8.6l.9-13"/>',
};

export const ICON_NAMES = Object.keys(P);

/** 24×24 ızgarada, currentColor çizgili ikon. */
export function icon(name, size = 16) {
  const body = P[name];
  if (!body) throw new Error(`bilinmeyen ikon: ${name}`);
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}
