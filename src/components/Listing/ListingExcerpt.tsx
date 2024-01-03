export interface ListingExcerptProps {
  text: string
  hasMore?: boolean
}

export const ListingExcerpt = ({ text, hasMore }: ListingExcerptProps) => {
  return (
    <p className="text-base md:text-lg text-cu-black-600">
      {text.length > 170 ? `${text.substring(0, 170)}...` : text}
      {hasMore && <span className="font-semibold"> More</span>}
    </p>
  )
}

ListingExcerpt.displayName = 'Listing.Excerpt'
