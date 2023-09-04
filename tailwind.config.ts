import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          // 'light': '#0b87f4',  // Azul principal
          'light': '#5ba8eb',  // Azul principal
          'dark': '#5296ff',   // Azul principal
          'campus': '#40fd67', // Verde Campus
        },
        'secondary': {          // Azul Contraste do principal
          'light': '#0bb2f4',  // Azul secundario
          'dark': '#272c42',   // Azul escuro
        },
        'neutral': {
          'light': '#F5F5F5',  // Cinza claro
          'dark': '#141515',   // Cinza escuro
        },
        'redes': {
          'instagram': '#E1306C',
          'whatsapp': '#25D366',
          'email': '#9a57ff',
        }
      },
      backgroundImage: {
        'bg-home': 'url("/assets/images/bg-section-home.png"), url("/assets/images/bg-section-home-gradient.png")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
