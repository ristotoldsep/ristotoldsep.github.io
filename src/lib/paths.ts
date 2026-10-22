import type { Locale } from '../data/types';
import { publishedProjects, type Project } from '../data/projects';
import { allServices, type Service } from '../data/services';
import { allProducts, type Product } from '../data/products';

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

export interface ProductPathProps {
  product: Product;
  locale: Locale;
}

export const productPaths =
  (locale: Locale) =>
  (): Array<{ params: { slug: string }; props: ProductPathProps }> =>
    allProducts.map((product) => ({
      params: { slug: product.slug[locale] },
      props: { product, locale },
    }));
