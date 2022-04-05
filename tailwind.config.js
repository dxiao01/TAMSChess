module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'topbar': '#15023a',
      },
      height: {
        'section': 'calc(100vh - 64px)',
        '70px': '70px',
        '4.5': '4.5rem',
        '3': '3px',
        '350': '350px',
      },
      width: {
        '700': '700px'
      },
      zIndex: {
        '2': '2',
      },
      flexGrow: {
        '0.5': '0.5',
      },
      fontWeight: ['hover', 'focus'],
      backgroundImage: {
        'home-bg': "url('/public/rheachess4.jpeg')",
      },
    },
  },
  plugins: [],
}
