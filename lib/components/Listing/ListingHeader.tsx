export interface ListingHeaderProps {
  children: React.ReactNode
  as?: 'h2' | 'h3'
  date?: string | Date
}

export const headerStyles = {
  base: ``,
  header: ``,
  date: ``,
}

export const ListingHeader = ({ children, as = 'h2', date }: ListingHeaderProps) => {
  const HeaderComponent = as
  const formatedDate = date
    ? new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      })
    : null

  return (
    <header>
      {date && <time className="block mb-2 italic text-sm text-cu-black-600 @sm:md:text-base">{formatedDate}</time>}
      <HeaderComponent className="text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8">
        {children}
      </HeaderComponent>
    </header>
  )
}

ListingHeader.displayName = 'Listing.Header'
