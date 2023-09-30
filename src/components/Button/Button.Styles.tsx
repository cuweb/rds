export const buttonStyles = {
  core: `not-prose inline-flex items-center justify-center gap-1 rounded-md px-3 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium hover:text-white focus:outline-none`,
  solid: `bg-cu-red text-white hover:bg-cu-black-600`,
  outline: `border border-1 border-cu-red bg-white hover:bg-cu-red hover:text-white`,
  shadow: `shadow-md`,
  small: `px-3 py-2 text-sm`,
  disabled:
    'disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600',
}

export const solidStyles = {
  red: `bg-cu-red text-white hover:bg-cu-black-600`,
  'dark-grey': `text-white bg-cu-black-600 hover:bg-cu-red`,
  grey: `text-cu-black-800 bg-cu-black-50 hover:bg-cu-black-600`,
  white: `text-cu-black bg-white hover:bg-cu-red`,
}

export const outlineStyles = {
  red: `border border-1 border-cu-red bg-white hover:bg-cu-red`,
  'dark-grey': `border border-1 border-cu-black-600 bg-white hover:bg-cu-black-600`,
  grey: `border border-1 border-cu-black-200 bg-white hover:bg-cu-black-200 hover:text-cu-black-800`,
  white: `border border-1 border-white text-white hover:bg-white hover:text-cu-black-600`,
}
