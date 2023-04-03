import React from 'react'
import { styles } from './Card.Styles'
import { CardFigure } from './CardFigure'
import { CardVideo } from './CardVideo'
import { CardContent } from './CardContent'
import { CardDateBox } from './CardDateBox'
import { CardHeader } from './CardHeader'
import { CardExcerpt } from './CardExcerpt'
import { CardBadges } from './CardBadges'
import { CardPostMeta } from './CardPostMeta'
import { CardEventMeta } from './CardEventMeta'
import { CardPeopleMeta } from './CardPeopleMeta'

export interface CardProps {
  children: React.ReactNode
  isCenter?: boolean
}

export const CardWrapper = ({ children, isCenter }: CardProps) => {
  const centerText = isCenter ? 'text-center' : ''
  return <div className={`${styles.card} ${centerText}`}>{children}</div>
}

export const Card = Object.assign(CardWrapper, {
  Figure: CardFigure,
  Video: CardVideo,
  Content: CardContent,
  DateBox: CardDateBox,
  Header: CardHeader,
  Excerpt: CardExcerpt,
  Badges: CardBadges,
  PostMeta: CardPostMeta,
  EventMeta: CardEventMeta,
  PeopleMeta: CardPeopleMeta,
})
