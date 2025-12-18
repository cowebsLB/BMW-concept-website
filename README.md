# BMW Vision Next – BMW Concept Website

A cinematic one-page experience for a futuristic 2025 BMW electric concept car, built with **React**, **Vite**, and **Tailwind CSS**.  
The site features rich motion, parallax hero, glassmorphism cards, and routed sub‑pages for Models, Electric, Configurator, Innovation, and Shop.

---

## Tech Stack

- **Frontend framework**: React 18
- **Bundler / Dev server**: Vite
- **Styling**: Tailwind CSS + custom animations
- **Icons**: `lucide-react` + custom favicon / PWA icons
- **Routing**: `react-router-dom`

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables (optional but recommended)

Hero image generation can use Google’s Imagen API via the Gemini endpoint.  
Create a `.env` file in the project root:

```bash
VITE_GEMINI_API_KEY=your_api_key_here
```

If this key is **not** set, the app will automatically fall back to a static Unsplash hero image.

### 3. Run the dev server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### 4. Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```text
.
├─ index.html                 # HTML entry, favicon + manifest wired here
├─ site.webmanifest           # PWA-style metadata and icons
├─ public/                    # Static assets served at site root
│  ├─ favicon-16x16.png
│  ├─ favicon-32x32.png
│  ├─ apple-touch-icon.png
│  ├─ android-chrome-192x192.png
│  └─ android-chrome-512x512.png
├─ src/
│  ├─ main.jsx                # React entry, <BrowserRouter> wrapper
│  ├─ App.jsx                 # Main layout, hero, navigation, routes
│  ├─ index.css               # Tailwind entry + base styles
│  ├─ assets/
│  │  ├─ icons/               # Source icon files (optional for imports)
│  │  └─ images/              # Future image assets
│  └─ pages/
│     ├─ Models.jsx           # BMW models overview
│     ├─ Electric.jsx         # BMW Electric lineup and charging info
│     ├─ Configurator.jsx     # Configurator process and example build
│     ├─ Innovation.jsx       # Technology, AI, and materials vision
│     └─ Shop.jsx             # Lifestyle and performance accessories
├─ tailwind.config.cjs        # Tailwind config, content paths
├─ postcss.config.cjs         # PostCSS + Tailwind pipeline
├─ vite.config.mts            # Vite + React-SWC config
└─ package.json               # Scripts and dependencies
```

---

## Core Features

- **Parallax hero** with generated or fallback hero imagery and layered gradients.
- **Responsive navigation**:
  - Top bar with BMW logo, search, profile icon.
  - Animated sidebar menu on mobile and desktop with routed links.
- **Scroll‑triggered reveals** using Intersection Observer for smoother entrance animations.
- **Glassmorphism feature cards** that track mouse position with a radial “spotlight”.
- **Themed subpages**:
  - `Models` – segments for sedans, SAV/SAC, and BMW M.
  - `Electric` – range, charging, and ecosystem.
  - `Configurator` – 3-step build flow and example spec.
  - `Innovation` – neural motion, autonomy, sustainable luxury.
  - `Shop` – lifestyle, performance, and home & design collections.
- **Icon + PWA support** through `favicon` links and `site.webmanifest`.

---

## Routing

Routes are defined in `App.jsx` using `react-router-dom`:

- `/` – Hero + feature grid + “Inner Sanctuary” section.
- `/models` – Models page.
- `/electric` – Electric page.
- `/configurator` – Configurator page.
- `/innovation` – Innovation page.
- `/shop` – Shop page.

The sidebar links and BMW logo (`/`) are standard `<Link>` components so navigation is client‑side and smooth.

---

## Deployment Notes

- Build with `npm run build`; Vite outputs to `dist/`.
- Ensure the static icons live in `public/` so favicon and manifest URLs like `/favicon-32x32.png` and `/android-chrome-512x512.png` resolve correctly.
- If you provide `VITE_GEMINI_API_KEY` in the deployment environment, confirm the backend allows outgoing requests to the Google Generative Language API; otherwise the app will quietly use the fallback hero image.

---

## License

This project is for portfolio / concept purposes and is **not** affiliated with or endorsed by BMW AG. BMW trademarks and logos are the property of their respective owner.
