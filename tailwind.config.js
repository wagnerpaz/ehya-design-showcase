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
      lightgreen: "#36B37E",
      lightestgreen: "#36B37E1A",
    },
    container: {
      screens: {
        xl: "1204px",
      },
    },
    extend: {
      backgroundImage: {
        "future-of-work": "url('/images/future-of-work.png')",
        "future-of-data": "url('/images/future-of-data.png')",
        "future-of-learning": "url('/images/future-of-learning.png')",
      },
    },
  },
  plugins: [],
};
