/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        "mashroom-mobile": "url('/src/assets/images/mashroom-mobile.png')",
        "mashroom-desktop": "url('/src/assets/images/mashroom-desktop.png')",
      },
      colors: {
        primaryBgColor: "#2B2B2B",
        secondaryBgColor: "#3B3B3B",
        purpleColor: "#A259FF",
        lightGray: "#CCCCCC",
        darkBgColor: "#101010",
        lightTextColor: "#858584",
      },
    },
  },
  plugins: [],
};
