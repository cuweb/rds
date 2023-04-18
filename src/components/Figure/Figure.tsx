import React from 'react'
import { FigureVideo } from './Figure.Video'
import { styles, figureSize, figureAlign, figureSpacing } from './Figure.Styles'

export interface FigureProps {
  children: React.ReactNode
  caption?: string
  size?: 'small' | 'medium' | 'large' | 'full'
  align?: 'left' | 'right' | 'center' | 'none'
  isRound?: boolean
  isCircle?: boolean
}

export const FigureWrapper = ({ children, caption, isRound, isCircle, size = 'full', align = 'none' }: FigureProps) => {
  const roundedCorners = isRound ? styles.rounded : ''
  const fullCircle = isCircle ? styles.circle : ''
  const floatLeft = align === 'left' && size !== 'full' ? figureSpacing.left : ''
  const floatRight = align === 'right' && size !== 'full' ? figureSpacing.right : ''

  return (
    <figure className="cu-figure">
      <div
        className={`${styles.container} ${figureSize[size]} ${figureAlign[align]} ${floatLeft} ${floatRight} ${roundedCorners} ${fullCircle}`}
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
