/**
 * kit/render/sections.mjs — bölüm arketipleri (P3).
 *
 * Neden: katalog tam sayfa gösteriyordu; Land-book'un "Sections" görünümü gibi "bu bölümü nasıl
 * kuracağım" sorusunun cevabı yoktu. 12 bölüm arketipi burada tanımlı; `render-sections.mjs`
 * her stilin token'larıyla render eder → `kit/.shots-cache/<dir>/sections/<id>.png`.
 *
 * Kural: yalnız mevcut sınıflar (panel, btn, chip, card, kpi, table) + var(--…) renkler.
 * Yeni bir sınıf gerekiyorsa `section.css`'e eklenir (burada inline stil yok).
 */

export const SECTIONS = [
  {
    id: 'hero',
    label: 'Hero',
    height: 620,
    body: `
    <div class="s-hero">
      <span class="eyebrow">__COPY_EYEBROW__</span>
      <h1>__COPY_H1__</h1>
      <p class="lede">__COPY_LEDE__</p>
      <div class="cta-row"><a class="btn" href="#">__COPY_CTA1__</a><a class="btn ghost" href="#">__COPY_CTA2__</a></div>
      <ul class="proof"><li>__COPY_PROOF1__</li><li>__COPY_PROOF2__</li><li>__COPY_PROOF3__</li></ul>
    </div>`,
  },
  {
    id: 'logo-wall',
    label: 'Güven şeridi',
    height: 240,
    body: `
    <div class="s-wall">
      <span class="s-cap">__COPY_LOGO_LABEL__</span>
      <div class="s-logos"><b>__COPY_LOGO1__</b><b>__COPY_LOGO2__</b><b>__COPY_LOGO3__</b><b>__COPY_LOGO4__</b><b>__COPY_LOGO5__</b></div>
    </div>`,
  },
  {
    id: 'feature-trio',
    label: 'Üç özellik',
    height: 420,
    body: `
    <div class="s-head"><span class="s-cap">Özellikler</span><h2>Üç şey iyi yapılır</h2></div>
    <div class="s-trio">
      ${[1, 2, 3].map((i) => `<article class="panel"><span class="chip">0${i}</span><h3>__COPY_TILE${i}__</h3><p class="lede">Tek cümlelik açıklama; ölçü ve sonuç odaklı.</p></article>`).join('')}
    </div>`,
  },
  {
    id: 'bento',
    label: 'Bento ızgara',
    height: 520,
    body: `
    <div class="s-head"><span class="s-cap">Tek bakışta</span><h2>Dört parça, tek ekran</h2></div>
    <div class="s-bento">
      <article class="panel b-a"><span class="chip">__COPY_TILE1__</span><div class="s-bars"><i></i><i></i><i></i></div></article>
      <article class="panel b-b"><span class="chip">__COPY_TILE2__</span><b class="s-num">%82</b></article>
      <article class="panel b-c"><span class="chip">__COPY_TILE3__</span><p class="lede">Kısa açıklama.</p></article>
      <article class="panel b-d"><span class="chip">__COPY_TILE4__</span><b class="s-num">14</b></article>
    </div>`,
  },
  {
    id: 'how-it-works',
    label: 'Nasıl çalışır',
    height: 380,
    body: `
    <div class="s-head"><span class="s-cap">Nasıl çalışır</span><h2>Üç adım</h2></div>
    <ol class="s-steps">
      <li><b>01</b><span>__COPY_TILE1__</span><p class="lede">Tek cümle.</p></li>
      <li><b>02</b><span>__COPY_TILE2__</span><p class="lede">Tek cümle.</p></li>
      <li><b>03</b><span>__COPY_TILE3__</span><p class="lede">Tek cümle.</p></li>
    </ol>`,
  },
  {
    id: 'testimonial',
    label: 'Referans',
    height: 360,
    body: `
    <figure class="s-quote">
      <blockquote>“Kararı iki haftada verdik; ölçülebilir tek bir planla.”</blockquote>
      <figcaption><b>Ada Yılmaz</b><span>__COPY_LOGO1__ · Operasyon</span></figcaption>
    </figure>`,
  },
  {
    id: 'stats',
    label: 'İstatistik',
    height: 280,
    body: `
    <div class="s-stats">
      <div><b>%82</b><span>__COPY_PROOF1__</span></div>
      <div><b>14</b><span>__COPY_PROOF2__</span></div>
      <div><b>3.4×</b><span>__COPY_PROOF3__</span></div>
      <div><b>0</b><span>Kesinti</span></div>
    </div>`,
  },
  {
    id: 'pricing-table',
    label: 'Fiyat tablosu',
    height: 520,
    body: `
    <div class="s-head"><span class="s-cap">Planlar</span><h2>Ekip boyuna göre</h2></div>
    <div class="s-pricing">
      <article class="panel"><h3>Başlangıç</h3><b class="s-price">₺0</b><ul class="s-list"><li>3 proje</li><li>1 GB</li><li>Topluluk</li></ul><a class="btn ghost" href="#">Başla</a></article>
      <article class="panel is-pop"><span class="chip">Önerilen</span><h3>Ekip</h3><b class="s-price">₺480</b><ul class="s-list"><li>Sınırsız proje</li><li>100 GB</li><li>SSO</li></ul><a class="btn" href="#">14 gün dene</a></article>
      <article class="panel"><h3>Kurumsal</h3><b class="s-price">Teklif</b><ul class="s-list"><li>SLA</li><li>Özel destek</li><li>KVKK</li></ul><a class="btn ghost" href="#">İletişim</a></article>
    </div>`,
  },
  {
    id: 'faq',
    label: 'SSS',
    height: 360,
    body: `
    <div class="s-head"><span class="s-cap">SSS</span><h2>Sık sorulanlar</h2></div>
    <div class="s-faq">
      <details open><summary>Planı istediğim zaman değiştirebilir miyim?</summary><p>Evet; yükseltmeler anında, düşürmeler dönem sonunda.</p></details>
      <details><summary>Fatura nasıl kesilir?</summary><p>Tek fatura, dönem başında, KDV dahil.</p></details>
      <details><summary>Eğitim indirimi var mı?</summary><p>Öğrenci ve kâr amacı gütmeyen kurumlar için %50.</p></details>
    </div>`,
  },
  {
    id: 'cta',
    label: 'Kapanış CTA',
    height: 280,
    body: `
    <div class="s-cta">
      <h2>__COPY_H1__</h2>
      <div class="cta-row"><a class="btn" href="#">__COPY_CTA1__</a><a class="btn ghost" href="#">__COPY_CTA2__</a></div>
    </div>`,
  },
  {
    id: 'footer',
    label: 'Footer',
    height: 320,
    body: `
    <footer class="s-footer">
      <div class="s-f-brand"><b>Northwind</b><span class="lede">__COPY_LEDE__</span></div>
      <nav class="s-f-cols">
        <div><b>Ürün</b><a href="#">Özellikler</a><a href="#">Fiyatlar</a><a href="#">Docs</a></div>
        <div><b>Şirket</b><a href="#">Hakkında</a><a href="#">Kariyer</a><a href="#">İletişim</a></div>
        <div><b>Yasal</b><a href="#">Gizlilik</a><a href="#">KVKK</a><a href="#">Şartlar</a></div>
      </nav>
    </footer>`,
  },
  {
    id: 'og-card',
    label: 'OG kartı (1200×630)',
    width: 1200,
    height: 630,
    body: `
    <div class="s-og">
      <span class="s-cap">__COPY_EYEBROW__</span>
      <h1>__COPY_H1__</h1>
      <span class="s-og-brand">Northwind</span>
    </div>`,
  },
];
