module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      boxShadow: {
        "shadow-bottom": "0px 1px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {},
  plugins: [],
};
