/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('rds-tailwind-theme')],
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              'font-weight': 'semibold',
              'text-decoration': 'none',
              '&:hover': {
                'text-decoration': 'underline',
              },
            },
          },
        },
        rds: {
          css: {
            '--tw-prose-body': theme('colors.cu-black[700]'),
            '--tw-prose-headings': theme('colors.cu-black[800]'),
            '--tw-prose-links': theme('colors.cu-red[DEFAULT]'),
            '--tw-prose-quote-borders': theme('colors.cu-red[DEFAULT]'),
          },
        },
      }),
      backgroundImage: {
        'cu-waves-red': "url('https://rds-tailwind.s3.amazonaws.com/assets/cu-waves-red.svg')",
        'cu-waves-white-10': "url('https://rds-tailwind.s3.amazonaws.com/assets/cu-waves-white-10.svg')",
        'quote-icon': 'url("https://rds-tailwind.s3.amazonaws.com/assets/quotation.svg")',
      },
      gridTemplateColumns: {
        'left-260': '260px auto',
        'split-40-60': '40% auto',
        'split-60-40': 'auto 40%',
        'split-80-20': 'auto 20%',
      },
      boxShadow: {
        'hero-text-image': '0 8px 8px -12px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'cu-red': {
          DEFAULT: '#E91C24',
          50: '#FDE9E9',
          100: '#FBD6D7',
          200: '#F7B1B4',
          300: '#F48C90',
          400: '#F0666C',
          500: '#ED4148',
          600: '#E91C24',
          700: '#BB1219',
          800: '#880D12',
          900: '#55080B',
        },
        'cu-black': {
          DEFAULT: '#000000',
          50: '#F2F2F2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#191919',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  // theme: {
  //   extend: {},
  // },
  // plugins: [],
  // theme: {
  //   extend: {},
  // },
}
