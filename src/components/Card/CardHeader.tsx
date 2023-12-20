import { styles } from './Card.Styles'

export interface CardHeaderProps {
  text: string
  as?: 'h2' | 'h3'
  hasTitleHover?: boolean
}

export const CardHeader = ({ text, as = 'h2', hasTitleHover = true }: CardHeaderProps) => {
  const HeadingComponent = as
  const titleHover = hasTitleHover ? 'group-hover:text-cu-red-700' : ''
  return <HeadingComponent className={styles.header + ' ' + titleHover}>{text}</HeadingComponent>
}

CardHeader.displayName = 'Card.Header'
