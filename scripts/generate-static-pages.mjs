// Post-build step: create build/<route>/index.html for every route, with that
// page's real title, meta tags, canonical URL, and FAQ schema baked into the
// raw HTML. Vercel serves static files before applying SPA rewrites, so
// crawlers and social scrapers get correct metadata without executing JS.
// React still hydrates and renders normally in the browser.
//
// Runs automatically via the "postbuild" script in package.json.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const buildDir = path.join(root, 'build');
const baseUrl = 'https://pointandsprayidaho.com';

// servicePages.js is pure data with ESM exports. Import it via a data: URL so
// Node treats it as ESM regardless of package.json "type".
const configSource = fs.readFileSync(path.join(root, 'src/config/servicePages.js'), 'utf8');
const { default: servicePages } = await import(
  'data:text/javascript;base64,' + Buffer.from(configSource).toString('base64')
);

// Keep titles/descriptions here in sync with the Helmet tags in src/pages/*.js.
const staticRoutes = [
  {
    slug: 'services',
    title: 'Window Cleaning & Pressure Washing Services in Boise, Idaho | Point & Spray',
    description: 'Window cleaning, commercial and storefront window cleaning, pressure washing, concrete cleaning, and gutter cleaning in Boise and the Treasure Valley.',
  },
  {
    slug: 'about',
    title: 'About Point & Spray | Locally Owned in Boise, ID',
    description: 'Point & Spray is a veteran-owned window cleaning and pressure washing business in Boise, Idaho, started and run by Jamie, the owner.',
  },
  {
    slug: 'contact',
    title: 'Get Your Free Quote | Window Cleaning & Pressure Washing | Point & Spray Boise',
    description: 'Get a free quote for window cleaning or pressure washing in Boise, Meridian, Eagle & Garden City. Call or text (208) 994-4085.',
  },
  {
    slug: 'gallery',
    title: 'Before & After Gallery | Point & Spray Boise, ID',
    description: 'Before and after photos from real window cleaning, pressure washing, and driveway cleaning jobs in Boise, Idaho.',
  },
  {
    slug: 'reviews',
    title: 'Reviews | Point & Spray Boise',
    description: 'Read what Boise customers say about Point & Spray, and leave a review of your own on Google.',
  },
];

const escapeHtml = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

function renderPage({ slug, title, description, faqs }) {
  const url = `${baseUrl}/${slug}`;
  const t = escapeHtml(title);
  const d = escapeHtml(description);

  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="twitter:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\/>)/, `$1${url}$2`);

  if (faqs?.length) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };
    html = html.replace(
      '</head>',
      `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script></head>`
    );
  }

  const outDir = path.join(buildDir, slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  return slug;
}

const pages = [
  ...Object.values(servicePages).map((p) => ({
    slug: p.slug,
    title: p.seoTitle,
    description: p.metaDescription,
    faqs: p.faqs,
  })),
  ...staticRoutes,
];

const written = pages.map(renderPage);
console.log(`generate-static-pages: wrote ${written.length} pages:\n  ${written.join('\n  ')}`);
