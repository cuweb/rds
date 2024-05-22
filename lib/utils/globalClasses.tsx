export const proseGroups = {
  base: `prose prose-rds max-w-none`,
  text: `prose-lg md:prose-xl`,
  largeLight: `prose-xl md:prose-2xl font-light`,
  image: `prose-img:w-full prose-img:rounded-lg`,
  quote: `prose-blockquote:font-normal prose-blockquote:rounded-md prose-blockquote:border-l-4`,
  header: `prose-h4:text-xl md:prose-h4:text-2xl`,
}

export const proseStyles = {
  base: `${proseGroups.base} ${proseGroups.text} ${proseGroups.image} ${proseGroups.quote} ${proseGroups.header}`,
}

export const layoutSpacing = {
  main: 'px-8 py-6 md:py-10 md:px-10',
  containerWhite: 'bg-white',
  // containerWhite: 'py-5 md:py-6 bg-white',
  containerGrey: 'max-w-screen-2xl mx-auto bg-cu-black-50 rounded-xl px-6 py-6 md:py-10 md:p-10',
}

export const globalSpace = {
  margin: 'm-6 md:m-10',
  padding: 'px-6 py-6 md:px-10 md:py-14',
  marginX: 'mx-6 md:mx-10',
  marginNegX: '-mx-6 md:-mx-10',
  marginY: 'my-6 md:my-10',
  paddingY: 'py-6 md:py-10',
  paddingYHalf: 'py-3 md:py-5',
  paddingX: 'px-6 md:px-10',
}
