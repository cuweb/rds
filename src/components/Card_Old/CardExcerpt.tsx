import { styles } from './Card.Styles'

export interface CardExcerptProps {
  text: string
}

export const CardExcerpt = ({ text }: CardExcerptProps) => {
  return (
    <p className={styles.excerpt}>
      {text.length > 170 ? `${text.substring(0, 170)}...` : text}
      <span className={styles.more}> Read more</span>
    </p>
  )
}

CardExcerpt.displayName = 'Card.Excerpt'
