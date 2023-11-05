export const styles = {
  base: `flex flex-col lg:flex-row flex-wrap gap-6 mx-auto mb-6 cu-textimage lg:gap-10 not-contained md:mb-12`,
  border: `border-b border-cu-black-50 pb-6 shadow-hero-text-image md:pb-8`,
  headerOne: `font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] text-cu-black-700 not-prose`,
  headerTwo: `font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] text-cu-black-700 not-prose`,
  underline: `relative mb-6 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px pb-4`,
  contentWrapper: `flex-[0_0_100%] md:max-w-4xl md:flex-1 cu-textimage-content`,
}

export const mediaStyles = {
  mediaWrapper: `rrelative flex-1 overflow-hidden rounded`,
  mediaBgImage: `flex-1 w-full h-full bg-no-repeat bg-cover min-h-[360px] lg:min-h-[220px]`,
  svgLeft: `hidden lg:block absolute -left-px top-0 z-10 h-full`,
  svgRight: `hidden lg:block absolute -right-px top-0 z-10 h-full transform scale-[-1]`,
}
