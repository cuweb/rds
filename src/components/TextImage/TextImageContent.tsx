import React from 'react'
import { styles, mediaStyles } from './TextImage.Styles'
import { proseGroups } from '../../utils/globalClasses'

export interface TextImageContentProps {
  children?: React.ReactNode
  title?: string
  headerType?: 'h1' | 'h2'
  isCenter?: boolean
}

export interface TextImageMediaProps {
  imageUrl?: string
  contentWidth?: number
  imageZoom?: number
  angle?: 'left' | 'dual' | 'none'
  focalPointX?: string
  focalPointY?: string
  hasMobileImage?: boolean
}

export const TextImageContent = ({
  children,
  title,
  headerType = 'h2',
  isCenter,
  imageUrl,
  contentWidth = 50,
  imageZoom = 0,
  angle,
  focalPointX = '50',
  focalPointY = '50',
  hasMobileImage,
}: TextImageContentProps & TextImageMediaProps) => {
  // Spacing and alignment
  const contentPadding = imageUrl ? 'md:py-4' : ''
  const verticallyCenter = isCenter ? 'justify-center' : ''

  // Image options
  let hasImage
  let noImageOnMobile
  let inlineContentStyles
  let inlineImageStyles

  if (imageUrl) {
    hasImage = mediaStyles.mediaBgImage || ''
    noImageOnMobile = hasMobileImage ? '' : 'hidden md:block'

    if (hasImage) {
      inlineContentStyles = {
        flex: `0 0 ${contentWidth}%`,
      }

      inlineImageStyles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${focalPointX}% ${focalPointY}%`,
        transform: `scale(1.${imageZoom})`,
      }
    }
  }

  // Image angle
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

  return (
    <>
      <div
        className={`${styles.contentWrapper} ${contentPadding} ${verticallyCenter} ${proseGroups.text} ${
          headerType === 'h1' ? 'text-[26px] sm:leading-10 font-light text-cu-black-700' : ''
        }`}
        style={inlineContentStyles}
      >
        {title && headerType === 'h1' && <h1 className={`${styles.headerOne} ${styles.underline}`}>{title}</h1>}
        {title && headerType === 'h2' && <h2 className={`${styles.headerTwo} ${styles.underline}`}>{title}</h2>}
        {children}
      </div>

      {imageUrl && (
        <div className={`relative flex-1 overflow-hidden rounded ${noImageOnMobile}`}>
          <div
            // className={`${mediaStyles.mediaWrapper} ${hasImage} ${noImageOnMobile}`}
            className="flex-1 w-full h-full bg-no-repeat bg-cover rounded"
            style={inlineImageStyles}
          >
            {leftSvg}
            {rightSvg}
          </div>
        </div>
      )}
    </>
  )
}

TextImageContent.displayName = 'TextImage.Content'
