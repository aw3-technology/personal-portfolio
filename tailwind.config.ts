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
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        stroke: "var(--stroke)",
        dribbble: "#ea4c89"
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
      boxShadow: {
        glow: "0 0 80px rgba(118, 228, 247, 0.2)"
      },
      animation: {
        "fade-in-down": "fadeInDown 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards"
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
