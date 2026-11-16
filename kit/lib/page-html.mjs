import { inlineTypeScale } from './type-scale.mjs';
import { applySectionPlan } from './section-plan.mjs';
import { icon } from '../render/icons.mjs';

function h1Lines(text) {
  const words = String(text).split(/\s+/);
  if (words.length <= 3) return words.join('<br>');
  const per = Math.ceil(words.length / 3);
  const lines = [];
  for (let i = 0; i < words.length; i += per) lines.push(words.slice(i, i + per).join(' '));
  return lines.slice(0, 3).join('<br>');
}

export function fillPageHtml(tpl, slug, cfg, num, vars, sceneKey, layout, imagery, copy, motifCss, helpers) {
  let html = tpl
    .replace(/<!--\s*NAV\s*-->/, () => helpers.partial(`nav-${layout.nav}`))
    .replace(/<!--\s*HERO\s*-->/, () => helpers.partial(`hero-${layout.hero}`));
  const map = {
    __STYLE__: slug,
    __BODY_CLASS__: cfg.bodyClass ?? '',
    __MOTIF__: `motif-${cfg.motif ?? 'rings'}`,
    __BG__: vars.bg ?? '',
    __SURFACE__: vars.surface ?? '',
    __INK__: vars.ink ?? '',
    __ACCENT__: vars.accent ?? '',
    __TRACKING__: vars.tracking ?? '',
    __FONT_DISPLAY__: (vars['font-display'] ?? '').split(',')[0].replace(/"/g, ''),
    __FONT_BODY__: (vars['font-body'] ?? '').split(',')[0].replace(/"/g, ''),
    __RADIUS__: vars.radius ?? '',
    __RADIUS_LG__: vars['radius-lg'] ?? '',
    __FAMILY__: helpers.familyOf(num),
    __LAYOUT_HERO__: layout.hero,
    __LAYOUT_NAV__: layout.nav,
    __DENSITY__: layout.density,
    __SECTION_PLAN__: layout.sectionPlan,
    __FIT__: helpers.refit ? '0' : (layout.fit ?? '0'),
    __FIT_LOCKED__: helpers.refit || layout.fit == null ? 'false' : 'true',
    __TYPE_SCALE__: inlineTypeScale(layout.typeScale ?? {}),
    __PHOTO__: imagery?.art ? `../images/${imagery.art}` : imagery?.photo ? `../images/${imagery.photo}` : '',
    __PHOTO_ATTRS__: imagery?.photo ? `data-photo="${imagery.treatment?.mode ?? 'plain'}" style="--photo-strength:${imagery.treatment?.strength ?? 0}"` : '',
    __COPY_EYEBROW__: copy?.hero?.eyebrow ?? '',
    __COPY_H1__: copy?.hero?.h1 ?? '',
    __COPY_H1_LINES__: h1Lines(copy?.hero?.h1 ?? ''),
    __COPY_LEDE__: copy?.hero?.lede ?? '',
    __COPY_CTA1__: copy?.hero?.ctaPrimary ?? '',
    __COPY_CTA2__: copy?.hero?.ctaSecondary ?? '',
    __COPY_PROOF1__: copy?.proofs?.[0] ?? '',
    __COPY_PROOF2__: copy?.proofs?.[1] ?? '',
    __COPY_PROOF3__: copy?.proofs?.[2] ?? '',
    __COPY_LOGO_LABEL__: copy?.logoLabel ?? '',
    __COPY_LOGO1__: copy?.logos?.[0] ?? '',
    __COPY_LOGO2__: copy?.logos?.[1] ?? '',
    __COPY_LOGO3__: copy?.logos?.[2] ?? '',
    __COPY_LOGO4__: copy?.logos?.[3] ?? '',
    __COPY_LOGO5__: copy?.logos?.[4] ?? '',
    __COPY_TILE1__: copy?.tiles?.[0]?.cap ?? '',
    __COPY_TILE2__: copy?.tiles?.[1]?.cap ?? '',
    __COPY_TILE3__: copy?.tiles?.[2]?.cap ?? '',
    __COPY_TILE4__: copy?.tiles?.[3]?.cap ?? '',
  };
  for (const [key, value] of Object.entries(map)) html = html.split(key).join(String(value ?? ''));
  const sectionPlan = helpers.sectionDefs.find((plan) => plan.id === layout.sectionPlan);
  if (sectionPlan) html = applySectionPlan(html, sectionPlan);
  html = html.replace(/__ICON:([a-z0-9-]+):(\d+)__/g, (_match, name, size) => icon(name, Number(size)));
  return html.replace(
    '<style id="extra"></style>',
    `<style>\n${cfg.extraCss ?? ''}\n${cfg.scenes?.[sceneKey] ?? ''}${motifCss ? `\n${motifCss}` : ''}\n</style>`,
  );
}
