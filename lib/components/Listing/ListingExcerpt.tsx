export interface ListingExcerptProps {
  text?: string
  hasMore?: boolean
}

export const ListingExcerpt = ({ text, hasMore }: ListingExcerptProps) => {
  return (
    <p className="text-base text-cu-black-700">
      {text && text.length > 300 ? `${text.substring(0, 300)}...` : text}
      {hasMore && <span className="font-semibold"> More</span>}
    </p>
  )
}

ListingExcerpt.displayName = 'Listing.Excerpt'
