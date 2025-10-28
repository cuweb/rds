export interface ListingHeaderProps {
  title: string
  as?: 'h2' | 'h3'
  date?: string | Date
  datePrefix?: string
  readTime?: string
  datePosition?: 'top' | 'bottom'
}

export const ListingHeader = ({
  title = 'No title available',
  as = 'h2',
  date,
  datePrefix,
  readTime,
  datePosition = 'top',
}: ListingHeaderProps) => {
  const HeaderComponent = as
  const formattedDate = date
    ? new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      })
    : null

  return (
    <header>
      {((date && datePosition === 'top') || readTime) && (
        <div className="flex flex-row gap-1 w-full mb-4">
          <time className="block mb-2 italic text-sm text-cu-black-600 @sm:md:text-base">
            {datePrefix && `${datePrefix} `}
            {formattedDate}
          </time>
          {readTime && (
            <p className="border-l border-cu-black-200 ml-2 pl-3 mb-2 flex flex-row items-center italic text-sm text-cu-black-600 dark:text-white @sm:md:text-base">
              {readTime} min read
            </p>
          )}
        </div>
      )}

      <HeaderComponent className="line-clamp-3 text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8">
        {title}
      </HeaderComponent>

      {date && datePosition === 'bottom' && (
        <time className="block mt-2 italic text-sm text-cu-black-600 @sm:md:text-base">
          {datePrefix && `${datePrefix} `}
          {formattedDate}
        </time>
      )}
    </header>
  )
}

ListingHeader.displayName = 'Listing.Header'
