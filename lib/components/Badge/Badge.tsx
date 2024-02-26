import React from 'react'

export interface BadgeProps {
  children?: React.ReactNode
}

const BadgeBase = ({ children }: BadgeProps) => {
  return (
    <p className="inline-flex px-2 mr-2 text-xs font-semibold cu-badge not-prose rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
      {children}
    </p>
  )
}

BadgeBase.displayName = 'LinkItem'

export const Badge = Object.assign(BadgeBase, {})
