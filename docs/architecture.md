# Architecture and Key Decisions

## Architecture Overview
- `src/main.jsx` bootstraps React, router, and shared context provider.
- `src/App.jsx` renders top-level layout, navigation, command palette, and route map.
- `src/pages/*` contains page-level views for each section.
- `src/context/ExperienceContext.jsx` stores interaction state and shared behavior.
- `vite.config.mts` controls build behavior and deployment path configuration.

## Key Decisions and Rationale
- Vite + React was chosen for fast local development and simple production builds.
- React Router handles SPA navigation between concept pages.
- Tailwind utility classes provide rapid visual iteration while keeping style logic close to components.
- GitHub Pages deployment compatibility is handled through Vite `base` and router `basename`.

## Deployment Note
GitHub Pages project sites are served from `/<repo-name>/`.  
This project uses:
- `base: '/BMW-concept-website/'` in production builds
- `basename={import.meta.env.BASE_URL}` in `BrowserRouter`

This prevents broken asset URLs and route mismatches after deployment.
