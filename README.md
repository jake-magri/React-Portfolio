# Jake Magri — software portfolio

A Next.js Pages Router portfolio focused on software development, business applications, and application implementation. The existing green/cream visual identity and separate Magri Exterior Services landing page are preserved.

## Run locally

Use Node.js 20.9 or later (validated with Node 24.19.0).

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js. For a production build:

```bash
npm run build
npm start
```

`npm run build` generates the Next.js build and then the sitemap/robots files. `npm run preview` also runs the built Next.js server. Installed dependencies, build output, and Git history are intentionally excluded from the source archive.

## Content and structure

- `src/pages`: page routes and per-page metadata.
- `src/components`: homepage, experience, contact, navigation, footer, notes, project cards, and the separate exterior-services page.
- `src/data/projects.js`: project summaries, contribution descriptions, tools, validation considerations, and boundaries. Detail pages are generated from this data at `/projects/[slug]/`.
- `src/data/blogData.js`: engineering design notes. HTML is authored locally, not accepted from users. Sanitize it before using untrusted CMS content.
- `src/components/SiteHead.js`: canonical URLs and social/search metadata for career pages.
- `src/styles` and component CSS modules: global and local styles.
- `public`: downloadable résumé and retained image/video assets.
- `docs/software-resume.tex`: source for the downloadable résumé. Compile with pdfLaTeX, then copy the PDF to `public/documents/jake-magri-resume.pdf`.
- `docs/SITE_REVIEW.md`: review findings, changes, and validation limits.
- `docs/ORIGINAL_FILE_INVENTORY.json`: original archive inventory with content hashes.

## Routes

`/`, `/portfolio/`, `/projects/[slug]/`, `/resume/`, `/blogs/`, `/blogs/[slug]/`, `/case-studies/` (how I work), `/resources/`, `/contact/`, `/exterior-services/`.

The contact form opens an email draft using the visitor's email application. It has no submission backend and does not send or store messages itself. Direct email is also visible.

## Deployment

This source retains the existing Netlify Next.js setup. `netlify.toml` uses `npm run build` so the postbuild sitemap step also runs. Keep the existing Netlify project and domain configuration; no hosting migration is needed. The revised source has not been deployed.

No environment variables are required for the current static content. Links to external services and social profiles should be checked before publishing.
