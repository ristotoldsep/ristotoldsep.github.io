import type { Faq, I18n, Img, Locale, Metric, SeoFields } from './types';
import type { ServiceId } from './services';

export type ProjectId =
  | 'clarte'
  | 'uusloo'
  | 'snabb'
  | 'pr-permanent-pmu'
  | 'ribaana-horm'
  | 'qinutritionist'
  | 'serene-sleep'
  | 'paavli-kvartal';

export interface ProjectLocaleCopy {
  /** Display name override. Brands rarely translate, so this is usually absent. */
  name?: string;
  /** The h1 on the case study page. Carries keywords, not just the brand. */
  heading: string;
  /** One line under the h1. */
  tagline: string;
  /** Two or three plain factual sentences. This single string feeds the card,
   *  og:description, the CreativeWork schema and llms.txt, so it can never drift. */
  summary: string;
  /** The paragraph shown on the homepage work grid. */
  cardDescription: string;
  imageAlt: string;
  role: string;
  cta: string;
  seo: SeoFields;
  /** Deep case study fields. Filled per project as the pages are written. */
  problem?: string[];
  solution?: string[];
  highlights?: Array<{ title: string; text: string }>;
  results?: string[];
  faq?: Faq[];
}

export interface Project {
  id: ProjectId;
  /** Per-locale URL slug. This is what lets the Estonian URLs be Estonian. */
  slug: I18n<string>;
  name: string;
  order: number;
  featured: boolean;
  status: 'published' | 'draft';
  year: number;
  publishedAt: string;
  updatedAt: string;
  client: { name: string; url?: string; location?: string; industry?: string };
  liveUrl?: string;
  /** Full stack list for the case study page and the CreativeWork keywords. */
  stack: string[];
  /** The three or four chips on the homepage card. */
  cardTags: string[];
  cover: Img;
  metrics?: Metric[];
  services: ServiceId[];
  i18n: I18n<ProjectLocaleCopy>;
}

