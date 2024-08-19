import React from 'react'
import { TextMediaContent } from './TextMediaContent'
import { TextMediaBgImg } from './TextMediaBgImg'
import { TextMediaAside } from './TextMediaAside'
import { gridGapClasses, maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses
type gridGapKeys = keyof typeof gridGapClasses

export interface TextMediaProps {
  children?: React.ReactNode
  maxWidth?: maxWidthKeys
  gridGap?: gridGapKeys
  reverse?: boolean
}

export const TextMediaWrapper = ({ children, maxWidth = '5xl', gridGap = '10', reverse }: TextMediaProps) => {
  const reverseLayout = reverse ? 'lg:flex-row-reverse' : ''

  return (
    <>
      <div
        className={`cu-textmedia cu-component flex flex-col lg:flex-row mx-auto ${gridGapClasses[gridGap]} ${maxWidthClasses[maxWidth]} ${reverseLayout}`}
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
