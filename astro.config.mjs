import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { sitemapMeta } from './src/lib/sitemap-meta';

const SITE = 'https://ristotoldsep.eu';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  // No Tailwind: preflight was off and not one utility class was used
  // anywhere, so it emitted zero bytes into the stylesheet and cost only
  // build time. All styling is the hand-written SCSS in src/styles.
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      // The built-in i18n option pairs locales by stripping the locale prefix
      // and matching the rest of the path. Our Estonian slugs are Estonian
      // words, so nothing would match and the alternates would come out wrong
      // or missing, silently. Serialising from the route registry instead keeps
      // the sitemap and the hreflang tags derived from one source.
      serialize(item) {
        const meta = sitemapMeta(item.url);
        if (!meta) return item;

        item.changefreq = meta.changefreq;
        item.priority = meta.priority;
        if (meta.lastmod) item.lastmod = meta.lastmod;
        item.links = [
          { lang: 'en', url: new URL(meta.alternates.en, SITE).href },
          { lang: 'et', url: new URL(meta.alternates.et, SITE).href },
          { lang: 'x-default', url: new URL(meta.alternates.en, SITE).href },
        ];
        return item;
      },
    }),
  ],
});
