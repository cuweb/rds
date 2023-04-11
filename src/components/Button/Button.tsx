import React from 'react'
import { Icon } from '../Icon/Icon'
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon'
import { buttonStyles, solidStyles, outlineStyles } from '../../utils/buttonClasses'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title?: string
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  isType?: 'solid' | 'outline' | 'disabled'
  color?: 'red' | 'grey' | 'dark-grey' | 'white'
  isSmall?: boolean
  hasShadow?: boolean
  isFull?: boolean
  isCenter?: boolean
  hasDropDown?: boolean
}

export const Button = ({
  isType = 'solid',
  color = 'red',
  title,
  icon,
  isSmall,
  hasShadow,
  isFull,
  isCenter,
  hasDropDown,
  ...rest
}: ButtonProps) => {
  // Set bg and outline options
  const buttonStyle = isType === 'outline' ? outlineStyles[color] : solidStyles[color]
  const buttonType = isType === 'disabled' ? buttonStyles.disabled : buttonStyle

  // Button props
  const shadowStyles = hasShadow ? buttonStyles.shadow : ''
  const fullStyles = isFull ? 'w-full' : ''
  const centerStyles = isCenter ? 'relative left-1/2 -translate-x-1/2 ' : ''
  const buttonSmall = isSmall ? buttonStyles.small : ''
  const iconSize = isSmall ? '4' : '6'

  return (
    <button
      type="button"
      aria-label={title ? title : 'Icon button'}
      className={`${buttonStyles.core} ${buttonType}  ${buttonSmall} ${shadowStyles} ${fullStyles} ${centerStyles}  `}
      disabled={isType === 'disabled' ? true : false}
      {...rest}
    >
      {icon && (
        <span className={title ? 'mr-0.5' : ''}>
          <Icon icon={icon} size={iconSize} />
        </span>
      )}
      {title}
      {hasDropDown && <ChevronDownIcon className="mt-1 ml-1 -mr-1 h-4 w-4" aria-hidden="true" />}
    </button>
  )
}
