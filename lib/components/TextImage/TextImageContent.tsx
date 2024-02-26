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
  flipX?: boolean
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
  flipX,
  focalPointX = '50',
  focalPointY = '50',
  hasMobileImage,
}: TextImageContentProps & TextImageMediaProps) => {
  // Spacing and alignment
  const contentPadding = imageUrl ? 'md:py-4' : ''
  const verticallyCenter = isCenter ? 'justify-center' : ''

  // Header underline
  const hasUnderline = children ? styles.underline : ''

  // Image options
  let hasImage
  let noImageOnMobile
  let inlineContentStyles
  let inlineImageStyles

  if (imageUrl) {
    hasImage = mediaStyles.mediaBgImage || ''
    noImageOnMobile = hasMobileImage ? '' : 'hidden lg:block'

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={flipX ? mediaStyles.svgFlipRight : mediaStyles.svgLeft}
          fill="none"
          viewBox="0 0 123 440"
        >
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )
      break
    case 'dual':
      leftSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={flipX ? mediaStyles.svgFlipRight : mediaStyles.svgLeft}
          fill="none"
          viewBox="0 0 123 440"
        >
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )
      rightSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={flipX ? mediaStyles.svgFlipLeft : mediaStyles.svgRight}
          fill="none"
          viewBox="0 0 123 440"
        >
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
        className={`${styles.contentWrapper} ${contentPadding} ${verticallyCenter} ${
          headerType === 'h1'
            ? `cu-textimage-as-h1 ${proseGroups.largeLight}`
            : `cu-textimage-as-h2 ${proseGroups.text}`
        }`}
        style={inlineContentStyles}
      >
        {title && headerType === 'h1' && <h1 className={`${styles.headerOne} ${hasUnderline}`}>{title}</h1>}
        {title && headerType === 'h2' && <h2 className={`${styles.headerTwo} ${hasUnderline}`}>{title}</h2>}
        {children}
      </div>

      {imageUrl && (
        <div className={`${mediaStyles.mediaWrapper} ${noImageOnMobile}`}>
          <div className={`${mediaStyles.mediaBgImage}`} style={inlineImageStyles}></div>
          {leftSvg}
          {rightSvg}
        </div>
      )}
    </>
  )
}

TextImageContent.displayName = 'TextImage.Content'
