import React from 'react'
// import { HeroIcon, IconName } from '../HeroIcon'
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon'
import { Link } from '../Link/Link'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  //   icon?: IconName
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

const styles = {
  core: `not-prose inline-flex gap-1 items-center justify-center font-medium rounded-md focus:outline-none`,
  default: `bg-cu-red text-white hover:bg-cu-black-600`,
  ghost: `border border-1 border-cu-red text-cu-red bg-white hover:bg-cu-red hover:text-white`,
  grey: `text-cu-black-800 bg-cu-black-50 hover:bg-cu-black-600 hover:text-white`,
  'dark-grey': `text-white bg-cu-black-600 hover:bg-cu-red hover:text-white`,
  white: `text-cu-black bg-white hover:bg-cu-black hover:text-white`,
  shadow: `shadow-md`,
  disabled:
    'disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600',
}

export const Button = ({
  isType = 'default',
  size = 'base',
  title,
  //   icon,
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
  //   const iconSize = size === 'base' ? '6' : '4'

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
          {/* {icon && (
            <span className={icon && title ? 'mr-0.5' : ''}>
              <HeroIcon icon={icon} size={iconSize} />
            </span>
          )} */}

          {title}

          {hasDropDown && <ChevronDownIcon className="w-4 h-4 mt-1 ml-1 -mr-1" aria-hidden="true" />}
        </button>
      )}
      {url && (
        <Link
          href={url}
          className={`${styles.core}  ${styles[isType]}  ${buttonSizes[size]} ${shadowStyles} ${fullStyles} ${centerStyles}  `}
        >
          {/* {icon && (
            <span className={icon && title ? 'mr-0.5' : ''}>
              <HeroIcon icon={icon} size={iconSize} />
            </span>
          )} */}

          {title}
          {hasDropDown && <ChevronDownIcon className="w-4 h-4 mt-1 ml-1 -mr-1" aria-hidden="true" />}
        </Link>
      )}
    </>
  )
}
