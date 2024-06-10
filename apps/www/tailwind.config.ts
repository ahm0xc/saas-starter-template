import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { wedgesTW } from "@lemonsqueezy/wedges";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.tsx",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    wedgesTW({
      prefix: "wg", // prefix used for CSS variables
      defaultTheme: "light", // default theme
      defaultExtendTheme: "light", // default theme to extend when creating custom themes
      fontSmooth: "antialiased", // specify font smoothing for Wedges components
      themes: {
        light: {
          colors: {}, // light themable colors
        },
        dark: {
          colors: {}, // dark themable colors
        },
        // ... custom themes
      },
    }),
  ],
} satisfies Config;
