import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#06070A",
          panel: "#0D0F14",
          raised: "#11141B",
        },
        ink: {
          DEFAULT: "#E7E9F0",
          muted: "#8B92A6",
          faint: "#5B6175",
        },
        signal: {
          violet: "#6E5BFF",
          cyan: "#22D3EE",
          amber: "#FFB454",
        },
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grad-signal": "linear-gradient(135deg, #6E5BFF 0%, #22D3EE 100%)",
        "grad-radial-glow":
          "radial-gradient(circle at 50% 50%, rgba(110,91,255,0.25), transparent 70%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "gradient-x": "gradientX 6s ease infinite",
        blink: "blink 1s step-end infinite",
        drift: "drift 18s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", filter: "blur(40px)" },
          "50%": { opacity: "0.9", filter: "blur(55px)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        drift: {
          "0%": { transform: "translate(0,0) rotate(0deg)" },
          "33%": { transform: "translate(30px,-40px) rotate(8deg)" },
          "66%": { transform: "translate(-20px,20px) rotate(-6deg)" },
          "100%": { transform: "translate(0,0) rotate(0deg)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(110,91,255,0.35)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
