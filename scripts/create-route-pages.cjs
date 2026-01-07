const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const indexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error(`[create-route-pages] Missing ${indexHtmlPath}. Run the Vite build first.`);
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Client-side routes that should also exist as physical pages on GitHub Pages
// to avoid a top-level 404 status on direct navigation.
const routes = [
  'about-professional-journey',
  'professional-connect-contact-hub',
  'skills-matrix-technical-competencies',
  'technical-portfolio-project-showcase',
  'homepage-ai-engineer-portfolio-hub',
  'experience-timeline',
];

for (const route of routes) {
  const routeDir = path.join(buildDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
}

console.log(`[create-route-pages] Wrote ${routes.length} route pages.`);
