import React from 'react'
import { mediaStyles } from './HeroTextImage.Styles'

export interface HeroTextImageMediaProps {
  children?: React.ReactNode
  image?: string
  imageWidth?: '25' | '33' | '40' | '50'
  angle?: 'left' | 'right' | 'full'
  focalPointX?: string
  focalPointY?: string
}

export const rdsImageWidth = {
  25: 'md:w-3/12',
  33: 'md:w-4/12',
  40: 'md:w-5/12',
  50: 'md:w-6/12',
}

export const HeroTextImageMedia = ({
  children,
  image,
  imageWidth = '40',
  angle,
  focalPointX = '50',
  focalPointY = '50',
}: HeroTextImageMediaProps) => {
  const hasImage = image ? mediaStyles.mediaBgImage : ''
  const hasAngle =
    angle === 'right' ? mediaStyles.svgRight : mediaStyles.svgLeft
  const inlineStyle = hasImage
    ? {
        backgroundImage: `url(${image})`,
        backgroundPosition: `${focalPointX}% ${focalPointY}%`,
      }
    : {}

  return (
    <div
      className={`${mediaStyles.mediaWrapper} ${rdsImageWidth[imageWidth]} ${hasImage}`}
      style={inlineStyle}
    >
      {angle === 'full' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={mediaStyles.svgRight}
          fill="none"
          viewBox="0 0 123 440"
        >
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )}
      {angle && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={hasAngle}
          fill="none"
          viewBox="0 0 123 440"
        >
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )}
      {children}
    </div>
  )
}

HeroTextImageMedia.displayName = 'HeroTextImage.Media'
