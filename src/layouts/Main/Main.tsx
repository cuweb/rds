import React from 'react'
import styles from './Main.styles'

export interface MainProps {
  children: React.ReactNode
  hasOverlap?: boolean
}

export const Main = ({ children, hasOverlap }: MainProps) => {
  const overlapStyles = hasOverlap ? styles.overlap : ''

  return <main className={`${styles.core} ${overlapStyles}`}>{children}</main>
}
