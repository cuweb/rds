import { rdsWidth, rdsHeight, rdsTextColor } from '../../utils/optionClasses'

export interface IconProps {
  //icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  color?: 'black' | 'blue' | 'white' | 'red' | 'grey' | 'dark-grey' | 'green' | 'yellow'
  size?: '4' | '5' | '6' | '7' | '8' | '12' | '16' | '20'
}

export const Icon = ({ icon, color, size = '8' }: IconProps) => {
  const Iconic = icon
  const hasColor = color ? rdsTextColor[color] : ''

  return <Iconic className={`cu-icon ${hasColor} ${rdsWidth[size]} ${rdsHeight[size]}`} aria-hidden={true} />
}

Icon.displayName = 'Icon'
