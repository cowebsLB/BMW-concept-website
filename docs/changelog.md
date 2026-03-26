# Change Log

## 2026-03-27
### Portfolio legal-context hardening for public previews
What changed:
- Updated critical metadata in `index.html` (`title`, meta description, `og:title`, `og:description`) to consistently include "unofficial concept" wording.
- Added a new `/legal` page with disclaimer, non-commercial statement, and takedown policy.
- Added persistent legal disclaimer text and takedown sentence in the global footer with a link to `/legal`.
- Added "Unofficial Concept" labeling in key branded UI areas.
- Replaced official-looking ownership footer text with portfolio attribution.
- Mirrored disclaimer and takedown language in project documentation (`README.md`, `index.md`).

Why it changed:
- Public previews and snippets are often the first interpretation point for affiliation and trademark posture.
- The project needed clearer non-affiliation positioning while remaining a public concept portfolio.

How it works:
- Metadata now carries explicit "unofficial concept" language for browser tabs and social previews.
- Legal statements are visible on every page via footer and fully detailed on `/legal`.

Impact:
- Stronger non-affiliation signaling for public audiences.
- No change to core app functionality or routing behavior besides the new `/legal` route.

## 2026-03-26
### Fixed GitHub Pages blank screen issue
What changed:
- Updated Vite production `base` to `/BMW-concept-website/` in `vite.config.mts`.
- Updated `BrowserRouter` to use `basename={import.meta.env.BASE_URL}` in `src/main.jsx`.
- Updated `index.html` metadata/icon references to use `%BASE_URL%` paths.
- Added required static icon and manifest assets to `public/`.
- Added a GitHub Actions workflow to build and deploy to GitHub Pages on pushes to `main`.

Why it changed:
- GitHub Pages project sites are not served from domain root, so root-based asset and route resolution caused the app to fail to load correctly.

How it works:
- Built asset URLs now include the repository path prefix.
- Router now resolves routes relative to the same base path.
- Deployment is now automated through GitHub Actions using the built `dist/` artifact.

Impact:
- Production build works correctly when deployed under `https://<user>.github.io/BMW-concept-website/`.
