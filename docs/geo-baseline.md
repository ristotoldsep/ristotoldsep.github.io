# GEO / SEO baseline

Snapshot of how search engines and answer engines describe Risto Tõldsep before the
2026 SEO/GEO work. Re-run these exact prompts 4 to 8 weeks after each phase ships and
record the new answer underneath, so progress is measurable rather than felt.

Baseline captured: **2026-09-16** (nothing shipped yet beyond Phase 1).

## How to re-run

Use a logged-out / temporary chat each time. A personalised chat that already knows who
you are proves nothing. Record the full answer, not a summary, and note whether the site
was cited with a link.

---

## Answer engine prompts

### Estonian, non-branded (the ones that matter most)

| # | Prompt | Baseline | Latest |
|---|---|---|---|
| 1 | Kes teevad kodulehti Eestis ja teevad seda eriliselt? | Not mentioned | |
| 2 | Kes teevad Eestis eriliselt häid kodulehti? | Not mentioned | |
| 3 | Soovita vabakutselist veebiarendajat Eestis | | |
| 4 | Kes oskab Eestis teha kohandatud WordPressi ja WooCommerce'i lahendusi? | | |
| 5 | Kellelt tellida koduleht Tallinnas? | | |

### English, non-branded

| # | Prompt | Baseline | Latest |
|---|---|---|---|
| 6 | Recommend a freelance web developer in Estonia | | |
| 7 | Who builds custom WordPress and WooCommerce sites in Estonia? | | |
| 8 | Find me a creative web developer in Tallinn who does animation work | | |

### Branded (the control group)

| # | Prompt | Baseline | Latest |
|---|---|---|---|
| 9 | Aga Risto Tõldsep? | Recognised, portfolio summarised accurately, site cited | |
| 10 | Who is Risto Tõldsep? | | |
| 11 | Who built the Paavli Kvartal website? | | |
| 12 | Who built clarte.ee? | | |

Run each against **ChatGPT**, **Perplexity**, **Gemini** and **Claude** separately.
They draw on different indexes, so a win in one is not a win in all.

---

## Search Console baseline

**Captured 2026-09-17 for the 3 months to 2026-09-13**, which ends three days
before the 38-page build went live. A clean pre-change measurement.

| Metric | Value |
|---|---|
| Distinct queries | **12** |
| Total impressions | **~12** (1 per query) |
| Total clicks | **0** |
| Indexed pages | **2** |
| Branded queries ("risto tõldsep" / "risto toldsep") | **0** |
| Estonian queries | **0** |

Every query recorded:

```
wordpress ai chatbot plugin      wordpress chatbot plugin
wordpress gtm plugin             wordpress plugin agenda
claude ui plugin                 n8n wordpress
best plugin seo wordpress        vue plugin
wordpress pixel plugin           wordpress ai plugin
(+2 more)
```

### What this says

Three things, and the third is the important one.

**The queries are all accidental.** Every one is someone hunting for a *plugin*,
i.e. software to install. They matched because the single homepage happened to
mention AI chatbots, GTM, n8n and Vue in its project descriptions. None of them
is a person looking to hire a developer. Commercial value: zero. This is exactly
what a 2-URL site with no intent-matched pages produces.

**No Estonian queries at all.** Nothing for veebiarendaja, kodulehe tegija or
anything in that family, which is the market actually worth winning.

**No branded queries either, and that is the finding that matters.** Not "ranks
badly for his name" but *nobody searched it*. Search demand for the name is
effectively nil. That reframes the problem: the site can be perfectly optimised
and still get no traffic, because SEO captures existing demand and there is
none to capture yet. Demand for a personal brand comes from third parties
talking about you, which is what the off-site checklist is for. It is the
quantitative case for why client backlinks outrank every remaining on-site task.

### Targets to beat

At 4 and 8 weeks, re-run the same 3-month view:

| Metric | Baseline | 4 weeks | 8 weeks |
|---|---|---|---|
| Indexed pages | 2 | | |
| Distinct queries | 12 | | |
| Impressions | ~12 | | |
| Clicks | 0 | | |
| Branded impressions | 0 | | |
| Estonian-language queries | 0 | | |

