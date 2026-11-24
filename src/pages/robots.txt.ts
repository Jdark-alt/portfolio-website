import type { APIRoute } from 'astro';
import { getSite } from '../lib/content';

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const site = await getSite();
  const sitemap = new URL('sitemap-index.xml', new URL(import.meta.env.BASE_URL, siteUrl)).href;
  const body = site.preview
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
