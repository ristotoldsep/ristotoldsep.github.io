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

Fill in once GSC is verified. Record 28-day totals.

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

## Crawlability baseline

```bash
curl -sA "GPTBot" https://ristotoldsep.eu/ | wc -c
curl -sA "PerplexityBot" https://ristotoldsep.eu/ | wc -c
curl -s https://ristotoldsep.eu/llms.txt | head -5
```

Both bots receive the full static HTML. As of Phase 1 the page also renders correctly
without JavaScript, which it did not before (a fixed preloader overlay sat on top of
`opacity: 0` content until GSAP ran).
