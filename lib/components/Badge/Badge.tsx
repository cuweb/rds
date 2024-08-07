import { useLinkContext } from '../LinkProvider/useLinkContext'

export interface BadgeProps {
  text: string
  link?: string
  color?: 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'grey'
  noWordBreak?: boolean
}

export const Badge = ({ text, link, color = 'grey', noWordBreak = false }: BadgeProps) => {
  const LinkComponent = useLinkContext()
  const wordBreakClass = noWordBreak ? 'whitespace-nowrap' : ''

  return (
    <p className={`inline-flex cu-badge cu-badge--${color} not-prose rounded-full ${wordBreakClass}`}>
      {link ? (
        <LinkComponent href={link} className="cursor-pointer block">
          <span className="px-3.5 py-1.5 text-xs font-semibold block">{text}</span>
        </LinkComponent>
      ) : (
        <span className="px-3.5 py-1.5 text-xs font-semibold block">{text}</span>
      )}
    </p>
  )
}
