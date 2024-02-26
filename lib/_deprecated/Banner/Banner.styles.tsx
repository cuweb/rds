const styles = {
  core: `not-prose relative py-16 md:py-32 md:flex md:items-center md:min-h-[240px]`,
  buttonWrapper: `flex gap-6 flex-wrap md:flex-1`,
  overlap: `md:pb-32 md:pt-20`,
}
export default styles

export const typeStyles = {
  'light-grey': `bg-cu-black-50 text-cu-black-800`,
  'light-fade': `bg-gradient-to-b from-white to-cu-black-50 text-cu-black-800`,
  'dark-wave': `bg-cu-black-800 text-white`,
  'red-wave': `bg-gradient-to-b from-cu-red to-cu-red-900 text-white`,
  animated: `bg-white text-cu-black-800`,
  image: `bg-cu-black-800 text-white md:py-48`,
}

export const contentStyles = {
  title: `font-semibold text-3xl`,
  paragraph: `text-base lg:text-xl max-w-5xl`,
}
