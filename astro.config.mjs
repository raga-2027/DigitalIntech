import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://raga-2027.github.io/DigitallIntech/',
  base: '/DigitallIntech/',

  integrations: [tailwind()]
});
