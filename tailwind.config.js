/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "rgb(var(--color-backgroundColor) / <alpha-value>)",
        textColor: "rgb(var(--color-textColor) / <alpha-value>)",
        hoverBackgroundColor:
          "rgb(var(--color-hoverBackgroundColor)/<alpha-value>)",
      },
    },
  },
  plugins: [],
};
