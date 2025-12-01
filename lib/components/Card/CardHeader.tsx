export interface CardHeaderProps {
  title: string
  as?: 'h2' | 'h3'
  date?: string | Date
  datePrefix?: string
  readTime?: string
  datePosition?: 'top' | 'bottom'
}

export const CardHeader = ({
  title = 'No title available',
  as = 'h2',
  date,
  datePrefix,
  readTime,
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
      {((date && datePosition === 'top') || readTime) && (
        <div className="flex flex-row gap-1 w-full mb-4">
          {date && (
            <time className="flex flex-row items-center italic text-sm text-cu-black-600 dark:text-white @sm:md:text-base">
              {datePrefix && `${datePrefix} `}
              {formattedDate}
            </time>
          )}
          {readTime && (
            <p
              className={`${date ? 'border-l border-cu-black-200 ml-2 pl-3' : ''} flex flex-row items-center italic text-sm text-cu-black-600 dark:text-white @sm:md:text-base`}
            >
              {readTime} min read
            </p>
          )}
        </div>
      )}

      <HeaderComponent className="line-clamp-3 text-lg font-semibold text-cu-black  dark:text-white @sm:md:text-xl leading-6 @sm:md:leading-8">
        {title}
      </HeaderComponent>

      {date && datePosition === 'bottom' && (
        <time className="block mt-2 italic text-sm text-cu-black-600  dark:text-white @sm:md:text-base">
          {datePrefix && `${datePrefix} `}
          {formattedDate}
        </time>
      )}
    </header>
  )
}

CardHeader.displayName = 'Card.Header'
