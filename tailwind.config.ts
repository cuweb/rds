/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('rds-tailwind-theme')],
  content: ['./lib/**/*.{js,ts,jsx,tsx}', './lib/**/**/*.{js,ts,jsx,tsx}', './lib/**/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        'offset-center': 'calc(-50vw + 50%)',
      },
    },
  },
}
export default config
