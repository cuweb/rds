import React from 'react'
import { marginAutoClasses } from '../../utils/propClasses'

type marginAutoKeys = keyof typeof marginAutoClasses

export interface TextMediaAsideProps {
  children?: React.ReactNode
  align?: marginAutoKeys
  hasBorder?: boolean
}

export const TextMediaAside = ({ children, align, hasBorder = false }: TextMediaAsideProps) => {
  const marginAuto = align ? marginAutoClasses[align] : ''
  const imageBorder = hasBorder ? `border-8 border-solid border-white rounded-xl bg-white` : ''

  return <div className={`cu-textmedia-aside flex-1 ${marginAuto} ${imageBorder}`}>{children}</div>
}

TextMediaAside.displayName = 'TextMedia.Aside'
