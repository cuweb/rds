import { styles } from './Listing.Styles'

export interface ListingHeaderProps {
  text: string
}

export const ListingHeader = ({ text }: ListingHeaderProps) => {
  return <h3 className={styles.header}>{text}</h3>
}
