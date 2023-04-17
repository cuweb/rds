import React from 'react'
import { FigureVideo } from './Figure.Video'

import { styles, imageStyles } from './Figure.Styles'

export interface FigureProps {
  children: React.ReactNode
  caption?: string
  size?: 'small' | 'medium' | 'large' | 'full'
}

export const FigureWrapper = ({ children, caption, size = 'medium' }: FigureProps) => {
  return (
    <figure className={`cu-figure ${styles.figure} ${imageStyles[size]}`}>
      <div className={styles.container}>
        {children}
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </div>
    </figure>
  )
}

export const Figure = Object.assign(FigureWrapper, {
  Video: FigureVideo,
})
