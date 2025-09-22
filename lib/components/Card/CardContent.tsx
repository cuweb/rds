import { ReactNode } from 'react'

export interface CardContentProps {
  children?: ReactNode
}

export const CardContent = ({ children }: CardContentProps) => {
  return <div className="text-base text-cu-black-700 dark:text-white">{children}</div>
}

CardContent.displayName = 'Card.Content'
