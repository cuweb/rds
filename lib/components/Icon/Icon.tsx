import { iconSizeClasses, textColorClasses } from '../../utils/propClasses'

type textColorKeys = keyof typeof textColorClasses
type iconSizeKeys = keyof typeof iconSizeClasses

export interface IconProps {
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  color?: textColorKeys
  size?: iconSizeKeys
}

export const Icon = ({ icon, color, size = 8 }: IconProps) => {
  const Iconic = icon
  const iconColor = color ? textColorClasses[color] : ''

  return <Iconic className={`cu-icon ${iconColor} ${iconSizeClasses[size]}`} aria-hidden={true} />
}

Icon.displayName = 'Icon'
