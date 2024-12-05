export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {}, // removes default colors
    extend: {
      colors: {
        //all brand colors here
        // Main Colors
        primary: "#1B3024",
        secondary: "#C3833D",

        background: "#F7F7F7",
        white: "#FFFFFF",
        error: "#EF6666",
      },
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
      },
    },
  },
  // Safelisting some classes to avoid content purge
  safelist: [
    "safelisted",
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/,
    },
  ],
};
