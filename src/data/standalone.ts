import type { Faq, I18n } from './types';

/** Copy for the standalone pages that are not driven by the project or
 *  service registries. */
export interface StandalonePageCopy {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  heading: string;
  lede: string;
  /** The factual paragraph an answer engine can quote verbatim. */
  summary: string;
  sections: Array<{ title: string; text: string }>;
  facts: Array<{ label: string; value: string }>;
  faq: Faq[];
}

export const aboutPage: I18n<StandalonePageCopy> = {
  en: {
    seoTitle: 'About Risto Tõldsep - Web Developer & Designer in Tallinn, Estonia',
    seoDescription: 'Risto Tõldsep is a freelance web developer and designer in Tallinn, Estonia, with 5+ years building custom websites, WordPress and WooCommerce stores, and AI-powered web tools.',
    eyebrow: 'About',
    heading: 'Risto Tõldsep, web developer and designer in Tallinn',
    lede: 'I design and build custom websites, WordPress and WooCommerce stores, and the occasional AI tool. Full-time at a Tallinn agency, and freelance alongside it.',
    summary: 'Risto Tõldsep is a freelance web developer and designer based in Tallinn, Estonia. He has over five years of full-time experience and has worked on more than 250 projects, specialising in custom WordPress and WooCommerce builds, interactive frontends with GSAP, full-stack applications in Laravel and Vue, and AI integrations. He holds a BSc in Computer Systems Engineering from Tallinn University of Technology and currently works at the Tallinn digital agency Reaktiiv while taking freelance projects. He works in Estonian and English.',
    sections: [
      {
        title: 'What I actually do',
        text: 'Most of my work is custom WordPress: bespoke themes built on ACF Gutenberg blocks with a Vite per-block asset pipeline, and WooCommerce stores that have to handle several languages and Estonian payment methods. Alongside that I build full-stack applications when a content site is the wrong shape for the problem, and I do the design as well as the build on most projects.',
      },
      {
        title: 'Where the AI work comes from',
        text: 'I built a multi-provider AI chatbot plugin from scratch for a client, running on Claude, GPT or Gemini, with its own knowledge base, lead capture and conversation analytics. That turned into a line of work: integrations and automations that remove repetitive manual steps rather than AI for its own sake.',
      },
      {
        title: 'How I work',
        text: 'I prefer to understand what a site has to achieve commercially before discussing how it looks, because that is where most of the cost gets decided. I will tell you when the cheaper option is the right one. A brochure site on a good theme is sometimes the correct answer, and saying so costs me a project but saves you money.',
      },
      {
        title: 'Background',
        text: 'BSc in Computer Systems Engineering from Tallinn University of Technology (TalTech). Several years at vDisain, a creative digital studio, and currently at Reaktiiv, a Tallinn agency working with Baltic and international clients. The agency work means I have been through hundreds of client projects, which is where you learn what actually breaks.',
      },
    ],
    facts: [
      {
        label: 'Based in',
        value: 'Tallinn, Estonia',
      },
      {
        label: 'Experience',
        value: '5+ years full-time, 250+ projects',
      },
      {
        label: 'Education',
        value: 'BSc Computer Systems Engineering, TalTech',
      },
      {
        label: 'Current role',
        value: 'Developer at Reaktiiv, Tallinn',
      },
      {
        label: 'Languages',
        value: 'Estonian, English',
      },
      {
        label: 'Availability',
        value: 'Open for freelance projects',
      },
    ],
    faq: [
      {
        q: 'Where is Risto Tõldsep based?',
        a: 'Tallinn, Estonia. I work with clients across Estonia and internationally, and remotely by default.',
      },
      {
        q: 'What does Risto Tõldsep specialise in?',
        a: 'Custom WordPress and WooCommerce development, web design and UI/UX, interactive frontends with GSAP, full-stack work in Laravel and Vue, and AI integrations such as custom chatbots and workflow automation.',
      },
      {
        q: 'Is he available for freelance work?',
        a: 'Yes, alongside a full-time role at the Tallinn agency Reaktiiv. That limits how many projects run at once, which in practice means fewer projects and more attention on each.',
      },
      {
        q: 'What languages does he work in?',
        a: 'Estonian and English. Sites are frequently built multilingual, including Russian, through WPML.',
      },
    ],
  },
  et: {
    seoTitle: 'Risto Tõldsep - veebiarendaja ja disainer Tallinnas',
    seoDescription: 'Risto Tõldsep on Tallinnas tegutsev vabakutseline veebiarendaja ja disainer, kellel on 5+ aastat kogemust kodulehtede, WordPressi ja WooCommerce e-poodide ning AI-lahenduste loomisel.',
    eyebrow: 'Minust',
    heading: 'Risto Tõldsep, veebiarendaja ja disainer Tallinnas',
    lede: 'Disainin ja ehitan kohandatud kodulehti, WordPressi ja WooCommerce e-poode ning aeg-ajalt AI-tööriistu. Täiskohaga Tallinna agentuuris ja vabakutselisena kõrvalt.',
    summary: 'Risto Tõldsep on Tallinnas tegutsev vabakutseline veebiarendaja ja disainer. Tal on üle viie aasta täiskohaga kogemust ja ta on töötanud enam kui 250 projekti kallal, spetsialiseerudes kohandatud WordPressi ja WooCommerce lahendustele, interaktiivsetele GSAP-i kasutajaliidestele, Laraveli ja Vue täislahendustele ning AI-integratsioonidele. Ta on lõpetanud Tallinna Tehnikaülikooli arvutisüsteemide eriala bakalaureusekraadiga ning töötab praegu Tallinna digiagentuuris Reaktiiv, võttes kõrvalt vastu vabakutselisi projekte. Ta töötab eesti ja inglise keeles.',
    sections: [
      {
        title: 'Mida ma päriselt teen',
        text: 'Suurem osa minu tööst on kohandatud WordPress: ACF Gutenbergi plokkidel põhinevad eriteemad koos Vite plokipõhise varade konveieriga ning WooCommerce e-poed, mis peavad toime tulema mitme keele ja Eesti makseviisidega. Kõrvalt ehitan täislahendusi siis, kui sisuleht on probleemi jaoks vale kuju, ja enamikus projektides teen nii disaini kui ka arenduse.',
      },
      {
        title: 'Kust AI-töö tuli',
        text: 'Ehitasin kliendile nullist mitme pakkujaga AI vestlusroboti plugina, mis töötab Claude’i, GPT või Gemini peal ning millel on oma teadmusbaas, kontaktide kogumine ja vestluste statistika. Sellest kasvas välja eraldi suund: integratsioonid ja automatiseeringud, mis kaotavad korduvad käsitsi sammud, mitte AI iseenda pärast.',
      },
      {
        title: 'Kuidas ma töötan',
        text: 'Eelistan aru saada, mida leht äriliselt saavutama peab, enne kui räägime sellest, kuidas see välja näeb, sest just seal otsustatakse suurem osa maksumusest. Ütlen välja, kui odavam variant on õige. Tutvustav leht hea teema peal on mõnikord täiesti õige vastus ja selle ütlemine maksab mulle projekti, aga hoiab sinu raha kokku.',
      },
      {
        title: 'Taust',
        text: 'Arvutisüsteemide bakalaureus Tallinna Tehnikaülikoolist (TalTech). Mitu aastat loomedigistuudios vDisain ja praegu Tallinna agentuuris Reaktiiv, kus töötan Balti ja rahvusvaheliste klientidega. Agentuuritöö tähendab, et olen läbinud sadu kliendiprojekte, ja just seal õpid, mis päriselt katki läheb.',
      },
    ],
    facts: [
      {
        label: 'Asukoht',
        value: 'Tallinn, Eesti',
      },
      {
        label: 'Kogemus',
        value: '5+ aastat täiskohaga, 250+ projekti',
      },
      {
        label: 'Haridus',
        value: 'Arvutisüsteemide bakalaureus, TalTech',
      },
      {
        label: 'Praegune roll',
        value: 'Arendaja, Reaktiiv, Tallinn',
      },
      {
        label: 'Keeled',
        value: 'eesti, inglise',
      },
      {
        label: 'Saadavus',
        value: 'Võtan vastu vabakutselisi projekte',
      },
    ],
    faq: [
      {
        q: 'Kus Risto Tõldsep asub?',
        a: 'Tallinnas, Eestis. Töötan klientidega üle Eesti ja välismaal ning vaikimisi kaugtööna.',
      },
      {
        q: 'Millele Risto Tõldsep spetsialiseerub?',
        a: 'Kohandatud WordPressi ja WooCommerce arendusele, veebidisainile ja UI/UX-ile, interaktiivsetele GSAP-i liidestele, Laraveli ja Vue täislahendustele ning AI-integratsioonidele nagu kohandatud vestlusrobotid ja töövoogude automatiseerimine.',
      },
      {
        q: 'Kas ta võtab vastu vabakutselisi töid?',
        a: 'Jah, täiskohaga töö kõrvalt Tallinna agentuuris Reaktiiv. See piirab, mitu projekti korraga käib, mis praktikas tähendab vähem projekte ja rohkem tähelepanu igaühele.',
      },
      {
        q: 'Mis keeltes ta töötab?',
        a: 'Eesti ja inglise keeles. Lehti ehitatakse sageli mitmekeelsena, sealhulgas vene keeles, WPML-i kaudu.',
      },
    ],
  },
};

