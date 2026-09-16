import type { Locale } from '../data/types';
import { publishedProjects } from '../data/projects';
import { allServices } from '../data/services';
import { caseStudies } from '../data/case-studies';
import { siteCopy, socialLinks } from '../i18n/site';
import { routes } from './routes';
import { PERSON_DESCRIPTION } from './schema';

const STRINGS = {
  role: { en: 'Web Developer & Designer', et: 'Veebiarendaja ja disainer' },
  overview: { en: 'Overview', et: 'Ülevaade' },
  services: { en: 'Services', et: 'Teenused' },
  caseStudies: { en: 'Case studies', et: 'Juhtumiuuringud' },
  stack: { en: 'Tech stack', et: 'Tehnoloogiad' },
  contact: { en: 'Contact', et: 'Kontakt' },
  optional: { en: 'Optional', et: 'Lisaks' },
  challenge: { en: 'Challenge', et: 'Väljakutse' },
  built: { en: 'What was built', et: 'Mida ehitati' },
  highlights: { en: 'Technical highlights', et: 'Tehnilised detailid' },
  results: { en: 'Results', et: 'Tulemused' },
  faq: { en: 'FAQ', et: 'KKK' },
  included: { en: 'Included', et: 'Sisaldub' },
  fullText: {
    en: 'Full text of every service and case study page',
    et: 'Iga teenuse ja juhtumiuuringu täistekst',
  },
} as const;

const ET_PERSON_DESCRIPTION =
  'Risto Tõldsep on Tallinnas tegutsev vabakutseline veebiarendaja ja disainer, kes teeb kohandatud kodulehti, WordPressi ja WooCommerce e-poode, interaktiivseid kasutajaliideseid ja AI-põhiseid veebilahendusi.';

const OVERVIEW = {
  en: [
    '- **Name:** Risto Tõldsep',
    '- **Role:** Web developer and designer',
    '- **Location:** Tallinn, Estonia',
    '- **Experience:** 5+ years full-time; 250+ projects worked on',
    '- **Availability:** Open for freelance projects',
    '- **Languages:** Estonian, English',
    '- **Education:** BSc in Computer Systems Engineering, Tallinn University of Technology (TalTech)',
    '- **Current role:** Developer at Reaktiiv, a digital agency in Tallinn',
  ],
  et: [
    '- **Nimi:** Risto Tõldsep',
    '- **Roll:** Veebiarendaja ja disainer',
    '- **Asukoht:** Tallinn, Eesti',
    '- **Kogemus:** 5+ aastat täiskohaga; 250+ projekti',
    '- **Saadavus:** Võtan vastu vabakutselisi projekte',
    '- **Keeled:** eesti, inglise',
    '- **Haridus:** arvutisüsteemide bakalaureus, Tallinna Tehnikaülikool (TalTech)',
    '- **Praegune roll:** arendaja Tallinna digiagentuuris Reaktiiv',
  ],
} as const;

const abs = (site: URL, path: string) => new URL(path, site).href;
const t = (key: keyof typeof STRINGS, locale: Locale) => STRINGS[key][locale];

function header(locale: Locale, site: URL): string[] {
  const description = locale === 'et' ? ET_PERSON_DESCRIPTION : PERSON_DESCRIPTION;
  return [
    `# Risto Tõldsep — ${t('role', locale)}`,
    '',
    `> ${description}`,
    '',
    `## ${t('overview', locale)}`,
    '',
    ...OVERVIEW[locale],
    `- **Website:** ${abs(site, routes.home('en'))} (English) / ${abs(site, routes.home('et'))} (Estonian)`,
    '',
  ];
}

function contact(locale: Locale): string[] {
  return [
    `## ${t('contact', locale)}`,
    '',
    '- **Email:** ristotoldsep@gmail.com',
    ...socialLinks.map((link) => `- **${link.title}:** ${link.href}`),
    '',
  ];
}

