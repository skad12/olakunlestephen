module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        source: "Source Code Pro",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: { themes: false },
};
