# tools

## og-card.html

Source for `public/og-image.jpg`, the 1200x630 social card. Kept as HTML so it
can be re-rendered whenever the positioning line or the photo changes, rather
than being a binary nobody can edit.

To regenerate:

```bash
npm run build
npm run preview                        # serves dist/ on :4321
sed 's|../public/og-image.jpg|/portrait.jpg|' tools/og-card.html > dist/og-card.html
```

Then screenshot `http://localhost:4321/og-card.html` at exactly 1200x630 and
save over `public/og-image.jpg`. Any headless browser will do:

```bash
npx playwright screenshot --viewport-size=1200,630 \
  http://localhost:4321/og-card.html public/og-image.jpg
```

Note the card references `/portrait.jpg`, not `/og-image.jpg`, so regenerating
does not feed the previous card back into itself.

### Image roles

| File | Size | Used for |
|---|---|---|
| `og-image.jpg` | 1200x630 | `og:image`, `twitter:image` |
| `portrait.jpg` | 1200x972 | `Person.image` and `ProfessionalService.image` in JSON-LD |
| `avatar.webp` | 220x178 | sidebar (88px) and mobile profile (68px) |
| `apple-touch-icon.png` | 180x180 | iOS home screen, web manifest |