export function renderLlmsIndex(locale: Locale, site: URL): string {
  const copy = siteCopy[locale];

  return [
    ...header(locale, site),

    `## ${t('services', locale)}`,
    '',
    ...allServices.map((service) => {
      const s = service.i18n[locale];
      return `- [${s.name}](${abs(site, routes.service(locale, service.id))}): ${s.summary}`;
    }),
    '',

    `## ${t('caseStudies', locale)}`,
    '',
    ...publishedProjects().map((project) => {
      const p = project.i18n[locale];
      return `- [${p.name ?? project.name}](${abs(site, routes.project(locale, project.id))}): ${p.summary}`;
    }),
    '',

    `## ${t('stack', locale)}`,
    '',
    ...copy.skills.categories.map(
      (category) => `- **${category.title.replace(/&amp;/g, '&')}:** ${category.items.join(', ')}`,
    ),
    '',

    ...contact(locale),

    `## ${t('optional', locale)}`,
    '',
    `- [llms-full.txt](${abs(site, locale === 'en' ? '/llms-full.txt' : '/et/llms-full.txt')}): ${t('fullText', locale)}`,
    '',
  ].join('\n');
}

export function renderLlmsFull(locale: Locale, site: URL): string {
  const lines: string[] = [...header(locale, site)];

  lines.push(`## ${t('services', locale)}`, '');
  for (const service of allServices) {
    const s = service.i18n[locale];
    lines.push(`### ${s.name}`, '');
    lines.push(`URL: ${abs(site, routes.service(locale, service.id))}`, '');
    lines.push(s.summary, '');
    if (s.intro) lines.push(...s.intro.flatMap((p) => [p, '']));
    if (s.deliverables?.length) {
      lines.push(`**${t('included', locale)}**`, '');
      lines.push(...s.deliverables.map((d) => `- ${d}`), '');
    }
    if (s.faq?.length) {
      lines.push(`**${t('faq', locale)}**`, '');
      for (const item of s.faq) lines.push(`- **${item.q}** ${item.a}`);
      lines.push('');
    }
  }

  lines.push(`## ${t('caseStudies', locale)}`, '');
  for (const project of publishedProjects()) {
    const p = project.i18n[locale];
    const study = caseStudies[project.id]?.[locale];
    lines.push(`### ${p.name ?? project.name}`, '');
    lines.push(`URL: ${abs(site, routes.project(locale, project.id))}`, '');
    if (project.liveUrl) lines.push(`Live site: ${project.liveUrl}`, '');
    lines.push(`Client: ${project.client.name} | Year: ${project.year} | Role: ${p.role}`, '');
    lines.push(p.summary, '');
    lines.push(`Stack: ${project.stack.join(', ')}`, '');
    if (study?.problem?.length) {
      lines.push(`**${t('challenge', locale)}**`, '', ...study.problem.flatMap((x) => [x, '']));
    }
    if (study?.solution?.length) {
      lines.push(`**${t('built', locale)}**`, '', ...study.solution.map((x) => `- ${x}`), '');
    }
    if (study?.highlights?.length) {
      lines.push(`**${t('highlights', locale)}**`, '');
      for (const h of study.highlights) lines.push(`- **${h.title}** ${h.text}`);
      lines.push('');
    }
    if (project.metrics?.length) {
      lines.push(
        `**${t('results', locale)}**`,
        '',
        ...project.metrics.map((m) => `- ${m.value} ${m.label[locale]}`),
      );
      lines.push('');
    }
    if (study?.results?.length) lines.push(...study.results.map((x) => `- ${x}`), '');
    if (study?.faq?.length) {
      lines.push(`**${t('faq', locale)}**`, '');
      for (const item of study.faq) lines.push(`- **${item.q}** ${item.a}`);
      lines.push('');
    }
  }

  lines.push(...contact(locale));
  return lines.join('\n');
}
