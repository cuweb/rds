import React from 'react'
import { maxWidthClasses } from '../../utils/propClasses'

type maxWidthKeys = keyof typeof maxWidthClasses
const opacityValues = Array.from({ length: 21 }, (_, index) => 60 + index)

export interface ImageCoverProps {
  children?: React.ReactNode
  maxWidth?: maxWidthKeys
  image?: string
  imageZoom?: number
  opacity?: (typeof opacityValues)[number]
  focalPointX?: string
  focalPointY?: string
}

export const ImageCover = ({
  children,
  image = 'nicol',
  imageZoom = 0,
  opacity = 90,
  focalPointX = '50',
  focalPointY = '50',
}: ImageCoverProps) => {
  if (!opacityValues.includes(opacity)) {
    console.warn(`Invalid opacity value: ${opacity}. It should be one of ${opacityValues.join(', ')}.`)
  }

  const mainBgImage = {
    backgroundImage: `url(https://cdn.carleton.ca/rds/assets/bg-images/${image}.jpg)`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    transform: `scale(1.${imageZoom})`,
  }

  const overlayBg = {
    backgroundColor: `rgba(255,255,255,0.${opacity})`,
  }

  const bgImgClass =
    'bg-cu-waves-repeating-bottom-red bg-[length:200px] md:bg-[length:300px] xl:bg-[length:400px] bg-repeat-x bg-bottom'

  // TODO GLOBAL: break out of main width
  const $breakoutMaxWidth = `w-screen ml-offset-center`

  // TODO GLOBAL:
  // const $primarySpacing = `px-4 md:px-6 lg:px-12`
  const $primarySpacing = `px-6 md:px-8 lg:px-14`

  return (
    <section className={`cu-imagecover relative ${$breakoutMaxWidth} bg-no-repeat bg-cover`} style={mainBgImage}>
      <div className={`absolute right-0 bottom-0 left-0 h-full w-full -mb-1 ${bgImgClass}`} />

      <div
        className={`cu-max-w-child-5xl ${$primarySpacing} pt-4 md:pt-6 lg:pt-8 xl:pt-16 pb-32 md:pb-44 xl:pb-52`}
        style={overlayBg}
      >
        <div className={`cu-imagecover-content relative z-20 cu-prose-first-last`}>{children}</div>
      </div>
    </section>
  )
}
