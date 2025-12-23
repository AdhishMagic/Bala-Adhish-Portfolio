import React from 'react';

function Image({
  src,
  alt = "Image Name",
  className = "",
  ...props
}) {

  const createPlaceholderDataUrl = (text) => {
    const safe = String(text || 'Image').slice(0, 60);
    const escapeXml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0ea5e9"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="80" y="140" rx="16" width="1040" height="350" fill="#0b1220" opacity="0.25"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#e0f2fe" font-family="Inter, Segoe UI, Roboto, Arial" font-size="40" font-weight="600">${escapeXml(safe)}</text>
  <text x="50%" y="72%" dominant-baseline="middle" text-anchor="middle" fill="#b9e6fe" font-family="Inter, Segoe UI, Roboto, Arial" font-size="20">Image placeholder</text>
</svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        // Prevent infinite loop if fallback also fails
        e.currentTarget.onerror = null;
        // Use a unique, per-item SVG placeholder derived from the alt text (usually the project title)
        e.currentTarget.src = createPlaceholderDataUrl(alt);
      }}
      {...props}
    />
  );
}

export default Image;
