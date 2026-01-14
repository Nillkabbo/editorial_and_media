import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Base path configuration
// If using custom domain, set base to '/'
// If using GitHub Pages project site URL, set base to '/editorial_and_media/'
// For custom domain, we don't need base path
const useCustomDomain = true; // Set to false if using GitHub Pages URL
const base = useCustomDomain ? '/' : '/editorial_and_media/';

export default defineConfig({
  site: 'https://www.latecheditorialpublishing.com',
  base: base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
