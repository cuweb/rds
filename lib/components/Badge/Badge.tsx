export interface BadgeProps {
  children: React.ReactNode
  color?: 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'grey'
  noWordBreak?: boolean
}

export const Badge = ({ children, color = 'grey', noWordBreak = false }: BadgeProps) => {
  const wordBreakClass = noWordBreak ? 'whitespace-nowrap' : ''

  return (
    <p
      className={`inline-flex px-3.5 py-1.5 text-xs font-semibold cu-badge cu-badge--${color} not-prose rounded-full ${wordBreakClass}`}
    >
      {children}
    </p>
  )
}
