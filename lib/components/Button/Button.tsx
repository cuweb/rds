import React from 'react'
import { Icon } from '../Icon/Icon'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title?: string
  icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  color?: 'red' | 'grey' | 'white'
  type?: 'button' | 'submit' | 'reset'
  isSmall?: boolean
  isFull?: boolean
  isCenter?: boolean
  isDisabled?: boolean
}

export const Button = ({
  color = 'red',
  title,
  icon,
  type = 'button',
  isSmall,
  isFull,
  isCenter,
  isDisabled,
  ...rest
}: ButtonProps) => {
  const disabledButton = isDisabled ? 'cu-button--disabled' : `cu-button--${color}`
  const fullStyles = isFull ? 'cu-button--full' : ''
  const centerStyles = isCenter ? 'cu-button--center' : ''
  const buttonSmall = isSmall ? 'cu-button--small' : ''
  const iconSize = isSmall ? 4 : 6

  return (
    <button
      type={type}
      aria-label={title ? title : 'Icon button'}
      className={`cu-button not-prose ${disabledButton} ${buttonSmall} ${fullStyles} ${centerStyles}  `}
      disabled={isDisabled ? true : false}
      {...rest}
    >
      {icon && (
        <span className={title ? 'mr-0.5' : ''}>
          <Icon icon={icon} size={iconSize} />
        </span>
      )}
      {title}
    </button>
  )
}
