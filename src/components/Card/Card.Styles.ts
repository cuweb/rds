export const styles = {
  card: `not-prose relative flex flex-col cu-card rounded-lg @container md:max-w-lg`,
  whiteBg: `bg-white`,
  greyBg: `bg-cu-black-25`,
  shadow: `shadow-md shadow-cu-black-100`,
  shadowHover: `hover:shadow-lg hover:shadow-cu-black-200`,
  link: `group duration-300 ease-in hover:scale-[1.04] cursor-pointer`,
  border: `border border-cu-black-100`,
  redBorder: `border-l-8 border-l-cu-red`,
  content: `flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3 relative`,
  header: `text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8`,
  excerpt: `text-base text-cu-black-600`,
  more: `font-semibold text-cu-red-700`,
  badges: `pb-6 mt-auto px-7`,
}

export const figureStyles = {
  figure: `relative`,
  round: `pt-8 pb-2 px-6`,
  imgThumb: `mx-6 mt-6 mb-2 overflow-hidden max-w-[45%] @xl:md:max-w-[25%] rounded-md`,
}

export const metaStyles = {
  wrapper: `space-y-1.5 @sm:md:space-y-2`,
  item: `text-sm text-cu-black-600 @sm:md:text-base`,
  itemLarge: `text-base text-cu-black-600 @sm:md:text-lg`,
  italic: `italic`,
  bold: `font-semibold`,
  alignIcon: `flex`,
  redIcon: `flex-shrink-0 w-5 h-5 @sm:md:w-6 @sm:md:h-6 mr-2 text-cu-red-300`,
  wrap: `break-all`,
}

export const eventStyles = {
  dateBox: `z-10 -mt-16 mb-3 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-md shadow-md group-hover:bg-cu-red`,
  dateBoxMonth: `block text-xs font-bold uppercase text-cu-red group-hover:text-white`,
  dateBoxDay: `block text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white`,
}

export const videoStyle = {
  container: `relative pt-[56.25%] bg-cu-black-900`,
  player: `absolute top-0 left-0`,
}

export const statStyle = {
  header: `text-2xl font-semibold text-cu-black-800 group-hover:text-cu-red @sm:md:text-4xl`,
  desc: `text-base text-cu-black-600 @sm:md:text-lg`,
  flexCol: `flex flex-col gap-2`,
  flexColReverse: `flex flex-col-reverse gap-2`,
}
