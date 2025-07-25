/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('rds-tailwind-theme')],
  content: ['./lib/**/*.{js,ts,jsx,tsx}', './lib/**/**/*.{js,ts,jsx,tsx}', './lib/**/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '.dark'],
}
export default config
