import React from 'react'
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

export const Figure = ({ children, caption, size = 'full', align = 'none', rounded = 'none' }: FigureProps) => {
  const figureMarginY = align === 'none' ? 'not-prose' : '!mt-8  md:!mt-4'

  return (
    <>
      <figure className={`cu-figure ${figureMarginY} ${figureAlignClasses[align]} ${figureSizeClasses[size]}`}>
        <div
          className={`not-prose overflow-hidden bg-white shadow-lg ${figureSizeClasses[size]} ${borderRadiusClasses[rounded]}`}
        >
          {children}
          {caption && <figcaption className="px-5 py-4 text-base italic text-cu-black-700">{caption}</figcaption>}
        </div>
      </figure>
    </>
  )
}
