import React from 'react'
import { Icon } from '../Icon/Icon'
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon'
import { Link } from '../Link/Link'
import styles from './Button.styles'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title?: string
  icon?: any
  isType?: 'default' | 'ghost' | 'grey' | 'dark-grey' | 'white' | 'disabled'
  size?: 'sm' | 'base'
  hasShadow?: boolean
  isFull?: boolean
  isCenter?: boolean
  isDisabled?: boolean
  hasDropDown?: boolean
  url?: string | undefined
}

const buttonSizes = {
  sm: `px-3 py-2 text-sm`,
  base: `px-4 py-3 text-base`,
  lg: `px-6 py-4 text-xl`,
}

export const Button = ({
  isType = 'default',
  size = 'base',
  title,
  icon,
  hasShadow,
  isFull,
  isCenter,
  url,
  hasDropDown,
  ...rest
}: ButtonProps) => {
  const shadowStyles = hasShadow ? styles.shadow : ''
  const fullStyles = isFull ? 'w-full' : ''
  const centerStyles = isCenter ? 'relative left-1/2 -translate-x-1/2 ' : ''
  const iconSize = size === 'base' ? '6' : '4'

  return (
    <>
      {!url && (
        <button
          type="button"
          aria-label={title ? title : 'Icon button'}
          className={`${styles.core}  ${styles[isType]}  ${buttonSizes[size]} ${shadowStyles} ${fullStyles} ${centerStyles}  `}
          disabled={isType === 'disabled' ? true : false}
          {...rest}
        >
          {icon && (
            <span className={icon && title ? 'mr-0.5' : ''}>
              <Icon icon={icon} size={iconSize} />
            </span>
          )}

          {title}

          {hasDropDown && <ChevronDownIcon className="mt-1 ml-1 -mr-1 h-4 w-4" aria-hidden="true" />}
        </button>
      )}
      {url && (
        <Link
          href={url}
          className={`${styles.core}  ${styles[isType]}  ${buttonSizes[size]} ${shadowStyles} ${fullStyles} ${centerStyles}  `}
        >
          {icon && (
            <span className={icon && title ? 'mr-0.5' : ''}>
              <Icon icon={icon} size={iconSize} />
            </span>
          )}

          {title}
          {hasDropDown && <ChevronDownIcon className="mt-1 ml-1 -mr-1 h-4 w-4" aria-hidden="true" />}
        </Link>
      )}
    </>
  )
}
