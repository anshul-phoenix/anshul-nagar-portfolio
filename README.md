# Anshul Nagar — Portfolio

A production-grade personal portfolio for **Anshul Nagar** — Full-Stack Engineer with 4+ years of experience across React, Vue, Angular, Node.js, and AI-driven development.

Built as a single-page React app with thoughtful motion, dark/light theming, and a content-first structure designed to convince a recruiter in 5 seconds and a hiring manager in 30.

## Stack

- **React 18** + **Vite 5** — fast dev, fast build
- **Tailwind CSS 3** — design system in tokens
- **Framer Motion** — subtle, performance-aware animations
- **Lucide Icons** — clean, consistent iconography
- Mobile-first, fully responsive
- Dark / light mode (persisted to `localStorage`)
- Smooth scroll, scroll progress bar, custom cursor halo
- SEO meta tags + OG/Twitter cards
- Respects `prefers-reduced-motion`

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── Resume.pdf            ← drop your latest resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Section.jsx       ← shared section shell
│   │   ├── ScrollProgress.jsx
│   │   └── Cursor.jsx
│   ├── data/
│   │   └── profile.js        ← single source of truth for content
│   ├── styles/
│   │   └── index.css         ← Tailwind layers + design tokens
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

The optimized output lives in `dist/`.

## Editing content

All copy lives in [src/data/profile.js](src/data/profile.js):

- `profile` — name, role, contact, headline metrics
- `aboutCopy` — about paragraphs and highlights
- `skills` — categorized skill chips
- `projects` — case studies with description, impact, stack, highlights
- `experience` — timeline with bullets
- `certifications`, `education`

Update that one file and the entire site re-renders.

To swap the resume PDF, drop your file at `public/Resume.pdf`.

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`.
4. Click Deploy.

### Netlify

1. Push to GitHub.
2. New site → Import from Git.
3. Build command: `npm run build`. Publish directory: `dist`.

### Cloudflare Pages

1. Connect GitHub.
2. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`.

### GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

(Add `base: '/<repo-name>/'` to `vite.config.js` if hosting under a path.)

### Static host / CDN

Run `npm run build` and upload the contents of `dist/` to any static host (S3 + CloudFront, Nginx, etc.).

## Performance & accessibility notes

- Code-split vendor bundles via Vite `manualChunks`
- Fonts loaded with `preconnect` + `display=swap`
- All interactive elements have visible focus, semantic markup, and aria labels
- Reduced motion respected for users who prefer it
- No external runtime data, zero tracking by default

## License

MIT — free to fork and adapt as a starting point for your own portfolio. Replace the content in `src/data/profile.js` and the resume in `public/`.
