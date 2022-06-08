module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'verdana': ['verdana'],
        'caveat': ['caveat'],
      },
      backgroundImage: {
        'villa': 'url("/breadsauce/src/assets/images/villa.jpeg")'
      }
    },
  },
  plugins: [],
}
