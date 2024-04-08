export interface CardHeaderProps {
  title: string
  as?: 'h2' | 'h3'
  date?: string | Date
  datePrefix?: string
  datePosition?: 'top' | 'bottom'
}

export const CardHeader = ({
  title = 'No title available',
  as = 'h2',
  date,
  datePrefix,
  datePosition = 'top',
}: CardHeaderProps) => {
  const HeaderComponent = as
  const formattedDate = date
    ? new Date(date).toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      })
    : null

  return (
    <header className="px-6 first:mt-6">
      {date && datePosition === 'top' && (
        <time className="block mb-2 italic text-sm text-cu-black-600 @sm:md:text-base">
          {datePrefix && `${datePrefix} `}
          {formattedDate}
        </time>
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

CardHeader.displayName = 'Card.Header'
