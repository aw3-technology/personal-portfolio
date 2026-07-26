import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Wrapped in color-mix so Tailwind's `<alpha-value>` substitution works
        // on these CSS-variable colors — enabling opacity modifiers like
        // `bg-surface/95` or `bg-stroke/50`. At full opacity color-mix returns
        // the variable's color unchanged, so solid usages are unaffected.
        bg: "color-mix(in srgb, var(--bg) calc(<alpha-value> * 100%), transparent)",
        surface: "color-mix(in srgb, var(--surface) calc(<alpha-value> * 100%), transparent)",
        text: "color-mix(in srgb, var(--text) calc(<alpha-value> * 100%), transparent)",
        muted: "color-mix(in srgb, var(--muted) calc(<alpha-value> * 100%), transparent)",
        accent: "color-mix(in srgb, var(--accent) calc(<alpha-value> * 100%), transparent)",
        stroke: "color-mix(in srgb, var(--stroke) calc(<alpha-value> * 100%), transparent)"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      fontSize: {
        "2xs": "0.625rem",
        caption: "0.6875rem",
        lead: "1.05rem",
        "display-md": "2.75rem",
        hero: "15vw",
        "hero-md": "12vw",
        "hero-lg": "10vw"
      },
      maxWidth: {
        content: "1200px"
      },
      animation: {
        marquee: "marquee 60s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
