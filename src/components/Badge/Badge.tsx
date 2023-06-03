import React from 'react'
import styles from './Badge.styles'

export interface BadgeProps {
  children?: React.ReactNode
}

const BadgeBase = ({ children }: BadgeProps) => {
  return <p className={`cu-badge ${styles.badge}`}>{children}</p>
}

BadgeBase.displayName = 'LinkItem'

export const Badge = Object.assign(BadgeBase, {})
