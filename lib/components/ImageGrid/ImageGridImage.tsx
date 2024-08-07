import { colSpanClasses, rowSpanClasses } from '../../utils/propClasses'
import { useLinkContext } from '../LinkProvider/useLinkContext'

type colSpanKeys = keyof typeof colSpanClasses
type rowSpanKeys = keyof typeof rowSpanClasses

export interface ImageGridImageProps {
  children: React.ReactNode
  colSpan?: colSpanKeys
  rowSpan?: rowSpanKeys
  title?: string
  content?: string
  link?: string
}

export const ImageGridImage = ({
  children,
  colSpan = '1',
  rowSpan = '1',
  title,
  content,
  link,
}: ImageGridImageProps) => {
  const LinkComponent = useLinkContext()

  return (
    <div
      className={`relative not-prose overflow-hidden ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} rounded-lg bg-black`}
    >
      {children}

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
