import type { Faq, I18n, Img, SeoFields } from './types';

/**
 * My own digital products, as opposed to client work (projects.ts). Each has
 * its own site, and a product page at rixio.ee (Rixio Digital, my studio).
 * Copy is factual: what the product does and how it's built. No invented
 * clients, user counts or results.
 */
export type ProductId = 'planly-3d' | 'vestly-ai';

export interface ProductLocaleCopy {
  /** The h1 on the product page. */
  heading: string;
  /** One line under the name, on the card and the page. */
  tagline: string;
  /** Two or three plain sentences: the card, og:description, schema and llms.txt. */
  summary: string;
  role: string;
  /** What it does, as short paragraphs. */
  about: string[];
  highlights: Array<{ title: string; text: string }>;
  /** Who it's for, one line each. */
  audiences: string[];
  faq: Faq[];
  imageAlt: string;
  seo: SeoFields;
}

export interface Product {
  id: ProductId;
  slug: I18n<string>;
  name: string;
  order: number;
  year: number;
  publishedAt: string;
  updatedAt: string;
  /** The product's own site. */
  url: string;
  /** Its product page on rixio.ee, per locale. */
  rixioUrl: I18n<string>;
  mark: string;
  /** The glow colour on its card and page. */
  accent: string;
  stack: string[];
  cardTags: string[];
  cover: Img;
  gallery?: Img[];
  /** A live demo that can be shown in a frame on the product page. */
  demo?: { src: string; poster: string };
  i18n: I18n<ProductLocaleCopy>;
}

const img = (src: string, width: number, height: number, en: string, et: string): Img => ({
  src,
  width,
  height,
  alt: { en, et },
});

