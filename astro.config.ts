import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import { VitePWA } from "vite-plugin-pwa"
import robotsTxt from "astro-robots-txt"

// Helper imports
import { manifest, seoConfig } from "@/utils/seoConfig.ts"

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	devToolbar: {
		enabled: false,
	},
	integrations: [tailwind(), sitemap(), robotsTxt()],
	adapter: vercel({
		imageService: true,
		isr: {
			// caches all pages on first request and saves for 1 day
			expiration: 60 * 60 * 24,
		},
	}),
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
					globPatterns: ["**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"],
					// Don't fallback on document based (e.g. `/some-page`) requests
					// This removes an errant console.log message from showing up.
					navigateFallback: null,
				},
			}),
		],
	},
})
