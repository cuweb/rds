export const styles = {
  base: `not-prose group relative overflow-hidden @container bg-white hover:bg-slate-50`,
  content: `flex flex-1 flex-col gap-1.5 pr-6 md:gap-3.5`,
  header: `text-lg font-semibold text-cu-black group-hover:text-cu-red @lg:md:text-xl @4xl:lg:text-2xl`,
  excerpt: `text-sm text-cu-black-900 md:text-base @lg:md:text-lg`,
  more: `font-semibold text-cu-red group-hover:text-cyan-700`,
  badges: `mt-auto`,
  arrowArea: `absolute -mt-3 top-1/2 right-4`,
  arrowIcon: `flex-none w-6 h-6 ml-auto text-cu-black-300 group-hover:text-cu-red`,
}

export const figureStyles = {
  //   figure: `relative rounded-md overflow-hidden shadow-md`,
  figure: `flex-none bg-cyan-800 rounded-md`,
  default: `max-w-[50%] @lg:md:max-w-[35%]`,
  small: `max-w-[50%] @lg:md:max-w-[25%]`,
}

export const metaStyles = {
  wrapper: `flex flex-col flex-wrap gap-2`,
  item: `text-sm text-cu-black-600 @2xl:md:text-base`,
  itemLarge: `text-base text-cu-black-600 @sm:md:text-lg`,
  italic: `italic`,
  bold: `font-semibold text-cyan-600`,
  alignIcon: `flex`,
  redIcon: `mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300`,
}

export const eventStyles = {
  dateBox: `h-20 w-20 @lg:lg:h-32 @lg:lg:w-32 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red flex`,
  dateBoxMonth: `text-xs @lg:lg:text-lg font-bold uppercase text-cu-red group-hover:text-white`,
  dateBoxDay: `text-2xl @lg:lg:text-4xl font-bold uppercase text-cu-black-800 group-hover:text-white`,
}
