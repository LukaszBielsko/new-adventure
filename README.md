# Adventure Extreme — website redesign

A responsive, static redesign concept for Adventure Extreme, an organizer of corporate integration events, team-building experiences and company picnics in Poland.

## What changed

- Clear conversion flow: primary event enquiry CTA in the hero, offer paths, process, inspiration, then contact form.
- Original Adventure Extreme logo and six photographs retained locally in `assets/images`.
- The source green (`#16CB00`) expanded into an accessible forest-green, acid-green and warm-neutral palette.
- Semantic, keyboard-accessible navigation, a mobile menu, focus states, reduced-motion support, descriptive images and a mail-client enquiry form.

## Preview locally

```sh
python3 -m http.server 4173
```

Open http://localhost:4173 in a browser.

## GitHub Pages

The deployment workflow is in `.github/workflows/deploy-pages.yml`. In the repository settings, set **Pages → Source** to **GitHub Actions** once. Every push to `main` then publishes the site.