export const products = {
  'planly-3d': {
    id: 'planly-3d',
    slug: { en: 'planly-3d', et: 'planly-3d' },
    name: 'Planly 3D',
    order: 1,
    year: 2026,
    publishedAt: '2026-10-22',
    updatedAt: '2026-10-22',
    url: 'https://planly.ee',
    rixioUrl: { en: 'https://rixio.ee/en/products/planly-3d', et: 'https://rixio.ee/tooted/planly-3d' },
    mark: '/images/products/planly-mark.svg',
    accent: 'rgba(200,244,60,0.22)',
    stack: ['Three.js', 'TypeScript', 'Vite', 'Blender (Cycles light baking)', 'Python', 'Gaussian splats', 'PHP', 'Caddy'],
    cardTags: ['3D / WebGL', 'Three.js', 'Real estate', 'Own product'],
    cover: img(
      '/images/products/planly-3d.webp',
      1600,
      1200,
      'Planly 3D tour of a furnished new-build flat on a computer and a phone',
      'Planly 3D tuur sisustatud uusarenduse korterist arvutis ja telefonis',
    ),
    gallery: [
      img('/images/products/planly-feat-planner.webp', 1600, 900, 'The furniture planner in top view', 'Mööbliplaneerija pealtvaates'),
      img('/images/products/planly-emotion-fire.webp', 1600, 900, 'The living room in the evening with a fireplace channel on the TV', 'Elutuba õhtul, teleris põleb kaminaprogramm'),
      img('/images/products/planly-demo-buroo.webp', 1600, 900, 'An open-plan office demo with a reception and logo wall', 'Avatud kontori demo vastuvõtu ja logoseinaga'),
      img('/images/products/planly-feat-measure.webp', 1600, 900, 'Measuring a wall in the tour', 'Seina mõõtmine tuuris'),
    ],
    demo: { src: 'https://planly.ee/t/kristiine-3t?show=furniture&autostart', poster: '/images/products/planly-demo-kristiine.webp' },
    i18n: {
      en: {
        heading: 'Planly 3D - interactive 3D tours for real estate',
        tagline: 'Interactive 3D tours that make showing property an experience.',
        summary:
          'Planly 3D turns a floor plan and a few photos into a 3D tour where buyers and tenants walk through a flat, house or office, measure the rooms and furnish them, right in the browser. I designed and built it end to end, from the WebGL viewer to the Blender pipeline that bakes the light.',
        role: 'Founder, product, design and development',
        about: [
          'Buyers decide from a few photos and a floor plan, and nobody can step inside a building that isn\'t built yet. Planly 3D builds the home from its drawings, so they can walk around it before it exists.',
          'A tour runs in any browser, on a phone too, with no app. It works on planly.ee or embedded on a developer\'s own website, WordPress included, with a link for every flat.',
        ],
        highlights: [
          { title: 'A real 3D model, not a 360° photo', text: 'Visitors move freely room to room, switch day, evening and night, measure walls and open doors, fridges and lights.' },
          { title: 'Baked light', text: 'A Blender pipeline generates the model from the plan and bakes the light with Cycles, so the tour looks real and stays light enough for a phone.' },
          { title: 'Furniture planner', text: 'Buyers drag sofas, beds and wardrobes into place at real size, in 3D or top view, and share the plan as a link.' },
          { title: 'Built to be embedded', text: 'Static files with a signed per-domain licence, so a tour can run on planly.ee or on a client\'s own server.' },
        ],
        audiences: ['Developers selling during construction', 'Estate agents and owners selling or letting', 'Commercial space and offices'],
        faq: [
          { q: 'Is Planly 3D a client project?', a: 'No. It is my own product, which I designed, built and run. It is sold at <a href="https://planly.ee">planly.ee</a>.' },
          { q: 'What is it built with?', a: 'A TypeScript and Three.js viewer built with Vite, a Python and Blender pipeline that generates the model and bakes the light, and a small PHP backend.' },
        ],
        imageAlt: 'Planly 3D tour of a furnished new-build flat on a computer and a phone',
        seo: {
          title: 'Planly 3D - interactive 3D real estate tours | Risto Tõldsep',
          description:
            'Planly 3D is my own product: 3D tours where buyers walk through a flat, measure it and furnish it in the browser. Built with Three.js and a Blender light-baking pipeline.',
        },
      },
      et: {
        heading: 'Planly 3D - interaktiivsed 3D-tuurid kinnisvarale',
        tagline: 'Interaktiivsed 3D-tuurid, mis muudavad kinnisvara tutvustamise elamuseks.',
        summary:
          'Planly 3D teeb korruseplaanist ja paarist pildist 3D-tuuri, kus ostja või üürnik käib korteris, majas või kontoris ringi, mõõdab ruume ja sisustab need, otse brauseris. Disainisin ja ehitasin selle algusest lõpuni, WebGL-vaaturist kuni Blenderi töövoogu, mis valguse välja arvutab.',
        role: 'Asutaja, toode, disain ja arendus',
        about: [
          'Ostja otsustab paari pildi ja põhiplaani järgi ning ehitamata majja ei saa ta sisse astuda. Planly 3D ehitab kodu jooniste järgi üles, nii et seal saab ringi käia enne, kui maja valmis on.',
          'Tuur töötab igas brauseris, ka telefonis, ilma äpita. See jookseb planly.ee-s või arendaja enda kodulehel, ka WordPressis, iga korter oma lingiga.',
        ],
        highlights: [
          { title: 'Päris 3D-mudel, mitte 360° foto', text: 'Külastaja liigub vabalt toast tuppa, vahetab päeva, õhtu ja öö, mõõdab seinu ning avab uksi, külmikut ja tulesid.' },
          { title: 'Arvutatud valgus', text: 'Blenderi töövoog teeb plaanist mudeli ja arvutab valguse Cyclesiga, nii et tuur näeb välja päris ja jääb telefoni jaoks piisavalt kergeks.' },
          { title: 'Mööbliplaneerija', text: 'Ostja lohistab diivani, voodi ja kapid päris mõõtudes paika, 3D-s või pealtvaates, ja jagab plaani lingiga.' },
          { title: 'Tehtud manustamiseks', text: 'Staatilised failid ja domeenipõhine allkirjastatud litsents, nii et tuur töötab planly.ee-s või kliendi enda serveris.' },
        ],
        audiences: ['Arendajatele, kes müüvad ehituse ajal', 'Maakleritele ja omanikele, kes müüvad või üürivad', 'Äripindadele ja kontoritele'],
        faq: [
          { q: 'Kas Planly 3D on kliendiprojekt?', a: 'Ei. See on minu enda toode, mille disainisin, ehitasin ja mida haldan. Toodet müüakse aadressil <a href="https://planly.ee">planly.ee</a>.' },
          { q: 'Millega see on tehtud?', a: 'TypeScripti ja Three.js-iga vaatur (Vite), Pythoni ja Blenderi töövoog, mis teeb mudeli ja arvutab valguse, ning väike PHP taustasüsteem.' },
        ],
        imageAlt: 'Planly 3D tuur sisustatud uusarenduse korterist arvutis ja telefonis',
        seo: {
          title: 'Planly 3D - interaktiivsed 3D-kinnisvaratuurid | Risto Tõldsep',
          description:
            'Planly 3D on minu enda toode: 3D-tuurid, kus ostja käib korteris ringi, mõõdab ja sisustab selle brauseris. Tehtud Three.js-i ja Blenderi valgusarvutusega.',
        },
      },
    },
  },
  'vestly-ai': {
    id: 'vestly-ai',
    slug: { en: 'vestly-ai', et: 'vestly-ai' },
    name: 'Vestly.ai',
    order: 2,
    year: 2026,
    publishedAt: '2026-10-22',
    updatedAt: '2026-10-22',
    url: 'https://vestly.ee',
    rixioUrl: { en: 'https://rixio.ee/en/products/vestly-ai', et: 'https://rixio.ee/tooted/vestly-ai' },
    mark: '/images/products/vestly-mark.svg',
    accent: 'rgba(79,91,213,0.26)',
    stack: ['Laravel', 'PHP 8.3', 'Vite', 'WordPress plugin', 'JavaScript widget', 'OpenAI', 'Anthropic Claude', 'Google Gemini'],
    cardTags: ['AI', 'Laravel', 'WordPress', 'Own product'],
    cover: img(
      '/images/products/vestly-ai.webp',
      1600,
      1200,
      'The Vestly.ai chat window answering a visitor',
      'Vestly.ai vestlusaken vastab külastajale',
    ),
    i18n: {
      en: {
        heading: 'Vestly.ai - an AI chatbot that knows your business',
        tagline: 'Answers visitors from your own website, in their language.',
        summary:
          'Vestly.ai is an AI chatbot that learns from a company\'s own website, answers visitors in their own language and captures leads. It installs as a WordPress plugin or with one line of code. I built it end to end: the hosted service, the plugin, the widget and the admin.',
        role: 'Founder, product, design and development',
        about: [
          'Visitors want an answer straight away, and the answer is often already on the website, just hard to find. Vestly.ai answers from the company\'s own content, points people to the right service, product or booking, and hands anything it can\'t answer to a person.',
          'It runs as a hosted service with the data kept in the EU. A business can pick the AI model by plan, from Google Gemini to Anthropic Claude.',
        ],
        highlights: [
          { title: 'Learns the website', text: 'It indexes the site and a knowledge base, and answers only from that, instead of making things up.' },
          { title: 'Leads and booking', text: 'It collects contact details when a visitor is ready and points them to booking or the right page.' },
          { title: 'Unanswered questions', text: 'Questions it couldn\'t answer go to a list, so the owner can fill the gaps in its knowledge.' },
          { title: 'One line to install', text: 'A WordPress plugin, one script tag, or Google Tag Manager on any site.' },
        ],
        audiences: ['Service businesses with recurring questions', 'Online stores with large catalogues', 'Any site that gets the same questions every day'],
        faq: [
          { q: 'Is Vestly.ai a client project?', a: 'No. It is my own product, which I designed, built and run. It is sold at <a href="https://vestly.ee">vestly.ee</a>.' },
          { q: 'What is it built with?', a: 'A Laravel service with a WordPress plugin and a lightweight JavaScript chat widget, using language models from OpenAI, Anthropic and Google.' },
        ],
        imageAlt: 'The Vestly.ai chat window answering a visitor',
        seo: {
          title: 'Vestly.ai - AI chatbot for websites | Risto Tõldsep',
          description:
            'Vestly.ai is my own product: an AI chatbot that answers visitors from a company\'s own website, in their language, and captures leads. Built with Laravel.',
        },
      },
      et: {
        heading: 'Vestly.ai - AI-juturobot, mis tunneb sinu ettevõtet',
        tagline: 'Vastab külastajale sinu enda veebilehe põhjal, tema keeles.',
        summary:
          'Vestly.ai on AI-juturobot, mis õpib ettevõtte enda veebilehest, vastab külastajale tema keeles ja kogub müügivihjeid. See paigaldub WordPressi pluginana või ühe koodireaga. Ehitasin selle algusest lõpuni: majutatud teenuse, plugina, vestlusakna ja halduse.',
        role: 'Asutaja, toode, disain ja arendus',
        about: [
          'Külastaja tahab vastust kohe ja tihti on see veebilehel juba olemas, lihtsalt raske leida. Vestly.ai vastab ettevõtte enda sisu põhjal, suunab õige teenuse, toote või broneeringu juurde ja annab küsimused, millele ta vastata ei oska, inimesele üle.',
          'See töötab majutatud teenusena, andmed on EL-is. Ettevõte valib paketiga AI-mudeli, Google Geminist Anthropic Claude\'ini.',
        ],
        highlights: [
          { title: 'Õpib veebilehe selgeks', text: 'Indekseerib lehe ja teadmistebaasi ning vastab ainult nende põhjal, ilma asju välja mõtlemata.' },
          { title: 'Müügivihjed ja broneering', text: 'Kogub kontakti, kui külastaja on valmis, ja suunab broneeringu või õige lehe juurde.' },
          { title: 'Vastamata küsimused', text: 'Küsimused, millele ta vastata ei osanud, lähevad nimekirja, et omanik saaks teadmisi täiendada.' },
          { title: 'Paigaldus ühe reaga', text: 'WordPressi plugin, üks skriptirida või Google Tag Manager mis tahes lehel.' },
        ],
        audiences: ['Teenusettevõtetele, kellel korduvad küsimused', 'Suure tootevalikuga e-poodidele', 'Igale lehele, kuhu tulevad iga päev samad küsimused'],
        faq: [
          { q: 'Kas Vestly.ai on kliendiprojekt?', a: 'Ei. See on minu enda toode, mille disainisin, ehitasin ja mida haldan. Toodet müüakse aadressil <a href="https://vestly.ee">vestly.ee</a>.' },
          { q: 'Millega see on tehtud?', a: 'Laraveli teenus koos WordPressi plugina ja kerge JavaScripti vestlusaknaga, keelemudelid OpenAI-lt, Anthropicult ja Google\'ilt.' },
        ],
        imageAlt: 'Vestly.ai vestlusaken vastab külastajale',
        seo: {
          title: 'Vestly.ai - AI-juturobot veebilehele | Risto Tõldsep',
          description:
            'Vestly.ai on minu enda toode: AI-juturobot, mis vastab külastajale ettevõtte enda veebilehe põhjal, tema keeles, ja kogub müügivihjeid. Tehtud Laraveliga.',
        },
      },
    },
  },
} satisfies Record<ProductId, Product>;

