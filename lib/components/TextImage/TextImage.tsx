import React from 'react'
import { TextImageContent } from './TextImageContent'
import { rdsMaxWidth, rdsFlexRow } from '../../utils/optionClasses'

export interface TextImageProps {
  children?: React.ReactNode
  maxWidth?: '5xl' | '7xl' | 'max'
  flexRow?: 'md' | 'lg'
  flipX?: boolean
  flipYsm?: boolean
}

export const TextImageWrapper = ({ children, maxWidth = '5xl', flexRow = 'lg', flipX, flipYsm }: TextImageProps) => {
  const flipXLayout = flipX ? 'lg:flex-row-reverse' : ''
  const flipYsmLayout = flipYsm ? 'flex-col-reverse sm:flex-row' : ''

  return (
    <div
      className={`cu-textimage cu-component-spacing not-contained flex flex-col lg:flex-row gap-6 mx-auto cu-textimage lg:gap-10 ${rdsMaxWidth[maxWidth]} ${rdsFlexRow[flexRow]} ${flipXLayout} ${flipYsmLayout}`}
    >
      {children}
    </div>
  )
}

export const TextImage = Object.assign(TextImageWrapper, {
  Content: TextImageContent,
})

TextImageWrapper.displayName = 'TextImage'
