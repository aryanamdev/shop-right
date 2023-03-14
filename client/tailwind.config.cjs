/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#30475E",
      },
      backgroundImage: {
        electronics:
          "url('https://m.media-amazon.com/images/I/51PS5eyIwIL._UL300_.jpg')",
        jwellery: "url('https://m.media-amazon.com/images/I/21HjHnpOIFL.jpg')",
        menClothing:
          "url('https://m.media-amazon.com/images/I/618Wek95laS._UL300_.jpg')",
        womenClothing:
          "url('https://m.media-amazon.com/images/I/51yW2HeFTkL._UX679_.jpg')",
        gradient:
          "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
      },
    },
  },
  plugins: [],
};
