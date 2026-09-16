export type Locale = 'en' | 'et';

export const LOCALES = ['en', 'et'] as const satisfies readonly Locale[];
export const DEFAULT_LOCALE: Locale = 'en';

/** A value that must exist in every locale. Omitting one is a compile error,
 *  which is what keeps the EN/ET hreflang pairs honest. */
export type I18n<T> = Record<Locale, T>;

export interface Img {
  src: string;
  width: number;
  height: number;
  alt: I18n<string>;
}

export interface Metric {
  value: string;
  label: I18n<string>;
}

export interface Faq {
  q: string;
  a: string;
}

export interface SeoFields {
  title: string;
  description: string;
}
