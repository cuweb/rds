export interface CardExcerptProps {
  text: string
  hasMore?: boolean
}

export const CardExcerpt = ({ text, hasMore }: CardExcerptProps) => {
  return (
    <p className="text-base text-cu-black-700">
      {text.length > 170 ? `${text.substring(0, 170)}...` : text}
      {hasMore && <span className="font-semibold"> More</span>}
    </p>
  )
}

CardExcerpt.displayName = 'Card.Excerpt'
