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
      'mainGreen' : '#8A9A5B',
      'mainBeige' : '#F8F3EB',
   },
  },
 },
 variants: {
   extend: {},
 },
 plugins: [],
}