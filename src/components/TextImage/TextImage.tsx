import React from 'react'
import { TextImageContent } from './TextImageContent'
import { rdsMaxWidth } from '../../utils/optionClasses'
import { styles } from './TextImage.Styles'

export interface TextImageProps {
  children?: React.ReactNode
  maxWidth?: '5xl' | '7xl' | 'max'
  hasBorder?: boolean
  reverse?: boolean
}

export const TextImageWrapper = ({ children, maxWidth = '5xl', hasBorder, reverse }: TextImageProps) => {
  const reverseLayout = reverse ? 'flex-row-reverse' : ''
  const borderStyle = hasBorder ? styles.border : ''

  return <div className={`${styles.base} ${rdsMaxWidth[maxWidth]} ${reverseLayout} ${borderStyle}`}>{children}</div>
}

export const TextImage = Object.assign(TextImageWrapper, {
  Content: TextImageContent,
})
