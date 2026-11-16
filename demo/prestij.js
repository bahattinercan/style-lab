/*PrimeNest prestige demo — style and theme control.
   One job: change the <html data-style> and <html data-theme> attributes.
   Component code does not change; color/typography/radius comes entirely from tokens.*/

const STYLES = {
  'noir-estate': 'Noir Estate · warm black + gold, glass navigation',
  'agency-portfolio': 'Agency Portfolio · paper + electric blue, giant typography',
  'product-launch': 'Product Launch · lacivert + mint spotlight',
  'boutique-hotel': 'Boutique Hotel · sand-and-coast + terracotta, Playfair',
  'lookbook-editorial': 'Lookbook Editorial · kemik + kiremit, Fraunces',
  'dark-dashboard': 'Dark Dashboard · graphite + cyan, dense grid',
};

const root = document.documentElement;
const note = document.getElementById('switcherNote');
const themeToggle = document.getElementById('themeToggle');
const swButtons = Array.from(document.querySelectorAll('[data-style-pick]'));
const switcher = document.getElementById('switcher');
const swToggle = document.getElementById('swToggle');
const swPanel = document.getElementById('swPanel');

/*The panel is closed by default: it should not stay on top of the page and cover the content.*/
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

/** Can also be opened with URL: prestij.html?style=boutique-hotel&theme=dark*/
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
  themeToggle.textContent = dark ? 'light mode' : 'dark mode';
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

/*Favorite buttons: aria-pressed + full heart.*/
for (const fav of document.querySelectorAll('.card-fav')) {
  fav.addEventListener('click', () => {
    const on = fav.getAttribute('aria-pressed') !== 'true';
    fav.setAttribute('aria-pressed', String(on));
    fav.textContent = on ? '♥' : '♡';
  });
}

/*Search form demo: no actual submission, just focus/feedback.*/
document.querySelector('.search')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const btn = event.currentTarget.querySelector('.search-go');
  const label = btn.textContent;
  btn.textContent = 'Wanted…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = label;
    btn.disabled = false;
  }, 900);
});

fromUrl();
paint();
paintPanel();

/*Esc closes the panel (for the keyboard user).*/
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && open) {
    open = false;
    paintPanel();
    swToggle.focus();
  }
});
