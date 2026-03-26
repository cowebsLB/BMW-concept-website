# Known Limitations and Future Improvements

## Known Limitations
- BrowserRouter on GitHub Pages still needs additional fallback handling for direct deep-link refreshes unless server-side rewrite behavior is available.
- Some metadata/icon references in `index.html` use root-relative paths and may not resolve on all project-site setups.
- Content is concept-focused and not connected to production BMW services or APIs.

## Future Improvements
- Add SPA fallback strategy for deep links on GitHub Pages (`404.html` redirect/fallback).
- Normalize metadata/icon URLs to be base-path aware.
- Add automated deployment workflow for GitHub Pages (`gh-pages` branch or Actions).
- Add tests for critical route rendering and navigation behavior.
