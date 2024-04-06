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

const cardStyles = {
  shadow: `shadow-lg shadow-cu-black-100`,
  shadowHover: `hover:shadow-lg hover:shadow-cu-black-200`,
  center: `text-center`,
  border: `border-l-8 border-l-cu-red`,
  zoom: `group duration-300 ease-in hover:scale-[1.04]`,
}

export const CardWrapper = ({ children, isCenter, noHover, leftBorder }: CardProps) => {
  const addRedBorder = leftBorder ? cardStyles.border : ''
  const centerText = isCenter ? cardStyles.center : ''
  const hoverStyles = noHover ? '' : `${cardStyles.shadowHover} ${cardStyles.zoom}`

  return (
    <div
      className={`not-prose cu-card rounded-lg @container md:max-w-lg flex flex-col gap-3 bg-white ${centerText} ${addRedBorder} ${cardStyles.shadow} ${hoverStyles}`}
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
