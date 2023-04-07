import { styles } from './Listing.Styles'

export interface ListingExcerptProps {
  text: string
}

export const ListingExcerpt = ({ text }: ListingExcerptProps) => {
  return (
    <p className={styles.excerpt}>
      {text.length > 170 ? `${text.substring(0, 170)}...` : text}
      <span className={styles.more}> Read more</span>
    </p>
  )
}

ListingExcerpt.displayName = 'Listing.Excerpt'
