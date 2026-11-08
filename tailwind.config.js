/** @type {import('tailwindcss').Config} */
// Paleta oficial Statera (brand v1.0). No añadir colores fuera de esta lista.
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#4c102a', // primario: logo, títulos, botones, fondos de marca
        cream: '#fff7e2', // fondo principal cálido, logo sobre oscuro
        wine: '#761941', // acento, hover, textos secundarios
        ink: '#220713', // texto del cuerpo, fondos muy oscuros
        butter: '#ffe9af', // resaltes, decoración, bordes suaves
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: {
        body: '0.05em',
        tagline: '0.18em',
      },
      borderRadius: {
        brand: '14px',
      },
    },
  },
  plugins: [],
}
