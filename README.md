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
2. Push to the branch used for hosting (for GitHub Pages this is typically `gh-pages` or `main`).
3. If you use a custom domain, create a `CNAME` file in the repository root containing only your domain name.
4. Updates can take a few minutes to propagate. If you do not see the new version right away, try doing a hard refresh or clearing your browser's cache.

This project is entirely static and served via GitHub Pages. There is no build
step—pushing your committed changes to the hosting branch is all that is
required to deploy updates.

## Testing

This repository includes a minimal npm setup. Run `npm test` to execute the
placeholder test script.
