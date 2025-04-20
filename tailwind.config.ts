import type { Config } from "tailwindcss";
// #001871
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#001871",
        'primary-60': "rgb(157 192 139 / 60%)",
        'primary-40': "rgb(157 192 139 / 40%)",
        'primary-grey': '#1D2939',
        'gray-50': 'rgba(0,0,0,.5)',
        'white-smoke': 'rgb(217 217 217)',
        'secondary-60': '#344054',
        secondary: "#717680",
        tertiary: "",
        error: "#cc0000",
        'pale-red': "#FFEDED",
        shadow: '#00000029'
      },
      dropShadow: {
        'custom-shadow': '3.05px 3.05px 3.05px 0px rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        'nav': '0px 0px 5px 0px #00000040;',
        'service': '2px 2px 4px 0px theme("colors.shadow")',
        'req': '2.7px 2.7px 10.8px 0px #0000002B',
        'section': '1.35px 1.35px 3.37px 0px theme("colors.shadow")',
        'need-apply': '2.71px 2.71px 2.71px theme("colors.shadow");',
        'engine': '1.35px 1.35px 3.38px 0px theme("colors.shadow")',
        'compliance': '2px 2px 2px 0px theme("colors.shadow")',
      },
    },
    screens: {
      '3xl': {'max': '1810px'},
      'xxl': {'max': '1520px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '539px'},
      'min-sm': {'min': '539px'},
      'min-md': {'min': '767px'},
      'min-lg': {'min': '1023px'},
      'min-xl': {'min': '1279px'},
      'min-xxl': {'min': '1520px'},
    },
  },
  plugins: [],
} satisfies Config;
