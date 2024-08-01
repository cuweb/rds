import React from 'react'
import { TextImageContent } from './TextImageContent'
import { maxWidthClasses, flexRowClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface TextImageProps {
  children?: React.ReactNode
  maxWidth?: maxWidthKeys
  flexRow?: 'md' | 'lg'
  flipX?: boolean
  flipYsm?: boolean
}

export const TextImageWrapper = ({ children, maxWidth = '5xl', flexRow = 'lg', flipX, flipYsm }: TextImageProps) => {
  const flipXLayout = flipX ? 'lg:flex-row-reverse' : ''
  const flipYsmLayout = flipYsm ? 'flex-col-reverse sm:flex-row' : ''

  return (
    <div
      className={`cu-textimage cu-component not-contained flex flex-col lg:flex-row gap-6 mx-auto cu-textimage lg:gap-10 ${maxWidthClasses[maxWidth]} ${flexRowClasses[flexRow]} ${flipXLayout} ${flipYsmLayout}`}
    >
      {children}
    </div>
  )
}

export const TextImage = Object.assign(TextImageWrapper, {
  Content: TextImageContent,
})

TextImageWrapper.displayName = 'TextImage'
