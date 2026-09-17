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
