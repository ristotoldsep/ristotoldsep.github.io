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
        intro: [
          'I design interfaces and then build them, which removes the usual gap where a design gets handed over and quietly loses whatever made it good. Design decisions that cannot survive the build get caught while they are still cheap to change.',
          'The work is conversion-focused rather than decorative. A portfolio site and a checkout have different jobs, and the design should be arguing for the thing the business actually needs.',
        ],
        deliverables: [
          'Custom design from scratch in Figma, not a template reskin.',
          'A design system rather than a set of unconnected page mockups, so the site stays coherent as it grows.',
          'Responsive layouts designed for phones deliberately, not squeezed down afterwards.',
          'Interaction and motion design where it helps comprehension rather than as decoration.',
          'Accessible colour contrast and type sizing as a default, not an afterthought.',
          'The build, by the same person who did the design.',
        ],
        process: [
          {
            title: 'Understand',
            text: 'Who is the site for, what should they do, and what is currently stopping them.',
          },
          {
            title: 'Structure',
            text: 'Content and page structure first. Getting this right is what makes the visual design straightforward.',
          },
          {
            title: 'Design',
            text: 'Figma, iterating on the key templates rather than mocking up every page.',
          },
          {
            title: 'Build',
            text: 'Turned into a real block system so you can compose new pages later without the design falling apart.',
          },
        ],
        faq: [
          {
            q: 'Do you design, or only build?',
            a: 'Both. I can work from your designer’s Figma if you have one, but when I do the design too the result is usually tighter, because nothing gets lost in handover.',
          },
          {
            q: 'How long does a website design take?',
            a: 'For a typical business site, design is a few weeks depending on how quickly feedback comes back. The slowest part is almost always content, not design.',
          },
          {
            q: 'Will I get the Figma files?',
            a: 'Yes. The design is yours.',
          },
        ],
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
        intro: [
          'Disainin kasutajaliidesed ja seejärel ehitan need ka valmis, mis kaotab ära tavalise lõhe, kus disain antakse üle ja kaotab vaikselt selle, mis ta heaks tegi. Disainiotsused, mis arendust üle ei ela, tulevad välja siis, kui neid on veel odav muuta.',
          'Töö on suunatud konversioonile, mitte kaunistamisele. Portfooliolehel ja ostukorvil on eri ülesanded ja disain peaks argumenteerima selle poolt, mida äri päriselt vajab.',
        ],
        deliverables: [
          'Kohandatud disain nullist Figmas, mitte malli ümbervärvimine.',
          'Disainisüsteem, mitte hulk omavahel sidumata lehemakette, et leht püsiks kasvades terviklik.',
          'Responsiivsed vaated, mis on telefonile teadlikult disainitud, mitte hiljem kokku surutud.',
          'Interaktsiooni- ja liikumisdisain seal, kus see aitab arusaamist, mitte kaunistusena.',
          'Ligipääsetav värvikontrast ja kirjasuurus vaikimisi, mitte tagantjärele.',
          'Ka arendus, sama inimese käest, kes disainis.',
        ],
        process: [
          {
            title: 'Mõistmine',
            text: 'Kellele leht on, mida nad tegema peaksid ja mis neid praegu takistab.',
          },
          {
            title: 'Struktuur',
            text: 'Kõigepealt sisu ja lehe struktuur. Selle paika saamine teebki visuaalse disaini lihtsaks.',
          },
          {
            title: 'Disain',
            text: 'Figma, kus itereerin põhiliste mallide kallal, mitte ei maketi iga lehte eraldi.',
          },
          {
            title: 'Arendus',
            text: 'Muudetakse päris plokisüsteemiks, et saaksid hiljem uusi lehti kokku panna ilma, et disain laiali laguneks.',
          },
        ],
        faq: [
          {
            q: 'Kas disainid või ainult ehitad?',
            a: 'Mõlemat. Saan töötada sinu disaineri Figma põhjal, kui see olemas on, aga kui teen ka disaini, tuleb tulemus tavaliselt terviklikum, sest üleandmisel ei lähe midagi kaduma.',
          },
          {
            q: 'Kui kaua kodulehe disain aega võtab?',
            a: 'Tavalise ärilehe puhul on disain paar nädalat, sõltuvalt sellest, kui kiiresti tagasiside tuleb. Kõige aeglasem osa on peaaegu alati sisu, mitte disain.',
          },
          {
            q: 'Kas saan Figma failid endale?',
            a: 'Jah. Disain on sinu oma.',
          },
        ],
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
        intro: [
          'When a project needs more than a content site, I build the whole thing: database, business logic, APIs and the interface on top. Usually Laravel or Node on the server, React or Vue on the front, chosen to fit the problem rather than out of habit.',
        ],
        deliverables: [
          'Database design that reflects how the business actually works.',
          'REST APIs, or Inertia where the only consumer is your own frontend and a separate API would be pure overhead.',
          'React or Vue interfaces built as components rather than pages.',
          'Third-party integrations: payments, CRMs, ERPs, AI APIs.',
          'Authentication, roles and permissions done properly.',
          'Deployment and CI so releases are routine rather than an event.',
        ],
        process: [
          {
            title: 'Model the domain',
            text: 'Get the data model right first. Almost every painful web app is one with a data model that did not match reality.',
          },
          {
            title: 'Build in slices',
            text: 'End-to-end vertical slices you can actually use, rather than a backend that works in theory for three months.',
          },
          {
            title: 'Ship and iterate',
            text: 'Deploy early to a staging environment so feedback arrives while changes are still cheap.',
          },
        ],
        faq: [
          {
            q: 'Should I build a web app or use WordPress?',
            a: 'If the core of what you need is content with some functionality attached, WordPress is usually the cheaper answer and I will say so. If the core is behaviour, workflow and data, forcing that into WordPress costs more than building it properly.',
          },
          {
            q: 'Laravel or Node?',
            a: 'Both are fine. Laravel if the work is data and business logic heavy with a conventional web frontend, Node if you are already in a JavaScript ecosystem or need heavy realtime. The wrong reason to choose either is fashion.',
          },
        ],
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
        intro: [
          'Kui projekt vajab rohkemat kui sisulehte, ehitan kogu asja: andmebaasi, äriloogika, API-d ja liidese nende peal. Serveris tavaliselt Laravel või Node, frontendis React või Vue, valitud probleemi järgi, mitte harjumusest.',
        ],
        deliverables: [
          'Andmebaasi disain, mis peegeldab seda, kuidas äri päriselt toimib.',
          'REST API-d, või Inertia seal, kus ainus tarbija on sinu enda frontend ja eraldi API oleks puhas lisakoormus.',
          'Reacti või Vue liidesed, ehitatud komponentidena, mitte lehtedena.',
          'Kolmandate osapoolte integratsioonid: maksed, CRM-id, ERP-d, AI API-d.',
          'Korralikult tehtud autentimine, rollid ja õigused.',
          'Deploy ja CI, et väljalasked oleksid rutiin, mitte sündmus.',
        ],
        process: [
          {
            title: 'Modelleeri valdkond',
            text: 'Saa kõigepealt andmemudel õigeks. Peaaegu iga valus veebirakendus on selline, mille andmemudel ei vastanud tegelikkusele.',
          },
          {
            title: 'Ehita viiludena',
            text: 'Otsast lõpuni toimivad viilud, mida saab päriselt kasutada, mitte backend, mis kolm kuud teoorias töötab.',
          },
          {
            title: 'Avalda ja itereeri',
            text: 'Vii varakult testkeskkonda, et tagasiside jõuaks kohale siis, kui muudatused on veel odavad.',
          },
        ],
        faq: [
          {
            q: 'Kas ehitada veebirakendus või kasutada WordPressi?',
            a: 'Kui vajaliku tuum on sisu, millele on funktsionaalsust külge pandud, on WordPress tavaliselt odavam vastus ja ma ütlen seda ka. Kui tuum on käitumine, töövoog ja andmed, läheb selle WordPressi surumine kallimaks kui korralikult ehitamine.',
          },
          {
            q: 'Laravel või Node?',
            a: 'Mõlemad on head. Laravel, kui töö on andmete- ja äriloogikarohke tavalise veebiliidesega, Node, kui oled juba JavaScripti maailmas või vajad palju reaalajas tööd. Vale põhjus kummagi valimiseks on mood.',
          },
        ],
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
        intro: [
          'I build WordPress sites and WooCommerce stores as custom themes, not as a purchased template bent into shape. That means the site does what the brand needs rather than what a theme author assumed, and it stays fast because it only ships the code it actually uses.',
          'Most of my work is for Estonian businesses selling to Estonia and abroad, which in practice means multilingual content, local payment methods and a client who needs to run the site themselves afterwards.',
        ],
        deliverables: [
          'A fully custom WordPress theme built on ACF Gutenberg blocks, so you compose pages from on-brand components instead of fighting a page builder.',
          'WooCommerce set up properly: product structure, tax, shipping, and Estonian payment methods such as Montonio bank links alongside cards.',
          'Multilingual through WPML, covering content, interface strings and media rather than product titles alone.',
          'Custom plugins where the site needs behaviour WordPress does not have, such as feed importers or AI integrations.',
          'A Vite per-block asset pipeline so each block loads only its own CSS and JS.',
          'Analytics and conversion tracking wired up, so you can see what the store is actually doing.',
          'Training and documentation so your team can run it without me.',
        ],
        process: [
          {
            title: 'Scoping',
            text: 'We work out what the site has to do commercially before talking about design. That is where most of the cost is decided.',
          },
          {
            title: 'Design',
            text: 'Either I design it, or I build from your designer’s Figma. Either way the design becomes a block system rather than a set of one-off pages.',
          },
          {
            title: 'Build',
            text: 'Custom theme, custom blocks, WooCommerce configuration, integrations. You see progress on a staging site throughout.',
          },
          {
            title: 'Launch',
            text: 'Migration, redirects, analytics, Search Console, and a check that the tracking actually records real orders.',
          },
          {
            title: 'After',
            text: 'Maintenance if you want it, or a clean handover with documentation if you would rather run it yourself.',
          },
        ],
        faq: [
          {
            q: 'How much does a custom WordPress site cost in Estonia?',
            a: 'A small custom marketing site typically lands in the low thousands of euros, a custom WooCommerce store with integrations considerably more. The honest answer is that the cost is driven by how much bespoke behaviour you need, not by page count, so I quote after scoping rather than from a price list.',
          },
          {
            q: 'Why not just use Elementor or a premium theme?',
            a: 'For a simple brochure site, a good theme is a reasonable choice and I will tell you so. It stops being reasonable when you need specific behaviour, real performance, or a design that is genuinely yours, because then you pay every day in workarounds for what you saved once.',
          },
          {
            q: 'Can I edit the site myself afterwards?',
            a: 'That is the point of building it on ACF blocks. You get real editing freedom inside a design system, so you can build new pages without being able to produce something off-brand.',
          },
          {
            q: 'Do you work with WooCommerce for larger stores?',
            a: 'Yes. WooCommerce handles serious catalogues fine when the theme and hosting are right. The usual problem with slow WooCommerce stores is an overloaded template and twenty plugins, not WooCommerce itself.',
          },
          {
            q: 'Can you make the store multilingual?',
            a: 'Yes, with WPML. The part people underestimate is that strings and media need translating too, not just product names, and that one catalogue with translations attached is far easier to maintain than parallel stores.',
          },
          {
            q: 'Do you take over existing WordPress sites?',
            a: 'Often, yes. I will look at what is there first and tell you honestly whether fixing it or rebuilding it is the better use of your money.',
          },
        ],
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
        intro: [
          'Teen WordPressi kodulehti ja WooCommerce e-poode kohandatud teemadena, mitte ostetud malli ümber painutades. See tähendab, et leht teeb seda, mida bränd vajab, mitte seda, mida teema autor eeldas, ja püsib kiire, sest laeb ainult seda koodi, mida päriselt kasutab.',
          'Enamik minu tööst on Eesti ettevõtetele, kes müüvad Eestisse ja välismaale, mis praktikas tähendab mitmekeelset sisu, kohalikke makseviise ja klienti, kes peab lehte hiljem ise haldama.',
        ],
        deliverables: [
          'Täielikult kohandatud WordPressi teema ACF Gutenbergi plokkidel, nii et paned lehed kokku brändikohastest komponentidest, mitte ei võitle lehetegijaga.',
          'Korralikult seadistatud WooCommerce: tootestruktuur, maksud, tarne ning Eesti makseviisid nagu Montonio pangalingid kaartide kõrval.',
          'Mitmekeelsus WPML-i kaudu, mis katab sisu, liidese stringid ja meedia, mitte ainult tootenimed.',
          'Kohandatud pluginad seal, kus leht vajab käitumist, mida WordPressil ei ole, näiteks voogude importijad või AI integratsioonid.',
          'Vite plokipõhine varade konveier, nii et iga plokk laeb ainult enda CSS-i ja JS-i.',
          'Ühendatud analüütika ja konversioonide jälgimine, et näeksid, mida pood päriselt teeb.',
          'Koolitus ja dokumentatsioon, et sinu tiim saaks lehega ilma minuta hakkama.',
        ],
        process: [
          {
            title: 'Kaardistus',
            text: 'Enne disainist rääkimist paneme paika, mida leht äriliselt tegema peab. Seal otsustatakse suurem osa maksumusest.',
          },
          {
            title: 'Disain',
            text: 'Kas disainin ise või ehitan sinu disaineri Figma põhjal. Kummalgi juhul saab disainist plokisüsteem, mitte hulk ühekordseid lehti.',
          },
          {
            title: 'Arendus',
            text: 'Kohandatud teema, kohandatud plokid, WooCommerce’i seadistus, integratsioonid. Näed kogu aeg edenemist testkeskkonnas.',
          },
          {
            title: 'Avaldamine',
            text: 'Migreerimine, ümbersuunamised, analüütika, Search Console ja kontroll, et jälgimine salvestaks päris tellimusi.',
          },
          {
            title: 'Edasi',
            text: 'Hooldus, kui soovid, või puhas üleandmine koos dokumentatsiooniga, kui eelistad ise hallata.',
          },
        ],
        faq: [
          {
            q: 'Kui palju maksab kohandatud WordPressi kodulehe tegemine Eestis?',
            a: 'Väike kohandatud turundusleht jääb tavaliselt paari tuhande euro kanti, kohandatud WooCommerce e-pood koos integratsioonidega tunduvalt kallimaks. Aus vastus on, et hinda määrab see, kui palju eriloogikat vajad, mitte lehtede arv, seega teen pakkumise pärast kaardistust, mitte hinnakirjast.',
          },
          {
            q: 'Miks mitte lihtsalt Elementor või valmis teema?',
            a: 'Lihtsa tutvustava lehe puhul on hea teema mõistlik valik ja ma ütlen seda ka. Mõistlik olemast lakkab see siis, kui vajad konkreetset käitumist, päris kiirust või disaini, mis on päriselt sinu oma, sest siis maksad iga päev vaheplaanidega selle eest, mille korra kokku hoidsid.',
          },
          {
            q: 'Kas saan lehte hiljem ise muuta?',
            a: 'Just selleks ongi see ACF plokkidel. Saad päris muutmisvabaduse disainisüsteemi sees, nii et saad teha uusi lehti, ilma et suudaksid toota midagi brändivälist.',
          },
          {
            q: 'Kas WooCommerce sobib suurematele e-poodidele?',
            a: 'Jah. WooCommerce saab tõsiste kataloogidega hästi hakkama, kui teema ja majutus on paigas. Aeglaste WooCommerce’i poodide tavaline probleem on üle koormatud mall ja kakskümmend pluginat, mitte WooCommerce ise.',
          },
          {
            q: 'Kas saad e-poe mitmekeelseks teha?',
            a: 'Jah, WPML-iga. Alahinnatakse tavaliselt seda, et ka stringid ja meedia vajavad tõlkimist, mitte ainult tootenimed, ning et ühte kataloogi koos tõlgetega on palju lihtsam hallata kui paralleelseid poode.',
          },
          {
            q: 'Kas võtad üle olemasolevaid WordPressi lehti?',
            a: 'Sageli küll. Vaatan kõigepealt üle, mis olemas on, ja ütlen ausalt, kas selle parandamine või uuesti ehitamine on sinu raha parem kasutus.',
          },
        ],
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
        intro: [
          'Search is splitting in two. People still type queries into Google, but a growing number ask ChatGPT, Perplexity or Gemini instead and act on whatever those tools recommend. Being found now means being findable in both, and the second one works differently.',
          'Classic SEO is still the foundation: a site that is fast, crawlable, correctly structured and genuinely useful. On top of that, being cited by an answer engine depends on things most sites never do, such as stating plain factual sentences a model can quote, marking up entities so they resolve to one identity, and being described by independent third parties.',
        ],
        deliverables: [
          'Technical SEO audit: crawlability, indexation, canonicals, hreflang, redirects, structured data, sitemaps.',
          'Core Web Vitals work, including the common case where a visually heavy site renders nothing useful until JavaScript runs.',
          'Structured data as a connected entity graph rather than scattered snippets, so search engines resolve your pages to one identity.',
          'AEO and GEO: content structured as questions and factual answers, llms.txt, and crawler access for GPTBot, ClaudeBot and PerplexityBot.',
          'Full analytics setup: Google Tag Manager, GA4 with custom events, Search Console, Microsoft Clarity, Meta Pixel.',
          'Google Ads and Meta campaigns with conversion tracking that measures actual purchases rather than pageviews.',
        ],
        process: [
          {
            title: 'Measure first',
            text: 'Search Console, analytics, and a record of what answer engines currently say about you. Without a baseline you cannot tell whether any of the work helped.',
          },
          {
            title: 'Fix the foundations',
            text: 'Crawlability, speed, structure, schema. No amount of content compensates for a site engines cannot read properly.',
          },
          {
            title: 'Build the surface',
            text: 'Pages that answer real queries, each one earning its URL. Thin pages are a liability, not a gain.',
          },
          {
            title: 'Earn corroboration',
            text: 'What third parties say about you matters more to an answer engine than what you say about yourself.',
          },
          {
            title: 'Re-measure',
            text: 'Re-run the same queries against the same engines and compare against the baseline.',
          },
        ],
        faq: [
          {
            q: 'What is GEO and how is it different from SEO?',
            a: 'SEO aims to rank a page in a list of links. GEO, generative engine optimisation, aims to be the source an AI cites when it answers a question. They overlap in the fundamentals, but GEO leans much harder on plain factual writing, question-and-answer structure, machine-readable entities and independent mentions elsewhere.',
          },
          {
            q: 'How do I get ChatGPT to recommend my business?',
            a: 'Three things, roughly in order: be crawlable by GPTBot and the other AI crawlers, state what you do in plain factual sentences that are easy to quote, and be described as such by sources other than your own website. The third is the slowest and matters most.',
          },
          {
            q: 'How long does SEO take to show results?',
            a: 'Technical fixes can show in weeks. Ranking for competitive non-branded queries is months. Anyone promising faster is selling something.',
          },
          {
            q: 'Do you do this for Estonian and English at the same time?',
            a: 'Yes, and they are genuinely different jobs. Estonian queries are lower volume and much less competitive, so they often pay back faster, but they need real Estonian content rather than translated English.',
          },
          {
            q: 'Can you set up Google Ads conversion tracking properly?',
            a: 'Yes, including GTM4WP enhanced-ecommerce dataLayers, GA4 ecommerce events, Conversion Linker and Google Consent Mode through a cookie banner. If the conversion tracking is not measuring real purchases, the campaign data is not telling you anything.',
          },
        ],
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
        intro: [
          'Otsing on kaheks jagunemas. Inimesed trükivad endiselt Google’isse, aga üha rohkem küsitakse hoopis ChatGPT-lt, Perplexitylt või Geminilt ja tegutsetakse selle järgi, mida need soovitavad. Leitav olemine tähendab nüüd leitav olemist mõlemas, ja teine neist töötab teisiti.',
          'Klassikaline SEO on endiselt vundament: kiire, roomatav, korrektselt struktureeritud ja päriselt kasulik leht. Selle peal sõltub vastusemootorites tsiteeritud saamine asjadest, mida enamik lehti kunagi ei tee: lihtsad faktilaused, mida mudel saab tsiteerida, olemite märgendamine nii, et need viitavad ühele identiteedile, ja sõltumatute kolmandate osapoolte kirjeldused.',
        ],
        deliverables: [
          'Tehniline SEO audit: roomatavus, indekseerimine, kanoonilised URL-id, hreflang, ümbersuunamised, struktureeritud andmed, saidikaardid.',
          'Core Web Vitals töö, sealhulgas sage juhtum, kus visuaalselt rikas leht ei renderda midagi kasulikku enne, kui JavaScript on käivitunud.',
          'Struktureeritud andmed seotud olemigraafina, mitte laialipillutud juppidena, et otsingumootorid seostaksid su lehed ühe identiteediga.',
          'AEO ja GEO: küsimuste ja faktiliste vastustena struktureeritud sisu, llms.txt ning ligipääs GPTBotile, ClaudeBotile ja PerplexityBotile.',
          'Terviklik analüütika seadistus: Google Tag Manager, GA4 kohandatud sündmustega, Search Console, Microsoft Clarity, Meta Pixel.',
          'Google Adsi ja Meta kampaaniad konversioonide jälgimisega, mis mõõdab päris oste, mitte lehevaatamisi.',
        ],
        process: [
          {
            title: 'Kõigepealt mõõda',
            text: 'Search Console, analüütika ja üleskirjutus sellest, mida vastusemootorid praegu sinu kohta ütlevad. Ilma lähtetasemeta ei saa öelda, kas miski aitas.',
          },
          {
            title: 'Paranda vundament',
            text: 'Roomatavus, kiirus, struktuur, skeem. Ükski sisuhulk ei kompenseeri lehte, mida mootorid korralikult lugeda ei saa.',
          },
          {
            title: 'Ehita pind',
            text: 'Lehed, mis vastavad päris päringutele, igaüks oma URL-i vääriline. Õhukesed lehed on koormus, mitte võit.',
          },
          {
            title: 'Teeni kinnitust',
            text: 'See, mida kolmandad osapooled sinu kohta ütlevad, loeb vastusemootorile rohkem kui see, mida sa ise enda kohta ütled.',
          },
          {
            title: 'Mõõda uuesti',
            text: 'Küsi samad päringud samadelt mootoritelt ja võrdle lähtetasemega.',
          },
        ],
        faq: [
          {
            q: 'Mis on GEO ja kuidas see SEO-st erineb?',
            a: 'SEO eesmärk on saada leht linkide nimekirjas kõrgele. GEO ehk generative engine optimization eesmärk on olla see allikas, mida tehisintellekt vastates tsiteerib. Põhimõttes kattuvad, aga GEO toetub palju rohkem lihtsale faktilisele kirjutamisele, küsimuse ja vastuse struktuurile, masinloetavatele olemitele ja sõltumatutele mainimistele mujal.',
          },
          {
            q: 'Kuidas panna ChatGPT oma ettevõtet soovitama?',
            a: 'Kolm asja, umbes selles järjekorras: ole GPTBotile ja teistele AI roomajatele ligipääsetav, ütle lihtsate faktilausetega, mida sa teed, ja lase seda öelda ka allikatel peale sinu enda lehe. Kolmas on kõige aeglasem ja kõige olulisem.',
          },
          {
            q: 'Kui kaua võtab SEO tulemuste nägemine aega?',
            a: 'Tehnilised parandused võivad näha olla nädalatega. Konkurentsitihedate mittebrändipäringute puhul on see kuud. Kes lubab kiiremini, müüb midagi.',
          },
          {
            q: 'Kas teed seda korraga eesti ja inglise keeles?',
            a: 'Jah, ja need on päriselt eri tööd. Eestikeelsed päringud on väiksema mahuga ja palju vähem konkurentsi, seega tasuvad sageli kiiremini ära, aga vajavad päris eestikeelset sisu, mitte tõlgitud inglise keelt.',
          },
          {
            q: 'Kas saad Google Adsi konversioonide jälgimise korralikult üles seada?',
            a: 'Jah, sealhulgas GTM4WP täiendatud e-kaubanduse dataLayer’id, GA4 e-kaubanduse sündmused, Conversion Linkeri ja Google Consent Mode’i küpsiseteate kaudu. Kui konversioonide jälgimine ei mõõda päris oste, siis kampaania andmed ei ütle sulle midagi.',
          },
        ],
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
        intro: [
          'A website is not finished when it launches. WordPress core, plugins and PHP all move, security issues appear, and performance quietly degrades as content accumulates. Maintenance is the difference between a site that lasts five years and one that has to be rebuilt in two.',
        ],
        deliverables: [
          'WordPress core, theme and plugin updates, tested rather than applied blindly.',
          'Regular backups, and the important part, verified restores.',
          'Security hardening and monitoring.',
          'Performance and Core Web Vitals checks as content grows.',
          'Uptime monitoring so you hear it from me rather than from a customer.',
          'A developer to call when something breaks.',
        ],
        process: [
          {
            title: 'Update on staging',
            text: 'Updates go to a staging copy first. A plugin update that breaks checkout should break staging, not your store.',
          },
          {
            title: 'Check, then promote',
            text: 'Verify the critical paths still work, then push to production.',
          },
          {
            title: 'Report',
            text: 'You get told what changed and why, not just an invoice.',
          },
        ],
        faq: [
          {
            q: 'Do I really need a maintenance plan for WordPress?',
            a: 'If the site earns you money, yes. Outdated plugins are the single most common way WordPress sites get compromised, and the cleanup costs far more than the maintenance would have.',
          },
          {
            q: 'What happens if the site goes down?',
            a: 'Uptime monitoring alerts me, and depending on the arrangement I investigate before you have noticed. That is most of what you are paying for.',
          },
          {
            q: 'Can you maintain a site you did not build?',
            a: 'Usually. I will audit it first and tell you honestly what shape it is in, including if the honest answer is that maintaining it is throwing good money after bad.',
          },
        ],
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
        intro: [
          'Veebileht ei ole avaldamisega valmis. WordPressi tuum, pluginad ja PHP liiguvad, turvaaugud tekivad ja jõudlus halveneb vaikselt, kui sisu koguneb. Hooldus ongi vahe lehe vahel, mis kestab viis aastat, ja lehe vahel, mis tuleb kahe aastaga uuesti ehitada.',
        ],
        deliverables: [
          'WordPressi tuuma, teema ja pluginate uuendused, testitud, mitte pimesi peale pandud.',
          'Regulaarsed varukoopiad ja, mis on olulisem, kontrollitud taastamine.',
          'Turvalisuse tugevdamine ja seire.',
          'Jõudluse ja Core Web Vitalsi kontroll sisu kasvades.',
          'Kättesaadavuse seire, et kuuleksid seda minult, mitte kliendilt.',
          'Arendaja, kellele helistada, kui midagi katki läheb.',
        ],
        process: [
          {
            title: 'Uuenda testkeskkonnas',
            text: 'Uuendused lähevad kõigepealt testkoopiale. Plugina uuendus, mis lõhub ostukorvi, peaks lõhkuma testkeskkonna, mitte sinu poe.',
          },
          {
            title: 'Kontrolli ja vii üle',
            text: 'Veendu, et kriitilised teekonnad toimivad, ja alles siis vii tootmisse.',
          },
          {
            title: 'Raporteeri',
            text: 'Sulle öeldakse, mis muutus ja miks, mitte ei saadeta lihtsalt arvet.',
          },
        ],
        faq: [
          {
            q: 'Kas WordPressile on päriselt hoolduspaketti vaja?',
            a: 'Kui leht teenib sulle raha, siis jah. Aegunud pluginad on üksainus kõige levinum viis, kuidas WordPressi lehed ära hääritakse, ja koristamine maksab kordades rohkem, kui hooldus oleks maksnud.',
          },
          {
            q: 'Mis juhtub, kui leht maha läheb?',
            a: 'Kättesaadavuse seire annab mulle märku ja sõltuvalt kokkuleppest uurin asja enne, kui sina oled seda märganud. Suurem osa sellest, mille eest maksad, ongi see.',
          },
          {
            q: 'Kas saad hooldada lehte, mida sa ise ei ehitanud?',
            a: 'Tavaliselt küll. Auditeerin selle kõigepealt üle ja ütlen ausalt, mis seisus see on, sealhulgas siis, kui aus vastus on, et selle hooldamine on raha tuulde loopimine.',
          },
        ],
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
        intro: [
          'A lot of business time goes on moving information between systems by hand. Copying orders into a spreadsheet, retyping listings, answering the same question for the fiftieth time. Most of that can be automated, and the payback is usually obvious within weeks.',
          'I build the integrations and the AI pieces that do it, including custom AI chatbots that answer from your real data rather than making things up.',
        ],
        deliverables: [
          'Custom API integrations between your site and the systems you already use.',
          'AI chatbots grounded in your own content and live business data, with conversation logging and analytics.',
          'Data importers and sync jobs, such as pulling listings or events from an external feed on a schedule.',
          'Workflow automation with n8n, Zapier or custom code, depending on what is actually maintainable for you.',
          'AI API integration, Claude, GPT or Gemini, for summarising, classifying, drafting or answering.',
        ],
        process: [
          {
            title: 'Find the repetition',
            text: 'Work out which manual task costs the most hours. That is usually not the one that feels most annoying.',
          },
          {
            title: 'Automate one thing',
            text: 'Ship one automation end to end and confirm it holds up in real use before expanding.',
          },
          {
            title: 'Make it observable',
            text: 'An automation nobody can see is an automation nobody trusts. Logs, reporting and a way to tell when it breaks.',
          },
        ],
        faq: [
          {
            q: 'Will an AI chatbot make things up about my business?',
            a: 'It will if you let it. The fix is grounding: the bot answers from your actual content and live data, such as the real price list, rather than from what the model guesses. The one I built for PR Permanent PMU is fed the current prices by the theme for exactly this reason.',
          },
          {
            q: 'Which AI provider do you use?',
            a: 'Whichever fits. The chatbot plugin I built supports Claude, GPT and Gemini, because provider pricing and quality move around and being locked to one is an unnecessary risk.',
          },
          {
            q: 'Is this worth it for a small business?',
            a: 'It depends entirely on how many hours the manual version costs. If someone spends two hours a week retyping data, that is a hundred hours a year and the answer is usually yes. If it is ten minutes a month, it is not.',
          },
        ],
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
        intro: [
          'Suur osa tööajast kulub info käsitsi ühest süsteemist teise tõstmisele. Tellimuste kopeerimine tabelisse, kuulutuste ümbertrükkimine, sama küsimuse vastamine viiekümnendat korda. Suurema osa sellest saab automatiseerida ja tasuvus on tavaliselt nädalatega selge.',
          'Ehitan integratsioonid ja AI osad, mis seda teevad, sealhulgas kohandatud AI vestlusrobotid, mis vastavad sinu päris andmete põhjal, mitte ei mõtle asju välja.',
        ],
        deliverables: [
          'Kohandatud API integratsioonid sinu lehe ja juba kasutusel olevate süsteemide vahel.',
          'AI vestlusrobotid, mis tuginevad sinu enda sisule ja päris äriandmetele, koos vestluste logimise ja statistikaga.',
          'Andmeimportijad ja sünkroonitööd, näiteks kuulutuste või sündmuste tõmbamine välisest voost graafiku alusel.',
          'Töövoogude automatiseerimine n8n-i, Zapieri või kohandatud koodiga, sõltuvalt sellest, mis on sinu jaoks päriselt hallatav.',
          'AI API integratsioon, Claude, GPT või Gemini, kokkuvõtmiseks, liigitamiseks, mustandite tegemiseks või vastamiseks.',
        ],
        process: [
          {
            title: 'Leia kordus',
            text: 'Selgita välja, milline käsitöö maksab kõige rohkem tunde. Tavaliselt ei ole see see, mis kõige rohkem ärritab.',
          },
          {
            title: 'Automatiseeri üks asi',
            text: 'Vii üks automatiseering otsast lõpuni valmis ja veendu, et see päris kasutuses vastu peab, enne kui laiendad.',
          },
          {
            title: 'Tee see nähtavaks',
            text: 'Automatiseering, mida keegi ei näe, on automatiseering, mida keegi ei usalda. Logid, aruandlus ja viis aru saada, kui see katki läheb.',
          },
        ],
        faq: [
          {
            q: 'Kas AI vestlusrobot mõtleb mu äri kohta asju välja?',
            a: 'Mõtleb küll, kui lubad. Lahendus on maandamine: robot vastab sinu päris sisu ja elavate andmete, näiteks kehtiva hinnakirja põhjal, mitte selle põhjal, mida mudel arvab. Just sellepärast söödab PR Permanent PMU teema robotile ette jooksvad hinnad.',
          },
          {
            q: 'Millist AI pakkujat kasutad?',
            a: 'Seda, mis sobib. Minu ehitatud vestlusroboti plugin toetab Claude’i, GPT-d ja Geminit, sest pakkujate hinnad ja kvaliteet liiguvad ning ühe külge lukustumine on asjatu risk.',
          },
          {
            q: 'Kas see tasub väikeettevõttele ära?',
            a: 'Sõltub täielikult sellest, mitu tundi käsitsi variant maksab. Kui keegi kulutab nädalas kaks tundi andmete ümbertrükkimisele, on see sada tundi aastas ja vastus on tavaliselt jah. Kui see on kümme minutit kuus, siis ei ole.',
          },
        ],
      },
    },
  },
} satisfies Record<ServiceId, Service>;

export const allServices: Service[] = Object.values(services).sort((a, b) => a.order - b.order);

export const serviceSlug = (id: ServiceId, locale: Locale): string => services[id].slug[locale];
