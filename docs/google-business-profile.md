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

## Decision: whose name

**Listed as `Rixio Digital`, with no personal name anywhere in the profile.**

Rixio Digital is a real business identity with its own domain, email
(hello@rixio.ee), service catalogue and published pricing, which is what GBP
expects. The personal name is deliberately left out, so the description is
written in studio voice ("Teeme", "We build") rather than first person, and the
"5+ years, 250+ projects" credentials are dropped because they are personal and
would point straight back at an individual.

**Known consequence:** this listing builds the *Rixio Digital* entity only. It
does nothing for the "Risto Tõldsep" entity work on ristotoldsep.eu, so do not
expect it to move the name-based answer-engine baselines in
[geo-baseline.md](geo-baseline.md). It should still move
`veebiarendaja tallinn` and `kodulehe tegija tallinn`, which is the point.

### Do not keyword-stuff the name

`Rixio Digital` is fine. `Rixio Digital - Veebiarendus ja Kodulehed Tallinnas`
is a name-guideline violation and one of the most common reasons listings get
suspended or silently edited by Google. The categories and services fields exist
for keywords. The name field does not.

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

### Business type and address
**Service-area business.** Google still needs an address for verification even
when it is hidden, so enter the real one and make sure the "hide address"
option is on before publishing.

```
Pallasti 16, Tallinn
```

Add the postcode Google asks for. Once hidden, the street address does not
appear on the listing or in Maps; only the service area does. Check that toggle
before submitting, because unhiding a home address later is not something you
can quietly undo.

Keep the street out of rixio.ee's structured data too. Its `PostalAddress`
currently carries only `addressLocality: Tallinn` and `addressCountry: EE`,
which is correct for a hidden address and should stay that way.

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

### Description, Estonian (648 / 750 chars)

Written in studio voice, with no personal name. See "Decision: whose name"
above for why.

```
Rixio Digital on Tallinnas tegutsev veebiarenduse stuudio. Teeme kohandatud kodulehti, e-poode ja veebirakendusi ettevõtetele, kes on valmis mallidest välja kasvanud.

Iga leht ehitatakse nullist, mitte valmis teemast. See tähendab kiiret laadimist, puhast koodi ja disaini, mis on päriselt sinu oma — mitte sadadel teistel saitidel kasutusel.

Teenused: kodulehed ja veebiarendus, WooCommerce e-poed, veebirakendused ja digitooted, API-integratsioonid ja automatiseerimine, tehniline SEO ja analüütika, hooldus ning tehniline tugi.

Disain ja arendus tulevad ühest kohast, nii et midagi ei lähe üleandmisel kaduma. Töötame eesti ja inglise keeles.
```

### Description, English (679 / 750 chars)

```
Rixio Digital is a web development studio based in Tallinn, Estonia. We build custom websites, online stores and web applications for businesses that have outgrown templates.

Every site is built from scratch rather than from an off-the-shelf theme. That means fast loading, clean code and a design that is genuinely yours rather than one shared with hundreds of other sites.

Services: websites and web development, WooCommerce online stores, web applications and digital products, API integrations and automation, technical SEO and analytics, maintenance and support.

Design and development come from one place, so nothing is lost in handover. We work in Estonian and English.
```

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

```
Monday to Friday   9:00 AM - 5:00 PM
Saturday, Sunday   Closed
```

GBP hours are not a promise to answer the phone; they are a legitimacy signal
and they drive the "Open now" filter, which matters because people search for a
developer during working hours. Weekend-open reads as a side hustle, all-week
reads as fake, and an empty hours field reads as abandoned.

Working a day job at those exact hours is not a reason to set odd ones like
17:00-21:00, which would show the business as closed precisely when people are
searching. Solve it on the contact side instead: leave the phone number off, or
add it and turn the call button off, and let hello@rixio.ee and the website
button take the enquiries. A service business with no phone number is
unremarkable now. One that appears closed every weekday is not.

### Attributes
Tick whatever is true: online appointments, online estimates,
LGBTQ+ friendly, women-owned is not applicable. Attributes are weak signals but
they are free.

---

## Photos

Two separate steps in the signup flow, and they want different things.

### "Add a storefront photo" — skip it

There is no storefront. The slot is for businesses customers walk into, and the
small print under the upload box is the real reason to avoid it:

> Location metadata from your photos may be used to update your business'
> location in Maps.

A photo shot at a home office carries GPS EXIF, and letting Google adjust the
pin from it defeats the point of hiding the address.

### "Add photos of your business" — use this one

A verified listing with no photos ranks poorly and reads as dead. Prepared set,
already converted to JPG/PNG because GBP rejects WebP and AVIF, and stripped of
metadata:

| File | Use |
|---|---|
| `rixio-logo.png` | Logo |
| `rixio-cover.png` | Cover, already 1200x630 |
| `pilleriin.jpg`, `paavli.jpg`, `clarte.jpg` | The three strongest builds |
| `snabb.jpg`, `ribaana.jpg`, `serenesleep.jpg`, `qi.jpg`, `uusloo.jpg` | The rest |

Website screenshots carry no GPS, so they are safe as they are. Anything shot
at home should have its EXIF stripped first: open in Preview and export, or
`exiftool -gps:all= photo.jpg`.

Upload the logo and cover first so Google picks the right ones for those slots,
then the work screenshots.

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

- [ ] **Photos.** Already prepared, see the section below.
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
