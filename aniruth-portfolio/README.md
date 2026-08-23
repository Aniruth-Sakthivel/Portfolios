# Portfolio — Aniruth Sakthivel

A static portfolio site: plain HTML, CSS and JavaScript. No build step, no dependencies, no
framework. Open `index.html` directly or serve the folder with any static host.

## Running it

```bash
# any static server works
npx serve .
# or
python -m http.server 8000
```

`index.html` also works when opened straight from the filesystem — the scripts are classic
`defer` scripts on a single `window.PF` namespace rather than ES modules, which `file://`
blocks.

## Editing content

All personal content lives in `assets/js/data/`. Nothing is hardcoded in the markup or the
behaviour modules.

| File | Holds |
| --- | --- |
| `data/site.js` | Name, role, availability, hero copy, about copy, contact copy, links, impact figures |
| `data/projects.js` | Selected work — one object per project, including the full case study |
| `data/experience.js` | Roles, education, certifications |
| `data/skills.js` | Expertise groups |

### Adding a project

Append one object to `PF.projects` in `assets/js/data/projects.js`. The work grid and the
detail page (`project.html?p=<slug>`) both read from it — no markup changes needed. The field
reference is documented at the top of that file.

Project visuals are drawn in CSS (`mockup: 'dashboard' | 'pos' | 'hrms'`). To use a real
screenshot instead, add `image: 'assets/img/whatever.png'` to the project — it overrides the
generated mockup.

### Replacing the résumé

Drop the new PDF at `assets/docs/Aniruth-Sakthivel-CV.pdf`, or change the `resume` link href in
`data/site.js`.

### Adding a portrait

Set `portrait: { src: 'assets/img/portrait.jpg', alt: '…' }` in `data/site.js`. Without it the
about section renders a typographic plate with the initials.

### Removing the impact section

Delete the `impact` array in `data/site.js` and the `<section id="impact">` block in
`index.html`. Nothing else depends on it.

## Structure

```
index.html            home
project.html          case-study template, driven by ?p=<slug>
404.html
assets/css/           tokens → base → typography → animations → layout → sections → mockups
assets/js/data/       content
assets/js/modules/    theme, nav, reveal, counters, cursor, render, mockups
assets/js/main.js     home page wiring
assets/js/project.js  detail page wiring
```

`assets/css/tokens.css` is the single source for colour, type scale, spacing and motion. Both
themes are defined there; everything else consumes the variables.

## Notes

- Theme: follows the system preference until the toggle is used, then persists in
  `localStorage` under `pf-theme`. An inline script in `<head>` applies it before first paint.
- Theme transition: switching plays a sunset/moonrise (or sunrise) inside the toggle while the
  page palette crossfades and a warm horizon wash passes over the viewport — all off one
  `data-transition` attribute on `<html>`, so the toggle and the page stay in step. Timing lives
  in `--dur-theme`; the celestial easings are `--ease-rise` and `--ease-theme`. Nothing animates
  on first load, and `prefers-reduced-motion` reduces the whole thing to a short colour fade.
- Motion: every scroll animation runs through one `IntersectionObserver` in
  `modules/reveal.js`. `prefers-reduced-motion: reduce` disables all of it, plus the counters
  and the custom cursor.
- Fonts: Inter and Instrument Serif from Google Fonts with a system fallback stack. To
  self-host, drop the woff2 files in `assets/fonts/`, add `@font-face` rules, and remove the
  `<link>` tags from the three HTML files.
