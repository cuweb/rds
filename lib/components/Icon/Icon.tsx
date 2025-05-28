import { iconSizeClasses, textColorClasses } from '../../utils/propClasses'

type textColorKeys = keyof typeof textColorClasses
type iconSizeKeys = keyof typeof iconSizeClasses

export interface IconProps {
  icon: React.ReactNode
  color?: textColorKeys
  size?: iconSizeKeys
}

export const Icon = ({ icon, color, size = 8 }: IconProps) => {
  const iconColor = color ? textColorClasses[color] : ''

  return (
    <span className={`cu-icon ${iconColor} ${iconSizeClasses[size]}`} aria-hidden="true">
      {icon}
    </span>
  )
}

Icon.displayName = 'Icon'
