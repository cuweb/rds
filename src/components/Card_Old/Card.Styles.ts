export const styles = {
  // card: `not-prose relative flex flex-col cu-card rounded-lg @container md:max-w-lg`,
  card: `not-prose relative cu-card rounded-lg @container md:max-w-lg flex flex-col bg-cu-black-200`,
  whiteBg: `bg-white`,
  greyBg: `bg-cu-black-25`,
  shadow: `shadow-md shadow-cu-black-100`,
  shadowHover: `hover:shadow-lg hover:shadow-cu-black-200`,
  link: `group duration-300 ease-in hover:scale-[1.04] cursor-pointer`,
  border: `border border-cu-black-100`,
  redBorder: `border-l-8 border-l-cu-red`,
  content: `flex flex-col py-6 px-7 relative bg-cu-red-200`,
  header: `text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8`,
  excerpt: `text-base text-cu-black-600 mt-3 mb-6 last:mb-0`,
  more: `font-semibold text-cu-red-700`,
  badges: `pb-6 mt-auto px-7`,
}

export const button = {
  button: `px-3 py-2 text-sm rounded-md mt-auto`,
  border: `text-cu-black-600 bg-white border border-cu-black-300 hover:text-white hover:bg-cu-red hover:border-cu-red`,
}

export const figureStyles = {
  figure: `relative`,
  round: `pt-8 pb-2 px-6`,
}

export const metaStyles = {
  font: `text-sm text-cu-black-600 @sm:md:text-base`,
  fontLarge: `text-base text-cu-black-600 @sm:md:text-lg`,
  list: `space-y-1.5 md:space-y-2.5 mt-4`,
  date: `mb-3 italic`,
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
  container: `relative pt-[56.25%] bg-cu-black-900 rounded-t-lg overflow-hidden`,
  player: `absolute top-0 left-0`,
}

export const statStyle = {
  header: `text-2xl font-semibold text-cu-black-800 group-hover:text-cu-red md:text-3xl @xs:lg:text-4xl`,
  desc: `text-base text-cu-black-600 @sm:md:text-lg`,
  flexCol: `flex flex-col gap-2`,
  flexColReverse: `flex flex-col-reverse gap-2`,
}