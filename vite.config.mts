import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages project sites are hosted at /<repo-name>/, not domain root.
  base: mode === 'production' ? '/BMW-concept-website/' : '/',
  build: {
    outDir: 'dist'
  }
}));


