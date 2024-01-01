import { figureStyles } from './Card.Styles'

export interface CardImageThumbProps {
  children: React.ReactNode
}

export const CardImageThumb = ({ children }: CardImageThumbProps) => {
  return <figure className={figureStyles.imgThumb}>{children}</figure>
}

CardImageThumb.displayName = 'Card.ImageThumb'
