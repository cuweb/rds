import React from 'react'
import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageContentProps {
  children?: React.ReactNode
}

export const HeroTextImageContent = ({ children }: HeroTextImageContentProps) => {
  return <div className={styles.contentSpacing}>{children}</div>
}

HeroTextImageContent.displayName = 'HeroTextImage.Content'
