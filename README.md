# Jerry Fernandes: PM portfolio

Static site built with [Astro](https://astro.build). Motion uses GSAP (ScrollTrigger, SplitText) and Lenis.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

## Where things live

- `src/content/`: **all copy**. `site.yaml` (contact details, nav, interface text), `home.yaml` (home page, including the headline options), `projects/*.md`, `case-studies/*.md`, `images.yaml` (alt text and captions), `skills.yaml`, `pages.yaml`.
- `source/`: untouched originals from Google Drive. Never edited.
- `src/assets/img/`: optimised copies made by `npm run images` from the list in `images.yaml`.
- `docs/discovery/`: content inventory, sitemap, chapter plans and the three visual directions.

## Preview mode

`preview: true` in `src/content/site.yaml` shows the switcher (direction A/B/C, headline and standfirst options) and asks search engines not to index the site. Links can carry a version: `?d=b&h=h3&s=s2`.

A full guide to editing copy, adding case studies and deploying to Cloudflare Pages comes with the final step.
