import { rdsColSpan, rdsRowSpan } from '../../utils/optionClasses'
import { useLinkContext } from '../LinkProvider/useLinkContext'

type colSpanKeys = keyof typeof rdsColSpan
type rowSpanKeys = keyof typeof rdsRowSpan

export interface ImageGridItemProps {
  children: React.ReactNode
  colSpan?: colSpanKeys
  rowSpan?: rowSpanKeys
  title?: string
  content?: string
  link?: string
}

export const ImageGridItem = ({ children, colSpan = '1', rowSpan = '1', title, content, link }: ImageGridItemProps) => {
  const LinkComponent = useLinkContext()

  return (
    <div
      className={`relative overflow-hidden ${rdsColSpan[colSpan]} ${rdsRowSpan[rowSpan]} rounded-lg bg-cu-black-200`}
    >
      {children}

      {(title || content) && (
        <div className="bg-cu-black-900/80 text-white absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-md line-clamp-2">
          {link ? (
            <LinkComponent href={link} className="cursor-pointer block">
              {title && title}
              {content && content}
            </LinkComponent>
          ) : (
            <>
              {title && title}
              {content && content}
            </>
          )}
        </div>
      )}
    </div>
  )
}
