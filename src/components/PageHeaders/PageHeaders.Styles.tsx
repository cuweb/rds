export const listStyles = {
  listGroup: `pl-0 space-y-0.5 list-none not-prose`,
  listLink: 'font-semibold text-cu-red hover:underline',
}

export const mediaStyles = {
  mediaWrapper: `relative flex-1 overflow-hidden rounded`,
  mediaBgImage: `relative flex-1 w-full h-full bg-no-repeat bg-cover min-h-[360px] lg:min-h-[220px]`,
  svgLeft: `hidden lg:block absolute -left-px top-0 z-10 h-full`,
  svgRight: `hidden lg:block absolute -right-px top-0 z-10 h-full transform scale-[-1]`,
  svgFlipLeft: `hidden lg:block absolute -left-px top-0 z-10 h-full -scale-y-100`,
  svgFlipRight: `hidden lg:block absolute -right-px top-0 z-10 h-full -scale-x-100`,
}

export const socialStyles = {
  flex: 'flex items-center gap-4 list-none',
  link: 'text-cu-black-400',
  icon: 'w-6 h-6 md:w-8 md:h-8',
}
