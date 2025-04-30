export interface ListingContentProps {
  children: React.ReactNode
}

export const ListingContent = ({ children }: ListingContentProps) => {
  return <p className="text-base text-cu-black-700">{children}</p>
}

ListingContent.displayName = 'Listing.Content'
