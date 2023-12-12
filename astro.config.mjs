import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://rifkyalamsyah.github.io',
  base: '/fly-farm',
  output: 'static',
  compressHTML: false,
  prefetch: true,
  integrations: [
    compress({
      CSS: false,
      HTML: false,
      Image: false,
      JavaScript: false,
      SVG: false,
    }),
  ],
});
