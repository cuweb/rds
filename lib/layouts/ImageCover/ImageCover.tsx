import React from 'react'
import { maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses

export interface ImageCoverProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  maxWidth?: maxWidthKeys
  image: string
  imageZoom?: number
  focalPointX?: string
  focalPointY?: string
}

export const ImageCover = ({
  children,
  as = 'section',
  maxWidth = '5xl',
  image,
  imageZoom = 0,
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

  // const bgImgClass =
  //   'bg-[url("https://cu-production.s3.amazonaws.com/rds/assets/graphics/cu-waves-repeating-bottom-red.svg")] bg-[length:200px] md:bg-[length:300px] xl:bg-[length:400px] bg-repeat-x bg-bottom'

  const bgImgClassNew =
    'bg-[url("https://cu-production.s3.amazonaws.com/rds/assets/graphics/cu-waves-repeating-bottom-red.svg")] bg-repeat-x bg-bottom'

  // const bgImgClass =
  //   'bg-cu-waves-repeating-bottom-red bg-[length:200px] md:bg-[length:300px] xl:bg-[length:400px] bg-repeat-x bg-bottom'

  return (
    <SectionComponent
      className={`cu-imagecover relative  bg-cover bg-no-repeat cu-no-browsers-edge not-contained`}
      style={mainBgImage}
    >
      {/* <div className={`absolute top-0 bottom-0 z-10 w-full h-full bg-orange`} /> */}

      <div
        className={`cu-imagecover-content cu-prose cu-prose-dark cu-prose-first-last relative ${childWidth} ${childPadding} mx-auto z-30 bg-white/80 ${bgImgClassNew}`}
      >
        {children}
      </div>

      {/* <div className="absolute z-10 w-full h-full bg-white/85 bg-cu-waves-repeating-bottom-red bg-[length:200px] md:bg-[length:300px] xl:bg-[length:400px] bg-repeat-x bg-bottom" /> */}
      {/* <div className="absolute z-10 top-0 left-0 w-full h-full bg-white/85 bg-cu-waves-repeating-bottom-red bg-[length:195px] md:bg-[length:319px] lg:bg-[length:402px] bg-repeat-x bg-bottom" /> */}
    </SectionComponent>
  )
}
