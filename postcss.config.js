module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.ts', // Optional, defaults to tailwind.config.{js,ts,cjs,mjs}
    }),
    require('autoprefixer'),
  ],
}
