export const styles = {
  base: `flex flex-col lg:flex-row gap-6 mx-auto mb-6 cu-textimage lg:gap-10 not-contained md:mb-12`,
  baseContent: ``,
  border: `border-b border-cu-black-50 pb-6 shadow-hero-text-image md:pb-8`,
  headerOne: `font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] text-cu-black-700 not-prose`,
  headerTwo: `font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] text-cu-black-700 not-prose`,
  underline: `relative mb-6 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px pb-6`,
  contentWrapper: `flex-[0_0_100%] md:max-w-4xl md:flex-1 cu-textimage-content`,
  pronoun: 'text-xl lg:text-3xl font-light lowercase text-cu-black-500',
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
  flex: 'flex items-center gap-6',
  link: 'text-cu-black-400',
  icon: 'w-6 h-6 md:w-8 md:h-8',
}
