import type { Faq, I18n, Locale, SeoFields } from './types';
import type { ProjectId } from './projects';

export type ServiceId =
  | 'web-design'
  | 'full-stack'
  | 'wordpress-ecommerce'
  | 'seo-geo'
  | 'maintenance'
  | 'integrations';

export interface ServiceLocaleCopy {
  /** Plain text. Used in <title>, JSON-LD, breadcrumbs and llms.txt. */
  name: string;
  /** Presentational title for the homepage card, carries <br> and entities. */
  cardTitle: string;
  /** The h1 on the service page. Service plus location. */
  heading: string;
  /** The paragraph shown on the homepage card and reused as the meta description source. */
  summary: string;
  cta: string;
  seo: SeoFields;
  /** Deep service page fields, filled as the pages are written. */
  intro?: string[];
  deliverables?: string[];
  process?: Array<{ title: string; text: string }>;
  faq?: Faq[];
}

export interface Service {
  id: ServiceId;
  slug: I18n<string>;
  order: number;
  /** Card glow colour, previously the serviceAccents array. */
  accent: string;
  cardTags: string[];
  relatedProjects: ProjectId[];
  i18n: I18n<ServiceLocaleCopy>;
}

export const services = {
  'web-design': {
    id: 'web-design',
    slug: { en: 'web-design-ui-ux', et: 'veebidisain' },
    order: 1,
    accent: 'rgba(196,154,60,0.18)',
    cardTags: ['Custom Design', 'Figma'],
    relatedProjects: ['clarte', 'paavli-kvartal', 'serene-sleep'],
    i18n: {
      en: {
        name: 'Web Design & UI/UX',
        cardTitle: 'Web Design<br>&amp; UI/UX',
        heading: 'Web design and UI/UX in Tallinn, Estonia',
        summary:
          'Beautiful, conversion-focused interfaces designed from scratch. Clean layouts, strong typography, and experiences users actually enjoy.',
        cta: 'Learn more ->',
        seo: {
          title: 'Web Design & UI/UX in Estonia | Risto Tõldsep',
          description:
            'Custom web design and UI/UX from a Tallinn-based web developer and designer. Conversion-focused interfaces designed from scratch in Figma, then built properly.',
        },
      },
      et: {
        name: 'Veebidisain ja UI/UX',
        cardTitle: 'Veebidisain<br>&amp; UI/UX',
        heading: 'Veebidisain ja kodulehe kujundus Tallinnas',
        summary:
          'Kaunid ja konversioonile suunatud kasutajaliidesed, disainitud nullist. Puhtad paigutused, tugev tüpograafia ja kogemused, mida kasutajad päriselt naudivad.',
        cta: 'Loe lähemalt ->',
        seo: {
          title: 'Veebidisain ja kodulehe kujundus | Risto Tõldsep',
          description:
            'Kohandatud veebidisain ja UI/UX Tallinnas tegutsevalt veebiarendajalt ja disainerilt. Konversioonile suunatud kodulehed, disainitud nullist Figmas ja korralikult ära ehitatud.',
        },
      },
    },
  },

  'full-stack': {
    id: 'full-stack',
    slug: { en: 'full-stack-development', et: 'full-stack-arendus' },
    order: 2,
    accent: 'rgba(80,130,255,0.12)',
    cardTags: ['React', 'PHP / Node.js'],
    relatedProjects: ['uusloo', 'snabb', 'qinutritionist'],
    i18n: {
      en: {
        name: 'Full Stack Development',
        cardTitle: 'Full Stack<br>Development',
        heading: 'Full-stack web development in Estonia',
        summary:
          'End-to-end web application development - from database design and APIs to polished front-end interfaces. Built to scale, built to last.',
        cta: 'Learn more ->',
        seo: {
          title: 'Full-Stack Web Development in Estonia | Risto Tõldsep',
          description:
            'End-to-end web application development from a Tallinn-based developer: database design, REST APIs, Laravel and Node.js backends, React and Vue frontends.',
        },
      },
      et: {
        name: 'Full Stack arendus',
        cardTitle: 'Full Stack<br>arendus',
        heading: 'Full-stack veebiarendus ja veebirakendused Eestis',
        summary:
          'Veebirakenduste täistsükli arendus - alates andmebaasidest ja API-dest kuni viimistletud frontendideni. Ehitatud kasvama ja kestma.',
        cta: 'Loe lähemalt ->',
        seo: {
          title: 'Full-stack veebiarendus ja veebirakendused | Risto Tõldsep',
          description:
            'Veebirakenduste täistsükli arendus Tallinnas: andmebaasid, REST API-d, Laraveli ja Node.js backendid ning Reacti ja Vue frontendid.',
        },
      },
    },
  },

  'wordpress-ecommerce': {
    id: 'wordpress-ecommerce',
    slug: { en: 'wordpress-development', et: 'wordpress-arendus' },
    order: 3,
    accent: 'rgba(60,200,120,0.10)',
    cardTags: ['WordPress', 'WooCommerce'],
    relatedProjects: ['clarte', 'pr-permanent-pmu', 'serene-sleep'],
    i18n: {
      en: {
        name: 'WordPress & eCommerce',
        cardTitle: 'WordPress<br>&amp; eCommerce',
        heading: 'Custom WordPress and WooCommerce development in Estonia',
        summary:
          'Custom themes, plugins, and complete online stores. Multi-language, multi-currency, high-performance shops that convert browsers into buyers.',
        cta: 'Learn more ->',
        seo: {
          title: 'Custom WordPress & WooCommerce Development, Estonia | Risto Tõldsep',
          description:
            'Custom WordPress themes, plugins and WooCommerce stores built in Tallinn, Estonia. Multi-language, multi-currency, fast, and no page builder bloat.',
        },
      },
      et: {
        name: 'WordPress ja e-kaubandus',
        cardTitle: 'WordPress<br>&amp; e-kaubandus',
        heading: 'Kohandatud WordPressi ja WooCommerce arendus Eestis',
        summary:
          'Kohandatud teemad, pluginad ja terviklikud veebipoed. Mitmekeelsed, mitme valuutaga ja suure jõudlusega lahendused, mis muudavad külastajad ostjateks.',
        cta: 'Loe lähemalt ->',
        seo: {
          title: 'WordPressi ja WooCommerce arendus, e-poe tegemine | Risto Tõldsep',
          description:
            'Kohandatud WordPressi teemad, pluginad ja WooCommerce e-poed Tallinnast. Mitmekeelsed, mitme valuutaga, kiired ja ilma lehetegija lisakoormata.',
        },
      },
    },
  },

  'seo-geo': {
    id: 'seo-geo',
    slug: { en: 'seo-aeo-geo', et: 'seo-ja-geo-optimeerimine' },
    order: 4,
    accent: 'rgba(255,160,60,0.12)',
    cardTags: ['Technical SEO', 'AEO / GEO'],
    relatedProjects: ['pr-permanent-pmu', 'clarte'],
    i18n: {
      en: {
        name: 'SEO, AEO, GEO & Digital Marketing',
        cardTitle: 'SEO, AEO, GEO &amp;<br>Digital Marketing',
        heading: 'Technical SEO, AEO and GEO for Estonian businesses',
        summary:
          'Rank higher and get found — in search engines and AI tools. Technical SEO audits, Core Web Vitals improvements, full analytics setup (GTM, GA4, Google Search Console, Microsoft Clarity, Meta Pixel with custom event tracking), and Google & Meta ad campaigns. AEO (Answer Engine Optimization) puts your content in AI answer boxes and voice search results; GEO (Generative Engine Optimization) gets tools like ChatGPT and Perplexity to surface and cite your business. All data-driven.',
        cta: 'Learn more ->',
        seo: {
          title: 'Technical SEO, AEO & GEO Services in Estonia | Risto Tõldsep',
          description:
            'Technical SEO audits, Core Web Vitals, GTM and GA4 analytics setup, Google Ads, plus AEO and GEO so ChatGPT and Perplexity surface and cite your business.',
        },
      },
      et: {
        name: 'SEO, AEO, GEO ja digiturundus',
        cardTitle: 'SEO, AEO, GEO &amp;<br>Digital Marketing',
        heading: 'Tehniline SEO, AEO ja GEO Eesti ettevõtetele',
        summary:
          'Tõuse otsingutulemustes kõrgemale ja ole leitav — ka tehisintellektis. Tehnilised SEO auditid, Core Web Vitals parandused, terviklik analüütika seadistus (GTM, GA4, Google Search Console, Microsoft Clarity, Meta Pixel kohandatud sündmusejälgimisega) ning Google ja Meta reklaamikampaaniad. AEO (Answer Engine Optimization) toob sinu sisu tehisintellekti vastuseboksidesse ja häälotsingutesse; GEO (Generative Engine Optimization) tagab, et tööriistad nagu ChatGPT ja Perplexity sinu ettevõtet esile tõstavad ja tsiteerivad. Kõik andmepõhiselt.',
        cta: 'Loe lähemalt ->',
        seo: {
          title: 'Tehniline SEO, AEO ja GEO teenused Eestis | Risto Tõldsep',
          description:
            'Tehnilised SEO auditid, Core Web Vitals, GTM ja GA4 seadistus, Google Ads ning AEO ja GEO, et ChatGPT ja Perplexity sinu ettevõtet esile tõstaksid ja tsiteeriksid.',
        },
      },
    },
  },

  maintenance: {
    id: 'maintenance',
    slug: { en: 'website-maintenance', et: 'veebilehe-hooldus' },
    order: 5,
    accent: 'rgba(0,200,200,0.10)',
    cardTags: ['Updates', 'Security'],
    relatedProjects: ['clarte', 'ribaana-horm'],
    i18n: {
      en: {
        name: 'Maintenance & Support',
        cardTitle: 'Maintenance<br>&amp; Support',
        heading: 'Website maintenance and support in Estonia',
        summary:
          'Ongoing care for your website - updates, backups, security hardening, speed optimization, and a developer to call when something breaks.',
        cta: 'Learn more ->',
        seo: {
          title: 'Website Maintenance & Support, Estonia | Risto Tõldsep',
          description:
            'WordPress and WooCommerce maintenance from Tallinn: updates, backups, security hardening, speed optimisation, and a developer to call when something breaks.',
        },
      },
      et: {
        name: 'Hooldus ja tugi',
        cardTitle: 'Hooldus<br>&amp; tugi',
        heading: 'Kodulehe hooldus ja tugi Eestis',
        summary:
          'Sinu veebilehe pidev hooldus - uuendused, varukoopiad, turvalisuse tugevdamine, kiiruse optimeerimine ja arendaja, kellele helistada, kui midagi katki läheb.',
        cta: 'Loe lähemalt ->',
        seo: {
          title: 'Kodulehe hooldus ja tugi Eestis | Risto Tõldsep',
          description:
            'WordPressi ja WooCommerce kodulehtede hooldus Tallinnast: uuendused, varukoopiad, turvalisus, kiiruse optimeerimine ja arendaja, kellele helistada.',
        },
      },
    },
  },

  integrations: {
    id: 'integrations',
    slug: { en: 'api-integrations-automation', et: 'api-integratsioonid' },
    order: 6,
    accent: 'rgba(180,80,255,0.12)',
    cardTags: ['AI Tools', 'Workflows'],
    relatedProjects: ['pr-permanent-pmu', 'ribaana-horm', 'paavli-kvartal'],
    i18n: {
      en: {
        name: 'API Integrations & Automations',
        cardTitle: 'API Integrations<br>&amp; Automations',
        heading: 'API integrations, AI tools and automation for websites',
        summary:
          "AI solutions, pipelines, smart workflows with digital tools and integrations. Eliminate the repetitive work that eats your team's time.",
        cta: 'Learn more ->',
        seo: {
          title: 'API Integrations, AI Tools & Automation | Risto Tõldsep',
          description:
            'Custom API integrations, AI chatbots and workflow automation for websites and web apps, built by a developer who has shipped them in production.',
        },
      },
      et: {
        name: 'API integratsioonid ja automatsioonid',
        cardTitle: 'API integratsioonid<br>&amp; automatsioonid',
        heading: 'API integratsioonid, AI lahendused ja automatiseerimine',
        summary:
          'AI lahendused, töövood ja nutikad integratsioonid digitaalsete tööriistade vahel. Eemaldan korduva töö, mis sinu tiimi aega sööb.',
        cta: 'Loe lähemalt ->',
        seo: {
          title: 'API integratsioonid, AI lahendused ja automatiseerimine | Risto Tõldsep',
          description:
            'Kohandatud API integratsioonid, AI vestlusrobotid ja töövoogude automatiseerimine kodulehtedele ja veebirakendustele, ehitatud arendaja poolt, kes on need päriselt tootmisse viinud.',
        },
      },
    },
  },
} satisfies Record<ServiceId, Service>;

export const allServices: Service[] = Object.values(services).sort((a, b) => a.order - b.order);

export const serviceSlug = (id: ServiceId, locale: Locale): string => services[id].slug[locale];
