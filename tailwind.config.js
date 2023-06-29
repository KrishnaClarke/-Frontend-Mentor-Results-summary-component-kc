/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

