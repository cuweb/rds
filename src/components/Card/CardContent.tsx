import React from 'react'
import { styles } from './Card.Styles'

export interface CardContentProps {
  children: React.ReactNode
}

export const CardContent = ({ children }: CardContentProps) => {
  return <div className={styles.content}>{children}</div>
}
