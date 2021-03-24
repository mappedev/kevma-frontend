module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white-primary": "#f5f5f5",
        "white-secondary": "#ebedf0",
        "black-primary": "#1e212d",
        "black-secondary": "#111827", // gray-900
        "gray-primary": "#9ca3af", // gray-400
        "orange-primary": "#d97706", // yellow-600
        sucess: "#10b981", // green-500
        danger: "#ef4444", // red-500
        normal: "#6b7280", // gray-500
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
