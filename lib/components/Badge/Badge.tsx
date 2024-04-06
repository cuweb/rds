import React from 'react'

export interface BadgeProps {
  children?: React.ReactNode
  color?: 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'grey'
  noWordBreak?: boolean
}

export const Badge = ({ children, color = 'grey', noWordBreak = false }: BadgeProps) => {
  const wordBreakClass = noWordBreak ? 'whitespace-nowrap' : ''

  // Set color classes
  let badgeColor
  switch (color) {
    case 'green':
      badgeColor = 'bg-green-50 text-green-800'
      break
    case 'red':
      badgeColor = 'bg-red-50 text-red-800'
      break
    case 'yellow':
      badgeColor = 'bg-yellow-50 text-yellow-800'
      break
    case 'blue':
      badgeColor = 'bg-blue-50 text-blue-800'
      break
    case 'purple':
      badgeColor = 'bg-purple-50 text-purple-800'
      break
    default:
      badgeColor = 'bg-cu-black-50 text-cu-black-800'
      break
  }

  return (
    <p
      className={`inline-flex px-3 py-1 text-xs font-semibold cu-badge not-prose rounded-full ${badgeColor} ${wordBreakClass}`}
    >
      {children}
    </p>
  )
}
