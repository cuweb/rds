import { useLinkContext } from '../LinkProvider/useLinkContext'

export interface ImageCaptionOverlayProps {
  title?: string
  content?: string
  link?: string
}

export const ImageCaptionOverlay = ({ title, content, link }: ImageCaptionOverlayProps) => {
  const LinkComponent = useLinkContext()

  return (
    <div
      className={`not-prose bg-black/75 text-white absolute bottom-0 left-0 right-0 px-4 py-2.5 ${link ? 'hover:bg-cu-red' : ''}`}
    >
      {link ? (
        <LinkComponent href={link} className="cursor-pointer block hover-bg-cu-red">
          <p className="text-sm font-semibold line-clamp-2">{title && title ? title : 'Please add a title'}</p>
          {content && <p className="text-sm font-light pt-0.5 line-clamp-2">{content}</p>}
        </LinkComponent>
      ) : (
        <>
          <p className="text-sm font-semibold line-clamp-2">{title && title ? title : 'Please add a title'}</p>
          {content && <p className="text-sm font-light pt-0.5 line-clamp-2">{content}</p>}
        </>
      )}
    </div>
  )
}
