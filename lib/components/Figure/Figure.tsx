import React from 'react'
import { FigureVideo } from './Figure.Video'
import { styles, figureSize, figureAlign } from './Figure.Styles'

export interface FigureProps {
  children: React.ReactNode
  caption?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
  align?: 'left' | 'right' | 'center' | 'none'
  hasShadow?: boolean
  noMobile?: boolean
}

export const FigureWrapper = ({
  children,
  caption,
  hasShadow,
  noMobile,
  size = 'full',
  align = 'none',
}: FigureProps) => {
  const shadow = hasShadow ? styles.shadow : ''
  const hideMobile = noMobile ? 'hidden md:block' : 'block'

  return (
    <figure className={`cu-figure ${hideMobile}`}>
      <div className={`not-prose rounded-lg ${styles.container} ${figureSize[size]} ${figureAlign[align]} ${shadow}`}>
        {children}
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </div>
    </figure>
  )
}

export const Figure = Object.assign(FigureWrapper, {
  Video: FigureVideo,
})
