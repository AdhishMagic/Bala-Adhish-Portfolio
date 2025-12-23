// Utility to resolve a local image for a project title from public/assets/images/projects

export const DEFAULT_FALLBACK = '/assets/images/no_image.png';

// Normalize title to a slug
export function titleToSlug(title = '') {
  return String(title)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Helper to handle Vite base path
function resolvePath(path) {
  if (!path) return path;

  // If path is external (http), return as is
  if (path.startsWith('http') || path.startsWith('https')) return path;

  // If path is absolute, prepend base URL
  if (path.startsWith('/')) {
    const base = import.meta.env.BASE_URL || '/';
    // If base is set (e.g. /repo/) and path doesn't start with it
    if (base !== '/' && !path.startsWith(base)) {
      // Remove leading slash from path to avoid double generic slash if needed, 
      // but standard concat `base + path.substring(1)` works if base ends in slash.
      // Vite BASE_URL usually ends with /.
      const cleanBase = base.endsWith('/') ? base : base + '/';
      return `${cleanBase}${path.substring(1)}`;
    }
  }
  return path;
}

/**
 * Resolves the final image URL for a project, handling base path for public assets.
 */
export function getImageForProject(project) {
  // 1. If project has a specific image path defined in data
  if (project?.image) {
    return resolvePath(project.image);
  }

  // 2. Fallback: Try to construct path from title (convention: assets/images/projects/{slug}.svg)
  // Since we migrated to explicit paths in projects.js, this is a safety net.
  if (project?.title) {
    const slug = titleToSlug(project.title);
    return resolvePath(`/assets/images/projects/${slug}.svg`);
  }

  // 3. Fallback to default
  return resolvePath(DEFAULT_FALLBACK);
}

// Deprecated/stubbed functions to maintain API compatibility
export function getLocalImageOrNull(title) {
  if (!title) return null;
  const slug = titleToSlug(title);
  return resolvePath(`/assets/images/projects/${slug}.svg`);
}

export function getGalleryForTitle(title) { return []; }

export function getTypeFallback(type) {
  return resolvePath(DEFAULT_FALLBACK);
}

export function getImageForTitle(title) {
  return getLocalImageOrNull(title);
}

export default getImageForTitle;
