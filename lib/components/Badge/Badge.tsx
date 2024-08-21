import { useLinkContext } from '../LinkProvider/useLinkContext'
import { borderRadiusClasses } from '../../utils/propClasses'

type borderRadiusKeys = keyof typeof borderRadiusClasses

export interface BadgeProps {
  text: string
  link?: string
  rounded?: borderRadiusKeys
  color?: 'grey' | 'white' | 'black60' | 'white60' | 'green' | 'red' | 'yellow' | 'blue' | 'purple'
  noWordBreak?: boolean
}

export const Badge = ({ text, link, rounded = 'full', color = 'grey', noWordBreak = false }: BadgeProps) => {
  const LinkComponent = useLinkContext()
  const wordBreakClass = noWordBreak ? 'whitespace-nowrap' : ''

  return (
    <p className={`inline-flex cu-badge cu-badge--${color} ${borderRadiusClasses[rounded]} ${wordBreakClass}`}>
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
