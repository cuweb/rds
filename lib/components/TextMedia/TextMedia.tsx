import React from 'react'
import { TextMediaContent } from './TextMediaContent'
import { TextMediaBgImg } from './TextMediaBgImg'
import { TextMediaAside } from './TextMediaAside'

export interface TextMediaProps {
  children?: React.ReactNode
  reverse?: boolean
}

export const TextMediaWrapper = ({ children, reverse }: TextMediaProps) => {
  const reverseLayout = reverse ? 'lg:flex-row-reverse' : ''

  // TODO: margin-y
  const $componentMarginY = `my-6 md:my-12 first:mt-0`

  return (
    <>
      <div
        className={`cu-textmedia flex flex-col lg:flex-row mx-auto gap-6 md:gap-10 ${$componentMarginY} ${reverseLayout}`}
      >
        {children}
      </div>
    </>
  )
}

export const TextMedia = Object.assign(TextMediaWrapper, {
  Content: TextMediaContent,
  BgImage: TextMediaBgImg,
  Aside: TextMediaAside,
})

TextMediaWrapper.displayName = 'TextMedia'
