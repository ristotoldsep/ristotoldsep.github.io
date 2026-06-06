export type Locale = 'en' | 'et';

export interface SocialLink {
  href: string;
  title: string;
  icon: string;
}

export interface SiteCopy {
  locale: Locale;
  meta: {
    lang: Locale;
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    switchLanguageLabel: string;
  };
  nav: {
    homeAriaLabel: string;
    links: {
      home: string;
      work: string;
      about: string;
      skills: string;
      contact: string;
    };
    contactCta: string;
    openMenuLabel: string;
  };
  sidebar: {
    photoAlt: string;
    role: string;
    data: Array<{ label: string; value: string }>;
    cta: string;
    navAriaLabel: string;
  };
  mobileProfile: {
    photoAlt: string;
    role: string;
    availability: string;
    stats: Array<{ label: string; value: string }>;
    cta: string;
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    scrollLabel: string;
    rotatingText: string;
  };
  marquee: string[];
  work: {
    eyebrow: string;
    title: string;
    githubCta: string;
    projects: Array<{
      name: string;
      imageAlt: string;
      description: string;
      cta: string;
    }>;
  };
  agency: {
    eyebrow: string;
    title: string;
    text: string;
    items: Array<{
      badge: string;
      description: string;
      cta: string;
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    achievements: Array<{ value: string; label: string }>;
    paragraphs: string[];
    linkedinCta: string;
    projectCta: string;
    info: Array<{ label: string; value: string; type?: 'text' | 'email' | 'badge' }>;
    servicesEyebrow: string;
    servicesTitle: string;
    services: Array<{
      title: string;
      text: string;
      tags: string[];
    }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    text: string;
    categories: Array<{
      icon: string;
      title: string;
      items: string[];
    }>;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  ctaFull: {
    eyebrow: string;
    title: string;
    text: string;
    emailCta: string;
    linkedinCta: string;
  };
  footer: {
    copy: string;
    top: string;
  };
}

export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/risto-toldsep',
    title: 'LinkedIn',
    icon:
      '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
  },
  {
    href: 'https://github.com/ristotoldsep',
    title: 'GitHub',
    icon:
      '<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>',
  },
  {
    href: 'https://www.instagram.com/ristotoldsep/',
    title: 'Instagram',
    icon:
      '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>',
  },
  {
    href: 'https://www.facebook.com/risto.toldsep/',
    title: 'Facebook',
    icon:
      '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
  },
];

export const workProjectMeta = [
  {
    image: '/images/projects/clarte.avif',
    tags: ['WooCommerce', 'ACF Blocks', 'Tailwind'],
    href: 'https://clarte.ee/',
  },
  {
    image: '/images/uusloo.webp',
    tags: ['Laravel', 'Vue', 'Inertia.js'],
    href: 'https://uusloo.hausers.ee/',
  },
  {
    image: '/images/snabb.webp',
    tags: ['WordPress', 'Elementor', 'PHP'],
    href: 'https://snabb.xyz/',
  },
  {
    image: '/images/ribaana.webp',
    tags: ['WordPress', 'ACF', 'Tailwind'],
    href: 'https://ribaanahorm.ee/',
  },
  {
    image: '/images/qi.webp',
    tags: ['Astro', 'Decap CMS', 'GSAP'],
    href: 'https://qinutritionist.com/',
  },
  {
    image: '/images/serenesleep.webp',
    tags: ['WooCommerce', 'Custom Theme', 'eCommerce'],
    href: 'https://serenesleep.ee/',
  },
  {
    image: '/images/kutimetsa.avif',
    tags: ['WordPress', 'ACF Blocks', 'Tailwind'],
    href: 'https://kutimetsa.hausers.ee/',
  },
];

export const agencyMeta = [
  { name: 'Reaktiiv', href: 'https://reaktiiv.com/tood/' },
  { name: 'vDisain', href: 'https://vdisain.ee/referentsid/' },
];

