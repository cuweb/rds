import { iconSizeClasses, textColorClasses } from '../../utils/propClasses'

export interface IconProps {
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  color?: 'white' | 'red' | 'grey'
  size?: keyof typeof iconSizeClasses
}

export const Icon = ({ icon, color, size = 8 }: IconProps) => {
  const Iconic = icon
  const iconColor = color ? textColorClasses[color] : ''

  return <Iconic className={`cu-icon ${iconColor} ${iconSizeClasses[size]}`} aria-hidden={true} />
}

Icon.displayName = 'Icon'
