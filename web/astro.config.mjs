// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.makistudio.online',

  // adapter: cloudflare({
  //   platformProxy: {
  //     enabled: true
  //   },
  //   // Ensure the adapter is optimized for Cloudflare Pages layout
  //   mode: 'advanced', 

  //   imageService: "cloudflare",
  // }),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap(), partytown()]
});