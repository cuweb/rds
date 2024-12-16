import { colSpanClasses, rowSpanClasses, aspectRatioClasses } from '../../utils/propClasses'
import { useLinkContext } from '../LinkProvider/useLinkContext'

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
  const LinkComponent = useLinkContext()
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  const imageOrder = colSpan === '2' ? 'order-none' : 'md:order-1 lg:order-none'

  return (
    <div
      className={`relative ${aspectRatioClasses[aspectRatio]} bg-cover bg-center ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${imageOrder} rounded-lg bg-black`}
      style={inlineImageStyles}
    >
      {(title || content) && (
        <div
          className={`bg-black/75 text-white absolute bottom-2 left-2 right-2 px-4 py-2.5 rounded-md ${link ? 'hover:bg-cu-red/85' : ''}`}
        >
          {link ? (
            <LinkComponent href={link} className="cursor-pointer block hover-bg-cu-red">
              <p className="text-sm md:text-base font-semibold line-clamp-2">
                {title && title ? title : 'Please add a title'}
              </p>
              {content && <p className="text-sm font-light pt-0.5 line-clamp-2">{content}</p>}
            </LinkComponent>
          ) : (
            <>
              <p className="text-sm md:text-base font-semibold line-clamp-2">
                {title && title ? title : 'Please add a title'}
              </p>
              {content && <p className="text-sm font-light pt-0.5 line-clamp-2">{content}</p>}
            </>
          )}
        </div>
      )}
    </div>
  )
}

ImageGridImage.displayName = 'ImageGrid.Image'
