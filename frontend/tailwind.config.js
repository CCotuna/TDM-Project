module.exports = {
  content: [
   "./app/**/*.{vue,js,ts,jsx,tsx,mdx}",
   "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
   "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",

   // Or if using `src` directory:
   "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
    colors: {
      'mint-whisper': '#F2FBED',
      'deep-teal': '#0E7871',
      'brown-sugar': '#8F5D46',
   },
  },
 },
 variants: {
   extend: {},
 },
 plugins: [],
}