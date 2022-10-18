module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // darkBlue: "hsl(217, 28%, 15%)",
        darkBlue: "#000",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('../images/dimensions.png')",
        "logo-light-mode": "url('../images/dimensions.png')",
        "divGradient": "linear-gradient(45deg,#FF4040,#441a6f)",
        // "curvy-dark-mode": "url('../images/bg-curvy-dark-mode.svg')",
        // "curvy-light-mode": "url('../images/bg-curvy-light-mode.svg')",
      }),
      boxShadow: {
        neon: "0px 0px 8px 0px #fff",
        imageNeon: "0px 0px 8px 2px #a0f0f2",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
