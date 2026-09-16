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

  snabb: {
    en: {
      problem: [
        'Snabb unifies three services that customers normally deal with separately: parking, car wash and EV charging, across more than 250 locations for over 85,000 users. The marketing site has to explain all three clearly without becoming three sites bolted together.',
        'The team also needed to keep the site current themselves. Locations change, offers change, and a platform at that scale cannot wait on a developer for every page edit.',
      ],
      solution: [
        'Custom Elementor widgets written in PHP, so the marketing team edits complex, on-brand sections by drag and drop.',
        'Each widget encapsulates its own layout and data handling rather than being assembled from generic containers, which keeps the design consistent no matter who edits the page.',
        'A structure that presents parking, car wash and charging as one coherent product rather than three separate pitches.',
      ],
      highlights: [
        {
          title: 'Custom widgets instead of generic blocks',
          text: 'Elementor is fast to edit and easy to wreck. Building the sections as proper PHP widgets means the editing experience stays drag-and-drop while the markup, spacing and behaviour stay under control.',
        },
        {
          title: 'Built for a team, not a developer',
          text: 'The widgets expose only the controls that should be editable. Someone updating a location list cannot accidentally break the layout, which is what makes self-service editing actually work at this scale.',
        },
      ],
      results: [
        'The marketing team edits the site without developer involvement, on a platform serving 85,000+ users across 250+ locations.',
      ],
      faq: [
        {
          q: 'Is Elementor a reasonable choice for a large site?',
          a: 'It can be, if you build custom widgets rather than assembling pages from generic containers. That keeps the drag-and-drop editing the client wants while keeping the markup and design system under developer control.',
        },
      ],
    },
    et: {
      problem: [
        'Snabb ühendab kolm teenust, millega kliendid tavaliselt eraldi tegelevad: parkimine, autopesu ja elektriauto laadimine, enam kui 250 asukohas ja üle 85 000 kasutaja jaoks. Turundusleht peab kõiki kolme selgelt selgitama, muutumata kolmeks kokku poogitud saidiks.',
        'Tiim pidi saama saiti ka ise ajakohasena hoida. Asukohad muutuvad, pakkumised muutuvad, ja selles mahus platvorm ei saa iga lehemuudatuse pärast arendajat oodata.',
      ],
      solution: [
        'PHP-s kirjutatud kohandatud Elementori vidinad, nii et turundustiim muudab keerukaid brändikohaseid sektsioone lohistades.',
        'Iga vidin kapseldab oma küljenduse ja andmetöötluse, mitte ei ole kokku pandud üldistest konteineritest, mis hoiab disaini ühtsena sõltumata sellest, kes lehte muudab.',
        'Struktuur, mis esitleb parkimist, autopesu ja laadimist ühe tervikliku tootena, mitte kolme eraldi pakkumisena.',
      ],
      highlights: [
        {
          title: 'Kohandatud vidinad üldiste plokkide asemel',
          text: 'Elementorit on kiire muuta ja lihtne ära rikkuda. Sektsioonide ehitamine korralike PHP vidinatena hoiab muutmiskogemuse lohistatavana, aga markup, vahed ja käitumine kontrolli all.',
        },
        {
          title: 'Ehitatud tiimile, mitte arendajale',
          text: 'Vidinad näitavad ainult neid seadeid, mida tohib muuta. Asukohtade nimekirja uuendaja ei saa kogemata küljendust lõhkuda, ja just see paneb iseteeninduse selles mahus päriselt tööle.',
        },
      ],
      results: [
        'Turundustiim muudab saiti ilma arendaja abita platvormil, mis teenindab 85 000+ kasutajat 250+ asukohas.',
      ],
      faq: [
        {
          q: 'Kas Elementor sobib suurele saidile?',
          a: 'Võib küll, kui ehitad kohandatud vidinad, mitte ei pane lehti kokku üldistest konteineritest. Nii säilib kliendi soovitud lohistatav muutmine, aga markup ja disainisüsteem jäävad arendaja kontrolli alla.',
        },
      ],
    },
  },

  'ribaana-horm': {
    en: {
      problem: [
        'An Estonian real estate broker already publishes every listing on KV.ee, the national property portal. Duplicating all of it by hand on a personal site is work nobody sustains, and a personal site with stale listings is worse than none.',
        'The site also had to convert. A broker competing with the portal itself needs a page that makes someone choose them specifically, not just another list of flats.',
      ],
      solution: [
        'A fully custom PHP WordPress theme built with ACF blocks and Tailwind CSS, designed for conversion rather than as a listings dump.',
        'A custom KV.ee integration plugin that imports the broker’s listings daily from the KV.ee XML feed into a dedicated custom post type.',
        'An AJAX-filterable listings block so visitors narrow down without a page reload.',
      ],
      highlights: [
        {
          title: 'Daily import from the KV.ee XML feed',
          text: 'The plugin maps prices, areas, location and galleries straight into ACF fields and sets the featured image automatically, so a new listing on KV.ee appears on the broker’s own site without anyone retyping it.',
        },
        {
          title: 'Removed listings get archived, not orphaned',
          text: 'When a property disappears from the feed the plugin archives it rather than leaving a dead page behind. That matters for both visitors and for not accumulating thin, outdated URLs.',
        },
        {
          title: 'Filtering without reloads',
          text: 'The listings block filters over AJAX, so narrowing by price or area feels immediate rather than reloading the page for each choice.',
        },
      ],
      faq: [
        {
          q: 'Can you sync property listings from KV.ee automatically?',
          a: 'Yes. KV.ee publishes an XML feed, and I built a plugin that reads it daily, maps each field into ACF, sets featured images and archives listings that have been removed. The broker keeps working in KV.ee and their own site follows along.',
        },
        {
          q: 'Why have your own site if everything is on the portal anyway?',
          a: 'Because the portal sells the property and your own site sells you. It is where a client checks whether they want to work with this particular broker, which is a different job from listing a flat.',
        },
      ],
    },
    et: {
      problem: [
        'Eesti kinnisvaramaakler avaldab niikuinii kõik kuulutused KV.ee-s, üleriigilises kinnisvaraportaalis. Nende käsitsi dubleerimine oma lehel on töö, mida keegi kaua ei tee, ja aegunud kuulutustega isiklik leht on halvem kui üldse mitte midagi.',
        'Leht pidi ka konverteerima. Maakler, kes konkureerib portaaliga endaga, vajab lehte, mis paneb inimese valima just teda, mitte järjekordset korterite nimekirja.',
      ],
      solution: [
        'Täielikult kohandatud PHP WordPressi teema ACF plokkide ja Tailwind CSS-iga, disainitud konversiooniks, mitte kuulutuste hunnikuks.',
        'Kohandatud KV.ee integratsiooni plugin, mis impordib maakleri kuulutused iga päev KV.ee XML-voost eraldi kohandatud postitüüpi.',
        'AJAX-iga filtreeritav kuulutuste plokk, et külastaja saaks valikut kitsendada ilma lehe uuesti laadimiseta.',
      ],
      highlights: [
        {
          title: 'Igapäevane import KV.ee XML-voost',
          text: 'Plugin kaardistab hinnad, pindalad, asukoha ja galeriid otse ACF väljadesse ning seab esipildi automaatselt, nii et uus kuulutus KV.ee-s ilmub maakleri enda lehele ilma ümbertrükkimiseta.',
        },
        {
          title: 'Eemaldatud kuulutused arhiveeritakse, ei jää rippuma',
          text: 'Kui objekt voost kaob, arhiveerib plugin selle, mitte ei jäta maha surnud lehte. See on oluline nii külastaja jaoks kui ka selleks, et ei koguneks õhukesi aegunud URL-e.',
        },
        {
          title: 'Filtreerimine ilma laadimiseta',
          text: 'Kuulutuste plokk filtreerib AJAX-iga, nii et hinna või pindala järgi kitsendamine tundub kohene, mitte ei lae iga valiku peale lehte uuesti.',
        },
      ],
      faq: [
        {
          q: 'Kas kinnisvarakuulutusi saab KV.ee-st automaatselt sünkroonida?',
          a: 'Jah. KV.ee avaldab XML-voo ja ma ehitasin plugina, mis loeb seda iga päev, kaardistab iga välja ACF-i, seab esipildid ja arhiveerib eemaldatud kuulutused. Maakler töötab edasi KV.ee-s ja tema enda leht järgneb.',
        },
        {
          q: 'Milleks oma leht, kui kõik on niikuinii portaalis?',
          a: 'Sest portaal müüb objekti ja sinu enda leht müüb sind. Seal otsustab klient, kas ta tahab just selle maakleriga koostööd teha, ja see on hoopis teine ülesanne kui korteri kuulutamine.',
        },
      ],
    },
  },

  'serene-sleep': {
    en: {
      problem: [
        'Serene Sleep sells luxury silk bedding, a category where the product photograph and the certification do most of the selling. A generic store template makes a €200 duvet cover look like a €20 one.',
      ],
      solution: [
        'A custom WooCommerce theme built around the product imagery rather than around a template’s default grid.',
        'A premium brand identity carried consistently through typography, spacing and product presentation.',
        'An OEKO-TEX certification showcase placed where it supports the purchase decision rather than buried in a tab.',
      ],
      highlights: [
        {
          title: 'Product presentation as the design',
          text: 'In this category the imagery is the argument. The layout gives photography room to work rather than squeezing it into a template’s fixed thumbnail grid.',
        },
        {
          title: 'Certification as a conversion element',
          text: 'OEKO-TEX certification is a real reason to trust the price. Surfacing it in the product flow rather than in a footer link treats it as the selling point it is.',
        },
      ],
      faq: [
        {
          q: 'Does design really change conversion for a premium product?',
          a: 'For a premium physical product it is most of the argument. The buyer cannot touch the fabric, so presentation and proof of quality are doing the work the product would do in a shop.',
        },
      ],
    },
    et: {
      problem: [
        'Serene Sleep müüb luksuslikku siidvoodipesu, kategoorias, kus tootefoto ja sertifikaat teevad suurema osa müügitööst ära. Üldine poemall paneb 200-eurose tekikoti välja nägema nagu 20-eurose.',
      ],
      solution: [
        'Kohandatud WooCommerce’i teema, mis on ehitatud tootepiltide, mitte malli vaikimisi võrgustiku ümber.',
        'Premium brändiidentiteet, mis kandub järjepidevalt läbi tüpograafia, vahede ja tooteesitluse.',
        'OEKO-TEX sertifikaadi esitlus kohas, kus see toetab ostuotsust, mitte ei ole peidetud sakivahesse.',
      ],
      highlights: [
        {
          title: 'Tooteesitlus ongi disain',
          text: 'Selles kategoorias on pilt argument. Küljendus annab fotograafiale ruumi töötada, mitte ei suru seda malli fikseeritud pisipiltide võrku.',
        },
        {
          title: 'Sertifikaat kui konversioonielement',
          text: 'OEKO-TEX sertifikaat on päris põhjus hinda usaldada. Selle toomine ostuteekonda, mitte jaluse linki, kohtleb seda müügiargumendina, nagu ta on.',
        },
      ],
      faq: [
        {
          q: 'Kas disain päriselt muudab premium toote konversiooni?',
          a: 'Premium füüsilise toote puhul on see suurem osa argumendist. Ostja ei saa kangast katsuda, seega teevad esitlus ja kvaliteeditõend seda tööd, mida poes teeks toode ise.',
        },
      ],
    },
  },

  uusloo: {
    en: {
      problem: [
        'Uusloo needed a site that feels as responsive as an app while keeping server-rendered routing, without the overhead of building and maintaining a separate API and a separate frontend application.',
      ],
      solution: [
        'A Laravel backend handling routing, data and business logic.',
        'A Vue frontend for the interface.',
        'Inertia.js joining the two, so pages are Vue components but routing and data still come from Laravel.',
      ],
      highlights: [
        {
          title: 'SPA feel without a separate API',
          text: 'Inertia lets Laravel controllers return Vue pages directly. You get client-side navigation without building, versioning and securing a REST API that only your own frontend ever calls.',
        },
        {
          title: 'One codebase, one deploy',
          text: 'Backend and frontend live and ship together, which for a project this size is considerably less to operate than two applications.',
        },
      ],
      faq: [
        {
          q: 'When would you use Inertia instead of a REST API?',
          a: 'When the only consumer of the API is your own frontend. Inertia removes a whole layer you would otherwise build and maintain for no external benefit. If you need a public API or a mobile client too, that calculation changes.',
        },
      ],
    },
    et: {
      problem: [
        'Uusloo vajas lehte, mis tundub sama kiire kui rakendus, aga säilitab serveripoolse marsruutimise, ilma et peaks ehitama ja üleval pidama eraldi API-t ja eraldi frontend-rakendust.',
      ],
      solution: [
        'Laraveli backend, mis tegeleb marsruutimise, andmete ja äriloogikaga.',
        'Vue frontend kasutajaliidese jaoks.',
        'Inertia.js, mis need kaks ühendab, nii et lehed on Vue komponendid, aga marsruutimine ja andmed tulevad endiselt Laravelist.',
      ],
      highlights: [
        {
          title: 'SPA tunnetus ilma eraldi API-ta',
          text: 'Inertia lubab Laraveli kontrolleritel tagastada otse Vue lehti. Saad kliendipoolse navigeerimise ilma, et peaksid ehitama, versioonima ja turvama REST API-t, mida kasutab ainult sinu enda frontend.',
        },
        {
          title: 'Üks koodibaas, üks deploy',
          text: 'Backend ja frontend elavad ja lähevad tootmisse koos, mida on selle suurusega projekti puhul märksa vähem hallata kui kahte rakendust.',
        },
      ],
      faq: [
        {
          q: 'Millal kasutada Inertiat REST API asemel?',
          a: 'Siis, kui API ainus tarbija on sinu enda frontend. Inertia võtab ära terve kihi, mida sa muidu ehitaksid ja hooldaksid ilma igasuguse välise kasuta. Kui vajad ka avalikku API-t või mobiiliklienti, muutub see arvutus.',
        },
      ],
    },
  },

  qinutritionist: {
    en: {
      problem: [
        'QiNutritionist serves clients in three languages, English, Estonian and Spanish, and the owner needed to edit content without a developer. A full CMS would be overkill for a site of this size, and hosting one is ongoing cost and ongoing security surface.',
      ],
      solution: [
        'A static site built with Astro, so pages are plain HTML with no server to maintain or patch.',
        'Three fully separate language versions rather than machine-translated variants.',
        'A git-based CMS, so the client edits through an admin interface while every change lands as a commit.',
        'Automated deploys through GitHub Actions, triggered by those commits.',
      ],
      highlights: [
        {
          title: 'A CMS with no database',
          text: 'Content lives in the repository. The client gets a normal editing interface, and every edit is a commit with full history, so a bad change is reverted rather than restored from backup.',
        },
        {
          title: 'Static output, so nothing to patch',
          text: 'There is no PHP, no database and no plugin surface. For a small business site that removes an entire category of maintenance and an entire category of vulnerability.',
        },
        {
          title: 'Deploys on commit',
          text: 'GitHub Actions rebuilds and publishes when content changes, so the client never waits on a developer to see an edit go live.',
        },
      ],
      faq: [
        {
          q: 'Can a static site have a CMS?',
          a: 'Yes. A git-based CMS gives the client a normal admin interface, but instead of writing to a database it commits to the repository and triggers a rebuild. You get editing without running a server.',
        },
        {
          q: 'Is a static site cheaper to run than WordPress?',
          a: 'Usually, yes, and the bigger saving is maintenance. No database, no plugin updates, no security patching. The tradeoff is that genuinely dynamic features need a different approach.',
        },
      ],
    },
    et: {
      problem: [
        'QiNutritionist teenindab kliente kolmes keeles, inglise, eesti ja hispaania, ning omanik pidi saama sisu muuta ilma arendajata. Täismahus CMS oleks selle suurusega saidi jaoks liiast ning selle üleval pidamine tähendab püsikulu ja püsivat turvariski.',
      ],
      solution: [
        'Astroga ehitatud staatiline sait, nii et lehed on tavaline HTML ja ei ole serverit, mida hooldada ega paigata.',
        'Kolm täiesti eraldi keeleversiooni, mitte masintõlgitud variandid.',
        'Git-põhine CMS, nii et klient muudab sisu haldusliideses, aga iga muudatus jõuab kohale commitina.',
        'Automaatsed deployd GitHub Actionsi kaudu, mille käivitavad needsamad commitid.',
      ],
      highlights: [
        {
          title: 'CMS ilma andmebaasita',
          text: 'Sisu elab repositooriumis. Klient saab tavalise muutmisliidese ja iga muudatus on commit täieliku ajalooga, nii et halva muudatuse saab tagasi kerida, mitte varukoopiast taastada.',
        },
        {
          title: 'Staatiline väljund, seega pole midagi paigata',
          text: 'Ei ole PHP-d, andmebaasi ega pluginate rünnakupinda. Väikeettevõtte lehe puhul kaob sellega terve kategooria hooldust ja terve kategooria haavatavusi.',
        },
        {
          title: 'Deploy commiti peale',
          text: 'GitHub Actions ehitab ja avaldab uuesti, kui sisu muutub, nii et klient ei oota kunagi arendajat, et muudatus live’i jõuaks.',
        },
      ],
      faq: [
        {
          q: 'Kas staatilisel saidil saab CMS olla?',
          a: 'Jah. Git-põhine CMS annab kliendile tavalise haldusliidese, aga andmebaasi kirjutamise asemel teeb commiti repositooriumi ja käivitab uue ehituse. Saad sisuhalduse ilma serverit pidamata.',
        },
        {
          q: 'Kas staatiline sait on odavam üleval pidada kui WordPress?',
          a: 'Tavaliselt küll, ja suurem kokkuhoid on hoolduses. Ei ole andmebaasi, pluginate uuendusi ega turvapaikamist. Vastukaaluks vajavad päriselt dünaamilised funktsioonid teistsugust lähenemist.',
        },
      ],
    },
  },

};
