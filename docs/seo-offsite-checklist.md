# Off-site SEO / GEO checklist

The site work makes Risto findable. Third-party corroboration is what makes an
answer engine confident enough to **recommend** him. Claiming excellence on your
own site carries near-zero weight; being described that way elsewhere carries
most of it.

Work through this alongside the code, not after it. The slowest items here
(backlinks, reviews, awards) are the ones that matter most, so start them first.

---

## The canonical sentence

Use this wording, or something very close to it, everywhere. Consistency is what
lets an AI system conclude that all these profiles describe one person.

**English**
> Risto Tõldsep is a freelance web developer and designer based in Tallinn,
> Estonia, who designs and builds custom websites, WordPress and WooCommerce
> stores, interactive frontends, and AI-powered web tools.

**Estonian**
> Risto Tõldsep on Tallinnas tegutsev vabakutseline veebiarendaja ja disainer,
> kes teeb kohandatud kodulehti, WordPressi ja WooCommerce e-poode,
> interaktiivseid kasutajaliideseid ja AI-põhiseid veebilahendusi.

---

## 1. Entity consistency (do first, cheap, high impact)

Same name, same photo, same job title, same bio, same URL, everywhere.

- [ ] LinkedIn
- [ ] GitHub
- [ ] Daily.dev
- [ ] Instagram
- [ ] Facebook
- [ ] Behance / Dribbble if used
- [ ] Any agency profile page that lists him

Use `Risto Tõldsep` as the primary name. The site already declares
`alternateName: "Risto Toldsep"` in schema for the diacritic-free spelling, so
do not fragment the name across profiles.

---

## 2. LinkedIn

- [ ] **Headline:** `Web Developer & Designer | Custom Websites, WordPress & WooCommerce | Tallinn, Estonia`
- [ ] **About:** open with the canonical sentence, then three short paragraphs:
      what he builds, the AI/automation angle, and that he takes freelance work.
- [ ] **Featured:** pin the three strongest case studies:
      PR Permanent PMU, Paavli Kvartal, Clarte.
- [ ] **Experience entries:** name the technologies in the text, not just the
      job title. "Custom WordPress themes with ACF blocks and WooCommerce" is a
      searchable string; "Developer" is not.
- [ ] **Recommendations:** ask three past clients. Ask them to mention what was
      actually built, in their own words.

### Recommendation request template

> Hi [name], I'm tidying up my profile and would really value a short
> recommendation from you. No need for anything long: a couple of sentences on
> what I built for [project] and what it was like to work together is perfect.
> If it's useful, the specifics were [one line: e.g. "the custom WooCommerce
> store and the trilingual setup"].

---

## 3. GitHub

Independent technical signal, which AI systems weight heavily because it is hard
to fake.

- [ ] Profile README with the canonical sentence plus links to the case studies.
- [ ] Publish two or three small, genuinely useful repos. Candidates from work
      already done:
      - an ACF Gutenberg block starter
      - the Vite per-block asset pipeline as a standalone template
      - a WordPress theme starter
- [ ] Real READMEs on each. A repo nobody can understand is not a signal.

---

## 4. Google Business Profile

- [ ] Create a service-area business for Tallinn, if eligible.
- [ ] Category: Website designer / Web developer.
- [ ] Use the canonical sentence in the description.

This is the single most direct lever for `veebiarendaja tallinn` and
`kodulehe tegija tallinn`.

---

## 5. Client credits and backlinks

A link from a client's own site, in a sentence that says what he did, is worth
far more than a footer "Website by".

- [ ] Ask past clients to credit him in their news post or about page.
- [ ] Target: Clarte, Paavli Kvartal, PR Permanent PMU, Ribaana Horm, Snabb.

### Credit request, Estonian

> Tere [nimi], üks väike palve. Kui teil on plaanis uuest kodulehest kuskil
> kirjutada või kui teil on lehel koht, kus partnerid on kirjas, kas te saaksite
> lisada rea stiilis "Veebiarenduse ja disaini teostas Risto Tõldsep" koos
> lingiga ristotoldsep.eu-le? See aitab mind rohkem kui oskate arvata ja
> loomulikult ei ole sellega mingit kiiret.

### Credit request, English

> Hi [name], a small favour. If you ever write about the new site, or if you
> have a partners section, would you be able to add a line along the lines of
> "Web development and design by Risto Tõldsep" with a link to ristotoldsep.eu?
> It helps me more than you'd think, and there's no rush at all.

---

## 6. Reviews

Reviews that name the technology are the most useful, because they create the
association independently of his own wording.

- [ ] Google Business Profile reviews (once the profile exists)
- [ ] LinkedIn recommendations (see above)
- [ ] Clutch profile, if worth the setup effort

---

## 7. Directories and lists

- [ ] Estonian developer and agency directories
- [ ] "Freelance developers Estonia" roundup articles: find them, ask to be added
- [ ] Partner pages at agencies he subcontracts for
- [ ] Reaktiiv team page, if there is one, with the canonical wording

---

## 8. Awards and showcases

Even a nominee or honourable mention creates a whole new set of authoritative
associations with the name.

- [ ] Awwwards
- [ ] CSS Design Awards
- [ ] CSS Winner

Best candidates: **Paavli Kvartal** (interactive map, section-snapping scroll)
and **Clarte** (premium visual design).

---

## 9. Writing off-site

- [ ] Cross-post two or three of the blog articles to Dev.to
- [ ] daily.dev — note the existing constraint: only "New Post" is open to
      rixio.ee, and no self-promotional content. Respect that.

Two or three genuinely good posts beat twenty thin ones.

---

## 10. Project-name association

Someone searching "Paavli Kvartal website developer" or "Clarte veebiarendaja"
should be able to reach Risto. That comes from case study titles, client credits
and off-site mentions all naming both the project and him.

- [ ] Check each project name in Google and see what comes back
- [ ] Check each project name in ChatGPT and Perplexity

---

## IndexNow

The site supports IndexNow, which pushes changed URLs straight to Bing, Yandex,
Seznam and Naver instead of waiting to be crawled. Google does not participate.

```bash
npm run build
npm run indexnow                        # everything in the sitemap
npm run indexnow -- /blog/new-post/     # just what changed
npm run indexnow -- --dry-run           # show what would be sent
```

It is deliberately not part of `npm run build`. IndexNow is for pages that
actually changed, and resubmitting all 38 URLs on every deploy is what gets a
host throttled. Run it when you publish or substantially rewrite something.

The key lives at `public/<key>.txt` and is public by design.

---

## Tracking

Re-run the prompts in [geo-baseline.md](geo-baseline.md) every four to eight
weeks and record the answers. The specific target is that

> Kes teevad Eestis eriliselt häid kodulehti?

returns Risto Tõldsep without being prompted with his name.
