import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        blue: "var(--blue)",
        primaryPastel: "var(--primary-pastel)",
      },
      maxWidth: {
        main: "1320px",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      screens: {
        lg: "1024.8px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
