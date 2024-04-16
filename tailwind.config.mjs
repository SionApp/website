/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#161925",
        primary: "#fca311",
        secondary: "#E5E5E5",
				tertiary: "#14213D",
      },
    },
  },
  plugins: [
		require("tailwind-scrollbar"),
		require('@tailwindcss/forms'),
	],
};
