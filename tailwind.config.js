/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btn: "#0F172A", // Sign-in button color (indigo-900 lookalike)
        activeColor : "#635BFF"
      },
    },
  },
  plugins: [],
}
