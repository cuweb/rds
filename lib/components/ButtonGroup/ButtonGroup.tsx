import React from 'react'
import { gridGapClasses, justifyContentClasses } from '../../utils/propClasses'

type gridGapKey = keyof typeof gridGapClasses
type justifyContentKey = keyof typeof justifyContentClasses

export interface ButtonGroupProps {
  children: React.ReactNode
  gap?: gridGapKey
  align?: justifyContentKey
}

export const ButtonGroup = ({ children, gap = '5', align = 'start' }: ButtonGroupProps) => {
  return (
    <div
      className={`cu-buttongroup cu-component-updated flex flex-wrap md:flex-1 ${gridGapClasses[gap]} ${justifyContentClasses[align]}`}
    >
      {children}
    </div>
  )
}
