export interface ListingFooterProps {
  children: React.ReactNode
}

export const ListingFooter = ({ children }: ListingFooterProps) => {
  return <footer className="pt-5 mt-auto text-white">{children}</footer>
}

ListingFooter.displayName = 'Listing.Footer'
