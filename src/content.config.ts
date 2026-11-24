import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse } from 'yaml';

/** A YAML file that holds one object becomes a collection with one entry, id "main". */
const single = (path: string) =>
  file(path, { parser: (text) => [{ id: 'main', ...(parse(text) as object) }] });

const skillIds = [
  'discovery', 'framing', 'requirements', 'prioritisation', 'roadmapping',
  'metrics', 'ai', 'ux', 'execution', 'gtm',
] as const;
const skillId = z.enum(skillIds);

/** Any number shown on the site must say where it came from. */
const metric = z.object({
  value: z.string().min(1),
  suffix: z.string().optional(),
  label: z.string().min(1),
  source: z.string().min(3, 'Every metric needs a source'),
  href: z.string().optional(),
  tag: z.string().optional(),
});

const link = z.object({ label: z.string(), href: z.string() });

const site = defineCollection({
  loader: single('src/content/site.yaml'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    jobTitle: z.string(),
    location: z.string(),
    description: z.string(),
    contact: z.object({
      email: z.string().email(),
      phone: z.string(),
      phoneHref: z.string(),
      linkedin: z.string().url(),
      linkedinLabel: z.string(),
    }),
    resume: z.string(),
    direction: z.enum(['a', 'b', 'c']),
    preview: z.boolean(),
    analyticsToken: z.string(),
    nav: z.array(link),
    ui: z.record(z.string(), z.string()),
    docMeta: z.object({ id: z.string(), label: z.string(), status: z.string() }),
    directions: z.array(z.object({ id: z.enum(['a', 'b', 'c']), name: z.string() })),
  }),
});

const home = defineCollection({
  loader: single('src/content/home.yaml'),
  schema: z.object({
    seo: z.object({ title: z.string(), description: z.string() }),
    hero: z.object({
      eyebrow: z.string(),
      default: z.string(),
      headlines: z.array(z.object({ id: z.string(), lead: z.string(), main: z.string(), note: z.string() })).min(1),
      standfirstDefault: z.string(),
      standfirsts: z.array(z.object({ id: z.string(), text: z.string() })).min(1),
      cta: link,
      secondary: link,
      docRows: z.array(z.object({ label: z.string(), value: z.string(), live: z.boolean().optional() })),
      contentsTitle: z.string(),
      contents: z.array(z.object({ numeral: z.string(), title: z.string(), note: z.string(), href: z.string(), meta: z.string() })),
      figure: z.object({ caption: z.string(), tag: z.string(), footnote: z.string(), hint: z.string() }),
    }),
    proof: z.array(metric),
    howIWork: z.object({
      id: z.string(),
      title: z.string(),
      intro: z.string(),
      steps: z.array(z.object({
        name: z.string(),
        principle: z.string(),
        evidence: z.array(z.object({ project: z.string(), text: z.string(), href: z.string() })),
      })),
    }),
    projects: z.object({ id: z.string(), title: z.string(), intro: z.string() }),
    caseStudies: z.object({ id: z.string(), title: z.string(), intro: z.string(), cta: z.string() }),
    beforeProduct: z.object({ title: z.string(), text: z.string(), cta: z.string(), href: z.string() }),
    contact: z.object({
      id: z.string(), title: z.string(), text: z.string(),
      emailLabel: z.string(), phoneLabel: z.string(), linkedinLabel: z.string(), locationLabel: z.string(),
    }),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.yaml'),
  schema: z.object({ id: skillId, label: z.string() }),
});

const images = defineCollection({
  loader: file('src/content/images.yaml'),
  schema: z.object({
    id: z.string(),
    source: z.string().optional(),
    pdf: z.string().optional(),
    crop: z.array(z.number()).length(4).optional(),
    width: z.number().optional(),
    alt: z.string().min(8, 'Every image needs real alt text'),
    caption: z.string().optional(),
    credit: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    kicker: z.string(),
    expansion: z.string(),
    oneLiner: z.string(),
    url: z.string(),
    urlLabel: z.string(),
    role: z.string(),
    proofs: z.array(metric).min(1).max(4),
    cover: z.string(),
    secondary: z.string(),
    cta: z.string(),
    seoDescription: z.string(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    kind: z.string(),
    order: z.number(),
    date: z.string(),
    skills: z.array(skillId).min(1),
    summary: z.string(),
    thumb: z.object({ pdf: z.number(), page: z.number() }),
    pdfs: z.array(z.object({ file: z.string(), label: z.string(), redact: z.boolean().optional() })).min(1),
    loom: z.string(),
  }),
});

const pages = defineCollection({
  loader: file('src/content/pages.yaml'),
  schema: z.object({
    id: z.string(),
    kicker: z.string(),
    title: z.string(),
    summary: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

export const collections = { site, home, skills, images, projects, caseStudies, pages };
