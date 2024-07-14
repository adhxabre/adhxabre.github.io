/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 1s ease var(--slide-in-delay, 0) forwards",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "noto-sans-jp": ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
