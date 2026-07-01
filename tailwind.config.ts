import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E32227",
          "red-dark": "#B81419",
          "red-deep": "#8E0F13",
          green: "#2F8F2F",
          "green-dark": "#1F6B21",
          "green-deep": "#0F3D2E",
        },
        ink: "#1E1E1E",
        surface: "#FFFFFF",
        mist: "#F8F9FA",
        line: "#E7E5E1",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(30,30,30,0.06)",
        card: "0 12px 40px rgba(30,30,30,0.08)",
        lifted: "0 24px 60px rgba(15,61,46,0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      backgroundImage: {
        "route-dots":
          "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1.5px)",
      },
      keyframes: {
        "dash-flow": {
          to: { strokeDashoffset: "-40" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "dash-flow": "dash-flow 1.4s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
