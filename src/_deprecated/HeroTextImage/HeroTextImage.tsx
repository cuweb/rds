import React from 'react'
import { HeroTextImageContent } from './HeroTextImageContent'
import { HeroTextImageEvent } from './HeroTextImageEvent'
import { HeroTextImagePeople } from './HeroTextImagePeople'
import { HeroTextImageSocial } from './HeroTextImageSocial'
import { HeroTextImageMedia } from './HeroTextImageMedia'
import { rdsMaxWidth } from '../../utils/optionClasses'
import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageProps {
  children?: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  hasBorder?: boolean
  reverse?: boolean
}

export const HeroTextImageWrapper = ({ children, maxWidth = '7xl', hasBorder, reverse }: HeroTextImageProps) => {
  const reverseLayout = reverse ? 'flex-row-reverse' : ''
  const borderStyle = hasBorder ? styles.border : ''

  return (
    <div className={`cu-hero-textimage ${styles.base} ${rdsMaxWidth[maxWidth]} ${reverseLayout} ${borderStyle}`}>
      {children}
    </div>
  )
}

export const HeroTextImage = Object.assign(HeroTextImageWrapper, {
  Content: HeroTextImageContent,
  Event: HeroTextImageEvent,
  People: HeroTextImagePeople,
  Social: HeroTextImageSocial,
  Media: HeroTextImageMedia,
})
