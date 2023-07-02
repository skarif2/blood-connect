import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const themeLight = {
  "--background": "#ffffff",
  "--foreground": "#0f1729",
  "--muted": "#f1f5f9",
  "--muted-foreground": "#65758b",
  "--popover": "#ffffff",
  "--popover-foreground": "#0f1729",
  "--card": "#ffffff",
  "--card-foreground": "#0f1729",
  "--border": "#E2E8F0",
  "--input": "#E2E8F0",
  "--primary": "#0F172A",
  "--primary-foreground": "#F8FAFC",
  "--secondary": "#F1F5F9",
  "--secondary-foreground": "#0F172A",
  "--accent": "#EE6D76",
  "--accent-foreground": "#0F172A",
  "--destructive": "#FF0000",
  "--destructive-foreground": "#F8FAFC",
  "--ring": "#94A3B8",
};

const themeDark = {
  "--background": "#030711",
  "--foreground": "#e1e7ef",
  "--muted": "#0f1629",
  "--muted-foreground": "#808ea3",
  "--popover": "#030711",
  "--popover-foreground": "#94a3b8",
  "--card": "#030711",
  "--card-foreground": "#e1e7ef",
  "--border": "#1D283A",
  "--input": "#1D283A",
  "--primary": "#F8FAFC",
  "--primary-foreground": "#020205",
  "--secondary": "#0F172A",
  "--secondary-foreground": "#F8FAFC",
  "--accent": "#EE6D76",
  "--accent-foreground": "#F8FAFC",
  "--destructive": "#811D1D",
  "--destructive-foreground": "#F8FAFC",
  "--ring": "#1D283A",
};

// For web using the plugin and adding the colors using
// addBase (normal way to do it in tailwind).
// But for expo/native-wind adding the colors using variable
// and darkVariables in the theme object
// https://github.com/marklawlor/nativewind/issues/308 - :root CSS Variables.
// There is a way to add the colors using plugin but couldn't make it work.

export default {
  content: [""],
  darkMode: ["class"],
  theme: {
    variables: themeLight,
    darkVariables: themeDark,
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": themeLight,
        ".dark": themeDark,
      });
      addBase({
        "*": {
          "@apply border-border": {},
        },
        body: {
          "@apply bg-background text-foreground": {},
          "font-feature-settings": '"rlig" 1, "calt" 1',
        },
      });
    }),
  ],
} satisfies Config;
