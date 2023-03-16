import React from 'react'
import styles from './Badge.styles'

export interface BadgeProps {
  children?: React.ReactNode
}

const BadgeBase = ({ children }: BadgeProps) => {
  return <p className={`${styles.badge}`}>{children}</p>
}

BadgeBase.displayName = 'LinkItem'

export const Badge = Object.assign(BadgeBase, {})
