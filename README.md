# Responsive Website
A simple responsive website for an imaginary record label. The codebase
was recently refactored to use **Tailwind CSS** via the CDN instead of
custom CSS files, making it easier to maintain consistent styling
across pages.

## About
[This website](https://alafia.me/) was a project on responsive design. Using CSS grid and media queries the website's four pages will display differently when viewed on desktop versus mobile without losing any information.

## Pages
The project has expanded beyond the original four pages and now includes:

- `index.html` – landing page
- `roster.html` – artist roster
- `playlists.html` – featured playlists
- `events.html` – upcoming events
- `blog.html` and the article `blog-post4.html`

## Publishing your changes
1. Commit your edits with a descriptive message.
2. Push them to the production branch that Cloudflare Pages deploys from.
3. Set up a CNAME or custom domain through the Cloudflare dashboard.
4. Cloudflare will automatically deploy your site after the push.

This project is entirely static and served via **Cloudflare Pages**.
Pushing to the production branch is all that's needed to publish updates.

## Testing

This repository includes a minimal npm setup. Run `npm test` to execute the
placeholder test script.
