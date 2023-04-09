import { styles } from './Listing.Styles'

export interface ListingHeaderProps {
  text: string
  isSmall?: boolean
}

export const ListingHeader = ({ text, isSmall }: ListingHeaderProps) => {
  const smallHeader = isSmall ? 'isSmall' : 'notSmall'
  return <h3 className={`${styles.header} ${smallHeader}`}>{text}</h3>
}

ListingHeader.displayName = 'Listing.Header'
