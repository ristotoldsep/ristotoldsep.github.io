import type { Faq, I18n } from './types';
import type { ProjectId } from './projects';

/** Long-form case study prose, kept out of projects.ts so the entity registry
 *  stays readable and the writing stays easy to edit. A project without an
 *  entry here still renders, just without the deep sections. */
export interface CaseStudyCopy {
  problem: string[];
  solution: string[];
  highlights: Array<{ title: string; text: string }>;
  results?: string[];
  faq?: Faq[];
}

export const caseStudies: Partial<Record<ProjectId, I18n<CaseStudyCopy>>> = {
  clarte: {
    en: {
      problem: [
        'Clarte is a premium skincare brand selling internationally, which puts two demands on the store at once. It has to look premium enough to justify the price, and it has to work correctly in several languages down to product data, checkout strings and media.',
        'Premium usually means heavy: large imagery, motion, sliders. Getting that without a store that crawls is the actual engineering problem.',
      ],
      solution: [
        'A fully custom WordPress theme on ACF Gutenberg blocks, so the client composes pages from brand-correct blocks instead of a page builder that lets the design drift.',
        'Tailwind CSS with a Vite per-block asset pipeline, so each block ships only what it needs.',
        'GSAP animations, Swiper sliders and Lenis smooth scrolling for the premium feel.',
        'Full WPML multilingual coverage across content, interface strings and media, not just product titles.',
        'A Mailchimp API integration on the newsletter form that subscribes customers directly to the mailing list.',
        'Analytics across GTM, GA4, Google Search Console, Microsoft Clarity and Meta Pixel, with custom event tracking.',
      ],
      highlights: [
        {
          title: 'Blocks the brand cannot break',
          text: 'ACF Gutenberg blocks give the client real editing freedom inside a fixed design system. They can build new pages without being able to produce something off-brand, which is the failure mode of a general-purpose page builder.',
        },
        {
          title: 'Per-block assets',
          text: 'Vite builds each block’s CSS and JS separately. A page without a slider never downloads Swiper, which is how a visually rich store stays quick.',
        },
        {
          title: 'Multilingual that includes media',
          text: 'WPML covers content, strings and media, so a translated page gets the right localised imagery too rather than falling back to the source language.',
        },
        {
          title: 'Tracking set up to answer questions',
          text: 'GTM, GA4, Search Console, Clarity and Meta Pixel with custom events, configured to show where leads come from and where customers hesitate, rather than just recording pageviews.',
        },
      ],
      faq: [
        {
          q: 'Why a custom theme instead of a premium WooCommerce template?',
          a: 'A template is fastest on day one and slowest thereafter. For a brand whose whole proposition is that it looks and feels premium, fighting a theme’s assumptions on every page costs more than building the blocks properly once.',
        },
        {
          q: 'Does WooCommerce handle multiple languages well?',
          a: 'With WPML set up properly, yes. The important part is covering strings and media, not just product names, and keeping one catalogue with translations attached rather than parallel stores.',
        },
      ],
    },
    et: {
      problem: [
        'Clarte on rahvusvaheliselt müüv premium nahahoolduse bränd, mis esitab poele korraga kaks nõuet. See peab nägema välja piisavalt premium, et hinda õigustada, ja peab korrektselt toimima mitmes keeles kuni tooteandmete, ostukorvi tekstide ja meediani välja.',
        'Premium tähendab tavaliselt rasket: suured pildid, animatsioonid, slaiderid. Selle saavutamine ilma, et pood roomama jääks, ongi tegelik tehniline ülesanne.',
      ],
      solution: [
        'Täielikult kohandatud WordPressi teema ACF Gutenbergi plokkidel, nii et klient paneb lehed kokku brändikohastest plokkidest, mitte lehetegijast, mis laseb disainil laiali valguda.',
        'Tailwind CSS koos Vite plokipõhise varade konveieriga, nii et iga plokk laeb ainult vajaliku.',
        'GSAP animatsioonid, Swiperi slaiderid ja Lenise sujuv kerimine premium tunnetuse jaoks.',
        'Täielik WPML mitmekeelsus sisus, liidese stringides ja meedias, mitte ainult tootenimedes.',
        'Mailchimpi API integratsioon uudiskirjavormil, mis lisab kliendid otse meililisti.',
        'Analüütika GTM-i, GA4, Google Search Console’i, Microsoft Clarity ja Meta Pixeliga koos kohandatud sündmustega.',
      ],
      highlights: [
        {
          title: 'Plokid, mida bränd ei saa katki teha',
          text: 'ACF Gutenbergi plokid annavad kliendile päris vabaduse fikseeritud disainisüsteemi sees. Ta saab ehitada uusi lehti, ilma et suudaks toota midagi brändivälist, mis ongi üldotstarbelise lehetegija nõrk koht.',
        },
        {
          title: 'Plokipõhised varad',
          text: 'Vite ehitab iga ploki CSS-i ja JS-i eraldi. Slaiderita leht ei lae kunagi Swiperit, ja just nii jääb visuaalselt rikas pood kiireks.',
        },
        {
          title: 'Mitmekeelsus, mis hõlmab ka meediat',
          text: 'WPML katab sisu, stringid ja meedia, nii et tõlgitud leht saab ka õiged lokaliseeritud pildid, mitte ei kuku tagasi lähtekeelele.',
        },
        {
          title: 'Jälgimine, mis vastab küsimustele',
          text: 'GTM, GA4, Search Console, Clarity ja Meta Pixel kohandatud sündmustega, seadistatud näitama, kust müügivihjed tulevad ja kus kliendid kahtlema jäävad, mitte lihtsalt lehevaatamisi lugema.',
        },
      ],
      faq: [
        {
          q: 'Miks kohandatud teema, mitte valmis WooCommerce’i mall?',
          a: 'Mall on esimesel päeval kõige kiirem ja edaspidi kõige aeglasem. Brändi puhul, mille kogu lubadus on premium välimus ja tunnetus, läheb teema eeldustega võitlemine igal lehel kallimaks kui plokkide korralik ühekordne ehitamine.',
        },
        {
          q: 'Kas WooCommerce saab mitme keelega hästi hakkama?',
          a: 'Korralikult seadistatud WPML-iga küll. Oluline on katta stringid ja meedia, mitte ainult tootenimed, ning hoida ühte kataloogi koos tõlgetega, mitte paralleelseid poode.',
        },
      ],
    },
  },

  'pr-permanent-pmu': {
    en: {
      problem: [
        'PR Permanent PMU is a permanent makeup studio in Tallinn that sells two very different things: in-person treatments booked by local clients, and training courses bought online by students across Estonia, Latvia and Russia. One site had to serve both, in three languages, without either audience feeling like an afterthought.',
        'The studio was also answering the same questions over and over. What does a treatment cost, how long does it take, how do I prepare, is it painful, when is the next course. Those questions arrive at all hours and in three languages, and every unanswered one is a booking that does not happen.',
        'On top of that, the studio wanted to advertise on Google, which is only worth doing if you can measure what a click is actually worth. That meant the purchase tracking had to be real, not a pixel dropped on a thank-you page.',
      ],
      solution: [
        'A fully custom WordPress theme built on ACF Gutenberg blocks, Tailwind CSS and a Vite per-block asset pipeline, so each block ships only its own CSS and JS.',
        'Trilingual ET/EN/RU through WPML, covering content, interface strings and media, with the price list and service data translated rather than duplicated.',
        'A WooCommerce shop for PMU trainings and online courses, with Montonio handling Estonian bank links and card payments.',
        'A custom AI chatbot plugin, developed from scratch, that answers visitors around the clock in their own language.',
        'A Mailchimp-connected newsletter that automatically emails a first-time client coupon on signup.',
        'A live Instagram feed, GSAP and Lenis motion, and Swiper galleries for the portfolio of past work.',
        'Google Ads campaigns plus the full measurement stack behind them, so spend can be judged against actual course sales.',
      ],
      highlights: [
        {
          title: 'A chatbot that cannot invent prices',
          text: 'The plugin is multi-provider and runs on Claude, GPT or Gemini. It indexes the site into its own knowledge base, but the theme also feeds it live business data: the real price list, service durations and the FAQ. Grounding it in the actual data is what stops it inventing a number that the studio then has to honour.',
        },
        {
          title: 'Lead capture inside the conversation',
          text: 'Rather than bouncing visitors to a contact form, the widget runs a scripted quick-reply flow that collects a name and contact detail at the point where interest is highest, then hands the lead to the studio.',
        },
        {
          title: 'It reports its own blind spots',
          text: 'Every conversation is stored in wp-admin with analytics and visitor ratings, and the plugin specifically reports the questions its knowledge base could not answer. That list is the content backlog: it says exactly what the site is missing.',
        },
        {
          title: 'Measurement built for Google Ads',
          text: 'A Google Tag Manager container is fed by a GTM4WP enhanced-ecommerce dataLayer, with GA4 custom ecommerce events and Google Ads conversion tracking on training and course purchases. A Conversion Linker preserves ad-click attribution.',
        },
        {
          title: 'Consent handled properly',
          text: 'All tracking is gated by Google Consent Mode through the Complianz cookie banner, so tags hold back until the visitor has actually consented rather than firing and asking later.',
        },
        {
          title: 'Per-block asset pipeline',
          text: 'Vite builds each ACF block’s CSS and JS separately, so a page that does not use the gallery block never loads Swiper. It keeps a visually heavy site from paying for every feature on every page.',
        },
      ],
      results: [
        'The studio answers routine questions in three languages around the clock without staff time, and sees in wp-admin exactly what visitors asked.',
        'Course and training sales run through WooCommerce with Montonio, so revenue and ad spend sit in the same reporting.',
        'Google Ads conversions are tracked to actual purchases rather than page views, which is what makes campaign decisions defensible.',
      ],
      faq: [
        {
          q: 'Can a WordPress site really run a custom AI chatbot?',
          a: 'Yes. This one is a plugin I wrote specifically for the site. It talks to Claude, GPT or Gemini, keeps its own knowledge base built from the site content, and is fed live data from the theme so it answers from the real price list rather than guessing.',
        },
        {
          q: 'Why WPML rather than a separate site per language?',
          a: 'Three separate sites means three sets of prices, three product catalogues and three chances to forget an update. WPML keeps one WooCommerce catalogue and one price list with translations attached, which is far less to maintain for a small team.',
        },
        {
          q: 'Why Montonio for payments?',
          a: 'Estonian customers expect to pay by bank link. Montonio covers the Baltic banks alongside card payments in one integration, which is a much better fit here than a card-only processor.',
        },
      ],
    },
    et: {
      problem: [
        'PR Permanent PMU on Tallinna püsimeigistuudio, mis müüb kahte väga erinevat asja: kohapealseid protseduure, mida broneerivad kohalikud kliendid, ja koolitusi, mida ostavad veebist õpilased Eestist, Lätist ja Ven emaalt. Üks leht pidi teenindama mõlemat, kolmes keeles, nii et kumbki sihtrühm ei tunneks end kõrvalise ana.',
        'Stuudio vastas ka päevast päeva samadele küsimustele. Mis protseduur maksab, kui kaua see võtab, kuidas valmistuda, kas on valus, millal on järgmine kursus. Need küsimused tulevad igal kellaajal ja kolmes keeles ning iga vastuseta jäänu on broneering, mida ei tule.',
        'Lisaks soovis stuudio Google Adsis reklaamida, mis tasub end ära ainult siis, kui suudad mõõta, mida klikk tegelikult väärt on. See tähendas, et ostude jälgimine pidi olema päris, mitte tänulehele visatud piksel.',
      ],
      solution: [
        'Täielikult kohandatud WordPressi teema ACF Gutenbergi plokkidel, Tailwind CSS-il ja Vite plokipõhisel varade konveieril, nii et iga plokk laeb ainult enda CSS-i ja JS-i.',
        'Kolmkeelne ET/EN/RU WPML-i kaudu: sisu, liidese stringid ja meedia, kusjuures hinnakiri ja teenuste andmed on tõlgitud, mitte dubleeritud.',
        'WooCommerce e-pood püsimeigikoolituste ja e-kursuste müügiks, kus Montonio katab pangalingid ja kaardimaksed.',
        'Nullist arendatud kohandatud AI vestlusroboti plugin, mis vastab külastajatele ööpäeva ringi nende endi keeles.',
        'Mailchimpiga ühendatud uudiskiri, mis saadab registreerumisel automaatselt uue kliendi sooduskupongi.',
        'Elav Instagrami feed, GSAP-i ja Lenise animatsioonid ning Swiperi galeriid varasemate tööde portfoolio jaoks.',
        'Google Adsi kampaaniad koos kogu nende taga oleva mõõtmisega, et reklaamikulu saaks h innata päris kursusemüügi vastu.',
      ],
      highlights: [
        {
          title: 'Vestlusrobot, mis ei saa hindu välja mõelda',
          text: 'Plugin toetab mitut pakkujat ja töötab Claude’i, GPT või Gemini peal. See indekseerib saidi oma teadmusbaasi, aga teema söödab talle ette ka päris äriandmed: kehtiva hinnakirja, teenuste kestused ja KKK. Just päris andmetele tuginemine hoiab ära selle, et robot mõtleks välja numbri, mida stuudio peab siis austama.',
        },
        {
          title: 'Kontaktide kogumine vestluse sees',
          text: 'Selle asemel et suunata külastaja kontaktvormile, käivitab vidin skripteeritud kiirvastuste voo, mis kogub nime ja kontakti just siis, kui huvi on kõige suurem, ning annab kontakti stuudiole edasi.',
        },
        {
          title: 'See raporteerib enda pimealad',
          text: 'Kõik vestlused salvestatakse wp-admini koos statistika ja külastajate hinnangutega ning plugin raporteerib eraldi need küsimused, millele teadmusbaas vastust ei andnud. See nimekiri ongi sisuplaan: see ütleb täpselt, mis saidilt puudu on.',
        },
        {
          title: 'Google Adsi jaoks ehitatud mõõtmine',
          text: 'Google Tag Manageri konteinerit toidab GTM4WP täiendatud e-kaubanduse dataLayer, sellele lisanduvad GA4 kohandatud e-kaubanduse sündmused ja Google Adsi konversioonide jälgimine koolituste ning kursuste ostudelt. Conversion Linker hoiab reklaamiklikkide atributsiooni alles.',
        },
        {
          title: 'Nõusolek korralikult lahendatud',
          text: 'Kogu jälgimine on Google Consent Mode’i kaudu seotud Complianzi küpsiseteatega, nii et sildid ootavad külastaja nõusolekut, mitte ei käivitu enne ja küsi pärast.',
        },
        {
          title: 'Plokipõhine varade konveier',
          text: 'Vite ehitab iga ACF ploki CSS-i ja JS-i eraldi, nii et leht, mis galeriiplokki ei kasuta, ei lae kunagi Swiperit. See hoiab visuaalselt rikka saidi maksmast iga funktsiooni eest igal lehel.',
        },
      ],
      results: [
        'Stuudio vastab rutiinsetele küsimustele kolmes keeles ööpäeva ringi ilma töötajate ajata ja näeb wp-adminis täpselt, mida külastajad küsisid.',
        'Kursuste ja koolituste müük käib WooCommerce’i ja Montonio kaudu, nii et tulu ja reklaamikulu on samas aruandluses.',
        'Google Adsi konversioone mõõdetakse päris ostude, mitte lehevaatamiste järgi, mis teebki kampaaniaotsused põhjendatavaks.',
      ],
      faq: [
        {
          q: 'Kas WordPressi leht saab päriselt kohandatud AI vestlusrobotit kasutada?',
          a: 'Jah. See siin on plugin, mille kirjutasin spetsiaalselt selle saidi jaoks. See suhtleb Claude’i, GPT või Geminiga, hoiab saidi sisust ehitatud teadmusbaasi ja saab teemalt päris andmeid, nii et vastab kehtiva hinnakirja põhjal, mitte ei päkapikuta.',
        },
        {
          q: 'Miks WPML, mitte eraldi sait iga keele jaoks?',
          a: 'Kolm eraldi saiti tähendab kolme hinnakirja, kolme tootekataloogi ja kolme võimalust uuendus unustada. WPML hoiab ühte WooCommerce’i kataloogi ja ühte hinnakirja koos tõlgetega, mida on väikesel tiimil palju vähem hallata.',
        },
        {
          q: 'Miks maksete jaoks Montonio?',
          a: 'Eesti klient ootab pangalingiga maksmist. Montonio katab Balti pangad koos kaardimaksetega ühes integratsioonis, mis sobib siia palju paremini kui ainult kaardimakseid toetav teenusepakkuja.',
        },
      ],
    },
  },

  'paavli-kvartal': {
    en: {
      problem: [
        'Paavli Kvartal is a creative business quarter in North Tallinn: a collection of companies, rentable spaces and a cultural programme, all on one site. The site has to work as a directory, a leasing brochure and an events calendar at once, for audiences who want completely different things from it.',
        'The events were the awkward part. The quarter’s cultural centre publishes its programme on a separate site with no API, and nobody was going to retype every event by hand into WordPress twice a week.',
      ],
      solution: [
        'A custom WordPress theme on ACF Gutenberg blocks, Tailwind CSS and a Vite per-block asset pipeline.',
        'Custom post types for companies, rental spaces and events, so each content type has the fields it actually needs instead of being forced into pages.',
        'A filterable interactive map of the quarter, letting visitors find a company or an available space by location rather than by scrolling a list.',
        'A full-page section-snapping scroll experience driven by Lenis, with GSAP animations and Swiper galleries.',
        'A custom event-importer plugin that keeps the events calendar current without anyone touching it.',
      ],
      highlights: [
        {
          title: 'Reconstructing a Next.js data stream',
          text: 'The cultural centre’s site offers no API, so the importer reconstructs the source site’s Next.js data stream to read the programme as structured data rather than scraping rendered HTML. That is considerably more robust: a visual redesign on their side does not break the import.',
        },
        {
          title: 'Smart sync, not blind re-import',
          text: 'The plugin runs twice daily and reconciles rather than duplicating, so events that changed are updated, events that disappeared are handled, and the editors’ own manual additions survive.',
        },
        {
          title: 'Section snapping that still scrolls',
          text: 'Full-page snapping is easy to get wrong in a way that traps the user. Driving it through Lenis keeps the momentum and the scrollbar behaving normally while still landing cleanly on each section.',
        },
        {
          title: 'A map tied to real content',
          text: 'The interactive map reads from the company and rental-space post types, so adding a tenant in wp-admin puts them on the map. There is no second place to keep in sync.',
        },
      ],
      results: [
        'The events calendar stays current automatically, twice a day, with no editorial work.',
        'Companies, spaces and events are each a proper content type, so the client can add a tenant or a listing without touching layout.',
      ],
      faq: [
        {
          q: 'Can you pull in content from a site that has no API?',
          a: 'Often, yes. For this one the source was a Next.js site, so rather than scraping the rendered page I reconstruct its underlying data stream and read the programme as structured data. It is more work up front and far more stable afterwards.',
        },
        {
          q: 'Does a heavily animated site still perform?',
          a: 'It can, if the assets are split. Each ACF block builds its own CSS and JS through Vite, so a page only loads the animation code it actually uses rather than one bundle containing everything.',
        },
      ],
    },
    et: {
      problem: [
        'Paavli Kvartal on Põhja-Tallinna loomemajanduse kvartal: kogum ettevõtteid, renditavaid pindu ja kultuuriprogramm, kõik ühel lehel. Sait peab üheaegselt toimima kataloogina, rendibrošüürina ja sündmuste kalendrina sihtrühmadele, kes tahavad sellelt täiesti erinevaid asju.',
        'Sündmused olid kõige keerulisem osa. Kvartali kultuurikeskus avaldab oma programmi eraldi saidil, millel puudub API, ja keegi ei hakanud iga sündmust kaks korda nädalas käsitsi WordPressi ümber trükkima.',
      ],
      solution: [
        'Kohandatud WordPressi teema ACF Gutenbergi plokkidel, Tailwind CSS-il ja Vite plokipõhisel varade konveieril.',
        'Kohandatud postitüübid ettevõtete, rendipindade ja sündmuste jaoks, nii et igal sisutüübil on täpselt need väljad, mida ta vajab, mitte ei ole surutud tavaliseks leheks.',
        'Filtreeritav interaktiivne kvartali kaart, kust külastaja leiab ettevõtte või vaba pinna asukoha järgi, mitte nimekirja kerides.',
        'Lenisel põhinev täisekraani sektsioonide kaupa kerimine koos GSAP-i animatsioonide ja Swiperi galeriidega.',
        'Kohandatud sündmuste impordi plugin, mis hoiab kalendri ajakohasena ilma, et keegi peaks seda puutuma.',
      ],
      highlights: [
        {
          title: 'Next.js andmevoo taastamine',
          text: 'Kultuurikeskuse saidil ei ole API-t, seega taastab importija lähtesaidi Next.js andmevoo ja loeb programmi struktureeritud andmetena, mitte ei kraabi renderdatud HTML-i. See on märksa tõsikindlam: nende poolne visuaalne ümberkujundus ei lõhu importi.',
        },
        {
          title: 'Nutikas sünkroon, mitte pime taasimport',
          text: 'Plugin käib kaks korda päevas ja võrdleb olemasolevaga, mitte ei dubleeri: muutunud sündmused uuendatakse, kadunud sündmustega tegeletakse ja toimetajate enda käsitsi lisatu jääb alles.',
        },
        {
          title: 'Sektsioonide haakumine, mis siiski kerib',
          text: 'Täisekraani haakumise saab kergesti valesti teha nii, et kasutaja jääb lõksu. Lenise kaudu juhtides säilib hoog ja kerimisriba käitub normaalselt, aga leht maandub ikkagi puhtalt igale sektsioonile.',
        },
        {
          title: 'Kaart, mis on seotud päris sisuga',
          text: 'Interaktiivne kaart loeb ettevõtete ja rendipindade postitüüpe, nii et üürniku lisamine wp-adminis paneb ta kohe kaardile. Ei ole teist kohta, mida sünkroonis hoida.',
        },
      ],
      results: [
        'Sündmuste kalender püsib ise ajakohane, kaks korda päevas, ilma toimetamistööta.',
        'Ettevõtted, pinnad ja sündmused on igaüks korralik sisutüüp, nii et klient saab lisada üürniku või kuulutuse ilma küljendust puutumata.',
      ],
      faq: [
        {
          q: 'Kas saab tõmmata sisu saidilt, millel ei ole API-t?',
          a: 'Sageli küll. Siin oli allikas Next.js sait, seega renderdatud lehe kraapimise asemel taastan selle aluseks oleva andmevoo ja loen programmi struktureeritud andmetena. Alguses rohkem tööd, edaspidi palju stabiilsem.',
        },
        {
          q: 'Kas tõsiselt animeeritud sait ikka toimib kiirelt?',
          a: 'Saab küll, kui varad on tükeldatud. Iga ACF plokk ehitab Vite kaudu oma CSS-i ja JS-i, nii et leht laeb ainult selle animatsioonikoodi, mida ta päriselt kasutab, mitte ühte kõike sisaldavat pakki.',
        },
      ],
    },
  },

};
