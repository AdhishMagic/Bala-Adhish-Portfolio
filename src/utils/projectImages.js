// Utility to resolve a local image for a project title from src/assets/images/projects
// Naming convention: kebab-case of title, non-alphanumerics removed, spaces -> dashes
// Example: "Weather Forecast Application" -> weather-forecast-application.jpg/png/webp

export const DEFAULT_FALLBACK = '/assets/images/no_image.png';

const cache = {};

// Eagerly import all common image extensions in the projects folder
const images = import.meta.glob('../assets/images/projects/**/**/*.{png,jpg,jpeg,webp,avif,svg}', { eager: true });

// Normalize title to a slug
export function titleToSlug(title = '') {
  return String(title)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Attempt to find an image that matches the slug with any supported extension
export function getImageForTitle(title, options = {}) {
  const { fallback = DEFAULT_FALLBACK } = options;
  const slug = titleToSlug(title);

  if (!slug) return fallback;
  if (cache[slug]) return cache[slug];

  // Try matching any extension
  const candidates = [
    `../assets/images/projects/${slug}.png`,
    `../assets/images/projects/${slug}.jpg`,
    `../assets/images/projects/${slug}.jpeg`,
    `../assets/images/projects/${slug}.webp`,
    `../assets/images/projects/${slug}.avif`,
    `../assets/images/projects/${slug}.svg`,
  ];

  for (const key of candidates) {
    if (images[key]) {
      // Vite's eager import returns { default: url }
      const url = images[key]?.default || images[key];
      cache[slug] = url;
      return url;
    }
  }

  // If not found, try loose contains match (startsWith) for cases with minor variations
  const matchKey = Object.keys(images).find(k => k.includes(`/${slug}.`));
  if (matchKey) {
    const url = images[matchKey]?.default || images[matchKey];
    cache[slug] = url;
    return url;
  }

  return fallback ?? null;
}

// Return a local image URL if available, else null
export function getLocalImageOrNull(title) {
  return getImageForTitle(title, { fallback: null });
}

// Return an ordered gallery of local images for a title if files exist like slug-1.png, slug-2.jpg, etc.
export function getGalleryForTitle(title) {
  const slug = titleToSlug(title);
  if (!slug) return [];
  // Collect all matches starting with slug or within a slug directory
  const keys = Object.keys(images).filter(k => {
    return k.includes(`/projects/${slug}.`) || k.includes(`/projects/${slug}-`) || k.includes(`/projects/${slug}/`);
  });
  if (keys.length === 0) return [];
  // Sort by filename natural order
  keys.sort();
  return keys.map(k => images[k]?.default || images[k]).filter(Boolean);
}

// Type-based generic fallbacks (ensure corresponding files exist)
export function getTypeFallback(type) {
  const mapping = {
    'AI/ML': '../assets/images/projects/generic-aiml.svg',
    'Web Development': '../assets/images/projects/generic-web.svg',
    'Mobile': '../assets/images/projects/generic-mobile.svg',
    'Data Science': '../assets/images/projects/generic-data.svg',
    'default': '../assets/images/projects/generic-default.svg',
  };
  const key = mapping[type] || mapping['default'];
  const mod = images[key];
  if (mod) return mod.default || mod;
  return DEFAULT_FALLBACK;
}

// Convenience: best cover image for a project
export function getImageForProject(project) {
  const local = getLocalImageOrNull(project?.title);
  if (local) return local;
  if (project?.gallery && project?.gallery[0]) return project.gallery[0];
  if (project?.image) return project.image;
  return getTypeFallback(project?.type);
}

export default getImageForTitle;
