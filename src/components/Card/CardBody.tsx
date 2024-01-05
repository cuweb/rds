import React from 'react'

export interface CardBodyProps {
  children: React.ReactNode
}

export const CardBody = ({ children }: CardBodyProps) => {
  return <div className="flex flex-col px-6">{children}</div>
}

CardBody.displayName = 'Card.Body'
