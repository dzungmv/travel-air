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
      },
    },
  },
  plugins: [],
};
export default config;
