import type { Locale } from '../data/types';
import { publishedProjects } from '../data/projects';
import { allServices } from '../data/services';
import { LOCALES } from '../data/types';
import { alternates, routes } from './routes';

export interface SitemapEntry {
  alternates: Record<Locale, string>;
  lastmod?: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
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

  add(alternates.home(), { changefreq: 'monthly', priority: 1.0, lastmod: today });
  add(alternates.workIndex(), { changefreq: 'monthly', priority: 0.9, lastmod: today });
  add(alternates.servicesIndex(), { changefreq: 'monthly', priority: 0.9, lastmod: today });
  add(alternates.about(), { changefreq: 'monthly', priority: 0.9, lastmod: today });
  add(alternates.hire(), { changefreq: 'monthly', priority: 0.95, lastmod: today });

  for (const project of publishedProjects()) {
    add(alternates.project(project.id), {
      changefreq: 'yearly',
      priority: 0.8,
      lastmod: project.updatedAt,
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
