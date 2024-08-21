import React from 'react'

export type ImageType = {
  src: string | undefined
  alt: string | undefined
  width?: string
  height?: string
  className?: string
}

export type UserInfoType = {
  firstName: string
  lastName: string
  image?: ImageType
  info?: React.ReactNode
}

export interface AvatarProps {
  size?: keyof typeof avatarSizes
  isCircle?: boolean
  user: UserInfoType
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const avatarSizes = {
  xs: `text-xs h-8 w-8`,
  sm: `text-base h-16 w-16`,
  md: `text-lg h-24 w-24`,
  lg: `text-2xl h-32 w-32`,
  xl: `text-4xl h-40 w-40`,
  '2xl': `text-6xl h-48 w-48`,
  '4xl': 'text-7xl h-56 w-56',
}

const styles = {
  core: `not-prose inline-block bg-cu-black-100 text-cu-black-800 overflow-hidden focus:ring-2 focus:ring-cu-black-100 focus:ring-offset-2`,
  noImage: `flex items-center justify-center font-semibold`,
}

export const Avatar = ({ size = 'xl', isCircle = false, user, onClick }: AvatarProps) => {
  const { firstName, lastName, image } = user

  let initials
  if (firstName && lastName) {
    initials = `${firstName.split('')[0]}${lastName.split('')[0]}`
  } else {
    if (firstName) {
      initials = `${firstName.split('')[0]}`
    } else {
      if (lastName) {
        initials = `${lastName.split('')[0]}`
      } else {
        initials = 'CU'
      }
    }
  }

  const roundedStyle = isCircle ? 'rounded-full' : 'rounded-md'
  const hasOnClick = onClick ? 'cursor-pointer' : ''

  return (
    <>
      {image && (
        <img
          className={`${styles.core} ${avatarSizes[size]} ${roundedStyle} ${hasOnClick}`}
          src={image.src}
          alt={image.alt || `Avatar of ${firstName} ${lastName}`}
          aria-hidden="true"
        />
      )}

      {!image && (
        <div className={`${styles.core} ${styles['noImage']} ${avatarSizes[size]} ${roundedStyle} ${hasOnClick}`}>
          {initials}
        </div>
      )}
    </>
  )
}
