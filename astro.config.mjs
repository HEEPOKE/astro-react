import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

export default defineConfig({
  site: `${SITE_URL}`,
  integrations: [mdx(), sitemap(), react()],
})
