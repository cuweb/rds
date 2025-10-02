import React from 'react'

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
  focalPointX?: number
  focalPointY?: number
  hasMobileImage?: boolean
}

const styles = {
  underline: `relative mb-6 after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red after:left-px pb-6`,
  media: `relative flex-1 w-full h-full bg-no-repeat bg-cover min-h-[360px] lg:min-h-[220px]`,
}

export const TextImageContent = ({
  children,
  title,
  headerType = 'h2',
  isCenter,
  imageUrl,
  contentWidth = 50,
  imageZoom = 0,
  focalPointX = 50,
  focalPointY = 50,
  hasMobileImage,
}: TextImageContentProps & TextImageMediaProps) => {
  const contentPadding = imageUrl ? 'md:mb-4' : ''
  const verticallyCenter = isCenter ? 'justify-center' : ''

  // Image options
  let hasImage
  let noImageOnMobile
  let inlineContentStyles
  let inlineImageStyles

  if (imageUrl) {
    hasImage = styles.media || ''
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

  return (
    <>
      <div
        className={`flex-[0_0_100%] md:max-w-4xl md:flex-1 cu-textimage-content md:pt-4 ${contentPadding} ${verticallyCenter}`}
        style={inlineContentStyles}
      >
        {title && headerType === 'h1' && (
          <h1 className={`font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] ${styles.underline}`}>
            {title}
          </h1>
        )}
        {title && headerType === 'h2' && (
          <h2 className={`font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] ${styles.underline}`}>
            {title}
          </h2>
        )}

        {children}
      </div>

      {imageUrl && (
        <div className={`relative flex-1 overflow-hidden rounded ${noImageOnMobile}`}>
          <div className={styles.media} style={inlineImageStyles}></div>
        </div>
      )}
    </>
  )
}

TextImageContent.displayName = 'TextImage.Content'
