import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://lahiru-a-r.netlify.app',
  integrations: [react(), tailwind(), sitemap()],
  adapter: netlify(),
});
