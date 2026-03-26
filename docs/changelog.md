# Change Log

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
