import { iconSizeClasses, textColorClasses } from '../../utils/propClasses'
import { iconMap } from './iconMap'

type textColorKeys = keyof typeof textColorClasses
type iconSizeKeys = keyof typeof iconSizeClasses
type IconName = keyof typeof iconMap

export interface IconProps {
  icon?: React.ReactNode
  name?: IconName
  color?: textColorKeys
  size?: iconSizeKeys
  className?: string
}

export const Icon = ({ icon, name, color, size = 6, className = '' }: IconProps) => {
  const iconColor = color ? textColorClasses[color] : ''
  const iconSize = iconSizeClasses[size]
  const SvgIcon = name ? iconMap[name] : null

  return (
    <span className={`cu-icon ${iconColor} ${iconSize} ${className}`} aria-hidden="true">
      {SvgIcon ? <SvgIcon className={`fill-current ${iconColor} ${iconSize}`} /> : icon ? icon : null}
    </span>
  )
}
