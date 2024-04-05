import { rdsIconSize, rdsTextColor } from '../../utils/optionClasses'

export interface IconProps {
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  color?: 'white' | 'red' | 'grey'
  size?: keyof typeof rdsIconSize
}

export const Icon = ({ icon, color, size = 8 }: IconProps) => {
  const Iconic = icon
  const iconColor = color ? rdsTextColor[color] : ''

  return <Iconic className={`cu-icon ${iconColor} ${rdsIconSize[size]}`} aria-hidden={true} />
}

Icon.displayName = 'Icon'
