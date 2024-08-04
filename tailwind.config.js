/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      container: (utils) => {
        return {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            md: "0.5rem",
            lg: "4rem",
            xl: "5rem",
          },
          screens: {
            ...utils.theme("screens"),
            "2xl": "1400px",
          },
        };
      },
      backgroundImage: {
        "hero-pattern": "url('/background-pattern.svg')",
        "gradient-2": "url('/bg-gradient-2.png')",
        "gradient-3": "url('/bg-gradient-3.png')",
      },
    },
  },
  plugins: [],
};
