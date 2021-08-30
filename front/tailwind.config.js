module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hvtwitter: "rgba(255, 255, 255, 0.1)",
        bgtwitter: "#15202b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
