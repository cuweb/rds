import React from 'react'
import { marginAutoClasses, borderWidthClasses, borderColorClasses } from '../../utils/propClasses'

type marginAutoKeys = keyof typeof marginAutoClasses
type borderWidthKeys = keyof typeof borderWidthClasses
type borderColorKeys = keyof typeof borderColorClasses

export interface TextMediaAsideProps {
  children?: React.ReactNode
  align?: marginAutoKeys
  border?: borderWidthKeys
  borderColor?: borderColorKeys
}

export const TextMediaAside = ({ children, align, border, borderColor }: TextMediaAsideProps) => {
  const marginAuto = align ? marginAutoClasses[align] : ''

  const imageBorder =
    border && borderColor ? `cu-textmedia-img-border-${border} cu-textmedia-img-border-${borderColor}` : ''

  return <div className={`cu-textmedia-aside flex-1 ${marginAuto} ${imageBorder}`}>{children}</div>
}

TextMediaAside.displayName = 'TextMedia.BgImage'
