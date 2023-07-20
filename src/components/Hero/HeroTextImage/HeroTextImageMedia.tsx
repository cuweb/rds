import React from 'react'
import { mediaStyles } from './HeroTextImage.Styles'

export interface HeroTextImageMediaProps {
  children?: React.ReactNode
  image?: string
  angle?: 'left' | 'dual' | 'none'
  focalPointX?: string
  focalPointY?: string
  hasMobileImage?: boolean
}

export const HeroTextImageMedia = ({
  children,
  image,
  angle,
  focalPointX = '50',
  focalPointY = '50',
  hasMobileImage,
}: HeroTextImageMediaProps) => {
  let leftSvg = null
  let rightSvg = null

  switch (angle) {
    case 'left':
      leftSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" className={mediaStyles.svgLeft} fill="none" viewBox="0 0 123 440">
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )
      break
    case 'dual':
      leftSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" className={mediaStyles.svgLeft} fill="none" viewBox="0 0 123 440">
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )
      rightSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" className={mediaStyles.svgRight} fill="none" viewBox="0 0 123 440">
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )
      break
    default:
      break
  }

  const hasImage = image ? mediaStyles.mediaBgImage : ''
  const noImageOnMobile = hasMobileImage ? '' : 'hidden md:block'
  const inlineStyle = hasImage
    ? {
        backgroundImage: `url(${image})`,
        backgroundPosition: `${focalPointX}% ${focalPointY}%`,
      }
    : {}

  return (
    <div className={`${mediaStyles.mediaWrapper} ${hasImage} ${noImageOnMobile}`} style={inlineStyle}>
      {leftSvg}
      {rightSvg}
      {children}
    </div>
  )
}

HeroTextImageMedia.displayName = 'HeroTextImage.Media'
