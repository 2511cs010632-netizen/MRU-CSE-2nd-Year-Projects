import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Deep monsoon-field green — the anchor color, not a generic near-black.
        field: {
          50: "#f1f8f4",
          100: "#dcefe2",
          200: "#b3dcc0",
          300: "#7fc194",
          400: "#4fa16d",
          500: "#2f8250",
          600: "#1f663e",
          700: "#195234",
          800: "#123c26",
          900: "#0b2e1f",
          950: "#071f15"
        },
        // Turmeric gold — the animated / interactive accent.
        turmeric: {
          50: "#fdf6e9",
          100: "#faeac7",
          200: "#f3d28a",
          300: "#ecb955",
          400: "#e8a94c",
          500: "#d99327",
          600: "#b3751a",
          700: "#8a5915",
          800: "#5f3d0f",
          900: "#3a2509"
        },
        // Sun-baked soil terracotta — used sparingly for warmth/contrast.
        soil: {
          50: "#fbf1ec",
          100: "#f2dccf",
          200: "#e2b49a",
          300: "#cc8963",
          400: "#b5622f",
          500: "#954f27",
          600: "#743d1f",
          700: "#552d17",
          800: "#391e0f",
          900: "#221207"
        },
        // Monsoon sky — muted teal-blue for weather/water contexts.
        monsoon: {
          50: "#eef6f7",
          100: "#d3e9ec",
          200: "#a3cfd6",
          300: "#6fb0ba",
          400: "#4a90a4",
          500: "#3a7488",
          600: "#2c586a",
          700: "#20404d",
          800: "#152b33",
          900: "#0c1a1f"
        },
        // Warm handmade-paper base for light sections (deliberately not #F4F1EA cream).
        paper: {
          DEFAULT: "#fbf6ec",
          dim: "#f3ecdc"
        },
        // Back-compat alias so existing component references keep working.
        primary: {
          50: "#f1f8f4",
          100: "#dcefe2",
          200: "#b3dcc0",
          300: "#7fc194",
          400: "#4fa16d",
          500: "#2f8250",
          600: "#1f663e",
          700: "#195234",
          800: "#123c26",
          900: "#0b2e1f"
        },
        earth: {
          50: "#fbf1ec",
          100: "#f2dccf",
          200: "#e2b49a",
          300: "#cc8963",
          400: "#b5622f",
          500: "#954f27",
          600: "#743d1f",
          700: "#552d17",
          800: "#391e0f",
          900: "#221207"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"]
      },
      keyframes: {
        "rise": {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "sprout": {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "60%": { opacity: "1" },
          "100%": { transform: "scaleY(1)", opacity: "1" }
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(6px, -10px) rotate(4deg)" }
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        sprout: "sprout 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        drift: "drift 6s ease-in-out infinite",
        ticker: "ticker 28s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite"
      },
      transformOrigin: {
        bottom: "bottom"
      }
    }
  },
  plugins: []
};

export default config;
