const colors = require("tailwindcss/colors");
require("dotenv").config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  theme: {
    purge: {
      enabled: enablePurge,
      content: ["./src/**/*.{html,ts}"],
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
