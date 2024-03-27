import React from 'react'

export interface BadgeGroupProps {
  children: React.ReactNode
}

export const BadgeGroup = ({ children }: BadgeGroupProps) => {
  return <div className="flex flex-wrap gap-2.5 cu-badgegroup md:flex-1">{children}</div>
}
