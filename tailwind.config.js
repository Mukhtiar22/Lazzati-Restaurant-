/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-alt": "var(--color-bg-alt)",
        surface: "var(--color-surface)",
        "surface-container": "var(--color-surface-container)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        secondary: "var(--color-secondary)",
        gold: "var(--color-gold)",
        border: "var(--color-border)",
      },
      borderRadius: {
        'arch-sm': "1.5rem",
        'arch-md': "3.5rem",
        'arch-lg': "6rem",
      },
      fontFamily: {
        serif: ["Libre Caslon Text", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
