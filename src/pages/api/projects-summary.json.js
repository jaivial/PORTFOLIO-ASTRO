// Astro endpoint: returns slim project data for the home page.
// Slim = fields the Project island actually renders (slug, name, type, description, image, tech).
// Full data stays out of the HTML, fetched lazily on hydration.

import { getData } from '../../utils/projects.js';

export const prerender = true;

export async function GET() {
  const data = getData().map(p => ({
    slug: p.slug,
    name: p.name,
    type: p.type,
    description: p.description,
    image: p.image,
    tech: p.tech,
  }));
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