export const serviceAccents = [
  'rgba(196,154,60,0.18)',
  'rgba(80,130,255,0.12)',
  'rgba(60,200,120,0.10)',
  'rgba(255,160,60,0.12)',
  'rgba(0,200,200,0.10)',
  'rgba(180,80,255,0.12)',
];

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    locale: 'en',
    meta: {
      lang: 'en',
      title: 'Risto Tõldsep - Full Stack Developer',
      description:
        'Risto Tõldsep - Full Stack Web Developer based in Tallinn, Estonia. 5+ years building web apps, eCommerce, AI tools and more.',
      keywords:
        'risto toldsep, freelance web developer, full stack developer, portfolio, wordpress, react, seo, ai, automation',
      ogTitle: 'Risto Tõldsep - Full Stack Developer',
      switchLanguageLabel: 'Switch to Estonian',
    },
    nav: {
      homeAriaLabel: 'Home',
      links: { home: 'Home', work: 'Work', about: 'About', skills: 'Skills', contact: 'Contact' },
      contactCta: 'Get in Touch',
      openMenuLabel: 'Open menu',
    },
    sidebar: {
      photoAlt: 'Risto Tõldsep - Full Stack Developer',
      role: 'Full Stack Developer',
      data: [
        { label: 'Specialization', value: 'Web Apps & eCommerce' },
        { label: 'Based in', value: 'Tallinn, Estonia' },
        { label: 'Experience', value: '5+ Years' },
        { label: 'Status', value: 'Open for freelance' },
      ],
      cta: "Let's Work Together!",
      navAriaLabel: 'Site navigation',
    },
    mobileProfile: {
      photoAlt: 'Risto Tõldsep',
      role: 'Full Stack Developer',
      availability: 'Open to work',
      stats: [
        { label: 'Experience', value: '5+ Years' },
        { label: 'Location', value: 'Tallinn, Estonia' },
        { label: 'Specialization', value: 'Web & eCommerce' },
      ],
      cta: "Let's Work Together!",
    },
    home: {
      eyebrow: 'Available for new projects',
      title: 'I build powerful<br>web <em>experiences.</em>',
      subtitle:
        '5+ years crafting fast, scalable, and beautiful web applications - from sleek marketing sites to complex eCommerce platforms and AI-powered tools. Full-time and freelance.',
      primaryCta: 'View My Work',
      secondaryCta: "Let's Talk ->",
      scrollLabel: 'Scroll to work',
      rotatingText: 'Scroll for More * Scroll for More * ',
    },
    marquee: [
      'Full Stack Development',
      'Web & UI/UX Design',
      'WordPress & WooCommerce',
      'eCommerce Solutions',
      'AI Integrations',
      'Custom Web Apps',
      'Technical SEO',
      'Laravel & PHP',
      'Automation & APIs',
    ],
    work: {
      eyebrow: 'Portfolio',
      title: 'Check out some of my featured projects',
      githubCta: 'View All Projects on GitHub ->',
      projects: [
        {
          name: 'Clarte',
          imageAlt: 'Clarte - Premium Skincare WooCommerce Store',
          description:
            'Custom WooCommerce store for a premium skincare brand - fully custom WordPress theme with ACF Gutenberg blocks, Tailwind CSS, and a Vite-built per-block asset pipeline. Features GSAP animations, Swiper sliders, and Lenis smooth scrolling. Fully multilingual via WPML (content, strings, and media) for international reach. Integrated GTM, GA4, Google Search Console, Microsoft Clarity, and Meta Pixel with custom event tracking for lead generation and customer behaviour analysis.',
          cta: 'Visit Site ->',
        },
        {
          name: 'Uusloo',
          imageAlt: 'Uusloo - Full Stack Laravel and Vue',
          description:
            'Full stack custom website built with a Laravel backend and Vue frontend connected via Inertia - seamless SPA experience with server-side power.',
          cta: 'Visit Site ->',
        },
        {
          name: 'Snabb',
          imageAlt: 'Snabb - Parking and EV App',
          description:
            'Unified parking, car wash & EV charging platform - custom Elementor widgets built with PHP for a seamless drag-and-drop editing experience. 85,000+ users, 250+ locations.',
          cta: 'Visit Site ->',
        },
        {
          name: 'Ribaana Horm',
          imageAlt: 'Ribaana Horm - Real Estate',
          description:
            'Fully custom PHP WordPress theme for an Estonian real estate broker - built with ACF blocks and Tailwind CSS, conversion-focused and pixel-perfect.',
          cta: 'Visit Site ->',
        },
        {
          name: 'QiNutritionist',
          imageAlt: 'QiNutritionist - Wellness',
          description:
            'Multi-language static site (EN/ET/ES) with a git-based CMS for client content editing and automated deploys via GitHub Actions.',
          cta: 'Visit Site ->',
        },
        {
          name: 'Serene Sleep',
          imageAlt: 'Serene Sleep - Luxury Bedding',
          description:
            'Custom WooCommerce e-store for luxury silk bedding - premium brand identity, refined UX, and OEKO-TEX certified product showcase built for conversion.',
          cta: 'Visit Site ->',
        },
        {
          name: 'Kütimetsa',
          imageAlt: 'Kütimetsa - Real Estate Development',
          description:
            'Sales landing page for a boutique 12-home townhouse development in Peetri - designed from scratch and built as a custom WordPress theme with ACF blocks, Tailwind CSS, and a Vite-built per-block asset pipeline. Conversion-focused and pixel-perfect.',
          cta: 'Visit Site ->',
        },
      ],
    },
    agency: {
      eyebrow: 'Agency Work',
      title: 'The best products are built with great teams',
      text:
        "Beyond personal projects, I've contributed to hundreds of client builds at two of Tallinn's top digital studios - as a full-time developer and as a collaborator, participating in planning, design, development, and execution.",
      items: [
        {
          badge: 'Current',
          description:
            'Tallinn-based digital agency specialising in web design, development, and branding for Baltic and international clients. I work here full-time building high-quality web products.',
          cta: 'View their work ->',
        },
        {
          badge: 'Previous',
          description:
            'Creative digital studio where I spent several years building custom websites, eCommerce solutions, and brand experiences for Estonian and international clients across Europe and beyond.',
          cta: 'View their references ->',
        },
      ],
    },
    about: {
      eyebrow: 'About Me',
      title: '5+ years turning ideas into working software',
      achievements: [
        { value: '5+', label: 'Years full-time' },
        { value: '250+', label: 'Projects worked on' },
      ],
      paragraphs: [
        "I'm a Full Stack Web Developer based in Tallinn, Estonia, with over 5 years of hands-on experience building web applications, eCommerce stores, and digital tools - working both full-time and as a freelancer.",
        'I graduated from Tallinn University of Technology with a Bachelor in Computer Systems Engineering, and have since built everything from pixel-perfect marketing sites to complex multi-language stores, custom CMS platforms, REST APIs, and AI-powered workflow automations.',
        "<strong>I care deeply about code quality, performance, and real business results. If you need a website that actually converts, a web app built to scale, or someone to eliminate your team's repetitive work through automation - that's exactly what I do.</strong>",
      ],
      linkedinCta: 'View LinkedIn ->',
      projectCta: 'Start a Project ->',
      info: [
        { label: 'Name', value: 'Risto Tõldsep' },
        { label: 'Email', value: 'ristotoldsep@gmail.com', type: 'email' },
        { label: 'Location', value: 'Tallinn, Estonia' },
        { label: 'Freelance', value: 'Available', type: 'badge' },
      ],
      servicesEyebrow: 'Services',
      servicesTitle: 'What I can do for you',
      services: [
        {
          title: 'Web Design<br>&amp; UI/UX',
          text: 'Beautiful, conversion-focused interfaces designed from scratch. Clean layouts, strong typography, and experiences users actually enjoy.',
          tags: ['Custom Design', 'Figma'],
        },
        {
          title: 'Full Stack<br>Development',
          text: 'End-to-end web application development - from database design and APIs to polished front-end interfaces. Built to scale, built to last.',
          tags: ['React', 'PHP / Node.js'],
        },
        {
          title: 'WordPress<br>&amp; eCommerce',
          text: 'Custom themes, plugins, and complete online stores. Multi-language, multi-currency, high-performance shops that convert browsers into buyers.',
          tags: ['WordPress', 'WooCommerce'],
        },
        {
          title: 'SEO, AEO, GEO &amp;<br>Digital Marketing',
          text: 'Rank higher and get found — in search engines and AI tools. Technical SEO audits, Core Web Vitals improvements, full analytics setup (GTM, GA4, Google Search Console, Microsoft Clarity, Meta Pixel with custom event tracking), and Google & Meta ad campaigns. AEO (Answer Engine Optimization) puts your content in AI answer boxes and voice search results; GEO (Generative Engine Optimization) gets tools like ChatGPT and Perplexity to surface and cite your business. All data-driven.',
          tags: ['Technical SEO', 'AEO / GEO'],
        },
        {
          title: 'Maintenance<br>&amp; Support',
          text: 'Ongoing care for your website - updates, backups, security hardening, speed optimization, and a developer to call when something breaks.',
          tags: ['Updates', 'Security'],
        },
        {
          title: 'API Integrations<br>&amp; Automations',
          text: "AI solutions, pipelines, smart workflows with digital tools and integrations. Eliminate the repetitive work that eats your team's time.",
          tags: ['AI Tools', 'Workflows'],
        },
      ],
    },
    skills: {
      eyebrow: 'Resume',
      title: 'My Skills &amp; Tech Stack',
      text: 'The tools and technologies I use to bring ideas to life - from concept to production.',
      categories: [
        { icon: '⟨/⟩', title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Astro', 'GSAP'] },
        { icon: '{ }', title: 'Backend', items: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'PostgreSQL', 'Firebase', 'REST APIs'] },
        { icon: '◈', title: 'CMS &amp; eCommerce', items: ['WordPress', 'WooCommerce', 'Headless CMS', 'Custom Themes', 'Custom Plugins'] },
        { icon: '✦', title: 'Tools &amp; Other', items: ['Git', 'Figma', 'Technical SEO', 'AI APIs', 'n8n', 'Zapier', 'Analytics'] },
      ],
      cta: 'Start a Project ->',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's start a project together",
      text: "Have a project in mind? Looking for a developer who actually cares about the outcome? Let's talk.",
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'Tallinn, Estonia',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email',
        emailPlaceholder: 'your@email.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send Message ->',
      },
    },
    ctaFull: {
      eyebrow: 'Get in touch',
      title: 'Want to know more about me, tell me about your <em>project</em>, or just say hello?',
      text: "Drop me a line and I'll get back to you as soon as possible.",
      emailCta: 'Drop me a Line ->',
      linkedinCta: 'Connect on LinkedIn ->',
    },
    footer: {
      copy: 'Risto Tõldsep. All rights reserved.',
      top: 'Top',
    },
  },
  et: {
    locale: 'et',
    meta: {
      lang: 'et',
      title: 'Risto Tõldsep - Full Stack arendaja',
      description:
        'Risto Tõldsep - Tallinnas tegutsev Full Stack veebiarendaja. 5+ aastat kogemust veebirakenduste, e-poe lahenduste, AI tööriistade ja muu loomisel.',
      keywords:
        'risto toldsep, veebiarendaja, full stack arendaja, portfoolio, wordpress, react, seo, tehisintellekt, automatiseerimine',
      ogTitle: 'Risto Tõldsep - Full Stack arendaja',
      switchLanguageLabel: 'Switch to English',
    },
    nav: {
      homeAriaLabel: 'Avaleht',
      links: { home: 'Avaleht', work: 'Tööd', about: 'Minust', skills: 'Oskused', contact: 'Kontakt' },
      contactCta: 'Võta ühendust',
      openMenuLabel: 'Ava menüü',
    },
    sidebar: {
      photoAlt: 'Risto Tõldsep - Full Stack arendaja',
      role: 'Full Stack arendaja',
      data: [
        { label: 'Spetsialiseerumine', value: 'Veebirakendused ja e-kaubandus' },
        { label: 'Asukoht', value: 'Tallinn, Eesti' },
        { label: 'Kogemus', value: '5+ aastat' },
        { label: 'Staatus', value: 'Avatud vabakutseliseks tööks' },
      ],
      cta: 'Teeme koostööd!',
      navAriaLabel: 'Lehe navigatsioon',
    },
    mobileProfile: {
      photoAlt: 'Risto Tõldsep',
      role: 'Full Stack arendaja',
      availability: 'Avatud uutele projektidele',
      stats: [
        { label: 'Kogemus', value: '5+ aastat' },
        { label: 'Asukoht', value: 'Tallinn, Eesti' },
        { label: 'Fookus', value: 'Veeb ja e-kaubandus' },
      ],
      cta: 'Teeme koostööd!',
    },
    home: {
      eyebrow: 'Avatud uutele projektidele',
      title: 'Loon võimsaid<br>veebi- <em>kogemusi.</em>',
      subtitle:
        '5+ aastat kogemust kiirete, skaleeruvate ja visuaalselt läbimõeldud veebilahenduste loomisel - alates turunduslehtedest kuni keerukate e-kaubanduse platvormide ja AI tööriistadeni. Täiskohaga ja vabakutseliselt.',
      primaryCta: 'Vaata töid',
      secondaryCta: 'Räägime ->',
      scrollLabel: 'Keri töödeni',
      rotatingText: 'Keri edasi * Keri edasi * Keri edasi * ',
    },
    marquee: [
      'Full Stack arendus',
      'Veebi- ja UI/UX disain',
      'WordPress ja WooCommerce',
      'E-kaubanduse lahendused',
      'AI integratsioonid',
      'Kohandatud veebirakendused',
      'Tehniline SEO',
      'Laravel ja PHP',
      'Automatiseerimine ja API-d',
    ],
    work: {
      eyebrow: 'Portfoolio',
      title: 'Vaata mõningaid minu esile tõstetud projekte',
      githubCta: 'Vaata kõiki projekte GitHubis ->',
      projects: [
        {
          name: 'Clarte',
          imageAlt: 'Clarte - premium nahahoolduse WooCommerce e-pood',
          description:
            'Kohandatud WooCommerce e-pood premium nahahoolduse brändile - täielikult kohandatud WordPressi teema ACF Gutenbergi plokkide ja Tailwind CSS-iga, kus iga ploki varad ehitatakse Vite kaudu. Sisaldab GSAP animatsioone, Swiperi slaidereid ja Lenise sujuvat kerimist. Täielikult mitmekeelne WPML-i kaudu (sisu, stringid ja meedia), et jõuda rahvusvahelise publikuni. Integreeritud GTM, GA4, Google Search Console, Microsoft Clarity ja Meta Pixel kohandatud sündmusejälgimisega müügivihjete genereerimiseks ja kliendiharjumuste analüüsimiseks.',
          cta: 'Ava leht ->',
        },
        {
          name: 'Uusloo',
          imageAlt: 'Uusloo - Full Stack Laravel ja Vue',
          description:
            'Täislahendusena loodud veebileht Laraveli backendiga ja Vue frontendiga, ühendatud Inertia kaudu - sujuv SPA kogemus koos serveripoole võimekusega.',
          cta: 'Ava leht ->',
        },
        {
          name: 'Snabb',
          imageAlt: 'Snabb - parkimise ja EV rakendus',
          description:
            'Ühtne parkimise, autopesu ja elektriautode laadimise platvorm - PHP-ga ehitatud kohandatud Elementor vidinad sujuvaks drag-and-drop halduseks. 85 000+ kasutajat, 250+ asukohta.',
          cta: 'Ava leht ->',
        },
        {
          name: 'Ribaana Horm',
          imageAlt: 'Ribaana Horm - kinnisvara',
          description:
            'Täielikult kohandatud PHP WordPressi teema Eesti kinnisvaramaaklerile - ehitatud ACF plokkide ja Tailwind CSS-iga, konversioonile suunatud ja pikslitäpne.',
          cta: 'Ava leht ->',
        },
        {
          name: 'QiNutritionist',
          imageAlt: 'QiNutritionist - heaolu',
          description:
            'Mitmekeelne staatiline veebileht (EN/ET/ES) git-põhise CMS-iga kliendipoolseks sisuhalduseks ja automatiseeritud deploydega GitHub Actionsi kaudu.',
          cta: 'Ava leht ->',
        },
        {
          name: 'Serene Sleep',
          imageAlt: 'Serene Sleep - luksuslik voodipesu',
          description:
            'Kohandatud WooCommerce e-pood luksuslikule siidvoodipesule - premium brändiidentiteet, läbimõeldud kasutuskogemus ja OEKO-TEX sertifikaadiga toodete esitlus, loodud müüki toetama.',
          cta: 'Ava leht ->',
        },
        {
          name: 'Kütimetsa',
          imageAlt: 'Kütimetsa - kinnisvaraarendus',
          description:
            'Müügileht 12 ridaelamu kodu boutique-arendusele Peetris - täielikult ise nullist disainitud ja ehitatud kohandatud WordPressi teemana ACF plokkide ja Tailwind CSS-iga, kus iga ploki varad ehitatakse Vite kaudu eraldi. Müügile suunatud ja pikslitäpne.',
          cta: 'Ava leht ->',
        },
      ],
    },
    agency: {
      eyebrow: 'Agentuuritöö',
      title: 'Parimad tooted sünnivad tugevate tiimidega',
      text:
        'Lisaks isiklikele projektidele olen panustanud sadadesse kliendiprojektidesse kahes Tallinna tipp-digistuudios - nii täiskohaga arendajana kui ka koostööpartnerina, osaledes planeerimises, disainis, arenduses ja teostuses.',
      items: [
        {
          badge: 'Praegu',
          description:
            'Tallinnas tegutsev digiagentuur, mis keskendub veebidisainile, arendusele ja brändingule Baltikumi ning rahvusvahelistele klientidele. Töötan siin täiskohaga ja ehitan kvaliteetseid veebitooteid.',
          cta: 'Vaata nende töid ->',
        },
        {
          badge: 'Varem',
          description:
            'Loov digistuudio, kus veetsin mitu aastat ehitades kohandatud veebilehti, e-kaubanduse lahendusi ja brändikogemusi Eesti ning rahvusvahelistele klientidele üle Euroopa ja kaugemale.',
          cta: 'Vaata nende referentse ->',
        },
      ],
    },
    about: {
      eyebrow: 'Minust',
      title: '5+ aastat ideede muutmist töötavaks tarkvaraks',
      achievements: [
        { value: '5+', label: 'Aastat täiskohaga' },
        { value: '250+', label: 'Projekti, mille kallal töötanud' },
      ],
      paragraphs: [
        'Olen Tallinnas tegutsev Full Stack veebiarendaja, kellel on üle 5 aasta praktilist kogemust veebirakenduste, e-poodide ja digitaalsete tööriistade loomisel - nii täiskohaga kui ka vabakutselisena.',
        'Lõpetasin TalTechi arvutisüsteemide eriala bakalaureusega ning olen seejärel loonud kõike alates pikslitäpsetest turunduslehtedest kuni keerukate mitmekeelsete poodide, kohandatud CMS-platvormide, REST API-de ja AI-põhiste töövooautomaatikateni.',
        '<strong>Pean väga oluliseks koodi kvaliteeti, jõudlust ja päris ärilisi tulemusi. Kui vajad veebilehte, mis päriselt konverteerib, skaleeritavat veebirakendust või kedagi, kes eemaldaks sinu tiimi korduva käsitöö automatiseerimise abil - võta minuga julgelt ühendust.</strong>',
      ],
      linkedinCta: 'Vaata LinkedIni ->',
      projectCta: 'Alusta projektiga ->',
      info: [
        { label: 'Nimi', value: 'Risto Tõldsep' },
        { label: 'E-post', value: 'ristotoldsep@gmail.com', type: 'email' },
        { label: 'Asukoht', value: 'Tallinn, Eesti' },
        { label: 'Vabakutseline', value: 'Saadaval', type: 'badge' },
      ],
      servicesEyebrow: 'Teenused',
      servicesTitle: 'Mida saan sinu jaoks teha',
      services: [
        {
          title: 'Veebidisain<br>&amp; UI/UX',
          text: 'Kaunid ja konversioonile suunatud kasutajaliidesed, disainitud nullist. Puhtad paigutused, tugev tüpograafia ja kogemused, mida kasutajad päriselt naudivad.',
          tags: ['Custom Design', 'Figma'],
        },
        {
          title: 'Full Stack<br>arendus',
          text: 'Veebirakenduste täistsükli arendus - alates andmebaasidest ja API-dest kuni viimistletud frontendideni. Ehitatud kasvama ja kestma.',
          tags: ['React', 'PHP / Node.js'],
        },
        {
          title: 'WordPress<br>&amp; e-kaubandus',
          text: 'Kohandatud teemad, pluginad ja terviklikud veebipoed. Mitmekeelsed, mitme valuutaga ja suure jõudlusega lahendused, mis muudavad külastajad ostjateks.',
          tags: ['WordPress', 'WooCommerce'],
        },
        {
          title: 'SEO, AEO, GEO &amp;<br>Digital Marketing',
          text: 'Tõuse otsingutulemustes kõrgemale ja ole leitav — ka tehisintellektis. Tehnilised SEO auditid, Core Web Vitals parandused, terviklik analüütika seadistus (GTM, GA4, Google Search Console, Microsoft Clarity, Meta Pixel kohandatud sündmusejälgimisega) ning Google ja Meta reklaamikampaaniad. AEO (Answer Engine Optimization) toob sinu sisu tehisintellekti vastuseboksidesse ja häälotsingutesse; GEO (Generative Engine Optimization) tagab, et tööriistad nagu ChatGPT ja Perplexity sinu ettevõtet esile tõstavad ja tsiteerivad. Kõik andmepõhiselt.',
          tags: ['Technical SEO', 'AEO / GEO'],
        },
        {
          title: 'Hooldus<br>&amp; tugi',
          text: 'Sinu veebilehe pidev hooldus - uuendused, varukoopiad, turvalisuse tugevdamine, kiiruse optimeerimine ja arendaja, kellele helistada, kui midagi katki läheb.',
          tags: ['Updates', 'Security'],
        },
        {
          title: 'API integratsioonid<br>&amp; automatsioonid',
          text: 'AI lahendused, töövood ja nutikad integratsioonid digitaalsete tööriistade vahel. Eemaldan korduva töö, mis sinu tiimi aega sööb.',
          tags: ['AI Tools', 'Workflows'],
        },
      ],
    },
    skills: {
      eyebrow: 'Kokkuvõte',
      title: 'Minu oskused ja tehnoloogiad',
      text: 'Tööriistad ja tehnoloogiad, millega toon ideed ellu - kontseptsioonist tootmiskeskkonnani.',
      categories: [
        { icon: '⟨/⟩', title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Astro', 'GSAP'] },
        { icon: '{ }', title: 'Backend', items: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'PostgreSQL', 'Firebase', 'REST APIs'] },
        { icon: '◈', title: 'CMS ja e-kaubandus', items: ['WordPress', 'WooCommerce', 'Headless CMS', 'Custom Themes', 'Custom Plugins'] },
        { icon: '✦', title: 'Tööriistad ja muu', items: ['Git', 'Figma', 'Technical SEO', 'AI APIs', 'n8n', 'Zapier', 'Analytics'] },
      ],
      cta: 'Alusta projektiga ->',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Alustame koos uut projekti',
      text: 'Kas sul on projekt mõttes? Otsid arendajat, kes päriselt hoolib tulemusest? Räägime.',
      emailLabel: 'E-post',
      locationLabel: 'Asukoht',
      locationValue: 'Tallinn, Eesti',
      form: {
        nameLabel: 'Nimi',
        namePlaceholder: 'Sinu täisnimi',
        emailLabel: 'E-post',
        emailPlaceholder: 'sinu@email.com',
        messageLabel: 'Sõnum',
        messagePlaceholder: 'Räägi mulle oma projektist...',
        submit: 'Saada sõnum ->',
      },
    },
    ctaFull: {
      eyebrow: 'Võta ühendust',
      title: 'Tahad minust rohkem teada, rääkida oma <em>projektist</em> või lihtsalt tere öelda?',
      text: 'Kirjuta mulle ja vastan sulle esimesel võimalusel.',
      emailCta: 'Kirjuta mulle ->',
      linkedinCta: 'Võta LinkedInis ühendust ->',
    },
    footer: {
      copy: 'Risto Tõldsep. Kõik õigused kaitstud.',
      top: 'Üles',
    },
  },
};
