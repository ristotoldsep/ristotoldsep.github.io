# tools

Source files for the generated brand images. They are HTML rather than binaries
so they can be re-rendered whenever the positioning line changes, and so they
stay consistent with the site: same Syne type, same `#070710` ground, same grid
and gold accent tokens.

| Template | Output | Size |
|---|---|---|
| `og-card.html` | `public/og-image.jpg` | 1200x630 |
| `linkedin-cover.html` | `tools/output/linkedin-cover.{png,jpg}` | 1584x396 |

`tools/output/` is not published; the LinkedIn cover is uploaded by hand to a
profile, so it does not belong in `public/`.

## Regenerating

```bash
npm run build
npm run preview        # serves dist/ on :4321
```

Copy the template into `dist/` so the browser can reach it, then screenshot at
exactly the target size:

```bash
# Social card. Note the sed: the template references /portrait.jpg, so
# re-rendering never feeds the previous card back into itself.
sed 's|../public/portrait.jpg|/portrait.jpg|' tools/og-card.html > dist/og-card.html
npx playwright screenshot --viewport-size=1200,630 \
  http://localhost:4321/og-card.html public/og-image.jpg

# LinkedIn cover
cp tools/linkedin-cover.html dist/
npx playwright screenshot --viewport-size=1584,396 \
  http://localhost:4321/linkedin-cover.html tools/output/linkedin-cover.png

rm dist/og-card.html dist/linkedin-cover.html
```

Check the result at around 40% before shipping it. Link previews render the
social card near 500px wide, and type that looks fine at full size turns to
mush there.

## Layout constraints worth knowing

**Social card.** Syne's italic overhangs its inline box, so the `<em>` carries
`padding-right` to stop the final glyph being clipped. If you change the name or
the size, confirm `h1.scrollWidth === h1.clientWidth`.

**LinkedIn cover.** LinkedIn drops the profile photo over the lower left and
crops the sides on mobile, so all content sits right of x=420 and above the
bottom third. The headline is `white-space: nowrap` and sized to fit exactly;
if you change the wording, re-check it does not overflow.

## Image roles

| File | Size | Used for |
|---|---|---|
| `public/og-image.jpg` | 1200x630 | `og:image`, `twitter:image` |
| `public/portrait.jpg` | 1200x972 | `Person.image` and `ProfessionalService.image` in JSON-LD |
| `public/avatar.webp` | 220x178 | sidebar (88px) and mobile profile (68px) |
| `public/apple-touch-icon.png` | 180x180 | iOS home screen, web manifest |
| `tools/output/linkedin-cover.*` | 1584x396 | LinkedIn profile banner, uploaded by hand |
