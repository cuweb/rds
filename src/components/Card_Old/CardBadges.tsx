import { Badge } from '../Badge/Badge'
import { styles } from './Card.Styles'

export interface CardBadgesProps {
  tags?: Tags
}

interface Tags {
  category: {
    id: number
    name: string
    slug: string
  }[]
}

export const CardBadges = ({ tags }: CardBadgesProps) => {
  return <div className={styles.badges}>{tags?.category?.map((tag) => <Badge key={tag.id}>{tag.name}</Badge>)}</div>
}

CardBadges.displayName = 'Card.Badges'
