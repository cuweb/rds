import React from 'react'
import { CardBody } from './CardBody'
import { CardDateThumb } from './CardDateThumb'
import { CardExcerpt } from './CardExcerpt'
import { CardEventMeta } from './CardEventMeta'
import { CardFigure } from './CardFigure'
import { CardFooter } from './CardFooter'
import { CardHeader } from './CardHeader'
import { CardIconThumb } from './CardIconThumb'
import { CardPeopleMeta } from './CardPeopleMeta'
import { CardStats } from './CardStats'
import { CardVideo } from './CardVideo'

export interface CardProps {
  children: React.ReactNode
  isCenter?: boolean
  noLink?: boolean
  hasShadow?: 'onCard' | 'onHover'
  isGrey?: boolean
  hasRedBorder?: boolean
}

const cardStyles = {
  card: ``,
  whiteBg: `bg-white`,
  greyBg: `bg-cu-black-25`,
  shadow: `shadow-md shadow-cu-black-100`,
  shadowHover: `hover:shadow-lg hover:shadow-cu-black-200`,
  center: `text-center`,
  redBorder: `border-l-8 border-l-cu-red`,
  zoom: `group duration-300 ease-in hover:scale-[1.04]`,
}

export const CardWrapper = ({ children, isCenter, noLink, hasShadow, hasRedBorder, isGrey }: CardProps) => {
  const bgStyles = isGrey ? cardStyles.greyBg : cardStyles.whiteBg
  const addShadow =
    hasShadow === 'onCard'
      ? `${cardStyles.shadow} ${!noLink ? cardStyles.shadowHover : ''}`
      : hasShadow === 'onHover' && !noLink
        ? cardStyles.shadowHover
        : ''
  const addRedBorder = hasRedBorder ? cardStyles.redBorder : ''
  const centerText = isCenter ? cardStyles.center : ''
  const noLinkStyles = noLink ? '' : cardStyles.zoom

  return (
    <div
      className={`not-prose cu-card rounded-lg @container md:max-w-lg flex flex-col gap-3 ${addRedBorder} ${addShadow} ${centerText} ${noLinkStyles} ${bgStyles}`}
    >
      {children}
    </div>
  )
}

export const Card = Object.assign(CardWrapper, {
  Figure: CardFigure,
  DateThumb: CardDateThumb,
  IconThumb: CardIconThumb,
  Video: CardVideo,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Excerpt: CardExcerpt,
  EventMeta: CardEventMeta,
  PeopleMeta: CardPeopleMeta,
  Stats: CardStats,
})
