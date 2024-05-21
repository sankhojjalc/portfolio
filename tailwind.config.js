/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      body: {
        blur: "filter blur(2px)",
      },
      colors: {
        backgroundColor: "rgb(var(--color-backgroundColor) / <alpha-value>)",
        textColor: "rgb(var(--color-textColor) / <alpha-value>)",
        hoverBackgroundColor:
          "rgb(var(--color-hoverBackgroundColor)/<alpha-value>)",
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        marquee2: "marquee2 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
