import type { Locale } from '../data/types';
import { projects, type ProjectId } from '../data/projects';
import { services, type ServiceId } from '../data/services';

/** Path containers per locale. The Estonian URLs have to be Estonian words,
 *  so the segment itself is translated, not just the leaf slug. */
export const SEGMENTS = {
  work: { en: 'work', et: 'tood' },
  services: { en: 'services', et: 'teenused' },
  about: { en: 'about', et: 'minust' },
  contact: { en: 'contact', et: 'kontakt' },
  blog: { en: 'blog', et: 'blogi' },
  hire: { en: 'freelance-web-developer-estonia', et: 'vabakutseline-veebiarendaja' },
} as const satisfies Record<string, Record<Locale, string>>;

const build = (locale: Locale, ...segments: string[]): string => {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const path = segments.filter(Boolean).join('/');
  return `${prefix}/${path}${path ? '/' : ''}`.replace(/\/{2,}/g, '/');
};

export const routes = {
  home: (l: Locale) => build(l),
  workIndex: (l: Locale) => build(l, SEGMENTS.work[l]),
  project: (l: Locale, id: ProjectId) => build(l, SEGMENTS.work[l], projects[id].slug[l]),
  servicesIndex: (l: Locale) => build(l, SEGMENTS.services[l]),
  service: (l: Locale, id: ServiceId) => build(l, SEGMENTS.services[l], services[id].slug[l]),
  about: (l: Locale) => build(l, SEGMENTS.about[l]),
  contact: (l: Locale) => build(l, SEGMENTS.contact[l]),
  blogIndex: (l: Locale) => build(l, SEGMENTS.blog[l]),
  post: (l: Locale, slug: string) => build(l, SEGMENTS.blog[l], slug),
  hire: (l: Locale) => build(l, SEGMENTS.hire[l]),
} as const;

export type Alternates = Record<Locale, string>;

const pair = <A extends unknown[]>(fn: (l: Locale, ...a: A) => string, ...a: A): Alternates => ({
  en: fn('en', ...a),
  et: fn('et', ...a),
});

/** The hreflang primitive. Every page declares its counterpart through one of
 *  these, and both sides come from the same slug object, so the pair cannot
 *  drift away from the routes actually emitted. */
export const alternates = {
  home: () => pair(routes.home),
  workIndex: () => pair(routes.workIndex),
  project: (id: ProjectId) => pair(routes.project, id),
  servicesIndex: () => pair(routes.servicesIndex),
  service: (id: ServiceId) => pair(routes.service, id),
  about: () => pair(routes.about),
  contact: () => pair(routes.contact),
  blogIndex: () => pair(routes.blogIndex),
  post: (slugs: Alternates) => ({ en: routes.post('en', slugs.en), et: routes.post('et', slugs.et) }),
  hire: () => pair(routes.hire),
} as const;

export const otherLocale = (l: Locale): Locale => (l === 'en' ? 'et' : 'en');
