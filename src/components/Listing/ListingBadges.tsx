import { Badge } from '../Badge/Badge'
import { styles } from './Listing.Styles'

export interface ListingBadgesProps {
  tags?: Tags
}

interface Tags {
  category: {
    id: number
    name: string
    slug: string
  }[]
}

export const ListingBadges = ({ tags }: ListingBadgesProps) => {
  return (
    <div className={styles.badges}>
      {tags?.category?.map((tag) => (
        <Badge key={tag.id}>{tag.name}</Badge>
      ))}
    </div>
  )
}

ListingBadges.displayName = 'Listing.Badges'
