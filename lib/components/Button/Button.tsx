import React from 'react'
import { Icon } from '../Icon/Icon'

export interface ButtonProp extends React.ComponentPropsWithoutRef<'button'> {
  color?: 'red' | 'grey' | 'dark-grey' | 'white'
  type?: 'button' | 'submit' | 'reset'
  isSmall?: boolean
  isFull?: boolean
  isDisabled?: boolean
}

export interface ButtonTitleProps extends ButtonProp {
  title: string
  icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  ariaLabel?: string
}

export interface ButtonNoTitleProps extends ButtonProp {
  title?: string
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  ariaLabel: string
}

export const Button = ({
  color = 'red',
  title,
  icon,
  type = 'button',
  isSmall,
  isFull,
  isDisabled,
  ariaLabel = 'aria-label',
  ...rest
}: ButtonNoTitleProps | ButtonTitleProps) => {
  const disabledButton = isDisabled ? 'cu-button--disabled' : `cu-button--${color}`
  const fullStyles = isFull ? 'cu-button--full' : ''
  const buttonSmall = isSmall ? 'cu-button--small' : ''
  const iconSize = isSmall ? 4 : 6

  return (
    <button
      type={type}
      aria-label={!ariaLabel ? title : ariaLabel}
      className={`cu-button not-prose ${disabledButton} ${buttonSmall} ${fullStyles}`}
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
