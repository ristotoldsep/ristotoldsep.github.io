# Google Business Profile setup

A GBP listing is the only route into Google's local map pack. For
`veebiarendaja tallinn` or `kodulehe tegija tallinn` that block sits above the
organic results, and no amount of on-page work gets you there without it.

Everything below is ready to paste. Field limits are checked against Google's
caps, which truncate silently if you go over.

---

## Read this first: are you actually eligible?

Google requires a business to "make in-person contact with customers". A purely
remote freelancer technically does not qualify, and listings do get suspended
over it.

If you meet clients at their offices for kickoffs, handovers or workshops, you
qualify as a **service-area business** and this is straightforward. If you never
meet anyone in person, this is a grey area and suspension is a real possibility.
Your call, but go in knowing it rather than finding out later.

---

## Decision: which name?

**Recommended: `Rixio Digital`.**

It is a real business identity with its own domain, email (hello@rixio.ee),
service catalogue and published pricing. GBP wants a real-world business name,
and "Rixio Digital" is one in a way that a personal name is not. It is also the
Estonian-market brand, which is the market this listing targets.

The alternative is `Risto Tõldsep`, which is legitimate for a sole trader but
weaker here: no business email, no published pricing, and the English-leaning
personal brand is not what an Estonian local search is looking for.

Either way, put the *other* one in the description so the two stay connected.

### Do not keyword-stuff the name

`Rixio Digital` is fine. `Rixio Digital - Veebiarendus ja Kodulehed Tallinnas`
is a name-guideline violation and one of the most common reasons listings get
suspended or edited by Google. The categories and services fields exist for
keywords. The name field does not.

---

## Fields to fill

### Business name
```
Rixio Digital
```

### Categories

Primary drives which searches you appear in, so it matters most.

| Slot | Category |
|---|---|
| **Primary** | Website designer *(Veebidisainer)* |
| Secondary | Software company |
| Secondary | Internet marketing service |
| Secondary | Computer consultant |

Skip "Web hosting company" unless you actually sell hosting.

### Business type
**Service-area business.** Hide the address; you are not taking walk-ins.

### Service area
```
Tallinn
Harjumaa
Eesti
```
Estonia as a whole is worth adding, since remote work covers it.

### Contact
| Field | Value |
|---|---|
| Website | `https://rixio.ee/` |
| Phone | your business number |
| Email | `hello@rixio.ee` |

One website field only. Use rixio.ee if the listing is Rixio Digital, and link
ristotoldsep.eu from the description instead.

### Description, Estonian (620 / 750 chars)

```
Rixio Digital on Tallinnas tegutsev veebiarenduse stuudio, mille taga on Risto Tõldsep — veebiarendaja ja disainer, kellel on üle 5 aasta kogemust ja 250+ projekti.

Teen kohandatud kodulehti ja WooCommerce e-poode, mis on ehitatud nullist, mitte valmis mallist. See tähendab kiiremat lehte, puhast koodi ja disaini, mis on päriselt sinu oma.

Teenused: kodulehed ja veebiarendus, e-poed, veebirakendused, API-integratsioonid ja automatiseerimine, tehniline SEO ja analüütika, hooldus ning tehniline tugi.

Töötan nii disaini kui arenduse poolel, nii et midagi ei lähe üleandmisel kaduma. Räägin eesti ja inglise keeles.
```

### Description, English (585 / 750 chars)

```
Rixio Digital is a Tallinn-based web development studio run by Risto Tõldsep, a web developer and designer with 5+ years of experience and 250+ projects.

I build custom websites and WooCommerce stores from scratch rather than from a template, which means a faster site, clean code and a design that is genuinely yours.

Services: websites and web development, online stores, web applications, API integrations and automation, technical SEO and analytics, maintenance and support.

I handle both the design and the build, so nothing is lost in handover. I work in Estonian and English.
```

Note the description names Risto Tõldsep explicitly. That is deliberate: it is
what ties the listing to the person, which is the whole point.

### Services, with the prices already published on rixio.ee

| Service | From | To |
|---|---|---|
| Kodulehed ja veebiarendus | 499 € | 4000 € |
| E-poed (WooCommerce) | 1499 € | 6000 € |
| Veebirakendused ja digitooted | on request | |
| Integratsioonid ja automatiseerimine | 900 € | 3000 € |
| Tehniline SEO, GEO ja analüütika | 590 € | 2000 € |
| Hooldus ja tehniline tugi | on request | |

Listing prices is optional but worth doing. It filters out the €300 enquiries
before they reach you, and Google shows price ranges in some result layouts.

### Hours
Set real working hours. An empty hours field looks abandoned. If you do not
want calls at fixed times, set hours and turn the call button off rather than
leaving it blank.

### Attributes
Tick whatever is true: online appointments, online estimates,
LGBTQ+ friendly, women-owned is not applicable. Attributes are weak signals but
they are free.

---

## Verification

Service-area businesses in Estonia usually get **video verification**: a
recorded walkthrough showing your workspace, some evidence of the business
(equipment, branded material, business documents) and your face. Postcard
verification also happens.

Have ready:
- Business registration documents for the legal entity behind Rixio
- Something showing the business name physically, even a laptop with the site open
- Your workspace

Verification can take a few days. Do not create a second listing if it is slow;
duplicates cause suspensions.

---

## After it is live

The listing itself is not the win. An empty verified listing ranks poorly.

- [ ] **Photos.** Logo, the OG card, screenshots of Paavli Kvartal, Clarte,
      PR Permanent PMU. A profile with no photos looks dead.
- [ ] **Reviews, 3 to 5 to start.** This is the single biggest ranking factor
      in the map pack. Ask the clients you already have a relationship with.
      Reviews that name the technology ("tegi meile WooCommerce e-poe") are
      worth more than "great work, recommended".
- [ ] **Posts.** One every few weeks. A new case study going live is a post.
- [ ] **Q&A.** You can ask and answer your own questions. Seed the obvious
      ones: what a website costs, how long it takes, whether you work remotely.
- [ ] **Link it from rixio.ee**, and add the GBP URL to the `sameAs` array in
      the site's structured data.

### Review request

> Tere [nimi], kui sul on hetk, kas saaksid jätta lühikese arvustuse Google'is?
> Paar lauset sellest, mida me koos tegime ja kuidas koostöö sujus, on täiesti
> piisav. Link: [GBP review link]
>
> Aitäh!

Get the short review link from the GBP dashboard: **Ask for reviews**. Do not
send people hunting for the listing.

---

## Measuring it

GBP has its own insights, separate from Search Console: how many people found
you via search vs maps, and what they did next. Record the first month as a
baseline the way [geo-baseline.md](geo-baseline.md) does for answer engines.

The queries to watch are the ones that returned nothing for you in the
September 2026 baseline: `veebiarendaja tallinn`, `kodulehe tegija`,
`kodulehe tegemine tallinn`.
