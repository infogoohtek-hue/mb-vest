import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Theme Tokens linked to CSS variables
        primary: {
          DEFAULT: "var(--color-primary, #121212)",
          hover: "var(--color-primary-hover, #000000)",
          light: "var(--color-primary-light, #262626)",
        },
        surface: {
          white: "var(--color-surface-white, #ffffff)",
          sand: "var(--color-surface-sand, #f7f5f0)",
          subtle: "var(--color-surface-subtle, #f9f9f9)",
          dark: "var(--color-surface-dark, #1c1c1c)",
        },
        accent: {
          DEFAULT: "var(--color-accent-gold, #c5a880)",
          gold: "var(--color-accent-gold, #c5a880)",
          goldLight: "var(--color-accent-gold-light, #e6c987)",
          emerald: "var(--color-accent-emerald, #135e1b)",
        },
        charcoal: "var(--color-charcoal, #1c1c1c)",
        sand: "var(--color-surface-sand, #f7f5f0)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        display: ["var(--font-heading)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.12em",
        widest: "0.22em",
        overline: "0.25em",
        ultra: "0.32em",
      },
    },
  },
  plugins: [],
};
export default config;
