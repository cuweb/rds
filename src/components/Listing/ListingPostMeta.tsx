import { metaStyles } from './Listing.Styles'

export interface ListingPostMetaProps {
  date?: string | Date
}

export const ListingPostMeta = ({ date }: ListingPostMetaProps) => {
  const formatedDate = date
    ? new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      })
    : null

  return <time className={`${metaStyles.item} ${metaStyles.italic}`}>{formatedDate}</time>
}

ListingPostMeta.displayName = 'Listing.PostMeta'
