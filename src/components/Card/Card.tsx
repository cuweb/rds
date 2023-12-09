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
import { CardInitials } from './CardInitials'
import { CardStats } from './CardStats'

export interface CardProps {
  children: React.ReactNode
  isCenter?: boolean
  noLink?: boolean
  hasShadow?: boolean
  hasShadowHover?: boolean
  isGrey?: boolean
  hasRedBorder?: boolean
}

export const CardWrapper = ({
  children,
  isCenter,
  noLink,
  hasShadow,
  hasShadowHover,
  hasRedBorder,
  isGrey,
}: CardProps) => {
  const bgStyles = isGrey ? styles.greyBg : styles.whiteBg
  const centerText = isCenter ? 'text-center' : ''
  const addShadow = hasShadow && !noLink ? `${styles.shadow} ${styles.shadowHover}` : styles.shadow
  const addShadowHover = hasShadowHover && !noLink ? styles.shadowHover : ''
  const addRedBorder = hasRedBorder ? styles.redBorder : ''
  const noLinkStyles = noLink ? '' : styles.link

  return (
    <div
      className={`cu-card ${styles.card} ${addRedBorder} ${addShadow} ${addShadowHover} ${centerText} ${noLinkStyles} ${bgStyles}`}
    >
      {children}
    </div>
  )
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
  Initials: CardInitials,
  Stats: CardStats,
})
