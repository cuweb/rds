import React from 'react'

export interface ButtonGroupProps {
  children: React.ReactNode
  isCenter?: boolean
}

export const ButtonGroup = ({ children, isCenter }: ButtonGroupProps) => {
  const centerStyles = isCenter ? 'justify-center' : ''
  return (
    <div className={`cu-buttongroup cu-component-spacing flex flex-wrap gap-5 md:flex-1 ${centerStyles}`}>
      {children}
    </div>
  )
}
