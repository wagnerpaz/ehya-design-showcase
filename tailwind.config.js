/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: { sans: ["Open Sans"], hk: ["HK Grotesk"] },
    colors: {
      primary: "#183B56",
      secondary: "#1565D8",
      white: "#FFF",
      gray: "#5A7184",
      lightgray: "#E5EAF4",
    },
    container: {
      screens: {
        xl: "1204px",
      },
    },
    extend: {},
  },
  plugins: [],
};
