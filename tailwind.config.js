export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#00A99D',
          gold: '#F5C242',
          light: '#F8FAFC',
          ink: '#102A43'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Montserrat', 'Poppins', 'ui-sans-serif']
      },
      boxShadow: {
        glow: '0 24px 70px rgba(0,169,157,0.18)',
        gold: '0 18px 50px rgba(245,194,66,0.22)'
      }
    }
  },
  plugins: []
};
