import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  site: isVercel
    ? 'https://TU_PROYECTO.vercel.app'
    : 'https://raga-2027.github.io/DigitallIntech/',

  base: isVercel
    ? '/'
    : '/DigitallIntech/',

  integrations: [tailwind()]
});