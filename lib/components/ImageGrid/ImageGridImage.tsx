import { colSpanClasses, rowSpanClasses, aspectRatioClasses } from '../../utils/propClasses'
import { ImageCaptionOverlay } from '../ImageCaptionOverlay/ImageCaptionOverlay'

type colSpanKeys = keyof typeof colSpanClasses
type rowSpanKeys = keyof typeof rowSpanClasses
type aspectRatioKeys = keyof typeof aspectRatioClasses

export interface ImageGridImageProps {
  imageUrl: string
  focalPointX?: number
  focalPointY?: number
  colSpan?: colSpanKeys
  rowSpan?: rowSpanKeys
  title?: string
  content?: string
  link?: string
  aspectRatio?: aspectRatioKeys
}

export const ImageGridImage = ({
  imageUrl,
  focalPointX = 50,
  focalPointY = 50,
  colSpan = '1',
  rowSpan = '1',
  title,
  content,
  link,
  aspectRatio = 'landscape',
}: ImageGridImageProps) => {
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  const imageOrder = colSpan === '2' ? 'order-none' : 'md:order-1 lg:order-none'

  return (
    <div
      className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]} bg-cover bg-center ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${imageOrder} rounded-lg bg-black`}
      style={inlineImageStyles}
    >
      {(title || content) && <ImageCaptionOverlay title={title} content={content} link={link} />}
    </div>
  )
}

ImageGridImage.displayName = 'ImageGrid.Image'
