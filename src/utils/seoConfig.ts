// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://lavelada.es/", // Production URL.
	description: "Web Oficial de la Iglesia Cristian Pentecostal Sion, Cambiando Vidas.",
	type: "website",
	image: {
		url: "http://localhost:4321",
		alt: "Iglesia Cristian Pentecostal Sion, Cambiando Vidas.",
		width: 705,
		height: 606,
	},
	siteName: "Iglesia Sion",
	twitter: {
		card: "summary_large_image",
	},
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Iglesia Sion",
	short_name: "Iglesia Sion",
	description: "Web Oficial de la Iglesia Cristian Pentecostal Sion, Cambiando Vidas.",
	theme_color: "#d5ff00",
	background_color: "#d5ff00",
	display: "fullscreen",
	icons: [
		{
			src: "/img/icons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable",
		},
	],
}
