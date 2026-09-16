import type { Locale } from '../data/types';
import { publishedProjects, type Project } from '../data/projects';
import { allServices, type Service } from '../data/services';

export interface ProjectPathProps {
  project: Project;
  locale: Locale;
}

export interface ServicePathProps {
  service: Service;
  locale: Locale;
}

/** Returning the concrete prop shape rather than Astro's GetStaticPaths alias
 *  keeps Astro.props typed in the route files. */
export const projectPaths =
  (locale: Locale) =>
  (): Array<{ params: { slug: string }; props: ProjectPathProps }> =>
    publishedProjects().map((project) => ({
      params: { slug: project.slug[locale] },
      props: { project, locale },
    }));

export const servicePaths =
  (locale: Locale) =>
  (): Array<{ params: { slug: string }; props: ServicePathProps }> =>
    allServices.map((service) => ({
      params: { slug: service.slug[locale] },
      props: { service, locale },
    }));
