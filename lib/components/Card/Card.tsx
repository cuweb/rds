import React from 'react'
import { CardBody } from './CardBody'
import { CardDateThumb } from './CardDateThumb'
import { CardExcerpt } from './CardExcerpt'
import { CardEventMeta } from './CardEventMeta'
import { CardFigure } from './CardFigure'
import { CardFooter } from './CardFooter'
import { CardHeader } from './CardHeader'
import { CardIconThumb } from './CardIconThumb'
import { CardImageThumb } from './CardImageThumb'
import { CardInitials } from './CardInitials'
import { CardPeopleMeta } from './CardPeopleMeta'
import { CardStats } from './CardStats'
import { CardVideo } from './CardVideo'

export interface CardProps {
  children: React.ReactNode
  isCenter?: boolean
  noHover?: boolean
  leftBorder?: boolean
}

export const CardWrapper = ({ children, isCenter, noHover, leftBorder }: CardProps) => {
  const addRedBorder = leftBorder ? 'border-l-8 border-l-cu-red' : ''
  const centerText = isCenter ? 'text-center' : ''
  const hoverStyles = noHover ? '' : 'group duration-300 ease-in hover:scale-[1.02] hover:shadow-cu-black-200'

  return (
    <div
      className={`not-prose cu-card rounded-lg @container md:max-w-xl flex flex-col gap-3 bg-white shadow-lg shadow-cu-black-100 ${centerText} ${addRedBorder} ${hoverStyles}`}
    >
      {children}
    </div>
  )
}

export const Card = Object.assign(CardWrapper, {
  Figure: CardFigure,
  DateThumb: CardDateThumb,
  IconThumb: CardIconThumb,
  ImageThumb: CardImageThumb,
  Initials: CardInitials,
  Video: CardVideo,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Excerpt: CardExcerpt,
  EventMeta: CardEventMeta,
  PeopleMeta: CardPeopleMeta,
  Stats: CardStats,
})

CardWrapper.displayName = 'Card'
