import React from 'react'
import { FigureVideo } from './Figure.Video'
import { figureSizeClasses, figureAlignClasses, borderRadiusClasses } from '../../utils/propClasses'

type figureSizeKeys = keyof typeof figureSizeClasses
type figureAlignKeys = keyof typeof figureAlignClasses
type borderRadiusKeys = keyof typeof borderRadiusClasses

export interface FigureProps {
  children: React.ReactNode
  caption?: string
  size?: figureSizeKeys
  align?: figureAlignKeys
  rounded?: borderRadiusKeys
  noMobile?: boolean
}

export const FigureWrapper = ({
  children,
  caption,
  noMobile,
  size = 'full',
  align = 'none',
  rounded = 'none',
}: FigureProps) => {
  const hideMobile = noMobile ? 'hidden md:block' : 'block'

  return (
    <figure className={`cu-figure cu-component ${hideMobile}`}>
      <div
        className={`not-prose overflow-hidden bg-white shadow-lg ${figureSizeClasses[size]} ${borderRadiusClasses[rounded]} ${figureAlignClasses[align]}`}
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