export const projects = {
  clarte: {
    id: 'clarte',
    slug: { en: 'clarte-woocommerce-skincare-store', et: 'clarte-woocommerce-ilupood' },
    name: 'Clarte',
    order: 1,
    featured: true,
    status: 'published',
    year: 2025,
    publishedAt: '2025-06-01',
    updatedAt: '2026-09-16',
    client: { name: 'Clarte', url: 'https://clarte.ee/', location: 'Estonia', industry: 'Skincare / eCommerce' },
    liveUrl: 'https://clarte.ee/',
    stack: ['WordPress', 'WooCommerce', 'ACF Blocks', 'Tailwind CSS', 'Vite', 'GSAP', 'Swiper', 'Lenis', 'WPML', 'Mailchimp API', 'Google Tag Manager', 'GA4'],
    cardTags: ['WooCommerce', 'ACF Blocks', 'Tailwind'],
    cover: {
      src: '/images/projects/clarte.avif',
      width: 1811,
      height: 1323,
      alt: {
        en: 'Clarte - Premium Skincare WooCommerce Store',
        et: 'Clarte - premium nahahoolduse WooCommerce e-pood',
      },
    },
    services: ['wordpress-ecommerce', 'web-design', 'seo-geo'],
    i18n: {
      en: {
        heading: 'Clarte: custom WooCommerce store for a premium skincare brand',
        tagline: 'Multilingual WooCommerce build with a custom block theme',
        summary:
          'Risto Tõldsep built clarte.ee, a custom WooCommerce store for the Estonian premium skincare brand Clarte. The build uses a fully custom WordPress theme with ACF Gutenberg blocks, Tailwind CSS and a Vite per-block asset pipeline, is multilingual through WPML, and ships with a Mailchimp API newsletter integration and full analytics tracking.',
        cardDescription:
          'Custom WooCommerce store for a premium skincare brand - fully custom WordPress theme with ACF Gutenberg blocks, Tailwind CSS, and a Vite-built per-block asset pipeline. Features GSAP animations, Swiper sliders, and Lenis smooth scrolling. Fully multilingual via WPML (content, strings, and media) for international reach. I also built a Mailchimp API integration for the newsletter signup form, subscribing customers directly to the mailing list. Integrated GTM, GA4, Google Search Console, Microsoft Clarity, and Meta Pixel with custom event tracking for lead generation and customer behaviour analysis.',
        imageAlt: 'Clarte - Premium Skincare WooCommerce Store',
        role: 'Sole developer',
        cta: 'Visit Site ->',
        seo: {
          title: 'Clarte WooCommerce Store - Case Study | Risto Tõldsep',
          description:
            'How I built clarte.ee: a custom WooCommerce store for a premium skincare brand with ACF Gutenberg blocks, Tailwind CSS, a Vite per-block pipeline and WPML multilingual support.',
        },
      },
      et: {
        heading: 'Clarte: kohandatud WooCommerce e-pood premium nahahoolduse brändile',
        tagline: 'Mitmekeelne WooCommerce lahendus kohandatud plokiteemaga',
        summary:
          'Risto Tõldsep ehitas clarte.ee, kohandatud WooCommerce e-poe Eesti premium nahahoolduse brändile Clarte. Lahendus kasutab täielikult kohandatud WordPressi teemat ACF Gutenbergi plokkide, Tailwind CSS-i ja Vite plokipõhise varade konveieriga, on WPML-i kaudu mitmekeelne ning sisaldab Mailchimpi API uudiskirjaintegratsiooni ja terviklikku analüütikat.',
        cardDescription:
          'Kohandatud WooCommerce e-pood premium nahahoolduse brändile - täielikult kohandatud WordPressi teema ACF Gutenbergi plokkide ja Tailwind CSS-iga, kus iga ploki varad ehitatakse Vite kaudu. Sisaldab GSAP animatsioone, Swiperi slaidereid ja Lenise sujuvat kerimist. Täielikult mitmekeelne WPML-i kaudu (sisu, stringid ja meedia), et jõuda rahvusvahelise publikuni. Lõin ka Mailchimpi API integratsiooni uudiskirja registreerimisvormile, mis lisab kliendid otse meililisti. Integreeritud GTM, GA4, Google Search Console, Microsoft Clarity ja Meta Pixel kohandatud sündmusejälgimisega müügivihjete genereerimiseks ja kliendiharjumuste analüüsimiseks.',
        imageAlt: 'Clarte - premium nahahoolduse WooCommerce e-pood',
        role: 'Ainuarendaja',
        cta: 'Ava leht ->',
        seo: {
          title: 'Clarte WooCommerce e-pood - juhtumiuuring | Risto Tõldsep',
          description:
            'Kuidas ehitasin clarte.ee: kohandatud WooCommerce e-poe premium nahahoolduse brändile ACF Gutenbergi plokkide, Tailwind CSS-i, Vite konveieri ja WPML-i mitmekeelsusega.',
        },
      },
    },
  },

  uusloo: {
    id: 'uusloo',
    slug: { en: 'uusloo-laravel-vue-website', et: 'uusloo-laravel-vue-veebileht' },
    name: 'Uusloo',
    order: 2,
    featured: false,
    status: 'published',
    year: 2024,
    publishedAt: '2024-09-01',
    updatedAt: '2026-09-16',
    client: { name: 'Uusloo', url: 'https://uusloo.hausers.ee/', location: 'Estonia', industry: 'Real estate development' },
    liveUrl: 'https://uusloo.hausers.ee/',
    stack: ['Laravel', 'Vue', 'Inertia.js', 'PHP', 'MySQL'],
    cardTags: ['Laravel', 'Vue', 'Inertia.js'],
    cover: {
      src: '/images/uusloo.webp',
      width: 1908,
      height: 1323,
      alt: {
        en: 'Uusloo - Full Stack Laravel and Vue',
        et: 'Uusloo - Full Stack Laravel ja Vue',
      },
    },
    services: ['full-stack', 'web-design'],
    i18n: {
      en: {
        heading: 'Uusloo: full-stack site on Laravel and Vue',
        tagline: 'Laravel backend, Vue frontend, joined by Inertia.js',
        summary:
          'Risto Tõldsep built Uusloo as a full-stack custom website with a Laravel backend and a Vue frontend connected through Inertia.js, giving the site single-page-app responsiveness with server-rendered routing.',
        cardDescription:
          'Full stack custom website built with a Laravel backend and Vue frontend connected via Inertia - seamless SPA experience with server-side power.',
        imageAlt: 'Uusloo - Full Stack Laravel and Vue',
        role: 'Full-stack developer',
        cta: 'Visit Site ->',
        seo: {
          title: 'Uusloo Laravel and Vue Website - Case Study | Risto Tõldsep',
          description:
            'A full-stack custom website built with a Laravel backend and a Vue frontend connected through Inertia.js for SPA responsiveness with server-side routing.',
        },
      },
      et: {
        heading: 'Uusloo: full-stack veebileht Laravelil ja Vue-l',
        tagline: 'Laraveli backend, Vue frontend, ühendatud Inertia.js-iga',
        summary:
          'Risto Tõldsep ehitas Uusloo täislahendusena: Laraveli backend ja Vue frontend, mis on ühendatud Inertia.js kaudu, andes lehele üheleherakenduse kiiruse koos serveripoolse marsruutimisega.',
        cardDescription:
          'Täislahendusena loodud veebileht Laraveli backendiga ja Vue frontendiga, ühendatud Inertia kaudu - sujuv SPA kogemus koos serveripoole võimekusega.',
        imageAlt: 'Uusloo - Full Stack Laravel ja Vue',
        role: 'Full-stack arendaja',
        cta: 'Ava leht ->',
        seo: {
          title: 'Uusloo Laraveli ja Vue veebileht - juhtumiuuring | Risto Tõldsep',
          description:
            'Täislahendusena loodud veebileht Laraveli backendi ja Vue frontendiga, ühendatud Inertia.js kaudu, mis annab SPA kiiruse koos serveripoolse marsruutimisega.',
        },
      },
    },
  },

  snabb: {
    id: 'snabb',
    slug: { en: 'snabb-parking-ev-charging-platform', et: 'snabb-parkimise-ja-laadimise-platvorm' },
    name: 'Snabb',
    order: 3,
    featured: true,
    status: 'published',
    year: 2024,
    publishedAt: '2024-05-01',
    updatedAt: '2026-09-16',
    client: { name: 'Snabb', url: 'https://snabb.xyz/', location: 'Estonia', industry: 'Mobility / parking' },
    liveUrl: 'https://snabb.xyz/',
    stack: ['WordPress', 'Elementor', 'PHP', 'Custom Widgets'],
    cardTags: ['WordPress', 'Elementor', 'PHP'],
    cover: {
      src: '/images/snabb.webp',
      width: 1908,
      height: 1323,
      alt: {
        en: 'Snabb - Parking and EV App',
        et: 'Snabb - parkimise ja EV rakendus',
      },
    },
    metrics: [
      { value: '85,000+', label: { en: 'platform users', et: 'platvormi kasutajat' } },
      { value: '250+', label: { en: 'locations', et: 'asukohta' } },
    ],
    services: ['full-stack', 'wordpress-ecommerce'],
    i18n: {
      en: {
        heading: 'Snabb: unified parking, car wash and EV charging platform',
        tagline: 'Custom PHP Elementor widgets for a platform serving 85,000+ users',
        summary:
          'Risto Tõldsep built the web platform for Snabb, an Estonian service unifying parking, car wash and EV charging across 250+ locations for more than 85,000 users. The work centred on custom Elementor widgets written in PHP so the team could edit complex pages by drag and drop.',
        cardDescription:
          'Unified parking, car wash & EV charging platform - custom Elementor widgets built with PHP for a seamless drag-and-drop editing experience. 85,000+ users, 250+ locations.',
        imageAlt: 'Snabb - Parking and EV App',
        role: 'Developer',
        cta: 'Visit Site ->',
        seo: {
          title: 'Snabb Parking and EV Platform - Case Study | Risto Tõldsep',
          description:
            'Custom PHP Elementor widgets for Snabb, an Estonian parking, car wash and EV charging platform with 85,000+ users across 250+ locations.',
        },
      },
      et: {
        heading: 'Snabb: ühtne parkimise, autopesu ja elektriautode laadimise platvorm',
        tagline: 'Kohandatud PHP Elementori vidinad platvormile, kus on 85 000+ kasutajat',
        summary:
          'Risto Tõldsep ehitas veebiplatvormi Snabbile, Eesti teenusele, mis ühendab parkimise, autopesu ja elektriautode laadimise enam kui 250 asukohas ja 85 000+ kasutaja jaoks. Töö keskmes olid PHP-s kirjutatud kohandatud Elementori vidinad, et tiim saaks keerukaid lehti hallata lohistades.',
        cardDescription:
          'Ühtne parkimise, autopesu ja elektriautode laadimise platvorm - PHP-ga ehitatud kohandatud Elementor vidinad sujuvaks drag-and-drop halduseks. 85 000+ kasutajat, 250+ asukohta.',
        imageAlt: 'Snabb - parkimise ja EV rakendus',
        role: 'Arendaja',
        cta: 'Ava leht ->',
        seo: {
          title: 'Snabb parkimise ja EV platvorm - juhtumiuuring | Risto Tõldsep',
          description:
            'Kohandatud PHP Elementori vidinad Snabbile, Eesti parkimise, autopesu ja elektriautode laadimise platvormile, kus on 85 000+ kasutajat 250+ asukohas.',
        },
      },
    },
  },

  'pr-permanent-pmu': {
    id: 'pr-permanent-pmu',
    slug: { en: 'pr-permanent-pmu-wordpress-ai-chatbot', et: 'pr-permanent-pmu-wordpress-ai-vestlusrobot' },
    name: 'PR Permanent PMU',
    order: 4,
    featured: true,
    status: 'published',
    year: 2026,
    publishedAt: '2026-08-01',
    updatedAt: '2026-09-16',
    client: { name: 'PR Permanent PMU', url: 'https://pilleriin.com/', location: 'Tallinn, Estonia', industry: 'Permanent makeup studio' },
    liveUrl: 'https://pilleriin.com/',
    stack: ['WordPress', 'WooCommerce', 'ACF Blocks', 'Tailwind CSS', 'Vite', 'GSAP', 'Swiper', 'Lenis', 'WPML', 'Montonio', 'Mailchimp API', 'Claude API', 'OpenAI API', 'Gemini API', 'Google Tag Manager', 'GTM4WP', 'GA4', 'Google Ads', 'Google Consent Mode'],
    cardTags: ['WordPress', 'AI Chatbot', 'WooCommerce', 'Google Ads'],
    cover: {
      src: '/images/projects/pilleriin.webp',
      width: 3014,
      height: 1722,
      alt: {
        en: 'PR Permanent PMU - Permanent Makeup Studio',
        et: 'PR Permanent PMU - püsimeigistuudio',
      },
    },
    services: ['wordpress-ecommerce', 'integrations', 'seo-geo', 'web-design'],
    i18n: {
      en: {
        heading: 'PR Permanent PMU: trilingual WordPress shop with a custom AI chatbot',
        tagline: 'Custom theme, WooCommerce trainings shop, self-built AI chatbot plugin and Google Ads',
        summary:
          'Risto Tõldsep built pilleriin.com for PR Permanent PMU, a permanent makeup studio in Tallinn. The site is a fully custom WordPress theme with a trilingual (ET/EN/RU) WPML setup, a WooCommerce shop for trainings and online courses with Montonio payments, and a custom multi-provider AI chatbot plugin he developed himself that runs on Claude, GPT or Gemini. He also runs the studio\'s Google Ads campaigns and built the measurement stack behind them.',
        cardDescription:
          'Fully custom WordPress theme for a permanent makeup studio in Tallinn - ACF Gutenberg blocks, Tailwind CSS and a Vite per-block asset pipeline, with GSAP, Swiper and Lenis. Trilingual (ET/EN/RU) via WPML, a WooCommerce shop for PMU trainings and online courses with Montonio payments, a live Instagram feed, and a Mailchimp-connected newsletter that emails a first-time client coupon automatically. I also developed the custom AI chatbot plugin the site runs on - a multi-provider widget (Claude, GPT or Gemini) that indexes the site into its own knowledge base, answers visitors in their own language around the clock, captures leads through a scripted quick-reply flow, stores every conversation in wp-admin with analytics and ratings, and reports the questions its knowledge base could not answer. The theme feeds it live business data, the real price list and the FAQ, so it never invents prices. On the marketing side I set up and run the studio\'s Google Ads campaigns, with the measurement behind them: a Google Tag Manager container fed by a GTM4WP enhanced-ecommerce dataLayer, GA4 with custom ecommerce event tracking, and Google Ads conversion tracking on training and course purchases, backed by a Conversion Linker for ad-click attribution and gated by Google Consent Mode through the Complianz cookie banner.',
        imageAlt: 'PR Permanent PMU - Permanent Makeup Studio',
        role: 'Sole developer, plugin author and Google Ads manager',
        cta: 'Visit Site ->',
        seo: {
          title: 'PR Permanent PMU WordPress and AI Chatbot - Case Study | Risto Tõldsep',
          description:
            'A trilingual WordPress and WooCommerce build for a Tallinn permanent makeup studio, with a custom multi-provider AI chatbot plugin and full Google Ads measurement.',
        },
      },
      et: {
        heading: 'PR Permanent PMU: kolmkeelne WordPressi pood kohandatud AI vestlusrobotiga',
        tagline: 'Kohandatud teema, WooCommerce koolituspood, ise arendatud AI vestlusroboti plugin ja Google Ads',
        summary:
          'Risto Tõldsep ehitas pilleriin.com Tallinna püsimeigistuudiole PR Permanent PMU. Leht on täielikult kohandatud WordPressi teema kolmkeelse (ET/EN/RU) WPML seadistusega, WooCommerce e-poega koolituste ja e-kursuste müügiks Montonio maksetega ning kohandatud mitme pakkujaga AI vestlusroboti pluginaga, mille ta ise arendas ja mis töötab Claude\'i, GPT või Gemini peal. Lisaks haldab ta stuudio Google Adsi kampaaniaid ja ehitas nende taga oleva mõõtmislahenduse.',
        cardDescription:
          'Täielikult kohandatud WordPressi teema Tallinna püsimeigistuudiole - ACF Gutenbergi plokid, Tailwind CSS ja Vite põhine plokipõhine varade konveier koos GSAP-i, Swiperi ja Lenisega. Kolmkeelne (ET/EN/RU) WPML-i kaudu, WooCommerce e-pood püsimeigikoolituste ja e-kursuste müügiks Montonio maksetega, elav Instagrami feed ning Mailchimpiga ühendatud uudiskirjavorm, mis saadab uuele kliendile automaatselt sooduskupongi. Arendasin ka kohandatud AI vestlusroboti plugina, mida leht kasutab - mitme pakkujaga vidin (Claude, GPT või Gemini), mis indekseerib saidi sisu oma teadmusbaasi, vastab külastajatele nende endi keeles ööpäeva ringi, kogub kontakte skripteeritud kiirvastuste voo kaudu, salvestab kõik vestlused wp-admini koos statistika ja hinnangutega ning raporteerib küsimused, millele teadmusbaas vastust ei andnud. Teema söödab robotile ette äriüksuse andmed, päris hinnakirja ja KKK, nii et see ei mõtle hindu välja. Turunduse poolel seadistasin ja haldan stuudio Google Adsi kampaaniaid koos kogu mõõtmisega: Google Tag Manageri konteiner, mida toidab GTM4WP täiendatud e-kaubanduse dataLayer, GA4 kohandatud e-kaubanduse sündmuste jälgimisega ning Google Adsi konversioonide jälgimine koolituste ja kursuste ostudelt, mida toetab Conversion Linker reklaamiklikkide atributsiooniks ja mis on Google Consent Mode\'i kaudu Complianzi küpsiseteatega lubadega seotud.',
        imageAlt: 'PR Permanent PMU - püsimeigistuudio',
        role: 'Ainuarendaja, plugina autor ja Google Adsi haldaja',
        cta: 'Ava leht ->',
        seo: {
          title: 'PR Permanent PMU WordPress ja AI vestlusrobot - juhtumiuuring | Risto Tõldsep',
          description:
            'Kolmkeelne WordPressi ja WooCommerce lahendus Tallinna püsimeigistuudiole koos kohandatud mitme pakkujaga AI vestlusroboti plugina ja täieliku Google Adsi mõõtmisega.',
        },
      },
    },
  },

  'ribaana-horm': {
    id: 'ribaana-horm',
    slug: { en: 'ribaana-horm-real-estate-wordpress', et: 'ribaana-horm-kinnisvara-wordpress' },
    name: 'Ribaana Horm',
    order: 5,
    featured: false,
    status: 'published',
    year: 2025,
    publishedAt: '2025-03-01',
    updatedAt: '2026-09-16',
    client: { name: 'Ribaana Horm', url: 'https://ribaanahorm.ee/', location: 'Estonia', industry: 'Real estate' },
    liveUrl: 'https://ribaanahorm.ee/',
    stack: ['WordPress', 'ACF Blocks', 'Tailwind CSS', 'PHP', 'Custom Plugin', 'KV.ee XML feed', 'AJAX'],
    cardTags: ['WordPress', 'ACF', 'Tailwind'],
    cover: {
      src: '/images/ribaana.webp',
      width: 1908,
      height: 1323,
      alt: {
        en: 'Ribaana Horm - Real Estate',
        et: 'Ribaana Horm - kinnisvara',
      },
    },
    services: ['wordpress-ecommerce', 'integrations', 'web-design'],
    i18n: {
      en: {
        heading: 'Ribaana Horm: real estate WordPress theme with a KV.ee feed importer',
        tagline: 'Custom ACF theme plus a daily property-listing importer',
        summary:
          'Risto Tõldsep built ribaanahorm.ee, a fully custom WordPress theme for an Estonian real estate broker using ACF blocks and Tailwind CSS. He also wrote a custom plugin that imports the broker\'s listings daily from the KV.ee XML feed into a custom post type and powers an AJAX-filterable listings block.',
        cardDescription:
          'Fully custom PHP WordPress theme for an Estonian real estate broker - built with ACF blocks and Tailwind CSS, conversion-focused and pixel-perfect. I also built a custom KV.ee integration plugin that imports the broker\'s property listings daily from the KV.ee XML feed into a custom post type - mapping prices, areas, location, and galleries into ACF fields, auto-setting featured images, archiving removed listings, and powering an AJAX-filterable listings block on the site.',
        imageAlt: 'Ribaana Horm - Real Estate',
        role: 'Sole developer and plugin author',
        cta: 'Visit Site ->',
        seo: {
          title: 'Ribaana Horm Real Estate WordPress Site - Case Study | Risto Tõldsep',
          description:
            'A custom ACF and Tailwind WordPress theme for an Estonian real estate broker, with a bespoke plugin that syncs listings daily from the KV.ee XML feed.',
        },
      },
      et: {
        heading: 'Ribaana Horm: kinnisvara WordPressi teema KV.ee voo importijaga',
        tagline: 'Kohandatud ACF teema ja igapäevane kuulutuste importija',
        summary:
          'Risto Tõldsep ehitas ribaanahorm.ee, täielikult kohandatud WordPressi teema Eesti kinnisvaramaaklerile ACF plokkide ja Tailwind CSS-iga. Lisaks kirjutas ta kohandatud plugina, mis impordib maakleri kuulutused iga päev KV.ee XML-voost kohandatud postitüüpi ja toidab AJAX-iga filtreeritavat kuulutuste blokki.',
        cardDescription:
          'Täielikult kohandatud PHP WordPressi teema Eesti kinnisvaramaaklerile - ehitatud ACF plokkide ja Tailwind CSS-iga, konversioonile suunatud ja pikslitäpne. Lõin ka kohandatud KV.ee integratsiooni plugina, mis impordib maakleri kinnisvarakuulutused iga päev KV.ee XML-voost kohandatud postitüüpi - kaardistades hinnad, pindalad, asukoha ja galeriid ACF väljadesse, seades automaatselt esipildi, arhiveerides eemaldatud kuulutused ning toites saidil AJAX-iga filtreeritavat kuulutuste blokki.',
        imageAlt: 'Ribaana Horm - kinnisvara',
        role: 'Ainuarendaja ja plugina autor',
        cta: 'Ava leht ->',
        seo: {
          title: 'Ribaana Horm kinnisvara WordPressi leht - juhtumiuuring | Risto Tõldsep',
          description:
            'Kohandatud ACF ja Tailwindi WordPressi teema Eesti kinnisvaramaaklerile koos pluginaga, mis sünkroonib kuulutused iga päev KV.ee XML-voost.',
        },
      },
    },
  },

  qinutritionist: {
    id: 'qinutritionist',
    slug: { en: 'qinutritionist-multilingual-astro-site', et: 'qinutritionist-mitmekeelne-astro-veebileht' },
    name: 'QiNutritionist',
    order: 6,
    featured: false,
    status: 'published',
    year: 2025,
    publishedAt: '2025-01-15',
    updatedAt: '2026-09-16',
    client: { name: 'QiNutritionist', url: 'https://qinutritionist.com/', industry: 'Nutrition / wellness' },
    liveUrl: 'https://qinutritionist.com/',
    stack: ['Astro', 'Decap CMS', 'GSAP', 'GitHub Actions', 'Static Site'],
    cardTags: ['Astro', 'Decap CMS', 'GSAP'],
    cover: {
      src: '/images/qi.webp',
      width: 1908,
      height: 1323,
      alt: {
        en: 'QiNutritionist - Wellness',
        et: 'QiNutritionist - heaolu',
      },
    },
    services: ['full-stack', 'web-design'],
    i18n: {
      en: {
        heading: 'QiNutritionist: trilingual Astro site with a git-based CMS',
        tagline: 'Static Astro build in EN, ET and ES with automated deploys',
        summary:
          'Risto Tõldsep built qinutritionist.com as a multi-language static Astro site in English, Estonian and Spanish, with a git-based CMS so the client can edit content directly and GitHub Actions deploying every change automatically.',
        cardDescription:
          'Multi-language static site (EN/ET/ES) with a git-based CMS for client content editing and automated deploys via GitHub Actions.',
        imageAlt: 'QiNutritionist - Wellness',
        role: 'Sole developer',
        cta: 'Visit Site ->',
        seo: {
          title: 'QiNutritionist Multilingual Astro Site - Case Study | Risto Tõldsep',
          description:
            'A trilingual (EN/ET/ES) static Astro site with a git-based CMS for client editing and automated GitHub Actions deploys.',
        },
      },
      et: {
        heading: 'QiNutritionist: kolmkeelne Astro veebileht git-põhise CMS-iga',
        tagline: 'Staatiline Astro lahendus EN, ET ja ES keeles automaatsete deploydega',
        summary:
          'Risto Tõldsep ehitas qinutritionist.com mitmekeelse staatilise Astro veebilehena inglise, eesti ja hispaania keeles, git-põhise CMS-iga, mis lubab kliendil sisu ise muuta, ja GitHub Actionsiga, mis avaldab iga muudatuse automaatselt.',
        cardDescription:
          'Mitmekeelne staatiline veebileht (EN/ET/ES) git-põhise CMS-iga kliendipoolseks sisuhalduseks ja automatiseeritud deploydega GitHub Actionsi kaudu.',
        imageAlt: 'QiNutritionist - heaolu',
        role: 'Ainuarendaja',
        cta: 'Ava leht ->',
        seo: {
          title: 'QiNutritionist mitmekeelne Astro leht - juhtumiuuring | Risto Tõldsep',
          description:
            'Kolmkeelne (EN/ET/ES) staatiline Astro veebileht git-põhise CMS-iga kliendipoolseks sisuhalduseks ja automaatsete GitHub Actionsi deploydega.',
        },
      },
    },
  },

  'serene-sleep': {
    id: 'serene-sleep',
    slug: { en: 'serene-sleep-woocommerce-silk-bedding', et: 'serene-sleep-woocommerce-siidvoodipesu' },
    name: 'Serene Sleep',
    order: 7,
    featured: false,
    status: 'published',
    year: 2024,
    publishedAt: '2024-03-01',
    updatedAt: '2026-09-16',
    client: { name: 'Serene Sleep', url: 'https://serenesleep.ee/', location: 'Estonia', industry: 'Luxury bedding / eCommerce' },
    liveUrl: 'https://serenesleep.ee/',
    stack: ['WordPress', 'WooCommerce', 'Custom Theme', 'PHP'],
    cardTags: ['WooCommerce', 'Custom Theme', 'eCommerce'],
    cover: {
      src: '/images/serenesleep.webp',
      width: 1908,
      height: 1323,
      alt: {
        en: 'Serene Sleep - Luxury Bedding',
        et: 'Serene Sleep - luksuslik voodipesu',
      },
    },
    services: ['wordpress-ecommerce', 'web-design'],
    i18n: {
      en: {
        heading: 'Serene Sleep: custom WooCommerce store for luxury silk bedding',
        tagline: 'Premium brand identity and conversion-focused product UX',
        summary:
          'Risto Tõldsep built serenesleep.ee, a custom WooCommerce store for a luxury silk bedding brand, with a premium brand identity, refined product UX and an OEKO-TEX certified product showcase built for conversion.',
        cardDescription:
          'Custom WooCommerce e-store for luxury silk bedding - premium brand identity, refined UX, and OEKO-TEX certified product showcase built for conversion.',
        imageAlt: 'Serene Sleep - Luxury Bedding',
        role: 'Sole developer',
        cta: 'Visit Site ->',
        seo: {
          title: 'Serene Sleep WooCommerce Store - Case Study | Risto Tõldsep',
          description:
            'A custom WooCommerce store for a luxury silk bedding brand, with premium brand identity and a conversion-focused product showcase.',
        },
      },
      et: {
        heading: 'Serene Sleep: kohandatud WooCommerce e-pood luksuslikule siidvoodipesule',
        tagline: 'Premium brändiidentiteet ja müügile suunatud tootekogemus',
        summary:
          'Risto Tõldsep ehitas serenesleep.ee, kohandatud WooCommerce e-poe luksusliku siidvoodipesu brändile, premium brändiidentiteedi, läbimõeldud tootekogemuse ja OEKO-TEX sertifikaadiga toodete esitlusega.',
        cardDescription:
          'Kohandatud WooCommerce e-pood luksuslikule siidvoodipesule - premium brändiidentiteet, läbimõeldud kasutuskogemus ja OEKO-TEX sertifikaadiga toodete esitlus, loodud müüki toetama.',
        imageAlt: 'Serene Sleep - luksuslik voodipesu',
        role: 'Ainuarendaja',
        cta: 'Ava leht ->',
        seo: {
          title: 'Serene Sleep WooCommerce e-pood - juhtumiuuring | Risto Tõldsep',
          description:
            'Kohandatud WooCommerce e-pood luksusliku siidvoodipesu brändile premium brändiidentiteedi ja müügile suunatud tooteesitlusega.',
        },
      },
    },
  },

  'paavli-kvartal': {
    id: 'paavli-kvartal',
    slug: { en: 'paavli-kvartal-wordpress-interactive-map', et: 'paavli-kvartal-wordpress-interaktiivne-kaart' },
    name: 'Paavli Kvartal',
    order: 8,
    featured: true,
    status: 'published',
    year: 2026,
    publishedAt: '2026-04-01',
    updatedAt: '2026-09-16',
    client: { name: 'Paavli Kvartal', url: 'https://paavli.ee/', location: 'Tallinn, Estonia', industry: 'Creative business quarter' },
    liveUrl: 'https://paavli.ee/',
    stack: ['WordPress', 'ACF Blocks', 'Tailwind CSS', 'Vite', 'GSAP', 'Swiper', 'Lenis', 'Custom Post Types', 'Custom Plugin'],
    cardTags: ['WordPress', 'ACF Blocks', 'GSAP'],
    cover: {
      src: '/images/projects/paavli.webp',
      width: 2029,
      height: 1323,
      alt: {
        en: 'Paavli Kvartal - Creative Business Quarter in Tallinn',
        et: 'Paavli Kvartal - loomemajanduse kvartal Tallinnas',
      },
    },
    services: ['wordpress-ecommerce', 'web-design', 'integrations'],
    i18n: {
      en: {
        heading: 'Paavli Kvartal: interactive WordPress site for a Tallinn creative quarter',
        tagline: 'Section-snapping scroll, filterable map and a custom event importer',
        summary:
          'Risto Tõldsep built paavli.ee for Paavli Kvartal, a creative business quarter in North Tallinn. The custom WordPress theme uses ACF Gutenberg blocks, Tailwind CSS and a Vite per-block asset pipeline, with custom post types for companies, rental spaces and events, a filterable interactive map, and a full-page section-snapping scroll driven by Lenis and GSAP. He also wrote the plugin that syncs the cultural centre\'s event programme twice daily.',
        cardDescription:
          'Custom WordPress theme for a creative business quarter in North Tallinn - built with ACF Gutenberg blocks, Tailwind CSS, and a Vite-powered per-block asset pipeline. Features custom post types for companies, rental spaces, and events, a filterable interactive map, GSAP animations, Swiper sliders, and a full-page section-snapping scroll experience driven by Lenis. I also built a custom event-importer plugin that scrapes the cultural centre\'s programme by reconstructing the source site\'s Next.js data stream and smart-syncs events into a custom post type twice daily.',
        imageAlt: 'Paavli Kvartal - Creative Business Quarter in Tallinn',
        role: 'Sole developer and plugin author',
        cta: 'Visit Site ->',
        seo: {
          title: 'Paavli Kvartal Interactive WordPress Site - Case Study | Risto Tõldsep',
          description:
            'A custom WordPress theme for a Tallinn creative quarter with a filterable interactive map, section-snapping scroll and a bespoke event-importer plugin.',
        },
      },
      et: {
        heading: 'Paavli Kvartal: interaktiivne WordPressi leht Tallinna loomekvartalile',
        tagline: 'Sektsioonide kaupa kerimine, filtreeritav kaart ja kohandatud sündmuste importija',
        summary:
          'Risto Tõldsep ehitas paavli.ee Põhja-Tallinna loomemajanduse kvartalile Paavli Kvartal. Kohandatud WordPressi teema kasutab ACF Gutenbergi plokke, Tailwind CSS-i ja Vite plokipõhist varade konveierit, sisaldab kohandatud postitüüpe ettevõtete, rendipindade ja sündmuste jaoks, filtreeritavat interaktiivset kaarti ning Lenisel ja GSAP-il põhinevat täisekraani sektsioonide kaupa kerimist. Lisaks kirjutas ta plugina, mis sünkroonib kultuurikeskuse sündmuste programmi kaks korda päevas.',
        cardDescription:
          'Kohandatud WordPressi teema Põhja-Tallinna loomemajanduse kvartalile - ehitatud ACF Gutenbergi plokkide ja Tailwind CSS-iga, kus iga ploki varad ehitatakse Vite kaudu. Sisaldab kohandatud postitüüpe ettevõtete, rendipindade ja sündmuste jaoks, filtreeritavat interaktiivset kaarti, GSAP animatsioone, Swiperi slaidereid ning Lenisel põhinevat täisekraani sektsioonide kaupa kerimise lahendust. Lõin ka kohandatud sündmuste impordi plugina, mis kogub kultuurikeskuse programmi, taastades lähtesaidi Next.js andmevoo, ja sünkroonib sündmused nutikalt kaks korda päevas kohandatud postitüüpi.',
        imageAlt: 'Paavli Kvartal - loomemajanduse kvartal Tallinnas',
        role: 'Ainuarendaja ja plugina autor',
        cta: 'Ava leht ->',
        seo: {
          title: 'Paavli Kvartal interaktiivne WordPressi leht - juhtumiuuring | Risto Tõldsep',
          description:
            'Kohandatud WordPressi teema Tallinna loomekvartalile koos filtreeritava interaktiivse kaardi, sektsioonide kaupa kerimise ja kohandatud sündmuste importijaga.',
        },
      },
    },
  },
} satisfies Record<ProjectId, Project>;

export const allProjects: Project[] = Object.values(projects).sort((a, b) => a.order - b.order);

export const publishedProjects = (): Project[] => allProjects.filter((p) => p.status === 'published');

export const projectSlug = (id: ProjectId, locale: Locale): string => projects[id].slug[locale];
