// Builds optimised copies of every image listed in src/content/images.yaml.
// Originals in /source are read, never written.
//
//   npm run images            only (re)builds images that are missing
//   npm run images -- --force rebuilds everything
//
// Needs poppler's `pdftoppm` on your PATH for PDF thumbnails
// (macOS: `brew install poppler`, Ubuntu: `apt install poppler-utils`).

import { readFile, mkdir, access, rm, mkdtemp } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { tmpdir } from 'node:os';
import path from 'node:path';
import sharp from 'sharp';
import { parse } from 'yaml';

const run = promisify(execFile);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.join(root, 'src/assets/img');
const force = process.argv.includes('--force');

const exists = (p) => access(p).then(() => true, () => false);

function frontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  return m ? parse(m[1]) : {};
}

async function fromImage(entry, dest) {
  const src = path.join(root, entry.source);
  let img = sharp(src);
  if (entry.crop) {
    const [left, top, width, height] = entry.crop;
    img = img.extract({ left, top, width, height });
  }
  await img
    .resize({ width: entry.width ?? 2400, withoutEnlargement: true })
    .webp({ quality: 90, effort: 6 })
    .toFile(dest);
}

async function fromPdf(entry, dest) {
  const md = await readFile(path.join(root, 'src/content/case-studies', `${entry.pdf}.md`), 'utf8');
  const fm = frontmatter(md);
  const pdf = fm.pdfs[fm.thumb?.pdf ?? 0].file;
  const page = String(fm.thumb?.page ?? 1);
  const tmp = await mkdtemp(path.join(tmpdir(), 'pdfthumb-'));
  try {
    await run('pdftoppm', ['-f', page, '-l', page, '-r', '144', '-png', '-singlefile', path.join(root, pdf), path.join(tmp, 'p')]);
    await sharp(path.join(tmp, 'p.png'))
      .resize({ width: entry.width ?? 1440, withoutEnlargement: true })
      .webp({ quality: 88, effort: 6 })
      .toFile(dest);
  } finally {
    await rm(tmp, { recursive: true, force: true });
  }
}

const manifest = parse(await readFile(path.join(root, 'src/content/images.yaml'), 'utf8'));
await mkdir(out, { recursive: true });

let built = 0;
for (const entry of manifest) {
  const dest = path.join(out, `${entry.id}.webp`);
  if (!force && (await exists(dest))) continue;
  if (entry.pdf) await fromPdf(entry, dest);
  else await fromImage(entry, dest);
  built++;
  console.log('built', path.relative(root, dest));
}
console.log(`${built} image(s) built, ${manifest.length - built} already up to date.`);
