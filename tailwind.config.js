module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        "custom-gray": "#EDEDED",
        "custom-blue": "#E0F3F4",
        "custom-red": "#D5666E",
      },
      boxShadow: {
        "shadow-bottom": "0px 1px 4px rgba(0, 0, 0, 0.25)",
      },
      marginTop: {
        "m-300": "300px",
      },
    },
  },
  variants: {},
  plugins: [],
};
