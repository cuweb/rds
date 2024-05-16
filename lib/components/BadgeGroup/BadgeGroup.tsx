import React from 'react'

export interface BadgeGroupProps {
  children: React.ReactNode
}

export const BadgeGroup = ({ children }: BadgeGroupProps) => {
  return <div className="cu-badgegroup cu-block-spacing flex flex-wrap gap-2.5 md:flex-1">{children}</div>
}
