# Bala Adhish — AI Engineer Portfolio

A modern, fast, and responsive single‑page portfolio built with React 18, Vite, and Tailwind CSS. It highlights AI/ML projects, full‑stack skills, and an easy way to get in touch.

## ✨ Features

- React 18 + Vite 5 for fast dev/builds
- Tailwind CSS with plugins (forms, typography, aspect‑ratio, container‑queries, line‑clamp, animate, fluid type)
- React Router v6 SPA with basename for GitHub Pages
- Reusable UI primitives (Button, Input, Select, Checkbox), AppIcon, AppImage
- Featured projects carousel (auto‑advance, pause‑on‑hover, swipe on mobile)
- Skills matrix with tabbed interface and PDF export
- SEO meta via `react-helmet`
- Contact form with Formspree integration

## 🧰 Tech Stack

- Framework: React 18
- Build: Vite 5, `@vitejs/plugin-react`
- Styling: Tailwind CSS 3
- Routing: `react-router-dom` v6
- Animations: `framer-motion`
- Charts/Visualization: `d3`, `recharts`, `chart.js` (used in select views)
- Utilities: `clsx`, `class-variance-authority`, `tailwind-merge`
- Icons: `lucide-react` (wrapped by `AppIcon`)
- Forms: `@formspree/react`, `react-hook-form`

## 📁 Project Structure

```
.
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable UI & wrappers
│   ├── pages/                  # Route-based pages (home, about, skills, contact, projects)
│   ├── data/                   # Project listings and constants
│   ├── styles/                 # Tailwind and global CSS
│   ├── utils/                  # Helpers (image map, skills PDF)
│   ├── App.jsx                 # App shell
│   ├── Routes.jsx              # Route config
│   └── index.jsx               # Entrypoint
├── index.html                  # HTML template
├── vite.config.mjs             # Vite config (base + outDir=build)
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS plugins
├── package.json                # Scripts and deps
└── build/                      # Production output (after build)
```

## 🚀 Getting Started

Requirements
- Node.js 18+ recommended
- npm

Install dependencies

```cmd
npm install
```

Start the dev server

```cmd
npm start
```

The app serves at http://localhost:4028 (see `vite.config.mjs`).

## 🔐 Environment Variables

Create a `.env` in the project root for Formspree:

```ini
VITE_FORMSPREE_FORM_ID=your_formspree_form_id
```

Restart the server after editing `.env`.

## 🏗️ Build & Preview

Build for production (outputs to `build/`):

```cmd
npm run build
```

Preview the production build locally:

```cmd
npm run serve
```

## 🌐 Deployment (GitHub Pages)

This repo is prepped for GitHub Pages.

- `vite.config.mjs` sets base to `/Bala-Adhish-Portfolio/`
- Output dir is `build/`
- Scripts:
  - `predeploy`: build the app
  - `deploy`: publish `build/` to `gh-pages`

Publish:

```cmd
npm run deploy
```

Default URL:

```
https://AdhishMagic.github.io/Bala-Adhish-Portfolio/
```

## 🗺️ Routes

- `/homepage-ai-engineer-portfolio-hub` — Landing with hero, featured projects, skills tabs
- `/about-professional-journey` — About, values, vision
- `/technical-portfolio-project-showcase` — Projects grid and featured carousel
- `/skills-matrix-technical-competencies` — Full skills matrix + skills PDF
- `/professional-connect-contact-hub` — Contact form and quick connect

Note: External links open in new tabs; resume downloads use a bundled asset for reliability.

## 🧪 Testing (optional libs present)

Testing libraries are included for future tests:
- `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`

## 🔎 Troubleshooting

- Blank page on GitHub Pages:
  - Ensure `base` in `vite.config.mjs` matches `/Bala-Adhish-Portfolio/`.
  - Confirm Pages serves from `gh-pages` branch.
- 404 on refresh (SPA):
  - GitHub Pages needs SPA fallback. Consider `_redirect` or a static fallback when hosting elsewhere.
- Large bundle warning during build:
  - Consider dynamic imports or Rollup `manualChunks` to split big bundles.

## 📄 License

This portfolio is provided as‑is for personal showcasing by Bala Adhish.
