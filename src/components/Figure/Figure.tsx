import React from 'react'
import { FigureVideo } from './Figure.Video'
import { styles, figureSize, figureAlign } from './Figure.Styles'

export interface FigureProps {
  children: React.ReactNode
  caption?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
  align?: 'left' | 'right' | 'center' | 'none'
  isRound?: boolean
  hasShadow?: boolean
}

export const FigureWrapper = ({
  children,
  caption,
  isRound,
  hasShadow,
  size = 'full',
  align = 'none',
}: FigureProps) => {
  const roundedCorners = isRound ? styles.rounded : ''
  const shadow = hasShadow ? styles.shadow : ''

  return (
    <figure className="cu-figure">
      <div
        className={`not-prose ${styles.container} ${figureSize[size]} ${figureAlign[align]} ${shadow} ${roundedCorners}`}
      >
        {children}
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </div>
    </figure>
  )
}

export const Figure = Object.assign(FigureWrapper, {
  Video: FigureVideo,
})
