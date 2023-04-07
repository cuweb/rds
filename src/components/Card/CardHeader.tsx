import { styles } from './Card.Styles'

export interface CardHeaderProps {
  text: string
}

export const CardHeader = ({ text }: CardHeaderProps) => {
  return <h2 className={styles.header}>{text}</h2>
}

CardHeader.displayName = 'Card.Header'
