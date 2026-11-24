import type { ImageMetadata } from 'astro';
import { getEntry } from 'astro:content';

const built = import.meta.glob<{ default: ImageMetadata }>('/src/assets/img/*.webp', { eager: true });

/** Looks up an image by its id in src/content/images.yaml. */
export async function getImage(id: string) {
  const entry = await getEntry('images', id);
  if (!entry) throw new Error(`Image "${id}" is not listed in src/content/images.yaml`);
  const mod = built[`/src/assets/img/${id}.webp`];
  if (!mod) throw new Error(`Image "${id}" has not been built yet. Run: npm run images`);
  return { ...entry.data, src: mod.default };
}
