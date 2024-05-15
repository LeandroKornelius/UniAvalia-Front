import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'white': '#F2F2F2',
        'black': '#1C1C1C',
        'pink': '#F539AA',
        'blue': '#0F5EFE',
        'orange': '#FCBD4C',
        'green': '#1DDF8C',
      },
      fontFamily: {
        fira: ['var(--font-fira-mono)']
      }
    },
  },
  plugins: [],
};
export default config;
