/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        f2f2f2: "#f2f2f2",
        "0077b6": "#0077b6",
        ff6f61: "#ff6f61",
        white: "#fff", // White is already defined in Tailwind by default, but added here for clarity
      },
      textColor: {
        333: "#333",
        "0077b6": "#0077b6",
        ff6f61: "#ff6f61",
      },
      borderColor: {
        333: "#333",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
