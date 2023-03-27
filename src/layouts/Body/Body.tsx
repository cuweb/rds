import React from 'react'

export interface BodyProps {
  children: React.ReactNode
  className?: string
}

export const Body = ({ children, className }: BodyProps) => {
  return <body className={className}>{children}</body>
}
