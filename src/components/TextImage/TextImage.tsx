import React from 'react'
import { TextImageContent } from './TextImageContent'
import { rdsMaxWidth, rdsFlexRow } from '../../utils/optionClasses'
import { styles } from './TextImage.Styles'

export interface TextImageProps {
  children?: React.ReactNode
  maxWidth?: '5xl' | '7xl' | 'max'
  flexRow?: 'md' | 'lg'
  hasBorder?: boolean
  flipX?: boolean
  flipYsm?: boolean
}

export const TextImageWrapper = ({
  children,
  maxWidth = '5xl',
  flexRow = 'lg',
  hasBorder,
  flipX,
  flipYsm,
}: TextImageProps) => {
  const flipXLayout = flipX ? 'lg:flex-row-reverse' : ''
  const flipYsmLayout = flipYsm ? 'flex-col-reverse sm:flex-row' : ''
  const borderStyle = hasBorder ? styles.border : ''

  return (
    <div
      className={`${styles.base} ${rdsMaxWidth[maxWidth]} ${rdsFlexRow[flexRow]} ${flipXLayout} ${flipYsmLayout} ${borderStyle}`}
    >
      {children}
    </div>
  )
}

export const TextImage = Object.assign(TextImageWrapper, {
  Content: TextImageContent,
})
