/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('rds-tailwind-theme')],
  content: ['./lib/**/*.{js,ts,jsx,tsx}', './lib/**/**/*.{js,ts,jsx,tsx}', './lib/**/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '.dark'],
  theme: {
    extend: {
      transitionDuration: {
        'cu-instant': '100ms',
        'cu-fast': '150ms',
        'cu-base': '250ms',
        'cu-slow': '400ms',
        'cu-slower': '600ms',
      },
      transitionTimingFunction: {
        'cu-standard': 'cubic-bezier(0.2, 0, 0, 1)',
        'cu-emphasized': 'cubic-bezier(0.3, 0, 0, 1)',
        'cu-accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
      },
    },
  },
}
export default config
