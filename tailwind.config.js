// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand (trusty blue)
        brand: {
          50:  "#eef6ff",
          100: "#d9edff",
          200: "#b9dcff",
          300: "#8fc6ff",
          400: "#5fb0ff",
          500: "#2f98ff", // primary
          600: "#197be6",
          700: "#135fb4",
          800: "#0d4583",
          900: "#092f5a",
        },
        // Fun accents
        sun:    { 400: "#ffd76a" },  // yellow
        berry:  { 400: "#ff6ea8" },  // pink
        leaf:   { 400: "#4bd19f" },  // green
        grape:  { 400: "#8a7dff" },  // purple
        orange: { 400: "#ff9a4d" },  // orange

        // Neutrals
        ink: {
          900: "#1f2937",
          700: "#374151",
          500: "#6b7280",
        },
        paper: {
          50:  "#fafafa",
          100: "#f4f6fb",
          200: "#e9effa",
        },
        ok:   "#22c55e",
        warn: "#f59e0b",
        err:  "#ef4444",
      },

      fontFamily: {
        friendly: [
          // great kid-readable pairing; swap if you’ve installed something else
          "Nunito", "Poppins", "ui-rounded", "system-ui", "Segoe UI", "Arial", "sans-serif",
        ],
        display: [
          "Baloo 2", "Fredoka", "Quicksand", "ui-rounded", "system-ui", "Arial", "sans-serif",
        ],
      },

      borderRadius: {
        xl: "0.85rem",
        "2xl": "1.25rem",
      },

      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.06)",
      },

      // Playful motion
      keyframes: {
        pop: {
          "0%":   { transform: "scale(0.95)" },
          "60%":  { transform: "scale(1.03)" },
          "100%": { transform: "scale(1)" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-2deg)" },
          "50%":     { transform: "rotate(2deg)"  },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-4px)" },
        },
      },
      animation: {
        pop: "pop 200ms ease-out",
        wiggle: "wiggle 600ms ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },

      // Nice container defaults
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [
    // Optional: Tailwind plugin presets you might use later
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
};
