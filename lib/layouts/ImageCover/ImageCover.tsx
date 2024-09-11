import React from 'react'
import { maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses
const opacityValues = Array.from({ length: 21 }, (_, index) => 60 + index)

export interface ImageCoverProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  maxWidth?: maxWidthKeys
  image: string
  imageZoom?: number
  opacity?: (typeof opacityValues)[number]
  focalPointX?: string
  focalPointY?: string
}

export const ImageCover = ({
  children,
  as = 'section',
  maxWidth = '5xl',
  image,
  imageZoom = 0,
  opacity = 70,
  focalPointX = '50',
  focalPointY = '50',
}: ImageCoverProps) => {
  const SectionComponent = as
  const childWidth = maxWidth ? `cu-section-${maxWidth}` : ''
  const childPadding = 'pt-4 md:pt-6 lg:pt-8 xl:pt-16 pb-32 md:pb-44 xl:pb-56'

  const imagePath = `https://cdn.carleton.ca/rds/assets/bg-images/${image}.jpg`
  const mainBgImage = {
    backgroundImage: `url(${imagePath})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    transform: `scale(1.${imageZoom})`,
  }

  const overlayBg = {
    backgroundColor: `rgba(255,255,255,0.${opacity})`,
  }

  const bgImgClass =
    'bg-cu-waves-repeating-bottom-red bg-[length:200px] md:bg-[length:300px] xl:bg-[length:400px] bg-repeat-x bg-bottom'

  return (
    <SectionComponent
      className={`cu-section cu-imagecover bg-cover bg-no-repeat cu-no-browsers-edge not-contained`}
      style={mainBgImage}
    >
      <div className={`absolute bottom-0 h-full w-full ${bgImgClass} -mb-1`} />
      <div
        className={`cu-imagecover-content cu-prose cu-prose-dark cu-prose-first-last ${childWidth} ${childPadding} mx-auto`}
        style={overlayBg}
      >
        {children}
      </div>
    </SectionComponent>
  )
}
