import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML: false,
  prefetch: true,
  site: 'https://rifkyalamsyah.github.io',
  base: '/fly-farm',
});