export const hirePage: I18n<StandalonePageCopy> = {
  en: {
    seoTitle: 'Freelance Web Developer in Estonia | Risto Tõldsep',
    seoDescription: 'Looking for a freelance web developer in Estonia? Risto Tõldsep designs and builds custom websites, WordPress and WooCommerce stores from Tallinn. Available for new projects.',
    eyebrow: 'Hire me',
    heading: 'Freelance web developer and designer in Estonia',
    lede: 'One person who designs it, builds it, and is still there when something needs changing.',
    summary: 'Risto Tõldsep is a freelance web developer and designer available for hire in Tallinn, Estonia. He takes on custom website builds, WordPress and WooCommerce stores, full-stack web applications, and AI integrations, working in Estonian and English with clients in Estonia and internationally. He has 5+ years of full-time experience and has worked on over 250 projects.',
    sections: [
      {
        title: 'What you get working with one person',
        text: 'No account manager, no handover between a designer who left and a developer who inherited a Figma file. You talk to the person doing the work, which means decisions happen in one message rather than three meetings. The tradeoff is capacity: I take on fewer projects at once, and I will tell you upfront if your timeline does not fit.',
      },
      {
        title: 'Typical projects',
        text: 'A custom WordPress site or WooCommerce store for a business that has outgrown a template. A full-stack application where the logic matters more than the content. An existing site that needs rescuing, speeding up, or extending. An integration or automation that removes a manual process.',
      },
      {
        title: 'What I do not do',
        text: 'I do not do cheap template installs, because you can get those elsewhere for less than I would charge. I do not take on projects where nobody on the client side can make a decision. And I will not promise SEO rankings on a timeline, because nobody can honestly do that.',
      },
      {
        title: 'How pricing works',
        text: 'Fixed price for well-defined projects, hourly for ongoing or open-ended work. I quote after a scoping conversation rather than from a price list, because the cost is driven by how much bespoke behaviour you need, not by how many pages you want. You get the number before any work starts.',
      },
    ],
    facts: [
      {
        label: 'Location',
        value: 'Tallinn, Estonia, remote by default',
      },
      {
        label: 'Languages',
        value: 'Estonian, English',
      },
      {
        label: 'Engagement',
        value: 'Fixed price or hourly',
      },
      {
        label: 'Availability',
        value: 'Open for new projects',
      },
    ],
    faq: [
      {
        q: 'How do I find a good freelance web developer in Estonia?',
        a: 'Look at whether their portfolio shows work that resembles yours, ask what they built as opposed to what the agency they worked at built, and ask them to explain one technical decision from a past project. Someone who can explain a tradeoff in plain language usually made it deliberately.',
      },
      {
        q: 'How much does a website cost in Estonia?',
        a: 'A small custom marketing site typically starts in the low thousands of euros. A custom WooCommerce store with integrations is considerably more. Anyone quoting before understanding what the site has to do is guessing, and the guess is usually low.',
      },
      {
        q: 'Do you work with clients outside Estonia?',
        a: 'Yes, regularly. Work is remote by default and I work in English as readily as Estonian.',
      },
      {
        q: 'Can you take over a project someone else started?',
        a: 'Often, yes. I will audit what exists first and give you an honest answer about whether continuing or rebuilding is the better use of your money, including when the honest answer is inconvenient for me.',
      },
      {
        q: 'How long does a website take?',
        a: 'A custom marketing site is typically a few weeks of build once the content and design are settled. The slowest part of almost every project is content, not development.',
      },
      {
        q: 'What happens after launch?',
        a: 'Either a maintenance arrangement, or a clean handover with documentation if you would rather run it in-house. I am not interested in holding anyone hostage to their own website.',
      },
    ],
  },
  et: {
    seoTitle: 'Vabakutseline veebiarendaja Eestis | Risto Tõldsep',
    seoDescription: 'Otsid vabakutselist veebiarendajat või kodulehe tegijat Eestis? Risto Tõldsep disainib ja ehitab Tallinnast kohandatud kodulehti ja WooCommerce e-poode. Avatud uutele projektidele.',
    eyebrow: 'Palka mind',
    heading: 'Vabakutseline veebiarendaja ja kodulehe tegija Eestis',
    lede: 'Üks inimene, kes selle disainib, ära ehitab ja on ka siis olemas, kui midagi muuta vaja.',
    summary: 'Risto Tõldsep on Tallinnas tegutsev vabakutseline veebiarendaja ja disainer, keda saab palgata. Ta teeb kohandatud kodulehti, WordPressi ja WooCommerce e-poode, täislahendusena veebirakendusi ja AI-integratsioone, töötades eesti ja inglise keeles nii Eesti kui ka välisklientidega. Tal on 5+ aastat täiskohaga kogemust ja üle 250 projekti.',
    sections: [
      {
        title: 'Mida annab töötamine ühe inimesega',
        text: 'Ei ole kliendihaldurit ega üleandmist disainerilt, kes lahkus, arendajale, kes päris Figma faili. Räägid inimesega, kes tööd teeb, mis tähendab, et otsused sünnivad ühe sõnumiga, mitte kolme koosolekuga. Vastukaaluks on maht: võtan korraga vastu vähem projekte ja ütlen kohe, kui sinu tähtaeg ei mahu.',
      },
      {
        title: 'Tüüpilised projektid',
        text: 'Kohandatud WordPressi koduleht või WooCommerce e-pood ettevõttele, kellele mall on väikeseks jäänud. Täislahendusena veebirakendus, kus loogika loeb rohkem kui sisu. Olemasolev leht, mis vajab päästmist, kiirendamist või laiendamist. Integratsioon või automatiseering, mis kaotab käsitsi protsessi.',
      },
      {
        title: 'Mida ma ei tee',
        text: 'Ma ei tee odavaid mallipaigaldusi, sest neid saab mujalt odavamalt kui mina küsiksin. Ma ei võta projekte, kus kliendi poolel ei suuda keegi otsust teha. Ja ma ei luba SEO positsioone tähtajaga, sest seda ei saa keegi ausalt lubada.',
      },
      {
        title: 'Kuidas hinnastamine käib',
        text: 'Fikseeritud hind selgelt piiritletud projektidele, tunnihind jooksvale või lahtise otsaga tööle. Teen pakkumise pärast kaardistusvestlust, mitte hinnakirjast, sest maksumust määrab see, kui palju eriloogikat vajad, mitte lehtede arv. Number on sul käes enne, kui töö algab.',
      },
    ],
    facts: [
      {
        label: 'Asukoht',
        value: 'Tallinn, Eesti, vaikimisi kaugtöö',
      },
      {
        label: 'Keeled',
        value: 'eesti, inglise',
      },
      {
        label: 'Koostöövorm',
        value: 'Fikseeritud hind või tunnihind',
      },
      {
        label: 'Saadavus',
        value: 'Avatud uutele projektidele',
      },
    ],
    faq: [
      {
        q: 'Kuidas leida hea vabakutseline veebiarendaja Eestis?',
        a: 'Vaata, kas portfoolios on tööd, mis sinu omaga sarnanevad, küsi, mida tema ise tegi, mitte mida tegi agentuur, kus ta töötas, ja palu tal selgitada üht tehnilist otsust mõnest varasemast projektist. Kes oskab kompromissi lihtsas keeles lahti seletada, tegi selle tavaliselt teadlikult.',
      },
      {
        q: 'Kui palju maksab kodulehe tegemine Eestis?',
        a: 'Väike kohandatud turundusleht algab tavaliselt paarist tuhandest eurost. Kohandatud WooCommerce e-pood koos integratsioonidega on tunduvalt kallim. Kes teeb pakkumise enne, kui on aru saanud, mida leht tegema peab, pakub pimesi, ja pime pakkumine on tavaliselt liiga madal.',
      },
      {
        q: 'Kas töötad ka väljaspool Eestit asuvate klientidega?',
        a: 'Jah, regulaarselt. Töö käib vaikimisi kaugtööna ja töötan inglise keeles sama hästi kui eesti keeles.',
      },
      {
        q: 'Kas saad üle võtta projekti, mille keegi teine alustas?',
        a: 'Sageli küll. Auditeerin kõigepealt olemasoleva ja annan ausa vastuse, kas jätkamine või uuesti ehitamine on sinu raha parem kasutus, ka siis, kui aus vastus on minu jaoks ebamugav.',
      },
      {
        q: 'Kui kaua kodulehe tegemine aega võtab?',
        a: 'Kohandatud turundusleht on tavaliselt paar nädalat arendust, kui sisu ja disain on paigas. Peaaegu iga projekti aeglasem osa on sisu, mitte arendus.',
      },
      {
        q: 'Mis saab pärast avaldamist?',
        a: 'Kas hoolduskokkulepe või puhas üleandmine koos dokumentatsiooniga, kui eelistad ise hallata. Mul ei ole huvi hoida kedagi tema enda kodulehe pantvangis.',
      },
    ],
  },
};
