import React from 'react'
import { styles } from './Listing.Styles'
// import { CardFigure } from './CardFigure'
// import { CardVideo } from './CardVideo'
// import { CardContent } from './CardContent'
// import { CardDateBox } from './CardDateBox'
// import { CardHeader } from './CardHeader'
// import { CardExcerpt } from './CardExcerpt'
// import { CardBadges } from './CardBadges'
// import { CardPostMeta } from './CardPostMeta'
// import { CardEventMeta } from './CardEventMeta'
// import { CardPeopleMeta } from './CardPeopleMeta'

export interface ListingProps {
  children: React.ReactNode
}

export const ListingWrapper = ({ children }: ListingProps) => {
  return <div className={styles.card}>{children}</div>
}

export const Listing = Object.assign(ListingWrapper, {
  //   Figure: CardFigure,
  //   Video: CardVideo,
  //   Content: CardContent,
  //   DateBox: CardDateBox,
  //   Header: CardHeader,
  //   Excerpt: CardExcerpt,
  //   Badges: CardBadges,
  //   PostMeta: CardPostMeta,
  //   EventMeta: CardEventMeta,
  //   PeopleMeta: CardPeopleMeta,
})
