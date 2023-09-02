/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontSize: {
      display: ["var(--fs-display)", { lineHeight: "var(--lh-display)" }],
      h1: ["var(--fs-h1)", { lineHeight: "var(--lh-h1)" }],
      h2: ["var(--fs-h2)", { lineHeight: "var(--lh-h2)" }],
      h3: ["var(--fs-h3)", { lineHeight: "var(--lh-h3)" }],
      h4: ["var(--fs-h4)", { lineHeight: "var(--lh-h4)" }],
      h5: ["var(--fs-h5)", { lineHeight: "var(--lh-h5)" }],
      h6: ["var(--fs-h6)", { lineHeight: "var(--lh-h6)" }],
      "large-base": [
        "var(--fs-base-large)",
        { lineHeight: "var(--lh-base-large)" },
      ],
      base: ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
      footer: ["var(--fs-footer)", { lineHeight: "var(--lh-footer)" }],
    },
    colors: {
      "green-50": "var(--green-50)",
      "green-75": "var(--green-75)",
      "green-100": "var(--green-100)",
      "green-125": "var(--green-125)",
      "green-150": "var(--green-150)",

      "black-50": "var(--black-50)",
      "black-75": "var(--black-75)",
      "black-100": "var(--black-100)",
      "black-125": "var(--black-125)",
      "black-150": "var(--black-150)",

      "white-50": "var(--white-50)",
      "white-100": "var(--white-100)",
      "white-125": "var(--white-125)",
      "white-150": "var(--white-150)",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
