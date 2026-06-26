import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import expressiveCode from 'astro-expressive-code'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://llm.javierpenate.com',
  output: 'static',
  integrations: [
    vue({ islands: true }),
    expressiveCode(),
    mdx(),
    tailwind(),
    sitemap(),
  ],
  vite: {
    ssr: {
      noExternal: ['@tresjs/core', '@tresjs/cientos', 'three'],
    },
  },
})
