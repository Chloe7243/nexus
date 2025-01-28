import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        pc1: "rgba(var(--primary-color-1), <alpha-value>)",
        pc2: "rgba(var(--primary-color-2), <alpha-value>)",
        pc3: "rgba(var(--primary-color-3), <alpha-value>)",
        pc4: "rgba(var(--primary-color-4), <alpha-value>)",
        pc5: "rgba(var(--primary-color-5), <alpha-value>)",
        pc6: "rgba(var(--primary-color-6), <alpha-value>)",
        pc7: "rgba(var(--primary-color-7), <alpha-value>)",
        pc8: "rgba(var(--primary-color-8), <alpha-value>)",
        pc9: "rgba(var(--primary-color-9), <alpha-value>)",

        // Base Colors
        background: "rgba(var(--background), <alpha-value>)",
        foreground: "rgba(var(--foreground), <alpha-value>)",
        icon: "rgba(var(--icon-fill), <alpha-value>)",
        sidebarbg: "rgba(var(--sidebar-background), <alpha-value>)",
        badgebg: "rgba(var(--badge), 0.2)",
        border: "rgba(var(--border), <alpha-value>)",

        // Component Colors
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "rgb(var(--popover))",
          foreground: "rgb(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent))",
          foreground: "rgb(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive))",
          foreground: "rgb(var(--destructive-foreground))",
        },

        // Chart Colors
        chart: {
          bar1: "rgb(var(--bar-chart-1))",
          bar2: "rgb(var(--bar-chart-2))",
          1: "rgb(var(--chart-1))",
          2: "rgb(var(--chart-2))",
          3: "rgb(var(--chart-3))",
          4: "rgb(var(--chart-4))",
          5: "rgb(var(--chart-5))",
        },

        // Utility Colors
        ring: "rgb(var(--ring))",
        input: "rgb(var(--input))",
      },

      // Additional theme values
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [],
} satisfies Config;
