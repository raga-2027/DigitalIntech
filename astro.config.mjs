import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import staticSite from '@astrojs/static-site';

export default defineConfig({
  site: 'https://raga-2027.github.io/DigitalIntech/',  // Cambia esto por tu URL real
  base: '/DigitalIntech/',  // Asegúrate de usar el nombre de tu repositorio
  output: 'static',
  integrations: [tailwind()],
  adapter: staticSite(),
});

