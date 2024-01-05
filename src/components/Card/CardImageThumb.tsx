import { figureStyles } from './Card.Styles'

export interface CardImageThumbProps {
  children: React.ReactNode
  isSquare?: boolean
}

export const CardImageThumb = ({ children, isSquare }: CardImageThumbProps) => {
  const imageStyles = isSquare ? 'aspect-square' : 'aspect-[4/2.7]'

  return <figure className={`${figureStyles.imgThumb} ${imageStyles}`}>{children}</figure>
}

CardImageThumb.displayName = 'Card.ImageThumb'
