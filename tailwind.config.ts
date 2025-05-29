import type { Config } from 'tailwindcss'
import rdsTheme from 'rds-tailwind-theme'

const config: Config = {
  presets: [rdsTheme],
  content: ['./lib/**/*.{js,ts,jsx,tsx}'],
}
export default config
