module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#FF1AF5",

        "secondary": "#00EDFF",

        "accent": "#404040",

        "neutral": "#F2F2F2",

        "base-100": "#111828",

        "info": "#98A8DD",

        "success": "#1BBB70",

        "warning": "#DF7E07",

        "error": "#FA5C5C",
      },
    },],
  },
}