import React from 'react'

export interface ButtonGroupProps {
  children: React.ReactNode
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return <div className="flex flex-wrap gap-5 cu-buttongroup md:flex-1">{children}</div>
}
