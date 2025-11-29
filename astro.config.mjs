import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://raga-2027.github.io/DigitallIntech/',
  base: import.meta.env.PUBLIC_BASE || '/',

  integrations: [tailwind()]
})
