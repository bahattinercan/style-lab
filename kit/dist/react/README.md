# React çıktısı (style-lab)

GENERATED — `node kit/export/react.mjs` · 151 stil

## 1 · CSS (asıl yol)

`kit/dist/tokens.all.css` dosyasını projeye al; kök elemanda `data-style` + `data-theme` kullan:

```html
<html data-style="terminal-ui" data-theme="dark">
```

Bileşen kodu **hard-coded renk/radius/gölge içermez**, yalnız `var(--…)` kullanır.
Tailwind kullanıyorsan `kit/dist/tailwind.theme.css` (v4 `@theme`).

## 2 · JS tarafı (opsiyonel)

Grafik/canvas/inline style için `styleLabTokens.js`:

```js
import { styleLabTokens, styleLabPalette, styleLabCssVars, applyStyleLab } from './styleLabTokens.js';

const t = styleLabTokens['terminal-ui'];
chartTheme.color = t.light.accent;
document.body.style.cssText += Object.entries(styleLabCssVars('terminal-ui', 'dark'))
  .map(([k, v]) => `${k}:${v}`).join(';');
```

## 3 · ThemeProvider reçetesi

Bu dosya **reçetedir**, üretilen kod değil: Next.js/Vite farkları (SSR, hydration) yüzünden
projeye göre uyarlanır. Bağımlılık eklemez.

```tsx
'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { applyStyleLab, styleLabSlugs, type StyleLabTheme } from './styleLabTokens';

type Ctx = { slug: string; theme: StyleLabTheme; setSlug: (s: string) => void; toggleTheme: () => void };
const StyleLabContext = createContext<Ctx | null>(null);

export function StyleLabProvider({
  children,
  slug: initial = 'minimalism',
  theme: initialTheme = 'light',
}: { children: React.ReactNode; slug?: string; theme?: StyleLabTheme }) {
  const [slug, setSlugState] = useState(initial);
  const [theme, setTheme] = useState<StyleLabTheme>(initialTheme);

  useEffect(() => {
    const saved = localStorage.getItem('style-lab') as string | null;
    const savedTheme = localStorage.getItem('style-lab-theme') as StyleLabTheme | null;
    if (saved && styleLabSlugs.includes(saved)) setSlugState(saved);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    applyStyleLab(slug, { theme });
    localStorage.setItem('style-lab', slug);
    localStorage.setItem('style-lab-theme', theme);
  }, [slug, theme]);

  const setSlug = useCallback((s: string) => styleLabSlugs.includes(s) && setSlugState(s), []);
  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return <StyleLabContext.Provider value={{ slug, theme, setSlug, toggleTheme }}>{children}</StyleLabContext.Provider>;
}

export function useStyleLab() {
  const ctx = useContext(StyleLabContext);
  if (!ctx) throw new Error('useStyleLab: StyleLabProvider içinde kullanılmalı');
  return ctx;
}
```

## 4 · Hareket imzası

`styleLabTokens[slug].motion` normalize edilmiş değerleri taşır (ms + cubic-bezier noktaları).
CSS'te `tokens.all.css` zaten doğru süre/eğriyi verir; JS animasyonu (framer-motion, GSAP)
kullanılıyorsa **aynı** değerleri buradan al — varsayılan `ease`/`300ms` yazma.

`prefers-reduced-motion` zorunlu: `motion.reduced` alanı stilin reduced-motion politikasını taşır.

## Notlar

- Koyu mod yalnız 10 renk paletini değiştirir; tipografi/şekil/hareket aynıdır.
- `--blur`, `--grain`, `--data-1…4` CSS'te vardır; bu modülde yok (hedefe özgü katman).
- Değerler `tokens.json` ile birebir; `--verify` 145 stilin paletini karşılaştırır.
