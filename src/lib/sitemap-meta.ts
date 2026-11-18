import { allProducts } from '../data/products';
import type { Locale } from '../data/types';
import { publishedProjects } from '../data/projects';
import { allServices } from '../data/services';
import { LOCALES } from '../data/types';
import { alternates, routes } from './routes';
import { PORTRAIT } from './portrait';

export interface SitemapEntry {
  alternates: Record<Locale, string>;
  lastmod?: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  /** Image sitemap entries (paths, made absolute in astro.config.mjs). */
  images?: Array<{ path: string; caption?: string }>;
}

const today = new Date().toISOString().slice(0, 10);

/** Every emitted URL, keyed by pathname, built from the same route registry
 *  that produces the <link rel="alternate"> tags. Deriving both from one place
 *  is what stops the sitemap and the HTML disagreeing about hreflang. */
function buildIndex(): Map<string, SitemapEntry> {
  const index = new Map<string, SitemapEntry>();

  const add = (paths: Record<Locale, string>, entry: Omit<SitemapEntry, 'alternates'>) => {
    for (const locale of LOCALES) {
      index.set(paths[locale], { alternates: paths, ...entry });
    }
  };

  // The portrait goes in the image sitemap on the pages that are about him,
  // with his name in the caption, so image search has an explicit, first-party
  // statement of which photo is Risto Tõldsep.
  const portrait = [{ path: PORTRAIT.path, caption: PORTRAIT.caption.en }];

  add(alternates.home(), { changefreq: 'monthly', priority: 1.0, lastmod: today, images: portrait });
  add(alternates.workIndex(), { changefreq: 'monthly', priority: 0.9, lastmod: today });
  add(alternates.servicesIndex(), { changefreq: 'monthly', priority: 0.9, lastmod: today });
  add(alternates.about(), { changefreq: 'monthly', priority: 0.9, lastmod: today, images: portrait });
  add(alternates.hire(), { changefreq: 'monthly', priority: 0.95, lastmod: today, images: portrait });

  for (const project of publishedProjects()) {
    add(alternates.project(project.id), {
      changefreq: 'yearly',
      priority: 0.8,
      lastmod: project.updatedAt,
      images: [{ path: project.cover.src, caption: `${project.name} by Risto Tõldsep` }],
    });
  }

  for (const product of allProducts) {
    add(alternates.product(product.id), {
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: product.updatedAt,
      images: [{ path: product.cover.src, caption: product.name }],
    });
  }

  for (const service of allServices) {
    add(alternates.service(service.id), {
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: today,
    });
  }

  return index;
}

const INDEX = buildIndex();

/** Look an absolute sitemap URL up by its pathname. */
export function sitemapMeta(url: string): SitemapEntry | undefined {
  try {
    return INDEX.get(new URL(url).pathname);
  } catch {
    return INDEX.get(url);
  }
}

export { routes };
