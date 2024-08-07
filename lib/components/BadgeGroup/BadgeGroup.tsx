import React from 'react'
import { gridGapClasses } from '../../utils/propClasses'

type gridGapKeys = keyof typeof gridGapClasses

export interface BadgeGroupProps {
  children: React.ReactNode
  gap?: gridGapKeys
}

export const BadgeGroup = ({ children, gap = '2' }: BadgeGroupProps) => {
  return <div className={`cu-badgegroup cu-component flex flex-wrap md:flex-1 ${gridGapClasses[gap]}`}>{children}</div>
}
