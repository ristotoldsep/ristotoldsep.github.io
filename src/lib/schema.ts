import type { Faq, Locale } from '../data/types';
import type { Project } from '../data/projects';
import type { Service } from '../data/services';
import { socialLinks } from '../i18n/site';

export type SchemaNode = Record<string, unknown>;

export const ids = {
  person: (origin: string) => `${origin}/#person`,
  website: (origin: string) => `${origin}/#website`,
  business: (origin: string) => `${origin}/#business`,
  page: (url: string, suffix = 'webpage') => `${url}#${suffix}`,
  breadcrumb: (url: string) => `${url}#breadcrumb`,
  service: (url: string) => `${url}#service`,
  work: (url: string) => `${url}#creativework`,
  post: (url: string) => `${url}#article`,
};

export const PERSON_DESCRIPTION =
  'Risto Tõldsep is a freelance web developer and designer based in Tallinn, Estonia, who designs and builds custom websites, WordPress and WooCommerce stores, interactive frontends, and AI-powered web tools.';

export function personNode(origin: string, image: string): SchemaNode {
  return {
    '@type': 'Person',
    '@id': ids.person(origin),
    name: 'Risto Tõldsep',
    alternateName: 'Risto Toldsep',
    url: origin,
    image,
    jobTitle: 'Web Developer & Designer',
    description: PERSON_DESCRIPTION,
    knowsLanguage: ['et', 'en'],
    email: 'mailto:ristotoldsep@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tallinn',
      addressCountry: 'EE',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Tallinn University of Technology (TalTech)',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Reaktiiv',
      url: 'https://reaktiiv.com',
    },
    knowsAbout: [
      'Web Development',
      'Web Design',
      'Full Stack Web Development',
      'Custom Websites',
      'WordPress',
      'WooCommerce',
      'React',
      'Vue',
      'Laravel',
      'PHP',
      'Astro',
      'JavaScript',
      'TypeScript',
      'Technical SEO',
      'AEO',
      'GEO',
      'AI Integrations',
      'API Integrations',
      'eCommerce',
      'Automation',
      'Web Applications',
      'Web Design',
      'Team Leadership',
      'Team Management',
      'Strategic Planning',
    ],
    sameAs: socialLinks.map((link) => link.href),
  };
}

export function websiteNode(origin: string, description: string): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': ids.website(origin),
    url: origin,
    name: 'Risto Tõldsep — Web Developer & Designer',
    description,
    inLanguage: ['en', 'et'],
    publisher: { '@id': ids.person(origin) },
  };
}

export function pageNode(a: {
  origin: string;
  url: string;
  type: string;
  extraTypes?: string[];
  idSuffix?: string;
  name: string;
  description: string;
  lang: Locale;
  hasBreadcrumb?: boolean;
  faq?: Faq[];
  datePublished?: string;
  dateModified?: string;
}): SchemaNode {
  return {
    '@type': a.extraTypes?.length ? [a.type, ...a.extraTypes] : a.type,
    '@id': ids.page(a.url, a.idSuffix),
    url: a.url,
    name: a.name,
    description: a.description,
    inLanguage: a.lang,
    isPartOf: { '@id': ids.website(a.origin) },
    about: { '@id': ids.person(a.origin) },
    ...(a.type === 'ProfilePage' ? { mainEntity: { '@id': ids.person(a.origin) } } : {}),
    ...(a.hasBreadcrumb ? { breadcrumb: { '@id': ids.breadcrumb(a.url) } } : {}),
    ...(a.faq?.length ? { mainEntity: faqEntities(a.faq) } : {}),
    ...(a.datePublished ? { datePublished: a.datePublished } : {}),
    ...(a.dateModified ? { dateModified: a.dateModified } : {}),
  };
}

export function breadcrumbNode(url: string, items: Array<{ name: string; url: string }>): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': ids.breadcrumb(url),
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** FAQ questions are merged into the page node's mainEntity rather than
 *  emitted as a second page entity, which Google treats as a duplicate. */
export function faqEntities(faq: Faq[]): SchemaNode[] {
  return faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  }));
}

export function serviceNode(service: Service, lang: Locale, origin: string, url: string): SchemaNode {
  const t = service.i18n[lang];
  return {
    '@type': 'Service',
    '@id': ids.service(url),
    name: t.name,
    serviceType: t.name,
    description: t.summary,
    url,
    inLanguage: lang,
    provider: { '@id': ids.person(origin) },
    areaServed: [
      { '@type': 'Country', name: 'Estonia' },
      { '@type': 'City', name: 'Tallinn' },
    ],
    availableLanguage: ['en', 'et'],
    mainEntityOfPage: { '@id': ids.page(url) },
  };
}

export function creativeWorkNode(project: Project, lang: Locale, origin: string, url: string): SchemaNode {
  const t = project.i18n[lang];
  return {
    '@type': 'CreativeWork',
    '@id': ids.work(url),
    name: t.name ?? project.name,
    headline: t.heading,
    description: t.summary,
    url,
    inLanguage: lang,
    creator: { '@id': ids.person(origin) },
    author: { '@id': ids.person(origin) },
    dateCreated: String(project.year),
    datePublished: project.publishedAt,
    image: new URL(project.cover.src, origin).href,
    keywords: project.stack.join(', '),
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
    about: {
      '@type': 'Organization',
      name: project.client.name,
      ...(project.client.url ? { url: project.client.url } : {}),
    },
    mainEntityOfPage: { '@id': ids.page(url) },
  };
}

/** A local-business entity alongside Person, which is what "veebiarendaja
 *  Tallinn" style queries match against. */
export function businessNode(origin: string, image: string): SchemaNode {
  return {
    '@type': 'ProfessionalService',
    '@id': ids.business(origin),
    name: 'Risto Tõldsep',
    description: PERSON_DESCRIPTION,
    url: origin,
    image,
    email: 'mailto:ristotoldsep@gmail.com',
    founder: { '@id': ids.person(origin) },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tallinn',
      addressCountry: 'EE',
    },
    areaServed: [
      { '@type': 'Country', name: 'Estonia' },
      { '@type': 'City', name: 'Tallinn' },
    ],
    availableLanguage: ['en', 'et'],
    priceRange: '$$',
    sameAs: socialLinks.map((link) => link.href),
  };
}

export const buildGraph = (nodes: Array<SchemaNode | null | undefined>) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.filter(Boolean),
});
