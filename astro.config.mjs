// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://novakd14.github.io',
  base: 'Froggy-Blog',

  srcDir: './web',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte()]
});
