import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";

// https://astro.build/config
// export default defineConfig({
//   site: import.meta.env.DEV
//     ? "http://localhost:4321"
//     : "https://luna-landing-rust.vercel.app/",
//   integrations: [tailwind(), sitemap(), robotsTxt()],
// });

import { manifest, seoConfig } from "./src/utils/seoConfig";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind(), sitemap(), robotsTxt()],
  adapter: vercel(),
  build: {
    inlineStylesheets: "always",
  },
  output: "hybrid",
  site: seoConfig.baseURL,
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
    ssr: {
      noExternal: ["path-to-regexp"],
    },
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest,
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
        },
      }),
    ],
  },
});
