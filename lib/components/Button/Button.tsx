import React from 'react'
import { Icon } from '../Icon/Icon'
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon'
import { buttonStyles, solidStyles } from './Button.Styles'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title?: string
  icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  color?: 'red' | 'grey' | 'white'
  isSmall?: boolean
  noBreak?: boolean
  hasShadow?: boolean
  isFull?: boolean
  isCenter?: boolean
  isDisabled?: boolean
  hasDropDown?: boolean
}

export const Button = ({
  color = 'red',
  title,
  icon,
  isSmall,
  noBreak,
  hasShadow,
  isFull,
  isCenter,
  isDisabled,
  hasDropDown,
  ...rest
}: ButtonProps) => {
  const disabledButton = isDisabled ? buttonStyles.disabled : solidStyles[color]
  const shadowStyles = hasShadow ? buttonStyles.shadow : ''
  const fullStyles = isFull ? 'w-full' : ''
  const centerStyles = isCenter ? 'relative left-1/2 -translate-x-1/2 ' : ''
  const buttonSmall = isSmall ? buttonStyles.small : ''
  const wordBreak = noBreak ? 'whitespace-nowrap' : ''
  const iconSize = isSmall ? 4 : 6

  return (
    <button
      type="button"
      aria-label={title ? title : 'Icon button'}
      className={`cu-button ${buttonStyles.core} ${disabledButton} ${wordBreak} ${buttonSmall} ${shadowStyles} ${fullStyles} ${centerStyles}  `}
      disabled={isDisabled ? true : false}
      {...rest}
    >
      {icon && (
        <span className={title ? 'mr-0.5' : ''}>
          <Icon icon={icon} size={iconSize} />
        </span>
      )}
      {title}
      {hasDropDown && <ChevronDownIcon className="w-4 h-4 mt-1 ml-1 -mr-1" aria-hidden="true" />}
    </button>
  )
}
