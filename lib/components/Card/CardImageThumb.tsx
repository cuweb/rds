export interface CardImageThumbProps {
  children: React.ReactNode
  isSquare?: boolean
}

const styles = {
  imgThumb: `mx-6 mt-6 mb-2 overflow-hidden max-w-[45%] @xl:md:max-w-[25%] rounded-md`,
}

export const CardImageThumb = ({ children, isSquare }: CardImageThumbProps) => {
  const imageStyles = isSquare ? 'aspect-square' : 'aspect-[4/2.7]'

  return <figure className={`${styles.imgThumb} ${imageStyles}`}>{children}</figure>
}

CardImageThumb.displayName = 'Card.ImageThumb'
