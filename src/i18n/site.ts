import type { Locale } from '../data/types';

export type { Locale };

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
  pages: {
    home: string;
    workIndex: { title: string; heading: string; lede: string; eyebrow: string; metaDescription: string };
    servicesIndex: { title: string; heading: string; lede: string; eyebrow: string; metaDescription: string };
    project: {
      eyebrow: string;
      summaryLabel: string;
      challenge: string;
      solution: string;
      highlights: string;
      results: string;
      stack: string;
      faq: string;
      related: string;
      backToWork: string;
      visitSite: string;
      facts: { client: string; year: string; role: string; live: string; services: string };
    };
    service: {
      eyebrow: string;
      whatsIncluded: string;
      process: string;
      faq: string;
      proof: string;
      allServices: string;
    };
    cta: { title: string; text: string; button: string };
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

export const agencyMeta = [
  { name: 'Reaktiiv', href: 'https://reaktiiv.com/tood/' },
  { name: 'vDisain', href: 'https://vdisain.ee/referentsid/' },
];

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    locale: 'en',
    meta: {
      lang: 'en',
      title: 'Risto Tõldsep - WordPress Web Developer & Designer, Estonia',
      description:
        'Risto Tõldsep is a freelance web developer and designer in Tallinn, Estonia. Custom websites, WordPress and WooCommerce stores, interactive frontends and AI-powered web tools.',
      keywords:
        'risto toldsep, freelance web developer estonia, web designer estonia, wordpress developer estonia, woocommerce developer, custom websites, veebiarendaja tallinn, veebidisainer, kodulehe tegija, kodulehtede tegemine',
      ogTitle: 'Risto Tõldsep - WordPress Web Developer & Designer, Estonia',
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
      role: 'Web Developer & Designer',
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
      role: 'Web Developer & Designer',
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
      title: '<em>Web developer</em><br>& designer for<br>custom websites.',
      subtitle:
        "I'm Risto Tõldsep, a web developer and designer in Tallinn, Estonia. 5+ years designing and building custom websites, WordPress and WooCommerce stores, interactive frontends, and AI-powered web tools. Full-time and freelance.",
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
    },
    skills: {
      eyebrow: 'Resume',
      title: 'My Skills &amp; Tech Stack',
      text: 'The tools and technologies I use to bring ideas to life - from concept to production.',
      categories: [
        { icon: '⟨/⟩', title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Astro', 'GSAP'] },
        { icon: '{ }', title: 'Backend', items: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'PostgreSQL', 'Firebase', 'REST APIs'] },
        { icon: '◈', title: 'CMS &amp; eCommerce', items: ['WordPress', 'WooCommerce', 'Headless CMS', 'Custom Themes', 'Custom Plugins'] },
        { icon: '✦', title: 'Tools &amp; Other', items: ['Git', 'Jira', 'Bitbucket', 'Figma', 'Technical SEO', 'AI APIs', 'n8n', 'Zapier', 'Analytics', 'Google Ads'] },
        { icon: '◎', title: 'Expertise', items: ['Web Applications', 'Web Development', 'Full-Stack Development', 'Front-end Development', 'Back-End Web Development', 'Web Design'] },
        { icon: '✧', title: 'Leadership &amp; Strategy', items: ['Team Leadership', 'Team Management', 'Strategic Planning'] },
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
    pages: {
      home: 'Home',
      workIndex: {
        eyebrow: 'Case Studies',
        title: 'Web Development Case Studies | Risto Tõldsep',
        heading: 'Websites and web apps I have designed and built',
        lede: 'Custom WordPress and WooCommerce builds, Laravel and Vue applications, and interactive frontends for clients in Estonia and beyond. Each one below is a real project with the stack and the details.',
        metaDescription: 'Case studies from Risto Tõldsep, a web developer and designer in Tallinn, Estonia: custom WordPress and WooCommerce stores, Laravel and Vue apps, and interactive frontends.',
      },
      servicesIndex: {
        eyebrow: 'Services',
        title: 'Web Development & Design Services in Estonia | Risto Tõldsep',
        heading: 'What I can do for you',
        lede: 'Design, development, eCommerce, SEO and automation, delivered by one person who does all of it rather than handing you between departments.',
        metaDescription: 'Web design, full-stack development, WordPress and WooCommerce, technical SEO, maintenance and automation services from a freelance developer in Tallinn, Estonia.',
      },
      project: {
        eyebrow: 'Case Study',
        summaryLabel: 'In short',
        challenge: 'The challenge',
        solution: 'What I built',
        highlights: 'Technical highlights',
        results: 'Results',
        stack: 'Tech stack',
        faq: 'Frequently asked questions',
        related: 'Related projects',
        backToWork: '<- All case studies',
        visitSite: 'Visit the live site ->',
        facts: { client: 'Client', year: 'Year', role: 'My role', live: 'Live site', services: 'Services' },
      },
      service: {
        eyebrow: 'Service',
        whatsIncluded: "What's included",
        process: 'How it works',
        faq: 'Frequently asked questions',
        proof: 'Recent work',
        allServices: '<- All services',
      },
      cta: {
        title: 'Got a project in mind?',
        text: 'Tell me what you are building and I will tell you honestly whether I am the right person for it.',
        button: "Let's talk ->",
      },
    },
  },
  et: {
    locale: 'et',
    meta: {
      lang: 'et',
      title: 'Risto Tõldsep - veebiarendaja ja disainer, kodulehed',
      description:
        'Risto Tõldsep on Tallinnas tegutsev vabakutseline veebiarendaja ja disainer. Teen kohandatud kodulehti, WordPressi ja WooCommerce e-poode, interaktiivseid liideseid ja AI-põhiseid veebilahendusi.',
      keywords:
        'risto toldsep, veebiarendaja tallinn, veebidisainer, kodulehe tegija, kodulehe tegemine, kodulehtede tegemine, wordpress arendaja eesti, woocommerce arendaja, vabakutseline veebiarendaja, e-poe tegemine',
      ogTitle: 'Risto Tõldsep - veebiarendaja ja disainer, kodulehed',
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
      role: 'Veebiarendaja ja disainer',
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
      role: 'Veebiarendaja ja disainer',
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
      title: '<em>Veebiarendaja</em><br>ja disainer, kes<br>teeb kodulehti.',
      subtitle:
        "Olen Risto Tõldsep, veebiarendaja ja disainer Tallinnas. 5+ aastat kogemust kodulehtede ja e-poodide disainimisel ning arendamisel - kohandatud WordPressi ja WooCommerce'i lahendused, interaktiivsed liidesed ja AI-põhised veebitööriistad. Täiskohaga ja vabakutseliselt.",
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
    },
    skills: {
      eyebrow: 'Kokkuvõte',
      title: 'Minu oskused ja tehnoloogiad',
      text: 'Tööriistad ja tehnoloogiad, millega toon ideed ellu - kontseptsioonist tootmiskeskkonnani.',
      categories: [
        { icon: '⟨/⟩', title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js', 'Astro', 'GSAP'] },
        { icon: '{ }', title: 'Backend', items: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'PostgreSQL', 'Firebase', 'REST APIs'] },
        { icon: '◈', title: 'CMS ja e-kaubandus', items: ['WordPress', 'WooCommerce', 'Headless CMS', 'Custom Themes', 'Custom Plugins'] },
        { icon: '✦', title: 'Tööriistad ja muu', items: ['Git', 'Jira', 'Bitbucket', 'Figma', 'Technical SEO', 'AI APIs', 'n8n', 'Zapier', 'Analytics', 'Google Ads'] },
        { icon: '◎', title: 'Valdkonnad', items: ['Veebirakendused', 'Veebiarendus', 'Full-Stack arendus', 'Front-end arendus', 'Back-end arendus', 'Veebidisain'] },
        { icon: '✧', title: 'Juhtimine ja strateegia', items: ['Tiimi eestvedamine', 'Meeskonna juhtimine', 'Strateegiline planeerimine'] },
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
    pages: {
      home: 'Avaleht',
      workIndex: {
        eyebrow: 'Juhtumiuuringud',
        title: 'Tehtud tööd ja juhtumiuuringud | Risto Tõldsep',
        heading: 'Kodulehed ja veebirakendused, mille olen disaininud ja ehitanud',
        lede: 'Kohandatud WordPressi ja WooCommerce lahendused, Laraveli ja Vue rakendused ning interaktiivsed kasutajaliidesed Eesti ja välisklientidele. Iga töö all on päris projekt koos tehnoloogiate ja detailidega.',
        metaDescription: 'Risto Tõldsepa tehtud tööd: kohandatud WordPressi ja WooCommerce kodulehed ja e-poed, Laraveli ja Vue rakendused ning interaktiivsed liidesed Tallinnast.',
      },
      servicesIndex: {
        eyebrow: 'Teenused',
        title: 'Veebiarenduse ja disaini teenused Eestis | Risto Tõldsep',
        heading: 'Mida saan sinu jaoks teha',
        lede: 'Disain, arendus, e-kaubandus, SEO ja automatiseerimine ühelt inimeselt, kes teeb neid kõiki, mitte ei suuna sind osakondade vahel edasi.',
        metaDescription: 'Veebidisain, full-stack arendus, WordPress ja WooCommerce, tehniline SEO, hooldus ja automatiseerimine vabakutseliselt veebiarendajalt Tallinnas.',
      },
      project: {
        eyebrow: 'Juhtumiuuring',
        summaryLabel: 'Lühidalt',
        challenge: 'Väljakutse',
        solution: 'Mida ma ehitasin',
        highlights: 'Tehnilised detailid',
        results: 'Tulemused',
        stack: 'Tehnoloogiad',
        faq: 'Korduma kippuvad küsimused',
        related: 'Seotud projektid',
        backToWork: '<- Kõik tööd',
        visitSite: 'Ava päris leht ->',
        facts: { client: 'Klient', year: 'Aasta', role: 'Minu roll', live: 'Veebileht', services: 'Teenused' },
      },
      service: {
        eyebrow: 'Teenus',
        whatsIncluded: 'Mis sisaldub',
        process: 'Kuidas see käib',
        faq: 'Korduma kippuvad küsimused',
        proof: 'Hiljutised tööd',
        allServices: '<- Kõik teenused',
      },
      cta: {
        title: 'Mõlgub mõtteid projektist?',
        text: 'Räägi, mida ehitad, ja ütlen ausalt, kas olen selle jaoks õige inimene.',
        button: 'Räägime ->',
      },
    },
  },
};
