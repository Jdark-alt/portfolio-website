import { getCollection, getEntry } from 'astro:content';

export async function getSite() {
  const entry = await getEntry('site', 'main');
  if (!entry) throw new Error('src/content/site.yaml is missing');
  return entry.data;
}

export async function getHome() {
  const entry = await getEntry('home', 'main');
  if (!entry) throw new Error('src/content/home.yaml is missing');
  return entry.data;
}

export async function getProjects() {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}

export async function getCaseStudies() {
  return (await getCollection('caseStudies')).sort((a, b) => a.data.order - b.data.order);
}

export async function getSkillLabels() {
  const skills = await getCollection('skills');
  return Object.fromEntries(skills.map((s) => [s.data.id, s.data.label])) as Record<string, string>;
}

export async function getPage(id: string) {
  const entry = await getEntry('pages', id);
  if (!entry) throw new Error(`Page "${id}" is missing from src/content/pages.yaml`);
  return entry.data;
}
