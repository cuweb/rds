import React from 'react'
import { FigureVideo } from './Figure.Video'
import { figureSizeClasses, figureAlignClasses } from '../../utils/propClasses'

type figureSizeKeys = keyof typeof figureSizeClasses
type figureAlignKeys = keyof typeof figureAlignClasses

export interface FigureProps {
  children: React.ReactNode
  caption?: string
  size?: figureSizeKeys
  align?: figureAlignKeys
  isRound?: boolean
  noMobile?: boolean
}

export const FigureWrapper = ({ children, caption, isRound, noMobile, size = 'full', align = 'none' }: FigureProps) => {
  const roundStyle = isRound ? 'rounded-full' : 'rounded-lg'
  const hideMobile = noMobile ? 'hidden md:block' : 'block'

  return (
    <figure className={`cu-figure cu-component ${hideMobile}`}>
      <div
        className={`not-prose overflow-hidden bg-white shadow-lg ${roundStyle} ${figureSizeClasses[size]} ${figureAlignClasses[align]}`}
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
