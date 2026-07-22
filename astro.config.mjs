// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';
import { materializeBlogAssets } from './scripts/materialize-blog-assets.mjs';

// Public pages are prerendered static + React-free everywhere. The Keystatic
// admin (/keystatic + /api/keystatic) is now served in BOTH local dev and on
// Vercel so the co-founder edits live at www.myanmate.com/keystatic (GitHub
// storage mode). Those admin routes are the ONLY server-rendered (serverless)
// routes; every content page stays static. src/lib/content.ts still reads the
// committed files at build via createReader (independent of the storage kind).
const ON_VERCEL = !!process.env.VERCEL;

const blogAssets = {
  name: 'myanmate-blog-assets',
  hooks: {
    'astro:config:setup': async ({ command, logger }) => {
      if (command !== 'dev') return;
      await materializeBlogAssets('all', {
        log: (message) => logger.info(message),
        warn: (message) => logger.warn(message),
      });
    },
    'astro:build:start': async ({ logger }) => {
      await materializeBlogAssets('published', {
        log: (message) => logger.info(message),
        warn: (message) => logger.warn(message),
      });
    },
  },
};

export default defineConfig({
  // Real domain — used by sitemap + canonical URLs. www is the canonical host
  // (bare myanmate.com auto-redirects to www).
  site: 'https://www.myanmate.com',
  integrations: [blogAssets, react(), keystatic(), sitemap()],
  adapter: ON_VERCEL ? vercel() : node({ mode: 'standalone' }),
});
