import React from 'react'

export interface ButtonGroupProps {
  children: React.ReactNode
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return <div className="cu-buttongroup flex flex-wrap gap-6 md:flex-1">{children}</div>
}
