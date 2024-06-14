import React from 'react'
import { FigureVideo } from './Figure.Video'

const figureSize = {
  xs: `max-w-[320px]`,
  sm: `max-w-[440px]`,
  md: `max-w-[512px]`,
  lg: `max-w-3xl`,
  full: `max-w-full`,
}

const figureAlign = {
  left: `lg:float-left lg:mr-12 mb-6`,
  right: `lg:float-right ml-0 lg:ml-12 mb-6`,
  center: `mx-auto`,
  none: ``,
}

export interface FigureProps {
  children: React.ReactNode
  caption?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'
  align?: 'left' | 'right' | 'center' | 'none'
  isRound?: boolean
  noMobile?: boolean
}

export const FigureWrapper = ({ children, caption, isRound, noMobile, size = 'full', align = 'none' }: FigureProps) => {
  const roundStyle = isRound ? 'rounded-full' : 'rounded-lg'
  const hideMobile = noMobile ? 'hidden md:block' : 'block'

  return (
    <figure className={`cu-figure cu-component-spacing ${hideMobile}`}>
      <div
        className={`not-prose overflow-hidden bg-white shadow-lg ${roundStyle} ${figureSize[size]} ${figureAlign[align]}`}
      >
        {children}
        {caption && <figcaption className="px-5 py-4 text-base italic text-cu-black-700">{caption}</figcaption>}
      </div>
    </figure>
  )
}

export const Figure = Object.assign(FigureWrapper, {
  Video: FigureVideo,
})

FigureWrapper.displayName = 'Figure'
