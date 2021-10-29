module.exports = {
  purge: [
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
        poppins: ['Poppins', 'sans-serif'],
    },
    colors : {
      "theme-green": "#00b140",
      "theme-aquamarine": "#44dbb2",
      "theme-blue-deep": "#0a192f",
      "theme-blue-navy": "#112240",
      "theme-gray-light": "#ccd6f6",
      "theme-gray-deep": "#8892b0",
      "theme-purple-500": "#8B5CF6",
      "theme-blue-600": "#2563EB",
      "black-900": "#111827",
      "indigo": "#7000df",
      "theme-blue-dark": "#182028",
      "blue-9": "#05264c",
    }
    },
  },
  variants: {
    extend: {
       // gridTemplateColumns: ['hover', 'focus'],
       grayscale: ['hover', 'focus'],
      },
  },
  plugins: [],
}