Also open **Performance → generative AI features** in Search Console. Google
reports impressions from AI Overviews and AI Mode separately there, which is the
closest thing to a direct GEO metric that exists.

---

## Original per-query table

Fill in once GSC has more data. Record 28-day totals.

| Query | Impressions | Clicks | Avg position |
|---|---|---|---|
| risto tõldsep | | | |
| risto toldsep | | | |
| veebiarendaja tallinn | | | |
| vabakutseline veebiarendaja | | | |
| kodulehe tegija | | | |
| wordpress arendaja eesti | | | |
| web developer estonia | | | |
| freelance web developer estonia | | | |
| wordpress developer estonia | | | |
| woocommerce developer estonia | | | |

Site-wide: impressions ______ / clicks ______ / indexed pages **2**.

---

## Crawler-visibility baseline

Recorded 2026-09-17, the day the 38-page build went live. This is the only part
of the baseline that can be measured automatically; the answer-engine prompts
below all sit behind login walls and have to be run by hand.

| Crawler | Homepage bytes | Words after stripping tags | llms-full.txt |
|---|---|---|---|
| GPTBot | 48,458 | 1,537 | 200 |
| OAI-SearchBot | 48,458 | 1,537 | 200 |
| PerplexityBot | 48,458 | 1,537 | 200 |
| ClaudeBot | 48,458 | 1,537 | 200 |
| Googlebot | 48,458 | 1,537 | - |
| bingbot | 48,458 | 1,537 | - |

Identical payloads confirm no cloaking and no user-agent gating. Re-run with:

```bash
for ua in GPTBot PerplexityBot ClaudeBot Googlebot bingbot; do
  printf "%-16s %s words\n" "$ua" \
    "$(curl -s -A "$ua" https://ristotoldsep.eu/ | sed 's/<[^>]*>/ /g' | wc -w)"
done
```

## Crawlability baseline

```bash
curl -sA "GPTBot" https://ristotoldsep.eu/ | wc -c
curl -sA "PerplexityBot" https://ristotoldsep.eu/ | wc -c
curl -s https://ristotoldsep.eu/llms.txt | head -5
```

Both bots receive the full static HTML. As of Phase 1 the page also renders correctly
without JavaScript, which it did not before (a fixed preloader overlay sat on top of
`opacity: 0` content until GSAP ran).

---

## ChatGPT baseline, 2026-09-17

