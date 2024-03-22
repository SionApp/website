import animations from "@midudev/tailwind-animations"
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				atomic: ["Atomic", "cursive"],
			},
			colors: {
				//	primary: "var(--color-primary)",
				// secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
				twitch: "var(--color-twitch)",
				ice: "var(--color-twitch-ice)",
				white: "#FFFFFF",
				black: "#161925",
				primary: "#1D4ED8",
				secondary: "#0C8346",
			},
			screens: {
				"xs": "360px",
				...defaultTheme.screens,
				"3xl": "1650px",
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar"),
		animations,
		function ({ addVariant }) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
			addVariant("mobile", "@media (any-hover: none) { & }")
		},
	],
}
