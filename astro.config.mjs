import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://minimal.lat',

  // i18n configuration for bilingual support
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },

  // Integrations
  integrations: [
    tailwind({
      // Disable Tailwind's default preflight to use custom styles
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES'
        }
      }
    })
  ],

  // Build configuration
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto'
  },

  // Output configuration - static site
  output: 'static',

  // Vite configuration for optimization
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});
