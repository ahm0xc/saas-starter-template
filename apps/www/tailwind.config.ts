import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { wedgesPalette as palette, wedgesTW } from "@lemonsqueezy/wedges";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.tsx",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    wedgesTW({
      prefix: "wg", // prefix used for CSS variables
      defaultTheme: "light", // default theme
      defaultExtendTheme: "light", // default theme to extend when creating custom themes
      fontSmooth: "antialiased", // specify font smoothing for Wedges components
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: palette.gray[900],
            primary: {
              ...palette["purple"], // `palette` is the Wedges Palette
              DEFAULT: palette["purple"][600],
            },
            secondary: {
              ...palette["gray"],
              DEFAULT: palette["gray"][900],
            },
            surface: {
              ...palette["gray"],
              DEFAULT: palette["gray"][50],
            },
            destructive: {
              ...palette["red"],
            },
          }, // light themable colors
        },
        dark: {
          colors: {
            background: palette.gray[900],
            foreground: "#FFFFFF",
            primary: {
              ...palette["purple"],
              DEFAULT: palette["purple"][400],
              600: palette["purple"][500],
            },
            secondary: {
              ...palette["white"],
              900: palette["gray"][900],
              DEFAULT: palette["white"][900],
            },
            surface: {
              50: "rgba(255,255,255, 0.1)",
              100: "rgba(255,255,255, 0.2)",
              200: "rgba(255,255,255, 0.3)",
              300: "rgba(255,255,255, 0.4)",
              400: "rgba(255,255,255, 0.5)",
              500: "rgba(255,255,255, 0.5)",
              600: "rgba(255,255,255, 0.7)",
              700: "rgba(255,255,255, 0.8)",
              800: "rgba(255,255,255, 0.9)",
              900: "#FFFFFF",
              DEFAULT: "rgba(255,255,255, 0.1)",
            },
            destructive: palette["red"],
          }, // dark themable colors
        },
        // ... custom themes
      },
    }),
  ],
} satisfies Config;
