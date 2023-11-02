export const styles = {
  base: `not-prose relative overflow-hidden @container bg-white`,
  content: `flex flex-1 flex-col gap-1.5 pr-6 md:gap-3.5`,
  header: `text-lg font-semibold text-cu-black line-clamp-3 group-hover:text-cu-red @lg:md:text-xl @3xl:lg:text-2xl`,
  excerpt: `text-sm text-cu-black-900 md:text-base @lg:md:text-lg`,
  more: `font-semibold text-cu-red`,
  badges: `mt-auto`,
  arrowArea: `absolute -mt-3 top-1/2 right-4`,
  arrowIcon: `flex-none w-6 h-6 ml-auto text-cu-black-300 group-hover:text-cu-red`,
}

export const linkStyles = {
  baseLink: `group hover:bg-slate-50`,
  headerLink: ` `,
}

export const figureStyles = {
  figure: `flex-none rounded-md`,
  default: `max-w-[50%] @lg:md:max-w-[35%]`,
  small: `max-w-[50%] @lg:md:max-w-[25%]`,
}

export const metaStyles = {
  wrapper: `flex flex-col flex-wrap gap-2`,
  item: `text-sm text-cu-black-600 @2xl:md:text-base`,
  itemLarge: `text-base text-cu-black-600 @sm:md:text-lg`,
  italic: `italic`,
  bold: `font-semibold`,
  alignIcon: `flex`,
  redIcon: `mr-2 h-6 w-6 flex-shrink-0 text-cu-red-300`,
  wrap: `break-all`,
}

export const eventStyles = {
  dateBox: `h-20 w-20 @4xl:lg:h-32 @4xl:lg:w-32 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red flex`,
  dateBoxMonth: `text-xs @4xl:lg:text-lg font-bold uppercase text-cu-red group-hover:text-white`,
  dateBoxDay: `text-2xl @4xl:lg:text-4xl font-bold uppercase text-cu-black-800 group-hover:text-white`,
}
