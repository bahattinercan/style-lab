/* PrimeNest prestij demo — stil ve tema denetimi.
   Tek iş: <html data-style> ve <html data-theme> özniteliklerini değiştirmek.
   Bileşen kodu değişmez; renk/tipografi/radius tamamen token'lardan gelir. */

const STYLES = {
  'noir-estate': 'Noir Estate · sıcak siyah + altın, cam gezinme',
  'agency-portfolio': 'Agency Portfolio · kâğıt + elektrik mavi, dev tipografi',
  'product-launch': 'Product Launch · lacivert + mint spotlight',
  'boutique-hotel': 'Boutique Hotel · kum-koyu + terracotta, Playfair',
  'lookbook-editorial': 'Lookbook Editorial · kemik + kiremit, Fraunces',
  'dark-dashboard': 'Dark Dashboard · grafit + cyan, yoğun ızgara',
};

const root = document.documentElement;
const note = document.getElementById('switcherNote');
const themeToggle = document.getElementById('themeToggle');
const swButtons = Array.from(document.querySelectorAll('[data-style-pick]'));
const switcher = document.getElementById('switcher');
const swToggle = document.getElementById('swToggle');
const swPanel = document.getElementById('swPanel');

/* Panel varsayılan kapalı: sayfanın üstünde sürekli durup içeriği örtmesin. */
let open = new URLSearchParams(location.search).get('panel') === '1';

function paintPanel() {
  switcher.dataset.open = String(open);
  swToggle.setAttribute('aria-expanded', String(open));
  swPanel.hidden = !open;
}

swToggle.addEventListener('click', () => {
  open = !open;
  paintPanel();
});

/** URL ile de açılabilir: prestij.html?style=boutique-hotel&theme=dark */
function fromUrl() {
  const params = new URLSearchParams(location.search);
  const style = params.get('style');
  if (style && STYLES[style]) root.dataset.style = style;
  if (params.get('theme') === 'dark') root.dataset.theme = 'dark';
}

function paint() {
  const slug = root.dataset.style;
  for (const btn of swButtons) {
    const on = btn.dataset.stylePick === slug;
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', String(on));
  }
  const dark = root.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.textContent = dark ? 'Açık mod' : 'Koyu mod';
  if (note) note.textContent = STYLES[slug] ?? '';
  const url = new URL(location.href);
  url.searchParams.set('style', slug);
  if (dark) url.searchParams.set('theme', 'dark');
  else url.searchParams.delete('theme');
  history.replaceState(null, '', url.toString());
}

swButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    root.dataset.style = btn.dataset.stylePick;
    paint();
  });
});

themeToggle.addEventListener('click', () => {
  const dark = root.dataset.theme === 'dark';
  if (dark) delete root.dataset.theme;
  else root.dataset.theme = 'dark';
  paint();
});

/* Favori düğmeleri: aria-pressed + dolu kalp. */
for (const fav of document.querySelectorAll('.card-fav')) {
  fav.addEventListener('click', () => {
    const on = fav.getAttribute('aria-pressed') !== 'true';
    fav.setAttribute('aria-pressed', String(on));
    fav.textContent = on ? '♥' : '♡';
  });
}

/* Arama formu demo: gerçek gönderim yok, sadece odak/geri bildirim. */
document.querySelector('.search')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const btn = event.currentTarget.querySelector('.search-go');
  const label = btn.textContent;
  btn.textContent = 'Aranıyor…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = label;
    btn.disabled = false;
  }, 900);
});

fromUrl();
paint();
paintPanel();

/* Esc paneli kapatır (klavye kullanıcısı için). */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && open) {
    open = false;
    paintPanel();
    swToggle.focus();
  }
});