export const allProducts: Product[] = Object.values(products).sort((a, b) => a.order - b.order);

/** Interface copy for the homepage section and the product pages. */
export const productUi: I18n<{
  eyebrow: string;
  title: string;
  text: string;
  more: string;
  visit: string;
  pageEyebrow: string;
  facts: { type: string; typeValue: string; year: string; role: string; site: string; studio: string };
  about: string;
  highlights: string;
  audiences: string;
  gallery: string;
  stack: string;
  faq: string;
  demo: string;
  demoStart: string;
  demoNote: string;
  rixio: string;
  backHome: string;
  other: string;
}> = {
  en: {
    eyebrow: 'Products',
    title: 'Things I build and run myself',
    text: 'Besides client work, I build my own digital products: designed, coded, launched and run end to end. Both are sold through my studio, Rixio Digital.',
    more: 'About the product',
    visit: 'Visit',
    pageEyebrow: 'Own product',
    facts: { type: 'Type', typeValue: 'Own digital product', year: 'Launched', role: 'My role', site: 'Product site', studio: 'Sold by' },
    about: 'What it does',
    highlights: 'Highlights',
    audiences: 'Who it\'s for',
    gallery: 'Inside the product',
    stack: 'Built with',
    faq: 'FAQ',
    demo: 'Try the live demo',
    demoStart: 'Start the 3D tour',
    demoNote: 'A real tour, not a video. It loads only when you click.',
    rixio: 'Product page at Rixio Digital',
    backHome: 'Back to home',
    other: 'My other product',
  },
  et: {
    eyebrow: 'Tooted',
    title: 'Minu enda tooted',
    text: 'Lisaks kliendiprojektidele ehitan oma digitooteid: disainin, arendan, viin turule ja hoian käigus algusest lõpuni. Mõlemat müün oma stuudio Rixio Digital kaudu.',
    more: 'Tootest lähemalt',
    visit: 'Ava',
    pageEyebrow: 'Oma toode',
    facts: { type: 'Tüüp', typeValue: 'Oma digitoode', year: 'Turule', role: 'Minu roll', site: 'Toote leht', studio: 'Müüja' },
    about: 'Mida see teeb',
    highlights: 'Põhilised võimalused',
    audiences: 'Kellele',
    gallery: 'Toote sees',
    stack: 'Tehnoloogia',
    faq: 'KKK',
    demo: 'Proovi päris demot',
    demoStart: 'Käivita 3D-tuur',
    demoNote: 'Päris tuur, mitte video. Laeb alles klõpsuga.',
    rixio: 'Tooteleht Rixio Digitalis',
    backHome: 'Tagasi avalehele',
    other: 'Minu teine toode',
  },
};
