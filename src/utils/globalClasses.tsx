const proseHeaderFour = 'prose-h4:text-xl md:prose-h4:text-2xl'
const proseText = 'prose-lg md:prose-xl'
const proseImage = 'prose-img:w-full prose-img:rounded-lg'
const proseQuote = 'prose-blockquote:font-normal prose-blockquote:rounded-md prose-blockquote:border-l-4'

export const proseStyles = {
  base: `prose prose-rds max-w-none ${proseText} ${proseImage} ${proseQuote} ${proseHeaderFour}`,
  proseText,
  proseImage,
}

export const footerStyles = {
  wave: `bg-cu-waves-red bg-[length:100.5%] bg-bottom bg-no-repeat`,
}

export const layoutSpacing = {
  section: 'px-8 py-6 md:py-10 md:px-10',
  containerWhite: 'py-5 md:py-6 bg-white',
  containerGrey: 'bg-cu-black-50 rounded-xl px-8 py-8 md:py-10 md:p-10',
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
