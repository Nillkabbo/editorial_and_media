import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Only use base path for GitHub Pages deployment
// Local dev works without base path
// GitHub Actions sets CI=true, so we use base path in CI
const isGitHubPages = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://www.latecheditorialpublishing.com',
  base: isGitHubPages ? '/editorial_and_media/' : '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
