const daisyui = require("daisyui");

export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {}, // removes default colors
    extend: {
      colors: {
        primary: "#1B3024",
        secondary: "#C3833D",
        gray: "#ACACAC",
        background: "#F7F7F7",
        white: "#FFFFFF",
        black: "#000000",
        error: "#EF6666",
      },
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
    styled: false,
  },
  // Safelisting some classes to avoid content purge
  safelist: [
    "safelisted",
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/,
    },
  ],
};
