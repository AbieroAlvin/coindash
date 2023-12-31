/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        button: "var(--bg-button)",
      },
      textColor: {
        accent: "var(--text-accent)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        btnText: "var(--bg-secondary)",
      },
      borderColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        input: "var(--bg-input)",
        accent: "var(--text-accent)",
      },
    },
  },
  plugins: [],
};
