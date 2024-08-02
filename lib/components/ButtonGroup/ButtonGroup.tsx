import React from 'react'

export interface ButtonGroupProps {
  children: React.ReactNode
  gap?: 3 | 5
  align?: 'left' | 'right' | 'center'
}

export const ButtonGroup = ({ children, gap = 5, align = 'left' }: ButtonGroupProps) => {
  const gapStyle = gap === 5 ? 'gap-5' : 'gap-3'

  let alignStyle = 'justify-start'
  switch (align) {
    case 'right':
      alignStyle = 'justify-end'
      break
    case 'center':
      alignStyle = 'justify-center'
      break
    default:
      alignStyle = 'justify-start'
  }

  return (
    <div className={`cu-buttongroup cu-component flex flex-wrap md:flex-1 ${gapStyle} ${alignStyle}`}>{children}</div>
  )
}
