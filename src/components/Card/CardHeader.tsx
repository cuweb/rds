import { styles } from './Card.Styles'

export interface CardHeaderProps {
  text: string
  hasTitleHover?: boolean
}

export const CardHeader = ({ text, hasTitleHover = true }: CardHeaderProps) => {
  const titleHover = hasTitleHover ? 'group-hover:text-cu-red-700' : ''
  return <h2 className={styles.header + ' ' + titleHover}>{text}</h2>
}

CardHeader.displayName = 'Card.Header'
