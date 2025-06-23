export interface CardExcerptProps {
  text?: string
  hasMore?: boolean
  truncateOnMobile?: boolean
}

export const CardExcerpt = ({ text, hasMore, truncateOnMobile }: CardExcerptProps) => {
  return (
    <p
      className={`text-base text-cu-black-700 dark:text-white ${truncateOnMobile ? 'line-clamp-1 md:line-clamp-none' : ''}`}
    >
      {text && text.length > 170 ? `${text.substring(0, 150)}...` : text}
      {hasMore && <span className="font-semibold"> More</span>}
    </p>
  )
}

CardExcerpt.displayName = 'Card.Excerpt'