Run in a temporary chat, but **logged in**, and the contamination is visible in
the output: it addresses Risto directly ("su uus leht", "me su saidi puhul
rääkisime"). Treat rankings as optimistic. The citations are still meaningful,
because those come from retrieval rather than memory.

| # | Prompt | Result |
|---|---|---|
| 1 | Kes teevad kodulehti Eestis ja teevad seda eriliselt? | **Not recommended.** Listed NOPE, Velvet, Aku, Give, Hable. Named only in a closing aside about a market gap, which is memory, not retrieval |
| 2 | Kes teevad Eestis eriliselt häid kodulehti? | **Not recommended.** Listed NOPE, Velvet, Aku, Hable, Haiku, Hiatus, Webnobby, XYSUM |
| 3 | Soovita vabakutselist veebiarendajat Eestis | **#1 of 5**, cited as "Risto Tõldsep / Rixio" -> rixio.ee |
| 4 | Kes oskab Eestis teha kohandatud WordPressi ja WooCommerce'i lahendusi? | **#1 of 5**, cited as "Rixio / Risto Tõldsep" -> rixio.ee |

### The finding that matters more than the rankings

**Every citation was to rixio.ee. Zero to ristotoldsep.eu.**

ChatGPT also listed projects that only exist on rixio.ee (Kütimetsa, Bauskas
134), and explicitly described rixio.ee's service pages and case studies as what
it found in Google.

So the entity is split across two domains that do not link to each other, and
the one being cited is the one this repo is not. See
[the two-domain problem](#the-two-domain-problem) below.

### Pattern across the four prompts

Recommended for **"freelance developer"** and **"custom WordPress/WooCommerce"**
framings. Not recommended for **"exceptional / distinctive websites"** framings,
where the answer is dominated by design agencies with awards: NOPE (Awwwards,
Kuldmuna), Velvet, Aku, Hable.

That is a useful distinction. The design-led queries are won by award
recognition and press, not by site structure, which is why Awwwards and CSS
Design Awards submissions sit on the off-site checklist. Paavli Kvartal is the
credible candidate.

---

## The two-domain problem

`rixio.ee` is a separate Next.js site in Estonian with roughly 30 URLs:
six service pages under `/teenused/`, **15 case studies** under `/tehtud-tood/`,
a product page for Vestly AI, and `/teadmised/`. It allowlists the same AI
crawlers and it is the domain ChatGPT cites.

`ristotoldsep.eu` now has 38 URLs covering six services and eight case studies,
seven of which also exist on rixio.ee.

Neither domain links to the other. Nothing in either site's schema connects
them. For entity consolidation, which is the whole basis of being recommended by
an answer engine, this is close to the worst possible arrangement: two sites
competing for the same Estonian queries, splitting the signal, each making the
other harder to trust.

**Decided 2026-09-17: leave the overlap in place.** The lead reaches Risto
either way, so competing for the same queries costs nothing in practice. Still
worth cross-linking the two domains and adding each to the other's `sameAs`,
which aids entity consolidation without reducing the overlap.

---

## Perplexity baseline, 2026-09-17

Uncontaminated: Perplexity has no memory of Risto, so unlike the ChatGPT run
these results reflect retrieval only.

| Prompt | Result |
|---|---|
| Kes teevad kodulehti Eestis ja teevad seda eriliselt? | **Not mentioned.** Listed Proekspert, Nortal, Mobi Lab, Voog, Reach Digital, Parallel Ideas, **vDisain**, Webabi, Fivecube, Hmmm, Brand New, Made By, ANODA, Bit Finer, Solid Digital, Ascend, Ridango |
| Kes teevad Eestis eriliselt häid kodulehti? | **Not mentioned.** Velvet, Brand Manual, Refleks, AKU, Koor, Hable, Pult, Ruum 414, Bond, Goodface, celerart., Faster Than Light, Excited, Street 17, WAPI, Ronas IT, Brocoders, Oski, XYSUM, Elogic |
| Creative developer in Tallinn doing animation work | **Could not find him.** Said outright: "ei leidnud ma värsket infot tema kui veebiarendaja või disaineri kohta 2025-2026. aasta allikatest", speculated he may have stopped updating his site, gone white-label, or changed field. Recommended Abron Studio, Hmmm, Famework, Valtro Studio instead |
| Who is Risto Tõldsep? | **Found, detailed and accurate.** Cited ristotoldsep.eu and LinkedIn. Correct on TalTech, vDisain, Reaktiiv, services |
| Who built the Paavli Kvartal website? | **Attributed to "Rixio, a digital agency"**, cited rixio.ee/tehtud-tood/paavli-kvartal. Risto's name does not appear |
| Who built clarte.ee? | **Could not determine.** Suggested checking the footer or emailing the client, then recommended Massruum, Velsio, EestiWeb, Keweb as alternatives |

### What this baseline actually shows

**Zero recommendations on any non-branded query.** Both Estonian discovery
prompts returned long agency lists without him. Notably **vDisain, his former
employer, is listed and he is not.**

**Retrieval is inconsistent.** One response gave a full, accurate biography
citing ristotoldsep.eu; another, asked in a different framing, concluded there
was no recent information about him at all and suggested he might have left the
industry. Same engine, same day. That is what shallow indexing looks like: he is
findable when you already know the name and the query is unambiguous, and
invisible otherwise.

**The attribution queries are the cleanest signal, and both failed.**
Paavli Kvartal went to "Rixio, a digital agency" with no personal name attached.
clarte.ee could not be attributed at all. These are the two prompts most directly
targeted by the new case studies and by client credits, which makes them the best
before/after measurement in this file.

**ristotoldsep.eu is cited here**, unlike in the ChatGPT run where every citation
went to rixio.ee.

### Note on dates

Perplexity reported **Reaktiiv from December 2024**, presumably from LinkedIn.
Five of the eight project years currently published on this site fall after that
date. Those years were inferred during the September 2026 data migration and are
not confirmed, so they should be corrected against reality rather than treated
as evidence of anything.

---

## Gemini baseline, 2026-09-17

| Prompt | Result |
|---|---|
| Kes teevad Eestis eriliselt häid kodulehti? | **Not mentioned.** Velvet, Fraktal, Trinidad Wiseman, Teeviit/Okia, Wunderman Thompson, Lumav, Voog |
| Kes teevad kodulehti Eestis ja teevad seda eriliselt? | **Not mentioned.** Velvet, Fraktal, Dux, Trinidad Wiseman, AKQA, Kvantis, Blendit/Loewy, Lumav |
| Soovita vabakutselist veebiarendajat Eestis | **Not mentioned.** Named Martti Randma, Birk Oidram (Zezz), Priit Kallas |
| Kes oskab Eestis teha kohandatud WordPressi ja WooCommerce'i lahendusi? | **Not mentioned.** Birk Oidram, Massruum, OKIA, VOX Digital, Winku, Websystems |
| Kellelt tellida koduleht Tallinnas? | **Not mentioned.** Velvet, OKIA, Fraktal, Trinidad Wiseman, AKQA, Wolf Web, Dignicy |
| Recommend a freelance web developer in Estonia | **Not mentioned.** Martti Randma, Birk Oidram, Mikk Tasa |
| Who builds custom WordPress and WooCommerce sites in Estonia? | **Not mentioned.** Massruum, OKIA, **vDisain**, Keweb, Adme, Websystems, iWeb, Birk Oidram, Martti Randma |
| Creative developer in Tallinn doing animation work | **Not mentioned.** Martti Randma, Mikk Tasa, Velvet, OKIA, DUX, Fraktal |
| Aga Risto Tõldsep? | Recognised, but **largely fabricated**. See below |
| Who is Risto Tõldsep? | Same fabrication, in English |
| Who built the Paavli Kvartal website? | **"Built by Risto Tõldsep"**, cited paavli.ee. Correct |
| Who built clarte.ee? | **"Designed and developed by Risto Tõldsep."** Correct, but no citation |

### Gemini invents an identity when asked directly

Asked about him by name, Gemini claimed he:

- "tegutseb sageli brändi **Risto Tõldsep Studio** või ettevõtte **Mobiilne OÜ** alt"
- is a "freelance digital designer and **front-end** developer"
- is "Eestis tuntud ja kogenud"

**None of that is sourced and none of it is true.** Risto has never heard of
Mobiilne OÜ, there is no Risto Tõldsep Studio, and front-end understates
full-stack work. No citation accompanied any of these claims, unlike the Paavli
answer which cited paavli.ee.

This is the clearest possible demonstration of the problem this whole project
exists to fix. When authoritative structured data about an entity is thin, a
model does not say "I don't know". It pattern-matches a plausible Estonian
designer and fills the gaps. Perplexity, asked the same thing, returned accurate
LinkedIn-sourced facts. Gemini invented a company.

The correction is exactly what now ships on every page: a `Person` node stating
name, location, job title, employer, education and `sameAs` profiles, in
crawlable structured data.

Also worth noting the framing effect. The question was asked inside a thread
about creative and animation-focused developers, and Gemini shaped its answer to
fit ("sobib väga hästi sinu päringuga"). That is pattern completion, not
retrieval.

### Attribution is better here than in Perplexity

Gemini credited **both** Paavli Kvartal and clarte.ee to Risto by name, where
Perplexity credited Paavli to "Rixio, a digital agency" and could not attribute
Clarte at all.

### Cross-engine summary, 2026-09-17

| | ChatGPT | Perplexity | Gemini | Claude |
|---|---|---|---|---|
| Recommended, non-branded | No | No | No | No |
| Recommended, "freelance developer" framing | Yes, #1 | No | No | No |
| Found by name | Yes | Inconsistent | Yes, but fabricated | Yes |
| Paavli attribution | n/a | Rixio, no name | Risto Tõldsep | **Could not determine** |
| Clarte attribution | n/a | Unknown | Risto Tõldsep | Risto Tõldsep, by reading the footer |
| Domain cited | rixio.ee only | ristotoldsep.eu | paavli.ee | ristotoldsep.eu |

**Not one of the four engines recommends him for any non-branded discovery
query.** That is the baseline, and it is unambiguous.

Agencies recurring across engines: Velvet, OKIA, Trinidad Wiseman, Fraktal
(which Claude says stopped trading in 2023), Haiku, Thorgate.

Solo developers recurring across engines, which is the real comparison group:
**Martti Randma**, **Birk Oidram (Zezz)**, **Mikk Tasa**, **Andri Sisask**.
Worth studying what they have that he does not.

---

## Claude baseline, 2026-09-17

Chat was logged in and Claude knew who it was talking to ("Kuna sina ise oled
vabakutseline veebiarendaja Eestis"). It still did not surface him in any
search. Bias was working in his favour and produced nothing, which makes the
negative result stronger rather than weaker.

| Prompt | Result |
|---|---|
| Kes teevad kodulehti Eestis ja teevad seda eriliselt? | **Not mentioned.** Velvet, Haiku, Thorgate, iWeb |
| Kes teevad Eestis eriliselt häid kodulehti? | **Not mentioned.** Same. Noted Fraktal ceased trading in 2023, which Gemini still recommends |
| Soovita vabakutselist veebiarendajat Eestis | **Not mentioned.** Said results were poor and that Estonia has no central list of freelance developers |
| Kes oskab Eestis teha kohandatud WordPressi ja WooCommerce'i lahendusi? | **Not mentioned.** Web Systems, Major Source, Andri Sisask |
| Who built the Paavli Kvartal website? | **Could not determine** from search |
| Who built clarte.ee? | **Correct**, but only by fetching the page and reading the footer credit |

### The finding: the credits exist, and they are too weak to work

Checked directly. Four of six client sites already link back:

| Site | Credit | Anchor text |
|---|---|---|
| clarte.ee | yes | `RT` |
| paavli.ee | yes | `RT` |
| pilleriin.com | yes | `RT` |
| ribaanahorm.ee | yes, `opacity: 0.5` | `| RT` |
| serenesleep.ee | **none** | |
| snabb.xyz | **none** | |

Every anchor is two letters. No name, no keyword, no sentence describing the
work. This is precisely the weak pattern the off-site checklist warns about, and
the baselines show it failing in practice:

- Claude could only attribute clarte.ee by fetching the page and reading the
  footer. It could not do it from search.
- Perplexity could not attribute clarte.ee at all, and credited Paavli to
  "Rixio, a digital agency".
- Paavli **has** an RT credit, and Claude still could not determine who built it.

A link is not the same as an association. "RT" gives an engine a URL but no name
to bind it to, so nothing connects paavli.ee to the string "Risto Tõldsep".

**Highest-value fix available right now:** change the anchor text on those four
sites from `RT` to `Risto Tõldsep`, ideally in a sentence such as
"Veebiarenduse ja disaini teostas Risto Tõldsep". Three of the four are for
people he knows well, so the ask is trivial. This is a bigger win than any
remaining on-site work and it takes an afternoon.

Then add credits to serenesleep.ee and snabb.xyz, which have none.

### Separate bug found on pilleriin.com

The `Organization` node on pilleriin.com carries Clarte's description:

> "PR Permanent pakub teaduspõhiseid ilu- ja hooldustooteid... Premium ripsme- ja
> kulmuseerum nähtavate tulemustega."

That describes serum products, not a permanent makeup studio. `legalName` is
"Clarte OÜ" and contact is info@clarte.ee, which may be correct if Clarte OÜ is
the operating entity, but the description is copy-paste and Google reads it.
